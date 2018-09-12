def encrypt_this(text):
    ret_arr = list()
    
    for ch in text.split(" ") :
        if ch == "" :
            continue
        elif len(ch) < 2 :
            ret_arr.append( str(ord(ch)) )
        else :
            sublist = list();
            sublist.append( str(ord(ch[:1])) )
            if len(ch) >= 4 :
                for j in range(1, len(ch)) :
                    sublist.append( ch[j] )
                tmp = sublist[1]
                sublist[1] = sublist[len(sublist) -1]
                sublist[len(sublist) -1] = tmp
            else :
                for j in range(len(ch)-1, 0, -1) :
                    sublist.append(ch[j])
            ret_arr.append("".join(sublist))
    return " ".join(ret_arr)    