function validate(){
    var username=document.getElementById('username').value
    var gmail=document.getElementById('gmail').value
    var password=document.getElementById('password').value
    var cpassword=document.getElementById('confirm password').value
    
    checkusername(username)
    checkgmail(gmail)
    checkpassword(password)
    checkcpassword(password, cpassword)
}

function checkusername(username){
    if(username.length>7){
        document.getElementById('username').classList.add('success')
        document.getElementById('username').classList.replace('error','success')
        document.getElementById('invalid username').innerHTML=''
    }
    else{
        document.getElementById('username').classList.add('error')
        document.getElementById('invalid username').innerText='Username must be minimum of 8 letters long'
    }
}
function checkgmail(gmail){
    if(gmail.length>10 && gmail.includes('@gmail.com')){
        document.getElementById('gmail').classList.add('success')
        document.getElementById('gmail').classList.replace('error','success')
        document.getElementById('invalid mail id').innerHTML=''
    }
    else{
        document.getElementById('gmail').classList.add('error')
        document.getElementById('invalid mail id').innerText='Email must be min of 11 letters long and must contain @gmail.com'
    }
}
function checkpassword(password){
    if(password.length>7 && (password.includes('.') || password.includes('$') || password.includes('*'))){
        document.getElementById('password').classList.add('success')
        document.getElementById('password').classList.replace('error','success')
        document.getElementById('invalid password').innerHTML=''
    }
    else{
        document.getElementById('password').classList.add('error')
        document.getElementById('invalid password').innerText='Password must be minimum of 8 letters long and must contain any of these special characters "." or "$" or "*"'
    }
}
function checkcpassword(password, cpassword){
    if(cpassword==password && cpassword!=''){
        document.getElementById('confirm password').classList.add('success')
        document.getElementById('confirm password').classList.replace('error','success')
        document.getElementById('confirmation error').innerHTML=''
    }
    else{
        document.getElementById('confirm password').classList.add('error')
        document.getElementById('confirmation error').innerText='The passwords does not match'
    }
}