import React, { useEffect, useState } from 'react';
import { Calendar, momentLocalizer } from 'react-big-calendar';
import "react-big-calendar/lib/css/react-big-calendar.css";
import moment from 'moment';
import 'moment/locale/es';
import '../components/Calendario/Calendar1.css';


moment.locale('es');
const localizer = momentLocalizer(moment);

const Calendar1 = () => {
  const [estadoModal, setEstadoModal] = useState({
    modalEvento: false,
    eventoSeleccionado: null,
  });
  const [eventos, setEventos] = useState([]);

  useEffect(() => {
    obtenerEventos();
  }, []);
    const obtenerEventos = async () => {
      try {
        const response = await fetch('http://localhost:3005/calendario/eventos');
        const eventos = await response.json();
        const eventosConvertidos = eventos.map(evento => ({
            ... evento, 
            start: new Date(evento.start),
            end: new Date(evento.end)
          }))
          setEventos(eventosConvertidos)
      }catch (error) {
        console.error('Error al obtener Eventos en front');
      }
    }        
  const abrirModalEvento = (event) => {
    setEstadoModal({
      ...estadoModal,
      eventoSeleccionado: event,
      modalEvento: true
    });
  }
  const cerrarModalEvento = () => {
    setEstadoModal({
      ...estadoModal,
      modalEvento: false,
      eventoSeleccionado: null
    });
  }
  const Event = ({ event }) => (
    <div>
      <strong>{event.title}</strong>
      <p> Descripción: {event.description}</p>
    </div>
  )

  return (
    <div>
      <h2 className='tituloCalendario'>Revisa los próximos eventos</h2>
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
        events={eventos}
        views={["month", "week", "day"]}
        selectable
        onSelectEvent={abrirModalEvento}
        components={{
          event: Event
        }}
      />
      {estadoModal.modalEvento && (
        <div className="modal" style={{ display: 'block', position: 'fixed', top: 0, bottom: 0, left: 0, right: 0 }}>
          <div className="modal-dialog">
            <div className="modal-content">
              <div className="modal-header">
                <h5 className="modal-title">Detalles del evento</h5>
                <button type="button" className="btn-close" onClick={() => cerrarModalEvento()}></button>
              </div>
              <div className="modal-body">
                <p><b>Título:</b> {estadoModal.eventoSeleccionado?.title}</p>
                <p><b>Descripción:</b> {estadoModal.eventoSeleccionado?.description}</p>
                <p><b>Fecha del evento: </b>{moment(estadoModal.eventoSeleccionado?.start).format('DD-MM-YYYY')} </p>
                <p><b>Horario del evento: </b>{moment(estadoModal.eventoSeleccionado?.start).format('HH:mm')} hrs. - {moment(estadoModal.eventoSeleccionado?.end).format('HH:mm')} hrs.</p>
              </div>
              <div className="modal-footer">
              </div>
            </div>
          </div>
        </div>
      )}
     </div>
    </div>
  );
}; 


export default Calendar1;
