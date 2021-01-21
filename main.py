while True:
    if input.sound_level() > 130:  
        light.show_animation(light.rainbowAnimation, 500)
        music.power_down.play_until_done()
    if input.temperature(TemperatureUnit.FAHRENHEIT) < 68:
        music.power_down.play_until_done()
    if input.temperature(TemperatureUnit.FAHRENHEIT) < 72:   
        music.power_down.play_until_done()