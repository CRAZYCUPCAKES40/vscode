/*---------------------------------------------------------------------------------------------
 *  Copyright (c) Microsoft Corporation. All rights reserved.
 *  Licensed under the MIT License. See License.txt in the project root for license information.
 *--------------------------------------------------------------------------------------------*/
'use strict';

import { createDecorator } from 'vs/platform/instantiation/common/instantiation';

export const IQuickInputService = createDecorator<IQuickInputService>('quickInputService');

export interface IQuickInputService {

	_serviceBrand: any;

	pick<T extends { label: string; }>(picks: T[]/* , options?: IInputOptions, token?: CancellationToken */): Promise<T[]>;
}
