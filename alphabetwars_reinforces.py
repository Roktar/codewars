def alphabet_war(reinforces, airstrikes):
    return attack(toArray(reinforces), toArray(airstrikes))

def toArray(data) :
    newData = list()

    for i in range(len(data)) :
        subData = list()
        for j in range(len(data[i])) :
              subData.append(data[i][j])
        newData.append(subData)
    return newData

def getRowData(fields, row) :
    for i in range(len(fields)) :
        if fields[i][row] != '' :
            tmp = fields[i][row]
            fields[i][row] = ''
            return tmp
    return '_'

def attack(fields, strikes) :
    maxCount = len(fields) if len(fields) >= len(strikes) else len(strikes)
    bLen = len(fields[0])

    for i in range(maxCount) : 
        if i >= len(strikes) :
            break

        for j in range(len(strikes[i])) :
            if strikes[i][j] == '*' :
                fields[0][j] = ''
                if (j-1) > -1 :
                    fields[0][j-1] = ''
                if (j+1) < bLen :
                    fields[0][j+1] = ''

        for j in range(len(strikes[i])) :
            if fields[0][j] == '' :
                fields[0][j] = getRowData(fields, j)
            if (j-1) > -1 and fields[0][j-1] == '' :
                fields[0][j-1] = getRowData(fields, j-1)
            if (j+1) < bLen and fields[0][j+1] == '' :
                fields[0][j+1] = getRowData(fields, j+1)
    
    returnText = ""

    for j in range(len(fields[0])) :
        rowIdx = -1
        for i in range(len(fields)) :
            if fields[i][j] != '' :
                rowIdx = i
                break
        returnText += fields[rowIdx][j]

    return returnText

reinforces=["g964xxxxxxxx",
            "myjinxin2015",
            "steffenvogel",
            "smile67xxxxx",
            "giacomosorbi",
            "freywarxxxxx",
            "bkaesxxxxxxx",
            "vadimbxxxxxx",
            "zozofouchtra",
            "colbydauphxx" ]
airstrikes=["* *** ** ***",
            " ** * * * **",
            " * *** * ***",
            " **  * * ** ",
            "* ** *   ***",
            "***   ",
            "**",
            "*",
            "*" ]

x = ['ptnbui', 
     'blrepb'] 
y = ['** * ', 
     ' ', 
     '*     ', 
     '*    ']

print(alphabet_war(reinforces, airstrikes))
print(alphabet_war(x, y))
