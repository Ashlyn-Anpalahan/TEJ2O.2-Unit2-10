"""
Created by: Ashlyn
Created on: Mar 2026
This module will read the amount of light.
"""

from microbit import *
import neopixel

np = neopixel.NeoPixel(pin16, 4)
display.show(Image.HAPPY)

while True:
    if button_a.was_pressed():
        light_amount = display.read_light_level()
    np.clear()
    if light_amount > 52:
        np[0] = (255, 0, 0)
    if light_amount > 104:
        np[1] = (255, 0, 0)
    if light_amount > 156:
        np[2] = (255, 0, 0)
    if light_amount > 208:
        np[3] = (255, 0, 0)

    np.show()
    sleep(100)
