//this function will create a card based on the data given to it
//it requires only on card detail hence the outer function should have a loop
import './styles.css'


export function CreateCard({card}) {

    function handleDeleteCard(name) {
        fetch("http://localhost:3000/admin/deleteCard",{
            method: "DELETE",
            body: JSON.stringify({
                name: name
            }),
            headers:{
                username: "admin",
                password: "admin",
                "Content-Type":"application/json"
            }
        }).then(async function (res) {
            const json = await res.json();
            alert(json.msg)
        })
    }


    return (
        <div className="card-container">
             <button className="delete-button" onClick={() => handleDeleteCard(card.name)}>❌</button>
            <h1>{card.name}</h1>
            <h2>{card.description}</h2>
            {/* <h2>{card.description}</h2> */}
            <h3>Interests:</h3>
            <ul>
                {
                    card.Interests.map((Interest,IntIndex)=>(
                        <li key={IntIndex}>{Interest}</li>
                    ))
                }
            </ul>
            <div style={{display: 'flex',gap:'10px'}}>
                
                    {/* <button onClick={()=>{window.location.href= 'www.kjfsakdhd.com'}}></button> */}
                    {card.UrlArray.map((urlTag,urlIndex)=>(
                       <div> <button key={urlIndex} onClick={()=>{window.location.href = urlTag.value}}>{urlTag.key}</button>
                       </div>
                    ))}
                
            </div>
        </div>
    )

}