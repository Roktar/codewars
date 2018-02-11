def find_dups_miss(arr):
    ret = list()
    sub = list()

    for i in range(min(arr), max(arr)) :
        if i not in arr :
            ret.append(i)
        if arr.count(i) >= 2 :
            sub.append(arr[arr.index(i)])
    
    return [ret[0], sorted(set(sub))]

arr1 = find_dups_miss([24,25,34,40,38,26,33,29,50,31,33,56,35,36,53,49,57,27,37,40,48,44,32,35,45,52,43,47,26,51,55,28,41,42,46,51,25,30,44,54])
print(arr1)
