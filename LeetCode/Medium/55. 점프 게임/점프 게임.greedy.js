/**
 * @param {number[]} nums
 * @return {boolean}
 */
var canJump = function(nums) {

    var answer = false

    let maxIdx = 0

    // 배열을 순회하며, 현재 인덱스에서 갈 수 있는 가장 먼 거리를 갱신한다.
    // 이때 자기 인덱스 + 해당 요소를 더하면 자기 인덱스가 곧 위치이므로 그 인덱스에서 한 번에 점프할 수 있는 최대거리가 된다.
    // 이는 결국 어떤 방법으로든 i에 도착하면 무조건 i+nums[i]까지는 갈 수 있다는 의미가 되고,
    // i + nums[i]가 nums.length-1 이상이 되는 순간이 한 번이라도 있으면 true다.

    // 어쩌면 뒤에 있는 것보다 앞에 있는 것이 더 멀리 갈 수 있을 수도 있기 때문
    if (nums.length === 1) return true

    for (let i = 0; i < nums.length-1; i++) { // 마지막 인덱스에서는 더하면 안됨. 어차피 마지막인덱스는 값이 뭐든 상관없음
        if (maxIdx < i) break // 집계된 갈 수 있는 최대인덱스가 현재 탐색 중인 인덱스까지 도달하지를 못한다면, 그 이후에도 끝에 닿지 못하므로 바로 종료. 최댓값을 갱신하는 절차도 필요없음

        maxIdx = Math.max(maxIdx,i+nums[i])
        if (maxIdx >= nums.length-1) return true
    }

    return answer

};
// 경계 살피기
// nums.length == 1 인 경우는 for문을 아예돌지않으니 예외 처리
// [0], [1]은 무조건 통과

// 중간에라도 더 이상갈 수 없는 경우가 생기면 막아야함
// ex. [0,2,3] 이면 0에서 애초에 갈 수가 없고,
// ex. [1,2,3,2,0,0,0,0,0,0,0,4,4] 면 len-1에서 4니까 i+nums[i]가 length-1보다 크니 성립하게되버림
// 이런 경우를 막으려면, 일단 앞 인덱스에서 i+nums[i]로 올 수 있는 지를 검사해야함
