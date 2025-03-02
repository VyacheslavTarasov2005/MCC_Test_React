import { Layout } from "../../../app/layout";
import { NodeUi, AddNodeUi, UseTree, TreeContext } from '../../../features/tree'
import restartIcon from '../../../shared/assets/images/restart.svg'
import {ButtonUi} from "../../../shared/ui/index.js";

export const TreePageUi = () => {
    const { rootNode, addNode, deleteNode, editNode, resetTree } = UseTree();

    return (
        <TreeContext.Provider value={{ rootNode, addNode, deleteNode, editNode, resetTree }}>
            <Layout>
                <div className='tree'>
                    <div className='tree-header'>
                        <AddNodeUi />
                        <ButtonUi
                            className='reset-button'
                            type='button'
                            onClick={() => {resetTree()}}
                        >
                            <img
                                src={restartIcon}
                                className='restart-icon'
                                alt='reset'
                            />
                        </ButtonUi>
                    </div>
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