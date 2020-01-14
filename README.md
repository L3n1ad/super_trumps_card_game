# Super Trumps Game

This project is Top Trumps based browser game featuring superheroes. It has an option to choose deck size, total time for the game and to choose between flash and slow game mode. The game also has a boost feature, every player has three chances per game to boost their next chosen attribute by a random percentage between 0 and 50.

### Installing and Running the code

Step by step instructions to get a development env running

To install all npm run the following code in both the server and the client folders:

```
npm install
```

To run mongoDB on your local machine run the following code in the terminal and leave it running:

```
mongod
```

To populate the DB with superheroes run the following code in the server folder:

```
npm run seeds
```

To start the run of the server side(super hero API) run the following code in the server folder:

```
npm run server:dev
```

To start the run of the front-end vue application run the following code in the client folder:

```
npm run serve
```


Once everything is running the app will be accessible on localhost:8080. Enjoy the game and have some fun.

## Built With

* [Node.js](https://nodejs.org/en/) - JavaScript runtime
* [JavaScript](https://www.javascript.com/) - Main Language used
* [Express.js](https://expressjs.com/) - Node.js web application framework
* [MongoDB](https://www.mongodb.com/) - Databe used for the project
* [Vue.js](https://vuejs.org/) - Front-end framework


## License

This project is licensed under the MIT License - see the [https://choosealicense.com/licenses/mit/] documentation for details
