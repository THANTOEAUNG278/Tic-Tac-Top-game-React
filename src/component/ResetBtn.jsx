

const ResetButton = ({ setHistory }) => {
  const handleReset = () => {
    setHistory(Array(9).fill(null));
  };

  return (
    <button onClick={handleReset}>
      Reset Game
    </button>
  );
};

export default ResetButton;
