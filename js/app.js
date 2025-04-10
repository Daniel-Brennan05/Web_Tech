function toggleVisibility(ids, containerId, TextId, event) {
  let container = document.getElementById(containerId);
  let allHidden = ids.every(id => document.getElementById(id).style.display === "none");
  let text = document.getElementById(TextId);

  const originalHeight = container.offsetHeight;
  container.style.height = (originalHeight) + "px";

  ids.forEach(id => {
    let element = document.getElementById(id);
    if (element) {
      element.style.display = element.style.display === "none" ? "block" : "none";
    } else {
      element.style.height = "90%";
    }
  });

  // **Find the closest .FAQ_Question_Container_right manually**
  let currentContainer = event.target;
  while (currentContainer && !currentContainer.classList.contains("FAQ_Question_Container_right")) {
    currentContainer = currentContainer.parentElement;
  }

  if (currentContainer) {
    // **Check if already expanded**
    if (currentContainer.dataset.expanded === "true") {
      // **Revert to original styles**
      currentContainer.style.width = "";
      currentContainer.style.height = "";
      currentContainer.dataset.expanded = "false"; // Mark as collapsed
      text.style.visibility = "hidden";
      text.style.margin = "-100%";
    } else {
      // **Expand**
      currentContainer.style.width = "90%";
      currentContainer.style.height = "90%";
      currentContainer.dataset.expanded = "true"; // Mark as expanded
      text.style.visibility = "visible";
      text.style.margin = "0%";
    }
  }
}


//======================================================================================\\
//====================================RIGHT HAND SIDE===================================\\
//======================================================================================\\

function toggleVisibilityLeft(ids, containerId, TextId, event) {
  let container = document.getElementById(containerId);
  let allHidden = ids.every(id => document.getElementById(id).style.display === "none");
  let text = document.getElementById(TextId);

  const originalHeight = container.offsetHeight;
  container.style.height = (originalHeight) + "px";

  ids.forEach(id => {
    let element = document.getElementById(id);
    if (element) {
      element.style.display = element.style.display === "none" ? "block" : "none";
    } else {
      element.style.height = "90%";
    }
  });

  // **Find the closest .FAQ_Question_Container_right manually**
  let leftcurrentContainer = event.target;
  while (leftcurrentContainer && !leftcurrentContainer.classList.contains("FAQ_Question_Container_left")) {
    leftcurrentContainer = leftcurrentContainer.parentElement;
  }

  if (leftcurrentContainer) {
    // **Check if already expanded**
    if (leftcurrentContainer.dataset.expanded === "true") {
      // **Revert to original styles**
      leftcurrentContainer.style.width = "";
      leftcurrentContainer.style.height = "";
      leftcurrentContainer.dataset.expanded = "false"; // Mark as collapsed
      text.style.visibility = "hidden";
      text.style.margin = "-100%";

    } else {
      // **Expand**
      leftcurrentContainer.style.width = "90%";
      leftcurrentContainer.style.height = "90%";
      leftcurrentContainer.dataset.expanded = "true"; // Mark as expanded
      text.style.visibility = "visible";
      text.style.margin = "0%";
    }
  }
}




