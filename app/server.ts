// ESM
import Fastify from 'fastify'
import { nutrientRoutes, conditionRoutes, compositionRoutes, temperatureRoutes, precipitationRoutes } from './controllers'
import dbConnector from './services/mongo-db-connector'

/**
 * @type {import('fastify').FastifyInstance} Instance of Fastify
 */
const fastify = Fastify({
  logger: true
})
fastify.register(dbConnector);
fastify.register(compositionRoutes);
fastify.register(conditionRoutes);
fastify.register(nutrientRoutes);
fastify.register(precipitationRoutes);
fastify.register(temperatureRoutes);

fastify.listen({ port: 3000 }, function (err, address) {
  if (err) {
    fastify.log.error(err)
    process.exit(1)
  }
  // Server is now listening on ${address}
})
