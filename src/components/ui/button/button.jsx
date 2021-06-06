function Button({ type, text, onClick, className }) {
  return (
    <div className="mb-3">
      <button type={type} onClick={onClick} className={className}>
        {text}
      </button>
    </div>
  );
}

export default Button;
