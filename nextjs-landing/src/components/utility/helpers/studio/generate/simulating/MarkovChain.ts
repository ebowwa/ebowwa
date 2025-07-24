// helpers/simulateMarkovChain.ts
export function simulateMarkovChain(
    initialState: number,
    transitionMatrix: number[][],
    numSteps: number
): number[] {
    let currentState = initialState;
    const states = [currentState];
    for (let i = 0; i < numSteps; i++) {
        const randomValue = Math.random();
        let cumulativeProb = 0;
        for (let j = 0; j < transitionMatrix[currentState].length; j++) {
            cumulativeProb += transitionMatrix[currentState][j];
            if (randomValue <= cumulativeProb) {
                currentState = j;
                break;
            }
        }
        states.push(currentState);
    }
    return states;
}