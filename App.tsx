import * as React from 'react';
import './style.css';
import { parse, format } from 'date-fns';

export default function App() {
  function showDate() {
    const inputDateString = '13.03.2023 01:10:00';

    // Parse the input string using the "parse" function from date-fns
    const inputDate = parse(inputDateString, 'dd.MM.yyyy HH:mm:ss', new Date());

    // Get the hours and minutes components of the date
    const hours = inputDate.getHours();
    const minutes = inputDate.getMinutes();

    // Format the output string using the "format" function from date-fns
    const outputDateString = format(inputDate, 'HH:mm dd.MM.yyyy');
    return <p>{outputDateString}</p>;
  }
  return (
    <div>
      <h1>Hello StackBlitz!</h1>
      <p>Start editing to see some magic happen :)</p>
      {showDate()}
    </div>
  );
}
