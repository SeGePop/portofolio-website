import React, { useEffect } from "react";
import image_list from "./images/to_do_list.png";

export default function TO_DO_APP() {
  useEffect(() => {
    let listContainer = document.getElementById("list_container");
    let showTask = () => {
      listContainer.innerHTML = localStorage.getItem("data");
    };
    showTask();

    listContainer.addEventListener("click", function (e) {
      if (e.target.tagName === "LI") {
        e.target.classList.toggle("checked");
        saveData();
      } else if (e.target.tagName === "SPAN") {
        e.target.parentElement.remove();
        saveData();
      }
    }, false);
  }, []);

  function addTask() {
    let inputBox = document.getElementById("input_box");
    let listContainer = document.getElementById("list_container");

    if (inputBox.value === "") {
      alert("You must write something");
    } else {
      let li = document.createElement("li");
      li.innerHTML = inputBox.value;
      listContainer.appendChild(li);
      let span = document.createElement("span");
      span.innerHTML = "\u00d7";
      li.appendChild(span);
    }
    inputBox.value = " ";
    saveData();
  }

  function saveData() {
    let listContainer = document.getElementById("list_container");
    localStorage.setItem("data", listContainer.innerHTML);
  }

  return (
    <section className="TO_DO_APP_CONTAINER">
      <div className="TO_DO_APP">
        <h2>
          To-Do List{" "}
          <img className="image_list" src={image_list} alt="To Do List Icon" />
        </h2>
        <div className="row">
          <input type="text" id="input_box" placeholder="Add your text"/>
          <button onClick={addTask}>Add</button>
        </div>
        <ul id="list_container">
          <li></li>
        </ul>
      </div>
    </section>
  );
}
