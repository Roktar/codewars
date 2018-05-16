def string_clean(s):
    return "".join( [s2 for s2 in s if not(48<=ord(s2)<=57) ] )

print(string_clean("(E3at m2e2!!)"))