function Node({ id, label, selected, onSelect, children }) {
  const handleKeyDown = (event) => {
    if (event.key === "Enter" || event.key === " ") {
      event.preventDefault();
      onSelect(id);
    }
  };

  return (
    <g
      className={`node${selected === id ? " is-active" : ""}`}
      role="button"
      tabIndex={0}
      aria-label={label}
      aria-pressed={selected === id}
      onClick={() => onSelect(id)}
      onKeyDown={handleKeyDown}
    >
      {children}
    </g>
  );
}

export default function MotherboardDiagram({ selected, onSelect }) {
  return (
    <svg
      className="diagram"
      viewBox="0 0 1000 620"
      role="group"
      aria-label="Kompyuter ona platasining sxemasi"
    >
      <defs>
        <pattern id="pcb-dots" width="26" height="26" patternUnits="userSpaceOnUse">
          <circle cx="2" cy="2" r="1.2" className="pcb-dot" />
        </pattern>
      </defs>

      <rect className="pcb" x="40" y="30" width="920" height="560" rx="20" />
      <rect x="40" y="30" width="920" height="560" rx="20" fill="url(#pcb-dots)" />

      <g className="traces" aria-hidden="true">
        <path d="M 300 170 H 250 V 120" />
        <path d="M 300 200 H 250 V 260" />
        <path d="M 470 165 H 545" />
        <path d="M 470 210 H 545" />
        <path d="M 385 250 V 300" />
        <path d="M 530 315 H 620 V 390" />
        <path d="M 620 390 V 340" />
        <path d="M 560 450 H 510 V 490" />
        <path d="M 680 450 H 790 V 340" />
        <path d="M 880 445 H 820" />
        <path d="M 200 70 V 240" />
        <path d="M 760 318 H 700 V 380" />
      </g>

      <text className="pcb-title" x="60" y="574">
        SYSTEM BOARD · REV 1.0
      </text>

      <Node id="ports" label="Portlar" selected={selected} onSelect={onSelect}>
        <rect className="shape" x="52" y="70" width="64" height="200" rx="8" />
        <rect className="port" x="62" y="84" width="44" height="22" rx="3" />
        <rect className="port" x="62" y="116" width="44" height="22" rx="3" />
        <rect className="port" x="62" y="148" width="44" height="30" rx="3" />
        <circle className="port" cx="84" cy="200" r="10" />
        <circle className="port" cx="84" cy="228" r="10" />
        <text className="node-title" x="84" y="260" textAnchor="middle">
          I/O
        </text>
        <text className="node-label" x="84" y="296" textAnchor="middle">
          Portlar
        </text>
      </Node>

      <Node id="psu" label="Quvvat bloki" selected={selected} onSelect={onSelect}>
        <rect className="shape" x="136" y="70" width="64" height="112" rx="8" />
        <g className="pin-grid">
          <rect x="148" y="82" width="12" height="12" rx="2" />
          <rect x="164" y="82" width="12" height="12" rx="2" />
          <rect x="180" y="82" width="12" height="12" rx="2" />
          <rect x="148" y="100" width="12" height="12" rx="2" />
          <rect x="164" y="100" width="12" height="12" rx="2" />
          <rect x="180" y="100" width="12" height="12" rx="2" />
          <rect x="148" y="118" width="12" height="12" rx="2" />
          <rect x="164" y="118" width="12" height="12" rx="2" />
          <rect x="180" y="118" width="12" height="12" rx="2" />
          <rect x="148" y="136" width="12" height="12" rx="2" />
          <rect x="164" y="136" width="12" height="12" rx="2" />
          <rect x="180" y="136" width="12" height="12" rx="2" />
        </g>
        <text className="node-title" x="168" y="170" textAnchor="middle">
          24-pin
        </text>
        <text className="node-label" x="168" y="206" textAnchor="middle">
          Quvvat
        </text>
      </Node>

      <Node id="cpu" label="Protsessor" selected={selected} onSelect={onSelect}>
        <rect className="shape" x="300" y="80" width="170" height="170" rx="12" />
        <rect className="chip-inner" x="324" y="104" width="122" height="122" rx="6" />
        <g className="cpu-pins" aria-hidden="true">
          <path d="M 336 116 H 434" />
          <path d="M 336 132 H 434" />
          <path d="M 336 148 H 434" />
          <path d="M 336 164 H 434" />
          <path d="M 336 180 H 434" />
          <path d="M 336 196 H 434" />
          <path d="M 336 212 H 434" />
        </g>
        <text className="node-title strong" x="385" y="172" textAnchor="middle">
          CPU
        </text>
        <text className="node-label" x="385" y="274" textAnchor="middle">
          Protsessor
        </text>
      </Node>

      <Node id="ram" label="Operativ xotira" selected={selected} onSelect={onSelect}>
        <rect className="shape" x="542" y="62" width="140" height="264" rx="12" />
        <rect className="ram-slot" x="552" y="76" width="22" height="236" rx="4" />
        <rect className="ram-slot" x="586" y="76" width="22" height="236" rx="4" />
        <rect className="ram-slot" x="620" y="76" width="22" height="236" rx="4" />
        <rect className="ram-slot" x="654" y="76" width="22" height="236" rx="4" />
        <text className="node-title" x="612" y="352" textAnchor="middle">
          RAM
        </text>
        <text className="node-label" x="612" y="374" textAnchor="middle">
          Operativ xotira
        </text>
      </Node>

      <Node id="cooler" label="Sovutish tizimi" selected={selected} onSelect={onSelect}>
        <circle className="shape" cx="850" cy="150" r="68" />
        <circle className="fan-hub" cx="850" cy="150" r="16" />
        <g className="fan">
          <ellipse className="blade" cx="850" cy="114" rx="13" ry="30" />
          <ellipse className="blade" cx="850" cy="114" rx="13" ry="30" transform="rotate(60 850 150)" />
          <ellipse className="blade" cx="850" cy="114" rx="13" ry="30" transform="rotate(120 850 150)" />
          <ellipse className="blade" cx="850" cy="114" rx="13" ry="30" transform="rotate(180 850 150)" />
          <ellipse className="blade" cx="850" cy="114" rx="13" ry="30" transform="rotate(240 850 150)" />
          <ellipse className="blade" cx="850" cy="114" rx="13" ry="30" transform="rotate(300 850 150)" />
        </g>
        <text className="node-label" x="850" y="244" textAnchor="middle">
          Sovutgich
        </text>
      </Node>

      <Node id="rom" label="Doimiy xotira" selected={selected} onSelect={onSelect}>
        <rect className="shape" x="760" y="292" width="112" height="58" rx="6" />
        <text className="node-title" x="816" y="320" textAnchor="middle">
          BIOS
        </text>
        <text className="node-label small" x="816" y="338" textAnchor="middle">
          UEFI
        </text>
        <text className="node-label" x="816" y="370" textAnchor="middle">
          Doimiy xotira
        </text>
      </Node>

      <Node id="ssd" label="SSD disk" selected={selected} onSelect={onSelect}>
        <rect className="shape" x="300" y="302" width="230" height="30" rx="6" />
        <rect className="m2-chip" x="310" y="309" width="30" height="16" rx="2" />
        <rect className="m2-chip" x="350" y="309" width="30" height="16" rx="2" />
        <rect className="m2-chip" x="390" y="309" width="30" height="16" rx="2" />
        <text className="node-title small" x="470" y="322" textAnchor="middle">
          M.2
        </text>
        <text className="node-label" x="415" y="352" textAnchor="middle">
          SSD
        </text>
      </Node>

      <Node id="gpu" label="Videokarta" selected={selected} onSelect={onSelect}>
        <rect className="shape" x="90" y="398" width="420" height="92" rx="10" />
        <circle className="fan-hub" cx="150" cy="444" r="9" />
        <circle className="fan-ring" cx="150" cy="444" r="30" />
        <circle className="fan-hub" cx="232" cy="444" r="9" />
        <circle className="fan-ring" cx="232" cy="444" r="30" />
        <rect className="gpu-bracket" x="90" y="414" width="10" height="60" rx="2" />
        <text className="node-title" x="360" y="438" textAnchor="middle">
          GPU
        </text>
        <text className="node-label small" x="360" y="458" textAnchor="middle">
          Videokarta
        </text>
        <text className="node-label" x="300" y="512" textAnchor="middle">
          PCIe x16
        </text>
      </Node>

      <Node id="motherboard" label="Ona plata chipseti" selected={selected} onSelect={onSelect}>
        <rect className="shape" x="560" y="392" width="120" height="120" rx="8" />
        <rect className="chip-inner" x="578" y="410" width="84" height="84" rx="4" />
        <text className="node-title" x="620" y="450" textAnchor="middle">
          Chipset
        </text>
        <text className="node-label small" x="620" y="470" textAnchor="middle">
          Ona plata
        </text>
        <text className="node-label" x="620" y="532" textAnchor="middle">
          Chipset
        </text>
      </Node>

      <Node id="hdd" label="Qattiq disk" selected={selected} onSelect={onSelect}>
        <rect className="shape" x="878" y="380" width="62" height="132" rx="6" />
        <path className="hdd-line" d="M 890 400 H 928" />
        <path className="hdd-line" d="M 890 416 H 928" />
        <path className="hdd-line" d="M 890 432 H 928" />
        <circle className="fan-hub" cx="909" cy="470" r="14" />
        <text className="node-label" x="909" y="530" textAnchor="middle">
          HDD
        </text>
      </Node>

      <Node id="network" label="Tarmoq kartasi" selected={selected} onSelect={onSelect}>
        <rect className="shape" x="136" y="240" width="64" height="58" rx="6" />
        <text className="node-title small" x="168" y="266" textAnchor="middle">
          LAN
        </text>
        <text className="node-label small" x="168" y="284" textAnchor="middle">
          Tarmoq
        </text>
      </Node>

      <Node id="sound" label="Ovoz kartasi" selected={selected} onSelect={onSelect}>
        <rect className="shape" x="220" y="240" width="64" height="58" rx="6" />
        <text className="node-title small" x="252" y="266" textAnchor="middle">
          AUD
        </text>
        <text className="node-label small" x="252" y="284" textAnchor="middle">
          Ovoz
        </text>
      </Node>
    </svg>
  );
}
