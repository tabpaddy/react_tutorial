export default function Fruit({name, price, soldOut}) {
    return (
        <>
            {/* {name} {price} */}

            {/* rendering list item */}
            {/* {price>5 ? <li>{name} {price}</li> : "" } */}

            {/* rendering a message using ternary */}
            <li>{name} {price} {soldOut ? "Soldout" : ""}</li> 
        </>
    );  
}