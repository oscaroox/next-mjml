import { urlToRequest, OptionObject } from "loader-utils";
import mjmlToHtml from "mjml";
import { MJMLParseError } from "./mjml-types";

type This = {
  getOptions: () => OptionObject;
  getLogger: (name: string) => any;
  resourcePath: string;
};

function formatErrorMessage(this: This, errors: MJMLParseError[]) {
  const errorMessage = `[next-mjml] ERROR in ${this.resourcePath}:`;
  const formattedMessage = errors
    .map((error) => `- ${error.formattedMessage}`)
    .join("\n");
  return `${errorMessage}\n${formattedMessage}`;
}

export default function (this: This, source: string) {
  const options = this.getOptions();
  const logger = this.getLogger("Next MJML");

  const result = mjmlToHtml(source, options);

  if (result.errors.length) {
    throw new Error(formatErrorMessage.call(this, result.errors));
  }

  logger.log("The request path", urlToRequest(this.resourcePath));

  return `export default ${JSON.stringify(result.html)}`;
}
