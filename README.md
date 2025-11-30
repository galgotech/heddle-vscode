# Heddle Language Support for VS Code

Heddle is a functional data pipeline language designed for clarity, type safety, and ease of use. This extension provides rich language support for Heddle in Visual Studio Code.

## Features

- **Syntax Highlighting**: Colorization for keywords, types, strings, comments, and more.
- **Snippets**: Common code patterns to speed up development.
- **Bracket Matching**: Automatic matching of parentheses, braces, and brackets.

## Usage

Create a file with the `.he` extension to start using Heddle.

### Example

```heddle
import "std" std
import "fhub" fhub

schema User = {
  id: int,
  name: string,
  email: string,
  active: bool,
  created_at: timestamp,
  preferences: {
    theme: string,
    notifications: bool
  }
}

step LoadUsers -> User = std.io.load_csv {
  path: "users.csv",
  delimiter: ","
}

handler ProcessUsers User -> User = fhub.users.process {
  mode: "batch"
}

workflow UserOnboarding {
  let raw_users = LoadUsers
  
  let processed = raw_users 
    | (filter active == true) ? ProcessUsers
    | (derive full_name = f"{name} ({email})")

  let final = processed | (take 100)
}
```

## Installation

1. Open Visual Studio Code.
2. Go to the Extensions view (`Ctrl+Shift+X`).
3. Search for "Heddle Language".
4. Click **Install**.

## Contributing

Contributions are welcome! Please see our [GitHub repository](https://github.com/galgotech/heddle-vscode) for more information.

## License

[MIT](LICENSE)
