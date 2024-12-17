import { useState, useEffect } from "react";


const TestRestAPI = () => {

    const [activeIndex, setActiveIndex] = useState(0);
    const [index, setIndex] = useState([]);

     useEffect (() => {
        fetch('http://localhost:8080/content').then(
            (response) => {
                response.text().then(
                    (index) => {
                        setIndex(JSON.parse(index));
                    }
                );
            });
    },[])


    return (
        <div>
            <div>
                 <menu>
                {
                    index && index.map(i => {
                        return (<button className={activeIndex === i.id ? "active" : ""}
                            onClick={() => setActiveIndex(i.id)}>{i.id}

                        </button>);

                    })
                }
            </menu>
            </div>
            <div>
            <ul>
                {
                    index && index.find((i) => i.id === activeIndex?.content?.map((i) => <li key={i.id}>{i}</li>))
                }
            </ul>
            </div>
        </div>
    );
}

export default TestRestAPI;