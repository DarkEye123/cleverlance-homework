import React from 'react';
import { Tracker } from './tracker';
const TrackerContext = React.createContext<Tracker | undefined>(undefined);
export { TrackerContext };
