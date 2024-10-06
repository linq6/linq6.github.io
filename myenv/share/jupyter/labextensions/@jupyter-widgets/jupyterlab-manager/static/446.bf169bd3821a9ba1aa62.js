"use strict";
(self.webpackChunk_jupyter_widgets_jupyterlab_manager = self.webpackChunk_jupyter_widgets_jupyterlab_manager || []).push([
  [446, 701],
  {
    1556: (e, n, t) => {
      t.d(n, { A: () => d });
      var i = t(4786),
        r = t.n(i),
        o = t(9451),
        a = t.n(o)()(r());
      a.push([
        e.id,
        "/* Copyright (c) Jupyter Development Team.\n * Distributed under the terms of the Modified BSD License.\n */\n\n.jupyter-widgets-disconnected::before {\n  content: '\\f127'; /* chain-broken */\n  display: inline-block;\n  font: normal normal 900 14px/1 'Font Awesome 5 Free', 'FontAwesome';\n  text-rendering: auto;\n  -webkit-font-smoothing: antialiased;\n  -moz-osx-font-smoothing: grayscale;\n  color: #d9534f;\n  padding: 3px;\n  align-self: flex-start;\n}\n\n.jupyter-widgets-error-widget {\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n  height: 100%;\n  border: solid 1px red;\n  margin: 0 auto;\n}\n\n.jupyter-widgets-error-widget.icon-error {\n  min-width: var(--jp-widgets-inline-width-short);\n}\n.jupyter-widgets-error-widget.text-error {\n  min-width: calc(2 * var(--jp-widgets-inline-width));\n  min-height: calc(3 * var(--jp-widgets-inline-height));\n}\n\n.jupyter-widgets-error-widget p {\n  text-align: center;\n}\n\n.jupyter-widgets-error-widget.text-error pre::first-line {\n  font-weight: bold;\n}\n",
        "",
      ]);
      const d = a;
    },
    1451: (e, n, t) => {
      t.d(n, { A: () => d });
      var i = t(4786),
        r = t.n(i),
        o = t(9451),
        a = t.n(o)()(r());
      a.push([
        e.id,
        "/* This file has code derived from Lumino CSS files, as noted below. The license for this Lumino code is:\n\nCopyright (c) 2019 Project Jupyter Contributors\nAll rights reserved.\n\nRedistribution and use in source and binary forms, with or without\nmodification, are permitted provided that the following conditions are met:\n\n1. Redistributions of source code must retain the above copyright notice, this\n   list of conditions and the following disclaimer.\n\n2. Redistributions in binary form must reproduce the above copyright notice,\n   this list of conditions and the following disclaimer in the documentation\n   and/or other materials provided with the distribution.\n\n3. Neither the name of the copyright holder nor the names of its\n   contributors may be used to endorse or promote products derived from\n   this software without specific prior written permission.\n\nTHIS SOFTWARE IS PROVIDED BY THE COPYRIGHT HOLDERS AND CONTRIBUTORS \"AS IS\"\nAND ANY EXPRESS OR IMPLIED WARRANTIES, INCLUDING, BUT NOT LIMITED TO, THE\nIMPLIED WARRANTIES OF MERCHANTABILITY AND FITNESS FOR A PARTICULAR PURPOSE ARE\nDISCLAIMED. IN NO EVENT SHALL THE COPYRIGHT HOLDER OR CONTRIBUTORS BE LIABLE\nFOR ANY DIRECT, INDIRECT, INCIDENTAL, SPECIAL, EXEMPLARY, OR CONSEQUENTIAL\nDAMAGES (INCLUDING, BUT NOT LIMITED TO, PROCUREMENT OF SUBSTITUTE GOODS OR\nSERVICES; LOSS OF USE, DATA, OR PROFITS; OR BUSINESS INTERRUPTION) HOWEVER\nCAUSED AND ON ANY THEORY OF LIABILITY, WHETHER IN CONTRACT, STRICT LIABILITY,\nOR TORT (INCLUDING NEGLIGENCE OR OTHERWISE) ARISING IN ANY WAY OUT OF THE USE\nOF THIS SOFTWARE, EVEN IF ADVISED OF THE POSSIBILITY OF SUCH DAMAGE.\n\n\nCopyright (c) 2014-2017, PhosphorJS Contributors\nAll rights reserved.\n\nRedistribution and use in source and binary forms, with or without\nmodification, are permitted provided that the following conditions are met:\n\n* Redistributions of source code must retain the above copyright notice, this\n  list of conditions and the following disclaimer.\n\n* Redistributions in binary form must reproduce the above copyright notice,\n  this list of conditions and the following disclaimer in the documentation\n  and/or other materials provided with the distribution.\n\n* Neither the name of the copyright holder nor the names of its\n  contributors may be used to endorse or promote products derived from\n  this software without specific prior written permission.\n\nTHIS SOFTWARE IS PROVIDED BY THE COPYRIGHT HOLDERS AND CONTRIBUTORS \"AS IS\"\nAND ANY EXPRESS OR IMPLIED WARRANTIES, INCLUDING, BUT NOT LIMITED TO, THE\nIMPLIED WARRANTIES OF MERCHANTABILITY AND FITNESS FOR A PARTICULAR PURPOSE ARE\nDISCLAIMED. IN NO EVENT SHALL THE COPYRIGHT HOLDER OR CONTRIBUTORS BE LIABLE\nFOR ANY DIRECT, INDIRECT, INCIDENTAL, SPECIAL, EXEMPLARY, OR CONSEQUENTIAL\nDAMAGES (INCLUDING, BUT NOT LIMITED TO, PROCUREMENT OF SUBSTITUTE GOODS OR\nSERVICES; LOSS OF USE, DATA, OR PROFITS; OR BUSINESS INTERRUPTION) HOWEVER\nCAUSED AND ON ANY THEORY OF LIABILITY, WHETHER IN CONTRACT, STRICT LIABILITY,\nOR TORT (INCLUDING NEGLIGENCE OR OTHERWISE) ARISING IN ANY WAY OUT OF THE USE\nOF THIS SOFTWARE, EVEN IF ADVISED OF THE POSSIBILITY OF SUCH DAMAGE.\n*/\n\n/*\n * The following section is derived from https://github.com/jupyterlab/lumino/blob/23b9d075ebc5b73ab148b6ebfc20af97f85714c4/packages/widgets/style/tabbar.css \n * We've scoped the rules so that they are consistent with exactly our code.\n */\n\n/* <DEPRECATED> */\n.jupyter-widgets.widget-tab > .p-TabBar, /* </DEPRECATED> */\n/* <DEPRECATED> */.jupyter-widgets.jupyter-widget-tab > .p-TabBar, /* </DEPRECATED> */\n.jupyter-widgets.jupyter-widget-tab > .lm-TabBar {\n  display: flex;\n  -webkit-user-select: none;\n  -moz-user-select: none;\n  -ms-user-select: none;\n  user-select: none;\n}\n\n/* <DEPRECATED> */\n.jupyter-widgets.widget-tab > .p-TabBar[data-orientation='horizontal'], /* </DEPRECATED> */\n/* <DEPRECATED> */.jupyter-widgets.jupyter-widget-tab > .p-TabBar[data-orientation='horizontal'], /* </DEPRECATED> */\n.jupyter-widgets.jupyter-widget-tab > .lm-TabBar[data-orientation='horizontal'] {\n  flex-direction: row;\n}\n\n/* <DEPRECATED> */\n.jupyter-widgets.widget-tab > .p-TabBar[data-orientation='vertical'], /* </DEPRECATED> */\n/* <DEPRECATED> */.jupyter-widgets.jupyter-widget-tab > .p-TabBar[data-orientation='vertical'], /* </DEPRECATED> */\n.jupyter-widgets.jupyter-widget-tab > .lm-TabBar[data-orientation='vertical'] {\n  flex-direction: column;\n}\n\n/* <DEPRECATED> */\n.jupyter-widgets.widget-tab > .p-TabBar > .p-TabBar-content, /* </DEPRECATED> */\n/* <DEPRECATED> */.jupyter-widgets.jupyter-widget-tab > .p-TabBar > .p-TabBar-content, /* </DEPRECATED> */\n.jupyter-widgets.jupyter-widget-tab > .lm-TabBar > .lm-TabBar-content {\n  margin: 0;\n  padding: 0;\n  display: flex;\n  flex: 1 1 auto;\n  list-style-type: none;\n}\n\n/* <DEPRECATED> */\n.jupyter-widgets.widget-tab\n  > .p-TabBar[data-orientation='horizontal']\n  > .p-TabBar-content,\n/* </DEPRECATED> */\n/* <DEPRECATED> */\n.jupyter-widgets.jupyter-widget-tab\n> .p-TabBar[data-orientation='horizontal']\n> .p-TabBar-content,\n/* </DEPRECATED> */\n.jupyter-widgets.jupyter-widget-tab\n  > .lm-TabBar[data-orientation='horizontal']\n  > .lm-TabBar-content {\n  flex-direction: row;\n}\n\n/* <DEPRECATED> */\n.jupyter-widgets.widget-tab\n  > .p-TabBar[data-orientation='vertical']\n  > .p-TabBar-content,\n/* </DEPRECATED> */\n/* <DEPRECATED> */\n.jupyter-widgets.jupyter-widget-tab\n> .p-TabBar[data-orientation='vertical']\n> .p-TabBar-content,\n/* </DEPRECATED> */\n.jupyter-widgets.jupyter-widget-tab\n  > .lm-TabBar[data-orientation='vertical']\n  > .lm-TabBar-content {\n  flex-direction: column;\n}\n\n/* <DEPRECATED> */\n.jupyter-widgets.widget-tab > .p-TabBar .p-TabBar-tab, /* </DEPRECATED> */\n/* <DEPRECATED> */.jupyter-widgets.jupyter-widget-tab > .p-TabBar .p-TabBar-tab, /* </DEPRECATED> */\n.jupyter-widgets.jupyter-widget-tab > .lm-TabBar .lm-TabBar-tab {\n  display: flex;\n  flex-direction: row;\n  box-sizing: border-box;\n  overflow: hidden;\n}\n\n/* <DEPRECATED> */\n.jupyter-widgets.widget-tab > .p-TabBar .p-TabBar-tabIcon, /* </DEPRECATED> */\n/* <DEPRECATED> */ .jupyter-widgets.widget-tab > .p-TabBar .p-TabBar-tabCloseIcon, /* </DEPRECATED> */\n/* <DEPRECATED> */.jupyter-widgets.jupyter-widget-tab > .p-TabBar .p-TabBar-tabIcon, /* </DEPRECATED> */\n/* <DEPRECATED> */ .jupyter-widgets.jupyter-widget-tab > .p-TabBar .p-TabBar-tabCloseIcon, /* </DEPRECATED> */\n.jupyter-widgets.jupyter-widget-tab > .lm-TabBar .lm-TabBar-tabIcon,\n.jupyter-widgets.jupyter-widget-tab > .lm-TabBar .lm-TabBar-tabCloseIcon {\n  flex: 0 0 auto;\n}\n\n/* <DEPRECATED> */\n.jupyter-widgets.widget-tab > .p-TabBar .p-TabBar-tabLabel, /* </DEPRECATED> */\n/* <DEPRECATED> */.jupyter-widgets.jupyter-widget-tab > .p-TabBar .p-TabBar-tabLabel, /* </DEPRECATED> */\n.jupyter-widgets.jupyter-widget-tab > .lm-TabBar .lm-TabBar-tabLabel {\n  flex: 1 1 auto;\n  overflow: hidden;\n  white-space: nowrap;\n}\n\n/* <DEPRECATED> */\n.jupyter-widgets.widget-tab > .p-TabBar .p-TabBar-tab.p-mod-hidden, /* </DEPRECATED> */\n/* <DEPRECATED> */.jupyter-widgets.jupyter-widget-tab > .p-TabBar .p-TabBar-tab.p-mod-hidden, /* </DEPRECATED> */\n.jupyter-widgets.jupyter-widget-tab > .lm-TabBar .lm-TabBar-tab.lm-mod-hidden {\n  display: none !important;\n}\n\n/* <DEPRECATED> */\n.jupyter-widgets.widget-tab > .p-TabBar.p-mod-dragging .p-TabBar-tab, /* </DEPRECATED> */\n/* <DEPRECATED> */.jupyter-widgets.jupyter-widget-tab > .p-TabBar.p-mod-dragging .p-TabBar-tab, /* </DEPRECATED> */\n.jupyter-widgets.jupyter-widget-tab > .lm-TabBar.lm-mod-dragging .lm-TabBar-tab {\n  position: relative;\n}\n\n/* <DEPRECATED> */\n.jupyter-widgets.widget-tab\n  > .p-TabBar.p-mod-dragging[data-orientation='horizontal']\n  .p-TabBar-tab,\n/* </DEPRECATED> */\n/* <DEPRECATED> */\n.jupyter-widgets.jupyter-widget-tab\n  > .p-TabBar.p-mod-dragging[data-orientation='horizontal']\n  .p-TabBar-tab,\n/* </DEPRECATED> */\n.jupyter-widgets.jupyter-widget-tab\n  > .lm-TabBar.lm-mod-dragging[data-orientation='horizontal']\n  .lm-TabBar-tab {\n  left: 0;\n  transition: left 150ms ease;\n}\n\n/* <DEPRECATED> */\n.jupyter-widgets.widget-tab\n  > .p-TabBar.p-mod-dragging[data-orientation='vertical']\n  .p-TabBar-tab,\n/* </DEPRECATED> */\n/* <DEPRECATED> */\n.jupyter-widgets.jupyter-widget-tab\n> .p-TabBar.p-mod-dragging[data-orientation='vertical']\n.p-TabBar-tab,\n/* </DEPRECATED> */\n.jupyter-widgets.jupyter-widget-tab\n  > .lm-TabBar.lm-mod-dragging[data-orientation='vertical']\n  .lm-TabBar-tab {\n  top: 0;\n  transition: top 150ms ease;\n}\n\n/* <DEPRECATED> */\n.jupyter-widgets.widget-tab\n  > .p-TabBar.p-mod-dragging\n  .p-TabBar-tab.p-mod-dragging,\n/* </DEPRECATED> */\n/* <DEPRECATED> */\n.jupyter-widgets.jupyter-widget-tab\n> .p-TabBar.p-mod-dragging\n.p-TabBar-tab.p-mod-dragging,\n/* </DEPRECATED> */\n.jupyter-widgets.jupyter-widget-tab\n  > .lm-TabBar.lm-mod-dragging\n  .lm-TabBar-tab.lm-mod-dragging {\n  transition: none;\n}\n\n/* End tabbar.css */\n",
        "",
      ]);
      const d = a;
    },
    9013: (e, n, t) => {
      t.d(n, { A: () => d });
      var i = t(4786),
        r = t.n(i),
        o = t(9451),
        a = t.n(o)()(r());
      a.push([
        e.id,
        '/*\n\nThe nouislider.css file is autogenerated from nouislider.less, which imports and wraps the nouislider/src/nouislider.less styles.\n\nMIT License\n\nCopyright (c) 2019 Léon Gersen\n\nPermission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the "Software"), to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions:\n\nThe above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.\n\nTHE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.\n*/\n/* The .widget-slider class is deprecated */\n.widget-slider,\n.jupyter-widget-slider {\n  /* Functional styling;\n * These styles are required for noUiSlider to function.\n * You don\'t need to change these rules to apply your design.\n */\n  /* Wrapper for all connect elements.\n */\n  /* Offset direction\n */\n  /* Give origins 0 height/width so they don\'t interfere with clicking the\n * connect elements.\n */\n  /* Slider size and handle placement;\n */\n  /* Styling;\n * Giving the connect element a border radius causes issues with using transform: scale\n */\n  /* Handles and cursors;\n */\n  /* Handle stripes;\n */\n  /* Disabled state;\n */\n  /* Base;\n *\n */\n  /* Values;\n *\n */\n  /* Markings;\n *\n */\n  /* Horizontal layout;\n *\n */\n  /* Vertical layout;\n *\n */\n  /* Copyright (c) Jupyter Development Team.\n * Distributed under the terms of the Modified BSD License.\n */\n  /* Custom CSS for nouislider */\n}\n.widget-slider .noUi-target,\n.jupyter-widget-slider .noUi-target,\n.widget-slider .noUi-target *,\n.jupyter-widget-slider .noUi-target * {\n  -webkit-touch-callout: none;\n  -webkit-tap-highlight-color: rgba(0, 0, 0, 0);\n  -webkit-user-select: none;\n  -ms-touch-action: none;\n  touch-action: none;\n  -ms-user-select: none;\n  -moz-user-select: none;\n  user-select: none;\n  -moz-box-sizing: border-box;\n  box-sizing: border-box;\n}\n.widget-slider .noUi-target,\n.jupyter-widget-slider .noUi-target {\n  position: relative;\n}\n.widget-slider .noUi-base,\n.jupyter-widget-slider .noUi-base,\n.widget-slider .noUi-connects,\n.jupyter-widget-slider .noUi-connects {\n  width: 100%;\n  height: 100%;\n  position: relative;\n  z-index: 1;\n}\n.widget-slider .noUi-connects,\n.jupyter-widget-slider .noUi-connects {\n  overflow: hidden;\n  z-index: 0;\n}\n.widget-slider .noUi-connect,\n.jupyter-widget-slider .noUi-connect,\n.widget-slider .noUi-origin,\n.jupyter-widget-slider .noUi-origin {\n  will-change: transform;\n  position: absolute;\n  z-index: 1;\n  top: 0;\n  right: 0;\n  -ms-transform-origin: 0 0;\n  -webkit-transform-origin: 0 0;\n  -webkit-transform-style: preserve-3d;\n  transform-origin: 0 0;\n  transform-style: flat;\n}\n.widget-slider .noUi-connect,\n.jupyter-widget-slider .noUi-connect {\n  height: 100%;\n  width: 100%;\n}\n.widget-slider .noUi-origin,\n.jupyter-widget-slider .noUi-origin {\n  height: 10%;\n  width: 10%;\n}\n.widget-slider .noUi-txt-dir-rtl.noUi-horizontal .noUi-origin,\n.jupyter-widget-slider .noUi-txt-dir-rtl.noUi-horizontal .noUi-origin {\n  left: 0;\n  right: auto;\n}\n.widget-slider .noUi-vertical .noUi-origin,\n.jupyter-widget-slider .noUi-vertical .noUi-origin {\n  width: 0;\n}\n.widget-slider .noUi-horizontal .noUi-origin,\n.jupyter-widget-slider .noUi-horizontal .noUi-origin {\n  height: 0;\n}\n.widget-slider .noUi-handle,\n.jupyter-widget-slider .noUi-handle {\n  -webkit-backface-visibility: hidden;\n  backface-visibility: hidden;\n  position: absolute;\n}\n.widget-slider .noUi-touch-area,\n.jupyter-widget-slider .noUi-touch-area {\n  height: 100%;\n  width: 100%;\n}\n.widget-slider .noUi-state-tap .noUi-connect,\n.jupyter-widget-slider .noUi-state-tap .noUi-connect,\n.widget-slider .noUi-state-tap .noUi-origin,\n.jupyter-widget-slider .noUi-state-tap .noUi-origin {\n  -webkit-transition: transform 0.3s;\n  transition: transform 0.3s;\n}\n.widget-slider .noUi-state-drag *,\n.jupyter-widget-slider .noUi-state-drag * {\n  cursor: inherit !important;\n}\n.widget-slider .noUi-horizontal,\n.jupyter-widget-slider .noUi-horizontal {\n  height: 18px;\n}\n.widget-slider .noUi-horizontal .noUi-handle,\n.jupyter-widget-slider .noUi-horizontal .noUi-handle {\n  width: 34px;\n  height: 28px;\n  right: -17px;\n  top: -6px;\n}\n.widget-slider .noUi-vertical,\n.jupyter-widget-slider .noUi-vertical {\n  width: 18px;\n}\n.widget-slider .noUi-vertical .noUi-handle,\n.jupyter-widget-slider .noUi-vertical .noUi-handle {\n  width: 28px;\n  height: 34px;\n  right: -6px;\n  top: -17px;\n}\n.widget-slider .noUi-txt-dir-rtl.noUi-horizontal .noUi-handle,\n.jupyter-widget-slider .noUi-txt-dir-rtl.noUi-horizontal .noUi-handle {\n  left: -17px;\n  right: auto;\n}\n.widget-slider .noUi-target,\n.jupyter-widget-slider .noUi-target {\n  background: #FAFAFA;\n  border-radius: 4px;\n  border: 1px solid #D3D3D3;\n  box-shadow: inset 0 1px 1px #F0F0F0, 0 3px 6px -5px #BBB;\n}\n.widget-slider .noUi-connects,\n.jupyter-widget-slider .noUi-connects {\n  border-radius: 3px;\n}\n.widget-slider .noUi-connect,\n.jupyter-widget-slider .noUi-connect {\n  background: #3FB8AF;\n}\n.widget-slider .noUi-draggable,\n.jupyter-widget-slider .noUi-draggable {\n  cursor: ew-resize;\n}\n.widget-slider .noUi-vertical .noUi-draggable,\n.jupyter-widget-slider .noUi-vertical .noUi-draggable {\n  cursor: ns-resize;\n}\n.widget-slider .noUi-handle,\n.jupyter-widget-slider .noUi-handle {\n  border: 1px solid #D9D9D9;\n  border-radius: 3px;\n  background: #FFF;\n  cursor: default;\n  box-shadow: inset 0 0 1px #FFF, inset 0 1px 7px #EBEBEB, 0 3px 6px -3px #BBB;\n}\n.widget-slider .noUi-active,\n.jupyter-widget-slider .noUi-active {\n  box-shadow: inset 0 0 1px #FFF, inset 0 1px 7px #DDD, 0 3px 6px -3px #BBB;\n}\n.widget-slider .noUi-handle:before,\n.jupyter-widget-slider .noUi-handle:before,\n.widget-slider .noUi-handle:after,\n.jupyter-widget-slider .noUi-handle:after {\n  content: "";\n  display: block;\n  position: absolute;\n  height: 14px;\n  width: 1px;\n  background: #E8E7E6;\n  left: 14px;\n  top: 6px;\n}\n.widget-slider .noUi-handle:after,\n.jupyter-widget-slider .noUi-handle:after {\n  left: 17px;\n}\n.widget-slider .noUi-vertical .noUi-handle:before,\n.jupyter-widget-slider .noUi-vertical .noUi-handle:before,\n.widget-slider .noUi-vertical .noUi-handle:after,\n.jupyter-widget-slider .noUi-vertical .noUi-handle:after {\n  width: 14px;\n  height: 1px;\n  left: 6px;\n  top: 14px;\n}\n.widget-slider .noUi-vertical .noUi-handle:after,\n.jupyter-widget-slider .noUi-vertical .noUi-handle:after {\n  top: 17px;\n}\n.widget-slider [disabled] .noUi-connect,\n.jupyter-widget-slider [disabled] .noUi-connect {\n  background: #B8B8B8;\n}\n.widget-slider [disabled].noUi-target,\n.jupyter-widget-slider [disabled].noUi-target,\n.widget-slider [disabled].noUi-handle,\n.jupyter-widget-slider [disabled].noUi-handle,\n.widget-slider [disabled] .noUi-handle,\n.jupyter-widget-slider [disabled] .noUi-handle {\n  cursor: not-allowed;\n}\n.widget-slider .noUi-pips,\n.jupyter-widget-slider .noUi-pips,\n.widget-slider .noUi-pips *,\n.jupyter-widget-slider .noUi-pips * {\n  -moz-box-sizing: border-box;\n  box-sizing: border-box;\n}\n.widget-slider .noUi-pips,\n.jupyter-widget-slider .noUi-pips {\n  position: absolute;\n  color: #999;\n}\n.widget-slider .noUi-value,\n.jupyter-widget-slider .noUi-value {\n  position: absolute;\n  white-space: nowrap;\n  text-align: center;\n}\n.widget-slider .noUi-value-sub,\n.jupyter-widget-slider .noUi-value-sub {\n  color: #ccc;\n  font-size: 10px;\n}\n.widget-slider .noUi-marker,\n.jupyter-widget-slider .noUi-marker {\n  position: absolute;\n  background: #CCC;\n}\n.widget-slider .noUi-marker-sub,\n.jupyter-widget-slider .noUi-marker-sub {\n  background: #AAA;\n}\n.widget-slider .noUi-marker-large,\n.jupyter-widget-slider .noUi-marker-large {\n  background: #AAA;\n}\n.widget-slider .noUi-pips-horizontal,\n.jupyter-widget-slider .noUi-pips-horizontal {\n  padding: 10px 0;\n  height: 80px;\n  top: 100%;\n  left: 0;\n  width: 100%;\n}\n.widget-slider .noUi-value-horizontal,\n.jupyter-widget-slider .noUi-value-horizontal {\n  -webkit-transform: translate(-50%, 50%);\n  transform: translate(-50%, 50%);\n}\n.noUi-rtl .widget-slider .noUi-value-horizontal,\n.noUi-rtl .jupyter-widget-slider .noUi-value-horizontal {\n  -webkit-transform: translate(50%, 50%);\n  transform: translate(50%, 50%);\n}\n.widget-slider .noUi-marker-horizontal.noUi-marker,\n.jupyter-widget-slider .noUi-marker-horizontal.noUi-marker {\n  margin-left: -1px;\n  width: 2px;\n  height: 5px;\n}\n.widget-slider .noUi-marker-horizontal.noUi-marker-sub,\n.jupyter-widget-slider .noUi-marker-horizontal.noUi-marker-sub {\n  height: 10px;\n}\n.widget-slider .noUi-marker-horizontal.noUi-marker-large,\n.jupyter-widget-slider .noUi-marker-horizontal.noUi-marker-large {\n  height: 15px;\n}\n.widget-slider .noUi-pips-vertical,\n.jupyter-widget-slider .noUi-pips-vertical {\n  padding: 0 10px;\n  height: 100%;\n  top: 0;\n  left: 100%;\n}\n.widget-slider .noUi-value-vertical,\n.jupyter-widget-slider .noUi-value-vertical {\n  -webkit-transform: translate(0, -50%);\n  transform: translate(0, -50%);\n  padding-left: 25px;\n}\n.noUi-rtl .widget-slider .noUi-value-vertical,\n.noUi-rtl .jupyter-widget-slider .noUi-value-vertical {\n  -webkit-transform: translate(0, 50%);\n  transform: translate(0, 50%);\n}\n.widget-slider .noUi-marker-vertical.noUi-marker,\n.jupyter-widget-slider .noUi-marker-vertical.noUi-marker {\n  width: 5px;\n  height: 2px;\n  margin-top: -1px;\n}\n.widget-slider .noUi-marker-vertical.noUi-marker-sub,\n.jupyter-widget-slider .noUi-marker-vertical.noUi-marker-sub {\n  width: 10px;\n}\n.widget-slider .noUi-marker-vertical.noUi-marker-large,\n.jupyter-widget-slider .noUi-marker-vertical.noUi-marker-large {\n  width: 15px;\n}\n.widget-slider .noUi-tooltip,\n.jupyter-widget-slider .noUi-tooltip {\n  display: block;\n  position: absolute;\n  border: 1px solid #D9D9D9;\n  border-radius: 3px;\n  background: #fff;\n  color: #000;\n  padding: 5px;\n  text-align: center;\n  white-space: nowrap;\n}\n.widget-slider .noUi-horizontal .noUi-tooltip,\n.jupyter-widget-slider .noUi-horizontal .noUi-tooltip {\n  -webkit-transform: translate(-50%, 0);\n  transform: translate(-50%, 0);\n  left: 50%;\n  bottom: 120%;\n}\n.widget-slider .noUi-vertical .noUi-tooltip,\n.jupyter-widget-slider .noUi-vertical .noUi-tooltip {\n  -webkit-transform: translate(0, -50%);\n  transform: translate(0, -50%);\n  top: 50%;\n  right: 120%;\n}\n.widget-slider .noUi-horizontal .noUi-origin > .noUi-tooltip,\n.jupyter-widget-slider .noUi-horizontal .noUi-origin > .noUi-tooltip {\n  -webkit-transform: translate(50%, 0);\n  transform: translate(50%, 0);\n  left: auto;\n  bottom: 10px;\n}\n.widget-slider .noUi-vertical .noUi-origin > .noUi-tooltip,\n.jupyter-widget-slider .noUi-vertical .noUi-origin > .noUi-tooltip {\n  -webkit-transform: translate(0, -18px);\n  transform: translate(0, -18px);\n  top: auto;\n  right: 28px;\n}\n.widget-slider .noUi-connect,\n.jupyter-widget-slider .noUi-connect {\n  background: #2196f3;\n}\n.widget-slider .noUi-horizontal,\n.jupyter-widget-slider .noUi-horizontal {\n  height: var(--jp-widgets-slider-track-thickness);\n}\n.widget-slider .noUi-vertical,\n.jupyter-widget-slider .noUi-vertical {\n  width: var(--jp-widgets-slider-track-thickness);\n  height: 100%;\n}\n.widget-slider .noUi-horizontal .noUi-handle,\n.jupyter-widget-slider .noUi-horizontal .noUi-handle {\n  width: var(--jp-widgets-slider-handle-size);\n  height: var(--jp-widgets-slider-handle-size);\n  border-radius: 50%;\n  top: calc((var(--jp-widgets-slider-track-thickness) - var(--jp-widgets-slider-handle-size)) / 2);\n  right: calc(var(--jp-widgets-slider-handle-size) / -2);\n}\n.widget-slider .noUi-vertical .noUi-handle,\n.jupyter-widget-slider .noUi-vertical .noUi-handle {\n  height: var(--jp-widgets-slider-handle-size);\n  width: var(--jp-widgets-slider-handle-size);\n  border-radius: 50%;\n  right: calc((var(--jp-widgets-slider-handle-size) - var(--jp-widgets-slider-track-thickness)) / -2);\n  top: calc(var(--jp-widgets-slider-handle-size) / -2);\n}\n.widget-slider .noUi-handle:after,\n.jupyter-widget-slider .noUi-handle:after {\n  content: none;\n}\n.widget-slider .noUi-handle:before,\n.jupyter-widget-slider .noUi-handle:before {\n  content: none;\n}\n.widget-slider .noUi-target,\n.jupyter-widget-slider .noUi-target {\n  background: #fafafa;\n  border-radius: 4px;\n  border: 1px;\n  /* box-shadow: inset 0 1px 1px #F0F0F0, 0 3px 6px -5px #BBB; */\n}\n.widget-slider .ui-slider,\n.jupyter-widget-slider .ui-slider {\n  border: var(--jp-widgets-slider-border-width) solid var(--jp-layout-color3);\n  background: var(--jp-layout-color3);\n  box-sizing: border-box;\n  position: relative;\n  border-radius: 0px;\n}\n.widget-slider .noUi-handle,\n.jupyter-widget-slider .noUi-handle {\n  width: var(--jp-widgets-slider-handle-size);\n  border: 1px solid #d9d9d9;\n  border-radius: 3px;\n  background: #fff;\n  cursor: default;\n  box-shadow: none;\n  outline: none;\n}\n.widget-slider .noUi-target:not([disabled]) .noUi-handle:hover,\n.jupyter-widget-slider .noUi-target:not([disabled]) .noUi-handle:hover,\n.widget-slider .noUi-target:not([disabled]) .noUi-handle:focus,\n.jupyter-widget-slider .noUi-target:not([disabled]) .noUi-handle:focus {\n  background-color: var(--jp-widgets-slider-active-handle-color);\n  border: var(--jp-widgets-slider-border-width) solid var(--jp-widgets-slider-active-handle-color);\n}\n.widget-slider [disabled].noUi-target,\n.jupyter-widget-slider [disabled].noUi-target {\n  opacity: 0.35;\n}\n.widget-slider .noUi-connects,\n.jupyter-widget-slider .noUi-connects {\n  overflow: visible;\n  z-index: 0;\n  background: var(--jp-layout-color3);\n}\n.widget-slider .noUi-vertical .noUi-connect,\n.jupyter-widget-slider .noUi-vertical .noUi-connect {\n  width: calc(100% + 2px);\n  right: -1px;\n}\n.widget-slider .noUi-horizontal .noUi-connect,\n.jupyter-widget-slider .noUi-horizontal .noUi-connect {\n  height: calc(100% + 2px);\n  top: -1px;\n}\n',
        "",
      ]);
      const d = a;
    },
    7654: (e, n, t) => {
      t.d(n, { A: () => w });
      var i = t(4786),
        r = t.n(i),
        o = t(9451),
        a = t.n(o),
        d = t(1451),
        s = t(9013),
        l = t(7298),
        g = t.n(l),
        p = new URL(t(2426), t.b),
        c = a()(r());
      c.i(d.A), c.i(s.A);
      var u = g()(p);
      c.push([
        e.id,
        `/* Copyright (c) Jupyter Development Team.\n * Distributed under the terms of the Modified BSD License.\n */\n\n/*\n * We assume that the CSS variables in\n * https://github.com/jupyterlab/jupyterlab/blob/master/src/default-theme/variables.css\n * have been defined.\n */\n\n:root {\n  --jp-widgets-color: var(--jp-content-font-color1);\n  --jp-widgets-label-color: var(--jp-widgets-color);\n  --jp-widgets-readout-color: var(--jp-widgets-color);\n  --jp-widgets-font-size: var(--jp-ui-font-size1);\n  --jp-widgets-margin: 2px;\n  --jp-widgets-inline-height: 28px;\n  --jp-widgets-inline-width: 300px;\n  --jp-widgets-inline-width-short: calc(\n    var(--jp-widgets-inline-width) / 2 - var(--jp-widgets-margin)\n  );\n  --jp-widgets-inline-width-tiny: calc(\n    var(--jp-widgets-inline-width-short) / 2 - var(--jp-widgets-margin)\n  );\n  --jp-widgets-inline-margin: 4px; /* margin between inline elements */\n  --jp-widgets-inline-label-width: 80px;\n  --jp-widgets-border-width: var(--jp-border-width);\n  --jp-widgets-vertical-height: 200px;\n  --jp-widgets-horizontal-tab-height: 24px;\n  --jp-widgets-horizontal-tab-width: 144px;\n  --jp-widgets-horizontal-tab-top-border: 2px;\n  --jp-widgets-progress-thickness: 20px;\n  --jp-widgets-container-padding: 15px;\n  --jp-widgets-input-padding: 4px;\n  --jp-widgets-radio-item-height-adjustment: 8px;\n  --jp-widgets-radio-item-height: calc(\n    var(--jp-widgets-inline-height) -\n      var(--jp-widgets-radio-item-height-adjustment)\n  );\n  --jp-widgets-slider-track-thickness: 4px;\n  --jp-widgets-slider-border-width: var(--jp-widgets-border-width);\n  --jp-widgets-slider-handle-size: 16px;\n  --jp-widgets-slider-handle-border-color: var(--jp-border-color1);\n  --jp-widgets-slider-handle-background-color: var(--jp-layout-color1);\n  --jp-widgets-slider-active-handle-color: var(--jp-brand-color1);\n  --jp-widgets-menu-item-height: 24px;\n  --jp-widgets-dropdown-arrow: url(${u});\n  --jp-widgets-input-color: var(--jp-ui-font-color1);\n  --jp-widgets-input-background-color: var(--jp-layout-color1);\n  --jp-widgets-input-border-color: var(--jp-border-color1);\n  --jp-widgets-input-focus-border-color: var(--jp-brand-color2);\n  --jp-widgets-input-border-width: var(--jp-widgets-border-width);\n  --jp-widgets-disabled-opacity: 0.6;\n\n  /* From Material Design Lite */\n  --md-shadow-key-umbra-opacity: 0.2;\n  --md-shadow-key-penumbra-opacity: 0.14;\n  --md-shadow-ambient-shadow-opacity: 0.12;\n}\n\n.jupyter-widgets {\n  margin: var(--jp-widgets-margin);\n  box-sizing: border-box;\n  color: var(--jp-widgets-color);\n  overflow: visible;\n}\n\n.jp-Output-result > .jupyter-widgets {\n  margin-left: 0;\n  margin-right: 0;\n}\n\n/* vbox and hbox */\n\n/* <DEPRECATED> */\n.widget-inline-hbox, /* </DEPRECATED> */\n .jupyter-widget-inline-hbox {\n  /* Horizontal widgets */\n  box-sizing: border-box;\n  display: flex;\n  flex-direction: row;\n  align-items: baseline;\n}\n\n/* <DEPRECATED> */\n.widget-inline-vbox, /* </DEPRECATED> */\n .jupyter-widget-inline-vbox {\n  /* Vertical Widgets */\n  box-sizing: border-box;\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n}\n\n/* <DEPRECATED> */\n.widget-box, /* </DEPRECATED> */\n.jupyter-widget-box {\n  box-sizing: border-box;\n  display: flex;\n  margin: 0;\n  overflow: auto;\n}\n\n/* <DEPRECATED> */\n.widget-gridbox, /* </DEPRECATED> */\n.jupyter-widget-gridbox {\n  box-sizing: border-box;\n  display: grid;\n  margin: 0;\n  overflow: auto;\n}\n\n/* <DEPRECATED> */\n.widget-hbox, /* </DEPRECATED> */\n.jupyter-widget-hbox {\n  flex-direction: row;\n}\n\n/* <DEPRECATED> */\n.widget-vbox, /* </DEPRECATED> */\n.jupyter-widget-vbox {\n  flex-direction: column;\n}\n\n/* General Tags Styling */\n\n.jupyter-widget-tagsinput {\n  display: flex;\n  flex-direction: row;\n  flex-wrap: wrap;\n  align-items: center;\n  overflow: auto;\n\n  cursor: text;\n}\n\n.jupyter-widget-tag {\n  padding-left: 10px;\n  padding-right: 10px;\n  padding-top: 0px;\n  padding-bottom: 0px;\n  display: inline-block;\n  white-space: nowrap;\n  overflow: hidden;\n  text-overflow: ellipsis;\n  text-align: center;\n  font-size: var(--jp-widgets-font-size);\n\n  height: calc(var(--jp-widgets-inline-height) - 2px);\n  border: 0px solid;\n  line-height: calc(var(--jp-widgets-inline-height) - 2px);\n  box-shadow: none;\n\n  color: var(--jp-ui-font-color1);\n  background-color: var(--jp-layout-color2);\n  border-color: var(--jp-border-color2);\n  border: none;\n  user-select: none;\n\n  cursor: grab;\n  transition: margin-left 200ms;\n  margin: 1px 1px 1px 1px;\n}\n\n.jupyter-widget-tag.mod-active {\n  /* MD Lite 4dp shadow */\n  box-shadow: 0 4px 5px 0 rgba(0, 0, 0, var(--md-shadow-key-penumbra-opacity)),\n    0 1px 10px 0 rgba(0, 0, 0, var(--md-shadow-ambient-shadow-opacity)),\n    0 2px 4px -1px rgba(0, 0, 0, var(--md-shadow-key-umbra-opacity));\n  color: var(--jp-ui-font-color1);\n  background-color: var(--jp-layout-color3);\n}\n\n.jupyter-widget-colortag {\n  color: var(--jp-inverse-ui-font-color1);\n}\n\n.jupyter-widget-colortag.mod-active {\n  color: var(--jp-inverse-ui-font-color0);\n}\n\n.jupyter-widget-taginput {\n  color: var(--jp-ui-font-color0);\n  background-color: var(--jp-layout-color0);\n\n  cursor: text;\n  text-align: left;\n}\n\n.jupyter-widget-taginput:focus {\n  outline: none;\n}\n\n.jupyter-widget-tag-close {\n  margin-left: var(--jp-widgets-inline-margin);\n  padding: 2px 0px 2px 2px;\n}\n\n.jupyter-widget-tag-close:hover {\n  cursor: pointer;\n}\n\n/* Tag "Primary" Styling */\n\n.jupyter-widget-tag.mod-primary {\n  color: var(--jp-inverse-ui-font-color1);\n  background-color: var(--jp-brand-color1);\n}\n\n.jupyter-widget-tag.mod-primary.mod-active {\n  color: var(--jp-inverse-ui-font-color0);\n  background-color: var(--jp-brand-color0);\n}\n\n/* Tag "Success" Styling */\n\n.jupyter-widget-tag.mod-success {\n  color: var(--jp-inverse-ui-font-color1);\n  background-color: var(--jp-success-color1);\n}\n\n.jupyter-widget-tag.mod-success.mod-active {\n  color: var(--jp-inverse-ui-font-color0);\n  background-color: var(--jp-success-color0);\n}\n\n/* Tag "Info" Styling */\n\n.jupyter-widget-tag.mod-info {\n  color: var(--jp-inverse-ui-font-color1);\n  background-color: var(--jp-info-color1);\n}\n\n.jupyter-widget-tag.mod-info.mod-active {\n  color: var(--jp-inverse-ui-font-color0);\n  background-color: var(--jp-info-color0);\n}\n\n/* Tag "Warning" Styling */\n\n.jupyter-widget-tag.mod-warning {\n  color: var(--jp-inverse-ui-font-color1);\n  background-color: var(--jp-warn-color1);\n}\n\n.jupyter-widget-tag.mod-warning.mod-active {\n  color: var(--jp-inverse-ui-font-color0);\n  background-color: var(--jp-warn-color0);\n}\n\n/* Tag "Danger" Styling */\n\n.jupyter-widget-tag.mod-danger {\n  color: var(--jp-inverse-ui-font-color1);\n  background-color: var(--jp-error-color1);\n}\n\n.jupyter-widget-tag.mod-danger.mod-active {\n  color: var(--jp-inverse-ui-font-color0);\n  background-color: var(--jp-error-color0);\n}\n\n/* General Button Styling */\n\n.jupyter-button {\n  padding-left: 10px;\n  padding-right: 10px;\n  padding-top: 0px;\n  padding-bottom: 0px;\n  display: inline-block;\n  white-space: nowrap;\n  overflow: hidden;\n  text-overflow: ellipsis;\n  text-align: center;\n  font-size: var(--jp-widgets-font-size);\n  cursor: pointer;\n\n  height: var(--jp-widgets-inline-height);\n  border: 0px solid;\n  line-height: var(--jp-widgets-inline-height);\n  box-shadow: none;\n\n  color: var(--jp-ui-font-color1);\n  background-color: var(--jp-layout-color2);\n  border-color: var(--jp-border-color2);\n  border: none;\n  user-select: none;\n}\n\n.jupyter-button i.fa {\n  margin-right: var(--jp-widgets-inline-margin);\n  pointer-events: none;\n}\n\n.jupyter-button:empty:before {\n  content: '\\200b'; /* zero-width space */\n}\n\n.jupyter-widgets.jupyter-button:disabled {\n  opacity: var(--jp-widgets-disabled-opacity);\n}\n\n.jupyter-button i.fa.center {\n  margin-right: 0;\n}\n\n.jupyter-button:hover:enabled,\n.jupyter-button:focus:enabled {\n  /* MD Lite 2dp shadow */\n  box-shadow: 0 2px 2px 0 rgba(0, 0, 0, var(--md-shadow-key-penumbra-opacity)),\n    0 3px 1px -2px rgba(0, 0, 0, var(--md-shadow-key-umbra-opacity)),\n    0 1px 5px 0 rgba(0, 0, 0, var(--md-shadow-ambient-shadow-opacity));\n}\n\n.jupyter-button:active,\n.jupyter-button.mod-active {\n  /* MD Lite 4dp shadow */\n  box-shadow: 0 4px 5px 0 rgba(0, 0, 0, var(--md-shadow-key-penumbra-opacity)),\n    0 1px 10px 0 rgba(0, 0, 0, var(--md-shadow-ambient-shadow-opacity)),\n    0 2px 4px -1px rgba(0, 0, 0, var(--md-shadow-key-umbra-opacity));\n  color: var(--jp-ui-font-color1);\n  background-color: var(--jp-layout-color3);\n}\n\n.jupyter-button:focus:enabled {\n  outline: 1px solid var(--jp-widgets-input-focus-border-color);\n}\n\n/* Button "Primary" Styling */\n\n.jupyter-button.mod-primary {\n  color: var(--jp-ui-inverse-font-color1);\n  background-color: var(--jp-brand-color1);\n}\n\n.jupyter-button.mod-primary.mod-active {\n  color: var(--jp-ui-inverse-font-color0);\n  background-color: var(--jp-brand-color0);\n}\n\n.jupyter-button.mod-primary:active {\n  color: var(--jp-ui-inverse-font-color0);\n  background-color: var(--jp-brand-color0);\n}\n\n/* Button "Success" Styling */\n\n.jupyter-button.mod-success {\n  color: var(--jp-ui-inverse-font-color1);\n  background-color: var(--jp-success-color1);\n}\n\n.jupyter-button.mod-success.mod-active {\n  color: var(--jp-ui-inverse-font-color0);\n  background-color: var(--jp-success-color0);\n}\n\n.jupyter-button.mod-success:active {\n  color: var(--jp-ui-inverse-font-color0);\n  background-color: var(--jp-success-color0);\n}\n\n/* Button "Info" Styling */\n\n.jupyter-button.mod-info {\n  color: var(--jp-ui-inverse-font-color1);\n  background-color: var(--jp-info-color1);\n}\n\n.jupyter-button.mod-info.mod-active {\n  color: var(--jp-ui-inverse-font-color0);\n  background-color: var(--jp-info-color0);\n}\n\n.jupyter-button.mod-info:active {\n  color: var(--jp-ui-inverse-font-color0);\n  background-color: var(--jp-info-color0);\n}\n\n/* Button "Warning" Styling */\n\n.jupyter-button.mod-warning {\n  color: var(--jp-ui-inverse-font-color1);\n  background-color: var(--jp-warn-color1);\n}\n\n.jupyter-button.mod-warning.mod-active {\n  color: var(--jp-ui-inverse-font-color0);\n  background-color: var(--jp-warn-color0);\n}\n\n.jupyter-button.mod-warning:active {\n  color: var(--jp-ui-inverse-font-color0);\n  background-color: var(--jp-warn-color0);\n}\n\n/* Button "Danger" Styling */\n\n.jupyter-button.mod-danger {\n  color: var(--jp-ui-inverse-font-color1);\n  background-color: var(--jp-error-color1);\n}\n\n.jupyter-button.mod-danger.mod-active {\n  color: var(--jp-ui-inverse-font-color0);\n  background-color: var(--jp-error-color0);\n}\n\n.jupyter-button.mod-danger:active {\n  color: var(--jp-ui-inverse-font-color0);\n  background-color: var(--jp-error-color0);\n}\n\n/* Widget Button, Widget Toggle Button, Widget Upload */\n\n/* <DEPRECATED> */\n.widget-button, /* </DEPRECATED> */\n/* <DEPRECATED> */ .widget-toggle-button, /* </DEPRECATED> */\n/* <DEPRECATED> */ .widget-upload, /* </DEPRECATED> */\n.jupyter-widget-button,\n.jupyter-widget-toggle-button,\n.jupyter-widget-upload {\n  width: var(--jp-widgets-inline-width-short);\n}\n\n/* Widget Label Styling */\n\n/* Override Bootstrap label css */\n.jupyter-widgets label {\n  margin-bottom: initial;\n}\n\n/* <DEPRECATED> */\n.widget-label-basic, /* </DEPRECATED> */\n.jupyter-widget-label-basic {\n  /* Basic Label */\n  color: var(--jp-widgets-label-color);\n  font-size: var(--jp-widgets-font-size);\n  overflow: hidden;\n  text-overflow: ellipsis;\n  white-space: nowrap;\n  line-height: var(--jp-widgets-inline-height);\n}\n\n/* <DEPRECATED> */\n.widget-label, /* </DEPRECATED> */\n.jupyter-widget-label {\n  /* Label */\n  color: var(--jp-widgets-label-color);\n  font-size: var(--jp-widgets-font-size);\n  overflow: hidden;\n  text-overflow: ellipsis;\n  white-space: nowrap;\n  line-height: var(--jp-widgets-inline-height);\n}\n\n/* <DEPRECATED> */\n.widget-inline-hbox .widget-label, /* </DEPRECATED> */\n.jupyter-widget-inline-hbox .jupyter-widget-label {\n  /* Horizontal Widget Label */\n  color: var(--jp-widgets-label-color);\n  text-align: right;\n  margin-right: calc(var(--jp-widgets-inline-margin) * 2);\n  width: var(--jp-widgets-inline-label-width);\n  flex-shrink: 0;\n}\n\n/* <DEPRECATED> */\n.widget-inline-vbox .widget-label, /* </DEPRECATED> */\n.jupyter-widget-inline-vbox .jupyter-widget-label {\n  /* Vertical Widget Label */\n  color: var(--jp-widgets-label-color);\n  text-align: center;\n  line-height: var(--jp-widgets-inline-height);\n}\n\n/* Widget Readout Styling */\n\n/* <DEPRECATED> */\n.widget-readout, /* </DEPRECATED> */\n.jupyter-widget-readout {\n  color: var(--jp-widgets-readout-color);\n  font-size: var(--jp-widgets-font-size);\n  height: var(--jp-widgets-inline-height);\n  line-height: var(--jp-widgets-inline-height);\n  overflow: hidden;\n  white-space: nowrap;\n  text-align: center;\n}\n\n/* <DEPRECATED> */\n.widget-readout.overflow, /* </DEPRECATED> */\n.jupyter-widget-readout.overflow {\n  /* Overflowing Readout */\n\n  /* From Material Design Lite\n        shadow-key-umbra-opacity: 0.2;\n        shadow-key-penumbra-opacity: 0.14;\n        shadow-ambient-shadow-opacity: 0.12;\n     */\n  -webkit-box-shadow: 0 2px 2px 0 rgba(0, 0, 0, 0.2),\n    0 3px 1px -2px rgba(0, 0, 0, 0.14), 0 1px 5px 0 rgba(0, 0, 0, 0.12);\n\n  -moz-box-shadow: 0 2px 2px 0 rgba(0, 0, 0, 0.2),\n    0 3px 1px -2px rgba(0, 0, 0, 0.14), 0 1px 5px 0 rgba(0, 0, 0, 0.12);\n\n  box-shadow: 0 2px 2px 0 rgba(0, 0, 0, 0.2), 0 3px 1px -2px rgba(0, 0, 0, 0.14),\n    0 1px 5px 0 rgba(0, 0, 0, 0.12);\n}\n\n/* <DEPRECATED> */\n.widget-inline-hbox .widget-readout, /* </DEPRECATED> */\n.jupyter-widget-inline-hbox .jupyter-widget-readout {\n  /* Horizontal Readout */\n  text-align: center;\n  max-width: var(--jp-widgets-inline-width-short);\n  min-width: var(--jp-widgets-inline-width-tiny);\n  margin-left: var(--jp-widgets-inline-margin);\n}\n\n/* <DEPRECATED> */\n.widget-inline-vbox .widget-readout, /* </DEPRECATED> */\n.jupyter-widget-inline-vbox .jupyter-widget-readout {\n  /* Vertical Readout */\n  margin-top: var(--jp-widgets-inline-margin);\n  /* as wide as the widget */\n  width: inherit;\n}\n\n/* Widget Checkbox Styling */\n\n/* <DEPRECATED> */\n.widget-checkbox, /* </DEPRECATED> */\n.jupyter-widget-checkbox {\n  width: var(--jp-widgets-inline-width);\n  height: var(--jp-widgets-inline-height);\n  line-height: var(--jp-widgets-inline-height);\n}\n\n/* <DEPRECATED> */\n.widget-checkbox input[type='checkbox'], /* </DEPRECATED> */\n.jupyter-widget-checkbox input[type='checkbox'] {\n  margin: 0px calc(var(--jp-widgets-inline-margin) * 2) 0px 0px;\n  line-height: var(--jp-widgets-inline-height);\n  font-size: large;\n  flex-grow: 1;\n  flex-shrink: 0;\n  align-self: center;\n}\n\n/* Widget Valid Styling */\n\n/* <DEPRECATED> */\n.widget-valid, /* </DEPRECATED> */\n.jupyter-widget-valid {\n  height: var(--jp-widgets-inline-height);\n  line-height: var(--jp-widgets-inline-height);\n  width: var(--jp-widgets-inline-width-short);\n  font-size: var(--jp-widgets-font-size);\n}\n\n/* <DEPRECATED> */\n.widget-valid i, /* </DEPRECATED> */\n.jupyter-widget-valid i {\n  line-height: var(--jp-widgets-inline-height);\n  margin-right: var(--jp-widgets-inline-margin);\n  margin-left: var(--jp-widgets-inline-margin);\n}\n\n/* <DEPRECATED> */\n.widget-valid.mod-valid i, /* </DEPRECATED> */\n.jupyter-widget-valid.mod-valid i {\n  color: green;\n}\n\n/* <DEPRECATED> */\n.widget-valid.mod-invalid i, /* </DEPRECATED> */\n.jupyter-widget-valid.mod-invalid i {\n  color: red;\n}\n\n/* <DEPRECATED> */\n.widget-valid.mod-valid .widget-valid-readout, /* </DEPRECATED> */\n.jupyter-widget-valid.mod-valid .jupyter-widget-valid-readout {\n  display: none;\n}\n\n/* Widget Text and TextArea Styling */\n\n/* <DEPRECATED> */\n.widget-textarea, /* </DEPRECATED> */\n/* <DEPRECATED> */ .widget-text, /* </DEPRECATED> */\n.jupyter-widget-textarea,\n.jupyter-widget-text {\n  width: var(--jp-widgets-inline-width);\n}\n\n/* <DEPRECATED> */\n.widget-text input[type='text'], /* </DEPRECATED> */\n/* <DEPRECATED> */ .widget-text input[type='number'], /* </DEPRECATED> */\n/* <DEPRECATED> */ .widget-text input[type='password'], /* </DEPRECATED> */\n.jupyter-widget-text input[type='text'],\n.jupyter-widget-text input[type='number'],\n.jupyter-widget-text input[type='password'] {\n  height: var(--jp-widgets-inline-height);\n}\n\n/* <DEPRECATED> */\n.widget-text input[type='text']:disabled, /* </DEPRECATED> */\n/* <DEPRECATED> */ .widget-text input[type='number']:disabled, /* </DEPRECATED> */\n/* <DEPRECATED> */ .widget-text input[type='password']:disabled, /* </DEPRECATED> */\n/* <DEPRECATED> */ .widget-textarea textarea:disabled, /* </DEPRECATED> */\n.jupyter-widget-text input[type='text']:disabled,\n.jupyter-widget-text input[type='number']:disabled,\n.jupyter-widget-text input[type='password']:disabled,\n.jupyter-widget-textarea textarea:disabled {\n  opacity: var(--jp-widgets-disabled-opacity);\n}\n\n/* <DEPRECATED> */\n.widget-text input[type='text'], /* </DEPRECATED> */\n/* <DEPRECATED> */ .widget-text input[type='number'], /* </DEPRECATED> */\n/* <DEPRECATED> */ .widget-text input[type='password'], /* </DEPRECATED> */\n/* <DEPRECATED> */ .widget-textarea textarea, /* </DEPRECATED> */\n.jupyter-widget-text input[type='text'],\n.jupyter-widget-text input[type='number'],\n.jupyter-widget-text input[type='password'],\n.jupyter-widget-textarea textarea {\n  box-sizing: border-box;\n  border: var(--jp-widgets-input-border-width) solid\n    var(--jp-widgets-input-border-color);\n  background-color: var(--jp-widgets-input-background-color);\n  color: var(--jp-widgets-input-color);\n  font-size: var(--jp-widgets-font-size);\n  flex-grow: 1;\n  min-width: 0; /* This makes it possible for the flexbox to shrink this input */\n  flex-shrink: 1;\n  outline: none !important;\n}\n\n/* <DEPRECATED> */\n.widget-text input[type='text'], /* </DEPRECATED> */\n/* <DEPRECATED> */ .widget-text input[type='password'], /* </DEPRECATED> */\n/* <DEPRECATED> */ .widget-textarea textarea, /* </DEPRECATED> */\n.jupyter-widget-text input[type='text'],\n.jupyter-widget-text input[type='password'],\n.jupyter-widget-textarea textarea {\n  padding: var(--jp-widgets-input-padding)\n    calc(var(--jp-widgets-input-padding) * 2);\n}\n\n/* <DEPRECATED> */\n.widget-text input[type='number'], /* </DEPRECATED> */\n.jupyter-widget-text input[type='number'] {\n  padding: var(--jp-widgets-input-padding) 0 var(--jp-widgets-input-padding)\n    calc(var(--jp-widgets-input-padding) * 2);\n}\n\n/* <DEPRECATED> */\n.widget-textarea textarea, /* </DEPRECATED> */\n.jupyter-widget-textarea textarea {\n  height: inherit;\n  width: inherit;\n}\n\n/* <DEPRECATED> */\n.widget-text input:focus, /* </DEPRECATED> */\n/* <DEPRECATED> */ .widget-textarea textarea:focus, /* </DEPRECATED> */\n.jupyter-widget-text input:focus,\n.jupyter-widget-textarea textarea:focus {\n  border-color: var(--jp-widgets-input-focus-border-color);\n}\n\n/* Horizontal Slider */\n/* <DEPRECATED> */\n.widget-hslider, /* </DEPRECATED> */\n.jupyter-widget-hslider {\n  width: var(--jp-widgets-inline-width);\n  height: var(--jp-widgets-inline-height);\n  line-height: var(--jp-widgets-inline-height);\n\n  /* Override the align-items baseline. This way, the description and readout\n    still seem to align their baseline properly, and we don't have to have\n    align-self: stretch in the .slider-container. */\n  align-items: center;\n}\n\n/* <DEPRECATED> */\n.widgets-slider .slider-container, /* </DEPRECATED> */\n.jupyter-widgets-slider .slider-container {\n  overflow: visible;\n}\n\n/* <DEPRECATED> */\n.widget-hslider .slider-container, /* </DEPRECATED> */\n.jupyter-widget-hslider .slider-container {\n  margin-left: calc(\n    var(--jp-widgets-slider-handle-size) / 2 - 2 *\n      var(--jp-widgets-slider-border-width)\n  );\n  margin-right: calc(\n    var(--jp-widgets-slider-handle-size) / 2 - 2 *\n      var(--jp-widgets-slider-border-width)\n  );\n  flex: 1 1 var(--jp-widgets-inline-width-short);\n}\n\n/* Vertical Slider */\n\n/* <DEPRECATED> */\n.widget-vbox .widget-label, /* </DEPRECATED> */\n.jupyter-widget-vbox .jupyter-widget-label {\n  height: var(--jp-widgets-inline-height);\n  line-height: var(--jp-widgets-inline-height);\n}\n\n/* <DEPRECATED> */\n.widget-vslider, /* </DEPRECATED> */\n.jupyter-widget-vslider {\n  /* Vertical Slider */\n  height: var(--jp-widgets-vertical-height);\n  width: var(--jp-widgets-inline-width-tiny);\n}\n\n/* <DEPRECATED> */\n.widget-vslider .slider-container, /* </DEPRECATED> */\n.jupyter-widget-vslider .slider-container {\n  flex: 1 1 var(--jp-widgets-inline-width-short);\n  margin-left: auto;\n  margin-right: auto;\n  margin-bottom: calc(\n    var(--jp-widgets-slider-handle-size) / 2 - 2 *\n      var(--jp-widgets-slider-border-width)\n  );\n  margin-top: calc(\n    var(--jp-widgets-slider-handle-size) / 2 - 2 *\n      var(--jp-widgets-slider-border-width)\n  );\n  display: flex;\n  flex-direction: column;\n}\n\n/* Widget Progress Styling */\n\n.progress-bar {\n  -webkit-transition: none;\n  -moz-transition: none;\n  -ms-transition: none;\n  -o-transition: none;\n  transition: none;\n}\n\n.progress-bar {\n  height: var(--jp-widgets-inline-height);\n}\n\n.progress-bar {\n  background-color: var(--jp-brand-color1);\n}\n\n.progress-bar-success {\n  background-color: var(--jp-success-color1);\n}\n\n.progress-bar-info {\n  background-color: var(--jp-info-color1);\n}\n\n.progress-bar-warning {\n  background-color: var(--jp-warn-color1);\n}\n\n.progress-bar-danger {\n  background-color: var(--jp-error-color1);\n}\n\n.progress {\n  background-color: var(--jp-layout-color2);\n  border: none;\n  box-shadow: none;\n}\n\n/* Horisontal Progress */\n\n/* <DEPRECATED> */\n.widget-hprogress, /* </DEPRECATED> */\n.jupyter-widget-hprogress {\n  /* Progress Bar */\n  height: var(--jp-widgets-inline-height);\n  line-height: var(--jp-widgets-inline-height);\n  width: var(--jp-widgets-inline-width);\n  align-items: center;\n}\n\n/* <DEPRECATED> */\n.widget-hprogress .progress, /* </DEPRECATED> */\n.jupyter-widget-hprogress .progress {\n  flex-grow: 1;\n  margin-top: var(--jp-widgets-input-padding);\n  margin-bottom: var(--jp-widgets-input-padding);\n  align-self: stretch;\n  /* Override bootstrap style */\n  height: initial;\n}\n\n/* Vertical Progress */\n\n/* <DEPRECATED> */\n.widget-vprogress, /* </DEPRECATED> */\n.jupyter-widget-vprogress {\n  height: var(--jp-widgets-vertical-height);\n  width: var(--jp-widgets-inline-width-tiny);\n}\n\n/* <DEPRECATED> */\n.widget-vprogress .progress, /* </DEPRECATED> */\n.jupyter-widget-vprogress .progress {\n  flex-grow: 1;\n  width: var(--jp-widgets-progress-thickness);\n  margin-left: auto;\n  margin-right: auto;\n  margin-bottom: 0;\n}\n\n/* Select Widget Styling */\n\n/* <DEPRECATED> */\n.widget-dropdown, /* </DEPRECATED> */\n.jupyter-widget-dropdown {\n  height: var(--jp-widgets-inline-height);\n  width: var(--jp-widgets-inline-width);\n  line-height: var(--jp-widgets-inline-height);\n}\n\n/* <DEPRECATED> */\n.widget-dropdown > select, /* </DEPRECATED> */\n.jupyter-widget-dropdown > select {\n  padding-right: 20px;\n  border: var(--jp-widgets-input-border-width) solid\n    var(--jp-widgets-input-border-color);\n  border-radius: 0;\n  height: inherit;\n  flex: 1 1 var(--jp-widgets-inline-width-short);\n  min-width: 0; /* This makes it possible for the flexbox to shrink this input */\n  box-sizing: border-box;\n  outline: none !important;\n  box-shadow: none;\n  background-color: var(--jp-widgets-input-background-color);\n  color: var(--jp-widgets-input-color);\n  font-size: var(--jp-widgets-font-size);\n  vertical-align: top;\n  padding-left: calc(var(--jp-widgets-input-padding) * 2);\n  appearance: none;\n  -webkit-appearance: none;\n  -moz-appearance: none;\n  background-repeat: no-repeat;\n  background-size: 20px;\n  background-position: right center;\n  background-image: var(--jp-widgets-dropdown-arrow);\n}\n/* <DEPRECATED> */\n.widget-dropdown > select:focus, /* </DEPRECATED> */\n.jupyter-widget-dropdown > select:focus {\n  border-color: var(--jp-widgets-input-focus-border-color);\n}\n\n/* <DEPRECATED> */\n.widget-dropdown > select:disabled, /* </DEPRECATED> */\n.jupyter-widget-dropdown > select:disabled {\n  opacity: var(--jp-widgets-disabled-opacity);\n}\n\n/* To disable the dotted border in Firefox around select controls.\n   See http://stackoverflow.com/a/18853002 */\n/* <DEPRECATED> */\n.widget-dropdown > select:-moz-focusring, /* </DEPRECATED> */\n.jupyter-widget-dropdown > select:-moz-focusring {\n  color: transparent;\n  text-shadow: 0 0 0 #000;\n}\n\n/* Select and SelectMultiple */\n\n/* <DEPRECATED> */\n.widget-select, /* </DEPRECATED> */\n.jupyter-widget-select {\n  width: var(--jp-widgets-inline-width);\n  line-height: var(--jp-widgets-inline-height);\n\n  /* Because Firefox defines the baseline of a select as the bottom of the\n    control, we align the entire control to the top and add padding to the\n    select to get an approximate first line baseline alignment. */\n  align-items: flex-start;\n}\n\n/* <DEPRECATED> */\n.widget-select > select, /* </DEPRECATED> */\n.jupyter-widget-select > select {\n  border: var(--jp-widgets-input-border-width) solid\n    var(--jp-widgets-input-border-color);\n  background-color: var(--jp-widgets-input-background-color);\n  color: var(--jp-widgets-input-color);\n  font-size: var(--jp-widgets-font-size);\n  flex: 1 1 var(--jp-widgets-inline-width-short);\n  outline: none !important;\n  overflow: auto;\n  height: inherit;\n\n  /* Because Firefox defines the baseline of a select as the bottom of the\n    control, we align the entire control to the top and add padding to the\n    select to get an approximate first line baseline alignment. */\n  padding-top: 5px;\n}\n\n/* <DEPRECATED> */\n.widget-select > select:focus, /* </DEPRECATED> */\n.jupyter-widget-select > select:focus {\n  border-color: var(--jp-widgets-input-focus-border-color);\n}\n\n.wiget-select > select > option,\n.jupyter-wiget-select > select > option {\n  padding-left: var(--jp-widgets-input-padding);\n  line-height: var(--jp-widgets-inline-height);\n  /* line-height doesn't work on some browsers for select options */\n  padding-top: calc(\n    var(--jp-widgets-inline-height) - var(--jp-widgets-font-size) / 2\n  );\n  padding-bottom: calc(\n    var(--jp-widgets-inline-height) - var(--jp-widgets-font-size) / 2\n  );\n}\n\n/* Toggle Buttons Styling */\n\n/* <DEPRECATED> */\n.widget-toggle-buttons, /* </DEPRECATED> */\n.jupyter-widget-toggle-buttons {\n  line-height: var(--jp-widgets-inline-height);\n}\n\n/* <DEPRECATED> */\n.widget-toggle-buttons .widget-toggle-button, /* </DEPRECATED> */\n.jupyter-widget-toggle-buttons .jupyter-widget-toggle-button {\n  margin-left: var(--jp-widgets-margin);\n  margin-right: var(--jp-widgets-margin);\n}\n\n/* <DEPRECATED> */\n.widget-toggle-buttons .jupyter-button:disabled, /* </DEPRECATED> */\n.jupyter-widget-toggle-buttons .jupyter-button:disabled {\n  opacity: var(--jp-widgets-disabled-opacity);\n}\n\n/* Radio Buttons Styling */\n\n/* <DEPRECATED> */\n.widget-radio, /* </DEPRECATED> */\n.jupyter-widget-radio {\n  width: var(--jp-widgets-inline-width);\n  line-height: var(--jp-widgets-inline-height);\n}\n\n/* <DEPRECATED> */\n.widget-radio-box, /* </DEPRECATED> */\n.jupyter-widget-radio-box {\n  display: flex;\n  flex-direction: column;\n  align-items: stretch;\n  box-sizing: border-box;\n  flex-grow: 1;\n  margin-bottom: var(--jp-widgets-radio-item-height-adjustment);\n}\n\n/* <DEPRECATED> */\n.widget-radio-box-vertical, /* </DEPRECATED> */\n.jupyter-widget-radio-box-vertical {\n  flex-direction: column;\n}\n\n/* <DEPRECATED> */\n.widget-radio-box-horizontal, /* </DEPRECATED> */\n.jupyter-widget-radio-box-horizontal {\n  flex-direction: row;\n}\n\n/* <DEPRECATED> */\n.widget-radio-box label, /* </DEPRECATED> */\n.jupyter-widget-radio-box label {\n  height: var(--jp-widgets-radio-item-height);\n  line-height: var(--jp-widgets-radio-item-height);\n  font-size: var(--jp-widgets-font-size);\n}\n\n.widget-radio-box-horizontal label,\n.jupyter-widget-radio-box-horizontal label {\n  margin: 0 calc(var(--jp-widgets-input-padding) * 2) 0 0;\n}\n\n/* <DEPRECATED> */\n.widget-radio-box input, /* </DEPRECATED> */\n.jupyter-widget-radio-box input {\n  height: var(--jp-widgets-radio-item-height);\n  line-height: var(--jp-widgets-radio-item-height);\n  margin: 0 calc(var(--jp-widgets-input-padding) * 2) 0 1px;\n  float: left;\n}\n\n/* Color Picker Styling */\n\n/* <DEPRECATED> */\n.widget-colorpicker, /* </DEPRECATED> */\n.jupyter-widget-colorpicker {\n  width: var(--jp-widgets-inline-width);\n  height: var(--jp-widgets-inline-height);\n  line-height: var(--jp-widgets-inline-height);\n}\n\n/* <DEPRECATED> */\n.widget-colorpicker > .widget-colorpicker-input, /* </DEPRECATED> */\n.jupyter-widget-colorpicker > .jupyter-widget-colorpicker-input {\n  flex-grow: 1;\n  flex-shrink: 1;\n  min-width: var(--jp-widgets-inline-width-tiny);\n}\n\n/* <DEPRECATED> */\n.widget-colorpicker input[type='color'], /* </DEPRECATED> */\n.jupyter-widget-colorpicker input[type='color'] {\n  width: var(--jp-widgets-inline-height);\n  height: var(--jp-widgets-inline-height);\n  padding: 0 2px; /* make the color square actually square on Chrome on OS X */\n  background: var(--jp-widgets-input-background-color);\n  color: var(--jp-widgets-input-color);\n  border: var(--jp-widgets-input-border-width) solid\n    var(--jp-widgets-input-border-color);\n  border-left: none;\n  flex-grow: 0;\n  flex-shrink: 0;\n  box-sizing: border-box;\n  align-self: stretch;\n  outline: none !important;\n}\n\n/* <DEPRECATED> */\n.widget-colorpicker.concise input[type='color'], /* </DEPRECATED> */\n.jupyter-widget-colorpicker.concise input[type='color'] {\n  border-left: var(--jp-widgets-input-border-width) solid\n    var(--jp-widgets-input-border-color);\n}\n\n/* <DEPRECATED> */\n.widget-colorpicker input[type='color']:focus, /* </DEPRECATED> */\n/* <DEPRECATED> */ .widget-colorpicker input[type='text']:focus, /* </DEPRECATED> */\n.jupyter-widget-colorpicker input[type='color']:focus,\n.jupyter-widget-colorpicker input[type='text']:focus {\n  border-color: var(--jp-widgets-input-focus-border-color);\n}\n\n/* <DEPRECATED> */\n.widget-colorpicker input[type='text'], /* </DEPRECATED> */\n.jupyter-widget-colorpicker input[type='text'] {\n  flex-grow: 1;\n  outline: none !important;\n  height: var(--jp-widgets-inline-height);\n  line-height: var(--jp-widgets-inline-height);\n  background: var(--jp-widgets-input-background-color);\n  color: var(--jp-widgets-input-color);\n  border: var(--jp-widgets-input-border-width) solid\n    var(--jp-widgets-input-border-color);\n  font-size: var(--jp-widgets-font-size);\n  padding: var(--jp-widgets-input-padding)\n    calc(var(--jp-widgets-input-padding) * 2);\n  min-width: 0; /* This makes it possible for the flexbox to shrink this input */\n  flex-shrink: 1;\n  box-sizing: border-box;\n}\n\n/* <DEPRECATED> */\n.widget-colorpicker input[type='text']:disabled, /* </DEPRECATED> */\n.jupyter-widget-colorpicker input[type='text']:disabled {\n  opacity: var(--jp-widgets-disabled-opacity);\n}\n\n/* Date Picker Styling */\n\n/* <DEPRECATED> */\n.widget-datepicker, /* </DEPRECATED> */\n.jupyter-widget-datepicker {\n  width: var(--jp-widgets-inline-width);\n  height: var(--jp-widgets-inline-height);\n  line-height: var(--jp-widgets-inline-height);\n}\n\n/* <DEPRECATED> */\n.widget-datepicker input[type='date'], /* </DEPRECATED> */\n.jupyter-widget-datepicker input[type='date'] {\n  flex-grow: 1;\n  flex-shrink: 1;\n  min-width: 0; /* This makes it possible for the flexbox to shrink this input */\n  outline: none !important;\n  height: var(--jp-widgets-inline-height);\n  border: var(--jp-widgets-input-border-width) solid\n    var(--jp-widgets-input-border-color);\n  background-color: var(--jp-widgets-input-background-color);\n  color: var(--jp-widgets-input-color);\n  font-size: var(--jp-widgets-font-size);\n  padding: var(--jp-widgets-input-padding)\n    calc(var(--jp-widgets-input-padding) * 2);\n  box-sizing: border-box;\n}\n\n/* <DEPRECATED> */\n.widget-datepicker input[type='date']:focus, /* </DEPRECATED> */\n.jupyter-widget-datepicker input[type='date']:focus {\n  border-color: var(--jp-widgets-input-focus-border-color);\n}\n\n/* <DEPRECATED> */\n.widget-datepicker input[type='date']:invalid, /* </DEPRECATED> */\n.jupyter-widget-datepicker input[type='date']:invalid {\n  border-color: var(--jp-warn-color1);\n}\n\n/* <DEPRECATED> */\n.widget-datepicker input[type='date']:disabled, /* </DEPRECATED> */\n.jupyter-widget-datepicker input[type='date']:disabled {\n  opacity: var(--jp-widgets-disabled-opacity);\n}\n\n/* Play Widget */\n\n/* <DEPRECATED> */\n.widget-play, /* </DEPRECATED> */\n.jupyter-widget-play {\n  width: var(--jp-widgets-inline-width-short);\n  display: flex;\n  align-items: stretch;\n}\n\n/* <DEPRECATED> */\n.widget-play .jupyter-button, /* </DEPRECATED> */\n.jupyter-widget-play .jupyter-button {\n  flex-grow: 1;\n  height: auto;\n}\n\n/* <DEPRECATED> */\n.widget-play .jupyter-button:disabled, /* </DEPRECATED> */\n.jupyter-widget-play .jupyter-button:disabled {\n  opacity: var(--jp-widgets-disabled-opacity);\n}\n\n/* Tab Widget */\n\n/* <DEPRECATED> */\n.jupyter-widgets.widget-tab, /* </DEPRECATED> */\n.jupyter-widgets.jupyter-widget-tab {\n  display: flex;\n  flex-direction: column;\n}\n\n/* <DEPRECATED> */\n.jupyter-widgets.widget-tab > .p-TabBar, /* </DEPRECATED> */\n/* <DEPRECATED> */.jupyter-widgets.jupyter-widget-tab > .p-TabBar, /* </DEPRECATED> */\n.jupyter-widgets.jupyter-widget-tab > .lm-TabBar {\n  /* Necessary so that a tab can be shifted down to overlay the border of the box below. */\n  overflow-x: visible;\n  overflow-y: visible;\n}\n\n/* <DEPRECATED> */\n.jupyter-widgets.widget-tab > .p-TabBar > .p-TabBar-content, /* </DEPRECATED> */\n/* <DEPRECATED> */.jupyter-widgets.jupyter-widget-tab > .p-TabBar > .p-TabBar-content, /* </DEPRECATED> */\n.jupyter-widgets.jupyter-widget-tab > .lm-TabBar > .lm-TabBar-content {\n  /* Make sure that the tab grows from bottom up */\n  align-items: flex-end;\n  min-width: 0;\n  min-height: 0;\n}\n\n/* <DEPRECATED> */\n.jupyter-widgets.widget-tab > .widget-tab-contents, /* </DEPRECATED> */\n.jupyter-widgets.jupyter-widget-tab > .widget-tab-contents {\n  width: 100%;\n  box-sizing: border-box;\n  margin: 0;\n  background: var(--jp-layout-color1);\n  color: var(--jp-ui-font-color1);\n  border: var(--jp-border-width) solid var(--jp-border-color1);\n  padding: var(--jp-widgets-container-padding);\n  flex-grow: 1;\n  overflow: auto;\n}\n\n/* <DEPRECATED> */\n.jupyter-widgets.widget-tab > .p-TabBar, /* </DEPRECATED> */\n/* <DEPRECATED> */.jupyter-widgets.jupyter-widget-tab > .p-TabBar, /* </DEPRECATED> */\n.jupyter-widgets.jupyter-widget-tab > .lm-TabBar {\n  font: var(--jp-widgets-font-size) Helvetica, Arial, sans-serif;\n  min-height: calc(\n    var(--jp-widgets-horizontal-tab-height) + var(--jp-border-width)\n  );\n}\n\n/* <DEPRECATED> */\n.jupyter-widgets.widget-tab > .p-TabBar .p-TabBar-tab, /* </DEPRECATED> */\n/* <DEPRECATED> */.jupyter-widgets.jupyter-widget-tab > .p-TabBar .p-TabBar-tab, /* </DEPRECATED> */\n.jupyter-widgets.jupyter-widget-tab > .lm-TabBar .lm-TabBar-tab {\n  flex: 0 1 var(--jp-widgets-horizontal-tab-width);\n  min-width: 35px;\n  min-height: calc(\n    var(--jp-widgets-horizontal-tab-height) + var(--jp-border-width)\n  );\n  line-height: var(--jp-widgets-horizontal-tab-height);\n  margin-left: calc(-1 * var(--jp-border-width));\n  padding: 0px 10px;\n  background: var(--jp-layout-color2);\n  color: var(--jp-ui-font-color2);\n  border: var(--jp-border-width) solid var(--jp-border-color1);\n  border-bottom: none;\n  position: relative;\n}\n\n/* <DEPRECATED> */\n.jupyter-widgets.widget-tab > .p-TabBar .p-TabBar-tab.p-mod-current, /* </DEPRECATED> */\n/* <DEPRECATED> */.jupyter-widgets.jupyter-widget-tab > .p-TabBar .p-TabBar-tab.p-mod-current, /* </DEPRECATED> */\n.jupyter-widgets.jupyter-widget-tab > .lm-TabBar .lm-TabBar-tab.lm-mod-current {\n  color: var(--jp-ui-font-color0);\n  /* We want the background to match the tab content background */\n  background: var(--jp-layout-color1);\n  min-height: calc(\n    var(--jp-widgets-horizontal-tab-height) + 2 * var(--jp-border-width)\n  );\n  transform: translateY(var(--jp-border-width));\n  overflow: visible;\n}\n\n/* <DEPRECATED> */\n.jupyter-widgets.widget-tab > .p-TabBar .p-TabBar-tab.p-mod-current:before, /* </DEPRECATED> */\n/* <DEPRECATED> */.jupyter-widgets.jupyter-widget-tab > .p-TabBar .p-TabBar-tab.p-mod-current:before, /* </DEPRECATED> */\n.jupyter-widgets.jupyter-widget-tab > .lm-TabBar .lm-TabBar-tab.lm-mod-current:before {\n  position: absolute;\n  top: calc(-1 * var(--jp-border-width));\n  left: calc(-1 * var(--jp-border-width));\n  content: '';\n  height: var(--jp-widgets-horizontal-tab-top-border);\n  width: calc(100% + 2 * var(--jp-border-width));\n  background: var(--jp-brand-color1);\n}\n\n/* <DEPRECATED> */\n.jupyter-widgets.widget-tab > .p-TabBar .p-TabBar-tab:first-child, /* </DEPRECATED> */\n/* <DEPRECATED> */.jupyter-widgets.jupyter-widget-tab > .p-TabBar .p-TabBar-tab:first-child, /* </DEPRECATED> */\n.jupyter-widgets.jupyter-widget-tab > .lm-TabBar .lm-TabBar-tab:first-child {\n  margin-left: 0;\n}\n\n/* <DEPRECATED> */\n.jupyter-widgets.widget-tab\n  > .p-TabBar\n  .p-TabBar-tab:hover:not(.p-mod-current),\n/* </DEPRECATED> */\n/* <DEPRECATED> */\n.jupyter-widgets.jupyter-widget-tab\n  > .p-TabBar\n  .p-TabBar-tab:hover:not(.p-mod-current),\n/* </DEPRECATED> */\n.jupyter-widgets.jupyter-widget-tab\n  > .lm-TabBar\n  .lm-TabBar-tab:hover:not(.lm-mod-current) {\n  background: var(--jp-layout-color1);\n  color: var(--jp-ui-font-color1);\n}\n\n/* <DEPRECATED> */\n.jupyter-widgets.widget-tab\n  > .p-TabBar\n  .p-mod-closable\n  > .p-TabBar-tabCloseIcon,\n/* </DEPRECATED> */\n/* <DEPRECATED> */\n.jupyter-widgets.jupyter-widget-tab\n> .p-TabBar\n.p-mod-closable\n> .p-TabBar-tabCloseIcon,\n/* </DEPRECATED> */\n.jupyter-widgets.jupyter-widget-tab\n  > .lm-TabBar\n  .lm-mod-closable\n  > .lm-TabBar-tabCloseIcon {\n  margin-left: 4px;\n}\n\n/* This font-awesome strategy may not work across FA4 and FA5, but we don't\nactually support closable tabs, so it really doesn't matter */\n/* <DEPRECATED> */\n.jupyter-widgets.widget-tab\n  > .p-TabBar\n  .p-mod-closable\n  > .p-TabBar-tabCloseIcon:before,\n/* </DEPRECATED> */\n/* <DEPRECATED> */\n.jupyter-widgets.jupyter-widget-widget-tab\n> .p-TabBar\n.p-mod-closable\n> .p-TabBar-tabCloseIcon:before,\n/* </DEPRECATED> */\n.jupyter-widgets.jupyter-widget-tab\n  > .lm-TabBar\n  .lm-mod-closable\n  > .lm-TabBar-tabCloseIcon:before {\n  font-family: FontAwesome;\n  content: '\\f00d'; /* close */\n}\n\n/* <DEPRECATED> */\n.jupyter-widgets.widget-tab > .p-TabBar .p-TabBar-tabIcon, /* </DEPRECATED> */\n/* <DEPRECATED> */ .jupyter-widgets.widget-tab > .p-TabBar .p-TabBar-tabLabel, /* </DEPRECATED> */\n/* <DEPRECATED> */ .jupyter-widgets.widget-tab > .p-TabBar .p-TabBar-tabCloseIcon, /* </DEPRECATED> */\n/* <DEPRECATED> */ .jupyter-widgets.jupyter-widget-tab > .p-TabBar .p-TabBar-tabIcon, /* </DEPRECATED> */\n/* <DEPRECATED> */ .jupyter-widgets.jupyter-widget-tab > .p-TabBar .p-TabBar-tabLabel, /* </DEPRECATED> */\n/* <DEPRECATED> */ .jupyter-widgets.jupyter-widget-tab > .p-TabBar .p-TabBar-tabCloseIcon, /* </DEPRECATED> */\n.jupyter-widgets.jupyter-widget-tab > .lm-TabBar .lm-TabBar-tabIcon,\n.jupyter-widgets.jupyter-widget-tab > .lm-TabBar .lm-TabBar-tabLabel,\n.jupyter-widgets.jupyter-widget-tab > .lm-TabBar .lm-TabBar-tabCloseIcon {\n  line-height: var(--jp-widgets-horizontal-tab-height);\n}\n\n/* Accordion Widget */\n\n.jupyter-widget-Collapse {\n  display: flex;\n  flex-direction: column;\n  align-items: stretch;\n}\n\n.jupyter-widget-Collapse-header {\n  padding: var(--jp-widgets-input-padding);\n  cursor: pointer;\n  color: var(--jp-ui-font-color2);\n  background-color: var(--jp-layout-color2);\n  border: var(--jp-widgets-border-width) solid var(--jp-border-color1);\n  padding: calc(var(--jp-widgets-container-padding) * 2 / 3)\n    var(--jp-widgets-container-padding);\n  font-weight: bold;\n}\n\n.jupyter-widget-Collapse-header:hover {\n  background-color: var(--jp-layout-color1);\n  color: var(--jp-ui-font-color1);\n}\n\n.jupyter-widget-Collapse-open > .jupyter-widget-Collapse-header {\n  background-color: var(--jp-layout-color1);\n  color: var(--jp-ui-font-color0);\n  cursor: default;\n  border-bottom: none;\n}\n\n.jupyter-widget-Collapse-contents {\n  padding: var(--jp-widgets-container-padding);\n  background-color: var(--jp-layout-color1);\n  color: var(--jp-ui-font-color1);\n  border-left: var(--jp-widgets-border-width) solid var(--jp-border-color1);\n  border-right: var(--jp-widgets-border-width) solid var(--jp-border-color1);\n  border-bottom: var(--jp-widgets-border-width) solid var(--jp-border-color1);\n  overflow: auto;\n}\n\n.jupyter-widget-Accordion {\n  display: flex;\n  flex-direction: column;\n  align-items: stretch;\n}\n\n.jupyter-widget-Accordion .jupyter-widget-Collapse {\n  margin-bottom: 0;\n}\n\n.jupyter-widget-Accordion .jupyter-widget-Collapse + .jupyter-widget-Collapse {\n  margin-top: 4px;\n}\n\n/* HTML widget */\n\n/* <DEPRECATED> */\n.widget-html, /* </DEPRECATED> */\n/* <DEPRECATED> */ .widget-htmlmath, /* </DEPRECATED> */\n.jupyter-widget-html,\n.jupyter-widget-htmlmath {\n  font-size: var(--jp-widgets-font-size);\n}\n\n/* <DEPRECATED> */\n.widget-html > .widget-html-content, /* </DEPRECATED> */\n/* <DEPRECATED> */.widget-htmlmath > .widget-html-content, /* </DEPRECATED> */\n.jupyter-widget-html > .jupyter-widget-html-content,\n.jupyter-widget-htmlmath > .jupyter-widget-html-content {\n  /* Fill out the area in the HTML widget */\n  align-self: stretch;\n  flex-grow: 1;\n  flex-shrink: 1;\n  /* Makes sure the baseline is still aligned with other elements */\n  line-height: var(--jp-widgets-inline-height);\n  /* Make it possible to have absolutely-positioned elements in the html */\n  position: relative;\n}\n\n/* Image widget  */\n\n/* <DEPRECATED> */\n.widget-image, /* </DEPRECATED> */\n.jupyter-widget-image {\n  max-width: 100%;\n  height: auto;\n}\n`,
        "",
      ]);
      const w = c;
    },
    9451: (e) => {
      e.exports = function (e) {
        var n = [];
        return (
          (n.toString = function () {
            return this.map(function (n) {
              var t = "",
                i = void 0 !== n[5];
              return (
                n[4] && (t += "@supports (".concat(n[4], ") {")),
                n[2] && (t += "@media ".concat(n[2], " {")),
                i && (t += "@layer".concat(n[5].length > 0 ? " ".concat(n[5]) : "", " {")),
                (t += e(n)),
                i && (t += "}"),
                n[2] && (t += "}"),
                n[4] && (t += "}"),
                t
              );
            }).join("");
          }),
          (n.i = function (e, t, i, r, o) {
            "string" == typeof e && (e = [[null, e, void 0]]);
            var a = {};
            if (i)
              for (var d = 0; d < this.length; d++) {
                var s = this[d][0];
                null != s && (a[s] = !0);
              }
            for (var l = 0; l < e.length; l++) {
              var g = [].concat(e[l]);
              (i && a[g[0]]) ||
                (void 0 !== o &&
                  (void 0 === g[5] || (g[1] = "@layer".concat(g[5].length > 0 ? " ".concat(g[5]) : "", " {").concat(g[1], "}")), (g[5] = o)),
                t && (g[2] ? ((g[1] = "@media ".concat(g[2], " {").concat(g[1], "}")), (g[2] = t)) : (g[2] = t)),
                r && (g[4] ? ((g[1] = "@supports (".concat(g[4], ") {").concat(g[1], "}")), (g[4] = r)) : (g[4] = "".concat(r))),
                n.push(g));
            }
          }),
          n
        );
      };
    },
    7298: (e) => {
      e.exports = function (e, n) {
        return (
          n || (n = {}),
          e
            ? ((e = String(e.__esModule ? e.default : e)),
              /^['"].*['"]$/.test(e) && (e = e.slice(1, -1)),
              n.hash && (e += n.hash),
              /["'() \t\n]|(%20)/.test(e) || n.needQuotes ? '"'.concat(e.replace(/"/g, '\\"').replace(/\n/g, "\\n"), '"') : e)
            : e
        );
      };
    },
    4786: (e) => {
      e.exports = function (e) {
        return e[1];
      };
    },
    3699: (e) => {
      var n = [];
      function t(e) {
        for (var t = -1, i = 0; i < n.length; i++)
          if (n[i].identifier === e) {
            t = i;
            break;
          }
        return t;
      }
      function i(e, i) {
        for (var o = {}, a = [], d = 0; d < e.length; d++) {
          var s = e[d],
            l = i.base ? s[0] + i.base : s[0],
            g = o[l] || 0,
            p = "".concat(l, " ").concat(g);
          o[l] = g + 1;
          var c = t(p),
            u = { css: s[1], media: s[2], sourceMap: s[3], supports: s[4], layer: s[5] };
          if (-1 !== c) n[c].references++, n[c].updater(u);
          else {
            var w = r(u, i);
            (i.byIndex = d), n.splice(d, 0, { identifier: p, updater: w, references: 1 });
          }
          a.push(p);
        }
        return a;
      }
      function r(e, n) {
        var t = n.domAPI(n);
        return (
          t.update(e),
          function (n) {
            if (n) {
              if (n.css === e.css && n.media === e.media && n.sourceMap === e.sourceMap && n.supports === e.supports && n.layer === e.layer) return;
              t.update((e = n));
            } else t.remove();
          }
        );
      }
      e.exports = function (e, r) {
        var o = i((e = e || []), (r = r || {}));
        return function (e) {
          e = e || [];
          for (var a = 0; a < o.length; a++) {
            var d = t(o[a]);
            n[d].references--;
          }
          for (var s = i(e, r), l = 0; l < o.length; l++) {
            var g = t(o[l]);
            0 === n[g].references && (n[g].updater(), n.splice(g, 1));
          }
          o = s;
        };
      };
    },
    1412: (e) => {
      var n = {};
      e.exports = function (e, t) {
        var i = (function (e) {
          if (void 0 === n[e]) {
            var t = document.querySelector(e);
            if (window.HTMLIFrameElement && t instanceof window.HTMLIFrameElement)
              try {
                t = t.contentDocument.head;
              } catch (e) {
                t = null;
              }
            n[e] = t;
          }
          return n[e];
        })(e);
        if (!i) throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");
        i.appendChild(t);
      };
    },
    4999: (e) => {
      e.exports = function (e) {
        var n = document.createElement("style");
        return e.setAttributes(n, e.attributes), e.insert(n, e.options), n;
      };
    },
    9443: (e, n, t) => {
      e.exports = function (e) {
        var n = t.nc;
        n && e.setAttribute("nonce", n);
      };
    },
    376: (e) => {
      e.exports = function (e) {
        if ("undefined" == typeof document) return { update: function () {}, remove: function () {} };
        var n = e.insertStyleElement(e);
        return {
          update: function (t) {
            !(function (e, n, t) {
              var i = "";
              t.supports && (i += "@supports (".concat(t.supports, ") {")), t.media && (i += "@media ".concat(t.media, " {"));
              var r = void 0 !== t.layer;
              r && (i += "@layer".concat(t.layer.length > 0 ? " ".concat(t.layer) : "", " {")),
                (i += t.css),
                r && (i += "}"),
                t.media && (i += "}"),
                t.supports && (i += "}");
              var o = t.sourceMap;
              o &&
                "undefined" != typeof btoa &&
                (i += "\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(o)))), " */")),
                n.styleTagTransform(i, e, n.options);
            })(n, e, t);
          },
          remove: function () {
            !(function (e) {
              if (null === e.parentNode) return !1;
              e.parentNode.removeChild(e);
            })(n);
          },
        };
      };
    },
    9252: (e) => {
      e.exports = function (e, n) {
        if (n.styleSheet) n.styleSheet.cssText = e;
        else {
          for (; n.firstChild; ) n.removeChild(n.firstChild);
          n.appendChild(document.createTextNode(e));
        }
      };
    },
    8701: (e, n, t) => {
      t.d(n, { A: () => i });
      const i = "2.0.0";
    },
    1446: (e, n, t) => {
      t.r(n),
        t.d(n, {
          KernelWidgetManager: () => T,
          LabWidgetManager: () => v,
          WidgetManager: () => f,
          WidgetRenderer: () => w,
          default: () => ce,
          output: () => i,
          registerWidgetManager: () => te,
        });
      var i = {};
      t.r(i), t.d(i, { OUTPUT_WIDGET_VERSION: () => P, OutputModel: () => U, OutputView: () => k });
      var r = t(765),
        o = t(3431),
        a = t(31),
        d = t(1130),
        s = t(7656),
        l = t(8881),
        g = t(4053),
        p = t(9012),
        c = t(7262),
        u = t(5256);
      class w extends u.Panel {
        constructor(e, n) {
          super(), (this._manager = new c.PromiseDelegate()), (this._rerenderMimeModel = null), (this.mimeType = e.mimeType), n && (this.manager = n);
        }
        set manager(e) {
          e.restored.connect(this._rerender, this), this._manager.resolve(e);
        }
        async renderModel(e) {
          const n = e.data[this.mimeType];
          this.node.textContent = "Loading widget...";
          const t = await this._manager.promise;
          if ("" === n.model_id) return this.hide(), Promise.resolve();
          let i, r;
          try {
            i = await t.get_model(n.model_id);
          } catch (n) {
            return t.restoredStatus
              ? ((this.node.textContent = "Error displaying widget: model not found"), this.addClass("jupyter-widgets"), void console.error(n))
              : void (this._rerenderMimeModel = e);
          }
          this._rerenderMimeModel = null;
          try {
            const e = await t.create_view(i);
            r = e.luminoWidget || e.pWidget;
          } catch (e) {
            return (this.node.textContent = "Error displaying widget"), this.addClass("jupyter-widgets"), void console.error(e);
          }
          (this.node.textContent = ""),
            this.addWidget(r),
            r.disposed.connect(() => {
              this.hide(), (n.model_id = "");
            });
        }
        dispose() {
          this.isDisposed || ((this._manager = null), super.dispose());
        }
        _rerender() {
          this._rerenderMimeModel && ((this.node.textContent = ""), this.removeClass("jupyter-widgets"), this.renderModel(this._rerenderMimeModel));
        }
      }
      var h = t(988),
        E = t(4228),
        b = t(4602),
        j = t(4585);
      class y {
        constructor() {
          this._cache = Object.create(null);
        }
        set(e, n, t) {
          if ((e in this._cache || (this._cache[e] = Object.create(null)), n in this._cache[e])) throw `Version ${n} of key ${e} already registered.`;
          this._cache[e][n] = t;
        }
        get(e, n) {
          if (e in this._cache) {
            const t = this._cache[e],
              i = (0, j.maxSatisfying)(Object.keys(t), n);
            if (null !== i) return t[i];
          }
        }
        getAllVersions(e) {
          if (e in this._cache) return this._cache[e];
        }
      }
      const m = "application/vnd.jupyter.widget-view+json",
        D = "application/vnd.jupyter.widget-state+json";
      class v extends E.ManagerBase {
        constructor(e) {
          super(),
            (this._handleCommOpen = async (e, n) => {
              const t = new h.shims.services.Comm(e);
              await this.handle_comm_open(t, n);
            }),
            (this._restored = new b.Signal(this)),
            (this._restoredStatus = !1),
            (this._kernelRestoreInProgress = !1),
            (this._isDisposed = !1),
            (this._registry = new y()),
            (this._modelsSync = new Map()),
            (this._onUnhandledIOPubMessage = new b.Signal(this)),
            (this._rendermime = e);
        }
        callbacks(e) {
          return {
            iopub: {
              output: (e) => {
                this._onUnhandledIOPubMessage.emit(e);
              },
            },
          };
        }
        _handleKernelChanged({ oldValue: e, newValue: n }) {
          e && e.removeCommTarget(this.comm_target_name, this._handleCommOpen),
            n && n.registerCommTarget(this.comm_target_name, this._handleCommOpen);
        }
        disconnect() {
          super.disconnect(), (this._restoredStatus = !1);
        }
        async _loadFromKernel() {
          var e;
          if (!this.kernel) throw new Error("Kernel not set");
          if (!1 !== (null === (e = this.kernel) || void 0 === e ? void 0 : e.handleComms)) return super._loadFromKernel();
        }
        async _create_comm(e, n, t, i, r) {
          const o = this.kernel;
          if (!o) throw new Error("No current kernel");
          const a = o.createComm(e, n);
          return (t || i) && a.open(t, i, r), new h.shims.services.Comm(a);
        }
        async _get_comm_info() {
          const e = this.kernel;
          if (!e) throw new Error("No current kernel");
          const n = await e.requestCommInfo({ target_name: this.comm_target_name });
          return "ok" === n.content.status ? n.content.comms : {};
        }
        get isDisposed() {
          return this._isDisposed;
        }
        dispose() {
          this.isDisposed || ((this._isDisposed = !0), this._commRegistration && this._commRegistration.dispose());
        }
        async resolveUrl(e) {
          return e;
        }
        async loadClass(e, n, t) {
          ("@jupyter-widgets/base" !== n && "@jupyter-widgets/controls" !== n) || !(0, j.valid)(t) || (t = `^${t}`);
          const i = this._registry.getAllVersions(n);
          if (!i) throw new Error(`No version of module ${n} is registered`);
          const r = this._registry.get(n, t);
          if (!r) {
            const e = Object.keys(i);
            throw new Error(`Module ${n}, version ${t} is not registered, however,         ${e.join(",")} ${e.length > 1 ? "are" : "is"}`);
          }
          let o;
          o = "function" == typeof r ? await r() : await r;
          const a = o[e];
          if (!a) throw new Error(`Class ${e} not found in module ${n}`);
          return a;
        }
        get rendermime() {
          return this._rendermime;
        }
        get restored() {
          return this._restored;
        }
        get restoredStatus() {
          return this._restoredStatus;
        }
        get onUnhandledIOPubMessage() {
          return this._onUnhandledIOPubMessage;
        }
        register(e) {
          this._registry.set(e.name, e.version, e.exports);
        }
        register_model(e, n) {
          super.register_model(e, n),
            n.then((n) => {
              this._modelsSync.set(e, n),
                n.once("comm:close", () => {
                  this._modelsSync.delete(e);
                });
            });
        }
        async clear_state() {
          await super.clear_state(), (this._modelsSync = new Map());
        }
        get_state_sync(e = {}) {
          const n = [];
          for (const e of this._modelsSync.values()) e.comm_live && n.push(e);
          return (0, E.serialize_state)(n, e);
        }
      }
      class T extends v {
        constructor(e, n) {
          super(n),
            (this._kernel = e),
            e.statusChanged.connect((e, n) => {
              this._handleKernelStatusChange(n);
            }),
            e.connectionStatusChanged.connect((e, n) => {
              this._handleKernelConnectionStatusChange(n);
            }),
            this._handleKernelChanged({ name: "kernel", oldValue: null, newValue: e }),
            this.restoreWidgets();
        }
        _handleKernelConnectionStatusChange(e) {
          "connected" === e && (this._kernelRestoreInProgress || this.restoreWidgets());
        }
        _handleKernelStatusChange(e) {
          "restarting" === e && this.disconnect();
        }
        async restoreWidgets() {
          try {
            (this._kernelRestoreInProgress = !0), await this._loadFromKernel(), (this._restoredStatus = !0), this._restored.emit();
          } catch (e) {}
          this._kernelRestoreInProgress = !1;
        }
        dispose() {
          this.isDisposed || ((this._kernel = null), super.dispose());
        }
        get kernel() {
          return this._kernel;
        }
      }
      class f extends v {
        constructor(e, n, t) {
          var i, r;
          super(n),
            (this._context = e),
            e.sessionContext.kernelChanged.connect((e, n) => {
              this._handleKernelChanged(n);
            }),
            e.sessionContext.statusChanged.connect((e, n) => {
              this._handleKernelStatusChange(n);
            }),
            e.sessionContext.connectionStatusChanged.connect((e, n) => {
              this._handleKernelConnectionStatusChange(n);
            }),
            (null === (i = e.sessionContext.session) || void 0 === i ? void 0 : i.kernel) &&
              this._handleKernelChanged({
                name: "kernel",
                oldValue: null,
                newValue: null === (r = e.sessionContext.session) || void 0 === r ? void 0 : r.kernel,
              }),
            this.restoreWidgets(this._context.model),
            (this._settings = t),
            e.saveState.connect((e, n) => {
              "started" === n && t.saveState && this._saveState();
            });
        }
        _saveState() {
          const e = this.get_state_sync({ drop_defaults: !0 });
          this._context.model.setMetadata
            ? this._context.model.setMetadata("widgets", { "application/vnd.jupyter.widget-state+json": e })
            : this._context.model.metadata.set("widgets", { "application/vnd.jupyter.widget-state+json": e });
        }
        _handleKernelConnectionStatusChange(e) {
          "connected" === e && (this._kernelRestoreInProgress || this.restoreWidgets(this._context.model, { loadKernel: !0, loadNotebook: !1 }));
        }
        _handleKernelStatusChange(e) {
          "restarting" === e && this.disconnect();
        }
        async restoreWidgets(e, { loadKernel: n, loadNotebook: t } = { loadKernel: !0, loadNotebook: !0 }) {
          try {
            if ((await this.context.sessionContext.ready, n))
              try {
                (this._kernelRestoreInProgress = !0), await this._loadFromKernel();
              } finally {
                this._kernelRestoreInProgress = !1;
              }
            t && (await this._loadFromNotebook(e)), (this._restoredStatus = !0), this._restored.emit();
          } catch (e) {}
        }
        async _loadFromNotebook(e) {
          const n = e.getMetadata ? e.getMetadata("widgets") : e.metadata.get("widgets");
          if (n && n[D]) {
            let e = n[D];
            (e = this.filterExistingModelState(e)), await this.set_state(e);
          }
        }
        dispose() {
          this.isDisposed || ((this._context = null), super.dispose());
        }
        async resolveUrl(e) {
          const n = await this.context.urlResolver.resolveUrl(e);
          return this.context.urlResolver.getDownloadUrl(n);
        }
        get context() {
          return this._context;
        }
        get kernel() {
          var e, n, t;
          return null !==
            (t =
              null === (n = null === (e = this._context.sessionContext) || void 0 === e ? void 0 : e.session) || void 0 === n ? void 0 : n.kernel) &&
            void 0 !== t
            ? t
            : null;
        }
        register_model(e, n) {
          super.register_model(e, n), this.setDirty();
        }
        async clear_state() {
          await super.clear_state(), this.setDirty();
        }
        setDirty() {
          this._settings.saveState && (this._context.model.dirty = !0);
        }
      }
      var x = t(4080),
        C = t(3087),
        A = t(8596),
        R = t.n(A);
      const P = x.OUTPUT_WIDGET_VERSION;
      class U extends x.OutputModel {
        defaults() {
          return Object.assign(Object.assign({}, super.defaults()), { msg_id: "", outputs: [] });
        }
        initialize(e, n) {
          super.initialize(e, n),
            (this._outputs = new C.OutputAreaModel({ trusted: !0 })),
            (this._msgHook = (e) => (this.add(e), !1)),
            this.widget_manager instanceof f &&
              this.widget_manager.context.sessionContext.kernelChanged.connect((e, n) => {
                this._handleKernelChanged(n);
              }),
            this.listenTo(this, "change:msg_id", this.reset_msg_id),
            this.listenTo(this, "change:outputs", this.setOutputs),
            this.setOutputs();
        }
        _handleKernelChanged({ oldValue: e }) {
          const n = this.get("msg_id");
          n && e && (e.removeMessageHook(n, this._msgHook), this.set("msg_id", null));
        }
        reset_msg_id() {
          const e = this.widget_manager.kernel,
            n = this.get("msg_id"),
            t = this.previous("msg_id");
          t && e && e.removeMessageHook(t, this._msgHook), n && e && e.registerMessageHook(n, this._msgHook);
        }
        add(e) {
          const n = e.header.msg_type;
          switch (n) {
            case "execute_result":
            case "display_data":
            case "stream":
            case "error": {
              const t = e.content;
              (t.output_type = n), this._outputs.add(t);
              break;
            }
            case "clear_output":
              this.clear_output(e.content.wait);
          }
          this.set("outputs", this._outputs.toJSON(), { newMessage: !0 }), this.save_changes();
        }
        clear_output(e = !1) {
          this._outputs.clear(e);
        }
        get outputs() {
          return this._outputs;
        }
        setOutputs(e, n, t) {
          (t && t.newMessage) || (this.clear_output(), this._outputs.fromJSON(JSON.parse(JSON.stringify(this.get("outputs")))));
        }
      }
      class k extends x.OutputView {
        _createElement(e) {
          return (this.luminoWidget = new h.JupyterLuminoPanelWidget({ view: this })), this.luminoWidget.node;
        }
        _setElement(e) {
          if (this.el || e !== this.luminoWidget.node) throw new Error("Cannot reset the DOM element.");
          (this.el = this.luminoWidget.node), (this.$el = R()(this.luminoWidget.node));
        }
        render() {
          super.render(),
            (this._outputView = new C.OutputArea({
              rendermime: this.model.widget_manager.rendermime,
              contentFactory: C.OutputArea.defaultContentFactory,
              model: this.model.outputs,
            })),
            this.luminoWidget.insertWidget(0, this._outputView),
            this.luminoWidget.addClass("jupyter-widgets"),
            this.luminoWidget.addClass("widget-output"),
            this.update();
        }
        remove() {
          return this._outputView.dispose(), super.remove();
        }
      }
      var I = t(8701),
        S = t(3699),
        B = t.n(S),
        O = t(376),
        _ = t.n(O),
        z = t(1412),
        N = t.n(z),
        M = t(9443),
        L = t.n(M),
        W = t(4999),
        H = t.n(W),
        F = t(9252),
        V = t.n(F),
        G = t(1556),
        Y = {};
      (Y.styleTagTransform = V()),
        (Y.setAttributes = L()),
        (Y.insert = N().bind(null, "head")),
        (Y.domAPI = _()),
        (Y.insertStyleElement = H()),
        B()(G.A, Y),
        G.A && G.A.locals && G.A.locals;
      var K = t(7654),
        J = {};
      (J.styleTagTransform = V()),
        (J.setAttributes = L()),
        (J.insert = N().bind(null, "head")),
        (J.domAPI = _()),
        (J.insertStyleElement = H()),
        B()(K.A, J),
        K.A && K.A.locals && K.A.locals;
      var Z = t(2465),
        $ = t(6605);
      const X = [],
        q = { saveState: !1 };
      function* Q(...e) {
        for (const n of e) yield* n;
      }
      async function ee(e) {
        return await e.ready, e.session.kernel.id;
      }
      async function ne(e, n, t, i, r) {
        const o = await ee(n);
        let a,
          d = pe.widgetManagerProperty.get(o);
        d ||
          ((d = r()),
          X.forEach((e) => d.register(e)),
          pe.widgetManagerProperty.set(o, d),
          (a = o),
          e.disposed.connect((e) => {
            pe.widgetManagerProperty.get(a) && pe.widgetManagerProperty.delete(a);
          }),
          n.kernelChanged.connect((e, n) => {
            const { newValue: t } = n;
            if (t) {
              const e = t.id,
                n = pe.widgetManagerProperty.get(a);
              n && (pe.widgetManagerProperty.delete(a), pe.widgetManagerProperty.set(e, n)), (a = e);
            }
          }));
        for (const e of i) e.manager = d;
        return (
          t.removeMimeType(m),
          t.addFactory({ safe: !1, mimeTypes: [m], createRenderer: (e) => new w(e, d) }, -10),
          new p.DisposableDelegate(() => {
            t && t.removeMimeType(m), d.dispose();
          })
        );
      }
      function te(e, n, t) {
        let i;
        const r = ee(e.sessionContext).then((r) => {
          const o = pe.widgetManagerProperty.get(r);
          o ? (i = o) : ((i = new f(e, n, q)), X.forEach((e) => i.register(e)), pe.widgetManagerProperty.set(r, i));
          for (const e of t) e.manager = i;
          n.removeMimeType(m), n.addFactory({ safe: !1, mimeTypes: [m], createRenderer: (e) => new w(e, i) }, -10);
        });
        return new p.DisposableDelegate(async () => {
          await r, n && n.removeMimeType(m), i.dispose();
        });
      }
      async function ie(e, n) {
        const t = e.content,
          i = e.context,
          r = i.sessionContext,
          o = t.rendermime;
        return ne(t, r, o, n, () => new f(i, o, q));
      }
      async function re(e, n) {
        const t = e.console,
          i = t.sessionContext,
          r = t.rendermime;
        return ne(t, i, r, n, () => new T(i.session.kernel, r));
      }
      const oe = {
        id: "@jupyter-widgets/jupyterlab-manager:plugin",
        requires: [s.IRenderMimeRegistry],
        optional: [a.INotebookTracker, o.IConsoleTracker, r.ISettingRegistry, d.IMainMenu, l.ILoggerRegistry, $.ITranslator],
        provides: h.IJupyterWidgetRegistry,
        activate: function (e, n, t, i, r, o, a, d) {
          const { commands: s } = e,
            l = (null != d ? d : $.nullTranslator).load("jupyterlab_widgets"),
            p = async (e) => {
              if (!a) return;
              const n = await ee(e.context.sessionContext),
                t = pe.widgetManagerProperty.get(n);
              t &&
                t.onUnhandledIOPubMessage.connect((n, t) => {
                  const i = a.getLogger(e.context.path);
                  let r = "warning";
                  (Z.KernelMessage.isErrorMsg(t) || (Z.KernelMessage.isStreamMsg(t) && "stderr" === t.content.name)) && (r = "error");
                  const o = Object.assign(Object.assign({}, t.content), { output_type: t.header.msg_type });
                  (i.rendermime = e.content.rendermime), i.log({ type: "output", data: o, level: r });
                });
            };
          if (
            (null !== r &&
              r
                .load(oe.id)
                .then((e) => {
                  e.changed.connect(ae), ae(e);
                })
                .catch((e) => {
                  console.error(e.message);
                }),
            n.addFactory({ safe: !1, mimeTypes: [m], createRenderer: (e) => new w(e) }, -10),
            null !== t)
          ) {
            const n = (n) =>
              Q(
                (function* (e) {
                  for (const n of e.widgets)
                    if ("code" === n.model.type)
                      for (const e of n.outputArea.widgets) for (const n of Array.from(e.children())) n instanceof w && (yield n);
                })(n.content),
                (function* (e, n) {
                  const t = (0, g.filter)(e.shell.widgets(), (e) => e.id.startsWith("LinkedOutputView-") && e.path === n);
                  for (const e of Array.from(t))
                    for (const n of Array.from(e.children())) for (const e of Array.from(n.children())) e instanceof w && (yield e);
                })(e, n.context.path)
              );
            t.forEach(async (e) => {
              await ie(e, n(e)), p(e);
            }),
              t.widgetAdded.connect(async (e, t) => {
                await ie(t, n(t)), p(t);
              });
          }
          if (null !== i) {
            const e = (e) =>
              Q(
                (function* (e) {
                  for (const n of Array.from(e.cells))
                    if ("code" === n.model.type)
                      for (const e of n.outputArea.widgets) for (const n of Array.from(e.children())) n instanceof w && (yield n);
                })(e.console)
              );
            i.forEach(async (n) => {
              await re(n, e(n));
            }),
              i.widgetAdded.connect(async (n, t) => {
                await re(t, e(t));
              });
          }
          return (
            null !== r &&
              s.addCommand("@jupyter-widgets/jupyterlab-manager:saveWidgetState", {
                label: l.__("Save Widget State Automatically"),
                execute: (e) =>
                  r.set(oe.id, "saveState", !q.saveState).catch((e) => {
                    console.error(`Failed to set ${oe.id}: ${e.message}`);
                  }),
                isToggled: () => q.saveState,
              }),
            o && o.settingsMenu.addGroup([{ command: "@jupyter-widgets/jupyterlab-manager:saveWidgetState" }]),
            {
              registerWidget(e) {
                X.push(e);
              },
            }
          );
        },
        autoStart: !0,
      };
      function ae(e) {
        q.saveState = e.get("saveState").composite;
      }
      const de = {
          id: `@jupyter-widgets/jupyterlab-manager:base-${h.JUPYTER_WIDGETS_VERSION}`,
          requires: [h.IJupyterWidgetRegistry],
          autoStart: !0,
          activate: (e, n) => {
            n.registerWidget({
              name: "@jupyter-widgets/base",
              version: h.JUPYTER_WIDGETS_VERSION,
              exports: {
                WidgetModel: h.WidgetModel,
                WidgetView: h.WidgetView,
                DOMWidgetView: h.DOMWidgetView,
                DOMWidgetModel: h.DOMWidgetModel,
                LayoutModel: h.LayoutModel,
                LayoutView: h.LayoutView,
                StyleModel: h.StyleModel,
                StyleView: h.StyleView,
                ErrorWidgetView: h.ErrorWidgetView,
              },
            });
          },
        },
        se = {
          id: `@jupyter-widgets/jupyterlab-manager:controls-${I.A}`,
          requires: [h.IJupyterWidgetRegistry],
          autoStart: !0,
          activate: (e, n) => {
            n.registerWidget({
              name: "@jupyter-widgets/controls",
              version: I.A,
              exports: () =>
                new Promise((e, n) => {
                  t.e(869)
                    .then(
                      ((n) => {
                        e(t(3010));
                      }).bind(null, t)
                    )
                    .catch((e) => {
                      n(e);
                    });
                }),
            });
          },
        },
        le = {
          id: `@jupyter-widgets/jupyterlab-manager:output-${P}`,
          requires: [h.IJupyterWidgetRegistry],
          autoStart: !0,
          activate: (e, n) => {
            n.registerWidget({ name: "@jupyter-widgets/output", version: P, exports: { OutputModel: U, OutputView: k } });
          },
        },
        ge = [oe, de, se, le];
      var pe;
      !(function (e) {
        e.widgetManagerProperty = new Map();
      })(pe || (pe = {}));
      const ce = ge;
    },
    2426: (e) => {
      e.exports =
        "data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0idXRmLTgiPz4KPCEtLSBHZW5lcmF0b3I6IEFkb2JlIElsbHVzdHJhdG9yIDE5LjIuMSwgU1ZHIEV4cG9ydCBQbHVnLUluIC4gU1ZHIFZlcnNpb246IDYuMDAgQnVpbGQgMCkgIC0tPgo8c3ZnIHZlcnNpb249IjEuMSIgaWQ9IkxheWVyXzEiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgeG1sbnM6eGxpbms9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsiIHg9IjBweCIgeT0iMHB4IgoJIHZpZXdCb3g9IjAgMCAxOCAxOCIgc3R5bGU9ImVuYWJsZS1iYWNrZ3JvdW5kOm5ldyAwIDAgMTggMTg7IiB4bWw6c3BhY2U9InByZXNlcnZlIj4KPHN0eWxlIHR5cGU9InRleHQvY3NzIj4KCS5zdDB7ZmlsbDpub25lO30KPC9zdHlsZT4KPHBhdGggZD0iTTUuMiw1LjlMOSw5LjdsMy44LTMuOGwxLjIsMS4ybC00LjksNWwtNC45LTVMNS4yLDUuOXoiLz4KPHBhdGggY2xhc3M9InN0MCIgZD0iTTAtMC42aDE4djE4SDBWLTAuNnoiLz4KPC9zdmc+Cg";
    },
  },
]);
