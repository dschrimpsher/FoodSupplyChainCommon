import { Temperature, TemperatureSchema } from "../../model/temperature";

/**
 * A plugin that provide encapsulated routes
 * @param {FastifyInstance} fastify encapsulated fastify instance
 * @param {Object} options plugin options, refer to https://fastify.dev/docs/latest/Reference/Plugins/#plugin-options
 */
export async function temperatureRoutes (fastify, options) {
  const collection = fastify.mongo.db.collection('temperatures')

  fastify.get('/weather/temperatures', async (request, reply): Promise<Temperature[]> => {
    return collection.find().toArray();
  })



  fastify.post('/weather/temperatures', { TemperatureSchema }, async (request, reply): Promise<void> => {
    const temperature: Temperature = request.body;
    const result = await collection.insertOne(temperature);
  })


}
