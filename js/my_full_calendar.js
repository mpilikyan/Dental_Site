$(function() {

  // page is now ready, initialize the calendar...

  $('#calendar').fullCalendar({
    // put your options and callbacks here
  })

});

$('#calendar').fullCalendar({
  defaultView: 'agendaWeek',
  events: [
    // events go here
  ],
  resources: [
    { id: 'a', title: 'Room A' },
    { id: 'b', title: 'Room B' },
    { id: 'c', title: 'Room C' },
    { id: 'd', title: 'Room D' }
  ]
});
