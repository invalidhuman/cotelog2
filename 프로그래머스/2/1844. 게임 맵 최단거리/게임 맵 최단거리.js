function solution(maps) {
    // 이동할 수 있는 방향을 나타내는 배열 move
    const move = [[-1,0],[1,0],[0,-1],[0,1]]
    
    // 맵의 크기
    const n = maps.length // 행 개수
    const m = maps[0].length // 열 개수
    
    // 거리를 저장하는 배열 dist를 -1로 초기화
    // [n-1][m-1] 까지 -1로 만듦으로써, 도달하지 못하면 -1인 채로 return됨
    // 도달하면 dist에 최단거리가 반영됨
    const dist = Array.from( {length:n}, 
                           () => Array(m).fill(-1)                           )
    
    // dist[n-1][m-1]에 도달할 수 있는 경우 최단거리가 기록되게 하는 함수
    function bfs(start) {
        const queue = []
        let front = 0
        queue.push(start) // 시작점을 queue에 넣음
        
        // 시작점의 거리 -1 -> 1로 변경 
        dist[start[0]][start[1]] = 1
        
        // 반복문에서 현재 노드를 기준으로 상하좌우를 탐색하여 거리기록 및 queue에추가되게 구현하고,
        // queue가 비면, 즉 상하좌우 중 갈 곳이 없으면 도달이 불가능하므로 그냥 종료
        while (front < queue.length) {
            // queue에서 하나를 pop
            const here = queue[front++] 
            
            
            // 현재 queue에서 빼낸 좌표의 상하좌우 탐색
            for (const [dx,dy] of move) {
                // '탐색할 노드'의 좌표
                const row = here[0] + dx
                const col = here[1] + dy
                
                const inRange = row > -1 && col > -1 && row < n && col < m
                
                // 해당 좌표가 1인지 && 범위 안인지
                if (inRange && dist[row][col] === -1 && maps[row][col] === 1) {
                    // 거리 누적
                    queue.push([row,col])
                    dist[row][col] = 1 + dist[here[0]][here[1]]
                }
            }
        }
            
        
        return dist
    }
    
    
    bfs([0,0])
    
    return dist[n-1][m-1]
}