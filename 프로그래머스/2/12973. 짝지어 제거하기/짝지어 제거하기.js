function solution(s) {
    
    const stack = [];
    
    for (const char of s) {
        if (stack.length > 0 && stack.at(-1) === char) {
            stack.pop()
        } else {
            stack.push(char)
        }
        
    }

    return stack.length > 0 ? 0 : 1
}
// baabaa -> 1
// aa를 찾으면 그 둘을 제거
// 다시 붙이면 bbaa
// 다시 앞에서부터 bb제거
// aa남음

// 반복문을 써서 하나씩 순회
