import { FC } from 'react';

import { Icon } from '..';

const IconComponent: FC<{ imageName: string; className: string; text: string }> = ({
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
