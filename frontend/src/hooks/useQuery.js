import { useSearchParams } from "react-router-dom";

export function useQuery(name) {
  const [searchParams] = useSearchParams();
  return searchParams.get(name);
}
