function solution(sequence, k) {
    var answer = [];
    let start = 0
    let end = 0
    let min_length=9999999999
    let temp=sequence[0]
    let except = sequence.indexOf(k)
    if(except >=0){
        answer.push(except)
        answer.push(except)
        return answer
    }
    
    while(end <=sequence.length){
        if(temp ===k){
            if(end-start < min_length){
                answer=[]
                answer.push(start)
                answer.push(end)
                min_length =end-start
                temp -= sequence[start]
                start++
                end++
                temp += sequence[end]
            }else{
                temp -= sequence[start]
                start++
                if(start == end ){
                    end++
                    temp += sequence[end]
                }
            }
        }else if(temp >k){
            temp -= sequence[start]
            start++
            if(start == end ){
                end++
                temp += sequence[end]
            }
        }else{
            end++
            temp += sequence[end]
        }
    }
    
    return answer;
}