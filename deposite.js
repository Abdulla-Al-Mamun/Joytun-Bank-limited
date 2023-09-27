


document.getElementById('btn-deposite').addEventListener('click', function () {

    const depositeField = document.getElementById('deposite-field');
    const depositeFieldString = depositeField.value;
    const currentDeposite = parseFloat(depositeFieldString);

    const deposite = document.getElementById('total-deposite');
    const totalDepositeString = deposite.innerText;
    const totalDeposite = parseFloat(totalDepositeString);

    const totalDepositeCalculation = currentDeposite + totalDeposite;

    deposite.innerText = totalDepositeCalculation;

    const blance = document.getElementById('total-blance');
    const blanceStrion = blance.innerText;
    const currentBlance = parseFloat(blanceStrion);

    const totalBlanceCalculation = currentBlance + currentDeposite;
    blance.innerText = totalBlanceCalculation;

    depositeField.value = '';







})

