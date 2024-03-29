import gql from 'graphql-tag';
import * as Urql from 'urql';
export type Maybe<T> = T | null;
export type InputMaybe<T> = Maybe<T>;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
export type Omit<T, K extends keyof T> = Pick<T, Exclude<keyof T, K>>;
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: string;
  String: string;
  Boolean: boolean;
  Int: number;
  Float: number;
  Date: any;
  DateTime: any;
  Hex: any;
  Json: any;
  Long: any;
  RGBAHue: any;
  RGBATransparency: any;
  RichTextAST: any;
};

export type Aggregate = {
  __typename?: 'Aggregate';
  count: Scalars['Int'];
};

/** Asset system model */
export type Asset = Node & {
  __typename?: 'Asset';
  altText: Maybe<Scalars['String']>;
  caption: Maybe<Scalars['String']>;
  /** The time the document was created */
  createdAt: Scalars['DateTime'];
  /** User that created this document */
  createdBy: Maybe<User>;
  /** Get the document in other stages */
  documentInStages: Array<Asset>;
  /** The file name */
  fileName: Scalars['String'];
  /** The file handle */
  handle: Scalars['String'];
  /** The height of the file */
  height: Maybe<Scalars['Float']>;
  /** List of Asset versions */
  history: Array<Version>;
  /** The unique identifier */
  id: Scalars['ID'];
  imageProduct: Array<Product>;
  /** System Locale field */
  locale: Locale;
  /** Get the other localizations for this document */
  localizations: Array<Asset>;
  /** The mime type of the file */
  mimeType: Maybe<Scalars['String']>;
  /** The time the document was published. Null on documents in draft stage. */
  publishedAt: Maybe<Scalars['DateTime']>;
  /** User that last published this document */
  publishedBy: Maybe<User>;
  scheduledIn: Array<ScheduledOperation>;
  /** The file size */
  size: Maybe<Scalars['Float']>;
  /** System stage field */
  stage: Stage;
  /** The time the document was updated */
  updatedAt: Scalars['DateTime'];
  /** User that last updated this document */
  updatedBy: Maybe<User>;
  /** Get the url for the asset with provided transformations applied. */
  url: Scalars['String'];
  /** The file width */
  width: Maybe<Scalars['Float']>;
};


/** Asset system model */
export type AssetCreatedAtArgs = {
  variation?: SystemDateTimeFieldVariation;
};


/** Asset system model */
export type AssetCreatedByArgs = {
  locales: InputMaybe<Array<Locale>>;
};


/** Asset system model */
export type AssetDocumentInStagesArgs = {
  includeCurrent?: Scalars['Boolean'];
  inheritLocale?: Scalars['Boolean'];
  stages?: Array<Stage>;
};


/** Asset system model */
export type AssetHistoryArgs = {
  limit?: Scalars['Int'];
  skip?: Scalars['Int'];
  stageOverride: InputMaybe<Stage>;
};


/** Asset system model */
export type AssetImageProductArgs = {
  after: InputMaybe<Scalars['String']>;
  before: InputMaybe<Scalars['String']>;
  first: InputMaybe<Scalars['Int']>;
  last: InputMaybe<Scalars['Int']>;
  locales: InputMaybe<Array<Locale>>;
  orderBy: InputMaybe<ProductOrderByInput>;
  skip: InputMaybe<Scalars['Int']>;
  where: InputMaybe<ProductWhereInput>;
};


/** Asset system model */
export type AssetLocalizationsArgs = {
  includeCurrent?: Scalars['Boolean'];
  locales?: Array<Locale>;
};


/** Asset system model */
export type AssetPublishedAtArgs = {
  variation?: SystemDateTimeFieldVariation;
};


/** Asset system model */
export type AssetPublishedByArgs = {
  locales: InputMaybe<Array<Locale>>;
};


/** Asset system model */
export type AssetScheduledInArgs = {
  after: InputMaybe<Scalars['String']>;
  before: InputMaybe<Scalars['String']>;
  first: InputMaybe<Scalars['Int']>;
  last: InputMaybe<Scalars['Int']>;
  locales: InputMaybe<Array<Locale>>;
  skip: InputMaybe<Scalars['Int']>;
  where: InputMaybe<ScheduledOperationWhereInput>;
};


/** Asset system model */
export type AssetUpdatedAtArgs = {
  variation?: SystemDateTimeFieldVariation;
};


/** Asset system model */
export type AssetUpdatedByArgs = {
  locales: InputMaybe<Array<Locale>>;
};


/** Asset system model */
export type AssetUrlArgs = {
  transformation: InputMaybe<AssetTransformationInput>;
};

export type AssetConnectInput = {
  /** Allow to specify document position in list of connected documents, will default to appending at end of list */
  position: InputMaybe<ConnectPositionInput>;
  /** Document to connect */
  where: AssetWhereUniqueInput;
};

/** A connection to a list of items. */
export type AssetConnection = {
  __typename?: 'AssetConnection';
  aggregate: Aggregate;
  /** A list of edges. */
  edges: Array<AssetEdge>;
  /** Information to aid in pagination. */
  pageInfo: PageInfo;
};

export type AssetCreateInput = {
  altText: InputMaybe<Scalars['String']>;
  caption: InputMaybe<Scalars['String']>;
  createdAt: InputMaybe<Scalars['DateTime']>;
  fileName: Scalars['String'];
  handle: Scalars['String'];
  height: InputMaybe<Scalars['Float']>;
  imageProduct: InputMaybe<ProductCreateManyInlineInput>;
  /** Inline mutations for managing document localizations excluding the default locale */
  localizations: InputMaybe<AssetCreateLocalizationsInput>;
  mimeType: InputMaybe<Scalars['String']>;
  size: InputMaybe<Scalars['Float']>;
  updatedAt: InputMaybe<Scalars['DateTime']>;
  width: InputMaybe<Scalars['Float']>;
};

export type AssetCreateLocalizationDataInput = {
  createdAt: InputMaybe<Scalars['DateTime']>;
  fileName: Scalars['String'];
  handle: Scalars['String'];
  height: InputMaybe<Scalars['Float']>;
  mimeType: InputMaybe<Scalars['String']>;
  size: InputMaybe<Scalars['Float']>;
  updatedAt: InputMaybe<Scalars['DateTime']>;
  width: InputMaybe<Scalars['Float']>;
};

export type AssetCreateLocalizationInput = {
  /** Localization input */
  data: AssetCreateLocalizationDataInput;
  locale: Locale;
};

export type AssetCreateLocalizationsInput = {
  /** Create localizations for the newly-created document */
  create: InputMaybe<Array<AssetCreateLocalizationInput>>;
};

export type AssetCreateManyInlineInput = {
  /** Connect multiple existing Asset documents */
  connect: InputMaybe<Array<AssetWhereUniqueInput>>;
  /** Create and connect multiple existing Asset documents */
  create: InputMaybe<Array<AssetCreateInput>>;
};

export type AssetCreateOneInlineInput = {
  /** Connect one existing Asset document */
  connect: InputMaybe<AssetWhereUniqueInput>;
  /** Create and connect one Asset document */
  create: InputMaybe<AssetCreateInput>;
};

/** An edge in a connection. */
export type AssetEdge = {
  __typename?: 'AssetEdge';
  /** A cursor for use in pagination. */
  cursor: Scalars['String'];
  /** The item at the end of the edge. */
  node: Asset;
};

/** Identifies documents */
export type AssetManyWhereInput = {
  /** Logical AND on all given filters. */
  AND: InputMaybe<Array<AssetWhereInput>>;
  /** Logical NOT on all given filters combined by AND. */
  NOT: InputMaybe<Array<AssetWhereInput>>;
  /** Logical OR on all given filters. */
  OR: InputMaybe<Array<AssetWhereInput>>;
  /** Contains search across all appropriate fields. */
  _search: InputMaybe<Scalars['String']>;
  altText: InputMaybe<Scalars['String']>;
  /** All values containing the given string. */
  altText_contains: InputMaybe<Scalars['String']>;
  /** All values ending with the given string. */
  altText_ends_with: InputMaybe<Scalars['String']>;
  /** All values that are contained in given list. */
  altText_in: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  /** All values that are not equal to given value. */
  altText_not: InputMaybe<Scalars['String']>;
  /** All values not containing the given string. */
  altText_not_contains: InputMaybe<Scalars['String']>;
  /** All values not ending with the given string */
  altText_not_ends_with: InputMaybe<Scalars['String']>;
  /** All values that are not contained in given list. */
  altText_not_in: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  /** All values not starting with the given string. */
  altText_not_starts_with: InputMaybe<Scalars['String']>;
  /** All values starting with the given string. */
  altText_starts_with: InputMaybe<Scalars['String']>;
  caption: InputMaybe<Scalars['String']>;
  /** All values containing the given string. */
  caption_contains: InputMaybe<Scalars['String']>;
  /** All values ending with the given string. */
  caption_ends_with: InputMaybe<Scalars['String']>;
  /** All values that are contained in given list. */
  caption_in: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  /** All values that are not equal to given value. */
  caption_not: InputMaybe<Scalars['String']>;
  /** All values not containing the given string. */
  caption_not_contains: InputMaybe<Scalars['String']>;
  /** All values not ending with the given string */
  caption_not_ends_with: InputMaybe<Scalars['String']>;
  /** All values that are not contained in given list. */
  caption_not_in: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  /** All values not starting with the given string. */
  caption_not_starts_with: InputMaybe<Scalars['String']>;
  /** All values starting with the given string. */
  caption_starts_with: InputMaybe<Scalars['String']>;
  createdAt: InputMaybe<Scalars['DateTime']>;
  /** All values greater than the given value. */
  createdAt_gt: InputMaybe<Scalars['DateTime']>;
  /** All values greater than or equal the given value. */
  createdAt_gte: InputMaybe<Scalars['DateTime']>;
  /** All values that are contained in given list. */
  createdAt_in: InputMaybe<Array<InputMaybe<Scalars['DateTime']>>>;
  /** All values less than the given value. */
  createdAt_lt: InputMaybe<Scalars['DateTime']>;
  /** All values less than or equal the given value. */
  createdAt_lte: InputMaybe<Scalars['DateTime']>;
  /** All values that are not equal to given value. */
  createdAt_not: InputMaybe<Scalars['DateTime']>;
  /** All values that are not contained in given list. */
  createdAt_not_in: InputMaybe<Array<InputMaybe<Scalars['DateTime']>>>;
  createdBy: InputMaybe<UserWhereInput>;
  id: InputMaybe<Scalars['ID']>;
  /** All values containing the given string. */
  id_contains: InputMaybe<Scalars['ID']>;
  /** All values ending with the given string. */
  id_ends_with: InputMaybe<Scalars['ID']>;
  /** All values that are contained in given list. */
  id_in: InputMaybe<Array<InputMaybe<Scalars['ID']>>>;
  /** All values that are not equal to given value. */
  id_not: InputMaybe<Scalars['ID']>;
  /** All values not containing the given string. */
  id_not_contains: InputMaybe<Scalars['ID']>;
  /** All values not ending with the given string */
  id_not_ends_with: InputMaybe<Scalars['ID']>;
  /** All values that are not contained in given list. */
  id_not_in: InputMaybe<Array<InputMaybe<Scalars['ID']>>>;
  /** All values not starting with the given string. */
  id_not_starts_with: InputMaybe<Scalars['ID']>;
  /** All values starting with the given string. */
  id_starts_with: InputMaybe<Scalars['ID']>;
  imageProduct_every: InputMaybe<ProductWhereInput>;
  imageProduct_none: InputMaybe<ProductWhereInput>;
  imageProduct_some: InputMaybe<ProductWhereInput>;
  publishedAt: InputMaybe<Scalars['DateTime']>;
  /** All values greater than the given value. */
  publishedAt_gt: InputMaybe<Scalars['DateTime']>;
  /** All values greater than or equal the given value. */
  publishedAt_gte: InputMaybe<Scalars['DateTime']>;
  /** All values that are contained in given list. */
  publishedAt_in: InputMaybe<Array<InputMaybe<Scalars['DateTime']>>>;
  /** All values less than the given value. */
  publishedAt_lt: InputMaybe<Scalars['DateTime']>;
  /** All values less than or equal the given value. */
  publishedAt_lte: InputMaybe<Scalars['DateTime']>;
  /** All values that are not equal to given value. */
  publishedAt_not: InputMaybe<Scalars['DateTime']>;
  /** All values that are not contained in given list. */
  publishedAt_not_in: InputMaybe<Array<InputMaybe<Scalars['DateTime']>>>;
  publishedBy: InputMaybe<UserWhereInput>;
  scheduledIn_every: InputMaybe<ScheduledOperationWhereInput>;
  scheduledIn_none: InputMaybe<ScheduledOperationWhereInput>;
  scheduledIn_some: InputMaybe<ScheduledOperationWhereInput>;
  updatedAt: InputMaybe<Scalars['DateTime']>;
  /** All values greater than the given value. */
  updatedAt_gt: InputMaybe<Scalars['DateTime']>;
  /** All values greater than or equal the given value. */
  updatedAt_gte: InputMaybe<Scalars['DateTime']>;
  /** All values that are contained in given list. */
  updatedAt_in: InputMaybe<Array<InputMaybe<Scalars['DateTime']>>>;
  /** All values less than the given value. */
  updatedAt_lt: InputMaybe<Scalars['DateTime']>;
  /** All values less than or equal the given value. */
  updatedAt_lte: InputMaybe<Scalars['DateTime']>;
  /** All values that are not equal to given value. */
  updatedAt_not: InputMaybe<Scalars['DateTime']>;
  /** All values that are not contained in given list. */
  updatedAt_not_in: InputMaybe<Array<InputMaybe<Scalars['DateTime']>>>;
  updatedBy: InputMaybe<UserWhereInput>;
};

export enum AssetOrderByInput {
  AltTextAsc = 'altText_ASC',
  AltTextDesc = 'altText_DESC',
  CaptionAsc = 'caption_ASC',
  CaptionDesc = 'caption_DESC',
  CreatedAtAsc = 'createdAt_ASC',
  CreatedAtDesc = 'createdAt_DESC',
  FileNameAsc = 'fileName_ASC',
  FileNameDesc = 'fileName_DESC',
  HandleAsc = 'handle_ASC',
  HandleDesc = 'handle_DESC',
  HeightAsc = 'height_ASC',
  HeightDesc = 'height_DESC',
  IdAsc = 'id_ASC',
  IdDesc = 'id_DESC',
  MimeTypeAsc = 'mimeType_ASC',
  MimeTypeDesc = 'mimeType_DESC',
  PublishedAtAsc = 'publishedAt_ASC',
  PublishedAtDesc = 'publishedAt_DESC',
  SizeAsc = 'size_ASC',
  SizeDesc = 'size_DESC',
  UpdatedAtAsc = 'updatedAt_ASC',
  UpdatedAtDesc = 'updatedAt_DESC',
  WidthAsc = 'width_ASC',
  WidthDesc = 'width_DESC'
}

/** Transformations for Assets */
export type AssetTransformationInput = {
  document: InputMaybe<DocumentTransformationInput>;
  image: InputMaybe<ImageTransformationInput>;
  /** Pass true if you want to validate the passed transformation parameters */
  validateOptions: InputMaybe<Scalars['Boolean']>;
};

export type AssetUpdateInput = {
  altText: InputMaybe<Scalars['String']>;
  caption: InputMaybe<Scalars['String']>;
  fileName: InputMaybe<Scalars['String']>;
  handle: InputMaybe<Scalars['String']>;
  height: InputMaybe<Scalars['Float']>;
  imageProduct: InputMaybe<ProductUpdateManyInlineInput>;
  /** Manage document localizations */
  localizations: InputMaybe<AssetUpdateLocalizationsInput>;
  mimeType: InputMaybe<Scalars['String']>;
  size: InputMaybe<Scalars['Float']>;
  width: InputMaybe<Scalars['Float']>;
};

export type AssetUpdateLocalizationDataInput = {
  fileName: InputMaybe<Scalars['String']>;
  handle: InputMaybe<Scalars['String']>;
  height: InputMaybe<Scalars['Float']>;
  mimeType: InputMaybe<Scalars['String']>;
  size: InputMaybe<Scalars['Float']>;
  width: InputMaybe<Scalars['Float']>;
};

export type AssetUpdateLocalizationInput = {
  data: AssetUpdateLocalizationDataInput;
  locale: Locale;
};

export type AssetUpdateLocalizationsInput = {
  /** Localizations to create */
  create: InputMaybe<Array<AssetCreateLocalizationInput>>;
  /** Localizations to delete */
  delete: InputMaybe<Array<Locale>>;
  /** Localizations to update */
  update: InputMaybe<Array<AssetUpdateLocalizationInput>>;
  upsert: InputMaybe<Array<AssetUpsertLocalizationInput>>;
};

export type AssetUpdateManyInlineInput = {
  /** Connect multiple existing Asset documents */
  connect: InputMaybe<Array<AssetConnectInput>>;
  /** Create and connect multiple Asset documents */
  create: InputMaybe<Array<AssetCreateInput>>;
  /** Delete multiple Asset documents */
  delete: InputMaybe<Array<AssetWhereUniqueInput>>;
  /** Disconnect multiple Asset documents */
  disconnect: InputMaybe<Array<AssetWhereUniqueInput>>;
  /** Override currently-connected documents with multiple existing Asset documents */
  set: InputMaybe<Array<AssetWhereUniqueInput>>;
  /** Update multiple Asset documents */
  update: InputMaybe<Array<AssetUpdateWithNestedWhereUniqueInput>>;
  /** Upsert multiple Asset documents */
  upsert: InputMaybe<Array<AssetUpsertWithNestedWhereUniqueInput>>;
};

export type AssetUpdateManyInput = {
  altText: InputMaybe<Scalars['String']>;
  caption: InputMaybe<Scalars['String']>;
  fileName: InputMaybe<Scalars['String']>;
  height: InputMaybe<Scalars['Float']>;
  /** Optional updates to localizations */
  localizations: InputMaybe<AssetUpdateManyLocalizationsInput>;
  mimeType: InputMaybe<Scalars['String']>;
  size: InputMaybe<Scalars['Float']>;
  width: InputMaybe<Scalars['Float']>;
};

export type AssetUpdateManyLocalizationDataInput = {
  fileName: InputMaybe<Scalars['String']>;
  height: InputMaybe<Scalars['Float']>;
  mimeType: InputMaybe<Scalars['String']>;
  size: InputMaybe<Scalars['Float']>;
  width: InputMaybe<Scalars['Float']>;
};

export type AssetUpdateManyLocalizationInput = {
  data: AssetUpdateManyLocalizationDataInput;
  locale: Locale;
};

export type AssetUpdateManyLocalizationsInput = {
  /** Localizations to update */
  update: InputMaybe<Array<AssetUpdateManyLocalizationInput>>;
};

export type AssetUpdateManyWithNestedWhereInput = {
  /** Update many input */
  data: AssetUpdateManyInput;
  /** Document search */
  where: AssetWhereInput;
};

export type AssetUpdateOneInlineInput = {
  /** Connect existing Asset document */
  connect: InputMaybe<AssetWhereUniqueInput>;
  /** Create and connect one Asset document */
  create: InputMaybe<AssetCreateInput>;
  /** Delete currently connected Asset document */
  delete: InputMaybe<Scalars['Boolean']>;
  /** Disconnect currently connected Asset document */
  disconnect: InputMaybe<Scalars['Boolean']>;
  /** Update single Asset document */
  update: InputMaybe<AssetUpdateWithNestedWhereUniqueInput>;
  /** Upsert single Asset document */
  upsert: InputMaybe<AssetUpsertWithNestedWhereUniqueInput>;
};

export type AssetUpdateWithNestedWhereUniqueInput = {
  /** Document to update */
  data: AssetUpdateInput;
  /** Unique document search */
  where: AssetWhereUniqueInput;
};

export type AssetUpsertInput = {
  /** Create document if it didn't exist */
  create: AssetCreateInput;
  /** Update document if it exists */
  update: AssetUpdateInput;
};

export type AssetUpsertLocalizationInput = {
  create: AssetCreateLocalizationDataInput;
  locale: Locale;
  update: AssetUpdateLocalizationDataInput;
};

export type AssetUpsertWithNestedWhereUniqueInput = {
  /** Upsert data */
  data: AssetUpsertInput;
  /** Unique document search */
  where: AssetWhereUniqueInput;
};

/** Identifies documents */
export type AssetWhereInput = {
  /** Logical AND on all given filters. */
  AND: InputMaybe<Array<AssetWhereInput>>;
  /** Logical NOT on all given filters combined by AND. */
  NOT: InputMaybe<Array<AssetWhereInput>>;
  /** Logical OR on all given filters. */
  OR: InputMaybe<Array<AssetWhereInput>>;
  /** Contains search across all appropriate fields. */
  _search: InputMaybe<Scalars['String']>;
  altText: InputMaybe<Scalars['String']>;
  /** All values containing the given string. */
  altText_contains: InputMaybe<Scalars['String']>;
  /** All values ending with the given string. */
  altText_ends_with: InputMaybe<Scalars['String']>;
  /** All values that are contained in given list. */
  altText_in: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  /** All values that are not equal to given value. */
  altText_not: InputMaybe<Scalars['String']>;
  /** All values not containing the given string. */
  altText_not_contains: InputMaybe<Scalars['String']>;
  /** All values not ending with the given string */
  altText_not_ends_with: InputMaybe<Scalars['String']>;
  /** All values that are not contained in given list. */
  altText_not_in: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  /** All values not starting with the given string. */
  altText_not_starts_with: InputMaybe<Scalars['String']>;
  /** All values starting with the given string. */
  altText_starts_with: InputMaybe<Scalars['String']>;
  caption: InputMaybe<Scalars['String']>;
  /** All values containing the given string. */
  caption_contains: InputMaybe<Scalars['String']>;
  /** All values ending with the given string. */
  caption_ends_with: InputMaybe<Scalars['String']>;
  /** All values that are contained in given list. */
  caption_in: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  /** All values that are not equal to given value. */
  caption_not: InputMaybe<Scalars['String']>;
  /** All values not containing the given string. */
  caption_not_contains: InputMaybe<Scalars['String']>;
  /** All values not ending with the given string */
  caption_not_ends_with: InputMaybe<Scalars['String']>;
  /** All values that are not contained in given list. */
  caption_not_in: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  /** All values not starting with the given string. */
  caption_not_starts_with: InputMaybe<Scalars['String']>;
  /** All values starting with the given string. */
  caption_starts_with: InputMaybe<Scalars['String']>;
  createdAt: InputMaybe<Scalars['DateTime']>;
  /** All values greater than the given value. */
  createdAt_gt: InputMaybe<Scalars['DateTime']>;
  /** All values greater than or equal the given value. */
  createdAt_gte: InputMaybe<Scalars['DateTime']>;
  /** All values that are contained in given list. */
  createdAt_in: InputMaybe<Array<InputMaybe<Scalars['DateTime']>>>;
  /** All values less than the given value. */
  createdAt_lt: InputMaybe<Scalars['DateTime']>;
  /** All values less than or equal the given value. */
  createdAt_lte: InputMaybe<Scalars['DateTime']>;
  /** All values that are not equal to given value. */
  createdAt_not: InputMaybe<Scalars['DateTime']>;
  /** All values that are not contained in given list. */
  createdAt_not_in: InputMaybe<Array<InputMaybe<Scalars['DateTime']>>>;
  createdBy: InputMaybe<UserWhereInput>;
  fileName: InputMaybe<Scalars['String']>;
  /** All values containing the given string. */
  fileName_contains: InputMaybe<Scalars['String']>;
  /** All values ending with the given string. */
  fileName_ends_with: InputMaybe<Scalars['String']>;
  /** All values that are contained in given list. */
  fileName_in: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  /** All values that are not equal to given value. */
  fileName_not: InputMaybe<Scalars['String']>;
  /** All values not containing the given string. */
  fileName_not_contains: InputMaybe<Scalars['String']>;
  /** All values not ending with the given string */
  fileName_not_ends_with: InputMaybe<Scalars['String']>;
  /** All values that are not contained in given list. */
  fileName_not_in: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  /** All values not starting with the given string. */
  fileName_not_starts_with: InputMaybe<Scalars['String']>;
  /** All values starting with the given string. */
  fileName_starts_with: InputMaybe<Scalars['String']>;
  handle: InputMaybe<Scalars['String']>;
  /** All values containing the given string. */
  handle_contains: InputMaybe<Scalars['String']>;
  /** All values ending with the given string. */
  handle_ends_with: InputMaybe<Scalars['String']>;
  /** All values that are contained in given list. */
  handle_in: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  /** All values that are not equal to given value. */
  handle_not: InputMaybe<Scalars['String']>;
  /** All values not containing the given string. */
  handle_not_contains: InputMaybe<Scalars['String']>;
  /** All values not ending with the given string */
  handle_not_ends_with: InputMaybe<Scalars['String']>;
  /** All values that are not contained in given list. */
  handle_not_in: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  /** All values not starting with the given string. */
  handle_not_starts_with: InputMaybe<Scalars['String']>;
  /** All values starting with the given string. */
  handle_starts_with: InputMaybe<Scalars['String']>;
  height: InputMaybe<Scalars['Float']>;
  /** All values greater than the given value. */
  height_gt: InputMaybe<Scalars['Float']>;
  /** All values greater than or equal the given value. */
  height_gte: InputMaybe<Scalars['Float']>;
  /** All values that are contained in given list. */
  height_in: InputMaybe<Array<InputMaybe<Scalars['Float']>>>;
  /** All values less than the given value. */
  height_lt: InputMaybe<Scalars['Float']>;
  /** All values less than or equal the given value. */
  height_lte: InputMaybe<Scalars['Float']>;
  /** All values that are not equal to given value. */
  height_not: InputMaybe<Scalars['Float']>;
  /** All values that are not contained in given list. */
  height_not_in: InputMaybe<Array<InputMaybe<Scalars['Float']>>>;
  id: InputMaybe<Scalars['ID']>;
  /** All values containing the given string. */
  id_contains: InputMaybe<Scalars['ID']>;
  /** All values ending with the given string. */
  id_ends_with: InputMaybe<Scalars['ID']>;
  /** All values that are contained in given list. */
  id_in: InputMaybe<Array<InputMaybe<Scalars['ID']>>>;
  /** All values that are not equal to given value. */
  id_not: InputMaybe<Scalars['ID']>;
  /** All values not containing the given string. */
  id_not_contains: InputMaybe<Scalars['ID']>;
  /** All values not ending with the given string */
  id_not_ends_with: InputMaybe<Scalars['ID']>;
  /** All values that are not contained in given list. */
  id_not_in: InputMaybe<Array<InputMaybe<Scalars['ID']>>>;
  /** All values not starting with the given string. */
  id_not_starts_with: InputMaybe<Scalars['ID']>;
  /** All values starting with the given string. */
  id_starts_with: InputMaybe<Scalars['ID']>;
  imageProduct_every: InputMaybe<ProductWhereInput>;
  imageProduct_none: InputMaybe<ProductWhereInput>;
  imageProduct_some: InputMaybe<ProductWhereInput>;
  mimeType: InputMaybe<Scalars['String']>;
  /** All values containing the given string. */
  mimeType_contains: InputMaybe<Scalars['String']>;
  /** All values ending with the given string. */
  mimeType_ends_with: InputMaybe<Scalars['String']>;
  /** All values that are contained in given list. */
  mimeType_in: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  /** All values that are not equal to given value. */
  mimeType_not: InputMaybe<Scalars['String']>;
  /** All values not containing the given string. */
  mimeType_not_contains: InputMaybe<Scalars['String']>;
  /** All values not ending with the given string */
  mimeType_not_ends_with: InputMaybe<Scalars['String']>;
  /** All values that are not contained in given list. */
  mimeType_not_in: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  /** All values not starting with the given string. */
  mimeType_not_starts_with: InputMaybe<Scalars['String']>;
  /** All values starting with the given string. */
  mimeType_starts_with: InputMaybe<Scalars['String']>;
  publishedAt: InputMaybe<Scalars['DateTime']>;
  /** All values greater than the given value. */
  publishedAt_gt: InputMaybe<Scalars['DateTime']>;
  /** All values greater than or equal the given value. */
  publishedAt_gte: InputMaybe<Scalars['DateTime']>;
  /** All values that are contained in given list. */
  publishedAt_in: InputMaybe<Array<InputMaybe<Scalars['DateTime']>>>;
  /** All values less than the given value. */
  publishedAt_lt: InputMaybe<Scalars['DateTime']>;
  /** All values less than or equal the given value. */
  publishedAt_lte: InputMaybe<Scalars['DateTime']>;
  /** All values that are not equal to given value. */
  publishedAt_not: InputMaybe<Scalars['DateTime']>;
  /** All values that are not contained in given list. */
  publishedAt_not_in: InputMaybe<Array<InputMaybe<Scalars['DateTime']>>>;
  publishedBy: InputMaybe<UserWhereInput>;
  scheduledIn_every: InputMaybe<ScheduledOperationWhereInput>;
  scheduledIn_none: InputMaybe<ScheduledOperationWhereInput>;
  scheduledIn_some: InputMaybe<ScheduledOperationWhereInput>;
  size: InputMaybe<Scalars['Float']>;
  /** All values greater than the given value. */
  size_gt: InputMaybe<Scalars['Float']>;
  /** All values greater than or equal the given value. */
  size_gte: InputMaybe<Scalars['Float']>;
  /** All values that are contained in given list. */
  size_in: InputMaybe<Array<InputMaybe<Scalars['Float']>>>;
  /** All values less than the given value. */
  size_lt: InputMaybe<Scalars['Float']>;
  /** All values less than or equal the given value. */
  size_lte: InputMaybe<Scalars['Float']>;
  /** All values that are not equal to given value. */
  size_not: InputMaybe<Scalars['Float']>;
  /** All values that are not contained in given list. */
  size_not_in: InputMaybe<Array<InputMaybe<Scalars['Float']>>>;
  updatedAt: InputMaybe<Scalars['DateTime']>;
  /** All values greater than the given value. */
  updatedAt_gt: InputMaybe<Scalars['DateTime']>;
  /** All values greater than or equal the given value. */
  updatedAt_gte: InputMaybe<Scalars['DateTime']>;
  /** All values that are contained in given list. */
  updatedAt_in: InputMaybe<Array<InputMaybe<Scalars['DateTime']>>>;
  /** All values less than the given value. */
  updatedAt_lt: InputMaybe<Scalars['DateTime']>;
  /** All values less than or equal the given value. */
  updatedAt_lte: InputMaybe<Scalars['DateTime']>;
  /** All values that are not equal to given value. */
  updatedAt_not: InputMaybe<Scalars['DateTime']>;
  /** All values that are not contained in given list. */
  updatedAt_not_in: InputMaybe<Array<InputMaybe<Scalars['DateTime']>>>;
  updatedBy: InputMaybe<UserWhereInput>;
  width: InputMaybe<Scalars['Float']>;
  /** All values greater than the given value. */
  width_gt: InputMaybe<Scalars['Float']>;
  /** All values greater than or equal the given value. */
  width_gte: InputMaybe<Scalars['Float']>;
  /** All values that are contained in given list. */
  width_in: InputMaybe<Array<InputMaybe<Scalars['Float']>>>;
  /** All values less than the given value. */
  width_lt: InputMaybe<Scalars['Float']>;
  /** All values less than or equal the given value. */
  width_lte: InputMaybe<Scalars['Float']>;
  /** All values that are not equal to given value. */
  width_not: InputMaybe<Scalars['Float']>;
  /** All values that are not contained in given list. */
  width_not_in: InputMaybe<Array<InputMaybe<Scalars['Float']>>>;
};

/** References Asset record uniquely */
export type AssetWhereUniqueInput = {
  id: InputMaybe<Scalars['ID']>;
};

export type BatchPayload = {
  __typename?: 'BatchPayload';
  /** The number of nodes that have been affected by the Batch operation. */
  count: Scalars['Long'];
};

export type Category = Node & {
  __typename?: 'Category';
  /** The time the document was created */
  createdAt: Scalars['DateTime'];
  /** User that created this document */
  createdBy: Maybe<User>;
  description: Maybe<Scalars['String']>;
  /** Get the document in other stages */
  documentInStages: Array<Category>;
  /** List of Category versions */
  history: Array<Version>;
  /** The unique identifier */
  id: Scalars['ID'];
  name: Scalars['String'];
  products: Array<Product>;
  /** The time the document was published. Null on documents in draft stage. */
  publishedAt: Maybe<Scalars['DateTime']>;
  /** User that last published this document */
  publishedBy: Maybe<User>;
  scheduledIn: Array<ScheduledOperation>;
  slug: Scalars['String'];
  /** System stage field */
  stage: Stage;
  /** The time the document was updated */
  updatedAt: Scalars['DateTime'];
  /** User that last updated this document */
  updatedBy: Maybe<User>;
};


export type CategoryCreatedByArgs = {
  locales: InputMaybe<Array<Locale>>;
};


export type CategoryDocumentInStagesArgs = {
  includeCurrent?: Scalars['Boolean'];
  inheritLocale?: Scalars['Boolean'];
  stages?: Array<Stage>;
};


export type CategoryHistoryArgs = {
  limit?: Scalars['Int'];
  skip?: Scalars['Int'];
  stageOverride: InputMaybe<Stage>;
};


export type CategoryProductsArgs = {
  after: InputMaybe<Scalars['String']>;
  before: InputMaybe<Scalars['String']>;
  first: InputMaybe<Scalars['Int']>;
  last: InputMaybe<Scalars['Int']>;
  locales: InputMaybe<Array<Locale>>;
  orderBy: InputMaybe<ProductOrderByInput>;
  skip: InputMaybe<Scalars['Int']>;
  where: InputMaybe<ProductWhereInput>;
};


export type CategoryPublishedByArgs = {
  locales: InputMaybe<Array<Locale>>;
};


export type CategoryScheduledInArgs = {
  after: InputMaybe<Scalars['String']>;
  before: InputMaybe<Scalars['String']>;
  first: InputMaybe<Scalars['Int']>;
  last: InputMaybe<Scalars['Int']>;
  locales: InputMaybe<Array<Locale>>;
  skip: InputMaybe<Scalars['Int']>;
  where: InputMaybe<ScheduledOperationWhereInput>;
};


export type CategoryUpdatedByArgs = {
  locales: InputMaybe<Array<Locale>>;
};

export type CategoryConnectInput = {
  /** Allow to specify document position in list of connected documents, will default to appending at end of list */
  position: InputMaybe<ConnectPositionInput>;
  /** Document to connect */
  where: CategoryWhereUniqueInput;
};

/** A connection to a list of items. */
export type CategoryConnection = {
  __typename?: 'CategoryConnection';
  aggregate: Aggregate;
  /** A list of edges. */
  edges: Array<CategoryEdge>;
  /** Information to aid in pagination. */
  pageInfo: PageInfo;
};

export type CategoryCreateInput = {
  createdAt: InputMaybe<Scalars['DateTime']>;
  description: InputMaybe<Scalars['String']>;
  name: Scalars['String'];
  products: InputMaybe<ProductCreateManyInlineInput>;
  slug: Scalars['String'];
  updatedAt: InputMaybe<Scalars['DateTime']>;
};

export type CategoryCreateManyInlineInput = {
  /** Connect multiple existing Category documents */
  connect: InputMaybe<Array<CategoryWhereUniqueInput>>;
  /** Create and connect multiple existing Category documents */
  create: InputMaybe<Array<CategoryCreateInput>>;
};

export type CategoryCreateOneInlineInput = {
  /** Connect one existing Category document */
  connect: InputMaybe<CategoryWhereUniqueInput>;
  /** Create and connect one Category document */
  create: InputMaybe<CategoryCreateInput>;
};

/** An edge in a connection. */
export type CategoryEdge = {
  __typename?: 'CategoryEdge';
  /** A cursor for use in pagination. */
  cursor: Scalars['String'];
  /** The item at the end of the edge. */
  node: Category;
};

/** Identifies documents */
export type CategoryManyWhereInput = {
  /** Logical AND on all given filters. */
  AND: InputMaybe<Array<CategoryWhereInput>>;
  /** Logical NOT on all given filters combined by AND. */
  NOT: InputMaybe<Array<CategoryWhereInput>>;
  /** Logical OR on all given filters. */
  OR: InputMaybe<Array<CategoryWhereInput>>;
  /** Contains search across all appropriate fields. */
  _search: InputMaybe<Scalars['String']>;
  createdAt: InputMaybe<Scalars['DateTime']>;
  /** All values greater than the given value. */
  createdAt_gt: InputMaybe<Scalars['DateTime']>;
  /** All values greater than or equal the given value. */
  createdAt_gte: InputMaybe<Scalars['DateTime']>;
  /** All values that are contained in given list. */
  createdAt_in: InputMaybe<Array<InputMaybe<Scalars['DateTime']>>>;
  /** All values less than the given value. */
  createdAt_lt: InputMaybe<Scalars['DateTime']>;
  /** All values less than or equal the given value. */
  createdAt_lte: InputMaybe<Scalars['DateTime']>;
  /** All values that are not equal to given value. */
  createdAt_not: InputMaybe<Scalars['DateTime']>;
  /** All values that are not contained in given list. */
  createdAt_not_in: InputMaybe<Array<InputMaybe<Scalars['DateTime']>>>;
  createdBy: InputMaybe<UserWhereInput>;
  description: InputMaybe<Scalars['String']>;
  /** All values containing the given string. */
  description_contains: InputMaybe<Scalars['String']>;
  /** All values ending with the given string. */
  description_ends_with: InputMaybe<Scalars['String']>;
  /** All values that are contained in given list. */
  description_in: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  /** All values that are not equal to given value. */
  description_not: InputMaybe<Scalars['String']>;
  /** All values not containing the given string. */
  description_not_contains: InputMaybe<Scalars['String']>;
  /** All values not ending with the given string */
  description_not_ends_with: InputMaybe<Scalars['String']>;
  /** All values that are not contained in given list. */
  description_not_in: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  /** All values not starting with the given string. */
  description_not_starts_with: InputMaybe<Scalars['String']>;
  /** All values starting with the given string. */
  description_starts_with: InputMaybe<Scalars['String']>;
  id: InputMaybe<Scalars['ID']>;
  /** All values containing the given string. */
  id_contains: InputMaybe<Scalars['ID']>;
  /** All values ending with the given string. */
  id_ends_with: InputMaybe<Scalars['ID']>;
  /** All values that are contained in given list. */
  id_in: InputMaybe<Array<InputMaybe<Scalars['ID']>>>;
  /** All values that are not equal to given value. */
  id_not: InputMaybe<Scalars['ID']>;
  /** All values not containing the given string. */
  id_not_contains: InputMaybe<Scalars['ID']>;
  /** All values not ending with the given string */
  id_not_ends_with: InputMaybe<Scalars['ID']>;
  /** All values that are not contained in given list. */
  id_not_in: InputMaybe<Array<InputMaybe<Scalars['ID']>>>;
  /** All values not starting with the given string. */
  id_not_starts_with: InputMaybe<Scalars['ID']>;
  /** All values starting with the given string. */
  id_starts_with: InputMaybe<Scalars['ID']>;
  name: InputMaybe<Scalars['String']>;
  /** All values containing the given string. */
  name_contains: InputMaybe<Scalars['String']>;
  /** All values ending with the given string. */
  name_ends_with: InputMaybe<Scalars['String']>;
  /** All values that are contained in given list. */
  name_in: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  /** All values that are not equal to given value. */
  name_not: InputMaybe<Scalars['String']>;
  /** All values not containing the given string. */
  name_not_contains: InputMaybe<Scalars['String']>;
  /** All values not ending with the given string */
  name_not_ends_with: InputMaybe<Scalars['String']>;
  /** All values that are not contained in given list. */
  name_not_in: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  /** All values not starting with the given string. */
  name_not_starts_with: InputMaybe<Scalars['String']>;
  /** All values starting with the given string. */
  name_starts_with: InputMaybe<Scalars['String']>;
  products_every: InputMaybe<ProductWhereInput>;
  products_none: InputMaybe<ProductWhereInput>;
  products_some: InputMaybe<ProductWhereInput>;
  publishedAt: InputMaybe<Scalars['DateTime']>;
  /** All values greater than the given value. */
  publishedAt_gt: InputMaybe<Scalars['DateTime']>;
  /** All values greater than or equal the given value. */
  publishedAt_gte: InputMaybe<Scalars['DateTime']>;
  /** All values that are contained in given list. */
  publishedAt_in: InputMaybe<Array<InputMaybe<Scalars['DateTime']>>>;
  /** All values less than the given value. */
  publishedAt_lt: InputMaybe<Scalars['DateTime']>;
  /** All values less than or equal the given value. */
  publishedAt_lte: InputMaybe<Scalars['DateTime']>;
  /** All values that are not equal to given value. */
  publishedAt_not: InputMaybe<Scalars['DateTime']>;
  /** All values that are not contained in given list. */
  publishedAt_not_in: InputMaybe<Array<InputMaybe<Scalars['DateTime']>>>;
  publishedBy: InputMaybe<UserWhereInput>;
  scheduledIn_every: InputMaybe<ScheduledOperationWhereInput>;
  scheduledIn_none: InputMaybe<ScheduledOperationWhereInput>;
  scheduledIn_some: InputMaybe<ScheduledOperationWhereInput>;
  slug: InputMaybe<Scalars['String']>;
  /** All values containing the given string. */
  slug_contains: InputMaybe<Scalars['String']>;
  /** All values ending with the given string. */
  slug_ends_with: InputMaybe<Scalars['String']>;
  /** All values that are contained in given list. */
  slug_in: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  /** All values that are not equal to given value. */
  slug_not: InputMaybe<Scalars['String']>;
  /** All values not containing the given string. */
  slug_not_contains: InputMaybe<Scalars['String']>;
  /** All values not ending with the given string */
  slug_not_ends_with: InputMaybe<Scalars['String']>;
  /** All values that are not contained in given list. */
  slug_not_in: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  /** All values not starting with the given string. */
  slug_not_starts_with: InputMaybe<Scalars['String']>;
  /** All values starting with the given string. */
  slug_starts_with: InputMaybe<Scalars['String']>;
  updatedAt: InputMaybe<Scalars['DateTime']>;
  /** All values greater than the given value. */
  updatedAt_gt: InputMaybe<Scalars['DateTime']>;
  /** All values greater than or equal the given value. */
  updatedAt_gte: InputMaybe<Scalars['DateTime']>;
  /** All values that are contained in given list. */
  updatedAt_in: InputMaybe<Array<InputMaybe<Scalars['DateTime']>>>;
  /** All values less than the given value. */
  updatedAt_lt: InputMaybe<Scalars['DateTime']>;
  /** All values less than or equal the given value. */
  updatedAt_lte: InputMaybe<Scalars['DateTime']>;
  /** All values that are not equal to given value. */
  updatedAt_not: InputMaybe<Scalars['DateTime']>;
  /** All values that are not contained in given list. */
  updatedAt_not_in: InputMaybe<Array<InputMaybe<Scalars['DateTime']>>>;
  updatedBy: InputMaybe<UserWhereInput>;
};

export enum CategoryOrderByInput {
  CreatedAtAsc = 'createdAt_ASC',
  CreatedAtDesc = 'createdAt_DESC',
  DescriptionAsc = 'description_ASC',
  DescriptionDesc = 'description_DESC',
  IdAsc = 'id_ASC',
  IdDesc = 'id_DESC',
  NameAsc = 'name_ASC',
  NameDesc = 'name_DESC',
  PublishedAtAsc = 'publishedAt_ASC',
  PublishedAtDesc = 'publishedAt_DESC',
  SlugAsc = 'slug_ASC',
  SlugDesc = 'slug_DESC',
  UpdatedAtAsc = 'updatedAt_ASC',
  UpdatedAtDesc = 'updatedAt_DESC'
}

export type CategoryUpdateInput = {
  description: InputMaybe<Scalars['String']>;
  name: InputMaybe<Scalars['String']>;
  products: InputMaybe<ProductUpdateManyInlineInput>;
  slug: InputMaybe<Scalars['String']>;
};

export type CategoryUpdateManyInlineInput = {
  /** Connect multiple existing Category documents */
  connect: InputMaybe<Array<CategoryConnectInput>>;
  /** Create and connect multiple Category documents */
  create: InputMaybe<Array<CategoryCreateInput>>;
  /** Delete multiple Category documents */
  delete: InputMaybe<Array<CategoryWhereUniqueInput>>;
  /** Disconnect multiple Category documents */
  disconnect: InputMaybe<Array<CategoryWhereUniqueInput>>;
  /** Override currently-connected documents with multiple existing Category documents */
  set: InputMaybe<Array<CategoryWhereUniqueInput>>;
  /** Update multiple Category documents */
  update: InputMaybe<Array<CategoryUpdateWithNestedWhereUniqueInput>>;
  /** Upsert multiple Category documents */
  upsert: InputMaybe<Array<CategoryUpsertWithNestedWhereUniqueInput>>;
};

export type CategoryUpdateManyInput = {
  description: InputMaybe<Scalars['String']>;
};

export type CategoryUpdateManyWithNestedWhereInput = {
  /** Update many input */
  data: CategoryUpdateManyInput;
  /** Document search */
  where: CategoryWhereInput;
};

export type CategoryUpdateOneInlineInput = {
  /** Connect existing Category document */
  connect: InputMaybe<CategoryWhereUniqueInput>;
  /** Create and connect one Category document */
  create: InputMaybe<CategoryCreateInput>;
  /** Delete currently connected Category document */
  delete: InputMaybe<Scalars['Boolean']>;
  /** Disconnect currently connected Category document */
  disconnect: InputMaybe<Scalars['Boolean']>;
  /** Update single Category document */
  update: InputMaybe<CategoryUpdateWithNestedWhereUniqueInput>;
  /** Upsert single Category document */
  upsert: InputMaybe<CategoryUpsertWithNestedWhereUniqueInput>;
};

export type CategoryUpdateWithNestedWhereUniqueInput = {
  /** Document to update */
  data: CategoryUpdateInput;
  /** Unique document search */
  where: CategoryWhereUniqueInput;
};

export type CategoryUpsertInput = {
  /** Create document if it didn't exist */
  create: CategoryCreateInput;
  /** Update document if it exists */
  update: CategoryUpdateInput;
};

export type CategoryUpsertWithNestedWhereUniqueInput = {
  /** Upsert data */
  data: CategoryUpsertInput;
  /** Unique document search */
  where: CategoryWhereUniqueInput;
};

/** Identifies documents */
export type CategoryWhereInput = {
  /** Logical AND on all given filters. */
  AND: InputMaybe<Array<CategoryWhereInput>>;
  /** Logical NOT on all given filters combined by AND. */
  NOT: InputMaybe<Array<CategoryWhereInput>>;
  /** Logical OR on all given filters. */
  OR: InputMaybe<Array<CategoryWhereInput>>;
  /** Contains search across all appropriate fields. */
  _search: InputMaybe<Scalars['String']>;
  createdAt: InputMaybe<Scalars['DateTime']>;
  /** All values greater than the given value. */
  createdAt_gt: InputMaybe<Scalars['DateTime']>;
  /** All values greater than or equal the given value. */
  createdAt_gte: InputMaybe<Scalars['DateTime']>;
  /** All values that are contained in given list. */
  createdAt_in: InputMaybe<Array<InputMaybe<Scalars['DateTime']>>>;
  /** All values less than the given value. */
  createdAt_lt: InputMaybe<Scalars['DateTime']>;
  /** All values less than or equal the given value. */
  createdAt_lte: InputMaybe<Scalars['DateTime']>;
  /** All values that are not equal to given value. */
  createdAt_not: InputMaybe<Scalars['DateTime']>;
  /** All values that are not contained in given list. */
  createdAt_not_in: InputMaybe<Array<InputMaybe<Scalars['DateTime']>>>;
  createdBy: InputMaybe<UserWhereInput>;
  description: InputMaybe<Scalars['String']>;
  /** All values containing the given string. */
  description_contains: InputMaybe<Scalars['String']>;
  /** All values ending with the given string. */
  description_ends_with: InputMaybe<Scalars['String']>;
  /** All values that are contained in given list. */
  description_in: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  /** All values that are not equal to given value. */
  description_not: InputMaybe<Scalars['String']>;
  /** All values not containing the given string. */
  description_not_contains: InputMaybe<Scalars['String']>;
  /** All values not ending with the given string */
  description_not_ends_with: InputMaybe<Scalars['String']>;
  /** All values that are not contained in given list. */
  description_not_in: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  /** All values not starting with the given string. */
  description_not_starts_with: InputMaybe<Scalars['String']>;
  /** All values starting with the given string. */
  description_starts_with: InputMaybe<Scalars['String']>;
  id: InputMaybe<Scalars['ID']>;
  /** All values containing the given string. */
  id_contains: InputMaybe<Scalars['ID']>;
  /** All values ending with the given string. */
  id_ends_with: InputMaybe<Scalars['ID']>;
  /** All values that are contained in given list. */
  id_in: InputMaybe<Array<InputMaybe<Scalars['ID']>>>;
  /** All values that are not equal to given value. */
  id_not: InputMaybe<Scalars['ID']>;
  /** All values not containing the given string. */
  id_not_contains: InputMaybe<Scalars['ID']>;
  /** All values not ending with the given string */
  id_not_ends_with: InputMaybe<Scalars['ID']>;
  /** All values that are not contained in given list. */
  id_not_in: InputMaybe<Array<InputMaybe<Scalars['ID']>>>;
  /** All values not starting with the given string. */
  id_not_starts_with: InputMaybe<Scalars['ID']>;
  /** All values starting with the given string. */
  id_starts_with: InputMaybe<Scalars['ID']>;
  name: InputMaybe<Scalars['String']>;
  /** All values containing the given string. */
  name_contains: InputMaybe<Scalars['String']>;
  /** All values ending with the given string. */
  name_ends_with: InputMaybe<Scalars['String']>;
  /** All values that are contained in given list. */
  name_in: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  /** All values that are not equal to given value. */
  name_not: InputMaybe<Scalars['String']>;
  /** All values not containing the given string. */
  name_not_contains: InputMaybe<Scalars['String']>;
  /** All values not ending with the given string */
  name_not_ends_with: InputMaybe<Scalars['String']>;
  /** All values that are not contained in given list. */
  name_not_in: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  /** All values not starting with the given string. */
  name_not_starts_with: InputMaybe<Scalars['String']>;
  /** All values starting with the given string. */
  name_starts_with: InputMaybe<Scalars['String']>;
  products_every: InputMaybe<ProductWhereInput>;
  products_none: InputMaybe<ProductWhereInput>;
  products_some: InputMaybe<ProductWhereInput>;
  publishedAt: InputMaybe<Scalars['DateTime']>;
  /** All values greater than the given value. */
  publishedAt_gt: InputMaybe<Scalars['DateTime']>;
  /** All values greater than or equal the given value. */
  publishedAt_gte: InputMaybe<Scalars['DateTime']>;
  /** All values that are contained in given list. */
  publishedAt_in: InputMaybe<Array<InputMaybe<Scalars['DateTime']>>>;
  /** All values less than the given value. */
  publishedAt_lt: InputMaybe<Scalars['DateTime']>;
  /** All values less than or equal the given value. */
  publishedAt_lte: InputMaybe<Scalars['DateTime']>;
  /** All values that are not equal to given value. */
  publishedAt_not: InputMaybe<Scalars['DateTime']>;
  /** All values that are not contained in given list. */
  publishedAt_not_in: InputMaybe<Array<InputMaybe<Scalars['DateTime']>>>;
  publishedBy: InputMaybe<UserWhereInput>;
  scheduledIn_every: InputMaybe<ScheduledOperationWhereInput>;
  scheduledIn_none: InputMaybe<ScheduledOperationWhereInput>;
  scheduledIn_some: InputMaybe<ScheduledOperationWhereInput>;
  slug: InputMaybe<Scalars['String']>;
  /** All values containing the given string. */
  slug_contains: InputMaybe<Scalars['String']>;
  /** All values ending with the given string. */
  slug_ends_with: InputMaybe<Scalars['String']>;
  /** All values that are contained in given list. */
  slug_in: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  /** All values that are not equal to given value. */
  slug_not: InputMaybe<Scalars['String']>;
  /** All values not containing the given string. */
  slug_not_contains: InputMaybe<Scalars['String']>;
  /** All values not ending with the given string */
  slug_not_ends_with: InputMaybe<Scalars['String']>;
  /** All values that are not contained in given list. */
  slug_not_in: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  /** All values not starting with the given string. */
  slug_not_starts_with: InputMaybe<Scalars['String']>;
  /** All values starting with the given string. */
  slug_starts_with: InputMaybe<Scalars['String']>;
  updatedAt: InputMaybe<Scalars['DateTime']>;
  /** All values greater than the given value. */
  updatedAt_gt: InputMaybe<Scalars['DateTime']>;
  /** All values greater than or equal the given value. */
  updatedAt_gte: InputMaybe<Scalars['DateTime']>;
  /** All values that are contained in given list. */
  updatedAt_in: InputMaybe<Array<InputMaybe<Scalars['DateTime']>>>;
  /** All values less than the given value. */
  updatedAt_lt: InputMaybe<Scalars['DateTime']>;
  /** All values less than or equal the given value. */
  updatedAt_lte: InputMaybe<Scalars['DateTime']>;
  /** All values that are not equal to given value. */
  updatedAt_not: InputMaybe<Scalars['DateTime']>;
  /** All values that are not contained in given list. */
  updatedAt_not_in: InputMaybe<Array<InputMaybe<Scalars['DateTime']>>>;
  updatedBy: InputMaybe<UserWhereInput>;
};

/** References Category record uniquely */
export type CategoryWhereUniqueInput = {
  id: InputMaybe<Scalars['ID']>;
  name: InputMaybe<Scalars['String']>;
  slug: InputMaybe<Scalars['String']>;
};

/** Representing a color value comprising of HEX, RGBA and css color values */
export type Color = {
  __typename?: 'Color';
  css: Scalars['String'];
  hex: Scalars['Hex'];
  rgba: Rgba;
};

/** Accepts either HEX or RGBA color value. At least one of hex or rgba value should be passed. If both are passed RGBA is used. */
export type ColorInput = {
  hex: InputMaybe<Scalars['Hex']>;
  rgba: InputMaybe<RgbaInput>;
};

export type Config = Node & {
  __typename?: 'Config';
  /** The time the document was created */
  createdAt: Scalars['DateTime'];
  /** User that created this document */
  createdBy: Maybe<User>;
  /** Get the document in other stages */
  documentInStages: Array<Config>;
  /** List of Config versions */
  history: Array<Version>;
  /** The unique identifier */
  id: Scalars['ID'];
  /** The time the document was published. Null on documents in draft stage. */
  publishedAt: Maybe<Scalars['DateTime']>;
  /** User that last published this document */
  publishedBy: Maybe<User>;
  scheduledIn: Array<ScheduledOperation>;
  shippingfees: Scalars['Int'];
  /** System stage field */
  stage: Stage;
  /** The time the document was updated */
  updatedAt: Scalars['DateTime'];
  /** User that last updated this document */
  updatedBy: Maybe<User>;
};


export type ConfigCreatedByArgs = {
  locales: InputMaybe<Array<Locale>>;
};


export type ConfigDocumentInStagesArgs = {
  includeCurrent?: Scalars['Boolean'];
  inheritLocale?: Scalars['Boolean'];
  stages?: Array<Stage>;
};


export type ConfigHistoryArgs = {
  limit?: Scalars['Int'];
  skip?: Scalars['Int'];
  stageOverride: InputMaybe<Stage>;
};


export type ConfigPublishedByArgs = {
  locales: InputMaybe<Array<Locale>>;
};


export type ConfigScheduledInArgs = {
  after: InputMaybe<Scalars['String']>;
  before: InputMaybe<Scalars['String']>;
  first: InputMaybe<Scalars['Int']>;
  last: InputMaybe<Scalars['Int']>;
  locales: InputMaybe<Array<Locale>>;
  skip: InputMaybe<Scalars['Int']>;
  where: InputMaybe<ScheduledOperationWhereInput>;
};


export type ConfigUpdatedByArgs = {
  locales: InputMaybe<Array<Locale>>;
};

export type ConfigConnectInput = {
  /** Allow to specify document position in list of connected documents, will default to appending at end of list */
  position: InputMaybe<ConnectPositionInput>;
  /** Document to connect */
  where: ConfigWhereUniqueInput;
};

/** A connection to a list of items. */
export type ConfigConnection = {
  __typename?: 'ConfigConnection';
  aggregate: Aggregate;
  /** A list of edges. */
  edges: Array<ConfigEdge>;
  /** Information to aid in pagination. */
  pageInfo: PageInfo;
};

export type ConfigCreateInput = {
  createdAt: InputMaybe<Scalars['DateTime']>;
  shippingfees: Scalars['Int'];
  updatedAt: InputMaybe<Scalars['DateTime']>;
};

export type ConfigCreateManyInlineInput = {
  /** Connect multiple existing Config documents */
  connect: InputMaybe<Array<ConfigWhereUniqueInput>>;
  /** Create and connect multiple existing Config documents */
  create: InputMaybe<Array<ConfigCreateInput>>;
};

export type ConfigCreateOneInlineInput = {
  /** Connect one existing Config document */
  connect: InputMaybe<ConfigWhereUniqueInput>;
  /** Create and connect one Config document */
  create: InputMaybe<ConfigCreateInput>;
};

/** An edge in a connection. */
export type ConfigEdge = {
  __typename?: 'ConfigEdge';
  /** A cursor for use in pagination. */
  cursor: Scalars['String'];
  /** The item at the end of the edge. */
  node: Config;
};

/** Identifies documents */
export type ConfigManyWhereInput = {
  /** Logical AND on all given filters. */
  AND: InputMaybe<Array<ConfigWhereInput>>;
  /** Logical NOT on all given filters combined by AND. */
  NOT: InputMaybe<Array<ConfigWhereInput>>;
  /** Logical OR on all given filters. */
  OR: InputMaybe<Array<ConfigWhereInput>>;
  /** Contains search across all appropriate fields. */
  _search: InputMaybe<Scalars['String']>;
  createdAt: InputMaybe<Scalars['DateTime']>;
  /** All values greater than the given value. */
  createdAt_gt: InputMaybe<Scalars['DateTime']>;
  /** All values greater than or equal the given value. */
  createdAt_gte: InputMaybe<Scalars['DateTime']>;
  /** All values that are contained in given list. */
  createdAt_in: InputMaybe<Array<InputMaybe<Scalars['DateTime']>>>;
  /** All values less than the given value. */
  createdAt_lt: InputMaybe<Scalars['DateTime']>;
  /** All values less than or equal the given value. */
  createdAt_lte: InputMaybe<Scalars['DateTime']>;
  /** All values that are not equal to given value. */
  createdAt_not: InputMaybe<Scalars['DateTime']>;
  /** All values that are not contained in given list. */
  createdAt_not_in: InputMaybe<Array<InputMaybe<Scalars['DateTime']>>>;
  createdBy: InputMaybe<UserWhereInput>;
  id: InputMaybe<Scalars['ID']>;
  /** All values containing the given string. */
  id_contains: InputMaybe<Scalars['ID']>;
  /** All values ending with the given string. */
  id_ends_with: InputMaybe<Scalars['ID']>;
  /** All values that are contained in given list. */
  id_in: InputMaybe<Array<InputMaybe<Scalars['ID']>>>;
  /** All values that are not equal to given value. */
  id_not: InputMaybe<Scalars['ID']>;
  /** All values not containing the given string. */
  id_not_contains: InputMaybe<Scalars['ID']>;
  /** All values not ending with the given string */
  id_not_ends_with: InputMaybe<Scalars['ID']>;
  /** All values that are not contained in given list. */
  id_not_in: InputMaybe<Array<InputMaybe<Scalars['ID']>>>;
  /** All values not starting with the given string. */
  id_not_starts_with: InputMaybe<Scalars['ID']>;
  /** All values starting with the given string. */
  id_starts_with: InputMaybe<Scalars['ID']>;
  publishedAt: InputMaybe<Scalars['DateTime']>;
  /** All values greater than the given value. */
  publishedAt_gt: InputMaybe<Scalars['DateTime']>;
  /** All values greater than or equal the given value. */
  publishedAt_gte: InputMaybe<Scalars['DateTime']>;
  /** All values that are contained in given list. */
  publishedAt_in: InputMaybe<Array<InputMaybe<Scalars['DateTime']>>>;
  /** All values less than the given value. */
  publishedAt_lt: InputMaybe<Scalars['DateTime']>;
  /** All values less than or equal the given value. */
  publishedAt_lte: InputMaybe<Scalars['DateTime']>;
  /** All values that are not equal to given value. */
  publishedAt_not: InputMaybe<Scalars['DateTime']>;
  /** All values that are not contained in given list. */
  publishedAt_not_in: InputMaybe<Array<InputMaybe<Scalars['DateTime']>>>;
  publishedBy: InputMaybe<UserWhereInput>;
  scheduledIn_every: InputMaybe<ScheduledOperationWhereInput>;
  scheduledIn_none: InputMaybe<ScheduledOperationWhereInput>;
  scheduledIn_some: InputMaybe<ScheduledOperationWhereInput>;
  shippingfees: InputMaybe<Scalars['Int']>;
  /** All values greater than the given value. */
  shippingfees_gt: InputMaybe<Scalars['Int']>;
  /** All values greater than or equal the given value. */
  shippingfees_gte: InputMaybe<Scalars['Int']>;
  /** All values that are contained in given list. */
  shippingfees_in: InputMaybe<Array<InputMaybe<Scalars['Int']>>>;
  /** All values less than the given value. */
  shippingfees_lt: InputMaybe<Scalars['Int']>;
  /** All values less than or equal the given value. */
  shippingfees_lte: InputMaybe<Scalars['Int']>;
  /** All values that are not equal to given value. */
  shippingfees_not: InputMaybe<Scalars['Int']>;
  /** All values that are not contained in given list. */
  shippingfees_not_in: InputMaybe<Array<InputMaybe<Scalars['Int']>>>;
  updatedAt: InputMaybe<Scalars['DateTime']>;
  /** All values greater than the given value. */
  updatedAt_gt: InputMaybe<Scalars['DateTime']>;
  /** All values greater than or equal the given value. */
  updatedAt_gte: InputMaybe<Scalars['DateTime']>;
  /** All values that are contained in given list. */
  updatedAt_in: InputMaybe<Array<InputMaybe<Scalars['DateTime']>>>;
  /** All values less than the given value. */
  updatedAt_lt: InputMaybe<Scalars['DateTime']>;
  /** All values less than or equal the given value. */
  updatedAt_lte: InputMaybe<Scalars['DateTime']>;
  /** All values that are not equal to given value. */
  updatedAt_not: InputMaybe<Scalars['DateTime']>;
  /** All values that are not contained in given list. */
  updatedAt_not_in: InputMaybe<Array<InputMaybe<Scalars['DateTime']>>>;
  updatedBy: InputMaybe<UserWhereInput>;
};

export enum ConfigOrderByInput {
  CreatedAtAsc = 'createdAt_ASC',
  CreatedAtDesc = 'createdAt_DESC',
  IdAsc = 'id_ASC',
  IdDesc = 'id_DESC',
  PublishedAtAsc = 'publishedAt_ASC',
  PublishedAtDesc = 'publishedAt_DESC',
  ShippingfeesAsc = 'shippingfees_ASC',
  ShippingfeesDesc = 'shippingfees_DESC',
  UpdatedAtAsc = 'updatedAt_ASC',
  UpdatedAtDesc = 'updatedAt_DESC'
}

export type ConfigUpdateInput = {
  shippingfees: InputMaybe<Scalars['Int']>;
};

export type ConfigUpdateManyInlineInput = {
  /** Connect multiple existing Config documents */
  connect: InputMaybe<Array<ConfigConnectInput>>;
  /** Create and connect multiple Config documents */
  create: InputMaybe<Array<ConfigCreateInput>>;
  /** Delete multiple Config documents */
  delete: InputMaybe<Array<ConfigWhereUniqueInput>>;
  /** Disconnect multiple Config documents */
  disconnect: InputMaybe<Array<ConfigWhereUniqueInput>>;
  /** Override currently-connected documents with multiple existing Config documents */
  set: InputMaybe<Array<ConfigWhereUniqueInput>>;
  /** Update multiple Config documents */
  update: InputMaybe<Array<ConfigUpdateWithNestedWhereUniqueInput>>;
  /** Upsert multiple Config documents */
  upsert: InputMaybe<Array<ConfigUpsertWithNestedWhereUniqueInput>>;
};

export type ConfigUpdateManyInput = {
  /** No fields in updateMany data input */
  _: InputMaybe<Scalars['String']>;
};

export type ConfigUpdateManyWithNestedWhereInput = {
  /** Update many input */
  data: ConfigUpdateManyInput;
  /** Document search */
  where: ConfigWhereInput;
};

export type ConfigUpdateOneInlineInput = {
  /** Connect existing Config document */
  connect: InputMaybe<ConfigWhereUniqueInput>;
  /** Create and connect one Config document */
  create: InputMaybe<ConfigCreateInput>;
  /** Delete currently connected Config document */
  delete: InputMaybe<Scalars['Boolean']>;
  /** Disconnect currently connected Config document */
  disconnect: InputMaybe<Scalars['Boolean']>;
  /** Update single Config document */
  update: InputMaybe<ConfigUpdateWithNestedWhereUniqueInput>;
  /** Upsert single Config document */
  upsert: InputMaybe<ConfigUpsertWithNestedWhereUniqueInput>;
};

export type ConfigUpdateWithNestedWhereUniqueInput = {
  /** Document to update */
  data: ConfigUpdateInput;
  /** Unique document search */
  where: ConfigWhereUniqueInput;
};

export type ConfigUpsertInput = {
  /** Create document if it didn't exist */
  create: ConfigCreateInput;
  /** Update document if it exists */
  update: ConfigUpdateInput;
};

export type ConfigUpsertWithNestedWhereUniqueInput = {
  /** Upsert data */
  data: ConfigUpsertInput;
  /** Unique document search */
  where: ConfigWhereUniqueInput;
};

/** Identifies documents */
export type ConfigWhereInput = {
  /** Logical AND on all given filters. */
  AND: InputMaybe<Array<ConfigWhereInput>>;
  /** Logical NOT on all given filters combined by AND. */
  NOT: InputMaybe<Array<ConfigWhereInput>>;
  /** Logical OR on all given filters. */
  OR: InputMaybe<Array<ConfigWhereInput>>;
  /** Contains search across all appropriate fields. */
  _search: InputMaybe<Scalars['String']>;
  createdAt: InputMaybe<Scalars['DateTime']>;
  /** All values greater than the given value. */
  createdAt_gt: InputMaybe<Scalars['DateTime']>;
  /** All values greater than or equal the given value. */
  createdAt_gte: InputMaybe<Scalars['DateTime']>;
  /** All values that are contained in given list. */
  createdAt_in: InputMaybe<Array<InputMaybe<Scalars['DateTime']>>>;
  /** All values less than the given value. */
  createdAt_lt: InputMaybe<Scalars['DateTime']>;
  /** All values less than or equal the given value. */
  createdAt_lte: InputMaybe<Scalars['DateTime']>;
  /** All values that are not equal to given value. */
  createdAt_not: InputMaybe<Scalars['DateTime']>;
  /** All values that are not contained in given list. */
  createdAt_not_in: InputMaybe<Array<InputMaybe<Scalars['DateTime']>>>;
  createdBy: InputMaybe<UserWhereInput>;
  id: InputMaybe<Scalars['ID']>;
  /** All values containing the given string. */
  id_contains: InputMaybe<Scalars['ID']>;
  /** All values ending with the given string. */
  id_ends_with: InputMaybe<Scalars['ID']>;
  /** All values that are contained in given list. */
  id_in: InputMaybe<Array<InputMaybe<Scalars['ID']>>>;
  /** All values that are not equal to given value. */
  id_not: InputMaybe<Scalars['ID']>;
  /** All values not containing the given string. */
  id_not_contains: InputMaybe<Scalars['ID']>;
  /** All values not ending with the given string */
  id_not_ends_with: InputMaybe<Scalars['ID']>;
  /** All values that are not contained in given list. */
  id_not_in: InputMaybe<Array<InputMaybe<Scalars['ID']>>>;
  /** All values not starting with the given string. */
  id_not_starts_with: InputMaybe<Scalars['ID']>;
  /** All values starting with the given string. */
  id_starts_with: InputMaybe<Scalars['ID']>;
  publishedAt: InputMaybe<Scalars['DateTime']>;
  /** All values greater than the given value. */
  publishedAt_gt: InputMaybe<Scalars['DateTime']>;
  /** All values greater than or equal the given value. */
  publishedAt_gte: InputMaybe<Scalars['DateTime']>;
  /** All values that are contained in given list. */
  publishedAt_in: InputMaybe<Array<InputMaybe<Scalars['DateTime']>>>;
  /** All values less than the given value. */
  publishedAt_lt: InputMaybe<Scalars['DateTime']>;
  /** All values less than or equal the given value. */
  publishedAt_lte: InputMaybe<Scalars['DateTime']>;
  /** All values that are not equal to given value. */
  publishedAt_not: InputMaybe<Scalars['DateTime']>;
  /** All values that are not contained in given list. */
  publishedAt_not_in: InputMaybe<Array<InputMaybe<Scalars['DateTime']>>>;
  publishedBy: InputMaybe<UserWhereInput>;
  scheduledIn_every: InputMaybe<ScheduledOperationWhereInput>;
  scheduledIn_none: InputMaybe<ScheduledOperationWhereInput>;
  scheduledIn_some: InputMaybe<ScheduledOperationWhereInput>;
  shippingfees: InputMaybe<Scalars['Int']>;
  /** All values greater than the given value. */
  shippingfees_gt: InputMaybe<Scalars['Int']>;
  /** All values greater than or equal the given value. */
  shippingfees_gte: InputMaybe<Scalars['Int']>;
  /** All values that are contained in given list. */
  shippingfees_in: InputMaybe<Array<InputMaybe<Scalars['Int']>>>;
  /** All values less than the given value. */
  shippingfees_lt: InputMaybe<Scalars['Int']>;
  /** All values less than or equal the given value. */
  shippingfees_lte: InputMaybe<Scalars['Int']>;
  /** All values that are not equal to given value. */
  shippingfees_not: InputMaybe<Scalars['Int']>;
  /** All values that are not contained in given list. */
  shippingfees_not_in: InputMaybe<Array<InputMaybe<Scalars['Int']>>>;
  updatedAt: InputMaybe<Scalars['DateTime']>;
  /** All values greater than the given value. */
  updatedAt_gt: InputMaybe<Scalars['DateTime']>;
  /** All values greater than or equal the given value. */
  updatedAt_gte: InputMaybe<Scalars['DateTime']>;
  /** All values that are contained in given list. */
  updatedAt_in: InputMaybe<Array<InputMaybe<Scalars['DateTime']>>>;
  /** All values less than the given value. */
  updatedAt_lt: InputMaybe<Scalars['DateTime']>;
  /** All values less than or equal the given value. */
  updatedAt_lte: InputMaybe<Scalars['DateTime']>;
  /** All values that are not equal to given value. */
  updatedAt_not: InputMaybe<Scalars['DateTime']>;
  /** All values that are not contained in given list. */
  updatedAt_not_in: InputMaybe<Array<InputMaybe<Scalars['DateTime']>>>;
  updatedBy: InputMaybe<UserWhereInput>;
};

/** References Config record uniquely */
export type ConfigWhereUniqueInput = {
  id: InputMaybe<Scalars['ID']>;
  shippingfees: InputMaybe<Scalars['Int']>;
};

export type ConnectPositionInput = {
  /** Connect document after specified document */
  after: InputMaybe<Scalars['ID']>;
  /** Connect document before specified document */
  before: InputMaybe<Scalars['ID']>;
  /** Connect document at last position */
  end: InputMaybe<Scalars['Boolean']>;
  /** Connect document at first position */
  start: InputMaybe<Scalars['Boolean']>;
};

export type Customer = Node & {
  __typename?: 'Customer';
  address: Maybe<Scalars['String']>;
  city: Maybe<Scalars['String']>;
  /** The time the document was created */
  createdAt: Scalars['DateTime'];
  /** User that created this document */
  createdBy: Maybe<User>;
  district: Maybe<Scalars['String']>;
  /** Get the document in other stages */
  documentInStages: Array<Customer>;
  email: Scalars['String'];
  firstname: Maybe<Scalars['String']>;
  /** List of Customer versions */
  history: Array<Version>;
  /** The unique identifier */
  id: Scalars['ID'];
  lastname: Maybe<Scalars['String']>;
  orders: Array<Order>;
  pcode: Maybe<Scalars['String']>;
  /** The time the document was published. Null on documents in draft stage. */
  publishedAt: Maybe<Scalars['DateTime']>;
  /** User that last published this document */
  publishedBy: Maybe<User>;
  scheduledIn: Array<ScheduledOperation>;
  /** System stage field */
  stage: Stage;
  /** The time the document was updated */
  updatedAt: Scalars['DateTime'];
  /** User that last updated this document */
  updatedBy: Maybe<User>;
};


export type CustomerCreatedByArgs = {
  locales: InputMaybe<Array<Locale>>;
};


export type CustomerDocumentInStagesArgs = {
  includeCurrent?: Scalars['Boolean'];
  inheritLocale?: Scalars['Boolean'];
  stages?: Array<Stage>;
};


export type CustomerHistoryArgs = {
  limit?: Scalars['Int'];
  skip?: Scalars['Int'];
  stageOverride: InputMaybe<Stage>;
};


export type CustomerOrdersArgs = {
  after: InputMaybe<Scalars['String']>;
  before: InputMaybe<Scalars['String']>;
  first: InputMaybe<Scalars['Int']>;
  last: InputMaybe<Scalars['Int']>;
  locales: InputMaybe<Array<Locale>>;
  orderBy: InputMaybe<OrderOrderByInput>;
  skip: InputMaybe<Scalars['Int']>;
  where: InputMaybe<OrderWhereInput>;
};


export type CustomerPublishedByArgs = {
  locales: InputMaybe<Array<Locale>>;
};


export type CustomerScheduledInArgs = {
  after: InputMaybe<Scalars['String']>;
  before: InputMaybe<Scalars['String']>;
  first: InputMaybe<Scalars['Int']>;
  last: InputMaybe<Scalars['Int']>;
  locales: InputMaybe<Array<Locale>>;
  skip: InputMaybe<Scalars['Int']>;
  where: InputMaybe<ScheduledOperationWhereInput>;
};


export type CustomerUpdatedByArgs = {
  locales: InputMaybe<Array<Locale>>;
};

export type CustomerConnectInput = {
  /** Allow to specify document position in list of connected documents, will default to appending at end of list */
  position: InputMaybe<ConnectPositionInput>;
  /** Document to connect */
  where: CustomerWhereUniqueInput;
};

/** A connection to a list of items. */
export type CustomerConnection = {
  __typename?: 'CustomerConnection';
  aggregate: Aggregate;
  /** A list of edges. */
  edges: Array<CustomerEdge>;
  /** Information to aid in pagination. */
  pageInfo: PageInfo;
};

export type CustomerCreateInput = {
  address: InputMaybe<Scalars['String']>;
  city: InputMaybe<Scalars['String']>;
  createdAt: InputMaybe<Scalars['DateTime']>;
  district: InputMaybe<Scalars['String']>;
  email: Scalars['String'];
  firstname: InputMaybe<Scalars['String']>;
  lastname: InputMaybe<Scalars['String']>;
  orders: InputMaybe<OrderCreateManyInlineInput>;
  pcode: InputMaybe<Scalars['String']>;
  updatedAt: InputMaybe<Scalars['DateTime']>;
};

export type CustomerCreateManyInlineInput = {
  /** Connect multiple existing Customer documents */
  connect: InputMaybe<Array<CustomerWhereUniqueInput>>;
  /** Create and connect multiple existing Customer documents */
  create: InputMaybe<Array<CustomerCreateInput>>;
};

export type CustomerCreateOneInlineInput = {
  /** Connect one existing Customer document */
  connect: InputMaybe<CustomerWhereUniqueInput>;
  /** Create and connect one Customer document */
  create: InputMaybe<CustomerCreateInput>;
};

/** An edge in a connection. */
export type CustomerEdge = {
  __typename?: 'CustomerEdge';
  /** A cursor for use in pagination. */
  cursor: Scalars['String'];
  /** The item at the end of the edge. */
  node: Customer;
};

/** Identifies documents */
export type CustomerManyWhereInput = {
  /** Logical AND on all given filters. */
  AND: InputMaybe<Array<CustomerWhereInput>>;
  /** Logical NOT on all given filters combined by AND. */
  NOT: InputMaybe<Array<CustomerWhereInput>>;
  /** Logical OR on all given filters. */
  OR: InputMaybe<Array<CustomerWhereInput>>;
  /** Contains search across all appropriate fields. */
  _search: InputMaybe<Scalars['String']>;
  address: InputMaybe<Scalars['String']>;
  /** All values containing the given string. */
  address_contains: InputMaybe<Scalars['String']>;
  /** All values ending with the given string. */
  address_ends_with: InputMaybe<Scalars['String']>;
  /** All values that are contained in given list. */
  address_in: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  /** All values that are not equal to given value. */
  address_not: InputMaybe<Scalars['String']>;
  /** All values not containing the given string. */
  address_not_contains: InputMaybe<Scalars['String']>;
  /** All values not ending with the given string */
  address_not_ends_with: InputMaybe<Scalars['String']>;
  /** All values that are not contained in given list. */
  address_not_in: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  /** All values not starting with the given string. */
  address_not_starts_with: InputMaybe<Scalars['String']>;
  /** All values starting with the given string. */
  address_starts_with: InputMaybe<Scalars['String']>;
  city: InputMaybe<Scalars['String']>;
  /** All values containing the given string. */
  city_contains: InputMaybe<Scalars['String']>;
  /** All values ending with the given string. */
  city_ends_with: InputMaybe<Scalars['String']>;
  /** All values that are contained in given list. */
  city_in: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  /** All values that are not equal to given value. */
  city_not: InputMaybe<Scalars['String']>;
  /** All values not containing the given string. */
  city_not_contains: InputMaybe<Scalars['String']>;
  /** All values not ending with the given string */
  city_not_ends_with: InputMaybe<Scalars['String']>;
  /** All values that are not contained in given list. */
  city_not_in: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  /** All values not starting with the given string. */
  city_not_starts_with: InputMaybe<Scalars['String']>;
  /** All values starting with the given string. */
  city_starts_with: InputMaybe<Scalars['String']>;
  createdAt: InputMaybe<Scalars['DateTime']>;
  /** All values greater than the given value. */
  createdAt_gt: InputMaybe<Scalars['DateTime']>;
  /** All values greater than or equal the given value. */
  createdAt_gte: InputMaybe<Scalars['DateTime']>;
  /** All values that are contained in given list. */
  createdAt_in: InputMaybe<Array<InputMaybe<Scalars['DateTime']>>>;
  /** All values less than the given value. */
  createdAt_lt: InputMaybe<Scalars['DateTime']>;
  /** All values less than or equal the given value. */
  createdAt_lte: InputMaybe<Scalars['DateTime']>;
  /** All values that are not equal to given value. */
  createdAt_not: InputMaybe<Scalars['DateTime']>;
  /** All values that are not contained in given list. */
  createdAt_not_in: InputMaybe<Array<InputMaybe<Scalars['DateTime']>>>;
  createdBy: InputMaybe<UserWhereInput>;
  district: InputMaybe<Scalars['String']>;
  /** All values containing the given string. */
  district_contains: InputMaybe<Scalars['String']>;
  /** All values ending with the given string. */
  district_ends_with: InputMaybe<Scalars['String']>;
  /** All values that are contained in given list. */
  district_in: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  /** All values that are not equal to given value. */
  district_not: InputMaybe<Scalars['String']>;
  /** All values not containing the given string. */
  district_not_contains: InputMaybe<Scalars['String']>;
  /** All values not ending with the given string */
  district_not_ends_with: InputMaybe<Scalars['String']>;
  /** All values that are not contained in given list. */
  district_not_in: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  /** All values not starting with the given string. */
  district_not_starts_with: InputMaybe<Scalars['String']>;
  /** All values starting with the given string. */
  district_starts_with: InputMaybe<Scalars['String']>;
  email: InputMaybe<Scalars['String']>;
  /** All values containing the given string. */
  email_contains: InputMaybe<Scalars['String']>;
  /** All values ending with the given string. */
  email_ends_with: InputMaybe<Scalars['String']>;
  /** All values that are contained in given list. */
  email_in: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  /** All values that are not equal to given value. */
  email_not: InputMaybe<Scalars['String']>;
  /** All values not containing the given string. */
  email_not_contains: InputMaybe<Scalars['String']>;
  /** All values not ending with the given string */
  email_not_ends_with: InputMaybe<Scalars['String']>;
  /** All values that are not contained in given list. */
  email_not_in: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  /** All values not starting with the given string. */
  email_not_starts_with: InputMaybe<Scalars['String']>;
  /** All values starting with the given string. */
  email_starts_with: InputMaybe<Scalars['String']>;
  firstname: InputMaybe<Scalars['String']>;
  /** All values containing the given string. */
  firstname_contains: InputMaybe<Scalars['String']>;
  /** All values ending with the given string. */
  firstname_ends_with: InputMaybe<Scalars['String']>;
  /** All values that are contained in given list. */
  firstname_in: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  /** All values that are not equal to given value. */
  firstname_not: InputMaybe<Scalars['String']>;
  /** All values not containing the given string. */
  firstname_not_contains: InputMaybe<Scalars['String']>;
  /** All values not ending with the given string */
  firstname_not_ends_with: InputMaybe<Scalars['String']>;
  /** All values that are not contained in given list. */
  firstname_not_in: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  /** All values not starting with the given string. */
  firstname_not_starts_with: InputMaybe<Scalars['String']>;
  /** All values starting with the given string. */
  firstname_starts_with: InputMaybe<Scalars['String']>;
  id: InputMaybe<Scalars['ID']>;
  /** All values containing the given string. */
  id_contains: InputMaybe<Scalars['ID']>;
  /** All values ending with the given string. */
  id_ends_with: InputMaybe<Scalars['ID']>;
  /** All values that are contained in given list. */
  id_in: InputMaybe<Array<InputMaybe<Scalars['ID']>>>;
  /** All values that are not equal to given value. */
  id_not: InputMaybe<Scalars['ID']>;
  /** All values not containing the given string. */
  id_not_contains: InputMaybe<Scalars['ID']>;
  /** All values not ending with the given string */
  id_not_ends_with: InputMaybe<Scalars['ID']>;
  /** All values that are not contained in given list. */
  id_not_in: InputMaybe<Array<InputMaybe<Scalars['ID']>>>;
  /** All values not starting with the given string. */
  id_not_starts_with: InputMaybe<Scalars['ID']>;
  /** All values starting with the given string. */
  id_starts_with: InputMaybe<Scalars['ID']>;
  lastname: InputMaybe<Scalars['String']>;
  /** All values containing the given string. */
  lastname_contains: InputMaybe<Scalars['String']>;
  /** All values ending with the given string. */
  lastname_ends_with: InputMaybe<Scalars['String']>;
  /** All values that are contained in given list. */
  lastname_in: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  /** All values that are not equal to given value. */
  lastname_not: InputMaybe<Scalars['String']>;
  /** All values not containing the given string. */
  lastname_not_contains: InputMaybe<Scalars['String']>;
  /** All values not ending with the given string */
  lastname_not_ends_with: InputMaybe<Scalars['String']>;
  /** All values that are not contained in given list. */
  lastname_not_in: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  /** All values not starting with the given string. */
  lastname_not_starts_with: InputMaybe<Scalars['String']>;
  /** All values starting with the given string. */
  lastname_starts_with: InputMaybe<Scalars['String']>;
  orders_every: InputMaybe<OrderWhereInput>;
  orders_none: InputMaybe<OrderWhereInput>;
  orders_some: InputMaybe<OrderWhereInput>;
  pcode: InputMaybe<Scalars['String']>;
  /** All values containing the given string. */
  pcode_contains: InputMaybe<Scalars['String']>;
  /** All values ending with the given string. */
  pcode_ends_with: InputMaybe<Scalars['String']>;
  /** All values that are contained in given list. */
  pcode_in: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  /** All values that are not equal to given value. */
  pcode_not: InputMaybe<Scalars['String']>;
  /** All values not containing the given string. */
  pcode_not_contains: InputMaybe<Scalars['String']>;
  /** All values not ending with the given string */
  pcode_not_ends_with: InputMaybe<Scalars['String']>;
  /** All values that are not contained in given list. */
  pcode_not_in: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  /** All values not starting with the given string. */
  pcode_not_starts_with: InputMaybe<Scalars['String']>;
  /** All values starting with the given string. */
  pcode_starts_with: InputMaybe<Scalars['String']>;
  publishedAt: InputMaybe<Scalars['DateTime']>;
  /** All values greater than the given value. */
  publishedAt_gt: InputMaybe<Scalars['DateTime']>;
  /** All values greater than or equal the given value. */
  publishedAt_gte: InputMaybe<Scalars['DateTime']>;
  /** All values that are contained in given list. */
  publishedAt_in: InputMaybe<Array<InputMaybe<Scalars['DateTime']>>>;
  /** All values less than the given value. */
  publishedAt_lt: InputMaybe<Scalars['DateTime']>;
  /** All values less than or equal the given value. */
  publishedAt_lte: InputMaybe<Scalars['DateTime']>;
  /** All values that are not equal to given value. */
  publishedAt_not: InputMaybe<Scalars['DateTime']>;
  /** All values that are not contained in given list. */
  publishedAt_not_in: InputMaybe<Array<InputMaybe<Scalars['DateTime']>>>;
  publishedBy: InputMaybe<UserWhereInput>;
  scheduledIn_every: InputMaybe<ScheduledOperationWhereInput>;
  scheduledIn_none: InputMaybe<ScheduledOperationWhereInput>;
  scheduledIn_some: InputMaybe<ScheduledOperationWhereInput>;
  updatedAt: InputMaybe<Scalars['DateTime']>;
  /** All values greater than the given value. */
  updatedAt_gt: InputMaybe<Scalars['DateTime']>;
  /** All values greater than or equal the given value. */
  updatedAt_gte: InputMaybe<Scalars['DateTime']>;
  /** All values that are contained in given list. */
  updatedAt_in: InputMaybe<Array<InputMaybe<Scalars['DateTime']>>>;
  /** All values less than the given value. */
  updatedAt_lt: InputMaybe<Scalars['DateTime']>;
  /** All values less than or equal the given value. */
  updatedAt_lte: InputMaybe<Scalars['DateTime']>;
  /** All values that are not equal to given value. */
  updatedAt_not: InputMaybe<Scalars['DateTime']>;
  /** All values that are not contained in given list. */
  updatedAt_not_in: InputMaybe<Array<InputMaybe<Scalars['DateTime']>>>;
  updatedBy: InputMaybe<UserWhereInput>;
};

export enum CustomerOrderByInput {
  AddressAsc = 'address_ASC',
  AddressDesc = 'address_DESC',
  CityAsc = 'city_ASC',
  CityDesc = 'city_DESC',
  CreatedAtAsc = 'createdAt_ASC',
  CreatedAtDesc = 'createdAt_DESC',
  DistrictAsc = 'district_ASC',
  DistrictDesc = 'district_DESC',
  EmailAsc = 'email_ASC',
  EmailDesc = 'email_DESC',
  FirstnameAsc = 'firstname_ASC',
  FirstnameDesc = 'firstname_DESC',
  IdAsc = 'id_ASC',
  IdDesc = 'id_DESC',
  LastnameAsc = 'lastname_ASC',
  LastnameDesc = 'lastname_DESC',
  PcodeAsc = 'pcode_ASC',
  PcodeDesc = 'pcode_DESC',
  PublishedAtAsc = 'publishedAt_ASC',
  PublishedAtDesc = 'publishedAt_DESC',
  UpdatedAtAsc = 'updatedAt_ASC',
  UpdatedAtDesc = 'updatedAt_DESC'
}

export type CustomerUpdateInput = {
  address: InputMaybe<Scalars['String']>;
  city: InputMaybe<Scalars['String']>;
  district: InputMaybe<Scalars['String']>;
  email: InputMaybe<Scalars['String']>;
  firstname: InputMaybe<Scalars['String']>;
  lastname: InputMaybe<Scalars['String']>;
  orders: InputMaybe<OrderUpdateManyInlineInput>;
  pcode: InputMaybe<Scalars['String']>;
};

export type CustomerUpdateManyInlineInput = {
  /** Connect multiple existing Customer documents */
  connect: InputMaybe<Array<CustomerConnectInput>>;
  /** Create and connect multiple Customer documents */
  create: InputMaybe<Array<CustomerCreateInput>>;
  /** Delete multiple Customer documents */
  delete: InputMaybe<Array<CustomerWhereUniqueInput>>;
  /** Disconnect multiple Customer documents */
  disconnect: InputMaybe<Array<CustomerWhereUniqueInput>>;
  /** Override currently-connected documents with multiple existing Customer documents */
  set: InputMaybe<Array<CustomerWhereUniqueInput>>;
  /** Update multiple Customer documents */
  update: InputMaybe<Array<CustomerUpdateWithNestedWhereUniqueInput>>;
  /** Upsert multiple Customer documents */
  upsert: InputMaybe<Array<CustomerUpsertWithNestedWhereUniqueInput>>;
};

export type CustomerUpdateManyInput = {
  address: InputMaybe<Scalars['String']>;
  city: InputMaybe<Scalars['String']>;
  district: InputMaybe<Scalars['String']>;
  firstname: InputMaybe<Scalars['String']>;
  lastname: InputMaybe<Scalars['String']>;
  pcode: InputMaybe<Scalars['String']>;
};

export type CustomerUpdateManyWithNestedWhereInput = {
  /** Update many input */
  data: CustomerUpdateManyInput;
  /** Document search */
  where: CustomerWhereInput;
};

export type CustomerUpdateOneInlineInput = {
  /** Connect existing Customer document */
  connect: InputMaybe<CustomerWhereUniqueInput>;
  /** Create and connect one Customer document */
  create: InputMaybe<CustomerCreateInput>;
  /** Delete currently connected Customer document */
  delete: InputMaybe<Scalars['Boolean']>;
  /** Disconnect currently connected Customer document */
  disconnect: InputMaybe<Scalars['Boolean']>;
  /** Update single Customer document */
  update: InputMaybe<CustomerUpdateWithNestedWhereUniqueInput>;
  /** Upsert single Customer document */
  upsert: InputMaybe<CustomerUpsertWithNestedWhereUniqueInput>;
};

export type CustomerUpdateWithNestedWhereUniqueInput = {
  /** Document to update */
  data: CustomerUpdateInput;
  /** Unique document search */
  where: CustomerWhereUniqueInput;
};

export type CustomerUpsertInput = {
  /** Create document if it didn't exist */
  create: CustomerCreateInput;
  /** Update document if it exists */
  update: CustomerUpdateInput;
};

export type CustomerUpsertWithNestedWhereUniqueInput = {
  /** Upsert data */
  data: CustomerUpsertInput;
  /** Unique document search */
  where: CustomerWhereUniqueInput;
};

/** Identifies documents */
export type CustomerWhereInput = {
  /** Logical AND on all given filters. */
  AND: InputMaybe<Array<CustomerWhereInput>>;
  /** Logical NOT on all given filters combined by AND. */
  NOT: InputMaybe<Array<CustomerWhereInput>>;
  /** Logical OR on all given filters. */
  OR: InputMaybe<Array<CustomerWhereInput>>;
  /** Contains search across all appropriate fields. */
  _search: InputMaybe<Scalars['String']>;
  address: InputMaybe<Scalars['String']>;
  /** All values containing the given string. */
  address_contains: InputMaybe<Scalars['String']>;
  /** All values ending with the given string. */
  address_ends_with: InputMaybe<Scalars['String']>;
  /** All values that are contained in given list. */
  address_in: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  /** All values that are not equal to given value. */
  address_not: InputMaybe<Scalars['String']>;
  /** All values not containing the given string. */
  address_not_contains: InputMaybe<Scalars['String']>;
  /** All values not ending with the given string */
  address_not_ends_with: InputMaybe<Scalars['String']>;
  /** All values that are not contained in given list. */
  address_not_in: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  /** All values not starting with the given string. */
  address_not_starts_with: InputMaybe<Scalars['String']>;
  /** All values starting with the given string. */
  address_starts_with: InputMaybe<Scalars['String']>;
  city: InputMaybe<Scalars['String']>;
  /** All values containing the given string. */
  city_contains: InputMaybe<Scalars['String']>;
  /** All values ending with the given string. */
  city_ends_with: InputMaybe<Scalars['String']>;
  /** All values that are contained in given list. */
  city_in: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  /** All values that are not equal to given value. */
  city_not: InputMaybe<Scalars['String']>;
  /** All values not containing the given string. */
  city_not_contains: InputMaybe<Scalars['String']>;
  /** All values not ending with the given string */
  city_not_ends_with: InputMaybe<Scalars['String']>;
  /** All values that are not contained in given list. */
  city_not_in: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  /** All values not starting with the given string. */
  city_not_starts_with: InputMaybe<Scalars['String']>;
  /** All values starting with the given string. */
  city_starts_with: InputMaybe<Scalars['String']>;
  createdAt: InputMaybe<Scalars['DateTime']>;
  /** All values greater than the given value. */
  createdAt_gt: InputMaybe<Scalars['DateTime']>;
  /** All values greater than or equal the given value. */
  createdAt_gte: InputMaybe<Scalars['DateTime']>;
  /** All values that are contained in given list. */
  createdAt_in: InputMaybe<Array<InputMaybe<Scalars['DateTime']>>>;
  /** All values less than the given value. */
  createdAt_lt: InputMaybe<Scalars['DateTime']>;
  /** All values less than or equal the given value. */
  createdAt_lte: InputMaybe<Scalars['DateTime']>;
  /** All values that are not equal to given value. */
  createdAt_not: InputMaybe<Scalars['DateTime']>;
  /** All values that are not contained in given list. */
  createdAt_not_in: InputMaybe<Array<InputMaybe<Scalars['DateTime']>>>;
  createdBy: InputMaybe<UserWhereInput>;
  district: InputMaybe<Scalars['String']>;
  /** All values containing the given string. */
  district_contains: InputMaybe<Scalars['String']>;
  /** All values ending with the given string. */
  district_ends_with: InputMaybe<Scalars['String']>;
  /** All values that are contained in given list. */
  district_in: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  /** All values that are not equal to given value. */
  district_not: InputMaybe<Scalars['String']>;
  /** All values not containing the given string. */
  district_not_contains: InputMaybe<Scalars['String']>;
  /** All values not ending with the given string */
  district_not_ends_with: InputMaybe<Scalars['String']>;
  /** All values that are not contained in given list. */
  district_not_in: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  /** All values not starting with the given string. */
  district_not_starts_with: InputMaybe<Scalars['String']>;
  /** All values starting with the given string. */
  district_starts_with: InputMaybe<Scalars['String']>;
  email: InputMaybe<Scalars['String']>;
  /** All values containing the given string. */
  email_contains: InputMaybe<Scalars['String']>;
  /** All values ending with the given string. */
  email_ends_with: InputMaybe<Scalars['String']>;
  /** All values that are contained in given list. */
  email_in: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  /** All values that are not equal to given value. */
  email_not: InputMaybe<Scalars['String']>;
  /** All values not containing the given string. */
  email_not_contains: InputMaybe<Scalars['String']>;
  /** All values not ending with the given string */
  email_not_ends_with: InputMaybe<Scalars['String']>;
  /** All values that are not contained in given list. */
  email_not_in: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  /** All values not starting with the given string. */
  email_not_starts_with: InputMaybe<Scalars['String']>;
  /** All values starting with the given string. */
  email_starts_with: InputMaybe<Scalars['String']>;
  firstname: InputMaybe<Scalars['String']>;
  /** All values containing the given string. */
  firstname_contains: InputMaybe<Scalars['String']>;
  /** All values ending with the given string. */
  firstname_ends_with: InputMaybe<Scalars['String']>;
  /** All values that are contained in given list. */
  firstname_in: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  /** All values that are not equal to given value. */
  firstname_not: InputMaybe<Scalars['String']>;
  /** All values not containing the given string. */
  firstname_not_contains: InputMaybe<Scalars['String']>;
  /** All values not ending with the given string */
  firstname_not_ends_with: InputMaybe<Scalars['String']>;
  /** All values that are not contained in given list. */
  firstname_not_in: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  /** All values not starting with the given string. */
  firstname_not_starts_with: InputMaybe<Scalars['String']>;
  /** All values starting with the given string. */
  firstname_starts_with: InputMaybe<Scalars['String']>;
  id: InputMaybe<Scalars['ID']>;
  /** All values containing the given string. */
  id_contains: InputMaybe<Scalars['ID']>;
  /** All values ending with the given string. */
  id_ends_with: InputMaybe<Scalars['ID']>;
  /** All values that are contained in given list. */
  id_in: InputMaybe<Array<InputMaybe<Scalars['ID']>>>;
  /** All values that are not equal to given value. */
  id_not: InputMaybe<Scalars['ID']>;
  /** All values not containing the given string. */
  id_not_contains: InputMaybe<Scalars['ID']>;
  /** All values not ending with the given string */
  id_not_ends_with: InputMaybe<Scalars['ID']>;
  /** All values that are not contained in given list. */
  id_not_in: InputMaybe<Array<InputMaybe<Scalars['ID']>>>;
  /** All values not starting with the given string. */
  id_not_starts_with: InputMaybe<Scalars['ID']>;
  /** All values starting with the given string. */
  id_starts_with: InputMaybe<Scalars['ID']>;
  lastname: InputMaybe<Scalars['String']>;
  /** All values containing the given string. */
  lastname_contains: InputMaybe<Scalars['String']>;
  /** All values ending with the given string. */
  lastname_ends_with: InputMaybe<Scalars['String']>;
  /** All values that are contained in given list. */
  lastname_in: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  /** All values that are not equal to given value. */
  lastname_not: InputMaybe<Scalars['String']>;
  /** All values not containing the given string. */
  lastname_not_contains: InputMaybe<Scalars['String']>;
  /** All values not ending with the given string */
  lastname_not_ends_with: InputMaybe<Scalars['String']>;
  /** All values that are not contained in given list. */
  lastname_not_in: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  /** All values not starting with the given string. */
  lastname_not_starts_with: InputMaybe<Scalars['String']>;
  /** All values starting with the given string. */
  lastname_starts_with: InputMaybe<Scalars['String']>;
  orders_every: InputMaybe<OrderWhereInput>;
  orders_none: InputMaybe<OrderWhereInput>;
  orders_some: InputMaybe<OrderWhereInput>;
  pcode: InputMaybe<Scalars['String']>;
  /** All values containing the given string. */
  pcode_contains: InputMaybe<Scalars['String']>;
  /** All values ending with the given string. */
  pcode_ends_with: InputMaybe<Scalars['String']>;
  /** All values that are contained in given list. */
  pcode_in: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  /** All values that are not equal to given value. */
  pcode_not: InputMaybe<Scalars['String']>;
  /** All values not containing the given string. */
  pcode_not_contains: InputMaybe<Scalars['String']>;
  /** All values not ending with the given string */
  pcode_not_ends_with: InputMaybe<Scalars['String']>;
  /** All values that are not contained in given list. */
  pcode_not_in: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  /** All values not starting with the given string. */
  pcode_not_starts_with: InputMaybe<Scalars['String']>;
  /** All values starting with the given string. */
  pcode_starts_with: InputMaybe<Scalars['String']>;
  publishedAt: InputMaybe<Scalars['DateTime']>;
  /** All values greater than the given value. */
  publishedAt_gt: InputMaybe<Scalars['DateTime']>;
  /** All values greater than or equal the given value. */
  publishedAt_gte: InputMaybe<Scalars['DateTime']>;
  /** All values that are contained in given list. */
  publishedAt_in: InputMaybe<Array<InputMaybe<Scalars['DateTime']>>>;
  /** All values less than the given value. */
  publishedAt_lt: InputMaybe<Scalars['DateTime']>;
  /** All values less than or equal the given value. */
  publishedAt_lte: InputMaybe<Scalars['DateTime']>;
  /** All values that are not equal to given value. */
  publishedAt_not: InputMaybe<Scalars['DateTime']>;
  /** All values that are not contained in given list. */
  publishedAt_not_in: InputMaybe<Array<InputMaybe<Scalars['DateTime']>>>;
  publishedBy: InputMaybe<UserWhereInput>;
  scheduledIn_every: InputMaybe<ScheduledOperationWhereInput>;
  scheduledIn_none: InputMaybe<ScheduledOperationWhereInput>;
  scheduledIn_some: InputMaybe<ScheduledOperationWhereInput>;
  updatedAt: InputMaybe<Scalars['DateTime']>;
  /** All values greater than the given value. */
  updatedAt_gt: InputMaybe<Scalars['DateTime']>;
  /** All values greater than or equal the given value. */
  updatedAt_gte: InputMaybe<Scalars['DateTime']>;
  /** All values that are contained in given list. */
  updatedAt_in: InputMaybe<Array<InputMaybe<Scalars['DateTime']>>>;
  /** All values less than the given value. */
  updatedAt_lt: InputMaybe<Scalars['DateTime']>;
  /** All values less than or equal the given value. */
  updatedAt_lte: InputMaybe<Scalars['DateTime']>;
  /** All values that are not equal to given value. */
  updatedAt_not: InputMaybe<Scalars['DateTime']>;
  /** All values that are not contained in given list. */
  updatedAt_not_in: InputMaybe<Array<InputMaybe<Scalars['DateTime']>>>;
  updatedBy: InputMaybe<UserWhereInput>;
};

/** References Customer record uniquely */
export type CustomerWhereUniqueInput = {
  email: InputMaybe<Scalars['String']>;
  id: InputMaybe<Scalars['ID']>;
};

export enum DocumentFileTypes {
  Doc = 'doc',
  Docx = 'docx',
  Html = 'html',
  Jpg = 'jpg',
  Odp = 'odp',
  Ods = 'ods',
  Odt = 'odt',
  Pdf = 'pdf',
  Png = 'png',
  Ppt = 'ppt',
  Pptx = 'pptx',
  Svg = 'svg',
  Txt = 'txt',
  Webp = 'webp',
  Xls = 'xls',
  Xlsx = 'xlsx'
}

export type DocumentOutputInput = {
  /**
   * Transforms a document into a desired file type.
   * See this matrix for format support:
   *
   * PDF:	jpg, odp, ods, odt, png, svg, txt, and webp
   * DOC:	docx, html, jpg, odt, pdf, png, svg, txt, and webp
   * DOCX:	doc, html, jpg, odt, pdf, png, svg, txt, and webp
   * ODT:	doc, docx, html, jpg, pdf, png, svg, txt, and webp
   * XLS:	jpg, pdf, ods, png, svg, xlsx, and webp
   * XLSX:	jpg, pdf, ods, png, svg, xls, and webp
   * ODS:	jpg, pdf, png, xls, svg, xlsx, and webp
   * PPT:	jpg, odp, pdf, png, svg, pptx, and webp
   * PPTX:	jpg, odp, pdf, png, svg, ppt, and webp
   * ODP:	jpg, pdf, png, ppt, svg, pptx, and webp
   * BMP:	jpg, odp, ods, odt, pdf, png, svg, and webp
   * GIF:	jpg, odp, ods, odt, pdf, png, svg, and webp
   * JPG:	jpg, odp, ods, odt, pdf, png, svg, and webp
   * PNG:	jpg, odp, ods, odt, pdf, png, svg, and webp
   * WEBP:	jpg, odp, ods, odt, pdf, png, svg, and webp
   * TIFF:	jpg, odp, ods, odt, pdf, png, svg, and webp
   * AI:	    jpg, odp, ods, odt, pdf, png, svg, and webp
   * PSD:	jpg, odp, ods, odt, pdf, png, svg, and webp
   * SVG:	jpg, odp, ods, odt, pdf, png, and webp
   * HTML:	jpg, odt, pdf, svg, txt, and webp
   * TXT:	jpg, html, odt, pdf, svg, and webp
   */
  format: InputMaybe<DocumentFileTypes>;
};

/** Transformations for Documents */
export type DocumentTransformationInput = {
  /** Changes the output for the file. */
  output: InputMaybe<DocumentOutputInput>;
};

export type DocumentVersion = {
  __typename?: 'DocumentVersion';
  createdAt: Scalars['DateTime'];
  data: Maybe<Scalars['Json']>;
  id: Scalars['ID'];
  revision: Scalars['Int'];
  stage: Stage;
};

export enum ImageFit {
  /** Resizes the image to fit within the specified parameters without distorting, cropping, or changing the aspect ratio. */
  Clip = 'clip',
  /** Resizes the image to fit the specified parameters exactly by removing any parts of the image that don't fit within the boundaries. */
  Crop = 'crop',
  /** Resizes the image to fit within the parameters, but as opposed to 'fit:clip' will not scale the image if the image is smaller than the output size. */
  Max = 'max',
  /** Resizes the image to fit the specified parameters exactly by scaling the image to the desired size. The aspect ratio of the image is not respected and the image can be distorted using this method. */
  Scale = 'scale'
}

export type ImageResizeInput = {
  /** The default value for the fit parameter is fit:clip. */
  fit: InputMaybe<ImageFit>;
  /** The height in pixels to resize the image to. The value must be an integer from 1 to 10000. */
  height: InputMaybe<Scalars['Int']>;
  /** The width in pixels to resize the image to. The value must be an integer from 1 to 10000. */
  width: InputMaybe<Scalars['Int']>;
};

/** Transformations for Images */
export type ImageTransformationInput = {
  /** Resizes the image */
  resize: InputMaybe<ImageResizeInput>;
};

/** Locale system enumeration */
export enum Locale {
  /** System locale */
  En = 'en'
}

/** Representing a geolocation point with latitude and longitude */
export type Location = {
  __typename?: 'Location';
  distance: Scalars['Float'];
  latitude: Scalars['Float'];
  longitude: Scalars['Float'];
};


/** Representing a geolocation point with latitude and longitude */
export type LocationDistanceArgs = {
  from: LocationInput;
};

/** Input for a geolocation point with latitude and longitude */
export type LocationInput = {
  latitude: Scalars['Float'];
  longitude: Scalars['Float'];
};

export type Mutation = {
  __typename?: 'Mutation';
  /**
   * Create one asset
   * @deprecated Asset mutations will be overhauled soon
   */
  createAsset: Maybe<Asset>;
  /** Create one category */
  createCategory: Maybe<Category>;
  /** Create one config */
  createConfig: Maybe<Config>;
  /** Create one customer */
  createCustomer: Maybe<Customer>;
  /** Create one order */
  createOrder: Maybe<Order>;
  /** Create one orderItem */
  createOrderItem: Maybe<OrderItem>;
  /** Create one product */
  createProduct: Maybe<Product>;
  /** Create one productVariantColor */
  createProductVariantColor: Maybe<ProductVariantColor>;
  /** Create one scheduledRelease */
  createScheduledRelease: Maybe<ScheduledRelease>;
  /** Delete one asset from _all_ existing stages. Returns deleted document. */
  deleteAsset: Maybe<Asset>;
  /** Delete one category from _all_ existing stages. Returns deleted document. */
  deleteCategory: Maybe<Category>;
  /** Delete one config from _all_ existing stages. Returns deleted document. */
  deleteConfig: Maybe<Config>;
  /** Delete one customer from _all_ existing stages. Returns deleted document. */
  deleteCustomer: Maybe<Customer>;
  /**
   * Delete many Asset documents
   * @deprecated Please use the new paginated many mutation (deleteManyAssetsConnection)
   */
  deleteManyAssets: BatchPayload;
  /** Delete many Asset documents, return deleted documents */
  deleteManyAssetsConnection: AssetConnection;
  /**
   * Delete many Category documents
   * @deprecated Please use the new paginated many mutation (deleteManyCategoriesConnection)
   */
  deleteManyCategories: BatchPayload;
  /** Delete many Category documents, return deleted documents */
  deleteManyCategoriesConnection: CategoryConnection;
  /**
   * Delete many Config documents
   * @deprecated Please use the new paginated many mutation (deleteManyConfigsConnection)
   */
  deleteManyConfigs: BatchPayload;
  /** Delete many Config documents, return deleted documents */
  deleteManyConfigsConnection: ConfigConnection;
  /**
   * Delete many Customer documents
   * @deprecated Please use the new paginated many mutation (deleteManyCustomersConnection)
   */
  deleteManyCustomers: BatchPayload;
  /** Delete many Customer documents, return deleted documents */
  deleteManyCustomersConnection: CustomerConnection;
  /**
   * Delete many OrderItem documents
   * @deprecated Please use the new paginated many mutation (deleteManyOrderItemsConnection)
   */
  deleteManyOrderItems: BatchPayload;
  /** Delete many OrderItem documents, return deleted documents */
  deleteManyOrderItemsConnection: OrderItemConnection;
  /**
   * Delete many Order documents
   * @deprecated Please use the new paginated many mutation (deleteManyOrdersConnection)
   */
  deleteManyOrders: BatchPayload;
  /** Delete many Order documents, return deleted documents */
  deleteManyOrdersConnection: OrderConnection;
  /**
   * Delete many ProductVariantColor documents
   * @deprecated Please use the new paginated many mutation (deleteManyProductVariantColorsConnection)
   */
  deleteManyProductVariantColors: BatchPayload;
  /** Delete many ProductVariantColor documents, return deleted documents */
  deleteManyProductVariantColorsConnection: ProductVariantColorConnection;
  /**
   * Delete many Product documents
   * @deprecated Please use the new paginated many mutation (deleteManyProductsConnection)
   */
  deleteManyProducts: BatchPayload;
  /** Delete many Product documents, return deleted documents */
  deleteManyProductsConnection: ProductConnection;
  /** Delete one order from _all_ existing stages. Returns deleted document. */
  deleteOrder: Maybe<Order>;
  /** Delete one orderItem from _all_ existing stages. Returns deleted document. */
  deleteOrderItem: Maybe<OrderItem>;
  /** Delete one product from _all_ existing stages. Returns deleted document. */
  deleteProduct: Maybe<Product>;
  /** Delete one productVariantColor from _all_ existing stages. Returns deleted document. */
  deleteProductVariantColor: Maybe<ProductVariantColor>;
  /** Delete and return scheduled operation */
  deleteScheduledOperation: Maybe<ScheduledOperation>;
  /** Delete one scheduledRelease from _all_ existing stages. Returns deleted document. */
  deleteScheduledRelease: Maybe<ScheduledRelease>;
  /** Publish one asset */
  publishAsset: Maybe<Asset>;
  /** Publish one category */
  publishCategory: Maybe<Category>;
  /** Publish one config */
  publishConfig: Maybe<Config>;
  /** Publish one customer */
  publishCustomer: Maybe<Customer>;
  /**
   * Publish many Asset documents
   * @deprecated Please use the new paginated many mutation (publishManyAssetsConnection)
   */
  publishManyAssets: BatchPayload;
  /** Publish many Asset documents */
  publishManyAssetsConnection: AssetConnection;
  /**
   * Publish many Category documents
   * @deprecated Please use the new paginated many mutation (publishManyCategoriesConnection)
   */
  publishManyCategories: BatchPayload;
  /** Publish many Category documents */
  publishManyCategoriesConnection: CategoryConnection;
  /**
   * Publish many Config documents
   * @deprecated Please use the new paginated many mutation (publishManyConfigsConnection)
   */
  publishManyConfigs: BatchPayload;
  /** Publish many Config documents */
  publishManyConfigsConnection: ConfigConnection;
  /**
   * Publish many Customer documents
   * @deprecated Please use the new paginated many mutation (publishManyCustomersConnection)
   */
  publishManyCustomers: BatchPayload;
  /** Publish many Customer documents */
  publishManyCustomersConnection: CustomerConnection;
  /**
   * Publish many OrderItem documents
   * @deprecated Please use the new paginated many mutation (publishManyOrderItemsConnection)
   */
  publishManyOrderItems: BatchPayload;
  /** Publish many OrderItem documents */
  publishManyOrderItemsConnection: OrderItemConnection;
  /**
   * Publish many Order documents
   * @deprecated Please use the new paginated many mutation (publishManyOrdersConnection)
   */
  publishManyOrders: BatchPayload;
  /** Publish many Order documents */
  publishManyOrdersConnection: OrderConnection;
  /**
   * Publish many ProductVariantColor documents
   * @deprecated Please use the new paginated many mutation (publishManyProductVariantColorsConnection)
   */
  publishManyProductVariantColors: BatchPayload;
  /** Publish many ProductVariantColor documents */
  publishManyProductVariantColorsConnection: ProductVariantColorConnection;
  /**
   * Publish many Product documents
   * @deprecated Please use the new paginated many mutation (publishManyProductsConnection)
   */
  publishManyProducts: BatchPayload;
  /** Publish many Product documents */
  publishManyProductsConnection: ProductConnection;
  /** Publish one order */
  publishOrder: Maybe<Order>;
  /** Publish one orderItem */
  publishOrderItem: Maybe<OrderItem>;
  /** Publish one product */
  publishProduct: Maybe<Product>;
  /** Publish one productVariantColor */
  publishProductVariantColor: Maybe<ProductVariantColor>;
  /** Schedule to publish one asset */
  schedulePublishAsset: Maybe<Asset>;
  /** Schedule to publish one category */
  schedulePublishCategory: Maybe<Category>;
  /** Schedule to publish one config */
  schedulePublishConfig: Maybe<Config>;
  /** Schedule to publish one customer */
  schedulePublishCustomer: Maybe<Customer>;
  /** Schedule to publish one order */
  schedulePublishOrder: Maybe<Order>;
  /** Schedule to publish one orderItem */
  schedulePublishOrderItem: Maybe<OrderItem>;
  /** Schedule to publish one product */
  schedulePublishProduct: Maybe<Product>;
  /** Schedule to publish one productVariantColor */
  schedulePublishProductVariantColor: Maybe<ProductVariantColor>;
  /** Unpublish one asset from selected stages. Unpublish either the complete document with its relations, localizations and base data or specific localizations only. */
  scheduleUnpublishAsset: Maybe<Asset>;
  /** Unpublish one category from selected stages. Unpublish either the complete document with its relations, localizations and base data or specific localizations only. */
  scheduleUnpublishCategory: Maybe<Category>;
  /** Unpublish one config from selected stages. Unpublish either the complete document with its relations, localizations and base data or specific localizations only. */
  scheduleUnpublishConfig: Maybe<Config>;
  /** Unpublish one customer from selected stages. Unpublish either the complete document with its relations, localizations and base data or specific localizations only. */
  scheduleUnpublishCustomer: Maybe<Customer>;
  /** Unpublish one order from selected stages. Unpublish either the complete document with its relations, localizations and base data or specific localizations only. */
  scheduleUnpublishOrder: Maybe<Order>;
  /** Unpublish one orderItem from selected stages. Unpublish either the complete document with its relations, localizations and base data or specific localizations only. */
  scheduleUnpublishOrderItem: Maybe<OrderItem>;
  /** Unpublish one product from selected stages. Unpublish either the complete document with its relations, localizations and base data or specific localizations only. */
  scheduleUnpublishProduct: Maybe<Product>;
  /** Unpublish one productVariantColor from selected stages. Unpublish either the complete document with its relations, localizations and base data or specific localizations only. */
  scheduleUnpublishProductVariantColor: Maybe<ProductVariantColor>;
  /** Unpublish one asset from selected stages. Unpublish either the complete document with its relations, localizations and base data or specific localizations only. */
  unpublishAsset: Maybe<Asset>;
  /** Unpublish one category from selected stages. Unpublish either the complete document with its relations, localizations and base data or specific localizations only. */
  unpublishCategory: Maybe<Category>;
  /** Unpublish one config from selected stages. Unpublish either the complete document with its relations, localizations and base data or specific localizations only. */
  unpublishConfig: Maybe<Config>;
  /** Unpublish one customer from selected stages. Unpublish either the complete document with its relations, localizations and base data or specific localizations only. */
  unpublishCustomer: Maybe<Customer>;
  /**
   * Unpublish many Asset documents
   * @deprecated Please use the new paginated many mutation (unpublishManyAssetsConnection)
   */
  unpublishManyAssets: BatchPayload;
  /** Find many Asset documents that match criteria in specified stage and unpublish from target stages */
  unpublishManyAssetsConnection: AssetConnection;
  /**
   * Unpublish many Category documents
   * @deprecated Please use the new paginated many mutation (unpublishManyCategoriesConnection)
   */
  unpublishManyCategories: BatchPayload;
  /** Find many Category documents that match criteria in specified stage and unpublish from target stages */
  unpublishManyCategoriesConnection: CategoryConnection;
  /**
   * Unpublish many Config documents
   * @deprecated Please use the new paginated many mutation (unpublishManyConfigsConnection)
   */
  unpublishManyConfigs: BatchPayload;
  /** Find many Config documents that match criteria in specified stage and unpublish from target stages */
  unpublishManyConfigsConnection: ConfigConnection;
  /**
   * Unpublish many Customer documents
   * @deprecated Please use the new paginated many mutation (unpublishManyCustomersConnection)
   */
  unpublishManyCustomers: BatchPayload;
  /** Find many Customer documents that match criteria in specified stage and unpublish from target stages */
  unpublishManyCustomersConnection: CustomerConnection;
  /**
   * Unpublish many OrderItem documents
   * @deprecated Please use the new paginated many mutation (unpublishManyOrderItemsConnection)
   */
  unpublishManyOrderItems: BatchPayload;
  /** Find many OrderItem documents that match criteria in specified stage and unpublish from target stages */
  unpublishManyOrderItemsConnection: OrderItemConnection;
  /**
   * Unpublish many Order documents
   * @deprecated Please use the new paginated many mutation (unpublishManyOrdersConnection)
   */
  unpublishManyOrders: BatchPayload;
  /** Find many Order documents that match criteria in specified stage and unpublish from target stages */
  unpublishManyOrdersConnection: OrderConnection;
  /**
   * Unpublish many ProductVariantColor documents
   * @deprecated Please use the new paginated many mutation (unpublishManyProductVariantColorsConnection)
   */
  unpublishManyProductVariantColors: BatchPayload;
  /** Find many ProductVariantColor documents that match criteria in specified stage and unpublish from target stages */
  unpublishManyProductVariantColorsConnection: ProductVariantColorConnection;
  /**
   * Unpublish many Product documents
   * @deprecated Please use the new paginated many mutation (unpublishManyProductsConnection)
   */
  unpublishManyProducts: BatchPayload;
  /** Find many Product documents that match criteria in specified stage and unpublish from target stages */
  unpublishManyProductsConnection: ProductConnection;
  /** Unpublish one order from selected stages. Unpublish either the complete document with its relations, localizations and base data or specific localizations only. */
  unpublishOrder: Maybe<Order>;
  /** Unpublish one orderItem from selected stages. Unpublish either the complete document with its relations, localizations and base data or specific localizations only. */
  unpublishOrderItem: Maybe<OrderItem>;
  /** Unpublish one product from selected stages. Unpublish either the complete document with its relations, localizations and base data or specific localizations only. */
  unpublishProduct: Maybe<Product>;
  /** Unpublish one productVariantColor from selected stages. Unpublish either the complete document with its relations, localizations and base data or specific localizations only. */
  unpublishProductVariantColor: Maybe<ProductVariantColor>;
  /** Update one asset */
  updateAsset: Maybe<Asset>;
  /** Update one category */
  updateCategory: Maybe<Category>;
  /** Update one config */
  updateConfig: Maybe<Config>;
  /** Update one customer */
  updateCustomer: Maybe<Customer>;
  /**
   * Update many assets
   * @deprecated Please use the new paginated many mutation (updateManyAssetsConnection)
   */
  updateManyAssets: BatchPayload;
  /** Update many Asset documents */
  updateManyAssetsConnection: AssetConnection;
  /**
   * Update many categories
   * @deprecated Please use the new paginated many mutation (updateManyCategoriesConnection)
   */
  updateManyCategories: BatchPayload;
  /** Update many Category documents */
  updateManyCategoriesConnection: CategoryConnection;
  /**
   * Update many configs
   * @deprecated Please use the new paginated many mutation (updateManyConfigsConnection)
   */
  updateManyConfigs: BatchPayload;
  /** Update many Config documents */
  updateManyConfigsConnection: ConfigConnection;
  /**
   * Update many customers
   * @deprecated Please use the new paginated many mutation (updateManyCustomersConnection)
   */
  updateManyCustomers: BatchPayload;
  /** Update many Customer documents */
  updateManyCustomersConnection: CustomerConnection;
  /**
   * Update many orderItems
   * @deprecated Please use the new paginated many mutation (updateManyOrderItemsConnection)
   */
  updateManyOrderItems: BatchPayload;
  /** Update many OrderItem documents */
  updateManyOrderItemsConnection: OrderItemConnection;
  /**
   * Update many orders
   * @deprecated Please use the new paginated many mutation (updateManyOrdersConnection)
   */
  updateManyOrders: BatchPayload;
  /** Update many Order documents */
  updateManyOrdersConnection: OrderConnection;
  /**
   * Update many productVariantColors
   * @deprecated Please use the new paginated many mutation (updateManyProductVariantColorsConnection)
   */
  updateManyProductVariantColors: BatchPayload;
  /** Update many ProductVariantColor documents */
  updateManyProductVariantColorsConnection: ProductVariantColorConnection;
  /**
   * Update many products
   * @deprecated Please use the new paginated many mutation (updateManyProductsConnection)
   */
  updateManyProducts: BatchPayload;
  /** Update many Product documents */
  updateManyProductsConnection: ProductConnection;
  /** Update one order */
  updateOrder: Maybe<Order>;
  /** Update one orderItem */
  updateOrderItem: Maybe<OrderItem>;
  /** Update one product */
  updateProduct: Maybe<Product>;
  /** Update one productVariantColor */
  updateProductVariantColor: Maybe<ProductVariantColor>;
  /** Update one scheduledRelease */
  updateScheduledRelease: Maybe<ScheduledRelease>;
  /** Upsert one asset */
  upsertAsset: Maybe<Asset>;
  /** Upsert one category */
  upsertCategory: Maybe<Category>;
  /** Upsert one config */
  upsertConfig: Maybe<Config>;
  /** Upsert one customer */
  upsertCustomer: Maybe<Customer>;
  /** Upsert one order */
  upsertOrder: Maybe<Order>;
  /** Upsert one orderItem */
  upsertOrderItem: Maybe<OrderItem>;
  /** Upsert one product */
  upsertProduct: Maybe<Product>;
  /** Upsert one productVariantColor */
  upsertProductVariantColor: Maybe<ProductVariantColor>;
};


export type MutationCreateAssetArgs = {
  data: AssetCreateInput;
};


export type MutationCreateCategoryArgs = {
  data: CategoryCreateInput;
};


export type MutationCreateConfigArgs = {
  data: ConfigCreateInput;
};


export type MutationCreateCustomerArgs = {
  data: CustomerCreateInput;
};


export type MutationCreateOrderArgs = {
  data: OrderCreateInput;
};


export type MutationCreateOrderItemArgs = {
  data: OrderItemCreateInput;
};


export type MutationCreateProductArgs = {
  data: ProductCreateInput;
};


export type MutationCreateProductVariantColorArgs = {
  data: ProductVariantColorCreateInput;
};


export type MutationCreateScheduledReleaseArgs = {
  data: ScheduledReleaseCreateInput;
};


export type MutationDeleteAssetArgs = {
  where: AssetWhereUniqueInput;
};


export type MutationDeleteCategoryArgs = {
  where: CategoryWhereUniqueInput;
};


export type MutationDeleteConfigArgs = {
  where: ConfigWhereUniqueInput;
};


export type MutationDeleteCustomerArgs = {
  where: CustomerWhereUniqueInput;
};


export type MutationDeleteManyAssetsArgs = {
  where: InputMaybe<AssetManyWhereInput>;
};


export type MutationDeleteManyAssetsConnectionArgs = {
  after: InputMaybe<Scalars['ID']>;
  before: InputMaybe<Scalars['ID']>;
  first: InputMaybe<Scalars['Int']>;
  last: InputMaybe<Scalars['Int']>;
  skip: InputMaybe<Scalars['Int']>;
  where: InputMaybe<AssetManyWhereInput>;
};


export type MutationDeleteManyCategoriesArgs = {
  where: InputMaybe<CategoryManyWhereInput>;
};


export type MutationDeleteManyCategoriesConnectionArgs = {
  after: InputMaybe<Scalars['ID']>;
  before: InputMaybe<Scalars['ID']>;
  first: InputMaybe<Scalars['Int']>;
  last: InputMaybe<Scalars['Int']>;
  skip: InputMaybe<Scalars['Int']>;
  where: InputMaybe<CategoryManyWhereInput>;
};


export type MutationDeleteManyConfigsArgs = {
  where: InputMaybe<ConfigManyWhereInput>;
};


export type MutationDeleteManyConfigsConnectionArgs = {
  after: InputMaybe<Scalars['ID']>;
  before: InputMaybe<Scalars['ID']>;
  first: InputMaybe<Scalars['Int']>;
  last: InputMaybe<Scalars['Int']>;
  skip: InputMaybe<Scalars['Int']>;
  where: InputMaybe<ConfigManyWhereInput>;
};


export type MutationDeleteManyCustomersArgs = {
  where: InputMaybe<CustomerManyWhereInput>;
};


export type MutationDeleteManyCustomersConnectionArgs = {
  after: InputMaybe<Scalars['ID']>;
  before: InputMaybe<Scalars['ID']>;
  first: InputMaybe<Scalars['Int']>;
  last: InputMaybe<Scalars['Int']>;
  skip: InputMaybe<Scalars['Int']>;
  where: InputMaybe<CustomerManyWhereInput>;
};


export type MutationDeleteManyOrderItemsArgs = {
  where: InputMaybe<OrderItemManyWhereInput>;
};


export type MutationDeleteManyOrderItemsConnectionArgs = {
  after: InputMaybe<Scalars['ID']>;
  before: InputMaybe<Scalars['ID']>;
  first: InputMaybe<Scalars['Int']>;
  last: InputMaybe<Scalars['Int']>;
  skip: InputMaybe<Scalars['Int']>;
  where: InputMaybe<OrderItemManyWhereInput>;
};


export type MutationDeleteManyOrdersArgs = {
  where: InputMaybe<OrderManyWhereInput>;
};


export type MutationDeleteManyOrdersConnectionArgs = {
  after: InputMaybe<Scalars['ID']>;
  before: InputMaybe<Scalars['ID']>;
  first: InputMaybe<Scalars['Int']>;
  last: InputMaybe<Scalars['Int']>;
  skip: InputMaybe<Scalars['Int']>;
  where: InputMaybe<OrderManyWhereInput>;
};


export type MutationDeleteManyProductVariantColorsArgs = {
  where: InputMaybe<ProductVariantColorManyWhereInput>;
};


export type MutationDeleteManyProductVariantColorsConnectionArgs = {
  after: InputMaybe<Scalars['ID']>;
  before: InputMaybe<Scalars['ID']>;
  first: InputMaybe<Scalars['Int']>;
  last: InputMaybe<Scalars['Int']>;
  skip: InputMaybe<Scalars['Int']>;
  where: InputMaybe<ProductVariantColorManyWhereInput>;
};


export type MutationDeleteManyProductsArgs = {
  where: InputMaybe<ProductManyWhereInput>;
};


export type MutationDeleteManyProductsConnectionArgs = {
  after: InputMaybe<Scalars['ID']>;
  before: InputMaybe<Scalars['ID']>;
  first: InputMaybe<Scalars['Int']>;
  last: InputMaybe<Scalars['Int']>;
  skip: InputMaybe<Scalars['Int']>;
  where: InputMaybe<ProductManyWhereInput>;
};


export type MutationDeleteOrderArgs = {
  where: OrderWhereUniqueInput;
};


export type MutationDeleteOrderItemArgs = {
  where: OrderItemWhereUniqueInput;
};


export type MutationDeleteProductArgs = {
  where: ProductWhereUniqueInput;
};


export type MutationDeleteProductVariantColorArgs = {
  where: ProductVariantColorWhereUniqueInput;
};


export type MutationDeleteScheduledOperationArgs = {
  where: ScheduledOperationWhereUniqueInput;
};


export type MutationDeleteScheduledReleaseArgs = {
  where: ScheduledReleaseWhereUniqueInput;
};


export type MutationPublishAssetArgs = {
  locales: InputMaybe<Array<Locale>>;
  publishBase?: InputMaybe<Scalars['Boolean']>;
  to?: Array<Stage>;
  where: AssetWhereUniqueInput;
  withDefaultLocale?: InputMaybe<Scalars['Boolean']>;
};


export type MutationPublishCategoryArgs = {
  to?: Array<Stage>;
  where: CategoryWhereUniqueInput;
};


export type MutationPublishConfigArgs = {
  to?: Array<Stage>;
  where: ConfigWhereUniqueInput;
};


export type MutationPublishCustomerArgs = {
  to?: Array<Stage>;
  where: CustomerWhereUniqueInput;
};


export type MutationPublishManyAssetsArgs = {
  locales: InputMaybe<Array<Locale>>;
  publishBase?: InputMaybe<Scalars['Boolean']>;
  to?: Array<Stage>;
  where: InputMaybe<AssetManyWhereInput>;
  withDefaultLocale?: InputMaybe<Scalars['Boolean']>;
};


export type MutationPublishManyAssetsConnectionArgs = {
  after: InputMaybe<Scalars['ID']>;
  before: InputMaybe<Scalars['ID']>;
  first: InputMaybe<Scalars['Int']>;
  from?: InputMaybe<Stage>;
  last: InputMaybe<Scalars['Int']>;
  locales: InputMaybe<Array<Locale>>;
  publishBase?: InputMaybe<Scalars['Boolean']>;
  skip: InputMaybe<Scalars['Int']>;
  to?: Array<Stage>;
  where: InputMaybe<AssetManyWhereInput>;
  withDefaultLocale?: InputMaybe<Scalars['Boolean']>;
};


export type MutationPublishManyCategoriesArgs = {
  to?: Array<Stage>;
  where: InputMaybe<CategoryManyWhereInput>;
};


export type MutationPublishManyCategoriesConnectionArgs = {
  after: InputMaybe<Scalars['ID']>;
  before: InputMaybe<Scalars['ID']>;
  first: InputMaybe<Scalars['Int']>;
  from?: InputMaybe<Stage>;
  last: InputMaybe<Scalars['Int']>;
  skip: InputMaybe<Scalars['Int']>;
  to?: Array<Stage>;
  where: InputMaybe<CategoryManyWhereInput>;
};


export type MutationPublishManyConfigsArgs = {
  to?: Array<Stage>;
  where: InputMaybe<ConfigManyWhereInput>;
};


export type MutationPublishManyConfigsConnectionArgs = {
  after: InputMaybe<Scalars['ID']>;
  before: InputMaybe<Scalars['ID']>;
  first: InputMaybe<Scalars['Int']>;
  from?: InputMaybe<Stage>;
  last: InputMaybe<Scalars['Int']>;
  skip: InputMaybe<Scalars['Int']>;
  to?: Array<Stage>;
  where: InputMaybe<ConfigManyWhereInput>;
};


export type MutationPublishManyCustomersArgs = {
  to?: Array<Stage>;
  where: InputMaybe<CustomerManyWhereInput>;
};


export type MutationPublishManyCustomersConnectionArgs = {
  after: InputMaybe<Scalars['ID']>;
  before: InputMaybe<Scalars['ID']>;
  first: InputMaybe<Scalars['Int']>;
  from?: InputMaybe<Stage>;
  last: InputMaybe<Scalars['Int']>;
  skip: InputMaybe<Scalars['Int']>;
  to?: Array<Stage>;
  where: InputMaybe<CustomerManyWhereInput>;
};


export type MutationPublishManyOrderItemsArgs = {
  to?: Array<Stage>;
  where: InputMaybe<OrderItemManyWhereInput>;
};


export type MutationPublishManyOrderItemsConnectionArgs = {
  after: InputMaybe<Scalars['ID']>;
  before: InputMaybe<Scalars['ID']>;
  first: InputMaybe<Scalars['Int']>;
  from?: InputMaybe<Stage>;
  last: InputMaybe<Scalars['Int']>;
  skip: InputMaybe<Scalars['Int']>;
  to?: Array<Stage>;
  where: InputMaybe<OrderItemManyWhereInput>;
};


export type MutationPublishManyOrdersArgs = {
  to?: Array<Stage>;
  where: InputMaybe<OrderManyWhereInput>;
};


export type MutationPublishManyOrdersConnectionArgs = {
  after: InputMaybe<Scalars['ID']>;
  before: InputMaybe<Scalars['ID']>;
  first: InputMaybe<Scalars['Int']>;
  from?: InputMaybe<Stage>;
  last: InputMaybe<Scalars['Int']>;
  skip: InputMaybe<Scalars['Int']>;
  to?: Array<Stage>;
  where: InputMaybe<OrderManyWhereInput>;
};


export type MutationPublishManyProductVariantColorsArgs = {
  to?: Array<Stage>;
  where: InputMaybe<ProductVariantColorManyWhereInput>;
};


export type MutationPublishManyProductVariantColorsConnectionArgs = {
  after: InputMaybe<Scalars['ID']>;
  before: InputMaybe<Scalars['ID']>;
  first: InputMaybe<Scalars['Int']>;
  from?: InputMaybe<Stage>;
  last: InputMaybe<Scalars['Int']>;
  skip: InputMaybe<Scalars['Int']>;
  to?: Array<Stage>;
  where: InputMaybe<ProductVariantColorManyWhereInput>;
};


export type MutationPublishManyProductsArgs = {
  to?: Array<Stage>;
  where: InputMaybe<ProductManyWhereInput>;
};


export type MutationPublishManyProductsConnectionArgs = {
  after: InputMaybe<Scalars['ID']>;
  before: InputMaybe<Scalars['ID']>;
  first: InputMaybe<Scalars['Int']>;
  from?: InputMaybe<Stage>;
  last: InputMaybe<Scalars['Int']>;
  skip: InputMaybe<Scalars['Int']>;
  to?: Array<Stage>;
  where: InputMaybe<ProductManyWhereInput>;
};


export type MutationPublishOrderArgs = {
  to?: Array<Stage>;
  where: OrderWhereUniqueInput;
};


export type MutationPublishOrderItemArgs = {
  to?: Array<Stage>;
  where: OrderItemWhereUniqueInput;
};


export type MutationPublishProductArgs = {
  to?: Array<Stage>;
  where: ProductWhereUniqueInput;
};


export type MutationPublishProductVariantColorArgs = {
  to?: Array<Stage>;
  where: ProductVariantColorWhereUniqueInput;
};


export type MutationSchedulePublishAssetArgs = {
  locales: InputMaybe<Array<Locale>>;
  publishBase?: InputMaybe<Scalars['Boolean']>;
  releaseAt: InputMaybe<Scalars['DateTime']>;
  releaseId: InputMaybe<Scalars['String']>;
  to?: Array<Stage>;
  where: AssetWhereUniqueInput;
  withDefaultLocale?: InputMaybe<Scalars['Boolean']>;
};


export type MutationSchedulePublishCategoryArgs = {
  releaseAt: InputMaybe<Scalars['DateTime']>;
  releaseId: InputMaybe<Scalars['String']>;
  to?: Array<Stage>;
  where: CategoryWhereUniqueInput;
};


export type MutationSchedulePublishConfigArgs = {
  releaseAt: InputMaybe<Scalars['DateTime']>;
  releaseId: InputMaybe<Scalars['String']>;
  to?: Array<Stage>;
  where: ConfigWhereUniqueInput;
};


export type MutationSchedulePublishCustomerArgs = {
  releaseAt: InputMaybe<Scalars['DateTime']>;
  releaseId: InputMaybe<Scalars['String']>;
  to?: Array<Stage>;
  where: CustomerWhereUniqueInput;
};


export type MutationSchedulePublishOrderArgs = {
  releaseAt: InputMaybe<Scalars['DateTime']>;
  releaseId: InputMaybe<Scalars['String']>;
  to?: Array<Stage>;
  where: OrderWhereUniqueInput;
};


export type MutationSchedulePublishOrderItemArgs = {
  releaseAt: InputMaybe<Scalars['DateTime']>;
  releaseId: InputMaybe<Scalars['String']>;
  to?: Array<Stage>;
  where: OrderItemWhereUniqueInput;
};


export type MutationSchedulePublishProductArgs = {
  releaseAt: InputMaybe<Scalars['DateTime']>;
  releaseId: InputMaybe<Scalars['String']>;
  to?: Array<Stage>;
  where: ProductWhereUniqueInput;
};


export type MutationSchedulePublishProductVariantColorArgs = {
  releaseAt: InputMaybe<Scalars['DateTime']>;
  releaseId: InputMaybe<Scalars['String']>;
  to?: Array<Stage>;
  where: ProductVariantColorWhereUniqueInput;
};


export type MutationScheduleUnpublishAssetArgs = {
  from?: Array<Stage>;
  locales: InputMaybe<Array<Locale>>;
  releaseAt: InputMaybe<Scalars['DateTime']>;
  releaseId: InputMaybe<Scalars['String']>;
  unpublishBase?: InputMaybe<Scalars['Boolean']>;
  where: AssetWhereUniqueInput;
};


export type MutationScheduleUnpublishCategoryArgs = {
  from?: Array<Stage>;
  releaseAt: InputMaybe<Scalars['DateTime']>;
  releaseId: InputMaybe<Scalars['String']>;
  where: CategoryWhereUniqueInput;
};


export type MutationScheduleUnpublishConfigArgs = {
  from?: Array<Stage>;
  releaseAt: InputMaybe<Scalars['DateTime']>;
  releaseId: InputMaybe<Scalars['String']>;
  where: ConfigWhereUniqueInput;
};


export type MutationScheduleUnpublishCustomerArgs = {
  from?: Array<Stage>;
  releaseAt: InputMaybe<Scalars['DateTime']>;
  releaseId: InputMaybe<Scalars['String']>;
  where: CustomerWhereUniqueInput;
};


export type MutationScheduleUnpublishOrderArgs = {
  from?: Array<Stage>;
  releaseAt: InputMaybe<Scalars['DateTime']>;
  releaseId: InputMaybe<Scalars['String']>;
  where: OrderWhereUniqueInput;
};


export type MutationScheduleUnpublishOrderItemArgs = {
  from?: Array<Stage>;
  releaseAt: InputMaybe<Scalars['DateTime']>;
  releaseId: InputMaybe<Scalars['String']>;
  where: OrderItemWhereUniqueInput;
};


export type MutationScheduleUnpublishProductArgs = {
  from?: Array<Stage>;
  releaseAt: InputMaybe<Scalars['DateTime']>;
  releaseId: InputMaybe<Scalars['String']>;
  where: ProductWhereUniqueInput;
};


export type MutationScheduleUnpublishProductVariantColorArgs = {
  from?: Array<Stage>;
  releaseAt: InputMaybe<Scalars['DateTime']>;
  releaseId: InputMaybe<Scalars['String']>;
  where: ProductVariantColorWhereUniqueInput;
};


export type MutationUnpublishAssetArgs = {
  from?: Array<Stage>;
  locales: InputMaybe<Array<Locale>>;
  unpublishBase?: InputMaybe<Scalars['Boolean']>;
  where: AssetWhereUniqueInput;
};


export type MutationUnpublishCategoryArgs = {
  from?: Array<Stage>;
  where: CategoryWhereUniqueInput;
};


export type MutationUnpublishConfigArgs = {
  from?: Array<Stage>;
  where: ConfigWhereUniqueInput;
};


export type MutationUnpublishCustomerArgs = {
  from?: Array<Stage>;
  where: CustomerWhereUniqueInput;
};


export type MutationUnpublishManyAssetsArgs = {
  from?: Array<Stage>;
  locales: InputMaybe<Array<Locale>>;
  unpublishBase?: InputMaybe<Scalars['Boolean']>;
  where: InputMaybe<AssetManyWhereInput>;
};


export type MutationUnpublishManyAssetsConnectionArgs = {
  after: InputMaybe<Scalars['ID']>;
  before: InputMaybe<Scalars['ID']>;
  first: InputMaybe<Scalars['Int']>;
  from?: Array<Stage>;
  last: InputMaybe<Scalars['Int']>;
  locales: InputMaybe<Array<Locale>>;
  skip: InputMaybe<Scalars['Int']>;
  stage?: InputMaybe<Stage>;
  unpublishBase?: InputMaybe<Scalars['Boolean']>;
  where: InputMaybe<AssetManyWhereInput>;
};


export type MutationUnpublishManyCategoriesArgs = {
  from?: Array<Stage>;
  where: InputMaybe<CategoryManyWhereInput>;
};


export type MutationUnpublishManyCategoriesConnectionArgs = {
  after: InputMaybe<Scalars['ID']>;
  before: InputMaybe<Scalars['ID']>;
  first: InputMaybe<Scalars['Int']>;
  from?: Array<Stage>;
  last: InputMaybe<Scalars['Int']>;
  skip: InputMaybe<Scalars['Int']>;
  stage?: InputMaybe<Stage>;
  where: InputMaybe<CategoryManyWhereInput>;
};


export type MutationUnpublishManyConfigsArgs = {
  from?: Array<Stage>;
  where: InputMaybe<ConfigManyWhereInput>;
};


export type MutationUnpublishManyConfigsConnectionArgs = {
  after: InputMaybe<Scalars['ID']>;
  before: InputMaybe<Scalars['ID']>;
  first: InputMaybe<Scalars['Int']>;
  from?: Array<Stage>;
  last: InputMaybe<Scalars['Int']>;
  skip: InputMaybe<Scalars['Int']>;
  stage?: InputMaybe<Stage>;
  where: InputMaybe<ConfigManyWhereInput>;
};


export type MutationUnpublishManyCustomersArgs = {
  from?: Array<Stage>;
  where: InputMaybe<CustomerManyWhereInput>;
};


export type MutationUnpublishManyCustomersConnectionArgs = {
  after: InputMaybe<Scalars['ID']>;
  before: InputMaybe<Scalars['ID']>;
  first: InputMaybe<Scalars['Int']>;
  from?: Array<Stage>;
  last: InputMaybe<Scalars['Int']>;
  skip: InputMaybe<Scalars['Int']>;
  stage?: InputMaybe<Stage>;
  where: InputMaybe<CustomerManyWhereInput>;
};


export type MutationUnpublishManyOrderItemsArgs = {
  from?: Array<Stage>;
  where: InputMaybe<OrderItemManyWhereInput>;
};


export type MutationUnpublishManyOrderItemsConnectionArgs = {
  after: InputMaybe<Scalars['ID']>;
  before: InputMaybe<Scalars['ID']>;
  first: InputMaybe<Scalars['Int']>;
  from?: Array<Stage>;
  last: InputMaybe<Scalars['Int']>;
  skip: InputMaybe<Scalars['Int']>;
  stage?: InputMaybe<Stage>;
  where: InputMaybe<OrderItemManyWhereInput>;
};


export type MutationUnpublishManyOrdersArgs = {
  from?: Array<Stage>;
  where: InputMaybe<OrderManyWhereInput>;
};


export type MutationUnpublishManyOrdersConnectionArgs = {
  after: InputMaybe<Scalars['ID']>;
  before: InputMaybe<Scalars['ID']>;
  first: InputMaybe<Scalars['Int']>;
  from?: Array<Stage>;
  last: InputMaybe<Scalars['Int']>;
  skip: InputMaybe<Scalars['Int']>;
  stage?: InputMaybe<Stage>;
  where: InputMaybe<OrderManyWhereInput>;
};


export type MutationUnpublishManyProductVariantColorsArgs = {
  from?: Array<Stage>;
  where: InputMaybe<ProductVariantColorManyWhereInput>;
};


export type MutationUnpublishManyProductVariantColorsConnectionArgs = {
  after: InputMaybe<Scalars['ID']>;
  before: InputMaybe<Scalars['ID']>;
  first: InputMaybe<Scalars['Int']>;
  from?: Array<Stage>;
  last: InputMaybe<Scalars['Int']>;
  skip: InputMaybe<Scalars['Int']>;
  stage?: InputMaybe<Stage>;
  where: InputMaybe<ProductVariantColorManyWhereInput>;
};


export type MutationUnpublishManyProductsArgs = {
  from?: Array<Stage>;
  where: InputMaybe<ProductManyWhereInput>;
};


export type MutationUnpublishManyProductsConnectionArgs = {
  after: InputMaybe<Scalars['ID']>;
  before: InputMaybe<Scalars['ID']>;
  first: InputMaybe<Scalars['Int']>;
  from?: Array<Stage>;
  last: InputMaybe<Scalars['Int']>;
  skip: InputMaybe<Scalars['Int']>;
  stage?: InputMaybe<Stage>;
  where: InputMaybe<ProductManyWhereInput>;
};


export type MutationUnpublishOrderArgs = {
  from?: Array<Stage>;
  where: OrderWhereUniqueInput;
};


export type MutationUnpublishOrderItemArgs = {
  from?: Array<Stage>;
  where: OrderItemWhereUniqueInput;
};


export type MutationUnpublishProductArgs = {
  from?: Array<Stage>;
  where: ProductWhereUniqueInput;
};


export type MutationUnpublishProductVariantColorArgs = {
  from?: Array<Stage>;
  where: ProductVariantColorWhereUniqueInput;
};


export type MutationUpdateAssetArgs = {
  data: AssetUpdateInput;
  where: AssetWhereUniqueInput;
};


export type MutationUpdateCategoryArgs = {
  data: CategoryUpdateInput;
  where: CategoryWhereUniqueInput;
};


export type MutationUpdateConfigArgs = {
  data: ConfigUpdateInput;
  where: ConfigWhereUniqueInput;
};


export type MutationUpdateCustomerArgs = {
  data: CustomerUpdateInput;
  where: CustomerWhereUniqueInput;
};


export type MutationUpdateManyAssetsArgs = {
  data: AssetUpdateManyInput;
  where: InputMaybe<AssetManyWhereInput>;
};


export type MutationUpdateManyAssetsConnectionArgs = {
  after: InputMaybe<Scalars['ID']>;
  before: InputMaybe<Scalars['ID']>;
  data: AssetUpdateManyInput;
  first: InputMaybe<Scalars['Int']>;
  last: InputMaybe<Scalars['Int']>;
  skip: InputMaybe<Scalars['Int']>;
  where: InputMaybe<AssetManyWhereInput>;
};


export type MutationUpdateManyCategoriesArgs = {
  data: CategoryUpdateManyInput;
  where: InputMaybe<CategoryManyWhereInput>;
};


export type MutationUpdateManyCategoriesConnectionArgs = {
  after: InputMaybe<Scalars['ID']>;
  before: InputMaybe<Scalars['ID']>;
  data: CategoryUpdateManyInput;
  first: InputMaybe<Scalars['Int']>;
  last: InputMaybe<Scalars['Int']>;
  skip: InputMaybe<Scalars['Int']>;
  where: InputMaybe<CategoryManyWhereInput>;
};


export type MutationUpdateManyConfigsArgs = {
  data: ConfigUpdateManyInput;
  where: InputMaybe<ConfigManyWhereInput>;
};


export type MutationUpdateManyConfigsConnectionArgs = {
  after: InputMaybe<Scalars['ID']>;
  before: InputMaybe<Scalars['ID']>;
  data: ConfigUpdateManyInput;
  first: InputMaybe<Scalars['Int']>;
  last: InputMaybe<Scalars['Int']>;
  skip: InputMaybe<Scalars['Int']>;
  where: InputMaybe<ConfigManyWhereInput>;
};


export type MutationUpdateManyCustomersArgs = {
  data: CustomerUpdateManyInput;
  where: InputMaybe<CustomerManyWhereInput>;
};


export type MutationUpdateManyCustomersConnectionArgs = {
  after: InputMaybe<Scalars['ID']>;
  before: InputMaybe<Scalars['ID']>;
  data: CustomerUpdateManyInput;
  first: InputMaybe<Scalars['Int']>;
  last: InputMaybe<Scalars['Int']>;
  skip: InputMaybe<Scalars['Int']>;
  where: InputMaybe<CustomerManyWhereInput>;
};


export type MutationUpdateManyOrderItemsArgs = {
  data: OrderItemUpdateManyInput;
  where: InputMaybe<OrderItemManyWhereInput>;
};


export type MutationUpdateManyOrderItemsConnectionArgs = {
  after: InputMaybe<Scalars['ID']>;
  before: InputMaybe<Scalars['ID']>;
  data: OrderItemUpdateManyInput;
  first: InputMaybe<Scalars['Int']>;
  last: InputMaybe<Scalars['Int']>;
  skip: InputMaybe<Scalars['Int']>;
  where: InputMaybe<OrderItemManyWhereInput>;
};


export type MutationUpdateManyOrdersArgs = {
  data: OrderUpdateManyInput;
  where: InputMaybe<OrderManyWhereInput>;
};


export type MutationUpdateManyOrdersConnectionArgs = {
  after: InputMaybe<Scalars['ID']>;
  before: InputMaybe<Scalars['ID']>;
  data: OrderUpdateManyInput;
  first: InputMaybe<Scalars['Int']>;
  last: InputMaybe<Scalars['Int']>;
  skip: InputMaybe<Scalars['Int']>;
  where: InputMaybe<OrderManyWhereInput>;
};


export type MutationUpdateManyProductVariantColorsArgs = {
  data: ProductVariantColorUpdateManyInput;
  where: InputMaybe<ProductVariantColorManyWhereInput>;
};


export type MutationUpdateManyProductVariantColorsConnectionArgs = {
  after: InputMaybe<Scalars['ID']>;
  before: InputMaybe<Scalars['ID']>;
  data: ProductVariantColorUpdateManyInput;
  first: InputMaybe<Scalars['Int']>;
  last: InputMaybe<Scalars['Int']>;
  skip: InputMaybe<Scalars['Int']>;
  where: InputMaybe<ProductVariantColorManyWhereInput>;
};


export type MutationUpdateManyProductsArgs = {
  data: ProductUpdateManyInput;
  where: InputMaybe<ProductManyWhereInput>;
};


export type MutationUpdateManyProductsConnectionArgs = {
  after: InputMaybe<Scalars['ID']>;
  before: InputMaybe<Scalars['ID']>;
  data: ProductUpdateManyInput;
  first: InputMaybe<Scalars['Int']>;
  last: InputMaybe<Scalars['Int']>;
  skip: InputMaybe<Scalars['Int']>;
  where: InputMaybe<ProductManyWhereInput>;
};


export type MutationUpdateOrderArgs = {
  data: OrderUpdateInput;
  where: OrderWhereUniqueInput;
};


export type MutationUpdateOrderItemArgs = {
  data: OrderItemUpdateInput;
  where: OrderItemWhereUniqueInput;
};


export type MutationUpdateProductArgs = {
  data: ProductUpdateInput;
  where: ProductWhereUniqueInput;
};


export type MutationUpdateProductVariantColorArgs = {
  data: ProductVariantColorUpdateInput;
  where: ProductVariantColorWhereUniqueInput;
};


export type MutationUpdateScheduledReleaseArgs = {
  data: ScheduledReleaseUpdateInput;
  where: ScheduledReleaseWhereUniqueInput;
};


export type MutationUpsertAssetArgs = {
  upsert: AssetUpsertInput;
  where: AssetWhereUniqueInput;
};


export type MutationUpsertCategoryArgs = {
  upsert: CategoryUpsertInput;
  where: CategoryWhereUniqueInput;
};


export type MutationUpsertConfigArgs = {
  upsert: ConfigUpsertInput;
  where: ConfigWhereUniqueInput;
};


export type MutationUpsertCustomerArgs = {
  upsert: CustomerUpsertInput;
  where: CustomerWhereUniqueInput;
};


export type MutationUpsertOrderArgs = {
  upsert: OrderUpsertInput;
  where: OrderWhereUniqueInput;
};


export type MutationUpsertOrderItemArgs = {
  upsert: OrderItemUpsertInput;
  where: OrderItemWhereUniqueInput;
};


export type MutationUpsertProductArgs = {
  upsert: ProductUpsertInput;
  where: ProductWhereUniqueInput;
};


export type MutationUpsertProductVariantColorArgs = {
  upsert: ProductVariantColorUpsertInput;
  where: ProductVariantColorWhereUniqueInput;
};

/** An object with an ID */
export type Node = {
  /** The id of the object. */
  id: Scalars['ID'];
  /** The Stage of an object */
  stage: Stage;
};

export type Order = Node & {
  __typename?: 'Order';
  /** The time the document was created */
  createdAt: Scalars['DateTime'];
  /** User that created this document */
  createdBy: Maybe<User>;
  customer: Maybe<Customer>;
  /** Get the document in other stages */
  documentInStages: Array<Order>;
  /** List of Order versions */
  history: Array<Version>;
  /** The unique identifier */
  id: Scalars['ID'];
  orderItems: Array<OrderItem>;
  /** The time the document was published. Null on documents in draft stage. */
  publishedAt: Maybe<Scalars['DateTime']>;
  /** User that last published this document */
  publishedBy: Maybe<User>;
  scheduledIn: Array<ScheduledOperation>;
  /** System stage field */
  stage: Stage;
  stripeCheckoutId: Scalars['String'];
  total: Scalars['Int'];
  /** The time the document was updated */
  updatedAt: Scalars['DateTime'];
  /** User that last updated this document */
  updatedBy: Maybe<User>;
};


export type OrderCreatedByArgs = {
  locales: InputMaybe<Array<Locale>>;
};


export type OrderCustomerArgs = {
  locales: InputMaybe<Array<Locale>>;
};


export type OrderDocumentInStagesArgs = {
  includeCurrent?: Scalars['Boolean'];
  inheritLocale?: Scalars['Boolean'];
  stages?: Array<Stage>;
};


export type OrderHistoryArgs = {
  limit?: Scalars['Int'];
  skip?: Scalars['Int'];
  stageOverride: InputMaybe<Stage>;
};


export type OrderOrderItemsArgs = {
  after: InputMaybe<Scalars['String']>;
  before: InputMaybe<Scalars['String']>;
  first: InputMaybe<Scalars['Int']>;
  last: InputMaybe<Scalars['Int']>;
  locales: InputMaybe<Array<Locale>>;
  orderBy: InputMaybe<OrderItemOrderByInput>;
  skip: InputMaybe<Scalars['Int']>;
  where: InputMaybe<OrderItemWhereInput>;
};


export type OrderPublishedByArgs = {
  locales: InputMaybe<Array<Locale>>;
};


export type OrderScheduledInArgs = {
  after: InputMaybe<Scalars['String']>;
  before: InputMaybe<Scalars['String']>;
  first: InputMaybe<Scalars['Int']>;
  last: InputMaybe<Scalars['Int']>;
  locales: InputMaybe<Array<Locale>>;
  skip: InputMaybe<Scalars['Int']>;
  where: InputMaybe<ScheduledOperationWhereInput>;
};


export type OrderUpdatedByArgs = {
  locales: InputMaybe<Array<Locale>>;
};

export type OrderConnectInput = {
  /** Allow to specify document position in list of connected documents, will default to appending at end of list */
  position: InputMaybe<ConnectPositionInput>;
  /** Document to connect */
  where: OrderWhereUniqueInput;
};

/** A connection to a list of items. */
export type OrderConnection = {
  __typename?: 'OrderConnection';
  aggregate: Aggregate;
  /** A list of edges. */
  edges: Array<OrderEdge>;
  /** Information to aid in pagination. */
  pageInfo: PageInfo;
};

export type OrderCreateInput = {
  createdAt: InputMaybe<Scalars['DateTime']>;
  customer: InputMaybe<CustomerCreateOneInlineInput>;
  orderItems: InputMaybe<OrderItemCreateManyInlineInput>;
  stripeCheckoutId: Scalars['String'];
  total: Scalars['Int'];
  updatedAt: InputMaybe<Scalars['DateTime']>;
};

export type OrderCreateManyInlineInput = {
  /** Connect multiple existing Order documents */
  connect: InputMaybe<Array<OrderWhereUniqueInput>>;
  /** Create and connect multiple existing Order documents */
  create: InputMaybe<Array<OrderCreateInput>>;
};

export type OrderCreateOneInlineInput = {
  /** Connect one existing Order document */
  connect: InputMaybe<OrderWhereUniqueInput>;
  /** Create and connect one Order document */
  create: InputMaybe<OrderCreateInput>;
};

/** An edge in a connection. */
export type OrderEdge = {
  __typename?: 'OrderEdge';
  /** A cursor for use in pagination. */
  cursor: Scalars['String'];
  /** The item at the end of the edge. */
  node: Order;
};

export type OrderItem = Node & {
  __typename?: 'OrderItem';
  /** The time the document was created */
  createdAt: Scalars['DateTime'];
  /** User that created this document */
  createdBy: Maybe<User>;
  /** Get the document in other stages */
  documentInStages: Array<OrderItem>;
  /** List of OrderItem versions */
  history: Array<Version>;
  /** The unique identifier */
  id: Scalars['ID'];
  order: Maybe<Order>;
  product: Maybe<Product>;
  productVariantColor: Maybe<ProductVariantColor>;
  /** The time the document was published. Null on documents in draft stage. */
  publishedAt: Maybe<Scalars['DateTime']>;
  /** User that last published this document */
  publishedBy: Maybe<User>;
  quantity: Scalars['Int'];
  scheduledIn: Array<ScheduledOperation>;
  /** System stage field */
  stage: Stage;
  total: Scalars['Int'];
  /** The time the document was updated */
  updatedAt: Scalars['DateTime'];
  /** User that last updated this document */
  updatedBy: Maybe<User>;
};


export type OrderItemCreatedByArgs = {
  locales: InputMaybe<Array<Locale>>;
};


export type OrderItemDocumentInStagesArgs = {
  includeCurrent?: Scalars['Boolean'];
  inheritLocale?: Scalars['Boolean'];
  stages?: Array<Stage>;
};


export type OrderItemHistoryArgs = {
  limit?: Scalars['Int'];
  skip?: Scalars['Int'];
  stageOverride: InputMaybe<Stage>;
};


export type OrderItemOrderArgs = {
  locales: InputMaybe<Array<Locale>>;
};


export type OrderItemProductArgs = {
  locales: InputMaybe<Array<Locale>>;
};


export type OrderItemProductVariantColorArgs = {
  locales: InputMaybe<Array<Locale>>;
};


export type OrderItemPublishedByArgs = {
  locales: InputMaybe<Array<Locale>>;
};


export type OrderItemScheduledInArgs = {
  after: InputMaybe<Scalars['String']>;
  before: InputMaybe<Scalars['String']>;
  first: InputMaybe<Scalars['Int']>;
  last: InputMaybe<Scalars['Int']>;
  locales: InputMaybe<Array<Locale>>;
  skip: InputMaybe<Scalars['Int']>;
  where: InputMaybe<ScheduledOperationWhereInput>;
};


export type OrderItemUpdatedByArgs = {
  locales: InputMaybe<Array<Locale>>;
};

export type OrderItemConnectInput = {
  /** Allow to specify document position in list of connected documents, will default to appending at end of list */
  position: InputMaybe<ConnectPositionInput>;
  /** Document to connect */
  where: OrderItemWhereUniqueInput;
};

/** A connection to a list of items. */
export type OrderItemConnection = {
  __typename?: 'OrderItemConnection';
  aggregate: Aggregate;
  /** A list of edges. */
  edges: Array<OrderItemEdge>;
  /** Information to aid in pagination. */
  pageInfo: PageInfo;
};

export type OrderItemCreateInput = {
  createdAt: InputMaybe<Scalars['DateTime']>;
  order: InputMaybe<OrderCreateOneInlineInput>;
  product: InputMaybe<ProductCreateOneInlineInput>;
  productVariantColor: InputMaybe<ProductVariantColorCreateOneInlineInput>;
  quantity: Scalars['Int'];
  total: Scalars['Int'];
  updatedAt: InputMaybe<Scalars['DateTime']>;
};

export type OrderItemCreateManyInlineInput = {
  /** Connect multiple existing OrderItem documents */
  connect: InputMaybe<Array<OrderItemWhereUniqueInput>>;
  /** Create and connect multiple existing OrderItem documents */
  create: InputMaybe<Array<OrderItemCreateInput>>;
};

export type OrderItemCreateOneInlineInput = {
  /** Connect one existing OrderItem document */
  connect: InputMaybe<OrderItemWhereUniqueInput>;
  /** Create and connect one OrderItem document */
  create: InputMaybe<OrderItemCreateInput>;
};

/** An edge in a connection. */
export type OrderItemEdge = {
  __typename?: 'OrderItemEdge';
  /** A cursor for use in pagination. */
  cursor: Scalars['String'];
  /** The item at the end of the edge. */
  node: OrderItem;
};

/** Identifies documents */
export type OrderItemManyWhereInput = {
  /** Logical AND on all given filters. */
  AND: InputMaybe<Array<OrderItemWhereInput>>;
  /** Logical NOT on all given filters combined by AND. */
  NOT: InputMaybe<Array<OrderItemWhereInput>>;
  /** Logical OR on all given filters. */
  OR: InputMaybe<Array<OrderItemWhereInput>>;
  /** Contains search across all appropriate fields. */
  _search: InputMaybe<Scalars['String']>;
  createdAt: InputMaybe<Scalars['DateTime']>;
  /** All values greater than the given value. */
  createdAt_gt: InputMaybe<Scalars['DateTime']>;
  /** All values greater than or equal the given value. */
  createdAt_gte: InputMaybe<Scalars['DateTime']>;
  /** All values that are contained in given list. */
  createdAt_in: InputMaybe<Array<InputMaybe<Scalars['DateTime']>>>;
  /** All values less than the given value. */
  createdAt_lt: InputMaybe<Scalars['DateTime']>;
  /** All values less than or equal the given value. */
  createdAt_lte: InputMaybe<Scalars['DateTime']>;
  /** All values that are not equal to given value. */
  createdAt_not: InputMaybe<Scalars['DateTime']>;
  /** All values that are not contained in given list. */
  createdAt_not_in: InputMaybe<Array<InputMaybe<Scalars['DateTime']>>>;
  createdBy: InputMaybe<UserWhereInput>;
  id: InputMaybe<Scalars['ID']>;
  /** All values containing the given string. */
  id_contains: InputMaybe<Scalars['ID']>;
  /** All values ending with the given string. */
  id_ends_with: InputMaybe<Scalars['ID']>;
  /** All values that are contained in given list. */
  id_in: InputMaybe<Array<InputMaybe<Scalars['ID']>>>;
  /** All values that are not equal to given value. */
  id_not: InputMaybe<Scalars['ID']>;
  /** All values not containing the given string. */
  id_not_contains: InputMaybe<Scalars['ID']>;
  /** All values not ending with the given string */
  id_not_ends_with: InputMaybe<Scalars['ID']>;
  /** All values that are not contained in given list. */
  id_not_in: InputMaybe<Array<InputMaybe<Scalars['ID']>>>;
  /** All values not starting with the given string. */
  id_not_starts_with: InputMaybe<Scalars['ID']>;
  /** All values starting with the given string. */
  id_starts_with: InputMaybe<Scalars['ID']>;
  order: InputMaybe<OrderWhereInput>;
  product: InputMaybe<ProductWhereInput>;
  productVariantColor: InputMaybe<ProductVariantColorWhereInput>;
  publishedAt: InputMaybe<Scalars['DateTime']>;
  /** All values greater than the given value. */
  publishedAt_gt: InputMaybe<Scalars['DateTime']>;
  /** All values greater than or equal the given value. */
  publishedAt_gte: InputMaybe<Scalars['DateTime']>;
  /** All values that are contained in given list. */
  publishedAt_in: InputMaybe<Array<InputMaybe<Scalars['DateTime']>>>;
  /** All values less than the given value. */
  publishedAt_lt: InputMaybe<Scalars['DateTime']>;
  /** All values less than or equal the given value. */
  publishedAt_lte: InputMaybe<Scalars['DateTime']>;
  /** All values that are not equal to given value. */
  publishedAt_not: InputMaybe<Scalars['DateTime']>;
  /** All values that are not contained in given list. */
  publishedAt_not_in: InputMaybe<Array<InputMaybe<Scalars['DateTime']>>>;
  publishedBy: InputMaybe<UserWhereInput>;
  quantity: InputMaybe<Scalars['Int']>;
  /** All values greater than the given value. */
  quantity_gt: InputMaybe<Scalars['Int']>;
  /** All values greater than or equal the given value. */
  quantity_gte: InputMaybe<Scalars['Int']>;
  /** All values that are contained in given list. */
  quantity_in: InputMaybe<Array<InputMaybe<Scalars['Int']>>>;
  /** All values less than the given value. */
  quantity_lt: InputMaybe<Scalars['Int']>;
  /** All values less than or equal the given value. */
  quantity_lte: InputMaybe<Scalars['Int']>;
  /** All values that are not equal to given value. */
  quantity_not: InputMaybe<Scalars['Int']>;
  /** All values that are not contained in given list. */
  quantity_not_in: InputMaybe<Array<InputMaybe<Scalars['Int']>>>;
  scheduledIn_every: InputMaybe<ScheduledOperationWhereInput>;
  scheduledIn_none: InputMaybe<ScheduledOperationWhereInput>;
  scheduledIn_some: InputMaybe<ScheduledOperationWhereInput>;
  total: InputMaybe<Scalars['Int']>;
  /** All values greater than the given value. */
  total_gt: InputMaybe<Scalars['Int']>;
  /** All values greater than or equal the given value. */
  total_gte: InputMaybe<Scalars['Int']>;
  /** All values that are contained in given list. */
  total_in: InputMaybe<Array<InputMaybe<Scalars['Int']>>>;
  /** All values less than the given value. */
  total_lt: InputMaybe<Scalars['Int']>;
  /** All values less than or equal the given value. */
  total_lte: InputMaybe<Scalars['Int']>;
  /** All values that are not equal to given value. */
  total_not: InputMaybe<Scalars['Int']>;
  /** All values that are not contained in given list. */
  total_not_in: InputMaybe<Array<InputMaybe<Scalars['Int']>>>;
  updatedAt: InputMaybe<Scalars['DateTime']>;
  /** All values greater than the given value. */
  updatedAt_gt: InputMaybe<Scalars['DateTime']>;
  /** All values greater than or equal the given value. */
  updatedAt_gte: InputMaybe<Scalars['DateTime']>;
  /** All values that are contained in given list. */
  updatedAt_in: InputMaybe<Array<InputMaybe<Scalars['DateTime']>>>;
  /** All values less than the given value. */
  updatedAt_lt: InputMaybe<Scalars['DateTime']>;
  /** All values less than or equal the given value. */
  updatedAt_lte: InputMaybe<Scalars['DateTime']>;
  /** All values that are not equal to given value. */
  updatedAt_not: InputMaybe<Scalars['DateTime']>;
  /** All values that are not contained in given list. */
  updatedAt_not_in: InputMaybe<Array<InputMaybe<Scalars['DateTime']>>>;
  updatedBy: InputMaybe<UserWhereInput>;
};

export enum OrderItemOrderByInput {
  CreatedAtAsc = 'createdAt_ASC',
  CreatedAtDesc = 'createdAt_DESC',
  IdAsc = 'id_ASC',
  IdDesc = 'id_DESC',
  PublishedAtAsc = 'publishedAt_ASC',
  PublishedAtDesc = 'publishedAt_DESC',
  QuantityAsc = 'quantity_ASC',
  QuantityDesc = 'quantity_DESC',
  TotalAsc = 'total_ASC',
  TotalDesc = 'total_DESC',
  UpdatedAtAsc = 'updatedAt_ASC',
  UpdatedAtDesc = 'updatedAt_DESC'
}

export type OrderItemUpdateInput = {
  order: InputMaybe<OrderUpdateOneInlineInput>;
  product: InputMaybe<ProductUpdateOneInlineInput>;
  productVariantColor: InputMaybe<ProductVariantColorUpdateOneInlineInput>;
  quantity: InputMaybe<Scalars['Int']>;
  total: InputMaybe<Scalars['Int']>;
};

export type OrderItemUpdateManyInlineInput = {
  /** Connect multiple existing OrderItem documents */
  connect: InputMaybe<Array<OrderItemConnectInput>>;
  /** Create and connect multiple OrderItem documents */
  create: InputMaybe<Array<OrderItemCreateInput>>;
  /** Delete multiple OrderItem documents */
  delete: InputMaybe<Array<OrderItemWhereUniqueInput>>;
  /** Disconnect multiple OrderItem documents */
  disconnect: InputMaybe<Array<OrderItemWhereUniqueInput>>;
  /** Override currently-connected documents with multiple existing OrderItem documents */
  set: InputMaybe<Array<OrderItemWhereUniqueInput>>;
  /** Update multiple OrderItem documents */
  update: InputMaybe<Array<OrderItemUpdateWithNestedWhereUniqueInput>>;
  /** Upsert multiple OrderItem documents */
  upsert: InputMaybe<Array<OrderItemUpsertWithNestedWhereUniqueInput>>;
};

export type OrderItemUpdateManyInput = {
  quantity: InputMaybe<Scalars['Int']>;
  total: InputMaybe<Scalars['Int']>;
};

export type OrderItemUpdateManyWithNestedWhereInput = {
  /** Update many input */
  data: OrderItemUpdateManyInput;
  /** Document search */
  where: OrderItemWhereInput;
};

export type OrderItemUpdateOneInlineInput = {
  /** Connect existing OrderItem document */
  connect: InputMaybe<OrderItemWhereUniqueInput>;
  /** Create and connect one OrderItem document */
  create: InputMaybe<OrderItemCreateInput>;
  /** Delete currently connected OrderItem document */
  delete: InputMaybe<Scalars['Boolean']>;
  /** Disconnect currently connected OrderItem document */
  disconnect: InputMaybe<Scalars['Boolean']>;
  /** Update single OrderItem document */
  update: InputMaybe<OrderItemUpdateWithNestedWhereUniqueInput>;
  /** Upsert single OrderItem document */
  upsert: InputMaybe<OrderItemUpsertWithNestedWhereUniqueInput>;
};

export type OrderItemUpdateWithNestedWhereUniqueInput = {
  /** Document to update */
  data: OrderItemUpdateInput;
  /** Unique document search */
  where: OrderItemWhereUniqueInput;
};

export type OrderItemUpsertInput = {
  /** Create document if it didn't exist */
  create: OrderItemCreateInput;
  /** Update document if it exists */
  update: OrderItemUpdateInput;
};

export type OrderItemUpsertWithNestedWhereUniqueInput = {
  /** Upsert data */
  data: OrderItemUpsertInput;
  /** Unique document search */
  where: OrderItemWhereUniqueInput;
};

/** Identifies documents */
export type OrderItemWhereInput = {
  /** Logical AND on all given filters. */
  AND: InputMaybe<Array<OrderItemWhereInput>>;
  /** Logical NOT on all given filters combined by AND. */
  NOT: InputMaybe<Array<OrderItemWhereInput>>;
  /** Logical OR on all given filters. */
  OR: InputMaybe<Array<OrderItemWhereInput>>;
  /** Contains search across all appropriate fields. */
  _search: InputMaybe<Scalars['String']>;
  createdAt: InputMaybe<Scalars['DateTime']>;
  /** All values greater than the given value. */
  createdAt_gt: InputMaybe<Scalars['DateTime']>;
  /** All values greater than or equal the given value. */
  createdAt_gte: InputMaybe<Scalars['DateTime']>;
  /** All values that are contained in given list. */
  createdAt_in: InputMaybe<Array<InputMaybe<Scalars['DateTime']>>>;
  /** All values less than the given value. */
  createdAt_lt: InputMaybe<Scalars['DateTime']>;
  /** All values less than or equal the given value. */
  createdAt_lte: InputMaybe<Scalars['DateTime']>;
  /** All values that are not equal to given value. */
  createdAt_not: InputMaybe<Scalars['DateTime']>;
  /** All values that are not contained in given list. */
  createdAt_not_in: InputMaybe<Array<InputMaybe<Scalars['DateTime']>>>;
  createdBy: InputMaybe<UserWhereInput>;
  id: InputMaybe<Scalars['ID']>;
  /** All values containing the given string. */
  id_contains: InputMaybe<Scalars['ID']>;
  /** All values ending with the given string. */
  id_ends_with: InputMaybe<Scalars['ID']>;
  /** All values that are contained in given list. */
  id_in: InputMaybe<Array<InputMaybe<Scalars['ID']>>>;
  /** All values that are not equal to given value. */
  id_not: InputMaybe<Scalars['ID']>;
  /** All values not containing the given string. */
  id_not_contains: InputMaybe<Scalars['ID']>;
  /** All values not ending with the given string */
  id_not_ends_with: InputMaybe<Scalars['ID']>;
  /** All values that are not contained in given list. */
  id_not_in: InputMaybe<Array<InputMaybe<Scalars['ID']>>>;
  /** All values not starting with the given string. */
  id_not_starts_with: InputMaybe<Scalars['ID']>;
  /** All values starting with the given string. */
  id_starts_with: InputMaybe<Scalars['ID']>;
  order: InputMaybe<OrderWhereInput>;
  product: InputMaybe<ProductWhereInput>;
  productVariantColor: InputMaybe<ProductVariantColorWhereInput>;
  publishedAt: InputMaybe<Scalars['DateTime']>;
  /** All values greater than the given value. */
  publishedAt_gt: InputMaybe<Scalars['DateTime']>;
  /** All values greater than or equal the given value. */
  publishedAt_gte: InputMaybe<Scalars['DateTime']>;
  /** All values that are contained in given list. */
  publishedAt_in: InputMaybe<Array<InputMaybe<Scalars['DateTime']>>>;
  /** All values less than the given value. */
  publishedAt_lt: InputMaybe<Scalars['DateTime']>;
  /** All values less than or equal the given value. */
  publishedAt_lte: InputMaybe<Scalars['DateTime']>;
  /** All values that are not equal to given value. */
  publishedAt_not: InputMaybe<Scalars['DateTime']>;
  /** All values that are not contained in given list. */
  publishedAt_not_in: InputMaybe<Array<InputMaybe<Scalars['DateTime']>>>;
  publishedBy: InputMaybe<UserWhereInput>;
  quantity: InputMaybe<Scalars['Int']>;
  /** All values greater than the given value. */
  quantity_gt: InputMaybe<Scalars['Int']>;
  /** All values greater than or equal the given value. */
  quantity_gte: InputMaybe<Scalars['Int']>;
  /** All values that are contained in given list. */
  quantity_in: InputMaybe<Array<InputMaybe<Scalars['Int']>>>;
  /** All values less than the given value. */
  quantity_lt: InputMaybe<Scalars['Int']>;
  /** All values less than or equal the given value. */
  quantity_lte: InputMaybe<Scalars['Int']>;
  /** All values that are not equal to given value. */
  quantity_not: InputMaybe<Scalars['Int']>;
  /** All values that are not contained in given list. */
  quantity_not_in: InputMaybe<Array<InputMaybe<Scalars['Int']>>>;
  scheduledIn_every: InputMaybe<ScheduledOperationWhereInput>;
  scheduledIn_none: InputMaybe<ScheduledOperationWhereInput>;
  scheduledIn_some: InputMaybe<ScheduledOperationWhereInput>;
  total: InputMaybe<Scalars['Int']>;
  /** All values greater than the given value. */
  total_gt: InputMaybe<Scalars['Int']>;
  /** All values greater than or equal the given value. */
  total_gte: InputMaybe<Scalars['Int']>;
  /** All values that are contained in given list. */
  total_in: InputMaybe<Array<InputMaybe<Scalars['Int']>>>;
  /** All values less than the given value. */
  total_lt: InputMaybe<Scalars['Int']>;
  /** All values less than or equal the given value. */
  total_lte: InputMaybe<Scalars['Int']>;
  /** All values that are not equal to given value. */
  total_not: InputMaybe<Scalars['Int']>;
  /** All values that are not contained in given list. */
  total_not_in: InputMaybe<Array<InputMaybe<Scalars['Int']>>>;
  updatedAt: InputMaybe<Scalars['DateTime']>;
  /** All values greater than the given value. */
  updatedAt_gt: InputMaybe<Scalars['DateTime']>;
  /** All values greater than or equal the given value. */
  updatedAt_gte: InputMaybe<Scalars['DateTime']>;
  /** All values that are contained in given list. */
  updatedAt_in: InputMaybe<Array<InputMaybe<Scalars['DateTime']>>>;
  /** All values less than the given value. */
  updatedAt_lt: InputMaybe<Scalars['DateTime']>;
  /** All values less than or equal the given value. */
  updatedAt_lte: InputMaybe<Scalars['DateTime']>;
  /** All values that are not equal to given value. */
  updatedAt_not: InputMaybe<Scalars['DateTime']>;
  /** All values that are not contained in given list. */
  updatedAt_not_in: InputMaybe<Array<InputMaybe<Scalars['DateTime']>>>;
  updatedBy: InputMaybe<UserWhereInput>;
};

/** References OrderItem record uniquely */
export type OrderItemWhereUniqueInput = {
  id: InputMaybe<Scalars['ID']>;
};

/** Identifies documents */
export type OrderManyWhereInput = {
  /** Logical AND on all given filters. */
  AND: InputMaybe<Array<OrderWhereInput>>;
  /** Logical NOT on all given filters combined by AND. */
  NOT: InputMaybe<Array<OrderWhereInput>>;
  /** Logical OR on all given filters. */
  OR: InputMaybe<Array<OrderWhereInput>>;
  /** Contains search across all appropriate fields. */
  _search: InputMaybe<Scalars['String']>;
  createdAt: InputMaybe<Scalars['DateTime']>;
  /** All values greater than the given value. */
  createdAt_gt: InputMaybe<Scalars['DateTime']>;
  /** All values greater than or equal the given value. */
  createdAt_gte: InputMaybe<Scalars['DateTime']>;
  /** All values that are contained in given list. */
  createdAt_in: InputMaybe<Array<InputMaybe<Scalars['DateTime']>>>;
  /** All values less than the given value. */
  createdAt_lt: InputMaybe<Scalars['DateTime']>;
  /** All values less than or equal the given value. */
  createdAt_lte: InputMaybe<Scalars['DateTime']>;
  /** All values that are not equal to given value. */
  createdAt_not: InputMaybe<Scalars['DateTime']>;
  /** All values that are not contained in given list. */
  createdAt_not_in: InputMaybe<Array<InputMaybe<Scalars['DateTime']>>>;
  createdBy: InputMaybe<UserWhereInput>;
  customer: InputMaybe<CustomerWhereInput>;
  id: InputMaybe<Scalars['ID']>;
  /** All values containing the given string. */
  id_contains: InputMaybe<Scalars['ID']>;
  /** All values ending with the given string. */
  id_ends_with: InputMaybe<Scalars['ID']>;
  /** All values that are contained in given list. */
  id_in: InputMaybe<Array<InputMaybe<Scalars['ID']>>>;
  /** All values that are not equal to given value. */
  id_not: InputMaybe<Scalars['ID']>;
  /** All values not containing the given string. */
  id_not_contains: InputMaybe<Scalars['ID']>;
  /** All values not ending with the given string */
  id_not_ends_with: InputMaybe<Scalars['ID']>;
  /** All values that are not contained in given list. */
  id_not_in: InputMaybe<Array<InputMaybe<Scalars['ID']>>>;
  /** All values not starting with the given string. */
  id_not_starts_with: InputMaybe<Scalars['ID']>;
  /** All values starting with the given string. */
  id_starts_with: InputMaybe<Scalars['ID']>;
  orderItems_every: InputMaybe<OrderItemWhereInput>;
  orderItems_none: InputMaybe<OrderItemWhereInput>;
  orderItems_some: InputMaybe<OrderItemWhereInput>;
  publishedAt: InputMaybe<Scalars['DateTime']>;
  /** All values greater than the given value. */
  publishedAt_gt: InputMaybe<Scalars['DateTime']>;
  /** All values greater than or equal the given value. */
  publishedAt_gte: InputMaybe<Scalars['DateTime']>;
  /** All values that are contained in given list. */
  publishedAt_in: InputMaybe<Array<InputMaybe<Scalars['DateTime']>>>;
  /** All values less than the given value. */
  publishedAt_lt: InputMaybe<Scalars['DateTime']>;
  /** All values less than or equal the given value. */
  publishedAt_lte: InputMaybe<Scalars['DateTime']>;
  /** All values that are not equal to given value. */
  publishedAt_not: InputMaybe<Scalars['DateTime']>;
  /** All values that are not contained in given list. */
  publishedAt_not_in: InputMaybe<Array<InputMaybe<Scalars['DateTime']>>>;
  publishedBy: InputMaybe<UserWhereInput>;
  scheduledIn_every: InputMaybe<ScheduledOperationWhereInput>;
  scheduledIn_none: InputMaybe<ScheduledOperationWhereInput>;
  scheduledIn_some: InputMaybe<ScheduledOperationWhereInput>;
  stripeCheckoutId: InputMaybe<Scalars['String']>;
  /** All values containing the given string. */
  stripeCheckoutId_contains: InputMaybe<Scalars['String']>;
  /** All values ending with the given string. */
  stripeCheckoutId_ends_with: InputMaybe<Scalars['String']>;
  /** All values that are contained in given list. */
  stripeCheckoutId_in: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  /** All values that are not equal to given value. */
  stripeCheckoutId_not: InputMaybe<Scalars['String']>;
  /** All values not containing the given string. */
  stripeCheckoutId_not_contains: InputMaybe<Scalars['String']>;
  /** All values not ending with the given string */
  stripeCheckoutId_not_ends_with: InputMaybe<Scalars['String']>;
  /** All values that are not contained in given list. */
  stripeCheckoutId_not_in: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  /** All values not starting with the given string. */
  stripeCheckoutId_not_starts_with: InputMaybe<Scalars['String']>;
  /** All values starting with the given string. */
  stripeCheckoutId_starts_with: InputMaybe<Scalars['String']>;
  total: InputMaybe<Scalars['Int']>;
  /** All values greater than the given value. */
  total_gt: InputMaybe<Scalars['Int']>;
  /** All values greater than or equal the given value. */
  total_gte: InputMaybe<Scalars['Int']>;
  /** All values that are contained in given list. */
  total_in: InputMaybe<Array<InputMaybe<Scalars['Int']>>>;
  /** All values less than the given value. */
  total_lt: InputMaybe<Scalars['Int']>;
  /** All values less than or equal the given value. */
  total_lte: InputMaybe<Scalars['Int']>;
  /** All values that are not equal to given value. */
  total_not: InputMaybe<Scalars['Int']>;
  /** All values that are not contained in given list. */
  total_not_in: InputMaybe<Array<InputMaybe<Scalars['Int']>>>;
  updatedAt: InputMaybe<Scalars['DateTime']>;
  /** All values greater than the given value. */
  updatedAt_gt: InputMaybe<Scalars['DateTime']>;
  /** All values greater than or equal the given value. */
  updatedAt_gte: InputMaybe<Scalars['DateTime']>;
  /** All values that are contained in given list. */
  updatedAt_in: InputMaybe<Array<InputMaybe<Scalars['DateTime']>>>;
  /** All values less than the given value. */
  updatedAt_lt: InputMaybe<Scalars['DateTime']>;
  /** All values less than or equal the given value. */
  updatedAt_lte: InputMaybe<Scalars['DateTime']>;
  /** All values that are not equal to given value. */
  updatedAt_not: InputMaybe<Scalars['DateTime']>;
  /** All values that are not contained in given list. */
  updatedAt_not_in: InputMaybe<Array<InputMaybe<Scalars['DateTime']>>>;
  updatedBy: InputMaybe<UserWhereInput>;
};

export enum OrderOrderByInput {
  CreatedAtAsc = 'createdAt_ASC',
  CreatedAtDesc = 'createdAt_DESC',
  IdAsc = 'id_ASC',
  IdDesc = 'id_DESC',
  PublishedAtAsc = 'publishedAt_ASC',
  PublishedAtDesc = 'publishedAt_DESC',
  StripeCheckoutIdAsc = 'stripeCheckoutId_ASC',
  StripeCheckoutIdDesc = 'stripeCheckoutId_DESC',
  TotalAsc = 'total_ASC',
  TotalDesc = 'total_DESC',
  UpdatedAtAsc = 'updatedAt_ASC',
  UpdatedAtDesc = 'updatedAt_DESC'
}

export type OrderUpdateInput = {
  customer: InputMaybe<CustomerUpdateOneInlineInput>;
  orderItems: InputMaybe<OrderItemUpdateManyInlineInput>;
  stripeCheckoutId: InputMaybe<Scalars['String']>;
  total: InputMaybe<Scalars['Int']>;
};

export type OrderUpdateManyInlineInput = {
  /** Connect multiple existing Order documents */
  connect: InputMaybe<Array<OrderConnectInput>>;
  /** Create and connect multiple Order documents */
  create: InputMaybe<Array<OrderCreateInput>>;
  /** Delete multiple Order documents */
  delete: InputMaybe<Array<OrderWhereUniqueInput>>;
  /** Disconnect multiple Order documents */
  disconnect: InputMaybe<Array<OrderWhereUniqueInput>>;
  /** Override currently-connected documents with multiple existing Order documents */
  set: InputMaybe<Array<OrderWhereUniqueInput>>;
  /** Update multiple Order documents */
  update: InputMaybe<Array<OrderUpdateWithNestedWhereUniqueInput>>;
  /** Upsert multiple Order documents */
  upsert: InputMaybe<Array<OrderUpsertWithNestedWhereUniqueInput>>;
};

export type OrderUpdateManyInput = {
  stripeCheckoutId: InputMaybe<Scalars['String']>;
  total: InputMaybe<Scalars['Int']>;
};

export type OrderUpdateManyWithNestedWhereInput = {
  /** Update many input */
  data: OrderUpdateManyInput;
  /** Document search */
  where: OrderWhereInput;
};

export type OrderUpdateOneInlineInput = {
  /** Connect existing Order document */
  connect: InputMaybe<OrderWhereUniqueInput>;
  /** Create and connect one Order document */
  create: InputMaybe<OrderCreateInput>;
  /** Delete currently connected Order document */
  delete: InputMaybe<Scalars['Boolean']>;
  /** Disconnect currently connected Order document */
  disconnect: InputMaybe<Scalars['Boolean']>;
  /** Update single Order document */
  update: InputMaybe<OrderUpdateWithNestedWhereUniqueInput>;
  /** Upsert single Order document */
  upsert: InputMaybe<OrderUpsertWithNestedWhereUniqueInput>;
};

export type OrderUpdateWithNestedWhereUniqueInput = {
  /** Document to update */
  data: OrderUpdateInput;
  /** Unique document search */
  where: OrderWhereUniqueInput;
};

export type OrderUpsertInput = {
  /** Create document if it didn't exist */
  create: OrderCreateInput;
  /** Update document if it exists */
  update: OrderUpdateInput;
};

export type OrderUpsertWithNestedWhereUniqueInput = {
  /** Upsert data */
  data: OrderUpsertInput;
  /** Unique document search */
  where: OrderWhereUniqueInput;
};

/** Identifies documents */
export type OrderWhereInput = {
  /** Logical AND on all given filters. */
  AND: InputMaybe<Array<OrderWhereInput>>;
  /** Logical NOT on all given filters combined by AND. */
  NOT: InputMaybe<Array<OrderWhereInput>>;
  /** Logical OR on all given filters. */
  OR: InputMaybe<Array<OrderWhereInput>>;
  /** Contains search across all appropriate fields. */
  _search: InputMaybe<Scalars['String']>;
  createdAt: InputMaybe<Scalars['DateTime']>;
  /** All values greater than the given value. */
  createdAt_gt: InputMaybe<Scalars['DateTime']>;
  /** All values greater than or equal the given value. */
  createdAt_gte: InputMaybe<Scalars['DateTime']>;
  /** All values that are contained in given list. */
  createdAt_in: InputMaybe<Array<InputMaybe<Scalars['DateTime']>>>;
  /** All values less than the given value. */
  createdAt_lt: InputMaybe<Scalars['DateTime']>;
  /** All values less than or equal the given value. */
  createdAt_lte: InputMaybe<Scalars['DateTime']>;
  /** All values that are not equal to given value. */
  createdAt_not: InputMaybe<Scalars['DateTime']>;
  /** All values that are not contained in given list. */
  createdAt_not_in: InputMaybe<Array<InputMaybe<Scalars['DateTime']>>>;
  createdBy: InputMaybe<UserWhereInput>;
  customer: InputMaybe<CustomerWhereInput>;
  id: InputMaybe<Scalars['ID']>;
  /** All values containing the given string. */
  id_contains: InputMaybe<Scalars['ID']>;
  /** All values ending with the given string. */
  id_ends_with: InputMaybe<Scalars['ID']>;
  /** All values that are contained in given list. */
  id_in: InputMaybe<Array<InputMaybe<Scalars['ID']>>>;
  /** All values that are not equal to given value. */
  id_not: InputMaybe<Scalars['ID']>;
  /** All values not containing the given string. */
  id_not_contains: InputMaybe<Scalars['ID']>;
  /** All values not ending with the given string */
  id_not_ends_with: InputMaybe<Scalars['ID']>;
  /** All values that are not contained in given list. */
  id_not_in: InputMaybe<Array<InputMaybe<Scalars['ID']>>>;
  /** All values not starting with the given string. */
  id_not_starts_with: InputMaybe<Scalars['ID']>;
  /** All values starting with the given string. */
  id_starts_with: InputMaybe<Scalars['ID']>;
  orderItems_every: InputMaybe<OrderItemWhereInput>;
  orderItems_none: InputMaybe<OrderItemWhereInput>;
  orderItems_some: InputMaybe<OrderItemWhereInput>;
  publishedAt: InputMaybe<Scalars['DateTime']>;
  /** All values greater than the given value. */
  publishedAt_gt: InputMaybe<Scalars['DateTime']>;
  /** All values greater than or equal the given value. */
  publishedAt_gte: InputMaybe<Scalars['DateTime']>;
  /** All values that are contained in given list. */
  publishedAt_in: InputMaybe<Array<InputMaybe<Scalars['DateTime']>>>;
  /** All values less than the given value. */
  publishedAt_lt: InputMaybe<Scalars['DateTime']>;
  /** All values less than or equal the given value. */
  publishedAt_lte: InputMaybe<Scalars['DateTime']>;
  /** All values that are not equal to given value. */
  publishedAt_not: InputMaybe<Scalars['DateTime']>;
  /** All values that are not contained in given list. */
  publishedAt_not_in: InputMaybe<Array<InputMaybe<Scalars['DateTime']>>>;
  publishedBy: InputMaybe<UserWhereInput>;
  scheduledIn_every: InputMaybe<ScheduledOperationWhereInput>;
  scheduledIn_none: InputMaybe<ScheduledOperationWhereInput>;
  scheduledIn_some: InputMaybe<ScheduledOperationWhereInput>;
  stripeCheckoutId: InputMaybe<Scalars['String']>;
  /** All values containing the given string. */
  stripeCheckoutId_contains: InputMaybe<Scalars['String']>;
  /** All values ending with the given string. */
  stripeCheckoutId_ends_with: InputMaybe<Scalars['String']>;
  /** All values that are contained in given list. */
  stripeCheckoutId_in: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  /** All values that are not equal to given value. */
  stripeCheckoutId_not: InputMaybe<Scalars['String']>;
  /** All values not containing the given string. */
  stripeCheckoutId_not_contains: InputMaybe<Scalars['String']>;
  /** All values not ending with the given string */
  stripeCheckoutId_not_ends_with: InputMaybe<Scalars['String']>;
  /** All values that are not contained in given list. */
  stripeCheckoutId_not_in: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  /** All values not starting with the given string. */
  stripeCheckoutId_not_starts_with: InputMaybe<Scalars['String']>;
  /** All values starting with the given string. */
  stripeCheckoutId_starts_with: InputMaybe<Scalars['String']>;
  total: InputMaybe<Scalars['Int']>;
  /** All values greater than the given value. */
  total_gt: InputMaybe<Scalars['Int']>;
  /** All values greater than or equal the given value. */
  total_gte: InputMaybe<Scalars['Int']>;
  /** All values that are contained in given list. */
  total_in: InputMaybe<Array<InputMaybe<Scalars['Int']>>>;
  /** All values less than the given value. */
  total_lt: InputMaybe<Scalars['Int']>;
  /** All values less than or equal the given value. */
  total_lte: InputMaybe<Scalars['Int']>;
  /** All values that are not equal to given value. */
  total_not: InputMaybe<Scalars['Int']>;
  /** All values that are not contained in given list. */
  total_not_in: InputMaybe<Array<InputMaybe<Scalars['Int']>>>;
  updatedAt: InputMaybe<Scalars['DateTime']>;
  /** All values greater than the given value. */
  updatedAt_gt: InputMaybe<Scalars['DateTime']>;
  /** All values greater than or equal the given value. */
  updatedAt_gte: InputMaybe<Scalars['DateTime']>;
  /** All values that are contained in given list. */
  updatedAt_in: InputMaybe<Array<InputMaybe<Scalars['DateTime']>>>;
  /** All values less than the given value. */
  updatedAt_lt: InputMaybe<Scalars['DateTime']>;
  /** All values less than or equal the given value. */
  updatedAt_lte: InputMaybe<Scalars['DateTime']>;
  /** All values that are not equal to given value. */
  updatedAt_not: InputMaybe<Scalars['DateTime']>;
  /** All values that are not contained in given list. */
  updatedAt_not_in: InputMaybe<Array<InputMaybe<Scalars['DateTime']>>>;
  updatedBy: InputMaybe<UserWhereInput>;
};

/** References Order record uniquely */
export type OrderWhereUniqueInput = {
  id: InputMaybe<Scalars['ID']>;
};

/** Information about pagination in a connection. */
export type PageInfo = {
  __typename?: 'PageInfo';
  /** When paginating forwards, the cursor to continue. */
  endCursor: Maybe<Scalars['String']>;
  /** When paginating forwards, are there more items? */
  hasNextPage: Scalars['Boolean'];
  /** When paginating backwards, are there more items? */
  hasPreviousPage: Scalars['Boolean'];
  /** Number of items in the current page. */
  pageSize: Maybe<Scalars['Int']>;
  /** When paginating backwards, the cursor to continue. */
  startCursor: Maybe<Scalars['String']>;
};

export type Product = Node & {
  __typename?: 'Product';
  categories: Array<Category>;
  /** The time the document was created */
  createdAt: Scalars['DateTime'];
  /** User that created this document */
  createdBy: Maybe<User>;
  description: Maybe<RichText>;
  /** Get the document in other stages */
  documentInStages: Array<Product>;
  /** List of Product versions */
  history: Array<Version>;
  /** The unique identifier */
  id: Scalars['ID'];
  image: Asset;
  name: Scalars['String'];
  orderItems: Array<OrderItem>;
  price: Scalars['Int'];
  productVariantColors: Array<ProductVariantColor>;
  /** The time the document was published. Null on documents in draft stage. */
  publishedAt: Maybe<Scalars['DateTime']>;
  /** User that last published this document */
  publishedBy: Maybe<User>;
  scheduledIn: Array<ScheduledOperation>;
  slug: Maybe<Scalars['String']>;
  /** System stage field */
  stage: Stage;
  /** The time the document was updated */
  updatedAt: Scalars['DateTime'];
  /** User that last updated this document */
  updatedBy: Maybe<User>;
};


export type ProductCategoriesArgs = {
  after: InputMaybe<Scalars['String']>;
  before: InputMaybe<Scalars['String']>;
  first: InputMaybe<Scalars['Int']>;
  last: InputMaybe<Scalars['Int']>;
  locales: InputMaybe<Array<Locale>>;
  orderBy: InputMaybe<CategoryOrderByInput>;
  skip: InputMaybe<Scalars['Int']>;
  where: InputMaybe<CategoryWhereInput>;
};


export type ProductCreatedByArgs = {
  locales: InputMaybe<Array<Locale>>;
};


export type ProductDocumentInStagesArgs = {
  includeCurrent?: Scalars['Boolean'];
  inheritLocale?: Scalars['Boolean'];
  stages?: Array<Stage>;
};


export type ProductHistoryArgs = {
  limit?: Scalars['Int'];
  skip?: Scalars['Int'];
  stageOverride: InputMaybe<Stage>;
};


export type ProductImageArgs = {
  locales: InputMaybe<Array<Locale>>;
};


export type ProductOrderItemsArgs = {
  after: InputMaybe<Scalars['String']>;
  before: InputMaybe<Scalars['String']>;
  first: InputMaybe<Scalars['Int']>;
  last: InputMaybe<Scalars['Int']>;
  locales: InputMaybe<Array<Locale>>;
  orderBy: InputMaybe<OrderItemOrderByInput>;
  skip: InputMaybe<Scalars['Int']>;
  where: InputMaybe<OrderItemWhereInput>;
};


export type ProductProductVariantColorsArgs = {
  after: InputMaybe<Scalars['String']>;
  before: InputMaybe<Scalars['String']>;
  first: InputMaybe<Scalars['Int']>;
  last: InputMaybe<Scalars['Int']>;
  locales: InputMaybe<Array<Locale>>;
  orderBy: InputMaybe<ProductVariantColorOrderByInput>;
  skip: InputMaybe<Scalars['Int']>;
  where: InputMaybe<ProductVariantColorWhereInput>;
};


export type ProductPublishedByArgs = {
  locales: InputMaybe<Array<Locale>>;
};


export type ProductScheduledInArgs = {
  after: InputMaybe<Scalars['String']>;
  before: InputMaybe<Scalars['String']>;
  first: InputMaybe<Scalars['Int']>;
  last: InputMaybe<Scalars['Int']>;
  locales: InputMaybe<Array<Locale>>;
  skip: InputMaybe<Scalars['Int']>;
  where: InputMaybe<ScheduledOperationWhereInput>;
};


export type ProductUpdatedByArgs = {
  locales: InputMaybe<Array<Locale>>;
};

export enum ProductColor {
  Black = 'BLACK',
  Blue = 'BLUE',
  Orange = 'ORANGE',
  Pink = 'PINK',
  White = 'WHITE'
}

export type ProductConnectInput = {
  /** Allow to specify document position in list of connected documents, will default to appending at end of list */
  position: InputMaybe<ConnectPositionInput>;
  /** Document to connect */
  where: ProductWhereUniqueInput;
};

/** A connection to a list of items. */
export type ProductConnection = {
  __typename?: 'ProductConnection';
  aggregate: Aggregate;
  /** A list of edges. */
  edges: Array<ProductEdge>;
  /** Information to aid in pagination. */
  pageInfo: PageInfo;
};

export type ProductCreateInput = {
  categories: InputMaybe<CategoryCreateManyInlineInput>;
  createdAt: InputMaybe<Scalars['DateTime']>;
  description: InputMaybe<Scalars['RichTextAST']>;
  image: AssetCreateOneInlineInput;
  name: Scalars['String'];
  orderItems: InputMaybe<OrderItemCreateManyInlineInput>;
  price: Scalars['Int'];
  productVariantColors: InputMaybe<ProductVariantColorCreateManyInlineInput>;
  slug: InputMaybe<Scalars['String']>;
  updatedAt: InputMaybe<Scalars['DateTime']>;
};

export type ProductCreateManyInlineInput = {
  /** Connect multiple existing Product documents */
  connect: InputMaybe<Array<ProductWhereUniqueInput>>;
  /** Create and connect multiple existing Product documents */
  create: InputMaybe<Array<ProductCreateInput>>;
};

export type ProductCreateOneInlineInput = {
  /** Connect one existing Product document */
  connect: InputMaybe<ProductWhereUniqueInput>;
  /** Create and connect one Product document */
  create: InputMaybe<ProductCreateInput>;
};

/** An edge in a connection. */
export type ProductEdge = {
  __typename?: 'ProductEdge';
  /** A cursor for use in pagination. */
  cursor: Scalars['String'];
  /** The item at the end of the edge. */
  node: Product;
};

/** Identifies documents */
export type ProductManyWhereInput = {
  /** Logical AND on all given filters. */
  AND: InputMaybe<Array<ProductWhereInput>>;
  /** Logical NOT on all given filters combined by AND. */
  NOT: InputMaybe<Array<ProductWhereInput>>;
  /** Logical OR on all given filters. */
  OR: InputMaybe<Array<ProductWhereInput>>;
  /** Contains search across all appropriate fields. */
  _search: InputMaybe<Scalars['String']>;
  categories_every: InputMaybe<CategoryWhereInput>;
  categories_none: InputMaybe<CategoryWhereInput>;
  categories_some: InputMaybe<CategoryWhereInput>;
  createdAt: InputMaybe<Scalars['DateTime']>;
  /** All values greater than the given value. */
  createdAt_gt: InputMaybe<Scalars['DateTime']>;
  /** All values greater than or equal the given value. */
  createdAt_gte: InputMaybe<Scalars['DateTime']>;
  /** All values that are contained in given list. */
  createdAt_in: InputMaybe<Array<InputMaybe<Scalars['DateTime']>>>;
  /** All values less than the given value. */
  createdAt_lt: InputMaybe<Scalars['DateTime']>;
  /** All values less than or equal the given value. */
  createdAt_lte: InputMaybe<Scalars['DateTime']>;
  /** All values that are not equal to given value. */
  createdAt_not: InputMaybe<Scalars['DateTime']>;
  /** All values that are not contained in given list. */
  createdAt_not_in: InputMaybe<Array<InputMaybe<Scalars['DateTime']>>>;
  createdBy: InputMaybe<UserWhereInput>;
  id: InputMaybe<Scalars['ID']>;
  /** All values containing the given string. */
  id_contains: InputMaybe<Scalars['ID']>;
  /** All values ending with the given string. */
  id_ends_with: InputMaybe<Scalars['ID']>;
  /** All values that are contained in given list. */
  id_in: InputMaybe<Array<InputMaybe<Scalars['ID']>>>;
  /** All values that are not equal to given value. */
  id_not: InputMaybe<Scalars['ID']>;
  /** All values not containing the given string. */
  id_not_contains: InputMaybe<Scalars['ID']>;
  /** All values not ending with the given string */
  id_not_ends_with: InputMaybe<Scalars['ID']>;
  /** All values that are not contained in given list. */
  id_not_in: InputMaybe<Array<InputMaybe<Scalars['ID']>>>;
  /** All values not starting with the given string. */
  id_not_starts_with: InputMaybe<Scalars['ID']>;
  /** All values starting with the given string. */
  id_starts_with: InputMaybe<Scalars['ID']>;
  image: InputMaybe<AssetWhereInput>;
  name: InputMaybe<Scalars['String']>;
  /** All values containing the given string. */
  name_contains: InputMaybe<Scalars['String']>;
  /** All values ending with the given string. */
  name_ends_with: InputMaybe<Scalars['String']>;
  /** All values that are contained in given list. */
  name_in: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  /** All values that are not equal to given value. */
  name_not: InputMaybe<Scalars['String']>;
  /** All values not containing the given string. */
  name_not_contains: InputMaybe<Scalars['String']>;
  /** All values not ending with the given string */
  name_not_ends_with: InputMaybe<Scalars['String']>;
  /** All values that are not contained in given list. */
  name_not_in: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  /** All values not starting with the given string. */
  name_not_starts_with: InputMaybe<Scalars['String']>;
  /** All values starting with the given string. */
  name_starts_with: InputMaybe<Scalars['String']>;
  orderItems_every: InputMaybe<OrderItemWhereInput>;
  orderItems_none: InputMaybe<OrderItemWhereInput>;
  orderItems_some: InputMaybe<OrderItemWhereInput>;
  price: InputMaybe<Scalars['Int']>;
  /** All values greater than the given value. */
  price_gt: InputMaybe<Scalars['Int']>;
  /** All values greater than or equal the given value. */
  price_gte: InputMaybe<Scalars['Int']>;
  /** All values that are contained in given list. */
  price_in: InputMaybe<Array<InputMaybe<Scalars['Int']>>>;
  /** All values less than the given value. */
  price_lt: InputMaybe<Scalars['Int']>;
  /** All values less than or equal the given value. */
  price_lte: InputMaybe<Scalars['Int']>;
  /** All values that are not equal to given value. */
  price_not: InputMaybe<Scalars['Int']>;
  /** All values that are not contained in given list. */
  price_not_in: InputMaybe<Array<InputMaybe<Scalars['Int']>>>;
  productVariantColors_every: InputMaybe<ProductVariantColorWhereInput>;
  productVariantColors_none: InputMaybe<ProductVariantColorWhereInput>;
  productVariantColors_some: InputMaybe<ProductVariantColorWhereInput>;
  publishedAt: InputMaybe<Scalars['DateTime']>;
  /** All values greater than the given value. */
  publishedAt_gt: InputMaybe<Scalars['DateTime']>;
  /** All values greater than or equal the given value. */
  publishedAt_gte: InputMaybe<Scalars['DateTime']>;
  /** All values that are contained in given list. */
  publishedAt_in: InputMaybe<Array<InputMaybe<Scalars['DateTime']>>>;
  /** All values less than the given value. */
  publishedAt_lt: InputMaybe<Scalars['DateTime']>;
  /** All values less than or equal the given value. */
  publishedAt_lte: InputMaybe<Scalars['DateTime']>;
  /** All values that are not equal to given value. */
  publishedAt_not: InputMaybe<Scalars['DateTime']>;
  /** All values that are not contained in given list. */
  publishedAt_not_in: InputMaybe<Array<InputMaybe<Scalars['DateTime']>>>;
  publishedBy: InputMaybe<UserWhereInput>;
  scheduledIn_every: InputMaybe<ScheduledOperationWhereInput>;
  scheduledIn_none: InputMaybe<ScheduledOperationWhereInput>;
  scheduledIn_some: InputMaybe<ScheduledOperationWhereInput>;
  slug: InputMaybe<Scalars['String']>;
  /** All values containing the given string. */
  slug_contains: InputMaybe<Scalars['String']>;
  /** All values ending with the given string. */
  slug_ends_with: InputMaybe<Scalars['String']>;
  /** All values that are contained in given list. */
  slug_in: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  /** All values that are not equal to given value. */
  slug_not: InputMaybe<Scalars['String']>;
  /** All values not containing the given string. */
  slug_not_contains: InputMaybe<Scalars['String']>;
  /** All values not ending with the given string */
  slug_not_ends_with: InputMaybe<Scalars['String']>;
  /** All values that are not contained in given list. */
  slug_not_in: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  /** All values not starting with the given string. */
  slug_not_starts_with: InputMaybe<Scalars['String']>;
  /** All values starting with the given string. */
  slug_starts_with: InputMaybe<Scalars['String']>;
  updatedAt: InputMaybe<Scalars['DateTime']>;
  /** All values greater than the given value. */
  updatedAt_gt: InputMaybe<Scalars['DateTime']>;
  /** All values greater than or equal the given value. */
  updatedAt_gte: InputMaybe<Scalars['DateTime']>;
  /** All values that are contained in given list. */
  updatedAt_in: InputMaybe<Array<InputMaybe<Scalars['DateTime']>>>;
  /** All values less than the given value. */
  updatedAt_lt: InputMaybe<Scalars['DateTime']>;
  /** All values less than or equal the given value. */
  updatedAt_lte: InputMaybe<Scalars['DateTime']>;
  /** All values that are not equal to given value. */
  updatedAt_not: InputMaybe<Scalars['DateTime']>;
  /** All values that are not contained in given list. */
  updatedAt_not_in: InputMaybe<Array<InputMaybe<Scalars['DateTime']>>>;
  updatedBy: InputMaybe<UserWhereInput>;
};

export enum ProductOrderByInput {
  CreatedAtAsc = 'createdAt_ASC',
  CreatedAtDesc = 'createdAt_DESC',
  IdAsc = 'id_ASC',
  IdDesc = 'id_DESC',
  NameAsc = 'name_ASC',
  NameDesc = 'name_DESC',
  PriceAsc = 'price_ASC',
  PriceDesc = 'price_DESC',
  PublishedAtAsc = 'publishedAt_ASC',
  PublishedAtDesc = 'publishedAt_DESC',
  SlugAsc = 'slug_ASC',
  SlugDesc = 'slug_DESC',
  UpdatedAtAsc = 'updatedAt_ASC',
  UpdatedAtDesc = 'updatedAt_DESC'
}

export type ProductUpdateInput = {
  categories: InputMaybe<CategoryUpdateManyInlineInput>;
  description: InputMaybe<Scalars['RichTextAST']>;
  image: InputMaybe<AssetUpdateOneInlineInput>;
  name: InputMaybe<Scalars['String']>;
  orderItems: InputMaybe<OrderItemUpdateManyInlineInput>;
  price: InputMaybe<Scalars['Int']>;
  productVariantColors: InputMaybe<ProductVariantColorUpdateManyInlineInput>;
  slug: InputMaybe<Scalars['String']>;
};

export type ProductUpdateManyInlineInput = {
  /** Connect multiple existing Product documents */
  connect: InputMaybe<Array<ProductConnectInput>>;
  /** Create and connect multiple Product documents */
  create: InputMaybe<Array<ProductCreateInput>>;
  /** Delete multiple Product documents */
  delete: InputMaybe<Array<ProductWhereUniqueInput>>;
  /** Disconnect multiple Product documents */
  disconnect: InputMaybe<Array<ProductWhereUniqueInput>>;
  /** Override currently-connected documents with multiple existing Product documents */
  set: InputMaybe<Array<ProductWhereUniqueInput>>;
  /** Update multiple Product documents */
  update: InputMaybe<Array<ProductUpdateWithNestedWhereUniqueInput>>;
  /** Upsert multiple Product documents */
  upsert: InputMaybe<Array<ProductUpsertWithNestedWhereUniqueInput>>;
};

export type ProductUpdateManyInput = {
  description: InputMaybe<Scalars['RichTextAST']>;
  price: InputMaybe<Scalars['Int']>;
};

export type ProductUpdateManyWithNestedWhereInput = {
  /** Update many input */
  data: ProductUpdateManyInput;
  /** Document search */
  where: ProductWhereInput;
};

export type ProductUpdateOneInlineInput = {
  /** Connect existing Product document */
  connect: InputMaybe<ProductWhereUniqueInput>;
  /** Create and connect one Product document */
  create: InputMaybe<ProductCreateInput>;
  /** Delete currently connected Product document */
  delete: InputMaybe<Scalars['Boolean']>;
  /** Disconnect currently connected Product document */
  disconnect: InputMaybe<Scalars['Boolean']>;
  /** Update single Product document */
  update: InputMaybe<ProductUpdateWithNestedWhereUniqueInput>;
  /** Upsert single Product document */
  upsert: InputMaybe<ProductUpsertWithNestedWhereUniqueInput>;
};

export type ProductUpdateWithNestedWhereUniqueInput = {
  /** Document to update */
  data: ProductUpdateInput;
  /** Unique document search */
  where: ProductWhereUniqueInput;
};

export type ProductUpsertInput = {
  /** Create document if it didn't exist */
  create: ProductCreateInput;
  /** Update document if it exists */
  update: ProductUpdateInput;
};

export type ProductUpsertWithNestedWhereUniqueInput = {
  /** Upsert data */
  data: ProductUpsertInput;
  /** Unique document search */
  where: ProductWhereUniqueInput;
};

export type ProductVariantColor = Node & {
  __typename?: 'ProductVariantColor';
  color: ProductColor;
  /** The time the document was created */
  createdAt: Scalars['DateTime'];
  /** User that created this document */
  createdBy: Maybe<User>;
  /** Get the document in other stages */
  documentInStages: Array<ProductVariantColor>;
  hex: Maybe<Scalars['String']>;
  /** List of ProductVariantColor versions */
  history: Array<Version>;
  /** The unique identifier */
  id: Scalars['ID'];
  name: Scalars['String'];
  orderItems: Array<OrderItem>;
  /** The time the document was published. Null on documents in draft stage. */
  publishedAt: Maybe<Scalars['DateTime']>;
  /** User that last published this document */
  publishedBy: Maybe<User>;
  scheduledIn: Array<ScheduledOperation>;
  /** System stage field */
  stage: Stage;
  /** The time the document was updated */
  updatedAt: Scalars['DateTime'];
  /** User that last updated this document */
  updatedBy: Maybe<User>;
};


export type ProductVariantColorCreatedByArgs = {
  locales: InputMaybe<Array<Locale>>;
};


export type ProductVariantColorDocumentInStagesArgs = {
  includeCurrent?: Scalars['Boolean'];
  inheritLocale?: Scalars['Boolean'];
  stages?: Array<Stage>;
};


export type ProductVariantColorHistoryArgs = {
  limit?: Scalars['Int'];
  skip?: Scalars['Int'];
  stageOverride: InputMaybe<Stage>;
};


export type ProductVariantColorOrderItemsArgs = {
  after: InputMaybe<Scalars['String']>;
  before: InputMaybe<Scalars['String']>;
  first: InputMaybe<Scalars['Int']>;
  last: InputMaybe<Scalars['Int']>;
  locales: InputMaybe<Array<Locale>>;
  orderBy: InputMaybe<OrderItemOrderByInput>;
  skip: InputMaybe<Scalars['Int']>;
  where: InputMaybe<OrderItemWhereInput>;
};


export type ProductVariantColorPublishedByArgs = {
  locales: InputMaybe<Array<Locale>>;
};


export type ProductVariantColorScheduledInArgs = {
  after: InputMaybe<Scalars['String']>;
  before: InputMaybe<Scalars['String']>;
  first: InputMaybe<Scalars['Int']>;
  last: InputMaybe<Scalars['Int']>;
  locales: InputMaybe<Array<Locale>>;
  skip: InputMaybe<Scalars['Int']>;
  where: InputMaybe<ScheduledOperationWhereInput>;
};


export type ProductVariantColorUpdatedByArgs = {
  locales: InputMaybe<Array<Locale>>;
};

export type ProductVariantColorConnectInput = {
  /** Allow to specify document position in list of connected documents, will default to appending at end of list */
  position: InputMaybe<ConnectPositionInput>;
  /** Document to connect */
  where: ProductVariantColorWhereUniqueInput;
};

/** A connection to a list of items. */
export type ProductVariantColorConnection = {
  __typename?: 'ProductVariantColorConnection';
  aggregate: Aggregate;
  /** A list of edges. */
  edges: Array<ProductVariantColorEdge>;
  /** Information to aid in pagination. */
  pageInfo: PageInfo;
};

export type ProductVariantColorCreateInput = {
  cl5sawsc612a601ukhugg4r1r: InputMaybe<ProductCreateManyInlineInput>;
  color: ProductColor;
  createdAt: InputMaybe<Scalars['DateTime']>;
  hex: InputMaybe<Scalars['String']>;
  name: Scalars['String'];
  orderItems: InputMaybe<OrderItemCreateManyInlineInput>;
  updatedAt: InputMaybe<Scalars['DateTime']>;
};

export type ProductVariantColorCreateManyInlineInput = {
  /** Connect multiple existing ProductVariantColor documents */
  connect: InputMaybe<Array<ProductVariantColorWhereUniqueInput>>;
  /** Create and connect multiple existing ProductVariantColor documents */
  create: InputMaybe<Array<ProductVariantColorCreateInput>>;
};

export type ProductVariantColorCreateOneInlineInput = {
  /** Connect one existing ProductVariantColor document */
  connect: InputMaybe<ProductVariantColorWhereUniqueInput>;
  /** Create and connect one ProductVariantColor document */
  create: InputMaybe<ProductVariantColorCreateInput>;
};

/** An edge in a connection. */
export type ProductVariantColorEdge = {
  __typename?: 'ProductVariantColorEdge';
  /** A cursor for use in pagination. */
  cursor: Scalars['String'];
  /** The item at the end of the edge. */
  node: ProductVariantColor;
};

/** Identifies documents */
export type ProductVariantColorManyWhereInput = {
  /** Logical AND on all given filters. */
  AND: InputMaybe<Array<ProductVariantColorWhereInput>>;
  /** Logical NOT on all given filters combined by AND. */
  NOT: InputMaybe<Array<ProductVariantColorWhereInput>>;
  /** Logical OR on all given filters. */
  OR: InputMaybe<Array<ProductVariantColorWhereInput>>;
  /** Contains search across all appropriate fields. */
  _search: InputMaybe<Scalars['String']>;
  color: InputMaybe<ProductColor>;
  /** All values that are contained in given list. */
  color_in: InputMaybe<Array<InputMaybe<ProductColor>>>;
  /** All values that are not equal to given value. */
  color_not: InputMaybe<ProductColor>;
  /** All values that are not contained in given list. */
  color_not_in: InputMaybe<Array<InputMaybe<ProductColor>>>;
  createdAt: InputMaybe<Scalars['DateTime']>;
  /** All values greater than the given value. */
  createdAt_gt: InputMaybe<Scalars['DateTime']>;
  /** All values greater than or equal the given value. */
  createdAt_gte: InputMaybe<Scalars['DateTime']>;
  /** All values that are contained in given list. */
  createdAt_in: InputMaybe<Array<InputMaybe<Scalars['DateTime']>>>;
  /** All values less than the given value. */
  createdAt_lt: InputMaybe<Scalars['DateTime']>;
  /** All values less than or equal the given value. */
  createdAt_lte: InputMaybe<Scalars['DateTime']>;
  /** All values that are not equal to given value. */
  createdAt_not: InputMaybe<Scalars['DateTime']>;
  /** All values that are not contained in given list. */
  createdAt_not_in: InputMaybe<Array<InputMaybe<Scalars['DateTime']>>>;
  createdBy: InputMaybe<UserWhereInput>;
  hex: InputMaybe<Scalars['String']>;
  /** All values containing the given string. */
  hex_contains: InputMaybe<Scalars['String']>;
  /** All values ending with the given string. */
  hex_ends_with: InputMaybe<Scalars['String']>;
  /** All values that are contained in given list. */
  hex_in: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  /** All values that are not equal to given value. */
  hex_not: InputMaybe<Scalars['String']>;
  /** All values not containing the given string. */
  hex_not_contains: InputMaybe<Scalars['String']>;
  /** All values not ending with the given string */
  hex_not_ends_with: InputMaybe<Scalars['String']>;
  /** All values that are not contained in given list. */
  hex_not_in: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  /** All values not starting with the given string. */
  hex_not_starts_with: InputMaybe<Scalars['String']>;
  /** All values starting with the given string. */
  hex_starts_with: InputMaybe<Scalars['String']>;
  id: InputMaybe<Scalars['ID']>;
  /** All values containing the given string. */
  id_contains: InputMaybe<Scalars['ID']>;
  /** All values ending with the given string. */
  id_ends_with: InputMaybe<Scalars['ID']>;
  /** All values that are contained in given list. */
  id_in: InputMaybe<Array<InputMaybe<Scalars['ID']>>>;
  /** All values that are not equal to given value. */
  id_not: InputMaybe<Scalars['ID']>;
  /** All values not containing the given string. */
  id_not_contains: InputMaybe<Scalars['ID']>;
  /** All values not ending with the given string */
  id_not_ends_with: InputMaybe<Scalars['ID']>;
  /** All values that are not contained in given list. */
  id_not_in: InputMaybe<Array<InputMaybe<Scalars['ID']>>>;
  /** All values not starting with the given string. */
  id_not_starts_with: InputMaybe<Scalars['ID']>;
  /** All values starting with the given string. */
  id_starts_with: InputMaybe<Scalars['ID']>;
  name: InputMaybe<Scalars['String']>;
  /** All values containing the given string. */
  name_contains: InputMaybe<Scalars['String']>;
  /** All values ending with the given string. */
  name_ends_with: InputMaybe<Scalars['String']>;
  /** All values that are contained in given list. */
  name_in: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  /** All values that are not equal to given value. */
  name_not: InputMaybe<Scalars['String']>;
  /** All values not containing the given string. */
  name_not_contains: InputMaybe<Scalars['String']>;
  /** All values not ending with the given string */
  name_not_ends_with: InputMaybe<Scalars['String']>;
  /** All values that are not contained in given list. */
  name_not_in: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  /** All values not starting with the given string. */
  name_not_starts_with: InputMaybe<Scalars['String']>;
  /** All values starting with the given string. */
  name_starts_with: InputMaybe<Scalars['String']>;
  orderItems_every: InputMaybe<OrderItemWhereInput>;
  orderItems_none: InputMaybe<OrderItemWhereInput>;
  orderItems_some: InputMaybe<OrderItemWhereInput>;
  publishedAt: InputMaybe<Scalars['DateTime']>;
  /** All values greater than the given value. */
  publishedAt_gt: InputMaybe<Scalars['DateTime']>;
  /** All values greater than or equal the given value. */
  publishedAt_gte: InputMaybe<Scalars['DateTime']>;
  /** All values that are contained in given list. */
  publishedAt_in: InputMaybe<Array<InputMaybe<Scalars['DateTime']>>>;
  /** All values less than the given value. */
  publishedAt_lt: InputMaybe<Scalars['DateTime']>;
  /** All values less than or equal the given value. */
  publishedAt_lte: InputMaybe<Scalars['DateTime']>;
  /** All values that are not equal to given value. */
  publishedAt_not: InputMaybe<Scalars['DateTime']>;
  /** All values that are not contained in given list. */
  publishedAt_not_in: InputMaybe<Array<InputMaybe<Scalars['DateTime']>>>;
  publishedBy: InputMaybe<UserWhereInput>;
  scheduledIn_every: InputMaybe<ScheduledOperationWhereInput>;
  scheduledIn_none: InputMaybe<ScheduledOperationWhereInput>;
  scheduledIn_some: InputMaybe<ScheduledOperationWhereInput>;
  updatedAt: InputMaybe<Scalars['DateTime']>;
  /** All values greater than the given value. */
  updatedAt_gt: InputMaybe<Scalars['DateTime']>;
  /** All values greater than or equal the given value. */
  updatedAt_gte: InputMaybe<Scalars['DateTime']>;
  /** All values that are contained in given list. */
  updatedAt_in: InputMaybe<Array<InputMaybe<Scalars['DateTime']>>>;
  /** All values less than the given value. */
  updatedAt_lt: InputMaybe<Scalars['DateTime']>;
  /** All values less than or equal the given value. */
  updatedAt_lte: InputMaybe<Scalars['DateTime']>;
  /** All values that are not equal to given value. */
  updatedAt_not: InputMaybe<Scalars['DateTime']>;
  /** All values that are not contained in given list. */
  updatedAt_not_in: InputMaybe<Array<InputMaybe<Scalars['DateTime']>>>;
  updatedBy: InputMaybe<UserWhereInput>;
};

export enum ProductVariantColorOrderByInput {
  ColorAsc = 'color_ASC',
  ColorDesc = 'color_DESC',
  CreatedAtAsc = 'createdAt_ASC',
  CreatedAtDesc = 'createdAt_DESC',
  HexAsc = 'hex_ASC',
  HexDesc = 'hex_DESC',
  IdAsc = 'id_ASC',
  IdDesc = 'id_DESC',
  NameAsc = 'name_ASC',
  NameDesc = 'name_DESC',
  PublishedAtAsc = 'publishedAt_ASC',
  PublishedAtDesc = 'publishedAt_DESC',
  UpdatedAtAsc = 'updatedAt_ASC',
  UpdatedAtDesc = 'updatedAt_DESC'
}

export type ProductVariantColorUpdateInput = {
  cl5sawsc612a601ukhugg4r1r: InputMaybe<ProductUpdateManyInlineInput>;
  color: InputMaybe<ProductColor>;
  hex: InputMaybe<Scalars['String']>;
  name: InputMaybe<Scalars['String']>;
  orderItems: InputMaybe<OrderItemUpdateManyInlineInput>;
};

export type ProductVariantColorUpdateManyInlineInput = {
  /** Connect multiple existing ProductVariantColor documents */
  connect: InputMaybe<Array<ProductVariantColorConnectInput>>;
  /** Create and connect multiple ProductVariantColor documents */
  create: InputMaybe<Array<ProductVariantColorCreateInput>>;
  /** Delete multiple ProductVariantColor documents */
  delete: InputMaybe<Array<ProductVariantColorWhereUniqueInput>>;
  /** Disconnect multiple ProductVariantColor documents */
  disconnect: InputMaybe<Array<ProductVariantColorWhereUniqueInput>>;
  /** Override currently-connected documents with multiple existing ProductVariantColor documents */
  set: InputMaybe<Array<ProductVariantColorWhereUniqueInput>>;
  /** Update multiple ProductVariantColor documents */
  update: InputMaybe<Array<ProductVariantColorUpdateWithNestedWhereUniqueInput>>;
  /** Upsert multiple ProductVariantColor documents */
  upsert: InputMaybe<Array<ProductVariantColorUpsertWithNestedWhereUniqueInput>>;
};

export type ProductVariantColorUpdateManyInput = {
  color: InputMaybe<ProductColor>;
  hex: InputMaybe<Scalars['String']>;
  name: InputMaybe<Scalars['String']>;
};

export type ProductVariantColorUpdateManyWithNestedWhereInput = {
  /** Update many input */
  data: ProductVariantColorUpdateManyInput;
  /** Document search */
  where: ProductVariantColorWhereInput;
};

export type ProductVariantColorUpdateOneInlineInput = {
  /** Connect existing ProductVariantColor document */
  connect: InputMaybe<ProductVariantColorWhereUniqueInput>;
  /** Create and connect one ProductVariantColor document */
  create: InputMaybe<ProductVariantColorCreateInput>;
  /** Delete currently connected ProductVariantColor document */
  delete: InputMaybe<Scalars['Boolean']>;
  /** Disconnect currently connected ProductVariantColor document */
  disconnect: InputMaybe<Scalars['Boolean']>;
  /** Update single ProductVariantColor document */
  update: InputMaybe<ProductVariantColorUpdateWithNestedWhereUniqueInput>;
  /** Upsert single ProductVariantColor document */
  upsert: InputMaybe<ProductVariantColorUpsertWithNestedWhereUniqueInput>;
};

export type ProductVariantColorUpdateWithNestedWhereUniqueInput = {
  /** Document to update */
  data: ProductVariantColorUpdateInput;
  /** Unique document search */
  where: ProductVariantColorWhereUniqueInput;
};

export type ProductVariantColorUpsertInput = {
  /** Create document if it didn't exist */
  create: ProductVariantColorCreateInput;
  /** Update document if it exists */
  update: ProductVariantColorUpdateInput;
};

export type ProductVariantColorUpsertWithNestedWhereUniqueInput = {
  /** Upsert data */
  data: ProductVariantColorUpsertInput;
  /** Unique document search */
  where: ProductVariantColorWhereUniqueInput;
};

/** Identifies documents */
export type ProductVariantColorWhereInput = {
  /** Logical AND on all given filters. */
  AND: InputMaybe<Array<ProductVariantColorWhereInput>>;
  /** Logical NOT on all given filters combined by AND. */
  NOT: InputMaybe<Array<ProductVariantColorWhereInput>>;
  /** Logical OR on all given filters. */
  OR: InputMaybe<Array<ProductVariantColorWhereInput>>;
  /** Contains search across all appropriate fields. */
  _search: InputMaybe<Scalars['String']>;
  color: InputMaybe<ProductColor>;
  /** All values that are contained in given list. */
  color_in: InputMaybe<Array<InputMaybe<ProductColor>>>;
  /** All values that are not equal to given value. */
  color_not: InputMaybe<ProductColor>;
  /** All values that are not contained in given list. */
  color_not_in: InputMaybe<Array<InputMaybe<ProductColor>>>;
  createdAt: InputMaybe<Scalars['DateTime']>;
  /** All values greater than the given value. */
  createdAt_gt: InputMaybe<Scalars['DateTime']>;
  /** All values greater than or equal the given value. */
  createdAt_gte: InputMaybe<Scalars['DateTime']>;
  /** All values that are contained in given list. */
  createdAt_in: InputMaybe<Array<InputMaybe<Scalars['DateTime']>>>;
  /** All values less than the given value. */
  createdAt_lt: InputMaybe<Scalars['DateTime']>;
  /** All values less than or equal the given value. */
  createdAt_lte: InputMaybe<Scalars['DateTime']>;
  /** All values that are not equal to given value. */
  createdAt_not: InputMaybe<Scalars['DateTime']>;
  /** All values that are not contained in given list. */
  createdAt_not_in: InputMaybe<Array<InputMaybe<Scalars['DateTime']>>>;
  createdBy: InputMaybe<UserWhereInput>;
  hex: InputMaybe<Scalars['String']>;
  /** All values containing the given string. */
  hex_contains: InputMaybe<Scalars['String']>;
  /** All values ending with the given string. */
  hex_ends_with: InputMaybe<Scalars['String']>;
  /** All values that are contained in given list. */
  hex_in: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  /** All values that are not equal to given value. */
  hex_not: InputMaybe<Scalars['String']>;
  /** All values not containing the given string. */
  hex_not_contains: InputMaybe<Scalars['String']>;
  /** All values not ending with the given string */
  hex_not_ends_with: InputMaybe<Scalars['String']>;
  /** All values that are not contained in given list. */
  hex_not_in: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  /** All values not starting with the given string. */
  hex_not_starts_with: InputMaybe<Scalars['String']>;
  /** All values starting with the given string. */
  hex_starts_with: InputMaybe<Scalars['String']>;
  id: InputMaybe<Scalars['ID']>;
  /** All values containing the given string. */
  id_contains: InputMaybe<Scalars['ID']>;
  /** All values ending with the given string. */
  id_ends_with: InputMaybe<Scalars['ID']>;
  /** All values that are contained in given list. */
  id_in: InputMaybe<Array<InputMaybe<Scalars['ID']>>>;
  /** All values that are not equal to given value. */
  id_not: InputMaybe<Scalars['ID']>;
  /** All values not containing the given string. */
  id_not_contains: InputMaybe<Scalars['ID']>;
  /** All values not ending with the given string */
  id_not_ends_with: InputMaybe<Scalars['ID']>;
  /** All values that are not contained in given list. */
  id_not_in: InputMaybe<Array<InputMaybe<Scalars['ID']>>>;
  /** All values not starting with the given string. */
  id_not_starts_with: InputMaybe<Scalars['ID']>;
  /** All values starting with the given string. */
  id_starts_with: InputMaybe<Scalars['ID']>;
  name: InputMaybe<Scalars['String']>;
  /** All values containing the given string. */
  name_contains: InputMaybe<Scalars['String']>;
  /** All values ending with the given string. */
  name_ends_with: InputMaybe<Scalars['String']>;
  /** All values that are contained in given list. */
  name_in: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  /** All values that are not equal to given value. */
  name_not: InputMaybe<Scalars['String']>;
  /** All values not containing the given string. */
  name_not_contains: InputMaybe<Scalars['String']>;
  /** All values not ending with the given string */
  name_not_ends_with: InputMaybe<Scalars['String']>;
  /** All values that are not contained in given list. */
  name_not_in: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  /** All values not starting with the given string. */
  name_not_starts_with: InputMaybe<Scalars['String']>;
  /** All values starting with the given string. */
  name_starts_with: InputMaybe<Scalars['String']>;
  orderItems_every: InputMaybe<OrderItemWhereInput>;
  orderItems_none: InputMaybe<OrderItemWhereInput>;
  orderItems_some: InputMaybe<OrderItemWhereInput>;
  publishedAt: InputMaybe<Scalars['DateTime']>;
  /** All values greater than the given value. */
  publishedAt_gt: InputMaybe<Scalars['DateTime']>;
  /** All values greater than or equal the given value. */
  publishedAt_gte: InputMaybe<Scalars['DateTime']>;
  /** All values that are contained in given list. */
  publishedAt_in: InputMaybe<Array<InputMaybe<Scalars['DateTime']>>>;
  /** All values less than the given value. */
  publishedAt_lt: InputMaybe<Scalars['DateTime']>;
  /** All values less than or equal the given value. */
  publishedAt_lte: InputMaybe<Scalars['DateTime']>;
  /** All values that are not equal to given value. */
  publishedAt_not: InputMaybe<Scalars['DateTime']>;
  /** All values that are not contained in given list. */
  publishedAt_not_in: InputMaybe<Array<InputMaybe<Scalars['DateTime']>>>;
  publishedBy: InputMaybe<UserWhereInput>;
  scheduledIn_every: InputMaybe<ScheduledOperationWhereInput>;
  scheduledIn_none: InputMaybe<ScheduledOperationWhereInput>;
  scheduledIn_some: InputMaybe<ScheduledOperationWhereInput>;
  updatedAt: InputMaybe<Scalars['DateTime']>;
  /** All values greater than the given value. */
  updatedAt_gt: InputMaybe<Scalars['DateTime']>;
  /** All values greater than or equal the given value. */
  updatedAt_gte: InputMaybe<Scalars['DateTime']>;
  /** All values that are contained in given list. */
  updatedAt_in: InputMaybe<Array<InputMaybe<Scalars['DateTime']>>>;
  /** All values less than the given value. */
  updatedAt_lt: InputMaybe<Scalars['DateTime']>;
  /** All values less than or equal the given value. */
  updatedAt_lte: InputMaybe<Scalars['DateTime']>;
  /** All values that are not equal to given value. */
  updatedAt_not: InputMaybe<Scalars['DateTime']>;
  /** All values that are not contained in given list. */
  updatedAt_not_in: InputMaybe<Array<InputMaybe<Scalars['DateTime']>>>;
  updatedBy: InputMaybe<UserWhereInput>;
};

/** References ProductVariantColor record uniquely */
export type ProductVariantColorWhereUniqueInput = {
  id: InputMaybe<Scalars['ID']>;
};

/** Identifies documents */
export type ProductWhereInput = {
  /** Logical AND on all given filters. */
  AND: InputMaybe<Array<ProductWhereInput>>;
  /** Logical NOT on all given filters combined by AND. */
  NOT: InputMaybe<Array<ProductWhereInput>>;
  /** Logical OR on all given filters. */
  OR: InputMaybe<Array<ProductWhereInput>>;
  /** Contains search across all appropriate fields. */
  _search: InputMaybe<Scalars['String']>;
  categories_every: InputMaybe<CategoryWhereInput>;
  categories_none: InputMaybe<CategoryWhereInput>;
  categories_some: InputMaybe<CategoryWhereInput>;
  createdAt: InputMaybe<Scalars['DateTime']>;
  /** All values greater than the given value. */
  createdAt_gt: InputMaybe<Scalars['DateTime']>;
  /** All values greater than or equal the given value. */
  createdAt_gte: InputMaybe<Scalars['DateTime']>;
  /** All values that are contained in given list. */
  createdAt_in: InputMaybe<Array<InputMaybe<Scalars['DateTime']>>>;
  /** All values less than the given value. */
  createdAt_lt: InputMaybe<Scalars['DateTime']>;
  /** All values less than or equal the given value. */
  createdAt_lte: InputMaybe<Scalars['DateTime']>;
  /** All values that are not equal to given value. */
  createdAt_not: InputMaybe<Scalars['DateTime']>;
  /** All values that are not contained in given list. */
  createdAt_not_in: InputMaybe<Array<InputMaybe<Scalars['DateTime']>>>;
  createdBy: InputMaybe<UserWhereInput>;
  id: InputMaybe<Scalars['ID']>;
  /** All values containing the given string. */
  id_contains: InputMaybe<Scalars['ID']>;
  /** All values ending with the given string. */
  id_ends_with: InputMaybe<Scalars['ID']>;
  /** All values that are contained in given list. */
  id_in: InputMaybe<Array<InputMaybe<Scalars['ID']>>>;
  /** All values that are not equal to given value. */
  id_not: InputMaybe<Scalars['ID']>;
  /** All values not containing the given string. */
  id_not_contains: InputMaybe<Scalars['ID']>;
  /** All values not ending with the given string */
  id_not_ends_with: InputMaybe<Scalars['ID']>;
  /** All values that are not contained in given list. */
  id_not_in: InputMaybe<Array<InputMaybe<Scalars['ID']>>>;
  /** All values not starting with the given string. */
  id_not_starts_with: InputMaybe<Scalars['ID']>;
  /** All values starting with the given string. */
  id_starts_with: InputMaybe<Scalars['ID']>;
  image: InputMaybe<AssetWhereInput>;
  name: InputMaybe<Scalars['String']>;
  /** All values containing the given string. */
  name_contains: InputMaybe<Scalars['String']>;
  /** All values ending with the given string. */
  name_ends_with: InputMaybe<Scalars['String']>;
  /** All values that are contained in given list. */
  name_in: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  /** All values that are not equal to given value. */
  name_not: InputMaybe<Scalars['String']>;
  /** All values not containing the given string. */
  name_not_contains: InputMaybe<Scalars['String']>;
  /** All values not ending with the given string */
  name_not_ends_with: InputMaybe<Scalars['String']>;
  /** All values that are not contained in given list. */
  name_not_in: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  /** All values not starting with the given string. */
  name_not_starts_with: InputMaybe<Scalars['String']>;
  /** All values starting with the given string. */
  name_starts_with: InputMaybe<Scalars['String']>;
  orderItems_every: InputMaybe<OrderItemWhereInput>;
  orderItems_none: InputMaybe<OrderItemWhereInput>;
  orderItems_some: InputMaybe<OrderItemWhereInput>;
  price: InputMaybe<Scalars['Int']>;
  /** All values greater than the given value. */
  price_gt: InputMaybe<Scalars['Int']>;
  /** All values greater than or equal the given value. */
  price_gte: InputMaybe<Scalars['Int']>;
  /** All values that are contained in given list. */
  price_in: InputMaybe<Array<InputMaybe<Scalars['Int']>>>;
  /** All values less than the given value. */
  price_lt: InputMaybe<Scalars['Int']>;
  /** All values less than or equal the given value. */
  price_lte: InputMaybe<Scalars['Int']>;
  /** All values that are not equal to given value. */
  price_not: InputMaybe<Scalars['Int']>;
  /** All values that are not contained in given list. */
  price_not_in: InputMaybe<Array<InputMaybe<Scalars['Int']>>>;
  productVariantColors_every: InputMaybe<ProductVariantColorWhereInput>;
  productVariantColors_none: InputMaybe<ProductVariantColorWhereInput>;
  productVariantColors_some: InputMaybe<ProductVariantColorWhereInput>;
  publishedAt: InputMaybe<Scalars['DateTime']>;
  /** All values greater than the given value. */
  publishedAt_gt: InputMaybe<Scalars['DateTime']>;
  /** All values greater than or equal the given value. */
  publishedAt_gte: InputMaybe<Scalars['DateTime']>;
  /** All values that are contained in given list. */
  publishedAt_in: InputMaybe<Array<InputMaybe<Scalars['DateTime']>>>;
  /** All values less than the given value. */
  publishedAt_lt: InputMaybe<Scalars['DateTime']>;
  /** All values less than or equal the given value. */
  publishedAt_lte: InputMaybe<Scalars['DateTime']>;
  /** All values that are not equal to given value. */
  publishedAt_not: InputMaybe<Scalars['DateTime']>;
  /** All values that are not contained in given list. */
  publishedAt_not_in: InputMaybe<Array<InputMaybe<Scalars['DateTime']>>>;
  publishedBy: InputMaybe<UserWhereInput>;
  scheduledIn_every: InputMaybe<ScheduledOperationWhereInput>;
  scheduledIn_none: InputMaybe<ScheduledOperationWhereInput>;
  scheduledIn_some: InputMaybe<ScheduledOperationWhereInput>;
  slug: InputMaybe<Scalars['String']>;
  /** All values containing the given string. */
  slug_contains: InputMaybe<Scalars['String']>;
  /** All values ending with the given string. */
  slug_ends_with: InputMaybe<Scalars['String']>;
  /** All values that are contained in given list. */
  slug_in: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  /** All values that are not equal to given value. */
  slug_not: InputMaybe<Scalars['String']>;
  /** All values not containing the given string. */
  slug_not_contains: InputMaybe<Scalars['String']>;
  /** All values not ending with the given string */
  slug_not_ends_with: InputMaybe<Scalars['String']>;
  /** All values that are not contained in given list. */
  slug_not_in: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  /** All values not starting with the given string. */
  slug_not_starts_with: InputMaybe<Scalars['String']>;
  /** All values starting with the given string. */
  slug_starts_with: InputMaybe<Scalars['String']>;
  updatedAt: InputMaybe<Scalars['DateTime']>;
  /** All values greater than the given value. */
  updatedAt_gt: InputMaybe<Scalars['DateTime']>;
  /** All values greater than or equal the given value. */
  updatedAt_gte: InputMaybe<Scalars['DateTime']>;
  /** All values that are contained in given list. */
  updatedAt_in: InputMaybe<Array<InputMaybe<Scalars['DateTime']>>>;
  /** All values less than the given value. */
  updatedAt_lt: InputMaybe<Scalars['DateTime']>;
  /** All values less than or equal the given value. */
  updatedAt_lte: InputMaybe<Scalars['DateTime']>;
  /** All values that are not equal to given value. */
  updatedAt_not: InputMaybe<Scalars['DateTime']>;
  /** All values that are not contained in given list. */
  updatedAt_not_in: InputMaybe<Array<InputMaybe<Scalars['DateTime']>>>;
  updatedBy: InputMaybe<UserWhereInput>;
};

/** References Product record uniquely */
export type ProductWhereUniqueInput = {
  id: InputMaybe<Scalars['ID']>;
  name: InputMaybe<Scalars['String']>;
  slug: InputMaybe<Scalars['String']>;
};

export type PublishLocaleInput = {
  /** Locales to publish */
  locale: Locale;
  /** Stages to publish selected locales to */
  stages: Array<Stage>;
};

export type Query = {
  __typename?: 'Query';
  /** Retrieve a single asset */
  asset: Maybe<Asset>;
  /** Retrieve document version */
  assetVersion: Maybe<DocumentVersion>;
  /** Retrieve multiple assets */
  assets: Array<Asset>;
  /** Retrieve multiple assets using the Relay connection interface */
  assetsConnection: AssetConnection;
  /** Retrieve multiple categories */
  categories: Array<Category>;
  /** Retrieve multiple categories using the Relay connection interface */
  categoriesConnection: CategoryConnection;
  /** Retrieve a single category */
  category: Maybe<Category>;
  /** Retrieve document version */
  categoryVersion: Maybe<DocumentVersion>;
  /** Retrieve a single config */
  config: Maybe<Config>;
  /** Retrieve document version */
  configVersion: Maybe<DocumentVersion>;
  /** Retrieve multiple configs */
  configs: Array<Config>;
  /** Retrieve multiple configs using the Relay connection interface */
  configsConnection: ConfigConnection;
  /** Retrieve a single customer */
  customer: Maybe<Customer>;
  /** Retrieve document version */
  customerVersion: Maybe<DocumentVersion>;
  /** Retrieve multiple customers */
  customers: Array<Customer>;
  /** Retrieve multiple customers using the Relay connection interface */
  customersConnection: CustomerConnection;
  /** Fetches an object given its ID */
  node: Maybe<Node>;
  /** Retrieve a single order */
  order: Maybe<Order>;
  /** Retrieve a single orderItem */
  orderItem: Maybe<OrderItem>;
  /** Retrieve document version */
  orderItemVersion: Maybe<DocumentVersion>;
  /** Retrieve multiple orderItems */
  orderItems: Array<OrderItem>;
  /** Retrieve multiple orderItems using the Relay connection interface */
  orderItemsConnection: OrderItemConnection;
  /** Retrieve document version */
  orderVersion: Maybe<DocumentVersion>;
  /** Retrieve multiple orders */
  orders: Array<Order>;
  /** Retrieve multiple orders using the Relay connection interface */
  ordersConnection: OrderConnection;
  /** Retrieve a single product */
  product: Maybe<Product>;
  /** Retrieve a single productVariantColor */
  productVariantColor: Maybe<ProductVariantColor>;
  /** Retrieve document version */
  productVariantColorVersion: Maybe<DocumentVersion>;
  /** Retrieve multiple productVariantColors */
  productVariantColors: Array<ProductVariantColor>;
  /** Retrieve multiple productVariantColors using the Relay connection interface */
  productVariantColorsConnection: ProductVariantColorConnection;
  /** Retrieve document version */
  productVersion: Maybe<DocumentVersion>;
  /** Retrieve multiple products */
  products: Array<Product>;
  /** Retrieve multiple products using the Relay connection interface */
  productsConnection: ProductConnection;
  /** Retrieve a single scheduledOperation */
  scheduledOperation: Maybe<ScheduledOperation>;
  /** Retrieve multiple scheduledOperations */
  scheduledOperations: Array<ScheduledOperation>;
  /** Retrieve multiple scheduledOperations using the Relay connection interface */
  scheduledOperationsConnection: ScheduledOperationConnection;
  /** Retrieve a single scheduledRelease */
  scheduledRelease: Maybe<ScheduledRelease>;
  /** Retrieve multiple scheduledReleases */
  scheduledReleases: Array<ScheduledRelease>;
  /** Retrieve multiple scheduledReleases using the Relay connection interface */
  scheduledReleasesConnection: ScheduledReleaseConnection;
  /** Retrieve a single user */
  user: Maybe<User>;
  /** Retrieve multiple users */
  users: Array<User>;
  /** Retrieve multiple users using the Relay connection interface */
  usersConnection: UserConnection;
};


export type QueryAssetArgs = {
  locales?: Array<Locale>;
  stage?: Stage;
  where: AssetWhereUniqueInput;
};


export type QueryAssetVersionArgs = {
  where: VersionWhereInput;
};


export type QueryAssetsArgs = {
  after: InputMaybe<Scalars['String']>;
  before: InputMaybe<Scalars['String']>;
  first: InputMaybe<Scalars['Int']>;
  last: InputMaybe<Scalars['Int']>;
  locales?: Array<Locale>;
  orderBy: InputMaybe<AssetOrderByInput>;
  skip: InputMaybe<Scalars['Int']>;
  stage?: Stage;
  where: InputMaybe<AssetWhereInput>;
};


export type QueryAssetsConnectionArgs = {
  after: InputMaybe<Scalars['String']>;
  before: InputMaybe<Scalars['String']>;
  first: InputMaybe<Scalars['Int']>;
  last: InputMaybe<Scalars['Int']>;
  locales?: Array<Locale>;
  orderBy: InputMaybe<AssetOrderByInput>;
  skip: InputMaybe<Scalars['Int']>;
  stage?: Stage;
  where: InputMaybe<AssetWhereInput>;
};


export type QueryCategoriesArgs = {
  after: InputMaybe<Scalars['String']>;
  before: InputMaybe<Scalars['String']>;
  first: InputMaybe<Scalars['Int']>;
  last: InputMaybe<Scalars['Int']>;
  locales?: Array<Locale>;
  orderBy: InputMaybe<CategoryOrderByInput>;
  skip: InputMaybe<Scalars['Int']>;
  stage?: Stage;
  where: InputMaybe<CategoryWhereInput>;
};


export type QueryCategoriesConnectionArgs = {
  after: InputMaybe<Scalars['String']>;
  before: InputMaybe<Scalars['String']>;
  first: InputMaybe<Scalars['Int']>;
  last: InputMaybe<Scalars['Int']>;
  locales?: Array<Locale>;
  orderBy: InputMaybe<CategoryOrderByInput>;
  skip: InputMaybe<Scalars['Int']>;
  stage?: Stage;
  where: InputMaybe<CategoryWhereInput>;
};


export type QueryCategoryArgs = {
  locales?: Array<Locale>;
  stage?: Stage;
  where: CategoryWhereUniqueInput;
};


export type QueryCategoryVersionArgs = {
  where: VersionWhereInput;
};


export type QueryConfigArgs = {
  locales?: Array<Locale>;
  stage?: Stage;
  where: ConfigWhereUniqueInput;
};


export type QueryConfigVersionArgs = {
  where: VersionWhereInput;
};


export type QueryConfigsArgs = {
  after: InputMaybe<Scalars['String']>;
  before: InputMaybe<Scalars['String']>;
  first: InputMaybe<Scalars['Int']>;
  last: InputMaybe<Scalars['Int']>;
  locales?: Array<Locale>;
  orderBy: InputMaybe<ConfigOrderByInput>;
  skip: InputMaybe<Scalars['Int']>;
  stage?: Stage;
  where: InputMaybe<ConfigWhereInput>;
};


export type QueryConfigsConnectionArgs = {
  after: InputMaybe<Scalars['String']>;
  before: InputMaybe<Scalars['String']>;
  first: InputMaybe<Scalars['Int']>;
  last: InputMaybe<Scalars['Int']>;
  locales?: Array<Locale>;
  orderBy: InputMaybe<ConfigOrderByInput>;
  skip: InputMaybe<Scalars['Int']>;
  stage?: Stage;
  where: InputMaybe<ConfigWhereInput>;
};


export type QueryCustomerArgs = {
  locales?: Array<Locale>;
  stage?: Stage;
  where: CustomerWhereUniqueInput;
};


export type QueryCustomerVersionArgs = {
  where: VersionWhereInput;
};


export type QueryCustomersArgs = {
  after: InputMaybe<Scalars['String']>;
  before: InputMaybe<Scalars['String']>;
  first: InputMaybe<Scalars['Int']>;
  last: InputMaybe<Scalars['Int']>;
  locales?: Array<Locale>;
  orderBy: InputMaybe<CustomerOrderByInput>;
  skip: InputMaybe<Scalars['Int']>;
  stage?: Stage;
  where: InputMaybe<CustomerWhereInput>;
};


export type QueryCustomersConnectionArgs = {
  after: InputMaybe<Scalars['String']>;
  before: InputMaybe<Scalars['String']>;
  first: InputMaybe<Scalars['Int']>;
  last: InputMaybe<Scalars['Int']>;
  locales?: Array<Locale>;
  orderBy: InputMaybe<CustomerOrderByInput>;
  skip: InputMaybe<Scalars['Int']>;
  stage?: Stage;
  where: InputMaybe<CustomerWhereInput>;
};


export type QueryNodeArgs = {
  id: Scalars['ID'];
  locales?: Array<Locale>;
  stage?: Stage;
};


export type QueryOrderArgs = {
  locales?: Array<Locale>;
  stage?: Stage;
  where: OrderWhereUniqueInput;
};


export type QueryOrderItemArgs = {
  locales?: Array<Locale>;
  stage?: Stage;
  where: OrderItemWhereUniqueInput;
};


export type QueryOrderItemVersionArgs = {
  where: VersionWhereInput;
};


export type QueryOrderItemsArgs = {
  after: InputMaybe<Scalars['String']>;
  before: InputMaybe<Scalars['String']>;
  first: InputMaybe<Scalars['Int']>;
  last: InputMaybe<Scalars['Int']>;
  locales?: Array<Locale>;
  orderBy: InputMaybe<OrderItemOrderByInput>;
  skip: InputMaybe<Scalars['Int']>;
  stage?: Stage;
  where: InputMaybe<OrderItemWhereInput>;
};


export type QueryOrderItemsConnectionArgs = {
  after: InputMaybe<Scalars['String']>;
  before: InputMaybe<Scalars['String']>;
  first: InputMaybe<Scalars['Int']>;
  last: InputMaybe<Scalars['Int']>;
  locales?: Array<Locale>;
  orderBy: InputMaybe<OrderItemOrderByInput>;
  skip: InputMaybe<Scalars['Int']>;
  stage?: Stage;
  where: InputMaybe<OrderItemWhereInput>;
};


export type QueryOrderVersionArgs = {
  where: VersionWhereInput;
};


export type QueryOrdersArgs = {
  after: InputMaybe<Scalars['String']>;
  before: InputMaybe<Scalars['String']>;
  first: InputMaybe<Scalars['Int']>;
  last: InputMaybe<Scalars['Int']>;
  locales?: Array<Locale>;
  orderBy: InputMaybe<OrderOrderByInput>;
  skip: InputMaybe<Scalars['Int']>;
  stage?: Stage;
  where: InputMaybe<OrderWhereInput>;
};


export type QueryOrdersConnectionArgs = {
  after: InputMaybe<Scalars['String']>;
  before: InputMaybe<Scalars['String']>;
  first: InputMaybe<Scalars['Int']>;
  last: InputMaybe<Scalars['Int']>;
  locales?: Array<Locale>;
  orderBy: InputMaybe<OrderOrderByInput>;
  skip: InputMaybe<Scalars['Int']>;
  stage?: Stage;
  where: InputMaybe<OrderWhereInput>;
};


export type QueryProductArgs = {
  locales?: Array<Locale>;
  stage?: Stage;
  where: ProductWhereUniqueInput;
};


export type QueryProductVariantColorArgs = {
  locales?: Array<Locale>;
  stage?: Stage;
  where: ProductVariantColorWhereUniqueInput;
};


export type QueryProductVariantColorVersionArgs = {
  where: VersionWhereInput;
};


export type QueryProductVariantColorsArgs = {
  after: InputMaybe<Scalars['String']>;
  before: InputMaybe<Scalars['String']>;
  first: InputMaybe<Scalars['Int']>;
  last: InputMaybe<Scalars['Int']>;
  locales?: Array<Locale>;
  orderBy: InputMaybe<ProductVariantColorOrderByInput>;
  skip: InputMaybe<Scalars['Int']>;
  stage?: Stage;
  where: InputMaybe<ProductVariantColorWhereInput>;
};


export type QueryProductVariantColorsConnectionArgs = {
  after: InputMaybe<Scalars['String']>;
  before: InputMaybe<Scalars['String']>;
  first: InputMaybe<Scalars['Int']>;
  last: InputMaybe<Scalars['Int']>;
  locales?: Array<Locale>;
  orderBy: InputMaybe<ProductVariantColorOrderByInput>;
  skip: InputMaybe<Scalars['Int']>;
  stage?: Stage;
  where: InputMaybe<ProductVariantColorWhereInput>;
};


export type QueryProductVersionArgs = {
  where: VersionWhereInput;
};


export type QueryProductsArgs = {
  after: InputMaybe<Scalars['String']>;
  before: InputMaybe<Scalars['String']>;
  first: InputMaybe<Scalars['Int']>;
  last: InputMaybe<Scalars['Int']>;
  locales?: Array<Locale>;
  orderBy: InputMaybe<ProductOrderByInput>;
  skip: InputMaybe<Scalars['Int']>;
  stage?: Stage;
  where: InputMaybe<ProductWhereInput>;
};


export type QueryProductsConnectionArgs = {
  after: InputMaybe<Scalars['String']>;
  before: InputMaybe<Scalars['String']>;
  first: InputMaybe<Scalars['Int']>;
  last: InputMaybe<Scalars['Int']>;
  locales?: Array<Locale>;
  orderBy: InputMaybe<ProductOrderByInput>;
  skip: InputMaybe<Scalars['Int']>;
  stage?: Stage;
  where: InputMaybe<ProductWhereInput>;
};


export type QueryScheduledOperationArgs = {
  locales?: Array<Locale>;
  stage?: Stage;
  where: ScheduledOperationWhereUniqueInput;
};


export type QueryScheduledOperationsArgs = {
  after: InputMaybe<Scalars['String']>;
  before: InputMaybe<Scalars['String']>;
  first: InputMaybe<Scalars['Int']>;
  last: InputMaybe<Scalars['Int']>;
  locales?: Array<Locale>;
  orderBy: InputMaybe<ScheduledOperationOrderByInput>;
  skip: InputMaybe<Scalars['Int']>;
  stage?: Stage;
  where: InputMaybe<ScheduledOperationWhereInput>;
};


export type QueryScheduledOperationsConnectionArgs = {
  after: InputMaybe<Scalars['String']>;
  before: InputMaybe<Scalars['String']>;
  first: InputMaybe<Scalars['Int']>;
  last: InputMaybe<Scalars['Int']>;
  locales?: Array<Locale>;
  orderBy: InputMaybe<ScheduledOperationOrderByInput>;
  skip: InputMaybe<Scalars['Int']>;
  stage?: Stage;
  where: InputMaybe<ScheduledOperationWhereInput>;
};


export type QueryScheduledReleaseArgs = {
  locales?: Array<Locale>;
  stage?: Stage;
  where: ScheduledReleaseWhereUniqueInput;
};


export type QueryScheduledReleasesArgs = {
  after: InputMaybe<Scalars['String']>;
  before: InputMaybe<Scalars['String']>;
  first: InputMaybe<Scalars['Int']>;
  last: InputMaybe<Scalars['Int']>;
  locales?: Array<Locale>;
  orderBy: InputMaybe<ScheduledReleaseOrderByInput>;
  skip: InputMaybe<Scalars['Int']>;
  stage?: Stage;
  where: InputMaybe<ScheduledReleaseWhereInput>;
};


export type QueryScheduledReleasesConnectionArgs = {
  after: InputMaybe<Scalars['String']>;
  before: InputMaybe<Scalars['String']>;
  first: InputMaybe<Scalars['Int']>;
  last: InputMaybe<Scalars['Int']>;
  locales?: Array<Locale>;
  orderBy: InputMaybe<ScheduledReleaseOrderByInput>;
  skip: InputMaybe<Scalars['Int']>;
  stage?: Stage;
  where: InputMaybe<ScheduledReleaseWhereInput>;
};


export type QueryUserArgs = {
  locales?: Array<Locale>;
  stage?: Stage;
  where: UserWhereUniqueInput;
};


export type QueryUsersArgs = {
  after: InputMaybe<Scalars['String']>;
  before: InputMaybe<Scalars['String']>;
  first: InputMaybe<Scalars['Int']>;
  last: InputMaybe<Scalars['Int']>;
  locales?: Array<Locale>;
  orderBy: InputMaybe<UserOrderByInput>;
  skip: InputMaybe<Scalars['Int']>;
  stage?: Stage;
  where: InputMaybe<UserWhereInput>;
};


export type QueryUsersConnectionArgs = {
  after: InputMaybe<Scalars['String']>;
  before: InputMaybe<Scalars['String']>;
  first: InputMaybe<Scalars['Int']>;
  last: InputMaybe<Scalars['Int']>;
  locales?: Array<Locale>;
  orderBy: InputMaybe<UserOrderByInput>;
  skip: InputMaybe<Scalars['Int']>;
  stage?: Stage;
  where: InputMaybe<UserWhereInput>;
};

/** Representing a RGBA color value: https://developer.mozilla.org/en-US/docs/Web/CSS/color_value#rgb()_and_rgba() */
export type Rgba = {
  __typename?: 'RGBA';
  a: Scalars['RGBATransparency'];
  b: Scalars['RGBAHue'];
  g: Scalars['RGBAHue'];
  r: Scalars['RGBAHue'];
};

/** Input type representing a RGBA color value: https://developer.mozilla.org/en-US/docs/Web/CSS/color_value#rgb()_and_rgba() */
export type RgbaInput = {
  a: Scalars['RGBATransparency'];
  b: Scalars['RGBAHue'];
  g: Scalars['RGBAHue'];
  r: Scalars['RGBAHue'];
};

/** Custom type representing a rich text value comprising of raw rich text ast, html, markdown and text values */
export type RichText = {
  __typename?: 'RichText';
  /** Returns HTMl representation */
  html: Scalars['String'];
  /** Returns Markdown representation */
  markdown: Scalars['String'];
  /** Returns AST representation */
  raw: Scalars['RichTextAST'];
  /** Returns plain-text contents of RichText */
  text: Scalars['String'];
};

/** Scheduled Operation system model */
export type ScheduledOperation = Node & {
  __typename?: 'ScheduledOperation';
  affectedDocuments: Array<ScheduledOperationAffectedDocument>;
  /** The time the document was created */
  createdAt: Scalars['DateTime'];
  /** User that created this document */
  createdBy: Maybe<User>;
  /** Operation description */
  description: Maybe<Scalars['String']>;
  /** Get the document in other stages */
  documentInStages: Array<ScheduledOperation>;
  /** Operation error message */
  errorMessage: Maybe<Scalars['String']>;
  /** The unique identifier */
  id: Scalars['ID'];
  /** The time the document was published. Null on documents in draft stage. */
  publishedAt: Maybe<Scalars['DateTime']>;
  /** User that last published this document */
  publishedBy: Maybe<User>;
  /** Raw operation payload including all details, this field is subject to change */
  rawPayload: Scalars['Json'];
  /** The release this operation is scheduled for */
  release: Maybe<ScheduledRelease>;
  /** System stage field */
  stage: Stage;
  /** operation Status */
  status: ScheduledOperationStatus;
  /** The time the document was updated */
  updatedAt: Scalars['DateTime'];
  /** User that last updated this document */
  updatedBy: Maybe<User>;
};


/** Scheduled Operation system model */
export type ScheduledOperationAffectedDocumentsArgs = {
  after: InputMaybe<Scalars['String']>;
  before: InputMaybe<Scalars['String']>;
  first: InputMaybe<Scalars['Int']>;
  last: InputMaybe<Scalars['Int']>;
  locales: InputMaybe<Array<Locale>>;
  skip: InputMaybe<Scalars['Int']>;
};


/** Scheduled Operation system model */
export type ScheduledOperationCreatedByArgs = {
  locales: InputMaybe<Array<Locale>>;
};


/** Scheduled Operation system model */
export type ScheduledOperationDocumentInStagesArgs = {
  includeCurrent?: Scalars['Boolean'];
  inheritLocale?: Scalars['Boolean'];
  stages?: Array<Stage>;
};


/** Scheduled Operation system model */
export type ScheduledOperationPublishedByArgs = {
  locales: InputMaybe<Array<Locale>>;
};


/** Scheduled Operation system model */
export type ScheduledOperationReleaseArgs = {
  locales: InputMaybe<Array<Locale>>;
};


/** Scheduled Operation system model */
export type ScheduledOperationUpdatedByArgs = {
  locales: InputMaybe<Array<Locale>>;
};

export type ScheduledOperationAffectedDocument = Asset | Category | Config | Customer | Order | OrderItem | Product | ProductVariantColor;

export type ScheduledOperationConnectInput = {
  /** Allow to specify document position in list of connected documents, will default to appending at end of list */
  position: InputMaybe<ConnectPositionInput>;
  /** Document to connect */
  where: ScheduledOperationWhereUniqueInput;
};

/** A connection to a list of items. */
export type ScheduledOperationConnection = {
  __typename?: 'ScheduledOperationConnection';
  aggregate: Aggregate;
  /** A list of edges. */
  edges: Array<ScheduledOperationEdge>;
  /** Information to aid in pagination. */
  pageInfo: PageInfo;
};

export type ScheduledOperationCreateManyInlineInput = {
  /** Connect multiple existing ScheduledOperation documents */
  connect: InputMaybe<Array<ScheduledOperationWhereUniqueInput>>;
};

export type ScheduledOperationCreateOneInlineInput = {
  /** Connect one existing ScheduledOperation document */
  connect: InputMaybe<ScheduledOperationWhereUniqueInput>;
};

/** An edge in a connection. */
export type ScheduledOperationEdge = {
  __typename?: 'ScheduledOperationEdge';
  /** A cursor for use in pagination. */
  cursor: Scalars['String'];
  /** The item at the end of the edge. */
  node: ScheduledOperation;
};

/** Identifies documents */
export type ScheduledOperationManyWhereInput = {
  /** Logical AND on all given filters. */
  AND: InputMaybe<Array<ScheduledOperationWhereInput>>;
  /** Logical NOT on all given filters combined by AND. */
  NOT: InputMaybe<Array<ScheduledOperationWhereInput>>;
  /** Logical OR on all given filters. */
  OR: InputMaybe<Array<ScheduledOperationWhereInput>>;
  /** Contains search across all appropriate fields. */
  _search: InputMaybe<Scalars['String']>;
  createdAt: InputMaybe<Scalars['DateTime']>;
  /** All values greater than the given value. */
  createdAt_gt: InputMaybe<Scalars['DateTime']>;
  /** All values greater than or equal the given value. */
  createdAt_gte: InputMaybe<Scalars['DateTime']>;
  /** All values that are contained in given list. */
  createdAt_in: InputMaybe<Array<InputMaybe<Scalars['DateTime']>>>;
  /** All values less than the given value. */
  createdAt_lt: InputMaybe<Scalars['DateTime']>;
  /** All values less than or equal the given value. */
  createdAt_lte: InputMaybe<Scalars['DateTime']>;
  /** All values that are not equal to given value. */
  createdAt_not: InputMaybe<Scalars['DateTime']>;
  /** All values that are not contained in given list. */
  createdAt_not_in: InputMaybe<Array<InputMaybe<Scalars['DateTime']>>>;
  createdBy: InputMaybe<UserWhereInput>;
  description: InputMaybe<Scalars['String']>;
  /** All values containing the given string. */
  description_contains: InputMaybe<Scalars['String']>;
  /** All values ending with the given string. */
  description_ends_with: InputMaybe<Scalars['String']>;
  /** All values that are contained in given list. */
  description_in: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  /** All values that are not equal to given value. */
  description_not: InputMaybe<Scalars['String']>;
  /** All values not containing the given string. */
  description_not_contains: InputMaybe<Scalars['String']>;
  /** All values not ending with the given string */
  description_not_ends_with: InputMaybe<Scalars['String']>;
  /** All values that are not contained in given list. */
  description_not_in: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  /** All values not starting with the given string. */
  description_not_starts_with: InputMaybe<Scalars['String']>;
  /** All values starting with the given string. */
  description_starts_with: InputMaybe<Scalars['String']>;
  errorMessage: InputMaybe<Scalars['String']>;
  /** All values containing the given string. */
  errorMessage_contains: InputMaybe<Scalars['String']>;
  /** All values ending with the given string. */
  errorMessage_ends_with: InputMaybe<Scalars['String']>;
  /** All values that are contained in given list. */
  errorMessage_in: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  /** All values that are not equal to given value. */
  errorMessage_not: InputMaybe<Scalars['String']>;
  /** All values not containing the given string. */
  errorMessage_not_contains: InputMaybe<Scalars['String']>;
  /** All values not ending with the given string */
  errorMessage_not_ends_with: InputMaybe<Scalars['String']>;
  /** All values that are not contained in given list. */
  errorMessage_not_in: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  /** All values not starting with the given string. */
  errorMessage_not_starts_with: InputMaybe<Scalars['String']>;
  /** All values starting with the given string. */
  errorMessage_starts_with: InputMaybe<Scalars['String']>;
  id: InputMaybe<Scalars['ID']>;
  /** All values containing the given string. */
  id_contains: InputMaybe<Scalars['ID']>;
  /** All values ending with the given string. */
  id_ends_with: InputMaybe<Scalars['ID']>;
  /** All values that are contained in given list. */
  id_in: InputMaybe<Array<InputMaybe<Scalars['ID']>>>;
  /** All values that are not equal to given value. */
  id_not: InputMaybe<Scalars['ID']>;
  /** All values not containing the given string. */
  id_not_contains: InputMaybe<Scalars['ID']>;
  /** All values not ending with the given string */
  id_not_ends_with: InputMaybe<Scalars['ID']>;
  /** All values that are not contained in given list. */
  id_not_in: InputMaybe<Array<InputMaybe<Scalars['ID']>>>;
  /** All values not starting with the given string. */
  id_not_starts_with: InputMaybe<Scalars['ID']>;
  /** All values starting with the given string. */
  id_starts_with: InputMaybe<Scalars['ID']>;
  publishedAt: InputMaybe<Scalars['DateTime']>;
  /** All values greater than the given value. */
  publishedAt_gt: InputMaybe<Scalars['DateTime']>;
  /** All values greater than or equal the given value. */
  publishedAt_gte: InputMaybe<Scalars['DateTime']>;
  /** All values that are contained in given list. */
  publishedAt_in: InputMaybe<Array<InputMaybe<Scalars['DateTime']>>>;
  /** All values less than the given value. */
  publishedAt_lt: InputMaybe<Scalars['DateTime']>;
  /** All values less than or equal the given value. */
  publishedAt_lte: InputMaybe<Scalars['DateTime']>;
  /** All values that are not equal to given value. */
  publishedAt_not: InputMaybe<Scalars['DateTime']>;
  /** All values that are not contained in given list. */
  publishedAt_not_in: InputMaybe<Array<InputMaybe<Scalars['DateTime']>>>;
  publishedBy: InputMaybe<UserWhereInput>;
  release: InputMaybe<ScheduledReleaseWhereInput>;
  status: InputMaybe<ScheduledOperationStatus>;
  /** All values that are contained in given list. */
  status_in: InputMaybe<Array<InputMaybe<ScheduledOperationStatus>>>;
  /** All values that are not equal to given value. */
  status_not: InputMaybe<ScheduledOperationStatus>;
  /** All values that are not contained in given list. */
  status_not_in: InputMaybe<Array<InputMaybe<ScheduledOperationStatus>>>;
  updatedAt: InputMaybe<Scalars['DateTime']>;
  /** All values greater than the given value. */
  updatedAt_gt: InputMaybe<Scalars['DateTime']>;
  /** All values greater than or equal the given value. */
  updatedAt_gte: InputMaybe<Scalars['DateTime']>;
  /** All values that are contained in given list. */
  updatedAt_in: InputMaybe<Array<InputMaybe<Scalars['DateTime']>>>;
  /** All values less than the given value. */
  updatedAt_lt: InputMaybe<Scalars['DateTime']>;
  /** All values less than or equal the given value. */
  updatedAt_lte: InputMaybe<Scalars['DateTime']>;
  /** All values that are not equal to given value. */
  updatedAt_not: InputMaybe<Scalars['DateTime']>;
  /** All values that are not contained in given list. */
  updatedAt_not_in: InputMaybe<Array<InputMaybe<Scalars['DateTime']>>>;
  updatedBy: InputMaybe<UserWhereInput>;
};

export enum ScheduledOperationOrderByInput {
  CreatedAtAsc = 'createdAt_ASC',
  CreatedAtDesc = 'createdAt_DESC',
  DescriptionAsc = 'description_ASC',
  DescriptionDesc = 'description_DESC',
  ErrorMessageAsc = 'errorMessage_ASC',
  ErrorMessageDesc = 'errorMessage_DESC',
  IdAsc = 'id_ASC',
  IdDesc = 'id_DESC',
  PublishedAtAsc = 'publishedAt_ASC',
  PublishedAtDesc = 'publishedAt_DESC',
  StatusAsc = 'status_ASC',
  StatusDesc = 'status_DESC',
  UpdatedAtAsc = 'updatedAt_ASC',
  UpdatedAtDesc = 'updatedAt_DESC'
}

/** System Scheduled Operation Status */
export enum ScheduledOperationStatus {
  Canceled = 'CANCELED',
  Completed = 'COMPLETED',
  Failed = 'FAILED',
  InProgress = 'IN_PROGRESS',
  Pending = 'PENDING'
}

export type ScheduledOperationUpdateManyInlineInput = {
  /** Connect multiple existing ScheduledOperation documents */
  connect: InputMaybe<Array<ScheduledOperationConnectInput>>;
  /** Disconnect multiple ScheduledOperation documents */
  disconnect: InputMaybe<Array<ScheduledOperationWhereUniqueInput>>;
  /** Override currently-connected documents with multiple existing ScheduledOperation documents */
  set: InputMaybe<Array<ScheduledOperationWhereUniqueInput>>;
};

export type ScheduledOperationUpdateOneInlineInput = {
  /** Connect existing ScheduledOperation document */
  connect: InputMaybe<ScheduledOperationWhereUniqueInput>;
  /** Disconnect currently connected ScheduledOperation document */
  disconnect: InputMaybe<Scalars['Boolean']>;
};

/** Identifies documents */
export type ScheduledOperationWhereInput = {
  /** Logical AND on all given filters. */
  AND: InputMaybe<Array<ScheduledOperationWhereInput>>;
  /** Logical NOT on all given filters combined by AND. */
  NOT: InputMaybe<Array<ScheduledOperationWhereInput>>;
  /** Logical OR on all given filters. */
  OR: InputMaybe<Array<ScheduledOperationWhereInput>>;
  /** Contains search across all appropriate fields. */
  _search: InputMaybe<Scalars['String']>;
  createdAt: InputMaybe<Scalars['DateTime']>;
  /** All values greater than the given value. */
  createdAt_gt: InputMaybe<Scalars['DateTime']>;
  /** All values greater than or equal the given value. */
  createdAt_gte: InputMaybe<Scalars['DateTime']>;
  /** All values that are contained in given list. */
  createdAt_in: InputMaybe<Array<InputMaybe<Scalars['DateTime']>>>;
  /** All values less than the given value. */
  createdAt_lt: InputMaybe<Scalars['DateTime']>;
  /** All values less than or equal the given value. */
  createdAt_lte: InputMaybe<Scalars['DateTime']>;
  /** All values that are not equal to given value. */
  createdAt_not: InputMaybe<Scalars['DateTime']>;
  /** All values that are not contained in given list. */
  createdAt_not_in: InputMaybe<Array<InputMaybe<Scalars['DateTime']>>>;
  createdBy: InputMaybe<UserWhereInput>;
  description: InputMaybe<Scalars['String']>;
  /** All values containing the given string. */
  description_contains: InputMaybe<Scalars['String']>;
  /** All values ending with the given string. */
  description_ends_with: InputMaybe<Scalars['String']>;
  /** All values that are contained in given list. */
  description_in: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  /** All values that are not equal to given value. */
  description_not: InputMaybe<Scalars['String']>;
  /** All values not containing the given string. */
  description_not_contains: InputMaybe<Scalars['String']>;
  /** All values not ending with the given string */
  description_not_ends_with: InputMaybe<Scalars['String']>;
  /** All values that are not contained in given list. */
  description_not_in: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  /** All values not starting with the given string. */
  description_not_starts_with: InputMaybe<Scalars['String']>;
  /** All values starting with the given string. */
  description_starts_with: InputMaybe<Scalars['String']>;
  errorMessage: InputMaybe<Scalars['String']>;
  /** All values containing the given string. */
  errorMessage_contains: InputMaybe<Scalars['String']>;
  /** All values ending with the given string. */
  errorMessage_ends_with: InputMaybe<Scalars['String']>;
  /** All values that are contained in given list. */
  errorMessage_in: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  /** All values that are not equal to given value. */
  errorMessage_not: InputMaybe<Scalars['String']>;
  /** All values not containing the given string. */
  errorMessage_not_contains: InputMaybe<Scalars['String']>;
  /** All values not ending with the given string */
  errorMessage_not_ends_with: InputMaybe<Scalars['String']>;
  /** All values that are not contained in given list. */
  errorMessage_not_in: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  /** All values not starting with the given string. */
  errorMessage_not_starts_with: InputMaybe<Scalars['String']>;
  /** All values starting with the given string. */
  errorMessage_starts_with: InputMaybe<Scalars['String']>;
  id: InputMaybe<Scalars['ID']>;
  /** All values containing the given string. */
  id_contains: InputMaybe<Scalars['ID']>;
  /** All values ending with the given string. */
  id_ends_with: InputMaybe<Scalars['ID']>;
  /** All values that are contained in given list. */
  id_in: InputMaybe<Array<InputMaybe<Scalars['ID']>>>;
  /** All values that are not equal to given value. */
  id_not: InputMaybe<Scalars['ID']>;
  /** All values not containing the given string. */
  id_not_contains: InputMaybe<Scalars['ID']>;
  /** All values not ending with the given string */
  id_not_ends_with: InputMaybe<Scalars['ID']>;
  /** All values that are not contained in given list. */
  id_not_in: InputMaybe<Array<InputMaybe<Scalars['ID']>>>;
  /** All values not starting with the given string. */
  id_not_starts_with: InputMaybe<Scalars['ID']>;
  /** All values starting with the given string. */
  id_starts_with: InputMaybe<Scalars['ID']>;
  publishedAt: InputMaybe<Scalars['DateTime']>;
  /** All values greater than the given value. */
  publishedAt_gt: InputMaybe<Scalars['DateTime']>;
  /** All values greater than or equal the given value. */
  publishedAt_gte: InputMaybe<Scalars['DateTime']>;
  /** All values that are contained in given list. */
  publishedAt_in: InputMaybe<Array<InputMaybe<Scalars['DateTime']>>>;
  /** All values less than the given value. */
  publishedAt_lt: InputMaybe<Scalars['DateTime']>;
  /** All values less than or equal the given value. */
  publishedAt_lte: InputMaybe<Scalars['DateTime']>;
  /** All values that are not equal to given value. */
  publishedAt_not: InputMaybe<Scalars['DateTime']>;
  /** All values that are not contained in given list. */
  publishedAt_not_in: InputMaybe<Array<InputMaybe<Scalars['DateTime']>>>;
  publishedBy: InputMaybe<UserWhereInput>;
  release: InputMaybe<ScheduledReleaseWhereInput>;
  status: InputMaybe<ScheduledOperationStatus>;
  /** All values that are contained in given list. */
  status_in: InputMaybe<Array<InputMaybe<ScheduledOperationStatus>>>;
  /** All values that are not equal to given value. */
  status_not: InputMaybe<ScheduledOperationStatus>;
  /** All values that are not contained in given list. */
  status_not_in: InputMaybe<Array<InputMaybe<ScheduledOperationStatus>>>;
  updatedAt: InputMaybe<Scalars['DateTime']>;
  /** All values greater than the given value. */
  updatedAt_gt: InputMaybe<Scalars['DateTime']>;
  /** All values greater than or equal the given value. */
  updatedAt_gte: InputMaybe<Scalars['DateTime']>;
  /** All values that are contained in given list. */
  updatedAt_in: InputMaybe<Array<InputMaybe<Scalars['DateTime']>>>;
  /** All values less than the given value. */
  updatedAt_lt: InputMaybe<Scalars['DateTime']>;
  /** All values less than or equal the given value. */
  updatedAt_lte: InputMaybe<Scalars['DateTime']>;
  /** All values that are not equal to given value. */
  updatedAt_not: InputMaybe<Scalars['DateTime']>;
  /** All values that are not contained in given list. */
  updatedAt_not_in: InputMaybe<Array<InputMaybe<Scalars['DateTime']>>>;
  updatedBy: InputMaybe<UserWhereInput>;
};

/** References ScheduledOperation record uniquely */
export type ScheduledOperationWhereUniqueInput = {
  id: InputMaybe<Scalars['ID']>;
};

/** Scheduled Release system model */
export type ScheduledRelease = Node & {
  __typename?: 'ScheduledRelease';
  /** The time the document was created */
  createdAt: Scalars['DateTime'];
  /** User that created this document */
  createdBy: Maybe<User>;
  /** Release description */
  description: Maybe<Scalars['String']>;
  /** Get the document in other stages */
  documentInStages: Array<ScheduledRelease>;
  /** Release error message */
  errorMessage: Maybe<Scalars['String']>;
  /** The unique identifier */
  id: Scalars['ID'];
  /** Whether scheduled release should be run */
  isActive: Scalars['Boolean'];
  /** Whether scheduled release is implicit */
  isImplicit: Scalars['Boolean'];
  /** Operations to run with this release */
  operations: Array<ScheduledOperation>;
  /** The time the document was published. Null on documents in draft stage. */
  publishedAt: Maybe<Scalars['DateTime']>;
  /** User that last published this document */
  publishedBy: Maybe<User>;
  /** Release date and time */
  releaseAt: Maybe<Scalars['DateTime']>;
  /** System stage field */
  stage: Stage;
  /** Release Status */
  status: ScheduledReleaseStatus;
  /** Release Title */
  title: Maybe<Scalars['String']>;
  /** The time the document was updated */
  updatedAt: Scalars['DateTime'];
  /** User that last updated this document */
  updatedBy: Maybe<User>;
};


/** Scheduled Release system model */
export type ScheduledReleaseCreatedByArgs = {
  locales: InputMaybe<Array<Locale>>;
};


/** Scheduled Release system model */
export type ScheduledReleaseDocumentInStagesArgs = {
  includeCurrent?: Scalars['Boolean'];
  inheritLocale?: Scalars['Boolean'];
  stages?: Array<Stage>;
};


/** Scheduled Release system model */
export type ScheduledReleaseOperationsArgs = {
  after: InputMaybe<Scalars['String']>;
  before: InputMaybe<Scalars['String']>;
  first: InputMaybe<Scalars['Int']>;
  last: InputMaybe<Scalars['Int']>;
  locales: InputMaybe<Array<Locale>>;
  orderBy: InputMaybe<ScheduledOperationOrderByInput>;
  skip: InputMaybe<Scalars['Int']>;
  where: InputMaybe<ScheduledOperationWhereInput>;
};


/** Scheduled Release system model */
export type ScheduledReleasePublishedByArgs = {
  locales: InputMaybe<Array<Locale>>;
};


/** Scheduled Release system model */
export type ScheduledReleaseUpdatedByArgs = {
  locales: InputMaybe<Array<Locale>>;
};

export type ScheduledReleaseConnectInput = {
  /** Allow to specify document position in list of connected documents, will default to appending at end of list */
  position: InputMaybe<ConnectPositionInput>;
  /** Document to connect */
  where: ScheduledReleaseWhereUniqueInput;
};

/** A connection to a list of items. */
export type ScheduledReleaseConnection = {
  __typename?: 'ScheduledReleaseConnection';
  aggregate: Aggregate;
  /** A list of edges. */
  edges: Array<ScheduledReleaseEdge>;
  /** Information to aid in pagination. */
  pageInfo: PageInfo;
};

export type ScheduledReleaseCreateInput = {
  createdAt: InputMaybe<Scalars['DateTime']>;
  description: InputMaybe<Scalars['String']>;
  errorMessage: InputMaybe<Scalars['String']>;
  isActive: InputMaybe<Scalars['Boolean']>;
  releaseAt: InputMaybe<Scalars['DateTime']>;
  title: InputMaybe<Scalars['String']>;
  updatedAt: InputMaybe<Scalars['DateTime']>;
};

export type ScheduledReleaseCreateManyInlineInput = {
  /** Connect multiple existing ScheduledRelease documents */
  connect: InputMaybe<Array<ScheduledReleaseWhereUniqueInput>>;
  /** Create and connect multiple existing ScheduledRelease documents */
  create: InputMaybe<Array<ScheduledReleaseCreateInput>>;
};

export type ScheduledReleaseCreateOneInlineInput = {
  /** Connect one existing ScheduledRelease document */
  connect: InputMaybe<ScheduledReleaseWhereUniqueInput>;
  /** Create and connect one ScheduledRelease document */
  create: InputMaybe<ScheduledReleaseCreateInput>;
};

/** An edge in a connection. */
export type ScheduledReleaseEdge = {
  __typename?: 'ScheduledReleaseEdge';
  /** A cursor for use in pagination. */
  cursor: Scalars['String'];
  /** The item at the end of the edge. */
  node: ScheduledRelease;
};

/** Identifies documents */
export type ScheduledReleaseManyWhereInput = {
  /** Logical AND on all given filters. */
  AND: InputMaybe<Array<ScheduledReleaseWhereInput>>;
  /** Logical NOT on all given filters combined by AND. */
  NOT: InputMaybe<Array<ScheduledReleaseWhereInput>>;
  /** Logical OR on all given filters. */
  OR: InputMaybe<Array<ScheduledReleaseWhereInput>>;
  /** Contains search across all appropriate fields. */
  _search: InputMaybe<Scalars['String']>;
  createdAt: InputMaybe<Scalars['DateTime']>;
  /** All values greater than the given value. */
  createdAt_gt: InputMaybe<Scalars['DateTime']>;
  /** All values greater than or equal the given value. */
  createdAt_gte: InputMaybe<Scalars['DateTime']>;
  /** All values that are contained in given list. */
  createdAt_in: InputMaybe<Array<InputMaybe<Scalars['DateTime']>>>;
  /** All values less than the given value. */
  createdAt_lt: InputMaybe<Scalars['DateTime']>;
  /** All values less than or equal the given value. */
  createdAt_lte: InputMaybe<Scalars['DateTime']>;
  /** All values that are not equal to given value. */
  createdAt_not: InputMaybe<Scalars['DateTime']>;
  /** All values that are not contained in given list. */
  createdAt_not_in: InputMaybe<Array<InputMaybe<Scalars['DateTime']>>>;
  createdBy: InputMaybe<UserWhereInput>;
  description: InputMaybe<Scalars['String']>;
  /** All values containing the given string. */
  description_contains: InputMaybe<Scalars['String']>;
  /** All values ending with the given string. */
  description_ends_with: InputMaybe<Scalars['String']>;
  /** All values that are contained in given list. */
  description_in: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  /** All values that are not equal to given value. */
  description_not: InputMaybe<Scalars['String']>;
  /** All values not containing the given string. */
  description_not_contains: InputMaybe<Scalars['String']>;
  /** All values not ending with the given string */
  description_not_ends_with: InputMaybe<Scalars['String']>;
  /** All values that are not contained in given list. */
  description_not_in: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  /** All values not starting with the given string. */
  description_not_starts_with: InputMaybe<Scalars['String']>;
  /** All values starting with the given string. */
  description_starts_with: InputMaybe<Scalars['String']>;
  errorMessage: InputMaybe<Scalars['String']>;
  /** All values containing the given string. */
  errorMessage_contains: InputMaybe<Scalars['String']>;
  /** All values ending with the given string. */
  errorMessage_ends_with: InputMaybe<Scalars['String']>;
  /** All values that are contained in given list. */
  errorMessage_in: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  /** All values that are not equal to given value. */
  errorMessage_not: InputMaybe<Scalars['String']>;
  /** All values not containing the given string. */
  errorMessage_not_contains: InputMaybe<Scalars['String']>;
  /** All values not ending with the given string */
  errorMessage_not_ends_with: InputMaybe<Scalars['String']>;
  /** All values that are not contained in given list. */
  errorMessage_not_in: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  /** All values not starting with the given string. */
  errorMessage_not_starts_with: InputMaybe<Scalars['String']>;
  /** All values starting with the given string. */
  errorMessage_starts_with: InputMaybe<Scalars['String']>;
  id: InputMaybe<Scalars['ID']>;
  /** All values containing the given string. */
  id_contains: InputMaybe<Scalars['ID']>;
  /** All values ending with the given string. */
  id_ends_with: InputMaybe<Scalars['ID']>;
  /** All values that are contained in given list. */
  id_in: InputMaybe<Array<InputMaybe<Scalars['ID']>>>;
  /** All values that are not equal to given value. */
  id_not: InputMaybe<Scalars['ID']>;
  /** All values not containing the given string. */
  id_not_contains: InputMaybe<Scalars['ID']>;
  /** All values not ending with the given string */
  id_not_ends_with: InputMaybe<Scalars['ID']>;
  /** All values that are not contained in given list. */
  id_not_in: InputMaybe<Array<InputMaybe<Scalars['ID']>>>;
  /** All values not starting with the given string. */
  id_not_starts_with: InputMaybe<Scalars['ID']>;
  /** All values starting with the given string. */
  id_starts_with: InputMaybe<Scalars['ID']>;
  isActive: InputMaybe<Scalars['Boolean']>;
  /** All values that are not equal to given value. */
  isActive_not: InputMaybe<Scalars['Boolean']>;
  isImplicit: InputMaybe<Scalars['Boolean']>;
  /** All values that are not equal to given value. */
  isImplicit_not: InputMaybe<Scalars['Boolean']>;
  operations_every: InputMaybe<ScheduledOperationWhereInput>;
  operations_none: InputMaybe<ScheduledOperationWhereInput>;
  operations_some: InputMaybe<ScheduledOperationWhereInput>;
  publishedAt: InputMaybe<Scalars['DateTime']>;
  /** All values greater than the given value. */
  publishedAt_gt: InputMaybe<Scalars['DateTime']>;
  /** All values greater than or equal the given value. */
  publishedAt_gte: InputMaybe<Scalars['DateTime']>;
  /** All values that are contained in given list. */
  publishedAt_in: InputMaybe<Array<InputMaybe<Scalars['DateTime']>>>;
  /** All values less than the given value. */
  publishedAt_lt: InputMaybe<Scalars['DateTime']>;
  /** All values less than or equal the given value. */
  publishedAt_lte: InputMaybe<Scalars['DateTime']>;
  /** All values that are not equal to given value. */
  publishedAt_not: InputMaybe<Scalars['DateTime']>;
  /** All values that are not contained in given list. */
  publishedAt_not_in: InputMaybe<Array<InputMaybe<Scalars['DateTime']>>>;
  publishedBy: InputMaybe<UserWhereInput>;
  releaseAt: InputMaybe<Scalars['DateTime']>;
  /** All values greater than the given value. */
  releaseAt_gt: InputMaybe<Scalars['DateTime']>;
  /** All values greater than or equal the given value. */
  releaseAt_gte: InputMaybe<Scalars['DateTime']>;
  /** All values that are contained in given list. */
  releaseAt_in: InputMaybe<Array<InputMaybe<Scalars['DateTime']>>>;
  /** All values less than the given value. */
  releaseAt_lt: InputMaybe<Scalars['DateTime']>;
  /** All values less than or equal the given value. */
  releaseAt_lte: InputMaybe<Scalars['DateTime']>;
  /** All values that are not equal to given value. */
  releaseAt_not: InputMaybe<Scalars['DateTime']>;
  /** All values that are not contained in given list. */
  releaseAt_not_in: InputMaybe<Array<InputMaybe<Scalars['DateTime']>>>;
  status: InputMaybe<ScheduledReleaseStatus>;
  /** All values that are contained in given list. */
  status_in: InputMaybe<Array<InputMaybe<ScheduledReleaseStatus>>>;
  /** All values that are not equal to given value. */
  status_not: InputMaybe<ScheduledReleaseStatus>;
  /** All values that are not contained in given list. */
  status_not_in: InputMaybe<Array<InputMaybe<ScheduledReleaseStatus>>>;
  title: InputMaybe<Scalars['String']>;
  /** All values containing the given string. */
  title_contains: InputMaybe<Scalars['String']>;
  /** All values ending with the given string. */
  title_ends_with: InputMaybe<Scalars['String']>;
  /** All values that are contained in given list. */
  title_in: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  /** All values that are not equal to given value. */
  title_not: InputMaybe<Scalars['String']>;
  /** All values not containing the given string. */
  title_not_contains: InputMaybe<Scalars['String']>;
  /** All values not ending with the given string */
  title_not_ends_with: InputMaybe<Scalars['String']>;
  /** All values that are not contained in given list. */
  title_not_in: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  /** All values not starting with the given string. */
  title_not_starts_with: InputMaybe<Scalars['String']>;
  /** All values starting with the given string. */
  title_starts_with: InputMaybe<Scalars['String']>;
  updatedAt: InputMaybe<Scalars['DateTime']>;
  /** All values greater than the given value. */
  updatedAt_gt: InputMaybe<Scalars['DateTime']>;
  /** All values greater than or equal the given value. */
  updatedAt_gte: InputMaybe<Scalars['DateTime']>;
  /** All values that are contained in given list. */
  updatedAt_in: InputMaybe<Array<InputMaybe<Scalars['DateTime']>>>;
  /** All values less than the given value. */
  updatedAt_lt: InputMaybe<Scalars['DateTime']>;
  /** All values less than or equal the given value. */
  updatedAt_lte: InputMaybe<Scalars['DateTime']>;
  /** All values that are not equal to given value. */
  updatedAt_not: InputMaybe<Scalars['DateTime']>;
  /** All values that are not contained in given list. */
  updatedAt_not_in: InputMaybe<Array<InputMaybe<Scalars['DateTime']>>>;
  updatedBy: InputMaybe<UserWhereInput>;
};

export enum ScheduledReleaseOrderByInput {
  CreatedAtAsc = 'createdAt_ASC',
  CreatedAtDesc = 'createdAt_DESC',
  DescriptionAsc = 'description_ASC',
  DescriptionDesc = 'description_DESC',
  ErrorMessageAsc = 'errorMessage_ASC',
  ErrorMessageDesc = 'errorMessage_DESC',
  IdAsc = 'id_ASC',
  IdDesc = 'id_DESC',
  IsActiveAsc = 'isActive_ASC',
  IsActiveDesc = 'isActive_DESC',
  IsImplicitAsc = 'isImplicit_ASC',
  IsImplicitDesc = 'isImplicit_DESC',
  PublishedAtAsc = 'publishedAt_ASC',
  PublishedAtDesc = 'publishedAt_DESC',
  ReleaseAtAsc = 'releaseAt_ASC',
  ReleaseAtDesc = 'releaseAt_DESC',
  StatusAsc = 'status_ASC',
  StatusDesc = 'status_DESC',
  TitleAsc = 'title_ASC',
  TitleDesc = 'title_DESC',
  UpdatedAtAsc = 'updatedAt_ASC',
  UpdatedAtDesc = 'updatedAt_DESC'
}

/** System Scheduled Release Status */
export enum ScheduledReleaseStatus {
  Completed = 'COMPLETED',
  Failed = 'FAILED',
  InProgress = 'IN_PROGRESS',
  Pending = 'PENDING'
}

export type ScheduledReleaseUpdateInput = {
  description: InputMaybe<Scalars['String']>;
  errorMessage: InputMaybe<Scalars['String']>;
  isActive: InputMaybe<Scalars['Boolean']>;
  releaseAt: InputMaybe<Scalars['DateTime']>;
  title: InputMaybe<Scalars['String']>;
};

export type ScheduledReleaseUpdateManyInlineInput = {
  /** Connect multiple existing ScheduledRelease documents */
  connect: InputMaybe<Array<ScheduledReleaseConnectInput>>;
  /** Create and connect multiple ScheduledRelease documents */
  create: InputMaybe<Array<ScheduledReleaseCreateInput>>;
  /** Delete multiple ScheduledRelease documents */
  delete: InputMaybe<Array<ScheduledReleaseWhereUniqueInput>>;
  /** Disconnect multiple ScheduledRelease documents */
  disconnect: InputMaybe<Array<ScheduledReleaseWhereUniqueInput>>;
  /** Override currently-connected documents with multiple existing ScheduledRelease documents */
  set: InputMaybe<Array<ScheduledReleaseWhereUniqueInput>>;
  /** Update multiple ScheduledRelease documents */
  update: InputMaybe<Array<ScheduledReleaseUpdateWithNestedWhereUniqueInput>>;
  /** Upsert multiple ScheduledRelease documents */
  upsert: InputMaybe<Array<ScheduledReleaseUpsertWithNestedWhereUniqueInput>>;
};

export type ScheduledReleaseUpdateManyInput = {
  description: InputMaybe<Scalars['String']>;
  errorMessage: InputMaybe<Scalars['String']>;
  isActive: InputMaybe<Scalars['Boolean']>;
  releaseAt: InputMaybe<Scalars['DateTime']>;
  title: InputMaybe<Scalars['String']>;
};

export type ScheduledReleaseUpdateManyWithNestedWhereInput = {
  /** Update many input */
  data: ScheduledReleaseUpdateManyInput;
  /** Document search */
  where: ScheduledReleaseWhereInput;
};

export type ScheduledReleaseUpdateOneInlineInput = {
  /** Connect existing ScheduledRelease document */
  connect: InputMaybe<ScheduledReleaseWhereUniqueInput>;
  /** Create and connect one ScheduledRelease document */
  create: InputMaybe<ScheduledReleaseCreateInput>;
  /** Delete currently connected ScheduledRelease document */
  delete: InputMaybe<Scalars['Boolean']>;
  /** Disconnect currently connected ScheduledRelease document */
  disconnect: InputMaybe<Scalars['Boolean']>;
  /** Update single ScheduledRelease document */
  update: InputMaybe<ScheduledReleaseUpdateWithNestedWhereUniqueInput>;
  /** Upsert single ScheduledRelease document */
  upsert: InputMaybe<ScheduledReleaseUpsertWithNestedWhereUniqueInput>;
};

export type ScheduledReleaseUpdateWithNestedWhereUniqueInput = {
  /** Document to update */
  data: ScheduledReleaseUpdateInput;
  /** Unique document search */
  where: ScheduledReleaseWhereUniqueInput;
};

export type ScheduledReleaseUpsertInput = {
  /** Create document if it didn't exist */
  create: ScheduledReleaseCreateInput;
  /** Update document if it exists */
  update: ScheduledReleaseUpdateInput;
};

export type ScheduledReleaseUpsertWithNestedWhereUniqueInput = {
  /** Upsert data */
  data: ScheduledReleaseUpsertInput;
  /** Unique document search */
  where: ScheduledReleaseWhereUniqueInput;
};

/** Identifies documents */
export type ScheduledReleaseWhereInput = {
  /** Logical AND on all given filters. */
  AND: InputMaybe<Array<ScheduledReleaseWhereInput>>;
  /** Logical NOT on all given filters combined by AND. */
  NOT: InputMaybe<Array<ScheduledReleaseWhereInput>>;
  /** Logical OR on all given filters. */
  OR: InputMaybe<Array<ScheduledReleaseWhereInput>>;
  /** Contains search across all appropriate fields. */
  _search: InputMaybe<Scalars['String']>;
  createdAt: InputMaybe<Scalars['DateTime']>;
  /** All values greater than the given value. */
  createdAt_gt: InputMaybe<Scalars['DateTime']>;
  /** All values greater than or equal the given value. */
  createdAt_gte: InputMaybe<Scalars['DateTime']>;
  /** All values that are contained in given list. */
  createdAt_in: InputMaybe<Array<InputMaybe<Scalars['DateTime']>>>;
  /** All values less than the given value. */
  createdAt_lt: InputMaybe<Scalars['DateTime']>;
  /** All values less than or equal the given value. */
  createdAt_lte: InputMaybe<Scalars['DateTime']>;
  /** All values that are not equal to given value. */
  createdAt_not: InputMaybe<Scalars['DateTime']>;
  /** All values that are not contained in given list. */
  createdAt_not_in: InputMaybe<Array<InputMaybe<Scalars['DateTime']>>>;
  createdBy: InputMaybe<UserWhereInput>;
  description: InputMaybe<Scalars['String']>;
  /** All values containing the given string. */
  description_contains: InputMaybe<Scalars['String']>;
  /** All values ending with the given string. */
  description_ends_with: InputMaybe<Scalars['String']>;
  /** All values that are contained in given list. */
  description_in: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  /** All values that are not equal to given value. */
  description_not: InputMaybe<Scalars['String']>;
  /** All values not containing the given string. */
  description_not_contains: InputMaybe<Scalars['String']>;
  /** All values not ending with the given string */
  description_not_ends_with: InputMaybe<Scalars['String']>;
  /** All values that are not contained in given list. */
  description_not_in: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  /** All values not starting with the given string. */
  description_not_starts_with: InputMaybe<Scalars['String']>;
  /** All values starting with the given string. */
  description_starts_with: InputMaybe<Scalars['String']>;
  errorMessage: InputMaybe<Scalars['String']>;
  /** All values containing the given string. */
  errorMessage_contains: InputMaybe<Scalars['String']>;
  /** All values ending with the given string. */
  errorMessage_ends_with: InputMaybe<Scalars['String']>;
  /** All values that are contained in given list. */
  errorMessage_in: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  /** All values that are not equal to given value. */
  errorMessage_not: InputMaybe<Scalars['String']>;
  /** All values not containing the given string. */
  errorMessage_not_contains: InputMaybe<Scalars['String']>;
  /** All values not ending with the given string */
  errorMessage_not_ends_with: InputMaybe<Scalars['String']>;
  /** All values that are not contained in given list. */
  errorMessage_not_in: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  /** All values not starting with the given string. */
  errorMessage_not_starts_with: InputMaybe<Scalars['String']>;
  /** All values starting with the given string. */
  errorMessage_starts_with: InputMaybe<Scalars['String']>;
  id: InputMaybe<Scalars['ID']>;
  /** All values containing the given string. */
  id_contains: InputMaybe<Scalars['ID']>;
  /** All values ending with the given string. */
  id_ends_with: InputMaybe<Scalars['ID']>;
  /** All values that are contained in given list. */
  id_in: InputMaybe<Array<InputMaybe<Scalars['ID']>>>;
  /** All values that are not equal to given value. */
  id_not: InputMaybe<Scalars['ID']>;
  /** All values not containing the given string. */
  id_not_contains: InputMaybe<Scalars['ID']>;
  /** All values not ending with the given string */
  id_not_ends_with: InputMaybe<Scalars['ID']>;
  /** All values that are not contained in given list. */
  id_not_in: InputMaybe<Array<InputMaybe<Scalars['ID']>>>;
  /** All values not starting with the given string. */
  id_not_starts_with: InputMaybe<Scalars['ID']>;
  /** All values starting with the given string. */
  id_starts_with: InputMaybe<Scalars['ID']>;
  isActive: InputMaybe<Scalars['Boolean']>;
  /** All values that are not equal to given value. */
  isActive_not: InputMaybe<Scalars['Boolean']>;
  isImplicit: InputMaybe<Scalars['Boolean']>;
  /** All values that are not equal to given value. */
  isImplicit_not: InputMaybe<Scalars['Boolean']>;
  operations_every: InputMaybe<ScheduledOperationWhereInput>;
  operations_none: InputMaybe<ScheduledOperationWhereInput>;
  operations_some: InputMaybe<ScheduledOperationWhereInput>;
  publishedAt: InputMaybe<Scalars['DateTime']>;
  /** All values greater than the given value. */
  publishedAt_gt: InputMaybe<Scalars['DateTime']>;
  /** All values greater than or equal the given value. */
  publishedAt_gte: InputMaybe<Scalars['DateTime']>;
  /** All values that are contained in given list. */
  publishedAt_in: InputMaybe<Array<InputMaybe<Scalars['DateTime']>>>;
  /** All values less than the given value. */
  publishedAt_lt: InputMaybe<Scalars['DateTime']>;
  /** All values less than or equal the given value. */
  publishedAt_lte: InputMaybe<Scalars['DateTime']>;
  /** All values that are not equal to given value. */
  publishedAt_not: InputMaybe<Scalars['DateTime']>;
  /** All values that are not contained in given list. */
  publishedAt_not_in: InputMaybe<Array<InputMaybe<Scalars['DateTime']>>>;
  publishedBy: InputMaybe<UserWhereInput>;
  releaseAt: InputMaybe<Scalars['DateTime']>;
  /** All values greater than the given value. */
  releaseAt_gt: InputMaybe<Scalars['DateTime']>;
  /** All values greater than or equal the given value. */
  releaseAt_gte: InputMaybe<Scalars['DateTime']>;
  /** All values that are contained in given list. */
  releaseAt_in: InputMaybe<Array<InputMaybe<Scalars['DateTime']>>>;
  /** All values less than the given value. */
  releaseAt_lt: InputMaybe<Scalars['DateTime']>;
  /** All values less than or equal the given value. */
  releaseAt_lte: InputMaybe<Scalars['DateTime']>;
  /** All values that are not equal to given value. */
  releaseAt_not: InputMaybe<Scalars['DateTime']>;
  /** All values that are not contained in given list. */
  releaseAt_not_in: InputMaybe<Array<InputMaybe<Scalars['DateTime']>>>;
  status: InputMaybe<ScheduledReleaseStatus>;
  /** All values that are contained in given list. */
  status_in: InputMaybe<Array<InputMaybe<ScheduledReleaseStatus>>>;
  /** All values that are not equal to given value. */
  status_not: InputMaybe<ScheduledReleaseStatus>;
  /** All values that are not contained in given list. */
  status_not_in: InputMaybe<Array<InputMaybe<ScheduledReleaseStatus>>>;
  title: InputMaybe<Scalars['String']>;
  /** All values containing the given string. */
  title_contains: InputMaybe<Scalars['String']>;
  /** All values ending with the given string. */
  title_ends_with: InputMaybe<Scalars['String']>;
  /** All values that are contained in given list. */
  title_in: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  /** All values that are not equal to given value. */
  title_not: InputMaybe<Scalars['String']>;
  /** All values not containing the given string. */
  title_not_contains: InputMaybe<Scalars['String']>;
  /** All values not ending with the given string */
  title_not_ends_with: InputMaybe<Scalars['String']>;
  /** All values that are not contained in given list. */
  title_not_in: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  /** All values not starting with the given string. */
  title_not_starts_with: InputMaybe<Scalars['String']>;
  /** All values starting with the given string. */
  title_starts_with: InputMaybe<Scalars['String']>;
  updatedAt: InputMaybe<Scalars['DateTime']>;
  /** All values greater than the given value. */
  updatedAt_gt: InputMaybe<Scalars['DateTime']>;
  /** All values greater than or equal the given value. */
  updatedAt_gte: InputMaybe<Scalars['DateTime']>;
  /** All values that are contained in given list. */
  updatedAt_in: InputMaybe<Array<InputMaybe<Scalars['DateTime']>>>;
  /** All values less than the given value. */
  updatedAt_lt: InputMaybe<Scalars['DateTime']>;
  /** All values less than or equal the given value. */
  updatedAt_lte: InputMaybe<Scalars['DateTime']>;
  /** All values that are not equal to given value. */
  updatedAt_not: InputMaybe<Scalars['DateTime']>;
  /** All values that are not contained in given list. */
  updatedAt_not_in: InputMaybe<Array<InputMaybe<Scalars['DateTime']>>>;
  updatedBy: InputMaybe<UserWhereInput>;
};

/** References ScheduledRelease record uniquely */
export type ScheduledReleaseWhereUniqueInput = {
  id: InputMaybe<Scalars['ID']>;
};

/** Stage system enumeration */
export enum Stage {
  /** The Draft is the default stage for all your content. */
  Draft = 'DRAFT',
  /** The Published stage is where you can publish your content to. */
  Published = 'PUBLISHED'
}

export enum SystemDateTimeFieldVariation {
  Base = 'BASE',
  Combined = 'COMBINED',
  Localization = 'LOCALIZATION'
}

export type UnpublishLocaleInput = {
  /** Locales to unpublish */
  locale: Locale;
  /** Stages to unpublish selected locales from */
  stages: Array<Stage>;
};

/** User system model */
export type User = Node & {
  __typename?: 'User';
  /** The time the document was created */
  createdAt: Scalars['DateTime'];
  /** Get the document in other stages */
  documentInStages: Array<User>;
  /** The unique identifier */
  id: Scalars['ID'];
  /** Flag to determine if user is active or not */
  isActive: Scalars['Boolean'];
  /** User Kind. Can be either MEMBER, PAT or PUBLIC */
  kind: UserKind;
  /** The username */
  name: Scalars['String'];
  /** Profile Picture url */
  picture: Maybe<Scalars['String']>;
  /** The time the document was published. Null on documents in draft stage. */
  publishedAt: Maybe<Scalars['DateTime']>;
  /** System stage field */
  stage: Stage;
  /** The time the document was updated */
  updatedAt: Scalars['DateTime'];
};


/** User system model */
export type UserDocumentInStagesArgs = {
  includeCurrent?: Scalars['Boolean'];
  inheritLocale?: Scalars['Boolean'];
  stages?: Array<Stage>;
};

export type UserConnectInput = {
  /** Allow to specify document position in list of connected documents, will default to appending at end of list */
  position: InputMaybe<ConnectPositionInput>;
  /** Document to connect */
  where: UserWhereUniqueInput;
};

/** A connection to a list of items. */
export type UserConnection = {
  __typename?: 'UserConnection';
  aggregate: Aggregate;
  /** A list of edges. */
  edges: Array<UserEdge>;
  /** Information to aid in pagination. */
  pageInfo: PageInfo;
};

export type UserCreateManyInlineInput = {
  /** Connect multiple existing User documents */
  connect: InputMaybe<Array<UserWhereUniqueInput>>;
};

export type UserCreateOneInlineInput = {
  /** Connect one existing User document */
  connect: InputMaybe<UserWhereUniqueInput>;
};

/** An edge in a connection. */
export type UserEdge = {
  __typename?: 'UserEdge';
  /** A cursor for use in pagination. */
  cursor: Scalars['String'];
  /** The item at the end of the edge. */
  node: User;
};

/** System User Kind */
export enum UserKind {
  Member = 'MEMBER',
  Pat = 'PAT',
  Public = 'PUBLIC',
  Webhook = 'WEBHOOK'
}

/** Identifies documents */
export type UserManyWhereInput = {
  /** Logical AND on all given filters. */
  AND: InputMaybe<Array<UserWhereInput>>;
  /** Logical NOT on all given filters combined by AND. */
  NOT: InputMaybe<Array<UserWhereInput>>;
  /** Logical OR on all given filters. */
  OR: InputMaybe<Array<UserWhereInput>>;
  /** Contains search across all appropriate fields. */
  _search: InputMaybe<Scalars['String']>;
  createdAt: InputMaybe<Scalars['DateTime']>;
  /** All values greater than the given value. */
  createdAt_gt: InputMaybe<Scalars['DateTime']>;
  /** All values greater than or equal the given value. */
  createdAt_gte: InputMaybe<Scalars['DateTime']>;
  /** All values that are contained in given list. */
  createdAt_in: InputMaybe<Array<InputMaybe<Scalars['DateTime']>>>;
  /** All values less than the given value. */
  createdAt_lt: InputMaybe<Scalars['DateTime']>;
  /** All values less than or equal the given value. */
  createdAt_lte: InputMaybe<Scalars['DateTime']>;
  /** All values that are not equal to given value. */
  createdAt_not: InputMaybe<Scalars['DateTime']>;
  /** All values that are not contained in given list. */
  createdAt_not_in: InputMaybe<Array<InputMaybe<Scalars['DateTime']>>>;
  id: InputMaybe<Scalars['ID']>;
  /** All values containing the given string. */
  id_contains: InputMaybe<Scalars['ID']>;
  /** All values ending with the given string. */
  id_ends_with: InputMaybe<Scalars['ID']>;
  /** All values that are contained in given list. */
  id_in: InputMaybe<Array<InputMaybe<Scalars['ID']>>>;
  /** All values that are not equal to given value. */
  id_not: InputMaybe<Scalars['ID']>;
  /** All values not containing the given string. */
  id_not_contains: InputMaybe<Scalars['ID']>;
  /** All values not ending with the given string */
  id_not_ends_with: InputMaybe<Scalars['ID']>;
  /** All values that are not contained in given list. */
  id_not_in: InputMaybe<Array<InputMaybe<Scalars['ID']>>>;
  /** All values not starting with the given string. */
  id_not_starts_with: InputMaybe<Scalars['ID']>;
  /** All values starting with the given string. */
  id_starts_with: InputMaybe<Scalars['ID']>;
  isActive: InputMaybe<Scalars['Boolean']>;
  /** All values that are not equal to given value. */
  isActive_not: InputMaybe<Scalars['Boolean']>;
  kind: InputMaybe<UserKind>;
  /** All values that are contained in given list. */
  kind_in: InputMaybe<Array<InputMaybe<UserKind>>>;
  /** All values that are not equal to given value. */
  kind_not: InputMaybe<UserKind>;
  /** All values that are not contained in given list. */
  kind_not_in: InputMaybe<Array<InputMaybe<UserKind>>>;
  name: InputMaybe<Scalars['String']>;
  /** All values containing the given string. */
  name_contains: InputMaybe<Scalars['String']>;
  /** All values ending with the given string. */
  name_ends_with: InputMaybe<Scalars['String']>;
  /** All values that are contained in given list. */
  name_in: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  /** All values that are not equal to given value. */
  name_not: InputMaybe<Scalars['String']>;
  /** All values not containing the given string. */
  name_not_contains: InputMaybe<Scalars['String']>;
  /** All values not ending with the given string */
  name_not_ends_with: InputMaybe<Scalars['String']>;
  /** All values that are not contained in given list. */
  name_not_in: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  /** All values not starting with the given string. */
  name_not_starts_with: InputMaybe<Scalars['String']>;
  /** All values starting with the given string. */
  name_starts_with: InputMaybe<Scalars['String']>;
  picture: InputMaybe<Scalars['String']>;
  /** All values containing the given string. */
  picture_contains: InputMaybe<Scalars['String']>;
  /** All values ending with the given string. */
  picture_ends_with: InputMaybe<Scalars['String']>;
  /** All values that are contained in given list. */
  picture_in: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  /** All values that are not equal to given value. */
  picture_not: InputMaybe<Scalars['String']>;
  /** All values not containing the given string. */
  picture_not_contains: InputMaybe<Scalars['String']>;
  /** All values not ending with the given string */
  picture_not_ends_with: InputMaybe<Scalars['String']>;
  /** All values that are not contained in given list. */
  picture_not_in: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  /** All values not starting with the given string. */
  picture_not_starts_with: InputMaybe<Scalars['String']>;
  /** All values starting with the given string. */
  picture_starts_with: InputMaybe<Scalars['String']>;
  publishedAt: InputMaybe<Scalars['DateTime']>;
  /** All values greater than the given value. */
  publishedAt_gt: InputMaybe<Scalars['DateTime']>;
  /** All values greater than or equal the given value. */
  publishedAt_gte: InputMaybe<Scalars['DateTime']>;
  /** All values that are contained in given list. */
  publishedAt_in: InputMaybe<Array<InputMaybe<Scalars['DateTime']>>>;
  /** All values less than the given value. */
  publishedAt_lt: InputMaybe<Scalars['DateTime']>;
  /** All values less than or equal the given value. */
  publishedAt_lte: InputMaybe<Scalars['DateTime']>;
  /** All values that are not equal to given value. */
  publishedAt_not: InputMaybe<Scalars['DateTime']>;
  /** All values that are not contained in given list. */
  publishedAt_not_in: InputMaybe<Array<InputMaybe<Scalars['DateTime']>>>;
  updatedAt: InputMaybe<Scalars['DateTime']>;
  /** All values greater than the given value. */
  updatedAt_gt: InputMaybe<Scalars['DateTime']>;
  /** All values greater than or equal the given value. */
  updatedAt_gte: InputMaybe<Scalars['DateTime']>;
  /** All values that are contained in given list. */
  updatedAt_in: InputMaybe<Array<InputMaybe<Scalars['DateTime']>>>;
  /** All values less than the given value. */
  updatedAt_lt: InputMaybe<Scalars['DateTime']>;
  /** All values less than or equal the given value. */
  updatedAt_lte: InputMaybe<Scalars['DateTime']>;
  /** All values that are not equal to given value. */
  updatedAt_not: InputMaybe<Scalars['DateTime']>;
  /** All values that are not contained in given list. */
  updatedAt_not_in: InputMaybe<Array<InputMaybe<Scalars['DateTime']>>>;
};

export enum UserOrderByInput {
  CreatedAtAsc = 'createdAt_ASC',
  CreatedAtDesc = 'createdAt_DESC',
  IdAsc = 'id_ASC',
  IdDesc = 'id_DESC',
  IsActiveAsc = 'isActive_ASC',
  IsActiveDesc = 'isActive_DESC',
  KindAsc = 'kind_ASC',
  KindDesc = 'kind_DESC',
  NameAsc = 'name_ASC',
  NameDesc = 'name_DESC',
  PictureAsc = 'picture_ASC',
  PictureDesc = 'picture_DESC',
  PublishedAtAsc = 'publishedAt_ASC',
  PublishedAtDesc = 'publishedAt_DESC',
  UpdatedAtAsc = 'updatedAt_ASC',
  UpdatedAtDesc = 'updatedAt_DESC'
}

export type UserUpdateManyInlineInput = {
  /** Connect multiple existing User documents */
  connect: InputMaybe<Array<UserConnectInput>>;
  /** Disconnect multiple User documents */
  disconnect: InputMaybe<Array<UserWhereUniqueInput>>;
  /** Override currently-connected documents with multiple existing User documents */
  set: InputMaybe<Array<UserWhereUniqueInput>>;
};

export type UserUpdateOneInlineInput = {
  /** Connect existing User document */
  connect: InputMaybe<UserWhereUniqueInput>;
  /** Disconnect currently connected User document */
  disconnect: InputMaybe<Scalars['Boolean']>;
};

/** Identifies documents */
export type UserWhereInput = {
  /** Logical AND on all given filters. */
  AND: InputMaybe<Array<UserWhereInput>>;
  /** Logical NOT on all given filters combined by AND. */
  NOT: InputMaybe<Array<UserWhereInput>>;
  /** Logical OR on all given filters. */
  OR: InputMaybe<Array<UserWhereInput>>;
  /** Contains search across all appropriate fields. */
  _search: InputMaybe<Scalars['String']>;
  createdAt: InputMaybe<Scalars['DateTime']>;
  /** All values greater than the given value. */
  createdAt_gt: InputMaybe<Scalars['DateTime']>;
  /** All values greater than or equal the given value. */
  createdAt_gte: InputMaybe<Scalars['DateTime']>;
  /** All values that are contained in given list. */
  createdAt_in: InputMaybe<Array<InputMaybe<Scalars['DateTime']>>>;
  /** All values less than the given value. */
  createdAt_lt: InputMaybe<Scalars['DateTime']>;
  /** All values less than or equal the given value. */
  createdAt_lte: InputMaybe<Scalars['DateTime']>;
  /** All values that are not equal to given value. */
  createdAt_not: InputMaybe<Scalars['DateTime']>;
  /** All values that are not contained in given list. */
  createdAt_not_in: InputMaybe<Array<InputMaybe<Scalars['DateTime']>>>;
  id: InputMaybe<Scalars['ID']>;
  /** All values containing the given string. */
  id_contains: InputMaybe<Scalars['ID']>;
  /** All values ending with the given string. */
  id_ends_with: InputMaybe<Scalars['ID']>;
  /** All values that are contained in given list. */
  id_in: InputMaybe<Array<InputMaybe<Scalars['ID']>>>;
  /** All values that are not equal to given value. */
  id_not: InputMaybe<Scalars['ID']>;
  /** All values not containing the given string. */
  id_not_contains: InputMaybe<Scalars['ID']>;
  /** All values not ending with the given string */
  id_not_ends_with: InputMaybe<Scalars['ID']>;
  /** All values that are not contained in given list. */
  id_not_in: InputMaybe<Array<InputMaybe<Scalars['ID']>>>;
  /** All values not starting with the given string. */
  id_not_starts_with: InputMaybe<Scalars['ID']>;
  /** All values starting with the given string. */
  id_starts_with: InputMaybe<Scalars['ID']>;
  isActive: InputMaybe<Scalars['Boolean']>;
  /** All values that are not equal to given value. */
  isActive_not: InputMaybe<Scalars['Boolean']>;
  kind: InputMaybe<UserKind>;
  /** All values that are contained in given list. */
  kind_in: InputMaybe<Array<InputMaybe<UserKind>>>;
  /** All values that are not equal to given value. */
  kind_not: InputMaybe<UserKind>;
  /** All values that are not contained in given list. */
  kind_not_in: InputMaybe<Array<InputMaybe<UserKind>>>;
  name: InputMaybe<Scalars['String']>;
  /** All values containing the given string. */
  name_contains: InputMaybe<Scalars['String']>;
  /** All values ending with the given string. */
  name_ends_with: InputMaybe<Scalars['String']>;
  /** All values that are contained in given list. */
  name_in: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  /** All values that are not equal to given value. */
  name_not: InputMaybe<Scalars['String']>;
  /** All values not containing the given string. */
  name_not_contains: InputMaybe<Scalars['String']>;
  /** All values not ending with the given string */
  name_not_ends_with: InputMaybe<Scalars['String']>;
  /** All values that are not contained in given list. */
  name_not_in: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  /** All values not starting with the given string. */
  name_not_starts_with: InputMaybe<Scalars['String']>;
  /** All values starting with the given string. */
  name_starts_with: InputMaybe<Scalars['String']>;
  picture: InputMaybe<Scalars['String']>;
  /** All values containing the given string. */
  picture_contains: InputMaybe<Scalars['String']>;
  /** All values ending with the given string. */
  picture_ends_with: InputMaybe<Scalars['String']>;
  /** All values that are contained in given list. */
  picture_in: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  /** All values that are not equal to given value. */
  picture_not: InputMaybe<Scalars['String']>;
  /** All values not containing the given string. */
  picture_not_contains: InputMaybe<Scalars['String']>;
  /** All values not ending with the given string */
  picture_not_ends_with: InputMaybe<Scalars['String']>;
  /** All values that are not contained in given list. */
  picture_not_in: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  /** All values not starting with the given string. */
  picture_not_starts_with: InputMaybe<Scalars['String']>;
  /** All values starting with the given string. */
  picture_starts_with: InputMaybe<Scalars['String']>;
  publishedAt: InputMaybe<Scalars['DateTime']>;
  /** All values greater than the given value. */
  publishedAt_gt: InputMaybe<Scalars['DateTime']>;
  /** All values greater than or equal the given value. */
  publishedAt_gte: InputMaybe<Scalars['DateTime']>;
  /** All values that are contained in given list. */
  publishedAt_in: InputMaybe<Array<InputMaybe<Scalars['DateTime']>>>;
  /** All values less than the given value. */
  publishedAt_lt: InputMaybe<Scalars['DateTime']>;
  /** All values less than or equal the given value. */
  publishedAt_lte: InputMaybe<Scalars['DateTime']>;
  /** All values that are not equal to given value. */
  publishedAt_not: InputMaybe<Scalars['DateTime']>;
  /** All values that are not contained in given list. */
  publishedAt_not_in: InputMaybe<Array<InputMaybe<Scalars['DateTime']>>>;
  updatedAt: InputMaybe<Scalars['DateTime']>;
  /** All values greater than the given value. */
  updatedAt_gt: InputMaybe<Scalars['DateTime']>;
  /** All values greater than or equal the given value. */
  updatedAt_gte: InputMaybe<Scalars['DateTime']>;
  /** All values that are contained in given list. */
  updatedAt_in: InputMaybe<Array<InputMaybe<Scalars['DateTime']>>>;
  /** All values less than the given value. */
  updatedAt_lt: InputMaybe<Scalars['DateTime']>;
  /** All values less than or equal the given value. */
  updatedAt_lte: InputMaybe<Scalars['DateTime']>;
  /** All values that are not equal to given value. */
  updatedAt_not: InputMaybe<Scalars['DateTime']>;
  /** All values that are not contained in given list. */
  updatedAt_not_in: InputMaybe<Array<InputMaybe<Scalars['DateTime']>>>;
};

/** References User record uniquely */
export type UserWhereUniqueInput = {
  id: InputMaybe<Scalars['ID']>;
};

export type Version = {
  __typename?: 'Version';
  createdAt: Scalars['DateTime'];
  id: Scalars['ID'];
  revision: Scalars['Int'];
  stage: Stage;
};

export type VersionWhereInput = {
  id: Scalars['ID'];
  revision: Scalars['Int'];
  stage: Stage;
};

export enum _FilterKind {
  And = 'AND',
  Not = 'NOT',
  Or = 'OR',
  Contains = 'contains',
  ContainsAll = 'contains_all',
  ContainsNone = 'contains_none',
  ContainsSome = 'contains_some',
  EndsWith = 'ends_with',
  Eq = 'eq',
  EqNot = 'eq_not',
  Gt = 'gt',
  Gte = 'gte',
  In = 'in',
  Lt = 'lt',
  Lte = 'lte',
  NotContains = 'not_contains',
  NotEndsWith = 'not_ends_with',
  NotIn = 'not_in',
  NotStartsWith = 'not_starts_with',
  RelationalEvery = 'relational_every',
  RelationalNone = 'relational_none',
  RelationalSingle = 'relational_single',
  RelationalSome = 'relational_some',
  Search = 'search',
  StartsWith = 'starts_with'
}

export enum _MutationInputFieldKind {
  Enum = 'enum',
  Relation = 'relation',
  RichText = 'richText',
  RichTextWithEmbeds = 'richTextWithEmbeds',
  Scalar = 'scalar',
  Union = 'union',
  Virtual = 'virtual'
}

export enum _MutationKind {
  Create = 'create',
  Delete = 'delete',
  DeleteMany = 'deleteMany',
  Publish = 'publish',
  PublishMany = 'publishMany',
  SchedulePublish = 'schedulePublish',
  ScheduleUnpublish = 'scheduleUnpublish',
  Unpublish = 'unpublish',
  UnpublishMany = 'unpublishMany',
  Update = 'update',
  UpdateMany = 'updateMany',
  Upsert = 'upsert'
}

export enum _OrderDirection {
  Asc = 'asc',
  Desc = 'desc'
}

export enum _RelationInputCardinality {
  Many = 'many',
  One = 'one'
}

export enum _RelationInputKind {
  Create = 'create',
  Update = 'update'
}

export enum _RelationKind {
  Regular = 'regular',
  Union = 'union'
}

export enum _SystemDateTimeFieldVariation {
  Base = 'base',
  Combined = 'combined',
  Localization = 'localization'
}

export type GetCategoriesQueryVariables = Exact<{
  stage?: InputMaybe<Stage>;
}>;


export type GetCategoriesQuery = { __typename?: 'Query', categories: Array<{ __typename?: 'Category', id: string, description: string | null, name: string, slug: string }> };

export type GetCategoriesSlugQueryVariables = Exact<{
  stage?: InputMaybe<Stage>;
}>;


export type GetCategoriesSlugQuery = { __typename?: 'Query', categories: Array<{ __typename?: 'Category', slug: string }> };

export type GetConfigQueryVariables = Exact<{
  stage?: InputMaybe<Stage>;
}>;


export type GetConfigQuery = { __typename?: 'Query', configs: Array<{ __typename?: 'Config', id: string, shippingfees: number }> };

export type GetCustomerQueryVariables = Exact<{
  email: Scalars['String'];
  stage?: InputMaybe<Stage>;
}>;


export type GetCustomerQuery = { __typename?: 'Query', customer: { __typename?: 'Customer', id: string } | null };

export type CreateCustomerMutationMutationVariables = Exact<{
  data: CustomerCreateInput;
}>;


export type CreateCustomerMutationMutation = { __typename?: 'Mutation', customer: { __typename?: 'Customer', id: string } | null };

export type UpdateCustomerMutationMutationVariables = Exact<{
  data: CustomerUpdateInput;
  where: CustomerWhereUniqueInput;
}>;


export type UpdateCustomerMutationMutation = { __typename?: 'Mutation', customer: { __typename?: 'Customer', id: string } | null };

export type CreateOrderMutationMutationVariables = Exact<{
  order: OrderCreateInput;
}>;


export type CreateOrderMutationMutation = { __typename?: 'Mutation', order: { __typename?: 'Order', id: string } | null };

export type PublishOrderMutationMutationVariables = Exact<{
  id: Scalars['ID'];
}>;


export type PublishOrderMutationMutation = { __typename?: 'Mutation', publishOrder: { __typename?: 'Order', id: string } | null };

export type PublishOrderItemMutationMutationVariables = Exact<{
  id: Scalars['ID'];
}>;


export type PublishOrderItemMutationMutation = { __typename?: 'Mutation', publishOrder: { __typename?: 'Order', id: string } | null };

export type CreateOrderItemsMutationMutationVariables = Exact<{
  ordeItems: OrderItemCreateInput;
}>;


export type CreateOrderItemsMutationMutation = { __typename?: 'Mutation', orderItems: { __typename?: 'OrderItem', id: string } | null };

export type GetOrderProductQueryVariables = Exact<{
  pid: Scalars['ID'];
  cid: Scalars['ID'];
  imageWidth?: InputMaybe<Scalars['Int']>;
  stage?: InputMaybe<Stage>;
}>;


export type GetOrderProductQuery = { __typename?: 'Query', product: { __typename?: 'Product', name: string, price: number, productId: string, image: { __typename?: 'Asset', url: string } } | null, productVariantColor: { __typename?: 'ProductVariantColor', name: string, colorId: string } | null };

export type GetDoneOrderProductQueryVariables = Exact<{
  id: Scalars['String'];
  imageWidth?: InputMaybe<Scalars['Int']>;
}>;


export type GetDoneOrderProductQuery = { __typename?: 'Query', orders: Array<{ __typename?: 'Order', id: string, total: number, customer: { __typename?: 'Customer', firstname: string | null, lastname: string | null, address: string | null, district: string | null, city: string | null, pcode: string | null } | null, orderItems: Array<{ __typename?: 'OrderItem', id: string, quantity: number, total: number, product: { __typename?: 'Product', name: string, image: { __typename?: 'Asset', width: number | null, height: number | null, url: string, altText: string | null } } | null, productVariantColor: { __typename?: 'ProductVariantColor', id: string, name: string, hex: string | null } | null }> }> };

export type GetProductsSlugCategoryQueryVariables = Exact<{
  slug: Scalars['String'];
  imageWidth?: InputMaybe<Scalars['Int']>;
  stage?: InputMaybe<Stage>;
}>;


export type GetProductsSlugCategoryQuery = { __typename?: 'Query', category: { __typename?: 'Category', name: string, products: Array<{ __typename?: 'Product', id: string, name: string, price: number, slug: string | null, image: { __typename?: 'Asset', width: number | null, height: number | null, url: string, altText: string | null }, productVariantColors: Array<{ __typename?: 'ProductVariantColor', name: string, hex: string | null, color: ProductColor }> }> } | null };

export type GetProductsSlugQueryVariables = Exact<{
  stage?: InputMaybe<Stage>;
}>;


export type GetProductsSlugQuery = { __typename?: 'Query', products: Array<{ __typename?: 'Product', slug: string | null, categories: Array<{ __typename?: 'Category', slug: string }> }> };

export type GetCategoriesProductsSlugQueryVariables = Exact<{
  stage?: InputMaybe<Stage>;
}>;


export type GetCategoriesProductsSlugQuery = { __typename?: 'Query', categories: Array<{ __typename?: 'Category', slug: string, products: Array<{ __typename?: 'Product', slug: string | null }> }> };

export type GetProductSlugQueryVariables = Exact<{
  slug: Scalars['String'];
  imageWidth?: InputMaybe<Scalars['Int']>;
  imageThumbnail?: InputMaybe<Scalars['Int']>;
  stage?: InputMaybe<Stage>;
}>;


export type GetProductSlugQuery = { __typename?: 'Query', product: { __typename?: 'Product', id: string, name: string, price: number, slug: string | null, categories: Array<{ __typename?: 'Category', name: string, slug: string }>, description: { __typename?: 'RichText', html: string } | null, image: { __typename?: 'Asset', width: number | null, height: number | null, url: string, altText: string | null, thumbnail: string }, productVariantColors: Array<{ __typename?: 'ProductVariantColor', id: string, name: string, hex: string | null, color: ProductColor }> } | null };

export type GetSearchQueryVariables = Exact<{
  search: Scalars['String'];
  imageWidth?: InputMaybe<Scalars['Int']>;
  stage?: InputMaybe<Stage>;
}>;


export type GetSearchQuery = { __typename?: 'Query', products: Array<{ __typename?: 'Product', id: string, name: string, price: number, slug: string | null, image: { __typename?: 'Asset', width: number | null, height: number | null, url: string, altText: string | null }, productVariantColors: Array<{ __typename?: 'ProductVariantColor', name: string, hex: string | null, color: ProductColor }> }> };


export const GetCategories = gql`
    query getCategories($stage: Stage = PUBLISHED) {
  categories(stage: $stage) {
    id
    description
    name
    slug
  }
}
    `;
export const GetCategoriesSlug = gql`
    query getCategoriesSlug($stage: Stage = PUBLISHED) {
  categories(stage: $stage) {
    slug
  }
}
    `;
export const GetConfig = gql`
    query getConfig($stage: Stage = PUBLISHED) {
  configs(first: 1, stage: $stage) {
    id
    shippingfees
  }
}
    `;
export const GetCustomer = gql`
    query getCustomer($email: String!, $stage: Stage = PUBLISHED) {
  customer(where: {email: $email}, stage: $stage) {
    id
  }
}
    `;
export const CreateCustomerMutation = gql`
    mutation createCustomerMutation($data: CustomerCreateInput!) {
  customer: createCustomer(data: $data) {
    id
  }
}
    `;
export const UpdateCustomerMutation = gql`
    mutation updateCustomerMutation($data: CustomerUpdateInput!, $where: CustomerWhereUniqueInput!) {
  customer: updateCustomer(data: $data, where: $where) {
    id
  }
}
    `;
export const CreateOrderMutation = gql`
    mutation createOrderMutation($order: OrderCreateInput!) {
  order: createOrder(data: $order) {
    id
  }
}
    `;
export const PublishOrderMutation = gql`
    mutation publishOrderMutation($id: ID!) {
  publishOrder(where: {id: $id}, to: PUBLISHED) {
    id
  }
}
    `;
export const PublishOrderItemMutation = gql`
    mutation publishOrderItemMutation($id: ID!) {
  publishOrder(where: {id: $id}, to: PUBLISHED) {
    id
  }
}
    `;
export const CreateOrderItemsMutation = gql`
    mutation createOrderItemsMutation($ordeItems: OrderItemCreateInput!) {
  orderItems: createOrderItem(data: $ordeItems) {
    id
  }
}
    `;
export const GetOrderProduct = gql`
    query getOrderProduct($pid: ID!, $cid: ID!, $imageWidth: Int = 75, $stage: Stage = PUBLISHED) {
  product(where: {id: $pid}, stage: $stage) {
    productId: id
    image {
      url(
        transformation: {image: {resize: {width: $imageWidth, fit: clip}}, document: {output: {format: webp}}}
      )
    }
    name
    price
  }
  productVariantColor(where: {id: $cid}) {
    colorId: id
    name
  }
}
    `;
export const GetDoneOrderProduct = gql`
    query getDoneOrderProduct($id: String!, $imageWidth: Int = 75) {
  orders(first: 1, stage: DRAFT, where: {stripeCheckoutId: $id}) {
    id
    total
    customer {
      firstname
      lastname
      address
      district
      city
      pcode
    }
    orderItems {
      id
      quantity
      total
      product {
        image {
          width
          height
          url(
            transformation: {image: {resize: {width: $imageWidth, fit: clip}}, document: {output: {format: webp}}}
          )
          altText
        }
        name
      }
      productVariantColor {
        id
        name
        hex
      }
    }
  }
}
    `;
export const GetProductsSlugCategory = gql`
    query getProductsSlugCategory($slug: String!, $imageWidth: Int = 300, $stage: Stage = PUBLISHED) {
  category(where: {slug: $slug}, stage: $stage) {
    name
    products(orderBy: price_ASC) {
      id
      image {
        width
        height
        url(
          transformation: {image: {resize: {width: $imageWidth, fit: clip}}, document: {output: {format: webp}}}
        )
        altText
      }
      name
      price
      productVariantColors {
        name
        hex
        color
      }
      slug
    }
  }
}
    `;
export const GetProductsSlug = gql`
    query getProductsSlug($stage: Stage = PUBLISHED) {
  products(stage: $stage) {
    categories {
      slug
    }
    slug
  }
}
    `;
export const GetCategoriesProductsSlug = gql`
    query getCategoriesProductsSlug($stage: Stage = PUBLISHED) {
  categories(stage: $stage) {
    slug
    products {
      slug
    }
  }
}
    `;
export const GetProductSlug = gql`
    query getProductSlug($slug: String!, $imageWidth: Int = 350, $imageThumbnail: Int = 75, $stage: Stage = PUBLISHED) {
  product(where: {slug: $slug}, stage: $stage) {
    categories {
      name
      slug
    }
    description {
      html
    }
    id
    image {
      width
      height
      thumbnail: url(
        transformation: {image: {resize: {width: $imageThumbnail, fit: clip}}, document: {output: {format: webp}}}
      )
      url(
        transformation: {image: {resize: {width: $imageWidth, fit: clip}}, document: {output: {format: webp}}}
      )
      altText
    }
    name
    price
    productVariantColors {
      id
      name
      hex
      color
    }
    slug
  }
}
    `;
export const GetSearch = gql`
    query getSearch($search: String!, $imageWidth: Int = 300, $stage: Stage = PUBLISHED) {
  products(where: {name_contains: $search}, orderBy: price_ASC, stage: $stage) {
    id
    image {
      width
      height
      url(
        transformation: {image: {resize: {width: $imageWidth, fit: clip}}, document: {output: {format: webp}}}
      )
      altText
    }
    name
    price
    productVariantColors {
      name
      hex
      color
    }
    slug
  }
}
    `;

export const GetCategoriesDocument = gql`
    query getCategories($stage: Stage = PUBLISHED) {
  categories(stage: $stage) {
    id
    description
    name
    slug
  }
}
    `;

export function useGetCategoriesQuery(options?: Omit<Urql.UseQueryArgs<GetCategoriesQueryVariables>, 'query'>) {
  return Urql.useQuery<GetCategoriesQuery, GetCategoriesQueryVariables>({ query: GetCategoriesDocument, ...options });
};
export const GetCategoriesSlugDocument = gql`
    query getCategoriesSlug($stage: Stage = PUBLISHED) {
  categories(stage: $stage) {
    slug
  }
}
    `;

export function useGetCategoriesSlugQuery(options?: Omit<Urql.UseQueryArgs<GetCategoriesSlugQueryVariables>, 'query'>) {
  return Urql.useQuery<GetCategoriesSlugQuery, GetCategoriesSlugQueryVariables>({ query: GetCategoriesSlugDocument, ...options });
};
export const GetConfigDocument = gql`
    query getConfig($stage: Stage = PUBLISHED) {
  configs(first: 1, stage: $stage) {
    id
    shippingfees
  }
}
    `;

export function useGetConfigQuery(options?: Omit<Urql.UseQueryArgs<GetConfigQueryVariables>, 'query'>) {
  return Urql.useQuery<GetConfigQuery, GetConfigQueryVariables>({ query: GetConfigDocument, ...options });
};
export const GetCustomerDocument = gql`
    query getCustomer($email: String!, $stage: Stage = PUBLISHED) {
  customer(where: {email: $email}, stage: $stage) {
    id
  }
}
    `;

export function useGetCustomerQuery(options: Omit<Urql.UseQueryArgs<GetCustomerQueryVariables>, 'query'>) {
  return Urql.useQuery<GetCustomerQuery, GetCustomerQueryVariables>({ query: GetCustomerDocument, ...options });
};
export const CreateCustomerMutationDocument = gql`
    mutation createCustomerMutation($data: CustomerCreateInput!) {
  customer: createCustomer(data: $data) {
    id
  }
}
    `;

export function useCreateCustomerMutationMutation() {
  return Urql.useMutation<CreateCustomerMutationMutation, CreateCustomerMutationMutationVariables>(CreateCustomerMutationDocument);
};
export const UpdateCustomerMutationDocument = gql`
    mutation updateCustomerMutation($data: CustomerUpdateInput!, $where: CustomerWhereUniqueInput!) {
  customer: updateCustomer(data: $data, where: $where) {
    id
  }
}
    `;

export function useUpdateCustomerMutationMutation() {
  return Urql.useMutation<UpdateCustomerMutationMutation, UpdateCustomerMutationMutationVariables>(UpdateCustomerMutationDocument);
};
export const CreateOrderMutationDocument = gql`
    mutation createOrderMutation($order: OrderCreateInput!) {
  order: createOrder(data: $order) {
    id
  }
}
    `;

export function useCreateOrderMutationMutation() {
  return Urql.useMutation<CreateOrderMutationMutation, CreateOrderMutationMutationVariables>(CreateOrderMutationDocument);
};
export const PublishOrderMutationDocument = gql`
    mutation publishOrderMutation($id: ID!) {
  publishOrder(where: {id: $id}, to: PUBLISHED) {
    id
  }
}
    `;

export function usePublishOrderMutationMutation() {
  return Urql.useMutation<PublishOrderMutationMutation, PublishOrderMutationMutationVariables>(PublishOrderMutationDocument);
};
export const PublishOrderItemMutationDocument = gql`
    mutation publishOrderItemMutation($id: ID!) {
  publishOrder(where: {id: $id}, to: PUBLISHED) {
    id
  }
}
    `;

export function usePublishOrderItemMutationMutation() {
  return Urql.useMutation<PublishOrderItemMutationMutation, PublishOrderItemMutationMutationVariables>(PublishOrderItemMutationDocument);
};
export const CreateOrderItemsMutationDocument = gql`
    mutation createOrderItemsMutation($ordeItems: OrderItemCreateInput!) {
  orderItems: createOrderItem(data: $ordeItems) {
    id
  }
}
    `;

export function useCreateOrderItemsMutationMutation() {
  return Urql.useMutation<CreateOrderItemsMutationMutation, CreateOrderItemsMutationMutationVariables>(CreateOrderItemsMutationDocument);
};
export const GetOrderProductDocument = gql`
    query getOrderProduct($pid: ID!, $cid: ID!, $imageWidth: Int = 75, $stage: Stage = PUBLISHED) {
  product(where: {id: $pid}, stage: $stage) {
    productId: id
    image {
      url(
        transformation: {image: {resize: {width: $imageWidth, fit: clip}}, document: {output: {format: webp}}}
      )
    }
    name
    price
  }
  productVariantColor(where: {id: $cid}) {
    colorId: id
    name
  }
}
    `;

export function useGetOrderProductQuery(options: Omit<Urql.UseQueryArgs<GetOrderProductQueryVariables>, 'query'>) {
  return Urql.useQuery<GetOrderProductQuery, GetOrderProductQueryVariables>({ query: GetOrderProductDocument, ...options });
};
export const GetDoneOrderProductDocument = gql`
    query getDoneOrderProduct($id: String!, $imageWidth: Int = 75) {
  orders(first: 1, stage: DRAFT, where: {stripeCheckoutId: $id}) {
    id
    total
    customer {
      firstname
      lastname
      address
      district
      city
      pcode
    }
    orderItems {
      id
      quantity
      total
      product {
        image {
          width
          height
          url(
            transformation: {image: {resize: {width: $imageWidth, fit: clip}}, document: {output: {format: webp}}}
          )
          altText
        }
        name
      }
      productVariantColor {
        id
        name
        hex
      }
    }
  }
}
    `;

export function useGetDoneOrderProductQuery(options: Omit<Urql.UseQueryArgs<GetDoneOrderProductQueryVariables>, 'query'>) {
  return Urql.useQuery<GetDoneOrderProductQuery, GetDoneOrderProductQueryVariables>({ query: GetDoneOrderProductDocument, ...options });
};
export const GetProductsSlugCategoryDocument = gql`
    query getProductsSlugCategory($slug: String!, $imageWidth: Int = 300, $stage: Stage = PUBLISHED) {
  category(where: {slug: $slug}, stage: $stage) {
    name
    products(orderBy: price_ASC) {
      id
      image {
        width
        height
        url(
          transformation: {image: {resize: {width: $imageWidth, fit: clip}}, document: {output: {format: webp}}}
        )
        altText
      }
      name
      price
      productVariantColors {
        name
        hex
        color
      }
      slug
    }
  }
}
    `;

export function useGetProductsSlugCategoryQuery(options: Omit<Urql.UseQueryArgs<GetProductsSlugCategoryQueryVariables>, 'query'>) {
  return Urql.useQuery<GetProductsSlugCategoryQuery, GetProductsSlugCategoryQueryVariables>({ query: GetProductsSlugCategoryDocument, ...options });
};
export const GetProductsSlugDocument = gql`
    query getProductsSlug($stage: Stage = PUBLISHED) {
  products(stage: $stage) {
    categories {
      slug
    }
    slug
  }
}
    `;

export function useGetProductsSlugQuery(options?: Omit<Urql.UseQueryArgs<GetProductsSlugQueryVariables>, 'query'>) {
  return Urql.useQuery<GetProductsSlugQuery, GetProductsSlugQueryVariables>({ query: GetProductsSlugDocument, ...options });
};
export const GetCategoriesProductsSlugDocument = gql`
    query getCategoriesProductsSlug($stage: Stage = PUBLISHED) {
  categories(stage: $stage) {
    slug
    products {
      slug
    }
  }
}
    `;

export function useGetCategoriesProductsSlugQuery(options?: Omit<Urql.UseQueryArgs<GetCategoriesProductsSlugQueryVariables>, 'query'>) {
  return Urql.useQuery<GetCategoriesProductsSlugQuery, GetCategoriesProductsSlugQueryVariables>({ query: GetCategoriesProductsSlugDocument, ...options });
};
export const GetProductSlugDocument = gql`
    query getProductSlug($slug: String!, $imageWidth: Int = 350, $imageThumbnail: Int = 75, $stage: Stage = PUBLISHED) {
  product(where: {slug: $slug}, stage: $stage) {
    categories {
      name
      slug
    }
    description {
      html
    }
    id
    image {
      width
      height
      thumbnail: url(
        transformation: {image: {resize: {width: $imageThumbnail, fit: clip}}, document: {output: {format: webp}}}
      )
      url(
        transformation: {image: {resize: {width: $imageWidth, fit: clip}}, document: {output: {format: webp}}}
      )
      altText
    }
    name
    price
    productVariantColors {
      id
      name
      hex
      color
    }
    slug
  }
}
    `;

export function useGetProductSlugQuery(options: Omit<Urql.UseQueryArgs<GetProductSlugQueryVariables>, 'query'>) {
  return Urql.useQuery<GetProductSlugQuery, GetProductSlugQueryVariables>({ query: GetProductSlugDocument, ...options });
};
export const GetSearchDocument = gql`
    query getSearch($search: String!, $imageWidth: Int = 300, $stage: Stage = PUBLISHED) {
  products(where: {name_contains: $search}, orderBy: price_ASC, stage: $stage) {
    id
    image {
      width
      height
      url(
        transformation: {image: {resize: {width: $imageWidth, fit: clip}}, document: {output: {format: webp}}}
      )
      altText
    }
    name
    price
    productVariantColors {
      name
      hex
      color
    }
    slug
  }
}
    `;

export function useGetSearchQuery(options: Omit<Urql.UseQueryArgs<GetSearchQueryVariables>, 'query'>) {
  return Urql.useQuery<GetSearchQuery, GetSearchQueryVariables>({ query: GetSearchDocument, ...options });
};
import { IntrospectionQuery } from 'graphql';
export default {
  "__schema": {
    "queryType": {
      "name": "Query"
    },
    "mutationType": {
      "name": "Mutation"
    },
    "subscriptionType": null,
    "types": [
      {
        "kind": "OBJECT",
        "name": "Aggregate",
        "fields": [
          {
            "name": "count",
            "type": {
              "kind": "NON_NULL",
              "ofType": {
                "kind": "SCALAR",
                "name": "Any"
              }
            },
            "args": []
          }
        ],
        "interfaces": []
      },
      {
        "kind": "OBJECT",
        "name": "Asset",
        "fields": [
          {
            "name": "altText",
            "type": {
              "kind": "SCALAR",
              "name": "Any"
            },
            "args": []
          },
          {
            "name": "caption",
            "type": {
              "kind": "SCALAR",
              "name": "Any"
            },
            "args": []
          },
          {
            "name": "createdAt",
            "type": {
              "kind": "NON_NULL",
              "ofType": {
                "kind": "SCALAR",
                "name": "Any"
              }
            },
            "args": [
              {
                "name": "variation",
                "type": {
                  "kind": "NON_NULL",
                  "ofType": {
                    "kind": "SCALAR",
                    "name": "Any"
                  }
                }
              }
            ]
          },
          {
            "name": "createdBy",
            "type": {
              "kind": "OBJECT",
              "name": "User",
              "ofType": null
            },
            "args": [
              {
                "name": "locales",
                "type": {
                  "kind": "LIST",
                  "ofType": {
                    "kind": "NON_NULL",
                    "ofType": {
                      "kind": "SCALAR",
                      "name": "Any"
                    }
                  }
                }
              }
            ]
          },
          {
            "name": "documentInStages",
            "type": {
              "kind": "NON_NULL",
              "ofType": {
                "kind": "LIST",
                "ofType": {
                  "kind": "NON_NULL",
                  "ofType": {
                    "kind": "OBJECT",
                    "name": "Asset",
                    "ofType": null
                  }
                }
              }
            },
            "args": [
              {
                "name": "includeCurrent",
                "type": {
                  "kind": "NON_NULL",
                  "ofType": {
                    "kind": "SCALAR",
                    "name": "Any"
                  }
                }
              },
              {
                "name": "inheritLocale",
                "type": {
                  "kind": "NON_NULL",
                  "ofType": {
                    "kind": "SCALAR",
                    "name": "Any"
                  }
                }
              },
              {
                "name": "stages",
                "type": {
                  "kind": "NON_NULL",
                  "ofType": {
                    "kind": "LIST",
                    "ofType": {
                      "kind": "NON_NULL",
                      "ofType": {
                        "kind": "SCALAR",
                        "name": "Any"
                      }
                    }
                  }
                }
              }
            ]
          },
          {
            "name": "fileName",
            "type": {
              "kind": "NON_NULL",
              "ofType": {
                "kind": "SCALAR",
                "name": "Any"
              }
            },
            "args": []
          },
          {
            "name": "handle",
            "type": {
              "kind": "NON_NULL",
              "ofType": {
                "kind": "SCALAR",
                "name": "Any"
              }
            },
            "args": []
          },
          {
            "name": "height",
            "type": {
              "kind": "SCALAR",
              "name": "Any"
            },
            "args": []
          },
          {
            "name": "history",
            "type": {
              "kind": "NON_NULL",
              "ofType": {
                "kind": "LIST",
                "ofType": {
                  "kind": "NON_NULL",
                  "ofType": {
                    "kind": "OBJECT",
                    "name": "Version",
                    "ofType": null
                  }
                }
              }
            },
            "args": [
              {
                "name": "limit",
                "type": {
                  "kind": "NON_NULL",
                  "ofType": {
                    "kind": "SCALAR",
                    "name": "Any"
                  }
                }
              },
              {
                "name": "skip",
                "type": {
                  "kind": "NON_NULL",
                  "ofType": {
                    "kind": "SCALAR",
                    "name": "Any"
                  }
                }
              },
              {
                "name": "stageOverride",
                "type": {
                  "kind": "SCALAR",
                  "name": "Any"
                }
              }
            ]
          },
          {
            "name": "id",
            "type": {
              "kind": "NON_NULL",
              "ofType": {
                "kind": "SCALAR",
                "name": "Any"
              }
            },
            "args": []
          },
          {
            "name": "imageProduct",
            "type": {
              "kind": "NON_NULL",
              "ofType": {
                "kind": "LIST",
                "ofType": {
                  "kind": "NON_NULL",
                  "ofType": {
                    "kind": "OBJECT",
                    "name": "Product",
                    "ofType": null
                  }
                }
              }
            },
            "args": [
              {
                "name": "after",
                "type": {
                  "kind": "SCALAR",
                  "name": "Any"
                }
              },
              {
                "name": "before",
                "type": {
                  "kind": "SCALAR",
                  "name": "Any"
                }
              },
              {
                "name": "first",
                "type": {
                  "kind": "SCALAR",
                  "name": "Any"
                }
              },
              {
                "name": "last",
                "type": {
                  "kind": "SCALAR",
                  "name": "Any"
                }
              },
              {
                "name": "locales",
                "type": {
                  "kind": "LIST",
                  "ofType": {
                    "kind": "NON_NULL",
                    "ofType": {
                      "kind": "SCALAR",
                      "name": "Any"
                    }
                  }
                }
              },
              {
                "name": "orderBy",
                "type": {
                  "kind": "SCALAR",
                  "name": "Any"
                }
              },
              {
                "name": "skip",
                "type": {
                  "kind": "SCALAR",
                  "name": "Any"
                }
              },
              {
                "name": "where",
                "type": {
                  "kind": "SCALAR",
                  "name": "Any"
                }
              }
            ]
          },
          {
            "name": "locale",
            "type": {
              "kind": "NON_NULL",
              "ofType": {
                "kind": "SCALAR",
                "name": "Any"
              }
            },
            "args": []
          },
          {
            "name": "localizations",
            "type": {
              "kind": "NON_NULL",
              "ofType": {
                "kind": "LIST",
                "ofType": {
                  "kind": "NON_NULL",
                  "ofType": {
                    "kind": "OBJECT",
                    "name": "Asset",
                    "ofType": null
                  }
                }
              }
            },
            "args": [
              {
                "name": "includeCurrent",
                "type": {
                  "kind": "NON_NULL",
                  "ofType": {
                    "kind": "SCALAR",
                    "name": "Any"
                  }
                }
              },
              {
                "name": "locales",
                "type": {
                  "kind": "NON_NULL",
                  "ofType": {
                    "kind": "LIST",
                    "ofType": {
                      "kind": "NON_NULL",
                      "ofType": {
                        "kind": "SCALAR",
                        "name": "Any"
                      }
                    }
                  }
                }
              }
            ]
          },
          {
            "name": "mimeType",
            "type": {
              "kind": "SCALAR",
              "name": "Any"
            },
            "args": []
          },
          {
            "name": "publishedAt",
            "type": {
              "kind": "SCALAR",
              "name": "Any"
            },
            "args": [
              {
                "name": "variation",
                "type": {
                  "kind": "NON_NULL",
                  "ofType": {
                    "kind": "SCALAR",
                    "name": "Any"
                  }
                }
              }
            ]
          },
          {
            "name": "publishedBy",
            "type": {
              "kind": "OBJECT",
              "name": "User",
              "ofType": null
            },
            "args": [
              {
                "name": "locales",
                "type": {
                  "kind": "LIST",
                  "ofType": {
                    "kind": "NON_NULL",
                    "ofType": {
                      "kind": "SCALAR",
                      "name": "Any"
                    }
                  }
                }
              }
            ]
          },
          {
            "name": "scheduledIn",
            "type": {
              "kind": "NON_NULL",
              "ofType": {
                "kind": "LIST",
                "ofType": {
                  "kind": "NON_NULL",
                  "ofType": {
                    "kind": "OBJECT",
                    "name": "ScheduledOperation",
                    "ofType": null
                  }
                }
              }
            },
            "args": [
              {
                "name": "after",
                "type": {
                  "kind": "SCALAR",
                  "name": "Any"
                }
              },
              {
                "name": "before",
                "type": {
                  "kind": "SCALAR",
                  "name": "Any"
                }
              },
              {
                "name": "first",
                "type": {
                  "kind": "SCALAR",
                  "name": "Any"
                }
              },
              {
                "name": "last",
                "type": {
                  "kind": "SCALAR",
                  "name": "Any"
                }
              },
              {
                "name": "locales",
                "type": {
                  "kind": "LIST",
                  "ofType": {
                    "kind": "NON_NULL",
                    "ofType": {
                      "kind": "SCALAR",
                      "name": "Any"
                    }
                  }
                }
              },
              {
                "name": "skip",
                "type": {
                  "kind": "SCALAR",
                  "name": "Any"
                }
              },
              {
                "name": "where",
                "type": {
                  "kind": "SCALAR",
                  "name": "Any"
                }
              }
            ]
          },
          {
            "name": "size",
            "type": {
              "kind": "SCALAR",
              "name": "Any"
            },
            "args": []
          },
          {
            "name": "stage",
            "type": {
              "kind": "NON_NULL",
              "ofType": {
                "kind": "SCALAR",
                "name": "Any"
              }
            },
            "args": []
          },
          {
            "name": "updatedAt",
            "type": {
              "kind": "NON_NULL",
              "ofType": {
                "kind": "SCALAR",
                "name": "Any"
              }
            },
            "args": [
              {
                "name": "variation",
                "type": {
                  "kind": "NON_NULL",
                  "ofType": {
                    "kind": "SCALAR",
                    "name": "Any"
                  }
                }
              }
            ]
          },
          {
            "name": "updatedBy",
            "type": {
              "kind": "OBJECT",
              "name": "User",
              "ofType": null
            },
            "args": [
              {
                "name": "locales",
                "type": {
                  "kind": "LIST",
                  "ofType": {
                    "kind": "NON_NULL",
                    "ofType": {
                      "kind": "SCALAR",
                      "name": "Any"
                    }
                  }
                }
              }
            ]
          },
          {
            "name": "url",
            "type": {
              "kind": "NON_NULL",
              "ofType": {
                "kind": "SCALAR",
                "name": "Any"
              }
            },
            "args": [
              {
                "name": "transformation",
                "type": {
                  "kind": "SCALAR",
                  "name": "Any"
                }
              }
            ]
          },
          {
            "name": "width",
            "type": {
              "kind": "SCALAR",
              "name": "Any"
            },
            "args": []
          }
        ],
        "interfaces": [
          {
            "kind": "INTERFACE",
            "name": "Node"
          }
        ]
      },
      {
        "kind": "OBJECT",
        "name": "AssetConnection",
        "fields": [
          {
            "name": "aggregate",
            "type": {
              "kind": "NON_NULL",
              "ofType": {
                "kind": "OBJECT",
                "name": "Aggregate",
                "ofType": null
              }
            },
            "args": []
          },
          {
            "name": "edges",
            "type": {
              "kind": "NON_NULL",
              "ofType": {
                "kind": "LIST",
                "ofType": {
                  "kind": "NON_NULL",
                  "ofType": {
                    "kind": "OBJECT",
                    "name": "AssetEdge",
                    "ofType": null
                  }
                }
              }
            },
            "args": []
          },
          {
            "name": "pageInfo",
            "type": {
              "kind": "NON_NULL",
              "ofType": {
                "kind": "OBJECT",
                "name": "PageInfo",
                "ofType": null
              }
            },
            "args": []
          }
        ],
        "interfaces": []
      },
      {
        "kind": "OBJECT",
        "name": "AssetEdge",
        "fields": [
          {
            "name": "cursor",
            "type": {
              "kind": "NON_NULL",
              "ofType": {
                "kind": "SCALAR",
                "name": "Any"
              }
            },
            "args": []
          },
          {
            "name": "node",
            "type": {
              "kind": "NON_NULL",
              "ofType": {
                "kind": "OBJECT",
                "name": "Asset",
                "ofType": null
              }
            },
            "args": []
          }
        ],
        "interfaces": []
      },
      {
        "kind": "OBJECT",
        "name": "BatchPayload",
        "fields": [
          {
            "name": "count",
            "type": {
              "kind": "NON_NULL",
              "ofType": {
                "kind": "SCALAR",
                "name": "Any"
              }
            },
            "args": []
          }
        ],
        "interfaces": []
      },
      {
        "kind": "OBJECT",
        "name": "Category",
        "fields": [
          {
            "name": "createdAt",
            "type": {
              "kind": "NON_NULL",
              "ofType": {
                "kind": "SCALAR",
                "name": "Any"
              }
            },
            "args": []
          },
          {
            "name": "createdBy",
            "type": {
              "kind": "OBJECT",
              "name": "User",
              "ofType": null
            },
            "args": [
              {
                "name": "locales",
                "type": {
                  "kind": "LIST",
                  "ofType": {
                    "kind": "NON_NULL",
                    "ofType": {
                      "kind": "SCALAR",
                      "name": "Any"
                    }
                  }
                }
              }
            ]
          },
          {
            "name": "description",
            "type": {
              "kind": "SCALAR",
              "name": "Any"
            },
            "args": []
          },
          {
            "name": "documentInStages",
            "type": {
              "kind": "NON_NULL",
              "ofType": {
                "kind": "LIST",
                "ofType": {
                  "kind": "NON_NULL",
                  "ofType": {
                    "kind": "OBJECT",
                    "name": "Category",
                    "ofType": null
                  }
                }
              }
            },
            "args": [
              {
                "name": "includeCurrent",
                "type": {
                  "kind": "NON_NULL",
                  "ofType": {
                    "kind": "SCALAR",
                    "name": "Any"
                  }
                }
              },
              {
                "name": "inheritLocale",
                "type": {
                  "kind": "NON_NULL",
                  "ofType": {
                    "kind": "SCALAR",
                    "name": "Any"
                  }
                }
              },
              {
                "name": "stages",
                "type": {
                  "kind": "NON_NULL",
                  "ofType": {
                    "kind": "LIST",
                    "ofType": {
                      "kind": "NON_NULL",
                      "ofType": {
                        "kind": "SCALAR",
                        "name": "Any"
                      }
                    }
                  }
                }
              }
            ]
          },
          {
            "name": "history",
            "type": {
              "kind": "NON_NULL",
              "ofType": {
                "kind": "LIST",
                "ofType": {
                  "kind": "NON_NULL",
                  "ofType": {
                    "kind": "OBJECT",
                    "name": "Version",
                    "ofType": null
                  }
                }
              }
            },
            "args": [
              {
                "name": "limit",
                "type": {
                  "kind": "NON_NULL",
                  "ofType": {
                    "kind": "SCALAR",
                    "name": "Any"
                  }
                }
              },
              {
                "name": "skip",
                "type": {
                  "kind": "NON_NULL",
                  "ofType": {
                    "kind": "SCALAR",
                    "name": "Any"
                  }
                }
              },
              {
                "name": "stageOverride",
                "type": {
                  "kind": "SCALAR",
                  "name": "Any"
                }
              }
            ]
          },
          {
            "name": "id",
            "type": {
              "kind": "NON_NULL",
              "ofType": {
                "kind": "SCALAR",
                "name": "Any"
              }
            },
            "args": []
          },
          {
            "name": "name",
            "type": {
              "kind": "NON_NULL",
              "ofType": {
                "kind": "SCALAR",
                "name": "Any"
              }
            },
            "args": []
          },
          {
            "name": "products",
            "type": {
              "kind": "NON_NULL",
              "ofType": {
                "kind": "LIST",
                "ofType": {
                  "kind": "NON_NULL",
                  "ofType": {
                    "kind": "OBJECT",
                    "name": "Product",
                    "ofType": null
                  }
                }
              }
            },
            "args": [
              {
                "name": "after",
                "type": {
                  "kind": "SCALAR",
                  "name": "Any"
                }
              },
              {
                "name": "before",
                "type": {
                  "kind": "SCALAR",
                  "name": "Any"
                }
              },
              {
                "name": "first",
                "type": {
                  "kind": "SCALAR",
                  "name": "Any"
                }
              },
              {
                "name": "last",
                "type": {
                  "kind": "SCALAR",
                  "name": "Any"
                }
              },
              {
                "name": "locales",
                "type": {
                  "kind": "LIST",
                  "ofType": {
                    "kind": "NON_NULL",
                    "ofType": {
                      "kind": "SCALAR",
                      "name": "Any"
                    }
                  }
                }
              },
              {
                "name": "orderBy",
                "type": {
                  "kind": "SCALAR",
                  "name": "Any"
                }
              },
              {
                "name": "skip",
                "type": {
                  "kind": "SCALAR",
                  "name": "Any"
                }
              },
              {
                "name": "where",
                "type": {
                  "kind": "SCALAR",
                  "name": "Any"
                }
              }
            ]
          },
          {
            "name": "publishedAt",
            "type": {
              "kind": "SCALAR",
              "name": "Any"
            },
            "args": []
          },
          {
            "name": "publishedBy",
            "type": {
              "kind": "OBJECT",
              "name": "User",
              "ofType": null
            },
            "args": [
              {
                "name": "locales",
                "type": {
                  "kind": "LIST",
                  "ofType": {
                    "kind": "NON_NULL",
                    "ofType": {
                      "kind": "SCALAR",
                      "name": "Any"
                    }
                  }
                }
              }
            ]
          },
          {
            "name": "scheduledIn",
            "type": {
              "kind": "NON_NULL",
              "ofType": {
                "kind": "LIST",
                "ofType": {
                  "kind": "NON_NULL",
                  "ofType": {
                    "kind": "OBJECT",
                    "name": "ScheduledOperation",
                    "ofType": null
                  }
                }
              }
            },
            "args": [
              {
                "name": "after",
                "type": {
                  "kind": "SCALAR",
                  "name": "Any"
                }
              },
              {
                "name": "before",
                "type": {
                  "kind": "SCALAR",
                  "name": "Any"
                }
              },
              {
                "name": "first",
                "type": {
                  "kind": "SCALAR",
                  "name": "Any"
                }
              },
              {
                "name": "last",
                "type": {
                  "kind": "SCALAR",
                  "name": "Any"
                }
              },
              {
                "name": "locales",
                "type": {
                  "kind": "LIST",
                  "ofType": {
                    "kind": "NON_NULL",
                    "ofType": {
                      "kind": "SCALAR",
                      "name": "Any"
                    }
                  }
                }
              },
              {
                "name": "skip",
                "type": {
                  "kind": "SCALAR",
                  "name": "Any"
                }
              },
              {
                "name": "where",
                "type": {
                  "kind": "SCALAR",
                  "name": "Any"
                }
              }
            ]
          },
          {
            "name": "slug",
            "type": {
              "kind": "NON_NULL",
              "ofType": {
                "kind": "SCALAR",
                "name": "Any"
              }
            },
            "args": []
          },
          {
            "name": "stage",
            "type": {
              "kind": "NON_NULL",
              "ofType": {
                "kind": "SCALAR",
                "name": "Any"
              }
            },
            "args": []
          },
          {
            "name": "updatedAt",
            "type": {
              "kind": "NON_NULL",
              "ofType": {
                "kind": "SCALAR",
                "name": "Any"
              }
            },
            "args": []
          },
          {
            "name": "updatedBy",
            "type": {
              "kind": "OBJECT",
              "name": "User",
              "ofType": null
            },
            "args": [
              {
                "name": "locales",
                "type": {
                  "kind": "LIST",
                  "ofType": {
                    "kind": "NON_NULL",
                    "ofType": {
                      "kind": "SCALAR",
                      "name": "Any"
                    }
                  }
                }
              }
            ]
          }
        ],
        "interfaces": [
          {
            "kind": "INTERFACE",
            "name": "Node"
          }
        ]
      },
      {
        "kind": "OBJECT",
        "name": "CategoryConnection",
        "fields": [
          {
            "name": "aggregate",
            "type": {
              "kind": "NON_NULL",
              "ofType": {
                "kind": "OBJECT",
                "name": "Aggregate",
                "ofType": null
              }
            },
            "args": []
          },
          {
            "name": "edges",
            "type": {
              "kind": "NON_NULL",
              "ofType": {
                "kind": "LIST",
                "ofType": {
                  "kind": "NON_NULL",
                  "ofType": {
                    "kind": "OBJECT",
                    "name": "CategoryEdge",
                    "ofType": null
                  }
                }
              }
            },
            "args": []
          },
          {
            "name": "pageInfo",
            "type": {
              "kind": "NON_NULL",
              "ofType": {
                "kind": "OBJECT",
                "name": "PageInfo",
                "ofType": null
              }
            },
            "args": []
          }
        ],
        "interfaces": []
      },
      {
        "kind": "OBJECT",
        "name": "CategoryEdge",
        "fields": [
          {
            "name": "cursor",
            "type": {
              "kind": "NON_NULL",
              "ofType": {
                "kind": "SCALAR",
                "name": "Any"
              }
            },
            "args": []
          },
          {
            "name": "node",
            "type": {
              "kind": "NON_NULL",
              "ofType": {
                "kind": "OBJECT",
                "name": "Category",
                "ofType": null
              }
            },
            "args": []
          }
        ],
        "interfaces": []
      },
      {
        "kind": "OBJECT",
        "name": "Color",
        "fields": [
          {
            "name": "css",
            "type": {
              "kind": "NON_NULL",
              "ofType": {
                "kind": "SCALAR",
                "name": "Any"
              }
            },
            "args": []
          },
          {
            "name": "hex",
            "type": {
              "kind": "NON_NULL",
              "ofType": {
                "kind": "SCALAR",
                "name": "Any"
              }
            },
            "args": []
          },
          {
            "name": "rgba",
            "type": {
              "kind": "NON_NULL",
              "ofType": {
                "kind": "OBJECT",
                "name": "RGBA",
                "ofType": null
              }
            },
            "args": []
          }
        ],
        "interfaces": []
      },
      {
        "kind": "OBJECT",
        "name": "Config",
        "fields": [
          {
            "name": "createdAt",
            "type": {
              "kind": "NON_NULL",
              "ofType": {
                "kind": "SCALAR",
                "name": "Any"
              }
            },
            "args": []
          },
          {
            "name": "createdBy",
            "type": {
              "kind": "OBJECT",
              "name": "User",
              "ofType": null
            },
            "args": [
              {
                "name": "locales",
                "type": {
                  "kind": "LIST",
                  "ofType": {
                    "kind": "NON_NULL",
                    "ofType": {
                      "kind": "SCALAR",
                      "name": "Any"
                    }
                  }
                }
              }
            ]
          },
          {
            "name": "documentInStages",
            "type": {
              "kind": "NON_NULL",
              "ofType": {
                "kind": "LIST",
                "ofType": {
                  "kind": "NON_NULL",
                  "ofType": {
                    "kind": "OBJECT",
                    "name": "Config",
                    "ofType": null
                  }
                }
              }
            },
            "args": [
              {
                "name": "includeCurrent",
                "type": {
                  "kind": "NON_NULL",
                  "ofType": {
                    "kind": "SCALAR",
                    "name": "Any"
                  }
                }
              },
              {
                "name": "inheritLocale",
                "type": {
                  "kind": "NON_NULL",
                  "ofType": {
                    "kind": "SCALAR",
                    "name": "Any"
                  }
                }
              },
              {
                "name": "stages",
                "type": {
                  "kind": "NON_NULL",
                  "ofType": {
                    "kind": "LIST",
                    "ofType": {
                      "kind": "NON_NULL",
                      "ofType": {
                        "kind": "SCALAR",
                        "name": "Any"
                      }
                    }
                  }
                }
              }
            ]
          },
          {
            "name": "history",
            "type": {
              "kind": "NON_NULL",
              "ofType": {
                "kind": "LIST",
                "ofType": {
                  "kind": "NON_NULL",
                  "ofType": {
                    "kind": "OBJECT",
                    "name": "Version",
                    "ofType": null
                  }
                }
              }
            },
            "args": [
              {
                "name": "limit",
                "type": {
                  "kind": "NON_NULL",
                  "ofType": {
                    "kind": "SCALAR",
                    "name": "Any"
                  }
                }
              },
              {
                "name": "skip",
                "type": {
                  "kind": "NON_NULL",
                  "ofType": {
                    "kind": "SCALAR",
                    "name": "Any"
                  }
                }
              },
              {
                "name": "stageOverride",
                "type": {
                  "kind": "SCALAR",
                  "name": "Any"
                }
              }
            ]
          },
          {
            "name": "id",
            "type": {
              "kind": "NON_NULL",
              "ofType": {
                "kind": "SCALAR",
                "name": "Any"
              }
            },
            "args": []
          },
          {
            "name": "publishedAt",
            "type": {
              "kind": "SCALAR",
              "name": "Any"
            },
            "args": []
          },
          {
            "name": "publishedBy",
            "type": {
              "kind": "OBJECT",
              "name": "User",
              "ofType": null
            },
            "args": [
              {
                "name": "locales",
                "type": {
                  "kind": "LIST",
                  "ofType": {
                    "kind": "NON_NULL",
                    "ofType": {
                      "kind": "SCALAR",
                      "name": "Any"
                    }
                  }
                }
              }
            ]
          },
          {
            "name": "scheduledIn",
            "type": {
              "kind": "NON_NULL",
              "ofType": {
                "kind": "LIST",
                "ofType": {
                  "kind": "NON_NULL",
                  "ofType": {
                    "kind": "OBJECT",
                    "name": "ScheduledOperation",
                    "ofType": null
                  }
                }
              }
            },
            "args": [
              {
                "name": "after",
                "type": {
                  "kind": "SCALAR",
                  "name": "Any"
                }
              },
              {
                "name": "before",
                "type": {
                  "kind": "SCALAR",
                  "name": "Any"
                }
              },
              {
                "name": "first",
                "type": {
                  "kind": "SCALAR",
                  "name": "Any"
                }
              },
              {
                "name": "last",
                "type": {
                  "kind": "SCALAR",
                  "name": "Any"
                }
              },
              {
                "name": "locales",
                "type": {
                  "kind": "LIST",
                  "ofType": {
                    "kind": "NON_NULL",
                    "ofType": {
                      "kind": "SCALAR",
                      "name": "Any"
                    }
                  }
                }
              },
              {
                "name": "skip",
                "type": {
                  "kind": "SCALAR",
                  "name": "Any"
                }
              },
              {
                "name": "where",
                "type": {
                  "kind": "SCALAR",
                  "name": "Any"
                }
              }
            ]
          },
          {
            "name": "shippingfees",
            "type": {
              "kind": "NON_NULL",
              "ofType": {
                "kind": "SCALAR",
                "name": "Any"
              }
            },
            "args": []
          },
          {
            "name": "stage",
            "type": {
              "kind": "NON_NULL",
              "ofType": {
                "kind": "SCALAR",
                "name": "Any"
              }
            },
            "args": []
          },
          {
            "name": "updatedAt",
            "type": {
              "kind": "NON_NULL",
              "ofType": {
                "kind": "SCALAR",
                "name": "Any"
              }
            },
            "args": []
          },
          {
            "name": "updatedBy",
            "type": {
              "kind": "OBJECT",
              "name": "User",
              "ofType": null
            },
            "args": [
              {
                "name": "locales",
                "type": {
                  "kind": "LIST",
                  "ofType": {
                    "kind": "NON_NULL",
                    "ofType": {
                      "kind": "SCALAR",
                      "name": "Any"
                    }
                  }
                }
              }
            ]
          }
        ],
        "interfaces": [
          {
            "kind": "INTERFACE",
            "name": "Node"
          }
        ]
      },
      {
        "kind": "OBJECT",
        "name": "ConfigConnection",
        "fields": [
          {
            "name": "aggregate",
            "type": {
              "kind": "NON_NULL",
              "ofType": {
                "kind": "OBJECT",
                "name": "Aggregate",
                "ofType": null
              }
            },
            "args": []
          },
          {
            "name": "edges",
            "type": {
              "kind": "NON_NULL",
              "ofType": {
                "kind": "LIST",
                "ofType": {
                  "kind": "NON_NULL",
                  "ofType": {
                    "kind": "OBJECT",
                    "name": "ConfigEdge",
                    "ofType": null
                  }
                }
              }
            },
            "args": []
          },
          {
            "name": "pageInfo",
            "type": {
              "kind": "NON_NULL",
              "ofType": {
                "kind": "OBJECT",
                "name": "PageInfo",
                "ofType": null
              }
            },
            "args": []
          }
        ],
        "interfaces": []
      },
      {
        "kind": "OBJECT",
        "name": "ConfigEdge",
        "fields": [
          {
            "name": "cursor",
            "type": {
              "kind": "NON_NULL",
              "ofType": {
                "kind": "SCALAR",
                "name": "Any"
              }
            },
            "args": []
          },
          {
            "name": "node",
            "type": {
              "kind": "NON_NULL",
              "ofType": {
                "kind": "OBJECT",
                "name": "Config",
                "ofType": null
              }
            },
            "args": []
          }
        ],
        "interfaces": []
      },
      {
        "kind": "OBJECT",
        "name": "Customer",
        "fields": [
          {
            "name": "address",
            "type": {
              "kind": "SCALAR",
              "name": "Any"
            },
            "args": []
          },
          {
            "name": "city",
            "type": {
              "kind": "SCALAR",
              "name": "Any"
            },
            "args": []
          },
          {
            "name": "createdAt",
            "type": {
              "kind": "NON_NULL",
              "ofType": {
                "kind": "SCALAR",
                "name": "Any"
              }
            },
            "args": []
          },
          {
            "name": "createdBy",
            "type": {
              "kind": "OBJECT",
              "name": "User",
              "ofType": null
            },
            "args": [
              {
                "name": "locales",
                "type": {
                  "kind": "LIST",
                  "ofType": {
                    "kind": "NON_NULL",
                    "ofType": {
                      "kind": "SCALAR",
                      "name": "Any"
                    }
                  }
                }
              }
            ]
          },
          {
            "name": "district",
            "type": {
              "kind": "SCALAR",
              "name": "Any"
            },
            "args": []
          },
          {
            "name": "documentInStages",
            "type": {
              "kind": "NON_NULL",
              "ofType": {
                "kind": "LIST",
                "ofType": {
                  "kind": "NON_NULL",
                  "ofType": {
                    "kind": "OBJECT",
                    "name": "Customer",
                    "ofType": null
                  }
                }
              }
            },
            "args": [
              {
                "name": "includeCurrent",
                "type": {
                  "kind": "NON_NULL",
                  "ofType": {
                    "kind": "SCALAR",
                    "name": "Any"
                  }
                }
              },
              {
                "name": "inheritLocale",
                "type": {
                  "kind": "NON_NULL",
                  "ofType": {
                    "kind": "SCALAR",
                    "name": "Any"
                  }
                }
              },
              {
                "name": "stages",
                "type": {
                  "kind": "NON_NULL",
                  "ofType": {
                    "kind": "LIST",
                    "ofType": {
                      "kind": "NON_NULL",
                      "ofType": {
                        "kind": "SCALAR",
                        "name": "Any"
                      }
                    }
                  }
                }
              }
            ]
          },
          {
            "name": "email",
            "type": {
              "kind": "NON_NULL",
              "ofType": {
                "kind": "SCALAR",
                "name": "Any"
              }
            },
            "args": []
          },
          {
            "name": "firstname",
            "type": {
              "kind": "SCALAR",
              "name": "Any"
            },
            "args": []
          },
          {
            "name": "history",
            "type": {
              "kind": "NON_NULL",
              "ofType": {
                "kind": "LIST",
                "ofType": {
                  "kind": "NON_NULL",
                  "ofType": {
                    "kind": "OBJECT",
                    "name": "Version",
                    "ofType": null
                  }
                }
              }
            },
            "args": [
              {
                "name": "limit",
                "type": {
                  "kind": "NON_NULL",
                  "ofType": {
                    "kind": "SCALAR",
                    "name": "Any"
                  }
                }
              },
              {
                "name": "skip",
                "type": {
                  "kind": "NON_NULL",
                  "ofType": {
                    "kind": "SCALAR",
                    "name": "Any"
                  }
                }
              },
              {
                "name": "stageOverride",
                "type": {
                  "kind": "SCALAR",
                  "name": "Any"
                }
              }
            ]
          },
          {
            "name": "id",
            "type": {
              "kind": "NON_NULL",
              "ofType": {
                "kind": "SCALAR",
                "name": "Any"
              }
            },
            "args": []
          },
          {
            "name": "lastname",
            "type": {
              "kind": "SCALAR",
              "name": "Any"
            },
            "args": []
          },
          {
            "name": "orders",
            "type": {
              "kind": "NON_NULL",
              "ofType": {
                "kind": "LIST",
                "ofType": {
                  "kind": "NON_NULL",
                  "ofType": {
                    "kind": "OBJECT",
                    "name": "Order",
                    "ofType": null
                  }
                }
              }
            },
            "args": [
              {
                "name": "after",
                "type": {
                  "kind": "SCALAR",
                  "name": "Any"
                }
              },
              {
                "name": "before",
                "type": {
                  "kind": "SCALAR",
                  "name": "Any"
                }
              },
              {
                "name": "first",
                "type": {
                  "kind": "SCALAR",
                  "name": "Any"
                }
              },
              {
                "name": "last",
                "type": {
                  "kind": "SCALAR",
                  "name": "Any"
                }
              },
              {
                "name": "locales",
                "type": {
                  "kind": "LIST",
                  "ofType": {
                    "kind": "NON_NULL",
                    "ofType": {
                      "kind": "SCALAR",
                      "name": "Any"
                    }
                  }
                }
              },
              {
                "name": "orderBy",
                "type": {
                  "kind": "SCALAR",
                  "name": "Any"
                }
              },
              {
                "name": "skip",
                "type": {
                  "kind": "SCALAR",
                  "name": "Any"
                }
              },
              {
                "name": "where",
                "type": {
                  "kind": "SCALAR",
                  "name": "Any"
                }
              }
            ]
          },
          {
            "name": "pcode",
            "type": {
              "kind": "SCALAR",
              "name": "Any"
            },
            "args": []
          },
          {
            "name": "publishedAt",
            "type": {
              "kind": "SCALAR",
              "name": "Any"
            },
            "args": []
          },
          {
            "name": "publishedBy",
            "type": {
              "kind": "OBJECT",
              "name": "User",
              "ofType": null
            },
            "args": [
              {
                "name": "locales",
                "type": {
                  "kind": "LIST",
                  "ofType": {
                    "kind": "NON_NULL",
                    "ofType": {
                      "kind": "SCALAR",
                      "name": "Any"
                    }
                  }
                }
              }
            ]
          },
          {
            "name": "scheduledIn",
            "type": {
              "kind": "NON_NULL",
              "ofType": {
                "kind": "LIST",
                "ofType": {
                  "kind": "NON_NULL",
                  "ofType": {
                    "kind": "OBJECT",
                    "name": "ScheduledOperation",
                    "ofType": null
                  }
                }
              }
            },
            "args": [
              {
                "name": "after",
                "type": {
                  "kind": "SCALAR",
                  "name": "Any"
                }
              },
              {
                "name": "before",
                "type": {
                  "kind": "SCALAR",
                  "name": "Any"
                }
              },
              {
                "name": "first",
                "type": {
                  "kind": "SCALAR",
                  "name": "Any"
                }
              },
              {
                "name": "last",
                "type": {
                  "kind": "SCALAR",
                  "name": "Any"
                }
              },
              {
                "name": "locales",
                "type": {
                  "kind": "LIST",
                  "ofType": {
                    "kind": "NON_NULL",
                    "ofType": {
                      "kind": "SCALAR",
                      "name": "Any"
                    }
                  }
                }
              },
              {
                "name": "skip",
                "type": {
                  "kind": "SCALAR",
                  "name": "Any"
                }
              },
              {
                "name": "where",
                "type": {
                  "kind": "SCALAR",
                  "name": "Any"
                }
              }
            ]
          },
          {
            "name": "stage",
            "type": {
              "kind": "NON_NULL",
              "ofType": {
                "kind": "SCALAR",
                "name": "Any"
              }
            },
            "args": []
          },
          {
            "name": "updatedAt",
            "type": {
              "kind": "NON_NULL",
              "ofType": {
                "kind": "SCALAR",
                "name": "Any"
              }
            },
            "args": []
          },
          {
            "name": "updatedBy",
            "type": {
              "kind": "OBJECT",
              "name": "User",
              "ofType": null
            },
            "args": [
              {
                "name": "locales",
                "type": {
                  "kind": "LIST",
                  "ofType": {
                    "kind": "NON_NULL",
                    "ofType": {
                      "kind": "SCALAR",
                      "name": "Any"
                    }
                  }
                }
              }
            ]
          }
        ],
        "interfaces": [
          {
            "kind": "INTERFACE",
            "name": "Node"
          }
        ]
      },
      {
        "kind": "OBJECT",
        "name": "CustomerConnection",
        "fields": [
          {
            "name": "aggregate",
            "type": {
              "kind": "NON_NULL",
              "ofType": {
                "kind": "OBJECT",
                "name": "Aggregate",
                "ofType": null
              }
            },
            "args": []
          },
          {
            "name": "edges",
            "type": {
              "kind": "NON_NULL",
              "ofType": {
                "kind": "LIST",
                "ofType": {
                  "kind": "NON_NULL",
                  "ofType": {
                    "kind": "OBJECT",
                    "name": "CustomerEdge",
                    "ofType": null
                  }
                }
              }
            },
            "args": []
          },
          {
            "name": "pageInfo",
            "type": {
              "kind": "NON_NULL",
              "ofType": {
                "kind": "OBJECT",
                "name": "PageInfo",
                "ofType": null
              }
            },
            "args": []
          }
        ],
        "interfaces": []
      },
      {
        "kind": "OBJECT",
        "name": "CustomerEdge",
        "fields": [
          {
            "name": "cursor",
            "type": {
              "kind": "NON_NULL",
              "ofType": {
                "kind": "SCALAR",
                "name": "Any"
              }
            },
            "args": []
          },
          {
            "name": "node",
            "type": {
              "kind": "NON_NULL",
              "ofType": {
                "kind": "OBJECT",
                "name": "Customer",
                "ofType": null
              }
            },
            "args": []
          }
        ],
        "interfaces": []
      },
      {
        "kind": "OBJECT",
        "name": "DocumentVersion",
        "fields": [
          {
            "name": "createdAt",
            "type": {
              "kind": "NON_NULL",
              "ofType": {
                "kind": "SCALAR",
                "name": "Any"
              }
            },
            "args": []
          },
          {
            "name": "data",
            "type": {
              "kind": "SCALAR",
              "name": "Any"
            },
            "args": []
          },
          {
            "name": "id",
            "type": {
              "kind": "NON_NULL",
              "ofType": {
                "kind": "SCALAR",
                "name": "Any"
              }
            },
            "args": []
          },
          {
            "name": "revision",
            "type": {
              "kind": "NON_NULL",
              "ofType": {
                "kind": "SCALAR",
                "name": "Any"
              }
            },
            "args": []
          },
          {
            "name": "stage",
            "type": {
              "kind": "NON_NULL",
              "ofType": {
                "kind": "SCALAR",
                "name": "Any"
              }
            },
            "args": []
          }
        ],
        "interfaces": []
      },
      {
        "kind": "OBJECT",
        "name": "Location",
        "fields": [
          {
            "name": "distance",
            "type": {
              "kind": "NON_NULL",
              "ofType": {
                "kind": "SCALAR",
                "name": "Any"
              }
            },
            "args": [
              {
                "name": "from",
                "type": {
                  "kind": "NON_NULL",
                  "ofType": {
                    "kind": "SCALAR",
                    "name": "Any"
                  }
                }
              }
            ]
          },
          {
            "name": "latitude",
            "type": {
              "kind": "NON_NULL",
              "ofType": {
                "kind": "SCALAR",
                "name": "Any"
              }
            },
            "args": []
          },
          {
            "name": "longitude",
            "type": {
              "kind": "NON_NULL",
              "ofType": {
                "kind": "SCALAR",
                "name": "Any"
              }
            },
            "args": []
          }
        ],
        "interfaces": []
      },
      {
        "kind": "OBJECT",
        "name": "Mutation",
        "fields": [
          {
            "name": "createAsset",
            "type": {
              "kind": "OBJECT",
              "name": "Asset",
              "ofType": null
            },
            "args": [
              {
                "name": "data",
                "type": {
                  "kind": "NON_NULL",
                  "ofType": {
                    "kind": "SCALAR",
                    "name": "Any"
                  }
                }
              }
            ]
          },
          {
            "name": "createCategory",
            "type": {
              "kind": "OBJECT",
              "name": "Category",
              "ofType": null
            },
            "args": [
              {
                "name": "data",
                "type": {
                  "kind": "NON_NULL",
                  "ofType": {
                    "kind": "SCALAR",
                    "name": "Any"
                  }
                }
              }
            ]
          },
          {
            "name": "createConfig",
            "type": {
              "kind": "OBJECT",
              "name": "Config",
              "ofType": null
            },
            "args": [
              {
                "name": "data",
                "type": {
                  "kind": "NON_NULL",
                  "ofType": {
                    "kind": "SCALAR",
                    "name": "Any"
                  }
                }
              }
            ]
          },
          {
            "name": "createCustomer",
            "type": {
              "kind": "OBJECT",
              "name": "Customer",
              "ofType": null
            },
            "args": [
              {
                "name": "data",
                "type": {
                  "kind": "NON_NULL",
                  "ofType": {
                    "kind": "SCALAR",
                    "name": "Any"
                  }
                }
              }
            ]
          },
          {
            "name": "createOrder",
            "type": {
              "kind": "OBJECT",
              "name": "Order",
              "ofType": null
            },
            "args": [
              {
                "name": "data",
                "type": {
                  "kind": "NON_NULL",
                  "ofType": {
                    "kind": "SCALAR",
                    "name": "Any"
                  }
                }
              }
            ]
          },
          {
            "name": "createOrderItem",
            "type": {
              "kind": "OBJECT",
              "name": "OrderItem",
              "ofType": null
            },
            "args": [
              {
                "name": "data",
                "type": {
                  "kind": "NON_NULL",
                  "ofType": {
                    "kind": "SCALAR",
                    "name": "Any"
                  }
                }
              }
            ]
          },
          {
            "name": "createProduct",
            "type": {
              "kind": "OBJECT",
              "name": "Product",
              "ofType": null
            },
            "args": [
              {
                "name": "data",
                "type": {
                  "kind": "NON_NULL",
                  "ofType": {
                    "kind": "SCALAR",
                    "name": "Any"
                  }
                }
              }
            ]
          },
          {
            "name": "createProductVariantColor",
            "type": {
              "kind": "OBJECT",
              "name": "ProductVariantColor",
              "ofType": null
            },
            "args": [
              {
                "name": "data",
                "type": {
                  "kind": "NON_NULL",
                  "ofType": {
                    "kind": "SCALAR",
                    "name": "Any"
                  }
                }
              }
            ]
          },
          {
            "name": "createScheduledRelease",
            "type": {
              "kind": "OBJECT",
              "name": "ScheduledRelease",
              "ofType": null
            },
            "args": [
              {
                "name": "data",
                "type": {
                  "kind": "NON_NULL",
                  "ofType": {
                    "kind": "SCALAR",
                    "name": "Any"
                  }
                }
              }
            ]
          },
          {
            "name": "deleteAsset",
            "type": {
              "kind": "OBJECT",
              "name": "Asset",
              "ofType": null
            },
            "args": [
              {
                "name": "where",
                "type": {
                  "kind": "NON_NULL",
                  "ofType": {
                    "kind": "SCALAR",
                    "name": "Any"
                  }
                }
              }
            ]
          },
          {
            "name": "deleteCategory",
            "type": {
              "kind": "OBJECT",
              "name": "Category",
              "ofType": null
            },
            "args": [
              {
                "name": "where",
                "type": {
                  "kind": "NON_NULL",
                  "ofType": {
                    "kind": "SCALAR",
                    "name": "Any"
                  }
                }
              }
            ]
          },
          {
            "name": "deleteConfig",
            "type": {
              "kind": "OBJECT",
              "name": "Config",
              "ofType": null
            },
            "args": [
              {
                "name": "where",
                "type": {
                  "kind": "NON_NULL",
                  "ofType": {
                    "kind": "SCALAR",
                    "name": "Any"
                  }
                }
              }
            ]
          },
          {
            "name": "deleteCustomer",
            "type": {
              "kind": "OBJECT",
              "name": "Customer",
              "ofType": null
            },
            "args": [
              {
                "name": "where",
                "type": {
                  "kind": "NON_NULL",
                  "ofType": {
                    "kind": "SCALAR",
                    "name": "Any"
                  }
                }
              }
            ]
          },
          {
            "name": "deleteManyAssets",
            "type": {
              "kind": "NON_NULL",
              "ofType": {
                "kind": "OBJECT",
                "name": "BatchPayload",
                "ofType": null
              }
            },
            "args": [
              {
                "name": "where",
                "type": {
                  "kind": "SCALAR",
                  "name": "Any"
                }
              }
            ]
          },
          {
            "name": "deleteManyAssetsConnection",
            "type": {
              "kind": "NON_NULL",
              "ofType": {
                "kind": "OBJECT",
                "name": "AssetConnection",
                "ofType": null
              }
            },
            "args": [
              {
                "name": "after",
                "type": {
                  "kind": "SCALAR",
                  "name": "Any"
                }
              },
              {
                "name": "before",
                "type": {
                  "kind": "SCALAR",
                  "name": "Any"
                }
              },
              {
                "name": "first",
                "type": {
                  "kind": "SCALAR",
                  "name": "Any"
                }
              },
              {
                "name": "last",
                "type": {
                  "kind": "SCALAR",
                  "name": "Any"
                }
              },
              {
                "name": "skip",
                "type": {
                  "kind": "SCALAR",
                  "name": "Any"
                }
              },
              {
                "name": "where",
                "type": {
                  "kind": "SCALAR",
                  "name": "Any"
                }
              }
            ]
          },
          {
            "name": "deleteManyCategories",
            "type": {
              "kind": "NON_NULL",
              "ofType": {
                "kind": "OBJECT",
                "name": "BatchPayload",
                "ofType": null
              }
            },
            "args": [
              {
                "name": "where",
                "type": {
                  "kind": "SCALAR",
                  "name": "Any"
                }
              }
            ]
          },
          {
            "name": "deleteManyCategoriesConnection",
            "type": {
              "kind": "NON_NULL",
              "ofType": {
                "kind": "OBJECT",
                "name": "CategoryConnection",
                "ofType": null
              }
            },
            "args": [
              {
                "name": "after",
                "type": {
                  "kind": "SCALAR",
                  "name": "Any"
                }
              },
              {
                "name": "before",
                "type": {
                  "kind": "SCALAR",
                  "name": "Any"
                }
              },
              {
                "name": "first",
                "type": {
                  "kind": "SCALAR",
                  "name": "Any"
                }
              },
              {
                "name": "last",
                "type": {
                  "kind": "SCALAR",
                  "name": "Any"
                }
              },
              {
                "name": "skip",
                "type": {
                  "kind": "SCALAR",
                  "name": "Any"
                }
              },
              {
                "name": "where",
                "type": {
                  "kind": "SCALAR",
                  "name": "Any"
                }
              }
            ]
          },
          {
            "name": "deleteManyConfigs",
            "type": {
              "kind": "NON_NULL",
              "ofType": {
                "kind": "OBJECT",
                "name": "BatchPayload",
                "ofType": null
              }
            },
            "args": [
              {
                "name": "where",
                "type": {
                  "kind": "SCALAR",
                  "name": "Any"
                }
              }
            ]
          },
          {
            "name": "deleteManyConfigsConnection",
            "type": {
              "kind": "NON_NULL",
              "ofType": {
                "kind": "OBJECT",
                "name": "ConfigConnection",
                "ofType": null
              }
            },
            "args": [
              {
                "name": "after",
                "type": {
                  "kind": "SCALAR",
                  "name": "Any"
                }
              },
              {
                "name": "before",
                "type": {
                  "kind": "SCALAR",
                  "name": "Any"
                }
              },
              {
                "name": "first",
                "type": {
                  "kind": "SCALAR",
                  "name": "Any"
                }
              },
              {
                "name": "last",
                "type": {
                  "kind": "SCALAR",
                  "name": "Any"
                }
              },
              {
                "name": "skip",
                "type": {
                  "kind": "SCALAR",
                  "name": "Any"
                }
              },
              {
                "name": "where",
                "type": {
                  "kind": "SCALAR",
                  "name": "Any"
                }
              }
            ]
          },
          {
            "name": "deleteManyCustomers",
            "type": {
              "kind": "NON_NULL",
              "ofType": {
                "kind": "OBJECT",
                "name": "BatchPayload",
                "ofType": null
              }
            },
            "args": [
              {
                "name": "where",
                "type": {
                  "kind": "SCALAR",
                  "name": "Any"
                }
              }
            ]
          },
          {
            "name": "deleteManyCustomersConnection",
            "type": {
              "kind": "NON_NULL",
              "ofType": {
                "kind": "OBJECT",
                "name": "CustomerConnection",
                "ofType": null
              }
            },
            "args": [
              {
                "name": "after",
                "type": {
                  "kind": "SCALAR",
                  "name": "Any"
                }
              },
              {
                "name": "before",
                "type": {
                  "kind": "SCALAR",
                  "name": "Any"
                }
              },
              {
                "name": "first",
                "type": {
                  "kind": "SCALAR",
                  "name": "Any"
                }
              },
              {
                "name": "last",
                "type": {
                  "kind": "SCALAR",
                  "name": "Any"
                }
              },
              {
                "name": "skip",
                "type": {
                  "kind": "SCALAR",
                  "name": "Any"
                }
              },
              {
                "name": "where",
                "type": {
                  "kind": "SCALAR",
                  "name": "Any"
                }
              }
            ]
          },
          {
            "name": "deleteManyOrderItems",
            "type": {
              "kind": "NON_NULL",
              "ofType": {
                "kind": "OBJECT",
                "name": "BatchPayload",
                "ofType": null
              }
            },
            "args": [
              {
                "name": "where",
                "type": {
                  "kind": "SCALAR",
                  "name": "Any"
                }
              }
            ]
          },
          {
            "name": "deleteManyOrderItemsConnection",
            "type": {
              "kind": "NON_NULL",
              "ofType": {
                "kind": "OBJECT",
                "name": "OrderItemConnection",
                "ofType": null
              }
            },
            "args": [
              {
                "name": "after",
                "type": {
                  "kind": "SCALAR",
                  "name": "Any"
                }
              },
              {
                "name": "before",
                "type": {
                  "kind": "SCALAR",
                  "name": "Any"
                }
              },
              {
                "name": "first",
                "type": {
                  "kind": "SCALAR",
                  "name": "Any"
                }
              },
              {
                "name": "last",
                "type": {
                  "kind": "SCALAR",
                  "name": "Any"
                }
              },
              {
                "name": "skip",
                "type": {
                  "kind": "SCALAR",
                  "name": "Any"
                }
              },
              {
                "name": "where",
                "type": {
                  "kind": "SCALAR",
                  "name": "Any"
                }
              }
            ]
          },
          {
            "name": "deleteManyOrders",
            "type": {
              "kind": "NON_NULL",
              "ofType": {
                "kind": "OBJECT",
                "name": "BatchPayload",
                "ofType": null
              }
            },
            "args": [
              {
                "name": "where",
                "type": {
                  "kind": "SCALAR",
                  "name": "Any"
                }
              }
            ]
          },
          {
            "name": "deleteManyOrdersConnection",
            "type": {
              "kind": "NON_NULL",
              "ofType": {
                "kind": "OBJECT",
                "name": "OrderConnection",
                "ofType": null
              }
            },
            "args": [
              {
                "name": "after",
                "type": {
                  "kind": "SCALAR",
                  "name": "Any"
                }
              },
              {
                "name": "before",
                "type": {
                  "kind": "SCALAR",
                  "name": "Any"
                }
              },
              {
                "name": "first",
                "type": {
                  "kind": "SCALAR",
                  "name": "Any"
                }
              },
              {
                "name": "last",
                "type": {
                  "kind": "SCALAR",
                  "name": "Any"
                }
              },
              {
                "name": "skip",
                "type": {
                  "kind": "SCALAR",
                  "name": "Any"
                }
              },
              {
                "name": "where",
                "type": {
                  "kind": "SCALAR",
                  "name": "Any"
                }
              }
            ]
          },
          {
            "name": "deleteManyProductVariantColors",
            "type": {
              "kind": "NON_NULL",
              "ofType": {
                "kind": "OBJECT",
                "name": "BatchPayload",
                "ofType": null
              }
            },
            "args": [
              {
                "name": "where",
                "type": {
                  "kind": "SCALAR",
                  "name": "Any"
                }
              }
            ]
          },
          {
            "name": "deleteManyProductVariantColorsConnection",
            "type": {
              "kind": "NON_NULL",
              "ofType": {
                "kind": "OBJECT",
                "name": "ProductVariantColorConnection",
                "ofType": null
              }
            },
            "args": [
              {
                "name": "after",
                "type": {
                  "kind": "SCALAR",
                  "name": "Any"
                }
              },
              {
                "name": "before",
                "type": {
                  "kind": "SCALAR",
                  "name": "Any"
                }
              },
              {
                "name": "first",
                "type": {
                  "kind": "SCALAR",
                  "name": "Any"
                }
              },
              {
                "name": "last",
                "type": {
                  "kind": "SCALAR",
                  "name": "Any"
                }
              },
              {
                "name": "skip",
                "type": {
                  "kind": "SCALAR",
                  "name": "Any"
                }
              },
              {
                "name": "where",
                "type": {
                  "kind": "SCALAR",
                  "name": "Any"
                }
              }
            ]
          },
          {
            "name": "deleteManyProducts",
            "type": {
              "kind": "NON_NULL",
              "ofType": {
                "kind": "OBJECT",
                "name": "BatchPayload",
                "ofType": null
              }
            },
            "args": [
              {
                "name": "where",
                "type": {
                  "kind": "SCALAR",
                  "name": "Any"
                }
              }
            ]
          },
          {
            "name": "deleteManyProductsConnection",
            "type": {
              "kind": "NON_NULL",
              "ofType": {
                "kind": "OBJECT",
                "name": "ProductConnection",
                "ofType": null
              }
            },
            "args": [
              {
                "name": "after",
                "type": {
                  "kind": "SCALAR",
                  "name": "Any"
                }
              },
              {
                "name": "before",
                "type": {
                  "kind": "SCALAR",
                  "name": "Any"
                }
              },
              {
                "name": "first",
                "type": {
                  "kind": "SCALAR",
                  "name": "Any"
                }
              },
              {
                "name": "last",
                "type": {
                  "kind": "SCALAR",
                  "name": "Any"
                }
              },
              {
                "name": "skip",
                "type": {
                  "kind": "SCALAR",
                  "name": "Any"
                }
              },
              {
                "name": "where",
                "type": {
                  "kind": "SCALAR",
                  "name": "Any"
                }
              }
            ]
          },
          {
            "name": "deleteOrder",
            "type": {
              "kind": "OBJECT",
              "name": "Order",
              "ofType": null
            },
            "args": [
              {
                "name": "where",
                "type": {
                  "kind": "NON_NULL",
                  "ofType": {
                    "kind": "SCALAR",
                    "name": "Any"
                  }
                }
              }
            ]
          },
          {
            "name": "deleteOrderItem",
            "type": {
              "kind": "OBJECT",
              "name": "OrderItem",
              "ofType": null
            },
            "args": [
              {
                "name": "where",
                "type": {
                  "kind": "NON_NULL",
                  "ofType": {
                    "kind": "SCALAR",
                    "name": "Any"
                  }
                }
              }
            ]
          },
          {
            "name": "deleteProduct",
            "type": {
              "kind": "OBJECT",
              "name": "Product",
              "ofType": null
            },
            "args": [
              {
                "name": "where",
                "type": {
                  "kind": "NON_NULL",
                  "ofType": {
                    "kind": "SCALAR",
                    "name": "Any"
                  }
                }
              }
            ]
          },
          {
            "name": "deleteProductVariantColor",
            "type": {
              "kind": "OBJECT",
              "name": "ProductVariantColor",
              "ofType": null
            },
            "args": [
              {
                "name": "where",
                "type": {
                  "kind": "NON_NULL",
                  "ofType": {
                    "kind": "SCALAR",
                    "name": "Any"
                  }
                }
              }
            ]
          },
          {
            "name": "deleteScheduledOperation",
            "type": {
              "kind": "OBJECT",
              "name": "ScheduledOperation",
              "ofType": null
            },
            "args": [
              {
                "name": "where",
                "type": {
                  "kind": "NON_NULL",
                  "ofType": {
                    "kind": "SCALAR",
                    "name": "Any"
                  }
                }
              }
            ]
          },
          {
            "name": "deleteScheduledRelease",
            "type": {
              "kind": "OBJECT",
              "name": "ScheduledRelease",
              "ofType": null
            },
            "args": [
              {
                "name": "where",
                "type": {
                  "kind": "NON_NULL",
                  "ofType": {
                    "kind": "SCALAR",
                    "name": "Any"
                  }
                }
              }
            ]
          },
          {
            "name": "publishAsset",
            "type": {
              "kind": "OBJECT",
              "name": "Asset",
              "ofType": null
            },
            "args": [
              {
                "name": "locales",
                "type": {
                  "kind": "LIST",
                  "ofType": {
                    "kind": "NON_NULL",
                    "ofType": {
                      "kind": "SCALAR",
                      "name": "Any"
                    }
                  }
                }
              },
              {
                "name": "publishBase",
                "type": {
                  "kind": "SCALAR",
                  "name": "Any"
                }
              },
              {
                "name": "to",
                "type": {
                  "kind": "NON_NULL",
                  "ofType": {
                    "kind": "LIST",
                    "ofType": {
                      "kind": "NON_NULL",
                      "ofType": {
                        "kind": "SCALAR",
                        "name": "Any"
                      }
                    }
                  }
                }
              },
              {
                "name": "where",
                "type": {
                  "kind": "NON_NULL",
                  "ofType": {
                    "kind": "SCALAR",
                    "name": "Any"
                  }
                }
              },
              {
                "name": "withDefaultLocale",
                "type": {
                  "kind": "SCALAR",
                  "name": "Any"
                }
              }
            ]
          },
          {
            "name": "publishCategory",
            "type": {
              "kind": "OBJECT",
              "name": "Category",
              "ofType": null
            },
            "args": [
              {
                "name": "to",
                "type": {
                  "kind": "NON_NULL",
                  "ofType": {
                    "kind": "LIST",
                    "ofType": {
                      "kind": "NON_NULL",
                      "ofType": {
                        "kind": "SCALAR",
                        "name": "Any"
                      }
                    }
                  }
                }
              },
              {
                "name": "where",
                "type": {
                  "kind": "NON_NULL",
                  "ofType": {
                    "kind": "SCALAR",
                    "name": "Any"
                  }
                }
              }
            ]
          },
          {
            "name": "publishConfig",
            "type": {
              "kind": "OBJECT",
              "name": "Config",
              "ofType": null
            },
            "args": [
              {
                "name": "to",
                "type": {
                  "kind": "NON_NULL",
                  "ofType": {
                    "kind": "LIST",
                    "ofType": {
                      "kind": "NON_NULL",
                      "ofType": {
                        "kind": "SCALAR",
                        "name": "Any"
                      }
                    }
                  }
                }
              },
              {
                "name": "where",
                "type": {
                  "kind": "NON_NULL",
                  "ofType": {
                    "kind": "SCALAR",
                    "name": "Any"
                  }
                }
              }
            ]
          },
          {
            "name": "publishCustomer",
            "type": {
              "kind": "OBJECT",
              "name": "Customer",
              "ofType": null
            },
            "args": [
              {
                "name": "to",
                "type": {
                  "kind": "NON_NULL",
                  "ofType": {
                    "kind": "LIST",
                    "ofType": {
                      "kind": "NON_NULL",
                      "ofType": {
                        "kind": "SCALAR",
                        "name": "Any"
                      }
                    }
                  }
                }
              },
              {
                "name": "where",
                "type": {
                  "kind": "NON_NULL",
                  "ofType": {
                    "kind": "SCALAR",
                    "name": "Any"
                  }
                }
              }
            ]
          },
          {
            "name": "publishManyAssets",
            "type": {
              "kind": "NON_NULL",
              "ofType": {
                "kind": "OBJECT",
                "name": "BatchPayload",
                "ofType": null
              }
            },
            "args": [
              {
                "name": "locales",
                "type": {
                  "kind": "LIST",
                  "ofType": {
                    "kind": "NON_NULL",
                    "ofType": {
                      "kind": "SCALAR",
                      "name": "Any"
                    }
                  }
                }
              },
              {
                "name": "publishBase",
                "type": {
                  "kind": "SCALAR",
                  "name": "Any"
                }
              },
              {
                "name": "to",
                "type": {
                  "kind": "NON_NULL",
                  "ofType": {
                    "kind": "LIST",
                    "ofType": {
                      "kind": "NON_NULL",
                      "ofType": {
                        "kind": "SCALAR",
                        "name": "Any"
                      }
                    }
                  }
                }
              },
              {
                "name": "where",
                "type": {
                  "kind": "SCALAR",
                  "name": "Any"
                }
              },
              {
                "name": "withDefaultLocale",
                "type": {
                  "kind": "SCALAR",
                  "name": "Any"
                }
              }
            ]
          },
          {
            "name": "publishManyAssetsConnection",
            "type": {
              "kind": "NON_NULL",
              "ofType": {
                "kind": "OBJECT",
                "name": "AssetConnection",
                "ofType": null
              }
            },
            "args": [
              {
                "name": "after",
                "type": {
                  "kind": "SCALAR",
                  "name": "Any"
                }
              },
              {
                "name": "before",
                "type": {
                  "kind": "SCALAR",
                  "name": "Any"
                }
              },
              {
                "name": "first",
                "type": {
                  "kind": "SCALAR",
                  "name": "Any"
                }
              },
              {
                "name": "from",
                "type": {
                  "kind": "SCALAR",
                  "name": "Any"
                }
              },
              {
                "name": "last",
                "type": {
                  "kind": "SCALAR",
                  "name": "Any"
                }
              },
              {
                "name": "locales",
                "type": {
                  "kind": "LIST",
                  "ofType": {
                    "kind": "NON_NULL",
                    "ofType": {
                      "kind": "SCALAR",
                      "name": "Any"
                    }
                  }
                }
              },
              {
                "name": "publishBase",
                "type": {
                  "kind": "SCALAR",
                  "name": "Any"
                }
              },
              {
                "name": "skip",
                "type": {
                  "kind": "SCALAR",
                  "name": "Any"
                }
              },
              {
                "name": "to",
                "type": {
                  "kind": "NON_NULL",
                  "ofType": {
                    "kind": "LIST",
                    "ofType": {
                      "kind": "NON_NULL",
                      "ofType": {
                        "kind": "SCALAR",
                        "name": "Any"
                      }
                    }
                  }
                }
              },
              {
                "name": "where",
                "type": {
                  "kind": "SCALAR",
                  "name": "Any"
                }
              },
              {
                "name": "withDefaultLocale",
                "type": {
                  "kind": "SCALAR",
                  "name": "Any"
                }
              }
            ]
          },
          {
            "name": "publishManyCategories",
            "type": {
              "kind": "NON_NULL",
              "ofType": {
                "kind": "OBJECT",
                "name": "BatchPayload",
                "ofType": null
              }
            },
            "args": [
              {
                "name": "to",
                "type": {
                  "kind": "NON_NULL",
                  "ofType": {
                    "kind": "LIST",
                    "ofType": {
                      "kind": "NON_NULL",
                      "ofType": {
                        "kind": "SCALAR",
                        "name": "Any"
                      }
                    }
                  }
                }
              },
              {
                "name": "where",
                "type": {
                  "kind": "SCALAR",
                  "name": "Any"
                }
              }
            ]
          },
          {
            "name": "publishManyCategoriesConnection",
            "type": {
              "kind": "NON_NULL",
              "ofType": {
                "kind": "OBJECT",
                "name": "CategoryConnection",
                "ofType": null
              }
            },
            "args": [
              {
                "name": "after",
                "type": {
                  "kind": "SCALAR",
                  "name": "Any"
                }
              },
              {
                "name": "before",
                "type": {
                  "kind": "SCALAR",
                  "name": "Any"
                }
              },
              {
                "name": "first",
                "type": {
                  "kind": "SCALAR",
                  "name": "Any"
                }
              },
              {
                "name": "from",
                "type": {
                  "kind": "SCALAR",
                  "name": "Any"
                }
              },
              {
                "name": "last",
                "type": {
                  "kind": "SCALAR",
                  "name": "Any"
                }
              },
              {
                "name": "skip",
                "type": {
                  "kind": "SCALAR",
                  "name": "Any"
                }
              },
              {
                "name": "to",
                "type": {
                  "kind": "NON_NULL",
                  "ofType": {
                    "kind": "LIST",
                    "ofType": {
                      "kind": "NON_NULL",
                      "ofType": {
                        "kind": "SCALAR",
                        "name": "Any"
                      }
                    }
                  }
                }
              },
              {
                "name": "where",
                "type": {
                  "kind": "SCALAR",
                  "name": "Any"
                }
              }
            ]
          },
          {
            "name": "publishManyConfigs",
            "type": {
              "kind": "NON_NULL",
              "ofType": {
                "kind": "OBJECT",
                "name": "BatchPayload",
                "ofType": null
              }
            },
            "args": [
              {
                "name": "to",
                "type": {
                  "kind": "NON_NULL",
                  "ofType": {
                    "kind": "LIST",
                    "ofType": {
                      "kind": "NON_NULL",
                      "ofType": {
                        "kind": "SCALAR",
                        "name": "Any"
                      }
                    }
                  }
                }
              },
              {
                "name": "where",
                "type": {
                  "kind": "SCALAR",
                  "name": "Any"
                }
              }
            ]
          },
          {
            "name": "publishManyConfigsConnection",
            "type": {
              "kind": "NON_NULL",
              "ofType": {
                "kind": "OBJECT",
                "name": "ConfigConnection",
                "ofType": null
              }
            },
            "args": [
              {
                "name": "after",
                "type": {
                  "kind": "SCALAR",
                  "name": "Any"
                }
              },
              {
                "name": "before",
                "type": {
                  "kind": "SCALAR",
                  "name": "Any"
                }
              },
              {
                "name": "first",
                "type": {
                  "kind": "SCALAR",
                  "name": "Any"
                }
              },
              {
                "name": "from",
                "type": {
                  "kind": "SCALAR",
                  "name": "Any"
                }
              },
              {
                "name": "last",
                "type": {
                  "kind": "SCALAR",
                  "name": "Any"
                }
              },
              {
                "name": "skip",
                "type": {
                  "kind": "SCALAR",
                  "name": "Any"
                }
              },
              {
                "name": "to",
                "type": {
                  "kind": "NON_NULL",
                  "ofType": {
                    "kind": "LIST",
                    "ofType": {
                      "kind": "NON_NULL",
                      "ofType": {
                        "kind": "SCALAR",
                        "name": "Any"
                      }
                    }
                  }
                }
              },
              {
                "name": "where",
                "type": {
                  "kind": "SCALAR",
                  "name": "Any"
                }
              }
            ]
          },
          {
            "name": "publishManyCustomers",
            "type": {
              "kind": "NON_NULL",
              "ofType": {
                "kind": "OBJECT",
                "name": "BatchPayload",
                "ofType": null
              }
            },
            "args": [
              {
                "name": "to",
                "type": {
                  "kind": "NON_NULL",
                  "ofType": {
                    "kind": "LIST",
                    "ofType": {
                      "kind": "NON_NULL",
                      "ofType": {
                        "kind": "SCALAR",
                        "name": "Any"
                      }
                    }
                  }
                }
              },
              {
                "name": "where",
                "type": {
                  "kind": "SCALAR",
                  "name": "Any"
                }
              }
            ]
          },
          {
            "name": "publishManyCustomersConnection",
            "type": {
              "kind": "NON_NULL",
              "ofType": {
                "kind": "OBJECT",
                "name": "CustomerConnection",
                "ofType": null
              }
            },
            "args": [
              {
                "name": "after",
                "type": {
                  "kind": "SCALAR",
                  "name": "Any"
                }
              },
              {
                "name": "before",
                "type": {
                  "kind": "SCALAR",
                  "name": "Any"
                }
              },
              {
                "name": "first",
                "type": {
                  "kind": "SCALAR",
                  "name": "Any"
                }
              },
              {
                "name": "from",
                "type": {
                  "kind": "SCALAR",
                  "name": "Any"
                }
              },
              {
                "name": "last",
                "type": {
                  "kind": "SCALAR",
                  "name": "Any"
                }
              },
              {
                "name": "skip",
                "type": {
                  "kind": "SCALAR",
                  "name": "Any"
                }
              },
              {
                "name": "to",
                "type": {
                  "kind": "NON_NULL",
                  "ofType": {
                    "kind": "LIST",
                    "ofType": {
                      "kind": "NON_NULL",
                      "ofType": {
                        "kind": "SCALAR",
                        "name": "Any"
                      }
                    }
                  }
                }
              },
              {
                "name": "where",
                "type": {
                  "kind": "SCALAR",
                  "name": "Any"
                }
              }
            ]
          },
          {
            "name": "publishManyOrderItems",
            "type": {
              "kind": "NON_NULL",
              "ofType": {
                "kind": "OBJECT",
                "name": "BatchPayload",
                "ofType": null
              }
            },
            "args": [
              {
                "name": "to",
                "type": {
                  "kind": "NON_NULL",
                  "ofType": {
                    "kind": "LIST",
                    "ofType": {
                      "kind": "NON_NULL",
                      "ofType": {
                        "kind": "SCALAR",
                        "name": "Any"
                      }
                    }
                  }
                }
              },
              {
                "name": "where",
                "type": {
                  "kind": "SCALAR",
                  "name": "Any"
                }
              }
            ]
          },
          {
            "name": "publishManyOrderItemsConnection",
            "type": {
              "kind": "NON_NULL",
              "ofType": {
                "kind": "OBJECT",
                "name": "OrderItemConnection",
                "ofType": null
              }
            },
            "args": [
              {
                "name": "after",
                "type": {
                  "kind": "SCALAR",
                  "name": "Any"
                }
              },
              {
                "name": "before",
                "type": {
                  "kind": "SCALAR",
                  "name": "Any"
                }
              },
              {
                "name": "first",
                "type": {
                  "kind": "SCALAR",
                  "name": "Any"
                }
              },
              {
                "name": "from",
                "type": {
                  "kind": "SCALAR",
                  "name": "Any"
                }
              },
              {
                "name": "last",
                "type": {
                  "kind": "SCALAR",
                  "name": "Any"
                }
              },
              {
                "name": "skip",
                "type": {
                  "kind": "SCALAR",
                  "name": "Any"
                }
              },
              {
                "name": "to",
                "type": {
                  "kind": "NON_NULL",
                  "ofType": {
                    "kind": "LIST",
                    "ofType": {
                      "kind": "NON_NULL",
                      "ofType": {
                        "kind": "SCALAR",
                        "name": "Any"
                      }
                    }
                  }
                }
              },
              {
                "name": "where",
                "type": {
                  "kind": "SCALAR",
                  "name": "Any"
                }
              }
            ]
          },
          {
            "name": "publishManyOrders",
            "type": {
              "kind": "NON_NULL",
              "ofType": {
                "kind": "OBJECT",
                "name": "BatchPayload",
                "ofType": null
              }
            },
            "args": [
              {
                "name": "to",
                "type": {
                  "kind": "NON_NULL",
                  "ofType": {
                    "kind": "LIST",
                    "ofType": {
                      "kind": "NON_NULL",
                      "ofType": {
                        "kind": "SCALAR",
                        "name": "Any"
                      }
                    }
                  }
                }
              },
              {
                "name": "where",
                "type": {
                  "kind": "SCALAR",
                  "name": "Any"
                }
              }
            ]
          },
          {
            "name": "publishManyOrdersConnection",
            "type": {
              "kind": "NON_NULL",
              "ofType": {
                "kind": "OBJECT",
                "name": "OrderConnection",
                "ofType": null
              }
            },
            "args": [
              {
                "name": "after",
                "type": {
                  "kind": "SCALAR",
                  "name": "Any"
                }
              },
              {
                "name": "before",
                "type": {
                  "kind": "SCALAR",
                  "name": "Any"
                }
              },
              {
                "name": "first",
                "type": {
                  "kind": "SCALAR",
                  "name": "Any"
                }
              },
              {
                "name": "from",
                "type": {
                  "kind": "SCALAR",
                  "name": "Any"
                }
              },
              {
                "name": "last",
                "type": {
                  "kind": "SCALAR",
                  "name": "Any"
                }
              },
              {
                "name": "skip",
                "type": {
                  "kind": "SCALAR",
                  "name": "Any"
                }
              },
              {
                "name": "to",
                "type": {
                  "kind": "NON_NULL",
                  "ofType": {
                    "kind": "LIST",
                    "ofType": {
                      "kind": "NON_NULL",
                      "ofType": {
                        "kind": "SCALAR",
                        "name": "Any"
                      }
                    }
                  }
                }
              },
              {
                "name": "where",
                "type": {
                  "kind": "SCALAR",
                  "name": "Any"
                }
              }
            ]
          },
          {
            "name": "publishManyProductVariantColors",
            "type": {
              "kind": "NON_NULL",
              "ofType": {
                "kind": "OBJECT",
                "name": "BatchPayload",
                "ofType": null
              }
            },
            "args": [
              {
                "name": "to",
                "type": {
                  "kind": "NON_NULL",
                  "ofType": {
                    "kind": "LIST",
                    "ofType": {
                      "kind": "NON_NULL",
                      "ofType": {
                        "kind": "SCALAR",
                        "name": "Any"
                      }
                    }
                  }
                }
              },
              {
                "name": "where",
                "type": {
                  "kind": "SCALAR",
                  "name": "Any"
                }
              }
            ]
          },
          {
            "name": "publishManyProductVariantColorsConnection",
            "type": {
              "kind": "NON_NULL",
              "ofType": {
                "kind": "OBJECT",
                "name": "ProductVariantColorConnection",
                "ofType": null
              }
            },
            "args": [
              {
                "name": "after",
                "type": {
                  "kind": "SCALAR",
                  "name": "Any"
                }
              },
              {
                "name": "before",
                "type": {
                  "kind": "SCALAR",
                  "name": "Any"
                }
              },
              {
                "name": "first",
                "type": {
                  "kind": "SCALAR",
                  "name": "Any"
                }
              },
              {
                "name": "from",
                "type": {
                  "kind": "SCALAR",
                  "name": "Any"
                }
              },
              {
                "name": "last",
                "type": {
                  "kind": "SCALAR",
                  "name": "Any"
                }
              },
              {
                "name": "skip",
                "type": {
                  "kind": "SCALAR",
                  "name": "Any"
                }
              },
              {
                "name": "to",
                "type": {
                  "kind": "NON_NULL",
                  "ofType": {
                    "kind": "LIST",
                    "ofType": {
                      "kind": "NON_NULL",
                      "ofType": {
                        "kind": "SCALAR",
                        "name": "Any"
                      }
                    }
                  }
                }
              },
              {
                "name": "where",
                "type": {
                  "kind": "SCALAR",
                  "name": "Any"
                }
              }
            ]
          },
          {
            "name": "publishManyProducts",
            "type": {
              "kind": "NON_NULL",
              "ofType": {
                "kind": "OBJECT",
                "name": "BatchPayload",
                "ofType": null
              }
            },
            "args": [
              {
                "name": "to",
                "type": {
                  "kind": "NON_NULL",
                  "ofType": {
                    "kind": "LIST",
                    "ofType": {
                      "kind": "NON_NULL",
                      "ofType": {
                        "kind": "SCALAR",
                        "name": "Any"
                      }
                    }
                  }
                }
              },
              {
                "name": "where",
                "type": {
                  "kind": "SCALAR",
                  "name": "Any"
                }
              }
            ]
          },
          {
            "name": "publishManyProductsConnection",
            "type": {
              "kind": "NON_NULL",
              "ofType": {
                "kind": "OBJECT",
                "name": "ProductConnection",
                "ofType": null
              }
            },
            "args": [
              {
                "name": "after",
                "type": {
                  "kind": "SCALAR",
                  "name": "Any"
                }
              },
              {
                "name": "before",
                "type": {
                  "kind": "SCALAR",
                  "name": "Any"
                }
              },
              {
                "name": "first",
                "type": {
                  "kind": "SCALAR",
                  "name": "Any"
                }
              },
              {
                "name": "from",
                "type": {
                  "kind": "SCALAR",
                  "name": "Any"
                }
              },
              {
                "name": "last",
                "type": {
                  "kind": "SCALAR",
                  "name": "Any"
                }
              },
              {
                "name": "skip",
                "type": {
                  "kind": "SCALAR",
                  "name": "Any"
                }
              },
              {
                "name": "to",
                "type": {
                  "kind": "NON_NULL",
                  "ofType": {
                    "kind": "LIST",
                    "ofType": {
                      "kind": "NON_NULL",
                      "ofType": {
                        "kind": "SCALAR",
                        "name": "Any"
                      }
                    }
                  }
                }
              },
              {
                "name": "where",
                "type": {
                  "kind": "SCALAR",
                  "name": "Any"
                }
              }
            ]
          },
          {
            "name": "publishOrder",
            "type": {
              "kind": "OBJECT",
              "name": "Order",
              "ofType": null
            },
            "args": [
              {
                "name": "to",
                "type": {
                  "kind": "NON_NULL",
                  "ofType": {
                    "kind": "LIST",
                    "ofType": {
                      "kind": "NON_NULL",
                      "ofType": {
                        "kind": "SCALAR",
                        "name": "Any"
                      }
                    }
                  }
                }
              },
              {
                "name": "where",
                "type": {
                  "kind": "NON_NULL",
                  "ofType": {
                    "kind": "SCALAR",
                    "name": "Any"
                  }
                }
              }
            ]
          },
          {
            "name": "publishOrderItem",
            "type": {
              "kind": "OBJECT",
              "name": "OrderItem",
              "ofType": null
            },
            "args": [
              {
                "name": "to",
                "type": {
                  "kind": "NON_NULL",
                  "ofType": {
                    "kind": "LIST",
                    "ofType": {
                      "kind": "NON_NULL",
                      "ofType": {
                        "kind": "SCALAR",
                        "name": "Any"
                      }
                    }
                  }
                }
              },
              {
                "name": "where",
                "type": {
                  "kind": "NON_NULL",
                  "ofType": {
                    "kind": "SCALAR",
                    "name": "Any"
                  }
                }
              }
            ]
          },
          {
            "name": "publishProduct",
            "type": {
              "kind": "OBJECT",
              "name": "Product",
              "ofType": null
            },
            "args": [
              {
                "name": "to",
                "type": {
                  "kind": "NON_NULL",
                  "ofType": {
                    "kind": "LIST",
                    "ofType": {
                      "kind": "NON_NULL",
                      "ofType": {
                        "kind": "SCALAR",
                        "name": "Any"
                      }
                    }
                  }
                }
              },
              {
                "name": "where",
                "type": {
                  "kind": "NON_NULL",
                  "ofType": {
                    "kind": "SCALAR",
                    "name": "Any"
                  }
                }
              }
            ]
          },
          {
            "name": "publishProductVariantColor",
            "type": {
              "kind": "OBJECT",
              "name": "ProductVariantColor",
              "ofType": null
            },
            "args": [
              {
                "name": "to",
                "type": {
                  "kind": "NON_NULL",
                  "ofType": {
                    "kind": "LIST",
                    "ofType": {
                      "kind": "NON_NULL",
                      "ofType": {
                        "kind": "SCALAR",
                        "name": "Any"
                      }
                    }
                  }
                }
              },
              {
                "name": "where",
                "type": {
                  "kind": "NON_NULL",
                  "ofType": {
                    "kind": "SCALAR",
                    "name": "Any"
                  }
                }
              }
            ]
          },
          {
            "name": "schedulePublishAsset",
            "type": {
              "kind": "OBJECT",
              "name": "Asset",
              "ofType": null
            },
            "args": [
              {
                "name": "locales",
                "type": {
                  "kind": "LIST",
                  "ofType": {
                    "kind": "NON_NULL",
                    "ofType": {
                      "kind": "SCALAR",
                      "name": "Any"
                    }
                  }
                }
              },
              {
                "name": "publishBase",
                "type": {
                  "kind": "SCALAR",
                  "name": "Any"
                }
              },
              {
                "name": "releaseAt",
                "type": {
                  "kind": "SCALAR",
                  "name": "Any"
                }
              },
              {
                "name": "releaseId",
                "type": {
                  "kind": "SCALAR",
                  "name": "Any"
                }
              },
              {
                "name": "to",
                "type": {
                  "kind": "NON_NULL",
                  "ofType": {
                    "kind": "LIST",
                    "ofType": {
                      "kind": "NON_NULL",
                      "ofType": {
                        "kind": "SCALAR",
                        "name": "Any"
                      }
                    }
                  }
                }
              },
              {
                "name": "where",
                "type": {
                  "kind": "NON_NULL",
                  "ofType": {
                    "kind": "SCALAR",
                    "name": "Any"
                  }
                }
              },
              {
                "name": "withDefaultLocale",
                "type": {
                  "kind": "SCALAR",
                  "name": "Any"
                }
              }
            ]
          },
          {
            "name": "schedulePublishCategory",
            "type": {
              "kind": "OBJECT",
              "name": "Category",
              "ofType": null
            },
            "args": [
              {
                "name": "releaseAt",
                "type": {
                  "kind": "SCALAR",
                  "name": "Any"
                }
              },
              {
                "name": "releaseId",
                "type": {
                  "kind": "SCALAR",
                  "name": "Any"
                }
              },
              {
                "name": "to",
                "type": {
                  "kind": "NON_NULL",
                  "ofType": {
                    "kind": "LIST",
                    "ofType": {
                      "kind": "NON_NULL",
                      "ofType": {
                        "kind": "SCALAR",
                        "name": "Any"
                      }
                    }
                  }
                }
              },
              {
                "name": "where",
                "type": {
                  "kind": "NON_NULL",
                  "ofType": {
                    "kind": "SCALAR",
                    "name": "Any"
                  }
                }
              }
            ]
          },
          {
            "name": "schedulePublishConfig",
            "type": {
              "kind": "OBJECT",
              "name": "Config",
              "ofType": null
            },
            "args": [
              {
                "name": "releaseAt",
                "type": {
                  "kind": "SCALAR",
                  "name": "Any"
                }
              },
              {
                "name": "releaseId",
                "type": {
                  "kind": "SCALAR",
                  "name": "Any"
                }
              },
              {
                "name": "to",
                "type": {
                  "kind": "NON_NULL",
                  "ofType": {
                    "kind": "LIST",
                    "ofType": {
                      "kind": "NON_NULL",
                      "ofType": {
                        "kind": "SCALAR",
                        "name": "Any"
                      }
                    }
                  }
                }
              },
              {
                "name": "where",
                "type": {
                  "kind": "NON_NULL",
                  "ofType": {
                    "kind": "SCALAR",
                    "name": "Any"
                  }
                }
              }
            ]
          },
          {
            "name": "schedulePublishCustomer",
            "type": {
              "kind": "OBJECT",
              "name": "Customer",
              "ofType": null
            },
            "args": [
              {
                "name": "releaseAt",
                "type": {
                  "kind": "SCALAR",
                  "name": "Any"
                }
              },
              {
                "name": "releaseId",
                "type": {
                  "kind": "SCALAR",
                  "name": "Any"
                }
              },
              {
                "name": "to",
                "type": {
                  "kind": "NON_NULL",
                  "ofType": {
                    "kind": "LIST",
                    "ofType": {
                      "kind": "NON_NULL",
                      "ofType": {
                        "kind": "SCALAR",
                        "name": "Any"
                      }
                    }
                  }
                }
              },
              {
                "name": "where",
                "type": {
                  "kind": "NON_NULL",
                  "ofType": {
                    "kind": "SCALAR",
                    "name": "Any"
                  }
                }
              }
            ]
          },
          {
            "name": "schedulePublishOrder",
            "type": {
              "kind": "OBJECT",
              "name": "Order",
              "ofType": null
            },
            "args": [
              {
                "name": "releaseAt",
                "type": {
                  "kind": "SCALAR",
                  "name": "Any"
                }
              },
              {
                "name": "releaseId",
                "type": {
                  "kind": "SCALAR",
                  "name": "Any"
                }
              },
              {
                "name": "to",
                "type": {
                  "kind": "NON_NULL",
                  "ofType": {
                    "kind": "LIST",
                    "ofType": {
                      "kind": "NON_NULL",
                      "ofType": {
                        "kind": "SCALAR",
                        "name": "Any"
                      }
                    }
                  }
                }
              },
              {
                "name": "where",
                "type": {
                  "kind": "NON_NULL",
                  "ofType": {
                    "kind": "SCALAR",
                    "name": "Any"
                  }
                }
              }
            ]
          },
          {
            "name": "schedulePublishOrderItem",
            "type": {
              "kind": "OBJECT",
              "name": "OrderItem",
              "ofType": null
            },
            "args": [
              {
                "name": "releaseAt",
                "type": {
                  "kind": "SCALAR",
                  "name": "Any"
                }
              },
              {
                "name": "releaseId",
                "type": {
                  "kind": "SCALAR",
                  "name": "Any"
                }
              },
              {
                "name": "to",
                "type": {
                  "kind": "NON_NULL",
                  "ofType": {
                    "kind": "LIST",
                    "ofType": {
                      "kind": "NON_NULL",
                      "ofType": {
                        "kind": "SCALAR",
                        "name": "Any"
                      }
                    }
                  }
                }
              },
              {
                "name": "where",
                "type": {
                  "kind": "NON_NULL",
                  "ofType": {
                    "kind": "SCALAR",
                    "name": "Any"
                  }
                }
              }
            ]
          },
          {
            "name": "schedulePublishProduct",
            "type": {
              "kind": "OBJECT",
              "name": "Product",
              "ofType": null
            },
            "args": [
              {
                "name": "releaseAt",
                "type": {
                  "kind": "SCALAR",
                  "name": "Any"
                }
              },
              {
                "name": "releaseId",
                "type": {
                  "kind": "SCALAR",
                  "name": "Any"
                }
              },
              {
                "name": "to",
                "type": {
                  "kind": "NON_NULL",
                  "ofType": {
                    "kind": "LIST",
                    "ofType": {
                      "kind": "NON_NULL",
                      "ofType": {
                        "kind": "SCALAR",
                        "name": "Any"
                      }
                    }
                  }
                }
              },
              {
                "name": "where",
                "type": {
                  "kind": "NON_NULL",
                  "ofType": {
                    "kind": "SCALAR",
                    "name": "Any"
                  }
                }
              }
            ]
          },
          {
            "name": "schedulePublishProductVariantColor",
            "type": {
              "kind": "OBJECT",
              "name": "ProductVariantColor",
              "ofType": null
            },
            "args": [
              {
                "name": "releaseAt",
                "type": {
                  "kind": "SCALAR",
                  "name": "Any"
                }
              },
              {
                "name": "releaseId",
                "type": {
                  "kind": "SCALAR",
                  "name": "Any"
                }
              },
              {
                "name": "to",
                "type": {
                  "kind": "NON_NULL",
                  "ofType": {
                    "kind": "LIST",
                    "ofType": {
                      "kind": "NON_NULL",
                      "ofType": {
                        "kind": "SCALAR",
                        "name": "Any"
                      }
                    }
                  }
                }
              },
              {
                "name": "where",
                "type": {
                  "kind": "NON_NULL",
                  "ofType": {
                    "kind": "SCALAR",
                    "name": "Any"
                  }
                }
              }
            ]
          },
          {
            "name": "scheduleUnpublishAsset",
            "type": {
              "kind": "OBJECT",
              "name": "Asset",
              "ofType": null
            },
            "args": [
              {
                "name": "from",
                "type": {
                  "kind": "NON_NULL",
                  "ofType": {
                    "kind": "LIST",
                    "ofType": {
                      "kind": "NON_NULL",
                      "ofType": {
                        "kind": "SCALAR",
                        "name": "Any"
                      }
                    }
                  }
                }
              },
              {
                "name": "locales",
                "type": {
                  "kind": "LIST",
                  "ofType": {
                    "kind": "NON_NULL",
                    "ofType": {
                      "kind": "SCALAR",
                      "name": "Any"
                    }
                  }
                }
              },
              {
                "name": "releaseAt",
                "type": {
                  "kind": "SCALAR",
                  "name": "Any"
                }
              },
              {
                "name": "releaseId",
                "type": {
                  "kind": "SCALAR",
                  "name": "Any"
                }
              },
              {
                "name": "unpublishBase",
                "type": {
                  "kind": "SCALAR",
                  "name": "Any"
                }
              },
              {
                "name": "where",
                "type": {
                  "kind": "NON_NULL",
                  "ofType": {
                    "kind": "SCALAR",
                    "name": "Any"
                  }
                }
              }
            ]
          },
          {
            "name": "scheduleUnpublishCategory",
            "type": {
              "kind": "OBJECT",
              "name": "Category",
              "ofType": null
            },
            "args": [
              {
                "name": "from",
                "type": {
                  "kind": "NON_NULL",
                  "ofType": {
                    "kind": "LIST",
                    "ofType": {
                      "kind": "NON_NULL",
                      "ofType": {
                        "kind": "SCALAR",
                        "name": "Any"
                      }
                    }
                  }
                }
              },
              {
                "name": "releaseAt",
                "type": {
                  "kind": "SCALAR",
                  "name": "Any"
                }
              },
              {
                "name": "releaseId",
                "type": {
                  "kind": "SCALAR",
                  "name": "Any"
                }
              },
              {
                "name": "where",
                "type": {
                  "kind": "NON_NULL",
                  "ofType": {
                    "kind": "SCALAR",
                    "name": "Any"
                  }
                }
              }
            ]
          },
          {
            "name": "scheduleUnpublishConfig",
            "type": {
              "kind": "OBJECT",
              "name": "Config",
              "ofType": null
            },
            "args": [
              {
                "name": "from",
                "type": {
                  "kind": "NON_NULL",
                  "ofType": {
                    "kind": "LIST",
                    "ofType": {
                      "kind": "NON_NULL",
                      "ofType": {
                        "kind": "SCALAR",
                        "name": "Any"
                      }
                    }
                  }
                }
              },
              {
                "name": "releaseAt",
                "type": {
                  "kind": "SCALAR",
                  "name": "Any"
                }
              },
              {
                "name": "releaseId",
                "type": {
                  "kind": "SCALAR",
                  "name": "Any"
                }
              },
              {
                "name": "where",
                "type": {
                  "kind": "NON_NULL",
                  "ofType": {
                    "kind": "SCALAR",
                    "name": "Any"
                  }
                }
              }
            ]
          },
          {
            "name": "scheduleUnpublishCustomer",
            "type": {
              "kind": "OBJECT",
              "name": "Customer",
              "ofType": null
            },
            "args": [
              {
                "name": "from",
                "type": {
                  "kind": "NON_NULL",
                  "ofType": {
                    "kind": "LIST",
                    "ofType": {
                      "kind": "NON_NULL",
                      "ofType": {
                        "kind": "SCALAR",
                        "name": "Any"
                      }
                    }
                  }
                }
              },
              {
                "name": "releaseAt",
                "type": {
                  "kind": "SCALAR",
                  "name": "Any"
                }
              },
              {
                "name": "releaseId",
                "type": {
                  "kind": "SCALAR",
                  "name": "Any"
                }
              },
              {
                "name": "where",
                "type": {
                  "kind": "NON_NULL",
                  "ofType": {
                    "kind": "SCALAR",
                    "name": "Any"
                  }
                }
              }
            ]
          },
          {
            "name": "scheduleUnpublishOrder",
            "type": {
              "kind": "OBJECT",
              "name": "Order",
              "ofType": null
            },
            "args": [
              {
                "name": "from",
                "type": {
                  "kind": "NON_NULL",
                  "ofType": {
                    "kind": "LIST",
                    "ofType": {
                      "kind": "NON_NULL",
                      "ofType": {
                        "kind": "SCALAR",
                        "name": "Any"
                      }
                    }
                  }
                }
              },
              {
                "name": "releaseAt",
                "type": {
                  "kind": "SCALAR",
                  "name": "Any"
                }
              },
              {
                "name": "releaseId",
                "type": {
                  "kind": "SCALAR",
                  "name": "Any"
                }
              },
              {
                "name": "where",
                "type": {
                  "kind": "NON_NULL",
                  "ofType": {
                    "kind": "SCALAR",
                    "name": "Any"
                  }
                }
              }
            ]
          },
          {
            "name": "scheduleUnpublishOrderItem",
            "type": {
              "kind": "OBJECT",
              "name": "OrderItem",
              "ofType": null
            },
            "args": [
              {
                "name": "from",
                "type": {
                  "kind": "NON_NULL",
                  "ofType": {
                    "kind": "LIST",
                    "ofType": {
                      "kind": "NON_NULL",
                      "ofType": {
                        "kind": "SCALAR",
                        "name": "Any"
                      }
                    }
                  }
                }
              },
              {
                "name": "releaseAt",
                "type": {
                  "kind": "SCALAR",
                  "name": "Any"
                }
              },
              {
                "name": "releaseId",
                "type": {
                  "kind": "SCALAR",
                  "name": "Any"
                }
              },
              {
                "name": "where",
                "type": {
                  "kind": "NON_NULL",
                  "ofType": {
                    "kind": "SCALAR",
                    "name": "Any"
                  }
                }
              }
            ]
          },
          {
            "name": "scheduleUnpublishProduct",
            "type": {
              "kind": "OBJECT",
              "name": "Product",
              "ofType": null
            },
            "args": [
              {
                "name": "from",
                "type": {
                  "kind": "NON_NULL",
                  "ofType": {
                    "kind": "LIST",
                    "ofType": {
                      "kind": "NON_NULL",
                      "ofType": {
                        "kind": "SCALAR",
                        "name": "Any"
                      }
                    }
                  }
                }
              },
              {
                "name": "releaseAt",
                "type": {
                  "kind": "SCALAR",
                  "name": "Any"
                }
              },
              {
                "name": "releaseId",
                "type": {
                  "kind": "SCALAR",
                  "name": "Any"
                }
              },
              {
                "name": "where",
                "type": {
                  "kind": "NON_NULL",
                  "ofType": {
                    "kind": "SCALAR",
                    "name": "Any"
                  }
                }
              }
            ]
          },
          {
            "name": "scheduleUnpublishProductVariantColor",
            "type": {
              "kind": "OBJECT",
              "name": "ProductVariantColor",
              "ofType": null
            },
            "args": [
              {
                "name": "from",
                "type": {
                  "kind": "NON_NULL",
                  "ofType": {
                    "kind": "LIST",
                    "ofType": {
                      "kind": "NON_NULL",
                      "ofType": {
                        "kind": "SCALAR",
                        "name": "Any"
                      }
                    }
                  }
                }
              },
              {
                "name": "releaseAt",
                "type": {
                  "kind": "SCALAR",
                  "name": "Any"
                }
              },
              {
                "name": "releaseId",
                "type": {
                  "kind": "SCALAR",
                  "name": "Any"
                }
              },
              {
                "name": "where",
                "type": {
                  "kind": "NON_NULL",
                  "ofType": {
                    "kind": "SCALAR",
                    "name": "Any"
                  }
                }
              }
            ]
          },
          {
            "name": "unpublishAsset",
            "type": {
              "kind": "OBJECT",
              "name": "Asset",
              "ofType": null
            },
            "args": [
              {
                "name": "from",
                "type": {
                  "kind": "NON_NULL",
                  "ofType": {
                    "kind": "LIST",
                    "ofType": {
                      "kind": "NON_NULL",
                      "ofType": {
                        "kind": "SCALAR",
                        "name": "Any"
                      }
                    }
                  }
                }
              },
              {
                "name": "locales",
                "type": {
                  "kind": "LIST",
                  "ofType": {
                    "kind": "NON_NULL",
                    "ofType": {
                      "kind": "SCALAR",
                      "name": "Any"
                    }
                  }
                }
              },
              {
                "name": "unpublishBase",
                "type": {
                  "kind": "SCALAR",
                  "name": "Any"
                }
              },
              {
                "name": "where",
                "type": {
                  "kind": "NON_NULL",
                  "ofType": {
                    "kind": "SCALAR",
                    "name": "Any"
                  }
                }
              }
            ]
          },
          {
            "name": "unpublishCategory",
            "type": {
              "kind": "OBJECT",
              "name": "Category",
              "ofType": null
            },
            "args": [
              {
                "name": "from",
                "type": {
                  "kind": "NON_NULL",
                  "ofType": {
                    "kind": "LIST",
                    "ofType": {
                      "kind": "NON_NULL",
                      "ofType": {
                        "kind": "SCALAR",
                        "name": "Any"
                      }
                    }
                  }
                }
              },
              {
                "name": "where",
                "type": {
                  "kind": "NON_NULL",
                  "ofType": {
                    "kind": "SCALAR",
                    "name": "Any"
                  }
                }
              }
            ]
          },
          {
            "name": "unpublishConfig",
            "type": {
              "kind": "OBJECT",
              "name": "Config",
              "ofType": null
            },
            "args": [
              {
                "name": "from",
                "type": {
                  "kind": "NON_NULL",
                  "ofType": {
                    "kind": "LIST",
                    "ofType": {
                      "kind": "NON_NULL",
                      "ofType": {
                        "kind": "SCALAR",
                        "name": "Any"
                      }
                    }
                  }
                }
              },
              {
                "name": "where",
                "type": {
                  "kind": "NON_NULL",
                  "ofType": {
                    "kind": "SCALAR",
                    "name": "Any"
                  }
                }
              }
            ]
          },
          {
            "name": "unpublishCustomer",
            "type": {
              "kind": "OBJECT",
              "name": "Customer",
              "ofType": null
            },
            "args": [
              {
                "name": "from",
                "type": {
                  "kind": "NON_NULL",
                  "ofType": {
                    "kind": "LIST",
                    "ofType": {
                      "kind": "NON_NULL",
                      "ofType": {
                        "kind": "SCALAR",
                        "name": "Any"
                      }
                    }
                  }
                }
              },
              {
                "name": "where",
                "type": {
                  "kind": "NON_NULL",
                  "ofType": {
                    "kind": "SCALAR",
                    "name": "Any"
                  }
                }
              }
            ]
          },
          {
            "name": "unpublishManyAssets",
            "type": {
              "kind": "NON_NULL",
              "ofType": {
                "kind": "OBJECT",
                "name": "BatchPayload",
                "ofType": null
              }
            },
            "args": [
              {
                "name": "from",
                "type": {
                  "kind": "NON_NULL",
                  "ofType": {
                    "kind": "LIST",
                    "ofType": {
                      "kind": "NON_NULL",
                      "ofType": {
                        "kind": "SCALAR",
                        "name": "Any"
                      }
                    }
                  }
                }
              },
              {
                "name": "locales",
                "type": {
                  "kind": "LIST",
                  "ofType": {
                    "kind": "NON_NULL",
                    "ofType": {
                      "kind": "SCALAR",
                      "name": "Any"
                    }
                  }
                }
              },
              {
                "name": "unpublishBase",
                "type": {
                  "kind": "SCALAR",
                  "name": "Any"
                }
              },
              {
                "name": "where",
                "type": {
                  "kind": "SCALAR",
                  "name": "Any"
                }
              }
            ]
          },
          {
            "name": "unpublishManyAssetsConnection",
            "type": {
              "kind": "NON_NULL",
              "ofType": {
                "kind": "OBJECT",
                "name": "AssetConnection",
                "ofType": null
              }
            },
            "args": [
              {
                "name": "after",
                "type": {
                  "kind": "SCALAR",
                  "name": "Any"
                }
              },
              {
                "name": "before",
                "type": {
                  "kind": "SCALAR",
                  "name": "Any"
                }
              },
              {
                "name": "first",
                "type": {
                  "kind": "SCALAR",
                  "name": "Any"
                }
              },
              {
                "name": "from",
                "type": {
                  "kind": "NON_NULL",
                  "ofType": {
                    "kind": "LIST",
                    "ofType": {
                      "kind": "NON_NULL",
                      "ofType": {
                        "kind": "SCALAR",
                        "name": "Any"
                      }
                    }
                  }
                }
              },
              {
                "name": "last",
                "type": {
                  "kind": "SCALAR",
                  "name": "Any"
                }
              },
              {
                "name": "locales",
                "type": {
                  "kind": "LIST",
                  "ofType": {
                    "kind": "NON_NULL",
                    "ofType": {
                      "kind": "SCALAR",
                      "name": "Any"
                    }
                  }
                }
              },
              {
                "name": "skip",
                "type": {
                  "kind": "SCALAR",
                  "name": "Any"
                }
              },
              {
                "name": "stage",
                "type": {
                  "kind": "SCALAR",
                  "name": "Any"
                }
              },
              {
                "name": "unpublishBase",
                "type": {
                  "kind": "SCALAR",
                  "name": "Any"
                }
              },
              {
                "name": "where",
                "type": {
                  "kind": "SCALAR",
                  "name": "Any"
                }
              }
            ]
          },
          {
            "name": "unpublishManyCategories",
            "type": {
              "kind": "NON_NULL",
              "ofType": {
                "kind": "OBJECT",
                "name": "BatchPayload",
                "ofType": null
              }
            },
            "args": [
              {
                "name": "from",
                "type": {
                  "kind": "NON_NULL",
                  "ofType": {
                    "kind": "LIST",
                    "ofType": {
                      "kind": "NON_NULL",
                      "ofType": {
                        "kind": "SCALAR",
                        "name": "Any"
                      }
                    }
                  }
                }
              },
              {
                "name": "where",
                "type": {
                  "kind": "SCALAR",
                  "name": "Any"
                }
              }
            ]
          },
          {
            "name": "unpublishManyCategoriesConnection",
            "type": {
              "kind": "NON_NULL",
              "ofType": {
                "kind": "OBJECT",
                "name": "CategoryConnection",
                "ofType": null
              }
            },
            "args": [
              {
                "name": "after",
                "type": {
                  "kind": "SCALAR",
                  "name": "Any"
                }
              },
              {
                "name": "before",
                "type": {
                  "kind": "SCALAR",
                  "name": "Any"
                }
              },
              {
                "name": "first",
                "type": {
                  "kind": "SCALAR",
                  "name": "Any"
                }
              },
              {
                "name": "from",
                "type": {
                  "kind": "NON_NULL",
                  "ofType": {
                    "kind": "LIST",
                    "ofType": {
                      "kind": "NON_NULL",
                      "ofType": {
                        "kind": "SCALAR",
                        "name": "Any"
                      }
                    }
                  }
                }
              },
              {
                "name": "last",
                "type": {
                  "kind": "SCALAR",
                  "name": "Any"
                }
              },
              {
                "name": "skip",
                "type": {
                  "kind": "SCALAR",
                  "name": "Any"
                }
              },
              {
                "name": "stage",
                "type": {
                  "kind": "SCALAR",
                  "name": "Any"
                }
              },
              {
                "name": "where",
                "type": {
                  "kind": "SCALAR",
                  "name": "Any"
                }
              }
            ]
          },
          {
            "name": "unpublishManyConfigs",
            "type": {
              "kind": "NON_NULL",
              "ofType": {
                "kind": "OBJECT",
                "name": "BatchPayload",
                "ofType": null
              }
            },
            "args": [
              {
                "name": "from",
                "type": {
                  "kind": "NON_NULL",
                  "ofType": {
                    "kind": "LIST",
                    "ofType": {
                      "kind": "NON_NULL",
                      "ofType": {
                        "kind": "SCALAR",
                        "name": "Any"
                      }
                    }
                  }
                }
              },
              {
                "name": "where",
                "type": {
                  "kind": "SCALAR",
                  "name": "Any"
                }
              }
            ]
          },
          {
            "name": "unpublishManyConfigsConnection",
            "type": {
              "kind": "NON_NULL",
              "ofType": {
                "kind": "OBJECT",
                "name": "ConfigConnection",
                "ofType": null
              }
            },
            "args": [
              {
                "name": "after",
                "type": {
                  "kind": "SCALAR",
                  "name": "Any"
                }
              },
              {
                "name": "before",
                "type": {
                  "kind": "SCALAR",
                  "name": "Any"
                }
              },
              {
                "name": "first",
                "type": {
                  "kind": "SCALAR",
                  "name": "Any"
                }
              },
              {
                "name": "from",
                "type": {
                  "kind": "NON_NULL",
                  "ofType": {
                    "kind": "LIST",
                    "ofType": {
                      "kind": "NON_NULL",
                      "ofType": {
                        "kind": "SCALAR",
                        "name": "Any"
                      }
                    }
                  }
                }
              },
              {
                "name": "last",
                "type": {
                  "kind": "SCALAR",
                  "name": "Any"
                }
              },
              {
                "name": "skip",
                "type": {
                  "kind": "SCALAR",
                  "name": "Any"
                }
              },
              {
                "name": "stage",
                "type": {
                  "kind": "SCALAR",
                  "name": "Any"
                }
              },
              {
                "name": "where",
                "type": {
                  "kind": "SCALAR",
                  "name": "Any"
                }
              }
            ]
          },
          {
            "name": "unpublishManyCustomers",
            "type": {
              "kind": "NON_NULL",
              "ofType": {
                "kind": "OBJECT",
                "name": "BatchPayload",
                "ofType": null
              }
            },
            "args": [
              {
                "name": "from",
                "type": {
                  "kind": "NON_NULL",
                  "ofType": {
                    "kind": "LIST",
                    "ofType": {
                      "kind": "NON_NULL",
                      "ofType": {
                        "kind": "SCALAR",
                        "name": "Any"
                      }
                    }
                  }
                }
              },
              {
                "name": "where",
                "type": {
                  "kind": "SCALAR",
                  "name": "Any"
                }
              }
            ]
          },
          {
            "name": "unpublishManyCustomersConnection",
            "type": {
              "kind": "NON_NULL",
              "ofType": {
                "kind": "OBJECT",
                "name": "CustomerConnection",
                "ofType": null
              }
            },
            "args": [
              {
                "name": "after",
                "type": {
                  "kind": "SCALAR",
                  "name": "Any"
                }
              },
              {
                "name": "before",
                "type": {
                  "kind": "SCALAR",
                  "name": "Any"
                }
              },
              {
                "name": "first",
                "type": {
                  "kind": "SCALAR",
                  "name": "Any"
                }
              },
              {
                "name": "from",
                "type": {
                  "kind": "NON_NULL",
                  "ofType": {
                    "kind": "LIST",
                    "ofType": {
                      "kind": "NON_NULL",
                      "ofType": {
                        "kind": "SCALAR",
                        "name": "Any"
                      }
                    }
                  }
                }
              },
              {
                "name": "last",
                "type": {
                  "kind": "SCALAR",
                  "name": "Any"
                }
              },
              {
                "name": "skip",
                "type": {
                  "kind": "SCALAR",
                  "name": "Any"
                }
              },
              {
                "name": "stage",
                "type": {
                  "kind": "SCALAR",
                  "name": "Any"
                }
              },
              {
                "name": "where",
                "type": {
                  "kind": "SCALAR",
                  "name": "Any"
                }
              }
            ]
          },
          {
            "name": "unpublishManyOrderItems",
            "type": {
              "kind": "NON_NULL",
              "ofType": {
                "kind": "OBJECT",
                "name": "BatchPayload",
                "ofType": null
              }
            },
            "args": [
              {
                "name": "from",
                "type": {
                  "kind": "NON_NULL",
                  "ofType": {
                    "kind": "LIST",
                    "ofType": {
                      "kind": "NON_NULL",
                      "ofType": {
                        "kind": "SCALAR",
                        "name": "Any"
                      }
                    }
                  }
                }
              },
              {
                "name": "where",
                "type": {
                  "kind": "SCALAR",
                  "name": "Any"
                }
              }
            ]
          },
          {
            "name": "unpublishManyOrderItemsConnection",
            "type": {
              "kind": "NON_NULL",
              "ofType": {
                "kind": "OBJECT",
                "name": "OrderItemConnection",
                "ofType": null
              }
            },
            "args": [
              {
                "name": "after",
                "type": {
                  "kind": "SCALAR",
                  "name": "Any"
                }
              },
              {
                "name": "before",
                "type": {
                  "kind": "SCALAR",
                  "name": "Any"
                }
              },
              {
                "name": "first",
                "type": {
                  "kind": "SCALAR",
                  "name": "Any"
                }
              },
              {
                "name": "from",
                "type": {
                  "kind": "NON_NULL",
                  "ofType": {
                    "kind": "LIST",
                    "ofType": {
                      "kind": "NON_NULL",
                      "ofType": {
                        "kind": "SCALAR",
                        "name": "Any"
                      }
                    }
                  }
                }
              },
              {
                "name": "last",
                "type": {
                  "kind": "SCALAR",
                  "name": "Any"
                }
              },
              {
                "name": "skip",
                "type": {
                  "kind": "SCALAR",
                  "name": "Any"
                }
              },
              {
                "name": "stage",
                "type": {
                  "kind": "SCALAR",
                  "name": "Any"
                }
              },
              {
                "name": "where",
                "type": {
                  "kind": "SCALAR",
                  "name": "Any"
                }
              }
            ]
          },
          {
            "name": "unpublishManyOrders",
            "type": {
              "kind": "NON_NULL",
              "ofType": {
                "kind": "OBJECT",
                "name": "BatchPayload",
                "ofType": null
              }
            },
            "args": [
              {
                "name": "from",
                "type": {
                  "kind": "NON_NULL",
                  "ofType": {
                    "kind": "LIST",
                    "ofType": {
                      "kind": "NON_NULL",
                      "ofType": {
                        "kind": "SCALAR",
                        "name": "Any"
                      }
                    }
                  }
                }
              },
              {
                "name": "where",
                "type": {
                  "kind": "SCALAR",
                  "name": "Any"
                }
              }
            ]
          },
          {
            "name": "unpublishManyOrdersConnection",
            "type": {
              "kind": "NON_NULL",
              "ofType": {
                "kind": "OBJECT",
                "name": "OrderConnection",
                "ofType": null
              }
            },
            "args": [
              {
                "name": "after",
                "type": {
                  "kind": "SCALAR",
                  "name": "Any"
                }
              },
              {
                "name": "before",
                "type": {
                  "kind": "SCALAR",
                  "name": "Any"
                }
              },
              {
                "name": "first",
                "type": {
                  "kind": "SCALAR",
                  "name": "Any"
                }
              },
              {
                "name": "from",
                "type": {
                  "kind": "NON_NULL",
                  "ofType": {
                    "kind": "LIST",
                    "ofType": {
                      "kind": "NON_NULL",
                      "ofType": {
                        "kind": "SCALAR",
                        "name": "Any"
                      }
                    }
                  }
                }
              },
              {
                "name": "last",
                "type": {
                  "kind": "SCALAR",
                  "name": "Any"
                }
              },
              {
                "name": "skip",
                "type": {
                  "kind": "SCALAR",
                  "name": "Any"
                }
              },
              {
                "name": "stage",
                "type": {
                  "kind": "SCALAR",
                  "name": "Any"
                }
              },
              {
                "name": "where",
                "type": {
                  "kind": "SCALAR",
                  "name": "Any"
                }
              }
            ]
          },
          {
            "name": "unpublishManyProductVariantColors",
            "type": {
              "kind": "NON_NULL",
              "ofType": {
                "kind": "OBJECT",
                "name": "BatchPayload",
                "ofType": null
              }
            },
            "args": [
              {
                "name": "from",
                "type": {
                  "kind": "NON_NULL",
                  "ofType": {
                    "kind": "LIST",
                    "ofType": {
                      "kind": "NON_NULL",
                      "ofType": {
                        "kind": "SCALAR",
                        "name": "Any"
                      }
                    }
                  }
                }
              },
              {
                "name": "where",
                "type": {
                  "kind": "SCALAR",
                  "name": "Any"
                }
              }
            ]
          },
          {
            "name": "unpublishManyProductVariantColorsConnection",
            "type": {
              "kind": "NON_NULL",
              "ofType": {
                "kind": "OBJECT",
                "name": "ProductVariantColorConnection",
                "ofType": null
              }
            },
            "args": [
              {
                "name": "after",
                "type": {
                  "kind": "SCALAR",
                  "name": "Any"
                }
              },
              {
                "name": "before",
                "type": {
                  "kind": "SCALAR",
                  "name": "Any"
                }
              },
              {
                "name": "first",
                "type": {
                  "kind": "SCALAR",
                  "name": "Any"
                }
              },
              {
                "name": "from",
                "type": {
                  "kind": "NON_NULL",
                  "ofType": {
                    "kind": "LIST",
                    "ofType": {
                      "kind": "NON_NULL",
                      "ofType": {
                        "kind": "SCALAR",
                        "name": "Any"
                      }
                    }
                  }
                }
              },
              {
                "name": "last",
                "type": {
                  "kind": "SCALAR",
                  "name": "Any"
                }
              },
              {
                "name": "skip",
                "type": {
                  "kind": "SCALAR",
                  "name": "Any"
                }
              },
              {
                "name": "stage",
                "type": {
                  "kind": "SCALAR",
                  "name": "Any"
                }
              },
              {
                "name": "where",
                "type": {
                  "kind": "SCALAR",
                  "name": "Any"
                }
              }
            ]
          },
          {
            "name": "unpublishManyProducts",
            "type": {
              "kind": "NON_NULL",
              "ofType": {
                "kind": "OBJECT",
                "name": "BatchPayload",
                "ofType": null
              }
            },
            "args": [
              {
                "name": "from",
                "type": {
                  "kind": "NON_NULL",
                  "ofType": {
                    "kind": "LIST",
                    "ofType": {
                      "kind": "NON_NULL",
                      "ofType": {
                        "kind": "SCALAR",
                        "name": "Any"
                      }
                    }
                  }
                }
              },
              {
                "name": "where",
                "type": {
                  "kind": "SCALAR",
                  "name": "Any"
                }
              }
            ]
          },
          {
            "name": "unpublishManyProductsConnection",
            "type": {
              "kind": "NON_NULL",
              "ofType": {
                "kind": "OBJECT",
                "name": "ProductConnection",
                "ofType": null
              }
            },
            "args": [
              {
                "name": "after",
                "type": {
                  "kind": "SCALAR",
                  "name": "Any"
                }
              },
              {
                "name": "before",
                "type": {
                  "kind": "SCALAR",
                  "name": "Any"
                }
              },
              {
                "name": "first",
                "type": {
                  "kind": "SCALAR",
                  "name": "Any"
                }
              },
              {
                "name": "from",
                "type": {
                  "kind": "NON_NULL",
                  "ofType": {
                    "kind": "LIST",
                    "ofType": {
                      "kind": "NON_NULL",
                      "ofType": {
                        "kind": "SCALAR",
                        "name": "Any"
                      }
                    }
                  }
                }
              },
              {
                "name": "last",
                "type": {
                  "kind": "SCALAR",
                  "name": "Any"
                }
              },
              {
                "name": "skip",
                "type": {
                  "kind": "SCALAR",
                  "name": "Any"
                }
              },
              {
                "name": "stage",
                "type": {
                  "kind": "SCALAR",
                  "name": "Any"
                }
              },
              {
                "name": "where",
                "type": {
                  "kind": "SCALAR",
                  "name": "Any"
                }
              }
            ]
          },
          {
            "name": "unpublishOrder",
            "type": {
              "kind": "OBJECT",
              "name": "Order",
              "ofType": null
            },
            "args": [
              {
                "name": "from",
                "type": {
                  "kind": "NON_NULL",
                  "ofType": {
                    "kind": "LIST",
                    "ofType": {
                      "kind": "NON_NULL",
                      "ofType": {
                        "kind": "SCALAR",
                        "name": "Any"
                      }
                    }
                  }
                }
              },
              {
                "name": "where",
                "type": {
                  "kind": "NON_NULL",
                  "ofType": {
                    "kind": "SCALAR",
                    "name": "Any"
                  }
                }
              }
            ]
          },
          {
            "name": "unpublishOrderItem",
            "type": {
              "kind": "OBJECT",
              "name": "OrderItem",
              "ofType": null
            },
            "args": [
              {
                "name": "from",
                "type": {
                  "kind": "NON_NULL",
                  "ofType": {
                    "kind": "LIST",
                    "ofType": {
                      "kind": "NON_NULL",
                      "ofType": {
                        "kind": "SCALAR",
                        "name": "Any"
                      }
                    }
                  }
                }
              },
              {
                "name": "where",
                "type": {
                  "kind": "NON_NULL",
                  "ofType": {
                    "kind": "SCALAR",
                    "name": "Any"
                  }
                }
              }
            ]
          },
          {
            "name": "unpublishProduct",
            "type": {
              "kind": "OBJECT",
              "name": "Product",
              "ofType": null
            },
            "args": [
              {
                "name": "from",
                "type": {
                  "kind": "NON_NULL",
                  "ofType": {
                    "kind": "LIST",
                    "ofType": {
                      "kind": "NON_NULL",
                      "ofType": {
                        "kind": "SCALAR",
                        "name": "Any"
                      }
                    }
                  }
                }
              },
              {
                "name": "where",
                "type": {
                  "kind": "NON_NULL",
                  "ofType": {
                    "kind": "SCALAR",
                    "name": "Any"
                  }
                }
              }
            ]
          },
          {
            "name": "unpublishProductVariantColor",
            "type": {
              "kind": "OBJECT",
              "name": "ProductVariantColor",
              "ofType": null
            },
            "args": [
              {
                "name": "from",
                "type": {
                  "kind": "NON_NULL",
                  "ofType": {
                    "kind": "LIST",
                    "ofType": {
                      "kind": "NON_NULL",
                      "ofType": {
                        "kind": "SCALAR",
                        "name": "Any"
                      }
                    }
                  }
                }
              },
              {
                "name": "where",
                "type": {
                  "kind": "NON_NULL",
                  "ofType": {
                    "kind": "SCALAR",
                    "name": "Any"
                  }
                }
              }
            ]
          },
          {
            "name": "updateAsset",
            "type": {
              "kind": "OBJECT",
              "name": "Asset",
              "ofType": null
            },
            "args": [
              {
                "name": "data",
                "type": {
                  "kind": "NON_NULL",
                  "ofType": {
                    "kind": "SCALAR",
                    "name": "Any"
                  }
                }
              },
              {
                "name": "where",
                "type": {
                  "kind": "NON_NULL",
                  "ofType": {
                    "kind": "SCALAR",
                    "name": "Any"
                  }
                }
              }
            ]
          },
          {
            "name": "updateCategory",
            "type": {
              "kind": "OBJECT",
              "name": "Category",
              "ofType": null
            },
            "args": [
              {
                "name": "data",
                "type": {
                  "kind": "NON_NULL",
                  "ofType": {
                    "kind": "SCALAR",
                    "name": "Any"
                  }
                }
              },
              {
                "name": "where",
                "type": {
                  "kind": "NON_NULL",
                  "ofType": {
                    "kind": "SCALAR",
                    "name": "Any"
                  }
                }
              }
            ]
          },
          {
            "name": "updateConfig",
            "type": {
              "kind": "OBJECT",
              "name": "Config",
              "ofType": null
            },
            "args": [
              {
                "name": "data",
                "type": {
                  "kind": "NON_NULL",
                  "ofType": {
                    "kind": "SCALAR",
                    "name": "Any"
                  }
                }
              },
              {
                "name": "where",
                "type": {
                  "kind": "NON_NULL",
                  "ofType": {
                    "kind": "SCALAR",
                    "name": "Any"
                  }
                }
              }
            ]
          },
          {
            "name": "updateCustomer",
            "type": {
              "kind": "OBJECT",
              "name": "Customer",
              "ofType": null
            },
            "args": [
              {
                "name": "data",
                "type": {
                  "kind": "NON_NULL",
                  "ofType": {
                    "kind": "SCALAR",
                    "name": "Any"
                  }
                }
              },
              {
                "name": "where",
                "type": {
                  "kind": "NON_NULL",
                  "ofType": {
                    "kind": "SCALAR",
                    "name": "Any"
                  }
                }
              }
            ]
          },
          {
            "name": "updateManyAssets",
            "type": {
              "kind": "NON_NULL",
              "ofType": {
                "kind": "OBJECT",
                "name": "BatchPayload",
                "ofType": null
              }
            },
            "args": [
              {
                "name": "data",
                "type": {
                  "kind": "NON_NULL",
                  "ofType": {
                    "kind": "SCALAR",
                    "name": "Any"
                  }
                }
              },
              {
                "name": "where",
                "type": {
                  "kind": "SCALAR",
                  "name": "Any"
                }
              }
            ]
          },
          {
            "name": "updateManyAssetsConnection",
            "type": {
              "kind": "NON_NULL",
              "ofType": {
                "kind": "OBJECT",
                "name": "AssetConnection",
                "ofType": null
              }
            },
            "args": [
              {
                "name": "after",
                "type": {
                  "kind": "SCALAR",
                  "name": "Any"
                }
              },
              {
                "name": "before",
                "type": {
                  "kind": "SCALAR",
                  "name": "Any"
                }
              },
              {
                "name": "data",
                "type": {
                  "kind": "NON_NULL",
                  "ofType": {
                    "kind": "SCALAR",
                    "name": "Any"
                  }
                }
              },
              {
                "name": "first",
                "type": {
                  "kind": "SCALAR",
                  "name": "Any"
                }
              },
              {
                "name": "last",
                "type": {
                  "kind": "SCALAR",
                  "name": "Any"
                }
              },
              {
                "name": "skip",
                "type": {
                  "kind": "SCALAR",
                  "name": "Any"
                }
              },
              {
                "name": "where",
                "type": {
                  "kind": "SCALAR",
                  "name": "Any"
                }
              }
            ]
          },
          {
            "name": "updateManyCategories",
            "type": {
              "kind": "NON_NULL",
              "ofType": {
                "kind": "OBJECT",
                "name": "BatchPayload",
                "ofType": null
              }
            },
            "args": [
              {
                "name": "data",
                "type": {
                  "kind": "NON_NULL",
                  "ofType": {
                    "kind": "SCALAR",
                    "name": "Any"
                  }
                }
              },
              {
                "name": "where",
                "type": {
                  "kind": "SCALAR",
                  "name": "Any"
                }
              }
            ]
          },
          {
            "name": "updateManyCategoriesConnection",
            "type": {
              "kind": "NON_NULL",
              "ofType": {
                "kind": "OBJECT",
                "name": "CategoryConnection",
                "ofType": null
              }
            },
            "args": [
              {
                "name": "after",
                "type": {
                  "kind": "SCALAR",
                  "name": "Any"
                }
              },
              {
                "name": "before",
                "type": {
                  "kind": "SCALAR",
                  "name": "Any"
                }
              },
              {
                "name": "data",
                "type": {
                  "kind": "NON_NULL",
                  "ofType": {
                    "kind": "SCALAR",
                    "name": "Any"
                  }
                }
              },
              {
                "name": "first",
                "type": {
                  "kind": "SCALAR",
                  "name": "Any"
                }
              },
              {
                "name": "last",
                "type": {
                  "kind": "SCALAR",
                  "name": "Any"
                }
              },
              {
                "name": "skip",
                "type": {
                  "kind": "SCALAR",
                  "name": "Any"
                }
              },
              {
                "name": "where",
                "type": {
                  "kind": "SCALAR",
                  "name": "Any"
                }
              }
            ]
          },
          {
            "name": "updateManyConfigs",
            "type": {
              "kind": "NON_NULL",
              "ofType": {
                "kind": "OBJECT",
                "name": "BatchPayload",
                "ofType": null
              }
            },
            "args": [
              {
                "name": "data",
                "type": {
                  "kind": "NON_NULL",
                  "ofType": {
                    "kind": "SCALAR",
                    "name": "Any"
                  }
                }
              },
              {
                "name": "where",
                "type": {
                  "kind": "SCALAR",
                  "name": "Any"
                }
              }
            ]
          },
          {
            "name": "updateManyConfigsConnection",
            "type": {
              "kind": "NON_NULL",
              "ofType": {
                "kind": "OBJECT",
                "name": "ConfigConnection",
                "ofType": null
              }
            },
            "args": [
              {
                "name": "after",
                "type": {
                  "kind": "SCALAR",
                  "name": "Any"
                }
              },
              {
                "name": "before",
                "type": {
                  "kind": "SCALAR",
                  "name": "Any"
                }
              },
              {
                "name": "data",
                "type": {
                  "kind": "NON_NULL",
                  "ofType": {
                    "kind": "SCALAR",
                    "name": "Any"
                  }
                }
              },
              {
                "name": "first",
                "type": {
                  "kind": "SCALAR",
                  "name": "Any"
                }
              },
              {
                "name": "last",
                "type": {
                  "kind": "SCALAR",
                  "name": "Any"
                }
              },
              {
                "name": "skip",
                "type": {
                  "kind": "SCALAR",
                  "name": "Any"
                }
              },
              {
                "name": "where",
                "type": {
                  "kind": "SCALAR",
                  "name": "Any"
                }
              }
            ]
          },
          {
            "name": "updateManyCustomers",
            "type": {
              "kind": "NON_NULL",
              "ofType": {
                "kind": "OBJECT",
                "name": "BatchPayload",
                "ofType": null
              }
            },
            "args": [
              {
                "name": "data",
                "type": {
                  "kind": "NON_NULL",
                  "ofType": {
                    "kind": "SCALAR",
                    "name": "Any"
                  }
                }
              },
              {
                "name": "where",
                "type": {
                  "kind": "SCALAR",
                  "name": "Any"
                }
              }
            ]
          },
          {
            "name": "updateManyCustomersConnection",
            "type": {
              "kind": "NON_NULL",
              "ofType": {
                "kind": "OBJECT",
                "name": "CustomerConnection",
                "ofType": null
              }
            },
            "args": [
              {
                "name": "after",
                "type": {
                  "kind": "SCALAR",
                  "name": "Any"
                }
              },
              {
                "name": "before",
                "type": {
                  "kind": "SCALAR",
                  "name": "Any"
                }
              },
              {
                "name": "data",
                "type": {
                  "kind": "NON_NULL",
                  "ofType": {
                    "kind": "SCALAR",
                    "name": "Any"
                  }
                }
              },
              {
                "name": "first",
                "type": {
                  "kind": "SCALAR",
                  "name": "Any"
                }
              },
              {
                "name": "last",
                "type": {
                  "kind": "SCALAR",
                  "name": "Any"
                }
              },
              {
                "name": "skip",
                "type": {
                  "kind": "SCALAR",
                  "name": "Any"
                }
              },
              {
                "name": "where",
                "type": {
                  "kind": "SCALAR",
                  "name": "Any"
                }
              }
            ]
          },
          {
            "name": "updateManyOrderItems",
            "type": {
              "kind": "NON_NULL",
              "ofType": {
                "kind": "OBJECT",
                "name": "BatchPayload",
                "ofType": null
              }
            },
            "args": [
              {
                "name": "data",
                "type": {
                  "kind": "NON_NULL",
                  "ofType": {
                    "kind": "SCALAR",
                    "name": "Any"
                  }
                }
              },
              {
                "name": "where",
                "type": {
                  "kind": "SCALAR",
                  "name": "Any"
                }
              }
            ]
          },
          {
            "name": "updateManyOrderItemsConnection",
            "type": {
              "kind": "NON_NULL",
              "ofType": {
                "kind": "OBJECT",
                "name": "OrderItemConnection",
                "ofType": null
              }
            },
            "args": [
              {
                "name": "after",
                "type": {
                  "kind": "SCALAR",
                  "name": "Any"
                }
              },
              {
                "name": "before",
                "type": {
                  "kind": "SCALAR",
                  "name": "Any"
                }
              },
              {
                "name": "data",
                "type": {
                  "kind": "NON_NULL",
                  "ofType": {
                    "kind": "SCALAR",
                    "name": "Any"
                  }
                }
              },
              {
                "name": "first",
                "type": {
                  "kind": "SCALAR",
                  "name": "Any"
                }
              },
              {
                "name": "last",
                "type": {
                  "kind": "SCALAR",
                  "name": "Any"
                }
              },
              {
                "name": "skip",
                "type": {
                  "kind": "SCALAR",
                  "name": "Any"
                }
              },
              {
                "name": "where",
                "type": {
                  "kind": "SCALAR",
                  "name": "Any"
                }
              }
            ]
          },
          {
            "name": "updateManyOrders",
            "type": {
              "kind": "NON_NULL",
              "ofType": {
                "kind": "OBJECT",
                "name": "BatchPayload",
                "ofType": null
              }
            },
            "args": [
              {
                "name": "data",
                "type": {
                  "kind": "NON_NULL",
                  "ofType": {
                    "kind": "SCALAR",
                    "name": "Any"
                  }
                }
              },
              {
                "name": "where",
                "type": {
                  "kind": "SCALAR",
                  "name": "Any"
                }
              }
            ]
          },
          {
            "name": "updateManyOrdersConnection",
            "type": {
              "kind": "NON_NULL",
              "ofType": {
                "kind": "OBJECT",
                "name": "OrderConnection",
                "ofType": null
              }
            },
            "args": [
              {
                "name": "after",
                "type": {
                  "kind": "SCALAR",
                  "name": "Any"
                }
              },
              {
                "name": "before",
                "type": {
                  "kind": "SCALAR",
                  "name": "Any"
                }
              },
              {
                "name": "data",
                "type": {
                  "kind": "NON_NULL",
                  "ofType": {
                    "kind": "SCALAR",
                    "name": "Any"
                  }
                }
              },
              {
                "name": "first",
                "type": {
                  "kind": "SCALAR",
                  "name": "Any"
                }
              },
              {
                "name": "last",
                "type": {
                  "kind": "SCALAR",
                  "name": "Any"
                }
              },
              {
                "name": "skip",
                "type": {
                  "kind": "SCALAR",
                  "name": "Any"
                }
              },
              {
                "name": "where",
                "type": {
                  "kind": "SCALAR",
                  "name": "Any"
                }
              }
            ]
          },
          {
            "name": "updateManyProductVariantColors",
            "type": {
              "kind": "NON_NULL",
              "ofType": {
                "kind": "OBJECT",
                "name": "BatchPayload",
                "ofType": null
              }
            },
            "args": [
              {
                "name": "data",
                "type": {
                  "kind": "NON_NULL",
                  "ofType": {
                    "kind": "SCALAR",
                    "name": "Any"
                  }
                }
              },
              {
                "name": "where",
                "type": {
                  "kind": "SCALAR",
                  "name": "Any"
                }
              }
            ]
          },
          {
            "name": "updateManyProductVariantColorsConnection",
            "type": {
              "kind": "NON_NULL",
              "ofType": {
                "kind": "OBJECT",
                "name": "ProductVariantColorConnection",
                "ofType": null
              }
            },
            "args": [
              {
                "name": "after",
                "type": {
                  "kind": "SCALAR",
                  "name": "Any"
                }
              },
              {
                "name": "before",
                "type": {
                  "kind": "SCALAR",
                  "name": "Any"
                }
              },
              {
                "name": "data",
                "type": {
                  "kind": "NON_NULL",
                  "ofType": {
                    "kind": "SCALAR",
                    "name": "Any"
                  }
                }
              },
              {
                "name": "first",
                "type": {
                  "kind": "SCALAR",
                  "name": "Any"
                }
              },
              {
                "name": "last",
                "type": {
                  "kind": "SCALAR",
                  "name": "Any"
                }
              },
              {
                "name": "skip",
                "type": {
                  "kind": "SCALAR",
                  "name": "Any"
                }
              },
              {
                "name": "where",
                "type": {
                  "kind": "SCALAR",
                  "name": "Any"
                }
              }
            ]
          },
          {
            "name": "updateManyProducts",
            "type": {
              "kind": "NON_NULL",
              "ofType": {
                "kind": "OBJECT",
                "name": "BatchPayload",
                "ofType": null
              }
            },
            "args": [
              {
                "name": "data",
                "type": {
                  "kind": "NON_NULL",
                  "ofType": {
                    "kind": "SCALAR",
                    "name": "Any"
                  }
                }
              },
              {
                "name": "where",
                "type": {
                  "kind": "SCALAR",
                  "name": "Any"
                }
              }
            ]
          },
          {
            "name": "updateManyProductsConnection",
            "type": {
              "kind": "NON_NULL",
              "ofType": {
                "kind": "OBJECT",
                "name": "ProductConnection",
                "ofType": null
              }
            },
            "args": [
              {
                "name": "after",
                "type": {
                  "kind": "SCALAR",
                  "name": "Any"
                }
              },
              {
                "name": "before",
                "type": {
                  "kind": "SCALAR",
                  "name": "Any"
                }
              },
              {
                "name": "data",
                "type": {
                  "kind": "NON_NULL",
                  "ofType": {
                    "kind": "SCALAR",
                    "name": "Any"
                  }
                }
              },
              {
                "name": "first",
                "type": {
                  "kind": "SCALAR",
                  "name": "Any"
                }
              },
              {
                "name": "last",
                "type": {
                  "kind": "SCALAR",
                  "name": "Any"
                }
              },
              {
                "name": "skip",
                "type": {
                  "kind": "SCALAR",
                  "name": "Any"
                }
              },
              {
                "name": "where",
                "type": {
                  "kind": "SCALAR",
                  "name": "Any"
                }
              }
            ]
          },
          {
            "name": "updateOrder",
            "type": {
              "kind": "OBJECT",
              "name": "Order",
              "ofType": null
            },
            "args": [
              {
                "name": "data",
                "type": {
                  "kind": "NON_NULL",
                  "ofType": {
                    "kind": "SCALAR",
                    "name": "Any"
                  }
                }
              },
              {
                "name": "where",
                "type": {
                  "kind": "NON_NULL",
                  "ofType": {
                    "kind": "SCALAR",
                    "name": "Any"
                  }
                }
              }
            ]
          },
          {
            "name": "updateOrderItem",
            "type": {
              "kind": "OBJECT",
              "name": "OrderItem",
              "ofType": null
            },
            "args": [
              {
                "name": "data",
                "type": {
                  "kind": "NON_NULL",
                  "ofType": {
                    "kind": "SCALAR",
                    "name": "Any"
                  }
                }
              },
              {
                "name": "where",
                "type": {
                  "kind": "NON_NULL",
                  "ofType": {
                    "kind": "SCALAR",
                    "name": "Any"
                  }
                }
              }
            ]
          },
          {
            "name": "updateProduct",
            "type": {
              "kind": "OBJECT",
              "name": "Product",
              "ofType": null
            },
            "args": [
              {
                "name": "data",
                "type": {
                  "kind": "NON_NULL",
                  "ofType": {
                    "kind": "SCALAR",
                    "name": "Any"
                  }
                }
              },
              {
                "name": "where",
                "type": {
                  "kind": "NON_NULL",
                  "ofType": {
                    "kind": "SCALAR",
                    "name": "Any"
                  }
                }
              }
            ]
          },
          {
            "name": "updateProductVariantColor",
            "type": {
              "kind": "OBJECT",
              "name": "ProductVariantColor",
              "ofType": null
            },
            "args": [
              {
                "name": "data",
                "type": {
                  "kind": "NON_NULL",
                  "ofType": {
                    "kind": "SCALAR",
                    "name": "Any"
                  }
                }
              },
              {
                "name": "where",
                "type": {
                  "kind": "NON_NULL",
                  "ofType": {
                    "kind": "SCALAR",
                    "name": "Any"
                  }
                }
              }
            ]
          },
          {
            "name": "updateScheduledRelease",
            "type": {
              "kind": "OBJECT",
              "name": "ScheduledRelease",
              "ofType": null
            },
            "args": [
              {
                "name": "data",
                "type": {
                  "kind": "NON_NULL",
                  "ofType": {
                    "kind": "SCALAR",
                    "name": "Any"
                  }
                }
              },
              {
                "name": "where",
                "type": {
                  "kind": "NON_NULL",
                  "ofType": {
                    "kind": "SCALAR",
                    "name": "Any"
                  }
                }
              }
            ]
          },
          {
            "name": "upsertAsset",
            "type": {
              "kind": "OBJECT",
              "name": "Asset",
              "ofType": null
            },
            "args": [
              {
                "name": "upsert",
                "type": {
                  "kind": "NON_NULL",
                  "ofType": {
                    "kind": "SCALAR",
                    "name": "Any"
                  }
                }
              },
              {
                "name": "where",
                "type": {
                  "kind": "NON_NULL",
                  "ofType": {
                    "kind": "SCALAR",
                    "name": "Any"
                  }
                }
              }
            ]
          },
          {
            "name": "upsertCategory",
            "type": {
              "kind": "OBJECT",
              "name": "Category",
              "ofType": null
            },
            "args": [
              {
                "name": "upsert",
                "type": {
                  "kind": "NON_NULL",
                  "ofType": {
                    "kind": "SCALAR",
                    "name": "Any"
                  }
                }
              },
              {
                "name": "where",
                "type": {
                  "kind": "NON_NULL",
                  "ofType": {
                    "kind": "SCALAR",
                    "name": "Any"
                  }
                }
              }
            ]
          },
          {
            "name": "upsertConfig",
            "type": {
              "kind": "OBJECT",
              "name": "Config",
              "ofType": null
            },
            "args": [
              {
                "name": "upsert",
                "type": {
                  "kind": "NON_NULL",
                  "ofType": {
                    "kind": "SCALAR",
                    "name": "Any"
                  }
                }
              },
              {
                "name": "where",
                "type": {
                  "kind": "NON_NULL",
                  "ofType": {
                    "kind": "SCALAR",
                    "name": "Any"
                  }
                }
              }
            ]
          },
          {
            "name": "upsertCustomer",
            "type": {
              "kind": "OBJECT",
              "name": "Customer",
              "ofType": null
            },
            "args": [
              {
                "name": "upsert",
                "type": {
                  "kind": "NON_NULL",
                  "ofType": {
                    "kind": "SCALAR",
                    "name": "Any"
                  }
                }
              },
              {
                "name": "where",
                "type": {
                  "kind": "NON_NULL",
                  "ofType": {
                    "kind": "SCALAR",
                    "name": "Any"
                  }
                }
              }
            ]
          },
          {
            "name": "upsertOrder",
            "type": {
              "kind": "OBJECT",
              "name": "Order",
              "ofType": null
            },
            "args": [
              {
                "name": "upsert",
                "type": {
                  "kind": "NON_NULL",
                  "ofType": {
                    "kind": "SCALAR",
                    "name": "Any"
                  }
                }
              },
              {
                "name": "where",
                "type": {
                  "kind": "NON_NULL",
                  "ofType": {
                    "kind": "SCALAR",
                    "name": "Any"
                  }
                }
              }
            ]
          },
          {
            "name": "upsertOrderItem",
            "type": {
              "kind": "OBJECT",
              "name": "OrderItem",
              "ofType": null
            },
            "args": [
              {
                "name": "upsert",
                "type": {
                  "kind": "NON_NULL",
                  "ofType": {
                    "kind": "SCALAR",
                    "name": "Any"
                  }
                }
              },
              {
                "name": "where",
                "type": {
                  "kind": "NON_NULL",
                  "ofType": {
                    "kind": "SCALAR",
                    "name": "Any"
                  }
                }
              }
            ]
          },
          {
            "name": "upsertProduct",
            "type": {
              "kind": "OBJECT",
              "name": "Product",
              "ofType": null
            },
            "args": [
              {
                "name": "upsert",
                "type": {
                  "kind": "NON_NULL",
                  "ofType": {
                    "kind": "SCALAR",
                    "name": "Any"
                  }
                }
              },
              {
                "name": "where",
                "type": {
                  "kind": "NON_NULL",
                  "ofType": {
                    "kind": "SCALAR",
                    "name": "Any"
                  }
                }
              }
            ]
          },
          {
            "name": "upsertProductVariantColor",
            "type": {
              "kind": "OBJECT",
              "name": "ProductVariantColor",
              "ofType": null
            },
            "args": [
              {
                "name": "upsert",
                "type": {
                  "kind": "NON_NULL",
                  "ofType": {
                    "kind": "SCALAR",
                    "name": "Any"
                  }
                }
              },
              {
                "name": "where",
                "type": {
                  "kind": "NON_NULL",
                  "ofType": {
                    "kind": "SCALAR",
                    "name": "Any"
                  }
                }
              }
            ]
          }
        ],
        "interfaces": []
      },
      {
        "kind": "INTERFACE",
        "name": "Node",
        "fields": [
          {
            "name": "id",
            "type": {
              "kind": "NON_NULL",
              "ofType": {
                "kind": "SCALAR",
                "name": "Any"
              }
            },
            "args": []
          },
          {
            "name": "stage",
            "type": {
              "kind": "NON_NULL",
              "ofType": {
                "kind": "SCALAR",
                "name": "Any"
              }
            },
            "args": []
          }
        ],
        "interfaces": [],
        "possibleTypes": [
          {
            "kind": "OBJECT",
            "name": "Asset"
          },
          {
            "kind": "OBJECT",
            "name": "Category"
          },
          {
            "kind": "OBJECT",
            "name": "Config"
          },
          {
            "kind": "OBJECT",
            "name": "Customer"
          },
          {
            "kind": "OBJECT",
            "name": "Order"
          },
          {
            "kind": "OBJECT",
            "name": "OrderItem"
          },
          {
            "kind": "OBJECT",
            "name": "Product"
          },
          {
            "kind": "OBJECT",
            "name": "ProductVariantColor"
          },
          {
            "kind": "OBJECT",
            "name": "ScheduledOperation"
          },
          {
            "kind": "OBJECT",
            "name": "ScheduledRelease"
          },
          {
            "kind": "OBJECT",
            "name": "User"
          }
        ]
      },
      {
        "kind": "OBJECT",
        "name": "Order",
        "fields": [
          {
            "name": "createdAt",
            "type": {
              "kind": "NON_NULL",
              "ofType": {
                "kind": "SCALAR",
                "name": "Any"
              }
            },
            "args": []
          },
          {
            "name": "createdBy",
            "type": {
              "kind": "OBJECT",
              "name": "User",
              "ofType": null
            },
            "args": [
              {
                "name": "locales",
                "type": {
                  "kind": "LIST",
                  "ofType": {
                    "kind": "NON_NULL",
                    "ofType": {
                      "kind": "SCALAR",
                      "name": "Any"
                    }
                  }
                }
              }
            ]
          },
          {
            "name": "customer",
            "type": {
              "kind": "OBJECT",
              "name": "Customer",
              "ofType": null
            },
            "args": [
              {
                "name": "locales",
                "type": {
                  "kind": "LIST",
                  "ofType": {
                    "kind": "NON_NULL",
                    "ofType": {
                      "kind": "SCALAR",
                      "name": "Any"
                    }
                  }
                }
              }
            ]
          },
          {
            "name": "documentInStages",
            "type": {
              "kind": "NON_NULL",
              "ofType": {
                "kind": "LIST",
                "ofType": {
                  "kind": "NON_NULL",
                  "ofType": {
                    "kind": "OBJECT",
                    "name": "Order",
                    "ofType": null
                  }
                }
              }
            },
            "args": [
              {
                "name": "includeCurrent",
                "type": {
                  "kind": "NON_NULL",
                  "ofType": {
                    "kind": "SCALAR",
                    "name": "Any"
                  }
                }
              },
              {
                "name": "inheritLocale",
                "type": {
                  "kind": "NON_NULL",
                  "ofType": {
                    "kind": "SCALAR",
                    "name": "Any"
                  }
                }
              },
              {
                "name": "stages",
                "type": {
                  "kind": "NON_NULL",
                  "ofType": {
                    "kind": "LIST",
                    "ofType": {
                      "kind": "NON_NULL",
                      "ofType": {
                        "kind": "SCALAR",
                        "name": "Any"
                      }
                    }
                  }
                }
              }
            ]
          },
          {
            "name": "history",
            "type": {
              "kind": "NON_NULL",
              "ofType": {
                "kind": "LIST",
                "ofType": {
                  "kind": "NON_NULL",
                  "ofType": {
                    "kind": "OBJECT",
                    "name": "Version",
                    "ofType": null
                  }
                }
              }
            },
            "args": [
              {
                "name": "limit",
                "type": {
                  "kind": "NON_NULL",
                  "ofType": {
                    "kind": "SCALAR",
                    "name": "Any"
                  }
                }
              },
              {
                "name": "skip",
                "type": {
                  "kind": "NON_NULL",
                  "ofType": {
                    "kind": "SCALAR",
                    "name": "Any"
                  }
                }
              },
              {
                "name": "stageOverride",
                "type": {
                  "kind": "SCALAR",
                  "name": "Any"
                }
              }
            ]
          },
          {
            "name": "id",
            "type": {
              "kind": "NON_NULL",
              "ofType": {
                "kind": "SCALAR",
                "name": "Any"
              }
            },
            "args": []
          },
          {
            "name": "orderItems",
            "type": {
              "kind": "NON_NULL",
              "ofType": {
                "kind": "LIST",
                "ofType": {
                  "kind": "NON_NULL",
                  "ofType": {
                    "kind": "OBJECT",
                    "name": "OrderItem",
                    "ofType": null
                  }
                }
              }
            },
            "args": [
              {
                "name": "after",
                "type": {
                  "kind": "SCALAR",
                  "name": "Any"
                }
              },
              {
                "name": "before",
                "type": {
                  "kind": "SCALAR",
                  "name": "Any"
                }
              },
              {
                "name": "first",
                "type": {
                  "kind": "SCALAR",
                  "name": "Any"
                }
              },
              {
                "name": "last",
                "type": {
                  "kind": "SCALAR",
                  "name": "Any"
                }
              },
              {
                "name": "locales",
                "type": {
                  "kind": "LIST",
                  "ofType": {
                    "kind": "NON_NULL",
                    "ofType": {
                      "kind": "SCALAR",
                      "name": "Any"
                    }
                  }
                }
              },
              {
                "name": "orderBy",
                "type": {
                  "kind": "SCALAR",
                  "name": "Any"
                }
              },
              {
                "name": "skip",
                "type": {
                  "kind": "SCALAR",
                  "name": "Any"
                }
              },
              {
                "name": "where",
                "type": {
                  "kind": "SCALAR",
                  "name": "Any"
                }
              }
            ]
          },
          {
            "name": "publishedAt",
            "type": {
              "kind": "SCALAR",
              "name": "Any"
            },
            "args": []
          },
          {
            "name": "publishedBy",
            "type": {
              "kind": "OBJECT",
              "name": "User",
              "ofType": null
            },
            "args": [
              {
                "name": "locales",
                "type": {
                  "kind": "LIST",
                  "ofType": {
                    "kind": "NON_NULL",
                    "ofType": {
                      "kind": "SCALAR",
                      "name": "Any"
                    }
                  }
                }
              }
            ]
          },
          {
            "name": "scheduledIn",
            "type": {
              "kind": "NON_NULL",
              "ofType": {
                "kind": "LIST",
                "ofType": {
                  "kind": "NON_NULL",
                  "ofType": {
                    "kind": "OBJECT",
                    "name": "ScheduledOperation",
                    "ofType": null
                  }
                }
              }
            },
            "args": [
              {
                "name": "after",
                "type": {
                  "kind": "SCALAR",
                  "name": "Any"
                }
              },
              {
                "name": "before",
                "type": {
                  "kind": "SCALAR",
                  "name": "Any"
                }
              },
              {
                "name": "first",
                "type": {
                  "kind": "SCALAR",
                  "name": "Any"
                }
              },
              {
                "name": "last",
                "type": {
                  "kind": "SCALAR",
                  "name": "Any"
                }
              },
              {
                "name": "locales",
                "type": {
                  "kind": "LIST",
                  "ofType": {
                    "kind": "NON_NULL",
                    "ofType": {
                      "kind": "SCALAR",
                      "name": "Any"
                    }
                  }
                }
              },
              {
                "name": "skip",
                "type": {
                  "kind": "SCALAR",
                  "name": "Any"
                }
              },
              {
                "name": "where",
                "type": {
                  "kind": "SCALAR",
                  "name": "Any"
                }
              }
            ]
          },
          {
            "name": "stage",
            "type": {
              "kind": "NON_NULL",
              "ofType": {
                "kind": "SCALAR",
                "name": "Any"
              }
            },
            "args": []
          },
          {
            "name": "stripeCheckoutId",
            "type": {
              "kind": "NON_NULL",
              "ofType": {
                "kind": "SCALAR",
                "name": "Any"
              }
            },
            "args": []
          },
          {
            "name": "total",
            "type": {
              "kind": "NON_NULL",
              "ofType": {
                "kind": "SCALAR",
                "name": "Any"
              }
            },
            "args": []
          },
          {
            "name": "updatedAt",
            "type": {
              "kind": "NON_NULL",
              "ofType": {
                "kind": "SCALAR",
                "name": "Any"
              }
            },
            "args": []
          },
          {
            "name": "updatedBy",
            "type": {
              "kind": "OBJECT",
              "name": "User",
              "ofType": null
            },
            "args": [
              {
                "name": "locales",
                "type": {
                  "kind": "LIST",
                  "ofType": {
                    "kind": "NON_NULL",
                    "ofType": {
                      "kind": "SCALAR",
                      "name": "Any"
                    }
                  }
                }
              }
            ]
          }
        ],
        "interfaces": [
          {
            "kind": "INTERFACE",
            "name": "Node"
          }
        ]
      },
      {
        "kind": "OBJECT",
        "name": "OrderConnection",
        "fields": [
          {
            "name": "aggregate",
            "type": {
              "kind": "NON_NULL",
              "ofType": {
                "kind": "OBJECT",
                "name": "Aggregate",
                "ofType": null
              }
            },
            "args": []
          },
          {
            "name": "edges",
            "type": {
              "kind": "NON_NULL",
              "ofType": {
                "kind": "LIST",
                "ofType": {
                  "kind": "NON_NULL",
                  "ofType": {
                    "kind": "OBJECT",
                    "name": "OrderEdge",
                    "ofType": null
                  }
                }
              }
            },
            "args": []
          },
          {
            "name": "pageInfo",
            "type": {
              "kind": "NON_NULL",
              "ofType": {
                "kind": "OBJECT",
                "name": "PageInfo",
                "ofType": null
              }
            },
            "args": []
          }
        ],
        "interfaces": []
      },
      {
        "kind": "OBJECT",
        "name": "OrderEdge",
        "fields": [
          {
            "name": "cursor",
            "type": {
              "kind": "NON_NULL",
              "ofType": {
                "kind": "SCALAR",
                "name": "Any"
              }
            },
            "args": []
          },
          {
            "name": "node",
            "type": {
              "kind": "NON_NULL",
              "ofType": {
                "kind": "OBJECT",
                "name": "Order",
                "ofType": null
              }
            },
            "args": []
          }
        ],
        "interfaces": []
      },
      {
        "kind": "OBJECT",
        "name": "OrderItem",
        "fields": [
          {
            "name": "createdAt",
            "type": {
              "kind": "NON_NULL",
              "ofType": {
                "kind": "SCALAR",
                "name": "Any"
              }
            },
            "args": []
          },
          {
            "name": "createdBy",
            "type": {
              "kind": "OBJECT",
              "name": "User",
              "ofType": null
            },
            "args": [
              {
                "name": "locales",
                "type": {
                  "kind": "LIST",
                  "ofType": {
                    "kind": "NON_NULL",
                    "ofType": {
                      "kind": "SCALAR",
                      "name": "Any"
                    }
                  }
                }
              }
            ]
          },
          {
            "name": "documentInStages",
            "type": {
              "kind": "NON_NULL",
              "ofType": {
                "kind": "LIST",
                "ofType": {
                  "kind": "NON_NULL",
                  "ofType": {
                    "kind": "OBJECT",
                    "name": "OrderItem",
                    "ofType": null
                  }
                }
              }
            },
            "args": [
              {
                "name": "includeCurrent",
                "type": {
                  "kind": "NON_NULL",
                  "ofType": {
                    "kind": "SCALAR",
                    "name": "Any"
                  }
                }
              },
              {
                "name": "inheritLocale",
                "type": {
                  "kind": "NON_NULL",
                  "ofType": {
                    "kind": "SCALAR",
                    "name": "Any"
                  }
                }
              },
              {
                "name": "stages",
                "type": {
                  "kind": "NON_NULL",
                  "ofType": {
                    "kind": "LIST",
                    "ofType": {
                      "kind": "NON_NULL",
                      "ofType": {
                        "kind": "SCALAR",
                        "name": "Any"
                      }
                    }
                  }
                }
              }
            ]
          },
          {
            "name": "history",
            "type": {
              "kind": "NON_NULL",
              "ofType": {
                "kind": "LIST",
                "ofType": {
                  "kind": "NON_NULL",
                  "ofType": {
                    "kind": "OBJECT",
                    "name": "Version",
                    "ofType": null
                  }
                }
              }
            },
            "args": [
              {
                "name": "limit",
                "type": {
                  "kind": "NON_NULL",
                  "ofType": {
                    "kind": "SCALAR",
                    "name": "Any"
                  }
                }
              },
              {
                "name": "skip",
                "type": {
                  "kind": "NON_NULL",
                  "ofType": {
                    "kind": "SCALAR",
                    "name": "Any"
                  }
                }
              },
              {
                "name": "stageOverride",
                "type": {
                  "kind": "SCALAR",
                  "name": "Any"
                }
              }
            ]
          },
          {
            "name": "id",
            "type": {
              "kind": "NON_NULL",
              "ofType": {
                "kind": "SCALAR",
                "name": "Any"
              }
            },
            "args": []
          },
          {
            "name": "order",
            "type": {
              "kind": "OBJECT",
              "name": "Order",
              "ofType": null
            },
            "args": [
              {
                "name": "locales",
                "type": {
                  "kind": "LIST",
                  "ofType": {
                    "kind": "NON_NULL",
                    "ofType": {
                      "kind": "SCALAR",
                      "name": "Any"
                    }
                  }
                }
              }
            ]
          },
          {
            "name": "product",
            "type": {
              "kind": "OBJECT",
              "name": "Product",
              "ofType": null
            },
            "args": [
              {
                "name": "locales",
                "type": {
                  "kind": "LIST",
                  "ofType": {
                    "kind": "NON_NULL",
                    "ofType": {
                      "kind": "SCALAR",
                      "name": "Any"
                    }
                  }
                }
              }
            ]
          },
          {
            "name": "productVariantColor",
            "type": {
              "kind": "OBJECT",
              "name": "ProductVariantColor",
              "ofType": null
            },
            "args": [
              {
                "name": "locales",
                "type": {
                  "kind": "LIST",
                  "ofType": {
                    "kind": "NON_NULL",
                    "ofType": {
                      "kind": "SCALAR",
                      "name": "Any"
                    }
                  }
                }
              }
            ]
          },
          {
            "name": "publishedAt",
            "type": {
              "kind": "SCALAR",
              "name": "Any"
            },
            "args": []
          },
          {
            "name": "publishedBy",
            "type": {
              "kind": "OBJECT",
              "name": "User",
              "ofType": null
            },
            "args": [
              {
                "name": "locales",
                "type": {
                  "kind": "LIST",
                  "ofType": {
                    "kind": "NON_NULL",
                    "ofType": {
                      "kind": "SCALAR",
                      "name": "Any"
                    }
                  }
                }
              }
            ]
          },
          {
            "name": "quantity",
            "type": {
              "kind": "NON_NULL",
              "ofType": {
                "kind": "SCALAR",
                "name": "Any"
              }
            },
            "args": []
          },
          {
            "name": "scheduledIn",
            "type": {
              "kind": "NON_NULL",
              "ofType": {
                "kind": "LIST",
                "ofType": {
                  "kind": "NON_NULL",
                  "ofType": {
                    "kind": "OBJECT",
                    "name": "ScheduledOperation",
                    "ofType": null
                  }
                }
              }
            },
            "args": [
              {
                "name": "after",
                "type": {
                  "kind": "SCALAR",
                  "name": "Any"
                }
              },
              {
                "name": "before",
                "type": {
                  "kind": "SCALAR",
                  "name": "Any"
                }
              },
              {
                "name": "first",
                "type": {
                  "kind": "SCALAR",
                  "name": "Any"
                }
              },
              {
                "name": "last",
                "type": {
                  "kind": "SCALAR",
                  "name": "Any"
                }
              },
              {
                "name": "locales",
                "type": {
                  "kind": "LIST",
                  "ofType": {
                    "kind": "NON_NULL",
                    "ofType": {
                      "kind": "SCALAR",
                      "name": "Any"
                    }
                  }
                }
              },
              {
                "name": "skip",
                "type": {
                  "kind": "SCALAR",
                  "name": "Any"
                }
              },
              {
                "name": "where",
                "type": {
                  "kind": "SCALAR",
                  "name": "Any"
                }
              }
            ]
          },
          {
            "name": "stage",
            "type": {
              "kind": "NON_NULL",
              "ofType": {
                "kind": "SCALAR",
                "name": "Any"
              }
            },
            "args": []
          },
          {
            "name": "total",
            "type": {
              "kind": "NON_NULL",
              "ofType": {
                "kind": "SCALAR",
                "name": "Any"
              }
            },
            "args": []
          },
          {
            "name": "updatedAt",
            "type": {
              "kind": "NON_NULL",
              "ofType": {
                "kind": "SCALAR",
                "name": "Any"
              }
            },
            "args": []
          },
          {
            "name": "updatedBy",
            "type": {
              "kind": "OBJECT",
              "name": "User",
              "ofType": null
            },
            "args": [
              {
                "name": "locales",
                "type": {
                  "kind": "LIST",
                  "ofType": {
                    "kind": "NON_NULL",
                    "ofType": {
                      "kind": "SCALAR",
                      "name": "Any"
                    }
                  }
                }
              }
            ]
          }
        ],
        "interfaces": [
          {
            "kind": "INTERFACE",
            "name": "Node"
          }
        ]
      },
      {
        "kind": "OBJECT",
        "name": "OrderItemConnection",
        "fields": [
          {
            "name": "aggregate",
            "type": {
              "kind": "NON_NULL",
              "ofType": {
                "kind": "OBJECT",
                "name": "Aggregate",
                "ofType": null
              }
            },
            "args": []
          },
          {
            "name": "edges",
            "type": {
              "kind": "NON_NULL",
              "ofType": {
                "kind": "LIST",
                "ofType": {
                  "kind": "NON_NULL",
                  "ofType": {
                    "kind": "OBJECT",
                    "name": "OrderItemEdge",
                    "ofType": null
                  }
                }
              }
            },
            "args": []
          },
          {
            "name": "pageInfo",
            "type": {
              "kind": "NON_NULL",
              "ofType": {
                "kind": "OBJECT",
                "name": "PageInfo",
                "ofType": null
              }
            },
            "args": []
          }
        ],
        "interfaces": []
      },
      {
        "kind": "OBJECT",
        "name": "OrderItemEdge",
        "fields": [
          {
            "name": "cursor",
            "type": {
              "kind": "NON_NULL",
              "ofType": {
                "kind": "SCALAR",
                "name": "Any"
              }
            },
            "args": []
          },
          {
            "name": "node",
            "type": {
              "kind": "NON_NULL",
              "ofType": {
                "kind": "OBJECT",
                "name": "OrderItem",
                "ofType": null
              }
            },
            "args": []
          }
        ],
        "interfaces": []
      },
      {
        "kind": "OBJECT",
        "name": "PageInfo",
        "fields": [
          {
            "name": "endCursor",
            "type": {
              "kind": "SCALAR",
              "name": "Any"
            },
            "args": []
          },
          {
            "name": "hasNextPage",
            "type": {
              "kind": "NON_NULL",
              "ofType": {
                "kind": "SCALAR",
                "name": "Any"
              }
            },
            "args": []
          },
          {
            "name": "hasPreviousPage",
            "type": {
              "kind": "NON_NULL",
              "ofType": {
                "kind": "SCALAR",
                "name": "Any"
              }
            },
            "args": []
          },
          {
            "name": "pageSize",
            "type": {
              "kind": "SCALAR",
              "name": "Any"
            },
            "args": []
          },
          {
            "name": "startCursor",
            "type": {
              "kind": "SCALAR",
              "name": "Any"
            },
            "args": []
          }
        ],
        "interfaces": []
      },
      {
        "kind": "OBJECT",
        "name": "Product",
        "fields": [
          {
            "name": "categories",
            "type": {
              "kind": "NON_NULL",
              "ofType": {
                "kind": "LIST",
                "ofType": {
                  "kind": "NON_NULL",
                  "ofType": {
                    "kind": "OBJECT",
                    "name": "Category",
                    "ofType": null
                  }
                }
              }
            },
            "args": [
              {
                "name": "after",
                "type": {
                  "kind": "SCALAR",
                  "name": "Any"
                }
              },
              {
                "name": "before",
                "type": {
                  "kind": "SCALAR",
                  "name": "Any"
                }
              },
              {
                "name": "first",
                "type": {
                  "kind": "SCALAR",
                  "name": "Any"
                }
              },
              {
                "name": "last",
                "type": {
                  "kind": "SCALAR",
                  "name": "Any"
                }
              },
              {
                "name": "locales",
                "type": {
                  "kind": "LIST",
                  "ofType": {
                    "kind": "NON_NULL",
                    "ofType": {
                      "kind": "SCALAR",
                      "name": "Any"
                    }
                  }
                }
              },
              {
                "name": "orderBy",
                "type": {
                  "kind": "SCALAR",
                  "name": "Any"
                }
              },
              {
                "name": "skip",
                "type": {
                  "kind": "SCALAR",
                  "name": "Any"
                }
              },
              {
                "name": "where",
                "type": {
                  "kind": "SCALAR",
                  "name": "Any"
                }
              }
            ]
          },
          {
            "name": "createdAt",
            "type": {
              "kind": "NON_NULL",
              "ofType": {
                "kind": "SCALAR",
                "name": "Any"
              }
            },
            "args": []
          },
          {
            "name": "createdBy",
            "type": {
              "kind": "OBJECT",
              "name": "User",
              "ofType": null
            },
            "args": [
              {
                "name": "locales",
                "type": {
                  "kind": "LIST",
                  "ofType": {
                    "kind": "NON_NULL",
                    "ofType": {
                      "kind": "SCALAR",
                      "name": "Any"
                    }
                  }
                }
              }
            ]
          },
          {
            "name": "description",
            "type": {
              "kind": "OBJECT",
              "name": "RichText",
              "ofType": null
            },
            "args": []
          },
          {
            "name": "documentInStages",
            "type": {
              "kind": "NON_NULL",
              "ofType": {
                "kind": "LIST",
                "ofType": {
                  "kind": "NON_NULL",
                  "ofType": {
                    "kind": "OBJECT",
                    "name": "Product",
                    "ofType": null
                  }
                }
              }
            },
            "args": [
              {
                "name": "includeCurrent",
                "type": {
                  "kind": "NON_NULL",
                  "ofType": {
                    "kind": "SCALAR",
                    "name": "Any"
                  }
                }
              },
              {
                "name": "inheritLocale",
                "type": {
                  "kind": "NON_NULL",
                  "ofType": {
                    "kind": "SCALAR",
                    "name": "Any"
                  }
                }
              },
              {
                "name": "stages",
                "type": {
                  "kind": "NON_NULL",
                  "ofType": {
                    "kind": "LIST",
                    "ofType": {
                      "kind": "NON_NULL",
                      "ofType": {
                        "kind": "SCALAR",
                        "name": "Any"
                      }
                    }
                  }
                }
              }
            ]
          },
          {
            "name": "history",
            "type": {
              "kind": "NON_NULL",
              "ofType": {
                "kind": "LIST",
                "ofType": {
                  "kind": "NON_NULL",
                  "ofType": {
                    "kind": "OBJECT",
                    "name": "Version",
                    "ofType": null
                  }
                }
              }
            },
            "args": [
              {
                "name": "limit",
                "type": {
                  "kind": "NON_NULL",
                  "ofType": {
                    "kind": "SCALAR",
                    "name": "Any"
                  }
                }
              },
              {
                "name": "skip",
                "type": {
                  "kind": "NON_NULL",
                  "ofType": {
                    "kind": "SCALAR",
                    "name": "Any"
                  }
                }
              },
              {
                "name": "stageOverride",
                "type": {
                  "kind": "SCALAR",
                  "name": "Any"
                }
              }
            ]
          },
          {
            "name": "id",
            "type": {
              "kind": "NON_NULL",
              "ofType": {
                "kind": "SCALAR",
                "name": "Any"
              }
            },
            "args": []
          },
          {
            "name": "image",
            "type": {
              "kind": "NON_NULL",
              "ofType": {
                "kind": "OBJECT",
                "name": "Asset",
                "ofType": null
              }
            },
            "args": [
              {
                "name": "locales",
                "type": {
                  "kind": "LIST",
                  "ofType": {
                    "kind": "NON_NULL",
                    "ofType": {
                      "kind": "SCALAR",
                      "name": "Any"
                    }
                  }
                }
              }
            ]
          },
          {
            "name": "name",
            "type": {
              "kind": "NON_NULL",
              "ofType": {
                "kind": "SCALAR",
                "name": "Any"
              }
            },
            "args": []
          },
          {
            "name": "orderItems",
            "type": {
              "kind": "NON_NULL",
              "ofType": {
                "kind": "LIST",
                "ofType": {
                  "kind": "NON_NULL",
                  "ofType": {
                    "kind": "OBJECT",
                    "name": "OrderItem",
                    "ofType": null
                  }
                }
              }
            },
            "args": [
              {
                "name": "after",
                "type": {
                  "kind": "SCALAR",
                  "name": "Any"
                }
              },
              {
                "name": "before",
                "type": {
                  "kind": "SCALAR",
                  "name": "Any"
                }
              },
              {
                "name": "first",
                "type": {
                  "kind": "SCALAR",
                  "name": "Any"
                }
              },
              {
                "name": "last",
                "type": {
                  "kind": "SCALAR",
                  "name": "Any"
                }
              },
              {
                "name": "locales",
                "type": {
                  "kind": "LIST",
                  "ofType": {
                    "kind": "NON_NULL",
                    "ofType": {
                      "kind": "SCALAR",
                      "name": "Any"
                    }
                  }
                }
              },
              {
                "name": "orderBy",
                "type": {
                  "kind": "SCALAR",
                  "name": "Any"
                }
              },
              {
                "name": "skip",
                "type": {
                  "kind": "SCALAR",
                  "name": "Any"
                }
              },
              {
                "name": "where",
                "type": {
                  "kind": "SCALAR",
                  "name": "Any"
                }
              }
            ]
          },
          {
            "name": "price",
            "type": {
              "kind": "NON_NULL",
              "ofType": {
                "kind": "SCALAR",
                "name": "Any"
              }
            },
            "args": []
          },
          {
            "name": "productVariantColors",
            "type": {
              "kind": "NON_NULL",
              "ofType": {
                "kind": "LIST",
                "ofType": {
                  "kind": "NON_NULL",
                  "ofType": {
                    "kind": "OBJECT",
                    "name": "ProductVariantColor",
                    "ofType": null
                  }
                }
              }
            },
            "args": [
              {
                "name": "after",
                "type": {
                  "kind": "SCALAR",
                  "name": "Any"
                }
              },
              {
                "name": "before",
                "type": {
                  "kind": "SCALAR",
                  "name": "Any"
                }
              },
              {
                "name": "first",
                "type": {
                  "kind": "SCALAR",
                  "name": "Any"
                }
              },
              {
                "name": "last",
                "type": {
                  "kind": "SCALAR",
                  "name": "Any"
                }
              },
              {
                "name": "locales",
                "type": {
                  "kind": "LIST",
                  "ofType": {
                    "kind": "NON_NULL",
                    "ofType": {
                      "kind": "SCALAR",
                      "name": "Any"
                    }
                  }
                }
              },
              {
                "name": "orderBy",
                "type": {
                  "kind": "SCALAR",
                  "name": "Any"
                }
              },
              {
                "name": "skip",
                "type": {
                  "kind": "SCALAR",
                  "name": "Any"
                }
              },
              {
                "name": "where",
                "type": {
                  "kind": "SCALAR",
                  "name": "Any"
                }
              }
            ]
          },
          {
            "name": "publishedAt",
            "type": {
              "kind": "SCALAR",
              "name": "Any"
            },
            "args": []
          },
          {
            "name": "publishedBy",
            "type": {
              "kind": "OBJECT",
              "name": "User",
              "ofType": null
            },
            "args": [
              {
                "name": "locales",
                "type": {
                  "kind": "LIST",
                  "ofType": {
                    "kind": "NON_NULL",
                    "ofType": {
                      "kind": "SCALAR",
                      "name": "Any"
                    }
                  }
                }
              }
            ]
          },
          {
            "name": "scheduledIn",
            "type": {
              "kind": "NON_NULL",
              "ofType": {
                "kind": "LIST",
                "ofType": {
                  "kind": "NON_NULL",
                  "ofType": {
                    "kind": "OBJECT",
                    "name": "ScheduledOperation",
                    "ofType": null
                  }
                }
              }
            },
            "args": [
              {
                "name": "after",
                "type": {
                  "kind": "SCALAR",
                  "name": "Any"
                }
              },
              {
                "name": "before",
                "type": {
                  "kind": "SCALAR",
                  "name": "Any"
                }
              },
              {
                "name": "first",
                "type": {
                  "kind": "SCALAR",
                  "name": "Any"
                }
              },
              {
                "name": "last",
                "type": {
                  "kind": "SCALAR",
                  "name": "Any"
                }
              },
              {
                "name": "locales",
                "type": {
                  "kind": "LIST",
                  "ofType": {
                    "kind": "NON_NULL",
                    "ofType": {
                      "kind": "SCALAR",
                      "name": "Any"
                    }
                  }
                }
              },
              {
                "name": "skip",
                "type": {
                  "kind": "SCALAR",
                  "name": "Any"
                }
              },
              {
                "name": "where",
                "type": {
                  "kind": "SCALAR",
                  "name": "Any"
                }
              }
            ]
          },
          {
            "name": "slug",
            "type": {
              "kind": "SCALAR",
              "name": "Any"
            },
            "args": []
          },
          {
            "name": "stage",
            "type": {
              "kind": "NON_NULL",
              "ofType": {
                "kind": "SCALAR",
                "name": "Any"
              }
            },
            "args": []
          },
          {
            "name": "updatedAt",
            "type": {
              "kind": "NON_NULL",
              "ofType": {
                "kind": "SCALAR",
                "name": "Any"
              }
            },
            "args": []
          },
          {
            "name": "updatedBy",
            "type": {
              "kind": "OBJECT",
              "name": "User",
              "ofType": null
            },
            "args": [
              {
                "name": "locales",
                "type": {
                  "kind": "LIST",
                  "ofType": {
                    "kind": "NON_NULL",
                    "ofType": {
                      "kind": "SCALAR",
                      "name": "Any"
                    }
                  }
                }
              }
            ]
          }
        ],
        "interfaces": [
          {
            "kind": "INTERFACE",
            "name": "Node"
          }
        ]
      },
      {
        "kind": "OBJECT",
        "name": "ProductConnection",
        "fields": [
          {
            "name": "aggregate",
            "type": {
              "kind": "NON_NULL",
              "ofType": {
                "kind": "OBJECT",
                "name": "Aggregate",
                "ofType": null
              }
            },
            "args": []
          },
          {
            "name": "edges",
            "type": {
              "kind": "NON_NULL",
              "ofType": {
                "kind": "LIST",
                "ofType": {
                  "kind": "NON_NULL",
                  "ofType": {
                    "kind": "OBJECT",
                    "name": "ProductEdge",
                    "ofType": null
                  }
                }
              }
            },
            "args": []
          },
          {
            "name": "pageInfo",
            "type": {
              "kind": "NON_NULL",
              "ofType": {
                "kind": "OBJECT",
                "name": "PageInfo",
                "ofType": null
              }
            },
            "args": []
          }
        ],
        "interfaces": []
      },
      {
        "kind": "OBJECT",
        "name": "ProductEdge",
        "fields": [
          {
            "name": "cursor",
            "type": {
              "kind": "NON_NULL",
              "ofType": {
                "kind": "SCALAR",
                "name": "Any"
              }
            },
            "args": []
          },
          {
            "name": "node",
            "type": {
              "kind": "NON_NULL",
              "ofType": {
                "kind": "OBJECT",
                "name": "Product",
                "ofType": null
              }
            },
            "args": []
          }
        ],
        "interfaces": []
      },
      {
        "kind": "OBJECT",
        "name": "ProductVariantColor",
        "fields": [
          {
            "name": "color",
            "type": {
              "kind": "NON_NULL",
              "ofType": {
                "kind": "SCALAR",
                "name": "Any"
              }
            },
            "args": []
          },
          {
            "name": "createdAt",
            "type": {
              "kind": "NON_NULL",
              "ofType": {
                "kind": "SCALAR",
                "name": "Any"
              }
            },
            "args": []
          },
          {
            "name": "createdBy",
            "type": {
              "kind": "OBJECT",
              "name": "User",
              "ofType": null
            },
            "args": [
              {
                "name": "locales",
                "type": {
                  "kind": "LIST",
                  "ofType": {
                    "kind": "NON_NULL",
                    "ofType": {
                      "kind": "SCALAR",
                      "name": "Any"
                    }
                  }
                }
              }
            ]
          },
          {
            "name": "documentInStages",
            "type": {
              "kind": "NON_NULL",
              "ofType": {
                "kind": "LIST",
                "ofType": {
                  "kind": "NON_NULL",
                  "ofType": {
                    "kind": "OBJECT",
                    "name": "ProductVariantColor",
                    "ofType": null
                  }
                }
              }
            },
            "args": [
              {
                "name": "includeCurrent",
                "type": {
                  "kind": "NON_NULL",
                  "ofType": {
                    "kind": "SCALAR",
                    "name": "Any"
                  }
                }
              },
              {
                "name": "inheritLocale",
                "type": {
                  "kind": "NON_NULL",
                  "ofType": {
                    "kind": "SCALAR",
                    "name": "Any"
                  }
                }
              },
              {
                "name": "stages",
                "type": {
                  "kind": "NON_NULL",
                  "ofType": {
                    "kind": "LIST",
                    "ofType": {
                      "kind": "NON_NULL",
                      "ofType": {
                        "kind": "SCALAR",
                        "name": "Any"
                      }
                    }
                  }
                }
              }
            ]
          },
          {
            "name": "hex",
            "type": {
              "kind": "SCALAR",
              "name": "Any"
            },
            "args": []
          },
          {
            "name": "history",
            "type": {
              "kind": "NON_NULL",
              "ofType": {
                "kind": "LIST",
                "ofType": {
                  "kind": "NON_NULL",
                  "ofType": {
                    "kind": "OBJECT",
                    "name": "Version",
                    "ofType": null
                  }
                }
              }
            },
            "args": [
              {
                "name": "limit",
                "type": {
                  "kind": "NON_NULL",
                  "ofType": {
                    "kind": "SCALAR",
                    "name": "Any"
                  }
                }
              },
              {
                "name": "skip",
                "type": {
                  "kind": "NON_NULL",
                  "ofType": {
                    "kind": "SCALAR",
                    "name": "Any"
                  }
                }
              },
              {
                "name": "stageOverride",
                "type": {
                  "kind": "SCALAR",
                  "name": "Any"
                }
              }
            ]
          },
          {
            "name": "id",
            "type": {
              "kind": "NON_NULL",
              "ofType": {
                "kind": "SCALAR",
                "name": "Any"
              }
            },
            "args": []
          },
          {
            "name": "name",
            "type": {
              "kind": "NON_NULL",
              "ofType": {
                "kind": "SCALAR",
                "name": "Any"
              }
            },
            "args": []
          },
          {
            "name": "orderItems",
            "type": {
              "kind": "NON_NULL",
              "ofType": {
                "kind": "LIST",
                "ofType": {
                  "kind": "NON_NULL",
                  "ofType": {
                    "kind": "OBJECT",
                    "name": "OrderItem",
                    "ofType": null
                  }
                }
              }
            },
            "args": [
              {
                "name": "after",
                "type": {
                  "kind": "SCALAR",
                  "name": "Any"
                }
              },
              {
                "name": "before",
                "type": {
                  "kind": "SCALAR",
                  "name": "Any"
                }
              },
              {
                "name": "first",
                "type": {
                  "kind": "SCALAR",
                  "name": "Any"
                }
              },
              {
                "name": "last",
                "type": {
                  "kind": "SCALAR",
                  "name": "Any"
                }
              },
              {
                "name": "locales",
                "type": {
                  "kind": "LIST",
                  "ofType": {
                    "kind": "NON_NULL",
                    "ofType": {
                      "kind": "SCALAR",
                      "name": "Any"
                    }
                  }
                }
              },
              {
                "name": "orderBy",
                "type": {
                  "kind": "SCALAR",
                  "name": "Any"
                }
              },
              {
                "name": "skip",
                "type": {
                  "kind": "SCALAR",
                  "name": "Any"
                }
              },
              {
                "name": "where",
                "type": {
                  "kind": "SCALAR",
                  "name": "Any"
                }
              }
            ]
          },
          {
            "name": "publishedAt",
            "type": {
              "kind": "SCALAR",
              "name": "Any"
            },
            "args": []
          },
          {
            "name": "publishedBy",
            "type": {
              "kind": "OBJECT",
              "name": "User",
              "ofType": null
            },
            "args": [
              {
                "name": "locales",
                "type": {
                  "kind": "LIST",
                  "ofType": {
                    "kind": "NON_NULL",
                    "ofType": {
                      "kind": "SCALAR",
                      "name": "Any"
                    }
                  }
                }
              }
            ]
          },
          {
            "name": "scheduledIn",
            "type": {
              "kind": "NON_NULL",
              "ofType": {
                "kind": "LIST",
                "ofType": {
                  "kind": "NON_NULL",
                  "ofType": {
                    "kind": "OBJECT",
                    "name": "ScheduledOperation",
                    "ofType": null
                  }
                }
              }
            },
            "args": [
              {
                "name": "after",
                "type": {
                  "kind": "SCALAR",
                  "name": "Any"
                }
              },
              {
                "name": "before",
                "type": {
                  "kind": "SCALAR",
                  "name": "Any"
                }
              },
              {
                "name": "first",
                "type": {
                  "kind": "SCALAR",
                  "name": "Any"
                }
              },
              {
                "name": "last",
                "type": {
                  "kind": "SCALAR",
                  "name": "Any"
                }
              },
              {
                "name": "locales",
                "type": {
                  "kind": "LIST",
                  "ofType": {
                    "kind": "NON_NULL",
                    "ofType": {
                      "kind": "SCALAR",
                      "name": "Any"
                    }
                  }
                }
              },
              {
                "name": "skip",
                "type": {
                  "kind": "SCALAR",
                  "name": "Any"
                }
              },
              {
                "name": "where",
                "type": {
                  "kind": "SCALAR",
                  "name": "Any"
                }
              }
            ]
          },
          {
            "name": "stage",
            "type": {
              "kind": "NON_NULL",
              "ofType": {
                "kind": "SCALAR",
                "name": "Any"
              }
            },
            "args": []
          },
          {
            "name": "updatedAt",
            "type": {
              "kind": "NON_NULL",
              "ofType": {
                "kind": "SCALAR",
                "name": "Any"
              }
            },
            "args": []
          },
          {
            "name": "updatedBy",
            "type": {
              "kind": "OBJECT",
              "name": "User",
              "ofType": null
            },
            "args": [
              {
                "name": "locales",
                "type": {
                  "kind": "LIST",
                  "ofType": {
                    "kind": "NON_NULL",
                    "ofType": {
                      "kind": "SCALAR",
                      "name": "Any"
                    }
                  }
                }
              }
            ]
          }
        ],
        "interfaces": [
          {
            "kind": "INTERFACE",
            "name": "Node"
          }
        ]
      },
      {
        "kind": "OBJECT",
        "name": "ProductVariantColorConnection",
        "fields": [
          {
            "name": "aggregate",
            "type": {
              "kind": "NON_NULL",
              "ofType": {
                "kind": "OBJECT",
                "name": "Aggregate",
                "ofType": null
              }
            },
            "args": []
          },
          {
            "name": "edges",
            "type": {
              "kind": "NON_NULL",
              "ofType": {
                "kind": "LIST",
                "ofType": {
                  "kind": "NON_NULL",
                  "ofType": {
                    "kind": "OBJECT",
                    "name": "ProductVariantColorEdge",
                    "ofType": null
                  }
                }
              }
            },
            "args": []
          },
          {
            "name": "pageInfo",
            "type": {
              "kind": "NON_NULL",
              "ofType": {
                "kind": "OBJECT",
                "name": "PageInfo",
                "ofType": null
              }
            },
            "args": []
          }
        ],
        "interfaces": []
      },
      {
        "kind": "OBJECT",
        "name": "ProductVariantColorEdge",
        "fields": [
          {
            "name": "cursor",
            "type": {
              "kind": "NON_NULL",
              "ofType": {
                "kind": "SCALAR",
                "name": "Any"
              }
            },
            "args": []
          },
          {
            "name": "node",
            "type": {
              "kind": "NON_NULL",
              "ofType": {
                "kind": "OBJECT",
                "name": "ProductVariantColor",
                "ofType": null
              }
            },
            "args": []
          }
        ],
        "interfaces": []
      },
      {
        "kind": "OBJECT",
        "name": "Query",
        "fields": [
          {
            "name": "asset",
            "type": {
              "kind": "OBJECT",
              "name": "Asset",
              "ofType": null
            },
            "args": [
              {
                "name": "locales",
                "type": {
                  "kind": "NON_NULL",
                  "ofType": {
                    "kind": "LIST",
                    "ofType": {
                      "kind": "NON_NULL",
                      "ofType": {
                        "kind": "SCALAR",
                        "name": "Any"
                      }
                    }
                  }
                }
              },
              {
                "name": "stage",
                "type": {
                  "kind": "NON_NULL",
                  "ofType": {
                    "kind": "SCALAR",
                    "name": "Any"
                  }
                }
              },
              {
                "name": "where",
                "type": {
                  "kind": "NON_NULL",
                  "ofType": {
                    "kind": "SCALAR",
                    "name": "Any"
                  }
                }
              }
            ]
          },
          {
            "name": "assetVersion",
            "type": {
              "kind": "OBJECT",
              "name": "DocumentVersion",
              "ofType": null
            },
            "args": [
              {
                "name": "where",
                "type": {
                  "kind": "NON_NULL",
                  "ofType": {
                    "kind": "SCALAR",
                    "name": "Any"
                  }
                }
              }
            ]
          },
          {
            "name": "assets",
            "type": {
              "kind": "NON_NULL",
              "ofType": {
                "kind": "LIST",
                "ofType": {
                  "kind": "NON_NULL",
                  "ofType": {
                    "kind": "OBJECT",
                    "name": "Asset",
                    "ofType": null
                  }
                }
              }
            },
            "args": [
              {
                "name": "after",
                "type": {
                  "kind": "SCALAR",
                  "name": "Any"
                }
              },
              {
                "name": "before",
                "type": {
                  "kind": "SCALAR",
                  "name": "Any"
                }
              },
              {
                "name": "first",
                "type": {
                  "kind": "SCALAR",
                  "name": "Any"
                }
              },
              {
                "name": "last",
                "type": {
                  "kind": "SCALAR",
                  "name": "Any"
                }
              },
              {
                "name": "locales",
                "type": {
                  "kind": "NON_NULL",
                  "ofType": {
                    "kind": "LIST",
                    "ofType": {
                      "kind": "NON_NULL",
                      "ofType": {
                        "kind": "SCALAR",
                        "name": "Any"
                      }
                    }
                  }
                }
              },
              {
                "name": "orderBy",
                "type": {
                  "kind": "SCALAR",
                  "name": "Any"
                }
              },
              {
                "name": "skip",
                "type": {
                  "kind": "SCALAR",
                  "name": "Any"
                }
              },
              {
                "name": "stage",
                "type": {
                  "kind": "NON_NULL",
                  "ofType": {
                    "kind": "SCALAR",
                    "name": "Any"
                  }
                }
              },
              {
                "name": "where",
                "type": {
                  "kind": "SCALAR",
                  "name": "Any"
                }
              }
            ]
          },
          {
            "name": "assetsConnection",
            "type": {
              "kind": "NON_NULL",
              "ofType": {
                "kind": "OBJECT",
                "name": "AssetConnection",
                "ofType": null
              }
            },
            "args": [
              {
                "name": "after",
                "type": {
                  "kind": "SCALAR",
                  "name": "Any"
                }
              },
              {
                "name": "before",
                "type": {
                  "kind": "SCALAR",
                  "name": "Any"
                }
              },
              {
                "name": "first",
                "type": {
                  "kind": "SCALAR",
                  "name": "Any"
                }
              },
              {
                "name": "last",
                "type": {
                  "kind": "SCALAR",
                  "name": "Any"
                }
              },
              {
                "name": "locales",
                "type": {
                  "kind": "NON_NULL",
                  "ofType": {
                    "kind": "LIST",
                    "ofType": {
                      "kind": "NON_NULL",
                      "ofType": {
                        "kind": "SCALAR",
                        "name": "Any"
                      }
                    }
                  }
                }
              },
              {
                "name": "orderBy",
                "type": {
                  "kind": "SCALAR",
                  "name": "Any"
                }
              },
              {
                "name": "skip",
                "type": {
                  "kind": "SCALAR",
                  "name": "Any"
                }
              },
              {
                "name": "stage",
                "type": {
                  "kind": "NON_NULL",
                  "ofType": {
                    "kind": "SCALAR",
                    "name": "Any"
                  }
                }
              },
              {
                "name": "where",
                "type": {
                  "kind": "SCALAR",
                  "name": "Any"
                }
              }
            ]
          },
          {
            "name": "categories",
            "type": {
              "kind": "NON_NULL",
              "ofType": {
                "kind": "LIST",
                "ofType": {
                  "kind": "NON_NULL",
                  "ofType": {
                    "kind": "OBJECT",
                    "name": "Category",
                    "ofType": null
                  }
                }
              }
            },
            "args": [
              {
                "name": "after",
                "type": {
                  "kind": "SCALAR",
                  "name": "Any"
                }
              },
              {
                "name": "before",
                "type": {
                  "kind": "SCALAR",
                  "name": "Any"
                }
              },
              {
                "name": "first",
                "type": {
                  "kind": "SCALAR",
                  "name": "Any"
                }
              },
              {
                "name": "last",
                "type": {
                  "kind": "SCALAR",
                  "name": "Any"
                }
              },
              {
                "name": "locales",
                "type": {
                  "kind": "NON_NULL",
                  "ofType": {
                    "kind": "LIST",
                    "ofType": {
                      "kind": "NON_NULL",
                      "ofType": {
                        "kind": "SCALAR",
                        "name": "Any"
                      }
                    }
                  }
                }
              },
              {
                "name": "orderBy",
                "type": {
                  "kind": "SCALAR",
                  "name": "Any"
                }
              },
              {
                "name": "skip",
                "type": {
                  "kind": "SCALAR",
                  "name": "Any"
                }
              },
              {
                "name": "stage",
                "type": {
                  "kind": "NON_NULL",
                  "ofType": {
                    "kind": "SCALAR",
                    "name": "Any"
                  }
                }
              },
              {
                "name": "where",
                "type": {
                  "kind": "SCALAR",
                  "name": "Any"
                }
              }
            ]
          },
          {
            "name": "categoriesConnection",
            "type": {
              "kind": "NON_NULL",
              "ofType": {
                "kind": "OBJECT",
                "name": "CategoryConnection",
                "ofType": null
              }
            },
            "args": [
              {
                "name": "after",
                "type": {
                  "kind": "SCALAR",
                  "name": "Any"
                }
              },
              {
                "name": "before",
                "type": {
                  "kind": "SCALAR",
                  "name": "Any"
                }
              },
              {
                "name": "first",
                "type": {
                  "kind": "SCALAR",
                  "name": "Any"
                }
              },
              {
                "name": "last",
                "type": {
                  "kind": "SCALAR",
                  "name": "Any"
                }
              },
              {
                "name": "locales",
                "type": {
                  "kind": "NON_NULL",
                  "ofType": {
                    "kind": "LIST",
                    "ofType": {
                      "kind": "NON_NULL",
                      "ofType": {
                        "kind": "SCALAR",
                        "name": "Any"
                      }
                    }
                  }
                }
              },
              {
                "name": "orderBy",
                "type": {
                  "kind": "SCALAR",
                  "name": "Any"
                }
              },
              {
                "name": "skip",
                "type": {
                  "kind": "SCALAR",
                  "name": "Any"
                }
              },
              {
                "name": "stage",
                "type": {
                  "kind": "NON_NULL",
                  "ofType": {
                    "kind": "SCALAR",
                    "name": "Any"
                  }
                }
              },
              {
                "name": "where",
                "type": {
                  "kind": "SCALAR",
                  "name": "Any"
                }
              }
            ]
          },
          {
            "name": "category",
            "type": {
              "kind": "OBJECT",
              "name": "Category",
              "ofType": null
            },
            "args": [
              {
                "name": "locales",
                "type": {
                  "kind": "NON_NULL",
                  "ofType": {
                    "kind": "LIST",
                    "ofType": {
                      "kind": "NON_NULL",
                      "ofType": {
                        "kind": "SCALAR",
                        "name": "Any"
                      }
                    }
                  }
                }
              },
              {
                "name": "stage",
                "type": {
                  "kind": "NON_NULL",
                  "ofType": {
                    "kind": "SCALAR",
                    "name": "Any"
                  }
                }
              },
              {
                "name": "where",
                "type": {
                  "kind": "NON_NULL",
                  "ofType": {
                    "kind": "SCALAR",
                    "name": "Any"
                  }
                }
              }
            ]
          },
          {
            "name": "categoryVersion",
            "type": {
              "kind": "OBJECT",
              "name": "DocumentVersion",
              "ofType": null
            },
            "args": [
              {
                "name": "where",
                "type": {
                  "kind": "NON_NULL",
                  "ofType": {
                    "kind": "SCALAR",
                    "name": "Any"
                  }
                }
              }
            ]
          },
          {
            "name": "config",
            "type": {
              "kind": "OBJECT",
              "name": "Config",
              "ofType": null
            },
            "args": [
              {
                "name": "locales",
                "type": {
                  "kind": "NON_NULL",
                  "ofType": {
                    "kind": "LIST",
                    "ofType": {
                      "kind": "NON_NULL",
                      "ofType": {
                        "kind": "SCALAR",
                        "name": "Any"
                      }
                    }
                  }
                }
              },
              {
                "name": "stage",
                "type": {
                  "kind": "NON_NULL",
                  "ofType": {
                    "kind": "SCALAR",
                    "name": "Any"
                  }
                }
              },
              {
                "name": "where",
                "type": {
                  "kind": "NON_NULL",
                  "ofType": {
                    "kind": "SCALAR",
                    "name": "Any"
                  }
                }
              }
            ]
          },
          {
            "name": "configVersion",
            "type": {
              "kind": "OBJECT",
              "name": "DocumentVersion",
              "ofType": null
            },
            "args": [
              {
                "name": "where",
                "type": {
                  "kind": "NON_NULL",
                  "ofType": {
                    "kind": "SCALAR",
                    "name": "Any"
                  }
                }
              }
            ]
          },
          {
            "name": "configs",
            "type": {
              "kind": "NON_NULL",
              "ofType": {
                "kind": "LIST",
                "ofType": {
                  "kind": "NON_NULL",
                  "ofType": {
                    "kind": "OBJECT",
                    "name": "Config",
                    "ofType": null
                  }
                }
              }
            },
            "args": [
              {
                "name": "after",
                "type": {
                  "kind": "SCALAR",
                  "name": "Any"
                }
              },
              {
                "name": "before",
                "type": {
                  "kind": "SCALAR",
                  "name": "Any"
                }
              },
              {
                "name": "first",
                "type": {
                  "kind": "SCALAR",
                  "name": "Any"
                }
              },
              {
                "name": "last",
                "type": {
                  "kind": "SCALAR",
                  "name": "Any"
                }
              },
              {
                "name": "locales",
                "type": {
                  "kind": "NON_NULL",
                  "ofType": {
                    "kind": "LIST",
                    "ofType": {
                      "kind": "NON_NULL",
                      "ofType": {
                        "kind": "SCALAR",
                        "name": "Any"
                      }
                    }
                  }
                }
              },
              {
                "name": "orderBy",
                "type": {
                  "kind": "SCALAR",
                  "name": "Any"
                }
              },
              {
                "name": "skip",
                "type": {
                  "kind": "SCALAR",
                  "name": "Any"
                }
              },
              {
                "name": "stage",
                "type": {
                  "kind": "NON_NULL",
                  "ofType": {
                    "kind": "SCALAR",
                    "name": "Any"
                  }
                }
              },
              {
                "name": "where",
                "type": {
                  "kind": "SCALAR",
                  "name": "Any"
                }
              }
            ]
          },
          {
            "name": "configsConnection",
            "type": {
              "kind": "NON_NULL",
              "ofType": {
                "kind": "OBJECT",
                "name": "ConfigConnection",
                "ofType": null
              }
            },
            "args": [
              {
                "name": "after",
                "type": {
                  "kind": "SCALAR",
                  "name": "Any"
                }
              },
              {
                "name": "before",
                "type": {
                  "kind": "SCALAR",
                  "name": "Any"
                }
              },
              {
                "name": "first",
                "type": {
                  "kind": "SCALAR",
                  "name": "Any"
                }
              },
              {
                "name": "last",
                "type": {
                  "kind": "SCALAR",
                  "name": "Any"
                }
              },
              {
                "name": "locales",
                "type": {
                  "kind": "NON_NULL",
                  "ofType": {
                    "kind": "LIST",
                    "ofType": {
                      "kind": "NON_NULL",
                      "ofType": {
                        "kind": "SCALAR",
                        "name": "Any"
                      }
                    }
                  }
                }
              },
              {
                "name": "orderBy",
                "type": {
                  "kind": "SCALAR",
                  "name": "Any"
                }
              },
              {
                "name": "skip",
                "type": {
                  "kind": "SCALAR",
                  "name": "Any"
                }
              },
              {
                "name": "stage",
                "type": {
                  "kind": "NON_NULL",
                  "ofType": {
                    "kind": "SCALAR",
                    "name": "Any"
                  }
                }
              },
              {
                "name": "where",
                "type": {
                  "kind": "SCALAR",
                  "name": "Any"
                }
              }
            ]
          },
          {
            "name": "customer",
            "type": {
              "kind": "OBJECT",
              "name": "Customer",
              "ofType": null
            },
            "args": [
              {
                "name": "locales",
                "type": {
                  "kind": "NON_NULL",
                  "ofType": {
                    "kind": "LIST",
                    "ofType": {
                      "kind": "NON_NULL",
                      "ofType": {
                        "kind": "SCALAR",
                        "name": "Any"
                      }
                    }
                  }
                }
              },
              {
                "name": "stage",
                "type": {
                  "kind": "NON_NULL",
                  "ofType": {
                    "kind": "SCALAR",
                    "name": "Any"
                  }
                }
              },
              {
                "name": "where",
                "type": {
                  "kind": "NON_NULL",
                  "ofType": {
                    "kind": "SCALAR",
                    "name": "Any"
                  }
                }
              }
            ]
          },
          {
            "name": "customerVersion",
            "type": {
              "kind": "OBJECT",
              "name": "DocumentVersion",
              "ofType": null
            },
            "args": [
              {
                "name": "where",
                "type": {
                  "kind": "NON_NULL",
                  "ofType": {
                    "kind": "SCALAR",
                    "name": "Any"
                  }
                }
              }
            ]
          },
          {
            "name": "customers",
            "type": {
              "kind": "NON_NULL",
              "ofType": {
                "kind": "LIST",
                "ofType": {
                  "kind": "NON_NULL",
                  "ofType": {
                    "kind": "OBJECT",
                    "name": "Customer",
                    "ofType": null
                  }
                }
              }
            },
            "args": [
              {
                "name": "after",
                "type": {
                  "kind": "SCALAR",
                  "name": "Any"
                }
              },
              {
                "name": "before",
                "type": {
                  "kind": "SCALAR",
                  "name": "Any"
                }
              },
              {
                "name": "first",
                "type": {
                  "kind": "SCALAR",
                  "name": "Any"
                }
              },
              {
                "name": "last",
                "type": {
                  "kind": "SCALAR",
                  "name": "Any"
                }
              },
              {
                "name": "locales",
                "type": {
                  "kind": "NON_NULL",
                  "ofType": {
                    "kind": "LIST",
                    "ofType": {
                      "kind": "NON_NULL",
                      "ofType": {
                        "kind": "SCALAR",
                        "name": "Any"
                      }
                    }
                  }
                }
              },
              {
                "name": "orderBy",
                "type": {
                  "kind": "SCALAR",
                  "name": "Any"
                }
              },
              {
                "name": "skip",
                "type": {
                  "kind": "SCALAR",
                  "name": "Any"
                }
              },
              {
                "name": "stage",
                "type": {
                  "kind": "NON_NULL",
                  "ofType": {
                    "kind": "SCALAR",
                    "name": "Any"
                  }
                }
              },
              {
                "name": "where",
                "type": {
                  "kind": "SCALAR",
                  "name": "Any"
                }
              }
            ]
          },
          {
            "name": "customersConnection",
            "type": {
              "kind": "NON_NULL",
              "ofType": {
                "kind": "OBJECT",
                "name": "CustomerConnection",
                "ofType": null
              }
            },
            "args": [
              {
                "name": "after",
                "type": {
                  "kind": "SCALAR",
                  "name": "Any"
                }
              },
              {
                "name": "before",
                "type": {
                  "kind": "SCALAR",
                  "name": "Any"
                }
              },
              {
                "name": "first",
                "type": {
                  "kind": "SCALAR",
                  "name": "Any"
                }
              },
              {
                "name": "last",
                "type": {
                  "kind": "SCALAR",
                  "name": "Any"
                }
              },
              {
                "name": "locales",
                "type": {
                  "kind": "NON_NULL",
                  "ofType": {
                    "kind": "LIST",
                    "ofType": {
                      "kind": "NON_NULL",
                      "ofType": {
                        "kind": "SCALAR",
                        "name": "Any"
                      }
                    }
                  }
                }
              },
              {
                "name": "orderBy",
                "type": {
                  "kind": "SCALAR",
                  "name": "Any"
                }
              },
              {
                "name": "skip",
                "type": {
                  "kind": "SCALAR",
                  "name": "Any"
                }
              },
              {
                "name": "stage",
                "type": {
                  "kind": "NON_NULL",
                  "ofType": {
                    "kind": "SCALAR",
                    "name": "Any"
                  }
                }
              },
              {
                "name": "where",
                "type": {
                  "kind": "SCALAR",
                  "name": "Any"
                }
              }
            ]
          },
          {
            "name": "node",
            "type": {
              "kind": "INTERFACE",
              "name": "Node",
              "ofType": null
            },
            "args": [
              {
                "name": "id",
                "type": {
                  "kind": "NON_NULL",
                  "ofType": {
                    "kind": "SCALAR",
                    "name": "Any"
                  }
                }
              },
              {
                "name": "locales",
                "type": {
                  "kind": "NON_NULL",
                  "ofType": {
                    "kind": "LIST",
                    "ofType": {
                      "kind": "NON_NULL",
                      "ofType": {
                        "kind": "SCALAR",
                        "name": "Any"
                      }
                    }
                  }
                }
              },
              {
                "name": "stage",
                "type": {
                  "kind": "NON_NULL",
                  "ofType": {
                    "kind": "SCALAR",
                    "name": "Any"
                  }
                }
              }
            ]
          },
          {
            "name": "order",
            "type": {
              "kind": "OBJECT",
              "name": "Order",
              "ofType": null
            },
            "args": [
              {
                "name": "locales",
                "type": {
                  "kind": "NON_NULL",
                  "ofType": {
                    "kind": "LIST",
                    "ofType": {
                      "kind": "NON_NULL",
                      "ofType": {
                        "kind": "SCALAR",
                        "name": "Any"
                      }
                    }
                  }
                }
              },
              {
                "name": "stage",
                "type": {
                  "kind": "NON_NULL",
                  "ofType": {
                    "kind": "SCALAR",
                    "name": "Any"
                  }
                }
              },
              {
                "name": "where",
                "type": {
                  "kind": "NON_NULL",
                  "ofType": {
                    "kind": "SCALAR",
                    "name": "Any"
                  }
                }
              }
            ]
          },
          {
            "name": "orderItem",
            "type": {
              "kind": "OBJECT",
              "name": "OrderItem",
              "ofType": null
            },
            "args": [
              {
                "name": "locales",
                "type": {
                  "kind": "NON_NULL",
                  "ofType": {
                    "kind": "LIST",
                    "ofType": {
                      "kind": "NON_NULL",
                      "ofType": {
                        "kind": "SCALAR",
                        "name": "Any"
                      }
                    }
                  }
                }
              },
              {
                "name": "stage",
                "type": {
                  "kind": "NON_NULL",
                  "ofType": {
                    "kind": "SCALAR",
                    "name": "Any"
                  }
                }
              },
              {
                "name": "where",
                "type": {
                  "kind": "NON_NULL",
                  "ofType": {
                    "kind": "SCALAR",
                    "name": "Any"
                  }
                }
              }
            ]
          },
          {
            "name": "orderItemVersion",
            "type": {
              "kind": "OBJECT",
              "name": "DocumentVersion",
              "ofType": null
            },
            "args": [
              {
                "name": "where",
                "type": {
                  "kind": "NON_NULL",
                  "ofType": {
                    "kind": "SCALAR",
                    "name": "Any"
                  }
                }
              }
            ]
          },
          {
            "name": "orderItems",
            "type": {
              "kind": "NON_NULL",
              "ofType": {
                "kind": "LIST",
                "ofType": {
                  "kind": "NON_NULL",
                  "ofType": {
                    "kind": "OBJECT",
                    "name": "OrderItem",
                    "ofType": null
                  }
                }
              }
            },
            "args": [
              {
                "name": "after",
                "type": {
                  "kind": "SCALAR",
                  "name": "Any"
                }
              },
              {
                "name": "before",
                "type": {
                  "kind": "SCALAR",
                  "name": "Any"
                }
              },
              {
                "name": "first",
                "type": {
                  "kind": "SCALAR",
                  "name": "Any"
                }
              },
              {
                "name": "last",
                "type": {
                  "kind": "SCALAR",
                  "name": "Any"
                }
              },
              {
                "name": "locales",
                "type": {
                  "kind": "NON_NULL",
                  "ofType": {
                    "kind": "LIST",
                    "ofType": {
                      "kind": "NON_NULL",
                      "ofType": {
                        "kind": "SCALAR",
                        "name": "Any"
                      }
                    }
                  }
                }
              },
              {
                "name": "orderBy",
                "type": {
                  "kind": "SCALAR",
                  "name": "Any"
                }
              },
              {
                "name": "skip",
                "type": {
                  "kind": "SCALAR",
                  "name": "Any"
                }
              },
              {
                "name": "stage",
                "type": {
                  "kind": "NON_NULL",
                  "ofType": {
                    "kind": "SCALAR",
                    "name": "Any"
                  }
                }
              },
              {
                "name": "where",
                "type": {
                  "kind": "SCALAR",
                  "name": "Any"
                }
              }
            ]
          },
          {
            "name": "orderItemsConnection",
            "type": {
              "kind": "NON_NULL",
              "ofType": {
                "kind": "OBJECT",
                "name": "OrderItemConnection",
                "ofType": null
              }
            },
            "args": [
              {
                "name": "after",
                "type": {
                  "kind": "SCALAR",
                  "name": "Any"
                }
              },
              {
                "name": "before",
                "type": {
                  "kind": "SCALAR",
                  "name": "Any"
                }
              },
              {
                "name": "first",
                "type": {
                  "kind": "SCALAR",
                  "name": "Any"
                }
              },
              {
                "name": "last",
                "type": {
                  "kind": "SCALAR",
                  "name": "Any"
                }
              },
              {
                "name": "locales",
                "type": {
                  "kind": "NON_NULL",
                  "ofType": {
                    "kind": "LIST",
                    "ofType": {
                      "kind": "NON_NULL",
                      "ofType": {
                        "kind": "SCALAR",
                        "name": "Any"
                      }
                    }
                  }
                }
              },
              {
                "name": "orderBy",
                "type": {
                  "kind": "SCALAR",
                  "name": "Any"
                }
              },
              {
                "name": "skip",
                "type": {
                  "kind": "SCALAR",
                  "name": "Any"
                }
              },
              {
                "name": "stage",
                "type": {
                  "kind": "NON_NULL",
                  "ofType": {
                    "kind": "SCALAR",
                    "name": "Any"
                  }
                }
              },
              {
                "name": "where",
                "type": {
                  "kind": "SCALAR",
                  "name": "Any"
                }
              }
            ]
          },
          {
            "name": "orderVersion",
            "type": {
              "kind": "OBJECT",
              "name": "DocumentVersion",
              "ofType": null
            },
            "args": [
              {
                "name": "where",
                "type": {
                  "kind": "NON_NULL",
                  "ofType": {
                    "kind": "SCALAR",
                    "name": "Any"
                  }
                }
              }
            ]
          },
          {
            "name": "orders",
            "type": {
              "kind": "NON_NULL",
              "ofType": {
                "kind": "LIST",
                "ofType": {
                  "kind": "NON_NULL",
                  "ofType": {
                    "kind": "OBJECT",
                    "name": "Order",
                    "ofType": null
                  }
                }
              }
            },
            "args": [
              {
                "name": "after",
                "type": {
                  "kind": "SCALAR",
                  "name": "Any"
                }
              },
              {
                "name": "before",
                "type": {
                  "kind": "SCALAR",
                  "name": "Any"
                }
              },
              {
                "name": "first",
                "type": {
                  "kind": "SCALAR",
                  "name": "Any"
                }
              },
              {
                "name": "last",
                "type": {
                  "kind": "SCALAR",
                  "name": "Any"
                }
              },
              {
                "name": "locales",
                "type": {
                  "kind": "NON_NULL",
                  "ofType": {
                    "kind": "LIST",
                    "ofType": {
                      "kind": "NON_NULL",
                      "ofType": {
                        "kind": "SCALAR",
                        "name": "Any"
                      }
                    }
                  }
                }
              },
              {
                "name": "orderBy",
                "type": {
                  "kind": "SCALAR",
                  "name": "Any"
                }
              },
              {
                "name": "skip",
                "type": {
                  "kind": "SCALAR",
                  "name": "Any"
                }
              },
              {
                "name": "stage",
                "type": {
                  "kind": "NON_NULL",
                  "ofType": {
                    "kind": "SCALAR",
                    "name": "Any"
                  }
                }
              },
              {
                "name": "where",
                "type": {
                  "kind": "SCALAR",
                  "name": "Any"
                }
              }
            ]
          },
          {
            "name": "ordersConnection",
            "type": {
              "kind": "NON_NULL",
              "ofType": {
                "kind": "OBJECT",
                "name": "OrderConnection",
                "ofType": null
              }
            },
            "args": [
              {
                "name": "after",
                "type": {
                  "kind": "SCALAR",
                  "name": "Any"
                }
              },
              {
                "name": "before",
                "type": {
                  "kind": "SCALAR",
                  "name": "Any"
                }
              },
              {
                "name": "first",
                "type": {
                  "kind": "SCALAR",
                  "name": "Any"
                }
              },
              {
                "name": "last",
                "type": {
                  "kind": "SCALAR",
                  "name": "Any"
                }
              },
              {
                "name": "locales",
                "type": {
                  "kind": "NON_NULL",
                  "ofType": {
                    "kind": "LIST",
                    "ofType": {
                      "kind": "NON_NULL",
                      "ofType": {
                        "kind": "SCALAR",
                        "name": "Any"
                      }
                    }
                  }
                }
              },
              {
                "name": "orderBy",
                "type": {
                  "kind": "SCALAR",
                  "name": "Any"
                }
              },
              {
                "name": "skip",
                "type": {
                  "kind": "SCALAR",
                  "name": "Any"
                }
              },
              {
                "name": "stage",
                "type": {
                  "kind": "NON_NULL",
                  "ofType": {
                    "kind": "SCALAR",
                    "name": "Any"
                  }
                }
              },
              {
                "name": "where",
                "type": {
                  "kind": "SCALAR",
                  "name": "Any"
                }
              }
            ]
          },
          {
            "name": "product",
            "type": {
              "kind": "OBJECT",
              "name": "Product",
              "ofType": null
            },
            "args": [
              {
                "name": "locales",
                "type": {
                  "kind": "NON_NULL",
                  "ofType": {
                    "kind": "LIST",
                    "ofType": {
                      "kind": "NON_NULL",
                      "ofType": {
                        "kind": "SCALAR",
                        "name": "Any"
                      }
                    }
                  }
                }
              },
              {
                "name": "stage",
                "type": {
                  "kind": "NON_NULL",
                  "ofType": {
                    "kind": "SCALAR",
                    "name": "Any"
                  }
                }
              },
              {
                "name": "where",
                "type": {
                  "kind": "NON_NULL",
                  "ofType": {
                    "kind": "SCALAR",
                    "name": "Any"
                  }
                }
              }
            ]
          },
          {
            "name": "productVariantColor",
            "type": {
              "kind": "OBJECT",
              "name": "ProductVariantColor",
              "ofType": null
            },
            "args": [
              {
                "name": "locales",
                "type": {
                  "kind": "NON_NULL",
                  "ofType": {
                    "kind": "LIST",
                    "ofType": {
                      "kind": "NON_NULL",
                      "ofType": {
                        "kind": "SCALAR",
                        "name": "Any"
                      }
                    }
                  }
                }
              },
              {
                "name": "stage",
                "type": {
                  "kind": "NON_NULL",
                  "ofType": {
                    "kind": "SCALAR",
                    "name": "Any"
                  }
                }
              },
              {
                "name": "where",
                "type": {
                  "kind": "NON_NULL",
                  "ofType": {
                    "kind": "SCALAR",
                    "name": "Any"
                  }
                }
              }
            ]
          },
          {
            "name": "productVariantColorVersion",
            "type": {
              "kind": "OBJECT",
              "name": "DocumentVersion",
              "ofType": null
            },
            "args": [
              {
                "name": "where",
                "type": {
                  "kind": "NON_NULL",
                  "ofType": {
                    "kind": "SCALAR",
                    "name": "Any"
                  }
                }
              }
            ]
          },
          {
            "name": "productVariantColors",
            "type": {
              "kind": "NON_NULL",
              "ofType": {
                "kind": "LIST",
                "ofType": {
                  "kind": "NON_NULL",
                  "ofType": {
                    "kind": "OBJECT",
                    "name": "ProductVariantColor",
                    "ofType": null
                  }
                }
              }
            },
            "args": [
              {
                "name": "after",
                "type": {
                  "kind": "SCALAR",
                  "name": "Any"
                }
              },
              {
                "name": "before",
                "type": {
                  "kind": "SCALAR",
                  "name": "Any"
                }
              },
              {
                "name": "first",
                "type": {
                  "kind": "SCALAR",
                  "name": "Any"
                }
              },
              {
                "name": "last",
                "type": {
                  "kind": "SCALAR",
                  "name": "Any"
                }
              },
              {
                "name": "locales",
                "type": {
                  "kind": "NON_NULL",
                  "ofType": {
                    "kind": "LIST",
                    "ofType": {
                      "kind": "NON_NULL",
                      "ofType": {
                        "kind": "SCALAR",
                        "name": "Any"
                      }
                    }
                  }
                }
              },
              {
                "name": "orderBy",
                "type": {
                  "kind": "SCALAR",
                  "name": "Any"
                }
              },
              {
                "name": "skip",
                "type": {
                  "kind": "SCALAR",
                  "name": "Any"
                }
              },
              {
                "name": "stage",
                "type": {
                  "kind": "NON_NULL",
                  "ofType": {
                    "kind": "SCALAR",
                    "name": "Any"
                  }
                }
              },
              {
                "name": "where",
                "type": {
                  "kind": "SCALAR",
                  "name": "Any"
                }
              }
            ]
          },
          {
            "name": "productVariantColorsConnection",
            "type": {
              "kind": "NON_NULL",
              "ofType": {
                "kind": "OBJECT",
                "name": "ProductVariantColorConnection",
                "ofType": null
              }
            },
            "args": [
              {
                "name": "after",
                "type": {
                  "kind": "SCALAR",
                  "name": "Any"
                }
              },
              {
                "name": "before",
                "type": {
                  "kind": "SCALAR",
                  "name": "Any"
                }
              },
              {
                "name": "first",
                "type": {
                  "kind": "SCALAR",
                  "name": "Any"
                }
              },
              {
                "name": "last",
                "type": {
                  "kind": "SCALAR",
                  "name": "Any"
                }
              },
              {
                "name": "locales",
                "type": {
                  "kind": "NON_NULL",
                  "ofType": {
                    "kind": "LIST",
                    "ofType": {
                      "kind": "NON_NULL",
                      "ofType": {
                        "kind": "SCALAR",
                        "name": "Any"
                      }
                    }
                  }
                }
              },
              {
                "name": "orderBy",
                "type": {
                  "kind": "SCALAR",
                  "name": "Any"
                }
              },
              {
                "name": "skip",
                "type": {
                  "kind": "SCALAR",
                  "name": "Any"
                }
              },
              {
                "name": "stage",
                "type": {
                  "kind": "NON_NULL",
                  "ofType": {
                    "kind": "SCALAR",
                    "name": "Any"
                  }
                }
              },
              {
                "name": "where",
                "type": {
                  "kind": "SCALAR",
                  "name": "Any"
                }
              }
            ]
          },
          {
            "name": "productVersion",
            "type": {
              "kind": "OBJECT",
              "name": "DocumentVersion",
              "ofType": null
            },
            "args": [
              {
                "name": "where",
                "type": {
                  "kind": "NON_NULL",
                  "ofType": {
                    "kind": "SCALAR",
                    "name": "Any"
                  }
                }
              }
            ]
          },
          {
            "name": "products",
            "type": {
              "kind": "NON_NULL",
              "ofType": {
                "kind": "LIST",
                "ofType": {
                  "kind": "NON_NULL",
                  "ofType": {
                    "kind": "OBJECT",
                    "name": "Product",
                    "ofType": null
                  }
                }
              }
            },
            "args": [
              {
                "name": "after",
                "type": {
                  "kind": "SCALAR",
                  "name": "Any"
                }
              },
              {
                "name": "before",
                "type": {
                  "kind": "SCALAR",
                  "name": "Any"
                }
              },
              {
                "name": "first",
                "type": {
                  "kind": "SCALAR",
                  "name": "Any"
                }
              },
              {
                "name": "last",
                "type": {
                  "kind": "SCALAR",
                  "name": "Any"
                }
              },
              {
                "name": "locales",
                "type": {
                  "kind": "NON_NULL",
                  "ofType": {
                    "kind": "LIST",
                    "ofType": {
                      "kind": "NON_NULL",
                      "ofType": {
                        "kind": "SCALAR",
                        "name": "Any"
                      }
                    }
                  }
                }
              },
              {
                "name": "orderBy",
                "type": {
                  "kind": "SCALAR",
                  "name": "Any"
                }
              },
              {
                "name": "skip",
                "type": {
                  "kind": "SCALAR",
                  "name": "Any"
                }
              },
              {
                "name": "stage",
                "type": {
                  "kind": "NON_NULL",
                  "ofType": {
                    "kind": "SCALAR",
                    "name": "Any"
                  }
                }
              },
              {
                "name": "where",
                "type": {
                  "kind": "SCALAR",
                  "name": "Any"
                }
              }
            ]
          },
          {
            "name": "productsConnection",
            "type": {
              "kind": "NON_NULL",
              "ofType": {
                "kind": "OBJECT",
                "name": "ProductConnection",
                "ofType": null
              }
            },
            "args": [
              {
                "name": "after",
                "type": {
                  "kind": "SCALAR",
                  "name": "Any"
                }
              },
              {
                "name": "before",
                "type": {
                  "kind": "SCALAR",
                  "name": "Any"
                }
              },
              {
                "name": "first",
                "type": {
                  "kind": "SCALAR",
                  "name": "Any"
                }
              },
              {
                "name": "last",
                "type": {
                  "kind": "SCALAR",
                  "name": "Any"
                }
              },
              {
                "name": "locales",
                "type": {
                  "kind": "NON_NULL",
                  "ofType": {
                    "kind": "LIST",
                    "ofType": {
                      "kind": "NON_NULL",
                      "ofType": {
                        "kind": "SCALAR",
                        "name": "Any"
                      }
                    }
                  }
                }
              },
              {
                "name": "orderBy",
                "type": {
                  "kind": "SCALAR",
                  "name": "Any"
                }
              },
              {
                "name": "skip",
                "type": {
                  "kind": "SCALAR",
                  "name": "Any"
                }
              },
              {
                "name": "stage",
                "type": {
                  "kind": "NON_NULL",
                  "ofType": {
                    "kind": "SCALAR",
                    "name": "Any"
                  }
                }
              },
              {
                "name": "where",
                "type": {
                  "kind": "SCALAR",
                  "name": "Any"
                }
              }
            ]
          },
          {
            "name": "scheduledOperation",
            "type": {
              "kind": "OBJECT",
              "name": "ScheduledOperation",
              "ofType": null
            },
            "args": [
              {
                "name": "locales",
                "type": {
                  "kind": "NON_NULL",
                  "ofType": {
                    "kind": "LIST",
                    "ofType": {
                      "kind": "NON_NULL",
                      "ofType": {
                        "kind": "SCALAR",
                        "name": "Any"
                      }
                    }
                  }
                }
              },
              {
                "name": "stage",
                "type": {
                  "kind": "NON_NULL",
                  "ofType": {
                    "kind": "SCALAR",
                    "name": "Any"
                  }
                }
              },
              {
                "name": "where",
                "type": {
                  "kind": "NON_NULL",
                  "ofType": {
                    "kind": "SCALAR",
                    "name": "Any"
                  }
                }
              }
            ]
          },
          {
            "name": "scheduledOperations",
            "type": {
              "kind": "NON_NULL",
              "ofType": {
                "kind": "LIST",
                "ofType": {
                  "kind": "NON_NULL",
                  "ofType": {
                    "kind": "OBJECT",
                    "name": "ScheduledOperation",
                    "ofType": null
                  }
                }
              }
            },
            "args": [
              {
                "name": "after",
                "type": {
                  "kind": "SCALAR",
                  "name": "Any"
                }
              },
              {
                "name": "before",
                "type": {
                  "kind": "SCALAR",
                  "name": "Any"
                }
              },
              {
                "name": "first",
                "type": {
                  "kind": "SCALAR",
                  "name": "Any"
                }
              },
              {
                "name": "last",
                "type": {
                  "kind": "SCALAR",
                  "name": "Any"
                }
              },
              {
                "name": "locales",
                "type": {
                  "kind": "NON_NULL",
                  "ofType": {
                    "kind": "LIST",
                    "ofType": {
                      "kind": "NON_NULL",
                      "ofType": {
                        "kind": "SCALAR",
                        "name": "Any"
                      }
                    }
                  }
                }
              },
              {
                "name": "orderBy",
                "type": {
                  "kind": "SCALAR",
                  "name": "Any"
                }
              },
              {
                "name": "skip",
                "type": {
                  "kind": "SCALAR",
                  "name": "Any"
                }
              },
              {
                "name": "stage",
                "type": {
                  "kind": "NON_NULL",
                  "ofType": {
                    "kind": "SCALAR",
                    "name": "Any"
                  }
                }
              },
              {
                "name": "where",
                "type": {
                  "kind": "SCALAR",
                  "name": "Any"
                }
              }
            ]
          },
          {
            "name": "scheduledOperationsConnection",
            "type": {
              "kind": "NON_NULL",
              "ofType": {
                "kind": "OBJECT",
                "name": "ScheduledOperationConnection",
                "ofType": null
              }
            },
            "args": [
              {
                "name": "after",
                "type": {
                  "kind": "SCALAR",
                  "name": "Any"
                }
              },
              {
                "name": "before",
                "type": {
                  "kind": "SCALAR",
                  "name": "Any"
                }
              },
              {
                "name": "first",
                "type": {
                  "kind": "SCALAR",
                  "name": "Any"
                }
              },
              {
                "name": "last",
                "type": {
                  "kind": "SCALAR",
                  "name": "Any"
                }
              },
              {
                "name": "locales",
                "type": {
                  "kind": "NON_NULL",
                  "ofType": {
                    "kind": "LIST",
                    "ofType": {
                      "kind": "NON_NULL",
                      "ofType": {
                        "kind": "SCALAR",
                        "name": "Any"
                      }
                    }
                  }
                }
              },
              {
                "name": "orderBy",
                "type": {
                  "kind": "SCALAR",
                  "name": "Any"
                }
              },
              {
                "name": "skip",
                "type": {
                  "kind": "SCALAR",
                  "name": "Any"
                }
              },
              {
                "name": "stage",
                "type": {
                  "kind": "NON_NULL",
                  "ofType": {
                    "kind": "SCALAR",
                    "name": "Any"
                  }
                }
              },
              {
                "name": "where",
                "type": {
                  "kind": "SCALAR",
                  "name": "Any"
                }
              }
            ]
          },
          {
            "name": "scheduledRelease",
            "type": {
              "kind": "OBJECT",
              "name": "ScheduledRelease",
              "ofType": null
            },
            "args": [
              {
                "name": "locales",
                "type": {
                  "kind": "NON_NULL",
                  "ofType": {
                    "kind": "LIST",
                    "ofType": {
                      "kind": "NON_NULL",
                      "ofType": {
                        "kind": "SCALAR",
                        "name": "Any"
                      }
                    }
                  }
                }
              },
              {
                "name": "stage",
                "type": {
                  "kind": "NON_NULL",
                  "ofType": {
                    "kind": "SCALAR",
                    "name": "Any"
                  }
                }
              },
              {
                "name": "where",
                "type": {
                  "kind": "NON_NULL",
                  "ofType": {
                    "kind": "SCALAR",
                    "name": "Any"
                  }
                }
              }
            ]
          },
          {
            "name": "scheduledReleases",
            "type": {
              "kind": "NON_NULL",
              "ofType": {
                "kind": "LIST",
                "ofType": {
                  "kind": "NON_NULL",
                  "ofType": {
                    "kind": "OBJECT",
                    "name": "ScheduledRelease",
                    "ofType": null
                  }
                }
              }
            },
            "args": [
              {
                "name": "after",
                "type": {
                  "kind": "SCALAR",
                  "name": "Any"
                }
              },
              {
                "name": "before",
                "type": {
                  "kind": "SCALAR",
                  "name": "Any"
                }
              },
              {
                "name": "first",
                "type": {
                  "kind": "SCALAR",
                  "name": "Any"
                }
              },
              {
                "name": "last",
                "type": {
                  "kind": "SCALAR",
                  "name": "Any"
                }
              },
              {
                "name": "locales",
                "type": {
                  "kind": "NON_NULL",
                  "ofType": {
                    "kind": "LIST",
                    "ofType": {
                      "kind": "NON_NULL",
                      "ofType": {
                        "kind": "SCALAR",
                        "name": "Any"
                      }
                    }
                  }
                }
              },
              {
                "name": "orderBy",
                "type": {
                  "kind": "SCALAR",
                  "name": "Any"
                }
              },
              {
                "name": "skip",
                "type": {
                  "kind": "SCALAR",
                  "name": "Any"
                }
              },
              {
                "name": "stage",
                "type": {
                  "kind": "NON_NULL",
                  "ofType": {
                    "kind": "SCALAR",
                    "name": "Any"
                  }
                }
              },
              {
                "name": "where",
                "type": {
                  "kind": "SCALAR",
                  "name": "Any"
                }
              }
            ]
          },
          {
            "name": "scheduledReleasesConnection",
            "type": {
              "kind": "NON_NULL",
              "ofType": {
                "kind": "OBJECT",
                "name": "ScheduledReleaseConnection",
                "ofType": null
              }
            },
            "args": [
              {
                "name": "after",
                "type": {
                  "kind": "SCALAR",
                  "name": "Any"
                }
              },
              {
                "name": "before",
                "type": {
                  "kind": "SCALAR",
                  "name": "Any"
                }
              },
              {
                "name": "first",
                "type": {
                  "kind": "SCALAR",
                  "name": "Any"
                }
              },
              {
                "name": "last",
                "type": {
                  "kind": "SCALAR",
                  "name": "Any"
                }
              },
              {
                "name": "locales",
                "type": {
                  "kind": "NON_NULL",
                  "ofType": {
                    "kind": "LIST",
                    "ofType": {
                      "kind": "NON_NULL",
                      "ofType": {
                        "kind": "SCALAR",
                        "name": "Any"
                      }
                    }
                  }
                }
              },
              {
                "name": "orderBy",
                "type": {
                  "kind": "SCALAR",
                  "name": "Any"
                }
              },
              {
                "name": "skip",
                "type": {
                  "kind": "SCALAR",
                  "name": "Any"
                }
              },
              {
                "name": "stage",
                "type": {
                  "kind": "NON_NULL",
                  "ofType": {
                    "kind": "SCALAR",
                    "name": "Any"
                  }
                }
              },
              {
                "name": "where",
                "type": {
                  "kind": "SCALAR",
                  "name": "Any"
                }
              }
            ]
          },
          {
            "name": "user",
            "type": {
              "kind": "OBJECT",
              "name": "User",
              "ofType": null
            },
            "args": [
              {
                "name": "locales",
                "type": {
                  "kind": "NON_NULL",
                  "ofType": {
                    "kind": "LIST",
                    "ofType": {
                      "kind": "NON_NULL",
                      "ofType": {
                        "kind": "SCALAR",
                        "name": "Any"
                      }
                    }
                  }
                }
              },
              {
                "name": "stage",
                "type": {
                  "kind": "NON_NULL",
                  "ofType": {
                    "kind": "SCALAR",
                    "name": "Any"
                  }
                }
              },
              {
                "name": "where",
                "type": {
                  "kind": "NON_NULL",
                  "ofType": {
                    "kind": "SCALAR",
                    "name": "Any"
                  }
                }
              }
            ]
          },
          {
            "name": "users",
            "type": {
              "kind": "NON_NULL",
              "ofType": {
                "kind": "LIST",
                "ofType": {
                  "kind": "NON_NULL",
                  "ofType": {
                    "kind": "OBJECT",
                    "name": "User",
                    "ofType": null
                  }
                }
              }
            },
            "args": [
              {
                "name": "after",
                "type": {
                  "kind": "SCALAR",
                  "name": "Any"
                }
              },
              {
                "name": "before",
                "type": {
                  "kind": "SCALAR",
                  "name": "Any"
                }
              },
              {
                "name": "first",
                "type": {
                  "kind": "SCALAR",
                  "name": "Any"
                }
              },
              {
                "name": "last",
                "type": {
                  "kind": "SCALAR",
                  "name": "Any"
                }
              },
              {
                "name": "locales",
                "type": {
                  "kind": "NON_NULL",
                  "ofType": {
                    "kind": "LIST",
                    "ofType": {
                      "kind": "NON_NULL",
                      "ofType": {
                        "kind": "SCALAR",
                        "name": "Any"
                      }
                    }
                  }
                }
              },
              {
                "name": "orderBy",
                "type": {
                  "kind": "SCALAR",
                  "name": "Any"
                }
              },
              {
                "name": "skip",
                "type": {
                  "kind": "SCALAR",
                  "name": "Any"
                }
              },
              {
                "name": "stage",
                "type": {
                  "kind": "NON_NULL",
                  "ofType": {
                    "kind": "SCALAR",
                    "name": "Any"
                  }
                }
              },
              {
                "name": "where",
                "type": {
                  "kind": "SCALAR",
                  "name": "Any"
                }
              }
            ]
          },
          {
            "name": "usersConnection",
            "type": {
              "kind": "NON_NULL",
              "ofType": {
                "kind": "OBJECT",
                "name": "UserConnection",
                "ofType": null
              }
            },
            "args": [
              {
                "name": "after",
                "type": {
                  "kind": "SCALAR",
                  "name": "Any"
                }
              },
              {
                "name": "before",
                "type": {
                  "kind": "SCALAR",
                  "name": "Any"
                }
              },
              {
                "name": "first",
                "type": {
                  "kind": "SCALAR",
                  "name": "Any"
                }
              },
              {
                "name": "last",
                "type": {
                  "kind": "SCALAR",
                  "name": "Any"
                }
              },
              {
                "name": "locales",
                "type": {
                  "kind": "NON_NULL",
                  "ofType": {
                    "kind": "LIST",
                    "ofType": {
                      "kind": "NON_NULL",
                      "ofType": {
                        "kind": "SCALAR",
                        "name": "Any"
                      }
                    }
                  }
                }
              },
              {
                "name": "orderBy",
                "type": {
                  "kind": "SCALAR",
                  "name": "Any"
                }
              },
              {
                "name": "skip",
                "type": {
                  "kind": "SCALAR",
                  "name": "Any"
                }
              },
              {
                "name": "stage",
                "type": {
                  "kind": "NON_NULL",
                  "ofType": {
                    "kind": "SCALAR",
                    "name": "Any"
                  }
                }
              },
              {
                "name": "where",
                "type": {
                  "kind": "SCALAR",
                  "name": "Any"
                }
              }
            ]
          }
        ],
        "interfaces": []
      },
      {
        "kind": "OBJECT",
        "name": "RGBA",
        "fields": [
          {
            "name": "a",
            "type": {
              "kind": "NON_NULL",
              "ofType": {
                "kind": "SCALAR",
                "name": "Any"
              }
            },
            "args": []
          },
          {
            "name": "b",
            "type": {
              "kind": "NON_NULL",
              "ofType": {
                "kind": "SCALAR",
                "name": "Any"
              }
            },
            "args": []
          },
          {
            "name": "g",
            "type": {
              "kind": "NON_NULL",
              "ofType": {
                "kind": "SCALAR",
                "name": "Any"
              }
            },
            "args": []
          },
          {
            "name": "r",
            "type": {
              "kind": "NON_NULL",
              "ofType": {
                "kind": "SCALAR",
                "name": "Any"
              }
            },
            "args": []
          }
        ],
        "interfaces": []
      },
      {
        "kind": "OBJECT",
        "name": "RichText",
        "fields": [
          {
            "name": "html",
            "type": {
              "kind": "NON_NULL",
              "ofType": {
                "kind": "SCALAR",
                "name": "Any"
              }
            },
            "args": []
          },
          {
            "name": "markdown",
            "type": {
              "kind": "NON_NULL",
              "ofType": {
                "kind": "SCALAR",
                "name": "Any"
              }
            },
            "args": []
          },
          {
            "name": "raw",
            "type": {
              "kind": "NON_NULL",
              "ofType": {
                "kind": "SCALAR",
                "name": "Any"
              }
            },
            "args": []
          },
          {
            "name": "text",
            "type": {
              "kind": "NON_NULL",
              "ofType": {
                "kind": "SCALAR",
                "name": "Any"
              }
            },
            "args": []
          }
        ],
        "interfaces": []
      },
      {
        "kind": "OBJECT",
        "name": "ScheduledOperation",
        "fields": [
          {
            "name": "affectedDocuments",
            "type": {
              "kind": "NON_NULL",
              "ofType": {
                "kind": "LIST",
                "ofType": {
                  "kind": "NON_NULL",
                  "ofType": {
                    "kind": "UNION",
                    "name": "ScheduledOperationAffectedDocument",
                    "ofType": null
                  }
                }
              }
            },
            "args": [
              {
                "name": "after",
                "type": {
                  "kind": "SCALAR",
                  "name": "Any"
                }
              },
              {
                "name": "before",
                "type": {
                  "kind": "SCALAR",
                  "name": "Any"
                }
              },
              {
                "name": "first",
                "type": {
                  "kind": "SCALAR",
                  "name": "Any"
                }
              },
              {
                "name": "last",
                "type": {
                  "kind": "SCALAR",
                  "name": "Any"
                }
              },
              {
                "name": "locales",
                "type": {
                  "kind": "LIST",
                  "ofType": {
                    "kind": "NON_NULL",
                    "ofType": {
                      "kind": "SCALAR",
                      "name": "Any"
                    }
                  }
                }
              },
              {
                "name": "skip",
                "type": {
                  "kind": "SCALAR",
                  "name": "Any"
                }
              }
            ]
          },
          {
            "name": "createdAt",
            "type": {
              "kind": "NON_NULL",
              "ofType": {
                "kind": "SCALAR",
                "name": "Any"
              }
            },
            "args": []
          },
          {
            "name": "createdBy",
            "type": {
              "kind": "OBJECT",
              "name": "User",
              "ofType": null
            },
            "args": [
              {
                "name": "locales",
                "type": {
                  "kind": "LIST",
                  "ofType": {
                    "kind": "NON_NULL",
                    "ofType": {
                      "kind": "SCALAR",
                      "name": "Any"
                    }
                  }
                }
              }
            ]
          },
          {
            "name": "description",
            "type": {
              "kind": "SCALAR",
              "name": "Any"
            },
            "args": []
          },
          {
            "name": "documentInStages",
            "type": {
              "kind": "NON_NULL",
              "ofType": {
                "kind": "LIST",
                "ofType": {
                  "kind": "NON_NULL",
                  "ofType": {
                    "kind": "OBJECT",
                    "name": "ScheduledOperation",
                    "ofType": null
                  }
                }
              }
            },
            "args": [
              {
                "name": "includeCurrent",
                "type": {
                  "kind": "NON_NULL",
                  "ofType": {
                    "kind": "SCALAR",
                    "name": "Any"
                  }
                }
              },
              {
                "name": "inheritLocale",
                "type": {
                  "kind": "NON_NULL",
                  "ofType": {
                    "kind": "SCALAR",
                    "name": "Any"
                  }
                }
              },
              {
                "name": "stages",
                "type": {
                  "kind": "NON_NULL",
                  "ofType": {
                    "kind": "LIST",
                    "ofType": {
                      "kind": "NON_NULL",
                      "ofType": {
                        "kind": "SCALAR",
                        "name": "Any"
                      }
                    }
                  }
                }
              }
            ]
          },
          {
            "name": "errorMessage",
            "type": {
              "kind": "SCALAR",
              "name": "Any"
            },
            "args": []
          },
          {
            "name": "id",
            "type": {
              "kind": "NON_NULL",
              "ofType": {
                "kind": "SCALAR",
                "name": "Any"
              }
            },
            "args": []
          },
          {
            "name": "publishedAt",
            "type": {
              "kind": "SCALAR",
              "name": "Any"
            },
            "args": []
          },
          {
            "name": "publishedBy",
            "type": {
              "kind": "OBJECT",
              "name": "User",
              "ofType": null
            },
            "args": [
              {
                "name": "locales",
                "type": {
                  "kind": "LIST",
                  "ofType": {
                    "kind": "NON_NULL",
                    "ofType": {
                      "kind": "SCALAR",
                      "name": "Any"
                    }
                  }
                }
              }
            ]
          },
          {
            "name": "rawPayload",
            "type": {
              "kind": "NON_NULL",
              "ofType": {
                "kind": "SCALAR",
                "name": "Any"
              }
            },
            "args": []
          },
          {
            "name": "release",
            "type": {
              "kind": "OBJECT",
              "name": "ScheduledRelease",
              "ofType": null
            },
            "args": [
              {
                "name": "locales",
                "type": {
                  "kind": "LIST",
                  "ofType": {
                    "kind": "NON_NULL",
                    "ofType": {
                      "kind": "SCALAR",
                      "name": "Any"
                    }
                  }
                }
              }
            ]
          },
          {
            "name": "stage",
            "type": {
              "kind": "NON_NULL",
              "ofType": {
                "kind": "SCALAR",
                "name": "Any"
              }
            },
            "args": []
          },
          {
            "name": "status",
            "type": {
              "kind": "NON_NULL",
              "ofType": {
                "kind": "SCALAR",
                "name": "Any"
              }
            },
            "args": []
          },
          {
            "name": "updatedAt",
            "type": {
              "kind": "NON_NULL",
              "ofType": {
                "kind": "SCALAR",
                "name": "Any"
              }
            },
            "args": []
          },
          {
            "name": "updatedBy",
            "type": {
              "kind": "OBJECT",
              "name": "User",
              "ofType": null
            },
            "args": [
              {
                "name": "locales",
                "type": {
                  "kind": "LIST",
                  "ofType": {
                    "kind": "NON_NULL",
                    "ofType": {
                      "kind": "SCALAR",
                      "name": "Any"
                    }
                  }
                }
              }
            ]
          }
        ],
        "interfaces": [
          {
            "kind": "INTERFACE",
            "name": "Node"
          }
        ]
      },
      {
        "kind": "UNION",
        "name": "ScheduledOperationAffectedDocument",
        "possibleTypes": [
          {
            "kind": "OBJECT",
            "name": "Asset"
          },
          {
            "kind": "OBJECT",
            "name": "Category"
          },
          {
            "kind": "OBJECT",
            "name": "Config"
          },
          {
            "kind": "OBJECT",
            "name": "Customer"
          },
          {
            "kind": "OBJECT",
            "name": "Order"
          },
          {
            "kind": "OBJECT",
            "name": "OrderItem"
          },
          {
            "kind": "OBJECT",
            "name": "Product"
          },
          {
            "kind": "OBJECT",
            "name": "ProductVariantColor"
          }
        ]
      },
      {
        "kind": "OBJECT",
        "name": "ScheduledOperationConnection",
        "fields": [
          {
            "name": "aggregate",
            "type": {
              "kind": "NON_NULL",
              "ofType": {
                "kind": "OBJECT",
                "name": "Aggregate",
                "ofType": null
              }
            },
            "args": []
          },
          {
            "name": "edges",
            "type": {
              "kind": "NON_NULL",
              "ofType": {
                "kind": "LIST",
                "ofType": {
                  "kind": "NON_NULL",
                  "ofType": {
                    "kind": "OBJECT",
                    "name": "ScheduledOperationEdge",
                    "ofType": null
                  }
                }
              }
            },
            "args": []
          },
          {
            "name": "pageInfo",
            "type": {
              "kind": "NON_NULL",
              "ofType": {
                "kind": "OBJECT",
                "name": "PageInfo",
                "ofType": null
              }
            },
            "args": []
          }
        ],
        "interfaces": []
      },
      {
        "kind": "OBJECT",
        "name": "ScheduledOperationEdge",
        "fields": [
          {
            "name": "cursor",
            "type": {
              "kind": "NON_NULL",
              "ofType": {
                "kind": "SCALAR",
                "name": "Any"
              }
            },
            "args": []
          },
          {
            "name": "node",
            "type": {
              "kind": "NON_NULL",
              "ofType": {
                "kind": "OBJECT",
                "name": "ScheduledOperation",
                "ofType": null
              }
            },
            "args": []
          }
        ],
        "interfaces": []
      },
      {
        "kind": "OBJECT",
        "name": "ScheduledRelease",
        "fields": [
          {
            "name": "createdAt",
            "type": {
              "kind": "NON_NULL",
              "ofType": {
                "kind": "SCALAR",
                "name": "Any"
              }
            },
            "args": []
          },
          {
            "name": "createdBy",
            "type": {
              "kind": "OBJECT",
              "name": "User",
              "ofType": null
            },
            "args": [
              {
                "name": "locales",
                "type": {
                  "kind": "LIST",
                  "ofType": {
                    "kind": "NON_NULL",
                    "ofType": {
                      "kind": "SCALAR",
                      "name": "Any"
                    }
                  }
                }
              }
            ]
          },
          {
            "name": "description",
            "type": {
              "kind": "SCALAR",
              "name": "Any"
            },
            "args": []
          },
          {
            "name": "documentInStages",
            "type": {
              "kind": "NON_NULL",
              "ofType": {
                "kind": "LIST",
                "ofType": {
                  "kind": "NON_NULL",
                  "ofType": {
                    "kind": "OBJECT",
                    "name": "ScheduledRelease",
                    "ofType": null
                  }
                }
              }
            },
            "args": [
              {
                "name": "includeCurrent",
                "type": {
                  "kind": "NON_NULL",
                  "ofType": {
                    "kind": "SCALAR",
                    "name": "Any"
                  }
                }
              },
              {
                "name": "inheritLocale",
                "type": {
                  "kind": "NON_NULL",
                  "ofType": {
                    "kind": "SCALAR",
                    "name": "Any"
                  }
                }
              },
              {
                "name": "stages",
                "type": {
                  "kind": "NON_NULL",
                  "ofType": {
                    "kind": "LIST",
                    "ofType": {
                      "kind": "NON_NULL",
                      "ofType": {
                        "kind": "SCALAR",
                        "name": "Any"
                      }
                    }
                  }
                }
              }
            ]
          },
          {
            "name": "errorMessage",
            "type": {
              "kind": "SCALAR",
              "name": "Any"
            },
            "args": []
          },
          {
            "name": "id",
            "type": {
              "kind": "NON_NULL",
              "ofType": {
                "kind": "SCALAR",
                "name": "Any"
              }
            },
            "args": []
          },
          {
            "name": "isActive",
            "type": {
              "kind": "NON_NULL",
              "ofType": {
                "kind": "SCALAR",
                "name": "Any"
              }
            },
            "args": []
          },
          {
            "name": "isImplicit",
            "type": {
              "kind": "NON_NULL",
              "ofType": {
                "kind": "SCALAR",
                "name": "Any"
              }
            },
            "args": []
          },
          {
            "name": "operations",
            "type": {
              "kind": "NON_NULL",
              "ofType": {
                "kind": "LIST",
                "ofType": {
                  "kind": "NON_NULL",
                  "ofType": {
                    "kind": "OBJECT",
                    "name": "ScheduledOperation",
                    "ofType": null
                  }
                }
              }
            },
            "args": [
              {
                "name": "after",
                "type": {
                  "kind": "SCALAR",
                  "name": "Any"
                }
              },
              {
                "name": "before",
                "type": {
                  "kind": "SCALAR",
                  "name": "Any"
                }
              },
              {
                "name": "first",
                "type": {
                  "kind": "SCALAR",
                  "name": "Any"
                }
              },
              {
                "name": "last",
                "type": {
                  "kind": "SCALAR",
                  "name": "Any"
                }
              },
              {
                "name": "locales",
                "type": {
                  "kind": "LIST",
                  "ofType": {
                    "kind": "NON_NULL",
                    "ofType": {
                      "kind": "SCALAR",
                      "name": "Any"
                    }
                  }
                }
              },
              {
                "name": "orderBy",
                "type": {
                  "kind": "SCALAR",
                  "name": "Any"
                }
              },
              {
                "name": "skip",
                "type": {
                  "kind": "SCALAR",
                  "name": "Any"
                }
              },
              {
                "name": "where",
                "type": {
                  "kind": "SCALAR",
                  "name": "Any"
                }
              }
            ]
          },
          {
            "name": "publishedAt",
            "type": {
              "kind": "SCALAR",
              "name": "Any"
            },
            "args": []
          },
          {
            "name": "publishedBy",
            "type": {
              "kind": "OBJECT",
              "name": "User",
              "ofType": null
            },
            "args": [
              {
                "name": "locales",
                "type": {
                  "kind": "LIST",
                  "ofType": {
                    "kind": "NON_NULL",
                    "ofType": {
                      "kind": "SCALAR",
                      "name": "Any"
                    }
                  }
                }
              }
            ]
          },
          {
            "name": "releaseAt",
            "type": {
              "kind": "SCALAR",
              "name": "Any"
            },
            "args": []
          },
          {
            "name": "stage",
            "type": {
              "kind": "NON_NULL",
              "ofType": {
                "kind": "SCALAR",
                "name": "Any"
              }
            },
            "args": []
          },
          {
            "name": "status",
            "type": {
              "kind": "NON_NULL",
              "ofType": {
                "kind": "SCALAR",
                "name": "Any"
              }
            },
            "args": []
          },
          {
            "name": "title",
            "type": {
              "kind": "SCALAR",
              "name": "Any"
            },
            "args": []
          },
          {
            "name": "updatedAt",
            "type": {
              "kind": "NON_NULL",
              "ofType": {
                "kind": "SCALAR",
                "name": "Any"
              }
            },
            "args": []
          },
          {
            "name": "updatedBy",
            "type": {
              "kind": "OBJECT",
              "name": "User",
              "ofType": null
            },
            "args": [
              {
                "name": "locales",
                "type": {
                  "kind": "LIST",
                  "ofType": {
                    "kind": "NON_NULL",
                    "ofType": {
                      "kind": "SCALAR",
                      "name": "Any"
                    }
                  }
                }
              }
            ]
          }
        ],
        "interfaces": [
          {
            "kind": "INTERFACE",
            "name": "Node"
          }
        ]
      },
      {
        "kind": "OBJECT",
        "name": "ScheduledReleaseConnection",
        "fields": [
          {
            "name": "aggregate",
            "type": {
              "kind": "NON_NULL",
              "ofType": {
                "kind": "OBJECT",
                "name": "Aggregate",
                "ofType": null
              }
            },
            "args": []
          },
          {
            "name": "edges",
            "type": {
              "kind": "NON_NULL",
              "ofType": {
                "kind": "LIST",
                "ofType": {
                  "kind": "NON_NULL",
                  "ofType": {
                    "kind": "OBJECT",
                    "name": "ScheduledReleaseEdge",
                    "ofType": null
                  }
                }
              }
            },
            "args": []
          },
          {
            "name": "pageInfo",
            "type": {
              "kind": "NON_NULL",
              "ofType": {
                "kind": "OBJECT",
                "name": "PageInfo",
                "ofType": null
              }
            },
            "args": []
          }
        ],
        "interfaces": []
      },
      {
        "kind": "OBJECT",
        "name": "ScheduledReleaseEdge",
        "fields": [
          {
            "name": "cursor",
            "type": {
              "kind": "NON_NULL",
              "ofType": {
                "kind": "SCALAR",
                "name": "Any"
              }
            },
            "args": []
          },
          {
            "name": "node",
            "type": {
              "kind": "NON_NULL",
              "ofType": {
                "kind": "OBJECT",
                "name": "ScheduledRelease",
                "ofType": null
              }
            },
            "args": []
          }
        ],
        "interfaces": []
      },
      {
        "kind": "OBJECT",
        "name": "User",
        "fields": [
          {
            "name": "createdAt",
            "type": {
              "kind": "NON_NULL",
              "ofType": {
                "kind": "SCALAR",
                "name": "Any"
              }
            },
            "args": []
          },
          {
            "name": "documentInStages",
            "type": {
              "kind": "NON_NULL",
              "ofType": {
                "kind": "LIST",
                "ofType": {
                  "kind": "NON_NULL",
                  "ofType": {
                    "kind": "OBJECT",
                    "name": "User",
                    "ofType": null
                  }
                }
              }
            },
            "args": [
              {
                "name": "includeCurrent",
                "type": {
                  "kind": "NON_NULL",
                  "ofType": {
                    "kind": "SCALAR",
                    "name": "Any"
                  }
                }
              },
              {
                "name": "inheritLocale",
                "type": {
                  "kind": "NON_NULL",
                  "ofType": {
                    "kind": "SCALAR",
                    "name": "Any"
                  }
                }
              },
              {
                "name": "stages",
                "type": {
                  "kind": "NON_NULL",
                  "ofType": {
                    "kind": "LIST",
                    "ofType": {
                      "kind": "NON_NULL",
                      "ofType": {
                        "kind": "SCALAR",
                        "name": "Any"
                      }
                    }
                  }
                }
              }
            ]
          },
          {
            "name": "id",
            "type": {
              "kind": "NON_NULL",
              "ofType": {
                "kind": "SCALAR",
                "name": "Any"
              }
            },
            "args": []
          },
          {
            "name": "isActive",
            "type": {
              "kind": "NON_NULL",
              "ofType": {
                "kind": "SCALAR",
                "name": "Any"
              }
            },
            "args": []
          },
          {
            "name": "kind",
            "type": {
              "kind": "NON_NULL",
              "ofType": {
                "kind": "SCALAR",
                "name": "Any"
              }
            },
            "args": []
          },
          {
            "name": "name",
            "type": {
              "kind": "NON_NULL",
              "ofType": {
                "kind": "SCALAR",
                "name": "Any"
              }
            },
            "args": []
          },
          {
            "name": "picture",
            "type": {
              "kind": "SCALAR",
              "name": "Any"
            },
            "args": []
          },
          {
            "name": "publishedAt",
            "type": {
              "kind": "SCALAR",
              "name": "Any"
            },
            "args": []
          },
          {
            "name": "stage",
            "type": {
              "kind": "NON_NULL",
              "ofType": {
                "kind": "SCALAR",
                "name": "Any"
              }
            },
            "args": []
          },
          {
            "name": "updatedAt",
            "type": {
              "kind": "NON_NULL",
              "ofType": {
                "kind": "SCALAR",
                "name": "Any"
              }
            },
            "args": []
          }
        ],
        "interfaces": [
          {
            "kind": "INTERFACE",
            "name": "Node"
          }
        ]
      },
      {
        "kind": "OBJECT",
        "name": "UserConnection",
        "fields": [
          {
            "name": "aggregate",
            "type": {
              "kind": "NON_NULL",
              "ofType": {
                "kind": "OBJECT",
                "name": "Aggregate",
                "ofType": null
              }
            },
            "args": []
          },
          {
            "name": "edges",
            "type": {
              "kind": "NON_NULL",
              "ofType": {
                "kind": "LIST",
                "ofType": {
                  "kind": "NON_NULL",
                  "ofType": {
                    "kind": "OBJECT",
                    "name": "UserEdge",
                    "ofType": null
                  }
                }
              }
            },
            "args": []
          },
          {
            "name": "pageInfo",
            "type": {
              "kind": "NON_NULL",
              "ofType": {
                "kind": "OBJECT",
                "name": "PageInfo",
                "ofType": null
              }
            },
            "args": []
          }
        ],
        "interfaces": []
      },
      {
        "kind": "OBJECT",
        "name": "UserEdge",
        "fields": [
          {
            "name": "cursor",
            "type": {
              "kind": "NON_NULL",
              "ofType": {
                "kind": "SCALAR",
                "name": "Any"
              }
            },
            "args": []
          },
          {
            "name": "node",
            "type": {
              "kind": "NON_NULL",
              "ofType": {
                "kind": "OBJECT",
                "name": "User",
                "ofType": null
              }
            },
            "args": []
          }
        ],
        "interfaces": []
      },
      {
        "kind": "OBJECT",
        "name": "Version",
        "fields": [
          {
            "name": "createdAt",
            "type": {
              "kind": "NON_NULL",
              "ofType": {
                "kind": "SCALAR",
                "name": "Any"
              }
            },
            "args": []
          },
          {
            "name": "id",
            "type": {
              "kind": "NON_NULL",
              "ofType": {
                "kind": "SCALAR",
                "name": "Any"
              }
            },
            "args": []
          },
          {
            "name": "revision",
            "type": {
              "kind": "NON_NULL",
              "ofType": {
                "kind": "SCALAR",
                "name": "Any"
              }
            },
            "args": []
          },
          {
            "name": "stage",
            "type": {
              "kind": "NON_NULL",
              "ofType": {
                "kind": "SCALAR",
                "name": "Any"
              }
            },
            "args": []
          }
        ],
        "interfaces": []
      },
      {
        "kind": "SCALAR",
        "name": "Any"
      }
    ],
    "directives": []
  }
} as unknown as IntrospectionQuery;