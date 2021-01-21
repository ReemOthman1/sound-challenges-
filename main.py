while True:
    if input.sound_level() > 130:  
        light.set_pixel_color(0,light.rgb(255,255,255,))
        light.set_pixel_color(1,light.rgb(255,255,255,))
        light.set_pixel_color(2,light.rgb(255,255,255,))
        light.set_pixel_color(3,light.rgb(255,255,255,))      
        light.set_pixel_color(4,light.rgb(255,255,255,))
        light.set_pixel_color(5,light.rgb(255,255,255,))
        light.set_pixel_color(6,light.rgb(255,255,255,))
        light.set_pixel_color(7,light.rgb(255,255,255,))
        light.set_pixel_color(8,light.rgb(255,255,255,))
    if input.temperature(TemperatureUnit.FAHRENHEIT) < 68:
        music.power_down.play() 
    if input.temperature(TemperatureUnit.FAHRENHEIT) < 72:   
        music.power_down.play()