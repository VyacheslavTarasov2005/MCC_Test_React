export class NodeModel {
    constructor(id, name, parent = null, children = []) {
        this.id = id
        this.name = name;
        this.parent = parent;
        this.children = children;
    }

    addChild(nodeName) {
        const child = new NodeModel(this.children.length, nodeName, this);
        this.children.push(child);
    }
}