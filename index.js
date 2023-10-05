function calcAge() {
    let birthDay = document.getElementById("birthDay").value;
    let birthMonth = document.getElementById("birthMonth").value;
    let birthYear = document.getElementById("birthYear").value;
    let inputElement = document.getElementById("input-container");

    if(birthDay === '' || birthMonth === '' || birthYear === '') {
        inputElement.classList.add("error");
        return;
    }

    let date = new Date();
    let currentDay = date.getDate();
    let currentMonth = 1 + date.getMonth();
    let currentYear = date.getFullYear();
    let month = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];

    if (birthDay > currentDay){
        currentDay = currentDay + month[currentMonth - 1];
        currentMonth = currentMonth - 1;
    }
    if(birthMonth > currentMonth){
        currentMonth = currentMonth + 12;
        currentYear = currentYear - 1;
      }

    let d = (currentDay - birthDay);
    let m = (currentMonth - birthMonth);
    let y = (currentYear - birthYear);

    let yearsResultDiv = document.getElementById("yearsResult");
    let monthsResultDiv = document.getElementById("monthsResult");
    let daysResultDiv = document.getElementById("daysResult");

    yearsResultDiv.innerHTML = y;
    monthsResultDiv.innerHTML = m;
    daysResultDiv.innerHTML = d;

    inputElement.classList.remove("error");

}