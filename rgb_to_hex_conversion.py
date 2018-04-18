def rgb(r, g, b):
    return getHexData(r, g, b)
    
def getHexData(r, g, b) :
    return calculation(r) + calculation(g) + calculation(b)

def calculation(data) :
    if data > 254 :
        return "FF"
    if data < 1 :
        return "00"
    
    if data > 15 :
        return switch( int(data/16) ) + switch(data%16)
    else :
        return '0' + switch(data%16)
    
def switch(data) :
    return {
            0 : '0',
            1 : '1',
            2 : '2',
            3 : '3',
            4 : '4',
            5 : '5',
            6 : '6',
            7 : '7',
            8 : '8',
            9 : '9',
            10 : 'A',
            11 : 'B',
            12 : 'C',
            13 : 'D',
            14 : 'E',
            15 : 'F'
            }.get(data, '-1')

print(rgb(254,253,222))