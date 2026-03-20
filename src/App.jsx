import "./App.css";

function App() {
  const firstName = "Андрій";
  const imageUrl = "https://www.zooplus.co.uk/magazine/wp-content/uploads/2021/01/striped-grey-kitten.webp";
  const imageAlt = "Картинка з котиком";
  const website = {
    name: "YouTube",
    link: "https://www.youtube.com",
  };
  const number1 = 34;
  const number2 = 33;
  const colors = ["Червоний", "Синій", "Зелений"];

  const markup = (
    <>
      <h1>{firstName}</h1>
      <p>Ласкаво просимо до нашого сайту!</p>
      <img
        src={imageUrl}
        alt={imageAlt}
        width="200"
      />
      <a href={website.link}>{website.name}</a>
      <p>{number1} + {number2} = {number1 + number2}</p>
      <ul className="colors-list">
        {colors.map(color => (
          <li className="color" key={color}>{color}</li>
        ))}
      </ul>
    </>
  );

  return markup;
}

export default App;
