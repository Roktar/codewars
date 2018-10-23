Array.prototype.transpose = function() {
    if(this.length < 1)
        return [];
    else if(this[0].length < 1)
        return [[]];

    let new_arr = [];
    for(let i=0; i<this[0].length; i++) {
        let sub_arr = [];
        for(let j=0; j<this.length; j++)
            sub_arr.push(this[j][i]);
        new_arr.push(sub_arr);
    }
    return new_arr;
};