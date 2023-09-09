using MongoDB.Bson;
using MongoDB.Bson.Serialization.Attributes;

namespace Domain;

public class SecurityUpdate
{
    // FIXME Domain layer should not know mongodb
    [BsonId]
    [BsonRepresentation(BsonType.ObjectId)]
    public string _Id { get; set; }
    public string Id { get; set; }
    public string Alias { get; set; }
    public string DocumentTitle { get; set; }
    // TODO remove this?
    public string? Severity { get; set; }
    public string InitialReleaseDate { get; set; }
    public string CurrentReleaseDate { get; set; }
    public string CvrfUrl { get; set; }
}
