const Filter = (props) => {
    return (
        <div>
            filter list with <input
            value={props.newFilter}
            onChange={props.handleListFilter} />
        </div>
    )
}

export default Filter