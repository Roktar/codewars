def solve(s):
    size = len(s)
    m = int(size/2)
    rev = reversed(s)

    if rev == s :
        return "OK"
    else :
        left = ""
        right = ""

        for i in range(0, m) :
            left += s[i]
            right += s[-i-1]

    if left != right :
        for i in range(m-1) :
            right = reversed(s[m+i:size-i])
            left = make(s, right)
            if left == right :
                return "not possible"
    return "remove one"

def reversed(data) :
    s = ""
    for i in range(1, len(data)+1) : 
        s += data[-i]
    return s

def make(data, target) :
    s = ""
    size = len(target)
    for i in range(len(target)) :
        if data[i:size+i] == target :
            s = str(data[i:size+i])
            break
    return s