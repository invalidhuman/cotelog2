function solution(players, callings) {
    var answer = [];
    
    const playerMap = new Map();
    
    // indexOf를 써도 O(N)이긴함
    for (let i = 0; i< players.length; i++) {
         playerMap.set(players[i],i)
    }
    
    // 불린애들 횟수를 저장해두고,
    // 안불린애들은 0일테니
    // 안불린애들 중 불린애들과 비교해서 더 상위권이면 내려야하나?
    
    for (let j = 0; j < callings.length; j++) {
        // 현재 선수 인덱스
        const idx = playerMap.get(callings[j])
        
        // swap
        var temp = players[idx-1]
        players[idx-1] = players[idx]
        players[idx] = temp
        
        // Map에도 수정
        playerMap.set(players[idx-1],idx-1)
        playerMap.set(players[idx],idx)
    }
    
    
    return players;
}