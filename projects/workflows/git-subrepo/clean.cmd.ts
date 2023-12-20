/**
 * @format
 * -----
 * Project: @eventiva/eventiva
 * File: clean.cmd.ts
 * Path: \projects\workflows\git-subrepo\clean.cmd.ts
 * Created Date: Tuesday, December 19th 2023
 * Author: Jonathan Stevens (Email: jonathan.stevens@eventiva.co.uk, Github: https://github.com/TGTGamer)
 * -----
 * Contributing: Please read through our contributing guidelines. Included are directions for opening
 * issues, coding standards, and notes on development. These can be found at https://github.com/eventiva/eventiva/blob/develop/CONTRIBUTING.md
 * 
 * Code of Conduct: This project abides by the Contributor Covenant, version 2.0. Please interact in ways that contribute to an open,
 * welcoming, diverse, inclusive, and healthy community. Our Code of Conduct can be found at https://github.com/eventiva/eventiva/blob/develop/CODE_OF_CONDUCT.md
 * -----
 * Copyright (c) 2023 Eventiva - All Rights Reserved
 * LICENSE: GNU General Public License v3.0 only (GPL-3.0)
 * -----
 * This program has been provided under confidence of the copyright holder and is 
 * licensed for copying, distribution and modification under the terms of
 * the GNU General Public License v3.0 only (GPL-3.0) published as the License,
 * or (at your option) any later version of this license.
 * 
 * This program is distributed in the hope that it will be useful,
 * but WITHOUT ANY WARRANTY; without even the implied warranty of
 * MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
 * Creative Commons Zero v1.0 Universal for more details.
 * 
 * You should have received a copy of the GNU General Public License v3.0 only
 * along with this program. If not, please write to: jonathan.stevens@eventiva.co.uk,
 * or see https://www.gnu.org/licenses/gpl-3.0-standalone.html
 * 
 * DELETING THIS NOTICE AUTOMATICALLY VOIDS YOUR LICENSE - PLEASE SEE THE LICENSE FILE FOR DETAILS
 * -----
 * Last Modified: 20-12-2023
 * By: Jonathan Stevens (Email: jonathan.stevens@eventiva.co.uk, Github: https://github.com/TGTGamer)
 */

import { Command, CommandOptions } from '@teambit/cli';
import chalk from 'chalk';
import { GitSubrepoMain } from './git-subrepo.main.runtime';

const COMMAND_NAME = 'clean';

export class CleanCmd implements Command {
  name = `${COMMAND_NAME} <subdir>|--all|--ALL [-f]`;
  alias = '';
  description = `Remove artifacts created by fetch and branch commands.`;
  options = GitSubrepoMain.subrepoOptions;
  group = 'git';
  commands: Command[] = [];
  private = true;
  helpUrl = 'https://github.com/ingydotnet/git-subrepo';

  constructor(private subrepo: GitSubrepoMain) {}

  async report([subdirectory]: string[], flags: string[]) {
    if (!subdirectory) {
      subdirectory = '--all';
    }
    const res = await this.subrepo.clean(subdirectory, flags);
    if (res) {
      return chalk.green('git subrepo clean was successful');
    }
    return chalk.red('git subrepo clean was unsuccessful');
  }
}