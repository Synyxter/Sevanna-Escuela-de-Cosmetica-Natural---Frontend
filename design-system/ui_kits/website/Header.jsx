const { Button, Icon } = window.SevannaDesignSystem_5220c2;

function Header({ route, go }) {
  const links = [['home','Inicio'],['catalog','Cursos'],['catalog','Modalidades'],['home','Nosotros']];
  const key = (fn) => (e) => { if (e.key === 'Enter' || e.key === ' ') { e.preventDefault(); fn(); } };
  const linkOn = (active) => (e) => { if(!active){ e.currentTarget.style.borderBottomColor='var(--gold-600)'; } };
  const linkOff = (active) => (e) => { if(!active){ e.currentTarget.style.borderBottomColor='transparent'; } };  return (
    <header role="banner" style={{ position:'sticky', top:0, zIndex:20, display:'flex', alignItems:'center', justifyContent:'space-between',
      padding:'14px 28px', background:'var(--cream-50)', borderBottom:'1px solid var(--border-hairline)' }}>
      {/* Focus ring shows ONLY for keyboard users (:focus-visible), never on mouse click */}
      <style>{`
        .sv-focusable:focus{outline:none}
        .sv-focusable:focus-visible{outline:2px solid var(--gold-300);outline-offset:4px;border-radius:6px}
        @media (prefers-reduced-motion: reduce){.sv-navlink{transition:none}}
      `}</style>
      <a href="#inicio" className="sv-focusable" aria-label="Sevanna — ir al inicio" onClick={(e)=>{e.preventDefault();go('home');}} onKeyDown={key(()=>go('home'))}
        style={{ cursor:'pointer', display:'flex', alignItems:'center', textDecoration:'none' }}>
        <img src="../../assets/logo-wordmark.png" alt="Sevanna" style={{ height:72, width:'auto' }}/>
      </a>
      <nav aria-label="Navegación principal" style={{ position:'absolute', left:'50%', transform:'translateX(-50%)' }}>
        <ul style={{ display:'flex', gap:24, listStyle:'none', margin:0, padding:0 }}>
          {links.map(([r,l],i)=>{
            const active = route===r && i<2;
            return (
              <li key={i}>
                <a href={'#'+l.toLowerCase()} className="sv-focusable sv-navlink" aria-current={active ? 'page' : undefined}
                  onClick={(e)=>{e.preventDefault();go(r);}} onKeyDown={key(()=>go(r))}
                  onMouseEnter={linkOn(active)} onMouseLeave={linkOff(active)}
                  style={{ cursor:'pointer', display:'inline-block', fontFamily:'var(--font-sans)', fontSize:13, fontWeight:700, letterSpacing:'0.12em',
                    textTransform:'none', padding:'6px 2px', textDecoration:'none',
                    color: 'var(--emerald-700)',
                    borderBottom: `3px solid ${active ? 'var(--gold-600)' : 'transparent'}`,
                    transition:'color var(--dur-fast) var(--ease-standard)' }}>{l}</a>
              </li>
            );
          })}
        </ul>
      </nav>
      <div style={{ display:'flex', alignItems:'center', gap:16 }}>
        <Button variant="primary" size="sm" onClick={()=>go('catalog')} style={{ paddingTop:14, paddingBottom:14 }} iconLeft={<Icon name="leaf" size={16} color="var(--gold-300)"/>}>Ver cursos</Button>
      </div>
    </header>
  );
}
window.Header = Header;
