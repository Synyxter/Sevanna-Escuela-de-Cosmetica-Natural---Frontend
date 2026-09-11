/* @ds-bundle: {"format":4,"namespace":"SevannaDesignSystem_5220c2","components":[{"name":"Accordion","sourcePath":"components/content/Accordion.jsx"},{"name":"Badge","sourcePath":"components/content/Badge.jsx"},{"name":"Card","sourcePath":"components/content/Card.jsx"},{"name":"CourseCard","sourcePath":"components/content/CourseCard.jsx"},{"name":"SectionHeading","sourcePath":"components/content/SectionHeading.jsx"},{"name":"Tag","sourcePath":"components/content/Tag.jsx"},{"name":"Button","sourcePath":"components/core/Button.jsx"},{"name":"Icon","sourcePath":"components/core/Icon.jsx"},{"name":"IconButton","sourcePath":"components/core/IconButton.jsx"},{"name":"Checkbox","sourcePath":"components/forms/Checkbox.jsx"},{"name":"Input","sourcePath":"components/forms/Input.jsx"},{"name":"Select","sourcePath":"components/forms/Select.jsx"},{"name":"Switch","sourcePath":"components/forms/Switch.jsx"}],"sourceHashes":{"components/content/Accordion.jsx":"ab48f7b62295","components/content/Badge.jsx":"12df91cf44fe","components/content/Card.jsx":"dc4593affb05","components/content/CourseCard.jsx":"23222acdd76f","components/content/SectionHeading.jsx":"5d11056d9e14","components/content/Tag.jsx":"757edc0d1a61","components/core/Button.jsx":"0c8e9e9bd434","components/core/Icon.jsx":"3fbc5c02b4d9","components/core/IconButton.jsx":"ae7c9610a9ed","components/forms/Checkbox.jsx":"7e3d54abde6e","components/forms/Input.jsx":"a21f720d8ae3","components/forms/Select.jsx":"e0a4caf4c8b3","components/forms/Switch.jsx":"1c1f6d9ea1f5","ui_kits/website/CatalogScreen.jsx":"0bd543e85dc4","ui_kits/website/CourseScreen.jsx":"2e12e5f6d0a8","ui_kits/website/EnrollScreen.jsx":"f127317189df","ui_kits/website/Footer.jsx":"72c440d72555","ui_kits/website/Header.jsx":"7189a84c3786","ui_kits/website/HomeScreen.jsx":"af28cfc36714","ui_kits/website/data.js":"2fadc177113e"},"inlinedExternals":[],"unexposedExports":[]} */

