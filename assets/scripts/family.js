document.getElementById('family-popup').style.display = "none";

console.log(localStorage);
console.log(localStorage.length);

if (localStorage.length > 0) {
    let clubiditem = JSON.parse( localStorage.getItem( 'clubidKey' ) );
    let issueDate = JSON.parse( localStorage.getItem( 'issued' ) );
    let customerName = JSON.parse( localStorage.getItem( 'name' ) );

    document.getElementById('clubid').textContent = "MEMBER ID #"  + clubiditem;
    document.getElementById('issueDate').textContent = "ISSUE DATE: "  + issueDate;
    document.getElementById('member1').textContent = "MEMBER:  "  + customerName;

    JsBarcode("#barcode", clubiditem, {
      format: "CODE128",
      lineColor: "#000000",
      width: 2,
      height: 40,
      displayValue: false
    });
} else {
    document.getElementById('clubid').textContent = "MEMBER ID #C12345";
    document.getElementById('issueDate').textContent = "ISSUE DATE: DD/MM/YYYY";
    document.getElementById('member1').textContent = "MEMBER: JOHN SMITH";

    JsBarcode("#barcode", 'C12345', {
      format: "CODE128",
      lineColor: "#000000",
      width: 2,
      height: 40,
      displayValue: false
    });
};

function div_show() {
    document.getElementById('family-popup').style.display = "block";
}
//Function to Hide Popup
function div_hide(){
    document.getElementById('family-popup').style.display = "none";
}

function printPage() {
    window.print();
}

let barcode = document.getElementById('clubid').textContent;

function required(inputtx) {
    if (inputtx.value.length <= 0) {
        return false;
    }
    return true;
};


function fillOutCard() {
	div_hide();

    /*if (required(document.getElementById('formname1'))) {
        document.getElementById('member1').textContent = "MEMBER: " + document.getElementById('formname1').value;
    } else {
        document.getElementById('member1').textContent = document.getElementById('formname1').innerHTML = "";                                                                                        ;
    };*/

    if (required(document.getElementById('formname2'))) {
        document.getElementById('member2').textContent = "SPOUSE: " + document.getElementById('formname2').value;
    } else {
        document.getElementById('member2').textContent = document.getElementById('formname2').innerHTML = "";
    };

    if (required(document.getElementById('formname3'))) {
        document.getElementById('member3').textContent = "CHILD: " + document.getElementById('formname3').value;
    } else {
        document.getElementById('member3').textContent = document.getElementById('formname3').innerHTML = "";
    };

    if (required(document.getElementById('formname4'))) {
        document.getElementById('member4').textContent = "CHILD: " + document.getElementById('formname4').value;
    } else {
        document.getElementById('member4').textContent = document.getElementById('formname4').innerHTML = "";
    };

    if (required(document.getElementById('formname5'))) {
        document.getElementById('member5').textContent = "CHILD: " + document.getElementById('formname5').value;
    } else {
        document.getElementById('member5').textContent = document.getElementById('formname5').innerHTML = "";
    };

    if (required(document.getElementById('formname6'))) {
        document.getElementById('member6').textContent = "CHILD: " + document.getElementById('formname6').value;
    } else {
        document.getElementById('member6').textContent = document.getElementById('formname6').innerHTML = "";
    };

    //if (required(document.getElementById('clubid'))) {

    //}

	//document.getElementById('clubid').textContent = "Member ID #"  + document.getElementById('memberId').value;

	//document.getElementById('issueDate').textContent = "Issue Date: " + document.getElementById('issue').value;

	let barcode = document.getElementById('memberId').value;

	JsBarcode("#barcode", barcode, {
      format: "CODE128",
      lineColor: "#000000",
      width:4,
      height:80,
      displayValue: true
    });
};

