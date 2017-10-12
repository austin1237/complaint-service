CREATE TABLE states (
    ID int NOT NULL AUTO_INCREMENT, 
    name VARCHAR(40) NOT NULL, 
    abbreviation VARCHAR(40) NOT NULL, 
    PRIMARY KEY (ID)
);

CREATE TABLE towns (
    ID INT NOT NULL AUTO_INCREMENT, 
    name VARCHAR(100) NOT NULL,  
    stateID INT NOT NULL,
    placeID int NOT NULL, 
    countyID int not null,
    PRIMARY KEY (ID), 
    FOREIGN KEY (stateID) REFERENCES states(ID)
);

CREATE TABLE populations (
    year YEAR(4) NOT NULL, 
    townID int NOT NULL,
    total INT NOT NULL,
    FOREIGN KEY (townID) REFERENCES towns(ID)
);

CREATE TABLE companies (
    ID int NOT NULL AUTO_INCREMENT, 
    name VARCHAR(200),
    PRIMARY KEY (ID)
);

CREATE TABLE products (
    ID int NOT NULL AUTO_INCREMENT, 
    name VARCHAR(200),
    PRIMARY KEY (ID)
);

CREATE TABLE issues (
    ID int NOT NULL AUTO_INCREMENT, 
    type VARCHAR(100),
    PRIMARY KEY (ID)
);

CREATE TABLE complaints (
    companyID int NOT NULL,
    productID int NOT NULL, 
    issueID int NOT NULL,
    stateID int,
    narrative VARCHAR(32000),
    publicResponse VARCHAR(32000),
    dateSent Date NOT NULL, 
    timely Boolean,
    disputed Boolean,
    FOREIGN KEY (companyID) REFERENCES companies(ID),
    FOREIGN KEY (productID) REFERENCES products(ID),
    FOREIGN KEY (issueID) REFERENCES issues(ID),
    FOREIGN KEY (stateID) REFERENCES states(ID)
);