document.getElementById('input-btn-cashout').addEventListener('click', function (event) {
    event.preventDefault();

    const cashOut = getInputFieldValueById('input-cashout');
    const addPin = getInputFieldValueById('input-cashout-pin');


    if (isNaN(cashOut)) {
        alert('Faild to add money.');
        return;
    }


    if (addPin === 1234) {
        const balance = getTextFieldValueById('main-balance');

        if (cashOut > balance) {
            alert('You do have no sufficient balance.');
            return;
        }
        const newBalance = balance - cashOut;
        document.getElementById('main-balance').innerText = newBalance;

        const div = document.createElement('div');
        div.classList.add('bg-red-200', 'px-2');
        div.innerHTML = `
            <p>Cash Out: ${cashOut}, New Balance: ${newBalance}        
        `

        document.getElementById('transaction-container').appendChild(div);
    }
    else {
        alert("Wrong pin number!");
    }

})