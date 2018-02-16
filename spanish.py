def conjugate(verb):
    suffix = [ 
                "ar", [ "o", "as", "a", "amos", "ais", "an" ], 
                "er", [ "o", "es", "e", "emos", "eis", "en" ], 
                "ir", [ "o", "es", "e", "imos", "is", "en" ]
             ]
    s_set = list()
    
    for s in suffix[suffix.index(verb[len(verb)-2:]) +1] :
        s_set.append(verb[:len(verb)-2] + s)
    
    return {verb : s_set}

print(conjugate("caminar"))