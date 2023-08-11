## Element hierarchy

element | class | action

header | header
  button | menuButton | onClick=toggleMenu
    svg
  div | menuBar, menuBarHorizontal
    div | menuItemsContainer
      div | logoContainer
        div 
          img
      div | navContainer
        nav | navAreaWide, navAreaAll
          ul
            li | navItem, navItemFocus
              a
                p | menuItemContent 
  
## To position an element relative to it's parent
Parent - relative
Element - absolute