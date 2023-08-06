


function Select({data, onChange}){


    return(
        <select>
            {data.map(( option )=> {
                <option 
                    key={option.value} 
                    value={option.value}
                >
                        {value.name}
                </option>
            })}
        </select>
    )
}