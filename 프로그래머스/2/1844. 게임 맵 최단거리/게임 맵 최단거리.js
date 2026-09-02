function solution(maps) {
    var answer = 0;
    
    const queue = []
    let front = 0
    
    queue.push([0,0])
    
    const dx = [-1,1,0,0]
    const dy = [0,0,-1,1]
    
    const row = maps.length
    const col = maps[0].length
    
    while (front < queue.length) {
        const current = queue[front++]
        
        const x = current[0]
        const y = current[1]
        
        if (x === row-1 && y === col-1) {
            return maps[x][y]
        }
        
        // current에 들어온 원소 기준으로 4방향의 원소 중 갈 수 있는 좌표 push
        for (let dir = 0; dir < 4; dir++) {
            const nx = x + dx[dir]
            const ny = y + dy[dir]
            
//             const inRange = nx > -1 &    & nx < row && ny > -1 && ny < col
            
            if (nx > -1 && nx < row && ny > -1 && ny < col && maps[nx][ny] ===1 ) {
                maps[nx][ny] += maps[x][y]  
                queue.push([nx,ny])
                
            }
            
             
        }
        
        
    }
    // while 문이 끝났는데도 아직 n,m에 도착하지못했다면,
    return -1; // 목적지에 못가는 경우인 것
}