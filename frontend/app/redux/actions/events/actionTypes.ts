import type { CreateEventBody, DeletedEvent, Events, TheEvent, UpdateAnEvent, UpdatedEvent } from "~/features/events/types"

// Fetch Events
export enum EventActionTypes {
    // Get All
    FETCH_EVENTS_REQUEST = 'event/FETCH_EVENTS_REQUEST',
    FETCH_EVENTS_SUCCESS = 'event/FETCH_EVENTS_SUCCESS',
    FETCH_EVENTS_FAILURE = 'event/FETCH_EVENTS_FAILURE',

    // Get All by Id
    FETCH_EVENTS_BY_ID_REQUEST = 'event/FETCH_EVENTS_BY_ID_REQUEST',
    FETCH_EVENTS_BY_ID_SUCCESS = 'event/FETCH_EVENTS_BY_ID_SUCCESS',
    FETCH_EVENTS_BY_ID_FAILURE = 'event/FETCH_EVENTS_BY_ID_FAILURE',

    // Get ONE
    FETCH_ONE_EVENT_REQUEST = 'event/FETCH_ONE_EVENT_REQUEST',
    FETCH_ONE_EVENT_SUCCESS = 'event/FETCH_ONE_EVENT_SUCCESS',
    FETCH_ONE_EVENT_FAILURE = 'event/FETCH_ONE_EVENT_FAILURE',

    // Create one
    CREATE_EVENT_REQUEST = 'event/CREATE_EVENT_REQUEST',
    CREATE_EVENT_SUCCESS = 'event/CREATE_EVENT_SUCCESS',
    CREATE_EVENT_FAILURE = 'event/CREATE_EVENT_FAILURE',

    // Update one
    UPDATE_EVENT_REQUEST = 'event/UPDATE_EVENT_REQUEST',
    UPDATE_EVENT_SUCCESS = 'event/UPDATE_EVENT_SUCCESS',
    UPDATE_EVENT_FAILURE = 'event/UPDATE_EVENT_FAILURE',

    // Delete one
    DELETE_EVENT_REQUEST = 'event/DELETE_EVENT_REQUEST',
    DELETE_EVENT_SUCCESS = 'event/DELETE_EVENT_SUCCESS',
    DELETE_EVENT_FAILURE = 'event/DELETE_EVENT_FAILURE'
}

/* Action Interfaces */

// Fetch all events    -- Public
export interface FetchEventsRequestAction {
    type: EventActionTypes.FETCH_EVENTS_REQUEST
}
export interface FetchEventsSuccessAction {
    type: EventActionTypes.FETCH_EVENTS_SUCCESS,
    payload: Events
}
export interface FetchEventsFailureAction {
    type: EventActionTypes.FETCH_EVENTS_FAILURE,
    payload: { error: string }
}

// Fetch All events by ID  -- Private
export interface FetchEventsByIdRequestAction {
    type: EventActionTypes.FETCH_EVENTS_BY_ID_REQUEST,
    payload: {id: string}
}
export interface FetchEventsByIdSuccessAction {
    type: EventActionTypes.FETCH_EVENTS_BY_ID_SUCCESS,
    payload: Events
}
export interface FetchEventsByIdFailureAction {
    type: EventActionTypes.FETCH_EVENTS_BY_ID_FAILURE,
    payload: { error: string }
}

// Fetch ONE
export interface FetchEventRequestAction {
    type: EventActionTypes.FETCH_ONE_EVENT_REQUEST;
    payload: { id: string };
}
export interface FetchEventSuccessAction {
  type: EventActionTypes.FETCH_ONE_EVENT_SUCCESS;
  payload: TheEvent;
}
export interface FetchEventFailureAction {
  type: EventActionTypes.FETCH_ONE_EVENT_FAILURE;
  payload: { error: string };
}

// Create one
export interface CreateEventRequestAction {
  type: EventActionTypes.CREATE_EVENT_REQUEST;
  payload: CreateEventBody
}
export interface CreateEventSuccessAction {
  type: EventActionTypes.CREATE_EVENT_SUCCESS;
  payload: TheEvent;
}
export interface CreateEventFailureAction {
  type: EventActionTypes.CREATE_EVENT_FAILURE;
  payload: { error: string };
}

// Update
export interface UpdateEventRequestAction {
  type: EventActionTypes.UPDATE_EVENT_REQUEST;
  payload: UpdateAnEvent;
}
export interface UpdateEventSuccessAction {
  type: EventActionTypes.UPDATE_EVENT_SUCCESS;
  payload: UpdatedEvent;
}
export interface UpdateEventFailureAction {
  type: EventActionTypes.UPDATE_EVENT_FAILURE;
  payload: { error: string };
}

// Delete
export interface DeleteEventRequestAction {
  type: EventActionTypes.DELETE_EVENT_REQUEST;
  payload: { id: string };
}
export interface DeleteEventSuccessAction {
  type: EventActionTypes.DELETE_EVENT_SUCCESS;
  payload: DeletedEvent;
}
export interface DeleteEventFailureAction {
  type: EventActionTypes.DELETE_EVENT_FAILURE;
  payload: { error: string };
}

export type EventActions =
  | FetchEventsRequestAction
  | FetchEventsSuccessAction
  | FetchEventsFailureAction
  | FetchEventsByIdRequestAction
  | FetchEventsByIdSuccessAction
  | FetchEventsByIdFailureAction
  | FetchEventRequestAction
  | FetchEventSuccessAction
  | FetchEventFailureAction
  | CreateEventRequestAction
  | CreateEventSuccessAction
  | CreateEventFailureAction
  | UpdateEventRequestAction
  | UpdateEventSuccessAction
  | UpdateEventFailureAction
  | DeleteEventRequestAction
  | DeleteEventSuccessAction
  | DeleteEventFailureAction;



