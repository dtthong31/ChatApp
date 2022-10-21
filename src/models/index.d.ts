import { ModelInit, MutableModel } from "@aws-amplify/datastore";

type AppChatMetaData = {
  readOnlyFields: 'createdAt' | 'updatedAt';
}

type EagerAppChat = {
  readonly id: string;
  readonly name: string;
  readonly status?: string | null;
  readonly image?: string | null;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

type LazyAppChat = {
  readonly id: string;
  readonly name: string;
  readonly status?: string | null;
  readonly image?: string | null;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

export declare type AppChat = LazyLoading extends LazyLoadingDisabled ? EagerAppChat : LazyAppChat

export declare const AppChat: (new (init: ModelInit<AppChat, AppChatMetaData>) => AppChat) & {
  copyOf(source: AppChat, mutator: (draft: MutableModel<AppChat, AppChatMetaData>) => MutableModel<AppChat, AppChatMetaData> | void): AppChat;
}