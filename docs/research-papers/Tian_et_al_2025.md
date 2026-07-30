# Overall conclusion

This paper asks whether the brain represents skilled actions using **discrete, reusable units** that function like symbols. Using a drawing task in two macaque monkeys, the authors show that learned strokes satisfy three operational criteria for symbolic representation:

1. **Invariance:** the same stroke representation survives changes in size and location.
2. **Categorical structure:** continuously changing images produce discrete stroke choices.
3. **Recombination:** previously learned strokes are reused to construct novel multistroke figures.

Crucially, all three properties were most strongly expressed in population activity in the **ventral premotor cortex, PMv**, particularly while the monkey was planning what to draw. The authors therefore propose that PMv contains an abstract representation of **action symbols**: discrete motor concepts that can be flexibly recombined into new action sequences.

![Summary of the drawing task and the three defining properties of action symbols.](/assets/research-papers/image-20.png)

---

# 1. Research background

A central property of intelligence is the ability to solve a new problem without having encountered exactly the same problem before. One possible explanation is **compositional generalization**.

The basic idea is:

$$
\text{A small set of reusable components}
\quad \longrightarrow \quad
\text{many novel combinations}
$$

For example, a person does not need to learn every possible drawing from scratch. They may possess reusable components such as lines, curves, circles and corners, which can be recombined into new drawings.

In cognitive science, these components are often described as **symbols**. A symbol is not merely a sensory feature or a muscle movement. It is an internal representation that can be:

* recognized across different low-level circumstances;
* treated as a discrete type;
* reused in different combinations.

Symbolic explanations are common in studies of language, mathematics, handwriting, drawing, tool use and reasoning. However, it has remained unclear whether such symbolic units have an identifiable neural implementation.

The paper therefore takes a motor behaviour—drawing—and asks whether the brain represents drawing actions as something like a vocabulary of reusable strokes.

---

# 2. Research gap

Previous neuroscience studies had already reported relatively abstract or invariant representations of:

* rules;
* actions;
* sequences;
* numbers;
* perceptual categories;
* spatial paths;
* cognitive maps.

But observing invariance alone is not sufficient to establish a symbolic representation.

The authors identify three major shortcomings in previous work.

## 2.1 Categorical structure was rarely tested systematically

A representation may be invariant without being categorical. To demonstrate categorical structure, researchers need to vary the stimulus continuously and determine whether neural activity nevertheless collapses into a small number of discrete states.

Previous studies rarely used continuous morphs that could distinguish between:

$$
\text{continuous tracking of the stimulus}
$$

and

$$
\text{discrete selection of a symbol}.
$$

## 2.2 Neural recombination was rarely demonstrated

A symbol should be reusable in different contexts. Therefore, the same neural representation should reappear when the corresponding component is embedded within different sequences.

Previous work occasionally found reuse of neural patterns, such as representations of segments of spatial paths, but it was often unclear whether the reused elements were genuinely discrete components.

## 2.3 Tasks rarely required compositional generalization

Many traditional motor tasks use:

* heavily practised movements;
* explicit movement cues;
* fixed sequences;
* working-memory reproduction;
* simple reaches used only to report a decision.

These tasks do not require the animal to independently determine how known elements should be assembled into a novel action sequence.

Therefore, before this study, there was no strong demonstration of a neural population that jointly showed:

$$
\boxed{
\text{invariance}
+
\text{categorical structure}
+
\text{recombination}
}
$$

during behaviour that required compositional generalization.

---

# 3. Key research questions

The paper addresses several connected questions.

## Primary question

**Does the primate brain represent learned actions as discrete and recombinable action symbols?**

## Behavioural questions

1. Do monkeys spontaneously learn stable stroke types, even when the exact trajectory is not instructed?
2. Is a learned stroke preserved when its size or spatial location changes?
3. When an image lies between two learned shapes, does the monkey produce an intermediate stroke, or choose one of two discrete learned strokes?
4. Can learned strokes be recombined to draw novel multistroke figures?

## Neural questions

1. Is there a neural population that represents the planned stroke rather than only the visible image, movement location or detailed kinematics?
2. Does the neural representation show the same invariance, categorization and recombination observed in behaviour?
3. Is this representation distributed uniformly across frontal cortex, or especially strong in a particular cortical area?
4. Does the same neural state reappear when a stroke is drawn alone and when it is embedded inside a larger sequence?

