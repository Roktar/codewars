def reverse_and_mirror(s1, s2):
    reversed_s1 = reverseStringAndCase(s1)
    reversed_s2 = reverseStringAndCase(s2)

    return reversed_s2 + "@@@" + reversed_s1 + reverseString(reversed_s1)

def reverseStringAndCase(data) :
    newData = list()
    for i in range(1, len(data)+1) :
        if 97 <= ord(data[-i]) <= 122 :
            newData.append(chr(ord(data[-i]) - 32))
        elif 65 <= ord(data[-i]) <= 90 :
            newData.append(chr(ord(data[-i]) + 32))
        else :
            newData.append(data[-i])
    return "".join(newData)

def reverseString(data) :
    newData = list()
    for i in range(1, len(data)+1) :
        newData.append(data[-i])
    return "".join(newData)

print(reverse_and_mirror('FizZ', 'buZZ'))
