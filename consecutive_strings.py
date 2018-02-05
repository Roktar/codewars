def longest_consec(strarr, k):
    return '' if len(strarr) <= k or k==0 else sorted(["".join(strarr[i:i+k]) for i in range(len(strarr))], key=lambda x : len(x))[-1 if k >= 0 else 0]

a = longest_consec(["zone", "abigail", "theta", "form", "libe", "zas"], 2)
print(a)