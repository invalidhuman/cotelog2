function solution(people, limit) {
    var answer = 0;
    
    people.sort((a,b) => b-a) // 내림차순 정렬
    // people : 무거운 순 [80,70,50,50]
    
    // 반복하면서 매번 '남은 사람들 중 가능한 조합'을 찾는다.
    // 이때 남은 사람 중 무거운 사람을 먼저 찾고, 거기에 가벼운 사람을 조합해본다. 
    // 혼자태우더라도 무거운 사람을 태워서 선택지가 많은 사람을 남기고,
    // 남은 사람 중 가장 무거운 사람이 한명을 데려갈 수 있는 경우, 
    // 데려갈 수 있는데 아끼더라도 그게 가능할 정도면 나머지 경우의 수도 동일함
    
    let front = 0
    let rear = people.length-1
    
    // 기준 : 남은 사람 중 가장 무거운 사람
    while (front <= rear) {
        // 1. 가장 가벼운 사람과 조합해도 안된다면 => 혼자 태워야함. 
        // if (people[front] + people[rear] > limit) {
        //     front++   
        //     answer++
        // }
            
        // 2-(1). 가장 가벼운 사람이랑 했을 땐 된다면 => 같이 태운다.
        
        if (people[front] + people[rear] <= limit) {
            rear--
        }
        
        front++
        answer++
    
        // 2-(2). 아끼면 더 적은 사람이랑 조합해서 될 거 같지만,
        // 아껴도 어차피 보트엔 2명만 태울 수 있고, 아껴서 가장 무거운 사람을 혼자 태워도 answer++ 가 되므로
        // 결국 경우의 수는 동일하다.
        
        
        // 3. front와 rear가 같아버리는 경우 : 아무것도하지말고 front를 늘리면 끝나서 조건을 따로 지정하지않아도된다. 
    }
    
    
    
    return answer
}