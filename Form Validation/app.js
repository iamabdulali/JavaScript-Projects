
const username = document.getElementById('username');
const password = document.getElementById('password');
const confirmPassword = document.getElementById('confirmPassword');
const usererror = document.getElementById('usererror');
const passerror = document.getElementById('passerror');
const confirmerror = document.getElementById('confirmerror');

username.addEventListener("input" , usernameValidation);
password.addEventListener("input" , passwordValidation);
confirmPassword.addEventListener("input" , confirmPasswordValidation);


function validation(params) {

  

  if (username.value < 3){
    username.style.border = '1px solid red';
    usererror.style.display = 'block';
    return false
  }

  if (password.value < 4){
    password.style.border = '1px solid red';
    passerror.style.display = 'block';
    return false
  }

  if (confirmPassword.value != password.value){
    confirmPassword.style.border = '1px solid red';
    confirmerror.style.display = 'block';
    return false
  }
}

function usernameValidation(){
	if (username.value.length >= 8) {
		username.style.border = "1px solid green";
		usererror.style.display = "none";
    console.log(username.value)
		return true;
    
	}

   else if (username.value.length < 3){
        username.style.border = '1px solid red';
        usererror.style.display = 'block';
        return false
      }
}

function passwordValidation(){
	if (password.value.length >= 4) {
		password.style.border = "1px solid green";
		passerror.style.display = "none";
		return true;
	}

  else if (password.value.length < 4){
        password.style.border = '1px solid red';
        passerror.style.display = 'block';
        return false
      }
}

function confirmPasswordValidation(){
	if (confirmPassword.value == password.value) {
		confirmPassword.style.border = "1px solid green";
		confirmerror.style.display = "none";
		return true;
	}

  else if (confirmPassword.value != password.value){
        confirmPassword.style.border = '1px solid red';
        confirmerror.style.display = 'block';
        return false
      }
}