import algoliasearch from 'algoliasearch';

const algoliaConfig = {
  apiKey: process.env.REACT_APP_ALGOLIA_SECRET_KEY,
  appID: process.env.REACT_APP_ALGOLIA_APP_ID,
};

// Connect and authenticate with your Algolia app
export const client = algoliasearch(algoliaConfig.appID, algoliaConfig.apiKey);

// Create a new index and add a record
export const index = client.initIndex('Tags');
