# A weather App for Gaudiy's frontend coding test

## Available Scripts

In the project directory, run `npm start`

Clone the repo [https://github.com/r1seika/gaudy-weather-server](https://github.com/r1seika/gaudy-weather-server) and run `node app.js`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

## What I've done

### Preparation

It took me about 1 hour.

1. Create a organization on GitHub.
2. Create a repository on the organization.
3. Create a TypeScript app on my PC.
4. Use ESLint for linting and Prettier for formatting.
5. Use commitlint to manage Git commit messages.

### Features

It took me about 5.5 hours.

1. Use Create-React-App with TS to init the app and config(0.5h)
2. Home page(2h)
3. Detail page(1h)
4. Responsive design(0.5h)
5. Server(1h)
6. deploy(0.5h)

### TODO

1. Use [search/autocomplete api](https://www.weatherapi.com/api-explorer.aspx#search) in location input with debounce
2. Jest for test
3. More infomation to show such as temperature of each hour diplayed by ECharts
4. Server optimize. Such as limit the request frequency, use https, etc.
