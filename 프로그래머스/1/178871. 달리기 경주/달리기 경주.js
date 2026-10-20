    // 최초 순위 Map 에 저장

    // 반복문 (호명 처리)
        // 호명된 선수의 인덱스 조회
        // 배열에서 앞 선수와 swap
        // Map에서 두 선수의 인덱스 갱신

    // players반환

function solution(players, callings) {    
    const playersMap = new Map()
    for (let i = 0; i< players.length; i++) {
        playersMap.set(players[i],i)
    }
    
    for (const name of callings) {        
        const idx = playersMap.get(name)
        const prevName = players[idx-1]
        
        players[idx-1] = name;
        players[idx] = prevName
        
        // 반복문안에서 indexOf() 를 쓰면 O(N x M)
        // 미리 Map을 하나 더 만들어서 시간복잡도 개선 O(M + N)
        playersMap.set(name,idx-1)
        playersMap.set(prevName,idx)
    }
    
    
    return players   
}

// return 모든 호명이 끝난 후 선수들의 순위를 배열로
// players : 현재 순위대로 '정렬'된 선수 이름 배열
// callings : 추월에 성공한 선수들의 이름 순서대로. 앞뒤가 바뀌니 순서도 중요
// swap이므로 순위 변화는 다음 호명에 영향을 미친다.
// 1등인 선수는 호명되지 않으므로 맨 앞 사람이 불리는 경우에 대한 예외처리필요X

// indexOf() 쓰면 O(N) * callings M개라고 하면 O(N*M)
// Map을 쓰면 선수 이름으로 순서를 관리가능. 선수 등수 찾는 시간복잡도 O(1)


// 테스트 케이스
// players를 여러 케이스로 둘 필욘없을 거 같다. 중복이 없으니
// callings = ["soe", "mumu"] 인 경우, 2등이 1등이되었다가 다시 2등

// '경주 진행중 1등인 선수의 이름은 불리지 않습니다.'라는데 
// 중간에 1등이 되는 경우조차도 없도록 callings가 주어진다는건가?
// ex. ["soe","soe","soe"] 처럼 처음엔 1등이 아니었지만 중간에 1등이 되는 배열은 주어지지않는건가?
// 결과는 ["soe", "mumu", "poe", "kai", "mine"]