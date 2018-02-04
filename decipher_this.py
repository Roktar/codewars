def decipher_this(string):
    text = list()

    for s in string.split(' ') :
        for i in range(len(s)) :
            if 48 <= ord(s[i]) <= 57 :
                if i == len(s) -1 :
                    text.append(chr(int(s)) + ' ')
            else :
                sub = [s2 for s2 in s[i:]]
                tmp = ""
                num = s[:i]

                if len(sub) >= 4 :
                    tmp = sub[0]
                    sub[0] = sub[len(sub) -1]
                    sub[len(sub) -1] = tmp
                    tmp = "".join(sub)
                else :
                    for i in range(len(sub)) :
                        tmp += sub[-i-1]

                text.append(chr(int(num)) + tmp + ' ')
                break
    text.append(text.pop().split(' ')[0])

    return "".join(text)

d = decipher_this("65 119esi 111dl 111lw 108dvei 105n 97n 111ka")
print(d)