# Lattice Test App

### Starting the app with Docker

1. Clone the repository: `git clone https://github.com/msinnes/lattice-test-app.git`

2. Enter the folder and run docker-compose: `cd lattice-test-app && docker-compose up`

3. Visit the webapp at `localhost:3000`

If you don't have docker installed already, you can find the download links here: https://runnable.com/docker/getting-started/

You will also need to sign up for Docker Hub to pull the required images: https://hub.docker.com/signup

### Starting the app without docker

1. Clone the repository: `git clone https://github.com/msinnes/lattice-test-app.git`

2. Enter the api folder: `cd lattice-test-app/api`

3. Install dependencies: `npm install`

4. Start the api: `npm start`

5. Open a second terminal window.

6. Enter the webapp folder: `cd lattice-test-app/webapp`

7. Install dependencies: `npm install`

8. Start the webapp: `npm start`

9. Visit the app at `localhost:3000`

The redis cache will be disabled if started this way.
