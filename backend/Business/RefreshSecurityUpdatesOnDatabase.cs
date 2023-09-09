using System.Net.Http;
using Newtonsoft.Json;
using Domain;
using Services;

namespace Business;

public class OData<T>
{
    [JsonProperty("odata.context")]
    public string Metadata { get; set; }
    public T Value { get; set; }
}

public class RefreshSecurityUpdatesOnDatabase
{
    private static readonly ApiService _apiService;
    private static readonly DatabaseService _databaseService;
    private static readonly HttpClient _httpClient;

    static RefreshSecurityUpdatesOnDatabase()
    {
        _apiService = new ApiService();

        _databaseService = new DatabaseService();

        _httpClient = new HttpClient()
        {
            // TODO set URL in a env var
            BaseAddress = new Uri("https://api.msrc.microsoft.com/cvrf/v2.0")
        };
    }

    public async void Run() {
        var securityUpdates = await _apiService.GetSecurityUpdates();

        // TODO check if there's some data before delete everything
        await _databaseService.DeleteAllAsync();
        await _databaseService.InsertManyAsync(securityUpdates);
    }
}