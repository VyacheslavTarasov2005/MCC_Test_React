import { ButtonUi, InputUi } from "../../../shared/ui";
import { TreeContext } from "../lib";
import { useContext } from "react";

export const EditNodeUi = (props) => {
    const { editNode } = useContext(TreeContext);

    const handleSubmit = (e) => {
        e.preventDefault();
        const formData = new FormData(e.target);
        const newNodeName = formData.get('newName');
        editNode(props.node, newNodeName);
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
            >
                Confirm
            </ButtonUi>
            <ButtonUi
                className='cancel-button'
                type='button'
                onClick={props.cancelEditing}
            >
                Cancel
            </ButtonUi>
        </form>
    )
}