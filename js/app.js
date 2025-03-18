function toggleVisibility(ids, containerId, event) {
  let container = document.getElementById(containerId);
  let allHidden = ids.every(id => document.getElementById(id).style.display === "none");

  const originalHeight = container.offsetHeight;
  container.style.height = (originalHeight - 4) + "px";

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
      currentContainer.style.transition = "";
      currentContainer.dataset.expanded = "false"; // Mark as collapsed
    } else {
      // **Expand**
      currentContainer.style.width = "90%";
      currentContainer.style.height = "90%";
      currentContainer.style.transition = "all 1.0s ease";
      currentContainer.dataset.expanded = "true"; // Mark as expanded
    }
  }
}


//======================================================================================\\
//====================================RIGHT HAND SIDE===================================\\
//======================================================================================\\

function toggleVisibilityLeft(ids, containerId, event) {
  let container = document.getElementById(containerId);
  let allHidden = ids.every(id => document.getElementById(id).style.display === "none");

  const originalHeight = container.offsetHeight;
  container.style.height = (originalHeight - 4) + "px";

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
      leftcurrentContainer.style.transition = "";
      leftcurrentContainer.dataset.expanded = "false"; // Mark as collapsed
    } else {
      // **Expand**
      leftcurrentContainer.style.width = "90%";
      leftcurrentContainer.style.height = "90%";
      leftcurrentContainer.style.transition = "all 2.0s ease";
      leftcurrentContainer.dataset.expanded = "true"; // Mark as expanded
    }
  }
}




