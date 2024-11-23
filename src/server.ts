import app from "./app";
import { Config } from "./config";
import logger from "./config/logger";

const startServer = () => {
  try {
    app.listen(Config.PORT, () => {
      logger.info("app is running at port ", { port: Config.PORT });
    });
  } catch (error) {
    console.log(error);
  }
};

startServer();
