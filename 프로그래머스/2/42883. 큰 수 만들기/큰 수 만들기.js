function solution(number, k) {
    var answer = '';
    
    console.log(typeof number) // number는 문자열로 주어짐
    
    console.log(number[1] < number[2]) // 어차피 0~9 중 하나이므로 숫자로 변환하지 않아도 JS에서는 문자열의 사전식 비교가 일어난다. 
    // 즉, Number(number[i]) 나 parseInt(number[i]) 를 쓰지 않아도 된다. 
    
    // k는 mutable 지역변수
    
    const stack = []
    
    // number를 왼쪽부터 순회하며 숫자를 stack 에 넣는다.
    // 현재 숫자가 stack의 마지막 숫자보다 크다면, 더 큰 수를 만들 수 있으므로 stack의 마지막 숫자를 제거한다.
    // 제거하고 나면 그 앞의 숫자가 stack의 top이되는데 이것과도 물론 비교한 뒤 현재 숫자가 더 크다면 제거한다.
    // 이 과정을 k가 다 떨어지지않고, 현재 숫자가 더 큰 동안 반복한다.
    
    for (let i=0; i <number.length; i++) {
        while (k > 0 && stack.length >0 && number[i] > stack.at(-1)) {
            stack.pop()
            k--
        }
        
        // 앞의 숫자를 제거했든 안했든, 현재 숫자는 stack에 추가한다.
        // k === 0이 된 이후에도 나머지 숫자들은 결과에 포함되어야 하므로 계속 push 한다.
        stack.push(number[i])
    }
    
    // "98765"처럼 계속 내림차순이거나 "99999"처럼 반복되는 경우,
    // 현재 숫자가 stack의 top보다 커지는 상황이 충분히 나오지 않으면 k가 남을 수 있다.(앞의 숫자를 제거할 기회가 부족함)
    // 이 경우 뒤쪽 숫자부터 남은 k개를 제거해야 가장 큰 수가 된다
    if (k>0) {
        for (let j = 0; j < k; j++) {
            stack.pop()
        }
    }
    return stack.join('')
}

// 정렬X