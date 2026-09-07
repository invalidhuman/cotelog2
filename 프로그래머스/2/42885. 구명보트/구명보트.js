function solution(people, limit) {
    var answer = 0;
    
    people.sort((a,b)=> b-a) // 내림차순
    console.log(people)
    
    let front = 0
    let rear = people.length-1
    
    while (front <= rear) {
        if (front===rear) {
            answer++
            break
        }
        
        if (people[front]+people[rear] > limit) {
            
            answer++
        } else {
            
            rear--
            answer++
        }
        front++
        
    }
    
    return answer;
}