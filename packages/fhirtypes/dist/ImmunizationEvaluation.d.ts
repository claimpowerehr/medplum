/*
 * This is a generated file
 * Do not edit manually.
 */

import { CodeableConcept } from './CodeableConcept';
import { Extension } from './Extension';
import { Identifier } from './Identifier';
import { Immunization } from './Immunization';
import { Meta } from './Meta';
import { Narrative } from './Narrative';
import { Organization } from './Organization';
import { Patient } from './Patient';
import { Reference } from './Reference';
import { Resource } from './Resource';

/**
 * Describes a comparison of an immunization event against published
 * recommendations to determine if the administration is &quot;valid&quot; in
 * relation to those  recommendations.
 */
export interface ImmunizationEvaluation {

  /**
   * This is a ImmunizationEvaluation resource
   */
  readonly resourceType: 'ImmunizationEvaluation';

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
   * A unique identifier assigned to this immunization evaluation record.
   */
  identifier?: Identifier[];

  /**
   * Indicates the current status of the evaluation of the vaccination
   * administration event.
   */
  status: 'completed' | 'entered-in-error';

  /**
   * The individual for whom the evaluation is being done.
   */
  patient: Reference<Patient>;

  /**
   * The date the evaluation of the vaccine administration event was
   * performed.
   */
  date?: string;

  /**
   * Indicates the authority who published the protocol (e.g. ACIP).
   */
  authority?: Reference<Organization>;

  /**
   * The vaccine preventable disease the dose is being evaluated against.
   */
  targetDisease: CodeableConcept;

  /**
   * The vaccine administration event being evaluated.
   */
  immunizationEvent: Reference<Immunization>;

  /**
   * Indicates if the dose is valid or not valid with respect to the
   * published recommendations.
   */
  doseStatus: CodeableConcept;

  /**
   * Provides an explanation as to why the vaccine administration event is
   * valid or not relative to the published recommendations.
   */
  doseStatusReason?: CodeableConcept[];

  /**
   * Additional information about the evaluation.
   */
  description?: string;

  /**
   * One possible path to achieve presumed immunity against a disease -
   * within the context of an authority.
   */
  series?: string;

  /**
   * Nominal position in a series.
   */
  doseNumberPositiveInt?: number;

  /**
   * Nominal position in a series.
   */
  doseNumberString?: string;

  /**
   * The recommended number of doses to achieve immunity.
   */
  seriesDosesPositiveInt?: number;

  /**
   * The recommended number of doses to achieve immunity.
   */
  seriesDosesString?: string;
}

/**
 * Nominal position in a series.
 */
export type ImmunizationEvaluationDoseNumber = number | string;

/**
 * The recommended number of doses to achieve immunity.
 */
export type ImmunizationEvaluationSeriesDoses = number | string;