---

# 4. Research purpose

The study had two main purposes.

First, the authors wanted to design a behavioural paradigm in which symbolic representation could be tested using explicit and falsifiable criteria.

Second, they wanted to search across multiple frontal cortical regions for a neural population satisfying those same criteria.

Their logic was:

$$
\text{Behaviour shows action symbols}
$$

and then:

$$
\text{Neural activity shows the same defining properties}
$$

leading to:

$$
\text{candidate neural representation of action symbols}.
$$

An important strength is that they did not simply decode the identity of a shape or stroke. Decoding alone only shows that information is present. Instead, they tested the **structure of the representation**: whether it was invariant, categorical and reusable across compositions.

---

# 5. Detailed description of the task

## 5.1 Subjects and general setup

Two adult male rhesus macaques performed the task using a touchscreen. They sat facing the screen and eventually chose to draw with their left hand.

The screen displayed line figures inside a workspace approximately (16.6 \times 16.9) cm. The monkeys received a water–juice reward based primarily on how accurately their final drawing matched the target.

Importantly, the task did **not** tell the monkey:

* where to begin a stroke;
* which direction to draw;
* what stroke trajectory to use;
* what order to use for multiple strokes.

The image specified the desired final figure, but not the motor program required to produce it. This separation is central to the study.

---

## 5.2 Training procedure

The monkeys began as naïve subjects and were gradually trained through several stages:

1. Touch a large circle.
2. Touch a smaller target using one finger.
3. Hold the finger still on a target.
4. Track a moving dot.
5. Trace a line.
6. Trace individual shapes such as lines, arcs, L-shapes, circles and squiggles.
7. Trace displays containing multiple disconnected shapes.

After learning the general task, they extensively practised a collection of simple one-stroke shapes.

The experimenters did not impose a correct stroke trajectory. Nevertheless, through practice, each monkey developed a consistent way of drawing each shape.

For example, a circle could potentially be drawn:

* clockwise or counterclockwise;
* from the top, bottom or side;
* at different speeds;
* with different velocity profiles.

Each monkey settled on its own characteristic solution. The authors call the learned trajectory for a shape a **stroke primitive**.

This produced an important dissociation:

* the two monkeys could see the same target shape;
* but they often used different idiosyncratic strokes to produce it.

Thus, the primitive was not simply identical to the visual shape.

---

## 5.3 Structure of one trial

A typical trial contained the following stages.

### Stage 1: Hold

The monkey pressed and held a virtual start button near the bottom of the touchscreen.

This served as a form of finger fixation and helped standardize the starting posture.

### Stage 2: Image presentation and planning

After a brief random delay, the target image appeared.

The monkey continued holding the start button and was not yet allowed to draw. This created a planning period during which the monkey could inspect the image and prepare the action.

Depending on the monkey and experiment, the planning interval was approximately 0.6–2.4 seconds.

### Stage 3: Go cue

A tone was presented, and the target briefly disappeared for approximately 300 ms.

The monkey could then release the start button and move toward the drawing.

### Stage 4: Drawing

The target remained visible while the monkey drew. Touching the screen produced visible black “ink,” allowing the monkey to see the emerging drawing.

In most tasks, there was effectively no strict time limit.

### Stage 5: Completion report

When satisfied, the monkey pressed a green “done” button.

This is important because the animal, rather than the program, decided when the action sequence was complete.

### Stage 6: Performance feedback and reward

Performance was evaluated mainly according to:

* overlap between the drawing and target;
* Hausdorff distance between drawing and target;
* unnecessary drawing distance;
* certain task-specific factors during training.

Feedback included:

* screen colour;
* sounds;
* waiting time before reward;
* amount of juice reward.

On average, the monkeys received approximately 0.35 ml per trial, including unsuccessful trials.

---

# 6. The different task conditions

The paper is not based on one single drawing condition. It uses several related task variants, with each one designed to test a different defining property of symbols.

---

## 6.1 Baseline single-shape task: establishing primitives

The monkey saw one simple shape and had to reproduce it using one stroke.

The central observation was that:

* repeated drawings of the same shape used similar trajectories;
* different shapes were associated with distinct trajectories;
* the same visual shape could be associated with different trajectories across the two monkeys.

