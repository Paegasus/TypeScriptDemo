class GraphSlot
{
  constructor()
  {
  }
}

class GraphNode
{
  name: string;
  slots: GraphSlot[];
  
  constructor()
  {
    this.name = "hello";
    this.slots = [];
  }
}
