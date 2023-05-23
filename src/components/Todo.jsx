/* eslint-disable no-empty */
/* eslint-disable no-unused-vars */
import React, { useState } from "react";
import todo from "../assets/todo.png";
import { PlusIcon, TrashIcon } from "@heroicons/react/24/solid";
const Todo = () => {
  const [inputData, setInputData] = useState("");
  const [Items, setItems] = useState([]);
  const addItem = () => {
    if (!inputData) {
      alert("please input something!");
    } else {
      setItems([...Items, inputData]);
      setInputData("");
    }
  };
  const deleteItem = (id) => {
    const updatedItems = Items.filter((elem , ind)  => {
        return ind !== id;
    })
    setItems(updatedItems);
  };

const removeall = () => {
    setItems([]);
}
  return (
    <>
      <div className="flex justify-center items-center mt-20">
        <div>
          <figure>
            <img src={todo} className="w-[100px] mx-auto" alt="todo logo" />
            <figcaption className="text-center text-2xl text-blue-800 uppercase font-semibold mt-5">
              Add your list here✅
            </figcaption>
          </figure>
          <div className="addItems flex items-center justify-center gap-5">
            <input
              type="text"
              placeholder="✍️Add Items"
              id=""
              className="border  rounded mt-5 py-2 px-2 border-blue-400 outline-none placeholder:italic placeholder:text-blue-300 text-blue-400 font-semibold"
              value={inputData}
              onChange={(e) => setInputData(e.target.value)}
            />
            <button
              className="transform translate-y-[10px] border border-blue-300 p-2 cursor-pointer hover:bg-blue-300 rounded transition duration-300"
              onClick={addItem}
            >
              <PlusIcon className="h-6 w-6 text-blue-500 " />
            </button>
          </div>
          <div className="showItems mt-5 ">
            {Items.map((elem, id) => {
              return (
                <div
                  className="eachItem flex justify-between items-center border p-2 rounded border-blue-300 text-blue-400 hover:bg-blue-300 hover:text-white transition duration-300 mt-2"
                  key={id}
                >
                  <h3>{elem}</h3>
                  <button
                    className="cursor-pointe rounded"
                    onClick={() => deleteItem(id)}
                  >
                    <TrashIcon className="h-6 w-6 text-red-500" />
                  </button>
                </div>
              );
            })}
          </div>
          {/* clear all button */}
          <div className="showItems mt-5 text-center">
            <button className="border p-2 rounded border-blue-300 w-1/2 font-semibold text-blue-300 hover:bg-blue-300 hover:text-blue-500 transition duration-300" onClick={removeall}>
              Check List
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default Todo;
