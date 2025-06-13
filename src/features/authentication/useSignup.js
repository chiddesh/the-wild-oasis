import { useMutation } from "@tanstack/react-query";
import { signup as signupApi } from "../../services/apiAuth";
import toast from "react-hot-toast";

export function useSignup() {
  const { mutate: signup, isLoading: isSigningup } = useMutation({
    mutationFn: signupApi,
    onSuccess: () => {
      toast.success("User Successfully created, please verify the email");
    },
  });
  return { signup, isSigningup };
}
