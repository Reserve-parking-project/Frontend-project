import { FC, ReactNode } from 'react';

interface InfoContentProps extends Record<string, any> {
  children: ReactNode;
}

const InfoContent: FC<InfoContentProps> = ({ children, ...props }) => {
  return <div {...props}>{children}</div>;
};

export default InfoContent;
