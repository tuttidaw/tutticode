# Security

Please report a vulnerability privately through GitHub: **Security → Report a vulnerability** on this repository. Do not open a public issue for it.

In scope: the `tutticode` npm package (the CLI, the MCP server and its local bridge), the plugin and skill files here, and the TuttiCode bridge page on tuttidaw.com.

What the bridge is designed to guarantee, so you can tell what counts as a bug:

- the local server listens on `127.0.0.1` only, accepts one page at a time, only from `https://tuttidaw.com`, only with a fresh 128-bit session token, and checks the Host header;
- the headless browser is driven over a private pipe, never a DevTools TCP port;
- everything the page sends back is validated before it touches the disk; stem files are written only inside the stems folder, never through a symbolic link;
- a sign-in can only render with TuttiCode, not open projects, the account or billing.
