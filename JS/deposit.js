document.getElementById('btn-submit').addEventListener('click', function(){
    const depositFiled = document.getElementById('user-amount');
    const newDepositAmountString = depositFiled.value;
    const newDepositAmount = parseFloat(newDepositAmountString);

    const depositTotalElement = document.getElementById('deposit-total');
    const previousDepositTotalString = depositTotalElement.innerText;
    const previousDepositTotal = parseFloat(previousDepositTotalString);
    
    const currentDepositTotal = previousDepositTotal + newDepositAmount;
    depositTotalElement.innerText = currentDepositTotal;

    const balanceTotalElement = document.getElementById('balance-total');
    const balanceTotalString = balanceTotalElement.innerText;
    const balanceTotal=  parseFloat(balanceTotalString)

    const currentBalanceTotal = balanceTotal + newDepositAmount;

    balanceTotalElement.innerText = currentBalanceTotal;
    
    depositFiled.value = '';
})