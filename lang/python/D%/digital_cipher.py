def encode(message, key):
    keylist = [ int(n) for n in str(key) ]
    k_size = len(keylist)
    
    return [ ord(message[i]) - 96 + keylist[i % k_size] for i in range(len(message)) ]