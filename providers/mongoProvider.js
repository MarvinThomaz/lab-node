var client = required('mongodb').MongoClient;

exports.MongoDataProvider = class MongoDataProvider {
    
    constructor() {};

    insert(entity) {
        this.connect(function(db){

        })
    }

    update(key, entity) {

    }

    delete(key) {

    }

    getByKey(key) {

    }

    getAll() {

    }

    getByFilter(filter) {

    }

    connect(callback) {
        var url = "mongodb://localhost:27017/Users";
        client.connect(url, function(crr, db) {
            callback(db);
        });
    }
}