def solve(n) :
    arr = [i+1 for i in range(n)]
    arr2 = list()

    while len(arr) >= 1 :
        arr2.append(arr[0])
        idx = arr2[-1]
        del arr[0]
        for j in range(1, n) :
            if len(arr) != 0 :
                if idx == 1 or (idx*j)-j >= len(arr) :
                    break
                else :
                    del arr[(idx*j)-j]
    sum = 0
    for i in arr2 :
        sum += int(i)
    return sum