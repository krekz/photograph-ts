import { type ClassValue, clsx } from "clsx"
import { twMerge } from "tailwind-merge"
import { toast } from "react-toastify"

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

export function ErrorToast(message: string) {
  return toast.error(message, {
    position: "top-center",
    hideProgressBar: true,
    autoClose: 1000,
  });
}
