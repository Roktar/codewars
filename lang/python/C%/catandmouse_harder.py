def cat_mouse(x,j):
    map = toArray(x)
    cat, mouse, dog = getInitialIndex(map)
    return ifCatch(map, j, cat, mouse, dog)

def toArray(strMap) :
    map = list()

    for i in range(len(strMap)) :
        map.append(strMap[i])
    return map

def getInitialIndex(map) :
    actor = [-1, -1, -1, -1]

    for i, ch in enumerate(map) :
        actor[switch(ch)] = i
    return actor[1], actor[2], actor[3]

def switch(ch) :
    return {
        'C' : 1,
        'm' : 2,
        'D' : 3
    }.get(ch, 0)

def ifCatch(map, moves, cat, mouse, dog) :
    if cat == -1 or mouse == -1 or dog == -1 :
        return "boring without all three"

    maxVal, minVal = (cat, mouse) if cat >= mouse else (mouse, cat)

    if (maxVal-minVal) <= moves :
        direction = 1 if cat < mouse else -1

        while moves > 0 :
            cat += direction
            if cat == mouse :
                return "Caught!"
            if map[(cat+direction)] == 'D' :
                return "Protected!"
            moves -= 1
    return "Escaped!"

print(cat_mouse('.Dm............C...' , 21))