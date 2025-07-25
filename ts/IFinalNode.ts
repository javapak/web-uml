/**
 * Interface for FinalNode
 * 
 * @since UML 2.5
 * @package uml
 * @abstract
 * @extends ControlNode
 */
import { IActivityFinalNode } from './IActivityFinalNode';
import { IControlNode } from './IControlNode';
import { IFlowFinalNode } from './IFlowFinalNode';

export interface IFinalNode extends IControlNode {
}

// Type aliases for FinalNode
export type FinalNodeInput = Partial<IFinalNode>;
export type FinalNodeOutput = IFinalNode;
export type FinalNodeUnion = IFinalNode | IActivityFinalNode | IFlowFinalNode;
