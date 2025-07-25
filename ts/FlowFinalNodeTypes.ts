import { FlowFinalNode } from './FlowFinalNode';
import { IFinalNode } from './IFinalNode';
import { IFlowFinalNode } from './IFlowFinalNode';
import { ValidationResult } from './ValidationTypes';

/**
 * Utility types for FlowFinalNode
 */
export type PartialFlowFinalNode = Partial<IFlowFinalNode>;
export type RequiredFlowFinalNode = Required<IFlowFinalNode>;
export type FlowFinalNodeUnion = IFlowFinalNode | IFinalNode;
export type FlowFinalNodeFactory = () => FlowFinalNode;
export type FlowFinalNodeValidator = (instance: IFlowFinalNode) => ValidationResult;
