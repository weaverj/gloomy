import React from 'react';

import { BugIcon } from '../../components/Icons';
import Issue from './Issue';

export default () => (
  <div className="col-12">
    <h4>Version 0.1.4</h4>
    <ul>
      <li>
        <BugIcon />
        Bug Fix: Disable scenario reward dialogs on failed campaign scenarios (<Issue number="3" />)
      </li>
      <li>
        <BugIcon />
        Bug Fix: Allow Sanctuary Donations after failed campaign scenarios (<Issue number="4" />)
      </li>
    </ul>
    <h4>Version 0.1.3</h4>
    <ul>
      <li>
        <BugIcon />
        Bug Fix: Road events were not being properly triggered (<Issue number="1" />)
      </li>
      <li>
        <BugIcon />
        Bug Fix: Some items were incorrectly being excluded from the receive/unlock item dialogs (<Issue number="2" />)
      </li>
    </ul>
  </div>
);