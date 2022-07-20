import { ApolloServer } from "apollo-server-micro";
import "reflect-metadata";
import { buildSchema } from "type-graphql";

// Resolvers
import { CourseResolver } from "../../src/schema/course.resolver";

const schema = await buildSchema({
  resolvers: [CourseResolver],
});

const server = new ApolloServer({
  schema,
});

// Dont want nextjs to parse body of the server func
export const config = {
  api: {
    bodyParser: false,
  },
};

const startServer = server.start();

// Request handler
export default async function handler(req: any, res: any) {
  await startServer;
  await server.createHandler({ path: "/api/graphql" })(req, res);
}