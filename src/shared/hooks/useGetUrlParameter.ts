import { useSearchParams } from 'react-router-dom';

export default function useGetUrlParameter(parameter: string) {
  const [searchParams] = useSearchParams();
  return searchParams.get(parameter);
}
