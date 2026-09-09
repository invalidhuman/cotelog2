function solution(numbers) {
    var answer = 0;
    
    function isPrime(num) {
        if (num < 2) return false
        
        const sqrt = Math.sqrt(num)
        
        for (let i = 2; i <= sqrt; i++) {
            if (num % i === 0) return false
        }
        
        return true
    }
    
    const nums = numbers.split("")
    const visited = Array(nums.length).fill(false)
    
    // 배열이라고 생각하고, dfs 내 for문을 이용해 합쳐가며 검사한다.
    // 순열 문제와 달리, 다 붙이고 검사하는 게 아니라 매번 검사한다.
    // isprime을 내부적으로 검사해서 true일때마다 answer++
    var result = []
    const primes = new Set()
    
    function dfs() {

        var candidate = parseInt(result.join(''))
        if (result.length > 0) {
            
        
            if (isPrime(candidate)) {
                console.log(parseInt(result.join('')))
                
                if (!primes.has(candidate)) {
                    answer++
                    primes.add(candidate)
                }

                // 여기서 return 하면 추가적인 소수를 알 수 없게됨
                // ex. 13이 소수인데 131도 소수임
            } 
        }
        
        if (result.length === nums.length) {
            return
        }
        
        for (let i = 0; i< nums.length; i++) {
            if (visited[i]) continue
            
            result.push(nums[i])
            visited[i] = true
            
            dfs()
            
            result.pop()
            visited[i] = false
        }
    }
    
    
    dfs()
    
    return answer;
}