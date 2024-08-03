import { useSearchParams } from "react-router-dom";

export function getMode(parameter) {
  const [searchParams, setSearchParams] = useSearchParams();
  return searchParams.get(parameter);
}
