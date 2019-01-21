'use strict';

/**
 * Enquiry.js controller
 *
 * @description: A set of functions called "actions" for managing `Enquiry`.
 */

module.exports = {

  /**
   * Retrieve enquiry records.
   *
   * @return {Object|Array}
   */

  find: async (ctx) => {
    if (ctx.query._q) {
      return strapi.services.enquiry.search(ctx.query);
    } else {
      return strapi.services.enquiry.fetchAll(ctx.query);
    }
  },

  /**
   * Retrieve a enquiry record.
   *
   * @return {Object}
   */

  findOne: async (ctx) => {
    if (!ctx.params._id.match(/^[0-9a-fA-F]{24}$/)) {
      return ctx.notFound();
    }

    return strapi.services.enquiry.fetch(ctx.params);
  },

  /**
   * Count enquiry records.
   *
   * @return {Number}
   */

  count: async (ctx) => {
    return strapi.services.enquiry.count(ctx.query);
  },

  /**
   * Create a/an enquiry record.
   *
   * @return {Object}
   */

  create: async (ctx) => {
    return strapi.services.enquiry.add(ctx.request.body);
  },

  /**
   * Update a/an enquiry record.
   *
   * @return {Object}
   */

  update: async (ctx, next) => {
    return strapi.services.enquiry.edit(ctx.params, ctx.request.body) ;
  },

  /**
   * Destroy a/an enquiry record.
   *
   * @return {Object}
   */

  destroy: async (ctx, next) => {
    return strapi.services.enquiry.remove(ctx.params);
  }
};
