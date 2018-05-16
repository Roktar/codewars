def encode(text, key):
    return generate_Cipher_or_Decipher(text, generate_Keylist(key), False)
    
def decode(text, key): 
    return generate_Cipher_or_Decipher(text, generate_Keylist(key), True)

def generate_Keylist(key) :
    keylist = list()
    for i in range(len(key)) : #중복 제거
        if key[i] not in keylist :
            keylist.append(key[i])
    for i in range(26) : #나머지 키 생성
        if chr(97+i) not in keylist :
            keylist.append(chr(97+i))
    return keylist

def generate_Cipher_or_Decipher(text, keylist, type) :
    txtlist = list()
    key_size = len(keylist)

    for s in text.split(' ') :
        sub = ""
        subidx = 0
        for i in range(len(s)) :
            if s[i] == '.' :
                subidx = i +1
            if 97 <= ord(s[i]) <= 122 or 65 <= ord(s[i]) <= 90 :
                if type : #복호화
                    sub += keylist[ (keylist.index(s[i]) - ((i-subidx) +1)) %key_size ] if s[i].islower() else chr(ord(keylist[ (keylist.index(chr(ord(s[i]) +32)) - ((i-subidx) +1)) %key_size ]) -32)
                else : #암호화
                    sub += keylist[ (keylist.index(s[i]) + ((i-subidx) +1)) %key_size ] if s[i].islower() else chr(ord(keylist[ (keylist.index(chr(ord(s[i]) +32)) + ((i-subidx) +1)) %key_size ]) -32)
            else :
                sub += s[i]
        txtlist.append(sub + ' ')

    return "".join(txtlist[:-1]) + txtlist.pop().split(' ')[0]

print(encode("This.tHis.thIs.thiS...","cipher"))
print(decode("ihrbfj","cipher"))
print(encode(decode("This is an example.", "secretkey"),"secretkey"))