import Swal from "sweetalert2"

export const alertSweet = (icon, title, text) => {
    return Swal.fire({
        icon: icon,
        title: title,
        text: text,
    })
}