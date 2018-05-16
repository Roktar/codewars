def solve(n) :
    arr = [i+1 for i in range(n)]
    arr2 = list()

    while len(arr) >= 1 :
        arr2.append(arr[0])
        del arr[0]
        for j in range(1, n) :
            if arr2[-1] == 1 or (arr2[-1]*j)-j >= len(arr) :
                break
            else :
                del arr[(arr2[-1]*j)-j]
    sum = 0
    for i in arr2 :
        sum += int(i)
    return sum