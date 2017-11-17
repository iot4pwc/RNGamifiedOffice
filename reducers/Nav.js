import { RootNavigator } from '../components/Nav';

export const Nav = (state, action) => {
  const nextState = RootNavigator.router.getStateForAction(action, state);
  return nextState || state;
};
