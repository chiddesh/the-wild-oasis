import { useQuery } from "@tanstack/react-query";
import { geCurrentUser } from "../../services/apiAuth";

export function useUser() {
  const { data: user, isLoading } = useQuery({
    queryKey: ["user"],
    queryFn: geCurrentUser,
  });

  return { isLoading, user, isAuthenticated: user?.role === "authenticated" };
}
