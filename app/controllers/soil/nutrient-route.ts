import { Nutrient, NutrientSchema } from "../../model/nutrient";

/**
 * A plugin that provide encapsulated routes
 * @param {FastifyInstance} fastify encapsulated fastify instance
 * @param {Object} options plugin options, refer to https://fastify.dev/docs/latest/Reference/Plugins/#plugin-options
 */
export async function nutrientRoutes (fastify, options) {
  const collection = fastify.mongo.db.collection('nutrients')

  fastify.get('/soil/nutrients', async (request, reply): Promise<Nutrient[]> => {
    return collection.find().toArray();
  })



  fastify.post('/soil/nutrients', { NutrientSchema }, async (request, reply): Promise<void> => {
    const nutrient: Nutrient = request.body;
    const result = await collection.insertOne(nutrient);
  })


}
