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
import { V1ObjectMeta } from './v1ObjectMeta';
import { V1TopologySelectorTerm } from './v1TopologySelectorTerm';

/**
* StorageClass describes the parameters for a class of storage for which PersistentVolumes can be dynamically provisioned.  StorageClasses are non-namespaced; the name of the storage class according to etcd is in ObjectMeta.Name.
*/
export class V1StorageClass {
    /**
    * allowVolumeExpansion shows whether the storage class allow volume expand.
    */
    'allowVolumeExpansion'?: boolean;
    /**
    * allowedTopologies restrict the node topologies where volumes can be dynamically provisioned. Each volume plugin defines its own supported topology specifications. An empty TopologySelectorTerm list means there is no topology restriction. This field is only honored by servers that enable the VolumeScheduling feature.
    */
    'allowedTopologies'?: Array<V1TopologySelectorTerm>;
    /**
    * APIVersion defines the versioned schema of this representation of an object. Servers should convert recognized schemas to the latest internal value, and may reject unrecognized values. More info: https://git.k8s.io/community/contributors/devel/sig-architecture/api-conventions.md#resources
    */
    'apiVersion'?: string;
    /**
    * Kind is a string value representing the REST resource this object represents. Servers may infer this from the endpoint the client submits requests to. Cannot be updated. In CamelCase. More info: https://git.k8s.io/community/contributors/devel/sig-architecture/api-conventions.md#types-kinds
    */
    'kind'?: string;
    'metadata'?: V1ObjectMeta;
    /**
    * mountOptions controls the mountOptions for dynamically provisioned PersistentVolumes of this storage class. e.g. [\"ro\", \"soft\"]. Not validated - mount of the PVs will simply fail if one is invalid.
    */
    'mountOptions'?: Array<string>;
    /**
    * parameters holds the parameters for the provisioner that should create volumes of this storage class.
    */
    'parameters'?: { [key: string]: string; };
    /**
    * provisioner indicates the type of the provisioner.
    */
    'provisioner': string;
    /**
    * reclaimPolicy controls the reclaimPolicy for dynamically provisioned PersistentVolumes of this storage class. Defaults to Delete.
    */
    'reclaimPolicy'?: string;
    /**
    * volumeBindingMode indicates how PersistentVolumeClaims should be provisioned and bound.  When unset, VolumeBindingImmediate is used. This field is only honored by servers that enable the VolumeScheduling feature.
    */
    'volumeBindingMode'?: string;

    static discriminator: string | undefined = undefined;

    static attributeTypeMap: Array<{name: string, baseName: string, type: string}> = [
        {
            "name": "allowVolumeExpansion",
            "baseName": "allowVolumeExpansion",
            "type": "boolean"
        },
        {
            "name": "allowedTopologies",
            "baseName": "allowedTopologies",
            "type": "Array<V1TopologySelectorTerm>"
        },
        {
            "name": "apiVersion",
            "baseName": "apiVersion",
            "type": "string"
        },
        {
            "name": "kind",
            "baseName": "kind",
            "type": "string"
        },
        {
            "name": "metadata",
            "baseName": "metadata",
            "type": "V1ObjectMeta"
        },
        {
            "name": "mountOptions",
            "baseName": "mountOptions",
            "type": "Array<string>"
        },
        {
            "name": "parameters",
            "baseName": "parameters",
            "type": "{ [key: string]: string; }"
        },
        {
            "name": "provisioner",
            "baseName": "provisioner",
            "type": "string"
        },
        {
            "name": "reclaimPolicy",
            "baseName": "reclaimPolicy",
            "type": "string"
        },
        {
            "name": "volumeBindingMode",
            "baseName": "volumeBindingMode",
            "type": "string"
        }    ];

    static getAttributeTypeMap() {
        return V1StorageClass.attributeTypeMap;
    }
}

