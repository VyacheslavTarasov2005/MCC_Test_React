import { useState } from "react";
import { NodeModel } from "./nodeModel";

export const UseTree = () => {
    const [rootNode, setRootNode] = useState(new NodeModel(0, ''));

    const update = () => {
        const newRootNode =  new NodeModel(0, '', rootNode.children);
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

    const deleteNode = (nodeId, parentNode = null) => {
        if (parentNode instanceof NodeModel) {
            parentNode.children = parentNode.children.filter((child) => child.id !== nodeId);
        }
        else {
            rootNode.children = rootNode.children.filter((child) => child.id !== nodeId);
        }

        update();
    }

    const editNode = (node, newNodeName) => {
        if (node instanceof NodeModel) {
            node.name = newNodeName;
        }

        update();
    }

    const resetTree = () => {
        const newRootNode = new NodeModel(0, '');
        setRootNode(newRootNode);
    }

    return { rootNode, addNode, deleteNode, editNode, resetTree };
}