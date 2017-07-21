![Krymoh Image](https://github.com/mcofie/krymoh/blob/master/krymoh_logo.png)

# Krymoh :wink:
Krymoh is a CSS framework that focuses on cinematic features in css that adds live to a web page AKA the CSS movie maker. This is written in [SASS](http://sass-lang.com/) therefore it is modular. The core idea here is to make this the go-to framework when a cinematic feel or property is required in a web page.


## Installations & Usage
The framework can be added to your project using two approaches. 


1.Install using `npm` as demostrated below. 
   ```bash
      $npm install krymoh.css --save
   ```


2.It can be cloned from GitHub and added to your web application as illustrated below. 
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
The animation component of krymoh takes the form `.ani-<animation-name>`. These are powerful motion effects that makes user interaction fluid.
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
They are great bits of codes that bring indepth and a bit more hue to your web sites. They defuse the obvious and creates a cinematic illusion. The filters are written in this form `.ftr-<filter-name>-<intensity>`. The following are a list of filters. The *intensity* starts from _10_ and ends at _500_ with a step size of _10_

| Filter Name  | Class Name |
| -----------  | ---------- |
| Brightness   | `brightness` |
| Contrast     |  `constrast` |
| Sepia        | `sepia` |
| Invert       | `invert`|
| Saturate | `saturate`|
| Opacity | `opacity` |
| Hue Rate| `hue-rate` |



__K - Special__
`tint` this class is used to add a color tone or tint to a given element .i.e an image.
```html
   <div class="tint">
      <img src="<img_url>" style="background-color:red;">
   </div>
```



### Gradient
Color gradients give indepth and different perspectives of emphasis to web pages. Here are a list of the various color gradients in `krymoh`. For gradients, they are written as `grad-<gradient-type>`

| Gradient Name | Class Name |  Type |
| ------------: | :--------- | :---: |
| Blue Seal | `blue-seal`| Linear |
| Green Corel | `green-corel` | Linear |
| Saucy Red | `saucy-red` | Linear |
| Gold Coal | `gold-coal` | Linear |
| Blackish | `blackish` | Linear |


### Transition
The transition classes create a seamless movement between objects or elements. It comes in different
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
| Skew | `sk-<r or l>-<num>` | `where  10 <= num <= 360` |
| Rotate | `rte-<rad or grad or deg>-<num>`| `where  10 <= num <= 360` |
| Translate | `trnl-<num>-<num>` | `where  10 <= num <= 360`  |

*ml* represents multiplier and *mg* magnitude


## Miscellaneous
These are miscellaneous properties that can be applied to most of the components listed above.

| Property | Description | Type |
| :------: | :---------: | :--: |
| `forever`| Infinite iteration for animations | class |
| `-hvr` | Perform translation or transition on `:hover`| postfix |



## Contributing
Any form of support & contributions to this framework is warmly welcome.
>Written in Accra with :heart: