/**
 * Implementation class for ExpansionRegion
 * 
 * @since UML 2.5
 * @package uml
 * @extends StructuredActivityNode
 */
import { ExpansionKind } from './ExpansionKind';
import { IActivityEdge } from './IActivityEdge';
import { IActivityNode } from './IActivityNode';
import { IActivityPartition } from './IActivityPartition';
import { IComment } from './IComment';
import { IConstraint } from './IConstraint';
import { IElementImport } from './IElementImport';
import { IExceptionHandler } from './IExceptionHandler';
import { IExpansionNode } from './IExpansionNode';
import { IExpansionRegion } from './IExpansionRegion';
import { IInputPin } from './IInputPin';
import { IInterruptibleActivityRegion } from './IInterruptibleActivityRegion';
import { IOutputPin } from './IOutputPin';
import { IPackageImport } from './IPackageImport';
import { IStringExpression } from './IStringExpression';
import { IStructuredActivityNode } from './IStructuredActivityNode';
import { IVariable } from './IVariable';
import { StringExpression } from './StringExpression';
import { StructuredActivityNode } from './StructuredActivityNode';
import { ValidationError, ValidationResult } from './ValidationTypes';
import { VisibilityKind } from './VisibilityKind';

export class ExpansionRegion extends StructuredActivityNode implements IExpansionRegion {
  /**
   * mode
   * 
   * @type ExpansionKind
   * @multiplicity [1..1]
   */
  public mode!: ExpansionKind;

  /**
   * outputElement
   * 
   * @type ExpansionNode
   * @multiplicity [0..*]
   * @relationship cross-reference
   * @opposite regionAsOutput
   */
  public outputElement: Set<string> = new Set();

  /**
   * inputElement
   * 
   * @type ExpansionNode
   * @multiplicity [1..*]
   * @relationship cross-reference
   * @opposite regionAsInput
   */
  public inputElement: Set<string> = new Set();

  /**
   * ownedComment
   * 
   * @type Comment
   * @multiplicity [0..*]
   * @relationship containment
   */
  public ownedComment: Set<IComment> = new Set();

  /**
   * name
   * 
   * @type String
   * @multiplicity [0..1]
   */
  public name?: string;

  /**
   * nameExpression
   * 
   * @type StringExpression
   * @multiplicity [0..1]
   * @relationship containment
   */
  public nameExpression?: IStringExpression;

  /**
   * visibility
   * 
   * @type VisibilityKind
   * @multiplicity [0..1]
   */
  public visibility: VisibilityKind | undefined = undefined;
  /**
   * isLeaf
   * 
   * @type Boolean
   * @multiplicity [1..1]
   */
  public isLeaf!: boolean;

  /**
   * inInterruptibleRegion
   * 
   * @type InterruptibleActivityRegion
   * @multiplicity [0..*]
   * @relationship cross-reference
   * @opposite node
   */
  public inInterruptibleRegion: Set<string> = new Set();

  /**
   * inStructuredNode
   * 
   * @type StructuredActivityNode
   * @multiplicity [0..1]
   * @relationship cross-reference
   * @opposite node
   */
  public inStructuredNode?: string;

  /**
   * incoming
   * 
   * @type ActivityEdge
   * @multiplicity [0..*]
   * @relationship cross-reference
   * @opposite target
   */
  public incoming: Set<string> = new Set();

  /**
   * outgoing
   * 
   * @type ActivityEdge
   * @multiplicity [0..*]
   * @relationship cross-reference
   * @opposite source
   */
  public outgoing: Set<string> = new Set();

  /**
   * redefinedNode
   * 
   * @type ActivityNode
   * @multiplicity [0..*]
   * @relationship cross-reference
   */
  public redefinedNode: Set<string> = new Set();

  /**
   * inPartition
   * 
   * @type ActivityPartition
   * @multiplicity [0..*]
   * @relationship cross-reference
   * @opposite node
   */
  public inPartition: Set<string> = new Set();

