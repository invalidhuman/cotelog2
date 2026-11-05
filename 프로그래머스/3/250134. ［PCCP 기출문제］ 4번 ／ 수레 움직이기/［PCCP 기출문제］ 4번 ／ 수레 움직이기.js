function solution(maze) {
    var answer = 21;
    
    const n = maze.length
    const m = maze[0].length
    
    const dx = [-1,1,0,0]
    const dy = [0,0,-1,1]
    
    // 각자의 도착지
    
    // 중간에도 겹치면 안됨 => 매 칸마다 겹치는지 확인하기
    const visitedRed = Array.from(
        {length: n},
        () => Array(m).fill(false)
    )
    
    const visitedBlue = Array.from(
        {length: n},
        () => Array(m).fill(false)
    )
    
    console.log(visitedRed)
    
    // const queueRed = []
    // const queueBlue = []
    // const queue = [ [(1,1,(2,2)] ]
    
    // BFS말고 함수 정의하는게 나을거같기도..?
    // (1,2) -> (2,2) -> ...
    // (2,1) -> (2,2)
    
    let red = 0
    let blue = 0
    let redf = 0
    let bluef = 0
    
    for (let i = 0; i < n; i++) {
        for (let j =0; j< m; j++) {
            if (maze[i][j] === 1) red = [i,j]
            if (maze[i][j] === 2) blue = [i,j]
            if (maze[i][j] === 3) redf = [i,j]
            if (maze[i][j] === 4) bluef = [i,j]
        }
    }
    
    visitedRed[red[0]][red[1]] = true
    visitedBlue[blue[0]][blue[1]] = true
    
    function dfs(red,blue,turn) { // 빨간 수레 위치, 파란 수레 위치, 턴 수
        const redArrived = red[0] === redf[0] && red[1]===redf[1]
        const blueArrived = blue[0] === bluef[0] && blue[1]===bluef[1]
        
        if (redArrived && blueArrived) {
            answer = Math.min(answer,turn)
            return
        }
        
        if (turn >= answer) return
        
        const [xred,yred] = red // ex. red = [1,2]
        const [xblue,yblue] = blue 
        
        for (let i = 0; i< 4; i++) {
            
            const nxred = redArrived ? xred : xred + dx[i]
            const nyred = redArrived ? yred : yred + dy[i]
            
            const inRangeRed = nxred > -1 && nxred < n && nyred > -1 && nyred < m
            
            // 도착했으면 방문배열검사하며 안됨    
            if (!redArrived && !(inRangeRed && maze[nxred][nyred] !== 5 && !visitedRed[nxred][nyred])) continue
                
            for (let i = 0; i< 4; i++) { 
                const nxblue = blueArrived ? xblue : xblue + dx[i]
                const nyblue = blueArrived ? yblue : yblue + dy[i]

                const inRangeBlue = nxblue > -1 && nxblue < n && nyblue > -1 && nyblue < m

                if (!blueArrived && !(inRangeBlue && maze[nxblue][nyblue] !== 5 && !visitedBlue[nxblue][nyblue])) continue
        
                    // 위치전환
                const isSwap = nxred === xblue && nyred === yblue && nxblue === xred && nyblue === yred

                    // 겹치는 경우
                if (!isSwap && !(nxred === nxblue && nyred === nyblue)) {
                    if (!redArrived) visitedRed[nxred][nyred] = true
                    if (!blueArrived) visitedBlue[nxblue][nyblue] = true
                    dfs([nxred,nyred],[nxblue,nyblue],turn+1)

                    if (!redArrived) visitedRed[nxred][nyred] = false
                    if (!blueArrived) visitedBlue[nxblue][nyblue] = false
                }

            }
            
            
            
        }
        
        
        // dfs(,,turn+1)
    }
    

    
    dfs(red,blue,0)
    
    
    // 시작과 동시에 시작 칸은 각자의 visited에 추가
    
    // 반복문 or 재귀
        // 빨간색 입장에서 먼저 상하좌우를 확인
        // 가능한 데로 queueRed에 위치 저장
        // 파란색도 상하좌우 확인해서 가는데 queueRed 의 top과 겹치면 안됨
    
        // 매번 각자의 도착지인지 판별 
            // 고정을 어떻게?
    
    
    return answer === 21 ? 0 : answer; // 필요한 턴의 최솟값
}

// 각 턴마다 반드시 한 칸 움직여야함. 도착하면 고정
// 방문배열
// 수레끼리 바꾸기 불가

// 빨간색만의 visited와 파란색만의 visited가 있어야할듯
    // 왜냐면 maze를 손상시키는 건 힘듦

// 한명이 고정되고 나서도 나머지 하나는 아직 못풀었을 수 이ㅏㅆ음 

// 빨간수레입장에서 먼저 가는 경우를 먼저하고 나서 파란수레를 이동시켜도 최솟값을 구하는 데 있어 결과가 달라지지않는가?