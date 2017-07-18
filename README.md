![Krymoh Image](https://github.com/mcofie/krymoh/blob/master/krymoh_logo.png)

# Krymoh :wink:
Krymoh is a CSS framework that focuses on cinematic features in css that adds live to a web page AKA the CSS movie maker. This is written in [SASS](http://sass-lang.com/) therefore it is modular. The core idea here is to make this the go-to framework when a cinematic feel or property is required in a web page.


## Installations & Usage
The framework can be added to your project using two approaches. 


1.First it can be install using `npm` as demostrated below. 
   ```bash
      $npm install krymoh.css --save
   ```


2.It can be cloned from GitHub and added to your web application as so. 
   ```html 
      <head>
        <link rel="stylesheet" href="krymoh.min.css" type="text/css">
      </head>
   ```


## Core Components 
__Krymoh__ ships with these core components: 
1. Animations
2. Filters
3. Gradient
4. Translation
5. Transitions
6. Colors *(bonus)* :smile:


### Animations
The animation component of krymoh is mostly preceded with `.ani-<animation-name>`. These are powerful motion effects that makes user interaction fluid.
Below are a list of animations that ships with the framework.

| Animation Name | Class Name   |
| -------------: | :----------- | 
| Pulse | `pulse` |
| Shake | `shake` |
| Flip | `flip` |
| Bounce | `bounce` |
| Zoom | `zoom` |
| Wobble | `wobble` |
| Ghost | `ghost` |
| Rotate | `rotate` |
| Side | `side` |
| Trace | `trace` |
| Wipe | `wipe` |



### Filters
These are great bits of codes that bring indepth and a bit more color to your web sites. They defuse the obvious and creates a cinematic illusion. The filters are preceded with `.ftr-<filter-name>-<intensity>`. The following are a list of filters. The *intensity* starts from _0_ and ends at _200_

| Filter Name  | Class Name |
| -----------  | ---------- |
| Brightness   | `brightness` |
| Contrast     |  `constrast` |
| Sepia        | `sepia` |
| Invert       | `invert`|
| Saturate | `saturate`|
| Opacity | `opacity` |



__K - Special__
`tint` This class is used to add a color tone or rather tint to a given object.
```html
   <div class="tint">
      <img src="<img_url>" style="background-color:red;">
   </div>
```



### Gradient
Color gradients give indepth and different perspectives of emphasis to our web pages. Here are a list of the various color gradients in `krymoh`. For gradients, they are preceded with `grad-<radial-type>`

| Gradient Name | Class Name |
| ------------: | :--------- |
| Blue Seal | `blue-seal`|



### Transition
This built in transitions create a seamless movement between objects or elements. It comes in different
types and forms with some custom types. A typical transition takes this form `.trns-<transition-funtion>-<time>`.

| Transition Name | Class Name |
| --------------: | :--------- | 
| Linear | `linear` |
| Ease | `ease` |
| Ease In | `ease-in`|
| Ease Out |  `ease-out` |      
| Ease In Out | `ease-in-out` |
| Out Back | `out-back` |
| Out Sine | `out-sine` |
| Quad | `quad` |
| Cubic | `cubic` |


*Custom Transitions*

| Transition Name | Class Name |
| --------------: | :--------- |
| Force | `force` |
| Warm Up | `warm-up` |
| Palpitate | `palpitate` |



### Translation
This component determines how a given element on a web page should be oriented. There are four (4) sub components.
+ Scale
+ Skew
+ Rotate
+ Translate

| Translation Name | Class Name | Condition |
| ---------------: | :--------: | :-------: |
| Scale | `sc-ml<num>-mg<num>` *or* `sc-<num>` | `where  1 <= num <= 5`  |
| Skew | `sk-<r or l>-<num>` | |
| Rotate | `rte-<rad or grad or deg>-<num>`| `where  10 <= num <= 360` |
| Translate | `trnl-<num>-<num>` |   |

*ml* represents multiplier and *mg* magnitude


## Miscellaneous
These are miscellaneous properties that apply to most of the components listed above.
| Property | Description | Type |
| --------:|:----------| :--: |
| `forever`| Infinite iteration for animations | class |
| `-hvr` | Perform translation or transition on `:hover`| postfix |


## Contributing
I plead your indulgence to help make this piece of code better and robust enough for everyone to use.
>Written in Accra with :heart:
