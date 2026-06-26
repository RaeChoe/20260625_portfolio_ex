function Controls({ prevWork, nextWork, onChangeMode }) {
  return (
    <div className="controls">
      <button
        disabled={!prevWork} //버튼 비활성화 null = true로
        onClick={() => {
          if (prevWork) onChangeMode(prevWork.id);
        }}
      >
        이전
      </button>
      <button
        disabled={!nextWork}
        onClick={() => {
          if (nextWork) onChangeMode(nextWork.id);
        }}
      >
        다음
      </button>
    </div>
  );
}
export default Controls;
