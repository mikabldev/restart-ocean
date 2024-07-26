import React from 'react';
import { Calendar, momentLocalizer } from 'react-big-calendar'; 
import "react-big-calendar/lib/css/react-big-calendar.css"; 
import moment from 'moment'; 
import './Calendar1.css'; 
import 'moment/locale/es'; 

moment.locale('es');

const localizer = momentLocalizer(moment);

const Calendar1 = () => {
  return (

    <div className="calendar-container"> 
      <Calendar 
        messages={{
          allDay: "Todo el día",
          previous: "Anterior",
          next: "Siguiente",
          today: "Hoy",
          month: "Mes",
          week: "Semana",
          day: "Día",
          agenda: "Agenda",
          date: "Fecha",
          time: "Hora",
          event: "Evento",
          noEventsInRange: "Sin eventos",
        }}
        localizer={localizer} 
        views={["month", "week", "day"]}
        style={{ width: '100%', height: '100%' }}
      />
    </div>
  )
}
export default Calendar1