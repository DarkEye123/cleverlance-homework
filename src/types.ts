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

export type NetworkError = {
  networkError?: (ResultShape & Error) | null;
} & ApolloError;
