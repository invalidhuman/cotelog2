function solution(x, y, n) {
    var answer = 0;
    
    // 만들 수 있는지 없는지는 다 해보고도 안되면 알 수 있다.
 
    // 종료 조건 1. 찾으면 지금까지의 횟수 그냥 return
    // 종료 조건 2. 새로 생기는 값들이 모두 y를 넘을 경우
    
    // 부분문제로 쪼개기 : y로 가는 중간에 생기는 값을 i라고 하면, 그걸 dp 에 저장한다.
    // 1차원 배열 dp[i] : x에서 i로 가는 데 필요한 최소 연산의 수
    const dp = Array(y+1).fill(Infinity)
    
    // -1 이 기본(갈수없다.)
    
    // 10 ~ 40 까지 순회
    dp[x] = 0
     
    for (let i = x; i<=y; i++) {
        dp[i+n] = Math.min(dp[i+n],dp[i]+1) 
        dp[i*2] = Math.min(dp[i*2],dp[i]+1) 
        dp[i*3] = Math.min(dp[i*3],dp[i]+1) 
    }
    
    
    return dp[y] === Infinity ? -1 : dp[y]
}