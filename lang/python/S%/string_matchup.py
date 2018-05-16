def solve(a,b):
    c = list()
    
    for d in b :
        f = 0
        for e in a :
            if d == e :
                f += 1
        c.append(f)
    
    return c