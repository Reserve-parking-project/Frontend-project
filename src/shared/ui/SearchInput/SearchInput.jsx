import { forwardRef } from "react";

const SearchInput = forwardRef(function SearchInput(
  { type, onChange, props },
  ref
) {
  return <input type={type} ref={ref} onChange={onChange} {...props} />;
});

export default SearchInput;
