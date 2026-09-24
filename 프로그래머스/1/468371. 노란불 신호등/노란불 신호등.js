function solution(signals) {
    var answer = -1;
    const n = signals.length
    
    function getGCD (a,b) {
        while (b>0) {
            let r = a % b
            a = b
            b = r
        }
        
        return a
    }
    
    function getLCM (a,b) {
        return a*b / getGCD(a,b)
    }
    
    let lcm = signals[0][0]+signals[0][1]+signals[0][2]
    
    for (let i = 1; i < n; i++) {
        lcm = getLCM(lcm,signals[i][0]+signals[i][1]+signals[i][2])
    }
    // 모든 신호등의 전체 주기의 최소공배수를 구한다.
    // 거기에 G+1~G+Y가 겹치는 범위가 된다.
    
    // 하나의 신호등이 time이라는 시간에 yellow인지 판단하는 함수
    function isYellow(arr, time) {
        
        
        // 한 주기 안에서 G + 1 ~ G + Y 구간이 노란불이니,
        // 현재시각 time을 현재 신호등의 한 주기 안의 위치 상 어디인지
        
        const [G,Y,R] = arr
        const period = G+Y+R
        const current = time % period
        
        if (current === 0) return false
        

        return (G+1 <= current) && (current <= G+Y)
        
    }
    
    // lcm 이후에는 모든 신호등의 상태 조합이 다시 반복되므로
    // 1 ~ lcm 범위까지만 확인하면 된다.
    for (let time = 1; time <= lcm; time++) {
        for (let i = 0; i<n; i++) {
            if (!isYellow(signals[i],time)) break
            
            if (i==n-1) {
                // answer에 넣지말고 바로 return 해야,
                // 반복문이 진행되면서 또 다른 정전케이스가 나오기 전에 반복문이 종료된다.
                return time
            }
        }
    }
    
    
    return answer;
}
