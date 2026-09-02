function solution(maps) {
    var answer = 0;
    
    // map은 정사각형이 아닌 n*m, 1*1보단 큼
    // 어느 경로가 칸 수 최솟값인지 return / 못가면 -1
        
    const row = maps.length
    const col = maps[0].length
    
    const dx = [-1,1,0,0]
    const dy = [0,0,-1,1]

    // 풀이
    // queue에 현재 좌표를 넣고 상하좌우 4방향 탐색
    // 처음 방문하는 칸에 이전 거리 + 1을 저장
    // BFS는 가까운 거리부터 탐색하므로 도착점에 처음 도달한 거리가 최단거리
    // 방문처리는 maps[nx][ny] === 1 인것만 방문하도록하면, 방문한 칸은 누적거리가 저장되니 2 이상이므로 자연스럽게 방문한 칸이 된다.
    // 0 : 벽, 1 : 방문 가능, 2이상 : 이미 방문 <= 이렇게 되는 셈 
    //
    
    // Pseudo Code 
    // 1. queue에 시작점 좌표를 (0,0) 형태로 넣는다.
    // 2. 매 반복에서 queue에서 하나를 꺼내어 그 좌표 기준 상하좌우를 queue에 넣는다.
    // 3. queue에 넣으면서 해당 좌표들은 기존 좌표에 있던 값만큼(누적거리) 더해준다.
    // 4. while문의 조건을 queue가 빌 때까지로 정한다.
    
    const queue = []
    queue.push([0,0])
    
    // 한칸 갈때마다 이미 온길로 못돌아가게 막기
    // 지금까지 합을 더한 뒤 해당칸을 0으로 막거나, 지금 밟은 땅에 더하기
    while (queue.length >0) {
        const current = queue.shift() // python 기준 popleft 함수
        
        const x = current[0]
        const y = current[1]
        
        if (x == row-1 && y == col-1) {
            return maps[x][y]
        }
        
        // 4방향 반복문
        for (let dir = 0; dir <4; dir++) {
            const nx = x+dx[dir]
            const ny = y+dy[dir]
            
            
            // 갈 수 있는 길이면 (1이고 범위 내면)
            // 이 때 maps[nx][ny] 를 앞에서 검사하면 안됨
            if (nx > -1 && nx < row && ny > -1 && ny < col && maps[nx][ny] === 1) {
                maps[nx][ny] += maps[x][y]
                queue.push([nx,ny])
                
            }
        }
        
        // [0,0]만 예외적으로 첫 반복 시 1로 남아있고, 다시 queue에 들어가긴히자만, queue에 들어가도 나오면서 주변에 1이 없을것이므로 최단거리에 영향을 주지 않는다.
    }


    return -1
    
}
