# fkg_web_client

## Purpose

This web client is used to manage support cases that may arise. There are two types of cases: "Support" and "Business Requirements".

You can access the client at the following link:
[https://fkg-web-client.onrender.com](https://fkg-web-client.onrender.com)

The default user is:
- **Username:** admin
- **Password:** pass

**Note:** It does not have documentation at `/docs`.

## Important

Please note that since the client is hosted on a free plan on Render, it may take a while to load if the DNS has not been accessed for some time, approximately 1 minute. This does not mean the client is down; it just needs to resume.

## Description

This is a web application made with Vite, React, and TypeScript.

## Running Locally with Docker and Visual Studio Code

To set up a development environment with a custom Node.js 22 image, follow these steps:

1. **Clone the repository:**

    ```bash
    git clone <REPOSITORY_URL>
    cd fkg_web_client
    ```

2. **Set up the development environment:**

    Make sure you have Docker and Docker Compose installed on your machine.

3. **Build and start the containers:**

    ```bash
    docker-compose up --build
    ```

4. **Access the web client:**

    The web client will be available at [http://localhost:3000](http://localhost:3000).

5. **Setup in Visual Studio Code:**

    Open the project in Visual Studio Code and make sure you have the following extensions installed:
    - dsznajder.es7-react-js-snippets
    - esbenp.prettier-vscode
    - vincaslt.highlight-matching-tag
    - formulahendry.auto-rename-tag

    You can use the [`devcontainer.json`](command:_github.copilot.openRelativePath?%5B%7B%22scheme%22%3A%22file%22%2C%22authority%22%3A%22%22%2C%22path%22%3A%22%2Fhome%2Foscar%2FProjects%2FFKG%2Ffkg_web_client%2F.devcontainer%2Fdevcontainer.json%22%2C%22query%22%3A%22%22%2C%22fragment%22%3A%22%22%7D%2C%22b1f3bfa7-82d5-4e5b-8e6f-91a36a7be344%22%5D "/home/oscar/Projects/FKG/fkg_web_client/.devcontainer/devcontainer.json") file to configure a custom development container.

    ```json
    {
      "name": "My Web Client Container",
      "workspaceFolder": "/code",
      "mounts": [
        "source=${localWorkspaceFolder},target=/code,type=bind"
      ],
      "customizations": {
        "vscode": {
          "settings": {
            "extensions": [
              "dsznajder.es7-react-js-snippets",
              "esbenp.prettier-vscode",
              "vincaslt.highlight-matching-tag",
              "formulahendry.auto-rename-tag"
            ]
          }
        }
      },
      "postCreateCommand": "pnpm install",
      "dockerComposeFile": "../docker-compose.yml",
      "service": "web",
      "overrideCommand": true
    }
    ```

## Dependencies

This client depends on the API to function. You can change the environment variable [`VITE_APP_API_URL`](command:_github.copilot.openSymbolFromReferences?%5B%22%22%2C%5B%7B%22uri%22%3A%7B%22scheme%22%3A%22file%22%2C%22authority%22%3A%22%22%2C%22path%22%3A%22%2Fhome%2Foscar%2FProjects%2FFKG%2Ffkg_web_client%2Fsrc%2Fpages%2FLogin.tsx%22%2C%22query%22%3A%22%22%2C%22fragment%22%3A%22%22%7D%2C%22pos%22%3A%7B%22line%22%3A19%2C%22character%22%3A32%7D%7D%2C%7B%22uri%22%3A%7B%22scheme%22%3A%22file%22%2C%22authority%22%3A%22%22%2C%22path%22%3A%22%2Fhome%2Foscar%2FProjects%2FFKG%2Ffkg_web_client%2Fsrc%2Fpages%2FSupportCaseDetails.tsx%22%2C%22query%22%3A%22%22%2C%22fragment%22%3A%22%22%7D%2C%22pos%22%3A%7B%22line%22%3A13%2C%22character%22%3A21%7D%7D%2C%7B%22uri%22%3A%7B%22scheme%22%3A%22file%22%2C%22authority%22%3A%22%22%2C%22path%22%3A%22%2Fhome%2Foscar%2FProjects%2FFKG%2Ffkg_web_client%2Fsrc%2Fpages%2FSupportRequest.tsx%22%2C%22query%22%3A%22%22%2C%22fragment%22%3A%22%22%7D%2C%22pos%22%3A%7B%22line%22%3A19%2C%22character%22%3A19%7D%7D%2C%7B%22uri%22%3A%7B%22scheme%22%3A%22file%22%2C%22authority%22%3A%22%22%2C%22path%22%3A%22%2Fhome%2Foscar%2FProjects%2FFKG%2Ffkg_web_client%2Fsrc%2Fpages%2FSupportRequestList.tsx%22%2C%22query%22%3A%22%22%2C%22fragment%22%3A%22%22%7D%2C%22pos%22%3A%7B%22line%22%3A14%2C%22character%22%3A21%7D%7D%5D%2C%227dc5d18b-27a5-4d9f-9fcd-5d0a5abd03ee%22%5D "Go to definition") to the URL where the API is hosted in the cloud:

[https://fkg-api.onrender.com/api/v1](https://fkg-api.onrender.com/api/v1)

Or you can start the API container locally. Here is the repository:
[https://github.com/01speed1/fkg_web_client](https://github.com/01speed1/fkg_web_client)

By default, the API starts on port 8000, so the IP would be [http://localhost:8000/api/v1](http://localhost:8000/api/v1).

## Observations

Things I would have liked to implement:
- Cover the frontend with tests.
- Implement a state management technique, use Sustand or Redux.
- Better styles.
- A library of custom components.
- More functionality in the form.