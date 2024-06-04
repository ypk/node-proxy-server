# HTTP Proxy Server

This project sets up a basic HTTP proxy server using Node.js. The server listens on port 8080 and proxies requests to a specified target server. It also modifies the response to include a custom header and cookie under certain conditions.

## Prerequisites

- Node.js installed on your system.
- Basic understanding of Node.js and JavaScript.

## Installation

1. Clone the repository:
    ```sh
    git clone git@github.com:ypk/node-proxy-server.git
    cd node-proxy-server
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
npm start
```

## Testing the Proxy Server

To test the proxy server, you can use a tool like curl or a web browser.

### Using curl


```sh
curl -i http://localhost:8080/tsc_company_summary/index.shtml
```

This should:

- Proxy the request to http://dev.share.local:80/tsc_company_summary/index.shtml.
- If the URL matches the source path, add the `TSC-API-KEY` header and set a cookie with the same key and value in the response.

### Using a Web Browser

Open your web browser and navigate to:

```bash
http://localhost:8080/tsc_company_summary/index.shtml
```

Check the response headers and cookies to ensure the `TSC-API-KEY` is included.

## Additional Information

- Error Handling: Any errors during proxying will be logged to the console.
- Custom Headers and Cookies: The specified headers and cookies are only added if the request URL contains the source path.

## Troubleshooting

- Port Conflicts: Ensure no other service is running on the specified port (default: 8080).
- Network Issues: Check your network connection and ensure the target server (dev.share.local) is accessible.