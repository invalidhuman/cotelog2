// k : 상자 하나에 판매하고싶은 귤 수 
// '서로 다른 종류의 수' 최소화
// tangerine  = [1,3,2,5,4,5,2,3]
// tangerine 종류가 천만 -> Map만드는데 O(N)

// Map을 만든다
// greedy : 현재 선택을 반복해도 최종적으로 최선일까? 미래엔 불리해지는 거아냐?
    // 정렬을 하면 간단해지나?

// 숫자끼리 가까운 것도 안되고 그냥최대한 다른 게 적기만하면 됨
// 다른 게 적다 = 같은게 많다. [1,1,1,1,5,5]이런식이면 종류가 2가지

// 사실상 각각의 '크기'는 연산에 쓰이지않음. 그냥 key일뿐. 

function solution(k, tangerine) {
    
    const countMap = new Map()
    
    // 배열로 돈다.
    
    for (const key of tangerine) { // 결국 key가 될거니까.
        // 해당 key가 등장할 때마다 ++
        countMap.set(key, (countMap.get(key) ?? 0) + 1) // 없었으면 0에다가 +1
    }
    
    // Map에 개수를 넣어놨으니, map을 다시 접근해서 count대로 정렬하기
    const arr = [...countMap.values()].sort((a,b)=>(b-a))
    // 내림차순 정렬되었으니 앞에서부터 k를 빼면서 count 세기
    
    let result = 0
    
    for (const count of arr) {
        if (k <=0) break
        k -= count // count가 k보다 클 경우 그냥 빼면 음수가됨
        result++
    }

    
    
    return result;
    // return 서로 다른 종류의 수의 최솟값
}

// 미리 개수를 세야하나? 
// 1 : 1
// 2 : 2
// 3 : 2
// 4 : 1
// 5 : 2
// 이러면 가장 적은게 1,4이고, 동일하게 많은게 2,3,5 -> 마침 k = 6이니 가져오기
// 이러면 답은 '서로 다른 종류의 수'니까 3




// 3:18 시작