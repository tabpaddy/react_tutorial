import Fruit from "./Fruit";

export default function Fruits() {
  //   const fruits = ["Apple", "Mango", "Banana", "Orange", "Pineapple"];

  const fruits = [
    { name: "Apple", price: 10, soldOut: false},
    { name: "Banana", price: 3, soldOut: false},
    { name: "Mango", price: 7, soldOut: true},
    { name: "Orange", price: 5, soldOut: false},
    { name: "Pineapple", price: 8, soldOut: true},
  ];

  return (
    <div>
      <ul>
        {fruits.map((fruit) => (
          //   <li key={fruit.name}>{fruit.name} ${fruit.price}</li>
          <Fruit key={fruit.name} name={fruit.name} price={fruit.price} soldOut={fruit.soldOut}/>
        ))}
      </ul>
    </div>
  );
}
