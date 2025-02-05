/*
 * This is a generated file
 * Do not edit manually.
 */

import { Address } from './Address';
import { Age } from './Age';
import { Annotation } from './Annotation';
import { Attachment } from './Attachment';
import { CodeableConcept } from './CodeableConcept';
import { Coding } from './Coding';
import { ContactDetail } from './ContactDetail';
import { ContactPoint } from './ContactPoint';
import { Contributor } from './Contributor';
import { Count } from './Count';
import { DataRequirement } from './DataRequirement';
import { Distance } from './Distance';
import { Dosage } from './Dosage';
import { Duration } from './Duration';
import { Expression } from './Expression';
import { HumanName } from './HumanName';
import { Identifier } from './Identifier';
import { Meta } from './Meta';
import { Money } from './Money';
import { ParameterDefinition } from './ParameterDefinition';
import { Period } from './Period';
import { Quantity } from './Quantity';
import { Range } from './Range';
import { Ratio } from './Ratio';
import { Reference } from './Reference';
import { RelatedArtifact } from './RelatedArtifact';
import { SampledData } from './SampledData';
import { Signature } from './Signature';
import { Timing } from './Timing';
import { TriggerDefinition } from './TriggerDefinition';
import { UsageContext } from './UsageContext';

/**
 * Optional Extension Element - found in all resources.
 */
export interface Extension {

  /**
   * Unique id for the element within a resource (for internal references).
   * This may be any string value that does not contain spaces.
   */
  id?: string;

  /**
   * May be used to represent additional information that is not part of
   * the basic definition of the element. To make the use of extensions
   * safe and manageable, there is a strict set of governance  applied to
   * the definition and use of extensions. Though any implementer can
   * define an extension, there is a set of requirements that SHALL be met
   * as part of the definition of the extension.
   */
  extension?: Extension[];

  /**
   * Source of the definition for the extension code - a logical name or a
   * URL.
   */
  url: string;

  /**
   * Value of extension - must be one of a constrained set of the data
   * types (see [Extensibility](extensibility.html) for a list).
   */
  valueBase64Binary?: string;

  /**
   * Value of extension - must be one of a constrained set of the data
   * types (see [Extensibility](extensibility.html) for a list).
   */
  valueBoolean?: boolean;

  /**
   * Value of extension - must be one of a constrained set of the data
   * types (see [Extensibility](extensibility.html) for a list).
   */
  valueCanonical?: string;

  /**
   * Value of extension - must be one of a constrained set of the data
   * types (see [Extensibility](extensibility.html) for a list).
   */
  valueCode?: string;

  /**
   * Value of extension - must be one of a constrained set of the data
   * types (see [Extensibility](extensibility.html) for a list).
   */
  valueDate?: string;

  /**
   * Value of extension - must be one of a constrained set of the data
   * types (see [Extensibility](extensibility.html) for a list).
   */
  valueDateTime?: string;

  /**
   * Value of extension - must be one of a constrained set of the data
   * types (see [Extensibility](extensibility.html) for a list).
   */
  valueDecimal?: number;

  /**
   * Value of extension - must be one of a constrained set of the data
   * types (see [Extensibility](extensibility.html) for a list).
   */
  valueId?: string;

  /**
   * Value of extension - must be one of a constrained set of the data
   * types (see [Extensibility](extensibility.html) for a list).
   */
  valueInstant?: string;

  /**
   * Value of extension - must be one of a constrained set of the data
   * types (see [Extensibility](extensibility.html) for a list).
   */
  valueInteger?: number;

  /**
   * Value of extension - must be one of a constrained set of the data
   * types (see [Extensibility](extensibility.html) for a list).
   */
  valueMarkdown?: string;

  /**
   * Value of extension - must be one of a constrained set of the data
   * types (see [Extensibility](extensibility.html) for a list).
   */
  valueOid?: string;

  /**
   * Value of extension - must be one of a constrained set of the data
   * types (see [Extensibility](extensibility.html) for a list).
   */
  valuePositiveInt?: number;

  /**
   * Value of extension - must be one of a constrained set of the data
   * types (see [Extensibility](extensibility.html) for a list).
   */
  valueString?: string;

  /**
   * Value of extension - must be one of a constrained set of the data
   * types (see [Extensibility](extensibility.html) for a list).
   */
  valueTime?: string;

  /**
   * Value of extension - must be one of a constrained set of the data
   * types (see [Extensibility](extensibility.html) for a list).
   */
  valueUnsignedInt?: number;

  /**
   * Value of extension - must be one of a constrained set of the data
   * types (see [Extensibility](extensibility.html) for a list).
   */
  valueUri?: string;

  /**
   * Value of extension - must be one of a constrained set of the data
   * types (see [Extensibility](extensibility.html) for a list).
   */
  valueUrl?: string;

  /**
   * Value of extension - must be one of a constrained set of the data
   * types (see [Extensibility](extensibility.html) for a list).
   */
  valueUuid?: string;

  /**
   * Value of extension - must be one of a constrained set of the data
   * types (see [Extensibility](extensibility.html) for a list).
   */
  valueAddress?: Address;

  /**
   * Value of extension - must be one of a constrained set of the data
   * types (see [Extensibility](extensibility.html) for a list).
   */
  valueAge?: Age;

  /**
   * Value of extension - must be one of a constrained set of the data
   * types (see [Extensibility](extensibility.html) for a list).
   */
  valueAnnotation?: Annotation;

