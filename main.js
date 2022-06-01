console.log (customers)

const datalog = document.querySelector('#data')



for (let customer of customers) {

  let customerElement = document.createElement('div')
  customerElement.classList.add('customer')
  
  let contentElement = document.createElement('article')
  contentElement.classList.add("display")

  let infoElement = document.createElement('div')
  infoElement.classList.add("p2")

  customerElement.appendChild(contentElement)

  let imageElement = document.createElement('img')
  imageElement.src = `${customer.picture.large}`
  imageElement.alt = 'photos of customers'
  imageElement.classList.add("img")
  contentElement.appendChild(imageElement)
  customerElement.appendChild(contentElement)

  let peopleElement = document.createElement('h2')
  peopleElement.classList.add("people")
  peopleElement.innerText = ` ${customer.name.first.charAt(0).toUpperCase(0) + customer.name.first.slice(1)} ${customer.name.last.charAt(0).toUpperCase(0) + customer.name.last.slice(1)} `
  contentElement.appendChild(peopleElement)

  let emailElement = document.createElement('div')
  emailElement.classList.add('email')
  emailElement.innerText = ` ${customer.email}`
  contentElement.appendChild(emailElement)

  let addressElement = document.createElement ('div')
  addressElement.classList.add('address')
  addressElement.innerText = ` ${customer.location.street.number} ${customer.location.street.name} 
  ${customer.location.city}, ${customer.location.state} ${customer.location.postcode}`
  contentElement.appendChild(addressElement)

  let dobElement = document.createElement ('div')
  dobElement.classList.add('dob')
  dobElement.innerText = `DOB: ${Date(customer.dob.date).substring(4,16)}`
  contentElement.appendChild(dobElement)


  let sinceElement = document.createElement ('div')
  sinceElement.classList.add('since')
  sinceElement.innerText = `Customer since: ${Date(customer.registered.date).substring(4,16)}`
  contentElement.appendChild(sinceElement)

  
  customerElement.appendChild(contentElement)
  datalog.appendChild(customerElement)
  }
  


