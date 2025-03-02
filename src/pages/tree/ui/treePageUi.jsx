import { Layout } from "../../../app/layout";
import { NodeUi, AddNodeUi, UseTree, TreeContext } from '../../../features/tree'

export const TreePageUi = () => {
    const { rootNode, addNode, deleteNode, editNode } = UseTree();

    return (
        <TreeContext.Provider value={{ rootNode, addNode, deleteNode, editNode }}>
            <Layout>
                <div className='tree'>
                    <AddNodeUi />
                    <ul>
                        {rootNode.children.map((child) => (
                            <NodeUi
                                key={child.id}
                                node={child}
                                text={child.name}
                            />
                        ))}
                    </ul>
                </div>
            </Layout>
        </TreeContext.Provider>
    )
}