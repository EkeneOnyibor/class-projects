function validate() {
  const name = document.forms["myform"]["name"].value;
//   const number = document.forms["myform"]["number"].value;
  const email = document.forms["myform"]["email"].value;
//   const age = document.forms["myform"]["age"].value;
  const msg = document.getElementById("msg");
  if (name == "" && email == "") {
    alert("please fillup this correctly thanks");
    msg.innerHTML = "your form is not filled out";
    msg.style.color = "red";
  } else {
    alert("Thnak you for filling your form");
    msg.innerHTML = "You can go and rest now ";
    msg.style.color = "green";
  }
}
validate()
