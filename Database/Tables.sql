DROP SCHEMA public CASCADE;
CREATE SCHEMA public;
GRANT ALL ON SCHEMA public TO CURRENT_USER;

/*  
A seller sells products. The id is the unique personal number of the seller. 
A seller also has a name, a phone number and an optional description.
*/  

CREATE TABLE Sellers ( 
    id CHAR(12) CHECK(id ~ '^[0-9]+$') PRIMARY KEY,
    name TEXT NOT NULL, 
    phoneNumber CHAR(10) CHECK (phoneNumber ~ '^[0-9]+$'), -- Prevents negative numbers
    description TEXT NOT NULL
);

/*  
Contains the different types of allowed categories a product can belong to.
*/  

CREATE TABLE Categories ( 
    name TEXT PRIMARY KEY
);

/*  
A location is the adress and coordinates of where a product is sold. When
a seller creates a new product, the location of that product should be added 
this table.
*/  
CREATE TABLE Locations (
    adress TEXT,
    zipcode CHAR(5),
    city TEXT NOT NULL,
    coordinates POINT, 
    PRIMARY KEY (zipcode, adress)
);

/*
A table that contains all valid products. Is populated through the inserts.sql file.
*/
CREATE TABLE ValidProducts(
    category TEXT NOT NULL REFERENCES Categories,
    product TEXT NOT NULL,
    PRIMARY KEY(category, product) 
);


/*
 A product is an advertisement that a seller is selling.
 The different parts a product consists of (id, name, category, location, picture, 
 optional description, seller and time of upload)
 */
CREATE TABLE Products(
    id SERIAL PRIMARY KEY, -- Increments with SERIAL
    name TEXT NOT NULL,
    category TEXT NOT NULL,
    title VARCHAR(40) NOT NULL,
    price FLOAT CHECK (price >=0),
    unit CHAR(12) CHECK (unit in ('kg', 'hg', 'g', 'pcs')),
    locationAdress TEXT NOT NULL,
    locationZipcode CHAR(5) NOT NULL, 
    picture TEXT, -- TODO be able to add picture
    description TEXT,
    seller CHAR(12) NOT NULL REFERENCES Sellers,
    timeOfUpload TIMESTAMP DEFAULT CURRENT_TIMESTAMP, --Timestamp is in format: YYYY-MM-DD HH24:MI:SS
    FOREIGN KEY (category, name) REFERENCES ValidProducts(category,product),
    FOREIGN KEY (locationZipcode, locationAdress) REFERENCES Locations(zipcode, adress) -- Reference both columns as a composite foreign key
);