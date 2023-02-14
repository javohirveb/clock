const deg = 6
const hr = document.querySelector("#hr")
const mn = document.querySelector("#mn")
const sc = document.querySelector("#sc")

const hours = document.querySelector(".hours")
const minutes = document.querySelector(".minutes")
const seconds = document.querySelector(".seconds")

setInterval(() => {
    let day = new Date()
    let hh = day.getHours() * 30
    let mm = day.getMinutes() * deg
    let ss = day.getSeconds() * deg
    let ssecond = day.getSeconds()
    if (ssecond<10) {
        ssecond = `0${ssecond}`
    }

    hr.style.transform = `rotateZ(${(hh) + (mm / 12)}deg)`
    mn.style.transform = `rotateZ(${mm}deg)`
    sc.style.transform = `rotateZ(${ss}deg)`

    hours.textContent = `${day.getHours()}`
    minutes.textContent = `${day.getMinutes()}`
    seconds.textContent = `${ssecond}`
})