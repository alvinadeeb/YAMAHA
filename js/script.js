document.getElementById('loginForm').addEventListener('submit', function(event){
    event.preventDefault();

    //deklarasi username dan password yang benar
    const correctUsername = "princess"
    const correctPassword = "princess"

    //mengambil username dan password yg diinput
    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;

    //pengkodisian ketika username dan password benar maupun salah
    if (username === correctUsername && password === correctPassword){
        alert("Login Berhasil");
        window.location.href = "index.html";
    }else{
        alert('Username atau password salah');
    }
});