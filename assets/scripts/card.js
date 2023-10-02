
let name = document.getElementById('name').textContent;

let barcode = document.getElementById('clubid').textContent;
	
JsBarcode("#barcode", 'C12345', {
  format: "CODE128",
  lineColor: "#000000",
  width: 2,
  height: 40,
  displayValue: false
});

Webcam.attach( '#photo' );

function take_snapshot() {
	console.log("snapshot clicked!!")
        // take snapshot and get image data
	Webcam.snap(function(data_uri) {
        // display results in page
            document.getElementById('photo').innerHTML ='<img src="'+data_uri+'"/>';
        });
}

function openCamera(){
	Webcam.attach( '#photo' );
}

function printPage() {
    window.print();
}

//Function To Display Popup
function div_show() {
document.getElementById('abc').style.display = "block";
}
//Function to Hide Popup
function div_hide(){
document.getElementById('abc').style.display = "none";
}

function family_show() {
document.getElementById('family-div').style.display = "block";
}
//Function to Hide Popup
function family_hide(){
document.getElementById('family-div').style.display = "none";
}

function single_show() {
document.getElementById('customerdtl-crm-print-club').style.display = "block";
}
//Function to Hide Popup
function single_hide(){
document.getElementById('customerdtl-crm-print-club').style.display = "none";
}


function fillOutCard() {
	div_hide();
	document.getElementById('name').textContent = document.getElementById('formname').value;

	document.getElementById('clubid').textContent = "Member ID #"  + document.getElementById('memberId').value;
	
	document.getElementById('issueDate').textContent = "Issue Date: " + document.getElementById('issue').value;
	
	let barcode = document.getElementById('memberId').value;
	let issueDate = document.getElementById('issue').value;
	let customerName = document.getElementById('formname').value;


	//localstorage
	if (barcode.length > 0) {
	    localStorage.setItem( 'clubidKey', JSON.stringify(barcode) );
	}

	if (issueDate.length > 0) {
	    localStorage.setItem( 'issued', JSON.stringify(issueDate) );
	}

	if (customerName.length > 0) {
	    localStorage.setItem( 'name', JSON.stringify(customerName) );
	}

	//local storage end
	
	JsBarcode("#barcode", barcode, {
      format: "CODE128",
      lineColor: "#000000",
      width:4,
      height:80,
      displayValue: false
    });
};

window.onbeforeunload = function() {
  localStorage.removeItem('clubidKey');
  localStorage.removeItem('issued');
  localStorage.removeItem('name');
  return '';
};