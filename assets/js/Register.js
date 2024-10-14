function register(e){
    event.preventDefault();
    var username = document.getElementById('username');
    var email = document.getElementById('email');
    var password = document.getElementById('password');
    let user = {
        username : username,
        email : email,
        password : password,
    }
    var json = json.stringify( user);
    localStorage.setItem( username, json);
    alert( "dang ky thanh cong");
}