(() => {

const __ds_ns = (window.SevannaDesignSystem_5220c2 = window.SevannaDesignSystem_5220c2 || {});

const __ds_scope = {};

(__ds_ns.__errors = __ds_ns.__errors || []);

// components/content/Badge.jsx
try { (() => {
/** Small status/level pill. Tones map to course levels & semantics. */
function Badge({
  tone = 'gold',
  children,
  style = {}
}) {
  const tones = {
    gold: {
      color: 'var(--emerald-800)',
      border: 'var(--border-strong)',
      bg: 'rgba(198,159,83,0.22)'
    },
    emerald: {
      color: 'var(--emerald-100)',
      border: 'var(--divider)',
      bg: 'rgba(53,122,88,0.18)'
    },
    basic: {
      color: 'var(--emerald-100)',
      border: 'rgba(127,185,154,0.4)',
      bg: 'rgba(53,122,88,0.16)'
    },
    intermediate: {
      color: 'var(--gold-200)',
      border: 'var(--border-strong)',
      bg: 'rgba(198,159,83,0.12)'
    },
    advanced: {
      color: 'var(--gold-200)',
      border: 'transparent',
      bg: 'var(--emerald-900)',
      solid: true
    },
    success: {
      color: '#CFE9D9',
      border: 'rgba(53,122,88,0.5)',
      bg: 'rgba(53,122,88,0.18)'
    },
    danger: {
      color: '#F0C9C3',
      border: 'rgba(166,58,46,0.5)',
      bg: 'rgba(166,58,46,0.16)'
    }
  };
  const t = tones[tone] || tones.gold;
  return /*#__PURE__*/React.createElement("span", {
    style: {
      display: 'inline-flex',
      alignItems: 'center',
      gap: 'var(--space-1)',
      padding: '5px 12px',
      borderRadius: 'var(--radius-pill)',
      fontFamily: 'var(--font-sans)',
      fontSize: 'var(--fs-caption)',
      fontWeight: 'var(--fw-semibold)',
      letterSpacing: 'var(--ls-label)',
      textTransform: 'uppercase',
      color: t.solid ? t.color : t.color,
      background: t.bg,
      border: `1px solid ${t.border}`,
      ...style
    }
  }, children);
}
Object.assign(__ds_scope, { Badge });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/content/Badge.jsx", error: String((e && e.message) || e) }); }

// components/content/Card.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/** Generic surface container. Emerald by default; `light` for cream surfaces. */
function Card({
  children,
  padded = true,
  light = false,
  hover = false,
  style = {},
  ...rest
}) {
  const [h, setH] = React.useState(false);
  return /*#__PURE__*/React.createElement("div", _extends({
    className: light ? 'on-light' : undefined,
    onMouseEnter: () => hover && setH(true),
    onMouseLeave: () => setH(false),
    style: {
      background: 'var(--surface-card)',
      border: '1px solid var(--border-hairline)',
      borderRadius: 'var(--radius-lg)',
      padding: padded ? 'var(--space-6)' : 0,
      boxShadow: h ? 'var(--shadow-lg)' : 'var(--shadow-sm)',
      transform: h ? 'translateY(-3px)' : 'none',
      transition: 'transform var(--dur-base) var(--ease-out), box-shadow var(--dur-base) var(--ease-standard)',
      color: 'var(--text-body)',
      ...style
    }
  }, rest), children);
}
Object.assign(__ds_scope, { Card });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/content/Card.jsx", error: String((e && e.message) || e) }); }

// components/content/SectionHeading.jsx
try { (() => {
/**
 * Section header with an uppercase gold eyebrow, a Cormorant serif title, and an
 * optional gold ornament divider echoing the wordmark's rule-with-diamond.
 */
function SectionHeading({
  eyebrow = '',
  title = '',
  subtitle = '',
  align = 'center',
  ornament = true,
  light = false,
  style = {}
}) {
  const centered = align === 'center';
  return /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: 'var(--space-3)',
      alignItems: centered ? 'center' : 'flex-start',
      textAlign: centered ? 'center' : 'left',
      ...style
    }
  }, eyebrow && /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: 'var(--font-sans)',
      fontSize: 'var(--fs-eyebrow)',
      fontWeight: 'var(--fw-semibold)',
      letterSpacing: 'var(--ls-eyebrow)',
      textTransform: 'uppercase',
      color: 'var(--accent-strong)'
    }
  }, eyebrow), title && /*#__PURE__*/React.createElement("h2", {
    style: {
      margin: 0,
      fontFamily: 'var(--font-serif)',
      fontWeight: 'var(--fw-semibold)',
      fontSize: 'var(--fs-h2)',
      lineHeight: 'var(--lh-heading)',
      color: light ? 'var(--emerald-900)' : 'var(--text-strong)'
    }
  }, title), ornament && /*#__PURE__*/React.createElement("span", {
    "aria-hidden": "true",
    style: {
      display: 'inline-flex',
      alignItems: 'center',
      gap: 8,
      margin: '2px 0',
      color: 'var(--accent)'
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      width: 54,
      height: 1,
      background: 'linear-gradient(90deg,transparent,var(--accent))'
    }
  }), /*#__PURE__*/React.createElement("span", {
    style: {
      width: 6,
      height: 6,
      transform: 'rotate(45deg)',
      background: 'var(--accent)'
    }
  }), /*#__PURE__*/React.createElement("span", {
    style: {
      width: 54,
      height: 1,
      background: 'linear-gradient(90deg,var(--accent),transparent)'
    }
  })), subtitle && /*#__PURE__*/React.createElement("p", {
    style: {
      margin: 0,
      maxWidth: 560,
      fontFamily: 'var(--font-serif)',
      fontSize: 'var(--fs-lead)',
      lineHeight: 'var(--lh-body)',
      color: 'var(--text-muted)'
    }
  }, subtitle));
}
Object.assign(__ds_scope, { SectionHeading });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/content/SectionHeading.jsx", error: String((e && e.message) || e) }); }

// components/content/Tag.jsx
try { (() => {
/** Filter/category chip. Selectable variant used in course filters. */
function Tag({
  children,
  selected = false,
  onClick,
  style = {}
}) {
  return /*#__PURE__*/React.createElement("button", {
    type: "button",
    onClick: onClick,
    style: {
      display: 'inline-flex',
      alignItems: 'center',
      gap: 'var(--space-2)',
      padding: '8px 16px',
      borderRadius: 'var(--radius-pill)',
      cursor: 'pointer',
      fontFamily: 'var(--font-sans)',
      fontSize: 'var(--fs-label)',
      fontWeight: 'var(--fw-medium)',
      letterSpacing: 'var(--ls-label)',
      color: selected ? 'var(--gold-100)' : 'var(--text-muted)',
      background: selected ? 'var(--emerald-700)' : 'transparent',
      border: `1px solid ${selected ? 'transparent' : 'var(--border-hairline)'}`,
      transition: 'all var(--dur-base) var(--ease-standard)',
      ...style
    }
  }, children);
}
Object.assign(__ds_scope, { Tag });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/content/Tag.jsx", error: String((e && e.message) || e) }); }

// components/core/Button.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/**
 * Sevanna primary action. Gold "foil" fill for primary, emerald outline for
 * secondary, quiet ghost for tertiary. Uppercase Montserrat with brand tracking.
 */
function Button({
  variant = 'primary',
  size = 'md',
  fullWidth = false,
  disabled = false,
  iconLeft = null,
  iconRight = null,
  children,
  style = {},
  ...rest
}) {
  const sizes = {
    sm: {
      padding: '9px 18px',
      font: 'var(--fs-caption)'
    },
    md: {
      padding: '13px 26px',
      font: 'var(--fs-label)'
    },
    lg: {
      padding: '17px 36px',
      font: 'var(--fs-body-sm)'
    }
  };
  const s = sizes[size] || sizes.md;
  const base = {
    display: 'inline-flex',
    alignItems: 'center',
    justifyContent: 'center',
    gap: 'var(--space-2)',
    width: fullWidth ? '100%' : 'auto',
    padding: s.padding,
    fontFamily: 'var(--font-sans)',
    fontSize: s.font,
    fontWeight: 'var(--fw-semibold)',
    letterSpacing: 'var(--ls-label)',
    textTransform: 'none',
    lineHeight: 1,
    borderRadius: 'var(--radius-pill)',
    cursor: disabled ? 'not-allowed' : 'pointer',
    opacity: disabled ? 0.5 : 1,
    border: '1px solid transparent',
    transition: 'transform var(--dur-fast) var(--ease-standard), box-shadow var(--dur-base) var(--ease-standard), background var(--dur-base) var(--ease-standard)',
    whiteSpace: 'nowrap'
  };
  const variants = {
    primary: {
      background: 'var(--emerald-600)',
      color: 'var(--gold-100)',
      boxShadow: 'none'
    },
    secondary: {
      background: 'transparent',
      color: 'var(--accent-strong)',
      borderColor: 'var(--border-strong)'
    },
    ghost: {
      background: 'transparent',
      color: 'var(--text-muted)',
      letterSpacing: 'var(--ls-label)'
    },
    solid: {
      background: 'var(--emerald-700)',
      color: 'var(--gold-100)',
      borderColor: 'var(--border-hairline)'
    }
  };
  return /*#__PURE__*/React.createElement("button", _extends({
    type: "button",
    disabled: disabled,
    style: {
      ...base,
      ...(variants[variant] || variants.primary),
      ...style
    },
    onMouseEnter: e => {
      if (!disabled) e.currentTarget.style.transform = 'translateY(-1px)';
    },
    onMouseLeave: e => {
      e.currentTarget.style.transform = 'translateY(0)';
    }
  }, rest), iconLeft, children, iconRight);
}
Object.assign(__ds_scope, { Button });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/Button.jsx", error: String((e && e.message) || e) }); }

// components/core/Icon.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
const {
  useEffect,
  useRef
} = React;
/**
 * Thin-line icon wrapper around Lucide (loaded via CDN in the host page).
 * Matches the delicate, elegant line quality of the Sevanna mark.
 */
function Icon({
  name = 'sparkles',
  size = 20,
  strokeWidth = 1.5,
  color = 'currentColor',
  style = {},
  ...rest
}) {
  const ref = useRef(null);
  useEffect(() => {
    if (window.lucide && ref.current) {
      ref.current.innerHTML = '';
      const el = document.createElement('i');
      el.setAttribute('data-lucide', name);
      ref.current.appendChild(el);
      try {
        window.lucide.createIcons({
          nameAttr: 'data-lucide',
          attrs: {
            width: size,
            height: size,
            'stroke-width': strokeWidth
          }
        });
      } catch (e) {}
    }
  }, [name, size, strokeWidth]);
  return /*#__PURE__*/React.createElement("span", _extends({
    ref: ref,
    "aria-hidden": "true",
    style: {
      display: 'inline-flex',
      color,
      width: size,
      height: size,
      ...style
    }
  }, rest));
}
Object.assign(__ds_scope, { Icon });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/Icon.jsx", error: String((e && e.message) || e) }); }

// components/content/Accordion.jsx
try { (() => {
/** Accordion for FAQ / temario. items: [{title, content}]. */
function Accordion({
  items = [],
  defaultOpen = 0,
  style = {}
}) {
  const [open, setOpen] = React.useState(defaultOpen);
  return /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: 'var(--space-2)',
      width: '100%',
      ...style
    }
  }, items.map((it, i) => {
    const isOpen = open === i;
    return /*#__PURE__*/React.createElement("div", {
      key: i,
      style: {
        border: '1px solid var(--border-hairline)',
        borderRadius: 'var(--radius-md)',
        background: 'var(--surface-card)',
        overflow: 'hidden'
      }
    }, /*#__PURE__*/React.createElement("button", {
      type: "button",
      onClick: () => setOpen(isOpen ? -1 : i),
      style: {
        width: '100%',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        gap: 'var(--space-4)',
        padding: 'var(--space-4) var(--space-5)',
        background: 'transparent',
        border: 'none',
        cursor: 'pointer',
        textAlign: 'left',
        fontFamily: 'var(--font-serif)',
        fontSize: '21px',
        fontWeight: 'var(--fw-semibold)',
        color: 'var(--text-strong)'
      }
    }, /*#__PURE__*/React.createElement("span", null, it.title), /*#__PURE__*/React.createElement("span", {
      style: {
        flex: '0 0 auto',
        color: 'var(--accent-strong)',
        transform: isOpen ? 'rotate(45deg)' : 'none',
        transition: 'transform var(--dur-base) var(--ease-standard)'
      }
    }, /*#__PURE__*/React.createElement(__ds_scope.Icon, {
      name: "plus",
      size: 20
    }))), /*#__PURE__*/React.createElement("div", {
      style: {
        maxHeight: isOpen ? 400 : 0,
        transition: 'max-height var(--dur-slow) var(--ease-standard)',
        overflow: 'hidden'
      }
    }, /*#__PURE__*/React.createElement("div", {
      style: {
        padding: '0 var(--space-5) var(--space-5)',
        fontFamily: 'var(--font-sans)',
        fontSize: 'var(--fs-body-sm)',
        lineHeight: 'var(--lh-body)',
        color: 'var(--text-muted)'
      }
    }, it.content)));
  }));
}
Object.assign(__ds_scope, { Accordion });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/content/Accordion.jsx", error: String((e && e.message) || e) }); }

// components/content/CourseCard.jsx
try { (() => {
/**
 * Course catalog card — image well, level badge, title, meta row, price/CTA.
 * The image well shows an emerald-to-gold placeholder unless `image` is given.
 */
function CourseCard({
  title = 'Curso',
  level = 'basic',
  levelLabel = 'Básico',
  modality = 'Presencial',
  duration = '4 h',
  price = '',
  image = '',
  category = '',
  onClick,
  style = {}
}) {
  const [h, setH] = React.useState(false);
  return /*#__PURE__*/React.createElement("div", {
    onClick: onClick,
    onMouseEnter: () => setH(true),
    onMouseLeave: () => setH(false),
    style: {
      display: 'flex',
      flexDirection: 'column',
      overflow: 'hidden',
      cursor: onClick ? 'pointer' : 'default',
      background: 'var(--surface-card)',
      border: '1px solid var(--border-hairline)',
      borderRadius: 'var(--radius-lg)',
      boxShadow: h ? 'var(--shadow-lg)' : 'var(--shadow-sm)',
      transform: h ? 'translateY(-4px)' : 'none',
      transition: 'transform var(--dur-base) var(--ease-out), box-shadow var(--dur-base) var(--ease-standard)',
      ...style
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'relative',
      aspectRatio: '4 / 3',
      overflow: 'hidden',
      background: image ? `center/cover no-repeat url(${image})` : 'linear-gradient(160deg,var(--emerald-500),var(--emerald-600))'
    }
  }, !image && /*#__PURE__*/React.createElement("span", {
    style: {
      position: 'absolute',
      inset: 0,
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      color: 'var(--gold-400)'
    }
  }, /*#__PURE__*/React.createElement(__ds_scope.Icon, {
    name: "flower-2",
    size: 48,
    strokeWidth: 1
  })), image && /*#__PURE__*/React.createElement("span", {
    style: {
      position: 'absolute',
      insetInline: 0,
      top: 0,
      height: '46%',
      background: 'linear-gradient(180deg, rgba(8,26,15,0.55), transparent)',
      pointerEvents: 'none'
    }
  }), /*#__PURE__*/React.createElement("span", {
    style: {
      position: 'absolute',
      top: 14,
      left: 14,
      borderRadius: 'var(--radius-pill)',
      backdropFilter: image ? 'saturate(140%) blur(6px)' : 'none',
      WebkitBackdropFilter: image ? 'saturate(140%) blur(6px)' : 'none',
      boxShadow: image ? '0 2px 10px rgba(8,26,15,0.45)' : 'none'
    }
  }, /*#__PURE__*/React.createElement(__ds_scope.Badge, {
    tone: level
  }, levelLabel))), /*#__PURE__*/React.createElement("div", {
    style: {
      padding: 'var(--space-5)',
      display: 'flex',
      flexDirection: 'column',
      gap: 'var(--space-3)',
      flex: 1
    }
  }, category && /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: 'var(--font-sans)',
      fontSize: 'var(--fs-eyebrow)',
      letterSpacing: 'var(--ls-eyebrow)',
      textTransform: 'uppercase',
      color: 'var(--accent-strong)'
    }
  }, category), /*#__PURE__*/React.createElement("h3", {
    style: {
      margin: 0,
      fontFamily: 'var(--font-serif)',
      fontWeight: 'var(--fw-semibold)',
      fontSize: '24px',
      lineHeight: 'var(--lh-heading)',
      color: 'var(--emerald-700)'
    }
  }, title), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      gap: 'var(--space-4)',
      marginTop: 'auto',
      color: 'var(--text-muted)',
      fontFamily: 'var(--font-sans)',
      fontSize: 'var(--fs-caption)',
      letterSpacing: 'var(--ls-label)'
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      display: 'inline-flex',
      alignItems: 'center',
      gap: 6
    }
  }, /*#__PURE__*/React.createElement(__ds_scope.Icon, {
    name: "map-pin",
    size: 14
  }), modality), /*#__PURE__*/React.createElement("span", {
    style: {
      display: 'inline-flex',
      alignItems: 'center',
      gap: 6
    }
  }, /*#__PURE__*/React.createElement(__ds_scope.Icon, {
    name: "clock",
    size: 14
  }), duration)), price && /*#__PURE__*/React.createElement("div", {
    style: {
      marginTop: 'var(--space-2)',
      paddingTop: 'var(--space-3)',
      borderTop: '1px solid var(--divider)',
      fontFamily: 'var(--font-display)',
      fontSize: '20px',
      color: 'var(--accent-strong)',
      letterSpacing: '0.04em'
    }
  }, price)));
}
Object.assign(__ds_scope, { CourseCard });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/content/CourseCard.jsx", error: String((e && e.message) || e) }); }

