### Install Nodejs

[https://radixweb.com/blog/installing-npm-and-nodejs-on-windows-and-mac](https://radixweb.com/blog/installing-npm-and-nodejs-on-windows-and-mac)

### Run with commands

1. Run the below commands to install dependencies under the project

```jsx
npm install 
npm run build
npm run start
```

1. Access [HTTP://localhost:3000/](HTTP://localhost:3000/) with the browser

### Run with Docker

Example: [https://github.com/vercel/next.js/tree/canary/examples/with-docker](https://github.com/vercel/next.js/tree/canary/examples/with-docker)

1. Install Docker to the server
2. build container (nextjs-docker is the name of the container)

```jsx
docker build -t nextjs-docker .
```

1. Check if the container was created successfully

```jsx
docker images
```

1. Run container

```jsx
docker run -p 3000:3000 nextjs-docker
```

1. Access [HTTP://localhost:3000/](HTTP://localhost:3000/) to validate
