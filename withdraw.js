document.getElementById('btn-withdraw').addEventListener('click', function () {
    const withdrawField = document.getElementById('withdraw-field');
    const withdrawString = withdrawField.value;
    const currentWithdraw = parseFloat(withdrawString);

    const withdraw = document.getElementById('total-withdraw');

    const totalWithdrawString = withdraw.innerText;
    const currentTotalWithdraw = parseFloat(totalWithdrawString);

    const totalWithdrawCalculation = currentTotalWithdraw + currentWithdraw;
    withdraw.innerText = totalWithdrawCalculation;



    withdrawField.value = '';

})