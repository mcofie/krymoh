# Krymoh
![Krymoh Image](https://github.com/mcofie/krymoh/blob/master/image.png)
<!--![Image of Yaktocat](https://octodex.github.com/images/yaktocat.png)-->
Krymoh is a CSS framework that focuses on basic animations and transitions in css that adds live to a simple web based application AKA the CSS movie maker This was written in [SASS](www.sacc.com)


## Installations & Usage
The framework can be added to your project using two approaches. 

1.First it can be install using `npm` as demostrated below. 
   ```bash
      $npm install krymoh.css --save
   ```

2. It can be cloned from GitHub and added to your web application as so. 
   ```html 
      <head>
        <link rel="stylesheet" href="krymoh.min.css" type="text/css">
      </head>
   ```


## Core Components 
`Krymoh` ships with these components that 
1. Animations
2. Filters
3. Gradient
4. Translation
5. Transitions

***

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
These are great bits of codes that brings indepth and abit more color to your web sites. It defuses the obvious and creates a cinematic illusion. The filters are preceded with `.ftr-<filter-name>-<intensity>`. The following are a list of filters. The *intensity* starts from _0_ and ends at _200_

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
Color gradients gives indepth and different shades of emphasis to our web pages. Here are a list of the various color gradients in `krymoh`. For gradients, they are preceded with `grad-<radial-type>`

| Gradient Name | Class Name |
| ------------: | :--------- |



### Transition
These built in transitions create a seamless movement between objects or elements.

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

| Translation Name | Class Name | Condition |
| ---------------: | :--------: | :-------: |
| Scale | `sc-ml<num>-mg<num>` *or* `sc-<num>` | `where  1 <= num <= 5`  |
| Skew | `sk-<r|l>-<num>` | `where num =`|
| Translate | `trnl-<num>-<num>` |   |

*ml* represents multiplier and *mg* magnitude



## Contributing
I plea your indulgence to help make this piece of code better and robust enough for everyone to use.
