import { CallBehaviorAction } from './CallBehaviorAction';
import { IBehavior } from './IBehavior';
import { ICallAction } from './ICallAction';
import { ICallBehaviorAction } from './ICallBehaviorAction';
import { ValidationResult } from './ValidationTypes';

/**
 * Utility types for CallBehaviorAction
 */
export type PartialCallBehaviorAction = Partial<ICallBehaviorAction>;
export type RequiredCallBehaviorAction = Required<ICallBehaviorAction>;
export type CallBehaviorActionUnion = ICallBehaviorAction | ICallAction;
export type CallBehaviorActionFactory = () => CallBehaviorAction;
export type CallBehaviorActionValidator = (instance: ICallBehaviorAction) => ValidationResult;
