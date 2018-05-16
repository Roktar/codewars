def solve(s):
    sol = [0 for i in range(4)]
    
    for i in range(len(s)) :
        if 97 <= ord(s[i]) <= 122 :
            sol[1] += 1
        elif 65 <= ord(s[i]) <= 90 :
            sol[0] += 1
        elif 48 <= ord(s[i]) <= 57 :
            sol[2] += 1
        else :
            sol[3] += 1
            
    return sol