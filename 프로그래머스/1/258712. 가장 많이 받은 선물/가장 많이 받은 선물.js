function solution(friends, gifts) {
    var answer = 0;
    
    const results = Array(friends.length).fill(0)
    
    const scores = Array(friends.length).fill(0)
    
    // 어떻게하면 dictionary
    const matchMap = new Map()
    
    for (let i = 0; i< friends.length; i++) {
        matchMap.set(friends[i],i)
    }
    
    // 그래프와 준/받은/선물지수 완성하기
    const graph = Array.from(Array(friends.length), () => Array(friends.length).fill(0))
    
    // 그래프의 결과를 바탕으로 결과 도출
    // 누가 다음달에 가장 많이 받을 것인가?     
    
    for (let i = 0; i < gifts.length; i++) {
        const temp = gifts[i].split(' ')
        const giverIdx = matchMap.get(temp[0])
        const takerIdx = matchMap.get(temp[1])
        
        graph[giverIdx][takerIdx]++
        
        scores[giverIdx]++
        scores[takerIdx]--
    }
    
    console.log(graph)
    console.log(scores)
    
     // results에 둘 중 누가 받는 지 기록. 대칭그래프는 아니지만 미리 비교하므로 또 할필요없음
    for (let i = 0; i< friends.length-1; i++) {
        for (let j = i+1; j < friends.length; j++) {
            
            // 같은 수로 주고받은 경우와 주고받은 적이 없는 경우
            if (graph[i][j] === graph[j][i]) {
                // 근데 선물지수도 같다면 담달에 주고받지않음
                
                if (scores[i]===scores[j]) {
                  continue
                } else if (scores[i] > scores[j]) { // 선물지수가 큰쪽이 받음
                  results[i]++;  
                } else {
                  results[j]++;
                }
            } else if (graph[i][j] > graph[j][i]) { 
                results[i]++;
            } else {
                results[j]++;
            }
        }
    }
    
    // graph[i][j] == graph[j][i]면, graph를 완성하면서 작성한 선물지수로 비교
    
    // grpah[i][j] === 0인데 같은 경우는 1에 포함되므로 pass
    
    // graph[i][j] 가 graph[j][i] 보다 크면, i는 j에게 선물을 받는다. 
    // i가 j에게 더 많이 준거니까.
    
    // 더 작은 경우는 그럼 이 단계에서 바로 적어버리는 게 낫나?
    console.log(results)
    answer = Math.max(...results)
    
    return answer;
}


// graph와 선물지수만 기록되면 각자가 '준 개수와 받은 개수'까지 기록할필욘없을듯
// 받거나 줄 때마다 + or -만 하면되니까