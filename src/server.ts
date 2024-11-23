import app from "./app";
import { Config } from "./config";

const startServer = () => {
  try {
    app.listen(Config.PORT, () =>
      console.log(`app is running at PORT ${Config.PORT}`)
    );
  } catch (error) {
    console.log(error);
  }
};

startServer();