  /**
   * handler
   * 
   * @type ExceptionHandler
   * @multiplicity [0..*]
   * @relationship containment
   * @opposite protectedNode
   */
  public handler: Set<IExceptionHandler> = new Set();

  /**
   * isLocallyReentrant
   * 
   * @type Boolean
   * @multiplicity [1..1]
   */
  public isLocallyReentrant!: boolean;

  /**
   * localPostcondition
   * 
   * @type Constraint
   * @multiplicity [0..*]
   * @relationship containment
   */
  public localPostcondition: Set<IConstraint> = new Set();

  /**
   * localPrecondition
   * 
   * @type Constraint
   * @multiplicity [0..*]
   * @relationship containment
   */
  public localPrecondition: Set<IConstraint> = new Set();

  /**
   * ownedRule
   * 
   * @type Constraint
   * @multiplicity [0..*]
   * @relationship containment
   * @opposite context
   */
  public ownedRule: Set<IConstraint> = new Set();

  /**
   * elementImport
   * 
   * @type ElementImport
   * @multiplicity [0..*]
   * @relationship containment
   * @opposite importingNamespace
   */
  public elementImport: Set<IElementImport> = new Set();

  /**
   * packageImport
   * 
   * @type PackageImport
   * @multiplicity [0..*]
   * @relationship containment
   * @opposite importingNamespace
   */
  public packageImport: Set<IPackageImport> = new Set();

  /**
   * edge
   * 
   * @type ActivityEdge
   * @multiplicity [0..*]
   * @relationship containment
   * @opposite inStructuredNode
   */
  public edge: Set<IActivityEdge> = new Set();

  /**
   * mustIsolate
   * 
   * @type Boolean
   * @multiplicity [1..1]
   */
  public mustIsolate!: boolean;

  /**
   * structuredNodeInput
   * 
   * @type InputPin
   * @multiplicity [0..*]
   * @relationship containment
   */
  public structuredNodeInput: Set<IInputPin> = new Set();

  /**
   * structuredNodeOutput
   * 
   * @type OutputPin
   * @multiplicity [0..*]
   * @relationship containment
   */
  public structuredNodeOutput: Set<IOutputPin> = new Set();

  /**
   * variable
   * 
   * @type Variable
   * @multiplicity [0..*]
   * @relationship containment
   * @opposite scope
   */
  public variable: Set<IVariable> = new Set();

  /**
   * node
   * 
   * @type ActivityNode
   * @multiplicity [0..*]
   * @relationship containment
   * @opposite inStructuredNode
   */
  public node: Set<IActivityNode> = new Set();


  constructor(init?: Partial<IExpansionRegion>) {
    super(init);

    this.mode = init?.mode!;
    this.outputElement = init?.outputElement ? new Set(init.outputElement) : new Set();
    this.inputElement = init?.inputElement ? new Set(init.inputElement) : new Set();
  }
  getMode(): ExpansionKind {
    return this.mode;
  }

  setMode(value: ExpansionKind): void {
    this.mode = value;
  }

  getOutputElement(): Set<string> {
    return this.outputElement;
  }

  setOutputElement(value: Set<string>): void {
    this.outputElement = value;
  }

  getInputElement(): Set<string> {
    return this.inputElement;
  }

  setInputElement(value: Set<string>): void {
    this.inputElement = value;
  }

  /**
   * Converts this instance to a plain object matching the interface
   */
  toJSON(): IExpansionRegion {
    const parentJson = super.toJSON();
    return {
      ...parentJson,
      mode: this.mode,
      outputElement: this.outputElement,
      inputElement: this.inputElement,
    };
  }

  /**
   * Converts this instance to a JSON-serializable object
   * (Sets are converted to Arrays for JSON compatibility)
   */
  toJSONSerialized(): any {
    const parentJson = super.toJSONSerialized() ? super.toJSONSerialized() : super.toJSON();
    const result: any = { ...parentJson };

    result.mode = this.mode;
    result.outputElement = Array.from(this.outputElement);
    result.inputElement = Array.from(this.inputElement);

    return result;
  }

