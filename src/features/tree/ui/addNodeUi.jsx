import {ButtonUi, InputUi} from "../../../shared/ui";

export const AddNodeUi = (props) => {
    const handleSubmit = (e) => {
        e.preventDefault();
        const formData = new FormData(e.target);
        const nodeName = formData.get('childName');
        props.addNode(nodeName, props.node);
        e.target.reset();
    };

    return (
        <form
            className={props.className}
            onSubmit={handleSubmit}
        >
            <InputUi
                className='container'
                type='text'
                name='childName'
                placeholder='Node Name'
            />
            <ButtonUi
                className='container add-button'
                type='submit'
                text='Add'
            />
        </form>
    )
}