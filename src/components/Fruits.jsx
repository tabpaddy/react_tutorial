import Fruit from "./Fruit";

export default function Fruits() {
  //   const fruits = ["Apple", "Mango", "Banana", "Orange", "Pineapple"];

  const fruits = [
    { name: "Apple", price: 10 },
    { name: "Banana", price: 3 },
    { name: "Mango", price: 7 },
    { name: "Orange", price: 5 },
    { name: "Pineapple", price: 8 },
  ];

  return (
    <div>
      <ul>
        {fruits.map((fruit) => (
          //   <li key={fruit.name}>{fruit.name} ${fruit.price}</li>
          <Fruit key={fruit.name} name={fruit.name} price={fruit.price} />
        ))}
      </ul>
    </div>
  );
}
