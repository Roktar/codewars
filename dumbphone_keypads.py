def sequence(phrase):
    seq = list()
    map = [
            [2, [['A', 'a'], ['B', 'b'], ['C', 'c']]], 
            [3, [['D', 'd'], ['E', 'e'], ['F','f']]],
            [4, [['G', 'g'], ['H', 'h'], ['I', 'i']]],
            [5, [['J', 'j'], ['K', 'k'], ['L', 'l']]],
            [6, [['M', 'm'], ['N', 'n'], ['O', 'o']]],
            [7, [['P', 'p'], ['Q', 'q'], ['R', 'r'], ['S', 's']]],
            [8, [['T', 't'], ['U', 'u'], ['V', 'v']]],
            [9, [['W', 'w'], ['X', 'x'], ['Y', 'y'], ['Z', 'z']]]
         ]

    for i in range(len(phrase)) :
        isLower = True if ord(phrase[i]) >= 97 else False

        if 48 <= ord(phrase[i]) <= 57 or phrase[i] == '#' or phrase[i] == '*' :
            seq.append(phrase[i])
        elif phrase[i] == ' ' :
            seq.append('0')
        elif phrase[i-1] == phrase[i] :
            seq.append('p')
        else :
            idx = getIdx(map, phrase[i]) +2
            cnt = getCount(map, phrase[i], idx, isLower)

            for j in range(cnt) :
                seq.append(chr(48+idx))

    s = ""
    for i in range(len(seq)) :
        s += str(seq[i])
    return s

def getIdx(map, target) :
    idx = 0
    for i in range(len(map)) :
        for j in range(len(map[i][1])) :
            if target in map[i][1][j] :
                idx = i           
                break
    return idx 

def getCount(seq, target, idx, lower) :
    cnt = 0
    l_idx = 1 if lower else 0
    for k in range(len(seq[idx-2][1])) :
        cnt += 1
        if ord(seq[idx-2][1][k][l_idx]) == ord(target) :
            break
    return 1 if cnt == 0 else cnt