/*
Name: Taweepong Hirikul
StudentID: 300356615
*/
let btnContact = document.getElementById("btn_submit");
let txtName = document.getElementById("txtName");
let txtEmail = document.getElementById("txtEmail");
let txtSubject = document.getElementById("txtSubject");
let txtMessage = document.getElementById("txtMessage");
let contactForm = document.getElementById("contactForm");


//error message para
let paraErr = document.getElementById("err");

const queryString = window.location.search;
const urlParams = new URLSearchParams(queryString);
const subject = urlParams.get('s');

function validate(){
	if(txtName.value.trim() == ""){
		txtName.focus();
		throw "Please input your name."
	}
	else if (txtEmail.value.trim() == "" || emailCheck()){
		txtEmail.focus();
		throw "Please input your email with correct format."
	}
	else if (txtSubject.value.trim() == ""){
		txtSubject.focus();
		throw "Please input your sebject."
	}
	else if (txtMessage.value.trim() == ""){
		txtMessage.focus();
		throw "Please input your message."
	}
}

function emailCheck(){
	
	if(txtEmail.value.trim() != "") {
		var atposition=txtEmail.value.indexOf("@");  
		var dotposition=txtEmail.value.lastIndexOf(".");  
		if (atposition<1 || dotposition<atposition+2 || dotposition+2>=txtEmail.value.length){  
		  	return true;  
		  }  
		  else{
		  	return false;
		  }
	}
	
	return true;
	
}

function showThankyou(){
	document.getElementById("div_form").style.display = "none";
	document.getElementById("div_thankyou").style.display = "block";
}

function prefillForm(){
	if(subject != "" && subject != null){
		txtSubject.value = subject;
	}
}

btnContact.onclick = function(){
						try{
							//clear error messages
							paraErr.innerHTML = "";
							
							//call input validation Function
							validate();
							showThankyou();
						}
						//catch Block
						catch(e){
							//display the error Message
							paraErr.innerHTML = e;
						}
					}

