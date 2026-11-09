function solution(clothes) {
    var answer = 1;
    
    // '종류별' 1가지만 착용
    // 최소 1개는 입음
    
    // clothes 에서 각 종류당 몇 개의 의상이 주어지는 지를 세면 됨
    
    // 1. clothes 를 순회하며 같은 옷 종류가 나올때마다 ++
    const clothesMap = new Map()
    
    for (const [wear,kind] of clothes) {
        clothesMap.set(kind,  clothesMap.get(kind)===undefined ? 1 :clothesMap.get(kind)+1)
    }
    
    console.log(clothesMap)
    
    // 2. 각각을 센 뒤 +1씩 곱하기
    
    for (const [key,value] of clothesMap) {
        answer *= (value+1)
    }
    
    // 3. 결과에서 -1
    answer--
    
    return answer;
}

// ["yellow_hat","headgear"], headgear 1개
// ["blue_sunglasses","eyewear"], eyewear 1개
// ["green_turban","headgear"] headgear 1개
// 총 headgear 2개, eyewear 1개
// headgear에서의 선택지 (1) 이거 안입기, (2) yellowhat (3)green_turban 
// eyewear에서의 선택지 (1) 이거 안입기 (2) blue_sunglasses
// 근데 둘다 안입기 안입기를  하면 안되니까 -1

// 순열조합? 조합 개수
// headgear에서 2개
// eyewear에서 1개
// 경우의수는 각 종류를 안입는 경우 포함해서 (2+1)(1+1)
// 다 안입는 경우 1
// 3*2-1