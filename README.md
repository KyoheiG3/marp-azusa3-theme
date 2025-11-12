# Marp Azusa3 Theme

[Azusa 3](https://azusa3.sanographix.net/) のデザインを Marp 用テーマとして実装したものです。

## 特徴

- **ダークテーマ**: 目に優しいダークな配色
- **豊富なレイアウト**: タイトル、セクション、画像、コード、カラムなど多様なレイアウト
- **アクセントカラー**: 見出しや装飾に Azusa3 のアクセントカラーを使用
- **柔軟なカスタマイズ**: 画像幅、テキスト色、レイアウトなど細かく調整可能

## セットアップ

### VSCode

1. [Marp for VS Code](https://marketplace.visualstudio.com/items?itemName=marp-team.marp-vscode) 拡張機能をインストール
2. VSCode の設定ファイル (`.vscode/settings.json`) にテーマの URL を追加:

```json
{
  "markdown.marp.themes": [
    "https://raw.githubusercontent.com/KyoheiG3/marp-azusa3-theme/refs/heads/main/themes/azusa3/style.css"
  ]
}
```

## 使い方

Markdown ファイルのフロントマターでテーマを指定します:

```markdown
---
marp: true
theme: azusa3
---

# タイトル

スライドの内容
```

## レイアウト例

### タイトルスライド

```markdown
<!-- _class: title -->
<!-- _paginate: false -->

# プレゼンテーションタイトル

サブタイトルや説明

日付や著者情報
```

### セクションスライド

```markdown
<!-- _class: section -->
<!-- _paginate: false -->

# セクションタイトル

セクションの説明
```

### アジェンダスライド

```markdown
<!-- _class: agenda -->

# アジェンダ

- **現在のトピック**
- 次のトピック
- その他のトピック
```

### 画像レイアウト

```markdown
<!-- _class: image-right -->

# 見出し

![](image.png)

<div class="content">

説明文やリストなど

</div>
```

画像幅の調整:

- `image-20`: 画像幅 20%
- `image-30`: 画像幅 30%
- `image-40`: 画像幅 40%（デフォルト: 50%）
- `image-60`: 画像幅 60%
- `image-70`: 画像幅 70%
- `image-80`: 画像幅 80%

### コードスライド

````markdown
<!-- _class: code -->

# コード例

```typescript
function greet(name: string): void {
  console.log(`Hello, ${name}!`);
}
```
````

### カラムレイアウト

```markdown
<!-- _class: column -->

<div class="column">

### 左カラム

内容

</div>

<div class="column">

### 右カラム

内容

</div>
```

## その他の機能

### テキストカラー

```markdown
<div class="text-accent">アクセントカラー</div>
<div class="text-red">赤</div>
<div class="text-blue">青</div>
<div class="text-pink">ピンク</div>
<div class="text-green">緑</div>
<div class="text-purple">紫</div>
```

### 配置

```markdown
<!-- 中央揃え -->
<!-- _class: centered -->

<!-- 水平方向のみ中央揃え -->
<div class="h-center">内容</div>

<!-- 垂直方向のみ中央揃え -->
<div class="v-center">内容</div>
```

### 見出しのアクセントカラー

見出し内で**太字**を使用すると、その部分がアクセントカラーで表示されます:

```markdown
# これは**アクセントカラー**で表示されます
```

## サンプル

- [example.md](example.md) - 日本語のサンプル
- [example.en.md](example.en.md) - 英語のサンプル

詳細な使用例は上記のサンプルファイルをご覧ください。

## プロジェクト構成

```
.
├── themes/
│   └── azusa3/
│       └── style.css        # テーマのスタイル定義
├── highlighter
│   └── dart.js              # Dart用シンタックスハイライター
├── marp.config.js           # Marp設定ファイル
├── example.md               # 日本語サンプル
└── example.en.md            # 英語サンプル
```

## ライセンスと著作権

このプロジェクトは MIT License の元で公開されています。詳細は [LICENSE](LICENSE) ファイルをご覧ください。

### クレジット

- デザインは [Azusa 3](https://azusa3.sanographix.net/) を元に作成されています
- 一部の実装は [classmethod-marp-theme](https://github.com/classmethod/classmethod-marp-theme) を参考にしています
