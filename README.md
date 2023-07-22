# next-mjml

`next-mjml` is a Node.js package designed to enable Next.js to understand how to import MJML (markup language for responsive email) files. This plugin adds the ability to load MJML files in a similar fashion to how images are loaded, but instead of a file path, it returns a parsed HTML string. The package depends on `mjml`.

## Installation

To install `next-mjml` and its dependencies, use npm or yarn:

```bash
npm install next-mjml mjml
```

or

```bash
yarn add next-mjml mjml
```

## Usage

1. Create or open your `next.config.js` file.

2. Import `next-mjml` at the beginning of the file:

```javascript
const { withMJML } = require('next-mjml');
```

3. Define any MJML options you want to customize (optional):

```javascript
const mjmlOptions = {
  // Add your MJML options here as key-value pairs
  minify: true,
  beautify: false,
  // ...
};
```

4. Use the `withMJML` function and pass in the `mjmlOptions` object as an argument:

```javascript
module.exports = withMJML(mjmlOptions)({
  // Your Next.js configuration options go here
});
```

## Example

Here's an example of how to use `next-mjml` in your Next.js project:

1. Create an MJML file named `email.mjml` in the root of your project:

```xml
<!-- email.mjml -->
<mjml>
  <mj-body>
    <mj-section>
      <mj-column>
        <mj-text>Hello World!</mj-text>
      </mj-column>
    </mj-section>
  </mj-body>
</mjml>
```

2. Import and use the MJML file:

```jsx
// pages/api/user.js
...
import mailer from "..."
import email from './email.mjml'; // Use the mjml file as a regular import
...

export default handler(req, res) {
    if (req.method === 'POST') {
        mailer.sendEmail(email, "example@example.com");
    }
    ...
}
```

## MJML Options

The `mjmlOptions` object allows you to customize the MJML compilation process according to your specific needs. You can refer to the official `mjml` documentation to explore the available options and their usage.

**Important Note**: Be cautious when using `mjmlOptions` and make sure the options are compatible with the version of `mjml` installed in your project.

## Credits

This package was inspired by the need to seamlessly integrate MJML files into Next.js projects, allowing developers to work with responsive email templates more efficiently.

If you encounter any issues or have suggestions for improvements, feel free to [open an issue](https://github.com/oscaroox/next-mjml/issues) or [submit a pull request](https://github.com/oscaroox/next-mjml/pulls) on the GitHub repository.

## License

`next-mjml` is open-source software licensed under the [MIT license](https://opensource.org/licenses/MIT).