import { FC } from 'react';
import { Icon } from '..';

const IconComponent: FC<{ imageName: string; props: Record<string, any>; className: string }> = ({
  imageName,
  ...props
}) => {
  return (
    <div {...props}>
      <Icon name={imageName} className={props.className} />
    </div>
  );
};

export default IconComponent;
