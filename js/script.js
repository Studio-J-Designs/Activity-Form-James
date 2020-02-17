console.log('working');

function person1calculate() {
  var h1p1 = parseInt(document.getElementById("person1activity1number").value);
  var h2p1 = parseInt(document.getElementById("person1activity2number").value);
  var h3p1 = parseInt(document.getElementById("person1activity3number").value);
  var h4p1 = parseInt(document.getElementById("person1activity4number").value);
  var h5p1 = parseInt(document.getElementById("person1activity5number").value);
  var p1total = h1p1 + h2p1 + h3p1 + h4p1 + h5p1
  console.log(p1total);
  document.getElementById("p1answer").innerHTML = "Total Hours Spent = " + p1total;
}

function person2calculate() {
  var h1p2 = parseInt(document.getElementById("person2activity1number").value);
  var h2p2 = parseInt(document.getElementById("person2activity2number").value);
  var h3p2 = parseInt(document.getElementById("person2activity3number").value);
  var h4p2 = parseInt(document.getElementById("person2activity4number").value);
  var h5p2 = parseInt(document.getElementById("person2activity5number").value);
  var p2total = h1p2 + h2p2 + h3p2 + h4p2 + h5p2
  console.log(p2total);
  document.getElementById("p2answer").innerHTML = "Total Hours Spent = " + p2total;
}
