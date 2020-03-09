# react-hooks-redux-thunk-pattern #

A sample code to combine React Hooks with Redux Thunk middleware to test an action creator that fetches some data from a REST API.

## Install JSON Server

~~~
npm install -g json-server
~~~

## Install dependencies

~~~
npm install
~~~

## Usage

From the */storage* folder start the server:
~~~
json-server --watch countries.json --port 3004
~~~

Then, start the React development server:
~~~
npm start
~~~