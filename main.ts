while (true) {
    console.log("light level:" + input.lightLevel())
    if (input.lightLevel() < 15) {
        music.pewPew.play()
    } else {
        music.stopAllSounds()
    }
    
}
