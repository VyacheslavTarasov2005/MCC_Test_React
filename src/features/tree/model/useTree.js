import { useState } from "react";
import { NodeModel } from "./nodeModel";

export const UseTree = () => {
    const [rootNode, setRootNode] = useState(new NodeModel(0, ''));

    const update = () => {
        const newRootNode = new NodeModel(0, '', undefined, rootNode.children);
        setRootNode(newRootNode);
    }

    const addNode = (nodeName, parentNode = null) => {
        if (parentNode instanceof NodeModel) {
            parentNode.addChild(nodeName);
        }
        else {
            rootNode.addChild(nodeName);
        }

        update();
    }

    const deleteNode = (node) => {
        if (node instanceof NodeModel) {
            node.parent.children.splice(node.id, 1);
        }

        update();
    }

    const editNode = (node, newNodeName) => {
        if (node instanceof NodeModel) {
            node.name = newNodeName;
        }

        update();
    }

    return { rootNode, addNode, deleteNode, editNode };
}