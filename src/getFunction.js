import { useSearchParams } from "react-router-dom";

export function getMode() {
  const [searchParams, setSearchParams] = useSearchParams();
  return searchParams.get("mode");
}

export const resultCheckingInput = (str) => {
  const letters = str.split("");
  const regex = /[!@#$%^&*()_+\-=[\]{};':"\\|,.<>/?]+/;
  return letters.some((item) => regex.test(item));
};
