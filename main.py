while True:
    if input.light_level() > 15:
        music.pew_pew.play()
    else:
        music.stop_all_sounds()

