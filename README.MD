To run mongodb
go to /server
run command to bring up mongodb in a docker instance `docker-compose up -d`

To run angular
go to /angular
run `npm i` wait for installation of all node modules
run `npm run start` to start angular 

To run server
from /server run `npm run build` to build the js files (to transpile from typescript)
from /server run `npm run start` to run the server

if you are missing .env file when running server
create a file in /server called `.env` with the following attributes
```
# Note we depend on NODE_ENV being set to dictate which of the env variables below get loaded at runtime. 
# See README for more details.

# Get this from https://mlab.com/home after you've logged in and created a database
# MONGODB_URI=mongodb://root:rootpassword@<mlab_connection_url>

# This is standard running mongodb locally
MONGODB_URI_LOCAL=mongodb://root:rootpassword@localhost:27017/mydatabase?authSource=admin

# Put lots of randomness in these
SESSION_SECRET=ashdfjhasdlkjfhalksdjhflak

# Facebook keys - register your app and get yours here: https://developers.facebook.com/
FACEBOOK_ID=754220301289665
FACEBOOK_SECRET=41860e58c256a3d7ad8267d3c1939a4a

# Application Port - express server listens on this port (default 3000).
PORT=3000
```
