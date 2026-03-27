## Lecture4: Model-Free Prediction

* Introduction

  ![](/assets/reinforcement-learning/assets/reinforcement-learning/Yg51zVA4wAqmrucEV3c_fPzDbd0NXDMUhPgINtFZJQE=.png)
* Monte-Carlo Learning

  ![](/assets/reinforcement-learning/assets/reinforcement-learning/mC_em5_wz_oHl5eqChIOftqyIazV4TlVY04dBWFjvYg=.png)

  ![](/assets/reinforcement-learning/assets/reinforcement-learning/Lu4l03OM2QGuGe6Ts5WO0x2RHkkQYzm3_w9vRtZ6WxU=.png)

  ![](/assets/reinforcement-learning/assets/reinforcement-learning/uZjKl-EJts2g_VhdVOFghEROY-BvfxM7zFxwUkyMBJ0=.png)

  ![](/assets/reinforcement-learning/assets/reinforcement-learning/h9ny5py_WvTTTvQCpSj8OHa6g7w2UrOZGS5GmG9lCsA=.png)

  ![](/assets/reinforcement-learning/assets/reinforcement-learning/M9iZqWin0IC2gr3uysbZDgX2FyBq1I8S4fKrlAQjtpo=.png)

  ![](/assets/reinforcement-learning/assets/reinforcement-learning/mTVVmdfN84Cq-d_4mLS8C35xsFome8kkUST89BEnS3A=.png)
  * We see that emerging nicely from the structure of this value function just by sampling, so no one told us the dynamics of the game ( that means no one told us the probabilities that govern yhe game of blackjack), this is just by running episodes, trial and error learning, and figuring out the value function directly from experience. 
  * The expected reward is the value function.
  ![](/assets/reinforcement-learning/assets/reinforcement-learning/PKvOduP-uMYnQ0ayrI382zvMb5EnAEm74c5rvUMXkcM=.png)

  ![](/assets/reinforcement-learning/assets/reinforcement-learning/6zcDdykXBita7N_gma2PXCGueZz8uil_B6tNfmPOnSM=.png)
  * So that's the Monte-Carlo Learning, a very simple idea that you run out episodes you look at those complete returns that you've seen and you update your estimate of the mean value towards your sample return for each state that you visit.
* Temporal-Difference Learning

  ![](/assets/reinforcement-learning/assets/reinforcement-learning/L2tswlZJd2KpWGqVVpaRkCPijveHb4v-rNDrw9Ct4jY=.png)
  * &#x20;Bootstrapping is the fundamental idea behind TD learning.
  ![](/assets/reinforcement-learning/assets/reinforcement-learning/6tvVKUkSCDBT09KVte8Ak0JkYMjPexyqQfRWhwVyDjs=.png)
  * The TD target is like a random target which depends on exactly what happens over the next time step but we get some immediate reward and some value wherever we happen to end up and we're going to move towards that TD target.
  * In Monte-Carlo, you wouldn't get the negative reward or be able to update your value for your prediction, but in TD learning, you can immediately update the value function you had before and be capable to change your future decision.
  ![](/assets/reinforcement-learning/assets/reinforcement-learning/1Z-QT-IZUjkRD43jQxpp3O3I9RFBcSsM9vwNyAxcBv4=.png)
  * We changed our predicted total time based on each state just happened to us.

    ![](/assets/reinforcement-learning/assets/reinforcement-learning/xMhEVU3qX94GMpzeDTts95siyv5HPLI7uDFGz-32fB8=.png)
  * Each step along this when using monte-carlo learning, you update towards the actual outcome you have to wait until you finally get the final state, seeing the actual travel time and then updating each of your value estimates along the way.
  * .Whereas with TD learning it's quite different. At every step, it's like you started off thinking it's going to take you how long, after one step you thought can be changed. So in other words, you can immediately update your predicted total travel time instead of waiting until anything else happened.     
  ![](/assets/reinforcement-learning/assets/reinforcement-learning/qLQ7b-D89XjO3SR0LW6OCtLWp-osakIEYxqDhU53La8=.png)
  * What's the meaning of TD learning?
    * The basic answer is that in the TD, it finds the true value function as long as you run this thing out, it will always ground itself because even though you correct yourself based on your guess and that guess might not be right, that guess will then be updated towards something that happens subsequently which will ground it more and more, so all of your guesses are progressively becoming better and that information backs up such that you get the correct value function.
  ![](/assets/reinforcement-learning/assets/reinforcement-learning/-rXZt62TUZh4JNIn2hh1Noe16X5_cAM7T3itnWAbEOw=.png)

  ![](/assets/reinforcement-learning/assets/reinforcement-learning/g-P1Mn_rJHo5mWCP11QwzjaL5E_Q2zhi_uqTkIyu28w=.png)

  ![](/assets/reinforcement-learning/assets/reinforcement-learning/YBl18d7Uqv4NmC-nAGB1seMdQPaI4e9XqXK_pEMrxsI=.png)

  ![](/assets/reinforcement-learning/assets/reinforcement-learning/4LOKW71ymbcrjHFq5GJ1DmfmrVP9kmRHuxDNlmCOjMU=.png)

  ![](/assets/reinforcement-learning/assets/reinforcement-learning/bfmGjfdU1O3jJkCzzeSq8GsOqkUPVs5T7zG6DyHg9Y0=.png)
  * TD is trying to explain the data in the best possible way.
  ![](/assets/reinforcement-learning/assets/reinforcement-learning/CgRbZzaygBOVxa_Lf6xBiOEfy6Bx3X_d8jGv9TPus5I=.png)

  ![](/assets/reinforcement-learning/assets/reinforcement-learning/zVwscVofdLVe7ix6hPIRL7kITsv5ey8AItFeNw0IEWE=.png)

  ![](/assets/reinforcement-learning/assets/reinforcement-learning/3UYWJcU27MYqZe5R48xYDRgoFoyUTyU55foPNbdnWss=.png)

  ![](/assets/reinforcement-learning/assets/reinforcement-learning/xReck_Nq2IeDOI3LOWntndu_wbI7PGGTmzK06UtspCc=.png)

  ![](/assets/reinforcement-learning/assets/reinforcement-learning/ONn2HPDQQyH9ODdmVklxbPe7jQehcmF34dNe5kooNSA=.png)

  ![](/assets/reinforcement-learning/assets/reinforcement-learning/Jx4kGsBTXwj81g_zJndUVg2iDBWFKLf22yKyJVVFswE=.png)

  ![](/assets/reinforcement-learning/assets/reinforcement-learning/vMNR7LMv0gLX_LdjhatiPd0C7Q__FI1xCPTPl34hSSo=.png)

  ![](/assets/reinforcement-learning/assets/reinforcement-learning/fWVZmpU5fm_8cwV-D2jFcsxcIacSQyv1vLOa-saG_2g=.png)
