export const Input = (props) => {    
    const handleChange = (e) => {
        let { name, value } = e.target
        props.handleChange({...props.formState, [name]: value.trim()})
    }

    return (
        <input name={props.name} onChange={handleChange} />
    )
}