def hit(table, i, j):
    row_idx = len(table)
    col_idx = len(table[0])

    if (i >= row_idx or i < 0 ) or (j >= col_idx or j < 0):
        return table
        
    now_value = table[i][j]
    table[i][j] = 'B'

    if now_value == 'E': 
        hit(table, i-1, j)
        hit(table, i, j-1)
        hit(table, i+1, j)
        hit(table, i, j+1)
    else:
        table[i][j] = 'B'

    return table