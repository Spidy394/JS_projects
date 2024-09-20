const clock = document.querySelector('#clock')

let time = new Date()

function updateClock() {
    let time = new Date()
    let hours = time.getHours()
    let minutes = time.getMinutes()
    let seconds = time.getSeconds()
    let ampm = hours >= 12 ? 'PM' : 'AM'
    hours = hours % 12 || 12
    clock.innerHTML = `${hours}:${minutes}:${seconds} ${ampm}`
}

// Initial call to display the time immediately
updateClock()

// Update the clock every second
setInterval(updateClock, 1000)
