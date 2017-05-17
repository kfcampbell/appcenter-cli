/*
 * Code generated by Microsoft (R) AutoRest Code Generator 0.17.0.0
 * Changes may cause incorrect behavior and will be lost if the code is
 * regenerated.
 */

'use strict';

/**
 * @class
 * Initializes a new instance of the StoreDestinationDetails class.
 * @constructor
 * @member {string} [destPublishId] destination ID identifying a unique id in
 * distribution store.
 * 
 * @member {string} [storeType] type of store. Possible values include:
 * 'intune'
 * 
 * @member {string} [appId] app id of application.
 * 
 */
function StoreDestinationDetails() {
}

/**
 * Defines the metadata of StoreDestinationDetails
 *
 * @returns {object} metadata of StoreDestinationDetails
 *
 */
StoreDestinationDetails.prototype.mapper = function () {
  return {
    required: false,
    serializedName: 'StoreDestinationDetails',
    type: {
      name: 'Composite',
      className: 'StoreDestinationDetails',
      modelProperties: {
        destPublishId: {
          required: false,
          serializedName: 'dest_publish_id',
          type: {
            name: 'String'
          }
        },
        storeType: {
          required: false,
          serializedName: 'store_type',
          type: {
            name: 'String'
          }
        },
        appId: {
          required: false,
          serializedName: 'appId',
          type: {
            name: 'String'
          }
        }
      }
    }
  };
};

module.exports = StoreDestinationDetails;