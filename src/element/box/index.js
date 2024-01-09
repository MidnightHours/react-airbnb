import "./index.css";

export default function Box({ children, className, shadow, column }) {
  return (
    <div
      className={`box 
      ${shadow ? "box--shadow" : ""} 
      ${column ? "box--column" : ""} 
      ${className}`}
    >
      {children}
    </div>
  );
}
