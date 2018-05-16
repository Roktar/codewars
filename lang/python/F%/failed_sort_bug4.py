def sort_array(value):
    return "".join(sorted(value,key=lambda a: -int(a), reverse=True))

print(sort_array('54321'))