---
layout: page
title: Hunting optical counterparts of gravitational wave events with Wendelstein
description: 
img: assets/img/gw_followup/gw_followup.png
importance: 1
category: High Energy Astrophysical Phenomena
related_publications: false
---

The discovery of gravitational waves (GWs) marked the beginning of a new era in astronomy—the era of multi-messenger astrophysics. Since the operation of ground-based gravitational wave detectors such as LIGO, Virgo, and KAGRA, astronomers have been able to detect gravitational wave events from compact binary mergers (including binary black holes (BBH), binary neutron stars (BNS), and neutron star–black hole systems (NSBH)) at a rate of approximately one per day, a trend expected to continue through June 2025. Among these events, a fraction (particularly BNS, some NSBH, and BBH mergers within active galactic nuclei accretion disks) is expected to be accompanied by observable electromagnetic radiation, especially in the optical bands, which we call **electromagnetic counterparts**. However, only one electromagnetic counterpart—GW170817—has been definitively confirmed to date, limiting our understanding of the physical nature of GW sources.

This project aims to systematically search for potential optical electromagnetic counterparts using real-time GW data from the fourth observing run (O4) of the LIGO/Virgo/KAGRA collaboration. Based on galaxy redshift and positional information provided by the DESI survey, we prioritize potential host galaxies and follow up with the [Wendelstein Observatory 2-meter telescope](https://www.physik.lmu.de/observatory/en/research/wendelstein-observatory/) using a three-channel wide-field imager for targeted observations.

During the project internship, I worked in a team led by [Prof. Daniel Gruen (LMU/USM)](https://www.imprs-astro.mpg.de/content/prof-dr-daniel-grun-0.html) and a group of students. Beyond daily observations and data analysis, I was specifically responsible for **interpreting photometric data** through **light curve modeling** and **detectability analysis** of EM counterparts of GW events, including BBH, AGN, kilonova (KN), and supernovae.

We aim to identify parameter combinations that render events undetectable under current observational constraints, thereby refining detection limits and providing theoretical guidance for optimizing follow-up strategies. By predicting undetectable regions, this research helps in resource allocation, reducing ineffective observations of low-probability events. Additionally, comparing undetectable regions with observational data allows us to validate and refine theoretical model.

The LVK collaboration releases new GW candidates via [GraceDB](https://gracedb.ligo.org/). For events that satisfy the criteria, we use DESI data to filter host galaxy candidates, generate probability sky maps, and compute the completeness of DESI galaxy coverage in the event’s 3D localization volume. A prioritized target list is then generated.

<div class="row">
    <div class="col-sm mt-3 mt-md-0">
        {% include figure.liquid loading="eager" path="assets/img/gw_followup/gw_followup.png" title="" class="img-fluid rounded z-depth-1" %}
    </div>
</div>
<div class="caption">
    The GW event map distribution
</div>

We check real-time observability, produce observation scripts and Collect observational data are processed for data reduction, followed by difference image producing, and light curve construction. Candidates identified from difference imaging are subsequently classified.

I focused on light curve modeling and detectability evaluation for BNS, NSBH, BBH, and AGN mergers, utilizing photometric data and developing a modular automated analysis pipeline. This pipeline covers the full workflow: event configuration, model interpolation, magnitude conversion, signal-to-noise ratio (SNR) computation, $\chi^2$ statistics, significance evaluation, and visualization.

<div class="row">
    <div class="col-sm mt-3 mt-md-0">
        {% include figure.liquid loading="eager" path="assets/img/gw_followup/lightcurve_NSBH_2021_anand_Bu2019nsbh.png" title="" class="img-fluid rounded z-depth-1" %}
    </div>
     <div class="col-sm mt-3 mt-md-0">
        {% include figure.liquid loading="eager" path="assets/img/gw_followup/snr_analysis.png" title="" class="img-fluid rounded z-depth-1" %}
    </div>
</div>
<div class="caption">
    On the left, the source 024516_p542759 from event S250206dm is evaluated under different models for its SNR. For models deemed detectable, we further compute the reduced chi-square statistic ($\chi^2_\nu$) to assess how well the model light curves fit the observational data.
    Right, The figure below shows the comparison between the multi-band model light curves and the observed data. The results suggest that this source is detectable under current observational conditions and exhibits a good initial fit to the model.
</div>

