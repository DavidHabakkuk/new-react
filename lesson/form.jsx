import React, { useState } from 'react';

function MyForm() {
    const [inputValue, setInputValue] = useState('');

    const handleSubmit = (event) => {
        event.preventDefault();
        alert('Submitted value: ' + inputValue);
    };

    const handleInputChange = (event) => {
        setInputValue(event.target.value);
    };
    window.alert("hey hello");

    return (
        <div>
            <form onSubmit={handleSubmit}>
                <label>
                    Enter a value:
                    <input type="text" value={inputValue} onChange={handleInputChange} />
                </label>
                <button type="submit">Submit</button>
            </form>
        </div>
    );
}

export default MyForm;
