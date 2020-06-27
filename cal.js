var display=document.getElementById("cal-display");
var btn=document.getElementsByClassName("button");
var op1=0;
var op2=null;
var operator=null;
//var eq=false;
var sg=false;


for(var i=0;i<btn.length;i++)
{
	btn[i].addEventListener("click",function ()
	{
		//console.log(btn[i]);
		var value=this.getAttribute("data-value");
		if(value=="/" || value=="*" || value=="-" || value=="+" || value=="%")
		{
			op1=parseFloat(display.innerText);
			if(!isNaN(op1))
			{
				if(value!="%")
				{
					display.innerText=value;
				}
				else
				{
					display.innerText="mod";
				}
				operator=value;
			    console.log(op1,operator);
			    sg=true;
			}
			else
			{
				display.innerText="Error";
			}
			
		}
		else if(value=="bksp")
		{
			var s=display.innerText;
			if(s=="Error")
			{
				display.innerText=null;
			}
			else
			{
				display.innerText=s.slice(0,s.length-1);
			}
		}
		else if(value=="=")
		{
			
			    op2=parseFloat(display.innerText);
	            var result=eval(op1+" "+operator+" "+op2);
	            console.log(op2,result);
	            if(result==Infinity || isNaN(result) || result==-Infinity )
	            {
	            	display.innerText="Error";
	            }
	            else
	            {
	            	sg=true;
	            	display.innerText=result;
	            }
        	    //display.innerText=null;
		}
		else if(value=="inverse")
		{
			op1=parseFloat(display.innerText);
			if(isNaN(op1))
			{
				display.innerText="Error";
			}
			else
			{
				var v=parseFloat(display.innerText);
				display.innerText=(1/v);
				sg=true;
			}
		}
		else if(value=="square")
		{
			op1=parseFloat(display.innerText);
			if(isNaN(op1))
			{
				display.innerText="Error";
			}
			else
			{
				var v=parseFloat(display.innerText);
				display.innerText=v*v;
				sg=true;
			}
		}
		else if(value=="sqroot")
		{
			op1=parseFloat(display.innerText);
			if(isNaN(op1))
			{
				display.innerText="Error";
			}
			else
			{
				var v=parseFloat(display.innerText);
				display.innerText=Math.pow(v,0.5);
				sg=true;
			}
		}
		else if(value=="AC")
		{
             display.innerText=null;
		}
		else if(value=="sign")
		{
			op1=parseFloat(display.innerText);
			if(isNaN(op1))
			{
				display.innerText="Error";
			}
			else
			{
				var v1=(parseFloat(display.innerText));
				display.innerText=-v1;
				sg=true;
			}
			

		}
		else if(value=="percent")
		{
			op1=parseFloat(display.innerText);
			if(isNaN(op1))
			{
				display.innerText="Error";
			}
			else
			{
				var v1=(parseFloat(display.innerText))/100;
				display.innerText=v1;
				sg=true;
			}
            
		}
		else
		{
			if(sg==true || display.innerText=="Error")//display.innerText=="*" || display.innerText=="+" || display.innerText=="-"  || display.innerText=="/" || display.innerText=="Error" || eq==true)
			{
				display.innerText=null;
				//eq=false;
				sg=false;
			}
			display.innerText+=value;
		}
	});
}

document.addEventListener("keydown",function(event)
{

	var value=event.keyCode;
	console.log(value);
	if(value==49 || value==97 || value==50 || value==98 || value==51 || value==99 || value==52 || value==100 || value==53 || value==101 || value==54 || value==102 || value==55 || value==103 || value==56 || value==104 || value==57 || value==105 || value==48 || value==96 || value==190 || value==110 || value==35 || value==40 || value==34 || value==37 || value==12 || value==39 || value==36 || value==38 || value==33 || value==45 || value==46)
	{
		if(sg==true || display.innerText=="Error")
		{
			display.innerText=null;
			sg=false;
		}
		if(value==49 || value==97 || value==35)
		{
			display.innerText+=1;
		}
		else if(value==50 || value==98 || value==40)
		{
			display.innerText+=2;
		}
		else if(value==51 || value==99 || value==34)
		{
			display.innerText+=3;
		}
		else if(value==52 || value==100 || value==37)
		{
			display.innerText+=4;
		}
		else if(value==53 || value==101 || value==12)
		{
			display.innerText+=5;
		}
		else if(value==54 || value==102 || value==39)
		{
			display.innerText+=6;
		}
		else if(value==55 || value==103 || value==36)
		{
			display.innerText+=7;
		}
		else if(value==56 || value==104 || value==38)
		{
			display.innerText+=8;
		}
		else if(value==57 || value==105 || value==33)
		{
			display.innerText+=9;
		}
		else if(value==48 || value==96 || value==45)
		{
			display.innerText+=0;
		}
		else if(value==190 || value==110 || value==46)
		{
			display.innerText+=".";
		}
	}
	else if(value==111 || value==191 || value==106 || value==189 || value==109 || value==107 || value==187)
	{
		op1=parseFloat(display.innerText);
		if(isNaN(op1))
		{
			display.innerText="Error";
		}
		else
		{
			if(value==111 || value==191)
			{
				display.innerText="/";
				operator="/";
			}
			else if(value==106)
			{
				display.innerText="*";
				operator="*";
			}
			else if(value==189 || value==109)
			{
				display.innerText="-";
				operator="-";
			}
			else if(value==187 || value==107)
			{
				display.innerText="+";
				operator="+";
			}
			sg=true;
		}

	}
	else if(value==120)
	{
		op1=parseFloat(display.innerText);
		if(isNaN(op1))
		{
			display.innerText="Error";
		}
		else
		{
			var s=parseFloat(display.innerText);
			display.innerText=-s;
			sg=true;
		}

	}
	else if(value==27 || value==46 || value==8)
	{
		if(value==27 || display.innerText=="Error" || value==46)
		{
			display.innerText=null;
		}
		else
		{
			var s=display.innerText;
			display.innerText=s.slice(0,s.length-1);
		}
	}
	else if(value==13)
	{
		op2=parseFloat(display.innerText);
		if(isNaN(op2))
		{
			display.innerText="Error";
		}
		else
		{
			var result=eval(op1+" "+operator+" "+op2);
			if(result==Infinity || result==-Infinity)
			{
				display.innerText="Error";
			}
			else
			{
				display.innerText=result;
			}
			sg=true;
		}
	}

});
