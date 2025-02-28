export const InputUi = (props) => {
    return (
        <input
            className={ props.className }
            type={ props.type }
            name={ props.name }
            placeholder={ props.placeholder }
        />
    )
}