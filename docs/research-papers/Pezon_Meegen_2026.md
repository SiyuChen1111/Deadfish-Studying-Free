<div class="csl-bib-body" style="line-height: 2; margin-left: 2em; text-indent:-2em;">
  <div class="csl-entry">Pezon, L., &amp; Meegen, A. van. (2026). <i>Interpretable compositional computation with recurrent neural networks</i> (p. 2026.06.23.733979). bioRxiv. <a href="https://doi.org/10.64898/2026.06.23.733979">https://doi.org/10.64898/2026.06.23.733979</a></div>
  <span class="Z3988" title="url_ver=Z39.88-2004&amp;ctx_ver=Z39.88-2004&amp;rfr_id=info%3Asid%2Fzotero.org%3A2&amp;rft_id=info%3Adoi%2F10.64898%2F2026.06.23.733979&amp;rft_val_fmt=info%3Aofi%2Ffmt%3Akev%3Amtx%3Adc&amp;rft.type=preprint&amp;rft.title=Interpretable%20compositional%20computation%20with%20recurrent%20neural%20networks&amp;rft.rights=%C2%A9%202026%2C%20Posted%20by%20openRxiv.%20This%20pre-print%20is%20available%20under%20a%20Creative%20Commons%20License%20(Attribution%204.0%20International)%2C%20CC%20BY%204.0%2C%20as%20described%20at%20http%3A%2F%2Fcreativecommons.org%2Flicenses%2Fby%2F4.0%2F&amp;rft.description=Flexible%20cognition%20utilizes%20reusable%20components%20to%20enable%20rapid%20adaptation%20of%20behavior%20to%20different%20contexts%20or%20tasks.%20Analysis%20of%20artificial%20neural%20networks%20trained%20on%20multiple%20tasks%20suggested%20that%20this%20compositionality%20is%20supported%20by%20dynamical%20structures%20which%20are%20shared%20and%20re-used%20across%20tasks.%20However%2C%20the%20nature%20of%20these%20shared%20components%2C%20and%20how%20they%20can%20be%20used%20in%20a%20task-dependent%20manner%2C%20remained%20unclear.%20Here%2C%20we%20develop%20a%20theory%20of%20interpretable%20compositional%20computation%20based%20on%20shared%20dynamical%20structures%20in%20the%20low-dimensional%20latent%20space%20of%20low-rank%20recurrent%20neural%20networks.%20We%20show%20that%20these%20shared%20latent%20components%20are%20not%20immediately%20visible%20in%20the%20neural%20activity%2C%20and%20are%20thus%20compatible%20with%20task-dependent%20activity.%20We%20identify%20hallmarks%20of%20shared%20latent%20components%20both%20in%20the%20connectivity%20statistics%20and%20the%20neural%20representations.%20These%20hallmarks%20yield%20testable%20predictions%20for%20the%20network%E2%80%99s%20response%20to%20specific%20perturbation%20experiments.%20Finally%2C%20we%20identify%20distinct%20loci%20where%20task-dependence%20can%20enter%20the%20computation%2C%20allowing%20us%20to%20characterize%20qualitatively%20different%20solutions%20to%20compositional%20tasks.%20In%20summary%2C%20our%20theory%20provides%20a%20mechanistic%20understanding%20and%20testable%20hallmarks%20of%20compositional%20computation%20via%20shared%20components%20in%20low-rank%20networks.&amp;rft.identifier=urn%3Adoi%3A10.64898%2F2026.06.23.733979&amp;rft.aufirst=Louis&amp;rft.aulast=Pezon&amp;rft.au=Louis%20Pezon&amp;rft.au=Alexander%20van%20Meegen&amp;rft.date=2026-06-29&amp;rft.language=en"></span>
</div>

![Compositional computation using shared components in low-rank RNNS.](/assets/research-papers/image-17.png)
---
## 1. Core question of the paper

The paper asks: **How can one recurrent neural network solve many related tasks by reusing the same computational components, while still showing task-dependent neural activity?**

The authors’ answer is: compositional computation can be understood as **shared dynamical structures in the low-dimensional latent space of low-rank RNNs**. These shared components may not be obvious in raw neural activity, but they leave detectable signatures in connectivity statistics and perturbation responses. 

A good one-sentence summary:

> The same latent dynamical motif can be reused across tasks, while task-specific inputs and readouts make the observed neural activity and behavior task-dependent.

---

## 2. Key concepts you need before reading the paper

### Low-rank RNN
> Quick start:https://adrian-valente.github.io/2022/06/01/low-rank-summary.html#fn:1

The network has many neurons, but its recurrent connectivity is constrained to be low-rank:

$$
W_{rec}=\frac{1}{N}UV^\top
$$

This means the high-dimensional population activity (r(t)) can be described by a small number of latent factors:

