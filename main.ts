while (true) {
    if (input.soundLevel() > 130) {
        light.showAnimation(light.rainbowAnimation, 500)
        music.playMelody("C C G G A A G F F E E D D C G G F F E E D G G F F E E D C C G G A A G F F E E D D C ", 150)
    } else if (input.temperature(TemperatureUnit.Fahrenheit) < 68) {
        music.powerDown.playUntilDone()
    }
    
    if (input.temperature(TemperatureUnit.Fahrenheit) > 72) {
        music.powerDown.playUntilDone()
    } else {
        music.stopAllSounds() && light.stopAllAnimations()
    }
    
}
