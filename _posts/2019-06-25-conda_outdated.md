---
layout: post
title:  "Conda: List available package updates"
date:   2019-06-25
excerpt: "Get a list of all available package updates, unrestrained by the compatibility solver"
tag:
- Anaconda
- Conda
- Python
- PyPI
---

# Conda: List available package updates
PIP has a command `pip list --outdated` which lists all packages, where a newer version is available.
Conda has `conda search --outdated` which lists all available versions and `conda list` which shows the currently installed version of each package.

This script saves the output from `conda list` and `conda search --outdated`, parses it and generates a list of packages where the installed version does not matched the newest version available via conda.

{% gist 6b88df07c0ef0635bcf1cf456da69fd9 conda_outdated.py  %}

## Usage

Run `python conda_outdated.py` - it asks whether to use the existing temp files or run the conda commands to create new ones (in doubt, just press `Enter`).
The output should then resemble something like this: 

{% gist 6b88df07c0ef0635bcf1cf456da69fd9 Sample_Output.txt  %}

In some cases the installed version is higher than the "Newest" version. This may be the case for packages installed with PIP that are not yet available via conda.
