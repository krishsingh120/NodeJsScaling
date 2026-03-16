# Nginx Basic Commands (Windows) --- Quick Guide

This guide contains the **most common commands** you will use while
learning Nginx on a Windows machine.

Folder example used in this guide:

    C:\Users\Asus\Downloads\nginx

------------------------------------------------------------------------

# 1. Go to Nginx Folder

Open **Command Prompt / PowerShell** and move to the folder where
`nginx.exe` exists.

``` bash
cd C:\Users\Asus\Downloads\nginx
```

------------------------------------------------------------------------

# 2. Start Nginx

Start the Nginx server:

``` bash
nginx
```

or

``` bash
nginx.exe
```

Then open a browser:

    http://localhost

If you see:

    Welcome to nginx!

That means the server is running successfully.

------------------------------------------------------------------------

# 3. Stop Nginx Immediately

``` bash
nginx -s stop
```

This stops the server instantly.

------------------------------------------------------------------------

# 4. Graceful Shutdown

``` bash
nginx -s quit
```

This waits for current requests to finish before stopping.

------------------------------------------------------------------------

# 5. Reload Configuration

If you change `nginx.conf`, reload the configuration without stopping
the server:

``` bash
nginx -s reload
```

------------------------------------------------------------------------

# 6. Check Folder Contents

Useful to confirm that `nginx.exe` exists:

``` bash
dir
```

------------------------------------------------------------------------

# 7. Important Files

Main configuration file:

    conf/nginx.conf

Default static website folder:

    html/

Log files:

    logs/

------------------------------------------------------------------------

# Quick Command Summary

  Action          Command
  --------------- -------------------
  Start Nginx     `nginx`
  Stop Nginx      `nginx -s stop`
  Graceful stop   `nginx -s quit`
  Reload config   `nginx -s reload`
  List files      `dir`

------------------------------------------------------------------------

# Next Step for Learning

Once you know these commands, try learning:

-   Reverse Proxy
-   Load Balancing
-   Static File Serving
-   Rate Limiting

Typical architecture:

    Browser → Nginx → Node.js Application

This is how many production Node.js apps are structured.
