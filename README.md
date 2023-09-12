# react-dotnet

### Projects

This repository has the following:

- **Database**: a MongoDB database
  - location: ./mongodb
  - credentials:
    - username: `root`
    - password: `rootpass`
- **UI**: a React.js application
  - location: ./frontend
- **Api**: a AspNet Core Webapi application
  - location: ./backend/Api
  - It has an **GET /updates** endpoint that retrieves all the data from **SecurityUpdates** collection. This collection is inside a database named **Db**
- **worker**: a Aspnet Core application
  - It runs a worker each 5 minutes. The worker calls a class that refreshs the database with new data from https://api.msrc.microsoft.com/cvrf/v2.0/updates

### Requirements

This system was tested against the following tools and versions:

Node.js v18.12.1
.NET Core v7
Docker v24.0.5
Docker Compose v2.20.2-desktop-1
MongoDB Compass v1.39.4 (_optional_. It's for database access)

### Running

First you need to run MongoDB instance using docker compose

```bash
docker compose up -d
```

Now you need to run the Worker

```bash
cd backend/Worker
dotnet run
```

Run the web api

```bash
cd backend/Api
dotnet run
```

Check what port the web api is running. Now, create a **.env** file inside **frontend** folder and set `REACT_APP_API_URL` env var with `http://localhost:[WEB_API_PORT]`.

Finally, if everything is set correctly. You can run the frontend web app.

```bash
cd frontend
# install dependencies
npm install
# start server
npm start
```

The application should open automatically in you browser.

### Database access

You can access MongoDB database by using [MongoDB Compass](https://www.mongodb.com/products/tools/compass). Use the following connection string for that:

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
