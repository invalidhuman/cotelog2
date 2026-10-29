function solution(points, routes) {
    var answer = 0;
    
    const n = points.length // '포인트'지점의 개수
    const x = routes.length // 로봇의 개수 = 경로의 개수
    const m = routes[0].length // 각 로봇이 들르는 포인트 개수
    
    // Map으로 point의 위치 기록
    const pointMap = new Map();
    
    for (let i = 0; i < n; i++) {
        pointMap.set(i+1,points[i])
    }
    
    // 각자의 방문배열을 만들어야함
    // 아니면 이 방문배열을 충돌확인할 겸 쓰든가
    // 그럼 일단 이동시켜놓고 만들어진 방문배열을 탐색해서 충돌위험 판단될 때마다 센다
    const visited = Array.from(
        {length:x},
        () => [] // 아니 몇초가 걸릴줄알고 이거를 미리채워? 채우지마
    )
    
    // console.log(visited)
    // 그냥...들른데만 push하기
    // visited[i].push(좌표)  
    
    // [ 
        // []
    // ]

    // 포인트 이동 함수 정의
    // BFS아닌듯. 
    // 로봇 하나의 이동 좌표입력
    function pushPath(route) {
        // route : [4,2]
        
        const des = route.map(point => pointMap.get(point)) // 해당하는 포인트 좌표들 배열
        
        const path = []
                
        let [r,c] = des[0]
        
        path.push([r,c]) // 0초일때 위치는 미리 push
        
        // des가 이 로봇이갈 경로만큼의 포인트니까
        for (let i = 1; i < des.length; i++) {
            // 다음 목적지
            const [destR, destC] = des[i]
            
            
            
            // 걍 r부터이동
            while ( r!==destR || c!==destC) {
                if (r!== destR) {
                // r을 destR로 이동시키기 위해
                // r이 더 작으면 +1, r이 더 크면 -1
                    r += r < destR ? 1 : -1
                } else {
                    c += c < destC ? 1 : -1
                }
                
                path.push([r,c])   
            }
           
        }
        
        return path // route 에서의 1초마다의 경로반환
        
    }
    
    // for문 내부
        // for 4
            // 1초 후 각 로봇의 이동위치 파악
            // 해당 로봇
            // BFS에 현재위치와 다음 목적지를 넣어야함
            // visited에 반영
    // for (const route of routes) { // 각 로봇의 이동경로가 추가됨
    //     pushPath(route) // 2개이동하든 3개이동하든 어딜들렀다가 어딜가든 초마다의 좌표를 기록해야함
    // }
    
    for (let i = 0; i< routes.length; i++) { //로봇들마다 1초마다의 경로를 찾아 push
        visited[i] = pushPath(routes[i])
    }
    
    // 다시 새로운 for문
        // visited가 생긴 순서대로 같은 초에 만난거니까
        // 서로의 위치 비교 -> 같은거 있는지 파악
        // 근데 여러개에서 같을 수 있음.
        // 1,2,3,4가 한군데서 -> +1
        // 1,2 & 3,4 -> +2
    
    const maxTime = Math.max(...visited.map( a => a.length))
    
    for (let i = 0; i < maxTime; i++) { // i : 시간
        // Map을 하나 더 만들어서 그 좌표에있는 로봇들기록
        const countMap = new Map()
        
        for (let j =0; j<visited.length; j++) { // j : 로봇
            const pos = visited[j][i] // 위치
            
            if (!pos) continue
            
            const key = pos.join(",") // 같은지 알기 편하게하기위해 문자열로 변환
            
            // countmap에저장
            countMap.set(key,(countMap.get(key) ?? 0)+1)
            
            if (countMap.get(key) === 2) answer++
        }
    }
    

    
    return answer; // 위험상황 발생시마다 ++
}
// 근데 BFS로는 1초 후 이동위치를 알 수가없는데?
    // 일단 시켜놓는다 BFS를


//points	
// [[3, 2], [6, 4], [4, 7], [1, 4]]	

// routes
// [[4, 2], [1, 3], [2, 4]]

// #3번
// points = [[2, 2], [2, 3], [2, 7], [6, 6], [5, 2]]
// routes = [[2, 3, 4, 5], [1, 3, 4, 5]]
    // 3->4 최단경로가 아래인 이유는 이미 간 길은 갈 수없기때문
    // 근데 갔다안갔다를 '각자의'입장에서 따져야함


// 1초마다 상하좌우 이동 가능
// [ ] routes[i]의 길이는 다 같은건가?
// [ ] 연속방문 X -> 방문처리