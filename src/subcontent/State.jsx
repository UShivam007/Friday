import { useState } from "react"
import '../pages/App.css';

function Change() {

    let [data, setdata] = useState(0);
    let [value, setValue] = useState(false);

    console.log(data);
    console.log(value);

    function innc() {
        setdata(data + 1);
    }

    function dec() {
        setdata(data - 1);
    }

    function reset()
    {
        setdata(0);
    }
    return (
        <div>
            <div id="lio3">
                <button onClick={innc}>+</button> <pre>  </pre>
                <span>{data}</span> <pre>  </pre>
                <button onClick={dec}>-</button>
                &nbsp;
                <button onClick={reset}> Reset </button>
                <br />
            </div>
            <div>
                    <br />
                {(value) ? "ClickEd True" : "Clicked False"}
                <button style={{background:"white",border: '2px solid black',width:'45px'}}onClick={() => { setValue(!value) }}>Click</button>

                <br /> <br />

                <div style={{ backgroundColor: (value) ? "red" : "blue" }}>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Totam, voluptate!
                </div>

                <br /> <br />

                <div className={(value) ? "box1" : "box2"}>

                </div>
            </div>

        </div>
    )
}

export default Change;