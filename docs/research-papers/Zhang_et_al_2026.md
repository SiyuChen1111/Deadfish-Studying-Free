<div class="csl-bib-body" style="line-height: 2; margin-left: 2em; text-indent:-2em;">
  <div class="csl-entry">Zhang, H., Zheng, Z., Hu, J., Wang, Q., Xu, M., Zhou, Z., Li, Z., &amp; Okazawa, G. (2026). <i>A battery of image classification challenges reveals shared and distinct object categorization behavior across monkeys, humans, and deep networks</i>. <a href="https://doi.org/10.7554/eLife.111725.1">https://doi.org/10.7554/eLife.111725.1</a></div>
  <span class="Z3988" title="url_ver=Z39.88-2004&amp;ctx_ver=Z39.88-2004&amp;rfr_id=info%3Asid%2Fzotero.org%3A2&amp;rft_id=info%3Adoi%2F10.7554%2FeLife.111725.1&amp;rft_val_fmt=info%3Aofi%2Ffmt%3Akev%3Amtx%3Adc&amp;rft.type=preprint&amp;rft.title=A%20battery%20of%20image%20classification%20challenges%20reveals%20shared%20and%20distinct%20object%20categorization%20behavior%20across%20monkeys%2C%20humans%2C%20and%20deep%20networks&amp;rft.rights=https%3A%2F%2Fcreativecommons.org%2Flicenses%2Fby%2F4.0%2F&amp;rft.description=Humans%20categorize%20objects%20at%20multiple%20levels%20of%20abstraction%E2%80%94animate%20versus%20inanimate%2C%20big%20versus%20small%2C%20and%20many%20other%20attributes.%20Despite%20its%20apparent%20challenge%2C%20the%20advent%20of%20deep%20neural%20networks%20(DNNs)%20has%20demonstrated%20that%20complex%20visual%20processing%20alone%20can%20support%20such%20classification%20without%20language%20or%20human-specific%20knowledge.%20This%20raises%20a%20natural%20question%3A%20to%20what%20extent%20can%20non-human%20primates%2C%20without%20language%2C%20perform%20such%20categorization%3F%20Although%20basic%20object-recognition%20behavior%20in%20monkeys%20such%20as%20similarity%20judgment%20has%20been%20extensively%20studied%2C%20their%20ability%20to%20classify%20objects%20across%20diverse%20rules%20remains%20poorly%20characterized.%20Here%2C%20we%20developed%20a%20task%20paradigm%20that%20enabled%20us%20to%20train%20monkeys%20on%20a%20large%20battery%20of%20binary%20classification%20tasks%20using%20natural%20object%20images%2C%20spanning%20more%20than%2010%20rules%2C%20such%20as%20animate%20versus%20inanimate%2C%20natural%20versus%20man-made%20objects%2C%20and%20mammalian%20versus%20non-mammalian%20animals.%20Monkeys%20acquired%20each%20rule%20in%20a%20few%20days%2C%20generalized%20the%20learned%20rules%20to%20new%20images%2C%20and%20exhibited%20error%20patterns%20consistent%20with%20human%20judgments.%20At%20the%20same%20time%2C%20their%20classification%20performance%20correlated%20more%20strongly%20with%20that%20of%20visual%20DNNs%20trained%20without%20language%20input%2C%20whereas%20human%20performance%20was%20better%20explained%20by%20language-informed%20DNNs.%20These%20results%20provide%20an%20important%20benchmark%20for%20the%20capacity%20of%20biological%20neural%20networks%20to%20perform%20image%20classification%20without%20language%20and%20human-specific%20knowledge.&amp;rft.identifier=urn%3Adoi%3A10.7554%2FeLife.111725.1&amp;rft.aufirst=Han&amp;rft.aulast=Zhang&amp;rft.au=Han%20Zhang&amp;rft.au=Zhihao%20Zheng&amp;rft.au=Jiaqi%20Hu&amp;rft.au=Qiao%20Wang&amp;rft.au=Mengya%20Xu&amp;rft.au=Zhaojiayi%20Zhou&amp;rft.au=Zixuan%20Li&amp;rft.au=Gouki%20Okazawa&amp;rft.date=2026-07-02&amp;rft.language=en"></span>
</div>

---
> This study developed a scalable paradigm for systematically testing object categorization in macaque monkeys. Monkeys rapidly learned and generalized many visually defined category rules, and their performance could not be explained by memorizing individual images or relying on simple low-level features. However, they struggled with abstract categories requiring human semantic or cultural knowledge. Across image-level behavioral patterns, monkey performance was most similar to visual DNNs trained without language, whereas human performance was closer to language-informed DNNs. The study therefore provides a behavioral benchmark for understanding what visual categorization can be achieved without language and where human conceptual knowledge provides an additional advantage.


---


## Core conclusion

The paper concludes that **macaque monkeys possess a surprisingly broad capacity for visual object categorization without language**. They learned many binary rules—such as animate versus inanimate, mammal versus non-mammal, and natural versus artificial—within several days and transferred the learned rules to images they had never previously seen.

However, their ability was not unlimited. Monkeys performed well when category membership could be inferred mainly from visual structure, but they struggled with categories that depend more strongly on acquired human knowledge, such as:

