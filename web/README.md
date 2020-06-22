oauth2l Authentication Playground
![GITHUB-BADGE](https://github.com/yousefa00/oauth2l/workflows/api/badge.svg)
![GITHUB-BADGE](https://github.com/yousefa00/oauth2l/workflows/client/badge.svg)
-------

The Oauth2l Authentication Playground is a web application in which developers can use to interact with the OAuth2l CLI tool using a GUI. Its primary use is to allow developers to interact and experiment with all the Auth flows and Auth tokens supported in GCP.


# Quickstart

### Requirements

The requirements needed to run the web application are:

| Requirements     | Link
| ------ | ---
| Golang | https://golang.org/dl/
| Oauth2l | https://github.com/google/oauth2l

### Installing Packages

First clone the repository

```bash
$ git clone https://github.com/google/oauth2l
```
Then go into your oauth2l directory and install the go libraries used in the application. 
```bash
$ cd oauth2l
$ go get
```
Go into the web/client directory and install the npm libaries used in the applicaton
```bash
$ cd web/api
$ npm install
```
### Getting Started Locally
To run the application, go into the `web/api` directory and run the two files `backend.go` and `wrapper.go`
```bash
$ cd .../web/api
$ go run backend.go wrapper.go
```
Then go into the `web/client` directory and start the react app
```bash
$ cd .../web/client
$ npm start
```
A webpage with the address `localhost:3000` should appear in a web browser page.



