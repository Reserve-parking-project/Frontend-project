export default function Button({ children, ...props }) {
  return (
    <button {...props} type="button">
      {children}
    </button>
  );
}