$$
\lambda(t)=\frac{1}{N}V^\top r(t)
$$

The important point is that the network’s computation is not analyzed neuron by neuron, but through low-dimensional latent dynamics and output flow-fields, (\psi_{rec}) and (\psi_{out}). The authors explicitly state that the network dynamics and output are entirely determined by these low-dimensional flow-fields. 
![An illustration of the connectivity space for a rank-one RNN. From (Dubreuil et al. 2022).](/assets/research-papers/image-14.png)
### Flow-field

A **flow-field** tells you how the latent state moves over time. Intuitively:

$$
\text{current latent state} \rightarrow \text{direction of movement}
$$

For example, in a memory task, the flow-field may push activity toward a stable memory state.

### Autonomous vs input-driven dynamics

The recurrent flow-field is decomposed into:

$$
\psi_{rec}(\lambda,s,c)=\psi^{(c)}*0(\lambda)+\psi*{in}(\lambda,s,c)
$$

where:

* ($\psi_0$): autonomous dynamics, what the network does without stimulus input, such as maintaining a memory.
* ($\psi_{in}$): input-driven dynamics, how stimulus input changes the latent state.
* ($\psi_{out}$): readout dynamics, how latent state is transformed into output.

The authors define **shared components** as autonomous dynamics that are the same across tasks:

$$
\psi^{(c)}_0 \equiv \psi_0
$$

Task identity can then still affect the computation through the stimulus-driven part ($\psi_{in}$) or the output/readout ($\psi_{out}$). 

### Ring attractor

A **ring attractor** is a continuous set of stable states arranged like a circle. It is useful for storing angles or directions. In the pro/anti memory task, the same ring attractor can store either the stimulus direction or its opposite direction, depending on the task. 

---

## 3. Method notes

### 3.1 General RNN setup

The network receives two kinds of input:

$$
s(t): \text{time-varying stimulus}
$$

$$
c: \text{constant task/context input}
$$

The RNN dynamics are:

$$
\tau \frac{dr}{dt}=-r+\sigma(W_{rec}r+W_s s+W_c c+b)
$$

and the output is a linear readout of firing rates:

$$
y(t)=\frac{1}{N}W_{out}^\top r(t)
$$

So the task input (c) is always present during the trial and tells the network which task rule to apply. 

---

### 3.2 Main modeling strategy

This paper is not mainly an ordinary “train RNN and inspect it” paper. Instead, the authors often **design target flow-fields** that implement specific computational solutions, then train low-rank networks to realize those flow-fields.

Why? Because ordinary end-to-end training can find many different solutions to the same task. The authors call this **solution-space degeneracy**: different networks can solve the same task using different mechanisms. 

To control this, they introduce a target flow-field ($\psi^*$), then train the network’s flow-field ($\psi$) to match it using an auxiliary mean-squared-error loss. 

Their training procedure uses online SGD, L2 regularization, Gaussian weight diffusion, and input noise. Most networks use (N=1024) neurons, with (N=2048) for the eight-task example. 

Interpretation:
They are not just asking, “What solution does training find?” They are asking, “What kinds of mechanistic solutions are possible, and how can we identify them?”

---

### 3.3 End-to-end training control

They also train two low-rank networks end-to-end on the pro/anti memory task with ranks (P=8) and (P=4). Because randomly initialized low-rank networks did not reliably converge, they first trained a full-rank network, truncated its recurrent connectivity using SVD, and then fine-tuned the low-rank network. 

Interpretation:
This part asks whether their diagnostic tools still work when the true internal solution is not manually designed.
![Identifying shared attractors in low-rank networks trained end-to-end.](/assets/research-papers/image-15.png)
---

### 3.4 Tasks used in the paper

#### Pro/anti memory tasks

The network sees a stimulus direction. In the **pro** task, it reports the same direction; in the **anti** task, it reports the opposite direction. The trial has context, stimulus, memory, and response periods. 

This is the simplest example for testing whether a shared ring attractor can support two different task rules.

#### Categorization tasks

The categorization family has two task variables:

$$
c_{in}: \text{which input feature is relevant}
$$

$$
c_{out}: \text{which output channel should report the answer}
$$

The network must categorize the relevant stimulus feature as positive or negative, then report the result in the selected output channel. 

This task is more compositional because it combines two independent contextual factors.

#### Eight-task ring-attractor family

The authors also build a larger family of eight tasks: delay-pro, memory-pro, react-pro, delay-anti, memory-anti, react-anti, match-to-sample, and anti-match-to-sample. These tasks all involve angular information but differ in timing, memory demand, and matching rule. 

---

## 4. Two major analysis methods

## Method 1: Connectivity-statistics test

![Shared components constrain network connectivity statistics.](/assets/research-papers/image-16.png)

