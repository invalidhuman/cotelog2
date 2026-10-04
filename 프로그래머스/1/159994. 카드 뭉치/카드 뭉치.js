function solution(cards1, cards2, goal) {
    var answer = 'Yes';
    
    let front1 = 0
    let front2 = 0
    
    
    for (const str of goal) {
        
        if (str === cards1[front1]) {
            
            front1++
            console.log(str)
        } else if (str === cards2[front2]) {
            front2++
            console.log(str)
        } else {
            answer = "No"
            break
        }
    }
    
    return answer;
}