// components/core/IconButton.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/** Circular icon-only button; ghost by default, gold-outline optional. */
function IconButton({
  name = 'arrow-right',
  variant = 'ghost',
  size = 40,
  label = '',
  style = {},
  ...rest
}) {
  const variants = {
    ghost: {
      background: 'transparent',
      border: '1px solid var(--border-hairline)',
      color: 'var(--text-muted)'
    },
    gold: {
      background: 'transparent',
      border: '1px solid var(--border-strong)',
      color: 'var(--accent-strong)'
    },
    filled: {
      background: 'var(--gradient-gold)',
      border: 'none',
      color: 'var(--text-on-gold)',
      boxShadow: 'var(--sheen-gold)'
    }
  };
  return /*#__PURE__*/React.createElement("button", _extends({
    type: "button",
    "aria-label": label || name,
    style: {
      display: 'inline-flex',
      alignItems: 'center',
      justifyContent: 'center',
      width: size,
      height: size,
      borderRadius: 'var(--radius-pill)',
      cursor: 'pointer',
      transition: 'background var(--dur-base) var(--ease-standard), border-color var(--dur-base) var(--ease-standard)',
      ...(variants[variant] || variants.ghost),
      ...style
    }
  }, rest), /*#__PURE__*/React.createElement(__ds_scope.Icon, {
    name: name,
    size: Math.round(size * 0.44)
  }));
}
Object.assign(__ds_scope, { IconButton });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/IconButton.jsx", error: String((e && e.message) || e) }); }

// components/forms/Checkbox.jsx
try { (() => {
/** Checkbox with gold check. Controlled via `checked` or uncontrolled default. */
function Checkbox({
  label = '',
  checked,
  defaultChecked,
  disabled = false,
  onChange,
  style = {}
}) {
  const [internal, setInternal] = React.useState(!!defaultChecked);
  const isControlled = checked !== undefined;
  const on = isControlled ? checked : internal;
  return /*#__PURE__*/React.createElement("label", {
    style: {
      display: 'inline-flex',
      alignItems: 'center',
      gap: 'var(--space-3)',
      cursor: disabled ? 'not-allowed' : 'pointer',
      opacity: disabled ? 0.55 : 1,
      ...style
    }
  }, /*#__PURE__*/React.createElement("span", {
    onClick: () => {
      if (disabled) return;
      if (!isControlled) setInternal(!on);
      onChange && onChange(!on);
    },
    style: {
      width: 22,
      height: 22,
      flex: '0 0 22px',
      display: 'inline-flex',
      alignItems: 'center',
      justifyContent: 'center',
      borderRadius: 'var(--radius-xs)',
      border: `1px solid ${on ? 'transparent' : 'var(--border-strong)'}`,
      background: on ? 'var(--gradient-gold)' : 'var(--surface-inset)',
      color: 'var(--text-on-gold)',
      transition: 'background var(--dur-base) var(--ease-standard)'
    }
  }, on && /*#__PURE__*/React.createElement(__ds_scope.Icon, {
    name: "check",
    size: 15,
    strokeWidth: 2.4
  })), label && /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: 'var(--font-sans)',
      fontSize: 'var(--fs-body-sm)',
      color: 'var(--text-body)'
    }
  }, label));
}
Object.assign(__ds_scope, { Checkbox });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/forms/Checkbox.jsx", error: String((e && e.message) || e) }); }

