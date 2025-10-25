document.getElementById('input-btn-addmoney').addEventListener('click', function (event) {
    event.preventDefault();
    console.log('hi');

    const addMoney = getInputFieldValueById('input-addmoney');
    const addPin = getInputFieldValueById('input-addmoney-pin');

    if(isNaN(addMoney)){
        alert('Faild to add money.');
        return;
    }

    // Not a good way to checking pin number
    if (addPin === 1234) {
        const balance = getTextFieldValueById('main-balance')
        const newBalance = balance + addMoney;
        document.getElementById('main-balance').innerText = newBalance;

        const div =document.createElement('div');
        div.classList.add('bg-blue-200', 'px-2');
        div.innerHTML = `
            <p>Add Money: ${addMoney}, New Balance: ${newBalance}</p>
        `
        document.getElementById('transaction-container').appendChild(div);
    }
    else {
        alert('Wrong pin number!')
    }
})