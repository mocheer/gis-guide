function createNav() { nav = new esri.toolbars.Navigation(Map); }

function full() { nav.zoomToFullExtent(); }

function next() { nav.zoomToNextExtent(); }

function pre() { nav.zoomToPrevExtent(); }   