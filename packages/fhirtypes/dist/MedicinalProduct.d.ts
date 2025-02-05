/*
 * This is a generated file
 * Do not edit manually.
 */

import { CodeableConcept } from './CodeableConcept';
import { Coding } from './Coding';
import { DocumentReference } from './DocumentReference';
import { Extension } from './Extension';
import { Identifier } from './Identifier';
import { MarketingStatus } from './MarketingStatus';
import { MedicinalProductIndication } from './MedicinalProductIndication';
import { MedicinalProductPackaged } from './MedicinalProductPackaged';
import { MedicinalProductPharmaceutical } from './MedicinalProductPharmaceutical';
import { Meta } from './Meta';
import { Narrative } from './Narrative';
import { Organization } from './Organization';
import { PractitionerRole } from './PractitionerRole';
import { Reference } from './Reference';
import { ResearchStudy } from './ResearchStudy';
import { Resource } from './Resource';

/**
 * Detailed definition of a medicinal product, typically for uses other
 * than direct patient care (e.g. regulatory use).
 */
export interface MedicinalProduct {

  /**
   * This is a MedicinalProduct resource
   */
  readonly resourceType: 'MedicinalProduct';

  /**
   * The logical id of the resource, as used in the URL for the resource.
   * Once assigned, this value never changes.
   */
  id?: string;

  /**
   * The metadata about the resource. This is content that is maintained by
   * the infrastructure. Changes to the content might not always be
   * associated with version changes to the resource.
   */
  meta?: Meta;

  /**
   * A reference to a set of rules that were followed when the resource was
   * constructed, and which must be understood when processing the content.
   * Often, this is a reference to an implementation guide that defines the
   * special rules along with other profiles etc.
   */
  implicitRules?: string;

  /**
   * The base language in which the resource is written.
   */
  language?: string;

  /**
   * A human-readable narrative that contains a summary of the resource and
   * can be used to represent the content of the resource to a human. The
   * narrative need not encode all the structured data, but is required to
   * contain sufficient detail to make it &quot;clinically safe&quot; for a human to
   * just read the narrative. Resource definitions may define what content
   * should be represented in the narrative to ensure clinical safety.
   */
  text?: Narrative;

  /**
   * These resources do not have an independent existence apart from the
   * resource that contains them - they cannot be identified independently,
   * and nor can they have their own independent transaction scope.
   */
  contained?: Resource[];

  /**
   * May be used to represent additional information that is not part of
   * the basic definition of the resource. To make the use of extensions
   * safe and manageable, there is a strict set of governance  applied to
   * the definition and use of extensions. Though any implementer can
   * define an extension, there is a set of requirements that SHALL be met
   * as part of the definition of the extension.
   */
  extension?: Extension[];

  /**
   * May be used to represent additional information that is not part of
   * the basic definition of the resource and that modifies the
   * understanding of the element that contains it and/or the understanding
   * of the containing element's descendants. Usually modifier elements
   * provide negation or qualification. To make the use of extensions safe
   * and manageable, there is a strict set of governance applied to the
   * definition and use of extensions. Though any implementer is allowed to
   * define an extension, there is a set of requirements that SHALL be met
   * as part of the definition of the extension. Applications processing a
   * resource are required to check for modifier extensions.
   *
   * Modifier extensions SHALL NOT change the meaning of any elements on
   * Resource or DomainResource (including cannot change the meaning of
   * modifierExtension itself).
   */
  modifierExtension?: Extension[];

  /**
   * Business identifier for this product. Could be an MPID.
   */
  identifier?: Identifier[];

  /**
   * Regulatory type, e.g. Investigational or Authorized.
   */
  type?: CodeableConcept;

  /**
   * If this medicine applies to human or veterinary uses.
   */
  domain?: Coding;

  /**
   * The dose form for a single part product, or combined form of a
   * multiple part product.
   */
  combinedPharmaceuticalDoseForm?: CodeableConcept;

  /**
   * The legal status of supply of the medicinal product as classified by
   * the regulator.
   */
  legalStatusOfSupply?: CodeableConcept;

  /**
   * Whether the Medicinal Product is subject to additional monitoring for
   * regulatory reasons.
   */
  additionalMonitoringIndicator?: CodeableConcept;

