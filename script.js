function dice()
{
    var dice1 = Math.floor(Math.random() * 6) + 1;
    document.getElementById("img1").setAttribute("src", "./images/dice-"+dice1+".png");

    var dice2 = Math.floor(Math.random() * 6) + 1;
    document.getElementById("img2").setAttribute("src", "./images/dice-"+dice2+".png");

    if(dice1 > dice2)
        document.getElementById("result").innerHTML = "<em>Player 1 Wins!<em>";
    else if(dice1 < dice2)
        document.getElementById("result").innerHTML = "<em>Player 2 Wins!<em>";
    else
        document.getElementById("result").innerHTML = "<em>Draw!<em>";
}

function reset()
{
    document.getElementById("img1").setAttribute("src", "./images/dice-6.png");
    document.getElementById("img2").setAttribute("src", "./images/dice-6.png");
    document.getElementById("result").innerHTML = "";
}