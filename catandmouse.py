def cat_mouse(map_, moves):
    map = toArray(map_ + " ")

    cStart, cEnd = getIndex(map, 'C')
    mStart, mEnd = getIndex(map, 'm')

    if cStart == -1 or mStart == -1 :
        return "boring without two animals"

    while moves > -1 :
        if cStart == mStart and cEnd == mEnd :
            return "Caught!"

        if cStart != mStart :
            cStart += 1 if cStart < mStart else -1
            moves -= 1
        if cEnd != mEnd :
            cEnd += 1 if cEnd < mEnd else -1
            moves -= 1

    return "Escaped!"
    
def toArray(data) :
    map = list()
    sub = list()

    for i in range(len(data)) :
        if data[i] == '.' or data[i] == 'C' or data[i] == 'm' :
            sub.append(data[i])
        else :
            map.append(sub)
            sub = list()
    return map

def getIndex(data, ch) :
    for i in range(len(data)) :
        for j in range(len(data[i])) :
            if data[i][j] == ch :
                return i, j
    return -1, -1
            
map_ = '''\
.C.......
.........
......m..'''

print(cat_mouse(map_, 5))