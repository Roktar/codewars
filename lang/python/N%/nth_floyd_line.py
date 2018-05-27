def nth_floyd(n):
    if n == 0 :
        return 0
    elif n == 1 :
        return 1
    else :
        val = 2
        inc = 2

        while val <= n :
            val += inc
            inc += 1
        
        if val > n :
            return inc-1
        else :
            return inc

print( nth_floyd(15) )