import store from "./redux/store";

const itemListDOM = document.querySelector("#itemList");
const itemDOM = document.querySelector("#item");

const updateList = (items) => {
  itemListDOM.innerHTML = " ";

  for (const item of items) {
    const itemDOMClone = itemDOM.cloneNode(true);
    const activedCheckDOM = itemDOMClone.querySelector("input");
    const deleteButtonDOM = itemDOMClone.querySelector("button");
    const nameLabelDOM = itemDOMClone.querySelector("#itemText");
    itemDOMClone.classList.remove("d-none");

    nameLabelDOM.textContent = item.text;
    if (item.done) {
      nameLabelDOM.style.textDecoration = "line-through";
      activedCheckDOM.checked = true;
    }

    deleteButtonDOM.onclick = () => {
      store.dispatch({
        type: "DELETE",
        payload: {
          id: item.id,
        },
      });
    };

    activedCheckDOM.onclick = () => {
      store.dispatch({
        type: "CHANGE",
        payload: {
          id: item.id,
        },
      });
    };

    itemListDOM.appendChild(itemDOMClone);
  }
};

store.subscribe(() => {
  const state = store.getState();
  updateList(state);
});

store.dispatch({
  type: "ADD",
  payload: {
    text: "hello world",
  },
});

store.dispatch({
  type: "ADD",
  payload: {
    text: "hello world 2",
  },
});
