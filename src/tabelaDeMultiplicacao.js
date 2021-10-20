function multiplyTabble(maxValue) {
    
    let myArray2d = []

    for (let counterA = 0; counterA <= maxValue; counterA++) {

        myArray2d.push(counterA)

        myArray2d[counterA] = []

        for (let counterB = 0; counterB <= maxValue; counterB++) {

            myArray2d[counterA].push(counterA * counterB)

        }
            
    }

    console.table(myArray2d)
        
}