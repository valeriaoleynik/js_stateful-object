'use strict';

/**
 * @param {Object} state
 * @param {Object[]} actions
 */
function transformState(state, actions) {
  const caseDefault = 'An error because of an unknown type';

  for (const action of actions) {
    switch (action.type) {
      case 'addProperties':
        Object.assign(state, { ...action.extraData });
        break;

      case 'removeProperties':
        for (const key of action.keysToRemove) {
          delete state[key];
        }
        break;

      case 'clear':
        for (const key in state) {
          delete state[key];
        }
        break;

      default:
        return caseDefault;
    }
  }
}

module.exports = transformState;
