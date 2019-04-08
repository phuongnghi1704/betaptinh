function compute(){
	
	
	var input1=document.getElementById("numb1");
	var input2=document.getElementById("numb2");
	
	
	input1.onmouseout=function (){

		if(document.getElementById("numb1").value == "")  
			document.getElementById("thongbao").innerHTML ="Vui lòng nhập số thứ nhất!";
		else document.getElementById("thongbao").innerHTML ="";
	}
	
	input2.onmouseout=function (){

		if(document.getElementById("numb2").value == "")  
			document.getElementById("thongbao").innerHTML ="Vui lòng nhập số thứ hai!";
		else document.getElementById("thongbao").innerHTML ="";
	}
	
	
	var btton=document.getElementById("btn");

	btton.onclick= function() {
	var c,t,n,ch,res;
	
	var	x = input1.value;
	var	y = input2.value;
	
	res="";
	c = document.getElementById("cong");
	t = document.getElementById("tru");
	n = document.getElementById("nhan");
	ch = document.getElementById("chia");
	
	try{
    if(isNaN(x)) throw "Số thứ nhất không phải số";
	if(isNaN(y)) throw "Số thứ hai không phải số";
	 x = Number(x);
	 y = Number(y);
	
	if (c.checked==true) res=x+y;
	else if (t.checked==true) res=x-y;
	else if (n.checked==true) res=x*y;
	else if (ch.checked==true){ 
		if (y==0) throw "Không chia được cho 0 ";
		else
		res=x/y;		
	}
	}
	catch(err) {
		document.getElementById("thongbao").innerHTML = err;
	}

	
  
	document.getElementById("kq").innerHTML=res;
	};
}



window.onload=function() {
	compute();
}
