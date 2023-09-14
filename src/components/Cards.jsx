import { useEffect, useState } from "react";
import Card from "./Card";

const Cards = () => {
  const [cards, setCards] = useState([]);
  useEffect(() => {
    fetch('/products.json')
    .then(res => res.json())
    .then(data => setCards(data));
  }, []);

  return (
    <section className="mt-8">
      <div className="container">
        <h2 className="text-3xl font-semibold text-center mb-8">Our Products</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {
            cards.map((card) => <Card key={card.id} card={card}></Card>)
          }
        </div>
      </div>
    </section>
  );
};

export default Cards;