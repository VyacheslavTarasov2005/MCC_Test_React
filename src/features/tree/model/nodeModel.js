import { nextNodeId } from "./nextNodeId";

export class NodeModel {
    constructor(id, name, children = []) {
        this.id = id
        this.name = name;
        this.children = children;
    }

    addChild(nodeName) {
        const child = new NodeModel(nextNodeId.value, nodeName);
        nextNodeId.value++;
        this.children.push(child);
    }
}