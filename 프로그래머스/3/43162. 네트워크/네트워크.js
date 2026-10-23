// A- B 직접연결 B-C
// A와 C도 '같은 네트워크' (네트워크 1개)

// computers.length 도 n과같음. 컴퓨터개수만큼 연결정보가 필요함 

// 1 1 0
// 1 1 0
// 0 0 1
// 네트워크 2개

// 1 1 0
// 1 1 1
// 0 1 1
// 네트워크 1개

// 1 1 0 0
// 1 1 1 0
// 0 1 1 0
// 0 0 0 1
// 네트워크 2개

// 1 1 0 1
// 1 1 1 0
// 0 1 1 0
// 1 0 0 1
// 탐색 순서 : (1에서 첫 dfs시작) 2->3 = 1개 -> 다시 1행으로 돌아옴(아직 첫 dfs)-> 4  다 방문했으니 1개로 끝.

// 1 0 0 0
// 0 1 0 0
// 0 0 1 0
// 0 0 0 1
// // 4개


// 네트워크를 n개부터 시작해서 줄여야할까?
// n : 1~200 -> computers 행도 1~200개

function solution(n, computers) {
    var answer = 0;
    
    const visited = Array(n).fill(false)
    
    function dfs(i) {
        visited[i] = true
        
        for (let j = 0; j < n; j++) {
            if (!visited[j] && computers[i][j] === 1) {
                dfs(j)
            }
        }
    }
    
    for (let i = 0; i< n; i++) {
        if (!visited[i]) {
            dfs(i)
            answer++
        }    
    }
    

    
    // 행을 돌면서 연결여부확인
    // visited?
    // 각 행 번호가 각 컴퓨터 번호
    
    // computers[i][j] === 1 이면 i와 j는 연결됨
    
    // 한 번돌고 나서 다음은? 중복되지 않게하려면?
    // -> 꼭 행 순서대로 탐색하는 게 아니라, 연결된거끼리 어디까지 연결되있는지 끝까지확인
    // 그리고 나서 다음 행을 가야함. 이 때 중복으로 하지않게 visited에 기록해서 앞에서 타고가다가 만난 노드는 건너뛸 수 있게
    // 그리고 한 번의 탐색이 끝나면 그제서야 answer++
    
    
    
    return answer;
}