  /**
   * Whether the Medicinal Product is subject to special measures for
   * regulatory reasons.
   */
  specialMeasures?: string[];

  /**
   * If authorised for use in children.
   */
  paediatricUseIndicator?: CodeableConcept;

  /**
   * Allows the product to be classified by various systems.
   */
  productClassification?: CodeableConcept[];

  /**
   * Marketing status of the medicinal product, in contrast to marketing
   * authorizaton.
   */
  marketingStatus?: MarketingStatus[];

  /**
   * Pharmaceutical aspects of product.
   */
  pharmaceuticalProduct?: Reference<MedicinalProductPharmaceutical>[];

  /**
   * Package representation for the product.
   */
  packagedMedicinalProduct?: Reference<MedicinalProductPackaged>[];

  /**
   * Supporting documentation, typically for regulatory submission.
   */
  attachedDocument?: Reference<DocumentReference>[];

  /**
   * A master file for to the medicinal product (e.g. Pharmacovigilance
   * System Master File).
   */
  masterFile?: Reference<DocumentReference>[];

  /**
   * A product specific contact, person (in a role), or an organization.
   */
  contact?: Reference<Organization | PractitionerRole>[];

  /**
   * Clinical trials or studies that this product is involved in.
   */
  clinicalTrial?: Reference<ResearchStudy>[];

  /**
   * The product's name, including full name and possibly coded parts.
   */
  name: MedicinalProductName[];

  /**
   * Reference to another product, e.g. for linking authorised to
   * investigational product.
   */
  crossReference?: Identifier[];

  /**
   * An operation applied to the product, for manufacturing or
   * adminsitrative purpose.
   */
  manufacturingBusinessOperation?: MedicinalProductManufacturingBusinessOperation[];

  /**
   * Indicates if the medicinal product has an orphan designation for the
   * treatment of a rare disease.
   */
  specialDesignation?: MedicinalProductSpecialDesignation[];
}

/**
 * An operation applied to the product, for manufacturing or
 * adminsitrative purpose.
 */
export interface MedicinalProductManufacturingBusinessOperation {

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
   * May be used to represent additional information that is not part of
   * the basic definition of the element and that modifies the
   * understanding of the element in which it is contained and/or the
   * understanding of the containing element's descendants. Usually
   * modifier elements provide negation or qualification. To make the use
   * of extensions safe and manageable, there is a strict set of governance
   * applied to the definition and use of extensions. Though any
   * implementer can define an extension, there is a set of requirements
   * that SHALL be met as part of the definition of the extension.
   * Applications processing a resource are required to check for modifier
   * extensions.
   *
   * Modifier extensions SHALL NOT change the meaning of any elements on
   * Resource or DomainResource (including cannot change the meaning of
   * modifierExtension itself).
   */
  modifierExtension?: Extension[];

  /**
   * The type of manufacturing operation.
   */
  operationType?: CodeableConcept;

  /**
   * Regulatory authorization reference number.
   */
  authorisationReferenceNumber?: Identifier;

  /**
   * Regulatory authorization date.
   */
  effectiveDate?: string;

  /**
   * To indicate if this proces is commercially confidential.
   */
  confidentialityIndicator?: CodeableConcept;

  /**
   * The manufacturer or establishment associated with the process.
   */
  manufacturer?: Reference<Organization>[];

  /**
   * A regulator which oversees the operation.
   */
  regulator?: Reference<Organization>;
}

/**
 * The product's name, including full name and possibly coded parts.
 */
export interface MedicinalProductName {

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
   * May be used to represent additional information that is not part of
   * the basic definition of the element and that modifies the
   * understanding of the element in which it is contained and/or the
   * understanding of the containing element's descendants. Usually
   * modifier elements provide negation or qualification. To make the use
   * of extensions safe and manageable, there is a strict set of governance
   * applied to the definition and use of extensions. Though any
   * implementer can define an extension, there is a set of requirements
   * that SHALL be met as part of the definition of the extension.
   * Applications processing a resource are required to check for modifier
   * extensions.
   *
   * Modifier extensions SHALL NOT change the meaning of any elements on
   * Resource or DomainResource (including cannot change the meaning of
   * modifierExtension itself).
   */
  modifierExtension?: Extension[];

