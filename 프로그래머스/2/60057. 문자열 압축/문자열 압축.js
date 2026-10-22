// 문자열에서 같은 값이 계속 나타나는 걸 숫자로
// aabbaccc
// 2a2ba3c 
// 1개일 때는 변화 X
// 2개 단위 압축
// ababcdcdcd -> 2ab3cd

// 1개단위, 2개단위, 3개단위로 압축해보고 그 결과의 길이들을 저장
// 그 중 가장 짧은 거 return
function solution(s) {
    var answer = 0;
    
    let shortest = s.length // 원본길이보다 길진않을테니
    
    for (let size = 1; size <= Math.floor(s.length/2); size++) {
        const chunks = []
   
        for (let i = 0; i < s.length; i+=size) {
            chunks.push(s.slice(i,i+size))
        }

        // chunks를 순회 
        let prev = "";
        let count = 1
        let result = ""

        // 앞 chunk와 비교해서 같으면 count를 늘리고, 
        // 달라지면 기존까지의 count를초기화하고, result에 더한다.
        // 달라지지않아도 마지막일 경우에도 해줘야함
        for (const chunk of chunks) {
            if (prev === chunk) {
                count++
            } else { 
                // 초기상태만 아니면
                if (prev !== "") {
                    // 지금 chunk말고 기존까지의 chunk들을 암축해서 추가
                    result += count === 1 ? prev : count.toString() + prev
                }

                prev = chunk
                count = 1    
            }
        }

        // 마지막이 dedede같은걸로 끝난 경우 count가 남아있을 
        result += count === 1 ? prev: count.toString() + prev
        shortest = Math.min(shortest,result.length)
    }
    
    // 반복될 변수를 담을 변수
    
    // 단위를 늘려가며 검사
    // 매번 뭉치를 초기화
    
    // aabbaccc
    // 1개단위 -> 2a2ba3c
    // 2개단위 -> aabbaccc
    
    // shortest = Math.min(shorted, result)
    return shortest;
}
// 2개 단위라고 해서 2개씩 건너뛰는 건가?
    // a
    // ab
    // a 'ba'도 검사해야할까?
// 원문에는 없는데 예제5에서 제일 앞부터 정해진 길이만큼 자르라고했으므로 
// xababcdcd를 단위 2로 자른다고 했을 때 x2ab2cd 가 되진 않는듯
// 즉, 아래와같이 보는 것이 아니라,
// xa
//  ab
//   ba

// 다음과 같이 분할한다.
// xa
//   ba
//     bc