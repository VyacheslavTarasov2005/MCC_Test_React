import { ButtonUi, InputUi } from "../../../shared/ui";

export const EditNodeUi = (props) => {
    const handleSubmit = (e) => {
        e.preventDefault();
        const formData = new FormData(e.target);
        const newNodeName = formData.get('newName');
        props.editNode(props.node, newNodeName);
        props.cancelEditing();
    }

    return (
        <form
            className='edit-node'
            onSubmit={handleSubmit}
        >
            <InputUi
                type='text'
                name='newName'
                placeholder='Node Name'
            />
            <ButtonUi
                className='confirm-button'
                type='submit'
                text='Confirm'
            />
            <ButtonUi
                className='cancel-button'
                type='button'
                text='Cancel'
                onClick={props.cancelEditing}
            />
        </form>
    )
}