The trajectory was represented using its normalized two-dimensional velocity time series:

$$
\mathbf{v}(t)=
\begin{bmatrix}
v_x(t)\
v_y(t)
\end{bmatrix}.
$$

The similarity between two strokes was measured using a pairwise trajectory-distance measure based on Euclidean distances between these normalized velocity profiles.

This established each monkey’s personal “stroke vocabulary.”

However, a stable learned stroke is not automatically a symbol. It only becomes a candidate action symbol when it satisfies the following additional tests.

---

## 6.2 Motor-invariance task

### Question

Will the monkey preserve the same primitive when the target appears in a new location or at a new size?

### Manipulation

The experimenters varied:

* spatial location;
* size;
* or both.

Locations differed by as much as approximately 9.6 cm, and the largest shape could be about 2–2.5 times the smallest.

### Competing predictions

#### Symbol hypothesis

The monkey should apply the same abstract stroke pattern after translating or scaling it.

#### Memorization or failure hypothesis

The monkey may have learned only specific stimulus–response pairings and fail to generalize.

#### Motor-efficiency hypothesis

The monkey may change the stroke’s starting point or direction to minimize the distance from the initial hand location.

### Interpretation

Preserving the idiosyncratic trajectory across these manipulations indicates that the primitive is not tied to one specific set of muscle commands or spatial coordinates.

It is analogous to writing the same letter at different sizes and locations while preserving its identity.

---

## 6.3 Morph task: testing categorical structure

This is perhaps the most conceptually important part of the behavioural experiment.

### Question

When the visual stimulus changes continuously between two known shapes, does behaviour also change continuously?

### Stimuli

Each morph set contained:

* two well-practised endpoint shapes;
* four or five intermediate images created by continuously interpolating between them.

For example:

$$
\text{U shape}
\rightarrow
\text{partly closed U}
\rightarrow
\text{nearly circular figure}
\rightarrow
\text{circle}.
$$

The paper used 20 morph sets across the two monkeys.

### Continuous-tracing prediction

Under a purely visual-tracing strategy, the monkey’s trajectory should gradually change with the image:

$$
\text{image variation}
\approx
\text{drawing variation}.
$$

The relationship should be approximately linear.

### Symbolic-category prediction

Under the symbolic interpretation, the monkey should classify each image as belonging to one of two learned action categories.

This predicts:

1. a steep sigmoidal transition between primitive 1 and primitive 2;
2. trial-to-trial switching at the ambiguous category boundary.

The second signature is especially informative. The identical ambiguous image may sometimes produce primitive 1 and sometimes primitive 2. Therefore:

$$
\text{same visual stimulus}
\rightarrow
\text{different discrete planned actions}.
$$

The authors quantified this using a **primitive-alignment score**:

$$
A=\frac{d_1}{d_1+d_2},
$$

where (d_1) and (d_2) are the trajectory distances to the two endpoint primitives.

* (A\approx0): similar to primitive 1.
* (A\approx1): similar to primitive 2.

A bimodal or sharply switching pattern indicates categorical selection rather than continuous imitation.

---

## 6.4 Multishape task: recombination of separated shapes

### Stimuli

Each target contained two to four disconnected shapes appearing at randomly selected locations.

The monkey could choose:

* the order of shapes;
* the trajectory between shapes;
* how to organize the overall movement sequence.

It was required to use one stroke per shape and not draw visible ink across the empty gaps.

### Competing strategies

#### Globally efficient trajectory

The monkey could plan one overall route through the display, selecting stroke directions and orders that minimize movement between shapes.

#### Primitive recombination

The monkey could draw each component using its usual primitive, even when that led to longer hand movements between shapes.

### Resulting logic

The monkeys frequently preserved their familiar primitives even when this increased the movement distance across gaps.

This suggests that the sequence was constructed from discrete reusable units rather than optimized as one globally continuous trajectory.

---

## 6.5 Character task: generalization to novel connected figures

This task provides the strongest test of composition.

### Stimuli

The authors generated complex connected figures called **characters**. Each character was created by combining approximately two to six simple shape components.

These characters were deliberately ambiguous. A complex figure could often be decomposed into primitives in several possible ways.

The monkeys were shown:

* practised characters;
* completely novel characters;
* including first presentations of figures that they had never previously encountered.

### Why this task is difficult

