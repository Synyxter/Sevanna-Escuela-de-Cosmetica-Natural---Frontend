const { Button, Icon, Badge, Card } = window.SevannaDesignSystem_5220c2;

// ⚠️ Reemplaza este número por el WhatsApp Business real de Sevanna (formato internacional, sin +).
const WA_NUMBER = '573001112233';

function EnrollScreen({ course, go }) {
  const c = course || window.SEVANNA.courses[1];
  const msg = encodeURIComponent(`¡Hola Sevanna! Quiero completar mi inscripción al curso "${c.title}" (${c.levelLabel} · ${c.modality}). ¿Me ayudan con los pasos?`);
  const waLink = `https://wa.me/${WA_NUMBER}?text=${msg}`;
  const steps = [
    ['message-circle','Escríbenos por WhatsApp','Toca el botón y se abrirá un chat con tu curso ya seleccionado.'],
    ['credit-card','Confirma tu cupo','Te compartimos los medios de pago y aseguramos tu lugar.'],
    ['sparkles','¡Nos vemos en el taller!','Recibirás los detalles, materiales y fecha de inicio.'],
  ];
  return (
    <section style={{ minHeight:'70vh', display:'flex', alignItems:'center', justifyContent:'center', padding:'72px 40px 96px', background:'linear-gradient(180deg,var(--cream-50),var(--cream-100))' }}>
      <Card style={{ width:'100%', maxWidth:560, display:'flex', flexDirection:'column', alignItems:'center', gap:24, textAlign:'center', padding:'44px 40px' }}>
        <span style={{ width:76, height:76, borderRadius:'var(--radius-pill)', display:'flex', alignItems:'center', justifyContent:'center', background:'rgba(37,211,102,0.12)', border:'1px solid rgba(37,211,102,0.4)' }}>
          <img src="https://cdn.simpleicons.org/whatsapp/25D366" alt="WhatsApp" width={38} height={38}/>
        </span>
        <div style={{ display:'flex', flexDirection:'column', gap:12, alignItems:'center' }}>
          <Badge tone="gold">Último paso</Badge>
          <h1 style={{ margin:0, fontFamily:'var(--font-serif)', fontWeight:600, fontSize:'clamp(30px,4vw,44px)', lineHeight:1.12, color:'var(--emerald-900)' }}>
            Para completar tu inscripción,<br/>contáctanos por WhatsApp</h1>
          <p style={{ margin:0, maxWidth:420, fontFamily:'var(--font-serif)', fontSize:20, lineHeight:1.55, color:'var(--ink-700)' }}>
            Reservaste <em style={{ color:'var(--accent-strong)' }}>{c.title}</em>. Termina tu registro en un breve chat con nuestro equipo.</p>
        </div>

        <div style={{ width:'100%', display:'flex', flexDirection:'column', gap:14, textAlign:'left', padding:'20px 0', borderTop:'1px solid var(--divider)', borderBottom:'1px solid var(--divider)' }}>
          {steps.map(([ic,t,d],i)=>(
            <div key={i} style={{ display:'flex', gap:14, alignItems:'flex-start' }}>
              <span style={{ flex:'0 0 auto', width:34, height:34, borderRadius:'var(--radius-pill)', display:'flex', alignItems:'center', justifyContent:'center', color:'var(--accent-strong)', border:'1px solid var(--border-strong)' }}><Icon name={ic} size={17}/></span>
              <div>
                <div style={{ fontFamily:'var(--font-sans)', fontSize:15, fontWeight:600, color:'var(--text-strong)' }}>{t}</div>
                <div style={{ fontFamily:'var(--font-sans)', fontSize:13.5, lineHeight:1.5, color:'var(--text-muted)' }}>{d}</div>
              </div>
            </div>
          ))}
        </div>

        <a href={waLink} target="_blank" rel="noopener noreferrer" style={{ width:'100%', display:'inline-flex', alignItems:'center', justifyContent:'center', gap:10, padding:'16px 26px', borderRadius:'var(--radius-pill)', background:'#25D366', color:'#08210F', fontFamily:'var(--font-sans)', fontSize:14, fontWeight:600, letterSpacing:'var(--ls-eyebrow)', textTransform:'uppercase', boxShadow:'0 8px 24px rgba(37,211,102,0.35)' }}>
          <img src="https://cdn.simpleicons.org/whatsapp/08210F" alt="" width={20} height={20}/> Escribir por WhatsApp
        </a>
        <Button variant="ghost" size="sm" onClick={()=>go('course',c)} iconLeft={<Icon name="arrow-left" size={15}/>}>Volver al curso</Button>
      </Card>
    </section>
  );
}
window.EnrollScreen = EnrollScreen;
