<div class="csl-bib-body" style="line-height: 2; margin-left: 2em; text-indent:-2em;">
  <div class="csl-entry">Dubreuil, A., Valente, A., Beiran, M., Mastrogiuseppe, F., &amp; Ostojic, S. (2022). The role of population structure in computations through neural dynamics. <i>Nature Neuroscience</i>, <i>25</i>(6), 783–794. <a href="https://doi.org/10.1038/s41593-022-01088-4">https://doi.org/10.1038/s41593-022-01088-4</a></div>
  <span class="Z3988" title="url_ver=Z39.88-2004&amp;ctx_ver=Z39.88-2004&amp;rfr_id=info%3Asid%2Fzotero.org%3A2&amp;rft_id=info%3Adoi%2F10.1038%2Fs41593-022-01088-4&amp;rft_val_fmt=info%3Aofi%2Ffmt%3Akev%3Amtx%3Ajournal&amp;rft.genre=article&amp;rft.atitle=The%20role%20of%20population%20structure%20in%20computations%20through%20neural%20dynamics&amp;rft.jtitle=Nature%20Neuroscience&amp;rft.stitle=Nat%20Neurosci&amp;rft.volume=25&amp;rft.issue=6&amp;rft.aufirst=Alexis&amp;rft.aulast=Dubreuil&amp;rft.au=Alexis%20Dubreuil&amp;rft.au=Adrian%20Valente&amp;rft.au=Manuel%20Beiran&amp;rft.au=Francesca%20Mastrogiuseppe&amp;rft.au=Srdjan%20Ostojic&amp;rft.date=2022-06&amp;rft.pages=783-794&amp;rft.spage=783&amp;rft.epage=794&amp;rft.issn=1097-6256%2C%201546-1726&amp;rft.language=en"></span>
</div>

---
## What's the contribution of this paper?

1. **They bridge two views of neural computation.**
   The paper connects the "cell-population" view, which studies functional subpopulations of neurons, with the "computation-through-dynamics" view, which studies low-dimensional neural trajectories. The authors explicitly ask how population structure and neural dynamics interact to shape computation.

2. **They provide a method to test whether population structure is computationally necessary.**
   Instead of only observing clustering in neural selectivity or connectivity, they use a resampling approach: they destroy non-random population structure while preserving lower-order connectivity statistics, then test whether the network can still perform the task. This turns the analysis from merely correlational into a stronger test of computational necessity.

3. **They show that not all tasks need non-random population structure.**
   For tasks such as perceptual decision-making, working memory, and multisensory decision-making, fully random population structure can be sufficient. But for tasks requiring flexible input-output mappings, such as contextual decision-making and delay-match-to-sample, non-random structure becomes necessary.

4. **They explain population structure mechanistically through low-rank latent dynamics.**
   The paper shows that low-rank RNNs can be reduced to low-dimensional nonlinear dynamical systems, and that the statistics of connectivity determine these latent dynamics. This gives a clear bridge between synaptic/connectivity structure and the geometry of neural activity.
   ![Reducing low-rank networks to low-dimensional latent dynamics to explain computations in low-rank RNNS](/assets/research-papers/image-7.png)

5. **They identify multi-population structure as a solution for flexible cognition.**
   For flexible tasks, the authors show that connectivity can be described by a small number of subpopulations. In the contextual decision-making task, two populations were sufficient to recover near-trained performance, and similar logic applied to the delay-match-to-sample task.
![Multi-population connectivity structure captures the computational requirements for context-dependent tasks](/assets/research-papers/image-8.png)
6. **They propose gain modulation as the key mechanism.**
   Multiple subpopulations allow external inputs to modulate the effective couplings between latent variables. In simpler words, the same network can flexibly reshape its internal dynamics depending on context.

Overall, the paper's core contribution is showing that **population structure and neural dynamics are complementary, not competing, explanations**: dynamics determine computation, but structured subpopulations can be necessary to flexibly control those dynamics.

---
## What's the non-random population?
In this paper, **"non-random population"** really means **non-random population structure**.

It means that neurons are **not just a random cloud of mixed-selective units**. Instead, when each neuron is represented by its task selectivity or connectivity parameters, the neurons show **structured clustering or organized patterns** in that space.

