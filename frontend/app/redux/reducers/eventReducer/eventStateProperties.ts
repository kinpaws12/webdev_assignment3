import type { Events, TheEvent } from "~/features/events/types";

export interface EventState {
  items: Events;
  current: TheEvent | null;
  loading: boolean;
  updating: boolean;
  deleting: boolean;
  error: string | null;
}

export const initialEventState: EventState = {
  items: [],
  current: null,
  loading: false,
  updating: false,
  deleting: false,
  error: null
};