import { Composition, CompositionSchema } from "../../model/composition";

/**
 * A plugin that provide encapsulated routes
 * @param {FastifyInstance} fastify encapsulated fastify instance
 * @param {Object} options plugin options, refer to https://fastify.dev/docs/latest/Reference/Plugins/#plugin-options
 */
export async function compositionRoutes (fastify, options) {
  const collection = fastify.mongo.db.collection('compositions')

  fastify.get('/soil/compositions', async (request, reply): Promise<Composition[]> => {
    return collection.find().toArray();
  })



  fastify.post('/soil/compositions', { CompositionSchema }, async (request, reply): Promise<void> => {
    const composition: Composition = request.body;
    const result = await collection.insertOne(composition);
  })


}
