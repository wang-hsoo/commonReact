


function Text({id, value, label, onChange}){


    return(
        <input 
            type="text"
            id={id}
            value={value}
            onChange={onChange}
            label={label}
        />
    )
}