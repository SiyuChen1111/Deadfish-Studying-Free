<div class="csl-bib-body" style="line-height: 2; margin-left: 2em; text-indent:-2em;">
  <div class="csl-entry">D’Ambrogio, S., Grohn, J., Khalighinejad, N., Mattar, M. G., Hunt, L., &amp; Rushworth, M. F. S. (2026). Interpretable abstractions of artificial neural networks predict behavior and neural activity during human information gathering. <i>Nature Neuroscience</i>. <a href="https://doi.org/10.1038/s41593-026-02342-9">https://doi.org/10.1038/s41593-026-02342-9</a></div>
  <span class="Z3988" title="url_ver=Z39.88-2004&amp;ctx_ver=Z39.88-2004&amp;rfr_id=info%3Asid%2Fzotero.org%3A2&amp;rft_id=info%3Adoi%2F10.1038%2Fs41593-026-02342-9&amp;rft_val_fmt=info%3Aofi%2Ffmt%3Akev%3Amtx%3Ajournal&amp;rft.genre=article&amp;rft.atitle=Interpretable%20abstractions%20of%20artificial%20neural%20networks%20predict%20behavior%20and%20neural%20activity%20during%20human%20information%20gathering&amp;rft.jtitle=Nature%20Neuroscience&amp;rft.stitle=Nat%20Neurosci&amp;rft.aufirst=Simone&amp;rft.aulast=D%E2%80%99Ambrogio&amp;rft.au=Simone%20D%E2%80%99Ambrogio&amp;rft.au=Jan%20Grohn&amp;rft.au=Nima%20Khalighinejad&amp;rft.au=Marcelo%20G.%20Mattar&amp;rft.au=Laurence%20Hunt&amp;rft.au=Matthew%20F.%20S.%20Rushworth&amp;rft.date=2026-06-26&amp;rft.issn=1097-6256%2C%201546-1726&amp;rft.language=en"></span>
</div>

---
![Symbolic representation of the ANN-derived VoI function.](/assets/research-papers/image-13.png)
# What is a Lipschitz-bounded deep network?
A **Lipschitz-bounded deep neural network** is a neural network whose output is constrained to change **smoothly** when the input changes.

In simple terms:

> If the input changes a little, the output is not allowed to suddenly change a lot.

Mathematically, a Lipschitz-bounded function satisfies something like:

$$
|f(x_1)-f(x_2)| \leq K |x_1-x_2|
$$

This means the function has a limited “steepness.” The constant `K` controls how sensitive the model can be.

In this paper, the ANN was a **fully connected deep network** with **four hidden layers**, each with **32 neurons**, and used **tanh activation functions**. The authors say the Lipschitz constraint makes the value estimates smooth: small input changes should produce proportionally small output changes. 

Why is this useful here?

Because the ANN is estimating **value of information, VoI**. Imagine the participant has sampled 30 dots versus 31 dots. Psychologically, the value of sampling should not suddenly jump massively just because one more dot was revealed. A Lipschitz-bounded network helps prevent that kind of unstable behavior.

So in this paper:

> the Lipschitz-bounded ANN is a smooth function approximator for estimating the value of sampling more information.

It is **not an RNN** and not a language model. It does not mainly model temporal sequences by itself. Instead, it maps the current task state — such as dot counts, cursor position, and first-visit status — to **per-patch VoI values**. 

A simple analogy:

| Ordinary ANN                                             | Lipschitz-bounded ANN                                          |
| -------------------------------------------------------- | -------------------------------------------------------------- |
| Can learn flexible functions, sometimes with sharp jumps | Learns flexible functions but is constrained to be smoother    |
| Higher risk of unstable/overfit mappings                 | More stable and cognitively plausible                          |
| “Input changes a little, output might change a lot”      | “Input changes a little, output changes only a limited amount” |

For this paper, that smoothness is important because they later use symbolic regression to extract a readable equation from the ANN. If the ANN learned a very noisy, jagged function, symbolic regression would have a much harder time finding a meaningful psychological equation.

---
# What is symbolic regression?
In this paper, **symbolic regression** means:

> using an algorithm to turn the black-box ANN-learned function into a simple mathematical equation.

It is **not ordinary regression** like linear regression. Linear regression assumes the form first, such as:

> y = β₀ + β₁x

But symbolic regression searches for the **form of the equation itself**. It tries many possible combinations of mathematical operators, such as `+`, `−`, `×`, `/`, `log`, and `exp`, and finds a compact equation that can approximate the ANN’s output. In this paper, they used symbolic regression to approximate the ANN-derived **value of information, VoI** function. 

The logic is:

**behavioral data**
→ train ANN to learn how participants compute VoI
→ use symbolic regression to convert ANN into readable equations
→ test whether the new symbolic model still predicts behavior and brain activity

