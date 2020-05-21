## 

user@DESKTOP-96FRN6B MINGW64 /d/ccc
$ createdb --username=postgres test2

user@DESKTOP-96FRN6B MINGW64 /d/ccc
$ createdb --username=postgres mydb



## 

$ psql -U postgres
psql (12.3)
Type "help" for help.

postgres=# \du
                                   List of roles
 Role name |                         Attributes                         | Member of
-----------+------------------------------------------------------------+-----------
 ccc       |                                                            | {}
 postgres  | Superuser, Create role, Create DB, Replication, Bypass RLS | {}
 root      |                                                            | {}


## 

user@DESKTOP-96FRN6B MINGW64 /d/ccc
$ createdb test
createdb: error: could not connect to database template1: could not connect to server: Connection refused (0x0000274D/10061)   
        Is the server running on host "localhost" (::1) and accepting
        TCP/IP connections on port 5432?
could not connect to server: Connection refused (0x0000274D/10061)
        Is the server running on host "localhost" (127.0.0.1) and accepting
        TCP/IP connections on port 5432?

user@DESKTOP-96FRN6B MINGW64 /d/ccc
$ createdb test
createdb: error: could not connect to database template1: could not connect to server: Connection refused (0x0000274D/10061)   
        Is the server running on host "localhost" (::1) and accepting
        TCP/IP connections on port 5432?
could not connect to server: Connection refused (0x0000274D/10061)
        Is the server running on host "localhost" (127.0.0.1) and accepting
        TCP/IP connections on port 5432?

user@DESKTOP-96FRN6B MINGW64 /d/ccc
$ createdb test
createdb: error: could not connect to database template1: could not connect to server: Connection refused (0x0000274D/10061)   
        Is the server running on host "localhost" (::1) and accepting
        TCP/IP connections on port 5432?
could not connect to server: Connection refused (0x0000274D/10061)
        Is the server running on host "localhost" (127.0.0.1) and accepting
        TCP/IP connections on port 5432?

user@DESKTOP-96FRN6B MINGW64 /d/ccc
$ createdb test
Password:
Password:
createdb: error: could not connect to database template1: FATAL:  password authentication failed for user "user"

user@DESKTOP-96FRN6B MINGW64 /d/ccc
$ createdb test
createdb: error: could not connect to database template1: FATAL:  password authentication failed for user "user"
                                                                           authentication failed for user "user"
user@DESKTOP-96FRN6B MINGW64 /d/ccc
$ psql
psql: error: could not connect to server: FATAL:  role "user" does not exist                                                                        st

user@DESKTOP-96FRN6B MINGW64 /d/ccc
$ psql -U user
psql: error: could not connect to server: FATAL:  role "user" does not exist

user@DESKTOP-96FRN6B MINGW64 /d/ccc
$ psql -U postgres
psql (12.3)
Type "help" for help.

postgres=# create user root with password 'dege005';
CREATE ROLE
postgres=# \q

user@DESKTOP-96FRN6B MINGW64 /d/ccc
$ psql -U postgres
psql (12.3)
Type "help" for help.

postgres=# create user root with password '082371461';
ERROR:  role "root" already exists
postgres=# drop root 
postgres-# create user root with password '082371461';
ERROR:  syntax error at or near "root"
LINE 1: drop root
             ^
postgres=# drop root;
ERROR:  syntax error at or near "root"
LINE 1: drop root;
             ^
postgres=# dropuser root;
ERROR:  syntax error at or near "dropuser"
LINE 1: dropuser root;
        ^
postgres=# drop user root;
DROP ROLE
postgres=# create user root with password '082371461';
CREATE ROLE
postgres=# \q


## 
$ createdb test
createdb: error: could not connect to database template1: could not connect to server: Connection refused (0x0000274D/10061)   
        Is the server running on host "localhost" (::1) and accepting
        TCP/IP connections on port 5432?
could not connect to server: Connection refused (0x0000274D/10061)
        Is the server running on host "localhost" (127.0.0.1) and accepting
        TCP/IP connections on port 5432?