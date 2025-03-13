//Get button

const button = document.querySelector('#FAQ_Button_Expand_Left');


//element to remove

const elementsToRemove = document.querySelector("#FAQ_Box_Closed_Left");

//click event listener

button.addEventListener('click', () => {
  //remove element(s)

  elementsToRemove.remove();
});
