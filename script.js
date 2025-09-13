


const addTransaction=()=>{
    // e.preventDefault();
  const current_balance_amount=document.getElementById('current_balance_amount').innerText
let income_amount  =parseFloat(document.getElementById('Income_amount').innerText);
let expense_amount=parseFloat(document.getElementById('expense_amount').innerText); 


 const text=document.getElementById('text').value; 
const amount=document.getElementById('amount').value;

if (text === '' || amount==='') {
  return alert(` add the empty space`)
}

const convertAmount=Number(amount);

 if (convertAmount<0&& Math.abs(convertAmount)> document.getElementById('current_balance_amount').innerText) {
  return alert(` not enough balance`)
 }


      

 if (amount.includes('-')&& current_balance_amount >0) {
expense_amount+=Math.abs(convertAmount)
 document.getElementById('expense_amount').innerText=expense_amount.toFixed(2);

 document.getElementById('addTransaction').innerHTML+=`

  <div class="bg-white border-r-3 border-r-red-600 flex justify-between items-center p-5 rounded shadow" >
              <h1 class="text-base text-gray-400">${text}</h1>
              <p class="text-base text-gray-400">$<span>${amount}</span></p>
            </div>
         `
 }else{
income_amount+= Number(amount);
 document.getElementById('Income_amount').innerText=income_amount.toFixed(2);
 document.getElementById('addTransaction').innerHTML+=`

  <div class="bg-white border-r-3 border-r-green-600 flex justify-between items-center p-5 rounded shadow" >
              <h1 class="text-base text-gray-400">${text}</h1>
              <p class="text-base text-gray-400">$<span>${amount}</span></p>
            </div>
         `
 }

 if (income_amount>=expense_amount) {
  
  document.getElementById('current_balance_amount').innerText=Number(income_amount)-Number(expense_amount);


 }else{
    document.getElementById('current_balance_amount').innerText=0;
 
 }



}
