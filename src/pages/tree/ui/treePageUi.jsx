import { Layout } from "../../../app/layout";
import { NodeUi, AddNodeUi, UseTree } from '../../../features/tree'

export const TreePageUi = () => {
    const { rootNode, addNode, deleteNode } = UseTree();

    return (
        <Layout>
            <div className='tree'>
                <AddNodeUi addNode={addNode}/>
                <ul>
                    {rootNode.children.map((child) => (
                        <NodeUi
                            key={child.id}
                            node={child}
                            text={child.name}
                            addNode={addNode}
                            deleteNode={deleteNode}
                        />
                    ))}
                </ul>
            </div>
        </Layout>
    )
}