// components/forms/Input.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/** Text input with elegant hairline underline-plus-box treatment and a floating eyebrow label. */
function Input({
  label = '',
  placeholder = '',
  type = 'text',
  value,
  defaultValue,
  error = '',
  hint = '',
  disabled = false,
  style = {},
  ...rest
}) {
  return /*#__PURE__*/React.createElement("label", {
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: 'var(--space-2)',
      width: '100%'
    }
  }, label && /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: 'var(--font-sans)',
      fontSize: 'var(--fs-eyebrow)',
      fontWeight: 'var(--fw-semibold)',
      letterSpacing: 'var(--ls-label)',
      textTransform: 'uppercase',
      color: 'var(--text-muted)'
    }
  }, label), /*#__PURE__*/React.createElement("input", _extends({
    type: type,
    placeholder: placeholder,
    value: value,
    defaultValue: defaultValue,
    disabled: disabled,
    style: {
      width: '100%',
      boxSizing: 'border-box',
      padding: '13px 16px',
      fontFamily: 'var(--font-sans)',
      fontSize: 'var(--fs-body-sm)',
      color: 'var(--text-body)',
      background: 'var(--surface-inset)',
      border: `1px solid ${error ? 'var(--danger)' : 'var(--border-hairline)'}`,
      borderRadius: 'var(--radius-sm)',
      outline: 'none',
      transition: 'border-color var(--dur-base) var(--ease-standard), box-shadow var(--dur-base) var(--ease-standard)',
      opacity: disabled ? 0.55 : 1,
      ...style
    },
    onFocus: e => {
      e.currentTarget.style.borderColor = 'var(--accent)';
      e.currentTarget.style.boxShadow = '0 0 0 3px var(--focus-ring)';
    },
    onBlur: e => {
      e.currentTarget.style.borderColor = error ? 'var(--danger)' : 'var(--border-hairline)';
      e.currentTarget.style.boxShadow = 'none';
    }
  }, rest)), (error || hint) && /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: 'var(--font-sans)',
      fontSize: 'var(--fs-caption)',
      color: error ? 'var(--danger)' : 'var(--text-muted)'
    }
  }, error || hint));
}
Object.assign(__ds_scope, { Input });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/forms/Input.jsx", error: String((e && e.message) || e) }); }

// components/forms/Select.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/** Styled select with custom chevron. Options: [{value,label}] or string[]. */
function Select({
  label = '',
  options = [],
  value,
  defaultValue,
  disabled = false,
  style = {},
  ...rest
}) {
  const opts = options.map(o => typeof o === 'string' ? {
    value: o,
    label: o
  } : o);
  return /*#__PURE__*/React.createElement("label", {
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: 'var(--space-2)',
      width: '100%'
    }
  }, label && /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: 'var(--font-sans)',
      fontSize: 'var(--fs-eyebrow)',
      fontWeight: 'var(--fw-semibold)',
      letterSpacing: 'var(--ls-label)',
      textTransform: 'uppercase',
      color: 'var(--text-muted)'
    }
  }, label), /*#__PURE__*/React.createElement("span", {
    style: {
      position: 'relative',
      display: 'block'
    }
  }, /*#__PURE__*/React.createElement("select", _extends({
    value: value,
    defaultValue: defaultValue,
    disabled: disabled,
    style: {
      width: '100%',
      boxSizing: 'border-box',
      appearance: 'none',
      WebkitAppearance: 'none',
      padding: '13px 42px 13px 16px',
      fontFamily: 'var(--font-sans)',
      fontSize: 'var(--fs-body-sm)',
      color: 'var(--text-body)',
      background: 'var(--surface-inset)',
      border: '1px solid var(--border-hairline)',
      borderRadius: 'var(--radius-sm)',
      outline: 'none',
      cursor: 'pointer',
      opacity: disabled ? 0.55 : 1,
      ...style
    },
    onFocus: e => {
      e.currentTarget.style.borderColor = 'var(--accent)';
      e.currentTarget.style.boxShadow = '0 0 0 3px var(--focus-ring)';
    },
    onBlur: e => {
      e.currentTarget.style.borderColor = 'var(--border-hairline)';
      e.currentTarget.style.boxShadow = 'none';
    }
  }, rest), opts.map(o => /*#__PURE__*/React.createElement("option", {
    key: o.value,
    value: o.value
  }, o.label))), /*#__PURE__*/React.createElement("span", {
    style: {
      position: 'absolute',
      right: 14,
      top: '50%',
      transform: 'translateY(-50%)',
      pointerEvents: 'none',
      color: 'var(--accent-strong)'
    }
  }, /*#__PURE__*/React.createElement(__ds_scope.Icon, {
    name: "chevron-down",
    size: 18
  }))));
}
Object.assign(__ds_scope, { Select });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/forms/Select.jsx", error: String((e && e.message) || e) }); }

// components/forms/Switch.jsx
try { (() => {
/** Toggle switch — gold track when on. */
function Switch({
  checked,
  defaultChecked,
  disabled = false,
  onChange,
  label = '',
  style = {}
}) {
  const [internal, setInternal] = React.useState(!!defaultChecked);
  const isControlled = checked !== undefined;
  const on = isControlled ? checked : internal;
  return /*#__PURE__*/React.createElement("label", {
    style: {
      display: 'inline-flex',
      alignItems: 'center',
      gap: 'var(--space-3)',
      cursor: disabled ? 'not-allowed' : 'pointer',
      opacity: disabled ? 0.55 : 1,
      ...style
    }
  }, /*#__PURE__*/React.createElement("span", {
    onClick: () => {
      if (disabled) return;
      if (!isControlled) setInternal(!on);
      onChange && onChange(!on);
    },
    style: {
      width: 46,
      height: 26,
      flex: '0 0 46px',
      borderRadius: 'var(--radius-pill)',
      position: 'relative',
      background: on ? 'var(--gradient-gold)' : 'var(--emerald-700)',
      border: '1px solid var(--border-hairline)',
      transition: 'background var(--dur-base) var(--ease-standard)'
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      position: 'absolute',
      top: 2,
      left: on ? 22 : 2,
      width: 20,
      height: 20,
      borderRadius: 'var(--radius-pill)',
      background: on ? 'var(--emerald-950)' : 'var(--gold-100)',
      boxShadow: 'var(--shadow-xs)',
      transition: 'left var(--dur-base) var(--ease-out)'
    }
  })), label && /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: 'var(--font-sans)',
      fontSize: 'var(--fs-body-sm)',
      color: 'var(--text-body)'
    }
  }, label));
}
Object.assign(__ds_scope, { Switch });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/forms/Switch.jsx", error: String((e && e.message) || e) }); }

// ui_kits/website/CatalogScreen.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
const {
  SectionHeading,
  CourseCard,
  Tag,
  Select
} = window.SevannaDesignSystem_5220c2;
function CatalogScreen({
  go
}) {
  const {
    courses,
    categories
  } = window.SEVANNA;
  const [cat, setCat] = React.useState('Todos');
  const shown = cat === 'Todos' ? courses : courses.filter(c => c.category === cat);
  return /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("section", {
    style: {
      padding: '72px 40px 56px',
      textAlign: 'center',
      background: 'linear-gradient(180deg,var(--cream-50),var(--cream-100))'
    }
  }, /*#__PURE__*/React.createElement(SectionHeading, {
    eyebrow: "Cat\xE1logo",
    title: "Todos nuestros cursos",
    subtitle: "Filtra por categor\xEDa y encuentra el taller ideal para tu nivel."
  })), /*#__PURE__*/React.createElement("section", {
    style: {
      maxWidth: 'var(--container)',
      margin: '0 auto',
      padding: '32px 40px 96px'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      flexWrap: 'wrap',
      alignItems: 'center',
      justifyContent: 'space-between',
      gap: 16,
      marginBottom: 36
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      gap: 10,
      flexWrap: 'wrap'
    }
  }, categories.map(c => /*#__PURE__*/React.createElement(Tag, {
    key: c,
    selected: cat === c,
    onClick: () => setCat(c)
  }, c))), /*#__PURE__*/React.createElement("div", {
    style: {
      width: 200
    }
  }, /*#__PURE__*/React.createElement(Select, {
    options: ['Más recientes', 'Precio: menor', 'Precio: mayor', 'Duración']
  }))), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'grid',
      gridTemplateColumns: 'repeat(3,1fr)',
      gap: 28
    }
  }, shown.map(c => /*#__PURE__*/React.createElement(CourseCard, _extends({
    key: c.id
  }, c, {
    onClick: () => go('course', c)
  }))))));
}
window.CatalogScreen = CatalogScreen;
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/website/CatalogScreen.jsx", error: String((e && e.message) || e) }); }

