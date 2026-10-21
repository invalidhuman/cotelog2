// for문을 돌면서 차량번호별로 입차시각과 출차시각을 Map에 저장
// Map 차량번호 : [입차,출차] 
// or 입차 입력 후 출차가 오면 뺄셈해서 시간을 기록
// 중복일 경우를 대비해서 IN은 -로 기록

// 최종적으로 다 기록을 먼저 한 뒤,
// 마지막이 'IN'인건 없는지 검사 -> 23:59를 더한다
// 기본 시간보다 작은지를 검사

// 23:59 - 18:59 = 5시간 -> 300

// Map을 하나씩 돌면서 answer에 결과를 추가



function solution(fees, records) {
    var answer = []
    
    // records[i] = "05:34 5961 IN"
    // "06:34 0000 OUT"
    // split해서 Map에 저장
    // [time, car, in] = 
    const recordMap = new Map();
    
    const resultMap = new Map();
    
    for (const record of records) {
        const [time1,car,kind] = record.split(' ')
        
        resultMap.set(car,0)
        
        const [m,s] = time1.split(':').map(Number)
        let time = m*60 + s
        time = kind==='IN' ? time*(-1) : time
        console.log('time:',time)
        
        if (recordMap.has(car)) {
            recordMap.set(car,recordMap.get(car)+time)
        } else {
            recordMap.set(car, time)
        }
    }
    
    const sortedCars = [...recordMap.keys()].sort()
    
    // IN으로 끝난다는건, 음수가 저장됐다는것.
    // 입 출 입 -> '입 출'의 결과보다는 무조건 마지막 '입'이 더 클 수밖에없다.
    for (const [key,value] of recordMap) {
        
        
        if (value <= 0) {
            recordMap.set(key, value + 23*60 + 59)
        }
        
        let newval = recordMap.get(key)

        const exceedFee = Math.ceil(Math.max(newval-fees[0],0)/fees[2])
        
        const result = fees[1] + exceedFee*fees[3]
        console.log(result)
        // fee : 180, 5000, 10, 600
        resultMap.set(key,result)
    }
    

    
    for (const car of sortedCars) {
        const result = resultMap.get(car)
        
        answer.push(result)
    }
    
    return answer
}

// 요금표, 입차기록, 출차기록
// <=180분 : 5000원
// >180분에서 10분추가시마다 600원


// [V] 출차를 안하는 경우가 있나?
// [ ] 근데 차량번호대로 정렬해야함
    // 차량번호 순서를 담은 배열이나 Map이 필요