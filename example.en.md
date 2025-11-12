---
marp: true
theme: azusa3
header: Azusa3 Theme Example
---

<!-- _class: title -->
<!-- _paginate: false -->

# Azusa3 Theme Example

A comprehensive showcase of all theme features

2025/11/12 - Theme Documentation

---

<!-- _class: section -->
<!-- _paginate: false -->

# Layout Examples

This section demonstrates various layout options

---

<!-- _class: agenda -->

# Agenda

- **Introduction**
- Getting Started
- Advanced Features
- **Code Examples**
- Conclusion

---

# Default Layout

This is the default slide layout with an h1 heading.

The h1 heading has an accent-colored bottom border.

You can include regular text and **bold text** in your slides.

---

# Heading with **Accent Color**

When you use **bold text** inside headings, it appears in the accent color.

## Subheading with **Accent**

This also works with h2 and other heading levels.

---

## H2 First Heading Style

When h2 is the first heading on a slide, it gets a special left border style.

Regular content follows below the heading.

---

### H3 First Heading Style

When h3 is the first heading, it gets an underline style.

This provides another visual hierarchy option.

---

# Lists and Text Formatting

**Bold**, _italic_, **_bold italic_**, ~~strikethrough~~, `inline code`, [link](https://example.com)

- Bullet list item 1
- Bullet list item 2
  - Nested item

1. Numbered list item 1
2. Numbered list item 2

> This is a blockquote with accent border

---

# Horizontal Rule Style

Content above the rule

<hr>

Content below the rule - the horizontal rule has an accent color

---

# Tables

| Header 1 | Header 2 | Header 3 |
| -------- | -------- | -------- |
| Cell A   | Cell B   | Cell C   |
| Cell D   | Cell E   | Cell F   |

Tables have styled headers with light background and dark text.

---

<!-- _class: table -->

# Table Layout (Centered)

| Feature | Status | Notes               |
| ------- | ------ | ------------------- |
| Layout  | ✓      | Multiple options    |
| Colors  | ✓      | Azusa3 palette      |
| Code    | ✓      | Syntax highlighting |

Using `table` class centers the table vertically.

---

<!-- _class: detail -->

# Detail Layout

This layout is useful for slides that need more padding around text content.

The text is larger and more spacious, making it ideal for important statements or quotes.

---

<!-- _class: image -->

# Image Layout

![w:600](https://placehold.jp/600x400.png)

---

<!-- _class: image -->

# Multiple Images

![w:400](https://placehold.jp/400x300.png)
![w:400](https://placehold.jp/400x300.png)

---

<!-- _class: image-right -->

# Image Right Layout

![w:500](https://placehold.jp/500x400.png)

<div class="content">

## Content on the left

- The image appears on the right
- Content flows on the left side
- Great for diagrams with explanations

</div>

---

<!-- _class: image-right image-30 -->

# Image Right 30%

![w:300](https://placehold.jp/300x400.png)

<div class="content">

## Narrower image column

The `image-30` class makes the image column 30% width.

Available widths:

- `image-20`: 20% image width
- `image-30`: 30% image width
- `image-40`: 40% image width
- `image-60`: 60% image width
- `image-70`: 70% image width
- `image-80`: 80% image width

</div>

---

<!-- _class: image-left -->

# Image Left Layout

![w:500](https://placehold.jp/500x400.png)

<div class="content">

## Content on the right

- The image appears on the left
- Content flows on the right side
- Mirror of the image-right layout

</div>

---

<!-- _class: image-left image-40 -->

![w:400](https://placehold.jp/400x300.png)
![w:400](https://placehold.jp/400x300.png)

<div class="content">

## Multiple Images

You can also display multiple images vertically in the image column.

The `image-40` class makes the image column 40% width.

</div>

---

<!-- _class: column -->

## Two Column Layout

<div class="column">

### Left Column

- Point 1
- Point 2
- Point 3

</div>

<div class="column">

### Right Column

1. Step 1
2. Step 2
3. Step 3

</div>

---

<!-- _class: column -->

## Three Column Layout

<div class="column">

### Column 1

- Item A
- Item B

</div>

<div class="column">

### Column 2

- Item C
- Item D

</div>

<div class="column">

### Column 3

- Item E
- Item F

</div>

---

<!-- _class: centered -->

# Centered Layout

Everything on this slide is centered both horizontally and vertically.

Great for impact slides or single statements.

---

# Horizontal Center Alignment

<div class="h-center">

## This heading is centered

This text is also centered horizontally.

![w:300](https://placehold.jp/300x200.png)

Images are centered too.

</div>

---

# Vertical Center Alignment

<div class="v-center">

## This content is vertically centered

The v-center class pushes content to the vertical center of the slide.

</div>

---

# Text Color Classes

<div class="text-accent">

Accent color text (default: green)

</div>

<div class="text-red">

Red text

</div>

<div class="text-blue">

Blue text

</div>

---

# More Text Colors

<div class="text-pink">

Pink text

</div>

<div class="text-green">

Green text

</div>

<div class="text-purple">

Purple text

</div>

---

<!-- _class: code -->

# Code Block Example

```typescript
type User = {
  id: number;
  name: string;
  email: string;
};

const users: User[] = [
  { id: 1, name: "Alice", email: "alice@example.com" },
  { id: 2, name: "Bob", email: "bob@example.com" },
];

function findUser(id: number): User | undefined {
  return users.find((user) => user.id === id);
}

console.log(findUser(1));
```

---

<!-- _class: no-header -->

# No Header Layout

This slide has the `no-header` class applied.

The header is hidden, giving you more vertical space.

Useful for content-heavy slides or when you need the extra room.

---

# Math Expressions

You can include mathematical formulas using LaTeX syntax:

$$
x = \frac{-b \pm \sqrt{b^2-4ac}}{2a}
$$

$$
f(x) = \frac{1}{\sqrt{2\pi\sigma^2}}e^{-\frac{(x-\mu)^2}{2\sigma^2}}
$$

Inline math also works: $E = mc^2$ or $a^2 + b^2 = c^2$

---

# HTML Details

<details>
<summary>Click to expand</summary>

This is hidden content that can be revealed.

- Item 1
- Item 2
- Item 3

</details>

---

# Custom Styles

<style>
.highlight-box {
  background-color: rgba(90, 224, 142, 0.1);
  border-left: 4px solid var(--color-accent);
  padding: 20px;
  margin: 20px 0;
  border-radius: 4px;
}
</style>

<div class="highlight-box">

You can apply custom CSS styles for slide-specific needs.

This box has a custom background and border.

</div>

---

<!-- _class: section -->
<!-- _paginate: false -->

# Thank You!

Marp Azusa3 Theme