The authors ask: if two tasks share the same autonomous latent dynamics, what should be true about the network connectivity?

They show that the autonomous dynamics can be rewritten as something like a one-hidden-layer MLP. For each neuron, task input changes an **effective bias**:

$$
\beta_i^{(c)} = w_i^c{}^\top c + b_i
$$

Then each neuron can be represented by a task-dependent parameter point:

$$
\theta_i^{(c)}=(u_i,\beta_i^{(c)},\nu_i^{(c)})
$$

If two tasks share autonomous dynamics, then the two point-clouds of neuron parameters should be statistically indistinguishable. 

### How they test it

They train a nonlinear classifier to predict whether a neuron-parameter point came from task (c) or task (c'). If the classifier performs at chance level, the two distributions look the same. If AUC is high, the two tasks likely use different autonomous dynamics. 

Interpretation rule:

$$
\text{AUC near }0.5 \Rightarrow \text{compatible with shared autonomous dynamics}
$$

$$
\text{High AUC} \Rightarrow \text{evidence for non-shared autonomous dynamics}
$$

This is powerful in artificial networks because the connectivity is known, but it is less directly applicable to animal neural data because synaptic connectivity is usually unavailable.

---

## Method 2: Task-input perturbation and RSM symmetry

Because connectivity is usually not accessible experimentally, the authors propose a perturbation-based method using neural activity.

The idea:

1. Put the network in a memory attractor state for task (c').
2. During the memory period, switch the task input from (c') to (c).
3. Let the network relax to a new state.
4. Compare this perturbed state to the normal attractor states of task (c).
5. Build a representational similarity matrix, or RSM. 

The RSM is:

$$
K^{(c'\rightarrow c)}*{\alpha,\alpha'}=
\frac{1}{N} r^{(c)}*\alpha{}^\top r^{(c'\rightarrow c)}_{\alpha'}
$$

It measures how similar the normal and perturbed neural population states are. 

For shared attractors, the RSMs for opposite perturbation directions should obey a symmetry:

$$
K^{(c'\rightarrow c)}_{\alpha,\alpha'}
==

K^{(c\rightarrow c')}_{\alpha',\alpha}
$$

The authors emphasize that this is a **necessary condition**, not a sufficient proof. A violation rules out shared attractors, but satisfying it does not guarantee shared attractors. 

Interpretation rule:

$$
\text{RSM symmetry violated} \Rightarrow \text{not shared}
$$

$$
\text{RSM symmetry present} \Rightarrow \text{compatible with shared, but not proof}
$$

They quantify this symmetry using Lin’s Concordance Correlation Coefficient, CCC. In Fig. 4, reflected and orthogonal solutions are rejected as shared-attractor solutions, while the parallel solution is a false positive because of an additional symmetry. 

---

# 5. Results and how to interpret them

## Result 1: Shared latent dynamics can coexist with task-dependent neural activity

This is one of the most important results.

At first, it seems contradictory: if two tasks share the same component, shouldn’t neural activity look similar? The authors argue no. Shared components live in the latent factor space (\lambda), but population activity (r(t)) also depends on task input (c). Therefore, even if (\lambda(t)) follows the same dynamics across tasks, the observed firing-rate activity can still be task-dependent. 

In the pro/anti memory example, the same latent ring attractor is reused, but the firing-rate representations form two disjoint task-specific rings. Task identity is therefore easy to decode from neural activity, even though the latent computation is shared. 

Interpretation:

> Do not equate “shared computation” with “similar raw neural activity.”
> Shared computation may be hidden in a low-dimensional latent subspace.

The geometric explanation is that task-dependent activity can lie mostly in the nullspace of (V), so it changes firing rates without changing the latent factors (\lambda = \frac{1}{N}V^\top r). Because (P \ll N), there is plenty of room for task-specific activity that does not disturb the shared latent dynamics. 

---

## Result 2: Shared components constrain connectivity statistics

The authors construct four pro/anti solutions:

1. Shared ring attractor.
2. Parallel task-specific attractors.
3. Reflected task-specific attractors.
4. Orthogonal task-specific attractors.

The connectivity-statistics test works as predicted: above-chance classification is only possible for networks using distinct attractors, not for the shared-attractor solution. 

Interpretation:

> If the classifier can tell which task a neuron-parameter point belongs to, then the autonomous dynamics are probably task-specific.
> If it cannot, the tasks are compatible with shared autonomous dynamics.

Fig. 3’s logic is: shared components imply identical statistics of task-dependent effective neuron parameters, so a classifier should fail. 

---

## Result 3: Perturbation responses reveal shared-attractor hallmarks

The perturbation method tests whether switching the task input during memory produces a symmetric change in representational geometry.

For a shared attractor, switching task input should not change the latent attractor state, although the firing-rate activity can still change. Therefore, the RSMs should obey the symmetry relation. 

In Fig. 4:

* Shared solution: passes the RSM symmetry test.
* Reflected and orthogonal solutions: fail the test.
* Parallel solution: also passes, but only because it has an extra symmetry. 

Interpretation:

> The perturbation test can reject some non-shared solutions, but it cannot prove sharing in every case.

This is important experimentally: if you observe a strong violation of RSM symmetry after context/task perturbation, then shared attractor computation is unlikely. But if you observe symmetry, you still need caution.

---

## Result 4: End-to-end trained networks can use different solutions depending on rank

For rank-8 and rank-4 low-rank networks trained end-to-end on the pro/anti task, the authors found different solutions. Fig. 5 shows that the rank-8 network uses shared attractors, while the rank-4 network does not. The same diagnostic methods—connectivity statistics and perturbation response—identify these solutions even when the ground truth is unknown. 

Interpretation:

> The task itself does not uniquely determine the mechanism.
> Architecture and hyperparameters can push the network toward different computational solutions.

This is a major lesson for interpreting trained RNNs: successful task performance is not enough. You need mechanistic analysis.

---

## Result 5: Task-dependence can enter at different loci

The authors identify two main ways task identity can affect a shared-component computation:

1. **Input modulation**: task input changes how stimulus input drives the latent dynamics.
2. **Output modulation**: task input changes how the latent state is read out.

In the pro/anti memory task, the same behavior can be solved either way:

* Input-modulated solution: store the stimulus or its opposite in the same ring attractor.
* Output-modulated solution: store the same stimulus, but flip the readout for the anti task.

These can be distinguished by perturbing the task input during the memory period: switching task input changes the output for output-modulated solutions, but not for input-modulated solutions. 

Interpretation:

> The same task behavior can arise from different internal mechanisms.
> Perturbation helps reveal *where* the task rule enters the computation.

---

## Result 6: In compositional tasks, components may be fully or partially shared

In the categorization task, there are two contextual variables:

$$
c_{in}: \text{which stimulus feature to use}
$$

$$
c_{out}: \text{which response channel to use}
$$

A minimal solution reuses the same attractors across all tasks. In that solution, (\psi_{in}) selects the relevant input feature, (\psi_{out}) selects the response channel, and (\psi_0) remains task-invariant. 

But the network can also reuse attractors only across subsets of tasks. For example, attractors can be reused across tasks with the same relevant input feature but not the same response direction. In such cases, autonomous dynamics can be fully shared or only partially shared. 

The authors then classify solutions according to where (c_{in}) and (c_{out}) enter: (\psi_0), (\psi_{in}), or (\psi_{out}). They construct nine qualitatively different solutions. 

Interpretation:

> Compositionality is not one single mechanism.
> It is a family of possible mechanisms, depending on which components are shared and where task variables modulate the computation.

---

## Result 7: Complex multitask behavior can be solved with a shared ring attractor plus gating

For the eight-task family, the network uses a three-dimensional autonomous flow-field with a fixed point and a shifted ring attractor. The third latent factor (\lambda_3) acts as a gate: stimulus input affects dynamics in the (\lambda_3=0) plane, but not on the ring attractor in the (\lambda_3=1) plane. This allows the first stimulus to be stored without being overwritten by a second stimulus in match-to-sample tasks. 

Task-dependence is handled by input and readout flow-fields: pro/anti context is resolved by input-driven dynamics, while the readout resolves different task classes such as memory, delay, react, and match-to-sample. 

Interpretation:

> A single shared latent structure can support multiple tasks if different task variables control input routing, output gating, or readout rules.

---

# 6. Most important interpretation points

### 1. “Shared” does not mean “same neural activity”

The paper’s central conceptual point is that shared computation can be hidden in latent dynamics. Raw activity can look task-specific because task input changes the embedding from latent factors to firing rates.

### 2. Task performance is underdetermined

Many different internal mechanisms can solve the same task. Therefore, just training an RNN to high performance does not tell you what computation it learned.

### 3. Perturbation is more informative than observation alone

The authors emphasize that perturbing the task/context signal can distinguish mechanisms using experimentally accessible variables: task signal and neural activity. 

### 4. AUC and CCC have opposite interpretations

For the connectivity classifier:

$$
\text{High AUC} \Rightarrow \text{non-shared dynamics}
$$

For perturbation RSM symmetry:

$$
\text{High CCC} \Rightarrow \text{compatible with shared dynamics}
$$

But high CCC is not proof, because other symmetries can also produce it.

### 5. The paper is theoretical/simulation-based

The authors explicitly say their approach differs from standard end-to-end training: they design flow-fields and train networks to implement them, which gives precise control over the solution. 
