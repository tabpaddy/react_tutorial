import Code from "./Code"
import Welcome from "./Welcome"

export default function ConditionalComponents(){
     const display = false //bool
    // if(display){
    //     return (
    //         <Welcome/>
    //     )
    // }else{
    //     return (
    //         <Code/>
    //     )
    // }

    // using element variable

    // let message;
    // if(display){
    //     message = <h1>This is message 1</h1>
    // }else{
    //     message = <h1>This is Message 2</h1>
    // }

    // return (message)

    // ternary operator
    return display ? <Code/> : <Welcome/>;
    
}