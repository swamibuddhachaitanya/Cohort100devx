import React, { useState } from 'react';


export function TakeInfoIntoTheDB(props) {
    const [interest, setInterest] = useState('');
    const [interests, setInterests] = useState([]);

    const handleChange = (e) => {
        setInterest(e.target.value);
    };

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
        // Send interests to the backend
        console.log('Interests to submit:', interests);
    };

    return (
        <div>
            <div>
                <input id="name" type="text" placeholder="add name"/><br /><br />
                <input id="description" type="text" placeholder="add description"/><br /><br />
                <div>
            <div>
                <input
                    type="text"
                    value={interest}
                    onChange={handleChange}
                    placeholder="Enter interest"
                />
                <button onClick={handleAddInterest}>Add</button>
            </div>
            <ul>
                {interests.map((int, index) => (
                    <li key={index}>
                        {int} <span onClick={() => handleRemoveInterest(int)}>❌</span>
                    </li>
                ))}
            </ul>
            <button onClick={handleSubmit}>Submit Interests</button>
        </div>
            </div>
        </div>
    )

}



export function InterestInput() {
    const [interest, setInterest] = useState('');
    const [interests, setInterests] = useState([]);

    const handleChange = (e) => {
        setInterest(e.target.value);
    };

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
        // Send interests to the backend
        console.log('Interests to submit:', interests);
    };

    return (
        <div>
            <div>
                <input
                    type="text"
                    value={interest}
                    onChange={handleChange}
                    placeholder="Enter interest"
                />
                <button onClick={handleAddInterest}>Add</button>
            </div>
            <ul>
                {interests.map((int, index) => (
                    <li key={index}>
                        {int} <span onClick={() => handleRemoveInterest(int)}>❌</span>
                    </li>
                ))}
            </ul>
            <button onClick={handleSubmit}>Submit Interests</button>
        </div>
    );
}

// export default InterestInput;
