import * as actions from "../actions/actionType";

const initialState = {
  msg: "",
  status: "",
  genres: [],
  trending: [],
  movieDetail: {},
  search: [],
  isPending: false,
  isFulfilled: false,
  isRejected: false,
};

const movieReducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case actions.GET_GENRES + actions.PENDING:
      return {
        ...state,
        isPending: true,
      };
    case actions.GET_GENRES + actions.REJECTED:
      return {
        ...state,
        isPending: false,
        isRejected: true,
        isFulfilled: false,
      };
    case actions.GET_GENRES + actions.FULFILLED:
      if (payload.status === 200) {
        return {
          ...state,
          isPending: false,
          isFulfilled: true,
          genres: payload.data.genres,
          // status: payload.data.data.msg,
        };
      } else {
        return {
          ...state,
          isPending: false,
          isRejected: true,
          isFulfilled: true,
          // status: payload.data.data.msg,
        };
      }

    case actions.FETCH_ALL_MOVIE_TRENDING + actions.PENDING:
      return {
        ...state,
        isPending: true,
      };
    case actions.FETCH_ALL_MOVIE_TRENDING + actions.REJECTED:
      return {
        ...state,
        isPending: false,
        isRejected: true,
        isFulfilled: false,
      };
    case actions.FETCH_ALL_MOVIE_TRENDING + actions.FULFILLED:
      if (payload.status === 200) {
        return {
          ...state,
          isPending: false,
          isFulfilled: true,
          trending: payload.data.results,
          // status: payload.data.data.msg,
        };
      } else {
        return {
          ...state,
          isPending: false,
          isRejected: true,
          isFulfilled: true,
        };
      }

    case actions.FETCH_ALL_MOVIE_POPULAR + actions.PENDING:
      return {
        ...state,
        isPending: true,
      };
    case actions.FETCH_ALL_MOVIE_POPULAR + actions.REJECTED:
      return {
        ...state,
        isPending: false,
        isRejected: true,
        isFulfilled: false,
      };
    case actions.FETCH_ALL_MOVIE_POPULAR + actions.FULFILLED:
      if (payload.status === 200) {
        return {
          ...state,
          isPending: false,
          isFulfilled: true,
          popular: payload.data.results,
          // status: payload.data.data.msg,
        };
      } else {
        return {
          ...state,
          isPending: false,
          isRejected: true,
          isFulfilled: true,
        };
      }

    case actions.GET_MOVIE_BY_ID + actions.PENDING:
      return {
        ...state,
        isPending: true,
      };
    case actions.GET_MOVIE_BY_ID + actions.REJECTED:
      return {
        ...state,
        isPending: false,
        isRejected: true,
        isFulfilled: false,
        status: payload.status_message,
        // msg: payload.data.data.msg,
      };
    case actions.GET_MOVIE_BY_ID + actions.FULFILLED:
      console.log("redux", payload.data);
      return {
        ...state,
        movieDetail: payload.data,
        isPending: false,
        isRejected: false,
        isFulfilled: true,
        // status: payload.data.data.msg,
      };

    case actions.GET_REVIEW_BY_MOVIE_ID + actions.PENDING:
      return {
        ...state,
        isPending: true,
      };
    case actions.GET_REVIEW_BY_MOVIE_ID + actions.REJECTED:
      return {
        ...state,
        isPending: false,
        isRejected: true,
        isFulfilled: false,
        status: payload.status_message,
        // msg: payload.data.data.msg,
      };
    case actions.GET_REVIEW_BY_MOVIE_ID + actions.FULFILLED:
      console.log("REVIEW", payload.data);
      return {
        ...state,
        movieReviewDetail: payload.data.results,
        isPending: false,
        isRejected: false,
        isFulfilled: true,
        // status: payload.data.data.msg,
      };

    case actions.GET_MOVIE_BY_SEARCHING + actions.PENDING:
      return {
        ...state,
        isPending: true,
      };
    case actions.GET_MOVIE_BY_SEARCHING + actions.REJECTED:
      return {
        ...state,
        isPending: false,
        isRejected: true,
        isFulfilled: false,
      };
    case actions.GET_MOVIE_BY_SEARCHING + actions.FULFILLED:
      if (payload.status === 200) {
        return {
          ...state,
          isPending: false,
          isFulfilled: true,
          search: payload.data.results,
          // status: payload.data.data.msg,
        };
      } else {
        return {
          ...state,
          isPending: false,
          isRejected: true,
          isFulfilled: true,
        };
      }

    default:
      return state;
  }
};

export default movieReducer;
