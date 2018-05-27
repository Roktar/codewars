def sentence(List):
    extractData = []

    for dic in List :
        data = list(dic.items())
        extractData.append( [int(data[0][0]), data[0][1]] )

    for i in range(len(extractData)) :
        for j in range( (len(extractData)-i)-1 ) :
            if extractData[j][0] > extractData[j+1][0] :
                tmp = extractData[j]
                extractData[j] = extractData[j+1]
                extractData[j+1] = tmp

    data = ""
    for i in range(len(extractData)) :
        data += "".join(extractData[i][1]) + " "

    return data[:-1]

List = [
        {'4': 'dog' }, {'2': 'took'}, {'3': 'his'}, 
        {'-2': 'Vatsan'}, {'5': 'for'}, {'6': 'a'}, {'12': 'spin'} 
       ]

print(sentence(List))