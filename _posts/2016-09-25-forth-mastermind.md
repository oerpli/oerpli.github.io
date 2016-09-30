---
layout: post
title:  "Forth Mastermind"
date:   2016-09-25
excerpt: "Usage of the Forth implementation of mastermind"
project: true
tag:
- Forth 
- Obscure
comments: off
feature: img/fMM.jpg
---

# ForthMastermind
Mastermind implementation in Forth. Source available [here](https://github.com/oerpli/ForthMastermind). This page (or at least something very similar) is also available [here](http://oerpli.github.io/ForthMastermind/).

### Usage
* Enter `init` to generate a new solution and then play.
* Put numbers on the stack and then enter `??` to test the solution. Outputs number of correct colors (col) and correct color on correct position (pos) 
* Use `shittyknuth` if you're to dense to solve it on your own. This runs an inefficient version of Knuth's mastermind algorithm and outputs the solution. If you're in time trouble use `greatknuth` instead as it's much faster!
 
#### Example usage
{% highlight haskell %}
init
0 2 3 1 ??
0 4 2 0 ??
shittyknuth 
." Look mommy, I solved it!" cr
." Hurry up Jimmy, grandma is waiting!" cr 
init
greatknuth
." I solved it even faster this time!" cr
{% endhighlight %}

## Some implementation details
* I tried to obfuscate the correct solution as good as possible (without using encoding/cryptography/hashing). This is done with currying
* Of course it's still possible to ''decompile'' the solver functions one after the other to extract the solution. I don't think there's anything better than a one way hashing function to accomplish hiding the solution from the user in Forth (due to `see`).

### Further Notes
* Number of possible colors (decoded as colors starting from 0) and fields (number of pins to guess) can be set to whatever you want. We recommend to stay below 7 fields though - it soon gets slow. 
* This note is here to justify the plural in the title of this section.

## License 
The MIT License (MIT)

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

If the Author of the Software (the "Author") needs a place to crash and you have a sofa available, you should maybe give the Author a break and let him sleep on your couch.

If you are caught in a dire situation wherein you only have enough time to save one person out of a group, and the Author is a member of that group, you must save the Author.

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.


THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
SOFTWARE.
