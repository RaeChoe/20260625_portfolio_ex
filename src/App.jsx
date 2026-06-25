import "./App.css";
import Header from "./components/Header";
import Nav from "./components/Nav";
import Figure from "./components/Figure";
import { useState } from "react";

function App() {
  const [id, setId] = useState(0);

  const works = [
    { id: 1, title: "work 1", url: "/src/assets/hero.png", desc: "Work 1 description" },
    { id: 2, title: "work 2", url: "/src/assets/hero.png", desc: "Work 2 description" },
    { id: 3, title: "work 3", url: "/src/assets/hero.png", desc: "Work 3 description" },
    { id: 4, title: "work 4", url: "/src/assets/hero.png", desc: "Work 4 description" },
  ];

  const work = works.find(w => w.id === id);

  return (
    <>
      <Header />
      <Nav data={works} onChangeMode={id => setId(id)} />
      {work && <Figure data={work} />}
    </>
  );
}

export default App;
