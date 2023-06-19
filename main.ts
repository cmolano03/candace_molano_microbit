input.onButtonPressed(Button.A, function () {
    basic.showString("\"CANDACE\"")
})
input.onButtonPressed(Button.B, function () {
    basic.showIcon(IconNames.Happy)
})
input.onGesture(Gesture.Shake, function () {
    basic.showNumber(11)
})
basic.showLeds(`
    # # . . .
    . # . # #
    . . # . .
    . . . # .
    . . # # .
    `)
