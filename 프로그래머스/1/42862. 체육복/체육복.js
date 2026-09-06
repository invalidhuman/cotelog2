function solution(n, lost, reserve) {
    var answer = 0;

    

    const lostSet = new Set(lost);
    const reserveSet = new Set(reserve);

    // 서로 겹치는 학생 제거
    lost = [...lostSet.difference(reserveSet)]
    reserve = [...reserveSet.difference(lostSet)]
    
    lost.sort((a, b) => a - b);
    reserve.sort((a, b) => a - b);
    
    // 일단 중복도 아니어서 확실히 체육수업을 들을 수 있는 학생 수
    answer += n - lost.length // 아예 해당 없는 일반번호인 학생들 수 + 여벌도 있고 도난도안당한 학생 수
    
    // has, delete 편의를 위해 Set으로 하나 만들어둔다.
    const lostStudents = new Set(lost)

    // 중복도 제거했으니 이제 여벌있는 학생이 몇 명한테 나눠줄수있는지를 세면 된다. 
    for (const student of reserve) {
        if (lostStudents.has(student-1)) {
            lostStudents.delete(student-1) // 해당 학생 제거
            answer++
        } else if (lostStudents.has(student+1)) {
            lostStudents.delete(student+1) // 해당 학생 제거
            answer++
        }
    }
    
    
    return answer;
}