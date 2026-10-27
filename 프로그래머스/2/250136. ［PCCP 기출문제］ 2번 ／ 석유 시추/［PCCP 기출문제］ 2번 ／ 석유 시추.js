// 너비니까 BFS. DFS도 되긴함

function solution(land) {
    var answer = 0
    
    const n = land.length // 행 개수
    const m = land[0].length // 열 개수
    
    let visited = Array.from( 
        {length:n},
        () => Array(m).fill(false)
    )
    
    const move = [ [-1,0], [1,0], [0,-1], [0,1] ]
    
    function bfs(startR, startC) {
        const queue = [[startR, startC]]
        let front = 0

        let size = 0
        const columns = new Set()

        visited[startR][startC] = true

        while (front < queue.length) {
            const [r, c] = queue[front++]

            size++
            columns.add(c)

            for (const [dr, dc] of move) {
                const nr = r + dr
                const nc = c + dc

                if (nr < 0 || nr >= n || nc < 0 || nc >= m) continue
                if (visited[nr][nc] || land[nr][nc] === 0) continue

                visited[nr][nc] = true
                queue.push([nr, nc])
            }
        }

        return [ size, columns ]
    }
    
    const columnTotal = Array(m).fill(0)

    for (let i = 0; i< n;i++) {
        for (let j =0; j < m; j++) {
            if (!visited[i][j] && land[i][j] === 1) {
                const [ size, columns ] = bfs(i, j)
                
                for (const col of columns) {
                    columnTotal[col] += size
                }
            }
        }
    }
        
    
    return Math.max(...columnTotal)
}

// 석유는 여러 덩어리.
// 시추관은 열 하나만들어가는데, 덩어리는 다 가져올수있다.

// 모든 칸에 대해 방문여부 확인 및 탐색하는건 동일 