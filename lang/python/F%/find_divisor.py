def divisors(n):
    divList = list()
    for i in range(1, int(n/2)+1 ) :
        if (n%i) == 0 :
            divList.append(i)
    
    return len(divList) + 1