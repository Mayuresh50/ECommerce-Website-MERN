export default function Button({ children, onClick, className = '', type = 'button', disabled }) {
  return (
    <button type={type} className={`btn ${className}`} onClick={onClick} disabled={disabled}>
      {children}
    </button>
  );
}
