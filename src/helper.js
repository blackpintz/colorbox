const colorPick = (arr, item) => {
    arr.forEach((r) =>{
        if(r !== item) {
            arr.push(item)
        }
    })
    return arr
}

const picker = (arr) => {
    const newColor = arr[Math.floor(Math.random() * arr.length)]
    return newColor
    }
    
let shuffleArray = (arr) => {
let newIndex,
    temp
    for(let i = arr.length - 1; i > 0; i--) {
        newIndex = Math.floor(Math.random() * (i + 1));
        temp     = arr[i];
        arr[i]   = arr[newIndex] ;
        arr[newIndex] = temp
    }
    return arr;
    }    

export {colorPick, picker, shuffleArray}