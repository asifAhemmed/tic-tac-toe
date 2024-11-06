/* eslint-disable react/prop-types */
const Squares = ({ value, onSquareClick }) => {
  return (
    <>
      <button
        onClick={onSquareClick}
        className="bg-white border border-2 border-gray-400 w-24 h-24 leading-9 m-1 text-3xl"
      >
        {value}
      </button>
    </>
  );
};

export default Squares;
