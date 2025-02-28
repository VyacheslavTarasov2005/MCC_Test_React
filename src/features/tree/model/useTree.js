import { useState } from "react";
import { NodeModel } from "./nodeModel";

export const UseTree = () => {
    const [rootNode, setRootNode] = useState(new NodeModel(0, ''));

    const addNode = (nodeName, parentNode = null) => {
        if (parentNode instanceof NodeModel) {
            parentNode.addChild(nodeName)
        }
        else {
            rootNode.addChild(nodeName)
        }

        const newRootNode = new NodeModel(0, '', undefined, rootNode.children);
        setRootNode(newRootNode);
    }

    return { rootNode, addNode }
}