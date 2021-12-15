import { useState } from "react";
import Layout from "../components/Layout";

export default function alcanceDeAcreditacion() {
  const [estado, setEstado] = useState('CERTIFICACIÓN INICIAL DE PRODUCTO')

  return (
    <Layout>
      <div className="ocp-layout">
        <h2>Organismo de Certificación de Producto</h2>
        <h1>Alcance de Acreditación</h1>
        
        <p className="clausulas pt-3">En caso de estar interesado en la certificación de su producto, lo invitamos a que descargue las<br />Condiciones de certificación y Solicitud de certificación; llenarlas, fírmarlas y enviarlas por correo a los datos de contacto.</p>
      </div>
    </Layout>
  )
}