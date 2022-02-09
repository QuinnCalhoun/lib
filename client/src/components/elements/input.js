export const Input = (props) => {
    
    const handleChange = (e) => {
        let { name, value } = e.target
        props.handleChange({[name]: value})
    }

    return (
        <input name={props.name} onChange={handleChange} />
    )
}