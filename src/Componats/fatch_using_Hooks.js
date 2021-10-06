import React,{useState, useEffect} from "react";

function FatchHooks(){
    const [person,setPerson] = useState('Data ....');
    const [next,setNext] = useState(0);
    const [count,setCount] = useState(0);
    
    const url = "https://jsonplaceholder.typicode.com/users";
    useEffect(() => {
        async function fetchData() {
        const Response =await fetch(url);
        const data =await Response.json();
        // console.log(data[0]);
        const Data = <div>{`Name : ${data[next].name}`} <br /> {`Web Site : ${data[next].website}`}
        <br />{`Email Id : ${data[next].email}`}
        <br />{`User Name : ${data[next].username}`}
        <br />{`Phone : ${data[next].phone}`}
        <br />{`Address :`}
        <br />{`    City: ${data[next].address.city}`}
        </div>;
        setPerson(Data);
        setCount(data.length);
        }
        fetchData();
    },[next])
    console.log('CHECK RENDERING :',(next<count)?{next}:"Bad");
    return(
    <section>
        <p>Data of {next} person</p>
        <div>{person}</div>
        <button onClick={()=>(next>0)?setNext(next-1):setNext(count-1)}>{`<= Previouse`}</button>
        <button onClick={()=>(next<count-1)?setNext(next+1):setNext(0)}>{`Next =>`}</button>
    </section>)
}

export default FatchHooks;