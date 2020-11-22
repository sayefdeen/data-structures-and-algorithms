# Hashtables

Hash Tables, is a data structure that will store a pair of key/value, first it will hash the key as a number that represent the index of it's value, in some cases the two different keys that might have the same hash value so a collision can happened, so to fix this problem a linked list will be created that will hold the first key as a head and it's next will point to the next key

## Challenge

Implement HashTable data structure, with these 4 methods.

- **add()** that will add a new node to the table, also will handle the collision with a linkedList.

- **hash()** that will take a key as a parameter and will return a number that represent the index for that key/value pair.

- **get()** that will take a key as a parameter and will return this key value if it was in the table, and will return null if not.

- **contains()** that will take a key as a parameter and will return a boolean that will represent if the table contain the key or not

## Approach & Efficiency

- **add()** : O(1) since the adding is just for a specifics index.

- **get()** & **contains()** :
  - O(1) since we are getting a specifics index, if the index was only have one node
  - O(n) if the index have a linkedList on it

## API

<!-- Description of each method publicly available in each of your hashtable -->
