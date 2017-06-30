# Mongoose IoT Door Sensor

## Overview

An IoT Door Sensor for any room you wish to monitor!
Connect to AWS IoT or your favorite MQTT service to send real-time alerts anytime a sensitive door is opened, such as your office,
your childs room, your front door, a safe... or get more creative!

Monitor access to your [Little Free Library](https://littlefreelibrary.org/),
your mail box, or maybe your sock drawer to find a thief in the act!
This is a simple project with a million applications!

## Project Design

This app assumes a door sensor and 2 LEDs attached to your board.  When the door sensor is "open" a message is sent via MQTT and a Green LED lights up.  When the door is "closed" a message is sent via MQTT and a Red LED lights up.

The project was built with: 
- [Mongoose!](https://mongoose-os.com/)
- [Espressif ESP32 Development Board](https://www.adafruit.com/product/3269)
- A MC-38 Wired Door Sensor
- A Green LED and 220K Ohm Resistor
- A Red LED and 220K Ohm Resistor
- [AWS IoT](https://aws.amazon.com/iot/)

Attach the Red LED and resistor to GPIO Pin 16, and the Green LED on 17. 

To attach the MC-38, connect one wire from the sensor to GPIO Pin 5 and the other wire to Ground (it doesn't matter which wire is which).

See a [video of it in action on YouTube](https://www.youtube.com/watch?v=v5jblypN28E)

## How to install this app

- Install and start [mos tool](https://mongoose-os.com/software.html)
- Switch to the Project page, find and import this app, build and flash it:

<p align="center">
  <img src="https://mongoose-os.com/images/app1.gif" width="75%">
</p>
