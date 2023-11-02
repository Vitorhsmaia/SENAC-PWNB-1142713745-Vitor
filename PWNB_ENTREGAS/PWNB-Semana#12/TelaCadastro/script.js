function toggleDropdown() {
    const dropdownOptions = document.getElementById('dropdownOptions');
    dropdownOptions.style.display = dropdownOptions.style.display === 'none' ? 'block' : 'none';
  }
  
  function submitForm(event) {
    event.preventDefault();
  
    const firstName = document.getElementById('firstName').value;
    const lastName = document.getElementById('lastName').value;
    const dob = document.getElementById('dob').value;
    const city = document.getElementById('city').value;
    const cep = document.getElementById('cep').value;
    const address = document.getElementById('address').value;
    const houseNumber = document.getElementById('houseNumber').value;
  
    const clientType = document.querySelector('input[name="clientType"]:checked');
    if (!clientType) {
      alert('Selecione um tipo de cliente.');
      return;
    }
  
    const selectedClientType = clientType.value;
  
    const customerInfo = `${firstName} ${lastName} - ${selectedClientType} - ${city}`;
    const customerList = document.getElementById('customerList');
    const li = document.createElement('li');
    li.appendChild(document.createTextNode(customerInfo));
    customerList.appendChild(li);
  }
  
  function clearForm() {
    document.getElementById('customerForm').reset();
  }
  
  
  