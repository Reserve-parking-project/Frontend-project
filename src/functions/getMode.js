import { useSearchParams } from "react-router-dom";

export function getMode() {
  const [searchParams, setSearchParams] = useSearchParams();
  return searchParams.get("mode");
}
