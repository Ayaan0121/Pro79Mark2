studentArray=[];



//sumbmit function
function submit(){
    //varibles
    var n1 = document.getElementById("name1").value;
    var n2 = document.getElementById("name2").value;
    var n3 = document.getElementById("name3").value;
    var n4 = document.getElementById("name4").value;
  studentArray.push ( n1 );
  studentArray.push ( n2 );
  studentArray.push ( n3 );
  studentArray.push ( n4 );
  //display
  document.getElementById("Name").innerHTML=studentArray;
  //style
  document.getElementById("submitButton").style.display="none";
  document.getElementById("name1").style.display="none";
  document.getElementById("name2").style.display="none";
  document.getElementById("name3").style.display="none";
  document.getElementById("name4").style.display="none";
  document.getElementById("login").style.display="none";  

  document.getElementById("Name").style.display="inline-block";
  document.getElementById("show").style.display="table";
}
