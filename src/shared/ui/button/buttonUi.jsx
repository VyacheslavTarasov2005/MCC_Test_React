export const ButtonUi = (props) => {
    return (
        <button
            className={ `container ${props.className}` }
            type={ props.type }
            onClick={ props.onClick }
            disabled={ props.disabled }
        >
            { props.children }
        </button>
    )
}