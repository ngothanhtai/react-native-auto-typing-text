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
import AutoTypingText from 'react-native-auto-typing-text';

<AutoTypingText
  text={`có căn nhà nằm nghe nắng mưa`}
  charMovingTime={80}
  delay={0}
  style={{
    position: 'absolute',
    width: 300,
    fontSize: 30,
    color: 'rgba(0,0,0,0.7)',
    backgroundColor: 'rgba(0,0,0,0)',
    margin: 20,
    top: 240,
    left: 0,
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
