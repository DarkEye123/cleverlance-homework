import { ApolloError } from '@apollo/client';

export type Message = { message?: string; id: number };

export interface CloseHandler {
  onClose: (id: number) => void;
}

interface ResultShape {
  result?: {
    errors: Message[];
  };
}

export interface Selected {
  selected: Number | null;
}

export type NetworkError = {
  networkError?: (ResultShape & Error) | null;
} & ApolloError;
