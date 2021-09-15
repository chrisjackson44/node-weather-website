console.log('Client side javascript is loaded!')

const weatherForm = document.querySelector('form')
const searchText = document.querySelector('input')
const messageOne = document.querySelector('#message-one')
const messageTwo = document.querySelector('#message-two')

messageOne.textContent = "From JavaScript"


weatherForm.addEventListener('submit', (e) => {
    e.preventDefault()

    const location = searchText.value

    messageOne.textContent = 'Loading...'
    messageTwo.textContent = ''

    fetch('http://localhost:3000/weather?address=' + location).then((response) => {
        response.json().then((data) => {
            if (data.error) {
                messageOne.textContent = data.error
                console.log(data.error)
            } else {
                messageOne.textContent = data.location
                messageTwo.textContent = data.forecast
                console.log(data.location)
                console.log(data.forecast)
            }
        })
    })

    console.log(location)
})