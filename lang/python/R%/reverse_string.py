def solution(string):
      return "".join([ string[-i] for i in range(1, len(string)+1) ])