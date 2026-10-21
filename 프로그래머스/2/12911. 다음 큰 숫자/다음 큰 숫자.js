function solution(n) {
    var answer = 0;
    
    let onesSum = n.toString(2).split('').filter((x)=> x=== '1').length
    
    while (true) {
        n++
        let nextSum = [...n.toString(2)].filter((x)=> x=== '1').length
        
        if (nextSum === onesSum) {
            return n
        }
        
    }
}