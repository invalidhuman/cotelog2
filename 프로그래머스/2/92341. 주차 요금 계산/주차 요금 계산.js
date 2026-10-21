// for문을 돌면서 차량번호별로 입차시각과 출차시각을 Map에 저장
// Map 차량번호 : [입차,출차] 
// or 입차 입력 후 출차가 오면 뺄셈해서 시간을 기록
// 중복일 경우를 대비해서 IN은 -로 기록

// 최종적으로 다 기록을 먼저 한 뒤,
// 마지막이 'IN'인건 없는지 검사 -> 23:59를 더한다
// 기본 시간보다 작은지를 검사
// 23:59 - 18:59 = 5시간 -> 300

function solution(fees, records) {
    const answer = []
    const recordMap = new Map()
    
    // 1. records에 있는 기록들을 Map에 누적
    for (const record of records) {
        const [timeStr,car,type] = record.split(' ')
        const [h,m] = timeStr.split(":").map(Number)
        
        let time = h*60 + m
        time = type === 'IN' ? -time : time
        
        // undefined일 때 0을 반환하도록 ?? 연산자 사용
        recordMap.set(car, (recordMap.get(car) ?? 0) + time)
        // ??는 원랜 null, undefined 둘 다에 해당하는 연산.
    }
    
    // 정렬. key들만 가져와서 배열로 만든 후 오름차순 정렬
    const sortedCars = [...recordMap.keys()].sort()
    
    // 정렬된 차들 순서대로 반복하며 Map에 접근하여 요금계산
    for (const car of sortedCars) {
        let total = recordMap.get(car)
        
        // 값이 0미만이면 입차기록만있었다는 뜻. 
        // 0이면 00:00에 입차한 입차기록만 있었다는 뜻.
        if (total <= 0) {
            total += 23*60 + 59
        }
        console.log(total)
        
        const exceedTime = Math.max(total - fees[0], 0)
        const exceedFee = fees[1] + Math.ceil(exceedTime / fees[2]) * fees[3]

        answer.push(exceedFee)
    }
    
    
    
    
    return answer
}

// fees : 요금표
// records : 입차기록, 출차기록 배열
// 첫 번째 예시기준
// <=180분 : 5000원
// >180분에서 10분추가시마다 600원인데 올림으로 계산
// ex. 초과시간 / 단위 시간
// = 181 - 180 / 10 = 1 / 10 으로 안나눠떨어지니 0.1을 올림해서 1


// [V] 출차를 안하는 경우가 있나?
// [V] 근데 차량번호대로 정렬해야함
    // Map을 쓸거니 Map에 일단 저장해두고,
    // 차량들을 정렬해둔 배열을 써서 그 순서대로 Map을 다시 확인
