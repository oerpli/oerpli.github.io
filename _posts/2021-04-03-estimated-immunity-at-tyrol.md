---
layout: post
title:  "Estimated Immunity Tyrol/AT"
date:   2021-04-03
project: false
excerpt: "Estimating impact of not adopting FDF approach"
charts: true
tag:
- COVID-19
- FirstDosesFirst
- Vaccinations
- Austria
- Vienna
- Wien
---

# Introduction

The COVID-vaccination program in Tyrol started in Jan 2021 (except for a few doses given in Dezember 2020 for PR purposes) and has since steadily increased its pace.
So far, vaccinations in Austria have largely been administered according to the vaccination strategy suggested by the vaccine trials.
This strategy was optimized to get a fast approval. For this reason, the following two decisions were made during the trial:

- Short interval between doses (to decrease time needed for trials)
- Rather large dosage (to ensure high efficacy for old people)

Now that the vaccines are approved for use, it is time to reconsider some of these approaches to further speed up vaccination programs.
For example the NHS in the United Kingdom decided to prioritize giving as many people as possible a first dose of the vaccine instead of holding back a second dose for people already vaccinated once.
Additionally, they also decided to increase the time interval between the two doses (this strategy is commonly referred to as "First Doses First", or short "FDF").

In this post, I will analyze how a FDF approach would have impacted the immunization of Tyrol's population so far.


# Analysis
The following figure shows the cumulative number of vaccinations administered per age group.

<div class="vega-chart" id="vacc_real_t_at-t"></div>

# Estimated immunity
These calculations are based on the amount of currently vaccinated people, using the real-world efficacy estimate from the NHS (89% with 1 dose, 95% with two doses).
Additionally, I calculate the estimated immunity for an alternative timeline, where vaccines where distributed according to a First Doses First (FDF) approach as employed in the UK [^1].

Note that these figures don't incorporate the time-lag between vaccination and build-up of immunity. To get more realistic estimates it would be necessary to slowly increase the immunity from 0 to 0.89/0.95 roughly 10-14 days after the vaccine has been administered (the argument for this can be found in [another post of mine]({% post_url 2021-04-01-efficacy-1d-2d %})). I decided that it is better to do it this way for two reasons:
- I don't have very good data on the speed with which different age groups build up immunity (nor, how this build-up is averaged over all age-groups)
- The chosen method better visualizes towards what level of immunity our vaccination effort would rise if the programs were to be paused (e.g. because of supply issues).

<div class="vega-chart" id="imm_real_at-t"></div>

<div class="vega-chart" id="imm_fdf_at-t"></div>

As can be seen, with a "First Doses First" approach the immunity in the critical age groups (roughly above 65 years old) would be approximately twice as high.

## Weighted average immunity
To get a better sense of the increased average immunity, here's a plot of the immunity weighted by population, i.e the "average immunity per person".
In a scenario where all age groups have a similar level of social activity, the reproduction number (R) would decrease approximately by a factor of 1-Immunity. 

<div class="vega-chart" id="imm_wp_at-t"></div>

The threshold for herd-immunity is estimated to be around 85% (depending on reproduction number of the variants), which would be reached when the line above is at 0.85.

For the time being this is quite some time away, so the first priority should be to protect people with the highest risk (where COVID is most lethal).
For this purpose I calculate the weighted average immunity again, but this time I weight with the death-distribution from COVID (published by AGES [^2]) instead.

<div class="vega-chart" id="imm_wd_at-t"></div>

If this number is close to 1, COVID would still spread but severe cases and deaths would be very rare.

# Discussion
My analysis shows that our vaccination effort would be approximately one month ahead if we had used a FDF strategy.
This difference will likely be crucial if the UK variant leads to a higher number of cases in the coming months.

As it is not too late to modify our vaccination strategy, I strongly suggest adopting a FDF strategy for Austria as well.

# Sources

[^1]: The prioritization scheme I chose is roughly as described in this [response](https://www.bmj.com/content/372/bmj.n710/rr). The age brackets available in my data set don't match those in the proposed scheme exactly. I used the relative risk as published by the CDC to prioritize the groups.

[^2]: https://www.ages.at/themen/krankheitserreger/coronavirus/
