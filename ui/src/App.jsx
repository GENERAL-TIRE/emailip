import { useState, useEffect } from 'react';

function App() {
  const [status, setStatus] = useState(null);
  const [config, setConfig] = useState({
    SMTP_HOST: '',
    SMTP_PORT: '',
    SMTP_USER: '',
    SMTP_PASS: '',
    SMTP_FROM: '',
    SUPPORT_EMAIL: '',
    CC_EMAILS: ''
  });
  const [loading, setLoading] = useState(true);
  const [saving, setSaving] = useState(false);

  // Determinar la URL de la API (si estamos en dev de vite, apuntar al 5173, sino usar rutas relativas)
  const apiUrl = process.env.NODE_ENV === 'development' ? 'http://localhost:5173/api' : '/api';

  useEffect(() => {
    fetchData();
    // Actualizar estado cada 10 segundos
    const interval = setInterval(fetchStatus, 10000);
    return () => clearInterval(interval);
  }, []);

  const fetchData = async () => {
    setLoading(true);
    await Promise.all([fetchStatus(), fetchConfig()]);
    setLoading(false);
  };

  const fetchStatus = async () => {
    try {
      const res = await fetch(`${apiUrl}/status`);
      const data = await res.json();
      setStatus(data);
    } catch (e) {
      console.error('Error fetching status:', e);
    }
  };

  const fetchConfig = async () => {
    try {
      const res = await fetch(`${apiUrl}/config`);
      const data = await res.json();
      setConfig(prev => ({ ...prev, ...data.config }));
    } catch (e) {
      console.error('Error fetching config:', e);
    }
  };

  const handleAction = async (action) => {
    try {
      const res = await fetch(`${apiUrl}/action`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ action })
      });
      const result = await res.json();
      if (result.success) {
        alert(result.message);
        fetchStatus();
      } else {
        alert('Error: ' + result.message);
      }
    } catch (e) {
      alert('Error de conexión');
    }
  };

  const handleSave = async (e) => {
    e.preventDefault();
    setSaving(true);
    try {
      const res = await fetch(`${apiUrl}/config`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(config)
      });
      const result = await res.json();
      if (result.success) {
        alert('Configuración guardada exitosamente');
      } else {
        alert('Error guardando configuración');
      }
    } catch (e) {
      alert('Error de conexión');
    }
    setSaving(false);
  };

  const handleChange = (e) => {
    setConfig({ ...config, [e.target.name]: e.target.value });
  };

  if (loading) return <div style={{textAlign: 'center', marginTop: '50px'}}>Cargando...</div>;

  return (
    <>
      <h1 className="title">Monitor IP Llantas Regio</h1>
      
      <div className="grid-container">
        
        {/* Panel de Estado */}
        <div className="glass-panel">
          <h2>Estado del Servicio</h2>
          
          <div style={{ margin: '1.5rem 0' }}>
            <div style={{ color: 'var(--text-muted)', fontSize: '0.9rem', marginBottom: '8px' }}>IP Pública Actual</div>
            <div className="ip-display">
              {status?.currentIp || 'Desconocida'}
            </div>
          </div>

          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
            <span style={{ color: 'var(--text-muted)' }}>Servicio en 2º plano:</span>
            <div className={`status-badge ${status?.isRunning ? 'active' : 'inactive'}`}>
              <div className={`indicator ${status?.isRunning ? 'active' : 'inactive'}`}></div>
              {status?.isRunning ? 'Ejecutándose' : 'Detenido'}
            </div>
          </div>
          
          <div style={{ marginTop: '1rem', color: 'var(--text-muted)', fontSize: '0.85rem' }}>
            Última revisión: {status?.lastCheckTime ? new Date(status.lastCheckTime).toLocaleTimeString() : 'N/A'}
          </div>

          <div className="action-bar">
            {status?.isRunning ? (
              <button className="btn btn-danger" onClick={() => handleAction('stop')}>
                Detener Monitor
              </button>
            ) : (
              <button className="btn btn-success" onClick={() => handleAction('start')}>
                Iniciar Monitor
              </button>
            )}
            <button className="btn" style={{background: 'rgba(255,255,255,0.1)', color: 'white'}} onClick={() => handleAction('force_check')}>
              Forzar Revisión
            </button>
          </div>
        </div>

        {/* Panel de Configuración */}
        <form className="glass-panel" onSubmit={handleSave}>
          <h2>Configuración de Alertas</h2>
          
          <div className="form-group">
            <label>Correo Principal de Soporte</label>
            <input name="SUPPORT_EMAIL" value={config.SUPPORT_EMAIL || ''} onChange={handleChange} placeholder="ej. soporte@proveedor.com" required />
          </div>
          <div className="form-group">
            <label>Correos en Copia (CC)</label>
            <input name="CC_EMAILS" value={config.CC_EMAILS || ''} onChange={handleChange} placeholder="Separados por coma" />
          </div>
          
          <hr style={{border: 'none', borderTop: '1px solid var(--panel-border)', margin: '1.5rem 0'}} />
          
          <h2 style={{fontSize: '1.1rem', marginBottom: '1rem'}}>Servidor SMTP (Envío)</h2>
          <div style={{display: 'flex', gap: '12px'}}>
            <div className="form-group" style={{flex: 2}}>
              <label>Host SMTP</label>
              <input name="SMTP_HOST" value={config.SMTP_HOST || ''} onChange={handleChange} />
            </div>
            <div className="form-group" style={{flex: 1}}>
              <label>Puerto</label>
              <input name="SMTP_PORT" value={config.SMTP_PORT || ''} onChange={handleChange} />
            </div>
          </div>
          
          <div className="form-group">
            <label>Usuario (Remitente)</label>
            <input name="SMTP_USER" value={config.SMTP_USER || ''} onChange={handleChange} />
          </div>
          <div className="form-group">
            <label>Contraseña</label>
            <input type="password" name="SMTP_PASS" value={config.SMTP_PASS || ''} onChange={handleChange} />
          </div>

          <div className="action-bar" style={{justifyContent: 'space-between'}}>
            <button type="submit" className="btn btn-primary" disabled={saving}>
              {saving ? 'Guardando...' : 'Guardar Cambios'}
            </button>
            <button type="button" className="btn" style={{background: 'rgba(255,255,255,0.1)', color: 'white'}} onClick={() => handleAction('test_email')}>
              Enviar Correo de Prueba
            </button>
          </div>
        </form>

      </div>
    </>
  );
}

export default App;
