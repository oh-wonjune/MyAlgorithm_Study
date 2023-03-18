import java.util.*;
class Solution {
    public int solution(int [][] routes) {
        int answer = 0;
        int start=0,end=0,temp=0;
        
        Arrays.sort(routes, new Comparator<int[]>() {
        public int compare(int[] int1, int[] int2) {
        Integer numOfKeys1 = int1[0];
        Integer numOfKeys2 = int2[0];
        return numOfKeys1.compareTo(numOfKeys2);
    }
});
        start=routes[0][0];
        end=routes[0][1];
        
        for(int i=1;i<routes.length;i++){
            
            if(routes[i][0] <=end){
                start=routes[i][0];
                if(routes[i][1]<end){
                   end=routes[i][1];
                }
            }
            else{
                start=routes[i][0];
                end=routes[i][1];
                answer++;
            }
        }
        return answer+1;
    }
}