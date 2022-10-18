---
layout: post
title:  "Collection of arguments against First Doses First"
date:   2021-04-03
excerpt: "What are possible reasons to avoid a FDF vaccination strategy?"
tag:
- COVID-19
- FirstDosesFirst
- Vaccinations
---

Back to the [COVID-19 First Doses First Project Overview]({% post_url 2021-04-01-first-doses-first %}).

Note: This post is still pretty weak

Common arguments against a single dose vaccination strategy are:

- [Wasn't tested that way](#wasnt-tested-that-way)
- [Immune escape](#immune-escape)
- [Long time protection](#long-time-protection)

If you have other reasons why FDF might be a bad idea, either contact me via [Twitter](https://twitter.com/oerpli) or open a PR on [GitHub](https://github.com/oerpli/FirstDosesFirst).



# Wasn't tested that way
This argument employs a classic method of bad argumentation.
It invokes the spectre of "untested medication that could cripple newborns" while in reality "untested" only refers to "not following protocol to the T" (where the protocol wasn't designed to optimize outcomes but to optimize speed of approval).

I think not a single person that ever brought up this argument would bet a non-trivial amount of dollars that the following statements are both true:
- Two doses of vaccination X are safe, if administered 3 weeks apart (or up to 5 weeks apart)
- There could be severe side effects if the second dose (which is identical to the first) is given later.

If nobody really believes that these two statements are true, why are we sacrificing thousands of lives pretending that they are true? 
And why are we still sacrificing thousands of lives and months in lockdown, after it has been conclusively proven by empirical data that they are indeed not both true? 
On the contrary, some studies have since been published that show better long term protection with larger interval between the two doses.


# Immune escape
Immune escape happens if the virus evolves/mutates in a way that allows spread even in a vaccinated population. The theory is that partial immunity might be especially bad as the virus could reproduce in a host for several generations until the immune system doesn't recognize the virus anymore and the immunity (conferred by the vaccine) is rendered ineffective. 

I am not aware of a serious analysis or model that evaluated the risk of immune escape.
More often than not the theoretical possibility of immune escape is invoked without any model or cost/benefit analysis[^1]


Therefore, I just list some possible counterpoints and if anyone wants to make the case that the risk of immune escape is too high with a "First Doses First" approach, they should address at least some of these points, else I likely won't find it very convincing.

- It's known that the immune system of old people is weaker than that of young people. If less than 100% protection is something VERY BAD THAT WE SHOULD BE WORRIED ABOUT, why do we vaccinate old people despite a higher chance that they (on average) will be only 92% or 93% immune and not 100%? There is no magical threshold just at the average immunity conferred by the 2nd dose of BNT162b2, else we would also ban less effective vaccinations (such as J&J, AZ)
- If in one scenario 50% of the population is 95% immune and the other half is 0% immune, there is way more viral activity (reproduction, spread, mutation...) than in a scenario where 100% of the population is 89% immune. More viral activity implies more mutations and a theory that prefers the first scenario over the second has to have a lot of epicycles.
- The mutations we're currently worried about arose before there were serious vaccinations programs.
- It's safe to assume that countries with more chaotic management (civil wars, natural disasters, being France) will mess up scheduling the second dose for at least some fraction of the population.
If this results in immune escape, we will get that anyway at some point, so why let hundreds of thousands of people die from wasting 50% of the vaccinations if we will have to figure out how to deal with variants anyway?
- While I hate to do it (because I don't really take them seriously after the mask debacle and other blunders in 2020): Even the WHO (or at least their European director) says that our vaccination are pathetic and should be sped up to prevent further mutations: [Random non-paywalled german article](https://www.vienna.at/inakzeptabel-langsam-who-kritisiert-impf-tempo-in-europa/6945688)

# Long time protection
One common argument is that "there's no evidence that the protection from one dose lasts for long enough".
To this I would respond that there is also no evidence that the earth doesn't crash into the sun if people bring up that argument. 

The more serious counter arguments are:
- Reinfection with COVID-19 is rare
- Protection from other vaccines doesn't run out a few weeks after administering them. There's no reason to assume that COVID-19 is a super-magic-mega-bad illness that defies all expectations and works completely different
- Even if immunity would vanish after 6 or 8 weeks (this is a pretty big if), it would still be better to vaccinate people 3 and 4 and 5 times as the production ramps up, because the increased availability in later months more than makes up for loss of doses from needing more on each individual.
  - Let's take the following scenario, you have 10 doses in Jan, 20 in Feb, 40 in March, 80 in April, 160 in May, ...
  - You could vaccinate 5, 10, 20, 40 and 80 people with 2 doses. Total of 155.
  - Or, with only 1 dose, refreshed after 2 months: 10, 20, 30 (40 doses in March, 30 first time vaccinations, 10 "wasted" to refresh those from January), 60, 120 (160 doses, 120 first time, 40 to revaccinate everyone from March, including those that already had one in January). Total of 240.
  - At some point (when enough people are vaccinated or the ramp up of production capacity slows down) it will be better to switch over to 2 doses in 1 month and be done with it but currently we're far away from that point.


This table shows a worst-case estimation of number of people vaccinated with a 1D strategy if they need revaccination after 2 months (in case immunity completely vanishes if the 2nd dose is given more than a month after the first). 
The number in the "2D strategy" column is just the number of doses divided by two, the 1D numbers is the number of doses minus the number of people vaccinated two months earlier (bold part in Revaccinations column).

Even in this extremely pessimistic & unrealistic scenario, a vaccination strategy that prioritizes giving many people a first dose would come out on top. 

| Month     |    Doses | 2D strategy | 1D strategy | (Revaccinations)   |
| --------- | -------: | ----------: | ----------: | :----------------- |
| Jan       |       10 |           5 |          10 | = (10 - **0**)     |
| Feb       |       20 |          10 |          20 | = (20 - **0**)     |
| Mar       |       40 |          20 |          30 | = (40 - **10**)    |
| Apr       |       80 |          40 |          60 | = (80 - **20**)    |
| May       |      160 |          80 |         120 | = (160 - **40**)   |
| June      |      320 |         160 |         240 | = (320 - **80**)   |
| July      |      640 |         320 |         480 | = (640 - **160**)  |
| **Total** | **1270** |     **635** |     **960** | = (1270 - **310**) |


Therefore, I would conclude that people talking about those two risks are mostly just parroting what other people were saying without having spent a few minutes seriously thinking about it as it doesn't hold up to  basic scrutiny. If anyone has counter arguments, feel free tell me on [twitter](https://twitter.com/oerpli) or wherever else you would prefer (contact information is available on the main page of this blog).

[^1]: Michael Lin, PhD-MD (Associate Professor at Stanford) calls the higher chance of immune escape by a FDF vaccination program "Twitter Wisdom" and argues that it is not backed up by any data (with which I agree). The basic argument is that the overall time the virus has to mutate (average days per infection * people that are likely to be infected) is vastly higher when a two-dose vaccination strategy is used. [Twitter Thread](https://twitter.com/michaelzlin/status/1346548426427699201)
