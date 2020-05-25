var arr=[]

var arr2=[]

//function to get values, store them into an array and display them one below other. 
            
function makeNewIncomeAmountEntry()
{
    var storeIncomeTextValue= document.getElementById("incomeTextValues").value //takes text values entered into the input field

    var storeIncomeAmountValue= Number(document.getElementById("incomeAmountValues").value) //takes amount values entered into the input field

    arr.push(storeIncomeAmountValue) //pushes each amount value into an empty array

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
            for(i=0;i<arr.length;i++)
            {
                if(arr[i]==storeIncomeAmountValue)
                {
                    arr[i]=0
                    break
                }
            }
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
            for(i=0;i<arr2.length;i++)
            {
                if(arr2[i]==storeExpenseAmountValue)
                {
                    arr2[i]=0
                    break
                }
            }
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

   //document.getElementById("balanceLeft").innerHTML= diff+"₹"

   if(diff<=10000&&document.getElementById("totalOfIncomeAmount").innerHTML!=null&&document.getElementById("totalOfIncomeAmount").innerHTML!=""&&document.getElementById("totalOfIncomeAmount").innerHTML!=undefined&&document.getElementById("totalOfExpenseAmount").innerHTML!=null&&document.getElementById("totalOfExpenseAmount").innerHTML!=""&&document.getElementById("totalOfExpenseAmount").innerHTML!=undefined)
   {
        document.getElementById("balanceLeft").innerHTML= diff+"₹"
       document.getElementById("balanceLeft").style.backgroundColor='red'

       document.getElementById("balanceLeft").append(' Low Balance')
   }

   
   else if(diff==null||diff==undefined&&document.getElementById("totalOfExpenseAmount").innerHTML==null||document.getElementById("totalOfExpenseAmount").innerHTML==undefined&&document.getElementById("totalOfIncomeAmount").innerHTML!=null&&document.getElementById("totalOfIncomeAmount").innerHTML!=undefined&&totalOfAllTheIncomes<=10000)
   {
    document.getElementById("balanceLeft").innerHTML= totalOfAllTheIncomes+"₹"
    document.getElementById("balanceLeft").append(' Low Balance')
    alert("PLease click the (Find sum of expense items button to set sum of expense items to 0)")
    console.log(totalOfAllTheIncomes)
   }

   
   else if(diff>10000&&document.getElementById("totalOfIncomeAmount").innerHTML!=null&&document.getElementById("totalOfIncomeAmount").innerHTML!=""&&document.getElementById("totalOfIncomeAmount").innerHTML!=undefined&&document.getElementById("totalOfExpenseAmount").innerHTML!=null&&document.getElementById("totalOfExpenseAmount").innerHTML!=""&&document.getElementById("totalOfExpenseAmount").innerHTML!=undefined)
   {
    document.getElementById("balanceLeft").innerHTML= diff+"₹"
    document.getElementById("balanceLeft").style.backgroundColor='green'

    document.getElementById("balanceLeft").append('  You have sufficient balance')
   }

   else if(diff==null||diff==undefined&&document.getElementById("totalOfExpenseAmount").innerHTML!=null&&document.getElementById("totalOfExpenseAmount").innerHTML!=undefined&&document.getElementById("totalOfIncomeAmount").innerHTML==null||document.getElementById("totalOfIncomeAmount").innerHTML==undefined)
   {
    document.getElementById("balanceLeft").innerHTML= "Invalid. You have not entered any income value"
    alert("You cannot spend if you don't have any income")
   }

   else if(diff==null||diff==undefined&&document.getElementById("totalOfExpenseAmount").innerHTML==null||document.getElementById("totalOfExpenseAmount").innerHTML==undefined&&document.getElementById("totalOfIncomeAmount").innerHTML!=null&&document.getElementById("totalOfIncomeAmount").innerHTML!=undefined&&totalOfAllTheIncomes>10000)
   {
    document.getElementById("balanceLeft").innerHTML= totalOfAllTheIncomes+"₹"
    document.getElementById("balanceLeft").append(' You have sufficient balance and no expenses')
    alert("PLease click the (Find sum of expense items button to set sum of expense items to 0)")
    console.log(totalOfAllTheIncomes)
   }
}