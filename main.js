function showCat(){
  var cat = document.getElementById("cat");
  cat.style.opacity = 1;
  var bn = document.getElementById('sc');
  bn.style.borderColor = 'lightgreen';
  bn.style.color = 'lightgreen';
}

function AlertText(){
  var TextToAlert = document.getElementById('inputText').value;
  alert(TextToAlert);
  TextToAlert = "";
}