while True:
    if input.sound_level() > 130:  
        light.rainbow_animation
        music.power_down.play_until_done()
    if input.temperature(TemperatureUnit.FAHRENHEIT) < 68:
        music.power_down.play_until_done()
    elif input.temperature(TemperatureUnit.FAHRENHEIT) > 72:   
        music.power_down.play_until_done()
    else:
        music.stop_all_sounds() 
        
        