def single_digit(n) :
    while n >= 10 :
        n = [a for a in bin(n).split('0b')[1]].count('1')

    return n

a = single_digit(5665)
print(a)