// Drum Arrays
let kicks = [false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false]
let snares = [false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false]
let hiHats = [false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false]
let rideCymbals = [false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false]

function toggleDrum(string, index){
    // toggle the value at the index of the array that corresponds to the string
    if (index < 0 || index > 16){
        return
    }
    
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
    if (!array){
        return
    }

    if(array === 'kicks'){
        for (let i = 0; i < kicks.length; i++){
            kicks[i] = false
        }
    }else if (array === 'snares'){
        for (let i = 0; i < snares.length; i++){
            snares[i] = false
        }
    }else if (array === 'hiHats'){
        for (let i = 0; i < hiHats.length; i++){
            hiHats[i] = false
        }
    }else if (array === 'rideCymbals'){
        for (let i = 0; i < rideCymbals.length; i++){
            rideCymbals[i] = false
        }
    }
}

function invert(array){
    if (!array){
        return
    }

    if (array === 'kicks'){
        for (let i = 0; i < kicks.length; i++){
            kicks[i] = !kicks[i]
        }
    }else if (array === 'snares'){
        for (let i = 0; i < snares.length; i++){
            snares[i] = !snares[i] 
        }
    }else if (array === 'hiHats'){
        for (let i = 0; i < hiHats.length; i++){
            hiHats[i] = !hiHats[i]
        }
    }else if (array === 'rideCymbals'){
        for (let i = 0; i < rideCymbals.length; i++){
            rideCymbals[i] = !rideCymbals[i]
        }
    }
}

function presetHandler(string, index, newPresetArray){
    // should return an array, the array willl have one or teo elements depending on how it will be called, if wrong calling it will send a 404. if index is valid it should return a 200 with the new array, if index is invalid it should return a 404
}