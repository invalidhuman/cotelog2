function solution(n, computers) {
    var answer = 0;
    
    // (같은 네트워크) 상호 간의 연결
    // [[1,1,0]
    //  [1,1,1]
    //  [0,1,1]
    // ]
    // 1은 2와 직접 연결, 2는 3과 직접 연결
    // 따라서 1과 3도 '간접' 연결 => 네트워크의 개수는 1개
    
    // 무방향 그래프이고 항상 computers[i][i] == 1
    
    // 1->2, 2->3 일 경우 1과 연결된 모든 걸 깊이우선탐색해서 간접연결까지찾는다.
    // 연결된걸찾을때마다 방문 배열에 넣고, 해당 깊이를 호출한 DFS가 끝나면 answer++
    // 다음 탐색시 방문배열에 들어간 건 제외
    const visited = Array(n).fill(false)
    
    // 제외를 먼저? 호출을 먼저?
    // visited에 숫자가 아니라 숫자가 든 배열을 추가할까?
    
    function dfs(idx) {
        visited[idx] = true
        
        for (let next = 0; next < n; next++) {
            if (!visited[next] && computers[idx][next]===1) {
                dfs(next)
            }
        }
        
    }
    
    for (let i = 0; i < n; i++) {
        if (!visited[i]) {
            dfs(i)
            answer++
        }
        
    }
    
    // for문을 통해 인덱스마다 접근해서 다른 네트워크와 직접 연결되어있는지 파악
    // 지나간 인덱스의 것도 봐야함 
    
    // for (처음부터)
    //  for (처음부터)
    //      
    
    
    
    return answer;
}

// 컴퓨터 개수 n개는 왜 필요한거지? 