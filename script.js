function compute()
{
    var p = document.getElementById("principal").value;
    if (p < 1){
        alert("Enter Principal amount greater than 0 ")
        document.getElementById("principal").focus();
        return false;
    }
    var rate = document.getElementById("rate").value;
    var years = document.getElementById("years").value;
    var interest = p * rate * years /100;
    var year = new Date().getFullYear()+parseInt(years);
    prince = "<span class=\"highlightme\">"+p+"<\/span\>"
    rate = "<span class=\"highlightme\">"+rate+"%"+"<\/span\>"
    interest = "<span class=\"highlightme\">"+interest+"<\/span\>"
    year = "<span class=\"highlightme\">"+year+"<\/span\>"
    document.getElementById("result").innerHTML="If you deposit "+prince+",\<br\>at an interest rate of "+rate+"\<br\>You will receive an amount of "+interest+",\<br\>in the year "+year+"\<br\>"
}

function updateRate()
{
    var rateval = document.getElementById("rate").value;
    document.getElementById("rate_val").innerText=rateval+"%";
}

      
