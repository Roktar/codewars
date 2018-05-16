def decrypt(encrypted_text):
    dic = getDictionary()

    if encrypted_text == None or len(encrypted_text) < 1 :
        return encrypted_text
        
    if not search(encrypted_text, dic) :
        raise Exception

    textArray = [ s for s in encrypted_text ] 

    # step3
    textArray[0] = dic[ 76-getIndex(textArray[0], dic) ]

    # step2
    for i in range(1, len(textArray)) :
        textArray[i] = dic[ (( getIndex(textArray[i-1], dic) - getIndex(textArray[i], dic) ) - 77) % 77 ]

    # step1
    for i in range(1, len(textArray), 2) :
        if 65 <= ord(textArray[i]) <= 90 : #upper -> lower
            textArray[i] = chr(ord(textArray[i]) + 32)
        elif 97 <= ord(textArray[i]) <= 122 : #lower -> upper
            textArray[i] = chr(ord(textArray[i]) - 32)

    return "".join(textArray)

def encrypt(text):
    dic = getDictionary()

    if text == None or len(text) < 1 :
        return text
    
    if not search(text, dic) :
        raise Exception

    textArray = [ s for s in text ] 

    # step1
    for i in range(1, len(text), 2) :
        if 97 <= ord(text[i]) <= 122 : #lower -> upper
            textArray[i] = chr(ord(text[i]) - 32)
        elif 65 <= ord(text[i]) <= 90 : #upper -> lower
            textArray[i] = chr(ord(text[i]) + 32)
    text = "".join(textArray)

    # step2
    for i in range(1, len(textArray)) :
        textArray[i] = dic[ (( getIndex(text[i-1], dic) - getIndex(text[i], dic) ) +77) % 77 ]

    # step3
    textArray[0] = dic[ 76 - getIndex(textArray[0], dic) ]
    return  "".join(textArray) 

def search(text, dic) :
    for txt in text :
        if txt not in dic :
            return False
    return True

def getIndex(ch, dic) :
    for i in range(len(dic)) :
        if ch == dic[i] :
            return i
    return -1

def getDictionary() :
    dic = list()
    # generate Upper Alphabet
    for i in range(26) :
        dic.append( chr(65+i) )
    # generate Lower Alphabet
    for i in range(26) :
        dic.append( chr(97+i) )
    # generate digits
    for i in range(10) :
        dic.append( chr(48+i) )
    # add words    
    dic.append('.')
    dic.append(',')
    dic.append(':')
    dic.append(';')
    dic.append('-')
    dic.append('?')
    dic.append('!')
    dic.append(' ')
    dic.append("'")
    dic.append('(')
    dic.append(')')
    dic.append('$')
    dic.append('%')
    dic.append('&')
    dic.append('\"')

    return dic

print(encrypt("Do the kata \"Kobayashi-Maru-Test!\" Endless fun and excitement when finding a solution!"))
print(decrypt("$-Wy,dM79H'i'o$n0C&I.ZTcMJw5vPlZc Hn!krhlaa:khV mkL;gvtP-S7Rt1Vp2RV:wV9VuhO Iz3dqb.U0w"))