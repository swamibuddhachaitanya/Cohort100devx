import React, { useState } from 'react';



export function TakeInfoIntoTheDB(props) {
    
    const [name,setname] = useState('');
    const [description,setdescription] = useState('');
    const [interest, setInterest] = useState('');
    const [interests, setInterests] = useState([]);
    const [Instaurl, setInstaurl] = useState('');
    const [Twitterurl, setTwitterurl] = useState('');




    // const handleChange = (e) => {
    //     setInterest(e.target.value);
    // };

    const handleAddInterest = () => {
        if (interest.trim() !== '') {
            setInterests([...interests, interest]);
            setInterest('');
        }
    };

    const handleRemoveInterest = (interestToRemove) => {
        const updatedInterests = interests.filter((int) => int !== interestToRemove);
        setInterests(updatedInterests);
    };

    const handleSubmit = () => { 
        //now i just need to collect all the data and then send it to backend.
        //this is to post the card 
        // 'http://localhost:3000/admin/createCard' post method
        // Send interests to the backend
        fetch('http://localhost:3000/admin/createCard',{
            method: "POST",
            body: JSON.stringify({
                name: name,
                description: description,
                Interests: interests,
                UrlArray: [{key:"instagram",value:Instaurl},{key:"twitter",value:Twitterurl} ]
            }),
            headers:{
                username: "admin",
                password: "admin",
                "Content-Type":"application/json"
            }
        }).then(async function (res) {
            const json = await res.json();
            alert( json.msg)
            
        })


        // console.log('Interests to submit:', interests);
    };





    return (
        <div>
            
                <input id="name" type="text" value={name} placeholder="add name" onChange={(e)=>{
                    const value = e.target.value;
                    setname(value);
                }}/><br /><br />

                <input id="description" type="text" value={description} placeholder="add description" onChange={(e)=>{
                    const value = e.target.value;
                    setdescription(value);
                }}/><br /><br />
                
        <div>
            
            <div>
                <input
                    type="text"
                    value={interest}
                    onChange={(e)=>{
                        const value = e.target.value;
                        setInterest(value)

                    }}
                    placeholder="Enter interest"
                />
                <button onClick={handleAddInterest}>Add</button>
            </div>
            <ul>
                {interests.map((int, index) => (
                    <li key={index}>
                        {int} <span style={{cursor:'pointer'}} onClick={() => handleRemoveInterest(int)}>❌</span>
                    </li>
                ))}
            </ul>
            
        </div>
            <div>

                Instagram: <input id='instaurl' type="text" value={Instaurl}  placeholder='Enter url' onChange={(e)=>{
                    const value=e.target.value;
                    setInstaurl(value);
                }}/><br /><br />
                Twitter: <input id='twitterurl' type="text" value={Twitterurl} placeholder='Enter url' onChange={(e)=>{
                    const value=e.target.value;
                    setTwitterurl(value);
                }}/><br /><br />
            </div>
            
            <div>
            <button onClick={handleSubmit}>Submit Card data</button>
            </div>
        </div>
    )

}



