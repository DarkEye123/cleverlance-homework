import Rollbar from 'rollbar';

export interface Tracker {
  info: (...args: string[]) => void;
  debug: (...args: string[]) => void;
}

const rollbar = new Rollbar({
  accessToken: process.env.REACT_APP_ROLLBAR_ACCESS_TOKEN,
  captureUncaught: true,
  captureUnhandledRejections: true,
});

debugger;
export default rollbar as Tracker;
