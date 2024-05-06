const showAlert = (message: string, type: string): void => {
    const alertWrapper = document.getElementById("alert_wrapper");
    if (alertWrapper) {
      alertWrapper.style.display = "block";
      alertWrapper.innerHTML = `<div class="alert alert-${type}" role="alert">${message}</div>`;
    } else {
      console.error("Alert wrapper element not found in the DOM.");
    }
  };
  
  export default showAlert;