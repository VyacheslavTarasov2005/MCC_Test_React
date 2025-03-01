import { ButtonUi } from "../../../shared/ui";
import { AddNodeUi } from "./addNodeUi";

export const NodeUi = (props) => {
    return (
        <li className='node'>
            <div className='current-node'>
                <p className='container node-content'>
                    {props.text}
                </p>
                <div className='actions'>
                    <ButtonUi
                        className='edit-button'
                        text='Edit'
                    />
                    <ButtonUi
                        className='delete-button'
                        text='Delete'
                        onClick={() => props.deleteNode(props.node)}
                    />
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
                            deleteNode={props.deleteNode}
                        />
                    ))}
                </ul>
            )}
        </li>
    )
}