import {useState, useEffect, useRef} from 'react'
import Button from './components/Buttons'
import { GoBell } from "react-icons/go";
import Accordion from './components/Accordion';
import DropDown from './components/DropDown';

const App = () => {

    const [selected, setSelected] = useState(null)


    const getSelection = (selection) => {
        setSelected(selection)
    }

    const items = [
        {
            id: Math.floor(Math.random() * 100),
            label: 'can i use react in the project',
            content: "you can you react in any project, you can you react in any project, you can you react in any project"
        },
        {
            id: Math.floor(Math.random() * 100),
            label: 'can i use react in the project',
            content: "you can you react in any project, you can you react in any project, you can you react in any project"
        },
        {
            id: Math.floor(Math.random() * 100),
            label: 'can i use react in the project',
            content: "you can you react in any project, you can you react in any project, you can you react in any project"
        }
    ]

    const DropDownItems = [
        {
            key: 'car',
            content: "lambergene"
        },
        {
            key: 'pc',
            content: "legion computer"
        },
        {
            key: "game",
            content: "elden ring"
        }
    ]

    return (
        <div>
            <div>
                <Accordion items={items} key={items.id}/>
            </div>
            <div className='flex'>
                <DropDown selection={selected} onSelect={getSelection} items={DropDownItems} key={DropDownItems.key}/>
            </div>
        </div>

    )
}


export default App