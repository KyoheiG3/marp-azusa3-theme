# Marp Azusa3 Theme

**English** | [日本語](README.md)

A Marp theme implementation based on the [Azusa 3](https://azusa3.sanographix.net/) design.

## Features

- **Dark Theme**: Eye-friendly dark color scheme
- **Rich Layouts**: Various layouts including title, section, image, code, columns, and more
- **Accent Colors**: Uses Azusa3's accent colors for headings and decorations
- **Flexible Customization**: Fine-tune image widths, text colors, layouts, and more

## Setup

### VSCode

1. Install the [Marp for VS Code](https://marketplace.visualstudio.com/items?itemName=marp-team.marp-vscode) extension
2. Add the theme URL to your VSCode settings file (`.vscode/settings.json`):

```json
{
  "markdown.marp.themes": [
    "https://raw.githubusercontent.com/KyoheiG3/marp-azusa3-theme/refs/heads/main/themes/azusa3/style.css"
  ]
}
```

### Advanced Setup (Enhanced Syntax Highlighting for HTML/PDF Output)

To enable enhanced syntax highlighting when exporting to HTML or PDF, install this package and configure it.

1. Install the package:

```bash
# Using HTTPS
npm install git+https://github.com/KyoheiG3/marp-azusa3-theme.git

# Or using SSH
npm install git+git@github.com:KyoheiG3/marp-azusa3-theme.git
```

2. Create `marp.config.js` in your project root:

```javascript
module.exports = require("marp-azusa3-theme/marp.config.js");
```

3. Export with Marp CLI:

```bash
# Export as HTML
marp example.md -o output.html

# Export as PDF
marp example.md -o output.pdf
```

**Note**: Currently, enhanced highlighting is only applied to Dart language. Other languages will be rendered as they appear in VSCode preview.

## Usage

Specify the theme in your Markdown file's front matter:

```markdown
---
marp: true
theme: azusa3
---

# Title

Slide content
```

## Layout Examples

### Title Slide

```markdown
<!-- _class: title -->
<!-- _paginate: false -->

# Presentation Title

Subtitle or description

Date and author information
```

### Section Slide

```markdown
<!-- _class: section -->
<!-- _paginate: false -->

# Section Title

Section description
```

### Agenda Slide

```markdown
<!-- _class: agenda -->

# Agenda

- **Current topic**
- Next topic
- Other topics
```

### Image Layout

```markdown
<!-- _class: image-right -->

# Heading

![](image.png)

<div class="content">

Description text or lists

</div>
```

Adjust image width:

- `image-20`: 20% width
- `image-30`: 30% width
- `image-40`: 40% width (default: 50%)
- `image-60`: 60% width
- `image-70`: 70% width
- `image-80`: 80% width

### Code Slide

````markdown
<!-- _class: code -->

# Code Example

```typescript
function greet(name: string): void {
  console.log(`Hello, ${name}!`);
}
```
````

### Column Layout

```markdown
<!-- _class: column -->

<div class="column">

### Left Column

Content

</div>

<div class="column">

### Right Column

Content

</div>
```

## Additional Features

### Text Colors

```markdown
<div class="text-accent">Accent color</div>
<div class="text-red">Red</div>
<div class="text-blue">Blue</div>
<div class="text-pink">Pink</div>
<div class="text-green">Green</div>
<div class="text-purple">Purple</div>
```

### Alignment

```markdown
<!-- Center alignment -->
<!-- _class: centered -->

<!-- Horizontal center only -->
<div class="h-center">Content</div>

<!-- Vertical center only -->
<div class="v-center">Content</div>
```

### Heading Accent Colors

Using **bold** within headings will display that portion in accent color:

```markdown
# This is displayed in **accent color**
```

## Samples

- [example.md](example.md) - Japanese sample
- [example.en.md](example.en.md) - English sample
- [Demo Page](https://kyoheig3.github.io/marp-azusa3-theme/en/) - View online

See the sample files above for detailed usage examples.

## Project Structure

```
.
├── themes/
│   └── azusa3/
│       └── style.css        # Theme style definitions
├── highlighter
│   └── dart.js              # Syntax highlighter for Dart
├── marp.config.js           # Marp configuration file
├── example.md               # Japanese sample
└── example.en.md            # English sample
```

## License and Copyright

This project is released under the MIT License. See the [LICENSE](LICENSE) file for details.

### Credits

- Design is based on [Azusa 3](https://azusa3.sanographix.net/)
- Some implementations reference [classmethod-marp-theme](https://github.com/classmethod/classmethod-marp-theme)
