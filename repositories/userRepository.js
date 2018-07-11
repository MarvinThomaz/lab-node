var provider = require('../providers/mongoProvider').MongoDataProvider;

class userRepository {
    
    constructor() {}

    createUser(user) {
        provider.insert(user);
    }

}