  /**
   * Value of extension - must be one of a constrained set of the data
   * types (see [Extensibility](extensibility.html) for a list).
   */
  valueAttachment?: Attachment;

  /**
   * Value of extension - must be one of a constrained set of the data
   * types (see [Extensibility](extensibility.html) for a list).
   */
  valueCodeableConcept?: CodeableConcept;

  /**
   * Value of extension - must be one of a constrained set of the data
   * types (see [Extensibility](extensibility.html) for a list).
   */
  valueCoding?: Coding;

  /**
   * Value of extension - must be one of a constrained set of the data
   * types (see [Extensibility](extensibility.html) for a list).
   */
  valueContactPoint?: ContactPoint;

  /**
   * Value of extension - must be one of a constrained set of the data
   * types (see [Extensibility](extensibility.html) for a list).
   */
  valueCount?: Count;

  /**
   * Value of extension - must be one of a constrained set of the data
   * types (see [Extensibility](extensibility.html) for a list).
   */
  valueDistance?: Distance;

  /**
   * Value of extension - must be one of a constrained set of the data
   * types (see [Extensibility](extensibility.html) for a list).
   */
  valueDuration?: Duration;

  /**
   * Value of extension - must be one of a constrained set of the data
   * types (see [Extensibility](extensibility.html) for a list).
   */
  valueHumanName?: HumanName;

  /**
   * Value of extension - must be one of a constrained set of the data
   * types (see [Extensibility](extensibility.html) for a list).
   */
  valueIdentifier?: Identifier;

  /**
   * Value of extension - must be one of a constrained set of the data
   * types (see [Extensibility](extensibility.html) for a list).
   */
  valueMoney?: Money;

  /**
   * Value of extension - must be one of a constrained set of the data
   * types (see [Extensibility](extensibility.html) for a list).
   */
  valuePeriod?: Period;

  /**
   * Value of extension - must be one of a constrained set of the data
   * types (see [Extensibility](extensibility.html) for a list).
   */
  valueQuantity?: Quantity;

  /**
   * Value of extension - must be one of a constrained set of the data
   * types (see [Extensibility](extensibility.html) for a list).
   */
  valueRange?: Range;

  /**
   * Value of extension - must be one of a constrained set of the data
   * types (see [Extensibility](extensibility.html) for a list).
   */
  valueRatio?: Ratio;

  /**
   * Value of extension - must be one of a constrained set of the data
   * types (see [Extensibility](extensibility.html) for a list).
   */
  valueReference?: Reference;

  /**
   * Value of extension - must be one of a constrained set of the data
   * types (see [Extensibility](extensibility.html) for a list).
   */
  valueSampledData?: SampledData;

  /**
   * Value of extension - must be one of a constrained set of the data
   * types (see [Extensibility](extensibility.html) for a list).
   */
  valueSignature?: Signature;

  /**
   * Value of extension - must be one of a constrained set of the data
   * types (see [Extensibility](extensibility.html) for a list).
   */
  valueTiming?: Timing;

  /**
   * Value of extension - must be one of a constrained set of the data
   * types (see [Extensibility](extensibility.html) for a list).
   */
  valueContactDetail?: ContactDetail;

  /**
   * Value of extension - must be one of a constrained set of the data
   * types (see [Extensibility](extensibility.html) for a list).
   */
  valueContributor?: Contributor;

  /**
   * Value of extension - must be one of a constrained set of the data
   * types (see [Extensibility](extensibility.html) for a list).
   */
  valueDataRequirement?: DataRequirement;

  /**
   * Value of extension - must be one of a constrained set of the data
   * types (see [Extensibility](extensibility.html) for a list).
   */
  valueExpression?: Expression;

  /**
   * Value of extension - must be one of a constrained set of the data
   * types (see [Extensibility](extensibility.html) for a list).
   */
  valueParameterDefinition?: ParameterDefinition;

  /**
   * Value of extension - must be one of a constrained set of the data
   * types (see [Extensibility](extensibility.html) for a list).
   */
  valueRelatedArtifact?: RelatedArtifact;

  /**
   * Value of extension - must be one of a constrained set of the data
   * types (see [Extensibility](extensibility.html) for a list).
   */
  valueTriggerDefinition?: TriggerDefinition;

  /**
   * Value of extension - must be one of a constrained set of the data
   * types (see [Extensibility](extensibility.html) for a list).
   */
  valueUsageContext?: UsageContext;

  /**
   * Value of extension - must be one of a constrained set of the data
   * types (see [Extensibility](extensibility.html) for a list).
   */
  valueDosage?: Dosage;

  /**
   * Value of extension - must be one of a constrained set of the data
   * types (see [Extensibility](extensibility.html) for a list).
   */
  valueMeta?: Meta;
}

/**
 * Value of extension - must be one of a constrained set of the data
 * types (see [Extensibility](extensibility.html) for a list).
 */
export type ExtensionValue = Address | Age | Annotation | Attachment | boolean | CodeableConcept | Coding |
    ContactDetail | ContactPoint | Contributor | Count | DataRequirement | Distance | Dosage | Duration | Expression |
    HumanName | Identifier | Meta | Money | number | ParameterDefinition | Period | Quantity | Range | Ratio | Reference |
    RelatedArtifact | SampledData | Signature | string | Timing | TriggerDefinition | UsageContext;
