using Services;

// TODO should be a constant
const string ALLOW_ORIGINS_NAME = "ALL_ORIGINS";

var builder = WebApplication.CreateBuilder(args);

// Add services to the container.
builder.Services.AddCors(options => 
{
    options.AddPolicy(
        name: ALLOW_ORIGINS_NAME,
        policy => 
        {
            policy.WithOrigins("*");
        }
    );
});

builder.Services.AddSingleton<DatabaseService>();
builder.Services.AddSingleton<ApiService>();

builder.Services.AddControllers();
// Learn more about configuring Swagger/OpenAPI at https://aka.ms/aspnetcore/swashbuckle
builder.Services.AddEndpointsApiExplorer();
builder.Services.AddSwaggerGen();

var app = builder.Build();

// Configure the HTTP request pipeline.
if (app.Environment.IsDevelopment())
{
    app.UseSwagger();
    app.UseSwaggerUI();
}

app.UseHttpsRedirection();

app.UseCors(ALLOW_ORIGINS_NAME);

app.UseAuthorization();

app.MapControllers();

app.Run();