The image did not explicitly indicate:

* where one component ended and another began;
* how many strokes to use;
* which primitive should be selected;
* in what sequence components should be drawn.

Therefore, the monkey had to infer a motor decomposition.

### Four possible outcomes

The authors considered four possibilities:

1. **Failure:** the monkey cannot draw the novel figure.
2. **Single trajectory:** the monkey draws it as one continuous path.
3. **Nonsymbolic segmentation:** the monkey uses several strokes, but they do not match previously learned primitives.
4. **Symbolic recombination:** the monkey constructs the character by reusing known primitives.

The monkeys’ behaviour most strongly matched the fourth possibility.

---

# 7. Methods

## 7.1 Behavioural measurements

Drawing data consisted of touchscreen (x,y) coordinates. The signals were temporally aligned at 500 Hz and filtered before individual strokes were segmented.

The main behavioural analyses included:

* normalized velocity trajectories;
* pairwise trajectory distances;
* single-trial decoding of primitive identity;
* primitive-alignment scores;
* classification of character strokes as matching or not matching learned primitives;
* comparison with the other monkey’s primitives;
* comparison with artificially “remixed” control primitives.

The remixed controls were particularly useful. They contained portions of real primitives but did not preserve the complete trajectory. This tested whether the character strokes matched the entire learned action pattern rather than merely sharing a short curve or local segment.

---

## 7.2 Neural recording

The authors chronically implanted sixteen 32-channel microelectrode arrays in the right frontal cortex, contralateral to the drawing hand.

They recorded simultaneously from eight regions:

* primary motor cortex, M1;
* dorsal premotor cortex, PMd;
* ventral premotor cortex, PMv;
* supplementary motor area, SMA;
* presupplementary motor area, preSMA;
* dorsolateral prefrontal cortex, dlPFC;
* ventrolateral prefrontal cortex, vlPFC;
* frontopolar cortex, FP.

Approximately 48 units per area were recorded on average for each monkey, although these included both single-unit and multiunit signals.

This multiregional design was important because it allowed the researchers to compare areas associated with:

* movement execution;
* action planning;
* sequencing;
* executive control;
* abstraction and reasoning.

---

## 7.3 Neural analysis

The analyses focused mainly on population activity during:

* the planning period;
* the period immediately preceding stroke onset;
* and, in some controls, movement execution.

Major analysis methods included:

### Population projections

Principal-component or related linear projections were used to visualize neural trajectories in lower-dimensional state spaces.

These visualizations were not the main evidence by themselves. The authors also quantified the effects in the original population activity.

### Neural distance

They calculated an adjusted Euclidean distance between population responses from different conditions.

Conceptually:

$$
D_{\text{neural}}(A,B)

$$


This allowed them to separately estimate:

* primitive encoding while controlling for location;
* location encoding while controlling for primitive;
* primitive encoding while controlling for task type;
* task-type encoding while controlling for primitive.

### Cross-condition decoding

A decoder was trained to identify the primitive at one spatial location and tested at another location.

Successful generalization indicates that primitive identity is represented in a shared format across locations.

### Neural primitive alignment

For morph stimuli, the authors adapted the behavioural primitive-alignment measure to neural population activity.

This tested whether neural states varied continuously with the image or occupied discrete primitive-related states.

---

# 8. Main results

## 8.1 Monkeys learned stable, idiosyncratic primitives

Each simple shape was repeatedly produced with a relatively consistent stroke trajectory.

Different shapes were associated with distinguishable trajectories, and single-trial decoding could identify the primitive.

Moreover, the two monkeys often used different trajectories for the same visual shape. This supports the idea that the relevant unit was a learned action representation rather than a direct copy of the visual stimulus.

---

## 8.2 Behavioural result 1: motor invariance

Changing the location or size of the target had relatively little effect on the identity of the stroke trajectory.

Drawings of the same shape remained more similar to one another than drawings of different shapes, even when produced at different locations or scales.

Therefore, the learned primitive generalized over low-level motor variables.

---

## 8.3 Behavioural result 2: categorical structure

Although the images varied continuously along the morph continuum, the monkeys’ drawings showed a sharp sigmoidal transition between two learned primitives.

At the ambiguous category boundary, the same image produced different primitives across trials.

This means that behaviour was better described as:

