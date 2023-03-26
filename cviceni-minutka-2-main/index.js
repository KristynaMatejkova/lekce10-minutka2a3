 //Minutka 2
 const form = document.querySelector('.controls')
 form.addEventListener('submit', (event) => {
    event.preventDefault()
    let timeInput = Number(time.value)
    const alarm = document.querySelector('.alarm')
    const seconds = document.querySelector('.alarm__seconds')
   
    alarm.classList.remove('alarm--ring')

	seconds.textContent = String(timeInput)

    const countdown = () => {
		if (timeInput > 0) {
			timeInput -= 1
			seconds.textContent = String(timeInput)
		}
		if (timeInput <= 0) {
			clearInterval(interval)
			alarm.classList.add('alarm--ring')
			document.querySelector('audio').play()
		}
	}
	const interval = setInterval(countdown, 1000)
 })

/*
//Minutka 3

const form = document.querySelector('.controls')
form.addEventListener('submit', (event) => {
   event.preventDefault()
   let timeInput = Number(time.value)
   
   const alarm = document.querySelector('.alarm')
   const secondsAlarm = document.querySelector('.alarm__seconds')
   const minutes = document.querySelector('.alarm__minutes')
   
   alarm.classList.remove('alarm--ring')
   
   let seconds = 0

	minutes.textContent = String(timeInput) + ':'
	secondsAlarm.textContent = String(seconds).padStart(2, '0')

	const countdown = () => {
		if (timeInput >= 0) {
			if (seconds > 0) {
				seconds -= 1
			} else {
				timeInput -= 1
				seconds = 59
			}
			minutes.textContent = String(timeInput) + ':'
			secondsAlarm.textContent = String(seconds).padStart(2, '0')
		}
		if (timeInput <= 0 && seconds <= 0) {
			clearInterval(interval)
			alarm.classList.add('alarm--ring')
			document.querySelector('audio').play()
		}
	}
	const interval = setInterval(countdown, 1000)
})
 */