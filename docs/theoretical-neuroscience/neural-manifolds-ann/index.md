# Neural Manifolds & ANN

## Talk Info

- **Title:** Computing with Neural Manifolds
- **Speaker:** SueYeon Chung
- **Host:** Kempner Institute at Harvard University
- **Source video:** https://www.youtube.com/watch?v=5OycfT4WqAI&t=1514s

---

## One-Sentence Summary

The core idea of this talk is that **population neural activity can be viewed as a manifold in a high-dimensional space**, and that the geometry of those manifolds—such as their radius, dimensionality, and mutual alignment—determines how easily they can be decoded by a downstream linear readout. This framework is useful both for analyzing biological neural data and for understanding why internal representations in artificial neural networks work so well.

---

## 1. The Lab's Three Main Research Directions

At the beginning of the talk, the lab's work is organized into three connected directions:

1. **Theory of Neural Manifolds**: building a theory of the geometric structure of neural population representations.
2. **Population coding / neural data analysis**: using geometric quantities to analyze coding efficiency in real neural data.
3. **Deep networks constrained by neuroscience**: improving ANNs with neuroscience-inspired principles and using ANNs to better interpret the brain.

These three directions form a coherent pipeline: define representation geometry, use it to analyze neural data, and then turn those insights into principles for building better models.

![](./assets/5bAARKo8vkkgZjIAAqhydAZHnBnivq7mvZ9phq2PXbc=.png)

![](./assets/NIJuTKaeO08-xBiCrUV_Ts4dueMpoxHjtUatn2sjk4M=.png)

---

## 2. What Is a Neural Manifold?

An intuitive way to think about a neural manifold is this: when the same object, concept, or stimulus is presented under many nuisance variations, the population response does not collapse to a single point. Instead, it traces out a structured cloud in high-dimensional activity space. That structured geometric object is a manifold.

- Different views, lighting conditions, backgrounds, or noise patterns move the response along the same manifold.
- Different stimulus categories correspond to different manifolds.
- A good representation does not eliminate variability; it organizes **task-relevant structure** and **nuisance variability** into a geometry that is easy to decode.

![](./assets/NJrExYA1hZbDZuFLnKV0WhtAWmnv0qvBBgXtJU-1Nlc=.png)

![](./assets/z5SME7-7FPRVeOG1rswTVNmKk_6hBBBRC2BhKLXZA9U=.png)

### Two Classic Difficulties This Framework Tries to Solve

- Real neural activity contains complicated sources of variation that cannot be summarized well by just means and variances.
- We need to measure structure in the **full population activity space**, not only through single-neuron tuning curves.

![](./assets/Q2XIOOcHihhLJcy9oNDIrlTi4_gb41goj5y5VzziZ3A=.png)

![](./assets/AYAM2qh9f_k7tip5YnrB0PP03fqBY2WQgofuOd3gyrU=.png)

![](./assets/ya1HwCsRF6mZjBetkZFuijla2ho9rSHDNgyaJxZbfBI=.png)

---

## 3. Why Classical Approaches Are Not Enough

The talk repeatedly emphasizes that classical tools such as information theory or signal detection theory work well for simple tasks with well-behaved noise, but they become less informative for naturalistic tasks.

Two reasons are central here:

1. **Objects are not points; they are manifolds with internal variation.**
2. **The variability is no longer simple noise that can be captured by second-order statistics alone.**

In invariant object recognition, for example, a single object across pose, scale, and background variation forms a complicated manifold rather than a Gaussian cluster. The relevant question is no longer “can two means be separated?” but rather:

> Can these manifolds be separated by a linear hyperplane?

---

## 4. Manifold Capacity Theory: A Geometric Theory of Separability

This is the central theoretical contribution highlighted in the talk.

### 4.1 The Core Question

Given many object manifolds, ask:

- **How many manifolds can be packed into neural activity space while still remaining linearly decodable?**
- What geometric properties determine that capacity?

![](./assets/aLTRomLMkYpx54hK6H3TXzTnRouIPUDywbz6cIdFT8Y=.png)

![](./assets/ipEHMeaovmzxlF6falgQkFNkMua0lUanG2sUyWZlUVE=.png)

![](./assets/ktF8MvO13utOUR3erQC-OrX1d88CaG1pMQlUmazIrrA=.png)

### 4.2 A Useful Intuition

The theory has a sphere-packing flavor in high-dimensional space:

- smaller manifolds are easier to pack;
- lower-dimensional manifolds are easier to separate;
- manifolds that are strongly aligned or entangled reduce separability.

So capacity depends on:

- manifold radius / size
- manifold dimension
- manifold center location
- manifold alignment / correlation

![](./assets/kN6tByQJwbiZzcRNz7MhChZ_KsJq0XKG7zJNkJ54M0U=.png)

The original note said “central distances can be one of the measurement.” A more precise phrasing is that **center arrangement and center correlation are among the important factors affecting manifold capacity**.

![](./assets/U59VEi4tH_xpCT28H-nrJBWPd_mHIpu_LJ1k8iciIak=.png)

![](./assets/HopMcWbMqCMtpUsKAwBzZ3e9d3Ibh_1f4pB32sTGt9k=.png)

---

## 5. What This Theory Actually Explains

The theory is not just about whether classification is possible. It aims to connect:

- **representation geometry** and **task efficiency**;
- **population-level structure** and **downstream linear readout capacity**;
- **biological neural data** and **internal ANN representations** using the same analytical language.

### Open Questions Left on the Table

- How exactly is manifold geometry shaped by single-neuron tuning properties?
- Across regions, what is being compressed and what is being preserved?
- Does correlated variability help coding or hurt it?

