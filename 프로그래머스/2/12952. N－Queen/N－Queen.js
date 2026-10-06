
function search(n, y, width, diagonal1, diagonal2) {
  let answer = 0;

  if (y === n) {
    answer ++
  } else {
    // 현재 행(재귀 기준)에서 퀸이 놓일 수 있는 위치들 
    // i : 열
    for (let i = 0; i < n; i++) {
      // i열에서 해당 위치에 이미 퀸이 있는 경우, 대각선 상에 퀸이 있는 경우 스킵
      if (width[i] || diagonal1[i + y] ||  diagonal2[i - y + n]) continue
        
      // 현재 (y, i)에 퀸을 놓음
      width[i] = true;
      diagonal1[i + y] = true;
      diagonal2[i - y + n] = true;

      // 다음 행 탐색
      answer += search(n, y + 1, width, diagonal1, diagonal2);

      // 원상복구
      width[i] = false;
      diagonal1[i + y] = false;
      diagonal2[i - y + n] = false;
        
    }
  }
  return answer;
}

function solution(n) {
  const answer = search(n, 0, Array(n).fill(false), Array(n * 2).fill(false), Array(n * 2).fill(false));
  return answer;
}


// 올라가는 (y = x꼴) 대각선은  row + col이 같다. (0,2) (1,1) (2,0)
// 내려가는 (y = -x꼴) 대각선은 col-row 의 절댓값이 같다. (0,1) (1,2) (2,3)