import React,{useState, useEffect} from "react";

function FatchHooks(){
    const [person,setPerson] = useState('Data ....');
    const [next,setNext] = useState(1);
    const [count,setCount] = useState(0);
    
    const url = "https://jsonplaceholder.typicode.com/users";
    useEffect(() => {
        async function fetchData() {
        const Response =await fetch(url);
        const data =await Response.json();
        // console.log(data[0]);
        const Data = <div>{`Name : ${data[next-1].name}`} <br /> {`Web Site : ${data[next-1].website}`}
        <br />{`Email Id : ${data[next-1].email}`}
        <br />{`User Name : ${data[next-1].username}`}
        <br />{`Phone : ${data[next-1].phone}`}
        <br />{`Address :`}
        <br />{`    City - ${data[next-1].address.city}`}
        </div>;
        setPerson(Data);
        setCount(data.length);
        }
        fetchData();
    },[next])
    console.log('CHECK RENDERING :',(next<count)?{next}:"Bad");
    return(
    <section>
        <p>Parson ID is : {next} </p>
        <div>{person}</div>
        <button onClick={()=>(next>1)?setNext(next-1):setNext(count)}>{`<= Previouse`}</button>
        <button onClick={()=>(next<count)?setNext(next+1):setNext(1)}>{`Next =>`}</button>
    </section>)
}

export default FatchHooks;