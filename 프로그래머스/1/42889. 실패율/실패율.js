function solution(N, stages) {
    var answer = [];
    
    // 각 스테이지에 현재 머무르고있는 사람
    const tryingPlayers = Array(N + 2).fill(0) // 5개면 0,1,2,3,4,5,6
    // 6을 쓴건 N+1이 마지막 스테이지 클리어한 사용자래서.
    const fails = Array(N + 2).fill(0) // 5개면 0,1,2,3,4,5,6
    let reachedNum = stages.length
    
    
    // [0,1,1,0,0,0] <- 2일때
    
    // stages를 계속 돌면서 스테이지 번호를 만날때마다 배열에 반영
    // 반영시 for문으로 그 이하까지 ++
    for (const stage of stages) {
        tryingPlayers[stage] ++
    }
    
    // 통과하거나 도달한 사용자 수
    // 1 : arrived 1, 도달 8 = 1/8
    // 2 : arrived 2, 도달 7 = 2/7 = arrived[i] /
    
    // 스테이지별 실패한 사용자 수
    for (let i =1; i <= N; i++) {
        // i스테이지에 도전중인 사람이 없는 경우 벙지
        fails[i] = reachedNum === 0 ? 0 : tryingPlayers[i] / reachedNum;
        
        
        reachedNum -= tryingPlayers[i]
        
            
    }
    
    const result = fails.slice(1,N+1).map((rate,idx) => [idx+1,rate]).sort((a,b) => b[1] - a[1])  
    return result.map(([stage]) => stage);
}

// 신규 사용자 vs 기존 사용자 스테이지 차이
// 동적 게임시간 늘리기 -> 실패율 구하기

// 도달but not 클리어 / 도달한 플레이어 수
// 아직 도달조차 못한 경우에는 실패율에 집계되지 않음

// 5, [2, 1, 2, 6, 2, 4, 3, 3] : '사용자별' 현재 멈춘 스테이지 번호
// user_id==0인 사용자가 2번 스테이지에 멈춤
// 0스테이지는 없음
// -> 실패율이 높은 스테이지부터 내림차순
// 스테이지 수가 N인데 