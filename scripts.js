function revealText() {
    alert("Long live batch cat!")
}



window.onload=function(){
    document.getElementById('email_form').addEventListener('submit', function(e) {
    e.preventDefault(); //to prevent form submission
   
   var textall = document.getElementById("subject").value + " " + document.getElementById("text_area").value 
    
   alert(textall);
    
  });
  }