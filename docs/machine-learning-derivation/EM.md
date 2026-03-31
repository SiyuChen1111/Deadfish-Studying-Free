## Preview
- an inference problem can be formulated as a **latent gaphical model** where given the observed data we would like to infer the **posterior probability distribution** of associated **latent variables**, which can be usually interpreted as properties,
- the posterior is typically intractable due to typically the marginal requires an integral to compute
- variational inference uses a simp;e, parameteric distribution to approximate the true posterior and turns the intractable problem into an optimization proble,
- kl divergence measures the difference between the approximate distribution and the true posterior
- minimizing kl divergence is equivalent of maximizing evidence lower bound(ELBO)
- ELBO is negative & plays a very important role in subsequent algorithm formulations
> https://www.bilibili.com/video/BV1Y57jzfE6N?vd_source=7b2584179c6dc9c18721c42b39ce63b9
---
## EM Algorithm
- 主要解决问题：具有隐变量的混合模型的参数估计，也就是解决它的极大似然估计。
- EM算法本身也是一个迭代算法
- z代表后验
![alt text](/assets/machine-learning-derivation/image-5.png)
### 从ELBO & KL divergence角度推导
 - EM的核心想法就是让ELBO达到最大，从而让log likelihood也能达到最大。
 - 是一种不停攀爬的迭代方式。
 - ELBO可以看作是关于后验的期望。
    - 每次先固定theta值，然后去求后验，表达出来对应的期望ELBO（是一个函数），再在这个期望函数上通过改变theta值，从而实现ELBO最大，得到极大似然估计值。
![alt text](/assets/machine-learning-derivation/image-6.png)
---
### 从Jensen不等式角度推导
- 积分可以想像成求期望 
- 凸函数的性质可以写出Jensen不等式：
![alt text](/assets/machine-learning-derivation/image-8.png)
![alt text](/assets/machine-learning-derivation/image-9.png)
- 因此，求期望可以转换为先求其对应的函数
    - 而当函数为一个常数时，这个Jensen不等式就可以取等号。
- q(z)是我们自行引入的关于z的一个分布，因此对z积分q(z)的值应为1。
![alt text](/assets/machine-learning-derivation/image-10.png)