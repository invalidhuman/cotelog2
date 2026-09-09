/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var permute = function(nums) {
    var answer = []

    // nums의 모든 원소가 서로 다르고, 모든 원소를 한 번씩 사용한
    // 길이 n의 순열을 구하므로 결과는 총 n!개다.

    // 순열은 이전에 선택한 원소를 다시 선택할 수 없지만,
    // 같은 원소로 구성되어도 순서가 다르면 서로 다른 경우이다.

    // 각각의 경우를 배열로 만들어 answer 배열에 넣어준다.
    var arr = []

    // 하나의 순열 안에서 같은 원소를 두 번 선택하지 않도록
    // 현재 탐색 경로에서 사용한 인덱스를 기록한다.
    const visited = Array(nums.length).fill(false)

    function dfs() {
        if (arr.length === nums.length) {
            answer.push([...arr]) // 완성된 순열의 현재 상태를 복사해서 저장한다.
            return
        }

        for (let next = 0; next < nums.length; next++) {
            if (visited[next]) continue

            arr.push(nums[next])
            visited[next] = true

            dfs()

            arr.pop()
            visited[next] = false
        }

        // [1, 2, 3]을 answer에 저장하고 돌아오면
        // 3을 arr에서 제거하고 방문 상태를 해제한다.
        // 현재 깊이의 반복문을 계속 진행해 다른 원소를 선택하고,
        // 선택지가 끝나면 이전 깊이로 돌아가 같은 과정을 반복한다.
    }

    dfs()

    return answer
};
