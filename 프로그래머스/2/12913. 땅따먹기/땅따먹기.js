function solution(land) {
    var answer = 0;

    // land : N행 4열. 항상 4열이지만 행이 다르다.
    const N = land.length
    
    // 한 행 씩 내려온다. 정수삼각형처럼
    // 4칸 중 한 칸만 밟아야한다.
    // 열은 바꿀 수 없다.
    // 얻을 수 있는 점수의 최댓값
    
    // 2차원 배열을 만들어서 각각에 가능한 점수의 최댓값을 입력해둬야하나? 점화식처럼?
    const dp = Array.from(
        {length:N},
        () => Array(4).fill(0)
    )
    
    for (let col = 0; col < 4; col++) {
        dp[0][col] = land[0][col];
    }
    
    // 하지만 land도 변경 가능하긴하다.
    for (let row = 1; row < N; row++) {
        for (let col = 0; col < 4; col++) {
            // 각 열에 대해서, 자기 자신을 제외하고 다음에 +
            let prevMax = 0
            
            for (let c = 0; c < 4; c++) {
                if (c===col) continue
                
                prevMax = Math.max(prevMax, dp[row-1][c])
            }
                
            dp[row][col] = land[row][col] + prevMax
            
        }
    }
 
    return Math.max(...dp[N-1])
}