export default function OptionSelect({ label, options = [], value, onChange, name }) {
  if (!Array.isArray(options) || options.length === 0) return null;

  return (
    <div className="option-select">
      <span className="option-label">{label}</span>
      <div className="option-buttons" role="group" aria-label={label}>
        {options.map((opt) => (
          <button
            key={opt}
            type="button"
            className={`option-btn ${value === opt ? 'active' : ''}`}
            onClick={() => onChange(opt)}
            data-option={name}
            data-value={opt}
          >
            {opt}
          </button>
        ))}
      </div>
    </div>
  );
}
