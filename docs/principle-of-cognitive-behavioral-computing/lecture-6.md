- This notebook shows the reproduction of RDK tasks.


```python
import numpy as np
T = 2
D = 100
f = 0.51
```


```python
from scipy.stats import bernoulli
N_correct = 0
N_wrong = 0
for i in range(T*D):
    dir = bernoulli.rvs(f,size=1)
    N_correct = N_correct + dir
    N_wrong = N_wrong +(1-dir)

if N_correct > N_wrong:
    choice = 1
elif N_correct < N_wrong:
    choice = 0
else:
    choice = bernoulli.rvs(0.5,size=1)
print(choice)
```

    1



```python
# 模拟一次决策
def makeOneDecision(D=100, T=2, f=0.6):
    '''
    <D>: 总共的点数
    <T>: 帧数（刺激持续时间）
    <f>: 向正确方向移动的点所占的比率
    '''
    N_correct = 0
    N_wrong = 0
    for i in range(T*D): # loop 点
        dir = bernoulli.rvs(f, size=1)
        N_correct = N_correct + dir # 正确的点数量+1
        N_wrong = N_wrong + (1-dir) # 错误的点数量+1

    if N_correct > N_wrong:
        accuracy = 1
    elif N_correct < N_wrong:
        accuracy = 0
    else:
        accuracy = bernoulli.rvs(0.5, size=1)
    return accuracy
```


```python
def makeManyDecision(D=100,T=2,f=0.6,nTrial=100):
    decision = np.empty(nTrial)
    for i in range(nTrial):
        decision[i]=makeOneDecision(D,T,f)
    return decision.sum()/nTrial

```


```python
nTrial = 1000

coh = np.array()
```
