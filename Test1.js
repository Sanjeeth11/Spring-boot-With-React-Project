import React, { useState } from "react";

const content = [
    [
        "React is a simple frontend javascript rich library"
    ],

    [
        "Spring Boot is a simple extension of Spring Framework"
    ],

    [
        "JavaScript is a simple frontend language mostly used for validations"
    ]
]

const menuOptions = [
    {
        id: 0,
        name: "React info here"
    },

    {
        id: 1,
        name: "Spring Boot info here"
    },

    {
        id: 2,
        name: "JavaScript info here"
    }
]

const Tabs = ({ index, setIndex }) => {

    return (
        <div>
            <menu>
                {
                    menuOptions.map(
                        (singleOption) =>
                            <Menu
                                singleOption={singleOption}
                                index={index}
                                setIndex={setIndex}
                            />
                    )
                }
            </menu>
        </div>
    );
}

const Menu = ({ singleOption, index, setIndex }) => {
    return (
        <div>
            <button className={index === singleOption.id ? "active" : ""}
                onClick={() => setIndex(singleOption.id)}>
                {singleOption.name}
            </button>
        </div>
    );
}

const Display = ({index}) => {
    return (
        <ul>
            {
            content[index].map(
                (item)=>
                <li>
                    {item}
                </li>
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
            <Display index={index}/>

        </div>
    );

}
export default Test1;