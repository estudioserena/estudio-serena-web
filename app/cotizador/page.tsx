'use client';

export default function CotizadorPage() {
  return (
    <>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=DM+Sans:wght@300;400;500&family=Space+Mono:wght@400;700&family=Syne:wght@800&display=swap');

        .cot-body {
          background: #E8ECF2;
          font-family: 'DM Sans', sans-serif;
          font-size: 10pt;
          color: #07090F;
          padding: 24px;
          min-height: 100vh;
        }

        .cot-page {
          width: 210mm;
          min-height: 297mm;
          background: #FFFFFF;
          margin: 0 auto;
          padding: 14mm 16mm 14mm 16mm;
          box-shadow: 0 4px 32px rgba(0,0,0,0.12);
          position: relative;
        }

        /* HEADER */
        .cot-header {
          display: flex;
          justify-content: space-between;
          align-items: flex-start;
          padding-bottom: 10mm;
          border-bottom: 1.5px solid #4A7CF6;
          margin-bottom: 8mm;
        }

        .cot-logo img { height: 44px; width: auto; display: block; }
        .cot-logo-fallback {
          font-family: 'Syne', sans-serif;
          font-weight: 800;
          font-size: 18pt;
          color: #0D1A36;
          letter-spacing: -0.02em;
          line-height: 1;
        }
        .cot-logo-sub {
          font-family: 'Space Mono', monospace;
          font-size: 7pt;
          color: #4A7CF6;
          letter-spacing: 0.12em;
          margin-top: 4px;
        }

        .cot-meta { text-align: right; }
        .cot-folio {
          font-family: 'Space Mono', monospace;
          font-size: 20pt;
          font-weight: 700;
          color: #4A7CF6;
          line-height: 1;
          margin-bottom: 6px;
        }
        .cot-meta-row {
          font-size: 8.5pt;
          color: #6B7A99;
          line-height: 1.7;
        }
        .cot-meta-row span { color: #0D1A36; font-weight: 500; }

        /* SECTION LABEL */
        .cot-section-label {
          font-family: 'Space Mono', monospace;
          font-size: 7pt;
          color: #4A7CF6;
          letter-spacing: 0.12em;
          text-transform: uppercase;
          margin-bottom: 5px;
        }

        /* CLIENTE */
        .cot-cliente-block {
          background: #F2F5FC;
          border-left: 3px solid #4A7CF6;
          padding: 8px 12px;
          margin-bottom: 8mm;
        }
        .cot-cliente-nombre {
          font-size: 13pt;
          font-weight: 500;
          color: #0D1A36;
          margin-bottom: 3px;
        }
        .cot-cliente-sub { font-size: 8.5pt; color: #6B7A99; }
        .cot-cliente-sub a { color: #4A7CF6; text-decoration: none; }

        /* TABLA SERVICIOS */
        .cot-servicios-table {
          width: 100%;
          border-collapse: collapse;
          margin-bottom: 4mm;
        }
        .cot-servicios-table thead tr { background: #0D1A36; }
        .cot-servicios-table thead th {
          font-family: 'Space Mono', monospace;
          font-size: 7pt;
          font-weight: 700;
          color: #F0EDE6;
          letter-spacing: 0.08em;
          padding: 7px 10px;
          text-align: left;
        }
        .cot-servicios-table thead th.right { text-align: right; }
        .cot-servicios-table tbody tr:nth-child(odd)  { background: #F2F5FC; }
        .cot-servicios-table tbody tr:nth-child(even) { background: #E8EDF8; }
        .cot-servicios-table tbody td { padding: 9px 10px; vertical-align: top; }

        .cot-svc-nombre { font-weight: 500; font-size: 10pt; color: #0D1A36; margin-bottom: 2px; }
        .cot-svc-desc   { font-size: 8pt; color: #6B7A99; line-height: 1.4; }
        .cot-td-right {
          text-align: right;
          font-family: 'Space Mono', monospace;
          font-size: 9.5pt;
          color: #0D1A36;
          white-space: nowrap;
          vertical-align: middle;
        }
        .cot-td-center {
          text-align: center;
          font-family: 'Space Mono', monospace;
          font-size: 9.5pt;
          color: #0D1A36;
          vertical-align: middle;
        }

        /* TOTALES */
        .cot-totales-wrap {
          display: flex;
          justify-content: flex-end;
          margin-bottom: 8mm;
        }
        .cot-totales-table { width: 220px; border-collapse: collapse; }
        .cot-totales-table tr td { padding: 4px 8px; font-size: 9pt; }
        .cot-totales-table tr.sub td:first-child,
        .cot-totales-table tr.iva td:first-child { color: #6B7A99; }
        .cot-totales-table tr.sub td:last-child,
        .cot-totales-table tr.iva td:last-child {
          text-align: right;
          font-family: 'Space Mono', monospace;
          color: #0D1A36;
        }
        .cot-totales-table tr.total-row { background: #0D1A36; }
        .cot-totales-table tr.total-row td { padding: 8px 10px; }
        .cot-totales-table tr.total-row td:first-child {
          color: #F0EDE6;
          font-weight: 500;
          font-size: 9pt;
        }
        .cot-totales-table tr.total-row td:last-child {
          text-align: right;
          font-family: 'Space Mono', monospace;
          font-size: 11pt;
          font-weight: 700;
          color: #4A7CF6;
          white-space: nowrap;
        }

        /* CONDICIONES */
        .cot-condiciones-wrap { margin-bottom: 8mm; }
        .cot-condiciones-block {
          background: #F2F5FC;
          border-left: 3px solid #4A7CF6;
          padding: 10px 14px;
        }
        .cot-condicion-item {
          display: flex;
          gap: 8px;
          margin-bottom: 6px;
          font-size: 8.5pt;
          line-height: 1.55;
          color: #2a3550;
        }
        .cot-condicion-item:last-child { margin-bottom: 0; }
        .cot-cond-num {
          font-family: 'Space Mono', monospace;
          font-size: 7.5pt;
          color: #4A7CF6;
          font-weight: 700;
          flex-shrink: 0;
          margin-top: 1px;
          min-width: 14px;
        }
        .cot-cond-pago { font-weight: 500; color: #0D1A36; }

        /* CIERRE */
        .cot-cierre {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 12px;
          margin-bottom: 6mm;
        }
        .cot-cierre-card { background: #F2F5FC; padding: 10px 12px; }
        .cot-cierre-label {
          font-family: 'Space Mono', monospace;
          font-size: 7pt;
          color: #4A7CF6;
          letter-spacing: 0.1em;
          text-transform: uppercase;
          margin-bottom: 6px;
        }
        .cot-estudio-dato { font-size: 8pt; color: #6B7A99; line-height: 1.7; }
        .cot-estudio-dato a { color: #4A7CF6; text-decoration: none; }

        .cot-firma-img-error {
          height: 36px;
          border-bottom: 1px solid #6B7A99;
          width: 140px;
          margin-bottom: 4px;
        }
        .cot-firma-line { font-size: 8pt; color: #6B7A99; }
        .cot-firma-line-date { font-size: 8pt; color: #6B7A99; margin-top: 6px; }

        /* FOOTER */
        .cot-footer {
          border-top: 0.5px solid #D0D8EC;
          padding-top: 5px;
          text-align: center;
        }
        .cot-footer-frase {
          font-size: 8pt;
          color: #6B7A99;
          font-style: italic;
          letter-spacing: 0.02em;
        }
        .cot-footer-contacto {
          font-family: 'Space Mono', monospace;
          font-size: 7pt;
          color: #4A7CF6;
          margin-top: 3px;
        }

        /* PRINT */
        @media print {
          .cot-body { background: white; padding: 0; }
          .cot-page { box-shadow: none; margin: 0; width: 100%; }
          .cot-print-btn { display: none !important; }
        }

        .cot-print-btn {
          display: block;
          width: 210mm;
          margin: 16px auto 0;
          padding: 10px;
          background: #4A7CF6;
          color: white;
          font-family: 'DM Sans', sans-serif;
          font-size: 13px;
          font-weight: 500;
          border: none;
          border-radius: 8px;
          cursor: pointer;
          text-align: center;
        }
        .cot-print-btn:hover { background: #3a6ce0; }
      `}</style>

      <div className="cot-body">
        <div className="cot-page">

          {/* HEADER */}
          <div className="cot-header">
            <div className="cot-logo">
              <img
                src="https://lh3.googleusercontent.com/d/13URZpuVzKn1bM2rwwFH056_bHqc839Ya"
                alt="Estudio Serena"
                onError={(e) => {
                  e.currentTarget.style.display = 'none';
                  const fallback = document.getElementById('cot-logo-fallback');
                  if (fallback) fallback.style.display = 'block';
                }}
              />
              <div id="cot-logo-fallback" style={{ display: 'none' }}>
                <div className="cot-logo-fallback">ESTUDIO SERENA</div>
                <div className="cot-logo-sub">DOLBY ATMOS · LA SERENA, CHILE</div>
              </div>
            </div>
            <div className="cot-meta">
              <div className="cot-folio">COT-___</div>
              <div className="cot-meta-row">Fecha: <span>_______________</span></div>
              <div className="cot-meta-row">Válido hasta: <span>_______________</span></div>
            </div>
          </div>

          {/* CLIENTE */}
          <div className="cot-section-label">Cliente</div>
          <div className="cot-cliente-block">
            <div className="cot-cliente-nombre">___________________________ &nbsp;·&nbsp; <span style={{ fontWeight: 300, fontSize: '10.5pt', color: '#6B7A99' }}>_______________</span></div>
            <div className="cot-cliente-sub">___________________________</div>
          </div>

          {/* SERVICIOS */}
          <div className="cot-section-label">Servicios</div>
          <table className="cot-servicios-table">
            <thead>
              <tr>
                <th style={{ width: '55%' }}>Descripción</th>
                <th className="right" style={{ width: '15%' }}>Cant.</th>
                <th className="right" style={{ width: '15%' }}>Precio unit.</th>
                <th className="right" style={{ width: '15%' }}>Total</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>
                  <div className="cot-svc-nombre">___________________________</div>
                  <div className="cot-svc-desc">___________________________</div>
                </td>
                <td className="cot-td-center">1</td>
                <td className="cot-td-right">$_________</td>
                <td className="cot-td-right">$_________</td>
              </tr>
            </tbody>
          </table>

          {/* TOTALES */}
          <div className="cot-totales-wrap">
            <table className="cot-totales-table">
              <tbody>
                <tr className="sub">
                  <td>Subtotal neto</td>
                  <td>$_________</td>
                </tr>
                <tr className="iva">
                  <td>IVA 19%</td>
                  <td>$_________</td>
                </tr>
                <tr className="total-row">
                  <td>Total&nbsp;<span style={{ fontSize: '7.5pt', color: '#6B7A99', fontFamily: "'DM Sans', sans-serif" }}>(IVA incl.)</span></td>
                  <td>$_________ CLP</td>
                </tr>
              </tbody>
            </table>
          </div>

          {/* CONDICIONES */}
          <div className="cot-condiciones-wrap">
            <div className="cot-section-label">Condiciones de servicio</div>
            <div className="cot-condiciones-block">
              <div className="cot-condicion-item">
                <span className="cot-cond-num">1.</span>
                <span>Se considera una (1) hora de grabación vocal en estudio, en horario a coordinar entre las partes.</span>
              </div>
              <div className="cot-condicion-item">
                <span className="cot-cond-num">2.</span>
                <span>El cliente debe entregar la pista instrumental sobre la cual se realizará la grabación. En caso de no contar con ella, deberá enviar la canción original con voz a <a href="mailto:infoestudioserena@gmail.com" style={{ color: '#4A7CF6' }}>infoestudioserena@gmail.com</a> para que Estudio Serena genere el background instrumental mediante herramientas de inteligencia artificial. Esta pista será enviada al cliente una vez aprobado este presupuesto, con tiempo suficiente para ensayar antes de la sesión.</span>
              </div>
              <div className="cot-condicion-item">
                <span className="cot-cond-num">3.</span>
                <span>Se incluye edición de tomas, selección y afinación de la pista vocal.</span>
              </div>
              <div className="cot-condicion-item">
                <span className="cot-cond-num">4.</span>
                <span>Se incluye mezcla y masterización estéreo con entrega en los siguientes formatos: WAV (48 kHz / 24 bits y 44.1 kHz / 16 bits) y MP3 (320 kbps).</span>
              </div>
              <div className="cot-condicion-item">
                <span className="cot-cond-num">5.</span>
                <span>Se consideran hasta dos (2) rondas de correcciones sin costo adicional.</span>
              </div>
              <div className="cot-condicion-item">
                <span className="cot-cond-num">6.</span>
                <span>El plazo de entrega del primer master es de tres (3) días hábiles contados desde la fecha de grabación.</span>
              </div>
              <div className="cot-condicion-item">
                <span className="cot-cond-num">7.</span>
                <span className="cot-cond-pago">Forma de pago: 50% para confirmar y agendar la sesión · 50% contra recepción conforme del producto terminado.</span>
              </div>
            </div>
          </div>

          {/* CIERRE */}
          <div className="cot-cierre">
            <div className="cot-cierre-card">
              <div className="cot-cierre-label">Estudio Serena SPA</div>
              <div className="cot-estudio-dato">
                RUT: 77.787.329-6<br />
                <a href="mailto:infoestudioserena@gmail.com">infoestudioserena@gmail.com</a><br />
                +56 9 2960 3501 · estudioserena.cl
              </div>
              <div style={{ position: 'relative', marginTop: '14px', paddingTop: '82px' }}>
                <img
                  src="https://lh3.googleusercontent.com/d/124-js_DDUAnhdI49RPb2q_I-M7W3ddpu"
                  alt="Firma Mauricio"
                  style={{
                    position: 'absolute',
                    top: '-10px',
                    left: '-6px',
                    height: '108px',
                    width: 'auto',
                    objectFit: 'contain',
                    objectPosition: 'left',
                    mixBlendMode: 'multiply',
                    pointerEvents: 'none',
                    zIndex: 2,
                  }}
                  onError={(e) => { e.currentTarget.style.display = 'none'; }}
                />
                <div style={{ fontSize: '8.5pt', fontWeight: 500, color: '#0D1A36', lineHeight: 1.3, position: 'relative', zIndex: 1 }}>Mauricio Flores Sánchez</div>
                <div style={{ fontSize: '7.5pt', color: '#6B7A99', position: 'relative', zIndex: 1 }}>Dolby Atmos Mixer · Director</div>
              </div>
            </div>
            <div className="cot-cierre-card">
              <div className="cot-cierre-label">Aceptación del presupuesto</div>
              <div style={{ marginTop: '8px' }}>
                <div className="cot-firma-img-error"></div>
                <div className="cot-firma-line">Nombre y firma</div>
                <div className="cot-firma-line-date">Fecha: _____________________________</div>
              </div>
            </div>
          </div>

          {/* FOOTER */}
          <div className="cot-footer">
            <div className="cot-footer-frase">El sonido no solo se escucha. Se habita.</div>
            <div className="cot-footer-contacto">estudioserena.cl · @estudio_serena · infoestudioserena@gmail.com</div>
          </div>

        </div>

        <button className="cot-print-btn" onClick={() => window.print()}>
          Imprimir / Guardar como PDF
        </button>
      </div>
    </>
  );
}
