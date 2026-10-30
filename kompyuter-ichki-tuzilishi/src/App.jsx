import { useEffect, useMemo, useState } from "react";
import "./App.css";
import MotherboardDiagram from "./components/MotherboardDiagram";
import Quiz from "./components/Quiz";
import {
  components,
  categories,
  cycleSteps,
  dataPaths,
  memoryTable,
  bootSteps,
  glossary,
  quiz,
} from "./data/content";

const VISITED_KEY = "pc-inside-visited";
const THEME_KEY = "pc-inside-theme";

const TABS = [
  { id: "sxema", label: "Sxema" },
  { id: "qurilmalar", label: "Qurilmalar" },
  { id: "ishlash", label: "Ishlash tartibi" },
  { id: "yuklash", label: "Yuklanish" },
  { id: "test", label: "Test" },
  { id: "lugat", label: "Lug'at" },
];

function loadVisited() {
  try {
    const stored = JSON.parse(localStorage.getItem(VISITED_KEY) || "[]");
    return new Set(Array.isArray(stored) ? stored : []);
  } catch {
    return new Set();
  }
}

function App() {
  const [tab, setTab] = useState("sxema");
  const [selectedId, setSelectedId] = useState("cpu");
  const [visited, setVisited] = useState(loadVisited);
  const [theme, setTheme] = useState(
    () => localStorage.getItem(THEME_KEY) || "dark",
  );
  const [query, setQuery] = useState("");
  const [category, setCategory] = useState("Barchasi");
  const [openCard, setOpenCard] = useState(null);
  const [glossaryQuery, setGlossaryQuery] = useState("");

  const selected =
    components.find((item) => item.id === selectedId) || components[0];
  const selectedIndex = components.findIndex((item) => item.id === selected.id);

  useEffect(() => {
    document.documentElement.dataset.theme = theme;
    localStorage.setItem(THEME_KEY, theme);
  }, [theme]);

  useEffect(() => {
    localStorage.setItem(VISITED_KEY, JSON.stringify([...visited]));
  }, [visited]);

  const select = (id) => {
    setSelectedId(id);
    setVisited((prev) => {
      if (prev.has(id)) return prev;
      const nextSet = new Set(prev);
      nextSet.add(id);
      return nextSet;
    });
  };

  const goTo = (offset) => {
    const index =
      (selectedIndex + offset + components.length) % components.length;
    select(components[index].id);
  };

  const filteredComponents = useMemo(() => {
    const text = query.trim().toLowerCase();
    return components.filter((item) => {
      const inCategory = category === "Barchasi" || item.category === category;
      const inSearch = `${item.name} ${item.en} ${item.short} ${item.tag}`
        .toLowerCase()
        .includes(text);
      return inCategory && inSearch;
    });
  }, [query, category]);

  const filteredGlossary = useMemo(() => {
    const text = glossaryQuery.trim().toLowerCase();
    return glossary.filter((item) =>
      `${item.term} ${item.def}`.toLowerCase().includes(text),
    );
  }, [glossaryQuery]);

  const progress = Math.round((visited.size / components.length) * 100);

  return (
    <div className="app">
      <header className="topbar">
        <div className="brand">
          <span className="brand-mark">PC</span>
          <div className="brand-text">
            <strong>Kompyuter ichki tuzilishi</strong>
            <span>Interaktiv o'quv qo'llanma</span>
          </div>
        </div>

        <div className="topbar-right">
          <div className="progress-chip" title="Ko'rilgan qurilmalar">
            <span className="progress-chip-label">O'rganildi</span>
            <b>
              {visited.size}/{components.length}
            </b>
          </div>
          <button
            type="button"
            className="theme-toggle"
            onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
            aria-label="Mavzuni almashtirish"
          >
            {theme === "dark" ? "Yorug'" : "Qorong'i"}
          </button>
        </div>
      </header>

      <main>
        <section className="hero">
          <div className="hero-copy">
            <span className="eyebrow">1-dars · Kompyuter apparati</span>
            <h1>
              Kompyuter ichida <em>nima</em> bor?
            </h1>
            <p>
              Ona plata, protsessor, xotira, disk va sovutish tizimi — har bir
              qism qanday ishlaydi va ular bir-biri bilan qanday bog'lanadi?
              Sxemadan qismni tanlang, o'qing va bilimingizni test bilan
              sinab ko'ring.
            </p>
            <div className="hero-stats">
              <div>
                <b>{components.length}</b>
                <span>qurilma</span>
              </div>
              <div>
                <b>{cycleSteps.length}</b>
                <span>bosqichli sikl</span>
              </div>
              <div>
                <b>{quiz.length}</b>
                <span>test savoli</span>
              </div>
              <div>
                <b>{glossary.length}</b>
                <span>atama</span>
              </div>
            </div>
          </div>

          <div className="hero-card">
            <div className="hero-card-top">
              <span>O'rganish jarayoni</span>
              <b>{progress}%</b>
            </div>
            <div className="bar">
              <span style={{ width: `${progress}%` }} />
            </div>
            <ul className="hero-list">
              {components.slice(0, 5).map((item) => (
                <li key={item.id} className={visited.has(item.id) ? "done" : ""}>
                  <span className="dot" />
                  {item.name}
                </li>
              ))}
            </ul>
            <p className="hero-card-note">
              Har bir qurilmani ochganingizda jarayon saqlanadi.
            </p>
          </div>
        </section>

        <nav className="tabs" aria-label="Bo'limlar">
          {TABS.map((item) => (
            <button
              key={item.id}
              type="button"
              className={`tab${tab === item.id ? " is-active" : ""}`}
              onClick={() => setTab(item.id)}
              aria-pressed={tab === item.id}
            >
              {item.label}
            </button>
          ))}
        </nav>

        {tab === "sxema" && (
          <section className="diagram-layout">
            <div className="panel diagram-panel">
              <div className="panel-head">
                <div>
                  <h2>Ona plata sxemasi</h2>
                  <p>Sxemadagi istalgan qismni bosing — ma'lumot yonida ochiladi.</p>
                </div>
                <span className="hint">Bosiladigan qismlar yorqinroq</span>
              </div>
              <div className="diagram-scroll">
                <MotherboardDiagram selected={selected.id} onSelect={select} />
              </div>
              <div className="legend">
                <span>
                  <i className="swatch active" /> Tanlangan
                </span>
                <span>
                  <i className="swatch" /> Qurilma
                </span>
                <span>Klaviatura: Tab + Enter</span>
                <span>Kichik ekranda sxemani yon tomonga suring</span>
              </div>
            </div>

            <aside className="panel detail-panel">
              <div className="detail-head">
                <span className="badge">{selected.tag}</span>
                <div>
                  <h2>{selected.name}</h2>
                  <span className="en">{selected.en}</span>
                </div>
              </div>

              <p className="detail-lead">{selected.short}</p>
              <p className="detail-text">{selected.description}</p>

              <h3 className="section-title">Xususiyatlari</h3>
              <div className="specs">
                {selected.specs.map((spec) => (
                  <div className="spec" key={spec.k}>
                    <span>{spec.k}</span>
                    <b>{spec.v}</b>
                  </div>
                ))}
              </div>

              <h3 className="section-title">Asosiy jihatlar</h3>
              <ul className="points">
                {selected.points.map((point) => (
                  <li key={point}>{point}</li>
                ))}
              </ul>

              <div className="fact">
                <span>Bilasizmi?</span>
                <p>{selected.fact}</p>
              </div>

              <div className="detail-nav">
                <button type="button" className="btn" onClick={() => goTo(-1)}>
                  ← Oldingi
                </button>
                <button type="button" className="btn" onClick={() => goTo(1)}>
                  Keyingi →
                </button>
              </div>
            </aside>
          </section>
        )}

        {tab === "qurilmalar" && (
          <section className="panel">
            <div className="panel-head">
              <div>
                <h2>Barcha qurilmalar</h2>
                <p>Qidiruv va kategoriya bo'yicha filtrlang, kartani ochib o'qing.</p>
              </div>
            </div>

            <div className="filters">
              <input
                type="search"
                value={query}
                onChange={(event) => setQuery(event.target.value)}
                placeholder="Qidirish: protsessor, SSD, quvvat..."
                aria-label="Qurilmalarni qidirish"
              />
              <div className="chips">
                {categories.map((item) => (
                  <button
                    key={item}
                    type="button"
                    className={`chip${category === item ? " is-active" : ""}`}
                    onClick={() => setCategory(item)}
                  >
                    {item}
                  </button>
                ))}
              </div>
            </div>

            <div className="cards">
              {filteredComponents.map((item) => {
                const isOpen = openCard === item.id;
                return (
                  <article
                    key={item.id}
                    className={`card${isOpen ? " is-open" : ""}`}
                  >
                    <button
                      type="button"
                      className="card-head"
                      onClick={() => {
                        setOpenCard(isOpen ? null : item.id);
                        select(item.id);
                      }}
                      aria-expanded={isOpen}
                    >
                      <span className="badge">{item.tag}</span>
                      <span className="card-title">
                        <strong>{item.name}</strong>
                        <small>{item.en}</small>
                      </span>
                      <span className="card-arrow">{isOpen ? "−" : "+"}</span>
                    </button>
                    <p className="card-short">{item.short}</p>
                    {isOpen && (
                      <div className="card-body">
                        <p>{item.description}</p>
                        <div className="specs">
                          {item.specs.map((spec) => (
                            <div className="spec" key={spec.k}>
                              <span>{spec.k}</span>
                              <b>{spec.v}</b>
                            </div>
                          ))}
                        </div>
                        <ul className="points">
                          {item.points.map((point) => (
                            <li key={point}>{point}</li>
                          ))}
                        </ul>
                        <div className="fact">
                          <span>Bilasizmi?</span>
                          <p>{item.fact}</p>
                        </div>
                      </div>
                    )}
                  </article>
                );
              })}
            </div>

            {filteredComponents.length === 0 && (
              <p className="empty">Hech narsa topilmadi. Boshqa so'z bilan urinib ko'ring.</p>
            )}
          </section>
        )}

        {tab === "ishlash" && (
          <section className="stack">
            <div className="panel">
              <div className="panel-head">
                <div>
                  <h2>Protsessor qanday ishlaydi?</h2>
                  <p>
                    Har bir buyruq to'rt bosqichli tsiklda bajariladi. Bu tsikl
                    soniyada milliardlab marta takrorlanadi.
                  </p>
                </div>
              </div>
              <div className="cycle">
                {cycleSteps.map((step, index) => (
                  <div className="cycle-step" key={step.title}>
                    <span className="cycle-num">{index + 1}</span>
                    <h3>
                      {step.title} <small>{step.sub}</small>
                    </h3>
                    <p>{step.text}</p>
                  </div>
                ))}
              </div>
            </div>

            <div className="panel">
              <div className="panel-head">
                <div>
                  <h2>Ma'lumot qayerda saqlanadi?</h2>
                  <p>Tezlik va hajm o'rtasidagi muvozanat — xotira ierarxiyasi.</p>
                </div>
              </div>
              <div className="table-wrap">
                <table>
                  <thead>
                    <tr>
                      {memoryTable.columns.map((column) => (
                        <th key={column}>{column}</th>
                      ))}
                    </tr>
                  </thead>
                  <tbody>
                    {memoryTable.rows.map((row) => (
                      <tr key={row[0]}>
                        {row.map((cell, index) =>
                          index === 0 ? <th key={cell}>{cell}</th> : <td key={cell}>{cell}</td>,
                        )}
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
              <p className="note">
                Qoida: xotira qanchalik tez bo'lsa, shunchalik kichik va qimmat.
                Shuning uchun ma'lumot kerak bo'lganda yuqori pog'onaga ko'chiriladi.
              </p>
            </div>

            <div className="path-grid">
              {dataPaths.map((item) => (
                <div className="panel path-card" key={item.title}>
                  <h3>{item.title}</h3>
                  <p>{item.text}</p>
                </div>
              ))}
            </div>
          </section>
        )}

        {tab === "yuklash" && (
          <section className="panel">
            <div className="panel-head">
              <div>
                <h2>Kompyuter qanday yuklanadi?</h2>
                <p>Tugma bosilgandan ish stoli paydo bo'lgunga qadar bosqichlar.</p>
              </div>
            </div>
            <ol className="timeline">
              {bootSteps.map((step, index) => (
                <li key={step.title}>
                  <span className="timeline-num">{index + 1}</span>
                  <div className="timeline-body">
                    <div className="timeline-top">
                      <h3>{step.title}</h3>
                      <span className="time">{step.time}</span>
                    </div>
                    <p>{step.text}</p>
                  </div>
                </li>
              ))}
            </ol>
            <p className="note">
              Agar tizim yuklanmasa: birinchi navbatda RAM va disk ulanishini,
              so'ngra UEFI'dagi yuklash tartibini tekshiring.
            </p>
          </section>
        )}

        {tab === "test" && (
          <section className="panel">
            <div className="panel-head">
              <div>
                <h2>Bilimni sinab ko'ring</h2>
                <p>10 savol. Har bir javobdan keyin izoh chiqadi.</p>
              </div>
            </div>
            <Quiz />
          </section>
        )}

        {tab === "lugat" && (
          <section className="panel">
            <div className="panel-head">
              <div>
                <h2>Atamalar lug'ati</h2>
                <p>Mavzuda uchraydigan asosiy texnik atamalar izohi.</p>
              </div>
            </div>
            <input
              type="search"
              className="glossary-search"
              value={glossaryQuery}
              onChange={(event) => setGlossaryQuery(event.target.value)}
              placeholder="Atamani qidirish..."
              aria-label="Atamalarni qidirish"
            />
            <dl className="glossary">
              {filteredGlossary.map((item) => (
                <div className="glossary-item" key={item.term}>
                  <dt>{item.term}</dt>
                  <dd>{item.def}</dd>
                </div>
              ))}
            </dl>
            {filteredGlossary.length === 0 && (
              <p className="empty">Bunday atama topilmadi.</p>
            )}
          </section>
        )}
      </main>

      <footer>
        <span>Kompyuter ichki tuzilishi · React bilan qurilgan o'quv loyihasi</span>
        <span>O'rganishda davom eting — har bir qism birgalikda ishlaydi.</span>
      </footer>
    </div>
  );
}

export default App;
