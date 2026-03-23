function agregarTarea() {
  const input = document.getElementById("tareaInput");
  const lista = document.getElementById("listaTareas");

  if (input.value === "") return;

  const li = document.createElement("li");
  li.textContent = input.value;

  const btn = document.createElement("button");
  btn.textContent = "❌";
  btn.onclick = function() {
    lista.removeChild(li);
  };

  li.appendChild(btn);
  lista.appendChild(li);

  input.value = "";
}
