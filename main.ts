/* Copyright (c) 2020 MTHS All rights reserved
 *
 * Created by: Ashlyn
 * Created on: Mar 2026
 * This program will show the birghtness level of light 
*/

// variables
let neopixelStrip: neopixel.Strip = null
let lightAmount: number = 0

// cleanup
basic.clearScreen()
neopixelStrip = neopixel.create(DigitalPin.P16, 4, NeoPixelMode.RGB)
neopixelStrip.setPixelColor(0, neopixel.colors(NeoPixelColors.Black))
neopixelStrip.setPixelColor(1, neopixel.colors(NeoPixelColors.Black))
neopixelStrip.setPixelColor(2, neopixel.colors(NeoPixelColors.Black))
neopixelStrip.setPixelColor(3, neopixel.colors(NeoPixelColors.Black))
neopixelStrip.show()
basic.showIcon(IconNames.Happy)

input.onButtonPressed(Button.A, function () {
lightAmount = input.lightLevel()
neopixelStrip.clear()

if (lightAmount <= 51) {
    neopixelStrip.clear()
}
if (lightAmount > 52) {
    neopixelStrip.setPixelColor(0, neopixel.colors(NeoPixelColors.Violet))
}
if (lightAmount > 104) {
    neopixelStrip.setPixelColor(1, neopixel.colors(NeoPixelColors.White))
}
if (lightAmount > 156) {
    neopixelStrip.setPixelColor(2, neopixel.colors(NeoPixelColors.Indigo))
}
if (lightAmount > 208) {
    neopixelStrip.setPixelColor(3, neopixel.colors(NeoPixelColors.Purple))
}
neopixelStrip.show()
})