var login;
var password;
login = prompt('Who\'s there', 'login or Cancel');
if(login == 'Admin'){
    password = prompt('Password?', 'password or Cancel');
    if(password == 'TheMaster'){
        alert('Welcome');
    }else if (password == 'Cancel'){
        alert('Cancelled.');
    }else {
        alert('Wrong password');
    }
}else if(login == 'Cancel'){
    alert('Canceled.');
}else {
    alert('I don\'t know you');
}
