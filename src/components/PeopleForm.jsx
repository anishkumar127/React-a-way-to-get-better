import React from 'react'

const PeopleForm = () => {
    const handleSubmit = (e) => {
        e.preventDefault();
    }
    const nameChangeHandler = (e) => {
        const personName = e.target.value;
        console.log(personName);
    }
    const statusChangeHanlder = (e) => {
        const status = e.target.value;
        console.log(status);
    }
    return (
        <div>
            <form onSubmit={handleSubmit}>
                <input type="text" placeholder='name' onChange={nameChangeHandler} />
                <select onChange={statusChangeHanlder}>
                    <option value="Default">Select</option>
                    <option value="Active">Active</option>
                    <option value="Pending">pending</option>
                </select>
                <button type="submit">Add People</button>
            </form>

        </div>
    )
}

export default PeopleForm