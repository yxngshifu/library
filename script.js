function registration()
{
    var name =document.getElementById("t1").Value;
    var email = document.getElementById("t2").Value;
    var pwd =document.getElementById("t3").value;

    var pwd_expression =/^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$%^&*-])/;
    var letters = /^[A-Za-z]+$/;
    var filter =/^([a-zA-Z0-9_\.\-])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2,4})+$/;
    
    if(name=='')
    {
        alert('Please enter your name');
    }
    else if(!letters.test(name))
    {
        alert('Name field requires only alphabets');
    }

    
    else if (pwd=='')
    {
        alert('Please enter Password');
    }
    else if (!pwd_expression.test(pwd))
    {
        alert('Upper case, Lower case, Special character and Numeric letter are required in Password filed');

    }
    else if (document.getElementById("t3").value.length < 6)
    {
        alert ('password minimum length is 8 characters');
    }
   







}

