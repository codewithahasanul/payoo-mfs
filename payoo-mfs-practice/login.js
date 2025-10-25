document.getElementById('btn-login').addEventListener('click', function(event) {
    event.preventDefault();

    const inputEmail = document.getElementById('input-email').value;
    const inputPass = document.getElementById('input-pass').value;
    const inputPassNumber = parseFloat(inputPass);

    if (inputEmail === "ahasanulhaque204@gmail.com" && inputPassNumber === 1234) {
        window.open('/payoo-mfs-practice.html', '_blank');
    } 
    else {
        alert('Wrong Email or Password');
    }
});
