import { EventActionTypes, type EventActions } from "~/redux/actions/events/actionTypes";
import { type EventState, initialEventState } from "./eventStateProperties";

export default function eventReducer(
  state = initialEventState,
  action: EventActions
): EventState {
    switch (action.type) {
    // Fetch All
    case EventActionTypes.FETCH_EVENTS_REQUEST:
      return { 
        ...state, 
        loading: true, 
        error: null 
    };
    case EventActionTypes.FETCH_EVENTS_SUCCESS:
      return {
        ...state,
        loading: false,
        items: action.payload,
        error: null,
      };
    case EventActionTypes.FETCH_EVENTS_FAILURE:
      return { 
        ...state, 
        loading: false, 
        error: action.payload.error 
    };

    // Fetch one
    case EventActionTypes.FETCH_ONE_EVENT_REQUEST:
      return { 
        ...state, 
        loading: true, 
        error: null 
    };
    case EventActionTypes.FETCH_ONE_EVENT_SUCCESS:
      return { 
        ...state, 
        loading: false, 
        current: action.payload
    };

    case EventActionTypes.FETCH_ONE_EVENT_FAILURE:
      return { 
        ...state, 
        loading: false, 
        error: action.payload.error 
    };

    // CREATE 
    case EventActionTypes.CREATE_EVENT_REQUEST:
      return { 
        ...state, 
        updating: true, 
        error: null 
    };

    case EventActionTypes.CREATE_EVENT_SUCCESS:
      return {
        ...state,
        updating: false,
        items: [...state.items, action.payload],
        current: action.payload,
      };

    case EventActionTypes.CREATE_EVENT_FAILURE:
      return { 
        ...state, 
        updating: false, 
        error: action.payload.error 
    };

    // Update
    case EventActionTypes.UPDATE_EVENT_REQUEST:
      return { 
        ...state, 
        updating: true, 
        error: null 
    };

    case EventActionTypes.UPDATE_EVENT_SUCCESS:
      return {
        ...state,
        updating: false,
        items: state.items.map((e) =>
          e.id === action.payload.id ? action.payload : e
        ),
        current:
          state.current?.id === action.payload.id
            ? action.payload
            : state.current,
      };

    case EventActionTypes.UPDATE_EVENT_FAILURE:
      return { 
        ...state, 
        updating: false, 
        error: action.payload.error 
    };

    //DELETE
    case EventActionTypes.DELETE_EVENT_REQUEST:
      return { 
        ...state, 
        deleting: true, 
        error: null 
    };

    case EventActionTypes.DELETE_EVENT_SUCCESS:
      return {
        ...state,
        deleting: false,
        items: state.items.filter((e) => e.id !== action.payload.id),
        current:
          state.current?.id === action.payload.id ? null : state.current,
      };

    case EventActionTypes.DELETE_EVENT_FAILURE:
      return { 
        ...state, 
        deleting: false, 
        error: action.payload.error 
    };

    /* ───────── DEFAULT ───────── */
    default:
      return state;
    }
}