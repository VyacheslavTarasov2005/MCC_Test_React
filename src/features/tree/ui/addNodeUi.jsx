import {ButtonUi, InputUi} from "../../../shared/ui";
import { TreeContext } from "../lib";
import { useContext } from "react";

export const AddNodeUi = (props) => {
    const { addNode } = useContext(TreeContext);

    const handleSubmit = (e) => {
        e.preventDefault();
        const formData = new FormData(e.target);
        const nodeName = formData.get('childName');
        addNode(nodeName, props.node);
        e.target.reset();
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
            />
            <ButtonUi
                className='add-button'
                type='submit'
            >
                Add
            </ButtonUi>
        </form>
    )
}