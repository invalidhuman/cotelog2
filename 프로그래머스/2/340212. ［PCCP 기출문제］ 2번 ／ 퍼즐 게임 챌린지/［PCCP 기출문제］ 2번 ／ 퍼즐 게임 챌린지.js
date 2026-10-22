// 3 > level(1) : 3-1 = 2번틀림
//     틀린 것도 시도한것이니 2 + 
//     앞문제 다시 푸는데 4 = 6 사용
//     다시푸는데 2
    
//     그 문제를 2번 * 6 + 세번째에 2써서 해결 = 14
    
//     3 > level(2) : 3-2 = 1번틀림
//     (2 + 4) * 1 + 2 = 8 사용
    
//     3 >= 3 : 2사용


// return 숙련도의 최솟값. 
// 퍼즐이 n개. 
// n개 퍼즐의 난이도를 순서대로 담은 diffs
// n개 퍼즐의 소요시간을 순서대로 담은 times
// 제한 시간 limit

// 난이도<=숙련도(level) : 현재퍼즐의소요시간(time_cur) 시간 사용
// 난이도 > level : 
// 퍼즐을 틀릴때마다 time_cur 만큼의 시간을 사용
// time_prev만큼의 시간을 사용해 이전 퍼즐 다시풀지만, 틀리지않음


function solution(diffs, times, limit) {
    var answer = 0;
    
    const n = diffs.length
    
    // Math.min을 구해야하니 level을 점점 낮춰가는 게 좋을듯
    // level의 시작점은 최댓값부터.
    
    const minlevel = 0
    
    // const maxdiff = Math.max(...diffs)
    let maxdiff = 0
    
    for (let i = 0; i<n;i++) {
        maxdiff = Math.max(maxdiff,diffs[i])
    }
    
    let left = 1
    let mid = Math.floor((1 + maxdiff) / 2)
    let right = maxdiff
    
    
    while (left <= right) {
        const level = Math.floor((left + right) / 2);
        
        let time = 0 // 흐른시간 초기화
        
        // 해당 level에 대해 각 문제를 푸는데 걸리는 시간을 체크
        for (let i = 0; i< n; i++) {
            
            
            const diff = diffs[i]
            const time_cur = times[i]

            // 맨 앞의 퍼즐인 경우 0
            const time_prev = i === 0 ? 0 : times[i-1]
            
            // 시간 누적
            if (diff > level) {
                const add = (diff - level) * (time_prev+time_cur) + time_cur
                time += add
            } else {
                time += time_cur
            }
            
            // 다 해보기도 전에 limit을 넘으면 break
            if (time > limit) break
        }
        
        // break안되고 모든 문제를 푼 경우
        if (time <= limit) {
            answer = level
            right = level - 1;
        } else { // limit보다 오래걸렸다면 숙련도를 낮춰도 안된다는 것이로 이전에 초기화한 answer가 정답이라는뜻
            left = level + 1;
        }
        
    }
         
    return answer;
}

// 무조건 시간 내에 풀 수 있는 경우만 입력됨
// level 1부터시작하는것도 해보기. 
