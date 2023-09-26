const requestOptions = {
  method: "DELETE",
  headers: {
    "Content-Type": "application/json", // Puedes ajustar los encabezados según tus necesidades
  },
};

document.addEventListener("click", async (e) => {
  if (e.target.classList.contains("eliminar")) {
    e.preventDefault();
    let id = e.target.id;
    let data = await fetch("/delete/" + id, requestOptions);
    let response = await data.json();
    let element = document.getElementById(response.post._id);
    let elemento =
      element.parentElement.parentElement.parentElement.parentElement;
    if (elemento) {
      elemento.parentNode.removeChild(elemento);
    }
  }
});
