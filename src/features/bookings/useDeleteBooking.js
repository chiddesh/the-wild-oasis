import { useMutation, useQueryClient } from "@tanstack/react-query";
import { deleteBooking } from "../../services/apiBookings";
import toast from "react-hot-toast";

export function useDeleteBooking() {
  const queryClient = useQueryClient();

  const { mutate: deletebooking, isloading: isDeleting } = useMutation({
    mutationFn: deleteBooking,
    onSuccess: () => {
      toast.success("Booking Deleted Succesfully");
      queryClient.invalidateQueries({
        queryKey: ["Bookings"],
      });
    },
    onError: () => {
      toast.error("Error deleting booking");
    },
  });
  return { deletebooking, isDeleting };
}
