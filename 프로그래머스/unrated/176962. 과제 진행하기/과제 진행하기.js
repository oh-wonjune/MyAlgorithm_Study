function solution(plans) {
    var answer = [];
    let timer = []
    
    plans =plans.sort((a,b)=> a[1].replace(":","") - b[1].replace(":",""))
    
    for(let i=0; i<plans.length;i++){
        let temp = plans[i][1].split(":")
        plans[i][1] = Number(temp[0]) *60 +Number(temp[1])
        plans[i][2] = Number(plans[i][2])
    }
    
    logic(plans,timer,answer)
    
    return answer;
}

function logic(plans, timer,answer){
    for(let i=0;i<plans.length-1;i++){
        if(plans[i][1] +plans[i][2] == plans[i+1][1]){
            answer.push(plans[i][0])
            if(i === plans.length-2){
                answer.push(plans[i+1][0])
            }
        }else if(plans[i][1] +plans[i][2] <plans[i+1][1]){
            let cha  = plans[i+1][1] - (plans[i][1] +plans[i][2])
            
            answer.push(plans[i][0])
            if(timer.length>0){
                let idx =0
                for(let i=timer.length-1;i>=0;i--){
                    if(cha - timer[i][2]>=0){
                        answer.push(timer[i][0])
                        cha -= timer[i][2]
                    }else{
                        timer[i][2] = timer[i][2] - cha
                        idx =i+1
                        break;
                    }
                }
                timer= timer.slice(0,idx)
            }
            if(i === plans.length-2){
                answer.push(plans[i+1][0])
            }
        }else{
            plans[i][2] = (plans[i][1] +plans[i][2]) - plans[i+1][1]
            timer.push(plans[i])
            if(i === plans.length-2){
                answer.push(plans[i+1][0])
            }
        }
    }
    
    if(timer.length>0){
        for(let i= timer.length-1; i>=0;i--){
            answer.push(timer[i][0])    
        }    
    }
}
