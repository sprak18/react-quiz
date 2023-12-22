function NextButton({ dispatch, answer, index, numQuestions }) {
  if (answer === null) return null;
  function handleClick() {
    if (index < numQuestions - 1) dispatch({ type: "nextQuestion" });
    if (index === numQuestions - 1) dispatch({ type: "end" });
  }
  return (
    <button className="btn btn-ui" onClick={handleClick}>
      {index < numQuestions - 1 ? "Next" : "Finish"}
    </button>
  );
}

export default NextButton;
