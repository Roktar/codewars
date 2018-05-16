def scramble(s1, s2) :
    cnt = 0

    for i in range(len(s2)) :
        for j in range(len(s1)) :
            if s1[j] == s2[i] :
                cnt += 1
                break
    return True if cnt >= len(s2) else False
