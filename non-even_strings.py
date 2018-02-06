def solve(s):
    txt = list()
    dup = list()

    for i in range(len(s)) :
        if s.count(s[i]) >= 2 and s[i] not in dup :
            dup.append(s[i])

    for i in range(len(s)) :
        for j in range(i, len(s)) :
            if (int(s[i:j+1])%2) != 0 :
                txt.append(s[i:j+1])

    return len(list(set(txt))) + len(dup)


print(str(solve("13471")))