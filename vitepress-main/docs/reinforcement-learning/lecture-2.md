## Lecture2:  Markov Decision Process

![](/assets/reinforcement-learning/assets/reinforcement-learning/jy2mNsy7VghdulRKCDsqTGfPQ2iSRiLuejUiN6WN-gI=.png)

![](/assets/reinforcement-learning/assets/reinforcement-learning/xq60ZOSyjFoyWLD_xMX4oo63hzUi1f8HTOgXX04C6UY=.png)

![](/assets/reinforcement-learning/assets/reinforcement-learning/O3kLtdsr61MinRg1tEON770Tsk4FyKyNZ32Ya6V4-Fs=.png)

* Each row of this matrix tells us what will happen for each state that I was in. 

![](/assets/reinforcement-learning/assets/reinforcement-learning/Y0M9m0POc3YOSdKTu7zElBEGd986Z2o_C7k83VHfQpQ=.png)

![](/assets/reinforcement-learning/assets/reinforcement-learning/JklYONXY1HfHgo2gYmqQHvRUnZtKQmpJiiELrJgok4A=.png)

* This example gives an explicit explanation for how the matrix was built
* Markov Reward Process.
  * It is the Markov process with some value judgement
  ![](/assets/reinforcement-learning/assets/reinforcement-learning/KJ4_814FoaXZP-iV81hJ1EaEiEm8mzF6FySQy1l2XCE=.png)

  ![](/assets/reinforcement-learning/assets/reinforcement-learning/NooKy-v31KcQGNp3scrcvIYDt8LPkK0tQECYB197-VU=.png)
  * $G_{t}$refers to the"goal", the goal is to maximize the sum of all of these rewards
  * For $\gamma$:
    * 0 kind of means maximally short-sighted, which shows that you basically zero  anything beyond your current time step  and you only look at that first reward
    * 1 is maximally fast sighted where you care about all rewards going infinitely far into the future 
  ![](/assets/reinforcement-learning/assets/reinforcement-learning/JB0DYmVcDgqvdhk47Ora_m_MTKb_wrEQcBXVKEtUAAo=.png)

  ![](/assets/reinforcement-learning/assets/reinforcement-learning/9sx54gPzyQY0FZSd21jeB6Y7TMehLE_D6R7wkP7Gkew=.png)

  ![](/assets/reinforcement-learning/assets/reinforcement-learning/t_ryTthSDcB0lrwRS8AhQayWDQKhg3BhPAIw8teuGQM=.png)
  * Bellman equation may be the most fundamental relationship in RL
  ![](/assets/reinforcement-learning/assets/reinforcement-learning/AVqWdLy-fLy0Wp7W-NkOkU61DKs5z3JdCgC_uMbFWsE=.png)

  ![](/assets/reinforcement-learning/assets/reinforcement-learning/qtqnSExaLVoMTLDWnXb1Kz1LjR0HLBfOYmEeNcOemLA=.png)

   

  ![](/assets/reinforcement-learning/assets/reinforcement-learning/rh7kqacRDL2yhgxELtrsXm4hzabKvw64lM6FM2rQJo0=.png)
* Markov Decision Process

  ![](/assets/reinforcement-learning/assets/reinforcement-learning/6MjRFgU-DDuMmizUAs0rQg50JPIsNsInWpSaf182RYs=.png)
* Policies

  ![](/assets/reinforcement-learning/assets/reinforcement-learning/x6QFUnd1mnlyPlOvNwknFwuCFt7vZyw-V4T4_HsS0m8=.png)
  * &#x20; What we want to do is maximizing the reward from now onwards that the way we' going to behave optimally.
  * Our definition of state information-wise includes all the information about the expected future
  ![](/assets/reinforcement-learning/assets/reinforcement-learning/PQvN7aIBPl-TvXTr09-pwjdu1ceBP1TFs9hGSQPgn-8=.png)
* Value function

  ![](/assets/reinforcement-learning/assets/reinforcement-learning/QbbrGK_skmYy6ErIDZF_zVOwWZpemQFPuwUxN7gYNNA=.png)
  * state-value function
    * The $v_{\pi}(s)$ tells us how good is it to be in state s if I'm following policy $\pi$ 
  * action-value function
* Bellman Expectation Equation

  ![](/assets/reinforcement-learning/assets/reinforcement-learning/y2Ga0peaC_BjkZOh9VCNbvQO1EMpVQgo7rzcQssBfiw=.png)

  ![](/assets/reinforcement-learning/assets/reinforcement-learning/W7yOj4Z-nMDX133PMrrFmQdkmKR91I4hwugJW22fwBM=.png)
  * it basically tells us now we really know how good is it to be in each one of these states you really will get 7.4 units of reward in expecation if you just behave according to this policy.
  * Under the policy of this example, we do everything with the probability of 50 percent.
  * In this map, the reward does depend on the action you take
* Optimal Value Function

  ![](/assets/reinforcement-learning/assets/reinforcement-learning/sELtSZa1zTIl-lwf-YdOIb-fZJ6dVyVH1Yj6xkGx_aY=.png)

  ![](/assets/reinforcement-learning/assets/reinforcement-learning/fPYFClpTSfTMVNPDY65VYSX4HQbUKby9F1EwhWSar4o=.png)
* Optimal Policy

  ![](/assets/reinforcement-learning/assets/reinforcement-learning/WAlczpGO5vnpqmELYBrekdr3z1eBUt0-5yIkkLlI3uo=.png)

  ![](/assets/reinforcement-learning/assets/reinforcement-learning/pMUaBl9eWGqMbGCjWNJobbAtnAMnMiI602aDawvdBTA=.png)
  * &#x20;An optimal policy can be found by maximising over action-value function.

 

![](/assets/reinforcement-learning/assets/reinforcement-learning/KfQ5ntH6VhoW8EDI76YP1Ps-znm_tNd3C5bn-IVSMec=.png)

* The max of the q values can be achieved by picking up the max of values of each of the actions that you can take from that state.

  ![](/assets/reinforcement-learning/assets/reinforcement-learning/INhMq-P83Qh49Dx2MnFz6Uv_PbCCOix7yV3AmyXwX5Q=.png)

![](/assets/reinforcement-learning/assets/reinforcement-learning/Y2VIbgZfplInysm2KdQlboNpv5ZwwOVgXh6ueTZdaOM=.png)

![](/assets/reinforcement-learning/assets/reinforcement-learning/_GlFfQ0vD6dEvadbaviTD5lvRO7oUZ6cYuKI1tBiwSo=.png)

![](/assets/reinforcement-learning/assets/reinforcement-learning/In2OU8fUopZmZ7iQLDg_SVpK0LSvMZYcol4m1yHzIwc=.png)

* All you need to do is to figure out how do I behave optimally for one step,  and the way you behave optimally for one step is to maximize over those optimal values functions in the places you might end up in.

![](/assets/reinforcement-learning/assets/reinforcement-learning/bvGwR9CnpimRl_JlHVbwJGLkkuTHxwXYFZjj70cfQbE=.png)

