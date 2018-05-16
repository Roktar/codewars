def check_three_and_two(array):
    # freq = [0] * 26
    
    # for i in range(len(array)) :
    #     freq[ ord(array[i]) - 97 ] += 1
    
    # max, min = (0, 0)
    
    # for i in range(len(array)) :
    #     if freq[ ord(array[i]) - 97 ] == 3 :
    #         max = 3
    #     elif freq[ ord(array[i]) - 97 ] == 2 :
    #         min = 2
            
    max, min = (False, False)
    
    for n in array :
        if array.count(n) == 3 :
            max = True
        elif array.count(n) == 2 :
            min = True
        
    return True if max and min else False

print(check_three_and_two(["a", "a", "a", "b", "b"]))
print(ord('A'))
print(ord('z'))
print(ord('Z'))
print(ord("'"))
print(chr(39))