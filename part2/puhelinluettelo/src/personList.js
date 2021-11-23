const PersonList = (props) => {
    return (
        <div>
            {props.filterList.map(person => (
                <li key={person.name}>{person.name} {person.phone}</li>
            ))}
        </div>
    )
}

export default PersonList