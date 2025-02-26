import React, { useState, useEffect, useRef } from "react";
import Quill from "quill";
import "quill/dist/quill.snow.css"; 

function EditorPlantilla({ modalOpen, setModalOpen }) {
  const [asunto, setAsunto] = useState("");
  const [contenido, setContenido] = useState("");
  const quillRef = useRef(null);  // Referencia al editor Quill
  const quillInstance = useRef(null);  // Referencia a la instancia de Quill

  useEffect(() => {
    // Si la instancia de Quill ya existe, no la inicialices de nuevo
    if (!quillInstance.current) {
      const quill = new Quill(quillRef.current, {
        theme: "snow",
        modules: {
          toolbar: [
            [{ 'header': '1' }, { 'header': '2' }, { 'font': [] }],
            [{ 'list': 'ordered' }, { 'list': 'bullet' }],
            ['bold', 'italic', 'underline'],
            ['link'],
            [{ 'align': [] }],
            ['clean'],
          ],
        },
        formats: ['header', 'font', 'list', 'bullet', 'bold', 'italic', 'underline', 'link', 'align', 'clean'],
      });

      quillInstance.current = quill;  // Almacena la instancia de Quill

      // Actualiza el contenido cada vez que cambia
      quill.on('text-change', () => {
        setContenido(quill.root.innerHTML);  // Obtenemos el contenido HTML
      });
    }

    return () => {
      if (quillInstance.current) {
        // Limpiar la instancia de Quill al desmontar el componente
        quillInstance.current.off('text-change');
      }
    };
  }, []); // El efecto se ejecuta solo una vez

  const handleSave = () => {
    console.log("Guardar:", { asunto, contenido });
    console.log("Contenido HTML:", contenido);  // Contenido en HTML
    setModalOpen(false);
  };

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
      <div className="bg-white rounded-lg shadow-lg w-full max-w-lg overflow-hidden">
        {/* Cabecera del modal */}
        <div className="flex justify-between items-center p-4 border-b bg-gray-100">
          <h2 className="text-lg font-semibold">Plantilla</h2>
          <button
            onClick={() => setModalOpen(false)}
            className="text-black hover:text-gray-700 text-xl font-bold"
          >
            ×
          </button>
        </div>

        {/* Cuerpo del modal */}
        <div className="p-4">
          {/* Campo de asunto */}
          <div className="mb-4">
            <label className="block mb-2 text-sm font-medium">Asunto</label>
            <input
              type="text"
              className="w-full border border-gray-300 rounded px-3 py-2 focus:ring focus:ring-blue-200"
              value={asunto}
              onChange={(e) => setAsunto(e.target.value)}
            />
          </div>

          {/* Editor Quill */}
          <div className="mb-4">
            <label className="block mb-2 text-sm font-medium">Contenido</label>
            <div ref={quillRef} className="editor" style={{ height: '300px' }}></div> {/* Aquí se montará Quill */}
          </div>
        </div>

        {/* Pie del modal con botón guardar */}
        <div className="flex justify-end p-4 border-t bg-gray-100">
          <button
            className="bg-blue-600 hover:bg-blue-700 text-white px-5 py-2 rounded-lg"
            onClick={handleSave}
          >
            Guardar
          </button>
        </div>
      </div>
    </div>
  );
}

export default EditorPlantilla;
