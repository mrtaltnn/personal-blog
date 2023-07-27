# personal-blog app
[![Netlify Status](https://api.netlify.com/api/v1/badges/ea312928-c498-41dd-82ca-976d7ee1f31f/deploy-status)](https://app.netlify.com/sites/mertaltun/deploys)

## Descriptions
Personal blog application written in AstroJs. View via [mertaltun.com](https://mertaltun.com).

## Parameters
| Parameter(`*` means mandatory)       | Default | Description                                                  |
| ------------------------------------ | ------- | ------------------------------------------------------------ |
| *PUBLIC_API_URL*                | 3000    | Spesific Api url 

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