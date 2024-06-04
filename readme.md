# HTTP Proxy Server

This project sets up a basic HTTP proxy server using Node.js. The server listens on port 8080 and proxies requests to a specified target server. It also modifies the response to include a custom header and cookie under certain conditions.

## Prerequisites

- Node.js installed on your system.
- Basic understanding of Node.js and JavaScript.

## Installation

1. Clone the repository:
    ```sh
    git clone https://github.com/yourusername/http-proxy-server.git
    cd http-proxy-server
    ```

2. Install the required dependencies:
    ```sh
    npm install
    ```

## Configuration

The proxy server configuration is defined in the `opts` object within the `server.js` file. You can modify the following options to fit your requirements:

- `port`: The port on which the proxy server listens (default: `8080`).
- `source`: Specific path to check in the request URL.
- `target`: The target server to which requests will be proxied. This includes:
  - `host`: The hostname of the target server (e.g., `dev.share.local`).
  - `port`: The port of the target server (default: `80`).
- `headers`: An array of headers to add to the response. In this example, a custom header `TSC-API-KEY` with a specific value is added.

## Running the Server

To start the proxy server, run the following command in the project directory:

```sh
node server.js
```