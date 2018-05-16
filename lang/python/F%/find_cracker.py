def find_hack(arr):
    hackedList = list()

    for i in range(len(arr)) :
        prevScore = arr[i][1]
        sumScore = 0
        
        if prevScore > 200 :
            hackedList.append(arr[i][0])
            continue
                
        if gradeCheck(arr[i][2]) :
            sumScore += 20

        for j in range(len(arr[i][2])) :
            sumScore += convertScore(arr[i][2][j])
            if sumScore > 200 :
                sumScore = 200
                break
        
        if prevScore != sumScore :
            hackedList.append(arr[i][0])
            
    return hackedList

def gradeCheck(gradeList) :
    if( len(gradeList) < 5 ) : 
        return False

    for i in range(len(gradeList)) :
        if gradeList[i] != 'A' and gradeList[i] != 'B' :
            return False
    return True
    
def convertScore(score) :
    return switch(score)
    
def switch(ch) :
    return {
        'A' : 30,
        'B' : 20,
        'C' : 10,
        'D' : 5
    }.get(ch, 0) 
# 마지막의 (ch, 0)은 ch가 없는 경우 디폴트값은 0이다.

array = [
    ["name1", 150, ["B", "A", "A", "C", "A", "A"]],
    ["name2", 120, ["B", "A", "A", "A"]],
    ["name3", 160, ["B", "A", "A", "A","A"]],
    ["name4", 140, ["B", "A", "A", "C", "A"]]
]


print(find_hack(array))