

// cacheSize 0이면 -> 그냥 5 x length
// cacheSize만큼 캐시를 관리할 배열의 크기 지정

// 반복문 cities
    
    // 배열에 추가할지말지 판단
    // cachehit냐 miss냐에따라 answer ++

function solution(cacheSize, cities) {
    var answer = 0;
    
    if (cacheSize === 0) return 5 * cities.length
    
    const cache = [] // 캐시를 Queue처럼 다루는 것이 좋아보임
    
    for (const city of cities) {
        const name = city.toLowerCase()
        const idx = cache.indexOf(name)
        
        // cache Hit
        if (idx !== -1) { // indexOf에 의해 없으면 -1반환
            answer++
            // ["A","B"] 에서 "A"면 ["B","A"] 가 된다.
            // ["A","B","C"] 에서 "A" 면  ["B","C","A"]
            // ["A","B","C"] 에서 "C" 면  ["A","B","C"]
            // ["A","B","C"] 에서 "B" 면 ["A","C","B"]
            cache.splice(idx,1) // idx를 시작으로 1개제거
            cache.push(name)
            
        } else { // cache miss
            answer +=5
            // ["A","B"] 에서 "C"면 ["A","B","C"]
            // ["A","B","C"] 에서 "D" 면  ["B","C","D"]
            
            if (cache.length === cacheSize) {
                cache.shift()
            }
            
            cache.push(name) // lower 해논걸로 push

        }
        
    }
    
    return answer;
}

// return 총 실행시간 (LRU 로 cities 배열의 도시를 순서대로처리시)
// cities : 도시배열. 중복가능. 대소문자구분X, 공백X, 숫자X