A simple way to understand it:

**Random population structure:**
Neurons all mix task variables in a roughly random way. If you plot them in a "selectivity space" or "connectivity space," they look like one smooth Gaussian-like cloud.

**Non-random population structure:**
Neurons still may be mixed-selective, but their mixed selectivity is **organized**. The cloud of neurons is not random; it may form clusters, elongated directions, or subgroups. The paper calls this **non-random mixed selectivity**: neurons tend to be clustered along multiple axes rather than being distributed isotropically/randomly.

In the paper's connectivity analysis, a non-random population means that neurons can be divided into **subpopulations** with different statistical connectivity patterns. These subpopulations may not have very different average positions, but they have different **shapes and orientations** in connectivity space, meaning different covariance/overlap relationships among input, recurrent, and output connections.

So the key point is:

**Non-random population != one neuron represents only one task variable.**
It means:

**Neurons may still encode mixtures of variables, but the way they mix variables is structured, not arbitrary.**

In Dubreuil et al. (2022), this structure matters especially for flexible tasks, such as contextual decision-making, where the same input may require different outputs depending on context. For those tasks, random structure was not enough; the network needed organized subpopulations to flexibly reshape its dynamics.

---
## Low-rank RNNs: a practical guide

### **1. Why low-rank is a legitimate "replacement" for full-rank here, not a downgrade**

