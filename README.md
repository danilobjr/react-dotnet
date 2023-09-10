# react-dotnet

### Requirements

This system was tested against the following tools and versions

Docker v24.0.5
Docker Compose v2.20.2-desktop-1
MongoDB Compass v1.39.4 (optional. It's for database access)

### Running

```bash
docker compose up -d
```

It can take some time to raise up because it needs to install dependencies.

### Containers

This will raise up the following containers:

- **mongo**: a MongoDB database
  - username: `root`
  - password: `rootpass`
- **api**: a aspnet webapi application
  - It has an **GET /updates** endpoint that retrieves all the data from **SecurityUpdates** collection. This collection is inside a database named **Db**
- **ui**: a react application
- **worker**: a aspnet core application
  - It runs a worker each 5 minutes. The worker calls a class that refreshs the database with new data from https://api.msrc.microsoft.com/cvrf/v2.0/updates

### Access to containers and logs

You can run the following to see docker container logs

```bash
docker logs CONTAINER_NAME
```

This is useful in some cases. For example, if you want to see if dependencies installation in the _ui_ container is complete.

### Database access

You can access MongoDB database by using [MongoDB Compass](). Use the following connection string for that:

```text
mongodb://root:rootpass@localhost:27017/?authMechanism=DEFAULT&authSource=admin
```

All data related to this project is inside a database called **Db**. Inside of it, there's a collection called **SecurityUpdates**

### Architecture

TODO

### Missing improvements

Unfortunately, I had no time to complete these:

- Layers have some crap dependencies. This is not good for isolated testing
- There's no interface contract between layers
- There's some annoying casting (`as any`) in Typescript code, in UI
- There's no exception treatment
- After 8 yers without development experience with Microsoft technologies, my .NET skills are absolute rusty! =/
