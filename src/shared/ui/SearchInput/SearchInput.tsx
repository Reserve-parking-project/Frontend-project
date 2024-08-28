import { forwardRef } from 'react';

const SearchInput = forwardRef<
  HTMLInputElement,
  {
    type: string;
    onChange: any;
    props: Record<string, any>;
  }
>(({ type, onChange, props }, ref) => {
  return <input type={type} ref={ref} onChange={onChange} {...props} />;
});

export default SearchInput;
