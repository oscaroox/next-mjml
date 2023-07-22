/**
 * @jest-environment node
 */
import compiler from "./compiler";
import mjml2html from "mjml";
import path from "path";
import fs from "fs/promises";

test("should import mjml files and output html", async () => {
  const stats = await compiler("example.mjml", { name: "Alice" });
  const output = stats.toJson({ source: true })?.modules[0].source;
  const res = mjml2html(
    await fs.readFile(path.resolve(__dirname, "example.mjml"), "utf-8")
  );

  expect(output).toBe(`export default ${JSON.stringify(res.html)}`);
});
