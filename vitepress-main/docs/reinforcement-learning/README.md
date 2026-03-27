# Daily Learning：RL 

* Dynamic Programming 重点看
* Q learning 重点看
* Model free 重点看
* Value based 重点看 离散空间
* \<u>policy based可以省略一点\</u>

## Lecture1: Intro to RL 

[2025-11-04](file:///workspace/d047dbd0-d7d7-404e-8dc2-62572c04acd5/wl-Rrmz1Mj5CWeLLEwT_3)

![](/assets/reinforcement-learning/assets/lksIJhrPs0l3bx6melO3GRytcEX52dXEGmw8ITx99nw=.png)

* Characteristics of RL
  * There's no supervisor, but only a reward signal
  * Feedback is delayed, not instantaneous
  * Time really matters
  * Agent's actions affect the subsequent data it receives

![](/assets/reinforcement-learning/assets/QpIld6Y6gIwlv1BfS2Ze3p_50CGbIK5bE-hc6TTGMTI=.png)

 

![](/assets/reinforcement-learning/assets/J2R3iNiT6ds1yMy5OCtckann7nM3A2laoGNhfI7hGe8=.png)

* What we need is to figure out the algorithm in the  Agent's "mind"

![](/assets/reinforcement-learning/assets/Nqur6PLKwbYuL9R5q-dQb0ITl8CU5l2j5FUnpx2U5YQ=.png)

* The valid definition of state would be to only look at the last observation
  * &#x20;Environment State

    ![](/assets/reinforcement-learning/assets/BlaI8qAhERyJ8fYqdRpXWyYp1utcXYTwmbt8PNLWA3w=.png)
  * Agent State

    ![](/assets/reinforcement-learning/assets/vGxyttclbQVs7E25BpjhY_gwcvzwKDXchA4oaDtf4jQ=.png)
  * &#x20;Information(Markov) State

    ![](/assets/reinforcement-learning/assets/SIW8J0wxz3jZm2QicB9jRl5d4yZ-8UA9CjZsO7_fgqc=.png)
    * The Markov state contains enough information to characterize all future rewards
  ![](/assets/reinforcement-learning/assets/T6XeK_tBNLQhMn7vzS6YQHIptEK836NR9bNjGvTYctM=.png)

![](/assets/reinforcement-learning/assets/fWWKv1SjidDYq4z43bcd-Uvicv2oZIoc1kyxEQ2-iWY=.png)

* Major Components of an RL Agent

  ![](/assets/reinforcement-learning/assets/iwK8PG6vFyT6r73ySuFdLKZpOPRfISWbTD_RbzQXJA4=.png)
  * Policy

    ![](/assets/reinforcement-learning/assets/Z3UdY83YUPmAeXGXqHsZcHLqDXDiSd5hKPdL2AXcYow=.png)

    ![](/assets/reinforcement-learning/assets/VvqO8ilZrumKwxAq2CftMdjUNH3QX-OYKv0ESxUAnpA=.png)
  * Value function

    ![](/assets/reinforcement-learning/assets/yhCPrepXer6MyIeLSTPF_wz-nln71kP5dhI4xjP4LH8=.png)
    * The behavior that maximizes the value is the one that correctly trades off the agent's risks so as to get the maximum  amount of reward going into the future,  and that just automatically emerges from the performance.
    ![](/assets/reinforcement-learning/assets/dB6ZP-or-zq5EZGuHbDBKj5VWfkHs-atvMMJO6_wjhw=.png)
  * Model

    ![](/assets/reinforcement-learning/assets/LY5F6qf3b3qS57JAfGMpWFGkKqWnNEOyBDf2tdnVxFI=.png)

     

    ![](/assets/reinforcement-learning/assets/HSr37ZvgNxgLfjNu82dNkObbkSJ-FCULM2S3AO39t7k=.png)

![](/assets/reinforcement-learning/assets/Yb7dfLIVBZu7w6Dagf6xELp5mvngItO0IOFX7XlAd-k=.png)

![](/assets/reinforcement-learning/assets/wnOe24jGbsOLb_O8vNbwQB95nsTYsDXI1GshPJz81UA=.png)

![](/assets/reinforcement-learning/assets/TyGpMb5BjYPpVP58COsQggj8U_IpLN7U3FKuO2vonvw=.png)

![](/assets/reinforcement-learning/assets/tSxW_jWDZU-9OP_UN_5SvVpvPmfCR3dUcdN1jyrje3Y=.png)

* RL is like trial-and-error learning
* The agent should discover a good policy
* From its experiences of the environment
* Without losing too much reward along the way
* Exploration & Exploitation
  * Exploration finds more information about the environment
    * choosing to give up some reward that you know about in order to find more about the environment
  * Exploitation exploits known information to maxmise reward 
  * It's usually important to explore as well as exploit

![](/assets/reinforcement-learning/assets/xL9DHI7fTB2zpLG7wNwH4IYKR8f0hzmZtl55566Ehoc=.png)

* RL is we need to solve the prediction problem in order to solve the control problem which means we need to evaluate all of the policies to find the best one.



## Lecture2:  Markov Decision Process

![](/assets/reinforcement-learning/assets/jy2mNsy7VghdulRKCDsqTGfPQ2iSRiLuejUiN6WN-gI=.png)

![](/assets/reinforcement-learning/assets/xq60ZOSyjFoyWLD_xMX4oo63hzUi1f8HTOgXX04C6UY=.png)

![](/assets/reinforcement-learning/assets/O3kLtdsr61MinRg1tEON770Tsk4FyKyNZ32Ya6V4-Fs=.png)

* Each row of this matrix tells us what will happen for each state that I was in. 

![](/assets/reinforcement-learning/assets/Y0M9m0POc3YOSdKTu7zElBEGd986Z2o_C7k83VHfQpQ=.png)

![](/assets/reinforcement-learning/assets/JklYONXY1HfHgo2gYmqQHvRUnZtKQmpJiiELrJgok4A=.png)

* This example gives an explicit explanation for how the matrix was built
* Markov Reward Process.
  * It is the Markov process with some value judgement
  ![](/assets/reinforcement-learning/assets/KJ4_814FoaXZP-iV81hJ1EaEiEm8mzF6FySQy1l2XCE=.png)

  ![](/assets/reinforcement-learning/assets/NooKy-v31KcQGNp3scrcvIYDt8LPkK0tQECYB197-VU=.png)
  * $G_{t}$refers to the"goal", the goal is to maximize the sum of all of these rewards
  * For $\gamma$:
    * 0 kind of means maximally short-sighted, which shows that you basically zero  anything beyond your current time step  and you only look at that first reward
    * 1 is maximally fast sighted where you care about all rewards going infinitely far into the future 
  ![](/assets/reinforcement-learning/assets/JB0DYmVcDgqvdhk47Ora_m_MTKb_wrEQcBXVKEtUAAo=.png)

  ![](/assets/reinforcement-learning/assets/9sx54gPzyQY0FZSd21jeB6Y7TMehLE_D6R7wkP7Gkew=.png)

  ![](/assets/reinforcement-learning/assets/t_ryTthSDcB0lrwRS8AhQayWDQKhg3BhPAIw8teuGQM=.png)
  * Bellman equation may be the most fundamental relationship in RL
  ![](/assets/reinforcement-learning/assets/AVqWdLy-fLy0Wp7W-NkOkU61DKs5z3JdCgC_uMbFWsE=.png)

  ![](/assets/reinforcement-learning/assets/qtqnSExaLVoMTLDWnXb1Kz1LjR0HLBfOYmEeNcOemLA=.png)

   

  ![](/assets/reinforcement-learning/assets/rh7kqacRDL2yhgxELtrsXm4hzabKvw64lM6FM2rQJo0=.png)
* Markov Decision Process

  ![](/assets/reinforcement-learning/assets/6MjRFgU-DDuMmizUAs0rQg50JPIsNsInWpSaf182RYs=.png)
* Policies

  ![](/assets/reinforcement-learning/assets/x6QFUnd1mnlyPlOvNwknFwuCFt7vZyw-V4T4_HsS0m8=.png)
  * &#x20; What we want to do is maximizing the reward from now onwards that the way we' going to behave optimally.
  * Our definition of state information-wise includes all the information about the expected future
  ![](/assets/reinforcement-learning/assets/PQvN7aIBPl-TvXTr09-pwjdu1ceBP1TFs9hGSQPgn-8=.png)
* Value function

  ![](/assets/reinforcement-learning/assets/QbbrGK_skmYy6ErIDZF_zVOwWZpemQFPuwUxN7gYNNA=.png)
  * state-value function
    * The $v_{\pi}(s)$ tells us how good is it to be in state s if I'm following policy $\pi$ 
  * action-value function
* Bellman Expectation Equation

  ![](/assets/reinforcement-learning/assets/y2Ga0peaC_BjkZOh9VCNbvQO1EMpVQgo7rzcQssBfiw=.png)

  ![](/assets/reinforcement-learning/assets/W7yOj4Z-nMDX133PMrrFmQdkmKR91I4hwugJW22fwBM=.png)
  * it basically tells us now we really know how good is it to be in each one of these states you really will get 7.4 units of reward in expecation if you just behave according to this policy.
  * Under the policy of this example, we do everything with the probability of 50 percent.
  * In this map, the reward does depend on the action you take
* Optimal Value Function

  ![](/assets/reinforcement-learning/assets/sELtSZa1zTIl-lwf-YdOIb-fZJ6dVyVH1Yj6xkGx_aY=.png)

  ![](/assets/reinforcement-learning/assets/fPYFClpTSfTMVNPDY65VYSX4HQbUKby9F1EwhWSar4o=.png)
* Optimal Policy

  ![](/assets/reinforcement-learning/assets/WAlczpGO5vnpqmELYBrekdr3z1eBUt0-5yIkkLlI3uo=.png)

  ![](/assets/reinforcement-learning/assets/pMUaBl9eWGqMbGCjWNJobbAtnAMnMiI602aDawvdBTA=.png)
  * &#x20;An optimal policy can be found by maximising over action-value function.

 

![](/assets/reinforcement-learning/assets/KfQ5ntH6VhoW8EDI76YP1Ps-znm_tNd3C5bn-IVSMec=.png)

* The max of the q values can be achieved by picking up the max of values of each of the actions that you can take from that state.

  ![](/assets/reinforcement-learning/assets/INhMq-P83Qh49Dx2MnFz6Uv_PbCCOix7yV3AmyXwX5Q=.png)

![](/assets/reinforcement-learning/assets/Y2VIbgZfplInysm2KdQlboNpv5ZwwOVgXh6ueTZdaOM=.png)

![](/assets/reinforcement-learning/assets/_GlFfQ0vD6dEvadbaviTD5lvRO7oUZ6cYuKI1tBiwSo=.png)

![](/assets/reinforcement-learning/assets/In2OU8fUopZmZ7iQLDg_SVpK0LSvMZYcol4m1yHzIwc=.png)

* All you need to do is to figure out how do I behave optimally for one step,  and the way you behave optimally for one step is to maximize over those optimal values functions in the places you might end up in.

![](/assets/reinforcement-learning/assets/bvGwR9CnpimRl_JlHVbwJGLkkuTHxwXYFZjj70cfQbE=.png)

## Lecture3: Planning by Dynamic Programming

* Intro

  ![](/assets/reinforcement-learning/assets/l7Y_cdM-KH9ACofd2aqGb0TOSPQP9uYCZBNRaYYvYOI=.png)

  ![](/assets/reinforcement-learning/assets/klkIJkFBhdP8DY4Sg0iJZmmFuNN_Kf2hkH_V6VFjiDI=.png)
* Planning in an MDP

  ![](/assets/reinforcement-learning/assets/8WxgnfGqOBQ9P16C1MBK1mxOJZp0LzNincob7OtkpvA=.png)
* What's a Dynamic Programming solving?

  ![](/assets/reinforcement-learning/assets/Sd1Z4JUGPK-FnmpA4pGw1gFzpLD07gqPgHbrRhkRVnc=.png)
* Policy Evaluation

  ![](/assets/reinforcement-learning/assets/JI1Wm1-n7rgVH3wQdvPYK7H_aFVG9TKp4k3TdJYkQms=.png)

  ![](/assets/reinforcement-learning/assets/DY0uSLGDMOfNdybFRUPAQTrmlv1SJSwUBbhcldC_hs0=.png)

  ![](/assets/reinforcement-learning/assets/I5LkAzSsK6xRE_R1ri4-ofWr1xVnGQhLqnBQGj0Ao3g=.png)

  ![](/assets/reinforcement-learning/assets/MegK8DTdZcnI69NlcNGSldzgqRDqqem_qpVVlJihDWU=.png "The Small Gridworld")

  ![](/assets/reinforcement-learning/assets/P8jv_pvIIhvCj5PNFYOIiu4XwCKOThV0IIj3yunarok=.png)
* Policy Iteration 

  ![](/assets/reinforcement-learning/assets/L6pgh-V6eCxmCJpO_UpvDZsgy-gbO1MH6BnYW0XMJZI=.png)
  * There's always at least one deterministic optimal policy for any MDP, so it's sufficient to actually search over deterministic policies only when youre looking for the optimal policy. 
  ![](/assets/reinforcement-learning/assets/YibS5PfsNsWYV0Idqhx68ZtZLS9J12B_a3hKo8IhzCU=.png)
  * No matter where you start for any value and any policy, you will always end up with the optimal value function and the optimal policy.
  ![](/assets/reinforcement-learning/assets/_OfR7ygyXJcNInS7bdeySVKnbTJryIZ6Uc_U9o5uPUk=.png)
  * This is a contour map of this policy, the density of these grid worlds represent the speed of value changing. The more, the faster.
  * evaluate the policy, then come up with a new surface( which is in the representation of value function in a two dimensional axes.)
  * There's no cost in moving a car in this example.  
  ![](/assets/reinforcement-learning/assets/s4O15U2AkSDl4detW9qxdmpr8QP0XanrurMc0KRulc8=.png)
  * The $q$ is just the immediate reward plus the value of the next, that's what we act greedily. 
    * Let's not worry yet about what happens after that, let's just consider one step and see whether we get more value over one step.
  * The max over the $q_{\pi}$ has to be at least greater than equal to one particular $q_{\pi}$ so the max over all actions has to be at least as good as one particular action that we could plug in which is what the one we were choosing before.
  * So all of this that's a long-winded way to say that the value function improves over one step at least that if we just take our $\pi^{\prime}$for one step, we'll get at least as much reward as the policy we started with.
  * So we don't make things worse ever, we always make things at least make them better, (though) we haven't yet said that this is guaranteed to keep getting better or to reach the optimal value.
  ![](/assets/reinforcement-learning/assets/0f_3AF3HEGRFEmJksbJP0P8TxviG4yOMv9c5JhQYVqc=.png)
  * Being greedy doesn't mean that we only look at one step of immediate reward, instead, it means that we look at the best action we can take if we optimize over all actions we can do for one step, and then look at our value function which summarizes the whole future —— all future rewards we're going to get going into the future but under our previous policy.
  ![](/assets/reinforcement-learning/assets/mnLHaLKJmBRM58Ni8YbJXALH9AZksiBdETk5AFvkfx8=.png)
* Value Iteration

  ![](/assets/reinforcement-learning/assets/ynGTu8QXklc-mknmCWLQse-5VKMm60uyKBdm32NcKv0=.png)
  * &#x20;So if my first action is optimal and then after that I follow an optimal policy from wherever I end up then we can say that the overall behavior is optimal。
  ![](/assets/reinforcement-learning/assets/u1UvzmsdT1FU1PfuQtCS7oWlC0Pi1oecU4LjwDxvwdQ=.png)

  ![](/assets/reinforcement-learning/assets/X4-fndXKgwKYCLQdgQ85x0rY5crm1MHEadn-EQWNXmk=.png)

  [Artificial Intelligence: Foundations of Computational Agents
  &#x20; \-- Value Iteration Demonstration](https://www.cs.ubc.ca/~poole/demos/mdp/vi.html)

  ![](/assets/reinforcement-learning/assets/kkPvS05Y5fof9gpN54IVCKMKvyXDXYdpepXtVV2K6vA=.png)

![](/assets/reinforcement-learning/assets/K_W3x-JlvC2thDg7lRLYelzKTfrOdzPNuabqD56JQqE=.png)

![](/assets/reinforcement-learning/assets/5yklp_KdfVaCKHXyV986iFduIeEvYEfuXGHgLTDQXwg=.png)



## Lecture4: Model-Free Prediction

* Introduction

  ![](/assets/reinforcement-learning/assets/Yg51zVA4wAqmrucEV3c_fPzDbd0NXDMUhPgINtFZJQE=.png)
* Monte-Carlo Learning

  ![](/assets/reinforcement-learning/assets/mC_em5_wz_oHl5eqChIOftqyIazV4TlVY04dBWFjvYg=.png)

  ![](/assets/reinforcement-learning/assets/Lu4l03OM2QGuGe6Ts5WO0x2RHkkQYzm3_w9vRtZ6WxU=.png)

  ![](/assets/reinforcement-learning/assets/uZjKl-EJts2g_VhdVOFghEROY-BvfxM7zFxwUkyMBJ0=.png)

  ![](/assets/reinforcement-learning/assets/h9ny5py_WvTTTvQCpSj8OHa6g7w2UrOZGS5GmG9lCsA=.png)

  ![](/assets/reinforcement-learning/assets/M9iZqWin0IC2gr3uysbZDgX2FyBq1I8S4fKrlAQjtpo=.png)

  ![](/assets/reinforcement-learning/assets/mTVVmdfN84Cq-d_4mLS8C35xsFome8kkUST89BEnS3A=.png)
  * We see that emerging nicely from the structure of this value function just by sampling, so no one told us the dynamics of the game ( that means no one told us the probabilities that govern yhe game of blackjack), this is just by running episodes, trial and error learning, and figuring out the value function directly from experience. 
  * The expected reward is the value function.
  ![](/assets/reinforcement-learning/assets/PKvOduP-uMYnQ0ayrI382zvMb5EnAEm74c5rvUMXkcM=.png)

  ![](/assets/reinforcement-learning/assets/6zcDdykXBita7N_gma2PXCGueZz8uil_B6tNfmPOnSM=.png)
  * So that's the Monte-Carlo Learning, a very simple idea that you run out episodes you look at those complete returns that you've seen and you update your estimate of the mean value towards your sample return for each state that you visit.
* Temporal-Difference Learning

  ![](/assets/reinforcement-learning/assets/L2tswlZJd2KpWGqVVpaRkCPijveHb4v-rNDrw9Ct4jY=.png)
  * &#x20;Bootstrapping is the fundamental idea behind TD learning.
  ![](/assets/reinforcement-learning/assets/6tvVKUkSCDBT09KVte8Ak0JkYMjPexyqQfRWhwVyDjs=.png)
  * The TD target is like a random target which depends on exactly what happens over the next time step but we get some immediate reward and some value wherever we happen to end up and we're going to move towards that TD target.
  * In Monte-Carlo, you wouldn't get the negative reward or be able to update your value for your prediction, but in TD learning, you can immediately update the value function you had before and be capable to change your future decision.
  ![](/assets/reinforcement-learning/assets/1Z-QT-IZUjkRD43jQxpp3O3I9RFBcSsM9vwNyAxcBv4=.png)
  * We changed our predicted total time based on each state just happened to us.

    ![](/assets/reinforcement-learning/assets/xMhEVU3qX94GMpzeDTts95siyv5HPLI7uDFGz-32fB8=.png)
  * Each step along this when using monte-carlo learning, you update towards the actual outcome you have to wait until you finally get the final state, seeing the actual travel time and then updating each of your value estimates along the way.
  * .Whereas with TD learning it's quite different. At every step, it's like you started off thinking it's going to take you how long, after one step you thought can be changed. So in other words, you can immediately update your predicted total travel time instead of waiting until anything else happened.     
  ![](/assets/reinforcement-learning/assets/qLQ7b-D89XjO3SR0LW6OCtLWp-osakIEYxqDhU53La8=.png)
  * What's the meaning of TD learning?
    * The basic answer is that in the TD, it finds the true value function as long as you run this thing out, it will always ground itself because even though you correct yourself based on your guess and that guess might not be right, that guess will then be updated towards something that happens subsequently which will ground it more and more, so all of your guesses are progressively becoming better and that information backs up such that you get the correct value function.
  ![](/assets/reinforcement-learning/assets/-rXZt62TUZh4JNIn2hh1Noe16X5_cAM7T3itnWAbEOw=.png)

  ![](/assets/reinforcement-learning/assets/g-P1Mn_rJHo5mWCP11QwzjaL5E_Q2zhi_uqTkIyu28w=.png)

  ![](/assets/reinforcement-learning/assets/YBl18d7Uqv4NmC-nAGB1seMdQPaI4e9XqXK_pEMrxsI=.png)

  ![](/assets/reinforcement-learning/assets/4LOKW71ymbcrjHFq5GJ1DmfmrVP9kmRHuxDNlmCOjMU=.png)

  ![](/assets/reinforcement-learning/assets/bfmGjfdU1O3jJkCzzeSq8GsOqkUPVs5T7zG6DyHg9Y0=.png)
  * TD is trying to explain the data in the best possible way.
  ![](/assets/reinforcement-learning/assets/CgRbZzaygBOVxa_Lf6xBiOEfy6Bx3X_d8jGv9TPus5I=.png)

  ![](/assets/reinforcement-learning/assets/zVwscVofdLVe7ix6hPIRL7kITsv5ey8AItFeNw0IEWE=.png)

  ![](/assets/reinforcement-learning/assets/3UYWJcU27MYqZe5R48xYDRgoFoyUTyU55foPNbdnWss=.png)

  ![](/assets/reinforcement-learning/assets/xReck_Nq2IeDOI3LOWntndu_wbI7PGGTmzK06UtspCc=.png)

  ![](/assets/reinforcement-learning/assets/ONn2HPDQQyH9ODdmVklxbPe7jQehcmF34dNe5kooNSA=.png)

  ![](/assets/reinforcement-learning/assets/Jx4kGsBTXwj81g_zJndUVg2iDBWFKLf22yKyJVVFswE=.png)

  ![](/assets/reinforcement-learning/assets/vMNR7LMv0gLX_LdjhatiPd0C7Q__FI1xCPTPl34hSSo=.png)

  ![](/assets/reinforcement-learning/assets/fWVZmpU5fm_8cwV-D2jFcsxcIacSQyv1vLOa-saG_2g=.png)
* TD($\lambda$) （The generlizing function of TD learning, which enhancing the n from 1 to endless.)

  ![](/assets/reinforcement-learning/assets/A5QVrudIW9EUItsZLyfUYC90eERhPgT8M1wNHqlPD-o=.png)

  ![](/assets/reinforcement-learning/assets/eu450a2mYfrnevIxqzIRV6Qb_SGeQw0QTahdqA7w1iA=.png)

  ![](/assets/reinforcement-learning/assets/-yLKl2IyXGh6KRPUm6nErhOkmQkHp4K-uNPiKgsKD0A=.png)
  * &#x20;What we talk about is just whether we do online or off-line updates and that means whether we immediately update our value function or whether we defer the updates of our value function until the end of the episode.
  * So what we're going to do is trying to come up with the best all of n and that's the goal to efficiently consider all n at once.
  ![](/assets/reinforcement-learning/assets/WL5A3FIUokfMQJUnooDvSqIoTsOrOqclt9B3LTqIh2A=.png)

  ![](/assets/reinforcement-learning/assets/L48Z6xiumen5p3iWfN_SiMR5eudTXQ7IOAy-pMYhcyY=.png)
  * (1 - $\lambda$) is a normalizing factor.
  ![](/assets/reinforcement-learning/assets/NG-X7IPyx_TNjo2GzcA3P4G4Y-c8I5WP87I-EjjPFns=.png)

  ![](/assets/reinforcement-learning/assets/_7yDnGSP14GlseqI9Mly7xjMZNVqCMziYJsWpAOLg9Y=.png)

  ![](/assets/reinforcement-learning/assets/dzpVaev66b-zPTrg1yJTZD8gzm7u3i_E6ib1j26MvJk=.png)

  ![](/assets/reinforcement-learning/assets/2tLirFgoq6DF5smnYhV-f6_mckBXqscFyCACMM9pcOA=.png)

  ![](/assets/reinforcement-learning/assets/qAOqXjO_xorlsFmy3XCk-teqlnBbU3Kl3oEbChdDvDA=.png)

  ![](/assets/reinforcement-learning/assets/r5ZkwDggxSl480u1GGIr0almstqjMkzE21USzk3rAp0=.png)

  ![](/assets/reinforcement-learning/assets/lt4nNqyh4Mjri09mzsDaHn_vZWjPUdfNG5jNSOUHZd4=.png)

  ![](/assets/reinforcement-learning/assets/YDAT7IvsR4MRUwRkIhVa2ECDCCkL74bcKKIU691QGb0=.png)

  ![](/assets/reinforcement-learning/assets/SfwzP9jFhNv3CBpsO9AxHc5vk1v4cyQBDpG8frCbp3g=.png)

## Lecture5: Model-Free Control

![](/assets/reinforcement-learning/assets/vd8goaKE1lGtYl_K-87bqOLqO4HxXv0yEMfdgo7Xb_M=.png)

![](/assets/reinforcement-learning/assets/dtVzEMW_tRV7X9Gy9RSLkSR5oLADJFwP2NlzTziAAJs=.png)

![](/assets/reinforcement-learning/assets/P0R85GPMZMQuBwC48ZpwV9kssvgW8DVEMm_iFs3XTO0=.png)

![](/assets/reinforcement-learning/assets/xbs0lF1LBI1C97QNkcelSGokyH-58x3ExnUDrE_s42g=.png)

![](/assets/reinforcement-learning/assets/gXTNP7QyI0scCAANE05JDPLHAWwNentNnn-PEfLxHyc=.png)

![](/assets/reinforcement-learning/assets/KsSFYn7cOdqL93cwPbjCRP4QXS5mDTOTjoNSZettvEo=.png)

![](/assets/reinforcement-learning/assets/P4eDfELJJSzOEwx8Wd0vmnrxlFLk_aa8cTLV1gAC_5E=.png)

 

![](/assets/reinforcement-learning/assets/dRf6ni4ihYkw-SQsEgPqATKhsevFHF7gTAlFs1uJVV4=.png)

* You need to carry on exploring everything to make sure that you understand the the true value of all of your options. If you stop exploring certain actions, you can end up making incorrect decisions, getting stuck in some local incorrect optimum showing that your beliefs can be incorrect.

![](/assets/reinforcement-learning/assets/lgYVFM8VK6u0OKo6_B0yJ1ud5YVGSiGR25dXh7ouNwc=.png)

![](/assets/reinforcement-learning/assets/T1X71BsxUWjs_91DQdXx_d9XWFOXqR1EHlTWS1W7598=.png)

![](/assets/reinforcement-learning/assets/dZf2stApg9R7FsXZN-qolDmCsD0Bn3ZhKJ0iEaU-seU=.png)

![](/assets/reinforcement-learning/assets/TZhf8vdXHJC3ulhPQGzgpWqn70WUJEBoj0bt0t74ED0=.png)

![](/assets/reinforcement-learning/assets/0SoCarWa7A6F20S71sbMmZ_hy5nhGI_XP7B7tk6MFmE=.png)

![](/assets/reinforcement-learning/assets/Jy_QlscjW5lovmUGUbAigXQO7wngzQJkhHq4DT0eAH0=.png)

![](/assets/reinforcement-learning/assets/Jy_QlscjW5lovmUGUbAigXQO7wngzQJkhHq4DT0eAH0=.png)

![](/assets/reinforcement-learning/assets/Jy_QlscjW5lovmUGUbAigXQO7wngzQJkhHq4DT0eAH0=.png "妙啊哇趣。")

![](/assets/reinforcement-learning/assets/jAuSibr4RQghKJSxuWU0e7MEz-mkJIipLkWDb2BbPGA=.png)

![](/assets/reinforcement-learning/assets/tKs0aD2N3FHxQrxkMQphFEYvkJ3UxtJWCceOWuq3MW4=.png)

* Sarsa: State-Action-Reward-State-Action

![](/assets/reinforcement-learning/assets/Y71Ckfj0_hpIz95NQTYbsaF9930EEezYRY6NyzLnVL4=.png)

![](/assets/reinforcement-learning/assets/aUSSicpxH0PwNa_FneTDxOlRETd_M4Yho3VDLx1a33k=.png)

![](/assets/reinforcement-learning/assets/CN0f755dGWPB2UYPDb84JZ3BYj5y19OlLEULJysPQsw=.png)

![](/assets/reinforcement-learning/assets/cukcY4O18TnsBtqlC-k6drSe9EsT5ThEmj1eRCFvDx4=.png)

![](/assets/reinforcement-learning/assets/H7Brp-fLJKrjZ8XJkpDy1e_OcOGS_3lwU_09GSgpnPA=.png)

![](/assets/reinforcement-learning/assets/ANptl6hi0OPgBPa9guUkd8VDznzh_cph1ziMX5phMvo=.png)

 

![](/assets/reinforcement-learning/assets/mjPr8MhDVWzy05Ty_SmWH0JFgmXWgc9O4E9asaFbM60=.png)

* What's the problem of this?
  * This isn't an online algorithm, it's not something where we can take one step, update our Q-vlaue and immediately improve our policy, but we would like to be able to run things online and be able to get the freshest possible updates ,then updating immediately.

![](/assets/reinforcement-learning/assets/SzornyJmEjc5pfG0JBta45tMzqIbP-2uPBcgVepMezU=.png)

![](/assets/reinforcement-learning/assets/sAfUcPZnPYrS1Li_E5wQNiAd3S5MxWKRHl5XIO9xTVQ=.png)

![](/assets/reinforcement-learning/assets/qLDPH5lMzBFJSYJMafjFYtkj-G3lLUhOHNujXWQ_xqs=.png)

> https://chat.qwen.ai/s/t\_53c20bd8-dfc6-4204-886f-74ecba03690f?fev=0.1.9

![](/assets/reinforcement-learning/assets/lGaMCMc4WJx-LAXtmCAxhrwCR7NMBnuaINUEI1rn46k=.png)

![](/assets/reinforcement-learning/assets/ALpOttHB3YPlCn7A3Ikpnz1o-bCXkPsx4ZsLn2sHrzE=.png)

* $Eₓ~P[f(X)] ≈ (1/n) * Σ(i=1 ,2,...n) wᵢ * f(Xᵢ)$
* $w = π(a|s) / b(a|s)$
  * $π(a|s)$: Target Policy
  * $b(a|s)$: Behaviour Policy
* Change P sampling into Q sampling.
* importance weight: $wᵢ = P(Xᵢ) / Q(Xᵢ)$

![](/assets/reinforcement-learning/assets/ACFnYSTTJ8R389adr1wkIa0LjA30fetIKXTZolIDrf0=.png)

![](/assets/reinforcement-learning/assets/OLko43tpCcsCBxlhbM9nGCKy4OX_o22-wjPt9OTljaw=.png)

![](/assets/reinforcement-learning/assets/PTLtodqdKSFVMEu7nD0lX8wCeD3UNahISDajantmq6I=.png)

 

![](/assets/reinforcement-learning/assets/duvh32ekKNnJujf3x-e7XDYBQYN_4mGeYZf9jfOSRMQ=.png)

![](/assets/reinforcement-learning/assets/gOp0HOXzeuvBnT1qGmX-gKxwSiLVxxW4xmFV_AdZXjQ=.png)

## Lecture6: Value Function Approximation

### Introduction

![](/assets/reinforcement-learning/assets/EnrMNo0rbQRSV6YFW5hbtahlBldXF1gduHCyCs3ZyXc=.png)

* How can we scale up the model-free methods for prediction and control from the last two lectures?

![](/assets/reinforcement-learning/assets/-olHs-X3IS0VDEoF07rbMdn40SQJ2iNyq00ox_NB4vU=.png)

* What we'll do is not just reduce the memory but also allow us to generalize -- to fit our function to approximate our states that we've never seen.

![](/assets/reinforcement-learning/assets/P3G-BbexoQfphTjM7gNItFNxbOzXP5exdirf21IiDuk=.png)

* Consider this action here, how could that be?

![](/assets/reinforcement-learning/assets/tthvMh_samWNK2AiRWBrItoHYUtlvwYe5C7tqG0vDR4=.png)

![](/assets/reinforcement-learning/assets/D-_pGqbccloxOmqrOos36tliAUhoMo466cyIfPp5v8Y=.png)

### Incremental Methods

![](/assets/reinforcement-learning/assets/OhkFUUG3-0XxLJI0s2Uft-8ihYsAV_-PUUficQfrTu4=.png)

![](/assets/reinforcement-learning/assets/1u6_N0U3ggVt4uH5oV_y_2qtzrO4QiVPf2CK3mmEBrk=.png)

![](/assets/reinforcement-learning/assets/zQT4Au3Hqyujupnw_Dw3vm7EPjDEqtQUdodDjRR640I=.png)

![](/assets/reinforcement-learning/assets/R28W3mX6Udr2GNoPB8-CEVON_JIZ33m2hLcOzQq-Gj8=.png)

![](/assets/reinforcement-learning/assets/UT-h5oOn36Bk9v5nordHsFtu-zucyn20Oobbq85Udj4=.png)

![](/assets/reinforcement-learning/assets/XX9Vu-FtrI24ia48_9ji6Nix5QmnRqaJm406hAHBE_Q=.png)

![](/assets/reinforcement-learning/assets/ZCkOSG1D-adcToUwlb5vDTAVtuovRq1EyURphviQMNM=.png)

![](/assets/reinforcement-learning/assets/y6BvCEZqsoM2ie0z6ip--wSN6gH1c594SGrVfocTPPA=.jpeg)

![](/assets/reinforcement-learning/assets/i_j2ycQG7J3bydLfTLvaZDPo9Izv3RONSIxxYwIAoJo=.jpeg)

![](/assets/reinforcement-learning/assets/aVLDDCCnJFyJFS4y-qXihGfqjwLxWqm-9blwM9vhNyM=.jpeg)

![](/assets/reinforcement-learning/assets/Mwqlm-2CSuASvb8AMYsno50x6RQn3dleZ70RtMmF0L8=.jpeg)

![](/assets/reinforcement-learning/assets/0lrmoEXUlAD4v5xCQpm6VaW58dm4NNx0HrmP6JngXzs=.jpeg)

![](/assets/reinforcement-learning/assets/Nug_AX1ihM5f9kV2Ael7-0l8wX8kU0_5odDoQgkbJO8=.png)

![](/assets/reinforcement-learning/assets/ZqBaL7Ooa-kpairJ8iwibowRMHWtyXX0kP55D86uEMc=.png)

### Batch Method

![](/assets/reinforcement-learning/assets/yAmwh4DVM_YiTogHDsilHLImEWliH85375hC7PCnu9M=.png)

![](/assets/reinforcement-learning/assets/tAWb2hBpHCMz8BNYtQOtif9BV1THVvGZ0TPxOu1emqc=.png)

![](/assets/reinforcement-learning/assets/dtPLgMLsfIgTOJ7ZizLri2hsnmlGof6Del1qiDMhR4o=.png)

![](/assets/reinforcement-learning/assets/i4_Hw-kPR6YLBqNsr5RO3ci_0go3YQF1TawHi2DT4XI=.png)

![](/assets/reinforcement-learning/assets/z01ZQjPijiZRst9hg8deCJOoDenjGro906v6OAHgcZU=.png)

![](/assets/reinforcement-learning/assets/D4HVqWB_INzIYRAtTP0Di1Ts3kUOX7iUlh_OuuScrFg=.png)

![](/assets/reinforcement-learning/assets/xgdWRJc94FJOcGNdiDKLvSXENQRHqARvyBAkA6-Rn_c=.png)

![](/assets/reinforcement-learning/assets/PZ-GFu72iKyIM4BUzRQ7lL_SJRFfjuME-hA3tsvpLvE=.png)

![](/assets/reinforcement-learning/assets/xf6WDGP3h5xjmOI9jGGFr8o3-Q6XEJPyOdFQvlUzzhQ=.png)

![](/assets/reinforcement-learning/assets/OfF2t9VSYykkQC8cQ3bAHXpKl-EgNTPT_0FBpad-qi4=.png)

![](/assets/reinforcement-learning/assets/wChVDHkISNr7oGzoAW0UyG7ZyjsHPH6L8SpfJKLSmS4=.png)

![](/assets/reinforcement-learning/assets/NiApkRTHphM1X1_ir2dzSa9qEW09ShLGaosBo_LQcBI=.png)



## Lecture7: Exploration and Exploitation

### Introduction

![](/assets/reinforcement-learning/assets/H2Qb7BGPhwfZDCb_1H5_YPf70jtVfuOqycsAKMbUvG0=.png)

* Three broad families:

  ![](/assets/reinforcement-learning/assets/koYShP-yWAPk8DpK3_8MVxs80aG_o503i2uVKr--sy0=.png)

![](/assets/reinforcement-learning/assets/Vy-xKC_jMCszafjVc27RtDqtE0wSBaAL3x5jHTIdXrs=.png)

* state-action exploration / parameter exploration

### Multi-Armed Bandits

![](/assets/reinforcement-learning/assets/ZgDcSVBkM0QrZoOnTUtoMi_CDHpDEZrypZp0zb7O18s=.png)

![](/assets/reinforcement-learning/assets/ldQLAJ7yvfcuKVNfA-FC9fjKLx5OuKNdUd3cXGVki1s=.png)

![](/assets/reinforcement-learning/assets/-O-XiqPF83IRGLiFIRxQUcBlhYW3ewao2vt06xCdFTY=.png)

* We don't know where we start.
* What does the regret look like?

![](/assets/reinforcement-learning/assets/uoBU2IONE5-HznH-2d3bKUELH0fECjzf2ecntSSH6S8=.png)

![](/assets/reinforcement-learning/assets/kerQc3TJeJjV58vzWQNtQeDsGxfTm2hFugSyzmkE5_I=.png)

![](/assets/reinforcement-learning/assets/KPv3pHhHeidGoY8BQMR3JcAABgnlCjtulqIuwIDBxTA=.png)

* not only initialize the value but also the count

![](/assets/reinforcement-learning/assets/hk3_vK0L_udQ6403jxfjpPOmaT-9ZZMn4lzq9maPSzQ=.png)

![](/assets/reinforcement-learning/assets/jP_jUMs58i85rR2r05SRl4iWCPdVUe_cfKcerk1pIm4=.png)

![](/assets/reinforcement-learning/assets/tSAY4t1xq80KXpU7zmMk5KW8B6j06m-MJIggBHDm1N0=.png)

![](/assets/reinforcement-learning/assets/tLGqBbLQYr8JQH7dv5oOU81txA2GAXdvlq4pw3acwWs=.png)

![](/assets/reinforcement-learning/assets/OadhKA4zDjG15F4PeWYQkSz5kvHB5R-qJZuDcf1jzuI=.png)
