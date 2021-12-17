import theme from "styles/theme"
import Swal from "sweetalert2"

export const Toast = Swal.mixin({
  toast: true,
  position: "top-end",
  showConfirmButton: false,
  timer: 3000,
  timerProgressBar: true,
  didOpen: (toast) => {
    toast.addEventListener("mouseenter", Swal.stopTimer)
    toast.addEventListener("mouseleave", Swal.resumeTimer)
  },
  background: theme.colors.border,
  color: theme.colors.title,
  iconColor: theme.colors.primary
  // colorProgressBar: theme.colors.primary
})
