/*
 * Code generated by Microsoft (R) AutoRest Code Generator.
 * Changes may cause incorrect behavior and will be lost if the code is
 * regenerated.
 */

'use strict';

const models = require('./index');

/**
 * Google notification configuration result.
 *
 * @extends models['NotificationConfigResult']
 */
class NotificationConfigGoogleResult extends models['NotificationConfigResult'] {
  /**
   * Create a NotificationConfigGoogleResult.
   * @member {string} googleApiKey GCM API key.
   */
  constructor() {
    super();
  }

  /**
   * Defines the metadata of NotificationConfigGoogleResult
   *
   * @returns {object} metadata of NotificationConfigGoogleResult
   *
   */
  mapper() {
    return {
      required: false,
      serializedName: 'gcm_config',
      type: {
        name: 'Composite',
        polymorphicDiscriminator: {
          serializedName: 'type',
          clientName: 'type'
        },
        uberParent: 'NotificationConfigResult',
        className: 'NotificationConfigGoogleResult',
        modelProperties: {
          type: {
            required: true,
            serializedName: 'type',
            isPolymorphicDiscriminator: true,
            type: {
              name: 'String'
            }
          },
          googleApiKey: {
            required: true,
            serializedName: 'google_api_key',
            type: {
              name: 'String'
            }
          }
        }
      }
    };
  }
}

module.exports = NotificationConfigGoogleResult;
