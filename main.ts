// while True:
// print("sound_level:"+ input.sound_level())
// if input.sound_level() > 150:
// light.show_animation(light.rainbowAnimation, 500)
// else:
// light.clear()
while (true) {
    console.log("light level:" + input.lightLevel())
    if (input.lightLevel() > 15) {
        music.pewPew.play()
    } else {
        music.stopAllSounds()
    }
    
}
