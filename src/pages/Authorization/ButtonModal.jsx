export default function ButtonModal({ text, changePage, ...props }) {
  return (
    <button {...props} onClick={() => changePage(text)}>
      {text}
    </button>
  );
}
