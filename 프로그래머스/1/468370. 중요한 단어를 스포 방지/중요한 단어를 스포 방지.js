function solution(message, spoiler_ranges) {
    var answer = 0;
    // 인덱스 중 하나 이상이 구간에 포함되면, 해당 단어 자체가 스포일러 방지 단어
    // 스포 방지 구간 말고 다른데 등장하는지를 체크해서, answer를 늘리지않아야함
    
    
    // spiler_ranges 반복문을 돌면서 스포방지단어인지파악하기
    
    const wordsArr = message.split(' ')
    
    // 1. 단어별로 각 단어의 구간을 같이 저장한다.
    const wordsRanges = Array(wordsArr.length).fill(0)
    let front = 0
    
    for (let i = 0; i< wordsArr.length; i++) {
        let end = front + wordsArr[i].length -1
        
        wordsRanges[i] = [front,end]
        
        front = end + 2
    }
    
    // 2. 저장된 구간을 하나씩 순회하며, 스포 방지 구간과 겹치는 단어를 저장한다.
    const spoilerWords = new Set()
    const normalWords = new Set()
    // 같은 단어가 여러개 나오는대 하나는 스포구간에 있고 하나는 아닐 수 있는데,
    // 일단 둘 다 저장하면 된다.
    
    // has 조건을 두 Set에 모두 써서 해당조건을 보면되니까.
    
    for (let i = 0; i<wordsArr.length; i++) {
        const start = wordsRanges[i][0]
        const end = wordsRanges[i][1]
        
        // 스포방지 구간 중 하나에 해당 단어가 겹칠 경우
        // 구간에 해당 && 이미 나온 단어나 앞으로 나오는 단어 중 비구간인게 있음 => 중요x
        // 구간에 해당 && 비구간에 중복없음 -> answer++
        let isSpoiler = false
        
        for (const range of spoiler_ranges) {
            if (end >= range[0] && range[1] >= start) {
                isSpoiler = true
                break
            }
        }
        
         if (isSpoiler)   {
            spoilerWords.add(wordsArr[i])
        } else {
            normalWords.add(wordsArr[i]) 
        }
    }
    
    console.log(normalWords)
    console.log(spoilerWords)
    
    // spoilerWords에는 있지만 normalWords에는 없는 단어만을 세기
    // 둘의 개수가 다르긴한데, 그냥 하나 기준잡으면 된다.
    for (const word of spoilerWords) {
        if (!normalWords.has(word)) {
            answer++
        }
    }
    
    
    // 구 : 중요한 단어가 몇 개인지
    return answer; 
}