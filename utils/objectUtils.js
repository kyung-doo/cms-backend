

exports.inArray = (ar, value) => {
    for(let i = 0; i < ar.length; i++) {
        if(ar[i] === value) {
            return true;
        }
    }
    return false;
}