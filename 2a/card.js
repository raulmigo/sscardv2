function editCustomerInfo() {
	console.log("editCustomerInfo clicked");
	  document.getElementById('popupOverlay').style.display = 'flex'; // Use 'flex' to enable the flexbox centering
	}
  

function saveCustomerInfo() {
    // Get the values from the form
	console.log("saveCustomerInfo clicked");
    var memberNumber = document.getElementById('editMemberNumber').value;
    var issueDate = document.getElementById('editIssueDate').value;
    var customerName = document.getElementById('editCustomerName').value;

    // Set the new values to the display elements
    // You should have corresponding IDs or another way to select these elements
    document.getElementById('displayMemberNumber').textContent = memberNumber;
    document.getElementById('displayIssueDate').textContent = issueDate;
    document.getElementById('displayName').textContent = customerName;

    // Hide the form again
    document.getElementById('popupOverlay').style.display = 'none';
}

function printCard() {
    window.print(); // This will trigger the print dialog for the current window
}