// ui_kits/website/CourseScreen.jsx
try { (() => {
const {
  Button,
  Icon,
  Badge,
  Accordion,
  Card,
  SectionHeading
} = window.SevannaDesignSystem_5220c2;
function CourseScreen({
  course,
  go
}) {
  const c = course || window.SEVANNA.courses[1];
  const meta = [['map-pin', c.modality], ['clock', c.duration], ['bar-chart-3', c.levelLabel], ['users', 'Cupos limitados']];
  const includes = ['Kit de materiales incluido', 'Certificado de participación', 'Acceso a recetario digital', 'Acompañamiento del instructor'];
  return /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("section", {
    style: {
      background: 'linear-gradient(180deg,var(--cream-50),var(--cream-100))',
      padding: '40px 40px 0'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      maxWidth: 'var(--container)',
      margin: '0 auto'
    }
  }, /*#__PURE__*/React.createElement("a", {
    onClick: () => go('catalog'),
    style: {
      cursor: 'pointer',
      display: 'inline-flex',
      alignItems: 'center',
      gap: 8,
      fontFamily: 'var(--font-sans)',
      fontSize: 13,
      letterSpacing: '0.1em',
      textTransform: 'uppercase',
      color: 'var(--text-muted)',
      marginBottom: 28
    }
  }, /*#__PURE__*/React.createElement(Icon, {
    name: "arrow-left",
    size: 16
  }), " Volver al cat\xE1logo"), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'grid',
      gridTemplateColumns: '1.1fr 0.9fr',
      gap: 48,
      alignItems: 'center',
      paddingBottom: 56
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: 18
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      gap: 10
    }
  }, /*#__PURE__*/React.createElement(Badge, {
    tone: c.level
  }, c.levelLabel), /*#__PURE__*/React.createElement(Badge, {
    tone: "gold"
  }, c.category)), /*#__PURE__*/React.createElement("h1", {
    style: {
      margin: 0,
      fontFamily: 'var(--font-serif)',
      fontWeight: 600,
      fontSize: 'clamp(34px,4.6vw,54px)',
      lineHeight: 1.1,
      color: 'var(--emerald-900)'
    }
  }, c.title), /*#__PURE__*/React.createElement("p", {
    style: {
      margin: 0,
      fontFamily: 'var(--font-serif)',
      fontSize: 22,
      lineHeight: 1.6,
      color: 'var(--ink-700)'
    }
  }, c.blurb), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      flexWrap: 'wrap',
      gap: 22,
      marginTop: 6
    }
  }, meta.map(([ic, t], i) => /*#__PURE__*/React.createElement("span", {
    key: i,
    style: {
      display: 'inline-flex',
      alignItems: 'center',
      gap: 8,
      fontFamily: 'var(--font-sans)',
      fontSize: 13,
      letterSpacing: '0.06em',
      color: 'var(--text-muted)'
    }
  }, /*#__PURE__*/React.createElement(Icon, {
    name: ic,
    size: 16,
    color: "var(--accent-strong)"
  }), t)))), /*#__PURE__*/React.createElement("div", {
    style: {
      aspectRatio: '4/3',
      borderRadius: 'var(--radius-xl)',
      overflow: 'hidden',
      background: c.image ? `center/cover no-repeat url(${c.image})` : 'var(--emerald-800)',
      border: '1px solid var(--border-strong)',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      color: 'var(--border-strong)'
    }
  }, !c.image && /*#__PURE__*/React.createElement(Icon, {
    name: "flower-2",
    size: 72,
    strokeWidth: 0.9
  }))))), /*#__PURE__*/React.createElement("section", {
    style: {
      maxWidth: 'var(--container)',
      margin: '0 auto',
      padding: '64px 40px 96px',
      display: 'grid',
      gridTemplateColumns: '1fr 340px',
      gap: 48,
      alignItems: 'start'
    }
  }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement(SectionHeading, {
    align: "left",
    eyebrow: "Temario",
    title: "Lo que aprender\xE1s",
    ornament: false,
    style: {
      marginBottom: 28
    }
  }), /*#__PURE__*/React.createElement(Accordion, {
    items: window.SEVANNA.temario,
    defaultOpen: 0
  })), /*#__PURE__*/React.createElement(Card, {
    light: true,
    style: {
      position: 'sticky',
      top: 96,
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'stretch',
      gap: 20,
      textAlign: 'center'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: 4
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: 'var(--font-sans)',
      fontSize: 12,
      fontWeight: 600,
      letterSpacing: '0.2em',
      textTransform: 'uppercase',
      color: 'var(--text-muted)'
    }
  }, "Inversi\xF3n"), /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: 'var(--font-display)',
      fontSize: 38,
      letterSpacing: '0.03em',
      color: 'var(--accent-strong)'
    }
  }, c.price)), /*#__PURE__*/React.createElement("div", {
    style: {
      borderTop: '1px solid var(--divider)',
      paddingTop: 18,
      display: 'flex',
      flexDirection: 'column',
      gap: 12,
      textAlign: 'left'
    }
  }, includes.map((it, i) => /*#__PURE__*/React.createElement("span", {
    key: i,
    style: {
      display: 'flex',
      gap: 10,
      alignItems: 'center',
      fontFamily: 'var(--font-sans)',
      fontSize: 14,
      color: 'var(--text-body)'
    }
  }, /*#__PURE__*/React.createElement(Icon, {
    name: "check",
    size: 17,
    color: "var(--accent)"
  }), it))), /*#__PURE__*/React.createElement(Button, {
    variant: "primary",
    size: "lg",
    fullWidth: true,
    onClick: () => go('enroll', c)
  }, "Inscribirme ahora"), /*#__PURE__*/React.createElement(Button, {
    variant: "ghost",
    size: "sm",
    fullWidth: true
  }, "Descargar temario (PDF)"))));
}
window.CourseScreen = CourseScreen;
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/website/CourseScreen.jsx", error: String((e && e.message) || e) }); }

