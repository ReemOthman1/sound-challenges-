#while True:
    #print("sound_level:"+ input.sound_level())
    #if input.sound_level() > 150:
        #light.show_animation(light.rainbowAnimation, 500)
    #else:
        #light.clear()

while True:
    print("light level:"+ input.light_level())
    if input.light_level() > 15:
        music.pew_pew.play()
    else:
        music.stop_all_sounds()

