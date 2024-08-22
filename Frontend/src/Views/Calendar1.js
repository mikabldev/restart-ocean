import React, { useState } from 'react';
import { Calendar, momentLocalizer } from 'react-big-calendar';
import "react-big-calendar/lib/css/react-big-calendar.css";
import moment from 'moment';
import 'moment/locale/es';
import '../components/Calendario/Calendar1.css';

moment.locale('es');
const localizer = momentLocalizer(moment);

const Calendar1 = () => {
  const [estadoModal, setEstadoModal] = useState({
    mostrarModal: false,
    modalEliminar: false,
    modalEvento: false,
    eventoSeleccionado: null,
    fechaInicio: '',
    fechaFinal: '',
    tituloEvento: '',
    descripcion: ''
  });
  const [eventos, setEventos] = useState([]);
  const manejadorEventos = ({ start, end }) => {
    setEstadoModal({
      ...estadoModal,
      mostrarModal: true,
      fechaInicio: start,
      fechaFinal: end
    });
  }
  const guardarEvento = () => {
    const { tituloEvento, fechaInicio, fechaFinal, descripcion } = estadoModal;
    if (tituloEvento && fechaInicio && fechaFinal && descripcion) {
      const eventoNuevo = {
        id: new Date().getTime(), // Genera un ID único para el evento
        title: tituloEvento,
        start: fechaInicio,
        end: fechaFinal,
        description: descripcion,
      };
      setEventos([...eventos, eventoNuevo]);
      setEstadoModal({
        ...estadoModal,
        mostrarModal: false,
        tituloEvento: '',
        descripcion: '',
        fechaInicio: '',
        fechaFinal: ''
      });
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
  
  const abrirModalEliminar = () => {
    setEstadoModal({
      ...estadoModal,
      modalEliminar: true,
      modalEvento: false
    });
  }
  
  const eliminarEvento = () => {
    setEventos(eventos.filter(event => event.id !== estadoModal.eventoSeleccionado.id));
    cerrarModalEvento();
    setEstadoModal({
      ...estadoModal,
      modalEliminar: false,
      eventoSeleccionado: null
    });
  }
  const Event = ({ event }) => (
    <div>
      <strong>{event.title}</strong>
      <p> Descripción: {event.description}</p>
    </div>
  );
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
        events={eventos}
        views={["month", "week", "day"]}
        selectable
        onSelectSlot={manejadorEventos}
        onSelectEvent={abrirModalEvento}
        components={{
          event: Event
        }}
      />
      {estadoModal.mostrarModal && (
        <div class="modal" style={{ display: 'block', position: 'fixed', top: 0, bottom: 0, left: 0, right: 0 }}>
          <div class="modal-dialog">
            <div class="modal-content">
              <div class="modal-header">
                <h5 class="modal-title">Guarda tu evento</h5>
                <button type="button" class="btn-close" onClick={() => setEstadoModal({ ...estadoModal, mostrarModal: false })}></button>
              </div>
              <div class="modal-body">
                <label>Título del Evento</label>
                <input
                  type='text'
                  className='form-control'
                  id='tituloEvento'
                  value={estadoModal.tituloEvento}
                  onChange={(e) => setEstadoModal({ ...estadoModal, tituloEvento: e.target.value })}
                />
                <label>Descripción del evento</label>
                <input
                  type='text'
                  className='form-control'
                  value={estadoModal.descripcion}
                  onChange={(e) => setEstadoModal({ ...estadoModal, descripcion: e.target.value })}
                />
                <label>Horario de inicio</label>
                <input
                  type='datetime-local'
                  className='form-control'
                  value={moment(estadoModal.fechaInicio).format('YYYY-MM-DDTHH:mm')}
                  onChange={(e) => setEstadoModal({ ...estadoModal, fechaInicio: new Date(e.target.value) })}
                />
                <label>Horario de fin</label>
                <input
                  type='datetime-local'
                  className='form-control'
                  value={moment(estadoModal.fechaFinal).format('YYYY-MM-DDTHH:mm')}
                  onChange={(e) => setEstadoModal({ ...estadoModal, fechaFinal: new Date(e.target.value) })}
                />
              </div>
              <div class="modal-footer">
                <button type="button" onClick={guardarEvento} className='btn btn-primary'>Guardar Evento</button>
              </div>
            </div>
          </div>
        </div>
      )}
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
                <button type="button" onClick={abrirModalEliminar} className="btn btn-danger">Eliminar Evento</button>
              </div>
            </div>
          </div>
        </div>
      )}
      {estadoModal.modalEliminar && (
        <div className="modal" style={{ display: 'block', position: 'fixed', top: 0, bottom: 0, left: 0, right: 0 }}>
          <div className="modal-dialog">
            <div className="modal-content">
              <div className="modal-header">
                <h5 className="modal-title">Eliminar Evento</h5>
                <button type="button" className="btn-close" onClick={() => setEstadoModal({ ...estadoModal, modalEliminar: false })}></button>
              </div>
              <div className="modal-body">
                <p>¿Estás seguro de que quieres eliminar el evento "{estadoModal.eventoSeleccionado?.title}"?</p>
              </div>
              <div className="modal-footer">
                <button type="button" onClick={eliminarEvento} className="btn btn-danger">Eliminar</button>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default Calendar1;
