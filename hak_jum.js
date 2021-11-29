function num(jumsu)
{
    let hak_jum = 0;
    if(100>=jumsu && jumsu>=90)
    {
        hak_jum = 'A';
    }else if(90>jumsu && jumsu>=80)
    {
        hak_jum = 'B';
    }else if(80>jumsu && jumsu>=70)
    {
        hak_jum = 'C';
    }else if(70>jumsu && jumsu>=60)
    {
        hak_jum = 'D';
    }else if(60>jumsu && jumsu>=50)
    {
        hak_jum = 'E';
    }else
    {
        hak_jum = "F";
    }
    return hak_jum;
}

while(true)
{
    score = prompt("점수를 입력하세요 : ");
    if(isNaN(Number(score)))
    {
        console.log("점수를 잘못 입력하셨습니다, 다시 입력해주세요.<br>");
    }else if(score > 100)
    {
        console.log("100점을 넘기셨습니다.")
    }else if(score < 0)
    {
        console.log("0점보다 낮습니다, 다시 입력해주세요.<br>");
    }else
    {
        console.log(`점수는 ${score}점이고 ${num(score)}학점을 받으셨습니다.`);
        break;
    }
}