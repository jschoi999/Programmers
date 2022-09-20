package java;
import java.util.Arrays;

class Solution {
    public int[] solution(int[] array, int[][] commands) {
        int[] answer = {};
        answer = new int[commands.length];
        for(int i = 0; i < commands.length ; i++){
            
            
            int [] temp = new int[commands[i][1] - commands[i][0] + 1 ];
            int k = 0;
            
            for(int j = commands[i][0] ; j <= commands[i][1]; j++){
                
                temp[k] = array[j-1];
                k++;
            }  
            k = 0;
            Arrays.sort(temp);
            answer[i] = temp[commands[i][2]-1  ];
        }
        
        
        return answer;
    }
}
