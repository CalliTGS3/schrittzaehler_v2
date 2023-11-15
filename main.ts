input.onButtonEvent(Button.A, input.buttonEventClick(), function () {
    basic.showNumber(Schritte)
    basic.pause(1000)
    basic.clearScreen()
})
let Schritte = 0
basic.showIcon(IconNames.StickFigure)
basic.pause(1000)
basic.clearScreen()
Schritte = 0
basic.forever(function () {
    if (input.acceleration(Dimension.Strength) > 1500 && input.acceleration(Dimension.Strength) < 3000) {
        Schritte += 1
        basic.setLedColor(0xff0000)
        basic.pause(100)
        basic.turnRgbLedOff()
    }
})
