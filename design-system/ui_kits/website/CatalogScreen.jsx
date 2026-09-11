const { SectionHeading, CourseCard, Tag, Select } = window.SevannaDesignSystem_5220c2;

function CatalogScreen({ go }) {
  const { courses, categories } = window.SEVANNA;
  const [cat, setCat] = React.useState('Todos');
  const shown = cat==='Todos' ? courses : courses.filter(c=>c.category===cat);
  return (
    <div>
      <section style={{ padding:'72px 40px 56px', textAlign:'center', background:'linear-gradient(180deg,var(--cream-50),var(--cream-100))' }}>
        <SectionHeading eyebrow="Catálogo" title="Todos nuestros cursos" subtitle="Filtra por categoría y encuentra el taller ideal para tu nivel."/>
      </section>
      <section style={{ maxWidth:'var(--container)', margin:'0 auto', padding:'32px 40px 96px' }}>
        <div style={{ display:'flex', flexWrap:'wrap', alignItems:'center', justifyContent:'space-between', gap:16, marginBottom:36 }}>
          <div style={{ display:'flex', gap:10, flexWrap:'wrap' }}>
            {categories.map(c=>(<Tag key={c} selected={cat===c} onClick={()=>setCat(c)}>{c}</Tag>))}
          </div>
          <div style={{ width:200 }}><Select options={['Más recientes','Precio: menor','Precio: mayor','Duración']}/></div>
        </div>
        <div style={{ display:'grid', gridTemplateColumns:'repeat(3,1fr)', gap:28 }}>
          {shown.map(c=>(<CourseCard key={c.id} {...c} onClick={()=>go('course',c)}/>))}
        </div>
      </section>
    </div>
  );
}
window.CatalogScreen = CatalogScreen;
