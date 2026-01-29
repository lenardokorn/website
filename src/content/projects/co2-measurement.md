---
title: 'CO2 Measurement'
description: 'A project where we collected CO2 data in classrooms at HTL Kaindorf'
pubDate: 'Feb 01 2023'
heroImage: '../../assets/co2-measurement.jpg'
---

Together with my friends, Nina and Paul, I had the opportunity to play a role in this exciting project. Professor Schreiber approached us with the idea that we could install CO2 sensors in each classroom to monitor air quality and encourage more frequent ventilation. Better air quality improves students' concentration and lowers COVID19 risk of infection which was a problem at the time.

We installed ESP32 micro controllers with Sensirion SCD30 CO2 sensors. Via MQTT these devices published their data in the school network to then be displayed in a Grafana dashboard. Additionally, The devices are equipped with LEDs signaling to students when opening the windows is a good idea.

I got to develop an admin tool – a web application which would automatically detect every CO2 measuring device in the network and allow the user to change settings remotely. In addition to that, I was tasked with securing sponsors to cover the costs. This taught me a lot and forced me out of my comfort zone. In the end, we had 17 sponsors who we are very thankful for.

At 2023's open day at HTL Kaindorf, we had a monitor displaying the CO2 data from a few devices scattered across the school building, thus giving visitors a first-hand experience of what kinds of projects we did.