// ui_kits/website/EnrollScreen.jsx
try { (() => {
const {
  Button,
  Icon,
  Badge,
  Card
} = window.SevannaDesignSystem_5220c2;

// ⚠️ Reemplaza este número por el WhatsApp Business real de Sevanna (formato internacional, sin +).
const WA_NUMBER = '573001112233';
function EnrollScreen({
  course,
  go
}) {
  const c = course || window.SEVANNA.courses[1];
  const msg = encodeURIComponent(`¡Hola Sevanna! Quiero completar mi inscripción al curso "${c.title}" (${c.levelLabel} · ${c.modality}). ¿Me ayudan con los pasos?`);
  const waLink = `https://wa.me/${WA_NUMBER}?text=${msg}`;
  const steps = [['message-circle', 'Escríbenos por WhatsApp', 'Toca el botón y se abrirá un chat con tu curso ya seleccionado.'], ['credit-card', 'Confirma tu cupo', 'Te compartimos los medios de pago y aseguramos tu lugar.'], ['sparkles', '¡Nos vemos en el taller!', 'Recibirás los detalles, materiales y fecha de inicio.']];
  return /*#__PURE__*/React.createElement("section", {
    style: {
      minHeight: '70vh',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      padding: '72px 40px 96px',
      background: 'linear-gradient(180deg,var(--cream-50),var(--cream-100))'
    }
  }, /*#__PURE__*/React.createElement(Card, {
    style: {
      width: '100%',
      maxWidth: 560,
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      gap: 24,
      textAlign: 'center',
      padding: '44px 40px'
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      width: 76,
      height: 76,
      borderRadius: 'var(--radius-pill)',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      background: 'rgba(37,211,102,0.12)',
      border: '1px solid rgba(37,211,102,0.4)'
    }
  }, /*#__PURE__*/React.createElement("img", {
    src: "https://cdn.simpleicons.org/whatsapp/25D366",
    alt: "WhatsApp",
    width: 38,
    height: 38
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: 12,
      alignItems: 'center'
    }
  }, /*#__PURE__*/React.createElement(Badge, {
    tone: "gold"
  }, "\xDAltimo paso"), /*#__PURE__*/React.createElement("h1", {
    style: {
      margin: 0,
      fontFamily: 'var(--font-serif)',
      fontWeight: 600,
      fontSize: 'clamp(30px,4vw,44px)',
      lineHeight: 1.12,
      color: 'var(--emerald-900)'
    }
  }, "Para completar tu inscripci\xF3n,", /*#__PURE__*/React.createElement("br", null), "cont\xE1ctanos por WhatsApp"), /*#__PURE__*/React.createElement("p", {
    style: {
      margin: 0,
      maxWidth: 420,
      fontFamily: 'var(--font-serif)',
      fontSize: 20,
      lineHeight: 1.55,
      color: 'var(--ink-700)'
    }
  }, "Reservaste ", /*#__PURE__*/React.createElement("em", {
    style: {
      color: 'var(--accent-strong)'
    }
  }, c.title), ". Termina tu registro en un breve chat con nuestro equipo.")), /*#__PURE__*/React.createElement("div", {
    style: {
      width: '100%',
      display: 'flex',
      flexDirection: 'column',
      gap: 14,
      textAlign: 'left',
      padding: '20px 0',
      borderTop: '1px solid var(--divider)',
      borderBottom: '1px solid var(--divider)'
    }
  }, steps.map(([ic, t, d], i) => /*#__PURE__*/React.createElement("div", {
    key: i,
    style: {
      display: 'flex',
      gap: 14,
      alignItems: 'flex-start'
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      flex: '0 0 auto',
      width: 34,
      height: 34,
      borderRadius: 'var(--radius-pill)',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      color: 'var(--accent-strong)',
      border: '1px solid var(--border-strong)'
    }
  }, /*#__PURE__*/React.createElement(Icon, {
    name: ic,
    size: 17
  })), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: 'var(--font-sans)',
      fontSize: 15,
      fontWeight: 600,
      color: 'var(--text-strong)'
    }
  }, t), /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: 'var(--font-sans)',
      fontSize: 13.5,
      lineHeight: 1.5,
      color: 'var(--text-muted)'
    }
  }, d))))), /*#__PURE__*/React.createElement("a", {
    href: waLink,
    target: "_blank",
    rel: "noopener noreferrer",
    style: {
      width: '100%',
      display: 'inline-flex',
      alignItems: 'center',
      justifyContent: 'center',
      gap: 10,
      padding: '16px 26px',
      borderRadius: 'var(--radius-pill)',
      background: '#25D366',
      color: '#08210F',
      fontFamily: 'var(--font-sans)',
      fontSize: 14,
      fontWeight: 600,
      letterSpacing: 'var(--ls-eyebrow)',
      textTransform: 'uppercase',
      boxShadow: '0 8px 24px rgba(37,211,102,0.35)'
    }
  }, /*#__PURE__*/React.createElement("img", {
    src: "https://cdn.simpleicons.org/whatsapp/08210F",
    alt: "",
    width: 20,
    height: 20
  }), " Escribir por WhatsApp"), /*#__PURE__*/React.createElement(Button, {
    variant: "ghost",
    size: "sm",
    onClick: () => go('course', c),
    iconLeft: /*#__PURE__*/React.createElement(Icon, {
      name: "arrow-left",
      size: 15
    })
  }, "Volver al curso")));
}
window.EnrollScreen = EnrollScreen;
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/website/EnrollScreen.jsx", error: String((e && e.message) || e) }); }

// ui_kits/website/Footer.jsx
try { (() => {
const {
  Icon
} = window.SevannaDesignSystem_5220c2;
function Footer() {
  const cols = [['Cursos', ['Velas', 'Jabones', 'Skincare', 'Perfumería']], ['Academia', ['Nosotros', 'Modalidades', 'Certificados', 'Contacto']], ['Recursos', ['Blog', 'Guías gratuitas', 'Preguntas frecuentes']]];
  const socials = [['whatsapp', 'WhatsApp'], ['instagram', 'Instagram'], ['facebook', 'Facebook'], ['tiktok', 'TikTok']];
  return /*#__PURE__*/React.createElement("footer", {
    role: "contentinfo",
    style: {
      background: 'var(--emerald-950)',
      borderTop: '1px solid var(--border-hairline)',
      padding: '56px 40px 32px',
      color: 'var(--emerald-100)'
    }
  }, /*#__PURE__*/React.createElement("style", null, `
        .sv-foot-link{color:var(--emerald-100);text-decoration:none;transition:color var(--dur-fast) var(--ease-standard)}
        .sv-foot-link:hover{color:var(--gold-300)}
        .sv-foot-focus:focus{outline:none}
        .sv-foot-focus:focus-visible{outline:2px solid var(--gold-300);outline-offset:3px;border-radius:6px}
      `), /*#__PURE__*/React.createElement("div", {
    style: {
      maxWidth: 'var(--container)',
      margin: '0 auto',
      display: 'grid',
      gridTemplateColumns: '1.4fr 1fr 1fr 1fr',
      gap: 40
    }
  }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: 'var(--font-display)',
      fontWeight: 600,
      fontSize: 24,
      letterSpacing: '0.18em',
      color: 'var(--gold-100)'
    }
  }, "SEVANNA"), /*#__PURE__*/React.createElement("p", {
    style: {
      fontFamily: 'var(--font-serif)',
      fontSize: 18,
      lineHeight: 1.6,
      color: 'var(--emerald-100)',
      maxWidth: 280,
      marginTop: 12
    }
  }, "Academia de cosm\xE9tica natural. Conocimiento, creatividad y elaboraci\xF3n artesanal."), /*#__PURE__*/React.createElement("nav", {
    "aria-label": "Redes sociales"
  }, /*#__PURE__*/React.createElement("ul", {
    style: {
      display: 'flex',
      gap: 16,
      marginTop: 18,
      listStyle: 'none',
      padding: 0,
      margin: '18px 0 0'
    }
  }, socials.map(([slug, label]) => /*#__PURE__*/React.createElement("li", {
    key: slug
  }, /*#__PURE__*/React.createElement("a", {
    href: "#",
    className: "sv-foot-focus",
    "aria-label": `Sevanna en ${label}`,
    onClick: e => e.preventDefault(),
    style: {
      display: 'inline-flex',
      cursor: 'pointer',
      opacity: 0.85,
      transition: 'opacity var(--dur-base) var(--ease-standard)'
    },
    onMouseEnter: e => e.currentTarget.style.opacity = 1,
    onMouseLeave: e => e.currentTarget.style.opacity = 0.85
  }, /*#__PURE__*/React.createElement("img", {
    src: `https://cdn.simpleicons.org/${slug}/C69F53`,
    alt: "",
    "aria-hidden": "true",
    width: 22,
    height: 22
  }))))))), cols.map(([h, items], i) => /*#__PURE__*/React.createElement("nav", {
    key: i,
    "aria-label": h
  }, /*#__PURE__*/React.createElement("h2", {
    style: {
      fontFamily: 'var(--font-sans)',
      fontSize: 12,
      fontWeight: 600,
      letterSpacing: '0.2em',
      textTransform: 'uppercase',
      color: 'var(--gold-300)',
      margin: '0 0 16px'
    }
  }, h), /*#__PURE__*/React.createElement("ul", {
    style: {
      listStyle: 'none',
      padding: 0,
      margin: 0
    }
  }, items.map((it, j) => /*#__PURE__*/React.createElement("li", {
    key: j,
    style: {
      marginBottom: 10
    }
  }, /*#__PURE__*/React.createElement("a", {
    href: "#",
    className: "sv-foot-link sv-foot-focus",
    onClick: e => e.preventDefault(),
    style: {
      display: 'inline-block',
      fontFamily: 'var(--font-sans)',
      fontSize: 14
    }
  }, it))))))), /*#__PURE__*/React.createElement("div", {
    style: {
      maxWidth: 'var(--container)',
      margin: '40px auto 0',
      paddingTop: 20,
      borderTop: '1px solid var(--divider)',
      display: 'flex',
      justifyContent: 'space-between',
      flexWrap: 'wrap',
      gap: 8,
      fontFamily: 'var(--font-sans)',
      fontSize: 12,
      letterSpacing: '0.06em',
      color: 'var(--emerald-300)'
    }
  }, /*#__PURE__*/React.createElement("span", null, "\xA9 2026 Sevanna \xB7 Academia de Cosm\xE9tica"), /*#__PURE__*/React.createElement("span", null, "Hecho a mano con ingredientes naturales")));
}
window.Footer = Footer;
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/website/Footer.jsx", error: String((e && e.message) || e) }); }

