import React from 'react';
import DataTable from 'react-data-table-component';

const data = [
  { estado: 'Finalizado', nombre: 'ROD STEWART', fecha: '21:00 04/10/2023' },
  { estado: 'Finalizado', nombre: 'ULISES BUENO', fecha: '20:00 26/01/2024' },
  { estado: 'Finalizado', nombre: 'ULISES BUENO', fecha: '20:00 26/01/2024' },
  { estado: 'Finalizado', nombre: 'NICK WARREN', fecha: '22:00 10/02/2024' },
  { estado: 'Finalizado', nombre: 'BIZARREN FESTIVAL', fecha: '20:30 01/03/2024' },
  { estado: 'Finalizado', nombre: 'LOS PALMERAS', fecha: '20:00 22/03/2024' },
  { estado: 'Finalizado', nombre: 'Richie Hawtin', fecha: '23:10 04/05/2024' },
];

const columns = [
  {
    name: 'Estado',
    selector: row => row.estado,
    sortable: true,
    
  },
  {
    name: 'Nombre',
    selector: row => row.nombre,
    sortable: true,
  },
  {
    name: 'Fecha y Hora',
    selector: row => row.fecha,
    sortable: true,
  },
  {
    name: 'Opciones',
    button: true,
    cell: () => <button>Ver información adicional</button>,
  }
];

const VenueEventos = () => {
  return (
    <div>
      <DataTable
        title="Eventos"
        columns={columns}
        data={data}
        pagination
        highlightOnHover
      />
    </div>
  );
};

export  {VenueEventos};