---
layout: post
title:  "Ising Model"
date:   2017-04-19
excerpt: "An interactive simulation of nucleation and phase transitions"
project: true
tag:
- C#
- WPF
- Physics
---

# The Ising Model

The Ising model was introduced in the thesis of Ising, a German physicist (pronounciation: "easing") and was intended as a simple model for ferromagnets. 

## Theory

It consists of spins that are either directed upwards or downwards and one interaction: Spins prefer to be aligned like their neighbouring spins. Each spin \\(n_i\\) from the set of all spins \\(S\\) has a set of neighbouring spins \\(N_i\\). Each spin has a value \\(\pm 1\\). The energy of the system is then defined as:

\\[ E = \sum_{i\in S} \sum_{j\in N_i} S_i \cdot S_j\\]

To get a simulation of this system Metropolis-Hastings Markov-chain Monte Carlo is used where the probability to be in a given configuration with an associated energy is given by the Boltzmann-distribution.

For further details about this consult the Wikipedia article.

## Simulation

For my bachelor's thesis "Sampling the Ising Model" in the laboratory "Scientific Computing" (supervised by Sabine Andergassen) I implemented the Ising model with Java and wrote a GUI with the [processing library](https://processing.org/). The simulation featured single spin and cluster flip algorithms.

I later rewrote the simulation from my bachelor's thesis in C# with a better GUI for the [Campus Festival 2015](https://www.univie.ac.at/650/aktuelles-ueberblick/campus-festival-2015/) (650 year anniversary festival of the University of Vienna) where it was showcased as interactive nucleation simulation (pictured below).

{% capture images %}
    http://i.imgur.com/kNhhD9g.png
{% endcapture %}
{% include gallery images=images caption="Simulation of the Ising model" cols=1 %}

The source code and binaries for both versions are available [here](https://github.com/oerpli/Ising/releases)