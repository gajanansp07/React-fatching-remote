import React,{useState, useEffect} from "react";

const FatchHooks = () => {
    const [users, setUsers] = useState([]);
    const [user, setUser] = useState({});
    const [currentIndex, setCurrentIndex] = useState(0);

    useEffect(() => {
        fetch( 'https://jsonplaceholder.typicode.com/users/' )
        .then( res => res.json() )
        .then( data => {
            setUser( data[0] );
            setUsers( data );
        } );
    },[]);

    if( ! users.length || ! Object.keys( user ).length ) {
        return '';
    }

    return(
        <section>
            <div>
                {`Name : ${user.name}`} <br /> 
                {`Web Site : ${user.website}`}<br />
                {`Email Id : ${user.email}`}<br />
                {`User Name : ${user.username}`}<br />
                {`Phone : ${user.phone}`}<br />
                {`Address :`}<br />
                {`City: ${user.address.city}`}
            </div>
            <button
                disabled={ currentIndex <= 0 ? true: false}
                onClick={()=>{
                    setCurrentIndex( currentIndex-1 );
                    setUser( users[currentIndex-1] );
                }}
            >Prev</button>
            <button
                disabled={currentIndex >= ( users.length - 1 ) ? true: false}
                onClick={()=>{
                    console.log( currentIndex, users.length )
                    setCurrentIndex( currentIndex+1 );
                    setUser( users[currentIndex+1] );
                }}
            >Next</button>
        </section>
    )
}

export default FatchHooks;