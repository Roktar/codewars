def is_divisible(data, *divisor):
    cnt = 0
    
    for div in divisor :
        if (data%div) == 0 :
            cnt += 1
    
    return True if cnt == len(divisor) else False