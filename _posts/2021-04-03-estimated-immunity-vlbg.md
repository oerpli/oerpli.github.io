---
layout: post
title:  "Estimated Immunity [WIP]"
date:   2021-04-03
project: false
excerpt: "[Work in Progress]"
tag:
- COVID-19
- FirstDosesFirst
- Vaccinations
- Austria
- Vorarlberg
---

<script type="text/javascript" src="https://cdn.jsdelivr.net/npm//vega@5"></script>
<script type="text/javascript" src="https://cdn.jsdelivr.net/npm//vega-lite@4.8.1"></script>
<script type="text/javascript" src="https://cdn.jsdelivr.net/npm//vega-embed@6"></script>

# Introduction


 <div id="vis"></div>
  <script>
    (function(vegaEmbed) {
      var spec = { "https://raw.githubusercontent.com/oerpli/oerpli.github.io/master/fdf/test_imm_vlbg.json"}
      var embedOpt = {"mode": "vega-lite"};

      function showError(el, error){
          el.innerHTML = ('<div class="error" style="color:red;">'
                          + '<p>JavaScript Error: ' + error.message + '</p>'
                          + "<p>This usually means there's a typo in your chart specification. "
                          + "See the javascript console for the full traceback.</p>"
                          + '</div>');
          throw error;
      }
      const el = document.getElementById('vis');
      vegaEmbed("#vis", spec, embedOpt)
        .catch(error => showError(el, error));
    })(vegaEmbed);

  </script>

# Posts

- [Efficacy of 1D vs 2D of BNT162b2](2021-04-01-efficacy-1d-2d.md)
