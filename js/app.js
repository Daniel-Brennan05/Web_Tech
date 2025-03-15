document.addEventListener("DOMContentLoaded", function() {
  const faqContainer = document.querySelector(".FAQ_Container_Pub_Quiz");

  // Lock the FAQ container's height.
  const originalHeight = faqContainer.offsetHeight;
  faqContainer.style.height = originalHeight + "px";

  // Select all expand buttons within the FAQ container.
  const expandButtons = faqContainer.querySelectorAll("button");

  expandButtons.forEach(function(button) {
    button.addEventListener("click", function() {
      // Ensure the parent container stays locked.
      faqContainer.style.height = originalHeight + "px" ;

      // Find the container for the clicked button.
      const currentContainer = this.closest(".FAQ_Question_Container_right");

      // Remove all other FAQ question containers.
      const allContainers = faqContainer.querySelectorAll(".FAQ_Question_Container_right");
      allContainers.forEach(function(container) {
        if (container !== currentContainer) {
          container.remove();
        }
      });

      // Expand the current container to match the FAQ container's dimensions.
      currentContainer.style.width = "90%";
      currentContainer.style.height = "90%";
      currentContainer.style.transition = "all 1.0s ease";
    });
  });
});


//====================================RIGHT HAND SIDE===================================\\



document.addEventListener("DOMContentLoaded", function() {
  const faqContainer = document.querySelector(".FAQ_Container_Website");

  // Lock the FAQ container's height.
  const originalHeight = faqContainer.offsetHeight;
  faqContainer.style.height = originalHeight + "px";

  // Select all expand buttons within the FAQ container.
  const expandButtons = faqContainer.querySelectorAll("button");

  expandButtons.forEach(function(button) {
    button.addEventListener("click", function() {
      // Ensure the parent container stays locked.
      faqContainer.style.height = originalHeight + "px" ;

      // Find the container for the clicked button.
      const currentContainer = this.closest(".FAQ_Question_Container_left");

      // Remove all other FAQ question containers.
      const allContainers = faqContainer.querySelectorAll(".FAQ_Question_Container_left");
      allContainers.forEach(function(container) {
        if (container !== currentContainer) {
          container.remove();
        }
      });

      // Expand the current container to match the FAQ container's dimensions.
      currentContainer.style.width = "90%";
      currentContainer.style.height = "90%";
      currentContainer.style.transition = "all 1.0s ease";
    });
  });
});


