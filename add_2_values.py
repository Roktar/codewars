def make_new_list(lst):
    return [ lst[i] + lst[i+1] for i in range(len(lst) -1) ]
    
print(make_new_list([1, 1, 1, 1]))