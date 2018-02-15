def toCsvText(array) :
    s = ""

    for i in range(len(array)) :
        for j in range(len(array[i])) :
            s += str(array[i][j])
            if j != len(array[i])-1 :
                s += ','
            else :
                s += '\n'

    return s[0:len(s)-1]

print(toCsvText([
            [ 0, 1, 2, 3, 45 ],
            [ 10,11,12,13,14 ],
            [ 20,21,22,23,24 ],
            [ 30,31,32,33,34 ]
            ]))
