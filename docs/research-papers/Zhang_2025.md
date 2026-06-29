<div class="csl-bib-body" style="line-height: 2; margin-left: 2em; text-indent:-2em;">
  <div class="csl-entry">Zhang, Y., Feng, J., &amp; Min, B. (2025). Elucidating the selection mechanisms in context-dependent computation through low-rank neural network modeling. <i>eLife</i>, <i>13</i>, RP103636. <a href="https://doi.org/10.7554/eLife.103636">https://doi.org/10.7554/eLife.103636</a></div>
  <span class="Z3988" title="url_ver=Z39.88-2004&amp;ctx_ver=Z39.88-2004&amp;rfr_id=info%3Asid%2Fzotero.org%3A2&amp;rft_id=info%3Adoi%2F10.7554%2FeLife.103636&amp;rft_val_fmt=info%3Aofi%2Ffmt%3Akev%3Amtx%3Ajournal&amp;rft.genre=article&amp;rft.atitle=Elucidating%20the%20selection%20mechanisms%20in%20context-dependent%20computation%20through%20low-rank%20neural%20network%20modeling&amp;rft.jtitle=eLife&amp;rft.volume=13&amp;rft.aufirst=Yiteng&amp;rft.aulast=Zhang&amp;rft.au=Yiteng%20Zhang&amp;rft.au=Jianfeng%20Feng&amp;rft.au=Bin%20Min&amp;rft.date=2025-07-03&amp;rft.pages=RP103636&amp;rft.issn=2050-084X&amp;rft.language=en"></span>
</div>

---
Here is the whole low-rank RNN process in this paper, explained as a model structure you can learn and reproduce.
![Low-Rank RNN pipeline](/assets/research-papers/image-9.png)

## Core idea

The paper uses low-rank RNNs to understand **how a network selects relevant evidence depending on context**. In the task, there are two sensory dimensions: **location** and **frequency**. In the LOC context, the network should accumulate location evidence and ignore frequency; in the FRQ context, it should accumulate frequency evidence and ignore location. The authors focus on two possible mechanisms: **input modulation** and **selection vector modulation**. 

The important decomposition is:

$$
\Delta(I \cdot s)=\Delta I \cdot \bar{s}+\bar{I}\cdot \Delta s
$$

where (I) is the input representation and (s) is the selection vector.
The first term is **input modulation**: the input representation changes across contexts.
The second term is **selection vector modulation**: the selection vector itself changes across contexts. 

## 1. Task structure

The model receives four input channels:

$$
u_1(t), u_2(t), u^{ctx}_1(t), u^{ctx}_2(t)
$$

where (u_1(t)) and (u_2(t)) are sensory inputs, and (u^{ctx}_1(t)), (u^{ctx}_2(t)) are context inputs. The task has a 200 ms fixation period, an 800 ms stimulus period, and a 20 ms decision period. 

For each trial, pulses are sampled from a Poisson process. Each pulse has two features: location and frequency. Location evidence is computed from right versus left pulses; frequency evidence is computed from high- versus low-frequency pulses. In the location context, the target output depends only on location evidence; in the frequency context, it depends only on frequency evidence. 

So computationally, the network must learn:

$$
\text{context 1}: u_1 \rightarrow decision,\quad u_2 \rightarrow ignored
$$

$$
\text{context 2}: u_2 \rightarrow decision,\quad u_1 \rightarrow ignored
$$
![context-dependent decision-making task](/assets/research-papers/image-11.png)
## 2. General RNN equation

The hidden state of neuron (i) follows:

$$
\tau \frac{dx_i(t)}{dt}
=
-x_i(t)
+\sum_j J_{ij}\phi(x_j(t))
+\sum_s I_{si}u_s(t)
+\epsilon_i(t)
$$

where (x_i(t)) is the activation of neuron (i), (\phi) is usually `tanh`, (J) is the recurrent connectivity matrix, (I_s) is the input embedding vector, and (\epsilon_i(t)) is noise. The network output is a linear readout of neural activity:

