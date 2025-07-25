import { IConstraint } from './IConstraint';
import { IInteractionConstraint } from './IInteractionConstraint';
import { IValueSpecification } from './IValueSpecification';
import { InteractionConstraint } from './InteractionConstraint';
import { ValidationResult } from './ValidationTypes';

/**
 * Utility types for InteractionConstraint
 */
export type PartialInteractionConstraint = Partial<IInteractionConstraint>;
export type RequiredInteractionConstraint = Required<IInteractionConstraint>;
export type InteractionConstraintUnion = IInteractionConstraint | IConstraint;
export type InteractionConstraintFactory = () => InteractionConstraint;
export type InteractionConstraintValidator = (instance: IInteractionConstraint) => ValidationResult;
