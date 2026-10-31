function solution(n, edge) {
    var answer = 0;

// 인접행렬
    // const graph = Array.from(
    //     {length:n},
    //     () => Array(n).fill(0)
    // )
    
//     edge.forEach(vertex => {
//         graph[vertex[0]-1][vertex[1]-1] = 1
        
//         graph[vertex[1]-1][vertex[0]-1] = 1
//     })
    
    // 관계정립
    const graph = Array.from(
        {length:n+1}, // 인덱스가 아닌 숫자로 접근하기위함
        () => []
    )
    
    for (const [a,b] of edge) {
        graph[a].push(b)
        graph[b].push(a)
    }
    
    // 1,000 N^2
    // 100,000 NlogN
    // 10,000,000 N
    
    // BFS
    const queue = [1]
    let front = 0
    
    // 1이 방문한 노드 저장 겸 거리 계산용
    const visited = Array(n+1).fill(-1)
    
    visited[1] = 0
    
    // queue에서 뺀 것과 연결된 모든 노드를 발견하고 visited에 거리를 추가
    
    while (front < queue.length) {
        const current = queue[front++] // 2부터 시작해서 bfs
        
        // 현재 노드와 연결된 노드 배열의 원소를 하나씩 순회
        for (const next of graph[current]) {
            // next : 연결된 노드 중 하나
            if (visited[next]===-1) {
                visited[next] = visited[current] + 1
            
                queue.push(next)
            }
            
            
        }
    }
    
    const max = Math.max(...visited)
    
    return visited.filter(el => el === max).length
    
    // 반복문 => 그래프 순회하며 각 노드가 1과 얼마나 떨어졌는지 체크
    for (let i = 1; i< n; i++) {
        graph[i]
        
    }
    
    
    
    return answer;
}

// 무조건 1번 노드에서 시작, edge에는 
// 가장 멀리 떨어진 노드 = 최단경로로 이동 시 간선이 가장 많은 노드
// 그 개수를 세야함
// 