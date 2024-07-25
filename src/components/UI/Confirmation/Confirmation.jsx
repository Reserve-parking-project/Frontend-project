export default function Confirmation({ text, ...props }) {
  return (
    <>
      <p {...props}>{text}</p>
    </>
  );
}
