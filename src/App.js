import React,{useState} from 'react'
function App(){
    const [fullName,setFullName] = useState("");
    const [email,setEmail] = useState("");
    const [password,setPassword] = useState("");
    const [getName,setGetName] = useState();
    const [getEmail,setGetEmail] = useState();
    const [getPassword,setGetPassword] = useState();

    const getData = (e) =>{
          setFullName(e.target.value);
    }

    const getData2 = (e) =>{
        setEmail(e.target.value);
    }

    const getData3 = (e) =>{
        setPassword(e.target.value)
    }
    
    const onSubmit = (e) =>{
        e.preventDefault();
        setGetName(fullName);
        setGetEmail(email);
        setGetPassword(password);

        setFullName("");
        setEmail("");
        setPassword("");
    }
    return(
        <>
        <div className="main">
           <div className="child">
             <form onSubmit={onSubmit}>
                <p className="para1">Name : {getName}</p>
                <p className="para2">Email : {getEmail}</p>
                <p className="para3">Password : {getPassword}</p>
                <input type="text" placeholder="Enter your First Name" value={fullName} onChange={getData}  autoFocus/>
                <input type="email" placeholder="Enter your Email" value={email} onChange={getData2}/>
                <input type="password" placeholder="Enter your Password" value={password} onChange={getData3}/>
                <br/>
                <button type="submit">Click Me</button>   
             </form> 
            </div>
        </div>
         </>
    );
}

export default App;