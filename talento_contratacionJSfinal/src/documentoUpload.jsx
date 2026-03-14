import React, { useState } from "react";
import documentoService from "../../services/documentoService.js";

const DocumentoUpload = () => {
  const [file, setFile] = useState(null);

  const handleUpload = async () => {
    if (!file) return;
    await documentoService.subirDocumento(file);
    alert("Documento cargado correctamente");
  };

  return (
    <div>
      <h2>Subir Documento</h2>
      <input type="file" onChange={(e) => setFile(e.target.files[0])} />
      <button onClick={handleUpload}>Subir</button>
    </div>
  );
};

export default DocumentoUpload;
