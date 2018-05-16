def high(x):
    scores = list()

    for s in x.split(' ') :
        score = 0
        if len(s) > 1 :
            for j in range(len(s)) :
                score += ord(s[j]) - 97
        else :
            score += ord(s) - 97
        scores.append(score)
        
    return [x.split(' ')][0][scores.index(max(scores))]
                
a = high('man i need a taxi up to ubud')
print(a)