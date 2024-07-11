import { useState, useEffect } from 'react';
import styled from 'styled-components';

const DateTimeWidget = () => {
  const [currentTime, setCurrentTime] = useState(new Date());

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentTime(new Date());
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  const days = ["Minggu", "Senin", "Selasa", "Rabu", "Kamis", "Jumat", "Sabtu"];
  const day = days[currentTime.getDay()];
  const date = currentTime.toLocaleDateString();
  const time = currentTime.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });

  return (
    <WidgetContainer>
      <DateSection>{day}, {date}</DateSection>
      <TimeSection>{time}</TimeSection>
    </WidgetContainer>
  );
};

export default DateTimeWidget;

const WidgetContainer = styled.div`
  position: absolute;
  top: 10px;
  left: 10px;
  background-color: rgba(0, 0, 0, 0.7);
  color: white;
  padding: 10px;
  border-radius: 5px;
  text-align: center;
`;

const DateSection = styled.div`
  font-size: 14px;
`;

const TimeSection = styled.div`
  font-size: 18px;
  font-weight: bold;
`;
