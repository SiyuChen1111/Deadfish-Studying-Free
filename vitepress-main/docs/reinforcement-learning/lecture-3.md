## Lecture3: Planning by Dynamic Programming

* Intro

  ![](/assets/reinforcement-learning/assets/reinforcement-learning/l7Y_cdM-KH9ACofd2aqGb0TOSPQP9uYCZBNRaYYvYOI=.png)

  ![](/assets/reinforcement-learning/assets/reinforcement-learning/klkIJkFBhdP8DY4Sg0iJZmmFuNN_Kf2hkH_V6VFjiDI=.png)
* Planning in an MDP

  ![](/assets/reinforcement-learning/assets/reinforcement-learning/8WxgnfGqOBQ9P16C1MBK1mxOJZp0LzNincob7OtkpvA=.png)
* What's a Dynamic Programming solving?

  ![](/assets/reinforcement-learning/assets/reinforcement-learning/Sd1Z4JUGPK-FnmpA4pGw1gFzpLD07gqPgHbrRhkRVnc=.png)
* Policy Evaluation

  ![](/assets/reinforcement-learning/assets/reinforcement-learning/JI1Wm1-n7rgVH3wQdvPYK7H_aFVG9TKp4k3TdJYkQms=.png)

  ![](/assets/reinforcement-learning/assets/reinforcement-learning/DY0uSLGDMOfNdybFRUPAQTrmlv1SJSwUBbhcldC_hs0=.png)

  ![](/assets/reinforcement-learning/assets/reinforcement-learning/I5LkAzSsK6xRE_R1ri4-ofWr1xVnGQhLqnBQGj0Ao3g=.png)

  ![](/assets/reinforcement-learning/assets/reinforcement-learning/MegK8DTdZcnI69NlcNGSldzgqRDqqem_qpVVlJihDWU=.png "The Small Gridworld")

  ![](/assets/reinforcement-learning/assets/reinforcement-learning/P8jv_pvIIhvCj5PNFYOIiu4XwCKOThV0IIj3yunarok=.png)
* Policy Iteration 

  ![](/assets/reinforcement-learning/assets/reinforcement-learning/L6pgh-V6eCxmCJpO_UpvDZsgy-gbO1MH6BnYW0XMJZI=.png)
  * There's always at least one deterministic optimal policy for any MDP, so it's sufficient to actually search over deterministic policies only when youre looking for the optimal policy. 
  ![](/assets/reinforcement-learning/assets/reinforcement-learning/YibS5PfsNsWYV0Idqhx68ZtZLS9J12B_a3hKo8IhzCU=.png)
  * No matter where you start for any value and any policy, you will always end up with the optimal value function and the optimal policy.
  ![](/assets/reinforcement-learning/assets/reinforcement-learning/_OfR7ygyXJcNInS7bdeySVKnbTJryIZ6Uc_U9o5uPUk=.png)
  * This is a contour map of this policy, the density of these grid worlds represent the speed of value changing. The more, the faster.
  * evaluate the policy, then come up with a new surface( which is in the representation of value function in a two dimensional axes.)
  * There's no cost in moving a car in this example.  
  ![](/assets/reinforcement-learning/assets/reinforcement-learning/s4O15U2AkSDl4detW9qxdmpr8QP0XanrurMc0KRulc8=.png)
  * The $q$ is just the immediate reward plus the value of the next, that's what we act greedily. 
    * Let's not worry yet about what happens after that, let's just consider one step and see whether we get more value over one step.
  * The max over the $q_{\pi}$ has to be at least greater than equal to one particular $q_{\pi}$ so the max over all actions has to be at least as good as one particular action that we could plug in which is what the one we were choosing before.
  * So all of this that's a long-winded way to say that the value function improves over one step at least that if we just take our $\pi^{\prime}$for one step, we'll get at least as much reward as the policy we started with.
  * So we don't make things worse ever, we always make things at least make them better, (though) we haven't yet said that this is guaranteed to keep getting better or to reach the optimal value.
  ![](/assets/reinforcement-learning/assets/reinforcement-learning/0f_3AF3HEGRFEmJksbJP0P8TxviG4yOMv9c5JhQYVqc=.png)
  * Being greedy doesn't mean that we only look at one step of immediate reward, instead, it means that we look at the best action we can take if we optimize over all actions we can do for one step, and then look at our value function which summarizes the whole future —— all future rewards we're going to get going into the future but under our previous policy.
  ![](/assets/reinforcement-learning/assets/reinforcement-learning/mnLHaLKJmBRM58Ni8YbJXALH9AZksiBdETk5AFvkfx8=.png)
* Value Iteration

  ![](/assets/reinforcement-learning/assets/reinforcement-learning/ynGTu8QXklc-mknmCWLQse-5VKMm60uyKBdm32NcKv0=.png)
  * &#x20;So if my first action is optimal and then after that I follow an optimal policy from wherever I end up then we can say that the overall behavior is optimal。
  ![](/assets/reinforcement-learning/assets/reinforcement-learning/u1UvzmsdT1FU1PfuQtCS7oWlC0Pi1oecU4LjwDxvwdQ=.png)

  ![](/assets/reinforcement-learning/assets/reinforcement-learning/X4-fndXKgwKYCLQdgQ85x0rY5crm1MHEadn-EQWNXmk=.png)

  [Artificial Intelligence: Foundations of Computational Agents
  &#x20; \-- Value Iteration Demonstration](https://www.cs.ubc.ca/~poole/demos/mdp/vi.html)

  ![](/assets/reinforcement-learning/assets/reinforcement-learning/kkPvS05Y5fof9gpN54IVCKMKvyXDXYdpepXtVV2K6vA=.png)

![](/assets/reinforcement-learning/assets/reinforcement-learning/K_W3x-JlvC2thDg7lRLYelzKTfrOdzPNuabqD56JQqE=.png)

![](/assets/reinforcement-learning/assets/reinforcement-learning/5yklp_KdfVaCKHXyV986iFduIeEvYEfuXGHgLTDQXwg=.png)


