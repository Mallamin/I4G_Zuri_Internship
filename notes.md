# mongod----->creates a mongodb server

# mongo--------->sstarts the mongo shell

# Help

# Show DBs

# Use

# Insert

# Find

# Update

# Remove

{mongoose?
step 1 => Connect to database
step 2 => declare schema
step 3 => model a collection from schema}

To create=> model.create({});
To read=>
fetching many;
   =>model.find(querry:{})
   returns an array;
fetching one
   =>model.findOne(querry:{})
      returns an object;
      returns null//if unable to find a document that matches the querry

    =>model.findById(string) // most detailed way of finding a document 
    returns a document || null 

    To update=>
     updateone;
     updatemany   