import Swal, { SweetAlertResult } from "sweetalert2";

interface Props {
  title: string,
  icon: "info" | "success" | "warning" | "error" | "question",
  html: string,
  showCancelButton?: boolean,
  confirmButtonText?: string,
  cancelButtonText?: string,
  dismiss?: boolean,
  onConfirm?: () => void,
}

function MyAlert(props: Props): Promise<SweetAlertResult<any>> {
  return new Promise((resolve) => {
    const { 
      title, 
      icon, 
      html, 
      showCancelButton = false,
      confirmButtonText = 'Aceptar',
      cancelButtonText = 'Cancelar',
      dismiss = true 
    } = props; 

    const newSwal = Swal.mixin({
      customClass: {
        confirmButton: "styled-confirm-button",
        cancelButton: "styled-cancel-button",
        popup: "styled-popup",
        title: "styled-title",
        htmlContainer: "styled-html",
      },
      buttonsStyling: false,
    });

    newSwal.fire({
      title: `<strong>${title}</strong>`,
      icon: icon,
      html: html,
      focusConfirm: false,
      showCancelButton: showCancelButton,
      confirmButtonText: confirmButtonText,
      cancelButtonText: cancelButtonText,
      allowOutsideClick: dismiss,
      backdrop: `
        rgba(0,0,0,0.4)
        left top
        no-repeat
      `,
    }).then((result) => {
      resolve(result);
    });
  });
}

export const showAlertAsync = async (props: Props): Promise<void> => {
  const { onConfirm } = props; 
  try {
    const result = await MyAlert(props);
    if (result.isConfirmed && onConfirm) {
      onConfirm();
    }
  } catch (error) {
    console.error("Error al mostrar el alerta:", error);
  }
};

// CSS personalizado para los botones y el modal
const styles = `
  .styled-confirm-button {
    background-color: #4CAF50;
    color: #fff;
    padding: 10px 24px;
    border: none;
    border-radius: 4px;
    font-weight: bold;
    font-size: 16px;
    margin: 0 8px;
    cursor: pointer;
  }
  .styled-confirm-button:hover {
    background-color: #45a049;
  }

  .styled-cancel-button {
    background-color: #f44336;
    color: #fff;
    padding: 10px 24px;
    border: none;
    border-radius: 4px;
    font-weight: bold;
    font-size: 16px;
    margin: 0 8px;
    cursor: pointer;
  }
  .styled-cancel-button:hover {
    background-color: #d32f2f;
  }

  .styled-popup {
    padding: 1.5rem;
    border-radius: 8px;
  }

  .styled-title {
    font-family: Arial, sans-serif;
    font-weight: bold;
    color: #333;
  }

  .styled-html {
    font-size: 1rem;
    color: #555;
  }
`;

// Inyecta estilos en el documento
const styleSheet = document.createElement("style");
styleSheet.type = "text/css";
styleSheet.innerText = styles;
document.head.appendChild(styleSheet);
