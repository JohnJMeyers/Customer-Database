(function () {
  'use strict'

  for (let i = 0; i < 12; i++) {
    fetch('https://randomuser.me/api/')
    .then(function (response) {
      return response.json()
    })
  .then(function (json) {
    let person = {}
    person.picture = json.results[0].picture.medium
    person.first = json.results[0].name.first
    person.last = json.results[0].name.last
    person.email = json.results[0].email
    person.street = json.results[0].location.street
    person.city = json.results[0].location.city
    person.state = json.results[0].location.state
    person.postCode = json.results[0].location.postcode
    person.phone = json.results[0].phone
    person.social = json.results[0].id.value

    const customerData = `
      <div class="customer">
        <img class = 'picture' src = '${person.picture}'></img>
        <div class = 'name'>
          <p>${person.first}</p>
          <p>${person.last}</p>
        </div>
        <div class = 'email'>${person.email}</div>
        <div class = 'address'>
          <p>${person.street}</p>
          <p>${person.city}, ${person.state}, ${person.postCode}</p>
        </div>
        <div class = 'phone'>${person.phone}</div>
        <div class = 'social'>${person.social}</div>
      </div> `

    document.querySelector('.customers').insertAdjacentHTML('beforeend', customerData)
  })
  }
  const pageHeader = `<h1 class = 'pageHeader'>INTERNAL COMPANY DIRECTORY</p>`
  document.querySelector('.customers').insertAdjacentHTML('beforebegin', pageHeader)
})()
