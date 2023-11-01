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
* EndpointPort is a tuple that describes a single port.
*/
export class CoreV1EndpointPort {
    /**
    * The application protocol for this port. This is used as a hint for implementations to offer richer behavior for protocols that they understand. This field follows standard Kubernetes label syntax. Valid values are either:  * Un-prefixed protocol names - reserved for IANA standard service names (as per RFC-6335 and https://www.iana.org/assignments/service-names).  * Kubernetes-defined prefixed names:   * \'kubernetes.io/h2c\' - HTTP/2 over cleartext as described in https://www.rfc-editor.org/rfc/rfc7540   * \'kubernetes.io/ws\'  - WebSocket over cleartext as described in https://www.rfc-editor.org/rfc/rfc6455   * \'kubernetes.io/wss\' - WebSocket over TLS as described in https://www.rfc-editor.org/rfc/rfc6455  * Other protocols should use implementation-defined prefixed names such as mycompany.com/my-custom-protocol.
    */
    'appProtocol'?: string;
    /**
    * The name of this port.  This must match the \'name\' field in the corresponding ServicePort. Must be a DNS_LABEL. Optional only if one port is defined.
    */
    'name'?: string;
    /**
    * The port number of the endpoint.
    */
    'port': number;
    /**
    * The IP protocol for this port. Must be UDP, TCP, or SCTP. Default is TCP.
    */
    'protocol'?: string;

    static discriminator: string | undefined = undefined;

    static attributeTypeMap: Array<{name: string, baseName: string, type: string}> = [
        {
            "name": "appProtocol",
            "baseName": "appProtocol",
            "type": "string"
        },
        {
            "name": "name",
            "baseName": "name",
            "type": "string"
        },
        {
            "name": "port",
            "baseName": "port",
            "type": "number"
        },
        {
            "name": "protocol",
            "baseName": "protocol",
            "type": "string"
        }    ];

    static getAttributeTypeMap() {
        return CoreV1EndpointPort.attributeTypeMap;
    }
}
