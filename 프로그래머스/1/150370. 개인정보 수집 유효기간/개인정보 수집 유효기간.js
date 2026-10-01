function solution(today, terms, privacies) {
    var answer = [];
    
    let n = privacies.length
    
    const termsMap = new Map();
    
    // 약관과 유효기관 매핑
    for (const term of terms) {
        const termArr = term.split(' ')
        termsMap.set(termArr[0],Number(termArr[1]))
    }
    
    // 날짜 -> 숫자로 변경하는 함수 제작
    function convertDate(date) {
        const [year, month, day] = date.split('.')
        
        const result = Number(year) * 12 * 28 + Number(month) * 28 + Number(day)
        console.log(result)
        return result
    }
    
    // 일단 today를 숫자로 바꿔두기
    const todayDateNumber = convertDate(today)
    
    
    // 수집 일자 + 해당 약관의 유효기간) <= today 체크
    for (let i = 0; i < privacies.length; i++) {
        const [collectedDate,kind] = privacies[i].split(' ')
        
        const collectedDateNumber = convertDate(collectedDate)
        const period = termsMap.get(kind) * 28
        
        // 변환
        if (collectedDateNumber+period <= todayDateNumber) {
            answer.push(i+1)    
        }
        
    }
    
    
    return answer;
}

// 개인정보 n개 -> privacies
// 한달 28일
// 약관 별 '개인정보' 보관 유효기간 존재

// 1. (번호 k의 개인정보 수집 일자 + 해당 약관의 유효기간) <= today



// 구) 파기해야할 번호가 몇번인지 출력