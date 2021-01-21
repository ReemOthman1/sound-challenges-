while (true) {
    if (input.soundLevel() > 130) {
        light.setPixelColor(0, light.rgb(255, 255, 255))
        light.setPixelColor(1, light.rgb(255, 255, 255))
        light.setPixelColor(2, light.rgb(255, 255, 255))
        light.setPixelColor(3, light.rgb(255, 255, 255))
        light.setPixelColor(4, light.rgb(255, 255, 255))
        light.setPixelColor(5, light.rgb(255, 255, 255))
        light.setPixelColor(6, light.rgb(255, 255, 255))
        light.setPixelColor(7, light.rgb(255, 255, 255))
        light.setPixelColor(8, light.rgb(255, 255, 255))
    }
    
    if (input.temperature(TemperatureUnit.Fahrenheit) < 68) {
        music.powerDown.play()
    }
    
    if (input.temperature(TemperatureUnit.Fahrenheit) < 72) {
        music.powerDown.play()
    }
    
}
