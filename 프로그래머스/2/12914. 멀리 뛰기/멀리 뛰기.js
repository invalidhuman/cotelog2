function solution(n) {
    var answer = 0;
    
    const dp = Array(n+1).fill(0)
    
    dp[1] = 1
    dp[2] = 2
     
    for (let i = 3; i<=n; i++) {
        dp[i] = (dp[i-1]%1234567 + dp[i-2]%1234567)%1234567
    }
    
    answer = dp[n]
    
    return answer;
}