'use strict'

const UserHook = exports = module.exports = {}

/**
 * Hash using password as a hook.
 *
 * @method
 *
 * @param  {Object} userInstance
 *
 * @return {void}
 */
UserHook.hashPassword = async (userInstance) => {
    if (userInstance.password) {
      userInstance.password = await Hash.make(userInstance.password)
    }
  }
