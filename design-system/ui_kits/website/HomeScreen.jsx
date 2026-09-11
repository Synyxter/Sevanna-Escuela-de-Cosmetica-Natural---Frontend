const { Button, Icon, SectionHeading, CourseCard, Badge } = window.SevannaDesignSystem_5220c2;

function HomeScreen({ go }) {
  const feats = [
    ['leaf','Ingredientes naturales','Trabaja con ceras, aceites y activos botánicos reales.'],
    ['flask-conical','Formulación práctica','Aprende a calcular, medir y ajustar cada receta.'],
    ['award','Nivel a tu medida','Rutas básicas, intermedias y avanzadas.'],
  ];
  const featured = window.SEVANNA.courses.slice(0,3);
  return (
    <div>
      {/* Hero */}
      <section style={{ position:'relative', padding:'128px 40px', textAlign:'center', backgroundImage:'radial-gradient(ellipse 62% 78% at center, rgba(250,246,238,0.86) 0%, rgba(250,246,238,0.62) 40%, rgba(250,246,238,0.28) 70%, rgba(250,246,238,0.05) 100%), url(../../assets/hero-products.png)', backgroundSize:'cover', backgroundPosition:'center', overflow:'hidden' }}>
        <div style={{ position:'relative', maxWidth:820, margin:'0 auto', width:'100%' }}>
        <div style={{ maxWidth:820, margin:'0 auto', display:'flex', flexDirection:'column', alignItems:'center', gap:22 }}>
          <span data-reveal style={{ fontFamily:'var(--font-sans)', fontSize:12, fontWeight:600, letterSpacing:'0.32em', textTransform:'uppercase', color:'var(--gold-600)' }}>Academia de Cosmética Natural</span>
          <h1 data-reveal style={{ transitionDelay:'.1s', margin:0, fontFamily:'var(--font-serif)', fontWeight:600, fontSize:'clamp(40px,6vw,72px)', lineHeight:1.08, color:'var(--emerald-700)' }}>
            Aprende a crear tu propia<br/><em style={{ fontStyle:'italic', color:'var(--gold-600)' }}>cosmética natural</em></h1>
          <p data-reveal style={{ transitionDelay:'.2s', margin:'0 auto', maxWidth:560, fontFamily:'var(--font-serif)', fontSize:22, lineHeight:1.6, color:'var(--emerald-700)' }}>
            Cursos y talleres presenciales, virtuales e híbridos para elaborar velas, jabones, labiales y más — desde cero hasta nivel profesional.</p>
          <div data-reveal style={{ transitionDelay:'.3s', display:'flex', gap:14, marginTop:8 }}>
            <Button variant="solid" size="lg" onClick={()=>go('catalog')} iconLeft={<Icon name="leaf" size={18} color="var(--gold-300)"/>}>Explorar cursos</Button>
          </div>
        </div>
        </div>
      </section>

      {/* Value props */}
      <section style={{ padding:'64px 40px', maxWidth:'var(--container)', margin:'0 auto', display:'grid', gridTemplateColumns:'repeat(3,1fr)', gap:28 }}>
        {feats.map(([ic,t,d],i)=>(
          <div key={i} style={{ display:'flex', flexDirection:'column', gap:12, padding:'28px', border:'1px solid var(--border-hairline)', borderRadius:'var(--radius-lg)', background:'var(--surface-card)' }}>
            <span style={{ color:'var(--accent-strong)' }}><Icon name={ic} size={30} strokeWidth={1.3}/></span>
            <h3 style={{ margin:0, fontFamily:'var(--font-serif)', fontWeight:600, fontSize:24, color:'var(--emerald-700)' }}>{t}</h3>
            <p style={{ margin:0, fontFamily:'var(--font-sans)', fontSize:15, lineHeight:1.6, color:'var(--text-muted)' }}>{d}</p>
          </div>
        ))}
      </section>

      {/* Featured courses */}
      <section style={{ padding:'40px 40px 88px', maxWidth:'var(--container)', margin:'0 auto' }}>
        <div data-reveal style={{ ['--text-strong']:'var(--emerald-700)' }}><SectionHeading eyebrow="Talleres destacados" title="Empieza por tu primer taller" subtitle="Cada curso incluye materiales definidos, objetivos claros y práctica guiada."/></div>
        <div style={{ display:'grid', gridTemplateColumns:'repeat(3,1fr)', gap:28, marginTop:44 }}>
          {featured.map((c,i)=>(<div key={c.id} data-reveal style={{ transitionDelay:(i*0.12)+'s' }}><CourseCard {...c} onClick={()=>go('course',c)}/></div>))}
        </div>
        <div data-reveal style={{ textAlign:'center', marginTop:44 }}>
          <Button variant="secondary" onClick={()=>go('catalog')} iconRight={<Icon name="arrow-right" size={16}/>}>Ver todos los cursos</Button>
        </div>
      </section>

      {/* Quote band */}
      <section style={{ padding:'80px 40px', background:'var(--emerald-600)', textAlign:'center' }}>
        <div style={{ maxWidth:720, margin:'0 auto' }}>
          <div data-reveal><h2 style={{ margin:0, fontFamily:'var(--font-sans)', fontSize:13, fontWeight:700, letterSpacing:'0.28em', textTransform:'uppercase', color:'var(--gold-300)' }}>Nuestra filosofía</h2></div>
          <p data-reveal style={{ transitionDelay:'.15s', fontFamily:'var(--font-serif)', fontStyle:'italic', fontSize:'clamp(26px,3.4vw,38px)', lineHeight:1.45, color:'var(--cream-50)', marginTop:20 }}>
            “Combinamos conocimiento, creatividad y elaboración artesanal para que cada estudiante formule con confianza.”</p>
        </div>
      </section>
    </div>
  );
}
window.HomeScreen = HomeScreen;
