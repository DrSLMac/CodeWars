const past = (h, m, s) => h * 3600000 + m * 60000 + s * 1000

//convert to milliseconds
//1 second = 1000 ms
//1 minute = 60 seconds = 60000ms
//1 hour = 60 minutes = 3600 seconds = 3600000ms

 


console.log("past(): ", past(1,0,0))