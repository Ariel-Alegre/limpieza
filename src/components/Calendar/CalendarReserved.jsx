import React, { useState } from 'react';
import { Calendar, momentLocalizer } from 'react-big-calendar';
import moment from 'moment';
import 'react-big-calendar/lib/css/react-big-calendar.css';

const localizer = momentLocalizer(moment);

const CalendarReserved = () => {
  const [events, setEvents] = useState([]);
  const [selectedSlot, setSelectedSlot] = useState(null);

  const handleSelectSlot = (slotInfo) => {
    const start = moment(slotInfo.start).toDate();
    const end = moment(slotInfo.end).toDate();

    if (selectedSlot) {
      // Si ya hay una reserva, elimínala antes de agregar la nueva
      setEvents([]);
      setSelectedSlot(null);
    }

    setEvents([{ start, end, title: 'Reservado' }]);
    setSelectedSlot(slotInfo);

    console.log(slotInfo);
  };

  return (
    <Calendar
      localizer={localizer}
      events={events}
      defaultView="day"
      views={['day']}
      step={60} // Intervalo de minutos
      timeslots={1}
      selectable={true}
      onSelectSlot={handleSelectSlot}
      style={{ height: '500px' }}
    />
  );
};

export default CalendarReserved;
