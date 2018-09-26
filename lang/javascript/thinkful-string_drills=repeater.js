function repeater(string, n){
    if(n === 0)
        return arguments[2];

    return repeater(string, n-1, !arguments[2] ? arguments[2] = string : arguments[2]+string);
}