import { FC, ReactNode } from 'react';

const IntroItem: FC<{ children: ReactNode }> = ({ children }) => {
  return <div>{children}</div>;
};

export default IntroItem;
