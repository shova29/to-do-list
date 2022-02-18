//initial count value
let count = 0;

//handle add button eventlistener
document.getElementById("add-btn").addEventListener("click", function () {
  count++;
  const inputValue = document.getElementById("input-value").value;
  if (inputValue == "") {
    alert("Please enter a value");
  } else if (!isNaN(inputValue)) {
    alert("Please enter a string value");
    console.log("inputValue");
    return false;
  } else {
    const mainContainer = document.getElementById("content-container");
    const tableContainer = document.createElement("tr");
    tableContainer.innerHTML = `<th>${count}</th>
                       <td>${inputValue}</td>
                        <td><button class="btn btn-danger delete-btn">Delete</button></td>
                        <td><button class="btn btn-success done-btn">Done</button></td>`;
    mainContainer.appendChild(tableContainer);
    document.getElementById("input-value").value = "";

    const deleteButton = document.getElementsByClassName("delete-btn");
    const doneButton = document.getElementsByClassName("done-btn");
    //handle delete button eventlistener
    for (const button of deleteButton) {
      button.addEventListener("click", function (e) {
        e.target.parentNode.parentNode.style.display = "none";
        // console.log(e.target.parentNode.parentNode);
      });
    }
    //handle done button eventlistener
    for (const button of doneButton) {
      button.addEventListener("click", function (e) {
        e.target.parentNode.parentNode.style.textDecoration = "line-through";
      });
    }
  }
});
//handle clear button eventlistener
document.getElementById("clear-all").addEventListener("click", function (e) {
  document.getElementById("content-container").style.display = "none";
  window.location.reload();
});
