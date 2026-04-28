// Drum Arrays
let kicks = [false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false]
let snares = [false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false]
let hiHats = [false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false]
let rideCymbals = [false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false]

function toggleDrum(string, index){
    // toggle the value at the index of the array that corresponds to the string
    if (string === "kicks"){
        kicks[index] = !kicks[index]
    } else if (string === "snares"){
        snares[index] = !snares[index]
    } else if (string === "hiHats"){
        hiHats[index] = !hiHats[index]
    } else if (string === "rideCymbals"){
        rideCymbals[index] = !rideCymbals[index]
    }
}

function clear(array){
    // set all values to false
    return array.map(value => value = false)
}

function invert(array){
    // set all the boolean values to their opposite 
    return array.map(value => !value)
}


function presetHandler(string, index, newPresetArray){
    // should return an array, the array willl have one or teo elements depending on how it will be called, if wrong calling it will send a 404. if index is valid it should return a 200 with the new array, if index is invalid it should return a 404
}