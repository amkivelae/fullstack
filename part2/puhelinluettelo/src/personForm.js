const PersonForm = (props) => {
    return (
        <form onSubmit={props.addPerson}>
            <h2>add a new</h2>
            <div>
                name: <input 
                value={props.newName}
                onChange={props.handleNameAddition} />
            </div>
            <div>
                number: <input  
                value={props.newPhone}
                onChange={props.handlePhoneAddition} />
            </div>
            <div>
                <button type="submit">add</button>
            </div>
      </form>
    )
}

export default PersonForm