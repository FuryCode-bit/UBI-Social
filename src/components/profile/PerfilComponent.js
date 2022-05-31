import React, { useEffect, useRef } from "react";
import { useNavigate } from "react-router-dom";


function PerfilComponent(props) {
  const navigation = useRef(useNavigate());

  // Verificar o estado do utilizador
  // Se já fez login ou se o token está válido


  const onChange = (e) => {
    const objectURL = URL.createObjectURL(e.target.files[0]);
    props.passFile(e.target.files[0]);
    props.passFileURL(objectURL);
  };

  return (
    <>
      <label htmlFor="file-upload" className="file_upload">
        <p>Alterar</p>foto de perfil
      </label>

      <input
        id="file-upload"
        type="file"
        className="custom-file-input"
        onChange={onChange}
      />
    </>
  );
}

export default PerfilComponent;