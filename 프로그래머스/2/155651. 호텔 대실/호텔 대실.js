// 최소한의 개실만으로 손님받기
// 퇴실 + 10분 지나야 다른 손님도 사용가능
// 객실이 충분하면 예약을 다 받을 수있겠지만,
// 적게해도 가능한 경우가있는지를 파악해야함

function solution(book_time) {
    var answer = 0;
    
    let times = [] // book_time 을 숫자로 다 변환한 배열
    
    function transfertime(str) {
        let [h,m] = str.split(":")
        h = parseInt(h) * 60
        m = parseInt(m)
        
        return h+m
    }
    
    // 사전 작업 : 숫자로 바꿔두기
    for (let i = 0; i< book_time.length; i++) {
        const start = transfertime(book_time[i][0])
        const end = transfertime(book_time[i][1])
        
        times.push([start,end])
    }
    // 오름차순 정렬
    times.sort( (a,b) => a[0] - b[0])
    
    // 배열의 각 원소를 비교하며 배치
    const rooms = [  ] // 첫 lane
    
    rooms.push(times[0][1]+10) // 청소까지 끝난시간
    
    // for문을 돌면서 하나씩 추가하되, 기존에 추가된 시간과 비교하여 lane 결정
    // 현재 탐색 중인 idx의 방에서 안되면 다음 인덱스가 있는지탐색
    // 다음인덱스 O 거기서 판단
        // 안되면 또 다음 인덱스
    // 다음인덱스 X -> lane 추가
    for (let i = 1; i < times.length; i++) {
        // 만약 앞에서 안되서 온건데 이게 마지막 인덱스일 경우
        
        // 인덱스의 마지막까지는 가봐야함
        // 그전에 찾으면 break
        let idx = 0
        while (idx < rooms.length) {
            if (rooms[idx] <= times[i][0] ) { // 객실에 여유가 되면 그대로 넣으면 됨
                rooms[idx] = times[i][1]+10
                break
            } else {
                idx++
            }
        }
        
        // 방을 다 돌았는데도 추가되지 못한 경우
        if (idx === rooms.length) {
            rooms.push(times[i][1]+10)
        }
        
        // 미리 times를 정렬해뒀으므로, 객실별로 예약을 추가를 '다음 가능시간 추가'만 하면 된다. 
        
        
    }
    
    
    return rooms.length;
}

// return 최소 객실 수