import { Icon } from "../index";

export default function IconComponent({ imageName, ...props }) {
  return (
    <div {...props}>
      <Icon name={imageName} />
    </div>
  );
}
