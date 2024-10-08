
// eslint-disable-next-line react/prop-types
const Square = ({value, onSquareClick}) => {
    return (
        <button onClick={onSquareClick} className="text-lg bg-white border border-gray-500 leading-9 m-1 h-12 w-12 ">{value}</button>
    );
};

export default Square;