$$
z(t)=\frac{1}{N}\sum_i w_i\phi(x_i)
$$

The authors set (\tau=100) ms and use Euler discretization with (\Delta t=20) ms. 

## 3. What “low-rank” means

Instead of learning a full (N \times N) recurrent matrix (J), the model constrains (J) to be low-rank:

$$
J=\frac{1}{N}\sum_{r=1}^{R}m_r n_r^T
$$

Each rank component has two vectors:

$$
m_r: \text{output/write vector}
$$

$$
n_r: \text{input-selection/read vector}
$$

A very useful way to think about it is:

$$
J\phi(x)
=
\sum_r m_r \frac{n_r^T\phi(x)}{N}
$$

So (n_r) reads a scalar projection from the current neural activity, and (m_r) writes that scalar back into the network state. The rank (R) controls how many internal pathways the network can use. 

## 4. Rank-1 model: it can solve the task, but only by input modulation

For rank 1:

$$
J=\frac{1}{N}m_{dv}n_{dv}^T
$$

There is only one recurrent pathway. The vector (n_{dv}) selects information, and (m_{dv}) writes it into the decision-variable direction.

The authors trained 100 rank-1 RNNs with (N=512) neurons. Trainable parameters included the sensory input vectors ($I_1,I_2$), context vectors ($I^{ctx}_1,I^{ctx}_2$), recurrent vectors (m_{dv},n_{dv}), and readout vector (w). They used BPTT, Adam, learning rate ($10^{-3}$), batch size 256, 5000 training steps, and L2 regularization. 

The rank-1 model successfully performs the task: in context 1, input 1 affects choice; in context 2, input 2 affects choice. But the selection vector stays almost unchanged across contexts. Instead, the **input representation direction changes across contexts**, so the relevant input becomes aligned with the fixed selection vector. 

So the rank-1 mechanism is:

$$
\text{context changes } I
$$

$$
s \text{ stays fixed}
$$

$$
\Rightarrow \text{input modulation}
$$

This is why the authors conclude that rank 1 is enough to solve the task, but not enough to implement true selection vector modulation.

## 5. Linearized dynamical analysis

After training, the authors “open the black box” by linearizing the RNN around a slow point for each context. They define a gain matrix:

