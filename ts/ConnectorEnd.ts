/**
 * Implementation class for ConnectorEnd
 * 
 * @since UML 2.5
 * @package uml
 * @extends MultiplicityElement
 */
import { IComment } from './IComment';
import { IConnectableElement } from './IConnectableElement';
import { IConnectorEnd } from './IConnectorEnd';
import { IMultiplicityElement } from './IMultiplicityElement';
import { IProperty } from './IProperty';
import { IValueSpecification } from './IValueSpecification';
import { MultiplicityElement } from './MultiplicityElement';
import { ValidationError, ValidationResult } from './ValidationTypes';
import { ValueSpecification } from './ValueSpecification';

export class ConnectorEnd extends MultiplicityElement implements IConnectorEnd {
  /**
   * partWithPort
   * 
   * @type Property
   * @multiplicity [0..1]
   * @relationship cross-reference
   */
  public partWithPort?: string;

  /**
   * role
   * 
   * @type ConnectableElement
   * @multiplicity [1..1]
   * @relationship cross-reference
   */
  public role!: string;

  /**
   * ownedComment
   * 
   * @type Comment
   * @multiplicity [0..*]
   * @relationship containment
   */
  public ownedComment: Set<IComment> = new Set();

  /**
   * isOrdered
   * 
   * @type Boolean
   * @multiplicity [1..1]
   */
  public isOrdered!: boolean;

  /**
   * isUnique
   * 
   * @type Boolean
   * @multiplicity [1..1]
   */
  public isUnique!: boolean;

  /**
   * lowerValue
   * 
   * @type ValueSpecification
   * @multiplicity [0..1]
   * @relationship containment
   */
  public lowerValue?: IValueSpecification;

  /**
   * upperValue
   * 
   * @type ValueSpecification
   * @multiplicity [0..1]
   * @relationship containment
   */
  public upperValue?: IValueSpecification;


  constructor(init?: Partial<IConnectorEnd>) {
    super(init);

    this.partWithPort = init?.partWithPort;
    this.role = init?.role ?? '';
  }
  getPartWithPort(): string | undefined {
    return this.partWithPort;
  }

  setPartWithPort(value: string | undefined): void {
    this.partWithPort = value;
  }

  getRole(): string {
    return this.role;
  }

  setRole(value: string): void {
    this.role = value;
  }

  /**
   * Converts this instance to a plain object matching the interface
   */
  toJSON(): IConnectorEnd {
    const parentJson = super.toJSON();
    return {
      ...parentJson,
      ...(this.partWithPort !== undefined && { partWithPort: this.partWithPort }),
      role: this.role,
    };
  }

  /**
   * Converts this instance to a JSON-serializable object
   * (Sets are converted to Arrays for JSON compatibility)
   */
  toJSONSerialized(): any {
    const parentJson = super.toJSONSerialized() ? super.toJSONSerialized() : super.toJSON();
    const result: any = { ...parentJson };

    if (this.partWithPort !== undefined) {
      result.partWithPort = this.partWithPort;
    }
    result.role = this.role;

    return result;
  }

  /**
   * Creates a shallow copy of this instance
   */
  clone(): ConnectorEnd {
    return new ConnectorEnd(this);
  }

  /**
   * Updates this instance with values from another object
   */
  update(values: Partial<IConnectorEnd>): void {
    Object.assign(this, values);
  }

  /**
   * Checks if this instance equals another object
   */
  equals(other: any): boolean {
    if (!(other instanceof ConnectorEnd)) {
      return false;
    }
    return JSON.stringify(this.toJSONSerialized()) === JSON.stringify(other.toJSONSerialized());
  }

  /**
   * Returns a string representation of this instance
   */
  toString(): string {
    return `ConnectorEnd{${Object.keys(this).length} properties}`;
  }

  /**
   * Creates an instance from a JSON-serialized object
   */
  static fromJSON(json: any): ConnectorEnd {
    const instance = new ConnectorEnd();

    if (json.ownedComment && Array.isArray(json.ownedComment)) {
      instance.ownedComment = new Set(json.ownedComment);
    }
    instance.isOrdered = json.isOrdered;
    instance.isUnique = json.isUnique;
    if (json.lowerValue !== undefined) {
      instance.lowerValue = json.lowerValue;
    }
    if (json.upperValue !== undefined) {
      instance.upperValue = json.upperValue;
    }
    if (json.partWithPort !== undefined) {
      instance.partWithPort = json.partWithPort;
    }
    instance.role = json.role;

    return instance;
  }

  /**
   * Validates this instance against UML constraints
   */
  validate(): ValidationResult {
    const errors: ValidationError[] = [];
    if (this.ownedComment) {
    }
    if (this.isOrdered == null) {
      errors.push({
        property: 'isOrdered',
        message: 'isOrdered is required',
        code: 'REQUIRED'
      });
    }
    if (this.isOrdered !== undefined) {
      if (typeof this.isOrdered !== 'boolean') {
        errors.push({
          property: 'isOrdered',
          message: 'isOrdered must be a boolean',
          code: 'TYPE_ERROR',
          value: this.isOrdered
        });
      }
    }
    if (this.isUnique == null) {
      errors.push({
        property: 'isUnique',
        message: 'isUnique is required',
        code: 'REQUIRED'
      });
    }
    if (this.isUnique !== undefined) {
      if (typeof this.isUnique !== 'boolean') {
        errors.push({
          property: 'isUnique',
          message: 'isUnique must be a boolean',
          code: 'TYPE_ERROR',
          value: this.isUnique
        });
      }
    }
    if (this.role == null) {
      errors.push({
        property: 'role',
        message: 'role is required',
        code: 'REQUIRED'
      });
    }
    // Validate inherited properties
    const parentResult = super.validate();
    errors.push(...parentResult.errors);
    return { isValid: errors.length === 0, errors };
  }

  static validate(instance: IConnectorEnd): ValidationResult {
    if (instance instanceof ConnectorEnd) {
      return instance.validate();
    }
    // Validate plain object
    const temp = new ConnectorEnd(instance);
    return temp.validate();
  }
}
