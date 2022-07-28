# Correvate Angular Challenge

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 13.3.7.

## Local back-end API

Setup and run the local back-end through Docker:
```
docker pull swaggerapi/petstore
```

```
docker run -d -e SWAGGER_HOST=http://petstore.swagger.io \
  -e SWAGGER_URL=http://localhost \
  -e SWAGGER_BASE_PATH=/v2 -p 80:8080 swaggerapi/petstore
```

## Install dependencies
Run `npm install` 

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The application will automatically reload if you change any of the source files.

## Environment variables

To be able to access the API,  the follwing environment variables are required at `src/environments/environment.ts`:
```
apiUrl: 'http://localhost/v2'
```
```
apiKey: 'special-key'
```
Since this project only uses data from a local API, the environment variables are already set.
## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).