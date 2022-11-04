setInterval(() => {
    let hours = document.getElementById('hours'),
        minutes = document.getElementById('minutes'),
        seconds = document.getElementById('seconds'),
        ampm = document.getElementById('ampm'),
        hh = document.getElementById('hh'),
        mm = document.getElementById('mm'),
        ss = document.getElementById('ss');

    let hr_dot = document.querySelector('.hr_dot');
    let min_dot = document.querySelector('.min_dot');
    let sec_dot = document.querySelector('.sec_dot');

    let h = new Date().getHours(),
        m = new Date().getMinutes(),
        s = new Date().getSeconds(),
        am = h >= 12 ? "PM" : "AM";

    // Convert 24hours clock to 12hr clock
    if (h > 12) {
        h = h - 12
    }
    // Add Zero before single digit number
    h = (h < 10) ? "0" + h : h;
    m = (m < 10) ? "0" + m : m;
    s = (s < 10) ? "0" + s : s;

    hours.innerHTML = h + "<br/><span class='p-2'>Hours</span>";
    minutes.innerHTML = m + "<br/><span class='p-2'>Minutes</span>";
    seconds.innerHTML = s + "<br/><span class='p-2'>Seconds</span>";
    ampm.innerHTML = am;

    hh.style.strokeDashoffset = 440 - (440 * h) / 12;
    mm.style.strokeDashoffset = 440 - (440 * m) / 60;
    ss.style.strokeDashoffset = 440 - (440 * s) / 60;

    hr_dot.style.tranform = `rotate(${h * 30}deg)`;
    min_dot.style.tranform = `rotate(${m * 6}deg)`;
    sec_dot.style.tranform = `rotate(${s * 6}deg)`;
});