import { Condition, ConditionSchema } from "../../model/condition";

/**
 * A plugin that provide encapsulated routes
 * @param {FastifyInstance} fastify encapsulated fastify instance
 * @param {Object} options plugin options, refer to https://fastify.dev/docs/latest/Reference/Plugins/#plugin-options
 */
export async function conditionRoutes (fastify, options) {
  const collection = fastify.mongo.db.collection('conditions')

  fastify.get('/soil/conditions', async (request, reply): Promise<Condition[]> => {
    return collection.find().toArray();
  })



  fastify.post('/soil/conditions', { ConditionSchema }, async (request, reply): Promise<void> => {
    const condition: Condition = request.body;
    const result = await collection.insertOne(condition);
  })


}
