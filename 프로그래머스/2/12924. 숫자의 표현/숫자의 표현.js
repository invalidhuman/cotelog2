function solution(n) {
    var answer = 0;
    
    // 4개로 만든다면
    // k + k+1 + k+2 + k+3 = n 에 대해 k가 자연수가 나와야 성립함
    // 4k + 6 = n에서 k가 자연수가 되면 ++
    
    // k, 2k+1, 3k+3, 4k+6, 5k+10, 6k+15
    // 일차항 < n 일때만 하는 게 맞는듯
    // 6k + 15 = 15 -> k=0이면 자연수가 아니므로.
    
    // 종료조건 : 일차항 >= n이되는순간.
    let k = 0 // 일차항의 변수. x역할
    let constant = 0 // 상수항
    let increment = 0 // 증가량
    
    for (let i = 1; constant < n; i++) {
        // i는 일차항의 계수를 의미
        
        // i*k + constant = n 에서 k 가 자연수가 되는지
        if ( (n - constant) % i === 0 ) {
            answer++
        } 
        
        increment++ // 증가량
        constant += increment
    }
    
    return answer;
}

// n -> 연속한 자연수
// 가 가능한 방법의 수
// 한자리로 가능한지, 두 자리로 가능한지...
// n, floor(n/2), floor(n/3)