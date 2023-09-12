# react-dotnet

### Table of content

- [Projects](#projects)
- [Requirements](#requirements)
- [Running](#running)
- [Architecture](#architecture)
- [Improvements](#improvements)
- [Final Thoughts](#final-thoughts)

### Projects

This repository has the following:

- **Database**
  - description: : a MongoDB database
  - location: ./mongodb
  - credentials:
    - username: `root`
    - password: `rootpass`
- **UI**: a React.js application
  - location: ./frontend
- **Api**: an AspNet Core Webapi application
  - location: ./backend/Api
  - It has an **GET /updates** endpoint that retrieves all the data from **SecurityUpdates** collection. This collection is inside a database named **Db** which is inside MongoDB
- **worker**: an Aspnet Core application
  - It runs a worker that calls a business class that refreshs the database with new data from https://api.msrc.microsoft.com/cvrf/v2.0/updates

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

### Improvements

Unfortunately, I had no time to complete these:

On the backend side:

- Layers have some crap dependencies. This is not good for isolated testing
- Missing interface contract between layers
- Missing exception treatment
- Missing env vars usage (appsettings.json)
- After 8 yers without development experience with Microsoft technologies, my .NET skills are absolute rusty! =/

Frontend side:

- There's some annoying casting (`as any`) in Typescript code, in UI
- There's more room to write a much more type-safe code. For example: table data, util functions, etc.
- A custom InputDateRange component could be created

Docker:

- I've tried to dockerize everything and almost did it, but I'd need more time to make everything work using docker compose

### Final thoughts

I'm open for any recommendations to improve my code. Just let me know
