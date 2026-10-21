function solution(n) {
    var answer = 0;
    
    const binary = '0' + n.toString(2)
    
    // 문자열의 뒤에서부터 '01'이 어디있는지 찾는다.
    const idx = binary.lastIndexOf('01')
    
    // 처음부터 '01'의 바로 앞까지
    const front = binary.slice(0,idx)
    // '01'의 뒤부터 끝까지
    const rest = binary.slice(idx+2)
    
    // '01' 뒤에 있는 것중 1의 개수
    // '1'로 split하면 '1'이 칸막이 역할이므로 요소개수 - 1이 칸막이개수
    const ones = rest.split("1").length - 1 
    // '01' 뒤에 있는 것중 1의 개수.
    const zeros = rest.length - ones
    
    const next = front + '10' + '0'.repeat(zeros) + '1'.repeat(ones)
    
    return parseInt(next,2)
}

// 이진수의 특성을 이용, +1했을 때
// 00 -> 01, 10 -> 11 같이 1 증가
// *01 -> 10이 되어 유지
// 11, 111, 같은게 올림되어 n개가 감소

// 고로, 이진수에서 01을 찾되, 
// (1) 가장 뒤에 있는 '01'을 찾아 '10'으로 바꾸고,
// (2) 그 찾은 '01' 뒤에도 '1'들이 있다면 뒤로 다 붙여버린다.