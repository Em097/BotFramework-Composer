// Copyright (c) Microsoft Corporation.
// Licensed under the MIT License.

import { dialogsDispatcher } from './dialogs';
import { projectDispatcher } from './project';
import { applicationDispatcher } from './application';
import { editorDispatcher } from './editor';
import { storageDispatcher } from './storage';
import { exportDispatcher } from './export';
import { lgDispatcher } from './lg';
import { luDispatcher } from './lu';
import { navigationDispatcher } from './navigation';
import { publisherDispatcher } from './publisher';
import { settingsDispatcher } from './setting';
import { skillDispatcher } from './skill';
import { ejectDispatcher } from './eject';

const dispatchers = [
  editorDispatcher,
  dialogsDispatcher,
  projectDispatcher,
  applicationDispatcher,
  storageDispatcher,
  exportDispatcher,
  lgDispatcher,
  luDispatcher,
  navigationDispatcher,
  publisherDispatcher,
  settingsDispatcher,
  skillDispatcher,
  ejectDispatcher,
];

export default dispatchers;