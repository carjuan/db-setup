# Database Management Tools Comparison

This repository explores different tools for setting up and managing a MongoDB database using Node.js. The goal is to compare Prisma, Mongoose, and the native MongoDB driver to demonstrate how each tool solves common problems and simplifies database operations. The project includes creating a database connection, setting up models, and performing CRUD operations.

> [!NOTE]
> By exploring what problem each tool solves, what abstractions each tool builds on top of one another, I believe it provides a more solid understanding of the work you are doing as a developer.

## Getting Started

### To run it, you need:

- Node.js installed on your machine. You can download it from [here](https://nodejs.org/).
- MongoDB (If not using MongoDB Atlas) installed and running. You can download it from [here](https://www.mongodb.com/try/download/community).

### Installation

Clone the repository:

```sh
git clone https://github.com/carjuan/db-setup.git
```

#### Navigate to the project directory:

```bash
cd db-setup
```

#### Install the dependencies:

> [!NOTE]
> This project uses `TypeScript`

```bash
pnpm install
```

#### Running the Project

> [!NOTE]
> This project is more of `take a look at the source code` than running a server. However, you can run the server and checkout the code for each tool.

Start the server:

```bash
pnpm start
```

The API will be running on `http://localhost:3000`.

### Tools Used

#### Prisma

> [!NOTE]
> This is a fantastic tool doing everything under the hood for you. Easy to setup and start crudding.

> Prisma is an open-source ORM (Object-Relational Mapping) tool that simplifies database access and management. It provides a type-safe query builder and auto-generated models. The great thing about Prisma is that it allows you to use any database (it is database agnostic) and to define your database schema using the Prisma Schema Language.

#### Mongoose

Mongoose is a MongoDB object modeling tool designed to work in an asynchronous environment. It provides a straight-forward, schema-based solution to model your application data.

#### Native MongoDB Driver

The native MongoDB driver for Node.js is the barebones way to interact with a MongoDB database. It provides low-level access to the database and requires more manual setup compared to Prisma and Mongoose.

### Endpoints

#### Prisma

```
    GET /prisma/users: Retrieve all users.
    POST /prisma/users: Create a new user.
    PUT /prisma/users/:id: Update a user.
    DELETE /prisma/users/:id: Delete a user.
```

#### Mongoose

```
    GET /mongoose/users: Retrieve all users.
    POST /mongoose/users: Create a new user.
    PUT /mongoose/users/:id: Update a user.
    DELETE /mongoose/users/:id: Delete a user.
```

#### Native MongoDB Driver

```
    GET /native/users: Retrieve all users.
    POST /native/users: Create a new user.
    PUT /native/users/:id: Update a user.
    DELETE /native/users/:id: Delete a user.
```
