const commandInput = document.getElementById("commandInput");
const addButton = document.getElementById("addButton");
const commandList = document.getElementById("commandList");
const message = document.getElementById("message");

const commands = [];

function renderCommands() {
  commandList.innerHTML = "";

  if (commands.length === 0) {
    commandList.innerHTML = "<li>No commands added yet.</li>";
    return;
  }

  commands.forEach((command, index) => {
    const listItem = document.createElement("li");
    const removeButton = document.createElement("button");

    listItem.textContent = command + " ";

    removeButton.textContent = "Remove";
    removeButton.type = "button";
    removeButton.addEventListener("click", () => {
      commands.splice(index, 1);
      message.textContent = `"${command}" removed.`;
      renderCommands();
    });

    listItem.appendChild(removeButton);
    commandList.appendChild(listItem);
  });
}

addButton.addEventListener("click", () => {
  const command = commandInput.value.trim();

  if (!command) {
    message.textContent = "Type a PowerShell command first.";
    commandInput.focus();
    return;
  }

  commands.push(command);
  commandInput.value = "";
  message.textContent = `"${command}" added to your practice list.`;
  commandInput.focus();

  renderCommands();
});

commandInput.addEventListener("keydown", (event) => {
  if (event.key === "Enter") {
    addButton.click();
  }
});

renderCommands();
