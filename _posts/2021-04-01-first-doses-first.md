---
layout: post
title:  "First Doses First (Overview)"
date:   2021-04-01
project: true
excerpt: "Collection of posts related to an optimized vaccine prioritization scheme that would save (likely) thousand of lives in the European Union"
tag:
- COVID-19
- FirstDosesFirst
- Vaccinations
---


# Introduction
In the current phase of the pandemic, most countries have insufficient supply of vaccines.
As long as this is the case, it is paramount to efficiently distribute the available vaccines to maximize their impact.

On idea which has been successfully adopted by several regions (UK, Quebec and others) is to give as many people as possible a first dose of the vaccine,
as even a single dose is enough to prevent severe cases of COVID (more about this can be found [here]({% post_url 2021-04-01-efficacy-1d-2d %})).

The basic argument boils down to this:
- One dose of the vaccine reduces symptomatic cases by approximately 85%.
- Two doses reduce symptomatic cases by >90% (the exact numbers differ between the various vaccines (AZ, Moderna, Pfizer, ...) and age groups, but this is roughly what they are)
- Assume that you have 2 doses - you can either give one to your grandmother and one to your grandfather or both of them to your grandmother
  - In the first case, you prevent that both of them die but they might get a mild cough (with 15% chance).
  - In the other case you reduce the chance that your grandmother gets a cough by another 10% but you let your grandfather die (or at least wait a few months in a pandemic until it's his turn to get vaccinated).

# Overview of posts

- Arguments why a First Doses First approach makes sense
  - [Efficacy of 1D vs 2D of BNT162b2]({% post_url 2021-04-01-efficacy-1d-2d %})
- Calculations of impact, based on empircal data [WIP - all links below]
  - [Estimated immunity with FDF strategy]({% post_url 2021-04-03-estimated-immunity-at %})
    - [Post with figures for all federal states of Austria]({% post_url 2021-04-04-estimated-immunity-at-regions %})
  - [Estimated immunity with FDF+FD strategy]({% post_url 2021-04-29-estimated-immunity-at-fd %})
    - [Post with figures for all federal states of Austria]({% post_url 2021-04-29-estimated-immunity-at-regions-fd %})
- [Reasons why FDF might be a bad idea]({% post_url 2021-04-03-fdf-counter-arguments %}) [Work in Progress - Feedback is greatly appreciated here]


# Is this some weird crank theory?
No. 
- Ezekiel J. Emanuel (MD, PhD, chair of the department of medical ethics and health policy at the University of Pennsylvania in Philadelphia): [Op-Ed](https://eu.usatoday.com/story/opinion/2021/04/08/covid-surge-deliver-first-vaccine-shots-delay-second-doses-column/7122747002/)
- Atul Gawande (MD, a surgeon at Boston-based Brigham and Women's Hospital and a professor at Harvard Medical School ): [Twitter Thread](https://twitter.com/Atul_Gawande/status/1377275975050924040?s=20)

(both on Joe Biden's [COVID Taskforce](https://www.beckershospitalreview.com/hospital-management-administration/meet-the-13-members-of-biden-s-covid-19-task-force.html))

- Michael Lin, PhD-MD, Associate Professor at Stanford
  - [Why "low efficacy after the 1st dose" is a mistake in the trial design](https://twitter.com/michaelzlin/status/1346536204825579520) 
  - [Why "immune escape from FDF" is an urban legend and wrong](https://twitter.com/michaelzlin/status/1346548426427699201)
  - [How ill-suited regulations prevent helping (i.e. kill) thousands of patients](https://twitter.com/michaelzlin/status/1377462096959393797)




# Recommended Reading & Watching

I strongly recommend reading/watching these links. I ordered them from top to bottom, based on how much value they add per minute of your time.

- Washington Post [A. Tabarrok on a faster way to herd immunity](https://www.washingtonpost.com/outlook/2021/02/12/first-doses-vaccine-rules-fda/?arc404=true)
- Reason Magazine [We could vaccinate twice as fast (Youtube, 7min)](https://www.youtube.com/watch?v=OZ3DubRHSVo) 
- Govind Persad, William F. Parker and Ezekiel J. Emanuel: [Taming the 4th COVID surge: Delay second shots and get first vaccine doses into arms](https://eu.usatoday.com/story/opinion/2021/04/08/covid-surge-deliver-first-vaccine-shots-delay-second-doses-column/7122747002/)
- New York  Times [Ezra Klein on FDF and related topics](https://www.nytimes.com/2021/04/01/opinion/covid-vaccine.html)
- [TheZvi](thezvi.wordpress.com): Weekly post (usually released on a Thursday) that summarizes the news from the last week and makes [solid predictions](https://thezvi.wordpress.com/2020/12/24/covid-12-24-were-fed-its-over/).
- [Marginal Revolution](https://marginalrevolution.com/): Blog with many (!), mostly very short posts. A bit hard to get into at first but I know from personal experience that it's possible. It is written by Alex Tabarrok and Tyler Cowen.
  - [Citing Astra Zeneca CEO on FDF](https://marginalrevolution.com/marginalrevolution/2021/01/pascal-soriot-on-first-doses-first.html)
  - [The First Dose is Good](https://marginalrevolution.com/marginalrevolution/2021/02/first-doses-first-the-data-is-arriving.html)
  - [Highlights from comments of previous post](https://marginalrevolution.com/marginalrevolution/2021/02/from-the-comments-on-fdf.html)
  - [The New Strain and the Need for Speed](https://marginalrevolution.com/marginalrevolution/2021/01/the-new-strain-and-the-need-for-speed.html)
  - [Citing Marty Makary, MD on need of AZ approval](https://marginalrevolution.com/marginalrevolution/2021/01/approve-the-astrazeneca-vaccine-now.html)
- Vox [Why you can't compare vaccines based on trial data](https://www.youtube.com/watch?v=K3odScka55A)
- UK Government: [Analysing effectiveness of first vaccine](https://publichealthmatters.blog.gov.uk/2021/02/23/covid-19-analysing-first-vaccine-effectiveness-in-the-uk/)
    - [COVID-19 Dashboard](https://coronavirus.data.gov.uk/) (the trend is pretty impressive and one of the best arguments to switch to FDF).
- Michael Lin, PhD-MD: [Twitter thread](https://twitter.com/michaelzlin/status/1346536200560025600) where he explains the same thing I did in [my post about 1D efficacy]({% post_url 2021-04-01-efficacy-1d-2d %}).

# Extending this work, data & source code

The methods I employed could be used to analyse other countries & regions as well.
If there's good data (such as the one published by the Austrian Government with it's eVaccination program) it can be done in a few minutes. 

The complete source code of my work as well as the complete data set is published on GitHub.
Data that is not contained will be automatically downloaded, parsed & prepared when the code is run (`data_loading.py` contains all of these procedures).

Source Code & everything else can be found on [Github](https://github.com/oerpli/FirstDosesFirst).

If you're interested in extending this work or investigate some specific question (or would like me to do so), please open a ticket on Github or contact me on [twitter](https://twitter.com/oerpli).


# Acknowledgements

My work is primarily inspired by [Alex Tabarrok](https://twitter.com/ATabarrok) and [Zvi Mowshowitz](thezvi.wordpress.com). While I recommend reading their output in general, I particularly recommend their writing on COVID as it is miles and months ahead of most newspapers.

Furthermore I want to thank Zvi & the anonymous donor that sponsored the [COVID microgrants](https://thezvi.wordpress.com/2021/03/04/covid-3-4-declare-victory-and-leave-home/) that made this work possible.

### Donations

At the current point in time this project is not constrained by budget.
If you still have a strong urge to donate me something, I won't stop you.

<form action="https://www.paypal.com/donate" method="post" target="_top">
<input type="hidden" name="hosted_button_id" value="A8V5PW6932NME" />
<input type="image" src="https://www.paypalobjects.com/en_US/i/btn/btn_donate_LG.gif" name="submit" title="PayPal - The safer, easier way to pay online!" alt="Donate with PayPal button" />
<img alt="" src="https://www.paypal.com/en_AT/i/scr/pixel.gif" width="1" height="1" />
</form>
