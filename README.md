# Awesome Data Gathering Service website

## Description
This is a random website with really no point at all. It doesn't raise any important opinions about anything or aim to start a discussion about any particular topic.

## Usage
To deploy this website, just deploy it. Look up how to deploy an express server on a hosting provider of your choice.  
  
You will need a MySQL database as well. You can change the source code if you want and have it work with your own database.  
Modify the file `db.js` accordingly. And the only places where there's a DB interaction are `/takedata` and `/getdata`.  
  
The file `db.js` is where the actual database connection takes place. You will HAVE to either set the appropriate environment variables or modify that file directly and set the configuration.
