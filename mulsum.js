function mulsum()
{
    let score1 = 0, score2 = 0;
    while(true)
    {
        score1 = prompt("첫번째 숫자를 입력하세요.");
        score1 = Number(score1);
        if(isNaN(score1))
        {
            console.log("잘못 입력하셨습니다.");
        }else
        {
            console.log("첫번째 숫자 : " + score1);
            break;
        }
    }

    while(true)
    {
        score2 = prompt("두번째 숫자를 입력하세요.");
        score2 = Number(score2);
        if(isNaN(score2))
        {
            console.log("잘못 입력하셨습니다.");
        }else
        {
            console.log("두번째 숫자 : " + score2);
            break;
        }
    }
    console.log("두 값의 곱 = " + (score1 * score2));
    console.log("두 값의 합 = " + (score1 + score2));
}

mulsum();