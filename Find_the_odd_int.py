def find_it(seq):
    use = [0] * len(seq)

    for i in range(len(seq)) :
        if seq[i] not in use :
            use[i] = [seq[i], 0]
        if seq[i]%2 == 1 :
            use = calc(use, seq[i])

    return getMax(use)

def calc(use, seq) :
    for i in range(len(use)) :
        if seq == use[i][0] :
            use[i][1] = (use[i][1] + 1) %2
            break
    return use    

def getMax(use) :
    max = 0
    for i in range(len(use)) : 
        if use[i][1] >= 1 :
            max = use[i][0]
    return max