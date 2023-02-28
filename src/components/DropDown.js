import { useState, useEffect, useRef } from "react";
import { GoChevronDown } from "react-icons/go";
import Panel from "./Panel";

const DropDown = ({ items, selection, onSelect }) => {
  const [optionStatus, setStatus] = useState(false);

  const divEl = useRef()


  useEffect(() => {
    const captureEvent = (e) => {

      // if our element not exist just return (this avoid bugs)
      if(!divEl.current) {
        return;
      }

      if(!divEl.current.contains(e.target)) {
        setStatus(false)
      }
    }
    document.addEventListener('click', captureEvent, true)

    // clean up
    return (() => {document.removeEventListener('click', captureEvent)})
}, [])

  const sendSelection = (option) => {
    onSelect(option);
  };

  const toggleStatus = () => {
    setStatus(!optionStatus);
  };

  const closeDropDown = (item) => {
    setStatus(false);
    // console.log(item)
    sendSelection(item);
  };

  const renderedItems = items.map((item) => {
    return (
      <div
        className="hover:bg-sky-100 rounded cursor-pointer p-1"
        onClick={() => closeDropDown(item)}
        key={item.key}
      >
        {item.content}
      </div>
    );
  });

  const content = selection ? selection.key : "select ...";

  return (
    <div ref={divEl} className="w-48 relative">
      <Panel
        className="flex justify-between items-center cursor-pointer  "
        onClick={toggleStatus}
      >
        {content}{" "}
        <span>
          <GoChevronDown />
        </span>
      </Panel>
      {optionStatus && (
        <Panel className="absolute top-full p-3">
          {renderedItems}
        </Panel>
      )}
    </div>
  );
};

export default DropDown;
