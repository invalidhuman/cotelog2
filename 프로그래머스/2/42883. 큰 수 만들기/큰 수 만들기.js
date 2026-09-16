function solution(number, k) {
    var answer = '';
    
    // k개의 수 제거 : 부분수열
    // [19,12,14,92,94,24] 중 가장 큰 것
    // 모든 경우를 만든 다음찾기엔 n : 100만
    // 깊이우선도 X
    
    const stack = []
    
    // 순서가 있으며, 앞자리가 중요.
    // stack에 넣어놓고, 더 큰게 있는지비교해서, 더 크면 바꾼다.
    // 더 작으면 더쌓는다.
    // .at(-1) 기준 더 큰걸 만나면, 앞으로 가면서 pop()을 진행한다.
    // 빼다보니 k를 다쓰면 그대로 return
    // k가 남으면 남은건버리고 return
    
    
    for (let i =0; i< number.length; i++) {
        
        // 새로들어온게 stack의 top보다 크다면
        while (k>0 && stack.at(-1) < number[i]) {
            // top 이 더 큰 경우를 만날때까지 계속 pop
            stack.pop()
            k--
        }
        
        // 빼는 건 while에서 처리하고 나오면 공통처리인 push
        stack.push(number[i])
    }
    
    // k가 남는 경우는 for문 바깥에서 처리
//     if (k>0) {
        
//     }
    while (k>0) {
        stack.pop()
        k--
    }
    
    return stack.join('')
}