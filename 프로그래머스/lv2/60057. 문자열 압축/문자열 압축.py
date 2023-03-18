def solution(s):
    answer = 0
    temp=""
    length=int(len(s)/2)
    max_num=len(s)
    if len(s) ==1:
        return len(s)
    for i in range(0,length):
        count=0
        answer_s=""
        temp=s[0:i+1]
        for j in range(i+1,len(s)+1,i+1):
            if temp == s[j:j+i+1]:
                count+=1
            else:
                if count==0:
                    answer_s+=temp
                else:
                    answer_s+=str(count+1)+temp
                    
                temp=s[j:j+i+1]
                count=0
            if(j+(i+1)*2 >len(s)):
                answer_s+=s[j+i+1:len(s)]
            
        if max_num > len(answer_s):
            max_num=len(answer_s)
        
        answer=max_num
    return answer