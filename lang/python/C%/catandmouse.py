def cat_mouse(map_, moves):
    map = toArray(map_ + " ")

    cx, cy = getIndex(map, 'C')
    mx, my = getIndex(map, 'm')

    if cx == -1 or mx == -1 :
        return "boring without two animals"

    while moves > 0 :
        if cx == mx and cy == my :
            return "Caught!"

        if cx != mx :
            cx, moves = calculateCatLocation(cx, mx, moves)
        if cy != my :
            cy, moves = calculateCatLocation(cy, my, moves)

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
        for j, c in enumerate(data[i]) :
            if c == ch :
                return i, j
    return -1, -1

def calculateCatLocation(cat, mouse, moves) :
    if moves < 1 :
        return (cat, moves)
    return (cat+1, moves-1) if cat < mouse else (cat-1, moves-1)

map_ = '''\
.C.......
.........
......m..'''

print(cat_mouse(map_, 5))