---
marp: true
theme: azusa3
header: Azusa3 テーマサンプル
---

<!-- _class: title -->
<!-- _paginate: false -->

# Azusa3 テーマサンプル

テーマの全機能を網羅したデモンストレーション

2025/11/12 - テーマドキュメント

---

<!-- _class: section -->
<!-- _paginate: false -->

# レイアウトサンプル

様々なレイアウトオプションを紹介します

---

<!-- _class: agenda -->

# アジェンダ

- **イントロダクション**
- 基本的な使い方
- 高度な機能
- **コードサンプル**
- まとめ

---

# デフォルトレイアウト

これは h1 見出しを含むデフォルトのスライドレイアウトです。

h1 見出しにはアクセントカラーの下線が表示されます。

通常のテキストや**太字テキスト**をスライドに含めることができます。

---

# 見出しに**アクセントカラー**を使用

見出し内で**太字**を使用すると、アクセントカラーで表示されます。

## サブ見出しに**アクセント**

これは h2 やその他の見出しレベルでも機能します。

---

## H2 を最初の見出しに

h2 がスライドの最初の見出しの場合、特別な左ボーダースタイルが適用されます。

見出しの下に通常のコンテンツが続きます。

---

### H3 を最初の見出しに

h3 が最初の見出しの場合、下線スタイルが適用されます。

これにより、別の視覚的な階層オプションが提供されます。

---

# リストとテキスト装飾

**太字**、_斜体_、**_太字斜体_**、~~取り消し線~~、`インラインコード`、[リンク](https://example.com)

- 箇条書き項目 1
- 箇条書き項目 2
  - ネストされた項目

1. 番号付きリスト項目 1
2. 番号付きリスト項目 2

> これはアクセント色の左ボーダーを持つ引用です

---

# 水平線のスタイル

水平線の上のコンテンツ

<hr>

水平線の下のコンテンツ - 水平線はアクセントカラーで表示されます

---

# テーブル

| ヘッダー 1 | ヘッダー 2 | ヘッダー 3 |
| ---------- | ---------- | ---------- |
| セル A     | セル B     | セル C     |
| セル D     | セル E     | セル F     |

テーブルはライトな背景とダークなテキストでスタイル化されたヘッダーを持ちます。

---

<!-- _class: table -->

# テーブルレイアウト（中央揃え）

| 機能       | ステータス | 備考                   |
| ---------- | ---------- | ---------------------- |
| レイアウト | ✓          | 複数のオプション       |
| カラー     | ✓          | Azusa3 パレット        |
| コード     | ✓          | シンタックスハイライト |

`table` クラスを使用すると、テーブルが垂直方向に中央揃えされます。

---

<!-- _class: detail -->

# 詳細レイアウト

このレイアウトは、テキストコンテンツの周りにより多くのパディングが必要なスライドに便利です。

テキストが大きく、より広々としているため、重要な声明や引用に最適です。

---

<!-- _class: image -->

# 画像レイアウト

![w:600](https://placehold.jp/600x400.png)

---

<!-- _class: image -->

# 複数の画像

![w:400](https://placehold.jp/400x300.png)
![w:400](https://placehold.jp/400x300.png)

---

<!-- _class: image-right -->

# 画像右レイアウト

![w:500](https://placehold.jp/500x400.png)

<div class="content">

## 左側のコンテンツ

- 画像が右側に表示されます
- コンテンツは左側に配置されます
- 図と説明の組み合わせに最適

</div>

---

<!-- _class: image-right image-30 -->

# 画像右 30%

![w:300](https://placehold.jp/300x400.png)

<div class="content">

## より狭い画像カラム

`image-30` クラスは画像カラムを 30% の幅にします。

利用可能な幅:

- `image-20`: 画像幅 20%
- `image-30`: 画像幅 30%
- `image-40`: 画像幅 40%
- `image-60`: 画像幅 60%
- `image-70`: 画像幅 70%
- `image-80`: 画像幅 80%

</div>

---

<!-- _class: image-left -->

# 画像左レイアウト

![w:500](https://placehold.jp/500x400.png)

<div class="content">

## 右側のコンテンツ

- 画像が左側に表示されます
- コンテンツは右側に配置されます
- 画像右レイアウトのミラー

</div>

---

<!-- _class: image-left image-40 -->

![w:400](https://placehold.jp/400x300.png)
![w:400](https://placehold.jp/400x300.png)

<div class="content">

## 複数の画像

画像カラムに複数の画像を縦に並べて表示することもできます。

`image-40` クラスは画像カラムを 40% の幅にします。

</div>

---

<!-- _class: column -->

## 2 カラムレイアウト

<div class="column">

### 左カラム

- ポイント 1
- ポイント 2
- ポイント 3

</div>

<div class="column">

### 右カラム

1. ステップ 1
2. ステップ 2
3. ステップ 3

</div>

---

<!-- _class: column -->

## 3 カラムレイアウト

<div class="column">

### カラム 1

- 項目 A
- 項目 B

</div>

<div class="column">

### カラム 2

- 項目 C
- 項目 D

</div>

<div class="column">

### カラム 3

- 項目 E
- 項目 F

</div>

---

<!-- _class: centered -->

# 中央揃えレイアウト

このスライド上のすべてが水平方向と垂直方向の両方で中央揃えされます。

インパクトのあるスライドや単一のステートメントに最適です。

---

# 水平方向の中央揃え

<div class="h-center">

## この見出しは中央揃え

このテキストも水平方向に中央揃えされます。

![w:300](https://placehold.jp/300x200.png)

画像も中央揃えされます。

</div>

---

# 垂直方向の中央揃え

<div class="v-center">

## このコンテンツは垂直方向に中央揃え

v-center クラスはコンテンツをスライドの垂直方向の中央に配置します。

</div>

---

# テキストカラークラス

<div class="text-accent">

アクセントカラーのテキスト（デフォルト: 緑）

</div>

<div class="text-red">

赤いテキスト

</div>

<div class="text-blue">

青いテキスト

</div>

---

# その他のテキストカラー

<div class="text-pink">

ピンクのテキスト

</div>

<div class="text-green">

緑のテキスト

</div>

<div class="text-purple">

紫のテキスト

</div>

---

<!-- _class: code -->

# コードブロックサンプル

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

# ヘッダーなしレイアウト

このスライドには `no-header` クラスが適用されています。

ヘッダーが非表示になり、垂直方向のスペースが広がります。

コンテンツの多いスライドや追加のスペースが必要な場合に便利です。

---

# 数式

LaTeX 構文を使用して数式を含めることができます:

$$
x = \frac{-b \pm \sqrt{b^2-4ac}}{2a}
$$

$$
f(x) = \frac{1}{\sqrt{2\pi\sigma^2}}e^{-\frac{(x-\mu)^2}{2\sigma^2}}
$$

インライン数式も機能します: $E = mc^2$ または $a^2 + b^2 = c^2$

---

# HTML Details

<details>
<summary>クリックして展開</summary>

これは表示/非表示を切り替えられるコンテンツです。

- 項目 1
- 項目 2
- 項目 3

</details>

---

# カスタムスタイル

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

スライド固有のニーズに合わせてカスタム CSS スタイルを適用できます。

このボックスはカスタムの背景とボーダーを持っています。

</div>

---

<!-- _class: section -->
<!-- _paginate: false -->

# ありがとうございました！

Marp Azusa3 Theme
