while True:
    if input.sound_level() > 130:  
        light.show_animation(light.rainbowAnimation, 500)
        music.play_melody("C C G G A A G F F E E D D C G G F F E E D G G F F E E D C C G G A A G F F E E D D C ", 150)
    elif input.temperature(TemperatureUnit.FAHRENHEIT) < 68:
        music.power_down.play_until_done()
    if input.temperature(TemperatureUnit.FAHRENHEIT) > 72:   
        music.power_down.play_until_done()
    else:
        music.stop_all_sounds() and light.stop_all_animations() 
        
        