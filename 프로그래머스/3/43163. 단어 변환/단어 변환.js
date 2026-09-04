function solution(begin, target, words) {
    var answer = 0;
    
    // begin, target
    
    // 최단거리? 경우의 수?
    
    // 근데 가장짧은 변환 과정을 찾는 거고 그 때마다 값을늘려가면서 해야하니 BFS인듯
    
    // words 안에 있는 단어로만 바꿀 수 있다. 겨룩ㄱ 단어 set까지 다 주어진 셈
    
    // hit -> hot -> dot -> dog -> cog 
    // 그니까 words 안에는 무조건 target이 있다.
    
    // 하지만 words 안에 target이 없는 경우는 바로 return 0
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
        
        // 그냥 어쩔 수 없이 하나씩 돌면서 하나 차이인지 아닌지를 봐야하는건가?
        
        // 그걸 그럼 queue에 넣어야하는이유가뭐지?
        // queue에 넣는 이유는 단순히 그냥 다음으로 진행하기 위함?
        // 아니면 일단 반복문을 돌면서 "현재"기준 하나 차이 나는 단어들을 경우의 수처럼 집어넣기 위해서. 
        // 그럼 각 경우의 수에 대해 몇 단계가지 간 건지 같이 저자앻야함
        for (let i = 0; i < words.length; i++) {
            // 알파벳 하나만 차이나면서 visited false인거 찾기
            
            
            if (!visited[i] && isDiffOneLetter(word,words[i])) {
                queue.push([words[i],step+1])
                visited[i] = true
            }
        }
        
    }

    // 어떻게하면 알파벳 하나 차이라는 걸 감지할 수 있을까?
    // 반복문으로 누적해서 해야하나? 일단 같은 단어는 무조건 아니니까,
    // flag 변수를 써서
    // 1) 하나라도 다른게나오면 true로 했다가
    // 2) 하나더 나오면 바로 false로 바꾸고 return
    // 3) 끝까지 탐색후 return
    
    
    return answer;
}