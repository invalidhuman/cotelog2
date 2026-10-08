function solution(s) {
  const numbers = s.slice(2, -2).split("},{");
  const sorted = numbers.sort((a, b) => a.length - b.length);
  const answer = [];

  // 순회하면서 각 원소가 전 원소와 차이가 나는 부분이 있는지 확인
  for (const element of sorted) {
    const nums = element.split(",");
    for (const num of nums) {
      if (!answer.includes(Number(num))) {
        answer.push(Number(num));
      }
    }
  }

  return answer;
}