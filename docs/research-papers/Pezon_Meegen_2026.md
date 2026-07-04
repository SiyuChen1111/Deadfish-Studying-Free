# Pezon & van Meegen (2026): Interpretable Compositional Computation with RNNs

<div class="csl-bib-body" style="line-height: 2; margin-left: 2em; text-indent:-2em;">
  <div class="csl-entry">Pezon, L., &amp; van Meegen, A. (2026). <i>Interpretable compositional computation with recurrent neural networks</i>. bioRxiv. <a href="https://doi.org/10.64898/2026.06.23.733979">https://doi.org/10.64898/2026.06.23.733979</a></div>
</div>

---

## Why I read this paper

I read this paper because it gives a useful language for interpreting our current Face-Switch FINDR results in `stage_results_v5`. The main question is not simply whether Arrangement A and Arrangement B produce different trajectories. The sharper question is:

**Can two arrangements look different in neural state space while still reusing the same low-dimensional evidence-to-choice computation?**

This paper says yes, and it explains how to test that idea more carefully.

---

## One-sentence takeaway

The paper argues that flexible behavior can reuse shared low-dimensional dynamical components, even when the recorded neural activity looks task-dependent or context-dependent.

For our project, this means Arrangement A/B trajectory differences should not automatically be interpreted as two separate mechanisms. They may instead reflect different surface expressions of a shared latent computation.

---

## Paper conclusion 1: task-dependent activity can coexist with shared latent computation

### What the paper concludes

A shared latent dynamical component does not have to appear as identical neural activity across tasks. Neural activity can remain task-dependent because task information can shift the population activity in directions that do not change the core latent variables.

In simpler terms: two tasks can look different on the surface while still using the same underlying computational machinery.

### What this gives us for `stage_results_v5`

This directly helps interpret our Arrangement A/B results. In `main_fig1_cumulative_trajectory_over_flow.pdf`, Arrangement A and Arrangement B are not identical, but their choice-related trajectories and overall flow-field organization look similar.

So the better interpretation is not:

> Arrangement A and B must use completely different mechanisms.

A more careful interpretation is:

> Arrangement changes the location or expression of the neural state, while the evidence-to-choice computation may still be partly shared.

This supports the current v5 story: arrangement may act like a context-state offset, while cumulative evidence organizes the main choice trajectory.

---

## Paper conclusion 2: the shared component is best sought in low-dimensional dynamics, not raw activity

### What the paper concludes

The paper defines shared computation at the level of low-dimensional latent dynamics. It argues that the reusable component is the flow or dynamical rule in latent space, not necessarily the raw firing-rate pattern.

### What this gives us for `stage_results_v5`

This makes FINDR especially relevant. Our v5 results are already built around inferred low-dimensional flow fields and trajectories. That means `main_fig1_cumulative_trajectory_over_flow.pdf` is not just a visualization. It is the right object for asking whether Arrangement A and B reuse a similar latent computation.

The useful next analysis is therefore:

- compare the Arrangement A and Arrangement B flow fields directly;
- measure whether their arrows point in similar directions at matched positions;
- measure whether their speed patterns are similar;
- ask whether the same choice axis emerges under both arrangements.

This would turn a visual impression into a quantitative shared-computation test.

---

## Paper conclusion 3: task dependence can enter at different places

### What the paper concludes

The paper separates task dependence into different possible locations:

1. task/context can change the autonomous background dynamics;
2. task/context can change how input pushes the system;
3. task/context can change how the latent state is read out into behavior.

This is useful because the same behavior can be produced by different internal solutions.

### What this gives us for `stage_results_v5`

This maps naturally onto our current figure set:

- **cumulative evidence**: likely captures the global evidence-to-choice organization;
- **momentary evidence**: useful for local input-push interpretation;
- **two-channel input**: tests whether positive and negative evidence need separate channels;
- **arrangement**: may change state position or local expression, without necessarily replacing the whole choice computation.

