const control = document.getElementById('control')
const hour = document.getElementById('hour')
const min = document.getElementById('min')
const sec = document.getElementById('sec')
const task = document.getElementById('task')
const desc = document.getElementById('desc')
const add = document.getElementById('add')
let time

control.addEventListener('click', function(){
    const curVal = control.textContent
   
if(curVal === 'Start'){//start
    control.style.backgroundColor = 'red'
    control.textContent = 'Stop'
    let s = 0
    time = setInterval(function(){
        s++
        if (s >= 60) {
            s = 0;
            min.textContent = (parseInt(min.textContent) + 1).toString().padStart(2, "0");
            if (parseInt(min.textContent) >= 60) {
                min.textContent = "00";
                hour.textContent = (parseInt(hour.textContent) + 1).toString().padStart(2, "0");
            }
        }
        sec.textContent = s.toString().padStart(2,"0")
    },100)
}
else{
    //stop
    control.style.backgroundColor = 'green'
    control.textContent = 'Start'
    add.innerHTML += `<tr><td>${task.value}</td><td>${desc.value}</td><td>${hour.textContent}:${min.textContent}:${sec.textContent}</td></tr>`;
    task.value= ''
    desc.value = ''
    hour.textContent ="00"
    min.textContent ="00"
    sec.textContent ="00"
    clearInterval(time)
}
})