$$
\text{continuous sensory input}
\rightarrow
\text{discrete action-category selection}
$$

rather than:

$$
\text{continuous sensory input}
\rightarrow
\text{continuous motor imitation}.
$$

---

## 8.4 Behavioural result 3: recombination

In multishape figures, the monkeys preserved familiar primitives even when doing so produced less efficient transitions between components.

In the character task:

* more than 82% of strokes overall matched the monkey’s own primitive set;
* more than 74% of strokes in novel characters matched its own primitives;
* fewer than 21% of novel-character strokes matched the other monkey’s primitives;
* fewer than 43% matched artificial remixed primitives.

Thus, the matches were specific to each monkey’s complete learned trajectories.

This is strong evidence that novel drawings were constructed by recombining existing action units rather than by inventing entirely new trajectories for each image.

---

# 9. Neural results

## 9.1 PMv encoded primitive identity invariantly

During planning, PMv population activity strongly distinguished the primitive that would be drawn but was relatively insensitive to its spatial location.

In contrast:

* dlPFC showed stronger location-related structure;
* M1 showed stronger movement-related responses;
* other motor areas mixed primitive and location information more strongly.

A decoder trained on PMv activity at one location generalized successfully to new locations.

PMv primitive encoding was also invariant to size.

Therefore, PMv did not merely encode a specific reach direction or set of spatial coordinates. It represented the planned action type in an abstract format.

---

## 9.2 PMv showed categorical neural states

During the morph task, PMv activity moved toward one of two primitive-related population states.

For ambiguous images, activity separated according to what the monkey would later draw:

$$
\text{identical image}
+
\text{primitive 1 behaviour}
\rightarrow
\text{primitive 1 neural state},
$$

whereas

$$
\text{identical image}
+
\text{primitive 2 behaviour}
\rightarrow
\text{primitive 2 neural state}.
$$

This is critical because it shows that PMv activity predicted the internally selected action, not merely the visual image.

Neural primitive alignment showed:

* a sigmoidal transition across morphs;
* trial-to-trial switching at the category boundary.

The neural separation was slower for ambiguous images, and behavioural reaction times were also longer. The authors interpret this as being consistent with competition between alternative primitive states, potentially resembling a winner-take-all process.

---

## 9.3 PMv representations were reused during recombination

The authors compared a primitive produced:

* alone in the single-shape task;
* as one component of a multistroke character.

PMv population activity immediately before the stroke was similar across these two contexts.

In other words:

$$
\text{PMv representation of primitive } A
$$

was preserved whether (A) was the entire action or one component of a larger sequence.

PMv showed:

* high primitive encoding;
* low task-type encoding.

By contrast, preSMA distinguished the single-shape and character contexts more strongly, consistent with a greater role in sequencing or task organization.

---

## 9.4 PMv representation was not reducible to vision or kinematics

Additional control analyses showed that PMv activity preferentially encoded the planned primitive rather than:

* the currently viewed shape;
* the complex visual structure of the character;
* generic stroke velocity;
* immediate movement location.

Generic velocity encoding was more evident in M1 than in PMv.

Together, these findings suggest a hierarchy:

$$
\text{visual target}
\rightarrow
\boxed{\text{abstract action representation in PMv}}
\rightarrow
\text{detailed motor execution in motor circuits}.
$$

---

# 10. Authors’ discussion and interpretation

## 10.1 PMv as a neural substrate for action symbols

The central claim is not that one PMv neuron represents one symbol. The representation exists at the **population level**.

Different primitives correspond to different patterns or regions of PMv population activity. These patterns are:

* stable across low-level transformations;
* categorically organized;
* reusable across different action sequences.

Thus, symbols may be implemented within distributed neural population states rather than as literal symbolic tokens stored in individual cells.

---

## 10.2 Why PMv rather than PFC?

The authors initially considered prefrontal areas as likely candidates because PFC has often been associated with abstraction, rules and categories.

However, this task required detailed skilled movement. The relevant abstraction was therefore **motor abstraction**, not abstraction detached from action.

PMv is well positioned for this role because it lies at the intersection of:

* visual input;
* prefrontal cognitive signals;
* sequencing-related circuits;
* primary motor output pathways.

It can therefore transform a structured visual goal into an abstract action type that can later be converted into detailed movement.

---

## 10.3 Relationship to mirror neurons and action concepts