// ui_kits/website/Header.jsx
try { (() => {
const {
  Button,
  Icon
} = window.SevannaDesignSystem_5220c2;
function Header({
  route,
  go
}) {
  const links = [['home', 'Inicio'], ['catalog', 'Cursos'], ['catalog', 'Modalidades'], ['home', 'Nosotros']];
  const key = fn => e => {
    if (e.key === 'Enter' || e.key === ' ') {
      e.preventDefault();
      fn();
    }
  };
  const linkOn = active => e => {
    if (!active) {
      e.currentTarget.style.borderBottomColor = 'var(--gold-600)';
    }
  };
  const linkOff = active => e => {
    if (!active) {
      e.currentTarget.style.borderBottomColor = 'transparent';
    }
  };
  return /*#__PURE__*/React.createElement("header", {
    role: "banner",
    style: {
      position: 'sticky',
      top: 0,
      zIndex: 20,
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'space-between',
      padding: '14px 28px',
      background: 'var(--cream-50)',
      borderBottom: '1px solid var(--border-hairline)'
    }
  }, /*#__PURE__*/React.createElement("style", null, `
        .sv-focusable:focus{outline:none}
        .sv-focusable:focus-visible{outline:2px solid var(--gold-300);outline-offset:4px;border-radius:6px}
        @media (prefers-reduced-motion: reduce){.sv-navlink{transition:none}}
      `), /*#__PURE__*/React.createElement("a", {
    href: "#inicio",
    className: "sv-focusable",
    "aria-label": "Sevanna \u2014 ir al inicio",
    onClick: e => {
      e.preventDefault();
      go('home');
    },
    onKeyDown: key(() => go('home')),
    style: {
      cursor: 'pointer',
      display: 'flex',
      alignItems: 'center',
      textDecoration: 'none'
    }
  }, /*#__PURE__*/React.createElement("img", {
    src: "../../assets/logo-wordmark.png",
    alt: "Sevanna",
    style: {
      height: 72,
      width: 'auto'
    }
  })), /*#__PURE__*/React.createElement("nav", {
    "aria-label": "Navegaci\xF3n principal",
    style: {
      position: 'absolute',
      left: '50%',
      transform: 'translateX(-50%)'
    }
  }, /*#__PURE__*/React.createElement("ul", {
    style: {
      display: 'flex',
      gap: 24,
      listStyle: 'none',
      margin: 0,
      padding: 0
    }
  }, links.map(([r, l], i) => {
    const active = route === r && i < 2;
    return /*#__PURE__*/React.createElement("li", {
      key: i
    }, /*#__PURE__*/React.createElement("a", {
      href: '#' + l.toLowerCase(),
      className: "sv-focusable sv-navlink",
      "aria-current": active ? 'page' : undefined,
      onClick: e => {
        e.preventDefault();
        go(r);
      },
      onKeyDown: key(() => go(r)),
      onMouseEnter: linkOn(active),
      onMouseLeave: linkOff(active),
      style: {
        cursor: 'pointer',
        display: 'inline-block',
        fontFamily: 'var(--font-sans)',
        fontSize: 13,
        fontWeight: 700,
        letterSpacing: '0.12em',
        textTransform: 'none',
        padding: '6px 2px',
        textDecoration: 'none',
        color: 'var(--emerald-700)',
        borderBottom: `3px solid ${active ? 'var(--gold-600)' : 'transparent'}`,
        transition: 'color var(--dur-fast) var(--ease-standard)'
      }
    }, l));
  }))), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'center',
      gap: 16
    }
  }, /*#__PURE__*/React.createElement(Button, {
    variant: "primary",
    size: "sm",
    onClick: () => go('catalog'),
    style: {
      paddingTop: 14,
      paddingBottom: 14
    },
    iconLeft: /*#__PURE__*/React.createElement(Icon, {
      name: "leaf",
      size: 16,
      color: "var(--gold-300)"
    })
  }, "Ver cursos")));
}
window.Header = Header;
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/website/Header.jsx", error: String((e && e.message) || e) }); }

