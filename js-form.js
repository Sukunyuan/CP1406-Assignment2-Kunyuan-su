function validateForm(){
	var name = document.getElementById("name").value;
	var email = document.getElementById("email").value;
	var sex = document.getElementsByName("sex");
	var day = document.getElementById("day").value;
	var month = document.getElementById("month").value;
	
	var sexValue="";
	for(i=0;i<sex.length;i++)
	{
		if(sex[i].checked==true)
		{
			sexValue=sex[i].value;
			break
		}
	}
	var product = document.getElementsByTagName("option");
	var productValue="";
	for(i=0;i<product.length;i++)
	{
		if(product[i].selected==true)
		{
			productValue=product[i].value;
			break
		}
	}
	if(sexValue==""){
		alert("Please choose your sex");
		return false;
	}
	if(name == "") {
		alert("Name must be filled out");
		return false;
	}
	if(email == "") {
		alert("Email must be filled out");
		return false;
	}
	if(productValue==""){
		alert("Please choose a product");
		return false;
	}
	if(day==""){
		alert("Please filled out day");
		return false;
	}
	if(month==""){
		alert("Please filled out month");
		return false;
	}
	var GetInformation = "Thank you for signing up for the Petite Treats Weekly newsletter" +
		"\nWe have added the following information to our files regarding your interests:" +
		"\nSex: "+ sexValue +
		"\nName: " + name +
		"\nEmail: " + email +
		"\nProduct interests: " + productValue +
		"\nBirthday: " + day + month
		alert(GetInformation);
	return true;
}