const { Button, Icon, Badge, Accordion, Card, SectionHeading } = window.SevannaDesignSystem_5220c2;

function CourseScreen({ course, go }) {
  const c = course || window.SEVANNA.courses[1];
  const meta = [['map-pin',c.modality],['clock',c.duration],['bar-chart-3',c.levelLabel],['users','Cupos limitados']];
  const includes = ['Kit de materiales incluido','Certificado de participación','Acceso a recetario digital','Acompañamiento del instructor'];
  return (
    <div>
      <section style={{ background:'linear-gradient(180deg,var(--cream-50),var(--cream-100))', padding:'40px 40px 0' }}>
        <div style={{ maxWidth:'var(--container)', margin:'0 auto' }}>
          <a onClick={()=>go('catalog')} style={{ cursor:'pointer', display:'inline-flex', alignItems:'center', gap:8, fontFamily:'var(--font-sans)', fontSize:13, letterSpacing:'0.1em', textTransform:'uppercase', color:'var(--text-muted)', marginBottom:28 }}>
            <Icon name="arrow-left" size={16}/> Volver al catálogo</a>
          <div style={{ display:'grid', gridTemplateColumns:'1.1fr 0.9fr', gap:48, alignItems:'center', paddingBottom:56 }}>
            <div style={{ display:'flex', flexDirection:'column', gap:18 }}>
              <div style={{ display:'flex', gap:10 }}><Badge tone={c.level}>{c.levelLabel}</Badge><Badge tone="gold">{c.category}</Badge></div>
              <h1 style={{ margin:0, fontFamily:'var(--font-serif)', fontWeight:600, fontSize:'clamp(34px,4.6vw,54px)', lineHeight:1.1, color:'var(--emerald-900)' }}>{c.title}</h1>
              <p style={{ margin:0, fontFamily:'var(--font-serif)', fontSize:22, lineHeight:1.6, color:'var(--ink-700)' }}>{c.blurb}</p>
              <div style={{ display:'flex', flexWrap:'wrap', gap:22, marginTop:6 }}>
                {meta.map(([ic,t],i)=>(<span key={i} style={{ display:'inline-flex', alignItems:'center', gap:8, fontFamily:'var(--font-sans)', fontSize:13, letterSpacing:'0.06em', color:'var(--text-muted)' }}><Icon name={ic} size={16} color="var(--accent-strong)"/>{t}</span>))}
              </div>
            </div>
            <div style={{ aspectRatio:'4/3', borderRadius:'var(--radius-xl)', overflow:'hidden', background: c.image ? `center/cover no-repeat url(${c.image})` : 'var(--emerald-800)', border:'1px solid var(--border-strong)', display:'flex', alignItems:'center', justifyContent:'center', color:'var(--border-strong)' }}>
              {!c.image && <Icon name="flower-2" size={72} strokeWidth={0.9}/>}
            </div>
          </div>
        </div>
      </section>

      <section style={{ maxWidth:'var(--container)', margin:'0 auto', padding:'64px 40px 96px', display:'grid', gridTemplateColumns:'1fr 340px', gap:48, alignItems:'start' }}>
        <div>
          <SectionHeading align="left" eyebrow="Temario" title="Lo que aprenderás" ornament={false} style={{ marginBottom:28 }}/>
          <Accordion items={window.SEVANNA.temario} defaultOpen={0}/>
        </div>
        <Card light style={{ position:'sticky', top:96, display:'flex', flexDirection:'column', alignItems:'stretch', gap:20, textAlign:'center' }}>
          <div style={{ display:'flex', flexDirection:'column', gap:4 }}>
            <span style={{ fontFamily:'var(--font-sans)', fontSize:12, fontWeight:600, letterSpacing:'0.2em', textTransform:'uppercase', color:'var(--text-muted)' }}>Inversión</span>
            <span style={{ fontFamily:'var(--font-display)', fontSize:38, letterSpacing:'0.03em', color:'var(--accent-strong)' }}>{c.price}</span>
          </div>
          <div style={{ borderTop:'1px solid var(--divider)', paddingTop:18, display:'flex', flexDirection:'column', gap:12, textAlign:'left' }}>
            {includes.map((it,i)=>(<span key={i} style={{ display:'flex', gap:10, alignItems:'center', fontFamily:'var(--font-sans)', fontSize:14, color:'var(--text-body)' }}><Icon name="check" size={17} color="var(--accent)"/>{it}</span>))}
          </div>
          <Button variant="primary" size="lg" fullWidth onClick={()=>go('enroll',c)}>Inscribirme ahora</Button>
          <Button variant="ghost" size="sm" fullWidth>Descargar temario (PDF)</Button>
        </Card>
      </section>
    </div>
  );
}
window.CourseScreen = CourseScreen;
