function calPoints(ops) {
    const scoreStack = [];
    let score = 0;

    ops.forEach(ele => {
        switch(ele) {
            case 'C': {
                score -= scoreStack.pop();
                break;
            }
            case 'D': {
                const lastEle = scoreStack[scoreStack.length-1];
                const newEle = lastEle * 2;
                scoreStack.push(newEle);
                score += newEle;
                break;
            }
            case '+': {
                const [first, second] = scoreStack.slice(scoreStack.length-2);
                const newEle = first + second;
                scoreStack.push(newEle);
                score += newEle;
                break;
            }
            default: {
                scoreStack.push(ele);
                score += ele;
                break;
            }
        }
    });
    return score;
}