  /**
   * Creates a shallow copy of this instance
   */
  clone(): ExpansionRegion {
    return new ExpansionRegion(this);
  }

  /**
   * Updates this instance with values from another object
   */
  update(values: Partial<IExpansionRegion>): void {
    Object.assign(this, values);
  }

  /**
   * Checks if this instance equals another object
   */
  equals(other: any): boolean {
    if (!(other instanceof ExpansionRegion)) {
      return false;
    }
    return JSON.stringify(this.toJSONSerialized()) === JSON.stringify(other.toJSONSerialized());
  }

  /**
   * Returns a string representation of this instance
   */
  toString(): string {
    return `ExpansionRegion{name: ${this.name || 'unnamed'}}`;
  }

  /**
   * Creates an instance from a JSON-serialized object
   */
  static fromJSON(json: any): ExpansionRegion {
    const instance = new ExpansionRegion();

    if (json.ownedComment && Array.isArray(json.ownedComment)) {
      instance.ownedComment = new Set(json.ownedComment);
    }
    if (json.name !== undefined) {
      instance.name = json.name;
    }
    if (json.nameExpression !== undefined) {
      instance.nameExpression = json.nameExpression;
    }
    if (json.visibility !== undefined) {
      instance.visibility = json.visibility;
    }
    instance.isLeaf = json.isLeaf;
    if (json.inInterruptibleRegion && Array.isArray(json.inInterruptibleRegion)) {
      instance.inInterruptibleRegion = new Set(json.inInterruptibleRegion);
    }
    if (json.inStructuredNode !== undefined) {
      instance.inStructuredNode = json.inStructuredNode;
    }
    if (json.incoming && Array.isArray(json.incoming)) {
      instance.incoming = new Set(json.incoming);
    }
    if (json.outgoing && Array.isArray(json.outgoing)) {
      instance.outgoing = new Set(json.outgoing);
    }
    if (json.redefinedNode && Array.isArray(json.redefinedNode)) {
      instance.redefinedNode = new Set(json.redefinedNode);
    }
    if (json.inPartition && Array.isArray(json.inPartition)) {
      instance.inPartition = new Set(json.inPartition);
    }
    if (json.handler && Array.isArray(json.handler)) {
      instance.handler = new Set(json.handler);
    }
    instance.isLocallyReentrant = json.isLocallyReentrant;
    if (json.localPostcondition && Array.isArray(json.localPostcondition)) {
      instance.localPostcondition = new Set(json.localPostcondition);
    }
    if (json.localPrecondition && Array.isArray(json.localPrecondition)) {
      instance.localPrecondition = new Set(json.localPrecondition);
    }
    if (json.ownedRule && Array.isArray(json.ownedRule)) {
      instance.ownedRule = new Set(json.ownedRule);
    }
    if (json.elementImport && Array.isArray(json.elementImport)) {
      instance.elementImport = new Set(json.elementImport);
    }
    if (json.packageImport && Array.isArray(json.packageImport)) {
      instance.packageImport = new Set(json.packageImport);
    }
    if (json.edge && Array.isArray(json.edge)) {
      instance.edge = new Set(json.edge);
    }
    instance.mustIsolate = json.mustIsolate;
    if (json.structuredNodeInput && Array.isArray(json.structuredNodeInput)) {
      instance.structuredNodeInput = new Set(json.structuredNodeInput);
    }
    if (json.structuredNodeOutput && Array.isArray(json.structuredNodeOutput)) {
      instance.structuredNodeOutput = new Set(json.structuredNodeOutput);
    }
    if (json.variable && Array.isArray(json.variable)) {
      instance.variable = new Set(json.variable);
    }
    if (json.node && Array.isArray(json.node)) {
      instance.node = new Set(json.node);
    }
    instance.mode = json.mode;
    if (json.outputElement && Array.isArray(json.outputElement)) {
      instance.outputElement = new Set(json.outputElement);
    }
    if (json.inputElement && Array.isArray(json.inputElement)) {
      instance.inputElement = new Set(json.inputElement);
    }

    return instance;
  }

