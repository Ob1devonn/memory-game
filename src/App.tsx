import { Grid, GridItem } from "@chakra-ui/react";
import Header from "./components/Header";
import GameGrid from "./components/GameGrid";

function App() {
  return (
    <div>
      <Grid
        templateAreas={`"header header"
                        "game game"
                        "settings settings"`}
        className="background"
      >
        <GridItem area="header">
          <Header />
        </GridItem>
        <GridItem area="game">
          <GameGrid />
        </GridItem>
        <GridItem area="settings" bg="dodgerblue">
          settings
        </GridItem>
      </Grid>
    </div>
  );
}

export default App;
