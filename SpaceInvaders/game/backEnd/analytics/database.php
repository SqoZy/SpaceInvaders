<?php

class DatabaseConnection {

    private $dbConnection = null;
    private $bConnected = false;

    public function __construct()
    {
        // Use values set in $_ENV through the included user.php file
        // Create an account at: https://oege.ie.hva.nl
        $host = "localhost";            // Hostname (localhost)
        $port = "3306";            // Oege Database port number (3306)
        $db   = "zteunisj10";            // Oege Database schema name ()
        $user = "teunisj10";        // Oege Database username
        $pass = "LzvVYBYmmPpjtJ";        // Oege Database password

        try {
            // Create MYSQL connection using the improved connection method
            // https://www.php.net/manual/en/mysqli.real-connect.php
            $this->dbConnection = mysqli_init();
            $this->dbConnection->ssl_set(NULL, NULL, NULL, NULL, NULL);
            $this->bConnected = $this->dbConnection->real_connect($host, $user, $pass, $db);
            if (!$this->bConnected){
                // quit script
                die('Connect Error (' . mysqli_connect_errno() . ') '.mysqli_connect_error());
            }else{
                //NOTE: Uncomment to test if a succesfull connection could be made.
                //echo "Connected successfully";
            }
        } catch (Exception $e) {
            exit($e->getMessage());
        }
    }

    public function getConnection()
    {
        return $this->dbConnection;
    }

    public function closeConnection()
    {
        $this->getConnection()->close();
        $bConnected = false;
    }

    public function executeQuery($query)
    {
        // Directly calling query is not the safest way to execute queries on the DB, look up SQL injections.
        // It is a good way to start and learn the basics of PHP, Paramters, MySQL and queries.
        // Think about converting the code to make use of prepared statements, mysqli_real_escape_string and Validation & Sanitization of user input.
        // DEBUG query:
        //echo ' query = '.$query;
        return $this->getConnection()->query($query);
    }


}
