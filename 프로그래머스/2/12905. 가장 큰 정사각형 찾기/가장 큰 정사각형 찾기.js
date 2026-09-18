function solution(board)
{
    // 1, 0, 
    // DP -> 작은 정사각형부터 찾기?
    // 입력은 '직사각형' 일 수 있음
    
    // '정사각형'일 조건이 더 큰 범위에서 성립할때마다 그 정사각형의 넓이를 반환
    // 정사각형은 n*n -> 1*1 2*2 3*3
    // 그럼 양옆이 0인경우를 볼필요가있나? 
    
    // 4*4이려면 3*3도 품어야하고
    // 3*3이려면 2*2도 품어야한다.
    
    // 어차피 순서대로 탐색할건데 네 방향중하나만 기준 삼는게낫나?
    // dp의 결과가 곧 답을 저장해두는 곳으로 최적부분구조를 써야되는데
    // (i,j) : i,j를 오른쪽 아래 꼭짓점으로하는 정사각형의 최대 길이(한변)
    // 이러면 (-1,-1) (-1,0) (0,-1)만 비교해도 되지않을까
    // 그걸 미리 탐색하면서 저장하면
    // 다음번엔 앞에꺼가 1이라고 저장되어있다면 더해서 2가 될듯
    
    const dp = Array.from(
        {length:board.length},
        () => Array(board[0].length).fill(0)
    )
    
    for (let col = 0; col< board[0].length; col++) {
        dp[0][col] = board[0][col]
    }
    
    for (let row = 0; row< board.length; row++) {
        dp[row][0] = board[row][0]
    }
    
    for (let row = 1; row< board.length; row++) {
        for (let col = 1; col < board[0].length; col++) {
            if (board[row][col] === 0) continue
            
            // 0이 아니면 무조건 1일테니
            // 1인 것중에, 세 방향중 최솟값을 찾고, 그값에서 현재값(1) 추가
            
           
            dp[row][col] 
                = Math.min(dp[row-1][col-1],dp[row-1][col],dp[row][col-1]) + 1
           
            
        }
    }
        
    let side = 0
    
    for (let row = 0; row< board.length; row++) {
        for (let col = 0; col < board[0].length; col++) {
            side = Math.max(side,dp[row][col])               
        }
    }
    
    return side*side;
}

// 안이 비어도 '정사각형'인가? '선' 기준?