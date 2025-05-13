---
layout: page
title: Detection of Gravitational Waves using Deep Learning
description: 
img: assets/img/detect_gw/det_gw.jpg
importance: 1
category: astro-ph.CO
related_publications: false
---
Ground-based interferometers now routinely detect gravitational waves (GWs) from compact binary coalescences (CBCs). While most detections so far are binary black hole (BBH) mergers, a few binary neutron star (BNS) and neutron star–black hole (NSBH) events have also been observed. The first BNS event, GW170817, ushered in multi-messenger astronomy and enabled key measurements of the Hubble constant and neutron-star physics. As detector sensitivity improves and new instruments come online, the prospect of more multi-messenger detections motivates development of complementary CBC search methods.

Current CBC searches rely on matched-filtering pipelines, which correlate data against banks of signal templates. These pipelines are effective but still face challenges from non-Gaussian noise transients (“glitches”) and long-duration BNS signals. Deep learning offers an alternative: by training neural networks to recognize signal features, it may be possible to detect CBCs with comparable sensitivity, reduced latency, and greater robustness to glitches.

In this work, we explore a neural network pipeline that ingests the signal-to-noise ratio (SNR) time series produced by matched filtering. Using SNR series condenses CBC power into shorter time windows, making it especially promising for longer BNS signals and straightforward to integrate with existing search products.

<div class="row">
    <div class="col-sm mt-3 mt-md-0">
        {% include figure.liquid loading="eager" path="assets/img/detect_gw/model_comparision.png" title="" class="img-fluid rounded z-depth-1" %}
    </div>
</div>
<div class="caption">
     The sensitivity curves for GW detection using CNN, ResNet50, and ResNet101 models actually demonstrate no too much differences in performance across varying
 false-alarm probabilities (FAP) and signal-to-noise ratios (SNR) as we see. The three models exhibits reasonable sensitivity which improves as the SNR increases. The additional depth of ResNet seems don’t allows for more comprehensive feature representation, enabling consistent and robust performance even at lower SNRs. 
</div>

- **Approach:** We train convolutional and residual neural networks on matched-filtering SNR series for both BBH and BNS signals. We compare traditional “pre-computed” data augmentation with an efficient “on-the-fly” method.
- **Key Findings:**
  - **Sensitivity:** Neural networks reach competitive sensitivity for BBH signals, with deeper residual models (e.g., ResNet101) outperforming simpler CNNs.
  - **BNS Challenges:** Detecting long-duration BNS signals remains harder, likely due to dataset size and waveform complexity.
  - **Data Augmentation:** On-the-fly augmentation converges faster and requires far less storage, with only minor loss in sensitivity.
- **Outlook:** To further improve BNS detection, future work should expand and diversify training data—ideally incorporating real interferometer noise—and explore architectures or feature-extraction strategies tailored to BNS waveforms. Balancing model complexity and real-time performance will be crucial for deployment in next-generation search pipelines.

This study demonstrates that deep learning on matched-filtering outputs holds promise as a complementary CBC detection method, particularly for BBH signals, and offers a roadmap for overcoming challenges in BNS detection and real-time application.  

## Availability
- Document: [here](https://helemnmmm.github.io/assets/pdf/dectection_gw.pdf)
- Codes: [codes](https://github.com/helemnmmm/GW_detection_using_deep_learning)


<div class="row">
    <div class="col-sm mt-3 mt-md-0">
        {% include figure.liquid loading="eager" path="assets/img/detect_gw/Sensitivity_curves.png" title="" class="img-fluid rounded z-depth-1" %}
    </div>
     <div class="col-sm mt-3 mt-md-0">
        {% include figure.liquid loading="eager" path="assets/img/detect_gw/singal.png" title="" class="img-fluid rounded z-depth-1" %}
    </div>
     <div class="col-sm mt-3 mt-md-0">
        {% include figure.liquid loading="eager" path="assets/img/detect_gw/method_comparision.png" title="" class="img-fluid rounded z-depth-1" %}
    </div>
</div>
<div class="caption">
     On the left, sensitivity curves illustrating the ability of the neural network to identify BNS(lower) and BBH(upper) GW signals. The true alarm probability is plotted as a function of the
 optimal SNR for false alarm probability. The figure shows the sensitivity of detecting GW signals embedded in Gussian noise from the test data set.a road goes through a tunnel. Middle, Inserted into simulated LIGO noise are representative signals from binary neutron star (BNS) and binary black hole (BBH) systems. (Upper panel) Presented is a whitened, noise-free temporal sequence representing a gravitational wave signal from a binary neutron star system, featuring an optimal signal-to-noise ratio (SNR) of 30. The blue curve illustrates the same gravitational-wave signal superimposed with additive whitened simulated LIGO noise with unit variance. This time series serves as an exemplar within the dataset utilized for training, validation, and testing of the convolutional neural network. (Lower panel) Analogous to the upper panel, this display pertains to a binary black hole gravitational-wave signal, with an optimal SNR of 20. Right, Method comparison illustrates the comparative analysis of methods applied in BBH using the CNN model.Traditional approaches(upper) exhibit considerable robustness concerning training accuracy and testing performance than on-the-fly data augmentation(lower).
</div>








