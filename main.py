while True:
    print("light level:"+ input.light_level())
    if input.light_level() < 15:
        music.pew_pew.play()
    else:
        music.stop_all_sounds()