* fire-related versus water-related objects;
* Eastern versus Western objects.

Humans performed almost perfectly on these more abstract tasks, whereas monkeys and purely visual DNNs performed much more poorly.

The major theoretical conclusion is therefore:

> **Monkey categorization is primarily visually grounded, whereas human categorization is more strongly supplemented by semantic and language-related knowledge.**
![Triangular comparison across monkeys, humans, and artificial networks.](/assets/research-papers/zhang-et-al-2026-comparison.png)

This interpretation is supported by the cross-system comparison:

* monkey image-by-image behavior was most similar to visual DNNs trained without language, such as AlexNet and ResNet;
* human behavior was most similar to language-informed models such as CLIP and SigLIP2.

A useful conceptual summary is:

$$
\text{low-level visual features}
\rightarrow
\text{visual DNNs and monkeys}
\rightarrow
\text{language-informed DNNs and humans}
$$

The monkey is not simply a low-level image processor, but it also does not show the same knowledge-supported categorization profile as humans.

## Main contributions

### 1. A scalable paradigm for studying concept learning in monkeys

Previous studies usually examined only one or two categorization rules because monkeys required extensive training for each task. This paper developed a touchscreen-based object-dragging paradigm in which monkeys could learn a new binary rule within a few days.

This enabled the authors to conduct a large behavioral test battery involving:

* more than 10 major tasks;
* 26 tasks when subtasks are counted;
* approximately 315,000 trials;
* three macaque monkeys.

The methodological contribution is therefore not merely another categorization experiment. It is a **high-throughput framework** that can systematically map which rules monkeys can and cannot learn.
![Monkeys rapidly learn various abstract object concept classification tasks.](/assets/research-papers/zhang-et-al-2026-task-paradigm.png)

### 2. A systematic behavioral map of monkeys’ capacities and limits

The paper moves beyond asking:

> “Can monkeys distinguish animals from non-animals?”

Instead, it asks:

> “Across many types and levels of categorization, where does monkey performance succeed, and where does it break down?”

The results show that monkeys can generalize many visually supported categories, including fairly broad superordinate categories, but fail on some categories that require cultural, relational, or semantic knowledge. The authors describe this as an unusually systematic characterization of animal object-classification performance.

### 3. Evidence that monkeys learned generalizable rules rather than memorizing images

A central concern is that monkeys might merely memorize:

$$
\text{particular image} \rightarrow \text{particular target}
$$

The authors addressed this through several controls. Monkeys generalized to:

* previously unseen images;
* unseen basic-level object categories;
* cartoons and silhouettes;
* grayscale or texture-distorted stimuli.

Their learning and generalization were also poorer when images or categories were assigned randomly to targets without a meaningful shared rule. Therefore, the results cannot be sufficiently explained by memorizing individual training images or relying on one simple feature.

This makes the inference of **rule-based visual generalization** substantially stronger.

### 4. A triangular comparison among monkeys, humans, and artificial networks

Rather than comparing monkeys only with humans or only with DNNs, the study placed all three within the same experimental framework:

[
\text{monkeys}
\leftrightarrow
\text{humans}
\leftrightarrow
\text{computational models}
]

They used the same images and classification rules to compare:

* low- and mid-level image models;
* visual DNNs;
* language-informed DNNs;
* macaque behavior;
* human behavior.

This comparison revealed that monkey behavior was closer to ordinary visual DNNs, whereas human behavior was closer to models with language supervision.

This provides a framework for separating categorization based mainly on **visual representations** from categorization supported by **semantic or linguistic knowledge**.

### 5. An image-level benchmark rather than only task-average accuracy

The authors did not rely only on whether a system achieved 80% or 90% accuracy. They examined **which particular images** were easy or difficult for monkeys, humans, and models.

They used:

* image-level accuracy;
* reaction times;
* a drift-diffusion model to estimate image difficulty;
* behavioral dissimilarity matrices;
* t-SNE visualization of similarities among systems.

This is important because two systems can have the same average accuracy but make errors on completely different images. Image-level comparisons provide a more stringent measure of behavioral similarity.

### 6. A benchmark for comparative neuroscience and NeuroAI

The dataset and paradigm offer a benchmark for evaluating whether a computational model reproduces not only category accuracy, but also the characteristic successes and failures of biological vision.

A strong model of monkey vision should predict:

* which category rules monkeys can learn;
* which individual images cause difficulty;
* how quickly learning occurs;
* where generalization fails.

The reviewers similarly identified the study as useful for visual neuroscience, comparative cognition, computational modelling, and future NeuroAI research.

## Important interpretive limitation

The study shows that monkeys can behave **as though they learned a category rule**, but it does not establish that they internally possess the same conceptual or semantic representation as humans.

For example, successful mammal versus non-mammal classification does not prove that a monkey has a human-like abstract concept of “mammal.” It may have learned a sufficiently general combination of visual features that supports the same choices. The authors explicitly acknowledge that their paradigm cannot determine whether monkeys internally represent concepts such as “mammal.”

Likewise, similarity between monkey behavior and a DNN does not demonstrate that their internal mechanisms are identical. It shows similarity in their **observable patterns of classification success and failure**.
