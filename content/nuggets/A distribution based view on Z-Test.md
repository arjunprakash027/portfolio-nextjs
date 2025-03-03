### Understanding how to compare values in a distribution

Let's imagine a normal distribution with a **mean of 100** and a **standard deviation of 10**. A large proportion of the data falls within **±2 standard deviations** from the mean, meaning that most values lie between **80 and 120**.

Now, can we say that the probability of obtaining values like **89 or 107** is relatively higher than getting extreme values like **60 or 150**? Yes, because values closer to the mean are more frequent in a normal distribution, while those further away are less likely. A value like **30**, which is **7 standard deviations away from the mean**, has an extremely low probability.

Let's keep this in mind as we explore how the **Z-test** works.

---

### Z-Test and the Sampling Distribution

The **Z-test** is used to check the probability of the **null hypothesis**—that is, whether a sample is likely drawn from the given population.

There’s something called a **sampling distribution of the sample mean**, which is simply the probability distribution of means from multiple samples taken from the population. As the number of samples increases, this distribution **approaches a normal distribution** (Central Limit Theorem).

Now, let's take a mean from a **specific sample** and check where it falls within this distribution. If the sample mean is **4 standard deviations away from the population mean**, can we say it's unlikely to have come from the population just by random chance? Yes. The further the sample mean is from the population mean, the lower the probability of it occurring under the null hypothesis.

To quantify this, we use the **Z-score formula**:

Z = (X̄ - μ) / (σ / √n)

Where:
- X̄ = Sample mean  
- μ = Population mean  
- σ = Population standard deviation  
- n = Sample size  

A **higher absolute Z-score** indicates the sample mean is far from the population mean.

If the **absolute Z-score (|Z|) is large** (typically beyond **1.96** for a **95% confidence level**), the probability of the sample being from the population is **very low**, leading us to **reject the null hypothesis**. This suggests that the sample was likely influenced by some factor other than random variation.