# Weather App

By [Lucian Barcan](https://www.lucianbarcan.com)

## Description

The application represents a weather app that displays the weather for the current location of the user.
The user can also search for a city and see the weather for that city. The application uses the OpenWeatherMap API to
fetch the weather data. The application is built using React and Tailwind CSS.

## Features

- Display the weather for the current location.
- Search for a city.
- Display the weather for the searched city.
- Display the weather for the current day and the following 2 days (limited by the free API).

## Upcoming Features

- Display the air quality for the current location.
- Display the air quality for the searched city.
- Display the air quality for the current day and the following 2 days.
- Display the forecast based on hours for the current day and the following 2 days

## Running the project

#### Prerequisites

1. Clone the repository
2. Add the file `apiKey.ts` to the root folder. It should contain:

```typescript
export const apiKey = 'your key';
```

3. Run `npm install`

#### Development

4. Run `npm start` to start the local server and view it in the browser [http://localhost:3000](http://localhost:3000).

#### Production

4. Run `npm run build` to build the project for production. The build folder will be created in the root folder.

## Attribution

<a href="https://www.flaticon.com/" title="icons">Icons created by Vectors Market - Flaticon</a>