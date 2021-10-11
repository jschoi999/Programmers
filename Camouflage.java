import java.util.*;

class Solution {
    public int solution(String[][] clothes) {
        int answer = 0;
        HashMap<String , Integer> hm = new HashMap<>();
        
        for(int i = 0 ; i < clothes.length; i++){
                hm.put(clothes[i][1], hm.getOrDefault(clothes[i][1],0) +1 );
     
        }
        
        Set set = hm.keySet();
        Iterator iterator = set.iterator();

        if(hm.size() == 1){
            answer = hm.get(iterator.next().toString());
        }else{
            answer = 1;
            while(iterator.hasNext()){
                String key = (String)iterator.next();
                answer = answer * (hm.get(key) + 1 );
            }
            answer = answer - 1 ;
        }
        
        return answer;
    }
}