  /**
   * Validates this instance against UML constraints
   */
  validate(): ValidationResult {
    const errors: ValidationError[] = [];
    if (this.ownedComment) {
    }
    if (this.name !== undefined) {
      if (typeof this.name !== 'string') {
        errors.push({
          property: 'name',
          message: 'name must be a string',
          code: 'TYPE_ERROR',
          value: this.name
        });
      }
    }
    if (this.visibility !== undefined) {
    }
    if (this.isLeaf == null) {
      errors.push({
        property: 'isLeaf',
        message: 'isLeaf is required',
        code: 'REQUIRED'
      });
    }
    if (this.isLeaf !== undefined) {
      if (typeof this.isLeaf !== 'boolean') {
        errors.push({
          property: 'isLeaf',
          message: 'isLeaf must be a boolean',
          code: 'TYPE_ERROR',
          value: this.isLeaf
        });
      }
    }
    if (this.inInterruptibleRegion) {
    }
    if (this.incoming) {
    }
    if (this.outgoing) {
    }
    if (this.redefinedNode) {
    }
    if (this.inPartition) {
    }
    if (this.handler) {
    }
    if (this.isLocallyReentrant == null) {
      errors.push({
        property: 'isLocallyReentrant',
        message: 'isLocallyReentrant is required',
        code: 'REQUIRED'
      });
    }
    if (this.isLocallyReentrant !== undefined) {
      if (typeof this.isLocallyReentrant !== 'boolean') {
        errors.push({
          property: 'isLocallyReentrant',
          message: 'isLocallyReentrant must be a boolean',
          code: 'TYPE_ERROR',
          value: this.isLocallyReentrant
        });
      }
    }
    if (this.localPostcondition) {
    }
    if (this.localPrecondition) {
    }
    if (this.ownedRule) {
    }
    if (this.elementImport) {
    }
    if (this.packageImport) {
    }
    if (this.edge) {
    }
    if (this.mustIsolate == null) {
      errors.push({
        property: 'mustIsolate',
        message: 'mustIsolate is required',
        code: 'REQUIRED'
      });
    }
    if (this.mustIsolate !== undefined) {
      if (typeof this.mustIsolate !== 'boolean') {
        errors.push({
          property: 'mustIsolate',
          message: 'mustIsolate must be a boolean',
          code: 'TYPE_ERROR',
          value: this.mustIsolate
        });
      }
    }
    if (this.structuredNodeInput) {
    }
    if (this.structuredNodeOutput) {
    }
    if (this.variable) {
    }
    if (this.node) {
    }
    if (this.mode == null) {
      errors.push({
        property: 'mode',
        message: 'mode is required',
        code: 'REQUIRED'
      });
    }
    if (this.mode !== undefined) {
    }
    if (this.outputElement) {
    }
    if (this.inputElement == null) {
      errors.push({
        property: 'inputElement',
        message: 'inputElement is required',
        code: 'REQUIRED'
      });
    }
    if (this.inputElement) {
      if (Array.from(this.inputElement).length < 1) {
        errors.push({
          property: 'inputElement',
          message: 'inputElement must have at least 1 elements',
          code: 'MIN_LENGTH'
        });
      }
    }
    // Validate inherited properties
    const parentResult = super.validate();
    errors.push(...parentResult.errors);
    return { isValid: errors.length === 0, errors };
  }

  static validate(instance: IExpansionRegion): ValidationResult {
    if (instance instanceof ExpansionRegion) {
      return instance.validate();
    }
    // Validate plain object
    const temp = new ExpansionRegion(instance);
    return temp.validate();
  }
}
