def calculate(s) :
    exp = list()
    sub = ""
    
    for i in s : #숫자 및 연산자 추출
        if ord(i) >= 48 and ord(i) <= 57 :
            sub+=i
        else :
            if sub != '':
                exp.append(sub)
            sub=""
            exp.append(i)
    exp.append(sub)

    while ' ' in exp : # 입력에 포함되어있던 공백 제거
        exp.remove(' ')

    return operations(exp)

def operations(exp) :
    optype = True if '*' in exp or '/' in exp else False

    if optype : # *, /연산이 있을 경우에만 진행
        for i in range(len(exp) -1) :
            if '*' in exp or '/' in exp :
                if exp[i] == '*' :
                    exp[i -1] = float(exp[i -1]) * float(exp[i +1])
                    del exp[i:i+2]
                elif exp[i] == '/' :
                    exp[i -1] = float(exp[i -1]) / float(exp[i +1])
                    del exp[i:i+2]

    for i in range(len(exp) -1) : # +, - 연산
        if '+' in exp or '-' in exp :
            if exp[i] == '+' :
                exp[i -1] = float(exp[i -1]) + float(exp[i +1])
                del exp[i:i+2]
            elif exp[i] == '-' :
                exp[i -1] = float(exp[i -1]) - float(exp[i +1])
                del exp[i:i+2]
    return exp[0]

s = calculate("9 /3 + 12/ 6")
print(s)