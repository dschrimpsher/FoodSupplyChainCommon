import { Precipitation, PrecipitationSchema } from "../../model/precipitation";

/**
 * A plugin that provide encapsulated routes
 * @param {FastifyInstance} fastify encapsulated fastify instance
 * @param {Object} options plugin options, refer to https://fastify.dev/docs/latest/Reference/Plugins/#plugin-options
 */
export async function precipitationRoutes (fastify, options) {
  const collection = fastify.mongo.db.collection('precipitations')

  fastify.get('/weather/precipitations', async (request, reply): Promise<Precipitation[]> => {
    return collection.find().toArray();
  })



  fastify.post('/weather/precipitations', { PrecipitationSchema }, async (request, reply): Promise<void> => {
    const precipitation: Precipitation = request.body;
    const result = await collection.insertOne(precipitation);
  })


}
