import React, { useEffect, useState } from "react"

export const FormWrapper = (props) => {
    const [formState, setFormState] = useState({})
    const [children, setChildren] = useState([])

    const former = (arr) => {
        return arr.map((formElement, i) => {
            let props = { key: i }
            if (formElement.type.name === 'Input') {
                props = { ...props, handleChange: setFormState, formState: formState }
            }
            let newEl = React.cloneElement(formElement, props)
            return newEl
        })
    }

    useEffect(() => {
        setChildren(former(props.children))
    }, [formState, props.children])

    return (
        <form>
            {children}
        </form>
    )
}