using System.Net.Http;
using Newtonsoft.Json;
using Domain;
using Services;

namespace Services;

public class OData<T>
{
    [JsonProperty("odata.context")]
    public string Metadata { get; set; }
    public T Value { get; set; }
}

public class ApiService
{
    private static readonly HttpClient _httpClient;

    static ApiService()
    {
        _httpClient = new HttpClient()
        {
            // TODO set URL in a env var
            BaseAddress = new Uri("https://api.msrc.microsoft.com/cvrf/v2.0")
        };
    }

    public async Task<List<SecurityUpdate>> GetSecurityUpdates() {
        var url = string.Format("/updates");

        var result = new List<SecurityUpdate>();
        var response = await _httpClient.GetAsync(url);

        if (response.IsSuccessStatusCode)
        {
            var stringResponse = await response.Content.ReadAsStringAsync();
            var deserializedObj = JsonConvert.DeserializeObject<OData<List<SecurityUpdate>>>(stringResponse);

            result = deserializedObj.Value;
        }
        else
        {
            throw new HttpRequestException(response.ReasonPhrase);
        }
 
        return result;
    }
}