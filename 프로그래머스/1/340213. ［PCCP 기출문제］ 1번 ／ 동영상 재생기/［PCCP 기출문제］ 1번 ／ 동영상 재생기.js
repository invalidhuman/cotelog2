// 총길이, 직전 재생위치들[], '오프닝' 시작시간, '오프닝' 종료시간, 입력한명령
function solution(video_len, pos, op_start, op_end, commands) {
    var answer = ''
    
    const video_len_sec = Number(video_len.slice(0,2)) * 60 + Number(video_len.slice(3,5))
    console.log(video_len_sec)
    
    const pos_sec = Number(pos.slice(0,2)) * 60 + Number(pos.slice(3,5))
    console.log(pos_sec)
    

    const op_start_sec = Number(op_start.slice(0,2)) * 60 + Number(op_start.slice(3,5))
    console.log(op_start_sec)
    
    console.log('op_end의 앞',Number(op_end.slice(0,2))*60)
    console.log('op_end의 뒤',Number(op_end.slice(3)))
    var op_end_sec = Number(op_end.slice(0,2)) * 60
    op_end_sec += Number(op_end.slice(3))

    var result = pos_sec
    
    // 시작 전부터 걸릴 수 있으니 미리 한 번 처리
    if (op_start_sec <= pos_sec && pos_sec <= op_end_sec) {
        result = op_end_sec
    }

    for (const command of commands) {
        if (command === "prev") {
            result = Math.max(0,result-10)
            
            
        } else { // next
            result = Math.min(video_len_sec, result + 10)
        }

        
        // 명령 이후 오프닝 시간에 겹치면 오프닝이 끝나는 위치에 있게 해야함
        if (op_start_sec <= result && result <= op_end_sec) {
            result = op_end_sec
        }
        
        
    }
    
    const min = Math.floor(result / 60)
    const sec = result % 60
    
    const min_str = min.toString().padStart(2, "0")
    const sec_str = sec.toString().padStart(2, "0")
    
    answer = min_str + ":" + sec_str
    
    return answer;
}

// 한 테스트케이스에 한 영상에 대한 정보 4가지와 그 영상에 대해 사용자가 입력한 명령들 배열
// 0분 0초에서시작
// 10초전, 10초 후, '오프닝'건너뛰기
// prev   "next"   ""