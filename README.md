# personal-blog app

## Descriptions
Personal blog application written in AstroJs

## Parameters
| Parameter(`*` means mandatory)       | Default | Description                                                  |
| ------------------------------------ | ------- | ------------------------------------------------------------ |
| *API_URL_FOR_BROWSER*                | 3000    | Spesific Api url 

## Quick Start For Development

- Rename .env.example file to .env.development(for prod .env) and edit config parameters

## Installation

Builds the app to the `dist` folder.

```bash
yarn && yarn build
```

In the project directory, you can run:

For dev and ts hot reload
- reads .env.development file for config
```bash
yarn dev
```
For prod
- reads .env file for config
```bash
yarn start
```

## Docker image build & Run

```bash
 docker image build -t personal-blog-app .
 docker run -p 3000:3000 personal-log-app
```