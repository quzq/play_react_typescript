typescript対応のreactプロジェクトテンプレートを作成



# プロジェクトテンプレートの作成
以下のコマンドでテンプレートを作成します。

```
npx create-react-app my-app --template typescript
```
`package.json`に記述してある`react-scripts`のバージョンが3.3.0の場合、以下のコマンドで3.2.0にダウングレードします（不具合があるため）。

```
npm i react-scripts@3.2.0
```


# 動作確認
以下のコマンドで確認します。

```
npm start
```
