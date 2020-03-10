# react-hooks-redux-thunk-pattern #

Sample code combining React Hooks and Redux Thunk middleware to call an action creator that fetches some data from a REST API.

## Install JSON Server

~~~
npm install -g json-server
~~~

## Install dependencies

~~~
npm install
~~~

## Usage

From the */storage* folder start the REST API server:
~~~
json-server --watch countries.json --port 3004
~~~

Then, start the React development server:
~~~
npm start
~~~