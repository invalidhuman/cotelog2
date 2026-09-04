function solution(begin, target, words) {
    var answer = 0;
    
    // words 안에 target이 없는 경우는 바로 return 0
    if (!words.includes(target)) return 0
    
    
    const queue = []
    queue.push([begin,0])
    let front = 0
    
    // 모든 단어의 길이가 동일
    
    // words에 대해 반복하지만, 앞에 것도갈수있음
    // 하지만 간건 또가면 안되니 방문 배열 필요
    
    const visited = Array(words.length).fill(false)
    
    // 정확히 한 문자만 다른지 알아내는 함수
    function isDiffOneLetter(word1, word2) {
        // 다른 문자의 개수를 세서, 최종적으로 count===1 인지본다.
        // 아니면 같은 문자의 개수를 세서, word1.length - 1 과 같은지를 본다.
        let count = 0 // 다른 문자 개수 세기
        
        for (let i = 0; i< word1.length; i++) {
            
            if (word1[i]!==word2[i]) {
                count++
            }
            
            if (count > 1) {
                return false
            }
        }
        
        return count ===1
    }
    
    while (front < queue.length) {
        const [word,step] = queue[front++] 
        
        if (word===target) {
            answer = step
            break
        }
        
        // 그럼 각 경우의 수에 대해 몇 단계가지 간 건지 같이 저장
        for (let i = 0; i < words.length; i++) {
            // 알파벳 하나만 차이나면서 visited false인거 찾기
            
            if (!visited[i] && isDiffOneLetter(word,words[i])) {
                queue.push([words[i],step+1])
                visited[i] = true
            }
        }
        
    }
    
    
    return answer;
}