import { Icon } from '..';

export default function IconComponent({ imageName, ...props }) {
  return (
    <div {...props}>
      <Icon name={imageName} />
    </div>
  );
}
