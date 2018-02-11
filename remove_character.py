def remove_char(s):
    return "".join([s[i] for i in range(1, len(s)-1)])

x = remove_char('eloquent')
print(x)