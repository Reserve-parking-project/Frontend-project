export default function IconComponent({ imageUrl, text, ...props }) {
  return (
    <div {...props}>
      <img src={imageUrl} alt={text} />
    </div>
  );
}
