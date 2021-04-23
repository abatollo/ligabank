// import {ActionCreator} from './action';
// import {AuthorizationStatus} from '../const';
// import {APIRoutes, APIRouteMethods, Routes} from '../routes';
// import {adaptHotelsToClient, adaptHotelToClient, adaptCommentsToClient} from '../utils/adapter';

// export const fetchHotels = () => (dispatch, _getState, api) => {
//   dispatch(ActionCreator.fetchHotelsStart());

//   api.get(APIRoutes.HOTELS)
//     .then(({data}) => {
//       dispatch(ActionCreator.fetchHotelsSuccess(adaptHotelsToClient(data)));
//     })
//     .catch(() => {
//       dispatch(ActionCreator.fetchHotelsFail());
//     });
// };

// export const setFavoriteList = (id, status, isAuthorized) => (dispatch, _getState, api) => {
//   if (isAuthorized) {
//     dispatch(ActionCreator.setFavoriteListStart());

//     api.post(APIRouteMethods.setFavorite(id, status))
//       .then(({data}) => {
//         const hotels = _getState().hotels;
//         dispatch(ActionCreator.setFavoriteListSuccess(hotels.map((hotel) => hotel.id === id ? adaptHotelToClient(data) : hotel)));
//       })
//       .catch(() => {
//         dispatch(ActionCreator.setFavoriteListFail());
//       });
//   } else {
//     dispatch(ActionCreator.redirectToRoute(Routes.LOGIN));
//   }
// };

// export const fetchHotel = (id) => (dispatch, _getState, api) => {
//   dispatch(ActionCreator.fetchHotelStart());

//   api.get(APIRouteMethods.fetchHotel(id))
//     .then(({data}) => {
//       dispatch(ActionCreator.fetchHotelSuccess(adaptHotelToClient(data)));
//     })
//     .catch(() => {
//       dispatch(ActionCreator.fetchHotelFail());
//     });
// };

// export const setFavorite = (id, status, isAuthorized) => (dispatch, _getState, api) => {
//   if (isAuthorized) {
//     dispatch(ActionCreator.setFavoriteStart());

//     api.post(APIRouteMethods.setFavorite(id, status))
//       .then(({data}) => {
//         dispatch(ActionCreator.setFavoriteSuccess(data));
//       })
//       .catch(() => {
//         dispatch(ActionCreator.setFavoriteFail());
//       });
//   } else {
//     dispatch(ActionCreator.redirectToRoute(Routes.LOGIN));
//   }
// };

// export const fetchComments = (id) => (dispatch, _getState, api) => {
//   dispatch(ActionCreator.fetchCommentsStart());

//   api.get(APIRouteMethods.fetchHotelComments(id))
//     .then(({data}) => {
//       dispatch(ActionCreator.fetchCommentsSuccess(adaptCommentsToClient(data)));
//     })
//     .catch(() => {
//       dispatch(ActionCreator.fetchCommentsFail());
//     });
// };

// export const sendComment = (id, review) => (dispatch, _getState, api) => {
//   dispatch(ActionCreator.sendCommentStart());

//   api.post(APIRouteMethods.sendHotelComment(id), review)
//     .then(({data}) => {
//       dispatch(ActionCreator.sendCommentSuccess());
//       dispatch(ActionCreator.fetchCommentsSuccess(adaptCommentsToClient(data)));
//     })
//     .catch(() => {
//       dispatch(ActionCreator.sendCommentFail());
//     });
// };

// export const fetchNearbyHotels = (id) => (dispatch, _getState, api) => {
//   dispatch(ActionCreator.fetchNearbyHotelsStart());

//   api.get(APIRouteMethods.fetchHotelsNearby(id))
//     .then(({data}) => {
//       dispatch(ActionCreator.fetchNearbyHotelsSuccess(adaptHotelsToClient(data)));
//     })
//     .catch(() => {
//       dispatch(ActionCreator.fetchNearbyHotelsFail());
//     });
// };

// export const setFavoriteNearby = (id, status, isAuthorized) => (dispatch, _getState, api) => {
//   if (isAuthorized) {
//     dispatch(ActionCreator.setFavoriteNearbyStart());

//     api.post(APIRouteMethods.setFavorite(id, status))
//       .then(({data}) => {
//         const nearbyHotels = _getState().nearbyHotels;
//         dispatch(ActionCreator.setFavoriteNearbySuccess(nearbyHotels.map((hotel) => hotel.id === id ? adaptHotelToClient(data) : hotel)));
//       })
//       .catch(() => {
//         dispatch(ActionCreator.setFavoriteNearbyFail());
//       });
//   } else {
//     dispatch(ActionCreator.redirectToRoute(Routes.LOGIN));
//   }
// };

// export const fetchFavoriteHotels = () => (dispatch, _getState, api) => {
//   dispatch(ActionCreator.fetchFavoriteHotelsStart());

//   api.get(APIRoutes.FAVORITE)
//     .then(({data}) => {
//       dispatch(ActionCreator.fetchFavoriteHotelsSuccess(adaptHotelsToClient(data)));
//     })
//     .catch(() => {
//       dispatch(ActionCreator.fetchFavoriteHotelsFail());
//     });
// };

// export const setFavoriteFavorites = (id, status, isAuthorized) => (dispatch, _getState, api) => {
//   if (isAuthorized) {
//     dispatch(ActionCreator.setFavoriteFavoritesStart());

//     api.post(APIRouteMethods.setFavorite(id, status))
//       .then(({data}) => {
//         const favoriteHotels = _getState().favoriteHotels;
//         dispatch(ActionCreator.setFavoriteFavoritesSuccess(favoriteHotels.map((hotel) => hotel.id === id ? adaptHotelToClient(data) : hotel)));
//       })
//       .catch(() => {
//         dispatch(ActionCreator.setFavoriteFavoritesFail());
//       });
//   } else {
//     dispatch(ActionCreator.redirectToRoute(Routes.LOGIN));
//   }
// };

// export const checkAuth = () => (dispatch, _getState, api) => (
//   api.get(APIRoutes.LOGIN)
//     .then(() => dispatch(ActionCreator.requireAuthorization(AuthorizationStatus.AUTH)))
//     .catch(() => {})
// );

// export const login = ({login: email, password}) => (dispatch, _getState, api) => (
//   api.post(APIRoutes.LOGIN, {email, password})
//     .then(() => {
//       dispatch(ActionCreator.requireAuthorization(AuthorizationStatus.AUTH));
//       dispatch(ActionCreator.changeEmail(email));
//     })
//     .then(() => dispatch(ActionCreator.redirectToRoute(Routes.FAVORITES)))
// );
