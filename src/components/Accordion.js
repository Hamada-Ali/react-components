import { useState } from "react"
import { GoChevronDown, GoChevronLeft } from "react-icons/go";

const Accordion = ({items}) => {
    const [expandedIndex, setNewIndex] = useState(-1)
    const getIndex = (index) => {
        if(index === expandedIndex) {
        setNewIndex(-1)
        } else {
            setNewIndex(index)
        }
   }
    const renderedItems = items.map((item, index) => {
    const isExpanded = index === expandedIndex;
        const icons = isExpanded ? <GoChevronDown /> : <GoChevronLeft />;
    const content = isExpanded && <div className="border-b p-5">{item.content}</div>
        return (
            <div key={item.id}>
                <div className="p-3 justify-between bg-gray-50 border-b flex items-center cursor-pointer" onClick={() => getIndex(index)}>
                    {item.label}
                    <span className="text-xl">{icons}</span>
                    </div>
                {content}
            </div>
        )
    })
    return <div className="border-x  border-t rounded">{renderedItems}</div>
}

export default Accordion