import { actionCreators } from '../../redux';

export default (dispatch, { navigation: { dispatch: navDispatch } }) => ({
  stationNavigationHandler: (station) => actionCreators.navigateToStation({ navDispatch, dispatch }, station),
});
