# Crypto Tracker

Crypto Tracker is a web based application that has been designed for monitoring and checking your cryptocurrencies 
and how their performance is over certain periods ( 1 day, 1 week, 1 month and so on.. ). The pricing is based off 
the Coinmarketcap API which you can get set up with the instructions at the bottom of this README.md doc.
the Coinmarketcap API which you can get set up with the instructions at the bottom of this README.md doc.


## Built with:

 - React - [Facebook's](https://github.com/facebook/react) Javascript framework
 - Java - Springboot & Hibernate so backend requests can be made and transferred to the frontend. 
   Also pairs with the Postgres DB that stores the API request data in a JSON format.
 - Postgresql - Has NoSQL like capability through the json & jsonb data types which you can interact with directly.
 - Docker - Makes things easier for testing & deployment on other hardware.

## Prerequisites:

 - Java 11
 - Node & Npm 
 - Docker 

## Getting started:

```
# Getting the latest snapshot of the application:

git clone https://github.com/MarkMcMoran/CryptoTracker

To get the app up and running do the following:

docker-compose up -d

This will start up the containers for the services.

Navigate to localhost on your web browser to start using the app.

To stop the services running use the following:

docker-compose down 

```

## Obtaining an API key for making Crypto Tracker price calls

Visit [Coinmarketcap's API ](https://coinmarketcap.com/api/) for your personal API key. 

Click get your API key now.

Create an environment variable to store the key. 

## Contributing

Please join the [Discord](https://discord.gg/ekERFsmZTz) if you're interested in participating in the project.
