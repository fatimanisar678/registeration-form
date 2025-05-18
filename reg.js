const form1=document.getElementById("regfrom");
const wrongmsg=document.getElementById("wrongmsg");
form1.addEventListener("submit",function(e)
{
    e.preventDefault();
    const name= document.getElementById("name").value.trim();
    const email=document.getElementById("email").value.trim();
    const password=document.getElementById("password").value.trim();
    const username= document.getElementById("username").value.trim();
    const phone=document.getElementById("phone").value.trim();
    const password2=document.getElementById("password2").value.trim();
    const gender = document.querySelector('input[type="radio"]:checked');
    
   if(name==="")
   {
    wrongmsg.textContent="Name is required";
    return;
   }
     const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
     if(email==="")
     {
      wrongmsg.textContent="Email is required";
      return;
     }else if(!emailPattern.test(email))
     {
        wrongmsg.textContent="Invalid Email fromat";
        return;
     }
 if(username==="")
   {
    wrongmsg.textContent="Username is required";
    return;
   }

   if (!/^\d{10,13}$/.test(phone)) {
       wrongmsg.textContent = "❌ Phone number should be 10-13 digits.";
        return;
    }

   if(password!=password2)
   {
   wrongmsg.textContent="Passwords donot match";
   return;

   }else if(password==="" || password2==="")
   {
    wrongmsg.textContent="Password is required";
    return;
   }else if(password.length<6)
   {
    wrongmsg.textContent="Password should be atleast 6 characters";
    return
   }
   if(!gender)
   {
    wrongmsg.textContent="Select Gender";
    return
   }

  //  alert("Registration Sucessful");
   wrongmsg.textContent="";
   form1.reset();
  window.location.href="suc.html";




});