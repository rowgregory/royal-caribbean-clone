const QuantitySelector = ({ handleChange, icon, disable }: any) => {
  return (
    <button
      className={`w-[50px] flex items-center justify-center ${
        disable ? 'cursor-not-allowed' : ''
      }`}
      onClick={handleChange}
      disabled={disable}
    >
      {icon}
    </button>
  );
};

export default QuantitySelector;
