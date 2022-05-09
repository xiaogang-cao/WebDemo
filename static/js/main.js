function abs(x){
    if(typeof(x) !== 'number')
        throw 'not a number'

    if(x > 0){
        return x
    } else {
        return -x
    }
}

var arr = [1, 2, 3]