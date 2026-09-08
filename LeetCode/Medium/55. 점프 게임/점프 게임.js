/**
 * @param {number[]} nums
 * @return {boolean}
 */
var canJump = function(nums) {

    var answer = false

    let idx = 0

    const visited = Array(nums.length).fill(false)

    function dfs(current) {
        // 바로 갈 수 있는지 체크
        if (current+nums[current] >= nums.length-1) {
            answer = true
            return
        }

        if (nums[current]===0) {
            visited[current] = true
            return
        }

        visited[current] = true

        // 지금 인덱스의 값을 가지고 가장 멀리부터 시도
        for (let next = nums[current]; next > 0; next--) {
            if (!visited[current+next]) dfs(current+next)
        }
    }

    dfs(0)

    return answer
};
