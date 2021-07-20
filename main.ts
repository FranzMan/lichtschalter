input.onButtonPressed(Button.A, function () {
    if (LED_AN == 0) {
        LED_AN = 1
        basic.setLedColor(0xff0000)
    } else {
        LED_AN = 0
        basic.turnRgbLedOff()
    }
})
let LED_AN = 0
LED_AN = 0
