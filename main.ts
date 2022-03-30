input.onButtonPressed(Button.A, function () {
    basic.showLeds(`
        # # # # #
        . . # . .
        . . # . .
        # . # . .
        # # # . .
        `)
})
input.onGesture(Gesture.FreeFall, function () {
    music.playTone(262, music.beat(BeatFraction.Breve))
})
input.onGesture(Gesture.TiltLeft, function () {
    for (let index = 0; index < 1; index++) {
        basic.showString("Horses are cool!")
    }
})
input.onSound(DetectedSound.Loud, function () {
    basic.showLeds(`
        . . . # #
        . . . # .
        # # # # .
        # # . # .
        . # . # .
        `)
})
input.onButtonPressed(Button.AB, function () {
    music.playMelody("E B C5 A B G A F ", 120)
    music.playMelody("G B A G C5 B A B ", 120)
})
input.onButtonPressed(Button.B, function () {
    basic.showLeds(`
        # # . # #
        # # # # #
        # # # # #
        . # # # .
        . . # . .
        `)
})
input.onGesture(Gesture.Shake, function () {
    music.playMelody("C E - D A E - - ", 218)
})
input.onGesture(Gesture.TiltRight, function () {
    for (let index = 0; index < 1; index++) {
        basic.showString("Jaelyn")
    }
})
input.onGesture(Gesture.LogoDown, function () {
    basic.showString("Hi! I'm Jaelyn,I love horses!!!")
})
input.onSound(DetectedSound.Quiet, function () {
    basic.showLeds(`
        . # . # .
        . . . . .
        # . # . #
        # . . . #
        . # # # .
        `)
})
music.playMelody("B A G A G F A C5 ", 96)
basic.showString("Hi!")
