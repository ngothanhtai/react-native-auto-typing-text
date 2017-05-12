# react-native-auto-typing-text

Auto typing text component.

## Demo
![Demo](Example/demo.gif)

## Installation
```
npm install --save react-native-auto-typing-text
```

## Usage

```js
<AutoTypingText
  text={`có căn nhà nằm nghe nắng mưa`}
  charMovingTime={80}
  delay={8000}
  style={{
    position: 'absolute',
    width: width - 40,
    fontSize: 30,
    color: 'rgba(255,255,255,0.7)',
    backgroundColor: 'rgba(0,0,0,0)',
    margin: 20,
    top: 240,
  }}
  onComplete={() => { console.log('done'); }}
/>
```

## Properties

| Prop | Type | Description |
|---|---|---|
|**`text`**|`string`|Text to type|
|**`charMovingTime`**|`number`|time to type each character|
|**`delay`**|`number`|Delay time before typing|
|**`style`**|`string`|Style for text|
|**`onComplete`**|`func`|is called when typing completed|