// ui_kits/website/HomeScreen.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
const {
  Button,
  Icon,
  SectionHeading,
  CourseCard,
  Badge
} = window.SevannaDesignSystem_5220c2;
function HomeScreen({
  go
}) {
  const feats = [['leaf', 'Ingredientes naturales', 'Trabaja con ceras, aceites y activos botánicos reales.'], ['flask-conical', 'Formulación práctica', 'Aprende a calcular, medir y ajustar cada receta.'], ['award', 'Nivel a tu medida', 'Rutas básicas, intermedias y avanzadas.']];
  const featured = window.SEVANNA.courses.slice(0, 3);
  return /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("section", {
    style: {
      position: 'relative',
      padding: '128px 40px',
      textAlign: 'center',
      backgroundImage: 'radial-gradient(ellipse 62% 78% at center, rgba(250,246,238,0.86) 0%, rgba(250,246,238,0.62) 40%, rgba(250,246,238,0.28) 70%, rgba(250,246,238,0.05) 100%), url(../../assets/hero-products.png)',
      backgroundSize: 'cover',
      backgroundPosition: 'center',
      overflow: 'hidden'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'relative',
      maxWidth: 820,
      margin: '0 auto',
      width: '100%'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      maxWidth: 820,
      margin: '0 auto',
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      gap: 22
    }
  }, /*#__PURE__*/React.createElement("span", {
    "data-reveal": true,
    style: {
      fontFamily: 'var(--font-sans)',
      fontSize: 12,
      fontWeight: 600,
      letterSpacing: '0.32em',
      textTransform: 'uppercase',
      color: 'var(--gold-600)'
    }
  }, "Academia de Cosm\xE9tica Natural"), /*#__PURE__*/React.createElement("h1", {
    "data-reveal": true,
    style: {
      transitionDelay: '.1s',
      margin: 0,
      fontFamily: 'var(--font-serif)',
      fontWeight: 600,
      fontSize: 'clamp(40px,6vw,72px)',
      lineHeight: 1.08,
      color: 'var(--emerald-700)'
    }
  }, "Aprende a crear tu propia", /*#__PURE__*/React.createElement("br", null), /*#__PURE__*/React.createElement("em", {
    style: {
      fontStyle: 'italic',
      color: 'var(--gold-600)'
    }
  }, "cosm\xE9tica natural")), /*#__PURE__*/React.createElement("p", {
    "data-reveal": true,
    style: {
      transitionDelay: '.2s',
      margin: '0 auto',
      maxWidth: 560,
      fontFamily: 'var(--font-serif)',
      fontSize: 22,
      lineHeight: 1.6,
      color: 'var(--emerald-700)'
    }
  }, "Cursos y talleres presenciales, virtuales e h\xEDbridos para elaborar velas, jabones, labiales y m\xE1s \u2014 desde cero hasta nivel profesional."), /*#__PURE__*/React.createElement("div", {
    "data-reveal": true,
    style: {
      transitionDelay: '.3s',
      display: 'flex',
      gap: 14,
      marginTop: 8
    }
  }, /*#__PURE__*/React.createElement(Button, {
    variant: "solid",
    size: "lg",
    onClick: () => go('catalog'),
    iconLeft: /*#__PURE__*/React.createElement(Icon, {
      name: "leaf",
      size: 18,
      color: "var(--gold-300)"
    })
  }, "Explorar cursos"))))), /*#__PURE__*/React.createElement("section", {
    style: {
      padding: '64px 40px',
      maxWidth: 'var(--container)',
      margin: '0 auto',
      display: 'grid',
      gridTemplateColumns: 'repeat(3,1fr)',
      gap: 28
    }
  }, feats.map(([ic, t, d], i) => /*#__PURE__*/React.createElement("div", {
    key: i,
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: 12,
      padding: '28px',
      border: '1px solid var(--border-hairline)',
      borderRadius: 'var(--radius-lg)',
      background: 'var(--surface-card)'
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      color: 'var(--accent-strong)'
    }
  }, /*#__PURE__*/React.createElement(Icon, {
    name: ic,
    size: 30,
    strokeWidth: 1.3
  })), /*#__PURE__*/React.createElement("h3", {
    style: {
      margin: 0,
      fontFamily: 'var(--font-serif)',
      fontWeight: 600,
      fontSize: 24,
      color: 'var(--emerald-700)'
    }
  }, t), /*#__PURE__*/React.createElement("p", {
    style: {
      margin: 0,
      fontFamily: 'var(--font-sans)',
      fontSize: 15,
      lineHeight: 1.6,
      color: 'var(--text-muted)'
    }
  }, d)))), /*#__PURE__*/React.createElement("section", {
    style: {
      padding: '40px 40px 88px',
      maxWidth: 'var(--container)',
      margin: '0 auto'
    }
  }, /*#__PURE__*/React.createElement("div", {
    "data-reveal": true,
    style: {
      ['--text-strong']: 'var(--emerald-700)'
    }
  }, /*#__PURE__*/React.createElement(SectionHeading, {
    eyebrow: "Talleres destacados",
    title: "Empieza por tu primer taller",
    subtitle: "Cada curso incluye materiales definidos, objetivos claros y pr\xE1ctica guiada."
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'grid',
      gridTemplateColumns: 'repeat(3,1fr)',
      gap: 28,
      marginTop: 44
    }
  }, featured.map((c, i) => /*#__PURE__*/React.createElement("div", {
    key: c.id,
    "data-reveal": true,
    style: {
      transitionDelay: i * 0.12 + 's'
    }
  }, /*#__PURE__*/React.createElement(CourseCard, _extends({}, c, {
    onClick: () => go('course', c)
  }))))), /*#__PURE__*/React.createElement("div", {
    "data-reveal": true,
    style: {
      textAlign: 'center',
      marginTop: 44
    }
  }, /*#__PURE__*/React.createElement(Button, {
    variant: "secondary",
    onClick: () => go('catalog'),
    iconRight: /*#__PURE__*/React.createElement(Icon, {
      name: "arrow-right",
      size: 16
    })
  }, "Ver todos los cursos"))), /*#__PURE__*/React.createElement("section", {
    style: {
      padding: '80px 40px',
      background: 'var(--emerald-600)',
      textAlign: 'center'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      maxWidth: 720,
      margin: '0 auto'
    }
  }, /*#__PURE__*/React.createElement("div", {
    "data-reveal": true
  }, /*#__PURE__*/React.createElement("h2", {
    style: {
      margin: 0,
      fontFamily: 'var(--font-sans)',
      fontSize: 13,
      fontWeight: 700,
      letterSpacing: '0.28em',
      textTransform: 'uppercase',
      color: 'var(--gold-300)'
    }
  }, "Nuestra filosof\xEDa")), /*#__PURE__*/React.createElement("p", {
    "data-reveal": true,
    style: {
      transitionDelay: '.15s',
      fontFamily: 'var(--font-serif)',
      fontStyle: 'italic',
      fontSize: 'clamp(26px,3.4vw,38px)',
      lineHeight: 1.45,
      color: 'var(--cream-50)',
      marginTop: 20
    }
  }, "\u201CCombinamos conocimiento, creatividad y elaboraci\xF3n artesanal para que cada estudiante formule con confianza.\u201D"))));
}
window.HomeScreen = HomeScreen;
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/website/HomeScreen.jsx", error: String((e && e.message) || e) }); }

// ui_kits/website/data.js
try { (() => {
// Shared demo data for the Sevanna website UI kit.
window.SEVANNA = {
  courses: [{
    id: 'velas',
    category: 'Velas',
    title: 'Velas de soya aromáticas',
    level: 'basic',
    levelLabel: 'Básico',
    modality: 'Presencial',
    duration: '4 h',
    price: '$85.000',
    blurb: 'Domina el vertido, las mechas y la fragancia para crear velas de acabado impecable.'
  }, {
    id: 'jabones',
    category: 'Jabones',
    title: 'Jabones artesanales en frío',
    level: 'intermediate',
    levelLabel: 'Intermedio',
    modality: 'Híbrido',
    duration: '8 h',
    price: '$120.000',
    image: '../../assets/course-jabones.jpg',
    blurb: 'Saponificación, cálculo de sosa y diseño de barras con ingredientes naturales.'
  }, {
    id: 'labiales',
    category: 'Labiales',
    title: 'Labiales y bálsamos nutritivos',
    level: 'basic',
    levelLabel: 'Básico',
    modality: 'Virtual',
    duration: '3 h',
    price: '$70.000',
    image: '../../assets/course-labiales.jpg',
    blurb: 'Formula bálsamos con ceras y aceites vegetales, con color y textura a tu gusto.'
  }, {
    id: 'desodorantes',
    category: 'Cuidado',
    title: 'Desodorantes naturales',
    level: 'intermediate',
    levelLabel: 'Intermedio',
    modality: 'Virtual',
    duration: '3 h',
    price: '$65.000',
    blurb: 'Alternativas sin aluminio: bases, activos y conservación segura.'
  }, {
    id: 'piel',
    category: 'Skincare',
    title: 'Cuidado de la piel: sérums y cremas',
    level: 'advanced',
    levelLabel: 'Avanzado',
    modality: 'Híbrido',
    duration: '12 h',
    price: '$210.000',
    blurb: 'Emulsiones, activos y conservantes para una rutina profesional.'
  }, {
    id: 'perfumes',
    category: 'Aromas',
    title: 'Perfumería botánica',
    level: 'advanced',
    levelLabel: 'Avanzado',
    modality: 'Presencial',
    duration: '10 h',
    price: '$180.000',
    blurb: 'Pirámide olfativa, acordes y maceración con materias primas naturales.'
  }],
  categories: ['Todos', 'Velas', 'Jabones', 'Labiales', 'Cuidado', 'Skincare', 'Aromas'],
  temario: [{
    title: 'Módulo 1 · Materiales y seguridad',
    content: 'Reconoce ceras, aceites, mechas y equipos. Buenas prácticas de laboratorio y manejo seguro de ingredientes.'
  }, {
    title: 'Módulo 2 · Formulación',
    content: 'Cálculo de porcentajes, punto de fusión, proporción de fragancia y ajuste de textura.'
  }, {
    title: 'Módulo 3 · Elaboración',
    content: 'Proceso paso a paso, vertido, curado y control de calidad del producto terminado.'
  }, {
    title: 'Módulo 4 · Marca y presentación',
    content: 'Etiquetado, empaque sostenible y cómo llevar tu producto al mercado.'
  }]
};
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/website/data.js", error: String((e && e.message) || e) }); }

__ds_ns.Accordion = __ds_scope.Accordion;

__ds_ns.Badge = __ds_scope.Badge;

__ds_ns.Card = __ds_scope.Card;

__ds_ns.CourseCard = __ds_scope.CourseCard;

__ds_ns.SectionHeading = __ds_scope.SectionHeading;

__ds_ns.Tag = __ds_scope.Tag;

__ds_ns.Button = __ds_scope.Button;

__ds_ns.Icon = __ds_scope.Icon;

__ds_ns.IconButton = __ds_scope.IconButton;

__ds_ns.Checkbox = __ds_scope.Checkbox;

__ds_ns.Input = __ds_scope.Input;

__ds_ns.Select = __ds_scope.Select;

__ds_ns.Switch = __ds_scope.Switch;

})();
