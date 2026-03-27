## Lecture1: Intro to RL 

[2025-11-04](file:///workspace/d047dbd0-d7d7-404e-8dc2-62572c04acd5/wl-Rrmz1Mj5CWeLLEwT_3)

![](assets/lksIJhrPs0l3bx6melO3GRytcEX52dXEGmw8ITx99nw=.png)

* Characteristics of RL
  * There's no supervisor, but only a reward signal
  * Feedback is delayed, not instantaneous
  * Time really matters
  * Agent's actions affect the subsequent data it receives

![](assets/QpIld6Y6gIwlv1BfS2Ze3p_50CGbIK5bE-hc6TTGMTI=.png)

 

![](assets/J2R3iNiT6ds1yMy5OCtckann7nM3A2laoGNhfI7hGe8=.png)

* What we need is to figure out the algorithm in the  Agent's "mind"

![](assets/Nqur6PLKwbYuL9R5q-dQb0ITl8CU5l2j5FUnpx2U5YQ=.png)

* The valid definition of state would be to only look at the last observation
  * &#x20;Environment State

    ![](assets/BlaI8qAhERyJ8fYqdRpXWyYp1utcXYTwmbt8PNLWA3w=.png)
  * Agent State

    ![](assets/vGxyttclbQVs7E25BpjhY_gwcvzwKDXchA4oaDtf4jQ=.png)
  * &#x20;Information(Markov) State

    ![](assets/SIW8J0wxz3jZm2QicB9jRl5d4yZ-8UA9CjZsO7_fgqc=.png)
    * The Markov state contains enough information to characterize all future rewards
  ![](assets/T6XeK_tBNLQhMn7vzS6YQHIptEK836NR9bNjGvTYctM=.png)

![](assets/fWWKv1SjidDYq4z43bcd-Uvicv2oZIoc1kyxEQ2-iWY=.png)

* Major Components of an RL Agent

  ![](assets/iwK8PG6vFyT6r73ySuFdLKZpOPRfISWbTD_RbzQXJA4=.png)
  * Policy

    ![](assets/Z3UdY83YUPmAeXGXqHsZcHLqDXDiSd5hKPdL2AXcYow=.png)

    ![](assets/VvqO8ilZrumKwxAq2CftMdjUNH3QX-OYKv0ESxUAnpA=.png)
  * Value function

    ![](assets/yhCPrepXer6MyIeLSTPF_wz-nln71kP5dhI4xjP4LH8=.png)
    * The behavior that maximizes the value is the one that correctly trades off the agent's risks so as to get the maximum  amount of reward going into the future,  and that just automatically emerges from the performance.
    ![](assets/dB6ZP-or-zq5EZGuHbDBKj5VWfkHs-atvMMJO6_wjhw=.png)
  * Model

    ![](assets/LY5F6qf3b3qS57JAfGMpWFGkKqWnNEOyBDf2tdnVxFI=.png)

     

    ![](assets/HSr37ZvgNxgLfjNu82dNkObbkSJ-FCULM2S3AO39t7k=.png)

![](assets/Yb7dfLIVBZu7w6Dagf6xELp5mvngItO0IOFX7XlAd-k=.png)

![](assets/wnOe24jGbsOLb_O8vNbwQB95nsTYsDXI1GshPJz81UA=.png)

![](assets/TyGpMb5BjYPpVP58COsQggj8U_IpLN7U3FKuO2vonvw=.png)

![](assets/tSxW_jWDZU-9OP_UN_5SvVpvPmfCR3dUcdN1jyrje3Y=.png)

* RL is like trial-and-error learning
* The agent should discover a good policy
* From its experiences of the environment
* Without losing too much reward along the way
* Exploration & Exploitation
  * Exploration finds more information about the environment
    * choosing to give up some reward that you know about in order to find more about the environment
  * Exploitation exploits known information to maxmise reward 
  * It's usually important to explore as well as exploit

![](assets/xL9DHI7fTB2zpLG7wNwH4IYKR8f0hzmZtl55566Ehoc=.png)

* RL is we need to solve the prediction problem in order to solve the control problem which means we need to evaluate all of the policies to find the best one.



