document.getElementById("contactForm").addEventListener("submit",function(event){event.preventDefault();const name=document.getElementById("name").value;const email=document.getElementById("email").value;const message=document.getElementById("message").value;const mailtoLink=`mailto:?subject=New%20Contact%20Form%20Submission&body=Name:%20${name}%0AEmail:%20${email}%0AMessage:%20${message}`;window.location.href=mailtoLink})// code by @mandrivanuzz
