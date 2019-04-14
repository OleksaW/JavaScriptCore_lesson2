var login;
var password;
login = prompt('Who\'s there', 'login or Cancel');
switch(login){
    case 'Admin':
        password = prompt('Password?', 'password or Cancel');
        switch(password){
            case 'TheMaster': alert('Welcome');
                break;
            case 'Cancel':alert('Cancelled.');
                break;
            default:alert('Wrong password');
        }
    break;
    case'Cancel': alert('Canceled.');
        break;
    default: alert('I don\'t know you');
}