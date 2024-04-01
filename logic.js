function display() {
    let time = new Date()
    let second = time.getSeconds()

    let minute = time.getMinutes() + 15
    let hour = (time.getHours() % 12 || 12) - 3.5



    let second_hand = document.getElementsByClassName("sec")[0]
    let minut_hand = document.getElementsByClassName("min")[0]
    let hour_hand = document.getElementsByClassName("hour")[0]
    let head = document.getElementsByClassName("head")[0]



    second_hand.style.transform = `rotate(${second * 6}deg)`
    head.style.transform = `rotate(${second * 6}deg)`
    minut_hand.style.transform = `rotate(${minute * 6}deg)`
    hour_hand.style.transform = `rotate(${hour * 30 + minute / 2}deg)`








    setInterval(display, 1000)
}
display()