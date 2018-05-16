def decipher(key,message) :
    m = int(len(message) / 2)
    return "".join ([ chr((ord(message[i]) -key % 26)) if ord(message[i]) > 4 else chr(122-(key-ord(message[i])))  for i in range(m) ] 
                    + [ chr((ord(message[i]) +key % 26)) if ord(message[i]) > 4 else chr(122-(key-ord(message[i])))  for i in range(m, len(message)) ])

print(decipher(1,"bcdefghiabcdefgh"))
print(decipher(10,"<rs*sWj[ij("))
