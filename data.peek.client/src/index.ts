import { UmbEntryPointOnInit } from '@umbraco-cms/backoffice/extension-api';
export const onInit: UmbEntryPointOnInit = (_host, _extensionRegistry) => {

    console.log('Hello from Data.Peek');

    // We can register many manifests at once via code 
    // as opposed to a long umbraco-package.json file
    // _extensionRegistry.registerMany([
    //     ...entityActionManifests,
    //     ...modalManifests
    // ]);
};