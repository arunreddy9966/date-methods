import React from 'react'
import moment from 'moment/moment';
function DateClass() {

let republicDay=new Date(1952,0,26);

//let republicDay=new Date(12365498778954);

let monthsArr=["january","february","march","april","may","june",
           "july","august","september","october","november","december"];

 let daysArr=["sunday","monday","tuesday","wednesday",
             "thursday","friday","saturday"];

console.log(republicDay.getFullYear());
console.log(monthsArr[republicDay.getMonth()]);
console.log(daysArr[republicDay.getDay()]);
console.log(republicDay.getDate());
console.log(republicDay.getHours());
console.log(republicDay.getMinutes());
console.log(republicDay.getSeconds());
console.log(republicDay.getTime());
  return (
    <div>
    <h1> Learning Date-Class And Moment js</h1>
    <form>
      <div>
      <label>Year Start Date</label>
      <input type='datetime-local' onChange={(e)=>{
      let selectedDate = new Date(e.target.value);

     console.log(moment(selectedDate).add(365, 'days').calendar());

      console.log(selectedDate.getFullYear());
      console.log(monthsArr[selectedDate.getMonth()]);
      console.log(daysArr[selectedDate.getDay()]);
      console.log(selectedDate.getDate());
      console.log(selectedDate.getHours());
      console.log(selectedDate.getMinutes());
      console.log(selectedDate.getSeconds());
      console.log(selectedDate.getMilliseconds());
      console.log(selectedDate.getTime());

      let yearEndINMs = 365*24*60*60*1000

      let yearEndDateINMs = selectedDate.getTime()+yearEndINMs;

      let yearEndDate=new Date(yearEndDateINMs);

      console.log(yearEndDate);

      }}></input>
      </div>


      <div>
      <button type="button" onClick={()=>{
        console.log(moment().format('dddd MMMM Do YYYY, h:mm:ss a'));
      }}>Moment js</button>
      </div>

    </form>
    </div>
  )
}

export default DateClass