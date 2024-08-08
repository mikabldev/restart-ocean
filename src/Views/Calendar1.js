import React, { useState } from 'react';
import { Calendar, momentLocalizer } from 'react-big-calendar';
import "react-big-calendar/lib/css/react-big-calendar.css";
import moment from 'moment';
import 'moment/locale/es';
import '../components/Calendario/Calendar1.css';
import Modal from 'react-modal';

moment.locale('es');
const localizer = momentLocalizer(moment);

// Configura el elemento raíz para el modal
Modal.setAppElement('#root');

const Calendar1 = () => {
  const [eventos, setEventos] = useState([]);
  const [mostrarModal, setMostrarModal] = useState(false);
  const [modalEliminar, setModalEliminar] = useState(false)
  const [fechaInicio, setFechaInicio] = useState(null)
  const [fechaFinal, setFechaFinal] = useState(null)
  const [tituloEvento, setTituloEvento] = useState('')
  const [eventoSeleccionado, setEventoSelenccionado] = useState(null)
  const [descripcion, setDescripcion] = useState('')

  const manejadorEventos = ({ start, end }) => {
    setMostrarModal(true);
    setFechaInicio(start);
    setFechaFinal(end);
  }
  const guardarEvento = () => {
    if (tituloEvento && fechaInicio && fechaFinal && descripcion) {
      const eventoNuevo = {
        title: tituloEvento,
        start: fechaInicio,
        end: fechaFinal,
        description: descripcion,
      };
      setEventos([...eventos, eventoNuevo]);
      setMostrarModal(false);
      setTituloEvento('');
      setDescripcion('')
    }
  }
  const abrirModalEliminar = (event) => {
    setEventoSelenccionado(event);
    setModalEliminar(true);
  }
  const eliminarEvento = () => {
    setEventos(eventos.filter(event => event !== eventoSeleccionado));
    setModalEliminar(false);
    setEventoSelenccionado(null)
  };
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
        onSelectEvent={abrirModalEliminar}
        components={{
          event: Event
        }}
      />
      {mostrarModal && (
        <div class="modal" style={{ display: 'block', position: 'fixed', top: 0, bottom: 0, left: 0, right: 0 }}>
          <div class="modal-dialog">
            <div class="modal-content">
              <div class="modal-header">
                <h5 class="modal-title">Guarda tu evento</h5>
                <button type="button" class="btn-close" onClick={() => setMostrarModal(false)}></button>
              </div>
              <div class="modal-body">
                <label>Título del Evento</label>
                <input
                  type='text'
                  className='form-control'
                  id='tituloEvento'
                  value={tituloEvento}
                  onChange={(e) => setTituloEvento(e.target.value)}
                />
                <label>Descripción del evento</label>
                <input
                  type='text'
                  className='form-control'
                  value={descripcion}
                  onChange={(e) => setDescripcion(e.target.value)}
                />
              </div>
              <div class="modal-footer">
                <button type="button" onClick={guardarEvento} className='btn btn-primary'>Guardar Evento</button>
              </div>
            </div>
          </div>
        </div>
      )}
      {modalEliminar &&
        <div className="modal" style={{ display: 'block', position: 'fixed', top: 0, bottom: 0, left: 0, right: 0 }}>
          <div className="modal-dialog">
            <div className="modal-content">
              <div className="modal-header">
                <h5 className="modal-title">Eliminar Evento</h5>
                <button type="button" className="btn-close" onClick={() => setModalEliminar(false)}></button>
              </div>
              <div className="modal-body">
                <p>¿Estás seguro de que quieres eliminar el evento "{eventoSeleccionado?.title}"?</p>
              </div>
              <div className="modal-footer">
                <button type="button" onClick={eliminarEvento} className="btn btn-danger">Eliminar</button>
                <button type="button" onClick={() => setModalEliminar(false)} className="btn btn-secondary">Cancelar</button>
              </div>
            </div>
          </div>
        </div>
      }
    </div>
  );
}

export default Calendar1;
