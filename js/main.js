function nextDate() {
    let usersDate = document.getElementById("usersDate").value;
    
    let usersDateNumb = new Date(usersDate).getTime() + (1000*60*60*24);
    let tomorrow = new Date(usersDateNumb);
    let yearTomor = tomorrow.getFullYear();
    let monthTomor = tomorrow.getMonth() + 1;
    let dayTomor = tomorrow.getDate();
    
    let tomorrowStr = `The next day after ${usersDate} is ${yearTomor}-${monthTomor}-${dayTomor}`;

    document.getElementById("nextD").innerHTML = tomorrowStr;
    document.getElementById("nextD").style.backgroundColor = "rgba(220,220,220,1)";


}