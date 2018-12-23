function validateForm() {
  var name= document.querySelector("#name").value;
  var email=document.querySelector("#email").value;
  var sayisal=document.querySelector("#sayisal").value;
var basamakli=document.querySelector("#basamakli").value;
var max30=document.querySelector("#max30").value
var alfa=document.querySelector("#alfa").value;
var uckelime=document.querySelector("#uckelime").value;
var res=uckelime.split(" ").length;
var password=document.querySelector("#password").value;

    var filter = /^([a-zA-Z0-9_\.\-])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2,4})+$/;
	var regForNum = /^[0-9]*$/;
		var regForNum12 = /^[0-9]{12}$/;
		var onlyLetter=/^[a-zA-Z]+$/;
		var forPass=/^(?=.*?[A-Z])(?=(.*[a-z]){1,})(?=(.*[\d]){1,})(?=(.*[\W]){1,})(?!.*\s).{8,}$/;
		

  if (name == "") {
document.getElementById("nameError").innerHTML ="*Boş Gecilemez";
   return false;
  }
    else{
  	document.getElementById("nameError").innerHTML='';
  }
  if (!filter.test(email)) {
	document.getElementById("emailError").innerHTML='Lutfen gecerli email adresi giriniz';
  return false;
  }
  else{
  	document.getElementById("emailError").innerHTML='';
  }

	if (!regForNum.test(sayisal) || sayisal=='') {


	document.getElementById("numberError").innerHTML='Lutfen sadece sayisal deger giriniz';
return false;
	
	}
	  else{
  	document.getElementById("numberError").innerHTML='';
  }
		if (!regForNum12.test(basamakli)) {
document.getElementById("basamakliError").innerHTML='12 basamakli sayi giriniz';
	
return false;
	
	}
		  else{
  	document.getElementById("basamakliError").innerHTML='';
  }
	
	if (!onlyLetter.test(alfa)) {
	
	  	document.getElementById("alfaError").innerHTML='sadece alfabetik karakter giriniz';
return false;
	
	}
	else  	document.getElementById("alfaError").innerHTML='';
	
	if (!onlyLetter.test(max30) || max30.length>30) {
	
		if(!onlyLetter.test(max30))
	  	document.getElementById("max30Error").innerHTML='sadece alfabetik karakter olmali';
		
		if(max30.length>30)
		document.getElementById("max30Error").innerHTML='30 karakterden az olmali';
		return false;
	
	}
	else
	document.getElementById("max30Error").innerHTML='';
	if(res!=3)
	{
			document.getElementById("uckelimeError").innerHTML='3 kelimeden olusmali';
		return false;
	}
	else
	document.getElementById("uckelimeError").innerHTML='';
	
	if (!forPass.test(password)) {
	
	  	document.getElementById("passwordError").innerHTML='En az 1 büyük harf, en az 1 küçük harf, en az bir rakam ve en az 1 noktalama işareti içeren ve en az 8 uzunluğunda olmali';
return false;
	
	}

}