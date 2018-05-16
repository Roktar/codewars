def decrypt(encrypted_text, n):
    if n < 1 :
        return encrypted_text

    while n > 0 :
        sz = len(encrypted_text)
        newText = list()
        base, x = (int(sz/2), 1 if sz%2 == 0 else 0 )
        sub = base
        
        for i in range(0, sz) :
            newText.append( encrypted_text[ (base%sz) ] )
            base -= sub
            if base < 0 :
                base += (sz + x)
        encrypted_text = "".join(newText)
        n -= 1
    return "".join(newText)

def encrypt(text, n):
    if n < 1 :
        return text

    while n > 0 :
        sz = len(text)
        newText = list()
        base = 1
        sub = 0
        for i in range(0, sz) :
            newText.append( text[ (base+sub)%(sz+1) ] )
            base += 2
            if (base%sz) == 0 :
                sub += 1
        text = "".join(newText)
        n -= 1
    return "".join(newText)

print(encrypt("This is a test!", 2))
print(encrypt("This kata is very interesting!", 1))
print(decrypt("hsi  etTi sats!", 1)) # len 15(odd)
print(decrypt("hskt svr neetn!Ti aai eyitrsig", 1)) #len 30(even)