import React, {useState} from "react";
const array = [
    ["React is simple"],
    ["Javascript is Simple"],
    ["Java is simple"],
    ["SpringBoot is simple"],
    ["Spring is simple"],
    ["Advance Java is simple"],

]

const menuoptions = [
    {
        id: 0,
        name: 'React'
    },
    {
        id: 1,
        name: 'JavaScript'
    },
    {
        id: 2,
        name: 'Java'
    },
    {
        id: 3,
        name: 'SpringBoot'
    },
    {
        id: 4,
        name: 'Spring'
    },
    {
        id: 5,
        name: 'AdvanceJava'
    }

]

const Tabs = ({ index, setIndex }) => {
    return (
        <div>
            <menu>
                {
                    menuoptions.map(
                        (singleoption) =>
                            <Menu
                                singleoption={singleoption}
                                index={index}
                                setIndex={setIndex}
                            />

                    )
                }
            </menu>


        </div>
    );
}


const Menu = ({singleoption, index, setIndex}) => {
    return (
        <div>
            <button
                className={index === singleoption.id ? "active" : ""}
                onClick={() => setIndex(singleoption.id)}>
                {singleoption.name}
            </button>

        </div>

    );
}

const Display = ({ index }) => {
    return (
        <ul>
            {   array[index].map(
                    item => (
                        <li>
                            {item}
                        </li>
                    )
                )
            }

        </ul>
    );
}


const Test1 = () => {
   
    const [index, setIndex] = useState(0);
    return (
        <div>
            <Tabs index={index}
                setIndex={setIndex} />
            <Display index={index} />
        </div>
    );
}

export default Test1;