PMv has previously been associated with:

* grasp representation;
* action observation;
* imitation;
* action understanding;
* motor imagery;
* mirror-neuron responses.

The present study extends those findings by systematically demonstrating:

* categorical structure;
* recombination;
* generalization to novel compositions.

The authors therefore suggest that PMv may contain a repertoire of abstract action types, of which the learned drawing primitives are one example.

---

## 10.4 Why the task is methodologically important

The authors emphasize three features of their paradigm.

### Free choice

The monkey was not given explicit movement instructions. It had to decide how to produce the target.

### Ambiguity

Many images could be interpreted or decomposed in more than one way. This exposed the monkey’s internally learned structure.

### Flexible stimulus generation

The experimenters could independently manipulate:

* size;
* location;
* continuous shape morphing;
* number and arrangement of components;
* novelty;
* composition.

This made it possible to test the three defining properties within one coherent task family.

---

## 10.5 Bridging symbolic and neural-network explanations

Symbolic theories and neural-network theories are sometimes treated as competitors.

Symbolic theories describe cognition in terms of discrete components and rules. Neural-network and dynamical-systems theories describe cognition using continuous activity patterns and evolving neural states.

This paper suggests that these views may be compatible:

$$
\text{discrete cognitive symbol}
$$

may be implemented as

$$
\text{a stable region or attractor-like state in continuous neural population space}.
$$

The switch between alternative actions for an ambiguous image may correspond to neural dynamics selecting between competing population states.

Thus, symbolic computation does not necessarily require a brain architecture resembling a digital computer. Symbols may emerge from the geometry and dynamics of a recurrent neural population.

---

# 11. Critical evaluation and limitations

The paper provides unusually systematic evidence, but its conclusion should still be interpreted carefully.

## 11.1 Only two monkeys were studied

This is common in invasive primate recording studies, but the primitives were explicitly idiosyncratic. More subjects would help establish how general the neural organization is across individuals.

## 11.2 These are basic action symbols

The results do not demonstrate that macaques possess human-like symbolic systems involving:

* recursive syntax;
* arbitrary reference;
* higher-order relations;
* linguistic semantics.

The paper demonstrates a more elementary form of symbolic representation: reusable, invariant and categorical action components.

## 11.3 PMv was strongest, but probably not acting alone

The results show that PMv expressed the three properties most consistently. They do not show that symbolic action generation occurs exclusively in PMv.

Visual interpretation, sequence organization, working memory, action selection and execution probably involve interactions among PMv, vlPFC, preSMA, parietal cortex and M1.

Therefore, “localized in PMv” should be understood as:

> PMv contained the clearest population representation under the authors’ tests,

not:

> PMv is the only brain area involved.

## 11.4 Neural evidence was primarily correlational

The study recorded activity but did not causally disrupt primitive representations.

A future study could use reversible inactivation, stimulation or targeted perturbation to test whether disrupting PMv specifically impairs:

* transfer across locations;
* categorical selection;
* recombination of novel characters.

## 11.5 Extensive learning may shape the representation

The monkeys underwent substantial training. The paper reveals the representation after primitives had been learned, but it does not fully explain:

* how PMv states emerged during learning;
* whether they began as continuous movement representations;
* when categorical boundaries developed;
* how quickly a new primitive could be acquired.

---

# 12. Final integrated summary

The study begins with a major theoretical problem: intelligent behaviour requires generalization, and compositional theories propose that this is achieved by recombining discrete symbols. However, neuroscience had not identified a neural representation satisfying all the defining properties of symbols.

To address this gap, the authors trained two macaques to freely trace geometric figures. Each monkey spontaneously developed its own set of stable stroke primitives. The researchers then tested whether these primitives behaved like symbols.

Behaviourally, the primitives generalized across size and location, showed discrete category boundaries for continuously morphed stimuli, and were reused to construct novel multistroke characters. Neurally, the same three properties were most clearly present in PMv population activity during action planning. PMv represented which primitive the monkey intended to produce, largely independently of the current visual image, movement location, figure size, detailed kinematics or sequence context.

The paper therefore concludes that PMv contains an abstract population-level representation of **action symbols**. These action symbols may serve as reusable building blocks from which novel skilled behaviours are composed, providing a possible neural bridge between symbolic theories of cognition and continuous neural-network dynamics.
