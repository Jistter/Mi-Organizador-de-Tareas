function agregarTarea() {
  const input = document.getElementById("tareaInput");
  const lista = document.getElementById("listaTareas");

  if (input.value === "") return;

  const li = document.createElement("li");
  li.textContent = input.value;

  // Marcar como completada
  li.onclick = function() {
    li.style.textDecoration = "line-through";
    li.style.opacity = "0.6";
  };

  // Botón eliminar
  const btn = document.createElement("button");
  btn.textContent = "❌";
  btn.onclick = function(e) {
    e.stopPropagation();
    li.remove();
  };

  li.appendChild(btn);
  lista.appendChild(li);

  input.value = "";
}
