import React, { useState } from 'react';
import { Calendar, momentLocalizer } from 'react-big-calendar';
import "react-big-calendar/lib/css/react-big-calendar.css";
import moment from 'moment';
import 'moment/locale/es';
import '../components/Calendario/Calendar1.css';

moment.locale('es');
const localizer = momentLocalizer(moment);

const Calendar1 = () => {
  const [eventos, setEventos] = useState([]);
  const [mostrarModal, setMostrarModal] = useState(false);
  const [modalEliminar, setModalEliminar] = useState(false)
  const [fechaInicio, setFechaInicio] = useState(null)
  const [fechaFinal, setFechaFinal] = useState(null)
  const [tituloEvento, setTituloEvento] = useState('')
  const [eventoSeleccionado, setEventoSeleccionado] = useState(null)
  const [descripcion, setDescripcion] = useState('')
  const [modalEvento, setModalEvento] = useState(false);

  const manejadorEventos = ({ start, end }) => {
    setMostrarModal(true);
    setFechaInicio(start);
    setFechaFinal(end);
  }
  const guardarEvento = () => {
    if (tituloEvento && fechaInicio && fechaFinal && descripcion) {
      const eventoNuevo = {
        id: new Date().getTime(), // Genera un ID único para el evento
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
  const abrirModalEvento = (event) => {
    setEventoSeleccionado(event);
    setModalEvento(true);
  };
  const cerrarModalEvento = () => {
    setModalEvento(false);
    setEventoSeleccionado(null);
  };
  const abrirModalEliminar = () => {
    setModalEliminar(true);
    setModalEvento(false)
  };
  const eliminarEvento = () => {
    setEventos(eventos.filter(event => event.id !== eventoSeleccionado.id));
    cerrarModalEvento();
    setModalEliminar(false);
    setEventoSeleccionado(null);
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
        onSelectEvent={abrirModalEvento}
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
      {modalEvento && (
        <div className="modal" style={{ display: 'block', position: 'fixed', top: 0, bottom: 0, left: 0, right: 0 }}>
          <div className="modal-dialog">
            <div className="modal-content">
              <div className="modal-header">
                <h5 className="modal-title">Detalles del evento</h5>
                <button type="button" className="btn-close" onClick={() => setModalEvento(false)}></button>
              </div>
              <div className="modal-body">
                <p><b>Título:</b> {eventoSeleccionado?.title}</p>
                <p><b>Descripción:</b> {eventoSeleccionado?.description}</p>
                <p><b>Fecha de inicio:</b>{moment(eventoSeleccionado?.start).format('DD-MM-YYYY HH:mm')} hrs. </p>
                <p><b>Fecha final:</b> {moment(eventoSeleccionado?.end).format('DD-MM-YYYY HH:mm')} hrs.</p>
              </div>
              <div className="modal-footer">
                <button type="button" onClick={abrirModalEliminar} className="btn btn-danger">Eliminar Evento</button>
                <button type="button" onClick={() => setModalEvento(false)} className="btn btn-secondary">Cerrar ventana</button>
              </div>
            </div>
          </div>
        </div>
      )}
      {modalEliminar &&(
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
      )}
    </div>
  );
}

export default Calendar1;
