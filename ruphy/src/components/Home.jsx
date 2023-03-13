import React, {useState} from 'react';


const Home = ()=> {
    const [count, setCount] = useState(0)
    return(
        <div className='container'>
        <h1>Welcome to Ruphy</h1>
        <hr/>
        <div className='counter-container'>
            <button onClick={()=> setCount((count) => count +1)}>Count is {count}</button>
            <h2>{count}</h2>
        </div>
        </div>
    )
}

export default Home;