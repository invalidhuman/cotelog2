function solution(brown, yellow) {
    var answer = [];
    
    // n*m을 모름 n>m
    // 24,24 케이스까지 그려보면, 노란색이 '가운데'라는 건 테두리빼고 전부임 
    
    // 그래프가 주어지는 게 아니라 역으로 그래프를 추적한다?
    
    // 일단 brown을 안다는건, 대충 테두리 예측 가능 
    // 그리고 n*m = brown + yellow 일 수 밖에 없다.
    
    // yellow = (n-2)*(m-2)
    // brown = 4 + 2(n-2) + 2(m-2)

    // n>=m이면서 n*m
    
    const mul = brown + yellow
    let m = 1
    let n = mul / m
    
    
    // m이 작은거니까 1부터 시작해서 m을 키워가며 (n을 낮춰가며 풀이)
    while (m<=n) {
        if (mul % m == 0) { // 약수인지 확인. 아니면 할필요가없음
            const n = mul / m
         
            // if (n <=2) { // 이러면 가운데 남는게없어짐. yellow는 1이상이랬으니 
            //     continue
            // } // yellow가 1이상이니 n은 3이상이겠네
            
            if ((n-2)*(m-2)===yellow) {
                return [n,m]
            }
            
        }
        
        m++
    }
    
    
    
    
    
    
    return answer;
}