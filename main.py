while True:
    print("sound_level:"+ input.sound_level())
    if input.sound_level() > 100:
        light.set_all(light.rgb(255, 255, 255))
    else:
        light.clear()
