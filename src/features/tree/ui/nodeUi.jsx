import { ButtonUi } from "../../../shared/ui/index.js";
import { AddNodeUi } from "./addNodeUi";

export const NodeUi = (props) => {
    return (
        <li className='node'>
            <div className='current-node'>
                <p className='container node-content'>
                    {props.text}
                </p>
                <div className='actions'>
                    <ButtonUi className='container edit-button' text='Edit'/>
                    <ButtonUi className='container delete-button' text='Delete'/>
                </div>
            </div>
            <AddNodeUi
                className='add-node'
                node={props.node}
                addNode={props.addNode}
            />
            {props.node.children.length > 0 && (
                <ul>
                    {props.node.children.map((child) => (
                        <NodeUi
                            key={child.id}
                            node={child}
                            text={child.name}
                            addNode={props.addNode}
                        />
                    ))}
                </ul>
            )}
        </li>
    )
}