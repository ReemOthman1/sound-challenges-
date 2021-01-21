while (true) {
    if (input.soundLevel() > 130) {
        light.showAnimation(light.rainbowAnimation, 500)
        music.powerDown.playUntilDone()
    } else {
        light.stopAllAnimations()
    }
    
    if (input.temperature(TemperatureUnit.Fahrenheit) < 68) {
        music.powerDown.playUntilDone()
    } else if (input.temperature(TemperatureUnit.Fahrenheit) > 72) {
        music.powerDown.playUntilDone()
    } else {
        music.stopAllSounds()
    }
    
}
