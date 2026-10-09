function solution(bandage, health, attacks) {
    var answer = 0;
    // bandage = [시전시간, 1초당회복량x, 추가회복량]
    const [t,x,y] = bandage
    // 붕대를 몇초동안 감을지(t)
    // 감는동안(t) 1초 당 얼마나 회복할지(x)
    // 안끊기면 +y 더 회복
    
    // 시작하자마자 스킬을 쓰는데, 
    // 공격받을 시 회복중이었으면 멈추고, 피해까지입음
    

    // 최대체력 (health)고려

    // [1, 1, 1]	5	[[1, 2], [3, 2]]	3
    
    // 연속 성공 시간 여부
    var current = health
    var sucess = 0 // 점점 늘리가면서 t와 비교
    const fin = attacks.at(-1)[0]
    console.log(fin)
    
    let j = 0
    
    // 마지막 공격시간 기준으로 반복
    for (let i = 1; i<= fin; i++) {     
        // 이미 0이하이면 초가 다안끝나도 종료 해야함
        if (current < 0) {
            break
        }
        
        
        
        // 공격당하는 순간이면
        if (i === attacks[j][0]) {
            const damage = attacks[j][1]
            // 체력깎기
            current -= damage
            
            // 연속 초기화
            sucess = 0
            
            // 다음 공격 인덱스
            j++
            continue
        }
        
        // 차례가 되자마자 일단 success를 올려줘야함
        sucess++
        
        // 공격아님 && t초 연속 성공일 경우
        if (sucess === t) {
            // 최댓값 혹은 현재 + y
            current = Math.min(current+x+y,health)
            
            sucess = 0
            continue
        } 
        
        // 공격아님 && 일반적인 경우
        current = Math.min(current+x,health)

        

    }
    
    return current > 0 ? current : -1;
}


