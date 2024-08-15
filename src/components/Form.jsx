import { useState } from "react"

export default function Form() {
    // single inputs
    // const [name, setName] = useState("")

    // Multiple inputs 
    const [name, setName] = useState({fisrtname:"", lastName:""});
    // function handleChanged(e){
    //     setName(e.target.value)
    // }

    // button
    function handleSumbit(e){
        e.preventDefault();
        console.log(name);
    }
    return (
        <div>
            <form>
                {name.fisrtname} - {name.lastName}
                <input 
                // onChange={function demo(e) {
                //     return handleChanged(e)
                // }} 
                // onChange={(e)=>handleChanged(e)}
                // type="text" value={name}/>

                // single input
                //onChange={(e)=>setName(e.target.value)}
                // type="text" value={name}

                // multiple input
                onChange={(e) => setName({...name, fisrtname:e.target.value})}
                type="text" value={name.fisrtname}/>

                <input type="text" 
                onChange={(e) => setName({...name, lastName:e.target.value})} 
                value={name.lastName}/>

                {/* button */}
                <button onClick={(e)=>handleSumbit(e)}>Add</button>
            </form>
        </div>
    )
}