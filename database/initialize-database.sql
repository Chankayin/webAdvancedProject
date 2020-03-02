CREATE TABLE IF NOT EXISTS accounts (
	id INT UNSIGNED AUTO_INCREMENT PRIMARY KEY,
	username VARCHAR(50) NOT NULL,
	password VARCHAR(30) NOT NULL,
	CONSTRAINT usernameUnique UNIQUE (username)
);

CREATE TABLE IF NOT EXISTS events (
	id INT UNSIGNED AUTO_INCREMENT PRIMARY KEY,
	title VARCHAR(30) NOT NULL,
	date VARCHAR(10) NOT NULL,
	time VARCHAR(5) NOT NULL,
	text VARCHAR(255) NOT NULL
);

CREATE TABLE IF NOT EXISTS attendingsList(
	eventId INT UNSIGNED FOREIGN KEY REFERENCES events(id),
	userId 	INT UNSIGNED FOREIGN KEY REFERENCES accounts(id)
);

-- Create a dummy account for testing.
INSERT INTO accounts (username, password) VALUES ("Alice", "abc123");