The most important empirical fact for your project is this: when full-rank ("vanilla") RNNs are *trained* on systems-neuroscience tasks such as context-dependent decision making (CDM) or delayed match-to-sample (DMS), they spontaneously develop **low-dimensional dynamics** anyway. The task-relevant computation only lives in a handful of dimensions, even though the connectivity is nominally full rank. Valente, Pillow & Ostojic (2022) showed this directly: they trained full-rank RNNs to 100% accuracy on CDM and DMS, observed the expected low-dimensional dynamics, and then inferred low-rank RNNs of increasing rank that reproduced both the behavior *and* the underlying dynamical mechanism. [Princeton/Pillow Lab (PDF)](https://pillowlab.princeton.edu/pubs/Valente22neurips_lowrankRNNs.pdf)

So the low-rank constraint is not throwing away something the full-rank network "needs" for these tasks - it is making explicit a structure the trained full-rank network was already using. This is exactly the lineage that goes back to Mante, Sussillo, Shenoy & Newsome (2013), who trained a full-rank RNN on context-dependent evidence integration and found, after linearizing, that the network solved it through a low-dimensional line-attractor / selection-vector mechanism. The low-rank framework formalizes that observation rather than contradicting it. [Nature (Mante et al. 2013)](https://www.nature.com/articles/nature12742)

The practical payoff is the central message of the framework you've been reading (Dubreuil et al. 2022 and Mastrogiuseppe & Ostojic 2018): a low-rank network's recurrent dynamics reduce *analytically* to a small closed system in the collective variables $\kappa_k$ - you get fixed points, attractors, and an "information-flow graph" between task variables. A full-rank network forces you to reverse-engineer those dynamics numerically after the fact; a low-rank network hands you the reduced description by construction. [eLife (article 103636)](https://elifesciences.org/articles/103636)

### **2. Why this matters *specifically* for flexible / context-switching tasks**

Your paradigm - a face-switching (context-dependent) task - is essentially in the same family as CDM: depending on a contextual cue, the network must route or select different stimulus features toward the same decision variable. This is precisely the regime where the low-rank framework has its sharpest results.

Recall the conclusion from the very first thing you asked about (random vs. structured population): simple input-output mappings can be done with a *single* Gaussian (fully random) population, but **flexible, context-dependent selection requires more than one statistically distinct sub-population**. Dubreuil et al. and the earlier Beiran et al. (2021) "Shaping dynamics with multiple populations" paper establish that multiple populations are what give a low-rank network the capacity to implement gating/switching. Valente et al. made this concrete: their reverse-engineering identified **two populations** distinguished by their context-cue input weights; the context cue places each population at a different point on the nonlinearity $\phi(x)$, modulating their gains $\phi'(x)$ in opposite directions, and that gain modulation is what implements the context switch - and crucially, the *same gain-modulation mechanism was present in the original full-rank network*. [Princeton/Pillow Lab (PDF)](https://pillowlab.princeton.edu/pubs/Valente22neurips_lowrankRNNs.pdf) [Neural Computation (Beiran et al. 2021)](https://pillowlab.princeton.edu/pubs/Arora2025neurips_lowrankRNNs.pdf)

So for a switching task, the low-rank model doesn't just match the full-rank model's behavior - it tells you *which population structure and which gating mechanism* (e.g., selection-vector modulation vs. input modulation) the network is using. The recent eLife work by the Pagan/low-rank-modeling line pushes this further, decomposing the solution space of context-dependent decision making into "input modulation" vs. "selection-vector modulation" and giving a geometric, pathway-based account of how the selection vector is reconfigured by context. That is exactly the kind of mechanistic question - *how does the brain reconfigure its computation when the context/face-rule switches?* - that your project seems aimed at. [eLife (article 103636)](https://elifesciences.org/articles/103636)

### **3. A concrete recommended workflow for your project**

Putting the references together, here is how I'd suggest using low-rank RNNs as your method:

| Step | What to do | Supporting reference |
|---|---|---|
| Baseline | Train a full-rank RNN on your face-switching task; confirm behavior and check the activity is low-dimensional | Mante et al. 2013; Valente et al. 2022 |
| Reduce | Either train a low-rank RNN directly, or infer one from the full-rank network (LINT-style), increasing rank until behavior is matched | Valente, Pillow & Ostojic 2022 |
| Analyze | Reduce to collective variables $\kappa_k$, locate fixed points / line attractors, build the information-flow graph | Mastrogiuseppe & Ostojic 2018; Dubreuil et al. 2022 |
| Mechanism | Cluster neuron loadings into populations; test how the context cue modulates gains and reconfigures the selection vector | Beiran et al. 2021; eLife 103636 |

For a context-switching task you will almost certainly need **rank >= 2 and at least two populations**, not a rank-1 single-Gaussian network - that is the direct implication of the random-vs-structured result.

### **4. Caveats you should keep in mind**

A few honest limitations so you don't over-commit:

There is a genuine **expressivity limit**. Arora & Pillow (2025; "A New Look at Low-Rank RNNs") show via the neural-engineering-framework perspective that the neurons act as nonlinear basis functions for an embedded ODE, and that with a $\tanh$ nonlinearity and no per-neuron inputs the network can only capture odd-symmetric functions. If your task's required computation is highly nonlinear or asymmetric, you may need higher rank or per-neuron input terms - so treat "minimal rank" as something to verify empirically, not assume. [OpenReview (Arora & Pillow, ICLR 2025)](https://openreview.net/forum?id=fWXYD0ZCdd)

Second, low-rank RNNs are a tool for **mechanistic understanding, not engineering performance** - which fits your stated goal (exploring the decision process) perfectly, but means you should justify the choice on interpretability grounds rather than accuracy.

Third, the clean mean-field reduction relies on large $N$ and on loadings being well-described by a (mixture-of-)Gaussian distribution. With small networks or strongly non-Gaussian connectivity the low-dimensional description is approximate, so always validate the reduced $\kappa_k$ dynamics against the full simulation.

Finally, note there is also recent experimental work (Nature 2024, "Individual variability of neural computations underlying flexible decisions") arguing that the Mante-style single selection-vector-modulation story is not the only solution the brain uses - there's a continuum of mechanisms across individuals. This is good news for you: the low-rank framework, especially the input-modulation-vs-selection-modulation decomposition, is well suited to *characterizing where on that continuum* your task or subject sits. [Nature (s41586-024-08433-6)](https://www.nature.com/articles/s41586-024-08433-6)

### **Bottom line**

For exploring the decision-making process during flexible/context-switching tasks, a low-rank RNN is a well-justified and arguably superior method to a full-rank RNN: trained full-rank networks on these very tasks are already effectively low-rank, the low-rank form gives you an analytic reduction to collective variables and an explicit account of the gating/selection mechanism, and the framework's core result tells you that flexible switching specifically requires the multi-population structure you'd be modeling. Just plan for rank >= 2 with multiple populations, validate the minimal rank empirically given the known expressivity limits, and lean on the input-modulation vs. selection-vector-modulation distinction to characterize the switching mechanism.
