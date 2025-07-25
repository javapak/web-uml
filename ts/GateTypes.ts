import { Gate } from './Gate';
import { IGate } from './IGate';
import { IMessageEnd } from './IMessageEnd';
import { ValidationResult } from './ValidationTypes';

/**
 * Utility types for Gate
 */
export type PartialGate = Partial<IGate>;
export type RequiredGate = Required<IGate>;
export type GateUnion = IGate | IMessageEnd;
export type GateFactory = () => Gate;
export type GateValidator = (instance: IGate) => ValidationResult;
