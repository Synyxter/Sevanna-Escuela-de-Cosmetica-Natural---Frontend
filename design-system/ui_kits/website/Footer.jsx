const { Icon } = window.SevannaDesignSystem_5220c2;

function Footer() {
  const cols = [
    ['Cursos', ['Velas','Jabones','Skincare','Perfumería']],
    ['Academia', ['Nosotros','Modalidades','Certificados','Contacto']],
    ['Recursos', ['Blog','Guías gratuitas','Preguntas frecuentes']],
  ];
  const socials = [['whatsapp','WhatsApp'],['instagram','Instagram'],['facebook','Facebook'],['tiktok','TikTok']];
  return (
    <footer role="contentinfo" style={{ background:'var(--emerald-950)', borderTop:'1px solid var(--border-hairline)', padding:'56px 40px 32px', color:'var(--emerald-100)' }}>
      <style>{`
        .sv-foot-link{color:var(--emerald-100);text-decoration:none;transition:color var(--dur-fast) var(--ease-standard)}
        .sv-foot-link:hover{color:var(--gold-300)}
        .sv-foot-focus:focus{outline:none}
        .sv-foot-focus:focus-visible{outline:2px solid var(--gold-300);outline-offset:3px;border-radius:6px}
      `}</style>
      <div style={{ maxWidth:'var(--container)', margin:'0 auto', display:'grid', gridTemplateColumns:'1.4fr 1fr 1fr 1fr', gap:40 }}>
        <div>
          <span style={{ fontFamily:'var(--font-display)', fontWeight:600, fontSize:24, letterSpacing:'0.18em', color:'var(--gold-100)' }}>SEVANNA</span>
          <p style={{ fontFamily:'var(--font-serif)', fontSize:18, lineHeight:1.6, color:'var(--emerald-100)', maxWidth:280, marginTop:12 }}>
            Academia de cosmética natural. Conocimiento, creatividad y elaboración artesanal.</p>
          <nav aria-label="Redes sociales">
            <ul style={{ display:'flex', gap:16, marginTop:18, listStyle:'none', padding:0, margin:'18px 0 0' }}>
              {socials.map(([slug,label])=>(
                <li key={slug}>
                  <a href="#" className="sv-foot-focus" aria-label={`Sevanna en ${label}`} onClick={e=>e.preventDefault()}
                    style={{ display:'inline-flex', cursor:'pointer', opacity:0.85, transition:'opacity var(--dur-base) var(--ease-standard)' }}
                    onMouseEnter={e=>e.currentTarget.style.opacity=1} onMouseLeave={e=>e.currentTarget.style.opacity=0.85}>
                    <img src={`https://cdn.simpleicons.org/${slug}/C69F53`} alt="" aria-hidden="true" width={22} height={22}/>
                  </a>
                </li>
              ))}
            </ul>
          </nav>
        </div>
        {cols.map(([h,items],i)=>(
          <nav key={i} aria-label={h}>
            <h2 style={{ fontFamily:'var(--font-sans)', fontSize:12, fontWeight:600, letterSpacing:'0.2em', textTransform:'uppercase', color:'var(--gold-300)', margin:'0 0 16px' }}>{h}</h2>
            <ul style={{ listStyle:'none', padding:0, margin:0 }}>
              {items.map((it,j)=>(
                <li key={j} style={{ marginBottom:10 }}>
                  <a href="#" className="sv-foot-link sv-foot-focus" onClick={e=>e.preventDefault()}
                    style={{ display:'inline-block', fontFamily:'var(--font-sans)', fontSize:14 }}>{it}</a>
                </li>
              ))}
            </ul>
          </nav>
        ))}
      </div>
      <div style={{ maxWidth:'var(--container)', margin:'40px auto 0', paddingTop:20, borderTop:'1px solid var(--divider)', display:'flex', justifyContent:'space-between', flexWrap:'wrap', gap:8, fontFamily:'var(--font-sans)', fontSize:12, letterSpacing:'0.06em', color:'var(--emerald-300)' }}>
        <span>© 2026 Sevanna · Academia de Cosmética</span><span>Hecho a mano con ingredientes naturales</span>
      </div>
    </footer>
  );
}
window.Footer = Footer;
