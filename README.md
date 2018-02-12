# jetbrains-troubleshoot

> Small project for diagnosing why "running" a Karma Unit Test works, but debugging does not

## Build Setup

Please ensure you've installed:
 - [NVM](https://github.com/creationix/nvm)

``` bash
# install nodejs dependency
nvm install

#install yarn
npm install yarn -g
#install node_modules dependencies
yarn install 

# run all tests via bash and ensure they're working
yarn run unit
```

You should now have everything you need to run a Karma Unit Test

I've additionally provided the `.idea` directory to have the Karma Unit Test config available.
You'll have to modify this to fit your directory structure.

# The Issue
Pressing ["Run"](https://rpl.cat/VuMLLfVWrNJNAfLuZhLssnKaK4SGZJfbuQOyK2eLQ0A) gives a [correct test result](https://rpl.cat/IL6cUd_9JEX2jsH61lmRP-sifGm28WgSanCMWWv6SXQ).

Pressing ["Debug"](https://rpl.cat/ep8l8tjObiw86UdT84vfcxI1F4862WI7VNr5wI7qek4) runs no tests and [claims that the test suite is empty](https://rpl.cat/-zYCRJdW8llfZYJFZ5QaAHexhgmza-DKuhTZ3LL1P6c).
