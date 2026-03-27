## Lecture5: Model-Free Control

![](../assets/reinforcement-learning/assets/reinforcement-learning/vd8goaKE1lGtYl_K-87bqOLqO4HxXv0yEMfdgo7Xb_M=.png)

![](../assets/reinforcement-learning/assets/reinforcement-learning/dtVzEMW_tRV7X9Gy9RSLkSR5oLADJFwP2NlzTziAAJs=.png)

![](../assets/reinforcement-learning/assets/reinforcement-learning/P0R85GPMZMQuBwC48ZpwV9kssvgW8DVEMm_iFs3XTO0=.png)

![](../assets/reinforcement-learning/assets/reinforcement-learning/xbs0lF1LBI1C97QNkcelSGokyH-58x3ExnUDrE_s42g=.png)

![](../assets/reinforcement-learning/assets/reinforcement-learning/gXTNP7QyI0scCAANE05JDPLHAWwNentNnn-PEfLxHyc=.png)

![](../assets/reinforcement-learning/assets/reinforcement-learning/KsSFYn7cOdqL93cwPbjCRP4QXS5mDTOTjoNSZettvEo=.png)

![](../assets/reinforcement-learning/assets/reinforcement-learning/P4eDfELJJSzOEwx8Wd0vmnrxlFLk_aa8cTLV1gAC_5E=.png)

 

![](../assets/reinforcement-learning/assets/reinforcement-learning/dRf6ni4ihYkw-SQsEgPqATKhsevFHF7gTAlFs1uJVV4=.png)

* You need to carry on exploring everything to make sure that you understand the the true value of all of your options. If you stop exploring certain actions, you can end up making incorrect decisions, getting stuck in some local incorrect optimum showing that your beliefs can be incorrect.

![](../assets/reinforcement-learning/assets/reinforcement-learning/lgYVFM8VK6u0OKo6_B0yJ1ud5YVGSiGR25dXh7ouNwc=.png)

![](../assets/reinforcement-learning/assets/reinforcement-learning/T1X71BsxUWjs_91DQdXx_d9XWFOXqR1EHlTWS1W7598=.png)

![](../assets/reinforcement-learning/assets/reinforcement-learning/dZf2stApg9R7FsXZN-qolDmCsD0Bn3ZhKJ0iEaU-seU=.png)

![](../assets/reinforcement-learning/assets/reinforcement-learning/TZhf8vdXHJC3ulhPQGzgpWqn70WUJEBoj0bt0t74ED0=.png)

![](../assets/reinforcement-learning/assets/reinforcement-learning/0SoCarWa7A6F20S71sbMmZ_hy5nhGI_XP7B7tk6MFmE=.png)

![](../assets/reinforcement-learning/assets/reinforcement-learning/Jy_QlscjW5lovmUGUbAigXQO7wngzQJkhHq4DT0eAH0=.png)

![](../assets/reinforcement-learning/assets/reinforcement-learning/Jy_QlscjW5lovmUGUbAigXQO7wngzQJkhHq4DT0eAH0=.png)

![](../assets/reinforcement-learning/assets/reinforcement-learning/Jy_QlscjW5lovmUGUbAigXQO7wngzQJkhHq4DT0eAH0=.png "妙啊哇趣。")

![](../assets/reinforcement-learning/assets/reinforcement-learning/jAuSibr4RQghKJSxuWU0e7MEz-mkJIipLkWDb2BbPGA=.png)

![](../assets/reinforcement-learning/assets/reinforcement-learning/tKs0aD2N3FHxQrxkMQphFEYvkJ3UxtJWCceOWuq3MW4=.png)

* Sarsa: State-Action-Reward-State-Action

![](../assets/reinforcement-learning/assets/reinforcement-learning/Y71Ckfj0_hpIz95NQTYbsaF9930EEezYRY6NyzLnVL4=.png)

![](../assets/reinforcement-learning/assets/reinforcement-learning/aUSSicpxH0PwNa_FneTDxOlRETd_M4Yho3VDLx1a33k=.png)

![](../assets/reinforcement-learning/assets/reinforcement-learning/CN0f755dGWPB2UYPDb84JZ3BYj5y19OlLEULJysPQsw=.png)

![](../assets/reinforcement-learning/assets/reinforcement-learning/cukcY4O18TnsBtqlC-k6drSe9EsT5ThEmj1eRCFvDx4=.png)

![](../assets/reinforcement-learning/assets/reinforcement-learning/H7Brp-fLJKrjZ8XJkpDy1e_OcOGS_3lwU_09GSgpnPA=.png)

![](../assets/reinforcement-learning/assets/reinforcement-learning/ANptl6hi0OPgBPa9guUkd8VDznzh_cph1ziMX5phMvo=.png)

 

![](../assets/reinforcement-learning/assets/reinforcement-learning/mjPr8MhDVWzy05Ty_SmWH0JFgmXWgc9O4E9asaFbM60=.png)

* What's the problem of this?
  * This isn't an online algorithm, it's not something where we can take one step, update our Q-vlaue and immediately improve our policy, but we would like to be able to run things online and be able to get the freshest possible updates ,then updating immediately.

![](../assets/reinforcement-learning/assets/reinforcement-learning/SzornyJmEjc5pfG0JBta45tMzqIbP-2uPBcgVepMezU=.png)

![](../assets/reinforcement-learning/assets/reinforcement-learning/sAfUcPZnPYrS1Li_E5wQNiAd3S5MxWKRHl5XIO9xTVQ=.png)

![](../assets/reinforcement-learning/assets/reinforcement-learning/qLDPH5lMzBFJSYJMafjFYtkj-G3lLUhOHNujXWQ_xqs=.png)

> https://chat.qwen.ai/s/t\_53c20bd8-dfc6-4204-886f-74ecba03690f?fev=0.1.9

![](../assets/reinforcement-learning/assets/reinforcement-learning/lGaMCMc4WJx-LAXtmCAxhrwCR7NMBnuaINUEI1rn46k=.png)

![](../assets/reinforcement-learning/assets/reinforcement-learning/ALpOttHB3YPlCn7A3Ikpnz1o-bCXkPsx4ZsLn2sHrzE=.png)

* $Eₓ~P[f(X)] ≈ (1/n) * Σ(i=1 ,2,...n) wᵢ * f(Xᵢ)$
* $w = π(a|s) / b(a|s)$
  * $π(a|s)$: Target Policy
  * $b(a|s)$: Behaviour Policy
* Change P sampling into Q sampling.
* importance weight: $wᵢ = P(Xᵢ) / Q(Xᵢ)$

![](../assets/reinforcement-learning/assets/reinforcement-learning/ACFnYSTTJ8R389adr1wkIa0LjA30fetIKXTZolIDrf0=.png)

![](../assets/reinforcement-learning/assets/reinforcement-learning/OLko43tpCcsCBxlhbM9nGCKy4OX_o22-wjPt9OTljaw=.png)

![](../assets/reinforcement-learning/assets/reinforcement-learning/PTLtodqdKSFVMEu7nD0lX8wCeD3UNahISDajantmq6I=.png)

 

![](../assets/reinforcement-learning/assets/reinforcement-learning/duvh32ekKNnJujf3x-e7XDYBQYN_4mGeYZf9jfOSRMQ=.png)

![](../assets/reinforcement-learning/assets/reinforcement-learning/gOp0HOXzeuvBnT1qGmX-gKxwSiLVxxW4xmFV_AdZXjQ=.png)

