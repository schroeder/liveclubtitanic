  curvyCorners.addEvent(window, 'load', initCorners);

  function initCorners() {ldelim}
    var settings = {ldelim}
      tl: {ldelim} radius: 10 {rdelim},
      tr: {ldelim} radius: 10 {rdelim},
      bl: {ldelim} radius: 10 {rdelim},
      br: {ldelim} radius: 10 {rdelim},
      antiAlias: true
    {rdelim}

    /*
    Usage:

    curvyCorners(settingsObj, selectorStr);
    curvyCorners(settingsObj, Obj1[, Obj2[, Obj3[, . . . [, ObjN]]]]);

    selectorStr ::= complexSelector [, complexSelector]...
    complexSelector ::= singleSelector[ singleSelector]
    singleSelector ::= idType | classType
    idType ::= #id
    classType ::= [tagName].className
    tagName ::= div|p|form|blockquote|frameset // others may work
    className : .name
    selector examples:
      #mydiv p.rounded
      #mypara
      .rounded
    */
    curvyCorners(settings, "#myBox");
    curvyCorners(settings, "#node_id_88");
    curvyCorners(settings, "#node_id_89");
    curvyCorners(settings, "#node_id_90");
    curvyCorners(settings, "#node_id_91");
    curvyCorners(settings, "#leftmenu");
    curvyCorners(settings, ".board");
    curvyCorners(settings, "#contentbox");
    curvyCorners(settings, "#footer");
    curvyCorners(settings, ".logo");
  }
 
