> A Simple Blog RestAPI

## Technologies Used

[node]: (https://nodejs.org)

- [Node.js](node)
- [mongoDB](node)
- [Express.js](https://expressjs.com).

## Testing Tools

- [Mocha](https://mochajs.org/).
- [Chai](https://chaijs.com).

## Installations

#### Getting started

- You need to have Node and NPM installed on your computer.
- Installing [Node](node) automatically comes with npm.

#### Clone

- Clone this project to your local machine `https://github.com/iphyokafor/Blog_api.git`

#### Setup

- Installing the project dependencies
  > Run the command below
  ```shell
  $ npm install
  ```
- Start your node server
  > run the command below
  ```shell
  $ npm run dev start
  ```
- Use `http://localhost:5050` as base url for endpoints

## API Endpoints

| METHOD | DESCRIPTION                  | ENDPOINTS            |
| ------ | ---------------------------- | -------------------- |
| POST   | Add a post                   | `/api/posts`         |
| GET    | Get all the post             | `/api/posts`         |
| PATCH  | Update the details of a post | `/api/posts/:postId` |
| GET    | Get a particular post        | `/api/posts/:postId` |
| DELETE | Remove a post                | `/api/posts/:postId` |

## Tests

- Run test for user authentication
  > run the command below
  ```shell
  $ npm run test
  ```
