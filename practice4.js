  const dateObj = new Date(2025, 10, 13); 

  const days = ["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"];
  const months = ["January","February","March","April","May","June","July","August","September","October","November","December"];

  document.getElementById("date").textContent = dateObj.getDate();
  document.getElementById("day").textContent = days[dateObj.getDay()];
  document.getElementById("month").textContent = months[dateObj.getMonth()];
  document.getElementById("year").textContent = dateObj.getFullYear();