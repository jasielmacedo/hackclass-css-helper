# Hack class [![GitHub release](https://img.shields.io/github/release/jasielmacedo/hackclass.svg)](https://github.com/jasielmacedo/hackclass/releases)

Hack Class combine easy css with the best tools for web.
You can edit visual html without any other css file

## Dependences

[Jquery](http://gulpjs.com/)

[Animate.css](https://daneden.github.io/animate.css/)

[Waypoints](http://imakewebthings.com/waypoints/)

[Bootstrap](https://getbootstrap.com/)

_Bootstrap is optional_

## Usage

1. Include the stylesheet and Javascript on your document's `<head>` including the thirdparty assets.

```html
<head>
  <link rel="stylesheet" href="css/thirdparty/bootstrap.min.css" media="all" />  
  <link rel="stylesheet" href="css/thirdparty/animate.min.css" media="all" />  
  <link rel="stylesheet" href="css/hackclass.min.css" media="all" />
  
  
  <script type="text/javascript" src="js/thirdparty/jquery.min.js"></script>
  <script type="text/javascript" src="js/thirdparty/jquery.waypoints.min.js"></script>
  <script type="text/javascript" src="js/thirdparty/bootstrap.min.js"></script>
  <script type="text/javascript" src="js/hackclass.js"></script>
</head>
```

2. Add the class as you wish to customize the element

```html
<div class='margin_t_10 margin_b_20 padding_l_10 padding_r_20'></div>
```

3. Use Animate.css classes (See [Animate.css](https://daneden.github.io/animate.css/) for more info)

If you want to execute animations only when the element is visible on viewport, add class `animate_when_almost_visible`

```html
<div class='margin_t_10 margin_b_20 padding_l_10 padding_r_20 animate_when_almost_visible fadeInUp'></div>
```

If not, just add the class `animated` 

```html
<div class='animated fadeInUp'></div>
```

## Animate.css sequence animation

1. Just Add the class `animation_after` to create a simple sequence.

```html
<div class='animate_when_almost_visible fadeInUp'></div>
<div class='animate_when_almost_visible fadeInUp animation_after'></div>
<div class='animate_when_almost_visible fadeInDown animation_after'></div>
```

__see [Animation](https://github.com/jasielmacedo/hackclass/blob/master/examples/animation.html) example__

## Animate.css repeat animation 

If you want to repeat animation when the scroll up just add the class `repeat_animation`

```html
<div class='animate_when_almost_visible fadeInUp repeat_animation'></div>
```

_Thank you [@Invincibear](https://github.com/jasielmacedo/hackclass/issues/1) for the suggestion_

__see [Animation](https://github.com/jasielmacedo/hackclass/blob/master/examples/animation.html) example__

## Margin Class List

_each class is equivalent to their property on css context_

| Class Name        |
| ----------------- |
| no_margin |
| margin_0 |
| margin_5 |
| margin_10 |
| margin_15 |
| margin_20 |
| margin_25 |
| margin_30 |
| margin_l_0 |
| margin_l_5 |
| margin_l_10 |
| margin_r_15 |
| margin_l_20 |
| margin_l_25 |
| margin_l_30 |
| margin_l_35 |
| margin_l_40 |
| margin_l_50 |
| margin_r_0 |
| margin_r_5 |
| margin_r_10 |
| margin_r_15 |
| margin_r_20 |
| margin_r_25 |
| margin_r_30 |
| margin_r_35 |
| margin_r_40 |
| margin_r_50 |
| margin_t_0 |
| margin_t_5 |
| margin_t_10 |
| margin_t_15 |
| margin_t_20 |
| margin_t_25 |
| margin_t_30 |
| margin_t_35 |
| margin_t_40 |
| margin_t_50 |
| margin_t_60 |
| margin_b_0 |
| margin_b_5 |
| margin_b_10 |
| margin_b_15 |
| margin_b_20 |
| margin_b_25 |
| margin_b_30 |
| margin_b_35 |
| margin_b_50 |
| margin_b_60 |
| margin_auto |
| margin_v_auto |
| margin_r_auto |
| margin_l_auto |

## Padding Class List

_each class is equivalent to their property on css context_

| Class Name        |
| ----------------- |
| no_padding |
| padding_0 |
| padding_5 |
| padding_10 |
| padding_15 |
| padding_20 |
| padding_t_0 |
| padding_t_5 |
| padding_t_10 |
| padding_t_15 |
| padding_t_20 |
| padding_t_25 |
| padding_t_40 |
| padding_t_50 |
| padding_t_100 |
| padding_t_150 |
| padding_b_0 |
| padding_b_5 |
| padding_b_10 |
| padding_b_15 |
| padding_b_20 |
| padding_b_25 |
| padding_b_40 |
| padding_b_50 |
| padding_l_0 |
| padding_l_5 |
| padding_l_10 |
| padding_l_15 |
| padding_l_20 |
| padding_l_25 |
| padding_l_40 |
| padding_l_50 |
| padding_r_0  |
| padding_r_5  |
| padding_r_10  |
| padding_r_15 |
| padding_r_20 |
| padding_r_25 |
| padding_r_40 |
| padding_r_50 |

## Others

_each class is equivalent to their property on css context_

| Class Name        |
| ----------------- |
| no_border |
| border_1 |
| border_r_1  |
| border_b_1  |
| border_l_1  |
| border_t_1  |
| border_2 |
| border_r_2  |
| border_b_2  |
| border_l_2  |
| border_t_2  |
| border_c_cccccc |
| border_c_ccc |
| border_c_666666
| border_c_666 |
| border_c_dfdfdf
| border_c_df |
| clear |
| clear_left |
| clear_right |
| overflow
| overflow_hide |
| overflow_auto |
| relative |
| absolute |
| fixed |
| static |
| hide |
| hide_important |
| table  |
| table_cell |
| cell |
| hack  |
| block |
| show  |
| inline
| show_inline  |
| inline_block  |
| left  |
| right  |
| indent  |
| opacity |
| align_center |
| align_left |
| align_right |
| align_justify |
| bold |
| italic |
| h_full
| h_p_100 |
| h_middle
| h_p_50 |
| h_400 |
| h_320 |
| h_300 |
| h_250 |
| h_220 |
| h_200 |
| h_150 |
| h_140 |
| h_128 |
| h_120 |
| h_100 |
| h_90 |
| h_80 |
| h_64 |
| h_60 |
| h_50 |
| h_40 |
| h_32 |
| h_30 |
| h_20 |
| h_16 |
| h_10 |
| w_full
| w_p_100 |
| w_middle
| w_p_50 |
| w_620 |
| w_600 |
| w_550 |
| w_500 |
| w_480 |
| w_400 |
| w_350 |
| w_320 |
| w_300 |
| w_250 |
| w_150 |
| w_140 |
| w_128 |
| w_120 |
| w_100 |
| w_80 |
| w_64 |
| w_60 |
| w_50 |
| w_48 |
| w_40 |
| w_32 |
| w_20 |
| w_16 |
| w_10 |
| upper |
| underline  |
| pointer |
| f10 |
| f12 |
| f13 |
| f14 |
| f15 |
| f17 |
| f18 |
| f20 |
| f22 |
| f24 | 
| f28 | 
| f32 | 
| f36 |
| f42 |  
| f48 | 
| c_333333 |
| c_333 |
| c_666666 |
| c_666 |
| c_999999 | 
| c_999 |
| c_000000 |
| c_000 |
| c_black |
| c_ffffff |
| c_fff |
| c_white |
| bg_ffffff |
| bg_fff |
| bg_cccccc |
| bg_ccc |
| bg_dfdfdf |
| bg_df |
| bg_999999 |
| bg_999 |
| bg_666666 |
| bg_999 |
| bg_333333 |
| bg_333 |
| z_0 |
| z_1 |
| z_5 |
| z_10 |
| z_100 |
| z_1000 |
| line_10 |
| line_12 |
| line_15 |
| line_18 |
| line_20 |
| line_25 |
| line_30 |

## License

Animate.css is licensed under the MIT license. (http://opensource.org/licenses/MIT)
