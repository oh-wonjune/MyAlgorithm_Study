var answer =0
function solution(cards) {
    calcFunc(cards,1,0,0,0)
    return answer;
}

function calcFunc(cards, idx, time, max1,max2 ){
    if(cards[idx-1] === 0){
        if(time>max1){
            max2 = max1
            max1 = time
        }else if(time>max2){
            max2 = time
        }
        
        if(cards.filter(zerroDel).length ==0){
            answer = max1 * max2
            return 
        }else{
            var num_idx = cards.indexOf(cards.filter(zerroDel)[0])+1
            return calcFunc(cards, num_idx, 0,max1,max2)            
        }
    }else{
        num1 = cards[idx-1]
        cards[idx-1] =0
        return calcFunc(cards, num1, time+1,max1,max2)    
    }
}

function zerroDel(card) {
  return card !== 0;
}