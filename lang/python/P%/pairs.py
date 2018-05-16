def pairs(ar):
    return len( [ 'p' for i in range(1, len(ar)) if (i%2) == 1 and -1 <= (ar[i -1] - ar[i]) <= 1 ] )