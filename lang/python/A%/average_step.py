def average_step(arr, n):
    s = 0
    idx = 0

    while True :
        if len(arr) <= (n*idx) :
            break
        
        s += arr[n*idx]
        idx += 1
    
    return int(s/idx)


s = average_step([0, 1, 2, 3, 4, 5, 6], 2)
print(s)