import "./index.css";

export default function Template({ children, border }) {
  return (
    <span className={`heading ${border ? "heading--border" : ""}`}>
      {children}
    </span>
  );
}