This helps explain why `main_fig4_input_model_comparison_controls.pdf` is important. The cumulative evidence model performs best for latent task organization, while the two-channel models do not clearly improve the choice-axis projection. That suggests we do not currently need to assume two fully separate positive/negative evidence channels.

---

## Paper conclusion 4: similar behavior is not enough to identify the mechanism

### What the paper concludes

The paper emphasizes that several different dynamical solutions can produce similar task behavior. Therefore, good performance or visually similar trajectories are not enough to prove one mechanism.

### What this gives us for `stage_results_v5`

This is a caution for our interpretation. The v5 results support cumulative evidence as the best organizing variable, but they do not yet prove a unique mechanism.

A careful claim would be:

> The current v5 results support cumulative evidence as the strongest low-dimensional organizing variable for choice-related dynamics.

A claim that is too strong would be:

> We have proven the exact attractor mechanism used by the brain.

The paper tells us to keep the first statement and avoid the second unless we add stronger tests.

---

## Paper conclusion 5: perturbing context is a powerful way to test shared components

### What the paper concludes

The authors propose testing shared latent components by switching the task/context signal and looking at the geometry of the response. If a latent component is truly shared, the response should obey specific symmetry-like constraints.

### What this gives us for `stage_results_v5`

For our FINDR results, the analogous analysis would be a counterfactual flow-field test:

1. take trajectories from Arrangement A;
2. evaluate or roll them under Arrangement B's learned flow field;
3. do the reverse direction, B under A;
4. ask whether the two cross-arrangement transformations behave symmetrically.

This would be a stronger test than simply comparing A and B plots side by side.

A practical next step is to compute an **A/B shared-flow score**:

- flow-direction cosine similarity;
- speed-pattern correlation;
- choice-axis preservation;
- counterfactual rollout similarity.

If these scores are high, we gain evidence for shared latent computation. If they are low, arrangement may be changing the dynamics more deeply.

---

## How this changes my interpretation of the current v5 results

Before reading this paper, it is tempting to describe our v5 result as:

> Arrangement A and B have different trajectories.

After reading this paper, the better interpretation is:

> Arrangement A and B may occupy different regions or expressions of state space, but the cumulative-evidence-to-choice computation may still be shared at the latent-flow level.

This makes our current result more interesting. The arrangement effect is not just a nuisance offset. It becomes a way to ask how the brain reuses a decision computation under different contextual states.

---

## Concrete next analyses for our project

### 1. Quantify shared flow across Arrangement A/B

Use the cumulative FINDR flow fields from v5 and compute how similar the A and B vector fields are after alignment.

Expected interpretation:

- high similarity: supports shared latent computation;
- low similarity: suggests arrangement-specific dynamics.

### 2. Quantify trajectory similarity after removing arrangement offset

Compare same-choice trajectories across arrangements after subtracting early-state or centroid offsets.

This tests whether arrangement mainly shifts the trajectory location while preserving the choice-related shape.

### 3. Run counterfactual arrangement rollouts

Use the learned flow for Arrangement A on trajectories initialized from Arrangement B, and vice versa.

This would directly test whether one arrangement's dynamics can support the other arrangement's choice trajectory.

### 4. Keep momentary evidence as local input-push evidence

The momentary model should remain useful, but mainly as a local input-effect view rather than the main global trajectory model.

### 5. Treat two-channel results as sensitivity checks

Since the two-channel models do not clearly outperform the signed 1D/cumulative versions, they are useful as controls but not currently the central story.

---

## Final takeaway for the Face-Switch project

This paper helps turn our v5 result into a sharper mechanistic question:

**Do Arrangement A and Arrangement B use different neural-state expressions of a shared low-dimensional evidence-to-choice computation?**

The current v5 results are consistent with this possibility, especially because cumulative evidence organizes the choice dynamics well. But the claim needs stronger support from A/B flow-field similarity, offset-controlled trajectory similarity, and counterfactual rollout tests.
