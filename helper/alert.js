import Swal from "sweetalert2";

export const successAlert = (text) => {
  Swal.fire({
    icon: "success",
    title: "Greate",
    text,
  });
};

export const suspendAlert = (code, destroy) => {
  Swal.fire({
    title: "Are you sure?",
    text: "You won't be able to revert this!",
    icon: "warning",
    showCancelButton: true,
    confirmButtonColor: "#d33",
    cancelButtonColor: "#38ef7d",
    confirmButtonText: "Yes, delete it!",
  }).then(async (result) => {
    if (result.isConfirmed) {
      const { data, error } = await destroy(code);

      if (data.success) {
        window.location.reload();
      }
    }
  });
};