$$
G=\text{diag}(\phi'(x^*))
$$

Then the local dynamics becomes:

$$
\tau \frac{d\Delta r}{dt}
=
M\Delta r+\tilde{I}_1u_1+\tilde{I}_2u_2
$$

$$
M=-E+GJ
$$

$$
\tilde{I}_s=GI_s
$$

The right eigenvector near eigenvalue 0 gives the **line attractor / choice axis**. The left eigenvector gives the **selection vector** (s). This is the vector that decides which input component can be integrated. 

Then they compare across contexts:

$$
\text{input modulation}=\Delta GI \cdot \bar{s}
$$

$$
\text{selection vector modulation}=\overline{GI}\cdot \Delta s
$$

This lets them quantify whether the context changes the input representation or the selection vector. 

## 6. Rank-3 model: pure selection vector modulation

To get selection vector modulation, the authors build a rank-3 model:

$$
J=\frac{1}{N}
\left(
m_{iv1}n_{iv1}^T
+
m_{iv2}n_{iv2}^T
+
m_{dv}n_{dv}^T
\right)
$$

Now the network has:

$$
iv1: \text{intermediate variable for input 1}
$$

$$
iv2: \text{intermediate variable for input 2}
$$

$$
dv: \text{decision variable}
$$

The information flow becomes:

$$
input\ 1 \rightarrow iv1 \rightarrow dv
$$

$$
input\ 2 \rightarrow iv2 \rightarrow dv
$$

The key difference from rank 1 is that the sensory input does not need to go directly into the decision variable. It can first enter an intermediate dimension, and the context can decide whether that intermediate dimension is routed into the accumulator. 

In this rank-3 model, the input representation direction stays almost invariant across contexts, but the selection vector changes across contexts. That is the pure selection vector modulation mechanism. 

## 7. Pathway-based information flow analysis

The authors then rewrite the low-rank RNN as an information-flow graph. Each task variable is a node, and each effective coupling is an edge. For rank 1, there are only three nodes: input 1, input 2, and decision variable. The effective coupling is:

$$
E_{inp_s\rightarrow dv}
=
\langle \tilde{I}_s,n_{dv}\rangle
$$

Because (\tilde{I}_s=GI_s), and the context changes the gain (G), this effective coupling becomes context-dependent. 

For rank 1:

$$
input \rightarrow dv
$$

For rank 3:

$$
input \rightarrow iv \rightarrow dv
$$

In context 1, input 1 flows through (iv1) into (dv); in context 2, input 2 flows through (iv2) into (dv).  

This is the most important conceptual result of the paper: **selection vector modulation requires extra pathways / extra dimensions**.

## 8. General formula for mixed mechanisms

For a more general rank-3-like circuit, the input can reach the decision variable through two routes:

$$
input \rightarrow dv
$$

and

$$
input \rightarrow iv \rightarrow dv
$$

So the total effective coupling is:

$$
E_{total}
=
E_{inp\rightarrow dv}
+E_{inp\rightarrow iv}E_{iv\rightarrow dv}
$$

The authors decompose its context-dependent change as:

$$
\Delta E_{total}
=
(\Delta E_{inp\rightarrow dv}
+\Delta E_{inp\rightarrow iv}\bar{E}_{iv\rightarrow dv})
+(\bar{E}_{inp\rightarrow iv}\Delta E_{iv\rightarrow dv})
$$

The first part is input modulation. The second part is selection vector modulation. 

In simple language:

**Input modulation** means context changes how sensory evidence enters the circuit.

**Selection vector modulation** means sensory evidence enters similarly, but context changes whether the intermediate representation is selected into the decision accumulator.

## 9. Practical implementation logic

To reproduce this kind of model, your code structure can follow this logic:

```python
# x: hidden state, shape [batch, N]
# phi_x = tanh(x)

# Low-rank recurrent term:
# J phi(x) = sum_r m_r * <n_r, phi(x)> / N
recurrent = 0
for r in range(R):
    k_r = phi_x @ n[r] / N
    recurrent += k_r[:, None] * m[r][None, :]

# Input term
input_term = (
    u1[:, t, None] * I1[None, :]
    + u2[:, t, None] * I2[None, :]
    + ctx1[:, None] * Ictx1[None, :]
    + ctx2[:, None] * Ictx2[None, :]
)

# Euler update
dx = (-x + recurrent + input_term) * dt / tau
x = x + dx

# Readout
z = phi_x @ w / N
```

The most important implementation trick is that you do **not** need to explicitly build the full (N \times N) matrix (J). You only need the low-rank vectors (m_r) and (n_r).

## 10. How to learn this model structure

For your learning, I suggest thinking in three levels.

**Level 1: RNN dynamics**

Understand:

$$
x_{t+1}=x_t+\frac{\Delta t}{\tau}
[-x_t+J\phi(x_t)+input]
$$

This is just a leaky recurrent system.

**Level 2: low-rank structure**

Understand each rank as a pathway:

$$
n_r: \text{read from activity}
$$

$$
m_r: \text{write back to activity}
$$

Rank 1 means one pathway. Rank 3 means three pathways.

**Level 3: computational mechanism**

Rank 1:

$$
input \rightarrow decision
$$

Context changes the effective input representation, so it is input modulation.

Rank 3:

$$
input \rightarrow intermediate \rightarrow decision
$$

Context changes whether intermediate activity reaches the decision variable, so it is selection vector modulation.

For your EEG evidence-accumulation background, you can map (dv) to an accumulator-like latent variable, similar to a CPP-like decision variable, and (iv1/iv2) to transient hidden components that route sensory evidence before accumulation.
