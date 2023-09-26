document.querySelector(".form").addEventListener("submit", async (e) => {
  e.preventDefault();
  const id = document.querySelector(".editar").dataset.id;

  const img = document.querySelector(".img").value;
  const title = document.querySelector(".title").value;
  const content = document.querySelector(".content").value;
  const etiqueta = document.querySelector(".etiqueta").value;
  const description = document.querySelector(".description").value;
  const author = document.querySelector(".author").value;
  const keywords = document.querySelector(".keywords").value;
console.log(title)
  const url = "/edit/" + id;
  const requestOptions = {
    method: "PUT",
    body: JSON.stringify({
      img,
      title,
      content,
      etiqueta,
      description,
      author,
      keywords
  }),
    headers: {
      "Content-Type": "application/json",
    },
  };
  const data = await fetch(url, requestOptions);
  const respuesta = await data.json();
  console.log(respuesta.msg);
  window.location.href = "/dashboard";

});
