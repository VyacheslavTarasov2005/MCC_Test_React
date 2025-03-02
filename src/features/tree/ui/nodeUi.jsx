import { ButtonUi } from "../../../shared/ui";
import { AddNodeUi } from "./addNodeUi";
import { EditNodeUi} from "./editNodeUi";
import { TreeContext } from "../lib";
import { useState, useContext } from "react";

export const NodeUi = (props) => {
    const [isEditing, setIsEditing] = useState(false);
    const { deleteNode } = useContext(TreeContext);

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
                                onClick={handleEdit}
                            >
                                Edit
                            </ButtonUi>
                            <ButtonUi
                                className='delete-button'
                                onClick={() => deleteNode(props.node)}
                            >
                                Delete
                            </ButtonUi>
                        </div>
                    </>
                )}
            </div>
            <AddNodeUi
                node={props.node}
            />
            {props.node.children.length > 0 && (
                <ul>
                    {props.node.children.map((child) => (
                        <NodeUi
                            key={child.id}
                            node={child}
                            text={child.name}
                        />
                    ))}
                </ul>
            )}
        </li>
    )
}