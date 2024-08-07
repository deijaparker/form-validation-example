const myForm = document.getElementById("myForm");
myForm.addEventListener("submit", (e) => {
  e.preventDefault();
  let formData = myForm.querySelector("input").value;

  // obj: Make the Input Notify User and Display the Name
  //1. Where will the Data be Displayed [TARGET]
  let page = document.querySelector("body");
  // 2. Append --- innerHTML
  //   page.append(formData);
  // ? --> create an ele for data?

  const paragraph = document.createElement("p");
  // -----created a p tag
  paragraph.setAttribute("class", "student");
  //   -----retain "student"CSS
  paragraph.textContent = formData;
  //   -------p w/ content
//   page.prepend(paragraph);


});


//   -----------------------------------------------------
// ? Change the current Pic on the Dom to the input val

const solveJordansDilema = () => {
    const ourPic = document.querySelector('.mainImg')
    let formData = myForm.querySelector("input").value;

    ourPic.setAttribute('src', formData)
}