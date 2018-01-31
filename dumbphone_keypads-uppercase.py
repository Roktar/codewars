def sequence(phrase):
    seq = list()
    map = [
            [2, ['A', 'B', 'C']], 
            [3, ['D', 'E', 'F']],
            [4, ['G', 'H', 'I']],
            [5, ['J', 'K', 'L']],
            [6, ['M', 'N', 'O']],
            [7, ['P', 'Q', 'R', 'S']],
            [8, ['T', 'U', 'V']],
            [9, ['W', 'X', 'Y', 'Z']]
         ]

    for i in range(len(phrase)) :
        if 48 <= ord(phrase[i]) <= 57 or phrase[i] == '#' or phrase[i] == '*' :
            seq.append(phrase[i])
        elif phrase[i] == ' ' :
            seq.append('0')
        elif phrase[i-1] == phrase[i] :
            seq.append('p')
        else :
            idx = getIdx(map, phrase[i]) +2
            cnt = getCount(map, phrase[i], idx)
            if cnt == 0 : 
                cnt = 1
            for j in range(cnt) :
                seq.append(chr(48+idx))

    s = ""
    for i in range(len(seq)) :
        s += str(seq[i])
    return s
                

def getIdx(map, target) :
    idx = 0
    for i in range(len(map)) :
        for k in range(len(map[i][1])) :
            if target in map[i][1][k] :
                idx = i           
                break
    return idx 

def getCount(seq, target, idx) :
    cnt = 0
    for k in range(len(seq[idx-2][1])) :
        cnt += 1
        if seq[idx-2][1][k] == target :
            break
    return cnt