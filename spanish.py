def conjugate(verb):
    suffix = [ 
                "ar", [ "o", "as", "a", "amos", "ais", "an" ], 
                "er", [ "o", "es", "e", "emos", "eis", "en" ], 
                "ir", [ "o", "es", "e", "imos", "is", "en" ]
             ]
    
    return {verb : [ verb[:len(verb) -2] + s for s in suffix[suffix.index(verb[len(verb)-2:]) +1] ]}

print(conjugate("caminar"))