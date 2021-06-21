const { resolve } = require('path');

const createApolloConfig = (
  url,
  schema = 'schema.graphql',
  includes = ['**/graphql.ts', resolve(__dirname, '../**/graphql.ts')],
) => ({
  client: {
    localSchemaFile: resolve(__dirname, schema),
    includes,
    service: {
      url,
    },
  },
});

module.exports = createApolloConfig(process.env.CMS_GRAPHQL_API_URL);
