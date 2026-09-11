The signature Sevanna catalog card: image well, level badge, serif title, modality/duration meta, and price. Falls back to an emerald botanical placeholder when no `image`.

```jsx
<CourseCard
  category="Jabones"
  title="Jabones artesanales en frío"
  level="intermediate" levelLabel="Intermedio"
  modality="Híbrido" duration="8 h" price="$120.000"
  onClick={openCourse}
/>
```

`level` accepts `basic | intermediate | advanced` and drives the badge tone.
