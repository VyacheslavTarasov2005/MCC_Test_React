import { ButtonUi } from "../../../shared/ui";
import { AddNodeUi } from "./addNodeUi";
import { EditNodeUi} from "./editNodeUi";
import { useState } from "react";

export const NodeUi = (props) => {
    const [isEditing, setIsEditing] = useState(false);

    const handleEdit = () => {
        setIsEditing(true);
    }

    const handleCancelEdit = () => {
        setIsEditing(false);
    }

    return (
        <li className='node'>
            <div className='current-node'>
                {isEditing ? (
                    <EditNodeUi
                        node={props.node}
                        editNode={props.editNode}
                        cancelEditing={handleCancelEdit}
                    />
                ) : (
                    <>
                        <p className='container node-content'>
                            {props.text}
                        </p>
                        <div className='actions'>
                            <ButtonUi
                                className='edit-button'
                                text='Edit'
                                onClick={handleEdit}
                            />
                            <ButtonUi
                                className='delete-button'
                                text='Delete'
                                onClick={() => props.deleteNode(props.node)}
                            />
                        </div>
                    </>
                )}
            </div>
            <AddNodeUi
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
                            editNode={props.editNode}
                        />
                    ))}
                </ul>
            )}
        </li>
    )
}