module.exports = () => ({
  defaultConnection: 'default',
  connections: {
    default: {
      connector: 'mongoose',
      settings: {
        uri: `mongodb+srv://${process.env.MNG_USR}:${process.env.MNG_PSWD}@cluster-main.4cf5c.gcp.mongodb.net/${process.env.MNG_DB}?retryWrites=true&w=majority`,
      },
      options: {
        ssl: true,
      },
    },
  },
});
