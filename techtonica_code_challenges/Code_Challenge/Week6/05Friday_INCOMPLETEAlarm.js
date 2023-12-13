//PROMPT
/*
Given a day of the week encoded as 0=Sun, 1=Mon, 2=Tue, ...6=Sat, and a boolean indicating if we are on vacation, return a string of the form "7:00" indicating when the alarm clock should ring. 
Weekdays, the alarm should be "7:00" and on the weekend it should be "10:00". 
Unless we are on vacation -- then on weekdays it should be "10:00" and weekends it should be "off".
*/

console.log(alarm_clock(1, false), "Expect: 7:00");
console.log(alarm_clock(5, false), "Expect: 7:00");
console.log(alarm_clock(0, false), "Expect: 10:00");
console.log(alarm_clock(6, true), "Expect: off");
console.log(alarm_clock(6, false), "Expect: 10:00");
console.log(alarm_clock(3, true), "Expect: 10:00");

function alarm_clock(day_of_week, on_vacation){

  return
}
