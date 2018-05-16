def columnarCipher(message, key):
    keylist = list()
    meslist = list()
    seq_num = list()
    size = len(key)

    for s in key : # 문자열을 리스트로 치환
        keylist.append(s.upper() if s.islower else s)
    for s in message :
        if ord(s) == 33 or ord(s) == 63 or ord(s) == 46 or ord(s) == 44:
            continue
        meslist.append(s.upper() if s.islower else s)
    
    while ' ' in meslist : #공백 제거
        meslist.remove(' ')

    for i in range(len(keylist)) : # 키 순서 추출
        seq_num.append(min(keylist))
        del keylist[keylist.index(min(keylist))]
    
    cipher = list()
    for i in range(size) : # 추출한 키순서를 활용하여 한자리씩 생성
        idx = key.upper().index(seq_num[i])
        for j in range(size) :
            if len(meslist) <= (idx+size*j) :
                break
            cipher.append(meslist[idx+size*j])
    return "".join(cipher)

print(columnarCipher('This is test 3!', 'Third'))