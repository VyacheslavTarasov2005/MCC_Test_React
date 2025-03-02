import {ButtonUi, InputUi} from "../../../shared/ui";
import { TreeContext } from "../lib";
import { useState, useContext } from "react";

export const AddNodeUi = (props) => {
    const [inputValue, setInputValue] = useState("");
    const { addNode } = useContext(TreeContext);

    const handleInputChange = (e) => {
        const value = e.target.value.trim();
        setInputValue(value);
    };

    const handleSubmit = (e) => {
        e.preventDefault();

        const formData = new FormData(e.target);
        const nodeName = formData.get('childName');
        if (nodeName.trim()) {
            addNode(nodeName, props.node);
            setInputValue('');
        }
    };

    return (
        <form
            className='add-node'
            onSubmit={handleSubmit}
        >
            <InputUi
                type='text'
                name='childName'
                placeholder='Node Name'
                value={inputValue}
                onChange={handleInputChange}
            />
            <ButtonUi
                className='add-button'
                type='submit'
                disabled={!inputValue.trim()}
            >
                Add
            </ButtonUi>
        </form>
    )
}