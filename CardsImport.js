  function outputCards() {
        player=document.getElementById("players");
        year=document.getElementById("years");
        playerName = player.options[player.selectedIndex].text;
        playerYear = year.options[year.selectedIndex].text;
        document.getElementById("out1").innerHTML = playerName+" "+playerYear;
for (i=1; i<=10; i++) {
  var s = "img" + String(i);
  var n = playerName + playerYear + "-" + String(i) + ".jpg";
document.getElementById(s).src=n;
     }
}