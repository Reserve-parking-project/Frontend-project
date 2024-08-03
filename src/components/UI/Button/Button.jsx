import s from "./button.module.scss";

export default function Button({ children, className, props }) {
  return (
    <button className={`${s.button} ${className}`} {...props}>
      {/* {children} */}
      <p>Hello World!</p>
    </button>
  );
}
