//Rules button
function Show(id)
{
  if (document.getElementById(id).style.display == 'none') {
       document.getElementById(id).style.display = 'block';
  }
  else {
       document.getElementById(id).style.display = 'none';
  }
};


//Submit Button
function Verify() {
  var userRef = "Zinnia";
  var passRef = "plotenia123";
  
  var user =  document.getElementById("username").value;
  var pass = document.getElementById("password").value;
  if (user == userRef && pass == passRef) {
  alert("Congratss...You're Authenticated")
  } else {
  alert("You're wrong...You're not authenticated")
  }
};