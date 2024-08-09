import { useSearchParams } from 'react-router-dom';

export default function useGetUrlParameter(parameter) {
  const [searchParams] = useSearchParams();
  return searchParams.get(parameter);
}
