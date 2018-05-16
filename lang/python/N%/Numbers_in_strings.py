def solve(s) :
    arr = list()
    sub = ""
    
    for d in s :
        if ord(d) >= 48 and ord(d) <= 57 :
            sub += d
            continue
        arr.append(sub)
        sub = ""
    arr.append(sub)

    while True :
        if '' in arr :
            arr.remove('')
        else:
            break

    max = 0
    for no in arr :
        if int(no) > max :
            max = int(no)
    return max
