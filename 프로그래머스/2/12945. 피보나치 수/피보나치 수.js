function solution(n) {
    // const fib = [0,1]
    const fib = Array(n).fill(0)
    
    fib[0] = 0
    fib[1] = 1
    
    for (let i = 2; i<=n; i++) {
        
        fib[i] = (fib[i-1] % 1234567 + fib[i-2] % 1324567) % 1234567
    }
    
    return fib[n]
}