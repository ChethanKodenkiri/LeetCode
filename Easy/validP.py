
def validPar(s):
    stack=[]
    map={
         ')':'(',
        ']':'[',
        '}':'{'
    }

    for par in s:
        if par in map:
            if stack and stack[-1]==map[par]:
                stack.pop()
            else:
                return False
            
        else:
            stack.append(par)
    return True if not stack else False


#print(validPar("()"))


def vaildParanthesis(s):
    stack=[]
    map={
        '(':')',
        '{':'}',
        '[':']'
    }

    for par in s:
        if par in map:
            stack.append(par)
            
        elif len(stack)==0 or par!=map[stack.pop()]:
            return False
        
    return len(stack)==0


print(vaildParanthesis('[]'))