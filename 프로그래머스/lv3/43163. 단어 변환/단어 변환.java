class Solution {
    int answer=-1;
    int log[];
    public boolean check(String x,String y){
        int temp=0;
        for(int i=0;i<x.length();i++){
            if(x.charAt(i) != y.charAt(i)){
                temp++;
            }
            if(temp>1) return false;
        }
        if(temp==1) return true;
        
        return false;
    }
    
    public int word_change(String begin, String target, String[] words,int count){
        for(int i=0;i<words.length;i++){
            if(log[i]==1){
                continue;
            }
            if(check(words[i],begin)){
               // System.out.print(words[i]+" ");
                if(words[i].equals(target)){
                    
                    if(answer==-1||answer>count){
                        answer=count;
                        return answer;
                    }
                }
                log[i]=1;
                word_change(words[i],target,words,count+1);
            }
        }
        return answer;
    }
    
    public int solution(String begin, String target, String[] words) {
        int answer = 0,check=0;
        log=new int[words.length];
        for(int i=0;i<words.length;i++){
            if(words[i].equals(target)){
                check++;
                break;
            }
        }
        if(check==0){
            return 0;
        }

        answer=word_change(begin, target, words,0);
        
        return answer+1;
    }
}