export const InputUi = (props) => {
    return (
        <input
            className={ `container ${props.className}` }
            type={ props.type }
            name={ props.name }
            placeholder={ props.placeholder }
        />
    )
}