import {
	INodeExecutionData,
	INodeType,
	INodeTypeDescription,
	IExecuteFunctions,
	NodeConnectionType,
} from 'n8n-workflow';
// import { resourceOptions } from "./resources";
// import { listOperationOptions, subscriberOperationOptions, transactionalOperationOptions } from "./operations";
// import { getExecuteFunctions } from 'n8n-core';

export class FriendGrid implements INodeType {
	description: INodeTypeDescription = {
		displayName: 'Unzip',
		name: 'unzip',
		icon: {
			dark: 'file:Unzip.icon.svg',
			light: 'file:Unzip.icon.svg',
		},
		group: ['transform'],
		version: [1],
		defaultVersion: 1,
		defaults: {
			name: 'Unzip',
		},
		subtitle: '={{ $parameter["resource"] + " (" + $parameter["operation"] + ")" }}',
		description: 'unzips a file.',
		// eslint-disable-next-line n8n-nodes-base/node-class-description-inputs-wrong-regular-node
		inputs: [],
		// eslint-disable-next-line n8n-nodes-base/node-class-description-outputs-wrong
		outputs: [NodeConnectionType.Main],
		properties: [
		//   // Resources and operations will go here
		],
	};
	// The execute method will go here
	async execute(this: IExecuteFunctions): Promise<INodeExecutionData[][]> {}
}

// export class Unzip implements INodeType {
//   description: INodeTypeDescription = {
//     displayName: 'Unzip',
//     name: 'unzip',
//     icon: {
//       dark: 'file:Unzip.icon.svg',
//       light: 'file:Unzip.icon.svg',
//     },
//     group: ['transform'],
//     version: [1],
//     defaultVersion: 1,
//     subtitle: '={{ $parameter["resource"] + " (" + $parameter["operation"] + ")" }}',
//     description: 'unzips a file.',
//     defaults: {
//       name: 'Unzip',
//     },
//     inputs: ['main'],
//     outputs: ['main'],
//     requestDefaults: {
//       baseURL: '={{ $credentials.host.replace(new RegExp("/$"), "") + "/api" }}',
//       headers: {
//         Accept: 'application/json',
//         'Content-Type': 'application/json',
//       }
//     },
//     properties: [
//       resourceOptions,
//       ...subscriberOperationOptions,
//       ...listOperationOptions,
//       ...transactionalOperationOptions,
//     ]
//   };
// }
