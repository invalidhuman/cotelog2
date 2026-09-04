function solution(answers) {
    // 3명으로 고정된 수포자, 각자 고정된 찍는 방식이 정해져있음 
    
    const stuA = [1,2,3,4,5]
    const stuB = [2,1,2,3,2,4,2,5]
    const stuC = [3,3,1,1,2,2,4,4,5,5]
    
    let countA = 0
    let countB = 0
    let countC = 0
    
    // 각학생별 패턴을 바탕으로, 반복시켜서 answers와 매칭
    for (let i =0; i< answers.length; i++) {
        if (answers[i]===stuA[i % stuA.length]) countA++;
        if (answers[i]===stuB[i % stuB.length]) countB++;
        if (answers[i]===stuC[i % stuC.length]) countC++;
    }
    
    const records = [countA, countB, countC]
    // console.log('records : ',records) // records : [ 5, 0, 0 ]
    let result = []
    
    const highest = Math.max(...records) // js에서는 그냥 records를 넣지못함
    // console.log('highest : ',highest) // highest : 2
    
    // 같은 경우가 있을 수 있으니 highest와 비교해서 최고점수와 같은 학생들의 인덱스를 모두 배열에 push
    for (let i = 0; i< 3; i++) {
        if (records[i] === highest) result.push(i+1)
    }
    // console.log(result) // [ 1, 2, 3 ]
    
    // 해당 배열을 오름차순 정렬
    result = result.sort((a,b)=>a-b); 
    
    return result
}