// 프린터기 세팅하는 느낌
    // AAA -> JAZ
    // 위로 9번 갈건지 반대 방향으로 갈 건지

function solution(name) {
    var answer = 0;
    
    const n = name.length
    
    let minMove = n-1; // 
    
    // console.log('J'.charCodeAt()-'A'.charCodeAt())
    
    // 매번 선택할 때 잡은 기준이 최종적으로도 최솟값이 나올까?
        // 기준1) 그냥 매번 가까운데로 가기 (X)
        // ex.BBABAAAABA
        // 0 -> 1 -> 3 -> 8 : 8회이동
        // 0 -> 8 -> 1 -> 3 : 7회 이동
        // 기준2) 전체이동경로 고려
            // 이동 경로를 먼저 짜야되나?
            // 
    
    
    // 반복문 : 문자열 각각만큼 조정
    
    
    // 1. 각 알파벳에서 고려할 사항
        // 아래로 내리는 게 빠를지 올리는게 빠를지 절댓값 계산 필요
        // 단, 가장 가까운걸
    
    // 2. 알파벳 하나를 완성 후 고려할 사항 (큰 반복문) 
        // 바꿔야하는 문자를
        // 다음 target으로 갈 때 왼쪽으로 가는 게 빠를 지 오른쪽으로 가는게 빠를지 고민해야함
        // 각 문자의 '위치'를 선택하는 게 아니라, 어느 지점에서 가던방향으로 갈지말지를 생각
        // -> <-
        // <- ->
    
    // 어디까지 갔다가 돌아올지 여러 경우를 계산해 최소 이동 횟수를 찾기
    // 오른쪽으로 우선 이동한다고 생각하고, for 반복문을써서 i(인덱스)를 늘려가며,
    // 현재 인덱스가 i일때 그 뒤에서 처음으로 A 가 아닌 문자가 등장하는 인덱스를 next에 저장
    for (let i = 0; i<name.length; i++) {
        
        // 알파벳 상하 이동은 미리 answer에 그때 그때 저장
        const diff = name.charCodeAt(i) - 'A'.charCodeAt(0)
        answer += Math.min(diff, 26-diff)
        
        // i에서 다음으로 A가 아닌 문자가 있는 위치 찾아 next에 저장
        let next = i+1
        // 이미 'A'가 아니면 while문이 실행되지않고,
        // 'A'가 있었으면 마지막 연속'A'의 다음 인덱스가 next가 저장됨
        while (next < name.length && name[next]==='A') {
            next++
        }
        
        // 오른쪽으로 갔다가 돌아오는데 몇 번 조작해야하는지
        // 0 -> i -> 0 (i 두번) + 거꾸로
        const rightFirst = i*2 + (n -next)
        
        // 왼쪽으로 갔다가 돌아오는데 몇 번 조작해야하는지
        // 0 -> next -> 0 ( n-next를 두번) + i
        const leftFirst = (n - next)*2 + i
        
        minMove = Math.min(minMove, rightFirst,leftFirst)
    }
    
    
    
    
    return answer+minMove;
}

// 

// JEROEN -> 56 
// Greedy : 반드시 순서대로 해야할까?
    // 순서대로 하니씩 하는게 최선이며 미래에 영향을 안 미칠까? 


// JAN
// 9 + 1 + 13