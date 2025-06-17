import "./pages/App.css";


export function Bear(){
    let name = "Shivam";
    let age = 32;
    return (
        <>
            <h2 id="lio1">Hello My name is {name} and My age is {age}</h2>
            <p style={{backgroundColor:'coral', fontSize:'1.2rem'}}>Welcome the world of React JS</p>
        </>
    )
}

export function Hello(){
    return(
        <h1 id="lio2">Hello My Dear Brother </h1>
    )
}

export function Hello2(Inn){
    return(
        <>
        {console.log(Inn)}
        <span>I Am the Citizen of {Inn.cont}</span>
        <span> .I am From {Inn.state}</span>
        <span> ,I am from {Inn.city}</span>
        </>
    )
}