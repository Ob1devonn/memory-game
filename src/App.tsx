import { Grid, GridItem } from "@chakra-ui/react";
import Header from "./components/Header";

function App() {
  return (
    <div>
      <Grid
        templateAreas={`"header header"
                        "game game"
                        "settings settings"`}
      >
        <GridItem area="header">
          <Header />
        </GridItem>
        <GridItem area="game" bg="gold">
          game
        </GridItem>
        <GridItem area="settings" bg="dodgerblue">
          settings
        </GridItem>
      </Grid>
    </div>
  );
}

export default App;
