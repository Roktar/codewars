def alphabetic(s):  # s is a lowercase string
    prev = 0
    
    if s != '' :
        for i in s :
            if prev <= ord(i) :
                prev = ord(i)
            else :
                return False
    return True