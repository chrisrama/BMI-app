function calculate() {
  
  const myweight  = document.getElementById("weight").value;
  const myheight  = document.getElementById("height").value;
   const bmiValue = myweight/(myheight^2);
  console.log(bmiValue.toFixed(2));
//document.getElementById("diagnosis").innerHTML = "You are under weight";
//document.getElementById("number").innerHTML = bmiValue;
 //document.getElementByClass(digit).innerHTML = bmiValue;
  
  if (bmiValue < 17) {
  document.getElementById("number").innerHTML = bmiValue;
  document.getElementById("diagnosis").innerHTML = "You are very under weight";
  }
  else if (bmiValue > 17 && bmiValue < 18.5) {
  document.getElementById("number").innerHTML = bmiValue;
  document.getElementById("diagnosis").innerHTML = "You are under weight";

  }
  else if (bmiValue > 18.5 && bmiValue < 25) {
  document.getElementById("number").innerHTML = bmiValue;
  document.getElementById("diagnosis").innerHTML = "You have normal Weight";

  }
  else if (bmiValue > 25 && bmiValue < 30) {
  document.getElementById("number").innerHTML = bmiValue;
  document.getElementById("diagnosis").innerHTML = "You are Over weight";

  }
  else if (bmiValue > 30 && bmiValue < 35) {
  document.getElementById("number").innerHTML = bmiValue;
  document.getElementById("diagnosis").innerHTML = "You have obesity 1";

  }
  else if (bmiValue > 35 && bmiValue < 40) {
  document.getElementById("number").innerHTML = bmiValue;
  document.getElementById("diagnosis").innerHTML = "Yu have obesity 2 (severe)";

  }
  else if (bmiValue > 40) {
    document.getElementById("number").innerHTML = bmiValue;
  
  //document.getElementById("value").innerHTML = bmiValue;
  document.getElementById("diagnosis").innerHTML = "You are have obesity 3(morbid)";

  }
  else {
 // document.getElementById("value").innerHTML = 0;
  document.getElementById("diagnosis").innerHTML = "Invalid";
  // alert("invalid input please try again!")
  }
  
 // document.getElementById("value").innerHTML =bmiValue;
  //document.getElementById("diagnosis").innerHTML = "You are under weight";

}