The authors say symbolic regression is useful because it gives **human-readable expressions** and reduces the ANN from **7,592 trainable units** to a few interpretable parameters. 

In this paper, symbolic regression discovered two equations:

**Value of staying** depends on the ratio between evidence collected from the attended and unattended options:

$$Value of staying = β₁ + exp(−|β₂| × N_attended / N_unattended)
$$

**Value of switching** also depends on the relative evidence balance between the two options:

$$
Value of switching = β₃ + exp(−|β₄| × log(2 × N_unattended) / N_attended)
$$

Here, `N_attended` means how much evidence has been collected from the currently attended patch, and `N_unattended` means how much evidence has been collected from the other patch. 

The important thing is that this equation revealed the paper’s main idea: people do not only ask, **“How uncertain is this option?”** Instead, they ask something closer to:

> “How much do I know about this option compared with the other option?”

That is why the authors interpret the result as **information symmetry**.

So, in simple words:

> Symbolic regression in this paper is a bridge between ANN and theory. The ANN gives flexible prediction, and symbolic regression turns that learned prediction into a compact psychological equation.

# What is the relationship between entropy theory and information balance in this paper?
Yes, your thought is very good. This paper is **related to entropy theory**, but it is **not exactly an entropy-based model**.

The relationship is mainly through the idea of **uncertainty** and **information gain**.

In information theory, **entropy** means uncertainty. If you do not know which option is better, entropy is high. If one option is clearly better, entropy is low. So in a classical entropy-based view, people should sample information because sampling can reduce uncertainty.

This paper has a similar starting point: participants gather more evidence when the task is uncertain or difficult. For example, they sampled more when initial uncertainty was higher and when the difference between options was smaller. 

But the paper’s main finding is a bit different from a simple entropy story.

## The key difference

An entropy-based account would usually ask:

> “How uncertain am I about this option or this decision?”

But this paper suggests participants ask something more like:

> “How balanced is my information across the two options?”

That is why they propose **information symmetry**.

The symbolic model uses the ratio between evidence collected from the attended and unattended options. So the important variable is not only the absolute uncertainty of each option, but the **relative amount of evidence** across options. The authors explicitly contrast this with UCB-style models, which ask how uncertain one option is; their model instead asks how knowledge about one option compares with knowledge about the other. 

## Two meanings of “balance”

Your word “balance” is important, but there are two kinds of balance here.

| Concept    | Meaning of balance                                                 |
| ---------- | ------------------------------------------------------------------ |
| Entropy    | Balance of probabilities, for example 50/50 means high uncertainty |
| This paper | Balance of information/evidence collected from two options         |

So entropy balance is about **outcome uncertainty**:

> “Are the possible outcomes equally likely?”

But this paper’s information symmetry is about **sampling balance**:

> “Have I collected similar amounts of evidence from both options?”

These are related, but not the same.

## A simple example

Imagine you sampled:

* Option A: 80 dots revealed
* Option B: 10 dots revealed

Even if Option A looks good, you may still feel that your knowledge is unbalanced. You know a lot about A but very little about B. According to this paper, this imbalance increases the value of switching to sample B.

That is not simply entropy minimization. It is more like:

> “I want enough comparable evidence from both options before I commit.”

## How I would write this in your notes

You could write:

> This paper is related to entropy and uncertainty-reduction theories because information sampling reduces uncertainty. However, the main contribution is different: instead of showing that people minimize absolute uncertainty or entropy option by option, the authors suggest that people seek information symmetry, balancing evidence across alternatives.

So yes, entropy theory is a useful background. But the paper’s keyword is probably not **entropy**. A better keyword is:

**relative uncertainty / information symmetry / value of information**

In one sentence:

> Entropy theory says people seek information to reduce uncertainty; this paper says people seek information to balance knowledge across competing options.

## How can we understand this paper through Okazawa &#38; Kiani (2023)?
Yes. There is a clear connection, but they are at **different levels**.

The Okazawa & Kiani 2023 paper is a **review/framework paper** about flexible perceptual decision-making. It says classical perceptual decision models usually study stable environments with fixed rules, but real decisions require flexible adjustment depending on context, goals, stimulus-action mapping, and decision policy. 

The first paper you sent can be understood as **one concrete example of this broader framework**.

## Main connection

Okazawa & Kiani divide flexibility into several types. One important type is **flexibility in decision policy**, meaning adjusting things like “how much evidence to accumulate” or “whether to favor one option.” 

The first paper fits well here, because it asks:

> how does the participant decide whether to keep sampling evidence, switch to another option, or stop and choose?

So the first paper is not mainly about changing task rules. It is more about **flexible control over information sampling**.

## The first paper extends evidence accumulation

Okazawa & Kiani summarize the classical view: perceptual decisions often involve accumulating sensory evidence toward a decision bound, and these models can explain choice, reaction time, and confidence. 

