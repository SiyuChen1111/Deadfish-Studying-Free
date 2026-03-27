# REINFORCEMENT LEARNING SUBJECT

**Subject:** Reinforcement Learning
**Lectures:** 7 (Intro to RL → Exploration and Exploitation)
**Status:** Complete

## OVERVIEW
Foundations of reinforcement learning including Markov Decision Processes, Dynamic Programming, Model-Free methods (Monte-Carlo, TD Learning), Q-Learning, Sarsa, Value Function Approximation, and Exploration strategies.

## STRUCTURE
```
reinforcement-learning/
├── README.md              # Subject index (all 7 lectures combined)
├── lecture-1.md through lecture-7.md  # Individual lecture files
└── assets/               # Lecture images (hashed filenames)
```

## WHERE TO LOOK

| Lecture | Topic | Key Concepts |
|---------|-------|---------------|
| Lecture 1 | Intro to RL | Agent, Environment, Policy, Value Function, Model, Exploration vs Exploitation |
| Lecture 2 | MDP | Markov Process, Bellman Equation, Optimal Value Function, Optimal Policy |
| Lecture 3 | DP | Policy Evaluation, Policy Iteration, Value Iteration, Gridworld Example |
| Lecture 4 | Model-Free Prediction | Monte-Carlo, Temporal-Difference (TD), TD(λ), Bootstrapping |
| Lecture 5 | Model-Free Control | Q-Learning, Sarsa, On-Policy vs Off-Policy, Importance Sampling |
| Lecture 6 | Value Approximation | Incremental Methods, Batch Methods, Gradient Descent, Deep RL foundations |
| Lecture 7 | Exploration | Multi-Armed Bandits, Regret, ε-greedy, UCB, Thompson Sampling |

## CONVENTIONS

**File Naming:**
- Lectures numbered sequentially: `lecture-1.md`, `lecture-2.md`, etc.
- No zero-padding used (e.g., `lecture-7.md`, not `lecture-07.md`)

**Image References:**
- Paths use absolute references from docs root: `/assets/reinforcement-learning/[filename].[ext]`
- Images have SHA256-style hashed filenames (e.g., `lksIJhrPs0l3bx6melO3GRytcEX52dXEGmw8ITx99nw=.png`)

**Content Organization:**
- `README.md` contains ALL lectures sequentially (main reading flow)
- Individual `lecture-N.md` files exist for sidebar navigation
- Both versions kept in sync - if you update `README.md`, update corresponding lecture file

## ANTI-PATTERNS (THIS SUBJECT)
None documented.

## NOTES

**Focus Areas** (from subject header):
- Dynamic Programming — Priority
- Q Learning — Priority
- Model Free — Priority
- Value Based — Priority (discrete spaces)
- Policy Based — Can be skipped

**Math Syntax:** Use KaTeX with `$...$` for inline or `$$...$$` for block equations.
