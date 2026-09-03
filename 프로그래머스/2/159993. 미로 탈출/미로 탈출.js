function solution(maps) {
    // 구) 미로 탈출최소시간
    var answer = 0;
    
    // BFS 같음
    // 문자열도 대괄호 인덱싱이 되므로 굳이 변환은 안해도 될듯
    // 레버를 무조건 먼저 당겨야하니 거기까지 구한다음에 answer에 넣어놓고
    // 새로 시작점을 한다고 생각
    // 이러면 maps에 저장하지말고 방문 배열을 따로 쓰는게..나으려나? 온길로 또올수도 있을 거 같은데
    
    const dx = [-1,1,0,0]
    const dy = [0,0,-1,1]
    
    let start = []
    let lev = []
    let exit = []
    
    // 시작점과 레버, 을 찾는다.
    // 시작점으로부터 레버까지 BFS를한다.
    // 레버에서 출구까지 BFS를 한다. 
    
    // 2차원 방문 배열
    const visited = Array.from( {length: maps.length}, 
        () => Array(maps[0].length).fill(false)
    )
    
    const queue = []
    let front = 0
    
    for (let i = 0; i< maps.length; i++) {
        for (let j = 0; j <maps[i].length; j++) {
            if (maps[i][j]==="S") {
                queue.push([i,j,0])
                visited[i][j] = true
                continue
            }
            
            if (maps[i][j]==="L") {
                lev = [i,j]
                continue
            }
            
            if (maps[i][j]==="E") {
                exit = [i,j]
                continue
            }
        }
    }
    
    let failed = true
    
    // queue에 S의 위치만 들어간 상태에서 BFS_(1) 시작 
    while (front < queue.length) {
        const [x,y,distance] = queue[front++]
        
        if (x === lev[0] && y === lev[1]) {
            answer += distance
            failed = false
            break
        }
        
        for (let dir = 0; dir<4; dir++) {
           const nx = x + dx[dir]
           const ny = y + dy[dir]
           
           const isInside = nx > -1 && nx < maps.length && ny > -1 && ny < maps[0].length
           
           if (isInside && visited[nx][ny] === false && maps[nx][ny] !== "X") {
               queue.push([nx,ny,distance+1])
               visited[nx][ny] = true
           }
        }
    }
    
    if (failed) return -1
    
    failed = true
    
    // BFS_(2) 시작
    const visited2 = Array.from( {length: maps.length}, 
        () => Array(maps[0].length).fill(false)
    )
    
    const queue2 = []
    let front2 = 0
    queue2.push([lev[0],lev[1],0])
    
    
    while (front2 < queue2.length) {
        const [x,y,distance] = queue2[front2++]
        
        if (x === exit[0] && y === exit[1]) {
            answer += distance
            failed = false
            break
        }
        
        for (let dir = 0; dir<4; dir++) {
           const nx = x + dx[dir]
           const ny = y + dy[dir]
           
           const isInside = nx > -1 && nx < maps.length && ny > -1 && ny < maps[0].length
           
           if (isInside && visited2[nx][ny] === false && maps[nx][ny] !== "X") {
               queue2.push([nx,ny,distance+1])
               visited2[nx][ny] = true
           }
        }
    }
    
    if (failed) return -1
    
    return answer;
}