function solution(players, callings) {
    const playerMap = new Map();
    
    for (let i = 0; i < players.length; i++) {
        playerMap.set(players[i],i)
    }

    for (let i = 0; i < callings.length; i++) {
        const idx = playerMap.get(callings[i])
        const temp = players[idx-1]
      
        // swap
        players[idx-1] = callings[i];
        players[idx] = temp;
      
        // map의 idx도 갱신
        playerMap.set(callings[i], idx - 1)
        playerMap.set(temp,idx)
    }
    
    return players;
}