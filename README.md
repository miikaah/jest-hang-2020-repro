# Jest hangs when dependencies are installed when a specific package-lock.json exists

The corrupted package-lock.json came to be as I was setting up Jest from scratch
and fiddling with various configs and dependencies. For whatever reason this created
a lockfile that always causes Jest to freeze after tests are run.

In watch mode jest outputs:

>A worker process has failed to exit gracefully and has been force exited. This is likely caused by tests leaking due to improper teardown. Try running with --detectOpenHandles to find leaks.

Adding the `--detectOpenHandles` flag however does nothing to the test output.

# The issue

1. Clone repo
1. `npm i`
1. `npm run test` -> Tests pass but Jest hangs until Ctrl + C is pressed

# The fix

1. `rm -rf node_modules/`
1. `rm package-lock.json`
1. `npm i`
1. `npm run test` -> Tests pass and Jest quits as it should

You can also try to replace the `package-lock.json` with `package-lock.corrupted.json` or `package-lock.working.json` if the above steps don't work.

As this appears to be some sort of an issue with how npm generates the lockfile, I suspect this is not going to work in the future at some point.

My machine:

Node: 14.12.0

npm: 6.14.8

OS: macOS 10.15.7

Shell: Bash 5.0.11
