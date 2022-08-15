const validateInput = (name, value) => {
  const msg = document.getElementById("error-msg");
  let regexp = '';
  let item = '';
  let example = '';

  if (name === "fName") {
    regexp = /^[A-Za-z ]{2,}$/ig
    item = 'first name'
    example = 'John'
  } else if (name === "lName") {
    regexp = /^[A-Za-z ]+$/ig
    item = 'last name'
    example = 'Smith'
  } else if (name === "code") {
    regexp = /^(\+?([\- \d]{0,8}))$/g
    item = 'country code'
    example = '+65 or 65'
  } else if (name === "contact") {
    regexp = /^[0-9]+$/g
    item = 'contact number'
    example = '12345678'
  } else if (name === "email") {
    regexp = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/ig
    item = 'email address'
    example = 'email@address.com'
  } else if (name === "websiteURL") {
    regexp = /^(((https?):\/\/)?(www.)?[a-z0-9]+\.[a-z]+(\/[a-z0-9#]+\/?)*)?$/ig
    item = 'website/LinkedIn profile URL'
    example = 'www.google.com'
  }
  
  if (regexp.test(value)) {
    msg.innerHTML = "&nbsp;"
    return true;
  } else {
    msg.textContent = `Please enter a valid ${item}. Example: ${example}`
    return false;
  }
}

const validateAll = () => {
  const inputs = ["fName", "lName", "code", "contact", "email", "websiteURL"]
  for (let name of inputs) {
    const item = document.getElementById(name);
    const value = item.value;
    const validated = validateInput(name, value);
    if (validated === false) {
      return false
    }
  }
  return true;
}

document.getElementById("form").onsubmit = validateAll;