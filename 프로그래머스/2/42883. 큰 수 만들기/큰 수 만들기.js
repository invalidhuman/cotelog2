function solution(number, k) {
    var answer = '';
    
    console.log(typeof number) // number는 문자열로 주어짐
    
    console.log(number[1] < number[2]) // 문자끼리도 숫자하나로 이루어진 거면 정상적인 정수 비교 가능
    
    // k는 mutable 지역변수
    
    const stack = []
    
    // stack 을 활용해서 number에 있는 숫자들을 하나씩 넣는데,
    // 기본적으로는 계속 append 하지만,
    // 가장 마지막에 들어온 숫자만 다음 인덱스랑 매번 비교해서 더 큰게 있으면 바꿔치기 된다.
    // 바꿔치기가 일어날때마다 k를 줄이면 길이도 신경안써도될 
    
    for (let i =0; i <number.length; i++) {
        while (k > 0 && stack.length >0 && number[i] > stack.at(-1)) {
            stack.pop()
            k--
        }
        
        // 제거를 할 때도, 제거하고나서 해당 인덱스를 채워야하고
        // 제거를 안할 때도 다음에 제거될 수 있게 채워놔야하고
        // k가 0이어서 while 이 앞으로 실행안되도, for문에 의해 나머지애들은 추가해줘야함
        stack.push(number[i])
    }
    
    if (k>0) {
        for (let j = 0; j < k; j++) {
            stack.pop()
        }
    }
    
    return stack.join('')
}

// 정렬X