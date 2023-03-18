// 문제가 개편되었습니다. 이로 인해 함수 구성이나 테스트케이스가 변경되어, 과거의 코드는 동작하지 않을 수 있습니다.
// 새로운 함수 구성을 적용하려면 [코드 초기화] 버튼을 누르세요. 단, [코드 초기화] 버튼을 누르면 작성 중인 코드는 사라집니다.
class Solution {
    int answer=-1;
    
    public int expend(int temp,int N){
        return temp*10+N;
    }
    
    public void DP(int N,int number,int result, int count){
       
        int temp=N;
        if(count>8){
            return;
        }
        if(result==number){
            if(answer==-1 ||answer > count){
                answer=count;
            }
            return;
        }
        for(int i=0;i<8-count;i++){
            DP(N,number,result+temp, count+i+1);
            DP(N,number,result-temp, count+i+1);
            DP(N,number,result*temp, count+i+1);
            DP(N,number,result/temp, count+i+1);
            temp=expend(temp,N);
        }
    }
    
    public int solution(int N, int number) {
        DP(N,number,0,0);
        return answer;
    }
}