* TD($\lambda$) （The generlizing function of TD learning, which enhancing the n from 1 to endless.)

  ![](/assets/reinforcement-learning/assets/reinforcement-learning/A5QVrudIW9EUItsZLyfUYC90eERhPgT8M1wNHqlPD-o=.png)

  ![](/assets/reinforcement-learning/assets/reinforcement-learning/eu450a2mYfrnevIxqzIRV6Qb_SGeQw0QTahdqA7w1iA=.png)

  ![](/assets/reinforcement-learning/assets/reinforcement-learning/-yLKl2IyXGh6KRPUm6nErhOkmQkHp4K-uNPiKgsKD0A=.png)
  * &#x20;What we talk about is just whether we do online or off-line updates and that means whether we immediately update our value function or whether we defer the updates of our value function until the end of the episode.
  * So what we're going to do is trying to come up with the best all of n and that's the goal to efficiently consider all n at once.
  ![](/assets/reinforcement-learning/assets/reinforcement-learning/WL5A3FIUokfMQJUnooDvSqIoTsOrOqclt9B3LTqIh2A=.png)

  ![](/assets/reinforcement-learning/assets/reinforcement-learning/L48Z6xiumen5p3iWfN_SiMR5eudTXQ7IOAy-pMYhcyY=.png)
  * (1 - $\lambda$) is a normalizing factor.
  ![](/assets/reinforcement-learning/assets/reinforcement-learning/NG-X7IPyx_TNjo2GzcA3P4G4Y-c8I5WP87I-EjjPFns=.png)

  ![](/assets/reinforcement-learning/assets/reinforcement-learning/_7yDnGSP14GlseqI9Mly7xjMZNVqCMziYJsWpAOLg9Y=.png)

  ![](/assets/reinforcement-learning/assets/reinforcement-learning/dzpVaev66b-zPTrg1yJTZD8gzm7u3i_E6ib1j26MvJk=.png)

  ![](/assets/reinforcement-learning/assets/reinforcement-learning/2tLirFgoq6DF5smnYhV-f6_mckBXqscFyCACMM9pcOA=.png)

  ![](/assets/reinforcement-learning/assets/reinforcement-learning/qAOqXjO_xorlsFmy3XCk-teqlnBbU3Kl3oEbChdDvDA=.png)

  ![](/assets/reinforcement-learning/assets/reinforcement-learning/r5ZkwDggxSl480u1GGIr0almstqjMkzE21USzk3rAp0=.png)

  ![](/assets/reinforcement-learning/assets/reinforcement-learning/lt4nNqyh4Mjri09mzsDaHn_vZWjPUdfNG5jNSOUHZd4=.png)

  ![](/assets/reinforcement-learning/assets/reinforcement-learning/YDAT7IvsR4MRUwRkIhVa2ECDCCkL74bcKKIU691QGb0=.png)

  ![](/assets/reinforcement-learning/assets/reinforcement-learning/SfwzP9jFhNv3CBpsO9AxHc5vk1v4cyQBDpG8frCbp3g=.png)

