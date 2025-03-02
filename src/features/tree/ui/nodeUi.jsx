import { ButtonUi } from "../../../shared/ui";
import { AddNodeUi } from "./addNodeUi";
import { EditNodeUi} from "./editNodeUi";
import { TreeContext } from "../lib";
import { useState, useContext } from "react";

export const NodeUi = (props) => {
    const [isEditing, setIsEditing] = useState(false);
    const [isActive, setIsActive] = useState(false);
    const { deleteNode } = useContext(TreeContext);

    const handleActive = () => {
        setIsActive(!isActive);
    }

    const handleEdit = () => {
        setIsEditing(!isEditing);
    }

    return (
        <li className='node'>
            <div className='current-node'>
                {isEditing ? (
                    <EditNodeUi
                        node={props.node}
                        cancelEditing={handleEdit}
                    />
                ) : (
                    <>
                        <ButtonUi
                            className='node-content'
                            type='button'
                            onClick={handleActive}
                        >
                            {props.text}
                        </ButtonUi>
                        { isActive && (
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
                        )}
                    </>
                )}
            </div>
            {isActive && (
                <AddNodeUi
                    node={props.node}
                />
            )}
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