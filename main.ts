while (true) {
    if (input.soundLevel() > 130) {
        light.theaterChaseAnimation
        music.powerDown.playUntilDone()
    }
    
    if (input.temperature(TemperatureUnit.Fahrenheit) < 68) {
        music.powerDown.playUntilDone()
    } else if (input.temperature(TemperatureUnit.Fahrenheit) > 72) {
        music.powerDown.playUntilDone()
    } else {
        music.stopAllSounds()
    }
    
}