The first paper goes one step above this. It does not only ask:

> how is evidence accumulated?

It asks:

> when is it worth continuing to accumulate evidence?

That is why the key variable is **value of information, VoI**. The model captures how sampling actions compete with selection actions: when selection value becomes high, the probability of further sampling decreases. 

So I would say:

> The first paper adds a metacognitive or policy-control layer on top of evidence accumulation.

## Difference from task switching

This is also where your previous intuition is important.

In Okazawa & Kiani’s review, flexible decision-making can mean many things: changing relevant sensory features, changing stimulus-action mapping, changing categorization boundaries, or changing decision policy. 

But in the first paper, “switch” does **not** mainly mean switching from one task rule to another. It means:

> switching the target of evidence sampling within the same decision.

So the first paper’s “switch” is closer to **where should I sample next?**
Okazawa & Kiani’s “task switch” is closer to **which rule/context should guide my decision?**

## Neural connection

There is also a neural-level connection. Okazawa & Kiani argue that flexible decisions are supported by a distributed network, not only by prefrontal control areas. Their review highlights posterior parietal, sensory, motor, subcortical, and prefrontal regions. 

The first paper is consistent with this distributed view. It links ANN-derived VoI to cortical regions such as AI and ACC, and also examines neuromodulatory nuclei such as VTA and SN. 

## A writing-ready summary

You could write it like this:

> The first paper can be situated within the broader framework of flexible perceptual decision-making proposed by Okazawa and Kiani. While classical evidence accumulation models explain how sensory evidence is integrated toward a choice, the first paper focuses on a higher-level policy problem: how decision makers determine whether additional evidence is worth sampling and whether attention should remain on the current option or switch to another. Thus, its contribution is not primarily about task-rule switching or stimulus-action remapping, but about flexible control of evidence sampling through value-of-information computations.

A shorter version:

> In relation to Okazawa and Kiani’s framework, the first paper mainly concerns flexibility in decision policy rather than flexibility in stimulus-action mapping. It extends evidence accumulation models by asking how people control the sampling process itself—when to continue gathering evidence, when to switch sampling targets, and when to commit to a final choice.

![Diverse forms of context dependency in perceptual decision making](/assets/research-papers/image-12.png)

# What is the value of information?
In the first paper, **value of information, VoI** means:

> the subjective value of collecting one more piece of information before making the final choice.

More specifically, it asks:

> “Is it worth spending more time to sample more evidence from this patch?”

This is different from the **value of selection, VoS**, which asks:

> “Is it worth choosing this option now?”

## In this task

Participants needed to decide which patch had more red dots. But before choosing, they could keep revealing more dots. So every moment had a trade-off:

> More sampling = more accurate information
> but also more time cost

So VoI is the value of **continuing to sample**, while VoS is the value of **stopping and choosing**.

The model had four possible actions:

1. stay and sample the currently attended patch,
2. switch and sample the unattended patch,
3. select the attended patch,
4. select the unattended patch.

The value of switching was the ANN-estimated VoI of the unattended patch, reduced by a fitted switch cost. The two selection actions were based on the current subjective evidence estimate for which patch had more red dots. Then all four action values were passed through a softmax to generate action probabilities. 

## The key point

In this paper, VoI is **not simply confidence** and not simply entropy.

Confidence asks:

> “How sure am I?”

VoI asks:

> “Would getting more information improve my decision enough to justify the cost?”

So low confidence often means high VoI, but they are not identical. You could be uncertain, but if sampling is costly, VoI may still be low.

## What did they find?

The important finding is that VoI mainly depended on **sample counts**, not directly on the current red/black proportion. Their feature-selection analysis showed that cursor position, first-visit status, and the number of sampled dots in the attended and unattended patches were critical; the subjective red-dot proportion was not critical. 

This means the model suggests people ask something like:

> “How much evidence have I collected from this option compared with the other option?”

rather than only:

> “How uncertain is this option?”

## Symbolic form

After training the ANN, the authors used symbolic regression and found simple equations for VoI-like values:

$$
Value_{stay} = \beta_1 + \exp(-|\beta_2| \frac{N_{attended}}{N_{unattended}})
$$

$$
Value_{switch} = \beta_3 + \exp(-|\beta_4| \frac{\log(2N_{unattended})}{N_{attended}})
$$

Here, `N_{attended}` is the amount of evidence sampled from the current patch, and `N_{unattended}` is the amount sampled from the other patch. 

## Simple understanding

So in this paper:

> **VoI is the value of continuing evidence accumulation.**

And more specifically:

> **VoI tells the participant whether to keep sampling the current option, switch to sample the other option, or stop sampling and choose.**

The paper’s novel idea is that people do not only seek to reduce uncertainty in a general way. They seem to seek **information balance** between options.
