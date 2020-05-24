var arr=[]

var arr2=[]
            
function makeNewIncomeAmountEntry()
{
    var storeIncomeTextValue= document.getElementById("incomeTextValues").value

    var storeIncomeAmountValue= Number(document.getElementById("incomeAmountValues").value)

    arr.push(storeIncomeAmountValue)

    var oneIncomeAmountValue= document.createElement('div')

    oneIncomeAmountValue.setAttribute("class", "amtdiv")

    var oneIncomeTextValue= document.createElement('div')

    oneIncomeTextValue.setAttribute("class", "txtdiv")

    oneIncomeTextValue.innerHTML= storeIncomeTextValue

    oneIncomeAmountValue.innerHTML = storeIncomeAmountValue

    var deleteValueButton= document.createElement('button')

    deleteValueButton.setAttribute('class', 'deleteVl')

    deleteValueButton.textContent="Delete"

    deleteValueButton.addEventListener('click', deleteCurrentValue)

        function deleteCurrentValue()
        {
            oneIncomeAmountValue.remove()
            oneIncomeTextValue.remove()
            arr.pop(storeIncomeAmountValue)
        }
    
    document.getElementById("listOfIncomeTextValues").append(oneIncomeTextValue) 
    
    document.getElementById("listOfIncomeAmountValues").append(oneIncomeAmountValue)

    oneIncomeAmountValue.append(deleteValueButton)
}


function sumOfIncomeAmountValues()
{

    console.log(arr, "second")
    var total=0

    for(i=0;i<arr.length;i++)
    {
        total=total+arr[i]
    }
    
    console.log(total)

    document.getElementById("totalOfIncomeAmount").innerHTML= total
    document.getElementById("totalOfIncomeAmount").append("₹")
    
}


function makeNewExpenseAmountEntry()
{
    var storeExpenseTextValue= document.getElementById("expenseTextValues").value

    var storeExpenseAmountValue= Number(document.getElementById("expenseAmountValues").value)

    arr2.push(storeExpenseAmountValue)

    var oneExpenseTextValue= document.createElement('div')

    oneExpenseTextValue.setAttribute('class', 'expText')

    var oneExpenseAmountValue= document.createElement('div')

    oneExpenseAmountValue.setAttribute('class', 'expAmt')

    oneExpenseTextValue.innerHTML= storeExpenseTextValue

    oneExpenseAmountValue.innerHTML= storeExpenseAmountValue

    var deleteValueButton2= document.createElement('button')

    deleteValueButton2.setAttribute('class', 'deleteVl2')

    deleteValueButton2.textContent="Delete"

    deleteValueButton2.addEventListener('click', deleteCurrentValue2)

        function deleteCurrentValue2()
        {
            oneExpenseAmountValue.remove()
            oneExpenseTextValue.remove()
            arr2.pop(storeExpenseAmountValue)
        }

    document.getElementById('listOfExpenseTextValues').append(oneExpenseTextValue)

    document.getElementById('listOfExpenseAmountValues').append(oneExpenseAmountValue)

    oneExpenseAmountValue.append(deleteValueButton2)
}

function sumOfExpenseAmountValues()
{
    
    console.log(arr2, 'third')
    
    var total2=0

    for(i=0; i<arr2.length; i++)
    {
        total2=total2+arr2[i]
    }

    document.getElementById('totalOfExpenseAmount').innerHTML= total2
    document.getElementById('totalOfExpenseAmount').append("₹")

}

function checkBalance()
{
   var x= document.getElementById("totalOfIncomeAmount").innerHTML

   var y= document.getElementById('totalOfExpenseAmount').innerHTML

   var totalOfAllTheExpenses= Number(y.slice(0, y.length-1))

   var totalOfAllTheIncomes= Number(x.slice(0, x.length-1))

   var diff= totalOfAllTheIncomes-totalOfAllTheExpenses

   document.getElementById("balanceLeft").innerHTML= diff+"₹"

   if(diff<=10000)
   {
       document.getElementById("balanceLeft").style.backgroundColor='red'

       document.getElementById("balanceLeft").append(' Low Balance')
   }

   
   else
   {
    document.getElementById("balanceLeft").style.backgroundColor='green'

    document.getElementById("balanceLeft").append('  You have sufficient balance')
   }
}