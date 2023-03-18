var answer = 0;
function solution(storey) {
    
    var str_sto = storey.toString()
    CalcFun(0,str_sto.length-1,str_sto,storey)
    
    return answer;
}

function CalcFun(hap,idx,str_sto,storey){
    var num_sto = Number(str_sto.substr(idx,1))
    if(idx ===-1){
        console.log(hap)
        answer = hap
        return hap
    }
    if(num_sto >= 5 && idx !=0){
        if(Number(str_sto.substr(idx-1,1))+1 >5){
            storey = storey +((10-num_sto)*Math.pow(10,(str_sto.length -idx-1)))
            console.log(idx)
            console.log(storey)
            CalcFun(hap+10-num_sto,idx-1,storey.toString(),storey)
        }else{
            if(num_sto >5){
                CalcFun(hap+11-num_sto,idx-1,str_sto,storey)
            }else{
                CalcFun(hap+num_sto,idx-1,str_sto,storey)    
            }
        }
    }else{
        if(num_sto >5){
                CalcFun(hap+11-num_sto,idx-1,str_sto,storey)
            }else{
                CalcFun(hap+num_sto,idx-1,str_sto,storey)    
            }
    }
}