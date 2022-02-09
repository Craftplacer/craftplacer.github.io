# Reviewing Linux desktop environments

New distro (Devuan), new attempts at trying Linux desktops.

## MATE

MATE is the first DE that I installed, because I was looking for a retro experience, but I came to the conclusion that it's just XFCE, but... a bit different.

### Pros

- It hasn't changed radically since it was forked 
  - Offers old themes (icons, GTK2+ themes, window borders)
- Simple and relatively fast

### Cons

- Doesn't seem to have any reasonable ways to tweak it, beside the options given from the system settings
- Poor tray icon customization
  - Icons have different sizes and therefore don't look good in the panel

## XFCE

### Pros

- Offers some more options compared to MATE
- Software seems a bit more updated feature-wise

### Cons

- Panel widgets are not that visually pleasing (layout is off, missing padding/margin between items)
  - Literally only solutions are broken GTK theming or using separators
- Its built-in X11 compositor is adding visual delay and makes performance in games worse even with enough frames being rendered
  - Picom may be suggested instead
- Doesn't have any themes that play nicely with GTK3+


### Nits

- Seems to tag along with GTK changes and tries to modernize certain aspects of it with varying success
- Desktop icons aren't that great to look at
  - Text gets cut off easily when you go smaller than 10pt
    - Ellipsis on desktop but not file manager?

Feel free to discuss this post with me in the comments