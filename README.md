# PERN Stack

Learning how to create an app using Postgres, Express, React and Node

## Installation

You can either install and run all the dependencies for the server and client separately or to

## Install and run together

#### Install

```sh
$ git clone https://github.com/RichardHpa/PERN-stack-course.git
$ cd PERN-stack-course
$ npm install
```

You then need to go into the `server` folder and duplicate the `.env` file and enter the details for your Postgres server. Run the two sql commands from `database.sql`to set up the basic database and table.

#### Starting the server and client

```sh
# run using nodemon for development
$ npm run dev
# npm using standard node
# $ npm run start
```

Server will then run on `localhost:5000`
Server will then run on `localhost:3000`

## Install and run Separately

### Server

#### Install

```sh
$ cd server
$ npm install
```

Duplicate the `.env` file and enter the details for your Postgres server. Run the two sql commands from `database.sql`to set up the basic database and table.

#### Running the server

```sh
$ npm start
```

Server will then run on localhost:5000

### Client

#### Install

```sh
$ cd client
$ npm install
```

#### Running the client

```sh
$ npm start
```

Client will then run on localhost:3000
