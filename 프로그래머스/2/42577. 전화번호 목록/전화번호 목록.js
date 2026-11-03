// 전화번호부에 적힌 전화번호 중, 한 번호가 다른 번호의 접두어인 경우가 있는 지 파악
// 전화번호가 
// 119
// 97 674 223 이면 X

// 119
// 11 9552 4421 이면 O

function solution(phone_book) {
    var answer = true;

    // 전화번호 하나가 다른 전화번호의 접두어가 되면, 역은 성립하지 않음
        // 119가 다른 번호의 접두어이려면 그 다른 번호는 반드시 119로 시작하는 더 긴 문자열이어야함
        // 중복인 전화번호가 있는 경우가 유일한데 문제 조건에서 중복은 없음
    
    // 일반적으로는 이중 반복문을 통해 배열의 한 원소씩 나머지 원소와 비교하되, n(n-1)/2 * L 정도의 시간복잡도가 든다. 비효율적
    // for (let i = 0; i < phone_book.length-1; i++) {
    //     for (let j = i+1; j < phone_book.length; j++) {
    //         if (phone_book[j].startsWith(phone_book[i]) === true) {
    //             return false
    //         }
    //     }       
    // }
    
    // 사전식 정렬을 하면 문자열을 앞자리부터 비교하여 오름차순으로 정렬한다. 
    // 1,10,29,292,...
    // 사전식 정렬을 하면 동일한 접두어를 가진 문자열들이 연속된 구간에 배치된다.
    // 접두어 관계가 존재한다면, 인접한 두 문자열들 중에서 반드시 접두어 관계를 발견할 수 있다
    // 1, 10, 11, 12 처럼 여러개여도,
    // 하나라도 등장하면 false를 반환하면 되므로 정렬된 배열을 한 번만 순회해서 근접한 문자열끼리만 비교하면 된다.
    
    phone_book.sort() // O(NlogN * L) // L : 전화번호 최대길이
    
    for (let i = 0; i< phone_book.length -1; i++) {
        if (phone_book[i+1].startsWith(phone_book[i])) {
            return false
        }
    } // O(N * L)
    
    return answer;
}

// 전체 O(NlogN × L), L은 최대 20이므로 O(NlogN)으로 간주 가능

