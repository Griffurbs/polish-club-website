import { Table } from "react-bootstrap";

const days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
const months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"]

var getDaysInMonth = function(month,year) {
    return new Date(year, month+1, 0).getDate();
};

function Calendar(){
    var date = new Date(2022, 6);
    var dayofweek = date.getDay();
    var day = date.getDate()
    var startday = dayofweek-day%7+1
    var month = date.getMonth();
    var year = date.getFullYear();
    var days = getDaysInMonth(month, year)
    var daysPast = getDaysInMonth(month-1, year)
    const dayCapacity = 42
    var weeks = [
        [0, 0, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0, 0]
    ]
    if(startday >= 7) startday-=7
    // This month
    var curDay = startday
    for(var i = 0; i < days; i++){
        var week = Math.floor(curDay / 7)
        console.log(week)
        weeks[week][curDay % 7] = i+1
        curDay++
    }
    // Last month
    curDay = daysPast
    for(i = startday-1; i >= 0; i--){
        var week = Math.floor(i / 7)
        console.log(week)
        weeks[week][i % 7] = curDay
        curDay--
    }
    // Next month
    curDay = 1
    for(i = days+startday; i < dayCapacity ; i++){
        var week = Math.floor(i / 7)
        console.log(week)
        weeks[week][i % 7] = curDay
        curDay++
    }
    
    return (
        <Table striped bordered>
            <thead>
                <th>Sunday</th>
                <th>Monday</th>
                <th>Tuesday</th>
                <th>Wednesday</th>
                <th>Thursday</th>
                <th>Friday</th>
                <th>Saturday</th>
            </thead>
            <tbody>
                <tr>
                    {weeks[0].map(day => <td>{day}</td>)}
                </tr>
                <tr>
                    {weeks[1].map(day => <td>{day}</td>)}
                </tr>
                <tr>
                    {weeks[2].map(day => <td>{day}</td>)}
                </tr>
                <tr>
                    {weeks[3].map(day => <td>{day}</td>)}
                </tr>
                <tr>
                    {weeks[4].map(day => <td>{day}</td>)}
                </tr>
                <tr>
                    {weeks[5].map(day => <td>{day}</td>)}
                </tr>
            </tbody>
        </Table>
    );
}

export default Calendar;