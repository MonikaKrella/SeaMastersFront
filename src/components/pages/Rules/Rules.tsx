import { RulesWrapper } from './RulesWrapper';

function Rules() {
  return (
    <RulesWrapper>
      <h1>Welcome to Sea Masters Simulator!</h1>
      <h3>Enjoy pirates adventure</h3>
      <p>
        The big battle is coming. Luckily you are just the watcher. Sit down
        comfortable and watch the skirmishes.
      </p>
      <p>
        In this simulator you are not able to make any move, except starting
        game. Let's our pirates make all decisions!
      </p>
      <p>
        Like in classic Battleship Game, pirates have their ships at 10x10
        boards. Both of them have 5 ships of lenght: 5x1, 4x1, 3x1, 3x1, 2x1.
        Pirates randomly decides, who will start. Active pirate can shoot as
        long as he hits enemy's ship. If active pirate misses, second pirate
        starts his firing. The battle ends, when one of pirates lost all of his
        ships. Glory and honor go to winning pirate, who become the new Lord Of
        The Waters!
      </p>
    </RulesWrapper>
  );
}

export default Rules;
