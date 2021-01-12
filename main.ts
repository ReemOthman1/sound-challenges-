while (true) {
    console.log("sound_level:" + input.soundLevel())
    if (input.soundLevel() > 200) {
        light.setAll(light.rgb(255, 255, 255))
    } else {
        light.clear()
    }
    
}
