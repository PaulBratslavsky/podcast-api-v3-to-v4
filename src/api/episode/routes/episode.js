'use strict';

/**
 * episode router.
 */

const { createCoreRouter } = require('@strapi/strapi').factories;

module.exports = createCoreRouter('api::episode.episode');



// OLD V3
// module.exports = {
//   routes: [
//     {
//       method: 'GET',
//       path: '/episodes',
//       handler: 'episode.find',
//       config: { policies: [] }
//     },
//     {
//       method: 'GET',
//       path: '/episodes/:id',
//       handler: 'episode.findOne',
//       config: { policies: [] }
//     },
//     {
//       method: 'POST',
//       path: '/episodes',
//       handler: 'episode.create',
//       config: { policies: [] }
//     },
//     {
//       method: 'PUT',
//       path: '/episodes/:id',
//       handler: 'episode.update',
//       config: { policies: [] }
//     },
//     {
//       method: 'DELETE',
//       path: '/episodes/:id',
//       handler: 'episode.delete',
//       config: { policies: [] }
//     }
//   ]
// }