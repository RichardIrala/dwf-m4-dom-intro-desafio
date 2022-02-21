const cosasQueAprendimos = [
  {
    tema: "terminal",
    class: "",
  },
  {
    tema: "node",
    class: "",
  },
  {
    tema: "oop",
    class: "",
  },
  {
    tema: "typescript",
    class: "",
  },
  {
    tema: "css",
    class: "",
  },
  {
    tema: "dom",
    class: "special",
  },
];

function main() {
  // Remove childrens of ulEl
  const ulEl = document.querySelector(".lista");
  const hijosLength = ulEl.children.length;

  for (let x = 0; x < hijosLength; x++) {
    ulEl.removeChild(ulEl.lastElementChild);
  }
  console.log(ulEl);
  // New children elements of Ul
  const cosasQueAprendimosLength = cosasQueAprendimos.length;
  for (let x = 0; x < cosasQueAprendimosLength; x++) {
    const elementos = ulEl.appendChild(document.createElement("li"));

    elementos.textContent = cosasQueAprendimos[x].tema;
    if (cosasQueAprendimos[x].class !== "") {
      elementos.classList.add(cosasQueAprendimos[x].class);
    }
  }
}

main();

// Eliminar todos los elementos <li> de la lista <ul class="lista"> (sin eliminar la lista <ul>)
//Crear nuevos elementos <li> basados en el array arriba instanciado.
//Publicar la página en GitHub Pages
