---
layout: post
title:  "Estimated Immunity [WIP]"
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



Vaccination in Austria/Vorarlberg started in Jan 2020 and has been steadily increased its pace every since.

<div class="vega-chart" id="vacc_real_t_at-vlbg"></div>

# Estimated immunity
Based on the amount of currently vaccinated people and using the real-world efficacy estimate from the NHS (89% with 1 dose, 95% with two doses).
Additionally, I calculate the estimated immunity for an alternative universe, where vaccines where distributed according to a FDF approach as employed in the UK [^1]

<div id="imm_real_at-vlbg"></div>
<div class="vega-chart" id="imm_fdf_at-vlbg"></div>



# Sources

[^1]: The prioritization scheme I chose is roughly as described in this [response](https://www.bmj.com/content/372/bmj.n710/rr). The age brackets available in my data set don't match those in the proposed scheme exactly. I used the relative risk as published by the CDC to prioritize the groups.
