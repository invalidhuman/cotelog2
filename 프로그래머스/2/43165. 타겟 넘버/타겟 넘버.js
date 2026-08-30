function solution(numbers, target) {
    var answer = 0;
    //numbers는 배열이며, 음이 아닌 정수가 담긴다.
    // 순서를 바꾸지 않은 채로 더하기 or 빼기를 붙인다.
    // 사용한 결과가 target이 되는 방법의 수를 반환

    // 재귀 호출 / DFS
    // 모든 경우를 검사해서 되는지안되는지를 검사해야되는데,
    // 인덱스 0~n-1까지 각 경우에서 +와 -붙이는 경우를 오른쪽으로 뻗어나가는 트리 

    // 새 각 경우에서 현재까지의 합을 전달하되,
    // sum+ 값, sum - 값을 전달
    // 종료조건은 idx가 끝까지왔을 때로,
    // 이 때 target과 비교해서 맞으면 answer를 하나 올린다.
    
    function dfs(idx,sum) {
        if (idx === numbers.length) {
            if (target===sum) {
                answer++
            }
            return
        }
        
        dfs(idx+1,sum+numbers[idx])
        dfs(idx+1,sum-numbers[idx])
    }
    
    
    dfs(0,0)
    
    return answer;
}