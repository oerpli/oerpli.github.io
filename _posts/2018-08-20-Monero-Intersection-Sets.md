---
layout: post
title:  "Monero Traceability & Graph Theory (Work in Progress)"
date:   2018-20-08
excerpt: "Formulation of Monero traceability analysis as a graph-theoretic problem"
tag:
- Monero
- Privacy
- Traceability
- GraphTheory
- ComplexityTheory
---

# Monero Traceability
Monero is a cryptocurrency where each TX input has exactly one real input and some amount of decoys (between 0 and 4500, these days usually 7).
Taken together, these are called rings.
The privacy of Monero is built upon the idea, that figuring out which input is real is hard. This is called untraceability.
Some publications (including my Master's thesis) found ways to figure out the real input in some cases.
Other publications  proposed methods to issue transactions that weaken the untraceability aspect of Monero. There are approaches to prevent these attacks, which usually try to find them and blacklist their outputs (so they are not sampled as 'useless'/obvious decoys).

So far, the work has been mostly empirical. I thought about finding theoretical upper/lower bounds for the complexity of identifying transactions outputs which should not be sampled. Io and behold:

## Mapping to bipartite graph

Transactions have inputs and outputs. The set of all inputs is called \\(I)\\), the outputs are \\(O\\).
Each input \\(i \in I)\\ is a nonempty set of outputs.
This can be mapped to a bipartite graph. A bipartite graph is a graph \\(G=(V,E)\\) (with a set of vertices V and a set of edges E) where the set of vertices can be partitioned into two sets \\(V_1\\) and \\(V_2\\) where each edge \\(e\in E\\) connects a vertex from one set with a vertex from the other set.
Each member of the set of inputs is mapped to a vertex of \\(V_2\\), each output is mapped to a vertex in \\(V_1\\).
A vertex \\(v_1\\)  (output vertex) is connected to a vertex \\(v_2\\) (input vertex) if and only if the corresponding output is referenced (either as real input or as decoy) in the corresponding input.



## Formulating the problem

For each input, the real input (i.e. the spent output) has to be found. If every input is traced, all edges that connect outputs to the input where they are spent would be a maximum matching. As there are less inputs than outputs we call it a perfect matching iff it has the size of \\(|V_2|\\).
Some observations:

* Finding a perfect matching in a general graph is [hard](https://en.wikipedia.org/wiki/List_of_NP-complete_problems)
* Finding a perfect (actually maximum) matching in a bipartite graph is [not hard](https://www.geeksforgeeks.org/maximum-bipartite-matching/)
* At any point in time, the number of referenced outputs of a given input is fixed. The number of inputs that are connected to an output can change though.
Therefore its possible to say that an output is spent in an input if the input is only connected to one output, but not the other way around (CWA for inputs, OWA for outputs)

We're not interested in some arbitrary maximum/perfect matching for our bipartite graph but in the "real" bipartite matching, i.e. the matching which selects the edges which connect inputs to the spent output.

## Solving the problem (partially)

Some edges have to be in the matching, as it would not be possible to have a perfect matching without them (e.g. if an input-vertex only has one adjacent output).
Identifying all edges that have to be in the matching is trivial and can be done by iteratively taking all edges that are incident to an input with only one adjacent output and then removing both (in particular all other edges connecting the output to other inputs) from the graph. This technique is usually called Zero-Mixin-Removal. 

After the graph has been pruned in this way, the harder part of the problem remains.
Now the next technique would be to look at sets of inputs of size N which occur N times. If N=1, this is the same as the previous technique. If N is higher, this is called (in my thesis at least) Intersection Removal.
If we find such a set of inputs, we can be sure that all of the referenced outputs have to be spent, and all edges from the outputs that do not go to one of the inputs in the set can be removed.
Additionally, the set of N inputs and N outputs can be removed from the graph, though it is not possible to identify, which output is spent in which input (at least without additional techniques, see [my thesis]).

The last step would be to identify N arbitrary inputs which, taken together, reference not more than N unique outputs (actually it would be exactly N, as it is not possible to have less than N unique outputs referenced in N inputs).
If any such set is identified, all inputs and outputs can be removed again.

## How hard is this problem?

The first two steps of the previous part are straightforward and possible in polynomial time, about the last step I'm not sure.
Some ideas for approaching the problem:

* Forcing edge(s): If this edge (or set of edges) is picked for the matching, all other edges of the matching are determined. I.e. a set of edges is forcing, if it uniquely determines a perfect matching. The problem at hand is the opposite: We're looking for edges which have to be in every perfect matching. I would call them "forced edges", though not sure if that is a good idea. 
* Calculating all possible perfect matchings and taking the intersection is not advisable though, as that number is possibly very high. Just counting the number of unique perfect matchings in a graph is #P-complete afaik, i.e. pretty hard.
* While it would be nice to find the real input of every ring, this is not possible (CTRL+F: "Intersection removal"). Therefore the size of the (maximal) matching is not known in advance. 
* The problem can be partitioned into independent subproblems, though I'm not sure about the benefits of this. Outputs from RingCT TXs can only be used in inputs for other RingCT TXs, so that's one possible split (with some in between vertices due to conversion-transactions).
* As some parts of the problem cannot be "solved" (CTRL+F "Intersection removal" again), an optimal solution could also be defined to be a solution which matches everything that is possible as well as identifies as many unsolvable parts as possible.