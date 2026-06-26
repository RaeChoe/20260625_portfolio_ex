import "./App.css";
import Header from "./components/Header";
import Nav from "./components/Nav";
import Figure from "./components/Figure";
import { useState } from "react";
import Controls from "./components/Controls";

function App() {
  const [id, setId] = useState(0);

  const works = [
    { id: 1, title: "work 1", url: "./images/img-1.jpg", desc: "Work 1 description" },
    { id: 2, title: "work 2", url: "./images/img-2.jpg", desc: "Work 2 description" },
    { id: 3, title: "work 3", url: "./images/img-3.jpg", desc: "Work 3 description" },
    { id: 4, title: "work 4", url: "./images/img-4.jpg", desc: "Work 4 description" },
  ];

  const work = works.find(w => w.id === id);
  const activeIndex = works.findIndex(w => w.id === id);
  console.log(activeIndex); //선택한 li의 인덱스 번호 출력
  const prevWork = activeIndex > 0 ? works[activeIndex - 1] : null; //activeIndex 1, 이전 works[0]
  const nextWork = activeIndex < works.length - 1 ? works[activeIndex + 1] : null; //activeIndex 1, 이후 works[2]

  return (
    <>
      <Header />
      <Nav
        data={works}
        activeId={id}
        onChangeMode={_id => {
          setId(_id);
        }}
      />
      {work && <Figure data={work} />}
      <Controls
        prevWork={prevWork}
        nextWork={nextWork}
        onChangeMode={_id => {
          setId(_id);
        }}
      />
    </>
  );
}

export default App;
