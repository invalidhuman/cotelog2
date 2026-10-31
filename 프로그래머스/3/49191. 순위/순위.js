function solution(n, results) {
    var answer = 0;
    
    // 인접리스트(단방향)
    const wins = Array.from( {length:n+1}, () => [])
    const loses = Array.from( {length:n+1}, () => [])
    
    for (const [a,b] of results) {
        wins[a].push(b)
        loses[b].push(a)
    }
    
    console.log(wins)
    console.log(loses)
    
    function bfs(graph, start) {
        let result = 0
        
        // start는 현재 탐색할 차례인 노드
        
        let queue = [start]
        let front = 0
        
        const visited = Array(n+1).fill(false)
        visited[start] = true
        
        while (front < queue.length) {
            const current = queue[front++]
            
            for (const next of graph[current]) {
                if (!visited[next]) {
                    visited[next] = true
                    queue.push(next)
                    result++
                }
            }
            
        }
        
        // 이기는/지는 사람 수
        return result
    }
    
    // 순회하면서 간접 연결 개수 파악
    for (let i = 1; i < n+1; i++) {
        let winCount = bfs(wins,i)
        let loseCount = bfs(loses,i)
        
        
        if (winCount+loseCount === n-1) answer++
    }
    
    
    
    
    return answer; // 순위를 매길수 있는 선수으 ㅣ수
}

// results에는 모든 경기가 있는 게 아님
// 양방향이아닌 단방향 그래프


// 1은 2와의 관계만 알지만, 2가 3과 관계가 있으므로 1이 2,3을 이긴다는 건 안다
// 특정 선수의 순위를 알려면 네트워크를 만들어둬야?

// i에 대해 wins에서 탐색,
// i에 대해 loses에서 탐색

// 그 i가 자신 제외 나머지 모두와의 관계가 특정된다면 순위를 알 수 있다.