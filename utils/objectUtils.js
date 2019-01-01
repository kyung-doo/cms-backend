
exports.clone = ( obj ) => {
    if (obj === null || typeof(obj) !== 'object') return obj;
    var copy = obj.constructor();
    for (var attr in obj) {
        if (obj.hasOwnProperty(attr)) {
            copy[attr] = obj[attr];
        }
    }
    return copy;
}

exports.inArray = (ar, value) => {
    for(let i = 0; i < ar.length; i++) {
        if(ar[i] == value) {
            return true;
        }
    }
    return false;
}

exports.inArrayEquals = (ar, value) => {
    for(let i = 0; i < ar.length; i++) {
        if(value.equals(ar[i])) {
            return true;
        }
    }
    return false;
}