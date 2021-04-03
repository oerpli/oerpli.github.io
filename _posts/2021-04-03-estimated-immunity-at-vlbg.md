---
layout: post
title:  "Estimated Immunity Vorarlberg/AT"
date:   2021-04-03
project: false
excerpt: "[Work in Progress]"
charts: true
tag:
- COVID-19
- FirstDosesFirst
- Vaccinations
- Austria
- Vorarlberg
---



The COVID-vaccination program in Austria/Vorarlberg started in Jan 2021 (except a few doses given in Dezember 2020 for PR purposes) and has since steadily increased its pace.

The following figure shows the cumulative number of vaccinations given per age group.

<div class="vega-chart" id="vacc_real_t_at-vlbg"></div>

# Estimated immunity
Based on the amount of currently vaccinated people and using the real-world efficacy estimate from the NHS (89% with 1 dose, 95% with two doses).
Additionally, I calculate the estimated immunity for an alternative universe, where vaccines where distributed according to a FDF approach as employed in the UK [^1].

Note these figures don't incorporate the time-lag between vaccination and build-up of immunity. To get more realistic estimates it would be necessary to slowly increase the immunity from 0 to 0.89/0.95 roughly 10-14 days after the vaccination has been administered (the argument for this can be found in [another post of mine]({% post_url 2021-04-01-efficacy-1d-2d %})). I decided that it is better to do it this way for two reasons:
- I don't have very good data on the speed with which different age groups build up immunity (nor even, how this build-up is in aggregate)
- The chosen method better visualizes towards what level of immunity our vaccination effort would rise if the programs are paused (for whatever reason, e.g. supply issues).

<div class="vega-chart" id="imm_real_at-vlbg"></div>

<div class="vega-chart" id="imm_fdf_at-vlbg"></div>


# Sources

[^1]: The prioritization scheme I chose is roughly as described in this [response](https://www.bmj.com/content/372/bmj.n710/rr). The age brackets available in my data set don't match those in the proposed scheme exactly. I used the relative risk as published by the CDC to prioritize the groups.
