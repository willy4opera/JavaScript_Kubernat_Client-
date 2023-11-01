/**
 * Kubernetes
 * No description provided (generated by Openapi Generator https://github.com/openapitools/openapi-generator)
 *
 * The version of the OpenAPI document: release-1.28
 * 
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */

import { RequestFile } from './models';

/**
* EventSource contains information for an event.
*/
export class V1EventSource {
    /**
    * Component from which the event is generated.
    */
    'component'?: string;
    /**
    * Node name on which the event is generated.
    */
    'host'?: string;

    static discriminator: string | undefined = undefined;

    static attributeTypeMap: Array<{name: string, baseName: string, type: string}> = [
        {
            "name": "component",
            "baseName": "component",
            "type": "string"
        },
        {
            "name": "host",
            "baseName": "host",
            "type": "string"
        }    ];

    static getAttributeTypeMap() {
        return V1EventSource.attributeTypeMap;
    }
}

