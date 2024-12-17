import { useState, useEffect } from "react";

const Test1 = () => {
  const [activeIndex, setActiveIndex] = useState(null);
  const [index, setIndex] = useState([]);

  useEffect(() => {
    // Fetching data from Spring Boot API
    fetch('http://localhost:8080/content')
      .then((response) => response.json())
      .then((data) => {
        setIndex(data);
      })
      .catch((error) => console.error('Error fetching data:', error));
  }, []);

  // Handle the active index change
  const handleButtonClick = (id) => {
    setActiveIndex(id);
  };

  // Find the content of the selected index
  const activeContent = index.find(item => item.id === activeIndex)?.content || [];

  return (
    <div>
      <div>
        {/* Render buttons based on the fetched data */}
        <menu>
          {index && index.map(i => (
            <button
              key={i.id}
              className={activeIndex === i.id ? "active" : ""}
              onClick={() => handleButtonClick(i.id)}
            >
              {i.name}
            </button>
          ))}
        </menu>
      </div>

      <div>
        {/* Display the content of the active item */}
        {activeIndex !== null && (
          <div>
            <h3>Content:</h3>
            <ul>
              {activeContent.map((content, index) => (
                <li key={index}>{content}</li>
              ))}
            </ul>
          </div>
        )}
      </div>
    </div>
  );
};

export default Test1;
