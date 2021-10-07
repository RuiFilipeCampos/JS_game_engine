# JS_game_engine

NEEDS RETHINKING


I want a `Universe` class to serve as interface to the programmer.

It should hold a bunch of `Object` instances and there should be a nice clean hierarchy.

```Javascript



// abstract class 
class Object{
}


class Agent extends Object {} // agents do stuff ! 
class Player extends Agent {} // there can be only one, this guy is a Singleton
class NPC extends Agent {} // enimies and stuff like that

class StaticObject extends Object {} // fixed objects like the floor, they move in the oppposite direction of the player
class DynamicObject extends Object {} // has velocity, suffers accelaration stuff like that

```

-[ ] can I has multiple inheritence stuff ??? 
