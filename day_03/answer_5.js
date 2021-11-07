const findScore = (answer) => {
    const answerArr = answer.split("");
    let score = {
        cur: 0,
        acc: 0
    };

    answerArr.forEach(el => {
        if(el === "O") score.cur++;
        else score.cur = 0;
        score.acc += score.cur;
    });

    return score.acc;
}

 console.log(findScore("OOOOXOOOOXOOOOX")); // 30