


const addTransaction=()=>{
    // e.preventDefault();
  const current_balance_amount=document.getElementById('current_balance_amount').innerText
let income_amount  =parseFloat(document.getElementById('Income_amount').innerText);
 const text=document.getElementById('text').value; 
const amount=document.getElementById('amount').value;

if (text === '' || amount==='') {
  return alert(` add the empty space`)
}else{
document.getElementById('addTransaction').innerHTML+=`

  <div class="bg-white flex justify-between items-center p-5 rounded shadow" >
              <h1 class="text-base text-gray-400">${text}</h1>
              <p class="text-base text-gray-400">$<span>${amount}</span></p>
            </div>
         `
}


 if (amount.includes('-')&& income_amount>0) {

 const expense_amount=parseFloat(document.getElementById('expense_amount').innerText); 
 const updateExpense=expense_amount+Number(amount);
 document.getElementById('expense_amount').innerText=updateExpense.toFixed(2);

// document.getElementById('current_balance_amount').innerText=updateExpense.toFixed(2);
 }else{
//sum amount

const updateAmount=income_amount+ Number(amount);
document.getElementById('Income_amount').innerText=updateAmount.toFixed(2);
// document.getElementById('current_balance_amount').innerText=updateAmount.toFixed(2);
 }
document.getElementById('current_balance_amount').innerText=Number(document.getElementById('Income_amount').innerText)+Number(document.getElementById('expense_amount').innerText);

}
