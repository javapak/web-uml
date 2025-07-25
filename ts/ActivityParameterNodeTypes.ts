import { ActivityParameterNode } from './ActivityParameterNode';
import { IActivityParameterNode } from './IActivityParameterNode';
import { IObjectNode } from './IObjectNode';
import { IParameter } from './IParameter';
import { ValidationResult } from './ValidationTypes';

/**
 * Utility types for ActivityParameterNode
 */
export type PartialActivityParameterNode = Partial<IActivityParameterNode>;
export type RequiredActivityParameterNode = Required<IActivityParameterNode>;
export type ActivityParameterNodeUnion = IActivityParameterNode | IObjectNode;
export type ActivityParameterNodeFactory = () => ActivityParameterNode;
export type ActivityParameterNodeValidator = (instance: IActivityParameterNode) => ValidationResult;
