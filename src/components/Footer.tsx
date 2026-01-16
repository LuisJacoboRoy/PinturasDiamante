import './Footer.css';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-content">
        <div className="footer-column">
          <h4>Sucursal Ferrocarril</h4>
          <p><strong>Dirección:</strong> Avenida Ferrocarril #805-D</p>
          <p><strong>Teléfono:</strong> 951-143-34-67</p>
          <p><strong>Celular:</strong> 951-235-95-85</p>
          <p><strong>Horario:</strong> L-V 8:30am a 6:30pm, Sáb 8:30am a 4:30pm</p>
          <p><a href="https://maps.app.goo.gl/o3jfpZWSohha3w2n8?g_st=afm" target="_blank" rel="noopener noreferrer">Ver en Google Maps</a></p>
        </div>
        <div className="footer-column">
          <h4>Sucursal Las Culturas Xoxo</h4>
          <p><strong>Dirección:</strong> Carr. A. Arrazola #118, 21 de Marzo, Col. Las Culturas</p>
          <p><strong>Teléfono:</strong> 951-768-30-49</p>
          <p><strong>Celular:</strong> 951-652-35-93</p>
          <p><strong>Horario:</strong> L-V 8:30am a 6:00pm, Sáb 8:30am a 4:30pm</p>
          <p><a href="https://maps.app.goo.gl/kjmbXhMzDKT5hfax9?g_st=afm" target="_blank" rel="noopener noreferrer">Ver en Google Maps</a></p>
        </div>
      </div>
      <div className="footer-bottom">
        <p>&copy; {new Date().getFullYear()} Pinturas Diamante Oaxaca. Todos los derechos reservados.</p>
      </div>
    </footer>
  );
};

export default Footer;
