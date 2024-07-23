import { useState } from 'react';
import {
  CalendarWrapper,
  Header,
  Button,
  Grid,
  Cell,
  Modal,
  ModalOverlay,
  DateCell,
} from './scheduleElements';

// Example Event Data
const eventsData = [
  { date: '2024-07-01', title: 'Depart to Umrah - Group A', color: '#ff9999' },
  { date: '2024-07-01', title: 'Umrah in Makkah - Group B', color: '#99ff99' },
  { date: '2024-07-02', title: 'Day 2 Activity - Group A', color: '#ffcc99' },
  { date: '2024-07-03', title: 'Day 3 Activity - Group A', color: '#99ccff' },
  { date: '2024-07-04', title: 'Day 4 Activity - Group B', color: '#ffccff' },
  { date: '2024-07-05', title: 'Day 5 Activity - Group B', color: '#c2c2f0' },
  { date: '2024-07-06', title: 'Day 6 Activity - Group A', color: '#ffb3e6' },
  { date: '2024-07-07', title: 'Day 7 Activity - Group B', color: '#e6ffb3' },
  // Add more events as needed
];

const Calendar = () => {
  const [currentMonth, setCurrentMonth] = useState(new Date());
  const [modalDate, setModalDate] = useState(null);
  const [eventInfo, setEventInfo] = useState('');

  // Convert event data into a format suitable for rendering
  const events = eventsData.reduce((acc, event) => {
    const date = new Date(event.date).toDateString();
    if (!acc[date]) acc[date] = [];
    acc[date].push({ title: event.title, color: event.color });
    return acc;
  }, {});

  const generateCalendar = (month) => {
    const start = new Date(month.getFullYear(), month.getMonth(), 1);
    const end = new Date(month.getFullYear(), month.getMonth() + 1, 0);
    const days = [];

    // Adding previous month's days
    for (let i = start.getDay(); i > 0; i--) {
      days.push(new Date(start.getFullYear(), start.getMonth(), start.getDate() - i));
    }

    // Adding current month's days
    for (let i = 1; i <= end.getDate(); i++) {
      days.push(new Date(month.getFullYear(), month.getMonth(), i));
    }

    // Adding next month's days
    for (let i = 1; days.length % 7 !== 0; i++) {
      days.push(new Date(end.getFullYear(), end.getMonth(), end.getDate() + i));
    }

    return days;
  };

  const handlePrevMonth = () => {
    setCurrentMonth(new Date(currentMonth.getFullYear(), currentMonth.getMonth() - 1));
  };

  const handleNextMonth = () => {
    setCurrentMonth(new Date(currentMonth.getFullYear(), currentMonth.getMonth() + 1));
  };

  const handleDateClick = (date) => {
    setModalDate(date);
    setEventInfo(events[date.toDateString()] || []);
  };

  const handleModalClose = () => {
    setModalDate(null);
  };

  const handleInputChange = (e) => {
    setEventInfo(e.target.value);
  };

  const handleSave = () => {
    if (modalDate) {
      // Update event information (e.g., in the state or send to an API)
      setEventInfo(eventInfo);
      handleModalClose();
    }
  };

  const daysInMonth = generateCalendar(currentMonth);
  const today = new Date().toDateString();

  return (
    <CalendarWrapper>
      <Header>
        <Button onClick={handlePrevMonth}>Previous</Button>
        <h2>{currentMonth.toLocaleString('default', { month: 'long' })} {currentMonth.getFullYear()}</h2>
        <Button onClick={handleNextMonth}>Next</Button>
      </Header>
      <Grid>
        {['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'].map((day) => (
          <DateCell key={day}>{day}</DateCell>
        ))}
        {daysInMonth.map((day) => {
          const isCurrentMonth = day.getMonth() === currentMonth.getMonth();
          const dateString = day.toDateString();
          const isToday = dateString === today;
          return (
            <Cell
              key={day}
              today={isToday}
              isDay={isCurrentMonth}
              onClick={() => isCurrentMonth && handleDateClick(day)}
            >
              {day.getDate()}
              {events[dateString] && events[dateString].map((event, index) => (
                <div
                  key={index}
                  className="event-info"
                  // style={{ backgroundColor: event.color }}
                >
                  {event.title}
                </div>
              ))}
            </Cell>
          );
        })}
      </Grid>

      {modalDate && (
        <>
          <ModalOverlay onClick={handleModalClose} />
          <Modal>
            <h3>{modalDate.toDateString()}</h3>
            <textarea value={eventInfo.map(e => e.title).join('\n')} onChange={handleInputChange} rows="4" cols="30" />
            <br />
            <Button onClick={handleSave}>Save</Button>
            <Button onClick={handleModalClose}>Close</Button>
          </Modal>
        </>
      )}
    </CalendarWrapper>
  );
};

export default Calendar;
