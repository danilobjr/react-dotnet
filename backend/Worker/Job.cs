using Business;

namespace Worker;

public class Job : BackgroundService
{
    private readonly ILogger<Job> _logger;
    private readonly RefreshSecurityUpdatesOnDatabase _refreshSecurityUpdatesOnDatabase;

    public Job(ILogger<Job> logger)
    {
        _logger = logger;
        _refreshSecurityUpdatesOnDatabase = new RefreshSecurityUpdatesOnDatabase();
    }

    protected override async Task ExecuteAsync(CancellationToken stoppingToken)
    {
        while (!stoppingToken.IsCancellationRequested)
        {
            _logger.LogInformation("Worker running at: {time}", DateTimeOffset.Now);

            await Task.Run(() => _refreshSecurityUpdatesOnDatabase.Run());
            await Task.Delay(1000 * 60 * 5, stoppingToken);
        }
    }
}
