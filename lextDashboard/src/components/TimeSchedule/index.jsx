import { useState, useRef, useEffect } from 'react';

import {
  CalendarWrapper,
  Header,
  Button,
  FilterWrapper,
  FilterButton,
  Dropdown,
  DropdownHeader,
  DropdownItem,
  Grid,
  DateCell,
  Cell,
  Event,
  DropdownItemWrapper,
  NextYearIcon,
  PrefYearIcon,
  LeftButtonWrapper,
  TodayButton,
} from './scheduleElements';

import SlideModal from '../SlideModal'

import {
  chevronRightBlack,
  chevronLeftBlack,
} from '../../assets'

const eventsData = [
  { date: '2024-07-24T00:00:00Z', title: 'Event 1 sdfsdfsd sdfsfsd' },
  { date: '2024-07-24T00:00:00Z', title: 'Event 2' },
  { date: '2024-07-25T00:00:00Z', title: 'Event 3' },
  { date: '2024-07-25T00:00:00Z', title: 'Event 2' },
  { date: '2024-07-25T00:00:00Z', title: 'Event 1' },
  { date: '2024-07-5T00:00:00Z', title: 'Event 2' },
  { date: '2024-07-4T00:00:00Z', title: 'Event 1' },
  { date: '2024-07-27T00:00:00Z', title: 'Event 2' },
  { date: '2024-07-27T00:00:00Z', title: 'Event 1' },
  { date: '2024-07-27T00:00:00Z', title: 'Event 2' },
  { date: '2024-07-27T00:00:00Z', title: 'Event 2' },
  { date: '2024-07-27T00:00:00Z', title: 'Event 1' },
  { date: '2024-07-27T00:00:00Z', title: 'Event 2' },
  // Add more event objects here
];

const Calendar = () => {
  const [currentMonth, setCurrentMonth] = useState(new Date());
  const [modalDate, setModalDate] = useState(null);
  const [eventInfo, setEventInfo] = useState([]);
  const [showDropdown, setShowDropdown] = useState(false);
  const dropdownRef = useRef(null);

  const events = eventsData.reduce((acc, event) => {
    const date = new Date(event.date).toDateString();
    if (!acc[date]) acc[date] = [];
    acc[date].push(event);
    return acc;
  }, {});

  const generateCalendar = (month) => {
    const start = new Date(month.getFullYear(), month.getMonth(), 1);
    const end = new Date(month.getFullYear(), month.getMonth() + 1, 0);
    const days = [];

    for (let i = start.getDay(); i > 0; i--) {
      days.push(new Date(start.getFullYear(), start.getMonth(), start.getDate() - i));
    }

    for (let i = 1; i <= end.getDate(); i++) {
      days.push(new Date(month.getFullYear(), month.getMonth(), i));
    }

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

  const daysInMonth = generateCalendar(currentMonth);
  const today = new Date().toDateString();

  const handleDropdownToggle = () => {
    setShowDropdown(!showDropdown);
  };

  const handleMonthSelect = (month, year) => {
    setCurrentMonth(new Date(year, month));
    setShowDropdown(false);
  };

  const months = [
    'January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'
  ];

  const setPrefYear = () => {
    setCurrentMonth(new Date(currentMonth.getFullYear() - 1, currentMonth.getMonth()));
  };

  const setNextYear = () => {
    setCurrentMonth(new Date(currentMonth.getFullYear() + 1, currentMonth.getMonth()));
  };

  const handleTodayClick = () => {
    setCurrentMonth(new Date());
  };

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setShowDropdown(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  return (
    <CalendarWrapper>
      <Header>
        <LeftButtonWrapper>
          <Button onClick={handlePrevMonth}>Previous</Button>
          <FilterButton onClick={handleDropdownToggle}>Filter</FilterButton>
          <FilterWrapper ref={dropdownRef}>
          <TodayButton onClick={handleTodayClick}>Today</TodayButton>
            {showDropdown && (
              <Dropdown>
                <DropdownHeader>
                  <PrefYearIcon src={chevronLeftBlack} onClick={setPrefYear} />
                  {currentMonth.getFullYear()}
                  <NextYearIcon src={chevronRightBlack} onClick={setNextYear} />
                </DropdownHeader>
                <DropdownItemWrapper>
                  {months.map((month, index) => (
                    <DropdownItem key={month} onClick={() => handleMonthSelect(index, currentMonth.getFullYear())}>
                      {month}
                    </DropdownItem>
                  ))}
                </DropdownItemWrapper>
              </Dropdown>
            )}
          </FilterWrapper>
        </LeftButtonWrapper>
        <h3>
          {currentMonth.toLocaleString('default', { month: 'long' })} {currentMonth.getFullYear()}
        </h3>
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
              isDay={isCurrentMonth}
              today={isToday}
              onClick={() => isCurrentMonth && handleDateClick(day)}
            >
              {day.getDate()}
              {events[dateString] && events[dateString].slice(0, 3).map((event, index) => (
                <Event key={index} color={index === 0 ? '#5d87ff' : index === 1 ? '#d93025' : '#fbbc05'}>
                  {event.title.length > 16 ? event.title.slice(0, 12) + '...' : event.title}
                </Event>
              ))}
              {events[dateString] && events[dateString].length > 3 && (
                <div style={{ fontSize: '12px', color: '#5d87ff' }}>+{events[dateString].length - 3} more</div>
              )}
            </Cell>
          );
        })}
      </Grid>
      <SlideModal
        isOpen={modalDate}
        onClose={handleModalClose}
        from="right"
      >
        <h2>Slide Modal</h2>
        {eventInfo.map((event, index) => (
          <div key={index}>
            <Event color={index === 0 ? '#5d87ff' : index === 1 ? '#d93025' : '#fbbc05'}>
              {event.title}
            </Event>
          </div>
        ))}
      </SlideModal>
    </CalendarWrapper>
  );
};

export default Calendar;
