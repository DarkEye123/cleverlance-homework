import React from 'react';
import { TrackerContext } from '../ctx';

export const useTracker = () => React.useContext(TrackerContext);
