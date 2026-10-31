function solution(n, edge) {
    var answer = 0;
    
    // 인접 리스트 생성 (단, 1번부터 n번까지)
    const graph = Array.from(
        {length: n+1},
        () => []
    )
    
    // 관계 저장 (양방향)
    for (const [a,b] of edge) {
        graph[a].push(b)
        graph[b].push(a)
    }
    
    // BFS 초기화
    const queue = [1]
    let front = 0
    
    // 방문 배열이자 거리 저장
    // 아직 방문X : -1, 방문 : 0이상의 거리로 표기. 단, 노드1로부터의 최단거리
    const dist = Array(n+1).fill(-1)
    dist[1] = 0 // 1에서 1까지의 거리는 0
    
    // BFS 탐색 
    while (front < queue.length) {
        const current = queue[front++]
        
        // queue에서 꺼낸 노드와 연결된 노드들 순회
        for (const next of graph[current]) {
            // 미방문일때만 거리 입력 및 방문처리
            if (dist[next] === -1) {
                // 무조건 그 전 노드의 1로부터의 거리 + 1
                dist[next] = dist[current] + 1
                queue.push(next)
            }
        }
    }
    
    // dist 배열에 각 노드의 최단거리들이 저장되어있으니 최댓값 파악
    const max = Math.max(...dist)
    
    // 최댓값을 가진 원소의 인덱스까지는 알 필요없으므로, 필터링한 뒤 그 길이만 출력
    return dist.filter(el => el === max).length
}

// 무조건 1번 노드에서 시작, edge에는 
// 가장 멀리 떨어진 노드 = 최단경로로 이동 시 간선이 가장 많은 노드
// 그 개수를 세야함