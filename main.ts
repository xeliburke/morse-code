input.onPinPressed(TouchPin.P0, function () {
    if (RadioGroup < 21) {
        RadioGroup = 24
    } else {
        RadioGroup += -1
    }
    radio.setGroup(RadioGroup)
    basic.showString("" + (RadioGroup))
})
radio.onReceivedNumber(function (receivedNumber) {
    if (receivedNumber == 0) {
        music.play(music.createSoundExpression(
        WaveShape.Square,
        500,
        500,
        255,
        255,
        60,
        SoundExpressionEffect.None,
        InterpolationCurve.Linear
        ), music.PlaybackMode.InBackground)
        led.plot(2, 2)
        basic.pause(60)
        led.unplot(2, 2)
    } else if (receivedNumber == 1) {
        music.play(music.createSoundExpression(
        WaveShape.Square,
        500,
        500,
        255,
        255,
        180,
        SoundExpressionEffect.None,
        InterpolationCurve.Linear
        ), music.PlaybackMode.InBackground)
        led.plot(1, 2)
        led.plot(2, 2)
        led.plot(3, 2)
        basic.pause(180)
        led.unplot(1, 2)
        led.unplot(2, 2)
        led.unplot(3, 2)
    } else {
        basic.showString("ERROR")
    }
})
input.onButtonPressed(Button.A, function () {
    music.play(music.createSoundExpression(
    WaveShape.Square,
    500,
    500,
    255,
    255,
    60,
    SoundExpressionEffect.None,
    InterpolationCurve.Linear
    ), music.PlaybackMode.InBackground)
    radio.sendNumber(Dot)
})
input.onButtonPressed(Button.B, function () {
    music.play(music.createSoundExpression(
    WaveShape.Square,
    500,
    500,
    255,
    255,
    180,
    SoundExpressionEffect.None,
    InterpolationCurve.Linear
    ), music.PlaybackMode.InBackground)
    radio.sendNumber(Dash)
})
let RadioGroup = 0
let Dash = 0
let Dot = 0
music.setVolume(255)
Dot = 0
Dash = 1
RadioGroup = 24
radio.setGroup(RadioGroup)
radio.setTransmitPower(7)
radio.setFrequencyBand(80)
