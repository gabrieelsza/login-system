export const Button = ({ label, icon, className, type = "button", onClick }) => {
  return (
    <button
      type={type}
      onClick={onClick}
        className={className }
    >
      {icon && <span className="flex items-center">{icon}</span>}
      {label}
    </button>
  );
};