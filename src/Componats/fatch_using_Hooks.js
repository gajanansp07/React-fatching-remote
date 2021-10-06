import React,{useState, useEffect} from "react";

function FatchHooks(){
    const [persons,setPersons] = useState([]);
    const [person,setPerson] = useState({});
    const [next,setNext] = useState(0);    
    useEffect(() => {
        fetch('https://jsonplaceholder.typicode.com/users')
        .then(response => response.json() )
        .then(data =>{
            setPerson(data[0]);
            setPersons(data);
        });       
    },[]);
    if(!persons.length || !Object.keys(person).length){
        return '';
    }
    return(
    <section>
        <div>
            <p>{`Parson ID is : ${next}`} </p>
            {`Name : ${person.name}`} <br />
            {`Web Site : ${person.website}`}<br />
            {`Email Id : ${person.email}`}<br />
            {`User Name : ${person.username}`}<br />
            {`Phone : ${person.phone}`}<br />
            {`Address :`}<br />
            {`City - ${person.address.city}`}
        </div>
        <button onClick={()=>{
                if(next>0)
                    setNext(next-1); 
                else
                    setNext(persons.length-1) ;
                console.log('NEXT',next)
                setPerson(persons[next]);//error in next
            }}>
                {`<= Previouse`}
        </button>
        <button onClick={
            ()=>{
                // console.log(persons.length-1)
                if(next<persons.length-1)
                    setNext(next+1)
                else
                    setNext(0);
                setPerson(persons[next]);// Error in next
                }
            }>
                {`Next =>`}
        </button>
    </section>)
}

export default FatchHooks;