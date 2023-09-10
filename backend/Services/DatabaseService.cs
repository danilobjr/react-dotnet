// FIXME Persistence layer should not know mongodb
using MongoDB.Driver;
using MongoDB.Bson;
using Domain;

namespace Services;

public class DatabaseService
{
    private readonly IMongoCollection<SecurityUpdate> _securityUpdatesCollection;

    public DatabaseService()
    {
        // TODO treat exceptions: NotSupportedException and MongoCOnnectionException
        // TODO use env vars
        var mongoClient = new MongoClient("mongodb://root:rootpass@mongo:27017/?authSource=admin");

        // TODO use env vars
        var mongoDatabase = mongoClient.GetDatabase("Db");

        // TODO use env vars
        _securityUpdatesCollection = mongoDatabase.GetCollection<SecurityUpdate>("SecurityUpdates");
    }

    public async Task DeleteAllAsync() 
    {
        await _securityUpdatesCollection.DeleteManyAsync(new BsonDocument());
    }

    public async Task<List<SecurityUpdate>> GetAllAsync()
    {
        return await _securityUpdatesCollection.Find(_ => true).ToListAsync();
    }

    public async Task InsertManyAsync(List<SecurityUpdate> securityUpdates) 
    {
        await _securityUpdatesCollection.InsertManyAsync(securityUpdates);
    }
}