import { ButtonUi, InputUi } from "../../../shared/ui";
import { TreeContext } from "../lib";
import {useContext, useState} from "react";

export const EditNodeUi = (props) => {
    const [inputValue, setInputValue] = useState(props.node.name);
    const { editNode } = useContext(TreeContext);

    const handleInputChange = (e) => {
        setInputValue(e.target.value);
    };

    const handleSubmit = (e) => {
        e.preventDefault();

        const formData = new FormData(e.target);
        const newNodeName = formData.get('new-name');
        if (newNodeName.trim()) {
            editNode(props.node, newNodeName);
            props.cancelEditing();
            setInputValue('');
        }
    }

    return (
        <form
            className='edit-node'
            onSubmit={handleSubmit}
        >
            <InputUi
                type='text'
                name='new-name'
                placeholder='Node Name'
                value={inputValue}
                onChange={handleInputChange}
            />
            <ButtonUi
                className='confirm-button'
                type='submit'
                disabled={!inputValue.trim()}
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