  /**
   * The full product name.
   */
  productName: string;

  /**
   * Coding words or phrases of the name.
   */
  namePart?: MedicinalProductNameNamePart[];

  /**
   * Country where the name applies.
   */
  countryLanguage?: MedicinalProductNameCountryLanguage[];
}

/**
 * Country where the name applies.
 */
export interface MedicinalProductNameCountryLanguage {

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
   * May be used to represent additional information that is not part of
   * the basic definition of the element and that modifies the
   * understanding of the element in which it is contained and/or the
   * understanding of the containing element's descendants. Usually
   * modifier elements provide negation or qualification. To make the use
   * of extensions safe and manageable, there is a strict set of governance
   * applied to the definition and use of extensions. Though any
   * implementer can define an extension, there is a set of requirements
   * that SHALL be met as part of the definition of the extension.
   * Applications processing a resource are required to check for modifier
   * extensions.
   *
   * Modifier extensions SHALL NOT change the meaning of any elements on
   * Resource or DomainResource (including cannot change the meaning of
   * modifierExtension itself).
   */
  modifierExtension?: Extension[];

  /**
   * Country code for where this name applies.
   */
  country: CodeableConcept;

  /**
   * Jurisdiction code for where this name applies.
   */
  jurisdiction?: CodeableConcept;

  /**
   * Language code for this name.
   */
  language: CodeableConcept;
}

/**
 * Coding words or phrases of the name.
 */
export interface MedicinalProductNameNamePart {

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
   * May be used to represent additional information that is not part of
   * the basic definition of the element and that modifies the
   * understanding of the element in which it is contained and/or the
   * understanding of the containing element's descendants. Usually
   * modifier elements provide negation or qualification. To make the use
   * of extensions safe and manageable, there is a strict set of governance
   * applied to the definition and use of extensions. Though any
   * implementer can define an extension, there is a set of requirements
   * that SHALL be met as part of the definition of the extension.
   * Applications processing a resource are required to check for modifier
   * extensions.
   *
   * Modifier extensions SHALL NOT change the meaning of any elements on
   * Resource or DomainResource (including cannot change the meaning of
   * modifierExtension itself).
   */
  modifierExtension?: Extension[];

  /**
   * A fragment of a product name.
   */
  part: string;

  /**
   * Idenifying type for this part of the name (e.g. strength part).
   */
  type: Coding;
}

/**
 * Indicates if the medicinal product has an orphan designation for the
 * treatment of a rare disease.
 */
export interface MedicinalProductSpecialDesignation {

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
   * May be used to represent additional information that is not part of
   * the basic definition of the element and that modifies the
   * understanding of the element in which it is contained and/or the
   * understanding of the containing element's descendants. Usually
   * modifier elements provide negation or qualification. To make the use
   * of extensions safe and manageable, there is a strict set of governance
   * applied to the definition and use of extensions. Though any
   * implementer can define an extension, there is a set of requirements
   * that SHALL be met as part of the definition of the extension.
   * Applications processing a resource are required to check for modifier
   * extensions.
   *
   * Modifier extensions SHALL NOT change the meaning of any elements on
   * Resource or DomainResource (including cannot change the meaning of
   * modifierExtension itself).
   */
  modifierExtension?: Extension[];

  /**
   * Identifier for the designation, or procedure number.
   */
  identifier?: Identifier[];

  /**
   * The type of special designation, e.g. orphan drug, minor use.
   */
  type?: CodeableConcept;

  /**
   * The intended use of the product, e.g. prevention, treatment.
   */
  intendedUse?: CodeableConcept;

  /**
   * Condition for which the medicinal use applies.
   */
  indicationCodeableConcept?: CodeableConcept;

  /**
   * Condition for which the medicinal use applies.
   */
  indicationReference?: Reference<MedicinalProductIndication>;

  /**
   * For example granted, pending, expired or withdrawn.
   */
  status?: CodeableConcept;

  /**
   * Date when the designation was granted.
   */
  date?: string;

  /**
   * Animal species for which this applies.
   */
  species?: CodeableConcept;
}

/**
 * Condition for which the medicinal use applies.
 */
export type MedicinalProductSpecialDesignationIndication = CodeableConcept | Reference<MedicinalProductIndication>;
