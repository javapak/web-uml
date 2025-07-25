/**
 * Interface for IntervalConstraint
 * 
 * @since UML 2.5
 * @package uml
 * @extends Constraint
 */
import { IConstraint } from './IConstraint';
import { IDurationConstraint } from './IDurationConstraint';
import { ITimeConstraint } from './ITimeConstraint';

export interface IIntervalConstraint extends IConstraint {
}

// Type aliases for IntervalConstraint
export type IntervalConstraintInput = Partial<IIntervalConstraint>;
export type IntervalConstraintOutput = IIntervalConstraint;
export type IntervalConstraintUnion = IIntervalConstraint | IDurationConstraint | ITimeConstraint;
