function solution(sequence) {
    const n = sequence.length;

    const plusPulse = Array(n).fill(0);
    const minusPulse = Array(n).fill(0);

    let op = 1;

    for (let i = 0; i < n; i++) {
        plusPulse[i] = sequence[i] * op;
        op *= -1;
    }

    op = -1;

    for (let i = 0; i < n; i++) {
        minusPulse[i] = sequence[i] * op;
        op *= -1;
    }

    const plusDP = Array(n).fill(0);
    const minusDP = Array(n).fill(0);

    plusDP[0] = plusPulse[0];
    minusDP[0] = minusPulse[0];

    let answer = Math.max(plusDP[0], minusDP[0]);

    for (let i = 1; i < n; i++) {
        plusDP[i] = Math.max(
            plusDP[i - 1] + plusPulse[i],
            plusPulse[i]
        );

        minusDP[i] = Math.max(
            minusDP[i - 1] + minusPulse[i],
            minusPulse[i]
        );

        answer = Math.max(answer, plusDP[i], minusDP[i]);
    }

    return answer;
}