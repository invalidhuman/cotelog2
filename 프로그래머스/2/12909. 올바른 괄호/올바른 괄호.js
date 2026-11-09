// ((( )))
// 반복문
// ( 가 들어오면
// [ '(' ]

    // ) 가들어오면 pop []
    //  [ '(',')' ] 가 아니라.
    
    // ( 가 들어오면 [ '(','(' ]

// 결국 뭐가 들어오든 현재 stack의 top과 비교
    // top : (
        // input : ( -> push
        // input : ) -> pop.

    // top : )
        // input : '(' ->

// 아무것도 없는데 '(' 가 들어오면 그냥 바로 false

// stack이 남이있으면 false

function solution(s){
    var answer = false;
    
    const stack = []
    
    for (const letter of s) {
        if (letter === '(') {
            stack.push(letter)
        } else { // letter = ')'
            if (stack.length ===0) {
                return false   
            } else {
                stack.pop()  
            }      
        }
    }
    
    if (stack.length === 0) answer = true
    
    return answer;
}