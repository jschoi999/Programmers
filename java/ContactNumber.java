package java;
class Solution {
    public boolean solution(String[] phone_book) {
        boolean answer = true;
        
        for(int i=1; i<phone_book.length;i++){
            
            for(int j=0; j<phone_book.length; j++){
                if(i==j){
                    continue;
                }
                if(phone_book[i].indexOf(phone_book[j]) == 0 || phone_book[j].indexOf(phone_book[i]) == 0){
                    answer = false;
                    break;
                }
                
            }
            
        }
        
        return answer;
    }
}