![](./assets/i62q6nBc02d2KK6Aest5f8tMxO0vLNKa-JHAUiVBRvY=.png)

![](./assets/5yLOdLQ9RCL7B8wyJCAnXuSOYtWk6RrjKhxLH1b0E1I=.png)

---

## 6. From Representation Analysis to Model Design

The second half of the talk shifts toward a very important question:

> If manifold geometry really captures what makes a representation good, can we train networks to optimize for it directly?

### 6.1 MMCR / Maximum Manifold Capacity Representations

The original note included the phrase “deficit: preserving as much as information.” A more accurate interpretation is:

- the goal is not to preserve every detail of pixel information;
- the goal is to learn representations that are most useful for the task, while being geometrically compact, low-dimensional, and well separated across categories.

![](./assets/mjllMdWjkhByvrQtrvEfTfnkgPolur0dbOgtNbh_Xuk=.png)

In the talk, a **ResNet backbone** is used, small naturalistic variation manifolds are generated, and an objective is introduced to maximize manifold capacity.

![](./assets/fQ4csSGP0MtZrZL5x2n73GH05zoBeR5uXHiCPXTM52Q=.png)

![](./assets/ndV9uo_D1QV_OAWbJT5ADqdXYF2-Sq68iNxjhlPRS0I=.png)

### 6.2 Comparing Models to Brain Data: Not Just Prediction Error

One especially interesting argument in the talk is that an ANN predicting brain activity well does not automatically mean it is a good brain model.

The speaker argues that neural predictability should be decomposed into at least two factors:

1. **representation alignment**: how well the model representation aligns with the neural data;
2. **model activity geometry / spectrum**: whether the model's own internal geometry is sensible.

That is what the original note was pointing to with “train a linear regressor” and “decompose into 2 factors.”

![](./assets/yOdeIFKwlVyVQyBkRIm9zHBayW3HrX1ltA5efBQbCG0=.png)

![](./assets/QC_dv1pOGMmynkZWaQFfNHyjDweNjcTkiguuB_buAG4=.png)

![](./assets/kOBaBhZBX8AJMCjX0nJ4VVF6J3XmfuxJmn1TDXeoBHw=.png)

![](./assets/RAYqJMD0v5gTube1ITLWvFR_ReIe3zabOVLDJfOMXDg=.png)

This is more interpretable than reporting a single regression score, because it separates cases where the model truly captures neural representational structure from cases where a readout simply happens to fit.

---

## 7. Three Takeaways Worth Remembering

### 7.1 Neural manifolds are an intermediate language for population coding

They sit naturally between:

- single-neuron properties,
- population-level geometry,
- and downstream task decodability.

That makes manifolds a useful bridge: less local than single-cell tuning, but less opaque than a black-box task score.

### 7.2 Linear readout is not a weak assumption here

The talk is not claiming that the brain literally performs only linear classification. The point is:

- if a representation has already untangled task structure enough for a linear readout to succeed,
- then the representation itself is already doing something meaningful and efficient.

### 7.3 The framework matters for both neuroscience and AI

- For neuroscience, it offers a new language for analyzing large-scale neural recordings.
- For AI, it turns vague ideas about “good representations” into measurable geometric quantities.

---

## 8. Extensions Worth Adding Beyond the Raw Notes

Using SueYeon Chung’s research statement, there are a few important threads behind the talk that are worth making explicit in the note.

1. **Aim 2: multi-level population coding**  
   The theory is not limited to object manifold analysis. It also aims to connect manifold geometry to single-neuron tuning shapes and correlated variability.

2. **Aim 3: neuro-inspired deep networks**  
   The lab is not only using ANNs as brain models. It also uses neuroscience to constrain ANNs, for example through:
   - stochastic neural activity
   - divisive normalization
   - biologically plausible learning rules

3. **Robustness / adversarial examples**  
   Neuroscience-inspired structure can sometimes make models more robust, and the mechanism appears to differ from standard adversarial training.

4. **Normative principles**  
   The broader ambition is to extend efficient coding ideas from early sensory systems to more complex tasks, with manifold capacity theory providing an explicit link between geometry and task efficiency.

---

## 9. A More Complete Summary Statement

### Theory of Neural Manifolds captures task-efficient representations for:

- **population coding**
- **neural data analysis**
- **model building in ANN / NeuroAI**

More specifically, it:

- formalizes the relation between readout capacity and representation geometry;
- handles complex variability beyond second-order statistics;
- applies across many datasets, modalities, and species;
- helps interpret both brain data and neuro-inspired deep models.

![](./assets/yqeVH47HzwVbkiIJlBXTcrSF2HaLz_XsU25oEYrdAxQ=.png)

![](./assets/C435hPubQJ5baE3Ii24N1Vu1IOjhEbFu_fK_Bt48NQg=.png)

---

## 10. References / Useful Follow-Up Sources

- Video metadata: https://www.youtube.com/watch?v=5OycfT4WqAI
- SueYeon Chung lab research statement: https://www.sychunglab.org/research
- ICML 2023 talk page: https://icml.cc/virtual/2023/21527
- Review article: Chung & Abbott, *Neural population geometry: An approach for understanding biological and artificial neural networks* (Current Opinion in Neurobiology, 2021)

---

## 11. If I Continue Expanding This Note Later

Three high-value follow-ups would be:

1. **Add one page for core formal definitions**: give the formal definitions of manifold radius, dimensionality, and capacity.  
2. **Add a brain-vs-ANN comparison table**: one side for neural data analysis, the other for ANN representation analysis.  
3. **Add a short section on why linear readout is such a powerful probe**: this would make the theoretical motivation more complete.
