/*! For license information please see 7426.c83966ccc62601d391bd.js.LICENSE.txt */
(self["webpackChunk_jupyterlab_application_top"] = self["webpackChunk_jupyterlab_application_top"] || []).push([
  [7426],
  {
    84182: function (e, t, r) {
      (function t(n, a) {
        if (true) e.exports = a(r(82241));
        else {
        }
      })(this, function (e) {
        return (function (e) {
          var t = {};
          function r(n) {
            if (t[n]) {
              return t[n].exports;
            }
            var a = (t[n] = { i: n, l: false, exports: {} });
            e[n].call(a.exports, a, a.exports, r);
            a.l = true;
            return a.exports;
          }
          r.m = e;
          r.c = t;
          r.i = function (e) {
            return e;
          };
          r.d = function (e, t, n) {
            if (!r.o(e, t)) {
              Object.defineProperty(e, t, { configurable: false, enumerable: true, get: n });
            }
          };
          r.n = function (e) {
            var t =
              e && e.__esModule
                ? function t() {
                    return e["default"];
                  }
                : function t() {
                    return e;
                  };
            r.d(t, "a", t);
            return t;
          };
          r.o = function (e, t) {
            return Object.prototype.hasOwnProperty.call(e, t);
          };
          r.p = "";
          return r((r.s = 7));
        })([
          function (t, r) {
            t.exports = e;
          },
          function (e, t, r) {
            "use strict";
            var n = r(0).FDLayoutConstants;
            function a() {}
            for (var i in n) {
              a[i] = n[i];
            }
            a.DEFAULT_USE_MULTI_LEVEL_SCALING = false;
            a.DEFAULT_RADIAL_SEPARATION = n.DEFAULT_EDGE_LENGTH;
            a.DEFAULT_COMPONENT_SEPERATION = 60;
            a.TILE = true;
            a.TILING_PADDING_VERTICAL = 10;
            a.TILING_PADDING_HORIZONTAL = 10;
            a.TREE_REDUCTION_ON_INCREMENTAL = false;
            e.exports = a;
          },
          function (e, t, r) {
            "use strict";
            var n = r(0).FDLayoutEdge;
            function a(e, t, r) {
              n.call(this, e, t, r);
            }
            a.prototype = Object.create(n.prototype);
            for (var i in n) {
              a[i] = n[i];
            }
            e.exports = a;
          },
          function (e, t, r) {
            "use strict";
            var n = r(0).LGraph;
            function a(e, t, r) {
              n.call(this, e, t, r);
            }
            a.prototype = Object.create(n.prototype);
            for (var i in n) {
              a[i] = n[i];
            }
            e.exports = a;
          },
          function (e, t, r) {
            "use strict";
            var n = r(0).LGraphManager;
            function a(e) {
              n.call(this, e);
            }
            a.prototype = Object.create(n.prototype);
            for (var i in n) {
              a[i] = n[i];
            }
            e.exports = a;
          },
          function (e, t, r) {
            "use strict";
            var n = r(0).FDLayoutNode;
            var a = r(0).IMath;
            function i(e, t, r, a) {
              n.call(this, e, t, r, a);
            }
            i.prototype = Object.create(n.prototype);
            for (var o in n) {
              i[o] = n[o];
            }
            i.prototype.move = function () {
              var e = this.graphManager.getLayout();
              this.displacementX = (e.coolingFactor * (this.springForceX + this.repulsionForceX + this.gravitationForceX)) / this.noOfChildren;
              this.displacementY = (e.coolingFactor * (this.springForceY + this.repulsionForceY + this.gravitationForceY)) / this.noOfChildren;
              if (Math.abs(this.displacementX) > e.coolingFactor * e.maxNodeDisplacement) {
                this.displacementX = e.coolingFactor * e.maxNodeDisplacement * a.sign(this.displacementX);
              }
              if (Math.abs(this.displacementY) > e.coolingFactor * e.maxNodeDisplacement) {
                this.displacementY = e.coolingFactor * e.maxNodeDisplacement * a.sign(this.displacementY);
              }
              if (this.child == null) {
                this.moveBy(this.displacementX, this.displacementY);
              } else if (this.child.getNodes().length == 0) {
                this.moveBy(this.displacementX, this.displacementY);
              } else {
                this.propogateDisplacementToChildren(this.displacementX, this.displacementY);
              }
              e.totalDisplacement += Math.abs(this.displacementX) + Math.abs(this.displacementY);
              this.springForceX = 0;
              this.springForceY = 0;
              this.repulsionForceX = 0;
              this.repulsionForceY = 0;
              this.gravitationForceX = 0;
              this.gravitationForceY = 0;
              this.displacementX = 0;
              this.displacementY = 0;
            };
            i.prototype.propogateDisplacementToChildren = function (e, t) {
              var r = this.getChild().getNodes();
              var n;
              for (var a = 0; a < r.length; a++) {
                n = r[a];
                if (n.getChild() == null) {
                  n.moveBy(e, t);
                  n.displacementX += e;
                  n.displacementY += t;
                } else {
                  n.propogateDisplacementToChildren(e, t);
                }
              }
            };
            i.prototype.setPred1 = function (e) {
              this.pred1 = e;
            };
            i.prototype.getPred1 = function () {
              return pred1;
            };
            i.prototype.getPred2 = function () {
              return pred2;
            };
            i.prototype.setNext = function (e) {
              this.next = e;
            };
            i.prototype.getNext = function () {
              return next;
            };
            i.prototype.setProcessed = function (e) {
              this.processed = e;
            };
            i.prototype.isProcessed = function () {
              return processed;
            };
            e.exports = i;
          },
          function (e, t, r) {
            "use strict";
            var n = r(0).FDLayout;
            var a = r(4);
            var i = r(3);
            var o = r(5);
            var s = r(2);
            var l = r(1);
            var u = r(0).FDLayoutConstants;
            var c = r(0).LayoutConstants;
            var v = r(0).Point;
            var f = r(0).PointD;
            var h = r(0).Layout;
            var d = r(0).Integer;
            var p = r(0).IGeometry;
            var g = r(0).LGraph;
            var y = r(0).Transform;
            function m() {
              n.call(this);
              this.toBeTiled = {};
            }
            m.prototype = Object.create(n.prototype);
            for (var b in n) {
              m[b] = n[b];
            }
            m.prototype.newGraphManager = function () {
              var e = new a(this);
              this.graphManager = e;
              return e;
            };
            m.prototype.newGraph = function (e) {
              return new i(null, this.graphManager, e);
            };
            m.prototype.newNode = function (e) {
              return new o(this.graphManager, e);
            };
            m.prototype.newEdge = function (e) {
              return new s(null, null, e);
            };
            m.prototype.initParameters = function () {
              n.prototype.initParameters.call(this, arguments);
              if (!this.isSubLayout) {
                if (l.DEFAULT_EDGE_LENGTH < 10) {
                  this.idealEdgeLength = 10;
                } else {
                  this.idealEdgeLength = l.DEFAULT_EDGE_LENGTH;
                }
                this.useSmartIdealEdgeLengthCalculation = l.DEFAULT_USE_SMART_IDEAL_EDGE_LENGTH_CALCULATION;
                this.springConstant = u.DEFAULT_SPRING_STRENGTH;
                this.repulsionConstant = u.DEFAULT_REPULSION_STRENGTH;
                this.gravityConstant = u.DEFAULT_GRAVITY_STRENGTH;
                this.compoundGravityConstant = u.DEFAULT_COMPOUND_GRAVITY_STRENGTH;
                this.gravityRangeFactor = u.DEFAULT_GRAVITY_RANGE_FACTOR;
                this.compoundGravityRangeFactor = u.DEFAULT_COMPOUND_GRAVITY_RANGE_FACTOR;
                this.prunedNodesAll = [];
                this.growTreeIterations = 0;
                this.afterGrowthIterations = 0;
                this.isTreeGrowing = false;
                this.isGrowthFinished = false;
                this.coolingCycle = 0;
                this.maxCoolingCycle = this.maxIterations / u.CONVERGENCE_CHECK_PERIOD;
                this.finalTemperature = u.CONVERGENCE_CHECK_PERIOD / this.maxIterations;
                this.coolingAdjuster = 1;
              }
            };
            m.prototype.layout = function () {
              var e = c.DEFAULT_CREATE_BENDS_AS_NEEDED;
              if (e) {
                this.createBendpoints();
                this.graphManager.resetAllEdges();
              }
              this.level = 0;
              return this.classicLayout();
            };
            m.prototype.classicLayout = function () {
              this.nodesWithGravity = this.calculateNodesToApplyGravitationTo();
              this.graphManager.setAllNodesToApplyGravitation(this.nodesWithGravity);
              this.calcNoOfChildrenForAllNodes();
              this.graphManager.calcLowestCommonAncestors();
              this.graphManager.calcInclusionTreeDepths();
              this.graphManager.getRoot().calcEstimatedSize();
              this.calcIdealEdgeLengths();
              if (!this.incremental) {
                var e = this.getFlatForest();
                if (e.length > 0) {
                  this.positionNodesRadially(e);
                } else {
                  this.reduceTrees();
                  this.graphManager.resetAllNodesToApplyGravitation();
                  var t = new Set(this.getAllNodes());
                  var r = this.nodesWithGravity.filter(function (e) {
                    return t.has(e);
                  });
                  this.graphManager.setAllNodesToApplyGravitation(r);
                  this.positionNodesRandomly();
                }
              } else {
                if (l.TREE_REDUCTION_ON_INCREMENTAL) {
                  this.reduceTrees();
                  this.graphManager.resetAllNodesToApplyGravitation();
                  var t = new Set(this.getAllNodes());
                  var r = this.nodesWithGravity.filter(function (e) {
                    return t.has(e);
                  });
                  this.graphManager.setAllNodesToApplyGravitation(r);
                }
              }
              this.initSpringEmbedder();
              this.runSpringEmbedder();
              return true;
            };
            m.prototype.tick = function () {
              this.totalIterations++;
              if (this.totalIterations === this.maxIterations && !this.isTreeGrowing && !this.isGrowthFinished) {
                if (this.prunedNodesAll.length > 0) {
                  this.isTreeGrowing = true;
                } else {
                  return true;
                }
              }
              if (this.totalIterations % u.CONVERGENCE_CHECK_PERIOD == 0 && !this.isTreeGrowing && !this.isGrowthFinished) {
                if (this.isConverged()) {
                  if (this.prunedNodesAll.length > 0) {
                    this.isTreeGrowing = true;
                  } else {
                    return true;
                  }
                }
                this.coolingCycle++;
                if (this.layoutQuality == 0) {
                  this.coolingAdjuster = this.coolingCycle;
                } else if (this.layoutQuality == 1) {
                  this.coolingAdjuster = this.coolingCycle / 3;
                }
                this.coolingFactor = Math.max(
                  this.initialCoolingFactor -
                    (Math.pow(
                      this.coolingCycle,
                      Math.log(100 * (this.initialCoolingFactor - this.finalTemperature)) / Math.log(this.maxCoolingCycle)
                    ) /
                      100) *
                      this.coolingAdjuster,
                  this.finalTemperature
                );
                this.animationPeriod = Math.ceil(this.initialAnimationPeriod * Math.sqrt(this.coolingFactor));
              }
              if (this.isTreeGrowing) {
                if (this.growTreeIterations % 10 == 0) {
                  if (this.prunedNodesAll.length > 0) {
                    this.graphManager.updateBounds();
                    this.updateGrid();
                    this.growTree(this.prunedNodesAll);
                    this.graphManager.resetAllNodesToApplyGravitation();
                    var e = new Set(this.getAllNodes());
                    var t = this.nodesWithGravity.filter(function (t) {
                      return e.has(t);
                    });
                    this.graphManager.setAllNodesToApplyGravitation(t);
                    this.graphManager.updateBounds();
                    this.updateGrid();
                    this.coolingFactor = u.DEFAULT_COOLING_FACTOR_INCREMENTAL;
                  } else {
                    this.isTreeGrowing = false;
                    this.isGrowthFinished = true;
                  }
                }
                this.growTreeIterations++;
              }
              if (this.isGrowthFinished) {
                if (this.isConverged()) {
                  return true;
                }
                if (this.afterGrowthIterations % 10 == 0) {
                  this.graphManager.updateBounds();
                  this.updateGrid();
                }
                this.coolingFactor = u.DEFAULT_COOLING_FACTOR_INCREMENTAL * ((100 - this.afterGrowthIterations) / 100);
                this.afterGrowthIterations++;
              }
              var r = !this.isTreeGrowing && !this.isGrowthFinished;
              var n = (this.growTreeIterations % 10 == 1 && this.isTreeGrowing) || (this.afterGrowthIterations % 10 == 1 && this.isGrowthFinished);
              this.totalDisplacement = 0;
              this.graphManager.updateBounds();
              this.calcSpringForces();
              this.calcRepulsionForces(r, n);
              this.calcGravitationalForces();
              this.moveNodes();
              this.animate();
              return false;
            };
            m.prototype.getPositionsData = function () {
              var e = this.graphManager.getAllNodes();
              var t = {};
              for (var r = 0; r < e.length; r++) {
                var n = e[r].rect;
                var a = e[r].id;
                t[a] = { id: a, x: n.getCenterX(), y: n.getCenterY(), w: n.width, h: n.height };
              }
              return t;
            };
            m.prototype.runSpringEmbedder = function () {
              this.initialAnimationPeriod = 25;
              this.animationPeriod = this.initialAnimationPeriod;
              var e = false;
              if (u.ANIMATE === "during") {
                this.emit("layoutstarted");
              } else {
                while (!e) {
                  e = this.tick();
                }
                this.graphManager.updateBounds();
              }
            };
            m.prototype.calculateNodesToApplyGravitationTo = function () {
              var e = [];
              var t;
              var r = this.graphManager.getGraphs();
              var n = r.length;
              var a;
              for (a = 0; a < n; a++) {
                t = r[a];
                t.updateConnected();
                if (!t.isConnected) {
                  e = e.concat(t.getNodes());
                }
              }
              return e;
            };
            m.prototype.createBendpoints = function () {
              var e = [];
              e = e.concat(this.graphManager.getAllEdges());
              var t = new Set();
              var r;
              for (r = 0; r < e.length; r++) {
                var n = e[r];
                if (!t.has(n)) {
                  var a = n.getSource();
                  var i = n.getTarget();
                  if (a == i) {
                    n.getBendpoints().push(new f());
                    n.getBendpoints().push(new f());
                    this.createDummyNodesForBendpoints(n);
                    t.add(n);
                  } else {
                    var o = [];
                    o = o.concat(a.getEdgeListToNode(i));
                    o = o.concat(i.getEdgeListToNode(a));
                    if (!t.has(o[0])) {
                      if (o.length > 1) {
                        var s;
                        for (s = 0; s < o.length; s++) {
                          var l = o[s];
                          l.getBendpoints().push(new f());
                          this.createDummyNodesForBendpoints(l);
                        }
                      }
                      o.forEach(function (e) {
                        t.add(e);
                      });
                    }
                  }
                }
                if (t.size == e.length) {
                  break;
                }
              }
            };
            m.prototype.positionNodesRadially = function (e) {
              var t = new v(0, 0);
              var r = Math.ceil(Math.sqrt(e.length));
              var n = 0;
              var a = 0;
              var i = 0;
              var o = new f(0, 0);
              for (var s = 0; s < e.length; s++) {
                if (s % r == 0) {
                  i = 0;
                  a = n;
                  if (s != 0) {
                    a += l.DEFAULT_COMPONENT_SEPERATION;
                  }
                  n = 0;
                }
                var u = e[s];
                var d = h.findCenterOfTree(u);
                t.x = i;
                t.y = a;
                o = m.radialLayout(u, d, t);
                if (o.y > n) {
                  n = Math.floor(o.y);
                }
                i = Math.floor(o.x + l.DEFAULT_COMPONENT_SEPERATION);
              }
              this.transform(new f(c.WORLD_CENTER_X - o.x / 2, c.WORLD_CENTER_Y - o.y / 2));
            };
            m.radialLayout = function (e, t, r) {
              var n = Math.max(this.maxDiagonalInTree(e), l.DEFAULT_RADIAL_SEPARATION);
              m.branchRadialLayout(t, null, 0, 359, 0, n);
              var a = g.calculateBounds(e);
              var i = new y();
              i.setDeviceOrgX(a.getMinX());
              i.setDeviceOrgY(a.getMinY());
              i.setWorldOrgX(r.x);
              i.setWorldOrgY(r.y);
              for (var o = 0; o < e.length; o++) {
                var s = e[o];
                s.transform(i);
              }
              var u = new f(a.getMaxX(), a.getMaxY());
              return i.inverseTransformPoint(u);
            };
            m.branchRadialLayout = function (e, t, r, n, a, i) {
              var o = (n - r + 1) / 2;
              if (o < 0) {
                o += 180;
              }
              var s = (o + r) % 360;
              var l = (s * p.TWO_PI) / 360;
              var u = Math.cos(l);
              var c = a * Math.cos(l);
              var v = a * Math.sin(l);
              e.setCenter(c, v);
              var f = [];
              f = f.concat(e.getEdges());
              var h = f.length;
              if (t != null) {
                h--;
              }
              var d = 0;
              var g = f.length;
              var y;
              var b = e.getEdgesBetween(t);
              while (b.length > 1) {
                var x = b[0];
                b.splice(0, 1);
                var w = f.indexOf(x);
                if (w >= 0) {
                  f.splice(w, 1);
                }
                g--;
                h--;
              }
              if (t != null) {
                y = (f.indexOf(b[0]) + 1) % g;
              } else {
                y = 0;
              }
              var E = Math.abs(n - r) / h;
              for (var T = y; d != h; T = ++T % g) {
                var _ = f[T].getOtherEnd(e);
                if (_ == t) {
                  continue;
                }
                var D = (r + d * E) % 360;
                var C = (D + E) % 360;
                m.branchRadialLayout(_, e, D, C, a + i, i);
                d++;
              }
            };
            m.maxDiagonalInTree = function (e) {
              var t = d.MIN_VALUE;
              for (var r = 0; r < e.length; r++) {
                var n = e[r];
                var a = n.getDiagonal();
                if (a > t) {
                  t = a;
                }
              }
              return t;
            };
            m.prototype.calcRepulsionRange = function () {
              return 2 * (this.level + 1) * this.idealEdgeLength;
            };
            m.prototype.groupZeroDegreeMembers = function () {
              var e = this;
              var t = {};
              this.memberGroups = {};
              this.idToDummyNode = {};
              var r = [];
              var n = this.graphManager.getAllNodes();
              for (var a = 0; a < n.length; a++) {
                var i = n[a];
                var s = i.getParent();
                if (this.getNodeDegreeWithChildren(i) === 0 && (s.id == undefined || !this.getToBeTiled(s))) {
                  r.push(i);
                }
              }
              for (var a = 0; a < r.length; a++) {
                var i = r[a];
                var l = i.getParent().id;
                if (typeof t[l] === "undefined") t[l] = [];
                t[l] = t[l].concat(i);
              }
              Object.keys(t).forEach(function (r) {
                if (t[r].length > 1) {
                  var n = "DummyCompound_" + r;
                  e.memberGroups[n] = t[r];
                  var a = t[r][0].getParent();
                  var i = new o(e.graphManager);
                  i.id = n;
                  i.paddingLeft = a.paddingLeft || 0;
                  i.paddingRight = a.paddingRight || 0;
                  i.paddingBottom = a.paddingBottom || 0;
                  i.paddingTop = a.paddingTop || 0;
                  e.idToDummyNode[n] = i;
                  var s = e.getGraphManager().add(e.newGraph(), i);
                  var l = a.getChild();
                  l.add(i);
                  for (var u = 0; u < t[r].length; u++) {
                    var c = t[r][u];
                    l.remove(c);
                    s.add(c);
                  }
                }
              });
            };
            m.prototype.clearCompounds = function () {
              var e = {};
              var t = {};
              this.performDFSOnCompounds();
              for (var r = 0; r < this.compoundOrder.length; r++) {
                t[this.compoundOrder[r].id] = this.compoundOrder[r];
                e[this.compoundOrder[r].id] = [].concat(this.compoundOrder[r].getChild().getNodes());
                this.graphManager.remove(this.compoundOrder[r].getChild());
                this.compoundOrder[r].child = null;
              }
              this.graphManager.resetAllNodes();
              this.tileCompoundMembers(e, t);
            };
            m.prototype.clearZeroDegreeMembers = function () {
              var e = this;
              var t = (this.tiledZeroDegreePack = []);
              Object.keys(this.memberGroups).forEach(function (r) {
                var n = e.idToDummyNode[r];
                t[r] = e.tileNodes(e.memberGroups[r], n.paddingLeft + n.paddingRight);
                n.rect.width = t[r].width;
                n.rect.height = t[r].height;
              });
            };
            m.prototype.repopulateCompounds = function () {
              for (var e = this.compoundOrder.length - 1; e >= 0; e--) {
                var t = this.compoundOrder[e];
                var r = t.id;
                var n = t.paddingLeft;
                var a = t.paddingTop;
                this.adjustLocations(this.tiledMemberPack[r], t.rect.x, t.rect.y, n, a);
              }
            };
            m.prototype.repopulateZeroDegreeMembers = function () {
              var e = this;
              var t = this.tiledZeroDegreePack;
              Object.keys(t).forEach(function (r) {
                var n = e.idToDummyNode[r];
                var a = n.paddingLeft;
                var i = n.paddingTop;
                e.adjustLocations(t[r], n.rect.x, n.rect.y, a, i);
              });
            };
            m.prototype.getToBeTiled = function (e) {
              var t = e.id;
              if (this.toBeTiled[t] != null) {
                return this.toBeTiled[t];
              }
              var r = e.getChild();
              if (r == null) {
                this.toBeTiled[t] = false;
                return false;
              }
              var n = r.getNodes();
              for (var a = 0; a < n.length; a++) {
                var i = n[a];
                if (this.getNodeDegree(i) > 0) {
                  this.toBeTiled[t] = false;
                  return false;
                }
                if (i.getChild() == null) {
                  this.toBeTiled[i.id] = false;
                  continue;
                }
                if (!this.getToBeTiled(i)) {
                  this.toBeTiled[t] = false;
                  return false;
                }
              }
              this.toBeTiled[t] = true;
              return true;
            };
            m.prototype.getNodeDegree = function (e) {
              var t = e.id;
              var r = e.getEdges();
              var n = 0;
              for (var a = 0; a < r.length; a++) {
                var i = r[a];
                if (i.getSource().id !== i.getTarget().id) {
                  n = n + 1;
                }
              }
              return n;
            };
            m.prototype.getNodeDegreeWithChildren = function (e) {
              var t = this.getNodeDegree(e);
              if (e.getChild() == null) {
                return t;
              }
              var r = e.getChild().getNodes();
              for (var n = 0; n < r.length; n++) {
                var a = r[n];
                t += this.getNodeDegreeWithChildren(a);
              }
              return t;
            };
            m.prototype.performDFSOnCompounds = function () {
              this.compoundOrder = [];
              this.fillCompexOrderByDFS(this.graphManager.getRoot().getNodes());
            };
            m.prototype.fillCompexOrderByDFS = function (e) {
              for (var t = 0; t < e.length; t++) {
                var r = e[t];
                if (r.getChild() != null) {
                  this.fillCompexOrderByDFS(r.getChild().getNodes());
                }
                if (this.getToBeTiled(r)) {
                  this.compoundOrder.push(r);
                }
              }
            };
            m.prototype.adjustLocations = function (e, t, r, n, a) {
              t += n;
              r += a;
              var i = t;
              for (var o = 0; o < e.rows.length; o++) {
                var s = e.rows[o];
                t = i;
                var l = 0;
                for (var u = 0; u < s.length; u++) {
                  var c = s[u];
                  c.rect.x = t;
                  c.rect.y = r;
                  t += c.rect.width + e.horizontalPadding;
                  if (c.rect.height > l) l = c.rect.height;
                }
                r += l + e.verticalPadding;
              }
            };
            m.prototype.tileCompoundMembers = function (e, t) {
              var r = this;
              this.tiledMemberPack = [];
              Object.keys(e).forEach(function (n) {
                var a = t[n];
                r.tiledMemberPack[n] = r.tileNodes(e[n], a.paddingLeft + a.paddingRight);
                a.rect.width = r.tiledMemberPack[n].width;
                a.rect.height = r.tiledMemberPack[n].height;
              });
            };
            m.prototype.tileNodes = function (e, t) {
              var r = l.TILING_PADDING_VERTICAL;
              var n = l.TILING_PADDING_HORIZONTAL;
              var a = { rows: [], rowWidth: [], rowHeight: [], width: 0, height: t, verticalPadding: r, horizontalPadding: n };
              e.sort(function (e, t) {
                if (e.rect.width * e.rect.height > t.rect.width * t.rect.height) return -1;
                if (e.rect.width * e.rect.height < t.rect.width * t.rect.height) return 1;
                return 0;
              });
              for (var i = 0; i < e.length; i++) {
                var o = e[i];
                if (a.rows.length == 0) {
                  this.insertNodeToRow(a, o, 0, t);
                } else if (this.canAddHorizontal(a, o.rect.width, o.rect.height)) {
                  this.insertNodeToRow(a, o, this.getShortestRowIndex(a), t);
                } else {
                  this.insertNodeToRow(a, o, a.rows.length, t);
                }
                this.shiftToLastRow(a);
              }
              return a;
            };
            m.prototype.insertNodeToRow = function (e, t, r, n) {
              var a = n;
              if (r == e.rows.length) {
                var i = [];
                e.rows.push(i);
                e.rowWidth.push(a);
                e.rowHeight.push(0);
              }
              var o = e.rowWidth[r] + t.rect.width;
              if (e.rows[r].length > 0) {
                o += e.horizontalPadding;
              }
              e.rowWidth[r] = o;
              if (e.width < o) {
                e.width = o;
              }
              var s = t.rect.height;
              if (r > 0) s += e.verticalPadding;
              var l = 0;
              if (s > e.rowHeight[r]) {
                l = e.rowHeight[r];
                e.rowHeight[r] = s;
                l = e.rowHeight[r] - l;
              }
              e.height += l;
              e.rows[r].push(t);
            };
            m.prototype.getShortestRowIndex = function (e) {
              var t = -1;
              var r = Number.MAX_VALUE;
              for (var n = 0; n < e.rows.length; n++) {
                if (e.rowWidth[n] < r) {
                  t = n;
                  r = e.rowWidth[n];
                }
              }
              return t;
            };
            m.prototype.getLongestRowIndex = function (e) {
              var t = -1;
              var r = Number.MIN_VALUE;
              for (var n = 0; n < e.rows.length; n++) {
                if (e.rowWidth[n] > r) {
                  t = n;
                  r = e.rowWidth[n];
                }
              }
              return t;
            };
            m.prototype.canAddHorizontal = function (e, t, r) {
              var n = this.getShortestRowIndex(e);
              if (n < 0) {
                return true;
              }
              var a = e.rowWidth[n];
              if (a + e.horizontalPadding + t <= e.width) return true;
              var i = 0;
              if (e.rowHeight[n] < r) {
                if (n > 0) i = r + e.verticalPadding - e.rowHeight[n];
              }
              var o;
              if (e.width - a >= t + e.horizontalPadding) {
                o = (e.height + i) / (a + t + e.horizontalPadding);
              } else {
                o = (e.height + i) / e.width;
              }
              i = r + e.verticalPadding;
              var s;
              if (e.width < t) {
                s = (e.height + i) / t;
              } else {
                s = (e.height + i) / e.width;
              }
              if (s < 1) s = 1 / s;
              if (o < 1) o = 1 / o;
              return o < s;
            };
            m.prototype.shiftToLastRow = function (e) {
              var t = this.getLongestRowIndex(e);
              var r = e.rowWidth.length - 1;
              var n = e.rows[t];
              var a = n[n.length - 1];
              var i = a.width + e.horizontalPadding;
              if (e.width - e.rowWidth[r] > i && t != r) {
                n.splice(-1, 1);
                e.rows[r].push(a);
                e.rowWidth[t] = e.rowWidth[t] - i;
                e.rowWidth[r] = e.rowWidth[r] + i;
                e.width = e.rowWidth[instance.getLongestRowIndex(e)];
                var o = Number.MIN_VALUE;
                for (var s = 0; s < n.length; s++) {
                  if (n[s].height > o) o = n[s].height;
                }
                if (t > 0) o += e.verticalPadding;
                var l = e.rowHeight[t] + e.rowHeight[r];
                e.rowHeight[t] = o;
                if (e.rowHeight[r] < a.height + e.verticalPadding) e.rowHeight[r] = a.height + e.verticalPadding;
                var u = e.rowHeight[t] + e.rowHeight[r];
                e.height += u - l;
                this.shiftToLastRow(e);
              }
            };
            m.prototype.tilingPreLayout = function () {
              if (l.TILE) {
                this.groupZeroDegreeMembers();
                this.clearCompounds();
                this.clearZeroDegreeMembers();
              }
            };
            m.prototype.tilingPostLayout = function () {
              if (l.TILE) {
                this.repopulateZeroDegreeMembers();
                this.repopulateCompounds();
              }
            };
            m.prototype.reduceTrees = function () {
              var e = [];
              var t = true;
              var r;
              while (t) {
                var n = this.graphManager.getAllNodes();
                var a = [];
                t = false;
                for (var i = 0; i < n.length; i++) {
                  r = n[i];
                  if (r.getEdges().length == 1 && !r.getEdges()[0].isInterGraph && r.getChild() == null) {
                    a.push([r, r.getEdges()[0], r.getOwner()]);
                    t = true;
                  }
                }
                if (t == true) {
                  var o = [];
                  for (var s = 0; s < a.length; s++) {
                    if (a[s][0].getEdges().length == 1) {
                      o.push(a[s]);
                      a[s][0].getOwner().remove(a[s][0]);
                    }
                  }
                  e.push(o);
                  this.graphManager.resetAllNodes();
                  this.graphManager.resetAllEdges();
                }
              }
              this.prunedNodesAll = e;
            };
            m.prototype.growTree = function (e) {
              var t = e.length;
              var r = e[t - 1];
              var n;
              for (var a = 0; a < r.length; a++) {
                n = r[a];
                this.findPlaceforPrunedNode(n);
                n[2].add(n[0]);
                n[2].add(n[1], n[1].source, n[1].target);
              }
              e.splice(e.length - 1, 1);
              this.graphManager.resetAllNodes();
              this.graphManager.resetAllEdges();
            };
            m.prototype.findPlaceforPrunedNode = function (e) {
              var t;
              var r;
              var n = e[0];
              if (n == e[1].source) {
                r = e[1].target;
              } else {
                r = e[1].source;
              }
              var a = r.startX;
              var i = r.finishX;
              var o = r.startY;
              var s = r.finishY;
              var l = 0;
              var c = 0;
              var v = 0;
              var f = 0;
              var h = [l, v, c, f];
              if (o > 0) {
                for (var p = a; p <= i; p++) {
                  h[0] += this.grid[p][o - 1].length + this.grid[p][o].length - 1;
                }
              }
              if (i < this.grid.length - 1) {
                for (var p = o; p <= s; p++) {
                  h[1] += this.grid[i + 1][p].length + this.grid[i][p].length - 1;
                }
              }
              if (s < this.grid[0].length - 1) {
                for (var p = a; p <= i; p++) {
                  h[2] += this.grid[p][s + 1].length + this.grid[p][s].length - 1;
                }
              }
              if (a > 0) {
                for (var p = o; p <= s; p++) {
                  h[3] += this.grid[a - 1][p].length + this.grid[a][p].length - 1;
                }
              }
              var g = d.MAX_VALUE;
              var y;
              var m;
              for (var b = 0; b < h.length; b++) {
                if (h[b] < g) {
                  g = h[b];
                  y = 1;
                  m = b;
                } else if (h[b] == g) {
                  y++;
                }
              }
              if (y == 3 && g == 0) {
                if (h[0] == 0 && h[1] == 0 && h[2] == 0) {
                  t = 1;
                } else if (h[0] == 0 && h[1] == 0 && h[3] == 0) {
                  t = 0;
                } else if (h[0] == 0 && h[2] == 0 && h[3] == 0) {
                  t = 3;
                } else if (h[1] == 0 && h[2] == 0 && h[3] == 0) {
                  t = 2;
                }
              } else if (y == 2 && g == 0) {
                var x = Math.floor(Math.random() * 2);
                if (h[0] == 0 && h[1] == 0) {
                  if (x == 0) {
                    t = 0;
                  } else {
                    t = 1;
                  }
                } else if (h[0] == 0 && h[2] == 0) {
                  if (x == 0) {
                    t = 0;
                  } else {
                    t = 2;
                  }
                } else if (h[0] == 0 && h[3] == 0) {
                  if (x == 0) {
                    t = 0;
                  } else {
                    t = 3;
                  }
                } else if (h[1] == 0 && h[2] == 0) {
                  if (x == 0) {
                    t = 1;
                  } else {
                    t = 2;
                  }
                } else if (h[1] == 0 && h[3] == 0) {
                  if (x == 0) {
                    t = 1;
                  } else {
                    t = 3;
                  }
                } else {
                  if (x == 0) {
                    t = 2;
                  } else {
                    t = 3;
                  }
                }
              } else if (y == 4 && g == 0) {
                var x = Math.floor(Math.random() * 4);
                t = x;
              } else {
                t = m;
              }
              if (t == 0) {
                n.setCenter(r.getCenterX(), r.getCenterY() - r.getHeight() / 2 - u.DEFAULT_EDGE_LENGTH - n.getHeight() / 2);
              } else if (t == 1) {
                n.setCenter(r.getCenterX() + r.getWidth() / 2 + u.DEFAULT_EDGE_LENGTH + n.getWidth() / 2, r.getCenterY());
              } else if (t == 2) {
                n.setCenter(r.getCenterX(), r.getCenterY() + r.getHeight() / 2 + u.DEFAULT_EDGE_LENGTH + n.getHeight() / 2);
              } else {
                n.setCenter(r.getCenterX() - r.getWidth() / 2 - u.DEFAULT_EDGE_LENGTH - n.getWidth() / 2, r.getCenterY());
              }
            };
            e.exports = m;
          },
          function (e, t, r) {
            "use strict";
            var n = {};
            n.layoutBase = r(0);
            n.CoSEConstants = r(1);
            n.CoSEEdge = r(2);
            n.CoSEGraph = r(3);
            n.CoSEGraphManager = r(4);
            n.CoSELayout = r(6);
            n.CoSENode = r(5);
            e.exports = n;
          },
        ]);
      });
    },
    14607: function (e, t, r) {
      (function t(n, a) {
        if (true) e.exports = a(r(84182));
        else {
        }
      })(this, function (e) {
        return (function (e) {
          var t = {};
          function r(n) {
            if (t[n]) {
              return t[n].exports;
            }
            var a = (t[n] = { i: n, l: false, exports: {} });
            e[n].call(a.exports, a, a.exports, r);
            a.l = true;
            return a.exports;
          }
          r.m = e;
          r.c = t;
          r.i = function (e) {
            return e;
          };
          r.d = function (e, t, n) {
            if (!r.o(e, t)) {
              Object.defineProperty(e, t, { configurable: false, enumerable: true, get: n });
            }
          };
          r.n = function (e) {
            var t =
              e && e.__esModule
                ? function t() {
                    return e["default"];
                  }
                : function t() {
                    return e;
                  };
            r.d(t, "a", t);
            return t;
          };
          r.o = function (e, t) {
            return Object.prototype.hasOwnProperty.call(e, t);
          };
          r.p = "";
          return r((r.s = 1));
        })([
          function (t, r) {
            t.exports = e;
          },
          function (e, t, r) {
            "use strict";
            var n = r(0).layoutBase.LayoutConstants;
            var a = r(0).layoutBase.FDLayoutConstants;
            var i = r(0).CoSEConstants;
            var o = r(0).CoSELayout;
            var s = r(0).CoSENode;
            var l = r(0).layoutBase.PointD;
            var u = r(0).layoutBase.DimensionD;
            var c = {
              ready: function e() {},
              stop: function e() {},
              quality: "default",
              nodeDimensionsIncludeLabels: false,
              refresh: 30,
              fit: true,
              padding: 10,
              randomize: true,
              nodeRepulsion: 4500,
              idealEdgeLength: 50,
              edgeElasticity: 0.45,
              nestingFactor: 0.1,
              gravity: 0.25,
              numIter: 2500,
              tile: true,
              animate: "end",
              animationDuration: 500,
              tilingPaddingVertical: 10,
              tilingPaddingHorizontal: 10,
              gravityRangeCompound: 1.5,
              gravityCompound: 1,
              gravityRange: 3.8,
              initialEnergyOnIncremental: 0.5,
            };
            function v(e, t) {
              var r = {};
              for (var n in e) {
                r[n] = e[n];
              }
              for (var n in t) {
                r[n] = t[n];
              }
              return r;
            }
            function f(e) {
              this.options = v(c, e);
              h(this.options);
            }
            var h = function e(t) {
              if (t.nodeRepulsion != null) i.DEFAULT_REPULSION_STRENGTH = a.DEFAULT_REPULSION_STRENGTH = t.nodeRepulsion;
              if (t.idealEdgeLength != null) i.DEFAULT_EDGE_LENGTH = a.DEFAULT_EDGE_LENGTH = t.idealEdgeLength;
              if (t.edgeElasticity != null) i.DEFAULT_SPRING_STRENGTH = a.DEFAULT_SPRING_STRENGTH = t.edgeElasticity;
              if (t.nestingFactor != null) i.PER_LEVEL_IDEAL_EDGE_LENGTH_FACTOR = a.PER_LEVEL_IDEAL_EDGE_LENGTH_FACTOR = t.nestingFactor;
              if (t.gravity != null) i.DEFAULT_GRAVITY_STRENGTH = a.DEFAULT_GRAVITY_STRENGTH = t.gravity;
              if (t.numIter != null) i.MAX_ITERATIONS = a.MAX_ITERATIONS = t.numIter;
              if (t.gravityRange != null) i.DEFAULT_GRAVITY_RANGE_FACTOR = a.DEFAULT_GRAVITY_RANGE_FACTOR = t.gravityRange;
              if (t.gravityCompound != null) i.DEFAULT_COMPOUND_GRAVITY_STRENGTH = a.DEFAULT_COMPOUND_GRAVITY_STRENGTH = t.gravityCompound;
              if (t.gravityRangeCompound != null)
                i.DEFAULT_COMPOUND_GRAVITY_RANGE_FACTOR = a.DEFAULT_COMPOUND_GRAVITY_RANGE_FACTOR = t.gravityRangeCompound;
              if (t.initialEnergyOnIncremental != null)
                i.DEFAULT_COOLING_FACTOR_INCREMENTAL = a.DEFAULT_COOLING_FACTOR_INCREMENTAL = t.initialEnergyOnIncremental;
              if (t.quality == "draft") n.QUALITY = 0;
              else if (t.quality == "proof") n.QUALITY = 2;
              else n.QUALITY = 1;
              i.NODE_DIMENSIONS_INCLUDE_LABELS = a.NODE_DIMENSIONS_INCLUDE_LABELS = n.NODE_DIMENSIONS_INCLUDE_LABELS = t.nodeDimensionsIncludeLabels;
              i.DEFAULT_INCREMENTAL = a.DEFAULT_INCREMENTAL = n.DEFAULT_INCREMENTAL = !t.randomize;
              i.ANIMATE = a.ANIMATE = n.ANIMATE = t.animate;
              i.TILE = t.tile;
              i.TILING_PADDING_VERTICAL = typeof t.tilingPaddingVertical === "function" ? t.tilingPaddingVertical.call() : t.tilingPaddingVertical;
              i.TILING_PADDING_HORIZONTAL =
                typeof t.tilingPaddingHorizontal === "function" ? t.tilingPaddingHorizontal.call() : t.tilingPaddingHorizontal;
            };
            f.prototype.run = function () {
              var e;
              var t;
              var r = this.options;
              var n = (this.idToLNode = {});
              var a = (this.layout = new o());
              var i = this;
              i.stopped = false;
              this.cy = this.options.cy;
              this.cy.trigger({ type: "layoutstart", layout: this });
              var s = a.newGraphManager();
              this.gm = s;
              var l = this.options.eles.nodes();
              var u = this.options.eles.edges();
              this.root = s.addRoot();
              this.processChildrenList(this.root, this.getTopMostNodes(l), a);
              for (var c = 0; c < u.length; c++) {
                var v = u[c];
                var f = this.idToLNode[v.data("source")];
                var h = this.idToLNode[v.data("target")];
                if (f !== h && f.getEdgesBetween(h).length == 0) {
                  var d = s.add(a.newEdge(), f, h);
                  d.id = v.id();
                }
              }
              var p = function e(t, r) {
                if (typeof t === "number") {
                  t = r;
                }
                var n = t.data("id");
                var a = i.idToLNode[n];
                return { x: a.getRect().getCenterX(), y: a.getRect().getCenterY() };
              };
              var g = function n() {
                var o = function t() {
                  if (r.fit) {
                    r.cy.fit(r.eles, r.padding);
                  }
                  if (!e) {
                    e = true;
                    i.cy.one("layoutready", r.ready);
                    i.cy.trigger({ type: "layoutready", layout: i });
                  }
                };
                var s = i.options.refresh;
                var l;
                for (var u = 0; u < s && !l; u++) {
                  l = i.stopped || i.layout.tick();
                }
                if (l) {
                  if (a.checkLayoutSuccess() && !a.isSubLayout) {
                    a.doPostLayout();
                  }
                  if (a.tilingPostLayout) {
                    a.tilingPostLayout();
                  }
                  a.isLayoutFinished = true;
                  i.options.eles.nodes().positions(p);
                  o();
                  i.cy.one("layoutstop", i.options.stop);
                  i.cy.trigger({ type: "layoutstop", layout: i });
                  if (t) {
                    cancelAnimationFrame(t);
                  }
                  e = false;
                  return;
                }
                var c = i.layout.getPositionsData();
                r.eles.nodes().positions(function (e, t) {
                  if (typeof e === "number") {
                    e = t;
                  }
                  if (!e.isParent()) {
                    var r = e.id();
                    var n = c[r];
                    var a = e;
                    while (n == null) {
                      n = c[a.data("parent")] || c["DummyCompound_" + a.data("parent")];
                      c[r] = n;
                      a = a.parent()[0];
                      if (a == undefined) {
                        break;
                      }
                    }
                    if (n != null) {
                      return { x: n.x, y: n.y };
                    } else {
                      return { x: e.position("x"), y: e.position("y") };
                    }
                  }
                });
                o();
                t = requestAnimationFrame(n);
              };
              a.addListener("layoutstarted", function () {
                if (i.options.animate === "during") {
                  t = requestAnimationFrame(g);
                }
              });
              a.runLayout();
              if (this.options.animate !== "during") {
                i.options.eles.nodes().not(":parent").layoutPositions(i, i.options, p);
                e = false;
              }
              return this;
            };
            f.prototype.getTopMostNodes = function (e) {
              var t = {};
              for (var r = 0; r < e.length; r++) {
                t[e[r].id()] = true;
              }
              var n = e.filter(function (e, r) {
                if (typeof e === "number") {
                  e = r;
                }
                var n = e.parent()[0];
                while (n != null) {
                  if (t[n.id()]) {
                    return false;
                  }
                  n = n.parent()[0];
                }
                return true;
              });
              return n;
            };
            f.prototype.processChildrenList = function (e, t, r) {
              var n = t.length;
              for (var a = 0; a < n; a++) {
                var i = t[a];
                var o = i.children();
                var c;
                var v = i.layoutDimensions({ nodeDimensionsIncludeLabels: this.options.nodeDimensionsIncludeLabels });
                if (i.outerWidth() != null && i.outerHeight() != null) {
                  c = e.add(
                    new s(r.graphManager, new l(i.position("x") - v.w / 2, i.position("y") - v.h / 2), new u(parseFloat(v.w), parseFloat(v.h)))
                  );
                } else {
                  c = e.add(new s(this.graphManager));
                }
                c.id = i.data("id");
                c.paddingLeft = parseInt(i.css("padding"));
                c.paddingTop = parseInt(i.css("padding"));
                c.paddingRight = parseInt(i.css("padding"));
                c.paddingBottom = parseInt(i.css("padding"));
                if (this.options.nodeDimensionsIncludeLabels) {
                  if (i.isParent()) {
                    var f = i.boundingBox({ includeLabels: true, includeNodes: false }).w;
                    var h = i.boundingBox({ includeLabels: true, includeNodes: false }).h;
                    var d = i.css("text-halign");
                    c.labelWidth = f;
                    c.labelHeight = h;
                    c.labelPos = d;
                  }
                }
                this.idToLNode[i.data("id")] = c;
                if (isNaN(c.rect.x)) {
                  c.rect.x = 0;
                }
                if (isNaN(c.rect.y)) {
                  c.rect.y = 0;
                }
                if (o != null && o.length > 0) {
                  var p;
                  p = r.getGraphManager().add(r.newGraph(), c);
                  this.processChildrenList(p, o, r);
                }
              }
            };
            f.prototype.stop = function () {
              this.stopped = true;
              return this;
            };
            var d = function e(t) {
              t("layout", "cose-bilkent", f);
            };
            if (typeof cytoscape !== "undefined") {
              d(cytoscape);
            }
            e.exports = d;
          },
        ]);
      });
    },
    71377: function (e, t, r) {
      (function (t, r) {
        true ? (e.exports = r()) : 0;
      })(this, function () {
        "use strict";
        function e(t) {
          "@babel/helpers - typeof";
          return (
            (e =
              "function" == typeof Symbol && "symbol" == typeof Symbol.iterator
                ? function (e) {
                    return typeof e;
                  }
                : function (e) {
                    return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e;
                  }),
            e(t)
          );
        }
        function t(e, t) {
          if (!(e instanceof t)) {
            throw new TypeError("Cannot call a class as a function");
          }
        }
        function n(e, t) {
          for (var r = 0; r < t.length; r++) {
            var n = t[r];
            n.enumerable = n.enumerable || false;
            n.configurable = true;
            if ("value" in n) n.writable = true;
            Object.defineProperty(e, n.key, n);
          }
        }
        function a(e, t, r) {
          if (t) n(e.prototype, t);
          if (r) n(e, r);
          Object.defineProperty(e, "prototype", { writable: false });
          return e;
        }
        function i(e, t, r) {
          if (t in e) {
            Object.defineProperty(e, t, { value: r, enumerable: true, configurable: true, writable: true });
          } else {
            e[t] = r;
          }
          return e;
        }
        function o(e, t) {
          return s(e) || l(e, t) || u(e, t) || v();
        }
        function s(e) {
          if (Array.isArray(e)) return e;
        }
        function l(e, t) {
          var r = e == null ? null : (typeof Symbol !== "undefined" && e[Symbol.iterator]) || e["@@iterator"];
          if (r == null) return;
          var n = [];
          var a = true;
          var i = false;
          var o, s;
          try {
            for (r = r.call(e); !(a = (o = r.next()).done); a = true) {
              n.push(o.value);
              if (t && n.length === t) break;
            }
          } catch (l) {
            i = true;
            s = l;
          } finally {
            try {
              if (!a && r["return"] != null) r["return"]();
            } finally {
              if (i) throw s;
            }
          }
          return n;
        }
        function u(e, t) {
          if (!e) return;
          if (typeof e === "string") return c(e, t);
          var r = Object.prototype.toString.call(e).slice(8, -1);
          if (r === "Object" && e.constructor) r = e.constructor.name;
          if (r === "Map" || r === "Set") return Array.from(e);
          if (r === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)) return c(e, t);
        }
        function c(e, t) {
          if (t == null || t > e.length) t = e.length;
          for (var r = 0, n = new Array(t); r < t; r++) n[r] = e[r];
          return n;
        }
        function v() {
          throw new TypeError(
            "Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."
          );
        }
        var f = typeof window === "undefined" ? null : window;
        var h = f ? f.navigator : null;
        f ? f.document : null;
        var d = e("");
        var p = e({});
        var g = e(function () {});
        var y = typeof HTMLElement === "undefined" ? "undefined" : e(HTMLElement);
        var m = function e(t) {
          return t && t.instanceString && x(t.instanceString) ? t.instanceString() : null;
        };
        var b = function t(r) {
          return r != null && e(r) == d;
        };
        var x = function t(r) {
          return r != null && e(r) === g;
        };
        var w = function e(t) {
          return !N(t) && (Array.isArray ? Array.isArray(t) : t != null && t instanceof Array);
        };
        var E = function t(r) {
          return r != null && e(r) === p && !w(r) && r.constructor === Object;
        };
        var T = function t(r) {
          return r != null && e(r) === p;
        };
        var _ = function t(r) {
          return r != null && e(r) === e(1) && !isNaN(r);
        };
        var D = function e(t) {
          return _(t) && Math.floor(t) === t;
        };
        var C = function e(t) {
          if ("undefined" === y) {
            return undefined;
          } else {
            return null != t && t instanceof HTMLElement;
          }
        };
        var N = function e(t) {
          return A(t) || L(t);
        };
        var A = function e(t) {
          return m(t) === "collection" && t._private.single;
        };
        var L = function e(t) {
          return m(t) === "collection" && !t._private.single;
        };
        var I = function e(t) {
          return m(t) === "core";
        };
        var S = function e(t) {
          return m(t) === "stylesheet";
        };
        var k = function e(t) {
          return m(t) === "event";
        };
        var O = function e(t) {
          if (t === undefined || t === null) {
            return true;
          } else if (t === "" || t.match(/^\s+$/)) {
            return true;
          }
          return false;
        };
        var M = function e(t) {
          if (typeof HTMLElement === "undefined") {
            return false;
          } else {
            return t instanceof HTMLElement;
          }
        };
        var P = function e(t) {
          return E(t) && _(t.x1) && _(t.x2) && _(t.y1) && _(t.y2);
        };
        var R = function e(t) {
          return T(t) && x(t.then);
        };
        var B = function e() {
          return h && h.userAgent.match(/msie|trident|edge/i);
        };
        var F = function e(t, r) {
          if (!r) {
            r = function e() {
              if (arguments.length === 1) {
                return arguments[0];
              } else if (arguments.length === 0) {
                return "undefined";
              }
              var t = [];
              for (var r = 0; r < arguments.length; r++) {
                t.push(arguments[r]);
              }
              return t.join("$");
            };
          }
          var n = function e() {
            var n = this;
            var a = arguments;
            var i;
            var o = r.apply(n, a);
            var s = e.cache;
            if (!(i = s[o])) {
              i = s[o] = t.apply(n, a);
            }
            return i;
          };
          n.cache = {};
          return n;
        };
        var z = F(function (e) {
          return e.replace(/([A-Z])/g, function (e) {
            return "-" + e.toLowerCase();
          });
        });
        var G = F(function (e) {
          return e.replace(/(-\w)/g, function (e) {
            return e[1].toUpperCase();
          });
        });
        var Y = F(
          function (e, t) {
            return e + t[0].toUpperCase() + t.substring(1);
          },
          function (e, t) {
            return e + "$" + t;
          }
        );
        var X = function e(t) {
          if (O(t)) {
            return t;
          }
          return t.charAt(0).toUpperCase() + t.substring(1);
        };
        var V = "(?:[-+]?(?:(?:\\d+|\\d*\\.\\d+)(?:[Ee][+-]?\\d+)?))";
        var U = "rgb[a]?\\((" + V + "[%]?)\\s*,\\s*(" + V + "[%]?)\\s*,\\s*(" + V + "[%]?)(?:\\s*,\\s*(" + V + "))?\\)";
        var j = "rgb[a]?\\((?:" + V + "[%]?)\\s*,\\s*(?:" + V + "[%]?)\\s*,\\s*(?:" + V + "[%]?)(?:\\s*,\\s*(?:" + V + "))?\\)";
        var H = "hsl[a]?\\((" + V + ")\\s*,\\s*(" + V + "[%])\\s*,\\s*(" + V + "[%])(?:\\s*,\\s*(" + V + "))?\\)";
        var q = "hsl[a]?\\((?:" + V + ")\\s*,\\s*(?:" + V + "[%])\\s*,\\s*(?:" + V + "[%])(?:\\s*,\\s*(?:" + V + "))?\\)";
        var W = "\\#[0-9a-fA-F]{3}";
        var $ = "\\#[0-9a-fA-F]{6}";
        var K = function e(t, r) {
          if (t < r) {
            return -1;
          } else if (t > r) {
            return 1;
          } else {
            return 0;
          }
        };
        var Z = function e(t, r) {
          return -1 * K(t, r);
        };
        var Q =
          Object.assign != null
            ? Object.assign.bind(Object)
            : function (e) {
                var t = arguments;
                for (var r = 1; r < t.length; r++) {
                  var n = t[r];
                  if (n == null) {
                    continue;
                  }
                  var a = Object.keys(n);
                  for (var i = 0; i < a.length; i++) {
                    var o = a[i];
                    e[o] = n[o];
                  }
                }
                return e;
              };
        var J = function e(t) {
          if (!(t.length === 4 || t.length === 7) || t[0] !== "#") {
            return;
          }
          var r = t.length === 4;
          var n, a, i;
          var o = 16;
          if (r) {
            n = parseInt(t[1] + t[1], o);
            a = parseInt(t[2] + t[2], o);
            i = parseInt(t[3] + t[3], o);
          } else {
            n = parseInt(t[1] + t[2], o);
            a = parseInt(t[3] + t[4], o);
            i = parseInt(t[5] + t[6], o);
          }
          return [n, a, i];
        };
        var ee = function e(t) {
          var r;
          var n, a, i, o, s, l, u;
          function c(e, t, r) {
            if (r < 0) r += 1;
            if (r > 1) r -= 1;
            if (r < 1 / 6) return e + (t - e) * 6 * r;
            if (r < 1 / 2) return t;
            if (r < 2 / 3) return e + (t - e) * (2 / 3 - r) * 6;
            return e;
          }
          var v = new RegExp("^" + H + "$").exec(t);
          if (v) {
            n = parseInt(v[1]);
            if (n < 0) {
              n = (360 - ((-1 * n) % 360)) % 360;
            } else if (n > 360) {
              n = n % 360;
            }
            n /= 360;
            a = parseFloat(v[2]);
            if (a < 0 || a > 100) {
              return;
            }
            a = a / 100;
            i = parseFloat(v[3]);
            if (i < 0 || i > 100) {
              return;
            }
            i = i / 100;
            o = v[4];
            if (o !== undefined) {
              o = parseFloat(o);
              if (o < 0 || o > 1) {
                return;
              }
            }
            if (a === 0) {
              s = l = u = Math.round(i * 255);
            } else {
              var f = i < 0.5 ? i * (1 + a) : i + a - i * a;
              var h = 2 * i - f;
              s = Math.round(255 * c(h, f, n + 1 / 3));
              l = Math.round(255 * c(h, f, n));
              u = Math.round(255 * c(h, f, n - 1 / 3));
            }
            r = [s, l, u, o];
          }
          return r;
        };
        var te = function e(t) {
          var r;
          var n = new RegExp("^" + U + "$").exec(t);
          if (n) {
            r = [];
            var a = [];
            for (var i = 1; i <= 3; i++) {
              var o = n[i];
              if (o[o.length - 1] === "%") {
                a[i] = true;
              }
              o = parseFloat(o);
              if (a[i]) {
                o = (o / 100) * 255;
              }
              if (o < 0 || o > 255) {
                return;
              }
              r.push(Math.floor(o));
            }
            var s = a[1] || a[2] || a[3];
            var l = a[1] && a[2] && a[3];
            if (s && !l) {
              return;
            }
            var u = n[4];
            if (u !== undefined) {
              u = parseFloat(u);
              if (u < 0 || u > 1) {
                return;
              }
              r.push(u);
            }
          }
          return r;
        };
        var re = function e(t) {
          return ae[t.toLowerCase()];
        };
        var ne = function e(t) {
          return (w(t) ? t : null) || re(t) || J(t) || te(t) || ee(t);
        };
        var ae = {
          transparent: [0, 0, 0, 0],
          aliceblue: [240, 248, 255],
          antiquewhite: [250, 235, 215],
          aqua: [0, 255, 255],
          aquamarine: [127, 255, 212],
          azure: [240, 255, 255],
          beige: [245, 245, 220],
          bisque: [255, 228, 196],
          black: [0, 0, 0],
          blanchedalmond: [255, 235, 205],
          blue: [0, 0, 255],
          blueviolet: [138, 43, 226],
          brown: [165, 42, 42],
          burlywood: [222, 184, 135],
          cadetblue: [95, 158, 160],
          chartreuse: [127, 255, 0],
          chocolate: [210, 105, 30],
          coral: [255, 127, 80],
          cornflowerblue: [100, 149, 237],
          cornsilk: [255, 248, 220],
          crimson: [220, 20, 60],
          cyan: [0, 255, 255],
          darkblue: [0, 0, 139],
          darkcyan: [0, 139, 139],
          darkgoldenrod: [184, 134, 11],
          darkgray: [169, 169, 169],
          darkgreen: [0, 100, 0],
          darkgrey: [169, 169, 169],
          darkkhaki: [189, 183, 107],
          darkmagenta: [139, 0, 139],
          darkolivegreen: [85, 107, 47],
          darkorange: [255, 140, 0],
          darkorchid: [153, 50, 204],
          darkred: [139, 0, 0],
          darksalmon: [233, 150, 122],
          darkseagreen: [143, 188, 143],
          darkslateblue: [72, 61, 139],
          darkslategray: [47, 79, 79],
          darkslategrey: [47, 79, 79],
          darkturquoise: [0, 206, 209],
          darkviolet: [148, 0, 211],
          deeppink: [255, 20, 147],
          deepskyblue: [0, 191, 255],
          dimgray: [105, 105, 105],
          dimgrey: [105, 105, 105],
          dodgerblue: [30, 144, 255],
          firebrick: [178, 34, 34],
          floralwhite: [255, 250, 240],
          forestgreen: [34, 139, 34],
          fuchsia: [255, 0, 255],
          gainsboro: [220, 220, 220],
          ghostwhite: [248, 248, 255],
          gold: [255, 215, 0],
          goldenrod: [218, 165, 32],
          gray: [128, 128, 128],
          grey: [128, 128, 128],
          green: [0, 128, 0],
          greenyellow: [173, 255, 47],
          honeydew: [240, 255, 240],
          hotpink: [255, 105, 180],
          indianred: [205, 92, 92],
          indigo: [75, 0, 130],
          ivory: [255, 255, 240],
          khaki: [240, 230, 140],
          lavender: [230, 230, 250],
          lavenderblush: [255, 240, 245],
          lawngreen: [124, 252, 0],
          lemonchiffon: [255, 250, 205],
          lightblue: [173, 216, 230],
          lightcoral: [240, 128, 128],
          lightcyan: [224, 255, 255],
          lightgoldenrodyellow: [250, 250, 210],
          lightgray: [211, 211, 211],
          lightgreen: [144, 238, 144],
          lightgrey: [211, 211, 211],
          lightpink: [255, 182, 193],
          lightsalmon: [255, 160, 122],
          lightseagreen: [32, 178, 170],
          lightskyblue: [135, 206, 250],
          lightslategray: [119, 136, 153],
          lightslategrey: [119, 136, 153],
          lightsteelblue: [176, 196, 222],
          lightyellow: [255, 255, 224],
          lime: [0, 255, 0],
          limegreen: [50, 205, 50],
          linen: [250, 240, 230],
          magenta: [255, 0, 255],
          maroon: [128, 0, 0],
          mediumaquamarine: [102, 205, 170],
          mediumblue: [0, 0, 205],
          mediumorchid: [186, 85, 211],
          mediumpurple: [147, 112, 219],
          mediumseagreen: [60, 179, 113],
          mediumslateblue: [123, 104, 238],
          mediumspringgreen: [0, 250, 154],
          mediumturquoise: [72, 209, 204],
          mediumvioletred: [199, 21, 133],
          midnightblue: [25, 25, 112],
          mintcream: [245, 255, 250],
          mistyrose: [255, 228, 225],
          moccasin: [255, 228, 181],
          navajowhite: [255, 222, 173],
          navy: [0, 0, 128],
          oldlace: [253, 245, 230],
          olive: [128, 128, 0],
          olivedrab: [107, 142, 35],
          orange: [255, 165, 0],
          orangered: [255, 69, 0],
          orchid: [218, 112, 214],
          palegoldenrod: [238, 232, 170],
          palegreen: [152, 251, 152],
          paleturquoise: [175, 238, 238],
          palevioletred: [219, 112, 147],
          papayawhip: [255, 239, 213],
          peachpuff: [255, 218, 185],
          peru: [205, 133, 63],
          pink: [255, 192, 203],
          plum: [221, 160, 221],
          powderblue: [176, 224, 230],
          purple: [128, 0, 128],
          red: [255, 0, 0],
          rosybrown: [188, 143, 143],
          royalblue: [65, 105, 225],
          saddlebrown: [139, 69, 19],
          salmon: [250, 128, 114],
          sandybrown: [244, 164, 96],
          seagreen: [46, 139, 87],
          seashell: [255, 245, 238],
          sienna: [160, 82, 45],
          silver: [192, 192, 192],
          skyblue: [135, 206, 235],
          slateblue: [106, 90, 205],
          slategray: [112, 128, 144],
          slategrey: [112, 128, 144],
          snow: [255, 250, 250],
          springgreen: [0, 255, 127],
          steelblue: [70, 130, 180],
          tan: [210, 180, 140],
          teal: [0, 128, 128],
          thistle: [216, 191, 216],
          tomato: [255, 99, 71],
          turquoise: [64, 224, 208],
          violet: [238, 130, 238],
          wheat: [245, 222, 179],
          white: [255, 255, 255],
          whitesmoke: [245, 245, 245],
          yellow: [255, 255, 0],
          yellowgreen: [154, 205, 50],
        };
        var ie = function e(t) {
          var r = t.map;
          var n = t.keys;
          var a = n.length;
          for (var i = 0; i < a; i++) {
            var o = n[i];
            if (E(o)) {
              throw Error("Tried to set map with object key");
            }
            if (i < n.length - 1) {
              if (r[o] == null) {
                r[o] = {};
              }
              r = r[o];
            } else {
              r[o] = t.value;
            }
          }
        };
        var oe = function e(t) {
          var r = t.map;
          var n = t.keys;
          var a = n.length;
          for (var i = 0; i < a; i++) {
            var o = n[i];
            if (E(o)) {
              throw Error("Tried to get map with object key");
            }
            r = r[o];
            if (r == null) {
              return r;
            }
          }
          return r;
        };
        function se(e) {
          var t = typeof e;
          return e != null && (t == "object" || t == "function");
        }
        var le = se;
        var ue =
          typeof globalThis !== "undefined"
            ? globalThis
            : typeof window !== "undefined"
              ? window
              : typeof r.g !== "undefined"
                ? r.g
                : typeof self !== "undefined"
                  ? self
                  : {};
        function ce(e, t) {
          return (t = { exports: {} }), e(t, t.exports), t.exports;
        }
        var ve = typeof ue == "object" && ue && ue.Object === Object && ue;
        var fe = ve;
        var he = typeof self == "object" && self && self.Object === Object && self;
        var de = fe || he || Function("return this")();
        var pe = de;
        var ge = function () {
          return pe.Date.now();
        };
        var ye = ge;
        var me = /\s/;
        function be(e) {
          var t = e.length;
          while (t-- && me.test(e.charAt(t))) {}
          return t;
        }
        var xe = be;
        var we = /^\s+/;
        function Ee(e) {
          return e ? e.slice(0, xe(e) + 1).replace(we, "") : e;
        }
        var Te = Ee;
        var _e = pe.Symbol;
        var De = _e;
        var Ce = Object.prototype;
        var Ne = Ce.hasOwnProperty;
        var Ae = Ce.toString;
        var Le = De ? De.toStringTag : undefined;
        function Ie(e) {
          var t = Ne.call(e, Le),
            r = e[Le];
          try {
            e[Le] = undefined;
            var n = true;
          } catch (i) {}
          var a = Ae.call(e);
          if (n) {
            if (t) {
              e[Le] = r;
            } else {
              delete e[Le];
            }
          }
          return a;
        }
        var Se = Ie;
        var ke = Object.prototype;
        var Oe = ke.toString;
        function Me(e) {
          return Oe.call(e);
        }
        var Pe = Me;
        var Re = "[object Null]",
          Be = "[object Undefined]";
        var Fe = De ? De.toStringTag : undefined;
        function ze(e) {
          if (e == null) {
            return e === undefined ? Be : Re;
          }
          return Fe && Fe in Object(e) ? Se(e) : Pe(e);
        }
        var Ge = ze;
        function Ye(e) {
          return e != null && typeof e == "object";
        }
        var Xe = Ye;
        var Ve = "[object Symbol]";
        function Ue(e) {
          return typeof e == "symbol" || (Xe(e) && Ge(e) == Ve);
        }
        var je = Ue;
        var He = 0 / 0;
        var qe = /^[-+]0x[0-9a-f]+$/i;
        var We = /^0b[01]+$/i;
        var $e = /^0o[0-7]+$/i;
        var Ke = parseInt;
        function Ze(e) {
          if (typeof e == "number") {
            return e;
          }
          if (je(e)) {
            return He;
          }
          if (le(e)) {
            var t = typeof e.valueOf == "function" ? e.valueOf() : e;
            e = le(t) ? t + "" : t;
          }
          if (typeof e != "string") {
            return e === 0 ? e : +e;
          }
          e = Te(e);
          var r = We.test(e);
          return r || $e.test(e) ? Ke(e.slice(2), r ? 2 : 8) : qe.test(e) ? He : +e;
        }
        var Qe = Ze;
        var Je = "Expected a function";
        var et = Math.max,
          tt = Math.min;
        function rt(e, t, r) {
          var n,
            a,
            i,
            o,
            s,
            l,
            u = 0,
            c = false,
            v = false,
            f = true;
          if (typeof e != "function") {
            throw new TypeError(Je);
          }
          t = Qe(t) || 0;
          if (le(r)) {
            c = !!r.leading;
            v = "maxWait" in r;
            i = v ? et(Qe(r.maxWait) || 0, t) : i;
            f = "trailing" in r ? !!r.trailing : f;
          }
          function h(t) {
            var r = n,
              i = a;
            n = a = undefined;
            u = t;
            o = e.apply(i, r);
            return o;
          }
          function d(e) {
            u = e;
            s = setTimeout(y, t);
            return c ? h(e) : o;
          }
          function p(e) {
            var r = e - l,
              n = e - u,
              a = t - r;
            return v ? tt(a, i - n) : a;
          }
          function g(e) {
            var r = e - l,
              n = e - u;
            return l === undefined || r >= t || r < 0 || (v && n >= i);
          }
          function y() {
            var e = ye();
            if (g(e)) {
              return m(e);
            }
            s = setTimeout(y, p(e));
          }
          function m(e) {
            s = undefined;
            if (f && n) {
              return h(e);
            }
            n = a = undefined;
            return o;
          }
          function b() {
            if (s !== undefined) {
              clearTimeout(s);
            }
            u = 0;
            n = l = a = s = undefined;
          }
          function x() {
            return s === undefined ? o : m(ye());
          }
          function w() {
            var e = ye(),
              r = g(e);
            n = arguments;
            a = this;
            l = e;
            if (r) {
              if (s === undefined) {
                return d(l);
              }
              if (v) {
                clearTimeout(s);
                s = setTimeout(y, t);
                return h(l);
              }
            }
            if (s === undefined) {
              s = setTimeout(y, t);
            }
            return o;
          }
          w.cancel = b;
          w.flush = x;
          return w;
        }
        var nt = rt;
        var at = f ? f.performance : null;
        var it =
          at && at.now
            ? function () {
                return at.now();
              }
            : function () {
                return Date.now();
              };
        var ot = (function () {
          if (f) {
            if (f.requestAnimationFrame) {
              return function (e) {
                f.requestAnimationFrame(e);
              };
            } else if (f.mozRequestAnimationFrame) {
              return function (e) {
                f.mozRequestAnimationFrame(e);
              };
            } else if (f.webkitRequestAnimationFrame) {
              return function (e) {
                f.webkitRequestAnimationFrame(e);
              };
            } else if (f.msRequestAnimationFrame) {
              return function (e) {
                f.msRequestAnimationFrame(e);
              };
            }
          }
          return function (e) {
            if (e) {
              setTimeout(function () {
                e(it());
              }, 1e3 / 60);
            }
          };
        })();
        var st = function e(t) {
          return ot(t);
        };
        var lt = it;
        var ut = 9261;
        var ct = 65599;
        var vt = 5381;
        var ft = function e(t) {
          var r = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : ut;
          var n = r;
          var a;
          for (;;) {
            a = t.next();
            if (a.done) {
              break;
            }
            n = (n * ct + a.value) | 0;
          }
          return n;
        };
        var ht = function e(t) {
          var r = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : ut;
          return (r * ct + t) | 0;
        };
        var dt = function e(t) {
          var r = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : vt;
          return ((r << 5) + r + t) | 0;
        };
        var pt = function e(t, r) {
          return t * 2097152 + r;
        };
        var gt = function e(t) {
          return t[0] * 2097152 + t[1];
        };
        var yt = function e(t, r) {
          return [ht(t[0], r[0]), dt(t[1], r[1])];
        };
        var mt = function e(t, r) {
          var n = { value: 0, done: false };
          var a = 0;
          var i = t.length;
          var o = {
            next: function e() {
              if (a < i) {
                n.value = t[a++];
              } else {
                n.done = true;
              }
              return n;
            },
          };
          return ft(o, r);
        };
        var bt = function e(t, r) {
          var n = { value: 0, done: false };
          var a = 0;
          var i = t.length;
          var o = {
            next: function e() {
              if (a < i) {
                n.value = t.charCodeAt(a++);
              } else {
                n.done = true;
              }
              return n;
            },
          };
          return ft(o, r);
        };
        var xt = function e() {
          return wt(arguments);
        };
        var wt = function e(t) {
          var r;
          for (var n = 0; n < t.length; n++) {
            var a = t[n];
            if (n === 0) {
              r = bt(a);
            } else {
              r = bt(a, r);
            }
          }
          return r;
        };
        var Et = true;
        var Tt = console.warn != null;
        var _t = console.trace != null;
        var Dt = Number.MAX_SAFE_INTEGER || 9007199254740991;
        var Ct = function e() {
          return true;
        };
        var Nt = function e() {
          return false;
        };
        var At = function e() {
          return 0;
        };
        var Lt = function e() {};
        var It = function e(t) {
          throw new Error(t);
        };
        var St = function e(t) {
          if (t !== undefined) {
            Et = !!t;
          } else {
            return Et;
          }
        };
        var kt = function e(t) {
          if (!St()) {
            return;
          }
          if (Tt) {
            console.warn(t);
          } else {
            console.log(t);
            if (_t) {
              console.trace();
            }
          }
        };
        var Ot = function e(t) {
          return Q({}, t);
        };
        var Mt = function e(t) {
          if (t == null) {
            return t;
          }
          if (w(t)) {
            return t.slice();
          } else if (E(t)) {
            return Ot(t);
          } else {
            return t;
          }
        };
        var Pt = function e(t) {
          return t.slice();
        };
        var Rt = function e(t, r) {
          for (r = t = ""; t++ < 36; r += (t * 51) & 52 ? (t ^ 15 ? 8 ^ (Math.random() * (t ^ 20 ? 16 : 4)) : 4).toString(16) : "-") {}
          return r;
        };
        var Bt = {};
        var Ft = function e() {
          return Bt;
        };
        var zt = function e(t) {
          var r = Object.keys(t);
          return function (e) {
            var n = {};
            for (var a = 0; a < r.length; a++) {
              var i = r[a];
              var o = e == null ? undefined : e[i];
              n[i] = o === undefined ? t[i] : o;
            }
            return n;
          };
        };
        var Gt = function e(t, r, n) {
          for (var a = t.length - 1; a >= 0; a--) {
            if (t[a] === r) {
              t.splice(a, 1);
              if (n) {
                break;
              }
            }
          }
        };
        var Yt = function e(t) {
          t.splice(0, t.length);
        };
        var Xt = function e(t, r) {
          for (var n = 0; n < r.length; n++) {
            var a = r[n];
            t.push(a);
          }
        };
        var Vt = function e(t, r, n) {
          if (n) {
            r = Y(n, r);
          }
          return t[r];
        };
        var Ut = function e(t, r, n, a) {
          if (n) {
            r = Y(n, r);
          }
          t[r] = a;
        };
        var jt = (function () {
          function e() {
            t(this, e);
            this._obj = {};
          }
          a(e, [
            {
              key: "set",
              value: function e(t, r) {
                this._obj[t] = r;
                return this;
              },
            },
            {
              key: "delete",
              value: function e(t) {
                this._obj[t] = undefined;
                return this;
              },
            },
            {
              key: "clear",
              value: function e() {
                this._obj = {};
              },
            },
            {
              key: "has",
              value: function e(t) {
                return this._obj[t] !== undefined;
              },
            },
            {
              key: "get",
              value: function e(t) {
                return this._obj[t];
              },
            },
          ]);
          return e;
        })();
        var Ht = typeof Map !== "undefined" ? Map : jt;
        var qt = "undefined";
        var Wt = (function () {
          function e(r) {
            t(this, e);
            this._obj = Object.create(null);
            this.size = 0;
            if (r != null) {
              var n;
              if (r.instanceString != null && r.instanceString() === this.instanceString()) {
                n = r.toArray();
              } else {
                n = r;
              }
              for (var a = 0; a < n.length; a++) {
                this.add(n[a]);
              }
            }
          }
          a(e, [
            {
              key: "instanceString",
              value: function e() {
                return "set";
              },
            },
            {
              key: "add",
              value: function e(t) {
                var r = this._obj;
                if (r[t] !== 1) {
                  r[t] = 1;
                  this.size++;
                }
              },
            },
            {
              key: "delete",
              value: function e(t) {
                var r = this._obj;
                if (r[t] === 1) {
                  r[t] = 0;
                  this.size--;
                }
              },
            },
            {
              key: "clear",
              value: function e() {
                this._obj = Object.create(null);
              },
            },
            {
              key: "has",
              value: function e(t) {
                return this._obj[t] === 1;
              },
            },
            {
              key: "toArray",
              value: function e() {
                var t = this;
                return Object.keys(this._obj).filter(function (e) {
                  return t.has(e);
                });
              },
            },
            {
              key: "forEach",
              value: function e(t, r) {
                return this.toArray().forEach(t, r);
              },
            },
          ]);
          return e;
        })();
        var $t = (typeof Set === "undefined" ? "undefined" : e(Set)) !== qt ? Set : Wt;
        var Kt = function e(t, r) {
          var n = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : true;
          if (t === undefined || r === undefined || !I(t)) {
            It("An element must have a core reference and parameters set");
            return;
          }
          var a = r.group;
          if (a == null) {
            if (r.data && r.data.source != null && r.data.target != null) {
              a = "edges";
            } else {
              a = "nodes";
            }
          }
          if (a !== "nodes" && a !== "edges") {
            It("An element must be of type `nodes` or `edges`; you specified `" + a + "`");
            return;
          }
          this.length = 1;
          this[0] = this;
          var i = (this._private = {
            cy: t,
            single: true,
            data: r.data || {},
            position: r.position || { x: 0, y: 0 },
            autoWidth: undefined,
            autoHeight: undefined,
            autoPadding: undefined,
            compoundBoundsClean: false,
            listeners: [],
            group: a,
            style: {},
            rstyle: {},
            styleCxts: [],
            styleKeys: {},
            removed: true,
            selected: r.selected ? true : false,
            selectable: r.selectable === undefined ? true : r.selectable ? true : false,
            locked: r.locked ? true : false,
            grabbed: false,
            grabbable: r.grabbable === undefined ? true : r.grabbable ? true : false,
            pannable: r.pannable === undefined ? (a === "edges" ? true : false) : r.pannable ? true : false,
            active: false,
            classes: new $t(),
            animation: { current: [], queue: [] },
            rscratch: {},
            scratch: r.scratch || {},
            edges: [],
            children: [],
            parent: r.parent && r.parent.isNode() ? r.parent : null,
            traversalCache: {},
            backgrounding: false,
            bbCache: null,
            bbCacheShift: { x: 0, y: 0 },
            bodyBounds: null,
            overlayBounds: null,
            labelBounds: { all: null, source: null, target: null, main: null },
            arrowBounds: { source: null, target: null, "mid-source": null, "mid-target": null },
          });
          if (i.position.x == null) {
            i.position.x = 0;
          }
          if (i.position.y == null) {
            i.position.y = 0;
          }
          if (r.renderedPosition) {
            var o = r.renderedPosition;
            var s = t.pan();
            var l = t.zoom();
            i.position = { x: (o.x - s.x) / l, y: (o.y - s.y) / l };
          }
          var u = [];
          if (w(r.classes)) {
            u = r.classes;
          } else if (b(r.classes)) {
            u = r.classes.split(/\s+/);
          }
          for (var c = 0, v = u.length; c < v; c++) {
            var f = u[c];
            if (!f || f === "") {
              continue;
            }
            i.classes.add(f);
          }
          this.createEmitter();
          var h = r.style || r.css;
          if (h) {
            kt("Setting a `style` bypass at element creation should be done only when absolutely necessary.  Try to use the stylesheet instead.");
            this.style(h);
          }
          if (n === undefined || n) {
            this.restore();
          }
        };
        var Zt = function e(t) {
          t = { bfs: t.bfs || !t.dfs, dfs: t.dfs || !t.bfs };
          return function e(r, n, a) {
            var i;
            if (E(r) && !N(r)) {
              i = r;
              r = i.roots || i.root;
              n = i.visit;
              a = i.directed;
            }
            a = arguments.length === 2 && !x(n) ? n : a;
            n = x(n) ? n : function () {};
            var o = this._private.cy;
            var s = (r = b(r) ? this.filter(r) : r);
            var l = [];
            var u = [];
            var c = {};
            var v = {};
            var f = {};
            var h = 0;
            var d;
            var p = this.byGroup(),
              g = p.nodes,
              y = p.edges;
            for (var m = 0; m < s.length; m++) {
              var w = s[m];
              var T = w.id();
              if (w.isNode()) {
                l.unshift(w);
                if (t.bfs) {
                  f[T] = true;
                  u.push(w);
                }
                v[T] = 0;
              }
            }
            var _ = function e() {
              var r = t.bfs ? l.shift() : l.pop();
              var i = r.id();
              if (t.dfs) {
                if (f[i]) {
                  return "continue";
                }
                f[i] = true;
                u.push(r);
              }
              var o = v[i];
              var s = c[i];
              var p = s != null ? s.source() : null;
              var m = s != null ? s.target() : null;
              var b = s == null ? undefined : r.same(p) ? m[0] : p[0];
              var x = void 0;
              x = n(r, s, b, h++, o);
              if (x === true) {
                d = r;
                return "break";
              }
              if (x === false) {
                return "break";
              }
              var w = r.connectedEdges().filter(function (e) {
                return (!a || e.source().same(r)) && y.has(e);
              });
              for (var E = 0; E < w.length; E++) {
                var T = w[E];
                var _ = T.connectedNodes().filter(function (e) {
                  return !e.same(r) && g.has(e);
                });
                var D = _.id();
                if (_.length !== 0 && !f[D]) {
                  _ = _[0];
                  l.push(_);
                  if (t.bfs) {
                    f[D] = true;
                    u.push(_);
                  }
                  c[D] = T;
                  v[D] = v[i] + 1;
                }
              }
            };
            while (l.length !== 0) {
              var D = _();
              if (D === "continue") continue;
              if (D === "break") break;
            }
            var C = o.collection();
            for (var A = 0; A < u.length; A++) {
              var L = u[A];
              var I = c[L.id()];
              if (I != null) {
                C.push(I);
              }
              C.push(L);
            }
            return { path: o.collection(C), found: o.collection(d) };
          };
        };
        var Qt = { breadthFirstSearch: Zt({ bfs: true }), depthFirstSearch: Zt({ dfs: true }) };
        Qt.bfs = Qt.breadthFirstSearch;
        Qt.dfs = Qt.depthFirstSearch;
        var Jt = ce(function (e, t) {
          (function () {
            var t, r, n, a, i, o, s, l, u, c, v, f, h, d, p;
            (n = Math.floor), (c = Math.min);
            r = function (e, t) {
              if (e < t) {
                return -1;
              }
              if (e > t) {
                return 1;
              }
              return 0;
            };
            u = function (e, t, a, i, o) {
              var s;
              if (a == null) {
                a = 0;
              }
              if (o == null) {
                o = r;
              }
              if (a < 0) {
                throw new Error("lo must be non-negative");
              }
              if (i == null) {
                i = e.length;
              }
              while (a < i) {
                s = n((a + i) / 2);
                if (o(t, e[s]) < 0) {
                  i = s;
                } else {
                  a = s + 1;
                }
              }
              return [].splice.apply(e, [a, a - a].concat(t)), t;
            };
            o = function (e, t, n) {
              if (n == null) {
                n = r;
              }
              e.push(t);
              return d(e, 0, e.length - 1, n);
            };
            i = function (e, t) {
              var n, a;
              if (t == null) {
                t = r;
              }
              n = e.pop();
              if (e.length) {
                a = e[0];
                e[0] = n;
                p(e, 0, t);
              } else {
                a = n;
              }
              return a;
            };
            l = function (e, t, n) {
              var a;
              if (n == null) {
                n = r;
              }
              a = e[0];
              e[0] = t;
              p(e, 0, n);
              return a;
            };
            s = function (e, t, n) {
              var a;
              if (n == null) {
                n = r;
              }
              if (e.length && n(e[0], t) < 0) {
                (a = [e[0], t]), (t = a[0]), (e[0] = a[1]);
                p(e, 0, n);
              }
              return t;
            };
            a = function (e, t) {
              var a, i, o, s, l, u;
              if (t == null) {
                t = r;
              }
              s = function () {
                u = [];
                for (var t = 0, r = n(e.length / 2); 0 <= r ? t < r : t > r; 0 <= r ? t++ : t--) {
                  u.push(t);
                }
                return u;
              }
                .apply(this)
                .reverse();
              l = [];
              for (i = 0, o = s.length; i < o; i++) {
                a = s[i];
                l.push(p(e, a, t));
              }
              return l;
            };
            h = function (e, t, n) {
              var a;
              if (n == null) {
                n = r;
              }
              a = e.indexOf(t);
              if (a === -1) {
                return;
              }
              d(e, 0, a, n);
              return p(e, a, n);
            };
            v = function (e, t, n) {
              var i, o, l, u, c;
              if (n == null) {
                n = r;
              }
              o = e.slice(0, t);
              if (!o.length) {
                return o;
              }
              a(o, n);
              c = e.slice(t);
              for (l = 0, u = c.length; l < u; l++) {
                i = c[l];
                s(o, i, n);
              }
              return o.sort(n).reverse();
            };
            f = function (e, t, n) {
              var o, s, l, v, f, h, d, p, g;
              if (n == null) {
                n = r;
              }
              if (t * 10 <= e.length) {
                l = e.slice(0, t).sort(n);
                if (!l.length) {
                  return l;
                }
                s = l[l.length - 1];
                d = e.slice(t);
                for (v = 0, h = d.length; v < h; v++) {
                  o = d[v];
                  if (n(o, s) < 0) {
                    u(l, o, 0, null, n);
                    l.pop();
                    s = l[l.length - 1];
                  }
                }
                return l;
              }
              a(e, n);
              g = [];
              for (f = 0, p = c(t, e.length); 0 <= p ? f < p : f > p; 0 <= p ? ++f : --f) {
                g.push(i(e, n));
              }
              return g;
            };
            d = function (e, t, n, a) {
              var i, o, s;
              if (a == null) {
                a = r;
              }
              i = e[n];
              while (n > t) {
                s = (n - 1) >> 1;
                o = e[s];
                if (a(i, o) < 0) {
                  e[n] = o;
                  n = s;
                  continue;
                }
                break;
              }
              return (e[n] = i);
            };
            p = function (e, t, n) {
              var a, i, o, s, l;
              if (n == null) {
                n = r;
              }
              i = e.length;
              l = t;
              o = e[t];
              a = 2 * t + 1;
              while (a < i) {
                s = a + 1;
                if (s < i && !(n(e[a], e[s]) < 0)) {
                  a = s;
                }
                e[t] = e[a];
                t = a;
                a = 2 * t + 1;
              }
              e[t] = o;
              return d(e, l, t, n);
            };
            t = (function () {
              e.push = o;
              e.pop = i;
              e.replace = l;
              e.pushpop = s;
              e.heapify = a;
              e.updateItem = h;
              e.nlargest = v;
              e.nsmallest = f;
              function e(e) {
                this.cmp = e != null ? e : r;
                this.nodes = [];
              }
              e.prototype.push = function (e) {
                return o(this.nodes, e, this.cmp);
              };
              e.prototype.pop = function () {
                return i(this.nodes, this.cmp);
              };
              e.prototype.peek = function () {
                return this.nodes[0];
              };
              e.prototype.contains = function (e) {
                return this.nodes.indexOf(e) !== -1;
              };
              e.prototype.replace = function (e) {
                return l(this.nodes, e, this.cmp);
              };
              e.prototype.pushpop = function (e) {
                return s(this.nodes, e, this.cmp);
              };
              e.prototype.heapify = function () {
                return a(this.nodes, this.cmp);
              };
              e.prototype.updateItem = function (e) {
                return h(this.nodes, e, this.cmp);
              };
              e.prototype.clear = function () {
                return (this.nodes = []);
              };
              e.prototype.empty = function () {
                return this.nodes.length === 0;
              };
              e.prototype.size = function () {
                return this.nodes.length;
              };
              e.prototype.clone = function () {
                var t;
                t = new e();
                t.nodes = this.nodes.slice(0);
                return t;
              };
              e.prototype.toArray = function () {
                return this.nodes.slice(0);
              };
              e.prototype.insert = e.prototype.push;
              e.prototype.top = e.prototype.peek;
              e.prototype.front = e.prototype.peek;
              e.prototype.has = e.prototype.contains;
              e.prototype.copy = e.prototype.clone;
              return e;
            })();
            (function (t, r) {
              {
                return (e.exports = r());
              }
            })(this, function () {
              return t;
            });
          }).call(ue);
        });
        var er = Jt;
        var tr = zt({
          root: null,
          weight: function e(t) {
            return 1;
          },
          directed: false,
        });
        var rr = {
          dijkstra: function e(t) {
            if (!E(t)) {
              var r = arguments;
              t = { root: r[0], weight: r[1], directed: r[2] };
            }
            var n = tr(t),
              a = n.root,
              i = n.weight,
              o = n.directed;
            var s = this;
            var l = i;
            var u = b(a) ? this.filter(a)[0] : a[0];
            var c = {};
            var v = {};
            var f = {};
            var h = this.byGroup(),
              d = h.nodes,
              p = h.edges;
            p.unmergeBy(function (e) {
              return e.isLoop();
            });
            var g = function e(t) {
              return c[t.id()];
            };
            var y = function e(t, r) {
              c[t.id()] = r;
              m.updateItem(t);
            };
            var m = new er(function (e, t) {
              return g(e) - g(t);
            });
            for (var x = 0; x < d.length; x++) {
              var w = d[x];
              c[w.id()] = w.same(u) ? 0 : Infinity;
              m.push(w);
            }
            var T = function e(t, r) {
              var n = (o ? t.edgesTo(r) : t.edgesWith(r)).intersect(p);
              var a = Infinity;
              var i;
              for (var s = 0; s < n.length; s++) {
                var u = n[s];
                var c = l(u);
                if (c < a || !i) {
                  a = c;
                  i = u;
                }
              }
              return { edge: i, dist: a };
            };
            while (m.size() > 0) {
              var _ = m.pop();
              var D = g(_);
              var C = _.id();
              f[C] = D;
              if (D === Infinity) {
                continue;
              }
              var N = _.neighborhood().intersect(d);
              for (var A = 0; A < N.length; A++) {
                var L = N[A];
                var I = L.id();
                var S = T(_, L);
                var k = D + S.dist;
                if (k < g(L)) {
                  y(L, k);
                  v[I] = { node: _, edge: S.edge };
                }
              }
            }
            return {
              distanceTo: function e(t) {
                var r = b(t) ? d.filter(t)[0] : t[0];
                return f[r.id()];
              },
              pathTo: function e(t) {
                var r = b(t) ? d.filter(t)[0] : t[0];
                var n = [];
                var a = r;
                var i = a.id();
                if (r.length > 0) {
                  n.unshift(r);
                  while (v[i]) {
                    var o = v[i];
                    n.unshift(o.edge);
                    n.unshift(o.node);
                    a = o.node;
                    i = a.id();
                  }
                }
                return s.spawn(n);
              },
            };
          },
        };
        var nr = {
          kruskal: function e(t) {
            t =
              t ||
              function (e) {
                return 1;
              };
            var r = this.byGroup(),
              n = r.nodes,
              a = r.edges;
            var i = n.length;
            var o = new Array(i);
            var s = n;
            var l = function e(t) {
              for (var r = 0; r < o.length; r++) {
                var n = o[r];
                if (n.has(t)) {
                  return r;
                }
              }
            };
            for (var u = 0; u < i; u++) {
              o[u] = this.spawn(n[u]);
            }
            var c = a.sort(function (e, r) {
              return t(e) - t(r);
            });
            for (var v = 0; v < c.length; v++) {
              var f = c[v];
              var h = f.source()[0];
              var d = f.target()[0];
              var p = l(h);
              var g = l(d);
              var y = o[p];
              var m = o[g];
              if (p !== g) {
                s.merge(f);
                y.merge(m);
                o.splice(g, 1);
              }
            }
            return s;
          },
        };
        var ar = zt({
          root: null,
          goal: null,
          weight: function e(t) {
            return 1;
          },
          heuristic: function e(t) {
            return 0;
          },
          directed: false,
        });
        var ir = {
          aStar: function e(t) {
            var r = this.cy();
            var n = ar(t),
              a = n.root,
              i = n.goal,
              o = n.heuristic,
              s = n.directed,
              l = n.weight;
            a = r.collection(a)[0];
            i = r.collection(i)[0];
            var u = a.id();
            var c = i.id();
            var v = {};
            var f = {};
            var h = {};
            var d = new er(function (e, t) {
              return f[e.id()] - f[t.id()];
            });
            var p = new $t();
            var g = {};
            var y = {};
            var m = function e(t, r) {
              d.push(t);
              p.add(r);
            };
            var b, x;
            var w = function e() {
              b = d.pop();
              x = b.id();
              p["delete"](x);
            };
            var E = function e(t) {
              return p.has(t);
            };
            m(a, u);
            v[u] = 0;
            f[u] = o(a);
            var T = 0;
            while (d.size() > 0) {
              w();
              T++;
              if (x === c) {
                var _ = [];
                var D = i;
                var C = c;
                var N = y[C];
                for (;;) {
                  _.unshift(D);
                  if (N != null) {
                    _.unshift(N);
                  }
                  D = g[C];
                  if (D == null) {
                    break;
                  }
                  C = D.id();
                  N = y[C];
                }
                return { found: true, distance: v[x], path: this.spawn(_), steps: T };
              }
              h[x] = true;
              var A = b._private.edges;
              for (var L = 0; L < A.length; L++) {
                var I = A[L];
                if (!this.hasElementWithId(I.id())) {
                  continue;
                }
                if (s && I.data("source") !== x) {
                  continue;
                }
                var S = I.source();
                var k = I.target();
                var O = S.id() !== x ? S : k;
                var M = O.id();
                if (!this.hasElementWithId(M)) {
                  continue;
                }
                if (h[M]) {
                  continue;
                }
                var P = v[x] + l(I);
                if (!E(M)) {
                  v[M] = P;
                  f[M] = P + o(O);
                  m(O, M);
                  g[M] = b;
                  y[M] = I;
                  continue;
                }
                if (P < v[M]) {
                  v[M] = P;
                  f[M] = P + o(O);
                  g[M] = b;
                  y[M] = I;
                }
              }
            }
            return { found: false, distance: undefined, path: undefined, steps: T };
          },
        };
        var or = zt({
          weight: function e(t) {
            return 1;
          },
          directed: false,
        });
        var sr = {
          floydWarshall: function e(t) {
            var r = this.cy();
            var n = or(t),
              a = n.weight,
              i = n.directed;
            var o = a;
            var s = this.byGroup(),
              l = s.nodes,
              u = s.edges;
            var c = l.length;
            var v = c * c;
            var f = function e(t) {
              return l.indexOf(t);
            };
            var h = function e(t) {
              return l[t];
            };
            var d = new Array(v);
            for (var p = 0; p < v; p++) {
              var g = p % c;
              var y = (p - g) / c;
              if (y === g) {
                d[p] = 0;
              } else {
                d[p] = Infinity;
              }
            }
            var m = new Array(v);
            var x = new Array(v);
            for (var w = 0; w < u.length; w++) {
              var E = u[w];
              var T = E.source()[0];
              var _ = E.target()[0];
              if (T === _) {
                continue;
              }
              var D = f(T);
              var C = f(_);
              var N = D * c + C;
              var A = o(E);
              if (d[N] > A) {
                d[N] = A;
                m[N] = C;
                x[N] = E;
              }
              if (!i) {
                var L = C * c + D;
                if (!i && d[L] > A) {
                  d[L] = A;
                  m[L] = D;
                  x[L] = E;
                }
              }
            }
            for (var I = 0; I < c; I++) {
              for (var S = 0; S < c; S++) {
                var k = S * c + I;
                for (var O = 0; O < c; O++) {
                  var M = S * c + O;
                  var P = I * c + O;
                  if (d[k] + d[P] < d[M]) {
                    d[M] = d[k] + d[P];
                    m[M] = m[k];
                  }
                }
              }
            }
            var R = function e(t) {
              return (b(t) ? r.filter(t) : t)[0];
            };
            var B = function e(t) {
              return f(R(t));
            };
            var F = {
              distance: function e(t, r) {
                var n = B(t);
                var a = B(r);
                return d[n * c + a];
              },
              path: function e(t, n) {
                var a = B(t);
                var i = B(n);
                var o = h(a);
                if (a === i) {
                  return o.collection();
                }
                if (m[a * c + i] == null) {
                  return r.collection();
                }
                var e = r.collection();
                var s = a;
                var l;
                e.merge(o);
                while (a !== i) {
                  s = a;
                  a = m[a * c + i];
                  l = x[s * c + a];
                  e.merge(l);
                  e.merge(h(a));
                }
                return e;
              },
            };
            return F;
          },
        };
        var lr = zt({
          weight: function e(t) {
            return 1;
          },
          directed: false,
          root: null,
        });
        var ur = {
          bellmanFord: function e(t) {
            var r = this;
            var n = lr(t),
              a = n.weight,
              i = n.directed,
              o = n.root;
            var s = a;
            var l = this;
            var u = this.cy();
            var c = this.byGroup(),
              v = c.edges,
              f = c.nodes;
            var h = f.length;
            var d = new Ht();
            var p = false;
            var g = [];
            o = u.collection(o)[0];
            v.unmergeBy(function (e) {
              return e.isLoop();
            });
            var y = v.length;
            var m = function e(t) {
              var r = d.get(t.id());
              if (!r) {
                r = {};
                d.set(t.id(), r);
              }
              return r;
            };
            var x = function e(t) {
              return (b(t) ? u.$(t) : t)[0];
            };
            var w = function e(t) {
              return m(x(t)).dist;
            };
            var E = function e(t) {
              var n = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : o;
              var a = x(t);
              var i = [];
              var s = a;
              for (;;) {
                if (s == null) {
                  return r.spawn();
                }
                var u = m(s),
                  c = u.edge,
                  v = u.pred;
                i.unshift(s[0]);
                if (s.same(n) && i.length > 0) {
                  break;
                }
                if (c != null) {
                  i.unshift(c);
                }
                s = v;
              }
              return l.spawn(i);
            };
            for (var T = 0; T < h; T++) {
              var _ = f[T];
              var D = m(_);
              if (_.same(o)) {
                D.dist = 0;
              } else {
                D.dist = Infinity;
              }
              D.pred = null;
              D.edge = null;
            }
            var C = false;
            var N = function e(t, r, n, a, i, o) {
              var s = a.dist + o;
              if (s < i.dist && !n.same(a.edge)) {
                i.dist = s;
                i.pred = t;
                i.edge = n;
                C = true;
              }
            };
            for (var A = 1; A < h; A++) {
              C = false;
              for (var L = 0; L < y; L++) {
                var I = v[L];
                var S = I.source();
                var k = I.target();
                var O = s(I);
                var M = m(S);
                var P = m(k);
                N(S, k, I, M, P, O);
                if (!i) {
                  N(k, S, I, P, M, O);
                }
              }
              if (!C) {
                break;
              }
            }
            if (C) {
              var R = [];
              for (var B = 0; B < y; B++) {
                var F = v[B];
                var z = F.source();
                var G = F.target();
                var Y = s(F);
                var X = m(z).dist;
                var V = m(G).dist;
                if (X + Y < V || (!i && V + Y < X)) {
                  if (!p) {
                    kt("Graph contains a negative weight cycle for Bellman-Ford");
                    p = true;
                  }
                  if (t.findNegativeWeightCycles !== false) {
                    var U = [];
                    if (X + Y < V) {
                      U.push(z);
                    }
                    if (!i && V + Y < X) {
                      U.push(G);
                    }
                    var j = U.length;
                    for (var H = 0; H < j; H++) {
                      var q = U[H];
                      var W = [q];
                      W.push(m(q).edge);
                      var $ = m(q).pred;
                      while (W.indexOf($) === -1) {
                        W.push($);
                        W.push(m($).edge);
                        $ = m($).pred;
                      }
                      W = W.slice(W.indexOf($));
                      var K = W[0].id();
                      var Z = 0;
                      for (var Q = 2; Q < W.length; Q += 2) {
                        if (W[Q].id() < K) {
                          K = W[Q].id();
                          Z = Q;
                        }
                      }
                      W = W.slice(Z).concat(W.slice(0, Z));
                      W.push(W[0]);
                      var J = W.map(function (e) {
                        return e.id();
                      }).join(",");
                      if (R.indexOf(J) === -1) {
                        g.push(l.spawn(W));
                        R.push(J);
                      }
                    }
                  } else {
                    break;
                  }
                }
              }
            }
            return { distanceTo: w, pathTo: E, hasNegativeWeightCycle: p, negativeWeightCycles: g };
          },
        };
        var cr = Math.sqrt(2);
        var vr = function e(t, r, n) {
          if (n.length === 0) {
            It("Karger-Stein must be run on a connected (sub)graph");
          }
          var a = n[t];
          var i = a[1];
          var o = a[2];
          var s = r[i];
          var l = r[o];
          var u = n;
          for (var c = u.length - 1; c >= 0; c--) {
            var v = u[c];
            var f = v[1];
            var h = v[2];
            if ((r[f] === s && r[h] === l) || (r[f] === l && r[h] === s)) {
              u.splice(c, 1);
            }
          }
          for (var d = 0; d < u.length; d++) {
            var p = u[d];
            if (p[1] === l) {
              u[d] = p.slice();
              u[d][1] = s;
            } else if (p[2] === l) {
              u[d] = p.slice();
              u[d][2] = s;
            }
          }
          for (var g = 0; g < r.length; g++) {
            if (r[g] === l) {
              r[g] = s;
            }
          }
          return u;
        };
        var fr = function e(t, r, n, a) {
          while (n > a) {
            var i = Math.floor(Math.random() * r.length);
            r = vr(i, t, r);
            n--;
          }
          return r;
        };
        var hr = {
          kargerStein: function e() {
            var t = this;
            var r = this.byGroup(),
              n = r.nodes,
              a = r.edges;
            a.unmergeBy(function (e) {
              return e.isLoop();
            });
            var i = n.length;
            var o = a.length;
            var s = Math.ceil(Math.pow(Math.log(i) / Math.LN2, 2));
            var l = Math.floor(i / cr);
            if (i < 2) {
              It("At least 2 nodes are required for Karger-Stein algorithm");
              return undefined;
            }
            var u = [];
            for (var c = 0; c < o; c++) {
              var v = a[c];
              u.push([c, n.indexOf(v.source()), n.indexOf(v.target())]);
            }
            var f = Infinity;
            var h = [];
            var d = new Array(i);
            var p = new Array(i);
            var g = new Array(i);
            var y = function e(t, r) {
              for (var n = 0; n < i; n++) {
                r[n] = t[n];
              }
            };
            for (var m = 0; m <= s; m++) {
              for (var b = 0; b < i; b++) {
                p[b] = b;
              }
              var x = fr(p, u.slice(), i, l);
              var w = x.slice();
              y(p, g);
              var E = fr(p, x, l, 2);
              var T = fr(g, w, l, 2);
              if (E.length <= T.length && E.length < f) {
                f = E.length;
                h = E;
                y(p, d);
              } else if (T.length <= E.length && T.length < f) {
                f = T.length;
                h = T;
                y(g, d);
              }
            }
            var _ = this.spawn(
              h.map(function (e) {
                return a[e[0]];
              })
            );
            var D = this.spawn();
            var C = this.spawn();
            var N = d[0];
            for (var A = 0; A < d.length; A++) {
              var L = d[A];
              var I = n[A];
              if (L === N) {
                D.merge(I);
              } else {
                C.merge(I);
              }
            }
            var S = function e(r) {
              var n = t.spawn();
              r.forEach(function (e) {
                n.merge(e);
                e.connectedEdges().forEach(function (e) {
                  if (t.contains(e) && !_.contains(e)) {
                    n.merge(e);
                  }
                });
              });
              return n;
            };
            var k = [S(D), S(C)];
            var O = { cut: _, components: k, partition1: D, partition2: C };
            return O;
          },
        };
        var dr = function e(t) {
          return { x: t.x, y: t.y };
        };
        var pr = function e(t, r, n) {
          return { x: t.x * r + n.x, y: t.y * r + n.y };
        };
        var gr = function e(t, r, n) {
          return { x: (t.x - n.x) / r, y: (t.y - n.y) / r };
        };
        var yr = function e(t) {
          return { x: t[0], y: t[1] };
        };
        var mr = function e(t) {
          var r = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 0;
          var n = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : t.length;
          var e = Infinity;
          for (var a = r; a < n; a++) {
            var i = t[a];
            if (isFinite(i)) {
              e = Math.min(i, e);
            }
          }
          return e;
        };
        var br = function e(t) {
          var r = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 0;
          var n = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : t.length;
          var e = -Infinity;
          for (var a = r; a < n; a++) {
            var i = t[a];
            if (isFinite(i)) {
              e = Math.max(i, e);
            }
          }
          return e;
        };
        var xr = function e(t) {
          var r = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 0;
          var n = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : t.length;
          var a = 0;
          var i = 0;
          for (var o = r; o < n; o++) {
            var s = t[o];
            if (isFinite(s)) {
              a += s;
              i++;
            }
          }
          return a / i;
        };
        var wr = function e(t) {
          var r = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 0;
          var n = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : t.length;
          var a = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : true;
          var i = arguments.length > 4 && arguments[4] !== undefined ? arguments[4] : true;
          var o = arguments.length > 5 && arguments[5] !== undefined ? arguments[5] : true;
          if (a) {
            t = t.slice(r, n);
          } else {
            if (n < t.length) {
              t.splice(n, t.length - n);
            }
            if (r > 0) {
              t.splice(0, r);
            }
          }
          var s = 0;
          for (var l = t.length - 1; l >= 0; l--) {
            var u = t[l];
            if (o) {
              if (!isFinite(u)) {
                t[l] = -Infinity;
                s++;
              }
            } else {
              t.splice(l, 1);
            }
          }
          if (i) {
            t.sort(function (e, t) {
              return e - t;
            });
          }
          var c = t.length;
          var v = Math.floor(c / 2);
          if (c % 2 !== 0) {
            return t[v + 1 + s];
          } else {
            return (t[v - 1 + s] + t[v + s]) / 2;
          }
        };
        var Er = function e(t) {
          return (Math.PI * t) / 180;
        };
        var Tr = function e(t, r) {
          return Math.atan2(r, t) - Math.PI / 2;
        };
        var _r =
          Math.log2 ||
          function (e) {
            return Math.log(e) / Math.log(2);
          };
        var Dr = function e(t) {
          if (t > 0) {
            return 1;
          } else if (t < 0) {
            return -1;
          } else {
            return 0;
          }
        };
        var Cr = function e(t, r) {
          return Math.sqrt(Nr(t, r));
        };
        var Nr = function e(t, r) {
          var n = r.x - t.x;
          var a = r.y - t.y;
          return n * n + a * a;
        };
        var Ar = function e(t) {
          var r = t.length;
          var n = 0;
          for (var a = 0; a < r; a++) {
            n += t[a];
          }
          for (var i = 0; i < r; i++) {
            t[i] = t[i] / n;
          }
          return t;
        };
        var Lr = function e(t, r, n, a) {
          return (1 - a) * (1 - a) * t + 2 * (1 - a) * a * r + a * a * n;
        };
        var Ir = function e(t, r, n, a) {
          return { x: Lr(t.x, r.x, n.x, a), y: Lr(t.y, r.y, n.y, a) };
        };
        var Sr = function e(t, r, n, a) {
          var i = { x: r.x - t.x, y: r.y - t.y };
          var o = Cr(t, r);
          var s = { x: i.x / o, y: i.y / o };
          n = n == null ? 0 : n;
          a = a != null ? a : n * o;
          return { x: t.x + s.x * a, y: t.y + s.y * a };
        };
        var kr = function e(t, r, n) {
          return Math.max(t, Math.min(n, r));
        };
        var Or = function e(t) {
          if (t == null) {
            return { x1: Infinity, y1: Infinity, x2: -Infinity, y2: -Infinity, w: 0, h: 0 };
          } else if (t.x1 != null && t.y1 != null) {
            if (t.x2 != null && t.y2 != null && t.x2 >= t.x1 && t.y2 >= t.y1) {
              return { x1: t.x1, y1: t.y1, x2: t.x2, y2: t.y2, w: t.x2 - t.x1, h: t.y2 - t.y1 };
            } else if (t.w != null && t.h != null && t.w >= 0 && t.h >= 0) {
              return { x1: t.x1, y1: t.y1, x2: t.x1 + t.w, y2: t.y1 + t.h, w: t.w, h: t.h };
            }
          }
        };
        var Mr = function e(t) {
          return { x1: t.x1, x2: t.x2, w: t.w, y1: t.y1, y2: t.y2, h: t.h };
        };
        var Pr = function e(t) {
          t.x1 = Infinity;
          t.y1 = Infinity;
          t.x2 = -Infinity;
          t.y2 = -Infinity;
          t.w = 0;
          t.h = 0;
        };
        var Rr = function e(t, r) {
          t.x1 = Math.min(t.x1, r.x1);
          t.x2 = Math.max(t.x2, r.x2);
          t.w = t.x2 - t.x1;
          t.y1 = Math.min(t.y1, r.y1);
          t.y2 = Math.max(t.y2, r.y2);
          t.h = t.y2 - t.y1;
        };
        var Br = function e(t, r, n) {
          t.x1 = Math.min(t.x1, r);
          t.x2 = Math.max(t.x2, r);
          t.w = t.x2 - t.x1;
          t.y1 = Math.min(t.y1, n);
          t.y2 = Math.max(t.y2, n);
          t.h = t.y2 - t.y1;
        };
        var Fr = function e(t) {
          var r = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 0;
          t.x1 -= r;
          t.x2 += r;
          t.y1 -= r;
          t.y2 += r;
          t.w = t.x2 - t.x1;
          t.h = t.y2 - t.y1;
          return t;
        };
        var zr = function e(t) {
          var r = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : [0];
          var n, a, i, s;
          if (r.length === 1) {
            n = a = i = s = r[0];
          } else if (r.length === 2) {
            n = i = r[0];
            s = a = r[1];
          } else if (r.length === 4) {
            var l = o(r, 4);
            n = l[0];
            a = l[1];
            i = l[2];
            s = l[3];
          }
          t.x1 -= s;
          t.x2 += a;
          t.y1 -= n;
          t.y2 += i;
          t.w = t.x2 - t.x1;
          t.h = t.y2 - t.y1;
          return t;
        };
        var Gr = function e(t, r) {
          t.x1 = r.x1;
          t.y1 = r.y1;
          t.x2 = r.x2;
          t.y2 = r.y2;
          t.w = t.x2 - t.x1;
          t.h = t.y2 - t.y1;
        };
        var Yr = function e(t, r) {
          if (t.x1 > r.x2) {
            return false;
          }
          if (r.x1 > t.x2) {
            return false;
          }
          if (t.x2 < r.x1) {
            return false;
          }
          if (r.x2 < t.x1) {
            return false;
          }
          if (t.y2 < r.y1) {
            return false;
          }
          if (r.y2 < t.y1) {
            return false;
          }
          if (t.y1 > r.y2) {
            return false;
          }
          if (r.y1 > t.y2) {
            return false;
          }
          return true;
        };
        var Xr = function e(t, r, n) {
          return t.x1 <= r && r <= t.x2 && t.y1 <= n && n <= t.y2;
        };
        var Vr = function e(t, r) {
          return Xr(t, r.x, r.y);
        };
        var Ur = function e(t, r) {
          return Xr(t, r.x1, r.y1) && Xr(t, r.x2, r.y2);
        };
        var jr = function e(t, r, n, a, i, o, s) {
          var l = pn(i, o);
          var u = i / 2;
          var c = o / 2;
          var v;
          {
            var f = n - u + l - s;
            var h = a - c - s;
            var d = n + u - l + s;
            var p = h;
            v = ln(t, r, n, a, f, h, d, p, false);
            if (v.length > 0) {
              return v;
            }
          }
          {
            var g = n + u + s;
            var y = a - c + l - s;
            var m = g;
            var b = a + c - l + s;
            v = ln(t, r, n, a, g, y, m, b, false);
            if (v.length > 0) {
              return v;
            }
          }
          {
            var x = n - u + l - s;
            var w = a + c + s;
            var E = n + u - l + s;
            var T = w;
            v = ln(t, r, n, a, x, w, E, T, false);
            if (v.length > 0) {
              return v;
            }
          }
          {
            var _ = n - u - s;
            var D = a - c + l - s;
            var C = _;
            var N = a + c - l + s;
            v = ln(t, r, n, a, _, D, C, N, false);
            if (v.length > 0) {
              return v;
            }
          }
          var A;
          {
            var L = n - u + l;
            var I = a - c + l;
            A = on(t, r, n, a, L, I, l + s);
            if (A.length > 0 && A[0] <= L && A[1] <= I) {
              return [A[0], A[1]];
            }
          }
          {
            var S = n + u - l;
            var k = a - c + l;
            A = on(t, r, n, a, S, k, l + s);
            if (A.length > 0 && A[0] >= S && A[1] <= k) {
              return [A[0], A[1]];
            }
          }
          {
            var O = n + u - l;
            var M = a + c - l;
            A = on(t, r, n, a, O, M, l + s);
            if (A.length > 0 && A[0] >= O && A[1] >= M) {
              return [A[0], A[1]];
            }
          }
          {
            var P = n - u + l;
            var R = a + c - l;
            A = on(t, r, n, a, P, R, l + s);
            if (A.length > 0 && A[0] <= P && A[1] >= R) {
              return [A[0], A[1]];
            }
          }
          return [];
        };
        var Hr = function e(t, r, n, a, i, o, s) {
          var l = s;
          var u = Math.min(n, i);
          var c = Math.max(n, i);
          var v = Math.min(a, o);
          var f = Math.max(a, o);
          return u - l <= t && t <= c + l && v - l <= r && r <= f + l;
        };
        var qr = function e(t, r, n, a, i, o, s, l, u) {
          var c = { x1: Math.min(n, s, i) - u, x2: Math.max(n, s, i) + u, y1: Math.min(a, l, o) - u, y2: Math.max(a, l, o) + u };
          if (t < c.x1 || t > c.x2 || r < c.y1 || r > c.y2) {
            return false;
          } else {
            return true;
          }
        };
        var Wr = function e(t, r, n, a) {
          n -= a;
          var i = r * r - 4 * t * n;
          if (i < 0) {
            return [];
          }
          var o = Math.sqrt(i);
          var s = 2 * t;
          var l = (-r + o) / s;
          var u = (-r - o) / s;
          return [l, u];
        };
        var $r = function e(t, r, n, a, i) {
          var o = 1e-5;
          if (t === 0) {
            t = o;
          }
          r /= t;
          n /= t;
          a /= t;
          var s, l, u, c, v, f, h, d;
          l = (3 * n - r * r) / 9;
          u = -(27 * a) + r * (9 * n - 2 * (r * r));
          u /= 54;
          s = l * l * l + u * u;
          i[1] = 0;
          h = r / 3;
          if (s > 0) {
            v = u + Math.sqrt(s);
            v = v < 0 ? -Math.pow(-v, 1 / 3) : Math.pow(v, 1 / 3);
            f = u - Math.sqrt(s);
            f = f < 0 ? -Math.pow(-f, 1 / 3) : Math.pow(f, 1 / 3);
            i[0] = -h + v + f;
            h += (v + f) / 2;
            i[4] = i[2] = -h;
            h = (Math.sqrt(3) * (-f + v)) / 2;
            i[3] = h;
            i[5] = -h;
            return;
          }
          i[5] = i[3] = 0;
          if (s === 0) {
            d = u < 0 ? -Math.pow(-u, 1 / 3) : Math.pow(u, 1 / 3);
            i[0] = -h + 2 * d;
            i[4] = i[2] = -(d + h);
            return;
          }
          l = -l;
          c = l * l * l;
          c = Math.acos(u / Math.sqrt(c));
          d = 2 * Math.sqrt(l);
          i[0] = -h + d * Math.cos(c / 3);
          i[2] = -h + d * Math.cos((c + 2 * Math.PI) / 3);
          i[4] = -h + d * Math.cos((c + 4 * Math.PI) / 3);
          return;
        };
        var Kr = function e(t, r, n, a, i, o, s, l) {
          var u = 1 * n * n - 4 * n * i + 2 * n * s + 4 * i * i - 4 * i * s + s * s + a * a - 4 * a * o + 2 * a * l + 4 * o * o - 4 * o * l + l * l;
          var c = 1 * 9 * n * i - 3 * n * n - 3 * n * s - 6 * i * i + 3 * i * s + 9 * a * o - 3 * a * a - 3 * a * l - 6 * o * o + 3 * o * l;
          var v =
            1 * 3 * n * n -
            6 * n * i +
            n * s -
            n * t +
            2 * i * i +
            2 * i * t -
            s * t +
            3 * a * a -
            6 * a * o +
            a * l -
            a * r +
            2 * o * o +
            2 * o * r -
            l * r;
          var f = 1 * n * i - n * n + n * t - i * t + a * o - a * a + a * r - o * r;
          var h = [];
          $r(u, c, v, f, h);
          var d = 1e-7;
          var p = [];
          for (var g = 0; g < 6; g += 2) {
            if (Math.abs(h[g + 1]) < d && h[g] >= 0 && h[g] <= 1) {
              p.push(h[g]);
            }
          }
          p.push(1);
          p.push(0);
          var y = -1;
          var m, b, x;
          for (var w = 0; w < p.length; w++) {
            m = Math.pow(1 - p[w], 2) * n + 2 * (1 - p[w]) * p[w] * i + p[w] * p[w] * s;
            b = Math.pow(1 - p[w], 2) * a + 2 * (1 - p[w]) * p[w] * o + p[w] * p[w] * l;
            x = Math.pow(m - t, 2) + Math.pow(b - r, 2);
            if (y >= 0) {
              if (x < y) {
                y = x;
              }
            } else {
              y = x;
            }
          }
          return y;
        };
        var Zr = function e(t, r, n, a, i, o) {
          var s = [t - n, r - a];
          var l = [i - n, o - a];
          var u = l[0] * l[0] + l[1] * l[1];
          var c = s[0] * s[0] + s[1] * s[1];
          var v = s[0] * l[0] + s[1] * l[1];
          var f = (v * v) / u;
          if (v < 0) {
            return c;
          }
          if (f > u) {
            return (t - i) * (t - i) + (r - o) * (r - o);
          }
          return c - f;
        };
        var Qr = function e(t, r, n) {
          var a, i, o, s;
          var l;
          var u = 0;
          for (var c = 0; c < n.length / 2; c++) {
            a = n[c * 2];
            i = n[c * 2 + 1];
            if (c + 1 < n.length / 2) {
              o = n[(c + 1) * 2];
              s = n[(c + 1) * 2 + 1];
            } else {
              o = n[(c + 1 - n.length / 2) * 2];
              s = n[(c + 1 - n.length / 2) * 2 + 1];
            }
            if (a == t && o == t);
            else if ((a >= t && t >= o) || (a <= t && t <= o)) {
              l = ((t - a) / (o - a)) * (s - i) + i;
              if (l > r) {
                u++;
              }
            } else {
              continue;
            }
          }
          if (u % 2 === 0) {
            return false;
          } else {
            return true;
          }
        };
        var Jr = function e(t, r, n, a, i, o, s, l, u) {
          var c = new Array(n.length);
          var v;
          if (l[0] != null) {
            v = Math.atan(l[1] / l[0]);
            if (l[0] < 0) {
              v = v + Math.PI / 2;
            } else {
              v = -v - Math.PI / 2;
            }
          } else {
            v = l;
          }
          var f = Math.cos(-v);
          var h = Math.sin(-v);
          for (var d = 0; d < c.length / 2; d++) {
            c[d * 2] = (o / 2) * (n[d * 2] * f - n[d * 2 + 1] * h);
            c[d * 2 + 1] = (s / 2) * (n[d * 2 + 1] * f + n[d * 2] * h);
            c[d * 2] += a;
            c[d * 2 + 1] += i;
          }
          var p;
          if (u > 0) {
            var g = rn(c, -u);
            p = tn(g);
          } else {
            p = c;
          }
          return Qr(t, r, p);
        };
        var en = function e(t, r, n, a, i, o, s) {
          var l = new Array(n.length);
          var u = o / 2;
          var c = s / 2;
          var v = gn(o, s);
          var f = v * v;
          for (var h = 0; h < n.length / 4; h++) {
            var d = void 0,
              p = void 0;
            if (h === 0) {
              d = n.length - 2;
            } else {
              d = h * 4 - 2;
            }
            p = h * 4 + 2;
            var g = a + u * n[h * 4];
            var y = i + c * n[h * 4 + 1];
            var m = -n[d] * n[p] - n[d + 1] * n[p + 1];
            var b = v / Math.tan(Math.acos(m) / 2);
            var x = g - b * n[d];
            var w = y - b * n[d + 1];
            var E = g + b * n[p];
            var T = y + b * n[p + 1];
            l[h * 4] = x;
            l[h * 4 + 1] = w;
            l[h * 4 + 2] = E;
            l[h * 4 + 3] = T;
            var _ = n[d + 1];
            var D = -n[d];
            var C = _ * n[p] + D * n[p + 1];
            if (C < 0) {
              _ *= -1;
              D *= -1;
            }
            var N = x + _ * v;
            var A = w + D * v;
            var L = Math.pow(N - t, 2) + Math.pow(A - r, 2);
            if (L <= f) {
              return true;
            }
          }
          return Qr(t, r, l);
        };
        var tn = function e(t) {
          var r = new Array(t.length / 2);
          var n, a, i, o;
          var s, l, u, c;
          for (var v = 0; v < t.length / 4; v++) {
            n = t[v * 4];
            a = t[v * 4 + 1];
            i = t[v * 4 + 2];
            o = t[v * 4 + 3];
            if (v < t.length / 4 - 1) {
              s = t[(v + 1) * 4];
              l = t[(v + 1) * 4 + 1];
              u = t[(v + 1) * 4 + 2];
              c = t[(v + 1) * 4 + 3];
            } else {
              s = t[0];
              l = t[1];
              u = t[2];
              c = t[3];
            }
            var f = ln(n, a, i, o, s, l, u, c, true);
            r[v * 2] = f[0];
            r[v * 2 + 1] = f[1];
          }
          return r;
        };
        var rn = function e(t, r) {
          var n = new Array(t.length * 2);
          var a, i, o, s;
          for (var l = 0; l < t.length / 2; l++) {
            a = t[l * 2];
            i = t[l * 2 + 1];
            if (l < t.length / 2 - 1) {
              o = t[(l + 1) * 2];
              s = t[(l + 1) * 2 + 1];
            } else {
              o = t[0];
              s = t[1];
            }
            var u = s - i;
            var c = -(o - a);
            var v = Math.sqrt(u * u + c * c);
            var f = u / v;
            var h = c / v;
            n[l * 4] = a + f * r;
            n[l * 4 + 1] = i + h * r;
            n[l * 4 + 2] = o + f * r;
            n[l * 4 + 3] = s + h * r;
          }
          return n;
        };
        var nn = function e(t, r, n, a, i, o) {
          var s = n - t;
          var l = a - r;
          s /= i;
          l /= o;
          var u = Math.sqrt(s * s + l * l);
          var c = u - 1;
          if (c < 0) {
            return [];
          }
          var v = c / u;
          return [(n - t) * v + t, (a - r) * v + r];
        };
        var an = function e(t, r, n, a, i, o, s) {
          t -= i;
          r -= o;
          t /= n / 2 + s;
          r /= a / 2 + s;
          return t * t + r * r <= 1;
        };
        var on = function e(t, r, n, a, i, o, s) {
          var l = [n - t, a - r];
          var u = [t - i, r - o];
          var c = l[0] * l[0] + l[1] * l[1];
          var v = 2 * (u[0] * l[0] + u[1] * l[1]);
          var f = u[0] * u[0] + u[1] * u[1] - s * s;
          var h = v * v - 4 * c * f;
          if (h < 0) {
            return [];
          }
          var d = (-v + Math.sqrt(h)) / (2 * c);
          var p = (-v - Math.sqrt(h)) / (2 * c);
          var g = Math.min(d, p);
          var y = Math.max(d, p);
          var m = [];
          if (g >= 0 && g <= 1) {
            m.push(g);
          }
          if (y >= 0 && y <= 1) {
            m.push(y);
          }
          if (m.length === 0) {
            return [];
          }
          var b = m[0] * l[0] + t;
          var x = m[0] * l[1] + r;
          if (m.length > 1) {
            if (m[0] == m[1]) {
              return [b, x];
            } else {
              var w = m[1] * l[0] + t;
              var E = m[1] * l[1] + r;
              return [b, x, w, E];
            }
          } else {
            return [b, x];
          }
        };
        var sn = function e(t, r, n) {
          if ((r <= t && t <= n) || (n <= t && t <= r)) {
            return t;
          } else if ((t <= r && r <= n) || (n <= r && r <= t)) {
            return r;
          } else {
            return n;
          }
        };
        var ln = function e(t, r, n, a, i, o, s, l, u) {
          var c = t - i;
          var v = n - t;
          var f = s - i;
          var h = r - o;
          var d = a - r;
          var p = l - o;
          var g = f * h - p * c;
          var y = v * h - d * c;
          var m = p * v - f * d;
          if (m !== 0) {
            var b = g / m;
            var x = y / m;
            var w = 0.001;
            var E = 0 - w;
            var T = 1 + w;
            if (E <= b && b <= T && E <= x && x <= T) {
              return [t + b * v, r + b * d];
            } else {
              if (!u) {
                return [];
              } else {
                return [t + b * v, r + b * d];
              }
            }
          } else {
            if (g === 0 || y === 0) {
              if (sn(t, n, s) === s) {
                return [s, l];
              }
              if (sn(t, n, i) === i) {
                return [i, o];
              }
              if (sn(i, s, n) === n) {
                return [n, a];
              }
              return [];
            } else {
              return [];
            }
          }
        };
        var un = function e(t, r, n, a, i, o, s, l) {
          var u = [];
          var c;
          var v = new Array(n.length);
          var f = true;
          if (o == null) {
            f = false;
          }
          var h;
          if (f) {
            for (var d = 0; d < v.length / 2; d++) {
              v[d * 2] = n[d * 2] * o + a;
              v[d * 2 + 1] = n[d * 2 + 1] * s + i;
            }
            if (l > 0) {
              var p = rn(v, -l);
              h = tn(p);
            } else {
              h = v;
            }
          } else {
            h = n;
          }
          var g, y, m, b;
          for (var x = 0; x < h.length / 2; x++) {
            g = h[x * 2];
            y = h[x * 2 + 1];
            if (x < h.length / 2 - 1) {
              m = h[(x + 1) * 2];
              b = h[(x + 1) * 2 + 1];
            } else {
              m = h[0];
              b = h[1];
            }
            c = ln(t, r, a, i, g, y, m, b);
            if (c.length !== 0) {
              u.push(c[0], c[1]);
            }
          }
          return u;
        };
        var cn = function e(t, r, n, a, i, o, s, l) {
          var u = [];
          var c;
          var v = new Array(n.length);
          var f = o / 2;
          var h = s / 2;
          var d = gn(o, s);
          for (var p = 0; p < n.length / 4; p++) {
            var g = void 0,
              y = void 0;
            if (p === 0) {
              g = n.length - 2;
            } else {
              g = p * 4 - 2;
            }
            y = p * 4 + 2;
            var m = a + f * n[p * 4];
            var b = i + h * n[p * 4 + 1];
            var x = -n[g] * n[y] - n[g + 1] * n[y + 1];
            var w = d / Math.tan(Math.acos(x) / 2);
            var E = m - w * n[g];
            var T = b - w * n[g + 1];
            var _ = m + w * n[y];
            var D = b + w * n[y + 1];
            if (p === 0) {
              v[n.length - 2] = E;
              v[n.length - 1] = T;
            } else {
              v[p * 4 - 2] = E;
              v[p * 4 - 1] = T;
            }
            v[p * 4] = _;
            v[p * 4 + 1] = D;
            var C = n[g + 1];
            var N = -n[g];
            var A = C * n[y] + N * n[y + 1];
            if (A < 0) {
              C *= -1;
              N *= -1;
            }
            var L = E + C * d;
            var I = T + N * d;
            c = on(t, r, a, i, L, I, d);
            if (c.length !== 0) {
              u.push(c[0], c[1]);
            }
          }
          for (var S = 0; S < v.length / 4; S++) {
            c = ln(t, r, a, i, v[S * 4], v[S * 4 + 1], v[S * 4 + 2], v[S * 4 + 3], false);
            if (c.length !== 0) {
              u.push(c[0], c[1]);
            }
          }
          if (u.length > 2) {
            var k = [u[0], u[1]];
            var O = Math.pow(k[0] - t, 2) + Math.pow(k[1] - r, 2);
            for (var M = 1; M < u.length / 2; M++) {
              var P = Math.pow(u[M * 2] - t, 2) + Math.pow(u[M * 2 + 1] - r, 2);
              if (P <= O) {
                k[0] = u[M * 2];
                k[1] = u[M * 2 + 1];
                O = P;
              }
            }
            return k;
          }
          return u;
        };
        var vn = function e(t, r, n) {
          var a = [t[0] - r[0], t[1] - r[1]];
          var i = Math.sqrt(a[0] * a[0] + a[1] * a[1]);
          var o = (i - n) / i;
          if (o < 0) {
            o = 1e-5;
          }
          return [r[0] + o * a[0], r[1] + o * a[1]];
        };
        var fn = function e(t, r) {
          var n = dn(t, r);
          n = hn(n);
          return n;
        };
        var hn = function e(t) {
          var r, n;
          var a = t.length / 2;
          var i = Infinity,
            o = Infinity,
            s = -Infinity,
            l = -Infinity;
          for (var u = 0; u < a; u++) {
            r = t[2 * u];
            n = t[2 * u + 1];
            i = Math.min(i, r);
            s = Math.max(s, r);
            o = Math.min(o, n);
            l = Math.max(l, n);
          }
          var c = 2 / (s - i);
          var v = 2 / (l - o);
          for (var f = 0; f < a; f++) {
            r = t[2 * f] = t[2 * f] * c;
            n = t[2 * f + 1] = t[2 * f + 1] * v;
            i = Math.min(i, r);
            s = Math.max(s, r);
            o = Math.min(o, n);
            l = Math.max(l, n);
          }
          if (o < -1) {
            for (var h = 0; h < a; h++) {
              n = t[2 * h + 1] = t[2 * h + 1] + (-1 - o);
            }
          }
          return t;
        };
        var dn = function e(t, r) {
          var n = (1 / t) * 2 * Math.PI;
          var a = t % 2 === 0 ? Math.PI / 2 + n / 2 : Math.PI / 2;
          a += r;
          var i = new Array(t * 2);
          var o;
          for (var s = 0; s < t; s++) {
            o = s * n + a;
            i[2 * s] = Math.cos(o);
            i[2 * s + 1] = Math.sin(-o);
          }
          return i;
        };
        var pn = function e(t, r) {
          return Math.min(t / 4, r / 4, 8);
        };
        var gn = function e(t, r) {
          return Math.min(t / 10, r / 10, 8);
        };
        var yn = function e() {
          return 8;
        };
        var mn = function e(t, r, n) {
          return [t - 2 * r + n, 2 * (r - t), t];
        };
        var bn = function e(t, r) {
          return { heightOffset: Math.min(15, 0.05 * r), widthOffset: Math.min(100, 0.25 * t), ctrlPtOffsetPct: 0.05 };
        };
        var xn = zt({
          dampingFactor: 0.8,
          precision: 1e-6,
          iterations: 200,
          weight: function e(t) {
            return 1;
          },
        });
        var wn = {
          pageRank: function e(t) {
            var r = xn(t),
              n = r.dampingFactor,
              a = r.precision,
              i = r.iterations,
              o = r.weight;
            var s = this._private.cy;
            var l = this.byGroup(),
              u = l.nodes,
              c = l.edges;
            var v = u.length;
            var f = v * v;
            var h = c.length;
            var d = new Array(f);
            var p = new Array(v);
            var g = (1 - n) / v;
            for (var y = 0; y < v; y++) {
              for (var m = 0; m < v; m++) {
                var b = y * v + m;
                d[b] = 0;
              }
              p[y] = 0;
            }
            for (var x = 0; x < h; x++) {
              var w = c[x];
              var E = w.data("source");
              var T = w.data("target");
              if (E === T) {
                continue;
              }
              var _ = u.indexOfId(E);
              var D = u.indexOfId(T);
              var C = o(w);
              var N = D * v + _;
              d[N] += C;
              p[_] += C;
            }
            var A = 1 / v + g;
            for (var L = 0; L < v; L++) {
              if (p[L] === 0) {
                for (var I = 0; I < v; I++) {
                  var S = I * v + L;
                  d[S] = A;
                }
              } else {
                for (var k = 0; k < v; k++) {
                  var O = k * v + L;
                  d[O] = d[O] / p[L] + g;
                }
              }
            }
            var M = new Array(v);
            var P = new Array(v);
            var R;
            for (var B = 0; B < v; B++) {
              M[B] = 1;
            }
            for (var F = 0; F < i; F++) {
              for (var z = 0; z < v; z++) {
                P[z] = 0;
              }
              for (var G = 0; G < v; G++) {
                for (var Y = 0; Y < v; Y++) {
                  var X = G * v + Y;
                  P[G] += d[X] * M[Y];
                }
              }
              Ar(P);
              R = M;
              M = P;
              P = R;
              var V = 0;
              for (var U = 0; U < v; U++) {
                var j = R[U] - M[U];
                V += j * j;
              }
              if (V < a) {
                break;
              }
            }
            var H = {
              rank: function e(t) {
                t = s.collection(t)[0];
                return M[u.indexOf(t)];
              },
            };
            return H;
          },
        };
        var En = zt({
          root: null,
          weight: function e(t) {
            return 1;
          },
          directed: false,
          alpha: 0,
        });
        var Tn = {
          degreeCentralityNormalized: function e(t) {
            t = En(t);
            var r = this.cy();
            var n = this.nodes();
            var a = n.length;
            if (!t.directed) {
              var i = {};
              var o = 0;
              for (var s = 0; s < a; s++) {
                var l = n[s];
                t.root = l;
                var u = this.degreeCentrality(t);
                if (o < u.degree) {
                  o = u.degree;
                }
                i[l.id()] = u.degree;
              }
              return {
                degree: function e(t) {
                  if (o === 0) {
                    return 0;
                  }
                  if (b(t)) {
                    t = r.filter(t);
                  }
                  return i[t.id()] / o;
                },
              };
            } else {
              var c = {};
              var v = {};
              var f = 0;
              var h = 0;
              for (var d = 0; d < a; d++) {
                var p = n[d];
                var g = p.id();
                t.root = p;
                var y = this.degreeCentrality(t);
                if (f < y.indegree) f = y.indegree;
                if (h < y.outdegree) h = y.outdegree;
                c[g] = y.indegree;
                v[g] = y.outdegree;
              }
              return {
                indegree: function e(t) {
                  if (f == 0) {
                    return 0;
                  }
                  if (b(t)) {
                    t = r.filter(t);
                  }
                  return c[t.id()] / f;
                },
                outdegree: function e(t) {
                  if (h === 0) {
                    return 0;
                  }
                  if (b(t)) {
                    t = r.filter(t);
                  }
                  return v[t.id()] / h;
                },
              };
            }
          },
          degreeCentrality: function e(t) {
            t = En(t);
            var r = this.cy();
            var n = this;
            var a = t,
              i = a.root,
              o = a.weight,
              s = a.directed,
              l = a.alpha;
            i = r.collection(i)[0];
            if (!s) {
              var u = i.connectedEdges().intersection(n);
              var c = u.length;
              var v = 0;
              for (var f = 0; f < u.length; f++) {
                v += o(u[f]);
              }
              return { degree: Math.pow(c, 1 - l) * Math.pow(v, l) };
            } else {
              var h = i.connectedEdges();
              var d = h.filter(function (e) {
                return e.target().same(i) && n.has(e);
              });
              var p = h.filter(function (e) {
                return e.source().same(i) && n.has(e);
              });
              var g = d.length;
              var y = p.length;
              var m = 0;
              var b = 0;
              for (var x = 0; x < d.length; x++) {
                m += o(d[x]);
              }
              for (var w = 0; w < p.length; w++) {
                b += o(p[w]);
              }
              return { indegree: Math.pow(g, 1 - l) * Math.pow(m, l), outdegree: Math.pow(y, 1 - l) * Math.pow(b, l) };
            }
          },
        };
        Tn.dc = Tn.degreeCentrality;
        Tn.dcn = Tn.degreeCentralityNormalised = Tn.degreeCentralityNormalized;
        var _n = zt({
          harmonic: true,
          weight: function e() {
            return 1;
          },
          directed: false,
          root: null,
        });
        var Dn = {
          closenessCentralityNormalized: function e(t) {
            var r = _n(t),
              n = r.harmonic,
              a = r.weight,
              i = r.directed;
            var o = this.cy();
            var s = {};
            var l = 0;
            var u = this.nodes();
            var c = this.floydWarshall({ weight: a, directed: i });
            for (var v = 0; v < u.length; v++) {
              var f = 0;
              var h = u[v];
              for (var d = 0; d < u.length; d++) {
                if (v !== d) {
                  var p = c.distance(h, u[d]);
                  if (n) {
                    f += 1 / p;
                  } else {
                    f += p;
                  }
                }
              }
              if (!n) {
                f = 1 / f;
              }
              if (l < f) {
                l = f;
              }
              s[h.id()] = f;
            }
            return {
              closeness: function e(t) {
                if (l == 0) {
                  return 0;
                }
                if (b(t)) {
                  t = o.filter(t)[0].id();
                } else {
                  t = t.id();
                }
                return s[t] / l;
              },
            };
          },
          closenessCentrality: function e(t) {
            var r = _n(t),
              n = r.root,
              a = r.weight,
              i = r.directed,
              o = r.harmonic;
            n = this.filter(n)[0];
            var s = this.dijkstra({ root: n, weight: a, directed: i });
            var l = 0;
            var u = this.nodes();
            for (var c = 0; c < u.length; c++) {
              var v = u[c];
              if (!v.same(n)) {
                var f = s.distanceTo(v);
                if (o) {
                  l += 1 / f;
                } else {
                  l += f;
                }
              }
            }
            return o ? l : 1 / l;
          },
        };
        Dn.cc = Dn.closenessCentrality;
        Dn.ccn = Dn.closenessCentralityNormalised = Dn.closenessCentralityNormalized;
        var Cn = zt({ weight: null, directed: false });
        var Nn = {
          betweennessCentrality: function e(t) {
            var r = Cn(t),
              n = r.directed,
              a = r.weight;
            var i = a != null;
            var o = this.cy();
            var s = this.nodes();
            var l = {};
            var u = {};
            var c = 0;
            var v = {
              set: function e(t, r) {
                u[t] = r;
                if (r > c) {
                  c = r;
                }
              },
              get: function e(t) {
                return u[t];
              },
            };
            for (var f = 0; f < s.length; f++) {
              var h = s[f];
              var d = h.id();
              if (n) {
                l[d] = h.outgoers().nodes();
              } else {
                l[d] = h.openNeighborhood().nodes();
              }
              v.set(d, 0);
            }
            var p = function e(t) {
              var r = s[t].id();
              var n = [];
              var u = {};
              var c = {};
              var f = {};
              var h = new er(function (e, t) {
                return f[e] - f[t];
              });
              for (var d = 0; d < s.length; d++) {
                var p = s[d].id();
                u[p] = [];
                c[p] = 0;
                f[p] = Infinity;
              }
              c[r] = 1;
              f[r] = 0;
              h.push(r);
              while (!h.empty()) {
                var g = h.pop();
                n.push(g);
                if (i) {
                  for (var y = 0; y < l[g].length; y++) {
                    var m = l[g][y];
                    var b = o.getElementById(g);
                    var x = void 0;
                    if (b.edgesTo(m).length > 0) {
                      x = b.edgesTo(m)[0];
                    } else {
                      x = m.edgesTo(b)[0];
                    }
                    var w = a(x);
                    m = m.id();
                    if (f[m] > f[g] + w) {
                      f[m] = f[g] + w;
                      if (h.nodes.indexOf(m) < 0) {
                        h.push(m);
                      } else {
                        h.updateItem(m);
                      }
                      c[m] = 0;
                      u[m] = [];
                    }
                    if (f[m] == f[g] + w) {
                      c[m] = c[m] + c[g];
                      u[m].push(g);
                    }
                  }
                } else {
                  for (var E = 0; E < l[g].length; E++) {
                    var T = l[g][E].id();
                    if (f[T] == Infinity) {
                      h.push(T);
                      f[T] = f[g] + 1;
                    }
                    if (f[T] == f[g] + 1) {
                      c[T] = c[T] + c[g];
                      u[T].push(g);
                    }
                  }
                }
              }
              var _ = {};
              for (var D = 0; D < s.length; D++) {
                _[s[D].id()] = 0;
              }
              while (n.length > 0) {
                var C = n.pop();
                for (var N = 0; N < u[C].length; N++) {
                  var A = u[C][N];
                  _[A] = _[A] + (c[A] / c[C]) * (1 + _[C]);
                }
                if (C != s[t].id()) {
                  v.set(C, v.get(C) + _[C]);
                }
              }
            };
            for (var g = 0; g < s.length; g++) {
              p(g);
            }
            var y = {
              betweenness: function e(t) {
                var r = o.collection(t).id();
                return v.get(r);
              },
              betweennessNormalized: function e(t) {
                if (c == 0) {
                  return 0;
                }
                var r = o.collection(t).id();
                return v.get(r) / c;
              },
            };
            y.betweennessNormalised = y.betweennessNormalized;
            return y;
          },
        };
        Nn.bc = Nn.betweennessCentrality;
        var An = zt({
          expandFactor: 2,
          inflateFactor: 2,
          multFactor: 1,
          maxIterations: 20,
          attributes: [
            function (e) {
              return 1;
            },
          ],
        });
        var Ln = function e(t) {
          return An(t);
        };
        var In = function e(t, r) {
          var n = 0;
          for (var a = 0; a < r.length; a++) {
            n += r[a](t);
          }
          return n;
        };
        var Sn = function e(t, r, n) {
          for (var a = 0; a < r; a++) {
            t[a * r + a] = n;
          }
        };
        var kn = function e(t, r) {
          var n;
          for (var a = 0; a < r; a++) {
            n = 0;
            for (var i = 0; i < r; i++) {
              n += t[i * r + a];
            }
            for (var o = 0; o < r; o++) {
              t[o * r + a] = t[o * r + a] / n;
            }
          }
        };
        var On = function e(t, r, n) {
          var a = new Array(n * n);
          for (var i = 0; i < n; i++) {
            for (var o = 0; o < n; o++) {
              a[i * n + o] = 0;
            }
            for (var s = 0; s < n; s++) {
              for (var l = 0; l < n; l++) {
                a[i * n + l] += t[i * n + s] * r[s * n + l];
              }
            }
          }
          return a;
        };
        var Mn = function e(t, r, n) {
          var a = t.slice(0);
          for (var i = 1; i < n; i++) {
            t = On(t, a, r);
          }
          return t;
        };
        var Pn = function e(t, r, n) {
          var a = new Array(r * r);
          for (var i = 0; i < r * r; i++) {
            a[i] = Math.pow(t[i], n);
          }
          kn(a, r);
          return a;
        };
        var Rn = function e(t, r, n, a) {
          for (var i = 0; i < n; i++) {
            var o = Math.round(t[i] * Math.pow(10, a)) / Math.pow(10, a);
            var s = Math.round(r[i] * Math.pow(10, a)) / Math.pow(10, a);
            if (o !== s) {
              return false;
            }
          }
          return true;
        };
        var Bn = function e(t, r, n, a) {
          var i = [];
          for (var o = 0; o < r; o++) {
            var s = [];
            for (var l = 0; l < r; l++) {
              if (Math.round(t[o * r + l] * 1e3) / 1e3 > 0) {
                s.push(n[l]);
              }
            }
            if (s.length !== 0) {
              i.push(a.collection(s));
            }
          }
          return i;
        };
        var Fn = function e(t, r) {
          for (var n = 0; n < t.length; n++) {
            if (!r[n] || t[n].id() !== r[n].id()) {
              return false;
            }
          }
          return true;
        };
        var zn = function e(t) {
          for (var r = 0; r < t.length; r++) {
            for (var n = 0; n < t.length; n++) {
              if (r != n && Fn(t[r], t[n])) {
                t.splice(n, 1);
              }
            }
          }
          return t;
        };
        var Gn = function e(t) {
          var r = this.nodes();
          var n = this.edges();
          var a = this.cy();
          var i = Ln(t);
          var o = {};
          for (var s = 0; s < r.length; s++) {
            o[r[s].id()] = s;
          }
          var l = r.length,
            u = l * l;
          var c = new Array(u),
            v;
          for (var f = 0; f < u; f++) {
            c[f] = 0;
          }
          for (var h = 0; h < n.length; h++) {
            var d = n[h];
            var p = o[d.source().id()];
            var g = o[d.target().id()];
            var y = In(d, i.attributes);
            c[p * l + g] += y;
            c[g * l + p] += y;
          }
          Sn(c, l, i.multFactor);
          kn(c, l);
          var m = true;
          var b = 0;
          while (m && b < i.maxIterations) {
            m = false;
            v = Mn(c, l, i.expandFactor);
            c = Pn(v, l, i.inflateFactor);
            if (!Rn(c, v, u, 4)) {
              m = true;
            }
            b++;
          }
          var x = Bn(c, l, r, a);
          x = zn(x);
          return x;
        };
        var Yn = { markovClustering: Gn, mcl: Gn };
        var Xn = function e(t) {
          return t;
        };
        var Vn = function e(t, r) {
          return Math.abs(r - t);
        };
        var Un = function e(t, r, n) {
          return t + Vn(r, n);
        };
        var jn = function e(t, r, n) {
          return t + Math.pow(n - r, 2);
        };
        var Hn = function e(t) {
          return Math.sqrt(t);
        };
        var qn = function e(t, r, n) {
          return Math.max(t, Vn(r, n));
        };
        var Wn = function e(t, r, n, a, i) {
          var o = arguments.length > 5 && arguments[5] !== undefined ? arguments[5] : Xn;
          var s = a;
          var l, u;
          for (var c = 0; c < t; c++) {
            l = r(c);
            u = n(c);
            s = i(s, l, u);
          }
          return o(s);
        };
        var $n = {
          euclidean: function e(t, r, n) {
            if (t >= 2) {
              return Wn(t, r, n, 0, jn, Hn);
            } else {
              return Wn(t, r, n, 0, Un);
            }
          },
          squaredEuclidean: function e(t, r, n) {
            return Wn(t, r, n, 0, jn);
          },
          manhattan: function e(t, r, n) {
            return Wn(t, r, n, 0, Un);
          },
          max: function e(t, r, n) {
            return Wn(t, r, n, -Infinity, qn);
          },
        };
        $n["squared-euclidean"] = $n["squaredEuclidean"];
        $n["squaredeuclidean"] = $n["squaredEuclidean"];
        function Kn(e, t, r, n, a, i) {
          var o;
          if (x(e)) {
            o = e;
          } else {
            o = $n[e] || $n.euclidean;
          }
          if (t === 0 && x(e)) {
            return o(a, i);
          } else {
            return o(t, r, n, a, i);
          }
        }
        var Zn = zt({
          k: 2,
          m: 2,
          sensitivityThreshold: 1e-4,
          distance: "euclidean",
          maxIterations: 10,
          attributes: [],
          testMode: false,
          testCentroids: null,
        });
        var Qn = function e(t) {
          return Zn(t);
        };
        var Jn = function e(t, r, n, a, i) {
          var o = i !== "kMedoids";
          var s = o
            ? function (e) {
                return n[e];
              }
            : function (e) {
                return a[e](n);
              };
          var l = function e(t) {
            return a[t](r);
          };
          var u = n;
          var c = r;
          return Kn(t, a.length, s, l, u, c);
        };
        var ea = function e(t, r, n) {
          var a = n.length;
          var i = new Array(a);
          var o = new Array(a);
          var s = new Array(r);
          var l = null;
          for (var u = 0; u < a; u++) {
            i[u] = t.min(n[u]).value;
            o[u] = t.max(n[u]).value;
          }
          for (var c = 0; c < r; c++) {
            l = [];
            for (var v = 0; v < a; v++) {
              l[v] = Math.random() * (o[v] - i[v]) + i[v];
            }
            s[c] = l;
          }
          return s;
        };
        var ta = function e(t, r, n, a, i) {
          var o = Infinity;
          var s = 0;
          for (var l = 0; l < r.length; l++) {
            var u = Jn(n, t, r[l], a, i);
            if (u < o) {
              o = u;
              s = l;
            }
          }
          return s;
        };
        var ra = function e(t, r, n) {
          var a = [];
          var i = null;
          for (var o = 0; o < r.length; o++) {
            i = r[o];
            if (n[i.id()] === t) {
              a.push(i);
            }
          }
          return a;
        };
        var na = function e(t, r, n) {
          return Math.abs(r - t) <= n;
        };
        var aa = function e(t, r, n) {
          for (var a = 0; a < t.length; a++) {
            for (var i = 0; i < t[a].length; i++) {
              var o = Math.abs(t[a][i] - r[a][i]);
              if (o > n) {
                return false;
              }
            }
          }
          return true;
        };
        var ia = function e(t, r, n) {
          for (var a = 0; a < n; a++) {
            if (t === r[a]) return true;
          }
          return false;
        };
        var oa = function e(t, r) {
          var n = new Array(r);
          if (t.length < 50) {
            for (var a = 0; a < r; a++) {
              var i = t[Math.floor(Math.random() * t.length)];
              while (ia(i, n, a)) {
                i = t[Math.floor(Math.random() * t.length)];
              }
              n[a] = i;
            }
          } else {
            for (var o = 0; o < r; o++) {
              n[o] = t[Math.floor(Math.random() * t.length)];
            }
          }
          return n;
        };
        var sa = function e(t, r, n) {
          var a = 0;
          for (var i = 0; i < r.length; i++) {
            a += Jn("manhattan", r[i], t, n, "kMedoids");
          }
          return a;
        };
        var la = function t(r) {
          var n = this.cy();
          var a = this.nodes();
          var i = null;
          var o = Qn(r);
          var s = new Array(o.k);
          var l = {};
          var u;
          if (o.testMode) {
            if (typeof o.testCentroids === "number") {
              o.testCentroids;
              u = ea(a, o.k, o.attributes);
            } else if (e(o.testCentroids) === "object") {
              u = o.testCentroids;
            } else {
              u = ea(a, o.k, o.attributes);
            }
          } else {
            u = ea(a, o.k, o.attributes);
          }
          var c = true;
          var v = 0;
          while (c && v < o.maxIterations) {
            for (var f = 0; f < a.length; f++) {
              i = a[f];
              l[i.id()] = ta(i, u, o.distance, o.attributes, "kMeans");
            }
            c = false;
            for (var h = 0; h < o.k; h++) {
              var d = ra(h, a, l);
              if (d.length === 0) {
                continue;
              }
              var p = o.attributes.length;
              var g = u[h];
              var y = new Array(p);
              var m = new Array(p);
              for (var b = 0; b < p; b++) {
                m[b] = 0;
                for (var x = 0; x < d.length; x++) {
                  i = d[x];
                  m[b] += o.attributes[b](i);
                }
                y[b] = m[b] / d.length;
                if (!na(y[b], g[b], o.sensitivityThreshold)) {
                  c = true;
                }
              }
              u[h] = y;
              s[h] = n.collection(d);
            }
            v++;
          }
          return s;
        };
        var ua = function t(r) {
          var n = this.cy();
          var a = this.nodes();
          var i = null;
          var o = Qn(r);
          var s = new Array(o.k);
          var l;
          var u = {};
          var c;
          var v = new Array(o.k);
          if (o.testMode) {
            if (typeof o.testCentroids === "number");
            else if (e(o.testCentroids) === "object") {
              l = o.testCentroids;
            } else {
              l = oa(a, o.k);
            }
          } else {
            l = oa(a, o.k);
          }
          var f = true;
          var h = 0;
          while (f && h < o.maxIterations) {
            for (var d = 0; d < a.length; d++) {
              i = a[d];
              u[i.id()] = ta(i, l, o.distance, o.attributes, "kMedoids");
            }
            f = false;
            for (var p = 0; p < l.length; p++) {
              var g = ra(p, a, u);
              if (g.length === 0) {
                continue;
              }
              v[p] = sa(l[p], g, o.attributes);
              for (var y = 0; y < g.length; y++) {
                c = sa(g[y], g, o.attributes);
                if (c < v[p]) {
                  v[p] = c;
                  l[p] = g[y];
                  f = true;
                }
              }
              s[p] = n.collection(g);
            }
            h++;
          }
          return s;
        };
        var ca = function e(t, r, n, a, i) {
          var o, s;
          for (var l = 0; l < r.length; l++) {
            for (var u = 0; u < t.length; u++) {
              a[l][u] = Math.pow(n[l][u], i.m);
            }
          }
          for (var c = 0; c < t.length; c++) {
            for (var v = 0; v < i.attributes.length; v++) {
              o = 0;
              s = 0;
              for (var f = 0; f < r.length; f++) {
                o += a[f][c] * i.attributes[v](r[f]);
                s += a[f][c];
              }
              t[c][v] = o / s;
            }
          }
        };
        var va = function e(t, r, n, a, i) {
          for (var o = 0; o < t.length; o++) {
            r[o] = t[o].slice();
          }
          var s, l, u;
          var c = 2 / (i.m - 1);
          for (var v = 0; v < n.length; v++) {
            for (var f = 0; f < a.length; f++) {
              s = 0;
              for (var h = 0; h < n.length; h++) {
                l = Jn(i.distance, a[f], n[v], i.attributes, "cmeans");
                u = Jn(i.distance, a[f], n[h], i.attributes, "cmeans");
                s += Math.pow(l / u, c);
              }
              t[f][v] = 1 / s;
            }
          }
        };
        var fa = function e(t, r, n, a) {
          var i = new Array(n.k);
          for (var o = 0; o < i.length; o++) {
            i[o] = [];
          }
          var s;
          var l;
          for (var u = 0; u < r.length; u++) {
            s = -Infinity;
            l = -1;
            for (var c = 0; c < r[0].length; c++) {
              if (r[u][c] > s) {
                s = r[u][c];
                l = c;
              }
            }
            i[l].push(t[u]);
          }
          for (var v = 0; v < i.length; v++) {
            i[v] = a.collection(i[v]);
          }
          return i;
        };
        var ha = function e(t) {
          var r = this.cy();
          var n = this.nodes();
          var a = Qn(t);
          var i;
          var o;
          var s;
          var l;
          var u;
          l = new Array(n.length);
          for (var c = 0; c < n.length; c++) {
            l[c] = new Array(a.k);
          }
          s = new Array(n.length);
          for (var v = 0; v < n.length; v++) {
            s[v] = new Array(a.k);
          }
          for (var f = 0; f < n.length; f++) {
            var h = 0;
            for (var d = 0; d < a.k; d++) {
              s[f][d] = Math.random();
              h += s[f][d];
            }
            for (var p = 0; p < a.k; p++) {
              s[f][p] = s[f][p] / h;
            }
          }
          o = new Array(a.k);
          for (var g = 0; g < a.k; g++) {
            o[g] = new Array(a.attributes.length);
          }
          u = new Array(n.length);
          for (var y = 0; y < n.length; y++) {
            u[y] = new Array(a.k);
          }
          var m = true;
          var b = 0;
          while (m && b < a.maxIterations) {
            m = false;
            ca(o, n, s, u, a);
            va(s, l, o, n, a);
            if (!aa(s, l, a.sensitivityThreshold)) {
              m = true;
            }
            b++;
          }
          i = fa(n, s, a, r);
          return { clusters: i, degreeOfMembership: s };
        };
        var da = { kMeans: la, kMedoids: ua, fuzzyCMeans: ha, fcm: ha };
        var pa = zt({
          distance: "euclidean",
          linkage: "min",
          mode: "threshold",
          threshold: Infinity,
          addDendrogram: false,
          dendrogramDepth: 0,
          attributes: [],
        });
        var ga = { single: "min", complete: "max" };
        var ya = function e(t) {
          var r = pa(t);
          var n = ga[r.linkage];
          if (n != null) {
            r.linkage = n;
          }
          return r;
        };
        var ma = function e(t, r, n, a, i) {
          var o = 0;
          var s = Infinity;
          var l;
          var u = i.attributes;
          var c = function e(t, r) {
            return Kn(
              i.distance,
              u.length,
              function (e) {
                return u[e](t);
              },
              function (e) {
                return u[e](r);
              },
              t,
              r
            );
          };
          for (var v = 0; v < t.length; v++) {
            var f = t[v].key;
            var h = n[f][a[f]];
            if (h < s) {
              o = f;
              s = h;
            }
          }
          if ((i.mode === "threshold" && s >= i.threshold) || (i.mode === "dendrogram" && t.length === 1)) {
            return false;
          }
          var d = r[o];
          var p = r[a[o]];
          var g;
          if (i.mode === "dendrogram") {
            g = { left: d, right: p, key: d.key };
          } else {
            g = { value: d.value.concat(p.value), key: d.key };
          }
          t[d.index] = g;
          t.splice(p.index, 1);
          r[d.key] = g;
          for (var y = 0; y < t.length; y++) {
            var m = t[y];
            if (d.key === m.key) {
              l = Infinity;
            } else if (i.linkage === "min") {
              l = n[d.key][m.key];
              if (n[d.key][m.key] > n[p.key][m.key]) {
                l = n[p.key][m.key];
              }
            } else if (i.linkage === "max") {
              l = n[d.key][m.key];
              if (n[d.key][m.key] < n[p.key][m.key]) {
                l = n[p.key][m.key];
              }
            } else if (i.linkage === "mean") {
              l = (n[d.key][m.key] * d.size + n[p.key][m.key] * p.size) / (d.size + p.size);
            } else {
              if (i.mode === "dendrogram") l = c(m.value, d.value);
              else l = c(m.value[0], d.value[0]);
            }
            n[d.key][m.key] = n[m.key][d.key] = l;
          }
          for (var b = 0; b < t.length; b++) {
            var x = t[b].key;
            if (a[x] === d.key || a[x] === p.key) {
              var w = x;
              for (var E = 0; E < t.length; E++) {
                var T = t[E].key;
                if (n[x][T] < n[x][w]) {
                  w = T;
                }
              }
              a[x] = w;
            }
            t[b].index = b;
          }
          d.key = p.key = d.index = p.index = null;
          return true;
        };
        var ba = function e(t, r, n) {
          if (!t) return;
          if (t.value) {
            r.push(t.value);
          } else {
            if (t.left) e(t.left, r);
            if (t.right) e(t.right, r);
          }
        };
        var xa = function e(t, r) {
          if (!t) return "";
          if (t.left && t.right) {
            var n = e(t.left, r);
            var a = e(t.right, r);
            var i = r.add({ group: "nodes", data: { id: n + "," + a } });
            r.add({ group: "edges", data: { source: n, target: i.id() } });
            r.add({ group: "edges", data: { source: a, target: i.id() } });
            return i.id();
          } else if (t.value) {
            return t.value.id();
          }
        };
        var wa = function e(t, r, n) {
          if (!t) return [];
          var a = [],
            i = [],
            o = [];
          if (r === 0) {
            if (t.left) ba(t.left, a);
            if (t.right) ba(t.right, i);
            o = a.concat(i);
            return [n.collection(o)];
          } else if (r === 1) {
            if (t.value) {
              return [n.collection(t.value)];
            } else {
              if (t.left) ba(t.left, a);
              if (t.right) ba(t.right, i);
              return [n.collection(a), n.collection(i)];
            }
          } else {
            if (t.value) {
              return [n.collection(t.value)];
            } else {
              if (t.left) a = e(t.left, r - 1, n);
              if (t.right) i = e(t.right, r - 1, n);
              return a.concat(i);
            }
          }
        };
        var Ea = function e(t) {
          var r = this.cy();
          var n = this.nodes();
          var a = ya(t);
          var i = a.attributes;
          var o = function e(t, r) {
            return Kn(
              a.distance,
              i.length,
              function (e) {
                return i[e](t);
              },
              function (e) {
                return i[e](r);
              },
              t,
              r
            );
          };
          var s = [];
          var l = [];
          var u = [];
          var c = [];
          for (var v = 0; v < n.length; v++) {
            var f = { value: a.mode === "dendrogram" ? n[v] : [n[v]], key: v, index: v };
            s[v] = f;
            c[v] = f;
            l[v] = [];
            u[v] = 0;
          }
          for (var h = 0; h < s.length; h++) {
            for (var d = 0; d <= h; d++) {
              var p = void 0;
              if (a.mode === "dendrogram") {
                p = h === d ? Infinity : o(s[h].value, s[d].value);
              } else {
                p = h === d ? Infinity : o(s[h].value[0], s[d].value[0]);
              }
              l[h][d] = p;
              l[d][h] = p;
              if (p < l[h][u[h]]) {
                u[h] = d;
              }
            }
          }
          var g = ma(s, c, l, u, a);
          while (g) {
            g = ma(s, c, l, u, a);
          }
          var y;
          if (a.mode === "dendrogram") {
            y = wa(s[0], a.dendrogramDepth, r);
            if (a.addDendrogram) xa(s[0], r);
          } else {
            y = new Array(s.length);
            s.forEach(function (e, t) {
              e.key = e.index = null;
              y[t] = r.collection(e.value);
            });
          }
          return y;
        };
        var Ta = { hierarchicalClustering: Ea, hca: Ea };
        var _a = zt({ distance: "euclidean", preference: "median", damping: 0.8, maxIterations: 1e3, minIterations: 100, attributes: [] });
        var Da = function e(t) {
          var r = t.damping;
          var n = t.preference;
          if (!(0.5 <= r && r < 1)) {
            It("Damping must range on [0.5, 1).  Got: ".concat(r));
          }
          var a = ["median", "mean", "min", "max"];
          if (
            !(
              a.some(function (e) {
                return e === n;
              }) || _(n)
            )
          ) {
            It(
              "Preference must be one of ["
                .concat(
                  a
                    .map(function (e) {
                      return "'".concat(e, "'");
                    })
                    .join(", "),
                  "] or a number.  Got: "
                )
                .concat(n)
            );
          }
          return _a(t);
        };
        var Ca = function e(t, r, n, a) {
          var i = function e(t, r) {
            return a[r](t);
          };
          return -Kn(
            t,
            a.length,
            function (e) {
              return i(r, e);
            },
            function (e) {
              return i(n, e);
            },
            r,
            n
          );
        };
        var Na = function e(t, r) {
          var n = null;
          if (r === "median") {
            n = wr(t);
          } else if (r === "mean") {
            n = xr(t);
          } else if (r === "min") {
            n = mr(t);
          } else if (r === "max") {
            n = br(t);
          } else {
            n = r;
          }
          return n;
        };
        var Aa = function e(t, r, n) {
          var a = [];
          for (var i = 0; i < t; i++) {
            if (r[i * t + i] + n[i * t + i] > 0) {
              a.push(i);
            }
          }
          return a;
        };
        var La = function e(t, r, n) {
          var a = [];
          for (var i = 0; i < t; i++) {
            var o = -1;
            var s = -Infinity;
            for (var l = 0; l < n.length; l++) {
              var u = n[l];
              if (r[i * t + u] > s) {
                o = u;
                s = r[i * t + u];
              }
            }
            if (o > 0) {
              a.push(o);
            }
          }
          for (var c = 0; c < n.length; c++) {
            a[n[c]] = n[c];
          }
          return a;
        };
        var Ia = function e(t, r, n) {
          var a = La(t, r, n);
          for (var i = 0; i < n.length; i++) {
            var o = [];
            for (var s = 0; s < a.length; s++) {
              if (a[s] === n[i]) {
                o.push(s);
              }
            }
            var l = -1;
            var u = -Infinity;
            for (var c = 0; c < o.length; c++) {
              var v = 0;
              for (var f = 0; f < o.length; f++) {
                v += r[o[f] * t + o[c]];
              }
              if (v > u) {
                l = c;
                u = v;
              }
            }
            n[i] = o[l];
          }
          a = La(t, r, n);
          return a;
        };
        var Sa = function e(t) {
          var r = this.cy();
          var n = this.nodes();
          var a = Da(t);
          var i = {};
          for (var o = 0; o < n.length; o++) {
            i[n[o].id()] = o;
          }
          var s;
          var l;
          var u;
          var c;
          var v;
          var f;
          s = n.length;
          l = s * s;
          u = new Array(l);
          for (var h = 0; h < l; h++) {
            u[h] = -Infinity;
          }
          for (var d = 0; d < s; d++) {
            for (var p = 0; p < s; p++) {
              if (d !== p) {
                u[d * s + p] = Ca(a.distance, n[d], n[p], a.attributes);
              }
            }
          }
          c = Na(u, a.preference);
          for (var g = 0; g < s; g++) {
            u[g * s + g] = c;
          }
          v = new Array(l);
          for (var y = 0; y < l; y++) {
            v[y] = 0;
          }
          f = new Array(l);
          for (var m = 0; m < l; m++) {
            f[m] = 0;
          }
          var b = new Array(s);
          var x = new Array(s);
          var w = new Array(s);
          for (var E = 0; E < s; E++) {
            b[E] = 0;
            x[E] = 0;
            w[E] = 0;
          }
          var T = new Array(s * a.minIterations);
          for (var _ = 0; _ < T.length; _++) {
            T[_] = 0;
          }
          var D;
          for (D = 0; D < a.maxIterations; D++) {
            for (var C = 0; C < s; C++) {
              var N = -Infinity,
                A = -Infinity,
                L = -1,
                I = 0;
              for (var S = 0; S < s; S++) {
                b[S] = v[C * s + S];
                I = f[C * s + S] + u[C * s + S];
                if (I >= N) {
                  A = N;
                  N = I;
                  L = S;
                } else if (I > A) {
                  A = I;
                }
              }
              for (var k = 0; k < s; k++) {
                v[C * s + k] = (1 - a.damping) * (u[C * s + k] - N) + a.damping * b[k];
              }
              v[C * s + L] = (1 - a.damping) * (u[C * s + L] - A) + a.damping * b[L];
            }
            for (var O = 0; O < s; O++) {
              var M = 0;
              for (var P = 0; P < s; P++) {
                b[P] = f[P * s + O];
                x[P] = Math.max(0, v[P * s + O]);
                M += x[P];
              }
              M -= x[O];
              x[O] = v[O * s + O];
              M += x[O];
              for (var R = 0; R < s; R++) {
                f[R * s + O] = (1 - a.damping) * Math.min(0, M - x[R]) + a.damping * b[R];
              }
              f[O * s + O] = (1 - a.damping) * (M - x[O]) + a.damping * b[O];
            }
            var B = 0;
            for (var F = 0; F < s; F++) {
              var z = f[F * s + F] + v[F * s + F] > 0 ? 1 : 0;
              T[(D % a.minIterations) * s + F] = z;
              B += z;
            }
            if (B > 0 && (D >= a.minIterations - 1 || D == a.maxIterations - 1)) {
              var G = 0;
              for (var Y = 0; Y < s; Y++) {
                w[Y] = 0;
                for (var X = 0; X < a.minIterations; X++) {
                  w[Y] += T[X * s + Y];
                }
                if (w[Y] === 0 || w[Y] === a.minIterations) {
                  G++;
                }
              }
              if (G === s) {
                break;
              }
            }
          }
          var V = Aa(s, v, f);
          var U = Ia(s, u, V);
          var j = {};
          for (var H = 0; H < V.length; H++) {
            j[V[H]] = [];
          }
          for (var q = 0; q < n.length; q++) {
            var W = i[n[q].id()];
            var $ = U[W];
            if ($ != null) {
              j[$].push(n[q]);
            }
          }
          var K = new Array(V.length);
          for (var Z = 0; Z < V.length; Z++) {
            K[Z] = r.collection(j[V[Z]]);
          }
          return K;
        };
        var ka = { affinityPropagation: Sa, ap: Sa };
        var Oa = zt({ root: undefined, directed: false });
        var Ma = {
          hierholzer: function e(t) {
            if (!E(t)) {
              var r = arguments;
              t = { root: r[0], directed: r[1] };
            }
            var n = Oa(t),
              a = n.root,
              i = n.directed;
            var o = this;
            var s = false;
            var l;
            var u;
            var c;
            if (a) c = b(a) ? this.filter(a)[0].id() : a[0].id();
            var v = {};
            var f = {};
            if (i) {
              o.forEach(function (e) {
                var t = e.id();
                if (e.isNode()) {
                  var r = e.indegree(true);
                  var n = e.outdegree(true);
                  var a = r - n;
                  var i = n - r;
                  if (a == 1) {
                    if (l) s = true;
                    else l = t;
                  } else if (i == 1) {
                    if (u) s = true;
                    else u = t;
                  } else if (i > 1 || a > 1) {
                    s = true;
                  }
                  v[t] = [];
                  e.outgoers().forEach(function (e) {
                    if (e.isEdge()) v[t].push(e.id());
                  });
                } else {
                  f[t] = [undefined, e.target().id()];
                }
              });
            } else {
              o.forEach(function (e) {
                var t = e.id();
                if (e.isNode()) {
                  var r = e.degree(true);
                  if (r % 2) {
                    if (!l) l = t;
                    else if (!u) u = t;
                    else s = true;
                  }
                  v[t] = [];
                  e.connectedEdges().forEach(function (e) {
                    return v[t].push(e.id());
                  });
                } else {
                  f[t] = [e.source().id(), e.target().id()];
                }
              });
            }
            var h = { found: false, trail: undefined };
            if (s) return h;
            else if (u && l) {
              if (i) {
                if (c && u != c) {
                  return h;
                }
                c = u;
              } else {
                if (c && u != c && l != c) {
                  return h;
                } else if (!c) {
                  c = u;
                }
              }
            } else {
              if (!c) c = o[0].id();
            }
            var d = function e(t) {
              var r = t;
              var n = [t];
              var a, o, s;
              while (v[r].length) {
                a = v[r].shift();
                o = f[a][0];
                s = f[a][1];
                if (r != s) {
                  v[s] = v[s].filter(function (e) {
                    return e != a;
                  });
                  r = s;
                } else if (!i && r != o) {
                  v[o] = v[o].filter(function (e) {
                    return e != a;
                  });
                  r = o;
                }
                n.unshift(a);
                n.unshift(r);
              }
              return n;
            };
            var p = [];
            var g = [];
            g = d(c);
            while (g.length != 1) {
              if (v[g[0]].length == 0) {
                p.unshift(o.getElementById(g.shift()));
                p.unshift(o.getElementById(g.shift()));
              } else {
                g = d(g.shift()).concat(g);
              }
            }
            p.unshift(o.getElementById(g.shift()));
            for (var y in v) {
              if (v[y].length) {
                return h;
              }
            }
            h.found = true;
            h.trail = this.spawn(p, true);
            return h;
          },
        };
        var Pa = function e() {
          var t = this;
          var r = {};
          var n = 0;
          var a = 0;
          var i = [];
          var o = [];
          var s = {};
          var l = function e(n, a) {
            var s = o.length - 1;
            var l = [];
            var u = t.spawn();
            while (o[s].x != n || o[s].y != a) {
              l.push(o.pop().edge);
              s--;
            }
            l.push(o.pop().edge);
            l.forEach(function (e) {
              var n = e.connectedNodes().intersection(t);
              u.merge(e);
              n.forEach(function (e) {
                var n = e.id();
                var a = e.connectedEdges().intersection(t);
                u.merge(e);
                if (!r[n].cutVertex) {
                  u.merge(a);
                } else {
                  u.merge(
                    a.filter(function (e) {
                      return e.isLoop();
                    })
                  );
                }
              });
            });
            i.push(u);
          };
          var u = function e(u, c, v) {
            if (u === v) a += 1;
            r[c] = { id: n, low: n++, cutVertex: false };
            var f = t.getElementById(c).connectedEdges().intersection(t);
            if (f.size() === 0) {
              i.push(t.spawn(t.getElementById(c)));
            } else {
              var h, d, p, g;
              f.forEach(function (t) {
                h = t.source().id();
                d = t.target().id();
                p = h === c ? d : h;
                if (p !== v) {
                  g = t.id();
                  if (!s[g]) {
                    s[g] = true;
                    o.push({ x: c, y: p, edge: t });
                  }
                  if (!(p in r)) {
                    e(u, p, c);
                    r[c].low = Math.min(r[c].low, r[p].low);
                    if (r[c].id <= r[p].low) {
                      r[c].cutVertex = true;
                      l(c, p);
                    }
                  } else {
                    r[c].low = Math.min(r[c].low, r[p].id);
                  }
                }
              });
            }
          };
          t.forEach(function (e) {
            if (e.isNode()) {
              var t = e.id();
              if (!(t in r)) {
                a = 0;
                u(t, t);
                r[t].cutVertex = a > 1;
              }
            }
          });
          var c = Object.keys(r)
            .filter(function (e) {
              return r[e].cutVertex;
            })
            .map(function (e) {
              return t.getElementById(e);
            });
          return { cut: t.spawn(c), components: i };
        };
        var Ra = { hopcroftTarjanBiconnected: Pa, htbc: Pa, htb: Pa, hopcroftTarjanBiconnectedComponents: Pa };
        var Ba = function e() {
          var t = this;
          var r = {};
          var n = 0;
          var a = [];
          var i = [];
          var o = t.spawn(t);
          var s = function e(s) {
            i.push(s);
            r[s] = { index: n, low: n++, explored: false };
            var l = t.getElementById(s).connectedEdges().intersection(t);
            l.forEach(function (t) {
              var n = t.target().id();
              if (n !== s) {
                if (!(n in r)) {
                  e(n);
                }
                if (!r[n].explored) {
                  r[s].low = Math.min(r[s].low, r[n].low);
                }
              }
            });
            if (r[s].index === r[s].low) {
              var u = t.spawn();
              for (;;) {
                var c = i.pop();
                u.merge(t.getElementById(c));
                r[c].low = r[s].index;
                r[c].explored = true;
                if (c === s) {
                  break;
                }
              }
              var v = u.edgesWith(u);
              var f = u.merge(v);
              a.push(f);
              o = o.difference(f);
            }
          };
          t.forEach(function (e) {
            if (e.isNode()) {
              var t = e.id();
              if (!(t in r)) {
                s(t);
              }
            }
          });
          return { cut: o, components: a };
        };
        var Fa = { tarjanStronglyConnected: Ba, tsc: Ba, tscc: Ba, tarjanStronglyConnectedComponents: Ba };
        var za = {};
        [Qt, rr, nr, ir, sr, ur, hr, wn, Tn, Dn, Nn, Yn, da, Ta, ka, Ma, Ra, Fa].forEach(function (e) {
          Q(za, e);
        });
        var Ga = 0;
        var Ya = 1;
        var Xa = 2;
        var Va = function e(t) {
          if (!(this instanceof e)) return new e(t);
          this.id = "Thenable/1.0.7";
          this.state = Ga;
          this.fulfillValue = undefined;
          this.rejectReason = undefined;
          this.onFulfilled = [];
          this.onRejected = [];
          this.proxy = { then: this.then.bind(this) };
          if (typeof t === "function") t.call(this, this.fulfill.bind(this), this.reject.bind(this));
        };
        Va.prototype = {
          fulfill: function e(t) {
            return Ua(this, Ya, "fulfillValue", t);
          },
          reject: function e(t) {
            return Ua(this, Xa, "rejectReason", t);
          },
          then: function e(t, r) {
            var n = this;
            var a = new Va();
            n.onFulfilled.push(qa(t, a, "fulfill"));
            n.onRejected.push(qa(r, a, "reject"));
            ja(n);
            return a.proxy;
          },
        };
        var Ua = function e(t, r, n, a) {
          if (t.state === Ga) {
            t.state = r;
            t[n] = a;
            ja(t);
          }
          return t;
        };
        var ja = function e(t) {
          if (t.state === Ya) Ha(t, "onFulfilled", t.fulfillValue);
          else if (t.state === Xa) Ha(t, "onRejected", t.rejectReason);
        };
        var Ha = function e(t, r, n) {
          if (t[r].length === 0) return;
          var a = t[r];
          t[r] = [];
          var i = function e() {
            for (var t = 0; t < a.length; t++) {
              a[t](n);
            }
          };
          if (typeof setImmediate === "function") setImmediate(i);
          else setTimeout(i, 0);
        };
        var qa = function e(t, r, n) {
          return function (e) {
            if (typeof t !== "function") r[n].call(r, e);
            else {
              var a;
              try {
                a = t(e);
              } catch (i) {
                r.reject(i);
                return;
              }
              Wa(r, a);
            }
          };
        };
        var Wa = function t(r, n) {
          if (r === n || r.proxy === n) {
            r.reject(new TypeError("cannot resolve promise with itself"));
            return;
          }
          var a;
          if ((e(n) === "object" && n !== null) || typeof n === "function") {
            try {
              a = n.then;
            } catch (o) {
              r.reject(o);
              return;
            }
          }
          if (typeof a === "function") {
            var i = false;
            try {
              a.call(
                n,
                function (e) {
                  if (i) return;
                  i = true;
                  if (e === n) r.reject(new TypeError("circular thenable chain"));
                  else t(r, e);
                },
                function (e) {
                  if (i) return;
                  i = true;
                  r.reject(e);
                }
              );
            } catch (o) {
              if (!i) r.reject(o);
            }
            return;
          }
          r.fulfill(n);
        };
        Va.all = function (e) {
          return new Va(function (t, r) {
            var n = new Array(e.length);
            var a = 0;
            var i = function r(i, o) {
              n[i] = o;
              a++;
              if (a === e.length) {
                t(n);
              }
            };
            for (var o = 0; o < e.length; o++) {
              (function (t) {
                var n = e[t];
                var a = n != null && n.then != null;
                if (a) {
                  n.then(
                    function (e) {
                      i(t, e);
                    },
                    function (e) {
                      r(e);
                    }
                  );
                } else {
                  var o = n;
                  i(t, o);
                }
              })(o);
            }
          });
        };
        Va.resolve = function (e) {
          return new Va(function (t, r) {
            t(e);
          });
        };
        Va.reject = function (e) {
          return new Va(function (t, r) {
            r(e);
          });
        };
        var $a = typeof Promise !== "undefined" ? Promise : Va;
        var Ka = function e(t, r, n) {
          var a = I(t);
          var i = !a;
          var o = (this._private = Q({ duration: 1e3 }, r, n));
          o.target = t;
          o.style = o.style || o.css;
          o.started = false;
          o.playing = false;
          o.hooked = false;
          o.applying = false;
          o.progress = 0;
          o.completes = [];
          o.frames = [];
          if (o.complete && x(o.complete)) {
            o.completes.push(o.complete);
          }
          if (i) {
            var s = t.position();
            o.startPosition = o.startPosition || { x: s.x, y: s.y };
            o.startStyle = o.startStyle || t.cy().style().getAnimationStartStyle(t, o.style);
          }
          if (a) {
            var l = t.pan();
            o.startPan = { x: l.x, y: l.y };
            o.startZoom = t.zoom();
          }
          this.length = 1;
          this[0] = this;
        };
        var Za = Ka.prototype;
        Q(Za, {
          instanceString: function e() {
            return "animation";
          },
          hook: function e() {
            var t = this._private;
            if (!t.hooked) {
              var r;
              var n = t.target._private.animation;
              if (t.queue) {
                r = n.queue;
              } else {
                r = n.current;
              }
              r.push(this);
              if (N(t.target)) {
                t.target.cy().addToAnimationPool(t.target);
              }
              t.hooked = true;
            }
            return this;
          },
          play: function e() {
            var t = this._private;
            if (t.progress === 1) {
              t.progress = 0;
            }
            t.playing = true;
            t.started = false;
            t.stopped = false;
            this.hook();
            return this;
          },
          playing: function e() {
            return this._private.playing;
          },
          apply: function e() {
            var t = this._private;
            t.applying = true;
            t.started = false;
            t.stopped = false;
            this.hook();
            return this;
          },
          applying: function e() {
            return this._private.applying;
          },
          pause: function e() {
            var t = this._private;
            t.playing = false;
            t.started = false;
            return this;
          },
          stop: function e() {
            var t = this._private;
            t.playing = false;
            t.started = false;
            t.stopped = true;
            return this;
          },
          rewind: function e() {
            return this.progress(0);
          },
          fastforward: function e() {
            return this.progress(1);
          },
          time: function e(t) {
            var r = this._private;
            if (t === undefined) {
              return r.progress * r.duration;
            } else {
              return this.progress(t / r.duration);
            }
          },
          progress: function e(t) {
            var r = this._private;
            var n = r.playing;
            if (t === undefined) {
              return r.progress;
            } else {
              if (n) {
                this.pause();
              }
              r.progress = t;
              r.started = false;
              if (n) {
                this.play();
              }
            }
            return this;
          },
          completed: function e() {
            return this._private.progress === 1;
          },
          reverse: function e() {
            var t = this._private;
            var r = t.playing;
            if (r) {
              this.pause();
            }
            t.progress = 1 - t.progress;
            t.started = false;
            var n = function e(r, n) {
              var a = t[r];
              if (a == null) {
                return;
              }
              t[r] = t[n];
              t[n] = a;
            };
            n("zoom", "startZoom");
            n("pan", "startPan");
            n("position", "startPosition");
            if (t.style) {
              for (var a = 0; a < t.style.length; a++) {
                var i = t.style[a];
                var o = i.name;
                var s = t.startStyle[o];
                t.startStyle[o] = i;
                t.style[a] = s;
              }
            }
            if (r) {
              this.play();
            }
            return this;
          },
          promise: function e(t) {
            var r = this._private;
            var n;
            switch (t) {
              case "frame":
                n = r.frames;
                break;
              default:
              case "complete":
              case "completed":
                n = r.completes;
            }
            return new $a(function (e, t) {
              n.push(function () {
                e();
              });
            });
          },
        });
        Za.complete = Za.completed;
        Za.run = Za.play;
        Za.running = Za.playing;
        var Qa = {
          animated: function e() {
            return function e() {
              var t = this;
              var r = t.length !== undefined;
              var n = r ? t : [t];
              var a = this._private.cy || this;
              if (!a.styleEnabled()) {
                return false;
              }
              var i = n[0];
              if (i) {
                return i._private.animation.current.length > 0;
              }
            };
          },
          clearQueue: function e() {
            return function e() {
              var t = this;
              var r = t.length !== undefined;
              var n = r ? t : [t];
              var a = this._private.cy || this;
              if (!a.styleEnabled()) {
                return this;
              }
              for (var i = 0; i < n.length; i++) {
                var o = n[i];
                o._private.animation.queue = [];
              }
              return this;
            };
          },
          delay: function e() {
            return function e(t, r) {
              var n = this._private.cy || this;
              if (!n.styleEnabled()) {
                return this;
              }
              return this.animate({ delay: t, duration: t, complete: r });
            };
          },
          delayAnimation: function e() {
            return function e(t, r) {
              var n = this._private.cy || this;
              if (!n.styleEnabled()) {
                return this;
              }
              return this.animation({ delay: t, duration: t, complete: r });
            };
          },
          animation: function e() {
            return function e(t, r) {
              var n = this;
              var a = n.length !== undefined;
              var i = a ? n : [n];
              var o = this._private.cy || this;
              var s = !a;
              var l = !s;
              if (!o.styleEnabled()) {
                return this;
              }
              var u = o.style();
              t = Q({}, t, r);
              var c = Object.keys(t).length === 0;
              if (c) {
                return new Ka(i[0], t);
              }
              if (t.duration === undefined) {
                t.duration = 400;
              }
              switch (t.duration) {
                case "slow":
                  t.duration = 600;
                  break;
                case "fast":
                  t.duration = 200;
                  break;
              }
              if (l) {
                t.style = u.getPropsList(t.style || t.css);
                t.css = undefined;
              }
              if (l && t.renderedPosition != null) {
                var v = t.renderedPosition;
                var f = o.pan();
                var h = o.zoom();
                t.position = gr(v, h, f);
              }
              if (s && t.panBy != null) {
                var d = t.panBy;
                var p = o.pan();
                t.pan = { x: p.x + d.x, y: p.y + d.y };
              }
              var g = t.center || t.centre;
              if (s && g != null) {
                var y = o.getCenterPan(g.eles, t.zoom);
                if (y != null) {
                  t.pan = y;
                }
              }
              if (s && t.fit != null) {
                var m = t.fit;
                var b = o.getFitViewport(m.eles || m.boundingBox, m.padding);
                if (b != null) {
                  t.pan = b.pan;
                  t.zoom = b.zoom;
                }
              }
              if (s && E(t.zoom)) {
                var x = o.getZoomedViewport(t.zoom);
                if (x != null) {
                  if (x.zoomed) {
                    t.zoom = x.zoom;
                  }
                  if (x.panned) {
                    t.pan = x.pan;
                  }
                } else {
                  t.zoom = null;
                }
              }
              return new Ka(i[0], t);
            };
          },
          animate: function e() {
            return function e(t, r) {
              var n = this;
              var a = n.length !== undefined;
              var i = a ? n : [n];
              var o = this._private.cy || this;
              if (!o.styleEnabled()) {
                return this;
              }
              if (r) {
                t = Q({}, t, r);
              }
              for (var s = 0; s < i.length; s++) {
                var l = i[s];
                var u = l.animated() && (t.queue === undefined || t.queue);
                var c = l.animation(t, u ? { queue: true } : undefined);
                c.play();
              }
              return this;
            };
          },
          stop: function e() {
            return function e(t, r) {
              var n = this;
              var a = n.length !== undefined;
              var i = a ? n : [n];
              var o = this._private.cy || this;
              if (!o.styleEnabled()) {
                return this;
              }
              for (var s = 0; s < i.length; s++) {
                var l = i[s];
                var u = l._private;
                var c = u.animation.current;
                for (var v = 0; v < c.length; v++) {
                  var f = c[v];
                  var h = f._private;
                  if (r) {
                    h.duration = 0;
                  }
                }
                if (t) {
                  u.animation.queue = [];
                }
                if (!r) {
                  u.animation.current = [];
                }
              }
              o.notify("draw");
              return this;
            };
          },
        };
        var Ja = Array.isArray;
        var ei = Ja;
        var ti = /\.|\[(?:[^[\]]*|(["'])(?:(?!\1)[^\\]|\\.)*?\1)\]/,
          ri = /^\w*$/;
        function ni(e, t) {
          if (ei(e)) {
            return false;
          }
          var r = typeof e;
          if (r == "number" || r == "symbol" || r == "boolean" || e == null || je(e)) {
            return true;
          }
          return ri.test(e) || !ti.test(e) || (t != null && e in Object(t));
        }
        var ai = ni;
        var ii = "[object AsyncFunction]",
          oi = "[object Function]",
          si = "[object GeneratorFunction]",
          li = "[object Proxy]";
        function ui(e) {
          if (!le(e)) {
            return false;
          }
          var t = Ge(e);
          return t == oi || t == si || t == ii || t == li;
        }
        var ci = ui;
        var vi = pe["__core-js_shared__"];
        var fi = vi;
        var hi = (function () {
          var e = /[^.]+$/.exec((fi && fi.keys && fi.keys.IE_PROTO) || "");
          return e ? "Symbol(src)_1." + e : "";
        })();
        function di(e) {
          return !!hi && hi in e;
        }
        var pi = di;
        var gi = Function.prototype;
        var yi = gi.toString;
        function mi(e) {
          if (e != null) {
            try {
              return yi.call(e);
            } catch (t) {}
            try {
              return e + "";
            } catch (t) {}
          }
          return "";
        }
        var bi = mi;
        var xi = /[\\^$.*+?()[\]{}|]/g;
        var wi = /^\[object .+?Constructor\]$/;
        var Ei = Function.prototype,
          Ti = Object.prototype;
        var _i = Ei.toString;
        var Di = Ti.hasOwnProperty;
        var Ci = RegExp(
          "^" +
            _i
              .call(Di)
              .replace(xi, "\\$&")
              .replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g, "$1.*?") +
            "$"
        );
        function Ni(e) {
          if (!le(e) || pi(e)) {
            return false;
          }
          var t = ci(e) ? Ci : wi;
          return t.test(bi(e));
        }
        var Ai = Ni;
        function Li(e, t) {
          return e == null ? undefined : e[t];
        }
        var Ii = Li;
        function Si(e, t) {
          var r = Ii(e, t);
          return Ai(r) ? r : undefined;
        }
        var ki = Si;
        var Oi = ki(Object, "create");
        var Mi = Oi;
        function Pi() {
          this.__data__ = Mi ? Mi(null) : {};
          this.size = 0;
        }
        var Ri = Pi;
        function Bi(e) {
          var t = this.has(e) && delete this.__data__[e];
          this.size -= t ? 1 : 0;
          return t;
        }
        var Fi = Bi;
        var zi = "__lodash_hash_undefined__";
        var Gi = Object.prototype;
        var Yi = Gi.hasOwnProperty;
        function Xi(e) {
          var t = this.__data__;
          if (Mi) {
            var r = t[e];
            return r === zi ? undefined : r;
          }
          return Yi.call(t, e) ? t[e] : undefined;
        }
        var Vi = Xi;
        var Ui = Object.prototype;
        var ji = Ui.hasOwnProperty;
        function Hi(e) {
          var t = this.__data__;
          return Mi ? t[e] !== undefined : ji.call(t, e);
        }
        var qi = Hi;
        var Wi = "__lodash_hash_undefined__";
        function $i(e, t) {
          var r = this.__data__;
          this.size += this.has(e) ? 0 : 1;
          r[e] = Mi && t === undefined ? Wi : t;
          return this;
        }
        var Ki = $i;
        function Zi(e) {
          var t = -1,
            r = e == null ? 0 : e.length;
          this.clear();
          while (++t < r) {
            var n = e[t];
            this.set(n[0], n[1]);
          }
        }
        Zi.prototype.clear = Ri;
        Zi.prototype["delete"] = Fi;
        Zi.prototype.get = Vi;
        Zi.prototype.has = qi;
        Zi.prototype.set = Ki;
        var Qi = Zi;
        function Ji() {
          this.__data__ = [];
          this.size = 0;
        }
        var eo = Ji;
        function to(e, t) {
          return e === t || (e !== e && t !== t);
        }
        var ro = to;
        function no(e, t) {
          var r = e.length;
          while (r--) {
            if (ro(e[r][0], t)) {
              return r;
            }
          }
          return -1;
        }
        var ao = no;
        var io = Array.prototype;
        var oo = io.splice;
        function so(e) {
          var t = this.__data__,
            r = ao(t, e);
          if (r < 0) {
            return false;
          }
          var n = t.length - 1;
          if (r == n) {
            t.pop();
          } else {
            oo.call(t, r, 1);
          }
          --this.size;
          return true;
        }
        var lo = so;
        function uo(e) {
          var t = this.__data__,
            r = ao(t, e);
          return r < 0 ? undefined : t[r][1];
        }
        var co = uo;
        function vo(e) {
          return ao(this.__data__, e) > -1;
        }
        var fo = vo;
        function ho(e, t) {
          var r = this.__data__,
            n = ao(r, e);
          if (n < 0) {
            ++this.size;
            r.push([e, t]);
          } else {
            r[n][1] = t;
          }
          return this;
        }
        var po = ho;
        function go(e) {
          var t = -1,
            r = e == null ? 0 : e.length;
          this.clear();
          while (++t < r) {
            var n = e[t];
            this.set(n[0], n[1]);
          }
        }
        go.prototype.clear = eo;
        go.prototype["delete"] = lo;
        go.prototype.get = co;
        go.prototype.has = fo;
        go.prototype.set = po;
        var yo = go;
        var mo = ki(pe, "Map");
        var bo = mo;
        function xo() {
          this.size = 0;
          this.__data__ = { hash: new Qi(), map: new (bo || yo)(), string: new Qi() };
        }
        var wo = xo;
        function Eo(e) {
          var t = typeof e;
          return t == "string" || t == "number" || t == "symbol" || t == "boolean" ? e !== "__proto__" : e === null;
        }
        var To = Eo;
        function _o(e, t) {
          var r = e.__data__;
          return To(t) ? r[typeof t == "string" ? "string" : "hash"] : r.map;
        }
        var Do = _o;
        function Co(e) {
          var t = Do(this, e)["delete"](e);
          this.size -= t ? 1 : 0;
          return t;
        }
        var No = Co;
        function Ao(e) {
          return Do(this, e).get(e);
        }
        var Lo = Ao;
        function Io(e) {
          return Do(this, e).has(e);
        }
        var So = Io;
        function ko(e, t) {
          var r = Do(this, e),
            n = r.size;
          r.set(e, t);
          this.size += r.size == n ? 0 : 1;
          return this;
        }
        var Oo = ko;
        function Mo(e) {
          var t = -1,
            r = e == null ? 0 : e.length;
          this.clear();
          while (++t < r) {
            var n = e[t];
            this.set(n[0], n[1]);
          }
        }
        Mo.prototype.clear = wo;
        Mo.prototype["delete"] = No;
        Mo.prototype.get = Lo;
        Mo.prototype.has = So;
        Mo.prototype.set = Oo;
        var Po = Mo;
        var Ro = "Expected a function";
        function Bo(e, t) {
          if (typeof e != "function" || (t != null && typeof t != "function")) {
            throw new TypeError(Ro);
          }
          var r = function () {
            var n = arguments,
              a = t ? t.apply(this, n) : n[0],
              i = r.cache;
            if (i.has(a)) {
              return i.get(a);
            }
            var o = e.apply(this, n);
            r.cache = i.set(a, o) || i;
            return o;
          };
          r.cache = new (Bo.Cache || Po)();
          return r;
        }
        Bo.Cache = Po;
        var Fo = Bo;
        var zo = 500;
        function Go(e) {
          var t = Fo(e, function (e) {
            if (r.size === zo) {
              r.clear();
            }
            return e;
          });
          var r = t.cache;
          return t;
        }
        var Yo = Go;
        var Xo = /[^.[\]]+|\[(?:(-?\d+(?:\.\d+)?)|(["'])((?:(?!\2)[^\\]|\\.)*?)\2)\]|(?=(?:\.|\[\])(?:\.|\[\]|$))/g;
        var Vo = /\\(\\)?/g;
        var Uo = Yo(function (e) {
          var t = [];
          if (e.charCodeAt(0) === 46) {
            t.push("");
          }
          e.replace(Xo, function (e, r, n, a) {
            t.push(n ? a.replace(Vo, "$1") : r || e);
          });
          return t;
        });
        var jo = Uo;
        function Ho(e, t) {
          var r = -1,
            n = e == null ? 0 : e.length,
            a = Array(n);
          while (++r < n) {
            a[r] = t(e[r], r, e);
          }
          return a;
        }
        var qo = Ho;
        var Wo = 1 / 0;
        var $o = De ? De.prototype : undefined,
          Ko = $o ? $o.toString : undefined;
        function Zo(e) {
          if (typeof e == "string") {
            return e;
          }
          if (ei(e)) {
            return qo(e, Zo) + "";
          }
          if (je(e)) {
            return Ko ? Ko.call(e) : "";
          }
          var t = e + "";
          return t == "0" && 1 / e == -Wo ? "-0" : t;
        }
        var Qo = Zo;
        function Jo(e) {
          return e == null ? "" : Qo(e);
        }
        var es = Jo;
        function ts(e, t) {
          if (ei(e)) {
            return e;
          }
          return ai(e, t) ? [e] : jo(es(e));
        }
        var rs = ts;
        var ns = 1 / 0;
        function as(e) {
          if (typeof e == "string" || je(e)) {
            return e;
          }
          var t = e + "";
          return t == "0" && 1 / e == -ns ? "-0" : t;
        }
        var is = as;
        function os(e, t) {
          t = rs(t, e);
          var r = 0,
            n = t.length;
          while (e != null && r < n) {
            e = e[is(t[r++])];
          }
          return r && r == n ? e : undefined;
        }
        var ss = os;
        function ls(e, t, r) {
          var n = e == null ? undefined : ss(e, t);
          return n === undefined ? r : n;
        }
        var us = ls;
        var cs = (function () {
          try {
            var e = ki(Object, "defineProperty");
            e({}, "", {});
            return e;
          } catch (t) {}
        })();
        var vs = cs;
        function fs(e, t, r) {
          if (t == "__proto__" && vs) {
            vs(e, t, { configurable: true, enumerable: true, value: r, writable: true });
          } else {
            e[t] = r;
          }
        }
        var hs = fs;
        var ds = Object.prototype;
        var ps = ds.hasOwnProperty;
        function gs(e, t, r) {
          var n = e[t];
          if (!(ps.call(e, t) && ro(n, r)) || (r === undefined && !(t in e))) {
            hs(e, t, r);
          }
        }
        var ys = gs;
        var ms = 9007199254740991;
        var bs = /^(?:0|[1-9]\d*)$/;
        function xs(e, t) {
          var r = typeof e;
          t = t == null ? ms : t;
          return !!t && (r == "number" || (r != "symbol" && bs.test(e))) && e > -1 && e % 1 == 0 && e < t;
        }
        var ws = xs;
        function Es(e, t, r, n) {
          if (!le(e)) {
            return e;
          }
          t = rs(t, e);
          var a = -1,
            i = t.length,
            o = i - 1,
            s = e;
          while (s != null && ++a < i) {
            var l = is(t[a]),
              u = r;
            if (l === "__proto__" || l === "constructor" || l === "prototype") {
              return e;
            }
            if (a != o) {
              var c = s[l];
              u = n ? n(c, l, s) : undefined;
              if (u === undefined) {
                u = le(c) ? c : ws(t[a + 1]) ? [] : {};
              }
            }
            ys(s, l, u);
            s = s[l];
          }
          return e;
        }
        var Ts = Es;
        function _s(e, t, r) {
          return e == null ? e : Ts(e, t, r);
        }
        var Ds = _s;
        function Cs(e, t) {
          var r = -1,
            n = e.length;
          t || (t = Array(n));
          while (++r < n) {
            t[r] = e[r];
          }
          return t;
        }
        var Ns = Cs;
        function As(e) {
          if (ei(e)) {
            return qo(e, is);
          }
          return je(e) ? [e] : Ns(jo(es(e)));
        }
        var Ls = As;
        var Is = {
          data: function e(t) {
            var r = {
              field: "data",
              bindingEvent: "data",
              allowBinding: false,
              allowSetting: false,
              allowGetting: false,
              settingEvent: "data",
              settingTriggersEvent: false,
              triggerFnName: "trigger",
              immutableKeys: {},
              updateStyle: false,
              beforeGet: function e(t) {},
              beforeSet: function e(t, r) {},
              onSet: function e(t) {},
              canSet: function e(t) {
                return true;
              },
            };
            t = Q({}, r, t);
            return function e(r, n) {
              var a = t;
              var o = this;
              var s = o.length !== undefined;
              var l = s ? o : [o];
              var u = s ? o[0] : o;
              if (b(r)) {
                var c = r.indexOf(".") !== -1;
                var v = c && Ls(r);
                if (a.allowGetting && n === undefined) {
                  var f;
                  if (u) {
                    a.beforeGet(u);
                    if (v && u._private[a.field][r] === undefined) {
                      f = us(u._private[a.field], v);
                    } else {
                      f = u._private[a.field][r];
                    }
                  }
                  return f;
                } else if (a.allowSetting && n !== undefined) {
                  var h = !a.immutableKeys[r];
                  if (h) {
                    var d = i({}, r, n);
                    a.beforeSet(o, d);
                    for (var p = 0, g = l.length; p < g; p++) {
                      var y = l[p];
                      if (a.canSet(y)) {
                        if (v && u._private[a.field][r] === undefined) {
                          Ds(y._private[a.field], v, n);
                        } else {
                          y._private[a.field][r] = n;
                        }
                      }
                    }
                    if (a.updateStyle) {
                      o.updateStyle();
                    }
                    a.onSet(o);
                    if (a.settingTriggersEvent) {
                      o[a.triggerFnName](a.settingEvent);
                    }
                  }
                }
              } else if (a.allowSetting && E(r)) {
                var m = r;
                var w, T;
                var _ = Object.keys(m);
                a.beforeSet(o, m);
                for (var D = 0; D < _.length; D++) {
                  w = _[D];
                  T = m[w];
                  var C = !a.immutableKeys[w];
                  if (C) {
                    for (var N = 0; N < l.length; N++) {
                      var A = l[N];
                      if (a.canSet(A)) {
                        A._private[a.field][w] = T;
                      }
                    }
                  }
                }
                if (a.updateStyle) {
                  o.updateStyle();
                }
                a.onSet(o);
                if (a.settingTriggersEvent) {
                  o[a.triggerFnName](a.settingEvent);
                }
              } else if (a.allowBinding && x(r)) {
                var L = r;
                o.on(a.bindingEvent, L);
              } else if (a.allowGetting && r === undefined) {
                var I;
                if (u) {
                  a.beforeGet(u);
                  I = u._private[a.field];
                }
                return I;
              }
              return o;
            };
          },
          removeData: function e(t) {
            var r = { field: "data", event: "data", triggerFnName: "trigger", triggerEvent: false, immutableKeys: {} };
            t = Q({}, r, t);
            return function e(r) {
              var n = t;
              var a = this;
              var i = a.length !== undefined;
              var o = i ? a : [a];
              if (b(r)) {
                var s = r.split(/\s+/);
                var l = s.length;
                for (var u = 0; u < l; u++) {
                  var c = s[u];
                  if (O(c)) {
                    continue;
                  }
                  var v = !n.immutableKeys[c];
                  if (v) {
                    for (var f = 0, h = o.length; f < h; f++) {
                      o[f]._private[n.field][c] = undefined;
                    }
                  }
                }
                if (n.triggerEvent) {
                  a[n.triggerFnName](n.event);
                }
              } else if (r === undefined) {
                for (var d = 0, p = o.length; d < p; d++) {
                  var g = o[d]._private[n.field];
                  var y = Object.keys(g);
                  for (var m = 0; m < y.length; m++) {
                    var x = y[m];
                    var w = !n.immutableKeys[x];
                    if (w) {
                      g[x] = undefined;
                    }
                  }
                }
                if (n.triggerEvent) {
                  a[n.triggerFnName](n.event);
                }
              }
              return a;
            };
          },
        };
        var Ss = {
          eventAliasesOn: function e(t) {
            var r = t;
            r.addListener = r.listen = r.bind = r.on;
            r.unlisten = r.unbind = r.off = r.removeListener;
            r.trigger = r.emit;
            r.pon = r.promiseOn = function (e, t) {
              var r = this;
              var n = Array.prototype.slice.call(arguments, 0);
              return new $a(function (e, t) {
                var a = function t(n) {
                  r.off.apply(r, o);
                  e(n);
                };
                var i = n.concat([a]);
                var o = i.concat([]);
                r.on.apply(r, i);
              });
            };
          },
        };
        var ks = {};
        [Qa, Is, Ss].forEach(function (e) {
          Q(ks, e);
        });
        var Os = {
          animate: ks.animate(),
          animation: ks.animation(),
          animated: ks.animated(),
          clearQueue: ks.clearQueue(),
          delay: ks.delay(),
          delayAnimation: ks.delayAnimation(),
          stop: ks.stop(),
        };
        var Ms = {
          classes: function e(t) {
            var r = this;
            if (t === undefined) {
              var n = [];
              r[0]._private.classes.forEach(function (e) {
                return n.push(e);
              });
              return n;
            } else if (!w(t)) {
              t = (t || "").match(/\S+/g) || [];
            }
            var a = [];
            var i = new $t(t);
            for (var o = 0; o < r.length; o++) {
              var s = r[o];
              var l = s._private;
              var u = l.classes;
              var c = false;
              for (var v = 0; v < t.length; v++) {
                var f = t[v];
                var h = u.has(f);
                if (!h) {
                  c = true;
                  break;
                }
              }
              if (!c) {
                c = u.size !== t.length;
              }
              if (c) {
                l.classes = i;
                a.push(s);
              }
            }
            if (a.length > 0) {
              this.spawn(a).updateStyle().emit("class");
            }
            return r;
          },
          addClass: function e(t) {
            return this.toggleClass(t, true);
          },
          hasClass: function e(t) {
            var r = this[0];
            return r != null && r._private.classes.has(t);
          },
          toggleClass: function e(t, r) {
            if (!w(t)) {
              t = t.match(/\S+/g) || [];
            }
            var n = this;
            var a = r === undefined;
            var i = [];
            for (var o = 0, s = n.length; o < s; o++) {
              var l = n[o];
              var u = l._private.classes;
              var c = false;
              for (var v = 0; v < t.length; v++) {
                var f = t[v];
                var h = u.has(f);
                var d = false;
                if (r || (a && !h)) {
                  u.add(f);
                  d = true;
                } else if (!r || (a && h)) {
                  u["delete"](f);
                  d = true;
                }
                if (!c && d) {
                  i.push(l);
                  c = true;
                }
              }
            }
            if (i.length > 0) {
              this.spawn(i).updateStyle().emit("class");
            }
            return n;
          },
          removeClass: function e(t) {
            return this.toggleClass(t, false);
          },
          flashClass: function e(t, r) {
            var n = this;
            if (r == null) {
              r = 250;
            } else if (r === 0) {
              return n;
            }
            n.addClass(t);
            setTimeout(function () {
              n.removeClass(t);
            }, r);
            return n;
          },
        };
        Ms.className = Ms.classNames = Ms.classes;
        var Ps = {
          metaChar: "[\\!\\\"\\#\\$\\%\\&\\'\\(\\)\\*\\+\\,\\.\\/\\:\\;\\<\\=\\>\\?\\@\\[\\]\\^\\`\\{\\|\\}\\~]",
          comparatorOp: "=|\\!=|>|>=|<|<=|\\$=|\\^=|\\*=",
          boolOp: "\\?|\\!|\\^",
          string: '"(?:\\\\"|[^"])*"' + "|" + "'(?:\\\\'|[^'])*'",
          number: V,
          meta: "degree|indegree|outdegree",
          separator: "\\s*,\\s*",
          descendant: "\\s+",
          child: "\\s+>\\s+",
          subject: "\\$",
          group: "node|edge|\\*",
          directedEdge: "\\s+->\\s+",
          undirectedEdge: "\\s+<->\\s+",
        };
        Ps.variable = "(?:[\\w-.]|(?:\\\\" + Ps.metaChar + "))+";
        Ps.className = "(?:[\\w-]|(?:\\\\" + Ps.metaChar + "))+";
        Ps.value = Ps.string + "|" + Ps.number;
        Ps.id = Ps.variable;
        (function () {
          var e, t, r;
          e = Ps.comparatorOp.split("|");
          for (r = 0; r < e.length; r++) {
            t = e[r];
            Ps.comparatorOp += "|@" + t;
          }
          e = Ps.comparatorOp.split("|");
          for (r = 0; r < e.length; r++) {
            t = e[r];
            if (t.indexOf("!") >= 0) {
              continue;
            }
            if (t === "=") {
              continue;
            }
            Ps.comparatorOp += "|\\!" + t;
          }
        })();
        var Rs = function e() {
          return { checks: [] };
        };
        var Bs = {
          GROUP: 0,
          COLLECTION: 1,
          FILTER: 2,
          DATA_COMPARE: 3,
          DATA_EXIST: 4,
          DATA_BOOL: 5,
          META_COMPARE: 6,
          STATE: 7,
          ID: 8,
          CLASS: 9,
          UNDIRECTED_EDGE: 10,
          DIRECTED_EDGE: 11,
          NODE_SOURCE: 12,
          NODE_TARGET: 13,
          NODE_NEIGHBOR: 14,
          CHILD: 15,
          DESCENDANT: 16,
          PARENT: 17,
          ANCESTOR: 18,
          COMPOUND_SPLIT: 19,
          TRUE: 20,
        };
        var Fs = [
          {
            selector: ":selected",
            matches: function e(t) {
              return t.selected();
            },
          },
          {
            selector: ":unselected",
            matches: function e(t) {
              return !t.selected();
            },
          },
          {
            selector: ":selectable",
            matches: function e(t) {
              return t.selectable();
            },
          },
          {
            selector: ":unselectable",
            matches: function e(t) {
              return !t.selectable();
            },
          },
          {
            selector: ":locked",
            matches: function e(t) {
              return t.locked();
            },
          },
          {
            selector: ":unlocked",
            matches: function e(t) {
              return !t.locked();
            },
          },
          {
            selector: ":visible",
            matches: function e(t) {
              return t.visible();
            },
          },
          {
            selector: ":hidden",
            matches: function e(t) {
              return !t.visible();
            },
          },
          {
            selector: ":transparent",
            matches: function e(t) {
              return t.transparent();
            },
          },
          {
            selector: ":grabbed",
            matches: function e(t) {
              return t.grabbed();
            },
          },
          {
            selector: ":free",
            matches: function e(t) {
              return !t.grabbed();
            },
          },
          {
            selector: ":removed",
            matches: function e(t) {
              return t.removed();
            },
          },
          {
            selector: ":inside",
            matches: function e(t) {
              return !t.removed();
            },
          },
          {
            selector: ":grabbable",
            matches: function e(t) {
              return t.grabbable();
            },
          },
          {
            selector: ":ungrabbable",
            matches: function e(t) {
              return !t.grabbable();
            },
          },
          {
            selector: ":animated",
            matches: function e(t) {
              return t.animated();
            },
          },
          {
            selector: ":unanimated",
            matches: function e(t) {
              return !t.animated();
            },
          },
          {
            selector: ":parent",
            matches: function e(t) {
              return t.isParent();
            },
          },
          {
            selector: ":childless",
            matches: function e(t) {
              return t.isChildless();
            },
          },
          {
            selector: ":child",
            matches: function e(t) {
              return t.isChild();
            },
          },
          {
            selector: ":orphan",
            matches: function e(t) {
              return t.isOrphan();
            },
          },
          {
            selector: ":nonorphan",
            matches: function e(t) {
              return t.isChild();
            },
          },
          {
            selector: ":compound",
            matches: function e(t) {
              if (t.isNode()) {
                return t.isParent();
              } else {
                return t.source().isParent() || t.target().isParent();
              }
            },
          },
          {
            selector: ":loop",
            matches: function e(t) {
              return t.isLoop();
            },
          },
          {
            selector: ":simple",
            matches: function e(t) {
              return t.isSimple();
            },
          },
          {
            selector: ":active",
            matches: function e(t) {
              return t.active();
            },
          },
          {
            selector: ":inactive",
            matches: function e(t) {
              return !t.active();
            },
          },
          {
            selector: ":backgrounding",
            matches: function e(t) {
              return t.backgrounding();
            },
          },
          {
            selector: ":nonbackgrounding",
            matches: function e(t) {
              return !t.backgrounding();
            },
          },
        ].sort(function (e, t) {
          return Z(e.selector, t.selector);
        });
        var zs = (function () {
          var e = {};
          var t;
          for (var r = 0; r < Fs.length; r++) {
            t = Fs[r];
            e[t.selector] = t.matches;
          }
          return e;
        })();
        var Gs = function e(t, r) {
          return zs[t](r);
        };
        var Ys =
          "(" +
          Fs.map(function (e) {
            return e.selector;
          }).join("|") +
          ")";
        var Xs = function e(t) {
          return t.replace(new RegExp("\\\\(" + Ps.metaChar + ")", "g"), function (e, t) {
            return t;
          });
        };
        var Vs = function e(t, r, n) {
          t[t.length - 1] = n;
        };
        var Us = [
          {
            name: "group",
            query: true,
            regex: "(" + Ps.group + ")",
            populate: function e(t, r, n) {
              var a = o(n, 1),
                i = a[0];
              r.checks.push({ type: Bs.GROUP, value: i === "*" ? i : i + "s" });
            },
          },
          {
            name: "state",
            query: true,
            regex: Ys,
            populate: function e(t, r, n) {
              var a = o(n, 1),
                i = a[0];
              r.checks.push({ type: Bs.STATE, value: i });
            },
          },
          {
            name: "id",
            query: true,
            regex: "\\#(" + Ps.id + ")",
            populate: function e(t, r, n) {
              var a = o(n, 1),
                i = a[0];
              r.checks.push({ type: Bs.ID, value: Xs(i) });
            },
          },
          {
            name: "className",
            query: true,
            regex: "\\.(" + Ps.className + ")",
            populate: function e(t, r, n) {
              var a = o(n, 1),
                i = a[0];
              r.checks.push({ type: Bs.CLASS, value: Xs(i) });
            },
          },
          {
            name: "dataExists",
            query: true,
            regex: "\\[\\s*(" + Ps.variable + ")\\s*\\]",
            populate: function e(t, r, n) {
              var a = o(n, 1),
                i = a[0];
              r.checks.push({ type: Bs.DATA_EXIST, field: Xs(i) });
            },
          },
          {
            name: "dataCompare",
            query: true,
            regex: "\\[\\s*(" + Ps.variable + ")\\s*(" + Ps.comparatorOp + ")\\s*(" + Ps.value + ")\\s*\\]",
            populate: function e(t, r, n) {
              var a = o(n, 3),
                i = a[0],
                s = a[1],
                l = a[2];
              var u = new RegExp("^" + Ps.string + "$").exec(l) != null;
              if (u) {
                l = l.substring(1, l.length - 1);
              } else {
                l = parseFloat(l);
              }
              r.checks.push({ type: Bs.DATA_COMPARE, field: Xs(i), operator: s, value: l });
            },
          },
          {
            name: "dataBool",
            query: true,
            regex: "\\[\\s*(" + Ps.boolOp + ")\\s*(" + Ps.variable + ")\\s*\\]",
            populate: function e(t, r, n) {
              var a = o(n, 2),
                i = a[0],
                s = a[1];
              r.checks.push({ type: Bs.DATA_BOOL, field: Xs(s), operator: i });
            },
          },
          {
            name: "metaCompare",
            query: true,
            regex: "\\[\\[\\s*(" + Ps.meta + ")\\s*(" + Ps.comparatorOp + ")\\s*(" + Ps.number + ")\\s*\\]\\]",
            populate: function e(t, r, n) {
              var a = o(n, 3),
                i = a[0],
                s = a[1],
                l = a[2];
              r.checks.push({ type: Bs.META_COMPARE, field: Xs(i), operator: s, value: parseFloat(l) });
            },
          },
          {
            name: "nextQuery",
            separator: true,
            regex: Ps.separator,
            populate: function e(t, r) {
              var n = t.currentSubject;
              var a = t.edgeCount;
              var i = t.compoundCount;
              var o = t[t.length - 1];
              if (n != null) {
                o.subject = n;
                t.currentSubject = null;
              }
              o.edgeCount = a;
              o.compoundCount = i;
              t.edgeCount = 0;
              t.compoundCount = 0;
              var s = (t[t.length++] = Rs());
              return s;
            },
          },
          {
            name: "directedEdge",
            separator: true,
            regex: Ps.directedEdge,
            populate: function e(t, r) {
              if (t.currentSubject == null) {
                var n = Rs();
                var a = r;
                var i = Rs();
                n.checks.push({ type: Bs.DIRECTED_EDGE, source: a, target: i });
                Vs(t, r, n);
                t.edgeCount++;
                return i;
              } else {
                var o = Rs();
                var s = r;
                var l = Rs();
                o.checks.push({ type: Bs.NODE_SOURCE, source: s, target: l });
                Vs(t, r, o);
                t.edgeCount++;
                return l;
              }
            },
          },
          {
            name: "undirectedEdge",
            separator: true,
            regex: Ps.undirectedEdge,
            populate: function e(t, r) {
              if (t.currentSubject == null) {
                var n = Rs();
                var a = r;
                var i = Rs();
                n.checks.push({ type: Bs.UNDIRECTED_EDGE, nodes: [a, i] });
                Vs(t, r, n);
                t.edgeCount++;
                return i;
              } else {
                var o = Rs();
                var s = r;
                var l = Rs();
                o.checks.push({ type: Bs.NODE_NEIGHBOR, node: s, neighbor: l });
                Vs(t, r, o);
                return l;
              }
            },
          },
          {
            name: "child",
            separator: true,
            regex: Ps.child,
            populate: function e(t, r) {
              if (t.currentSubject == null) {
                var n = Rs();
                var a = Rs();
                var i = t[t.length - 1];
                n.checks.push({ type: Bs.CHILD, parent: i, child: a });
                Vs(t, r, n);
                t.compoundCount++;
                return a;
              } else if (t.currentSubject === r) {
                var o = Rs();
                var s = t[t.length - 1];
                var l = Rs();
                var u = Rs();
                var c = Rs();
                var v = Rs();
                o.checks.push({ type: Bs.COMPOUND_SPLIT, left: s, right: l, subject: u });
                u.checks = r.checks;
                r.checks = [{ type: Bs.TRUE }];
                v.checks.push({ type: Bs.TRUE });
                l.checks.push({ type: Bs.PARENT, parent: v, child: c });
                Vs(t, s, o);
                t.currentSubject = u;
                t.compoundCount++;
                return c;
              } else {
                var f = Rs();
                var h = Rs();
                var d = [{ type: Bs.PARENT, parent: f, child: h }];
                f.checks = r.checks;
                r.checks = d;
                t.compoundCount++;
                return h;
              }
            },
          },
          {
            name: "descendant",
            separator: true,
            regex: Ps.descendant,
            populate: function e(t, r) {
              if (t.currentSubject == null) {
                var n = Rs();
                var a = Rs();
                var i = t[t.length - 1];
                n.checks.push({ type: Bs.DESCENDANT, ancestor: i, descendant: a });
                Vs(t, r, n);
                t.compoundCount++;
                return a;
              } else if (t.currentSubject === r) {
                var o = Rs();
                var s = t[t.length - 1];
                var l = Rs();
                var u = Rs();
                var c = Rs();
                var v = Rs();
                o.checks.push({ type: Bs.COMPOUND_SPLIT, left: s, right: l, subject: u });
                u.checks = r.checks;
                r.checks = [{ type: Bs.TRUE }];
                v.checks.push({ type: Bs.TRUE });
                l.checks.push({ type: Bs.ANCESTOR, ancestor: v, descendant: c });
                Vs(t, s, o);
                t.currentSubject = u;
                t.compoundCount++;
                return c;
              } else {
                var f = Rs();
                var h = Rs();
                var d = [{ type: Bs.ANCESTOR, ancestor: f, descendant: h }];
                f.checks = r.checks;
                r.checks = d;
                t.compoundCount++;
                return h;
              }
            },
          },
          {
            name: "subject",
            modifier: true,
            regex: Ps.subject,
            populate: function e(t, r) {
              if (t.currentSubject != null && t.currentSubject !== r) {
                kt("Redefinition of subject in selector `" + t.toString() + "`");
                return false;
              }
              t.currentSubject = r;
              var n = t[t.length - 1];
              var a = n.checks[0];
              var i = a == null ? null : a.type;
              if (i === Bs.DIRECTED_EDGE) {
                a.type = Bs.NODE_TARGET;
              } else if (i === Bs.UNDIRECTED_EDGE) {
                a.type = Bs.NODE_NEIGHBOR;
                a.node = a.nodes[1];
                a.neighbor = a.nodes[0];
                a.nodes = null;
              }
            },
          },
        ];
        Us.forEach(function (e) {
          return (e.regexObj = new RegExp("^" + e.regex));
        });
        var js = function e(t) {
          var r;
          var n;
          var a;
          for (var i = 0; i < Us.length; i++) {
            var o = Us[i];
            var s = o.name;
            var l = t.match(o.regexObj);
            if (l != null) {
              n = l;
              r = o;
              a = s;
              var u = l[0];
              t = t.substring(u.length);
              break;
            }
          }
          return { expr: r, match: n, name: a, remaining: t };
        };
        var Hs = function e(t) {
          var r = t.match(/^\s+/);
          if (r) {
            var n = r[0];
            t = t.substring(n.length);
          }
          return t;
        };
        var qs = function e(t) {
          var r = this;
          var n = (r.inputText = t);
          var a = (r[0] = Rs());
          r.length = 1;
          n = Hs(n);
          for (;;) {
            var i = js(n);
            if (i.expr == null) {
              kt("The selector `" + t + "`is invalid");
              return false;
            } else {
              var o = i.match.slice(1);
              var s = i.expr.populate(r, a, o);
              if (s === false) {
                return false;
              } else if (s != null) {
                a = s;
              }
            }
            n = i.remaining;
            if (n.match(/^\s*$/)) {
              break;
            }
          }
          var l = r[r.length - 1];
          if (r.currentSubject != null) {
            l.subject = r.currentSubject;
          }
          l.edgeCount = r.edgeCount;
          l.compoundCount = r.compoundCount;
          for (var u = 0; u < r.length; u++) {
            var c = r[u];
            if (c.compoundCount > 0 && c.edgeCount > 0) {
              kt("The selector `" + t + "` is invalid because it uses both a compound selector and an edge selector");
              return false;
            }
            if (c.edgeCount > 1) {
              kt("The selector `" + t + "` is invalid because it uses multiple edge selectors");
              return false;
            } else if (c.edgeCount === 1) {
              kt(
                "The selector `" +
                  t +
                  "` is deprecated.  Edge selectors do not take effect on changes to source and target nodes after an edge is added, for performance reasons.  Use a class or data selector on edges instead, updating the class or data of an edge when your app detects a change in source or target nodes."
              );
            }
          }
          return true;
        };
        var Ws = function e() {
          if (this.toStringCache != null) {
            return this.toStringCache;
          }
          var t = function e(t) {
            if (t == null) {
              return "";
            } else {
              return t;
            }
          };
          var r = function e(r) {
            if (b(r)) {
              return '"' + r + '"';
            } else {
              return t(r);
            }
          };
          var n = function e(t) {
            return " " + t + " ";
          };
          var a = function e(a, o) {
            var s = a.type,
              l = a.value;
            switch (s) {
              case Bs.GROUP: {
                var u = t(l);
                return u.substring(0, u.length - 1);
              }
              case Bs.DATA_COMPARE: {
                var c = a.field,
                  v = a.operator;
                return "[" + c + n(t(v)) + r(l) + "]";
              }
              case Bs.DATA_BOOL: {
                var f = a.operator,
                  h = a.field;
                return "[" + t(f) + h + "]";
              }
              case Bs.DATA_EXIST: {
                var d = a.field;
                return "[" + d + "]";
              }
              case Bs.META_COMPARE: {
                var p = a.operator,
                  g = a.field;
                return "[[" + g + n(t(p)) + r(l) + "]]";
              }
              case Bs.STATE: {
                return l;
              }
              case Bs.ID: {
                return "#" + l;
              }
              case Bs.CLASS: {
                return "." + l;
              }
              case Bs.PARENT:
              case Bs.CHILD: {
                return i(a.parent, o) + n(">") + i(a.child, o);
              }
              case Bs.ANCESTOR:
              case Bs.DESCENDANT: {
                return i(a.ancestor, o) + " " + i(a.descendant, o);
              }
              case Bs.COMPOUND_SPLIT: {
                var y = i(a.left, o);
                var m = i(a.subject, o);
                var b = i(a.right, o);
                return y + (y.length > 0 ? " " : "") + m + b;
              }
              case Bs.TRUE: {
                return "";
              }
            }
          };
          var i = function e(t, r) {
            return t.checks.reduce(function (e, n, i) {
              return e + (r === t && i === 0 ? "$" : "") + a(n, r);
            }, "");
          };
          var o = "";
          for (var s = 0; s < this.length; s++) {
            var l = this[s];
            o += i(l, l.subject);
            if (this.length > 1 && s < this.length - 1) {
              o += ", ";
            }
          }
          this.toStringCache = o;
          return o;
        };
        var $s = { parse: qs, toString: Ws };
        var Ks = function e(t, r, n) {
          var a;
          var i = b(t);
          var o = _(t);
          var s = b(n);
          var l, u;
          var c = false;
          var v = false;
          var f = false;
          if (r.indexOf("!") >= 0) {
            r = r.replace("!", "");
            v = true;
          }
          if (r.indexOf("@") >= 0) {
            r = r.replace("@", "");
            c = true;
          }
          if (i || s || c) {
            l = !i && !o ? "" : "" + t;
            u = "" + n;
          }
          if (c) {
            t = l = l.toLowerCase();
            n = u = u.toLowerCase();
          }
          switch (r) {
            case "*=":
              a = l.indexOf(u) >= 0;
              break;
            case "$=":
              a = l.indexOf(u, l.length - u.length) >= 0;
              break;
            case "^=":
              a = l.indexOf(u) === 0;
              break;
            case "=":
              a = t === n;
              break;
            case ">":
              f = true;
              a = t > n;
              break;
            case ">=":
              f = true;
              a = t >= n;
              break;
            case "<":
              f = true;
              a = t < n;
              break;
            case "<=":
              f = true;
              a = t <= n;
              break;
            default:
              a = false;
              break;
          }
          if (v && (t != null || !f)) {
            a = !a;
          }
          return a;
        };
        var Zs = function e(t, r) {
          switch (r) {
            case "?":
              return t ? true : false;
            case "!":
              return t ? false : true;
            case "^":
              return t === undefined;
          }
        };
        var Qs = function e(t) {
          return t !== undefined;
        };
        var Js = function e(t, r) {
          return t.data(r);
        };
        var el = function e(t, r) {
          return t[r]();
        };
        var tl = [];
        var rl = function e(t, r) {
          return t.checks.every(function (e) {
            return tl[e.type](e, r);
          });
        };
        tl[Bs.GROUP] = function (e, t) {
          var r = e.value;
          return r === "*" || r === t.group();
        };
        tl[Bs.STATE] = function (e, t) {
          var r = e.value;
          return Gs(r, t);
        };
        tl[Bs.ID] = function (e, t) {
          var r = e.value;
          return t.id() === r;
        };
        tl[Bs.CLASS] = function (e, t) {
          var r = e.value;
          return t.hasClass(r);
        };
        tl[Bs.META_COMPARE] = function (e, t) {
          var r = e.field,
            n = e.operator,
            a = e.value;
          return Ks(el(t, r), n, a);
        };
        tl[Bs.DATA_COMPARE] = function (e, t) {
          var r = e.field,
            n = e.operator,
            a = e.value;
          return Ks(Js(t, r), n, a);
        };
        tl[Bs.DATA_BOOL] = function (e, t) {
          var r = e.field,
            n = e.operator;
          return Zs(Js(t, r), n);
        };
        tl[Bs.DATA_EXIST] = function (e, t) {
          var r = e.field;
          e.operator;
          return Qs(Js(t, r));
        };
        tl[Bs.UNDIRECTED_EDGE] = function (e, t) {
          var r = e.nodes[0];
          var n = e.nodes[1];
          var a = t.source();
          var i = t.target();
          return (rl(r, a) && rl(n, i)) || (rl(n, a) && rl(r, i));
        };
        tl[Bs.NODE_NEIGHBOR] = function (e, t) {
          return (
            rl(e.node, t) &&
            t.neighborhood().some(function (t) {
              return t.isNode() && rl(e.neighbor, t);
            })
          );
        };
        tl[Bs.DIRECTED_EDGE] = function (e, t) {
          return rl(e.source, t.source()) && rl(e.target, t.target());
        };
        tl[Bs.NODE_SOURCE] = function (e, t) {
          return (
            rl(e.source, t) &&
            t.outgoers().some(function (t) {
              return t.isNode() && rl(e.target, t);
            })
          );
        };
        tl[Bs.NODE_TARGET] = function (e, t) {
          return (
            rl(e.target, t) &&
            t.incomers().some(function (t) {
              return t.isNode() && rl(e.source, t);
            })
          );
        };
        tl[Bs.CHILD] = function (e, t) {
          return rl(e.child, t) && rl(e.parent, t.parent());
        };
        tl[Bs.PARENT] = function (e, t) {
          return (
            rl(e.parent, t) &&
            t.children().some(function (t) {
              return rl(e.child, t);
            })
          );
        };
        tl[Bs.DESCENDANT] = function (e, t) {
          return (
            rl(e.descendant, t) &&
            t.ancestors().some(function (t) {
              return rl(e.ancestor, t);
            })
          );
        };
        tl[Bs.ANCESTOR] = function (e, t) {
          return (
            rl(e.ancestor, t) &&
            t.descendants().some(function (t) {
              return rl(e.descendant, t);
            })
          );
        };
        tl[Bs.COMPOUND_SPLIT] = function (e, t) {
          return rl(e.subject, t) && rl(e.left, t) && rl(e.right, t);
        };
        tl[Bs.TRUE] = function () {
          return true;
        };
        tl[Bs.COLLECTION] = function (e, t) {
          var r = e.value;
          return r.has(t);
        };
        tl[Bs.FILTER] = function (e, t) {
          var r = e.value;
          return r(t);
        };
        var nl = function e(t) {
          var r = this;
          if (r.length === 1 && r[0].checks.length === 1 && r[0].checks[0].type === Bs.ID) {
            return t.getElementById(r[0].checks[0].value).collection();
          }
          var n = function e(t) {
            for (var n = 0; n < r.length; n++) {
              var a = r[n];
              if (rl(a, t)) {
                return true;
              }
            }
            return false;
          };
          if (r.text() == null) {
            n = function e() {
              return true;
            };
          }
          return t.filter(n);
        };
        var al = function e(t) {
          var r = this;
          for (var n = 0; n < r.length; n++) {
            var a = r[n];
            if (rl(a, t)) {
              return true;
            }
          }
          return false;
        };
        var il = { matches: al, filter: nl };
        var ol = function e(t) {
          this.inputText = t;
          this.currentSubject = null;
          this.compoundCount = 0;
          this.edgeCount = 0;
          this.length = 0;
          if (t == null || (b(t) && t.match(/^\s*$/)));
          else if (N(t)) {
            this.addQuery({ checks: [{ type: Bs.COLLECTION, value: t.collection() }] });
          } else if (x(t)) {
            this.addQuery({ checks: [{ type: Bs.FILTER, value: t }] });
          } else if (b(t)) {
            if (!this.parse(t)) {
              this.invalid = true;
            }
          } else {
            It("A selector must be created from a string; found ");
          }
        };
        var sl = ol.prototype;
        [$s, il].forEach(function (e) {
          return Q(sl, e);
        });
        sl.text = function () {
          return this.inputText;
        };
        sl.size = function () {
          return this.length;
        };
        sl.eq = function (e) {
          return this[e];
        };
        sl.sameText = function (e) {
          return !this.invalid && !e.invalid && this.text() === e.text();
        };
        sl.addQuery = function (e) {
          this[this.length++] = e;
        };
        sl.selector = sl.toString;
        var ll = {
          allAre: function e(t) {
            var r = new ol(t);
            return this.every(function (e) {
              return r.matches(e);
            });
          },
          is: function e(t) {
            var r = new ol(t);
            return this.some(function (e) {
              return r.matches(e);
            });
          },
          some: function e(t, r) {
            for (var n = 0; n < this.length; n++) {
              var a = !r ? t(this[n], n, this) : t.apply(r, [this[n], n, this]);
              if (a) {
                return true;
              }
            }
            return false;
          },
          every: function e(t, r) {
            for (var n = 0; n < this.length; n++) {
              var a = !r ? t(this[n], n, this) : t.apply(r, [this[n], n, this]);
              if (!a) {
                return false;
              }
            }
            return true;
          },
          same: function e(t) {
            if (this === t) {
              return true;
            }
            t = this.cy().collection(t);
            var r = this.length;
            var n = t.length;
            if (r !== n) {
              return false;
            }
            if (r === 1) {
              return this[0] === t[0];
            }
            return this.every(function (e) {
              return t.hasElementWithId(e.id());
            });
          },
          anySame: function e(t) {
            t = this.cy().collection(t);
            return this.some(function (e) {
              return t.hasElementWithId(e.id());
            });
          },
          allAreNeighbors: function e(t) {
            t = this.cy().collection(t);
            var r = this.neighborhood();
            return t.every(function (e) {
              return r.hasElementWithId(e.id());
            });
          },
          contains: function e(t) {
            t = this.cy().collection(t);
            var r = this;
            return t.every(function (e) {
              return r.hasElementWithId(e.id());
            });
          },
        };
        ll.allAreNeighbours = ll.allAreNeighbors;
        ll.has = ll.contains;
        ll.equal = ll.equals = ll.same;
        var ul = function e(t, r) {
          return function e(n, a, i, o) {
            var s = n;
            var l = this;
            var u;
            if (s == null) {
              u = "";
            } else if (N(s) && s.length === 1) {
              u = s.id();
            }
            if (l.length === 1 && u) {
              var c = l[0]._private;
              var v = (c.traversalCache = c.traversalCache || {});
              var f = (v[r] = v[r] || []);
              var h = bt(u);
              var d = f[h];
              if (d) {
                return d;
              } else {
                return (f[h] = t.call(l, n, a, i, o));
              }
            } else {
              return t.call(l, n, a, i, o);
            }
          };
        };
        var cl = {
          parent: function e(t) {
            var r = [];
            if (this.length === 1) {
              var e = this[0]._private.parent;
              if (e) {
                return e;
              }
            }
            for (var n = 0; n < this.length; n++) {
              var a = this[n];
              var i = a._private.parent;
              if (i) {
                r.push(i);
              }
            }
            return this.spawn(r, true).filter(t);
          },
          parents: function e(t) {
            var e = [];
            var r = this.parent();
            while (r.nonempty()) {
              for (var n = 0; n < r.length; n++) {
                var a = r[n];
                e.push(a);
              }
              r = r.parent();
            }
            return this.spawn(e, true).filter(t);
          },
          commonAncestors: function e(t) {
            var r;
            for (var n = 0; n < this.length; n++) {
              var a = this[n];
              var i = a.parents();
              r = r || i;
              r = r.intersect(i);
            }
            return r.filter(t);
          },
          orphans: function e(t) {
            return this.stdFilter(function (e) {
              return e.isOrphan();
            }).filter(t);
          },
          nonorphans: function e(t) {
            return this.stdFilter(function (e) {
              return e.isChild();
            }).filter(t);
          },
          children: ul(function (e) {
            var t = [];
            for (var r = 0; r < this.length; r++) {
              var n = this[r];
              var a = n._private.children;
              for (var i = 0; i < a.length; i++) {
                t.push(a[i]);
              }
            }
            return this.spawn(t, true).filter(e);
          }, "children"),
          siblings: function e(t) {
            return this.parent().children().not(this).filter(t);
          },
          isParent: function e() {
            var t = this[0];
            if (t) {
              return t.isNode() && t._private.children.length !== 0;
            }
          },
          isChildless: function e() {
            var t = this[0];
            if (t) {
              return t.isNode() && t._private.children.length === 0;
            }
          },
          isChild: function e() {
            var t = this[0];
            if (t) {
              return t.isNode() && t._private.parent != null;
            }
          },
          isOrphan: function e() {
            var t = this[0];
            if (t) {
              return t.isNode() && t._private.parent == null;
            }
          },
          descendants: function e(t) {
            var r = [];
            function n(e) {
              for (var t = 0; t < e.length; t++) {
                var a = e[t];
                r.push(a);
                if (a.children().nonempty()) {
                  n(a.children());
                }
              }
            }
            n(this.children());
            return this.spawn(r, true).filter(t);
          },
        };
        function vl(e, t, r, n) {
          var a = [];
          var i = new $t();
          var o = e.cy();
          var s = o.hasCompoundNodes();
          for (var l = 0; l < e.length; l++) {
            var u = e[l];
            if (r) {
              a.push(u);
            } else if (s) {
              n(a, i, u);
            }
          }
          while (a.length > 0) {
            var c = a.shift();
            t(c);
            i.add(c.id());
            if (s) {
              n(a, i, c);
            }
          }
          return e;
        }
        function fl(e, t, r) {
          if (r.isParent()) {
            var n = r._private.children;
            for (var a = 0; a < n.length; a++) {
              var i = n[a];
              if (!t.has(i.id())) {
                e.push(i);
              }
            }
          }
        }
        cl.forEachDown = function (e) {
          var t = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : true;
          return vl(this, e, t, fl);
        };
        function hl(e, t, r) {
          if (r.isChild()) {
            var n = r._private.parent;
            if (!t.has(n.id())) {
              e.push(n);
            }
          }
        }
        cl.forEachUp = function (e) {
          var t = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : true;
          return vl(this, e, t, hl);
        };
        function dl(e, t, r) {
          hl(e, t, r);
          fl(e, t, r);
        }
        cl.forEachUpAndDown = function (e) {
          var t = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : true;
          return vl(this, e, t, dl);
        };
        cl.ancestors = cl.parents;
        var pl, gl;
        pl = gl = {
          data: ks.data({
            field: "data",
            bindingEvent: "data",
            allowBinding: true,
            allowSetting: true,
            settingEvent: "data",
            settingTriggersEvent: true,
            triggerFnName: "trigger",
            allowGetting: true,
            immutableKeys: { id: true, source: true, target: true, parent: true },
            updateStyle: true,
          }),
          removeData: ks.removeData({
            field: "data",
            event: "data",
            triggerFnName: "trigger",
            triggerEvent: true,
            immutableKeys: { id: true, source: true, target: true, parent: true },
            updateStyle: true,
          }),
          scratch: ks.data({
            field: "scratch",
            bindingEvent: "scratch",
            allowBinding: true,
            allowSetting: true,
            settingEvent: "scratch",
            settingTriggersEvent: true,
            triggerFnName: "trigger",
            allowGetting: true,
            updateStyle: true,
          }),
          removeScratch: ks.removeData({ field: "scratch", event: "scratch", triggerFnName: "trigger", triggerEvent: true, updateStyle: true }),
          rscratch: ks.data({ field: "rscratch", allowBinding: false, allowSetting: true, settingTriggersEvent: false, allowGetting: true }),
          removeRscratch: ks.removeData({ field: "rscratch", triggerEvent: false }),
          id: function e() {
            var t = this[0];
            if (t) {
              return t._private.data.id;
            }
          },
        };
        pl.attr = pl.data;
        pl.removeAttr = pl.removeData;
        var yl = gl;
        var ml = {};
        function bl(e) {
          return function (t) {
            var r = this;
            if (t === undefined) {
              t = true;
            }
            if (r.length === 0) {
              return;
            }
            if (r.isNode() && !r.removed()) {
              var n = 0;
              var a = r[0];
              var i = a._private.edges;
              for (var o = 0; o < i.length; o++) {
                var s = i[o];
                if (!t && s.isLoop()) {
                  continue;
                }
                n += e(a, s);
              }
              return n;
            } else {
              return;
            }
          };
        }
        Q(ml, {
          degree: bl(function (e, t) {
            if (t.source().same(t.target())) {
              return 2;
            } else {
              return 1;
            }
          }),
          indegree: bl(function (e, t) {
            if (t.target().same(e)) {
              return 1;
            } else {
              return 0;
            }
          }),
          outdegree: bl(function (e, t) {
            if (t.source().same(e)) {
              return 1;
            } else {
              return 0;
            }
          }),
        });
        function xl(e, t) {
          return function (r) {
            var n;
            var a = this.nodes();
            for (var i = 0; i < a.length; i++) {
              var o = a[i];
              var s = o[e](r);
              if (s !== undefined && (n === undefined || t(s, n))) {
                n = s;
              }
            }
            return n;
          };
        }
        Q(ml, {
          minDegree: xl("degree", function (e, t) {
            return e < t;
          }),
          maxDegree: xl("degree", function (e, t) {
            return e > t;
          }),
          minIndegree: xl("indegree", function (e, t) {
            return e < t;
          }),
          maxIndegree: xl("indegree", function (e, t) {
            return e > t;
          }),
          minOutdegree: xl("outdegree", function (e, t) {
            return e < t;
          }),
          maxOutdegree: xl("outdegree", function (e, t) {
            return e > t;
          }),
        });
        Q(ml, {
          totalDegree: function e(t) {
            var r = 0;
            var n = this.nodes();
            for (var a = 0; a < n.length; a++) {
              r += n[a].degree(t);
            }
            return r;
          },
        });
        var wl, El;
        var Tl = function e(t, r, n) {
          for (var a = 0; a < t.length; a++) {
            var i = t[a];
            if (!i.locked()) {
              var o = i._private.position;
              var s = { x: r.x != null ? r.x - o.x : 0, y: r.y != null ? r.y - o.y : 0 };
              if (i.isParent() && !(s.x === 0 && s.y === 0)) {
                i.children().shift(s, n);
              }
              i.dirtyBoundingBoxCache();
            }
          }
        };
        var _l = {
          field: "position",
          bindingEvent: "position",
          allowBinding: true,
          allowSetting: true,
          settingEvent: "position",
          settingTriggersEvent: true,
          triggerFnName: "emitAndNotify",
          allowGetting: true,
          validKeys: ["x", "y"],
          beforeGet: function e(t) {
            t.updateCompoundBounds();
          },
          beforeSet: function e(t, r) {
            Tl(t, r, false);
          },
          onSet: function e(t) {
            t.dirtyCompoundBoundsCache();
          },
          canSet: function e(t) {
            return !t.locked();
          },
        };
        wl = El = {
          position: ks.data(_l),
          silentPosition: ks.data(
            Q({}, _l, {
              allowBinding: false,
              allowSetting: true,
              settingTriggersEvent: false,
              allowGetting: false,
              beforeSet: function e(t, r) {
                Tl(t, r, true);
              },
              onSet: function e(t) {
                t.dirtyCompoundBoundsCache();
              },
            })
          ),
          positions: function e(t, r) {
            if (E(t)) {
              if (r) {
                this.silentPosition(t);
              } else {
                this.position(t);
              }
            } else if (x(t)) {
              var n = t;
              var a = this.cy();
              a.startBatch();
              for (var i = 0; i < this.length; i++) {
                var o = this[i];
                var s = void 0;
                if ((s = n(o, i))) {
                  if (r) {
                    o.silentPosition(s);
                  } else {
                    o.position(s);
                  }
                }
              }
              a.endBatch();
            }
            return this;
          },
          silentPositions: function e(t) {
            return this.positions(t, true);
          },
          shift: function e(t, r, n) {
            var a;
            if (E(t)) {
              a = { x: _(t.x) ? t.x : 0, y: _(t.y) ? t.y : 0 };
              n = r;
            } else if (b(t) && _(r)) {
              a = { x: 0, y: 0 };
              a[t] = r;
            }
            if (a != null) {
              var i = this.cy();
              i.startBatch();
              for (var o = 0; o < this.length; o++) {
                var s = this[o];
                if (i.hasCompoundNodes() && s.isChild() && s.ancestors().anySame(this)) {
                  continue;
                }
                var l = s.position();
                var u = { x: l.x + a.x, y: l.y + a.y };
                if (n) {
                  s.silentPosition(u);
                } else {
                  s.position(u);
                }
              }
              i.endBatch();
            }
            return this;
          },
          silentShift: function e(t, r) {
            if (E(t)) {
              this.shift(t, true);
            } else if (b(t) && _(r)) {
              this.shift(t, r, true);
            }
            return this;
          },
          renderedPosition: function e(t, r) {
            var n = this[0];
            var a = this.cy();
            var i = a.zoom();
            var o = a.pan();
            var s = E(t) ? t : undefined;
            var l = s !== undefined || (r !== undefined && b(t));
            if (n && n.isNode()) {
              if (l) {
                for (var u = 0; u < this.length; u++) {
                  var c = this[u];
                  if (r !== undefined) {
                    c.position(t, (r - o[t]) / i);
                  } else if (s !== undefined) {
                    c.position(gr(s, i, o));
                  }
                }
              } else {
                var v = n.position();
                s = pr(v, i, o);
                if (t === undefined) {
                  return s;
                } else {
                  return s[t];
                }
              }
            } else if (!l) {
              return undefined;
            }
            return this;
          },
          relativePosition: function e(t, r) {
            var n = this[0];
            var a = this.cy();
            var i = E(t) ? t : undefined;
            var o = i !== undefined || (r !== undefined && b(t));
            var s = a.hasCompoundNodes();
            if (n && n.isNode()) {
              if (o) {
                for (var l = 0; l < this.length; l++) {
                  var u = this[l];
                  var c = s ? u.parent() : null;
                  var v = c && c.length > 0;
                  var f = v;
                  if (v) {
                    c = c[0];
                  }
                  var h = f ? c.position() : { x: 0, y: 0 };
                  if (r !== undefined) {
                    u.position(t, r + h[t]);
                  } else if (i !== undefined) {
                    u.position({ x: i.x + h.x, y: i.y + h.y });
                  }
                }
              } else {
                var d = n.position();
                var p = s ? n.parent() : null;
                var g = p && p.length > 0;
                var y = g;
                if (g) {
                  p = p[0];
                }
                var m = y ? p.position() : { x: 0, y: 0 };
                i = { x: d.x - m.x, y: d.y - m.y };
                if (t === undefined) {
                  return i;
                } else {
                  return i[t];
                }
              }
            } else if (!o) {
              return undefined;
            }
            return this;
          },
        };
        wl.modelPosition = wl.point = wl.position;
        wl.modelPositions = wl.points = wl.positions;
        wl.renderedPoint = wl.renderedPosition;
        wl.relativePoint = wl.relativePosition;
        var Dl = El;
        var Cl, Nl;
        Cl = Nl = {};
        Nl.renderedBoundingBox = function (e) {
          var t = this.boundingBox(e);
          var r = this.cy();
          var n = r.zoom();
          var a = r.pan();
          var i = t.x1 * n + a.x;
          var o = t.x2 * n + a.x;
          var s = t.y1 * n + a.y;
          var l = t.y2 * n + a.y;
          return { x1: i, x2: o, y1: s, y2: l, w: o - i, h: l - s };
        };
        Nl.dirtyCompoundBoundsCache = function () {
          var e = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : false;
          var t = this.cy();
          if (!t.styleEnabled() || !t.hasCompoundNodes()) {
            return this;
          }
          this.forEachUp(function (t) {
            if (t.isParent()) {
              var r = t._private;
              r.compoundBoundsClean = false;
              r.bbCache = null;
              if (!e) {
                t.emitAndNotify("bounds");
              }
            }
          });
          return this;
        };
        Nl.updateCompoundBounds = function () {
          var e = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : false;
          var t = this.cy();
          if (!t.styleEnabled() || !t.hasCompoundNodes()) {
            return this;
          }
          if (!e && t.batching()) {
            return this;
          }
          function r(e) {
            if (!e.isParent()) {
              return;
            }
            var t = e._private;
            var r = e.children();
            var n = e.pstyle("compound-sizing-wrt-labels").value === "include";
            var a = {
              width: { val: e.pstyle("min-width").pfValue, left: e.pstyle("min-width-bias-left"), right: e.pstyle("min-width-bias-right") },
              height: { val: e.pstyle("min-height").pfValue, top: e.pstyle("min-height-bias-top"), bottom: e.pstyle("min-height-bias-bottom") },
            };
            var i = r.boundingBox({ includeLabels: n, includeOverlays: false, useCache: false });
            var o = t.position;
            if (i.w === 0 || i.h === 0) {
              i = { w: e.pstyle("width").pfValue, h: e.pstyle("height").pfValue };
              i.x1 = o.x - i.w / 2;
              i.x2 = o.x + i.w / 2;
              i.y1 = o.y - i.h / 2;
              i.y2 = o.y + i.h / 2;
            }
            function s(e, t, r) {
              var n = 0;
              var a = 0;
              var i = t + r;
              if (e > 0 && i > 0) {
                n = (t / i) * e;
                a = (r / i) * e;
              }
              return { biasDiff: n, biasComplementDiff: a };
            }
            function l(e, t, r, n) {
              if (r.units === "%") {
                switch (n) {
                  case "width":
                    return e > 0 ? r.pfValue * e : 0;
                  case "height":
                    return t > 0 ? r.pfValue * t : 0;
                  case "average":
                    return e > 0 && t > 0 ? (r.pfValue * (e + t)) / 2 : 0;
                  case "min":
                    return e > 0 && t > 0 ? (e > t ? r.pfValue * t : r.pfValue * e) : 0;
                  case "max":
                    return e > 0 && t > 0 ? (e > t ? r.pfValue * e : r.pfValue * t) : 0;
                  default:
                    return 0;
                }
              } else if (r.units === "px") {
                return r.pfValue;
              } else {
                return 0;
              }
            }
            var u = a.width.left.value;
            if (a.width.left.units === "px" && a.width.val > 0) {
              u = (u * 100) / a.width.val;
            }
            var c = a.width.right.value;
            if (a.width.right.units === "px" && a.width.val > 0) {
              c = (c * 100) / a.width.val;
            }
            var v = a.height.top.value;
            if (a.height.top.units === "px" && a.height.val > 0) {
              v = (v * 100) / a.height.val;
            }
            var f = a.height.bottom.value;
            if (a.height.bottom.units === "px" && a.height.val > 0) {
              f = (f * 100) / a.height.val;
            }
            var h = s(a.width.val - i.w, u, c);
            var d = h.biasDiff;
            var p = h.biasComplementDiff;
            var g = s(a.height.val - i.h, v, f);
            var y = g.biasDiff;
            var m = g.biasComplementDiff;
            t.autoPadding = l(i.w, i.h, e.pstyle("padding"), e.pstyle("padding-relative-to").value);
            t.autoWidth = Math.max(i.w, a.width.val);
            o.x = (-d + i.x1 + i.x2 + p) / 2;
            t.autoHeight = Math.max(i.h, a.height.val);
            o.y = (-y + i.y1 + i.y2 + m) / 2;
          }
          for (var n = 0; n < this.length; n++) {
            var a = this[n];
            var i = a._private;
            if (!i.compoundBoundsClean || e) {
              r(a);
              if (!t.batching()) {
                i.compoundBoundsClean = true;
              }
            }
          }
          return this;
        };
        var Al = function e(t) {
          if (t === Infinity || t === -Infinity) {
            return 0;
          }
          return t;
        };
        var Ll = function e(t, r, n, a, i) {
          if (a - r === 0 || i - n === 0) {
            return;
          }
          if (r == null || n == null || a == null || i == null) {
            return;
          }
          t.x1 = r < t.x1 ? r : t.x1;
          t.x2 = a > t.x2 ? a : t.x2;
          t.y1 = n < t.y1 ? n : t.y1;
          t.y2 = i > t.y2 ? i : t.y2;
          t.w = t.x2 - t.x1;
          t.h = t.y2 - t.y1;
        };
        var Il = function e(t, r) {
          if (r == null) {
            return t;
          }
          return Ll(t, r.x1, r.y1, r.x2, r.y2);
        };
        var Sl = function e(t, r, n) {
          return Vt(t, r, n);
        };
        var kl = function e(t, r, n) {
          if (r.cy().headless()) {
            return;
          }
          var a = r._private;
          var i = a.rstyle;
          var o = i.arrowWidth / 2;
          var s = r.pstyle(n + "-arrow-shape").value;
          var l;
          var u;
          if (s !== "none") {
            if (n === "source") {
              l = i.srcX;
              u = i.srcY;
            } else if (n === "target") {
              l = i.tgtX;
              u = i.tgtY;
            } else {
              l = i.midX;
              u = i.midY;
            }
            var c = (a.arrowBounds = a.arrowBounds || {});
            var v = (c[n] = c[n] || {});
            v.x1 = l - o;
            v.y1 = u - o;
            v.x2 = l + o;
            v.y2 = u + o;
            v.w = v.x2 - v.x1;
            v.h = v.y2 - v.y1;
            Fr(v, 1);
            Ll(t, v.x1, v.y1, v.x2, v.y2);
          }
        };
        var Ol = function e(t, r, n) {
          if (r.cy().headless()) {
            return;
          }
          var a;
          if (n) {
            a = n + "-";
          } else {
            a = "";
          }
          var i = r._private;
          var o = i.rstyle;
          var s = r.pstyle(a + "label").strValue;
          if (s) {
            var l = r.pstyle("text-halign");
            var u = r.pstyle("text-valign");
            var c = Sl(o, "labelWidth", n);
            var v = Sl(o, "labelHeight", n);
            var f = Sl(o, "labelX", n);
            var h = Sl(o, "labelY", n);
            var d = r.pstyle(a + "text-margin-x").pfValue;
            var p = r.pstyle(a + "text-margin-y").pfValue;
            var g = r.isEdge();
            var y = r.pstyle(a + "text-rotation");
            var m = r.pstyle("text-outline-width").pfValue;
            var b = r.pstyle("text-border-width").pfValue;
            var x = b / 2;
            var w = r.pstyle("text-background-padding").pfValue;
            var E = 2;
            var T = v;
            var _ = c;
            var D = _ / 2;
            var C = T / 2;
            var N, A, L, I;
            if (g) {
              N = f - D;
              A = f + D;
              L = h - C;
              I = h + C;
            } else {
              switch (l.value) {
                case "left":
                  N = f - _;
                  A = f;
                  break;
                case "center":
                  N = f - D;
                  A = f + D;
                  break;
                case "right":
                  N = f;
                  A = f + _;
                  break;
              }
              switch (u.value) {
                case "top":
                  L = h - T;
                  I = h;
                  break;
                case "center":
                  L = h - C;
                  I = h + C;
                  break;
                case "bottom":
                  L = h;
                  I = h + T;
                  break;
              }
            }
            N += d - Math.max(m, x) - w - E;
            A += d + Math.max(m, x) + w + E;
            L += p - Math.max(m, x) - w - E;
            I += p + Math.max(m, x) + w + E;
            var S = n || "main";
            var k = i.labelBounds;
            var O = (k[S] = k[S] || {});
            O.x1 = N;
            O.y1 = L;
            O.x2 = A;
            O.y2 = I;
            O.w = A - N;
            O.h = I - L;
            var M = g && y.strValue === "autorotate";
            var P = y.pfValue != null && y.pfValue !== 0;
            if (M || P) {
              var R = M ? Sl(i.rstyle, "labelAngle", n) : y.pfValue;
              var B = Math.cos(R);
              var F = Math.sin(R);
              var z = (N + A) / 2;
              var G = (L + I) / 2;
              if (!g) {
                switch (l.value) {
                  case "left":
                    z = A;
                    break;
                  case "right":
                    z = N;
                    break;
                }
                switch (u.value) {
                  case "top":
                    G = I;
                    break;
                  case "bottom":
                    G = L;
                    break;
                }
              }
              var Y = function e(t, r) {
                t = t - z;
                r = r - G;
                return { x: t * B - r * F + z, y: t * F + r * B + G };
              };
              var X = Y(N, L);
              var V = Y(N, I);
              var U = Y(A, L);
              var j = Y(A, I);
              N = Math.min(X.x, V.x, U.x, j.x);
              A = Math.max(X.x, V.x, U.x, j.x);
              L = Math.min(X.y, V.y, U.y, j.y);
              I = Math.max(X.y, V.y, U.y, j.y);
            }
            var H = S + "Rot";
            var q = (k[H] = k[H] || {});
            q.x1 = N;
            q.y1 = L;
            q.x2 = A;
            q.y2 = I;
            q.w = A - N;
            q.h = I - L;
            Ll(t, N, L, A, I);
            Ll(i.labelBounds.all, N, L, A, I);
          }
          return t;
        };
        var Ml = function e(t, r) {
          var n = t._private.cy;
          var a = n.styleEnabled();
          var i = n.headless();
          var o = Or();
          var s = t._private;
          var l = t.isNode();
          var u = t.isEdge();
          var c, v, f, h;
          var d, p;
          var g = s.rstyle;
          var y = l && a ? t.pstyle("bounds-expansion").pfValue : [0];
          var m = function e(t) {
            return t.pstyle("display").value !== "none";
          };
          var b = !a || (m(t) && (!u || (m(t.source()) && m(t.target()))));
          if (b) {
            var x = 0;
            var w = 0;
            if (a && r.includeOverlays) {
              x = t.pstyle("overlay-opacity").value;
              if (x !== 0) {
                w = t.pstyle("overlay-padding").value;
              }
            }
            var E = 0;
            var T = 0;
            if (a && r.includeUnderlays) {
              E = t.pstyle("underlay-opacity").value;
              if (E !== 0) {
                T = t.pstyle("underlay-padding").value;
              }
            }
            var _ = Math.max(w, T);
            var D = 0;
            var C = 0;
            if (a) {
              D = t.pstyle("width").pfValue;
              C = D / 2;
            }
            if (l && r.includeNodes) {
              var N = t.position();
              d = N.x;
              p = N.y;
              var A = t.outerWidth();
              var L = A / 2;
              var I = t.outerHeight();
              var S = I / 2;
              c = d - L;
              v = d + L;
              f = p - S;
              h = p + S;
              Ll(o, c, f, v, h);
            } else if (u && r.includeEdges) {
              if (a && !i) {
                var k = t.pstyle("curve-style").strValue;
                c = Math.min(g.srcX, g.midX, g.tgtX);
                v = Math.max(g.srcX, g.midX, g.tgtX);
                f = Math.min(g.srcY, g.midY, g.tgtY);
                h = Math.max(g.srcY, g.midY, g.tgtY);
                c -= C;
                v += C;
                f -= C;
                h += C;
                Ll(o, c, f, v, h);
                if (k === "haystack") {
                  var O = g.haystackPts;
                  if (O && O.length === 2) {
                    c = O[0].x;
                    f = O[0].y;
                    v = O[1].x;
                    h = O[1].y;
                    if (c > v) {
                      var M = c;
                      c = v;
                      v = M;
                    }
                    if (f > h) {
                      var P = f;
                      f = h;
                      h = P;
                    }
                    Ll(o, c - C, f - C, v + C, h + C);
                  }
                } else if (k === "bezier" || k === "unbundled-bezier" || k === "segments" || k === "taxi") {
                  var R;
                  switch (k) {
                    case "bezier":
                    case "unbundled-bezier":
                      R = g.bezierPts;
                      break;
                    case "segments":
                    case "taxi":
                      R = g.linePts;
                      break;
                  }
                  if (R != null) {
                    for (var B = 0; B < R.length; B++) {
                      var F = R[B];
                      c = F.x - C;
                      v = F.x + C;
                      f = F.y - C;
                      h = F.y + C;
                      Ll(o, c, f, v, h);
                    }
                  }
                }
              } else {
                var z = t.source();
                var G = z.position();
                var Y = t.target();
                var X = Y.position();
                c = G.x;
                v = X.x;
                f = G.y;
                h = X.y;
                if (c > v) {
                  var V = c;
                  c = v;
                  v = V;
                }
                if (f > h) {
                  var U = f;
                  f = h;
                  h = U;
                }
                c -= C;
                v += C;
                f -= C;
                h += C;
                Ll(o, c, f, v, h);
              }
            }
            if (a && r.includeEdges && u) {
              kl(o, t, "mid-source");
              kl(o, t, "mid-target");
              kl(o, t, "source");
              kl(o, t, "target");
            }
            if (a) {
              var j = t.pstyle("ghost").value === "yes";
              if (j) {
                var H = t.pstyle("ghost-offset-x").pfValue;
                var q = t.pstyle("ghost-offset-y").pfValue;
                Ll(o, o.x1 + H, o.y1 + q, o.x2 + H, o.y2 + q);
              }
            }
            var W = (s.bodyBounds = s.bodyBounds || {});
            Gr(W, o);
            zr(W, y);
            Fr(W, 1);
            if (a) {
              c = o.x1;
              v = o.x2;
              f = o.y1;
              h = o.y2;
              Ll(o, c - _, f - _, v + _, h + _);
            }
            var $ = (s.overlayBounds = s.overlayBounds || {});
            Gr($, o);
            zr($, y);
            Fr($, 1);
            var K = (s.labelBounds = s.labelBounds || {});
            if (K.all != null) {
              Pr(K.all);
            } else {
              K.all = Or();
            }
            if (a && r.includeLabels) {
              if (r.includeMainLabels) {
                Ol(o, t, null);
              }
              if (u) {
                if (r.includeSourceLabels) {
                  Ol(o, t, "source");
                }
                if (r.includeTargetLabels) {
                  Ol(o, t, "target");
                }
              }
            }
          }
          o.x1 = Al(o.x1);
          o.y1 = Al(o.y1);
          o.x2 = Al(o.x2);
          o.y2 = Al(o.y2);
          o.w = Al(o.x2 - o.x1);
          o.h = Al(o.y2 - o.y1);
          if (o.w > 0 && o.h > 0 && b) {
            zr(o, y);
            Fr(o, 1);
          }
          return o;
        };
        var Pl = function e(t) {
          var r = 0;
          var n = function e(t) {
            return (t ? 1 : 0) << r++;
          };
          var a = 0;
          a += n(t.incudeNodes);
          a += n(t.includeEdges);
          a += n(t.includeLabels);
          a += n(t.includeMainLabels);
          a += n(t.includeSourceLabels);
          a += n(t.includeTargetLabels);
          a += n(t.includeOverlays);
          return a;
        };
        var Rl = function e(t) {
          if (t.isEdge()) {
            var r = t.source().position();
            var n = t.target().position();
            var a = function e(t) {
              return Math.round(t);
            };
            return mt([a(r.x), a(r.y), a(n.x), a(n.y)]);
          } else {
            return 0;
          }
        };
        var Bl = function e(t, r) {
          var n = t._private;
          var a;
          var i = t.isEdge();
          var o = r == null ? zl : Pl(r);
          var s = o === zl;
          var l = Rl(t);
          var u = n.bbCachePosKey === l;
          var c = r.useCache && u;
          var v = function e(t) {
            return t._private.bbCache == null || t._private.styleDirty;
          };
          var f = !c || v(t) || (i && v(t.source())) || v(t.target());
          if (f) {
            if (!u) {
              t.recalculateRenderedStyle(c);
            }
            a = Ml(t, Fl);
            n.bbCache = a;
            n.bbCachePosKey = l;
          } else {
            a = n.bbCache;
          }
          if (!s) {
            var h = t.isNode();
            a = Or();
            if ((r.includeNodes && h) || (r.includeEdges && !h)) {
              if (r.includeOverlays) {
                Il(a, n.overlayBounds);
              } else {
                Il(a, n.bodyBounds);
              }
            }
            if (r.includeLabels) {
              if (r.includeMainLabels && (!i || (r.includeSourceLabels && r.includeTargetLabels))) {
                Il(a, n.labelBounds.all);
              } else {
                if (r.includeMainLabels) {
                  Il(a, n.labelBounds.mainRot);
                }
                if (r.includeSourceLabels) {
                  Il(a, n.labelBounds.sourceRot);
                }
                if (r.includeTargetLabels) {
                  Il(a, n.labelBounds.targetRot);
                }
              }
            }
            a.w = a.x2 - a.x1;
            a.h = a.y2 - a.y1;
          }
          return a;
        };
        var Fl = {
          includeNodes: true,
          includeEdges: true,
          includeLabels: true,
          includeMainLabels: true,
          includeSourceLabels: true,
          includeTargetLabels: true,
          includeOverlays: true,
          includeUnderlays: true,
          useCache: true,
        };
        var zl = Pl(Fl);
        var Gl = zt(Fl);
        Nl.boundingBox = function (e) {
          var t;
          if (
            this.length === 1 &&
            this[0]._private.bbCache != null &&
            !this[0]._private.styleDirty &&
            (e === undefined || e.useCache === undefined || e.useCache === true)
          ) {
            if (e === undefined) {
              e = Fl;
            } else {
              e = Gl(e);
            }
            t = Bl(this[0], e);
          } else {
            t = Or();
            e = e || Fl;
            var r = Gl(e);
            var n = this;
            var a = n.cy();
            var i = a.styleEnabled();
            if (i) {
              for (var o = 0; o < n.length; o++) {
                var s = n[o];
                var l = s._private;
                var u = Rl(s);
                var c = l.bbCachePosKey === u;
                var v = r.useCache && c && !l.styleDirty;
                s.recalculateRenderedStyle(v);
              }
            }
            this.updateCompoundBounds(!e.useCache);
            for (var f = 0; f < n.length; f++) {
              var h = n[f];
              Il(t, Bl(h, r));
            }
          }
          t.x1 = Al(t.x1);
          t.y1 = Al(t.y1);
          t.x2 = Al(t.x2);
          t.y2 = Al(t.y2);
          t.w = Al(t.x2 - t.x1);
          t.h = Al(t.y2 - t.y1);
          return t;
        };
        Nl.dirtyBoundingBoxCache = function () {
          for (var e = 0; e < this.length; e++) {
            var t = this[e]._private;
            t.bbCache = null;
            t.bbCachePosKey = null;
            t.bodyBounds = null;
            t.overlayBounds = null;
            t.labelBounds.all = null;
            t.labelBounds.source = null;
            t.labelBounds.target = null;
            t.labelBounds.main = null;
            t.labelBounds.sourceRot = null;
            t.labelBounds.targetRot = null;
            t.labelBounds.mainRot = null;
            t.arrowBounds.source = null;
            t.arrowBounds.target = null;
            t.arrowBounds["mid-source"] = null;
            t.arrowBounds["mid-target"] = null;
          }
          this.emitAndNotify("bounds");
          return this;
        };
        Nl.boundingBoxAt = function (e) {
          var t = this.nodes();
          var r = this.cy();
          var n = r.hasCompoundNodes();
          var a = r.collection();
          if (n) {
            a = t.filter(function (e) {
              return e.isParent();
            });
            t = t.not(a);
          }
          if (E(e)) {
            var i = e;
            e = function e() {
              return i;
            };
          }
          var o = function t(r, n) {
            return (r._private.bbAtOldPos = e(r, n));
          };
          var s = function e(t) {
            return t._private.bbAtOldPos;
          };
          r.startBatch();
          t.forEach(o).silentPositions(e);
          if (n) {
            a.dirtyCompoundBoundsCache();
            a.dirtyBoundingBoxCache();
            a.updateCompoundBounds(true);
          }
          var l = Mr(this.boundingBox({ useCache: false }));
          t.silentPositions(s);
          if (n) {
            a.dirtyCompoundBoundsCache();
            a.dirtyBoundingBoxCache();
            a.updateCompoundBounds(true);
          }
          r.endBatch();
          return l;
        };
        Cl.boundingbox = Cl.bb = Cl.boundingBox;
        Cl.renderedBoundingbox = Cl.renderedBoundingBox;
        var Yl = Nl;
        var Xl, Vl;
        Xl = Vl = {};
        var Ul = function e(t) {
          t.uppercaseName = X(t.name);
          t.autoName = "auto" + t.uppercaseName;
          t.labelName = "label" + t.uppercaseName;
          t.outerName = "outer" + t.uppercaseName;
          t.uppercaseOuterName = X(t.outerName);
          Xl[t.name] = function e() {
            var r = this[0];
            var n = r._private;
            var a = n.cy;
            var i = a._private.styleEnabled;
            if (r) {
              if (i) {
                if (r.isParent()) {
                  r.updateCompoundBounds();
                  return n[t.autoName] || 0;
                }
                var o = r.pstyle(t.name);
                switch (o.strValue) {
                  case "label":
                    r.recalculateRenderedStyle();
                    return n.rstyle[t.labelName] || 0;
                  default:
                    return o.pfValue;
                }
              } else {
                return 1;
              }
            }
          };
          Xl["outer" + t.uppercaseName] = function e() {
            var r = this[0];
            var n = r._private;
            var a = n.cy;
            var i = a._private.styleEnabled;
            if (r) {
              if (i) {
                var o = r[t.name]();
                var s = r.pstyle("border-width").pfValue;
                var l = 2 * r.padding();
                return o + s + l;
              } else {
                return 1;
              }
            }
          };
          Xl["rendered" + t.uppercaseName] = function e() {
            var r = this[0];
            if (r) {
              var n = r[t.name]();
              return n * this.cy().zoom();
            }
          };
          Xl["rendered" + t.uppercaseOuterName] = function e() {
            var r = this[0];
            if (r) {
              var n = r[t.outerName]();
              return n * this.cy().zoom();
            }
          };
        };
        Ul({ name: "width" });
        Ul({ name: "height" });
        Vl.padding = function () {
          var e = this[0];
          var t = e._private;
          if (e.isParent()) {
            e.updateCompoundBounds();
            if (t.autoPadding !== undefined) {
              return t.autoPadding;
            } else {
              return e.pstyle("padding").pfValue;
            }
          } else {
            return e.pstyle("padding").pfValue;
          }
        };
        Vl.paddedHeight = function () {
          var e = this[0];
          return e.height() + 2 * e.padding();
        };
        Vl.paddedWidth = function () {
          var e = this[0];
          return e.width() + 2 * e.padding();
        };
        var jl = Vl;
        var Hl = function e(t, r) {
          if (t.isEdge()) {
            return r(t);
          }
        };
        var ql = function e(t, r) {
          if (t.isEdge()) {
            var n = t.cy();
            return pr(r(t), n.zoom(), n.pan());
          }
        };
        var Wl = function e(t, r) {
          if (t.isEdge()) {
            var n = t.cy();
            var a = n.pan();
            var i = n.zoom();
            return r(t).map(function (e) {
              return pr(e, i, a);
            });
          }
        };
        var $l = function e(t) {
          return t.renderer().getControlPoints(t);
        };
        var Kl = function e(t) {
          return t.renderer().getSegmentPoints(t);
        };
        var Zl = function e(t) {
          return t.renderer().getSourceEndpoint(t);
        };
        var Ql = function e(t) {
          return t.renderer().getTargetEndpoint(t);
        };
        var Jl = function e(t) {
          return t.renderer().getEdgeMidpoint(t);
        };
        var eu = {
          controlPoints: { get: $l, mult: true },
          segmentPoints: { get: Kl, mult: true },
          sourceEndpoint: { get: Zl },
          targetEndpoint: { get: Ql },
          midpoint: { get: Jl },
        };
        var tu = function e(t) {
          return "rendered" + t[0].toUpperCase() + t.substr(1);
        };
        var ru = Object.keys(eu).reduce(function (e, t) {
          var r = eu[t];
          var n = tu(t);
          e[t] = function () {
            return Hl(this, r.get);
          };
          if (r.mult) {
            e[n] = function () {
              return Wl(this, r.get);
            };
          } else {
            e[n] = function () {
              return ql(this, r.get);
            };
          }
          return e;
        }, {});
        var nu = Q({}, Dl, Yl, jl, ru);
        var au = function e(t, r) {
          this.recycle(t, r);
        };
        function iu() {
          return false;
        }
        function ou() {
          return true;
        }
        au.prototype = {
          instanceString: function e() {
            return "event";
          },
          recycle: function e(t, r) {
            this.isImmediatePropagationStopped = this.isPropagationStopped = this.isDefaultPrevented = iu;
            if (t != null && t.preventDefault) {
              this.type = t.type;
              this.isDefaultPrevented = t.defaultPrevented ? ou : iu;
            } else if (t != null && t.type) {
              r = t;
            } else {
              this.type = t;
            }
            if (r != null) {
              this.originalEvent = r.originalEvent;
              this.type = r.type != null ? r.type : this.type;
              this.cy = r.cy;
              this.target = r.target;
              this.position = r.position;
              this.renderedPosition = r.renderedPosition;
              this.namespace = r.namespace;
              this.layout = r.layout;
            }
            if (this.cy != null && this.position != null && this.renderedPosition == null) {
              var n = this.position;
              var a = this.cy.zoom();
              var i = this.cy.pan();
              this.renderedPosition = { x: n.x * a + i.x, y: n.y * a + i.y };
            }
            this.timeStamp = (t && t.timeStamp) || Date.now();
          },
          preventDefault: function e() {
            this.isDefaultPrevented = ou;
            var t = this.originalEvent;
            if (!t) {
              return;
            }
            if (t.preventDefault) {
              t.preventDefault();
            }
          },
          stopPropagation: function e() {
            this.isPropagationStopped = ou;
            var t = this.originalEvent;
            if (!t) {
              return;
            }
            if (t.stopPropagation) {
              t.stopPropagation();
            }
          },
          stopImmediatePropagation: function e() {
            this.isImmediatePropagationStopped = ou;
            this.stopPropagation();
          },
          isDefaultPrevented: iu,
          isPropagationStopped: iu,
          isImmediatePropagationStopped: iu,
        };
        var su = /^([^.]+)(\.(?:[^.]+))?$/;
        var lu = ".*";
        var uu = {
          qualifierCompare: function e(t, r) {
            return t === r;
          },
          eventMatches: function e() {
            return true;
          },
          addEventFields: function e() {},
          callbackContext: function e(t) {
            return t;
          },
          beforeEmit: function e() {},
          afterEmit: function e() {},
          bubble: function e() {
            return false;
          },
          parent: function e() {
            return null;
          },
          context: null,
        };
        var cu = Object.keys(uu);
        var vu = {};
        function fu() {
          var e = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : vu;
          var t = arguments.length > 1 ? arguments[1] : undefined;
          for (var r = 0; r < cu.length; r++) {
            var n = cu[r];
            this[n] = e[n] || uu[n];
          }
          this.context = t || this.context;
          this.listeners = [];
          this.emitting = 0;
        }
        var hu = fu.prototype;
        var du = function e(t, r, n, a, i, o, s) {
          if (x(a)) {
            i = a;
            a = null;
          }
          if (s) {
            if (o == null) {
              o = s;
            } else {
              o = Q({}, o, s);
            }
          }
          var l = w(n) ? n : n.split(/\s+/);
          for (var u = 0; u < l.length; u++) {
            var c = l[u];
            if (O(c)) {
              continue;
            }
            var v = c.match(su);
            if (v) {
              var f = v[1];
              var h = v[2] ? v[2] : null;
              var d = r(t, c, f, h, a, i, o);
              if (d === false) {
                break;
              }
            }
          }
        };
        var pu = function e(t, r) {
          t.addEventFields(t.context, r);
          return new au(r.type, r);
        };
        var gu = function e(t, r, n) {
          if (k(n)) {
            r(t, n);
            return;
          } else if (E(n)) {
            r(t, pu(t, n));
            return;
          }
          var a = w(n) ? n : n.split(/\s+/);
          for (var i = 0; i < a.length; i++) {
            var o = a[i];
            if (O(o)) {
              continue;
            }
            var s = o.match(su);
            if (s) {
              var l = s[1];
              var u = s[2] ? s[2] : null;
              var c = pu(t, { type: l, namespace: u, target: t.context });
              r(t, c);
            }
          }
        };
        hu.on = hu.addListener = function (e, t, r, n, a) {
          du(
            this,
            function (e, t, r, n, a, i, o) {
              if (x(i)) {
                e.listeners.push({ event: t, callback: i, type: r, namespace: n, qualifier: a, conf: o });
              }
            },
            e,
            t,
            r,
            n,
            a
          );
          return this;
        };
        hu.one = function (e, t, r, n) {
          return this.on(e, t, r, n, { one: true });
        };
        hu.removeListener = hu.off = function (e, t, r, n) {
          var a = this;
          if (this.emitting !== 0) {
            this.listeners = Pt(this.listeners);
          }
          var i = this.listeners;
          var o = function o(s) {
            var l = i[s];
            du(
              a,
              function (t, r, n, a, o, u) {
                if (
                  (l.type === n || e === "*") &&
                  ((!a && l.namespace !== ".*") || l.namespace === a) &&
                  (!o || t.qualifierCompare(l.qualifier, o)) &&
                  (!u || l.callback === u)
                ) {
                  i.splice(s, 1);
                  return false;
                }
              },
              e,
              t,
              r,
              n
            );
          };
          for (var s = i.length - 1; s >= 0; s--) {
            o(s);
          }
          return this;
        };
        hu.removeAllListeners = function () {
          return this.removeListener("*");
        };
        hu.emit = hu.trigger = function (e, t, r) {
          var n = this.listeners;
          var a = n.length;
          this.emitting++;
          if (!w(t)) {
            t = [t];
          }
          gu(
            this,
            function (e, i) {
              if (r != null) {
                n = [{ event: i.event, type: i.type, namespace: i.namespace, callback: r }];
                a = n.length;
              }
              var o = function r(a) {
                var o = n[a];
                if (o.type === i.type && (!o.namespace || o.namespace === i.namespace || o.namespace === lu) && e.eventMatches(e.context, o, i)) {
                  var s = [i];
                  if (t != null) {
                    Xt(s, t);
                  }
                  e.beforeEmit(e.context, o, i);
                  if (o.conf && o.conf.one) {
                    e.listeners = e.listeners.filter(function (e) {
                      return e !== o;
                    });
                  }
                  var l = e.callbackContext(e.context, o, i);
                  var u = o.callback.apply(l, s);
                  e.afterEmit(e.context, o, i);
                  if (u === false) {
                    i.stopPropagation();
                    i.preventDefault();
                  }
                }
              };
              for (var s = 0; s < a; s++) {
                o(s);
              }
              if (e.bubble(e.context) && !i.isPropagationStopped()) {
                e.parent(e.context).emit(i, t);
              }
            },
            e
          );
          this.emitting--;
          return this;
        };
        var yu = {
          qualifierCompare: function e(t, r) {
            if (t == null || r == null) {
              return t == null && r == null;
            } else {
              return t.sameText(r);
            }
          },
          eventMatches: function e(t, r, n) {
            var a = r.qualifier;
            if (a != null) {
              return t !== n.target && A(n.target) && a.matches(n.target);
            }
            return true;
          },
          addEventFields: function e(t, r) {
            r.cy = t.cy();
            r.target = t;
          },
          callbackContext: function e(t, r, n) {
            return r.qualifier != null ? n.target : t;
          },
          beforeEmit: function e(t, r) {
            if (r.conf && r.conf.once) {
              r.conf.onceCollection.removeListener(r.event, r.qualifier, r.callback);
            }
          },
          bubble: function e() {
            return true;
          },
          parent: function e(t) {
            return t.isChild() ? t.parent() : t.cy();
          },
        };
        var mu = function e(t) {
          if (b(t)) {
            return new ol(t);
          } else {
            return t;
          }
        };
        var bu = {
          createEmitter: function e() {
            for (var t = 0; t < this.length; t++) {
              var r = this[t];
              var n = r._private;
              if (!n.emitter) {
                n.emitter = new fu(yu, r);
              }
            }
            return this;
          },
          emitter: function e() {
            return this._private.emitter;
          },
          on: function e(t, r, n) {
            var a = mu(r);
            for (var i = 0; i < this.length; i++) {
              var o = this[i];
              o.emitter().on(t, a, n);
            }
            return this;
          },
          removeListener: function e(t, r, n) {
            var a = mu(r);
            for (var i = 0; i < this.length; i++) {
              var o = this[i];
              o.emitter().removeListener(t, a, n);
            }
            return this;
          },
          removeAllListeners: function e() {
            for (var t = 0; t < this.length; t++) {
              var r = this[t];
              r.emitter().removeAllListeners();
            }
            return this;
          },
          one: function e(t, r, n) {
            var a = mu(r);
            for (var i = 0; i < this.length; i++) {
              var o = this[i];
              o.emitter().one(t, a, n);
            }
            return this;
          },
          once: function e(t, r, n) {
            var a = mu(r);
            for (var i = 0; i < this.length; i++) {
              var o = this[i];
              o.emitter().on(t, a, n, { once: true, onceCollection: this });
            }
          },
          emit: function e(t, r) {
            for (var n = 0; n < this.length; n++) {
              var a = this[n];
              a.emitter().emit(t, r);
            }
            return this;
          },
          emitAndNotify: function e(t, r) {
            if (this.length === 0) {
              return;
            }
            this.cy().notify(t, this);
            this.emit(t, r);
            return this;
          },
        };
        ks.eventAliasesOn(bu);
        var xu = {
          nodes: function e(t) {
            return this.filter(function (e) {
              return e.isNode();
            }).filter(t);
          },
          edges: function e(t) {
            return this.filter(function (e) {
              return e.isEdge();
            }).filter(t);
          },
          byGroup: function e() {
            var t = this.spawn();
            var r = this.spawn();
            for (var n = 0; n < this.length; n++) {
              var a = this[n];
              if (a.isNode()) {
                t.push(a);
              } else {
                r.push(a);
              }
            }
            return { nodes: t, edges: r };
          },
          filter: function e(t, r) {
            if (t === undefined) {
              return this;
            } else if (b(t) || N(t)) {
              return new ol(t).filter(this);
            } else if (x(t)) {
              var n = this.spawn();
              var a = this;
              for (var i = 0; i < a.length; i++) {
                var o = a[i];
                var s = r ? t.apply(r, [o, i, a]) : t(o, i, a);
                if (s) {
                  n.push(o);
                }
              }
              return n;
            }
            return this.spawn();
          },
          not: function e(t) {
            if (!t) {
              return this;
            } else {
              if (b(t)) {
                t = this.filter(t);
              }
              var r = this.spawn();
              for (var n = 0; n < this.length; n++) {
                var a = this[n];
                var i = t.has(a);
                if (!i) {
                  r.push(a);
                }
              }
              return r;
            }
          },
          absoluteComplement: function e() {
            var t = this.cy();
            return t.mutableElements().not(this);
          },
          intersect: function e(t) {
            if (b(t)) {
              var r = t;
              return this.filter(r);
            }
            var n = this.spawn();
            var a = this;
            var i = t;
            var o = this.length < t.length;
            var s = o ? a : i;
            var l = o ? i : a;
            for (var u = 0; u < s.length; u++) {
              var c = s[u];
              if (l.has(c)) {
                n.push(c);
              }
            }
            return n;
          },
          xor: function e(t) {
            var r = this._private.cy;
            if (b(t)) {
              t = r.$(t);
            }
            var n = this.spawn();
            var a = this;
            var i = t;
            var o = function e(t, r) {
              for (var a = 0; a < t.length; a++) {
                var i = t[a];
                var o = i._private.data.id;
                var s = r.hasElementWithId(o);
                if (!s) {
                  n.push(i);
                }
              }
            };
            o(a, i);
            o(i, a);
            return n;
          },
          diff: function e(t) {
            var r = this._private.cy;
            if (b(t)) {
              t = r.$(t);
            }
            var n = this.spawn();
            var a = this.spawn();
            var i = this.spawn();
            var o = this;
            var s = t;
            var l = function e(t, r, n) {
              for (var a = 0; a < t.length; a++) {
                var o = t[a];
                var s = o._private.data.id;
                var l = r.hasElementWithId(s);
                if (l) {
                  i.merge(o);
                } else {
                  n.push(o);
                }
              }
            };
            l(o, s, n);
            l(s, o, a);
            return { left: n, right: a, both: i };
          },
          add: function e(t) {
            var r = this._private.cy;
            if (!t) {
              return this;
            }
            if (b(t)) {
              var n = t;
              t = r.mutableElements().filter(n);
            }
            var a = this.spawnSelf();
            for (var i = 0; i < t.length; i++) {
              var o = t[i];
              var e = !this.has(o);
              if (e) {
                a.push(o);
              }
            }
            return a;
          },
          merge: function e(t) {
            var r = this._private;
            var n = r.cy;
            if (!t) {
              return this;
            }
            if (t && b(t)) {
              var a = t;
              t = n.mutableElements().filter(a);
            }
            var i = r.map;
            for (var o = 0; o < t.length; o++) {
              var s = t[o];
              var l = s._private.data.id;
              var u = !i.has(l);
              if (u) {
                var c = this.length++;
                this[c] = s;
                i.set(l, { ele: s, index: c });
              }
            }
            return this;
          },
          unmergeAt: function e(t) {
            var r = this[t];
            var n = r.id();
            var a = this._private;
            var i = a.map;
            this[t] = undefined;
            i["delete"](n);
            var o = t === this.length - 1;
            if (this.length > 1 && !o) {
              var s = this.length - 1;
              var l = this[s];
              var u = l._private.data.id;
              this[s] = undefined;
              this[t] = l;
              i.set(u, { ele: l, index: t });
            }
            this.length--;
            return this;
          },
          unmergeOne: function e(t) {
            t = t[0];
            var r = this._private;
            var n = t._private.data.id;
            var a = r.map;
            var i = a.get(n);
            if (!i) {
              return this;
            }
            var o = i.index;
            this.unmergeAt(o);
            return this;
          },
          unmerge: function e(t) {
            var r = this._private.cy;
            if (!t) {
              return this;
            }
            if (t && b(t)) {
              var n = t;
              t = r.mutableElements().filter(n);
            }
            for (var a = 0; a < t.length; a++) {
              this.unmergeOne(t[a]);
            }
            return this;
          },
          unmergeBy: function e(t) {
            for (var r = this.length - 1; r >= 0; r--) {
              var n = this[r];
              if (t(n)) {
                this.unmergeAt(r);
              }
            }
            return this;
          },
          map: function e(t, r) {
            var n = [];
            var a = this;
            for (var i = 0; i < a.length; i++) {
              var o = a[i];
              var s = r ? t.apply(r, [o, i, a]) : t(o, i, a);
              n.push(s);
            }
            return n;
          },
          reduce: function e(t, r) {
            var n = r;
            var a = this;
            for (var i = 0; i < a.length; i++) {
              n = t(n, a[i], i, a);
            }
            return n;
          },
          max: function e(t, r) {
            var e = -Infinity;
            var n;
            var a = this;
            for (var i = 0; i < a.length; i++) {
              var o = a[i];
              var s = r ? t.apply(r, [o, i, a]) : t(o, i, a);
              if (s > e) {
                e = s;
                n = o;
              }
            }
            return { value: e, ele: n };
          },
          min: function e(t, r) {
            var e = Infinity;
            var n;
            var a = this;
            for (var i = 0; i < a.length; i++) {
              var o = a[i];
              var s = r ? t.apply(r, [o, i, a]) : t(o, i, a);
              if (s < e) {
                e = s;
                n = o;
              }
            }
            return { value: e, ele: n };
          },
        };
        var wu = xu;
        wu["u"] = wu["|"] = wu["+"] = wu.union = wu.or = wu.add;
        wu["\\"] = wu["!"] = wu["-"] = wu.difference = wu.relativeComplement = wu.subtract = wu.not;
        wu["n"] = wu["&"] = wu["."] = wu.and = wu.intersection = wu.intersect;
        wu["^"] = wu["(+)"] = wu["(-)"] = wu.symmetricDifference = wu.symdiff = wu.xor;
        wu.fnFilter = wu.filterFn = wu.stdFilter = wu.filter;
        wu.complement = wu.abscomp = wu.absoluteComplement;
        var Eu = {
          isNode: function e() {
            return this.group() === "nodes";
          },
          isEdge: function e() {
            return this.group() === "edges";
          },
          isLoop: function e() {
            return this.isEdge() && this.source()[0] === this.target()[0];
          },
          isSimple: function e() {
            return this.isEdge() && this.source()[0] !== this.target()[0];
          },
          group: function e() {
            var t = this[0];
            if (t) {
              return t._private.group;
            }
          },
        };
        var Tu = function e(t, r) {
          var n = t.cy();
          var a = n.hasCompoundNodes();
          function i(e) {
            var t = e.pstyle("z-compound-depth");
            if (t.value === "auto") {
              return a ? e.zDepth() : 0;
            } else if (t.value === "bottom") {
              return -1;
            } else if (t.value === "top") {
              return Dt;
            }
            return 0;
          }
          var o = i(t) - i(r);
          if (o !== 0) {
            return o;
          }
          function s(e) {
            var t = e.pstyle("z-index-compare");
            if (t.value === "auto") {
              return e.isNode() ? 1 : 0;
            }
            return 0;
          }
          var l = s(t) - s(r);
          if (l !== 0) {
            return l;
          }
          var u = t.pstyle("z-index").value - r.pstyle("z-index").value;
          if (u !== 0) {
            return u;
          }
          return t.poolIndex() - r.poolIndex();
        };
        var _u = {
          forEach: function e(t, r) {
            if (x(t)) {
              var n = this.length;
              for (var a = 0; a < n; a++) {
                var i = this[a];
                var o = r ? t.apply(r, [i, a, this]) : t(i, a, this);
                if (o === false) {
                  break;
                }
              }
            }
            return this;
          },
          toArray: function e() {
            var t = [];
            for (var r = 0; r < this.length; r++) {
              t.push(this[r]);
            }
            return t;
          },
          slice: function e(t, r) {
            var n = [];
            var a = this.length;
            if (r == null) {
              r = a;
            }
            if (t == null) {
              t = 0;
            }
            if (t < 0) {
              t = a + t;
            }
            if (r < 0) {
              r = a + r;
            }
            for (var i = t; i >= 0 && i < r && i < a; i++) {
              n.push(this[i]);
            }
            return this.spawn(n);
          },
          size: function e() {
            return this.length;
          },
          eq: function e(t) {
            return this[t] || this.spawn();
          },
          first: function e() {
            return this[0] || this.spawn();
          },
          last: function e() {
            return this[this.length - 1] || this.spawn();
          },
          empty: function e() {
            return this.length === 0;
          },
          nonempty: function e() {
            return !this.empty();
          },
          sort: function e(t) {
            if (!x(t)) {
              return this;
            }
            var r = this.toArray().sort(t);
            return this.spawn(r);
          },
          sortByZIndex: function e() {
            return this.sort(Tu);
          },
          zDepth: function e() {
            var t = this[0];
            if (!t) {
              return undefined;
            }
            var r = t._private;
            var n = r.group;
            if (n === "nodes") {
              var a = r.data.parent ? t.parents().size() : 0;
              if (!t.isParent()) {
                return Dt - 1;
              }
              return a;
            } else {
              var i = r.source;
              var o = r.target;
              var s = i.zDepth();
              var l = o.zDepth();
              return Math.max(s, l, 0);
            }
          },
        };
        _u.each = _u.forEach;
        var Du = function t() {
          var r = "undefined";
          var n = (typeof Symbol === "undefined" ? "undefined" : e(Symbol)) != r && e(Symbol.iterator) != r;
          if (n) {
            _u[Symbol.iterator] = function () {
              var e = this;
              var t = { value: undefined, done: false };
              var r = 0;
              var n = this.length;
              return i(
                {
                  next: function a() {
                    if (r < n) {
                      t.value = e[r++];
                    } else {
                      t.value = undefined;
                      t.done = true;
                    }
                    return t;
                  },
                },
                Symbol.iterator,
                function () {
                  return this;
                }
              );
            };
          }
        };
        Du();
        var Cu = zt({ nodeDimensionsIncludeLabels: false });
        var Nu = {
          layoutDimensions: function e(t) {
            t = Cu(t);
            var r;
            if (!this.takesUpSpace()) {
              r = { w: 0, h: 0 };
            } else if (t.nodeDimensionsIncludeLabels) {
              var n = this.boundingBox();
              r = { w: n.w, h: n.h };
            } else {
              r = { w: this.outerWidth(), h: this.outerHeight() };
            }
            if (r.w === 0 || r.h === 0) {
              r.w = r.h = 1;
            }
            return r;
          },
          layoutPositions: function e(t, r, n) {
            var a = this.nodes().filter(function (e) {
              return !e.isParent();
            });
            var i = this.cy();
            var o = r.eles;
            var s = function e(t) {
              return t.id();
            };
            var l = F(n, s);
            t.emit({ type: "layoutstart", layout: t });
            t.animations = [];
            var u = function e(t, r, n) {
              var a = { x: r.x1 + r.w / 2, y: r.y1 + r.h / 2 };
              var i = { x: (n.x - a.x) * t, y: (n.y - a.y) * t };
              return { x: a.x + i.x, y: a.y + i.y };
            };
            var c = r.spacingFactor && r.spacingFactor !== 1;
            var v = function e() {
              if (!c) {
                return null;
              }
              var t = Or();
              for (var r = 0; r < a.length; r++) {
                var n = a[r];
                var i = l(n, r);
                Br(t, i.x, i.y);
              }
              return t;
            };
            var f = v();
            var h = F(function (e, t) {
              var n = l(e, t);
              if (c) {
                var a = Math.abs(r.spacingFactor);
                n = u(a, f, n);
              }
              if (r.transform != null) {
                n = r.transform(e, n);
              }
              return n;
            }, s);
            if (r.animate) {
              for (var d = 0; d < a.length; d++) {
                var p = a[d];
                var g = h(p, d);
                var y = r.animateFilter == null || r.animateFilter(p, d);
                if (y) {
                  var m = p.animation({ position: g, duration: r.animationDuration, easing: r.animationEasing });
                  t.animations.push(m);
                } else {
                  p.position(g);
                }
              }
              if (r.fit) {
                var b = i.animation({
                  fit: { boundingBox: o.boundingBoxAt(h), padding: r.padding },
                  duration: r.animationDuration,
                  easing: r.animationEasing,
                });
                t.animations.push(b);
              } else if (r.zoom !== undefined && r.pan !== undefined) {
                var x = i.animation({ zoom: r.zoom, pan: r.pan, duration: r.animationDuration, easing: r.animationEasing });
                t.animations.push(x);
              }
              t.animations.forEach(function (e) {
                return e.play();
              });
              t.one("layoutready", r.ready);
              t.emit({ type: "layoutready", layout: t });
              $a.all(
                t.animations.map(function (e) {
                  return e.promise();
                })
              ).then(function () {
                t.one("layoutstop", r.stop);
                t.emit({ type: "layoutstop", layout: t });
              });
            } else {
              a.positions(h);
              if (r.fit) {
                i.fit(r.eles, r.padding);
              }
              if (r.zoom != null) {
                i.zoom(r.zoom);
              }
              if (r.pan) {
                i.pan(r.pan);
              }
              t.one("layoutready", r.ready);
              t.emit({ type: "layoutready", layout: t });
              t.one("layoutstop", r.stop);
              t.emit({ type: "layoutstop", layout: t });
            }
            return this;
          },
          layout: function e(t) {
            var r = this.cy();
            return r.makeLayout(Q({}, t, { eles: this }));
          },
        };
        Nu.createLayout = Nu.makeLayout = Nu.layout;
        function Au(e, t, r) {
          var n = r._private;
          var a = (n.styleCache = n.styleCache || []);
          var i;
          if ((i = a[e]) != null) {
            return i;
          } else {
            i = a[e] = t(r);
            return i;
          }
        }
        function Lu(e, t) {
          e = bt(e);
          return function r(n) {
            return Au(e, t, n);
          };
        }
        function Iu(e, t) {
          e = bt(e);
          var r = function e(r) {
            return t.call(r);
          };
          return function t() {
            var n = this[0];
            if (n) {
              return Au(e, r, n);
            }
          };
        }
        var Su = {
          recalculateRenderedStyle: function e(t) {
            var r = this.cy();
            var n = r.renderer();
            var a = r.styleEnabled();
            if (n && a) {
              n.recalculateRenderedStyle(this, t);
            }
            return this;
          },
          dirtyStyleCache: function e() {
            var t = this.cy();
            var r = function e(t) {
              return (t._private.styleCache = null);
            };
            if (t.hasCompoundNodes()) {
              var n;
              n = this.spawnSelf().merge(this.descendants()).merge(this.parents());
              n.merge(n.connectedEdges());
              n.forEach(r);
            } else {
              this.forEach(function (e) {
                r(e);
                e.connectedEdges().forEach(r);
              });
            }
            return this;
          },
          updateStyle: function e(t) {
            var r = this._private.cy;
            if (!r.styleEnabled()) {
              return this;
            }
            if (r.batching()) {
              var n = r._private.batchStyleEles;
              n.merge(this);
              return this;
            }
            var a = r.hasCompoundNodes();
            var i = this;
            t = t || t === undefined ? true : false;
            if (a) {
              i = this.spawnSelf().merge(this.descendants()).merge(this.parents());
            }
            var o = i;
            if (t) {
              o.emitAndNotify("style");
            } else {
              o.emit("style");
            }
            i.forEach(function (e) {
              return (e._private.styleDirty = true);
            });
            return this;
          },
          cleanStyle: function e() {
            var t = this.cy();
            if (!t.styleEnabled()) {
              return;
            }
            for (var r = 0; r < this.length; r++) {
              var n = this[r];
              if (n._private.styleDirty) {
                n._private.styleDirty = false;
                t.style().apply(n);
              }
            }
          },
          parsedStyle: function e(t) {
            var r = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : true;
            var n = this[0];
            var a = n.cy();
            if (!a.styleEnabled()) {
              return;
            }
            if (n) {
              this.cleanStyle();
              var i = n._private.style[t];
              if (i != null) {
                return i;
              } else if (r) {
                return a.style().getDefaultProperty(t);
              } else {
                return null;
              }
            }
          },
          numericStyle: function e(t) {
            var r = this[0];
            if (!r.cy().styleEnabled()) {
              return;
            }
            if (r) {
              var n = r.pstyle(t);
              return n.pfValue !== undefined ? n.pfValue : n.value;
            }
          },
          numericStyleUnits: function e(t) {
            var r = this[0];
            if (!r.cy().styleEnabled()) {
              return;
            }
            if (r) {
              return r.pstyle(t).units;
            }
          },
          renderedStyle: function e(t) {
            var r = this.cy();
            if (!r.styleEnabled()) {
              return this;
            }
            var n = this[0];
            if (n) {
              return r.style().getRenderedStyle(n, t);
            }
          },
          style: function e(t, r) {
            var n = this.cy();
            if (!n.styleEnabled()) {
              return this;
            }
            var a = false;
            var e = n.style();
            if (E(t)) {
              var i = t;
              e.applyBypass(this, i, a);
              this.emitAndNotify("style");
            } else if (b(t)) {
              if (r === undefined) {
                var o = this[0];
                if (o) {
                  return e.getStylePropertyValue(o, t);
                } else {
                  return;
                }
              } else {
                e.applyBypass(this, t, r, a);
                this.emitAndNotify("style");
              }
            } else if (t === undefined) {
              var s = this[0];
              if (s) {
                return e.getRawStyle(s);
              } else {
                return;
              }
            }
            return this;
          },
          removeStyle: function e(t) {
            var r = this.cy();
            if (!r.styleEnabled()) {
              return this;
            }
            var n = false;
            var a = r.style();
            var i = this;
            if (t === undefined) {
              for (var o = 0; o < i.length; o++) {
                var s = i[o];
                a.removeAllBypasses(s, n);
              }
            } else {
              t = t.split(/\s+/);
              for (var l = 0; l < i.length; l++) {
                var u = i[l];
                a.removeBypasses(u, t, n);
              }
            }
            this.emitAndNotify("style");
            return this;
          },
          show: function e() {
            this.css("display", "element");
            return this;
          },
          hide: function e() {
            this.css("display", "none");
            return this;
          },
          effectiveOpacity: function e() {
            var t = this.cy();
            if (!t.styleEnabled()) {
              return 1;
            }
            var r = t.hasCompoundNodes();
            var n = this[0];
            if (n) {
              var a = n._private;
              var i = n.pstyle("opacity").value;
              if (!r) {
                return i;
              }
              var o = !a.data.parent ? null : n.parents();
              if (o) {
                for (var s = 0; s < o.length; s++) {
                  var l = o[s];
                  var u = l.pstyle("opacity").value;
                  i = u * i;
                }
              }
              return i;
            }
          },
          transparent: function e() {
            var t = this.cy();
            if (!t.styleEnabled()) {
              return false;
            }
            var r = this[0];
            var n = r.cy().hasCompoundNodes();
            if (r) {
              if (!n) {
                return r.pstyle("opacity").value === 0;
              } else {
                return r.effectiveOpacity() === 0;
              }
            }
          },
          backgrounding: function e() {
            var t = this.cy();
            if (!t.styleEnabled()) {
              return false;
            }
            var r = this[0];
            return r._private.backgrounding ? true : false;
          },
        };
        function ku(e, t) {
          var r = e._private;
          var n = r.data.parent ? e.parents() : null;
          if (n) {
            for (var a = 0; a < n.length; a++) {
              var i = n[a];
              if (!t(i)) {
                return false;
              }
            }
          }
          return true;
        }
        function Ou(e) {
          var t = e.ok;
          var r = e.edgeOkViaNode || e.ok;
          var n = e.parentOk || e.ok;
          return function () {
            var e = this.cy();
            if (!e.styleEnabled()) {
              return true;
            }
            var a = this[0];
            var i = e.hasCompoundNodes();
            if (a) {
              var o = a._private;
              if (!t(a)) {
                return false;
              }
              if (a.isNode()) {
                return !i || ku(a, n);
              } else {
                var s = o.source;
                var l = o.target;
                return r(s) && (!i || ku(s, r)) && (s === l || (r(l) && (!i || ku(l, r))));
              }
            }
          };
        }
        var Mu = Lu("eleTakesUpSpace", function (e) {
          return e.pstyle("display").value === "element" && e.width() !== 0 && (e.isNode() ? e.height() !== 0 : true);
        });
        Su.takesUpSpace = Iu("takesUpSpace", Ou({ ok: Mu }));
        var Pu = Lu("eleInteractive", function (e) {
          return e.pstyle("events").value === "yes" && e.pstyle("visibility").value === "visible" && Mu(e);
        });
        var Ru = Lu("parentInteractive", function (e) {
          return e.pstyle("visibility").value === "visible" && Mu(e);
        });
        Su.interactive = Iu("interactive", Ou({ ok: Pu, parentOk: Ru, edgeOkViaNode: Mu }));
        Su.noninteractive = function () {
          var e = this[0];
          if (e) {
            return !e.interactive();
          }
        };
        var Bu = Lu("eleVisible", function (e) {
          return e.pstyle("visibility").value === "visible" && e.pstyle("opacity").pfValue !== 0 && Mu(e);
        });
        var Fu = Mu;
        Su.visible = Iu("visible", Ou({ ok: Bu, edgeOkViaNode: Fu }));
        Su.hidden = function () {
          var e = this[0];
          if (e) {
            return !e.visible();
          }
        };
        Su.isBundledBezier = Iu("isBundledBezier", function () {
          if (!this.cy().styleEnabled()) {
            return false;
          }
          return !this.removed() && this.pstyle("curve-style").value === "bezier" && this.takesUpSpace();
        });
        Su.bypass = Su.css = Su.style;
        Su.renderedCss = Su.renderedStyle;
        Su.removeBypass = Su.removeCss = Su.removeStyle;
        Su.pstyle = Su.parsedStyle;
        var zu = {};
        function Gu(e) {
          return function () {
            var t = arguments;
            var r = [];
            if (t.length === 2) {
              var n = t[0];
              var a = t[1];
              this.on(e.event, n, a);
            } else if (t.length === 1 && x(t[0])) {
              var i = t[0];
              this.on(e.event, i);
            } else if (t.length === 0 || (t.length === 1 && w(t[0]))) {
              var o = t.length === 1 ? t[0] : null;
              for (var s = 0; s < this.length; s++) {
                var l = this[s];
                var u = !e.ableField || l._private[e.ableField];
                var c = l._private[e.field] != e.value;
                if (e.overrideAble) {
                  var v = e.overrideAble(l);
                  if (v !== undefined) {
                    u = v;
                    if (!v) {
                      return this;
                    }
                  }
                }
                if (u) {
                  l._private[e.field] = e.value;
                  if (c) {
                    r.push(l);
                  }
                }
              }
              var f = this.spawn(r);
              f.updateStyle();
              f.emit(e.event);
              if (o) {
                f.emit(o);
              }
            }
            return this;
          };
        }
        function Yu(e) {
          zu[e.field] = function () {
            var t = this[0];
            if (t) {
              if (e.overrideField) {
                var r = e.overrideField(t);
                if (r !== undefined) {
                  return r;
                }
              }
              return t._private[e.field];
            }
          };
          zu[e.on] = Gu({ event: e.on, field: e.field, ableField: e.ableField, overrideAble: e.overrideAble, value: true });
          zu[e.off] = Gu({ event: e.off, field: e.field, ableField: e.ableField, overrideAble: e.overrideAble, value: false });
        }
        Yu({
          field: "locked",
          overrideField: function e(t) {
            return t.cy().autolock() ? true : undefined;
          },
          on: "lock",
          off: "unlock",
        });
        Yu({
          field: "grabbable",
          overrideField: function e(t) {
            return t.cy().autoungrabify() || t.pannable() ? false : undefined;
          },
          on: "grabify",
          off: "ungrabify",
        });
        Yu({
          field: "selected",
          ableField: "selectable",
          overrideAble: function e(t) {
            return t.cy().autounselectify() ? false : undefined;
          },
          on: "select",
          off: "unselect",
        });
        Yu({
          field: "selectable",
          overrideField: function e(t) {
            return t.cy().autounselectify() ? false : undefined;
          },
          on: "selectify",
          off: "unselectify",
        });
        zu.deselect = zu.unselect;
        zu.grabbed = function () {
          var e = this[0];
          if (e) {
            return e._private.grabbed;
          }
        };
        Yu({ field: "active", on: "activate", off: "unactivate" });
        Yu({ field: "pannable", on: "panify", off: "unpanify" });
        zu.inactive = function () {
          var e = this[0];
          if (e) {
            return !e._private.active;
          }
        };
        var Xu = {};
        var Vu = function e(t) {
          return function e(r) {
            var n = this;
            var a = [];
            for (var i = 0; i < n.length; i++) {
              var o = n[i];
              if (!o.isNode()) {
                continue;
              }
              var s = false;
              var l = o.connectedEdges();
              for (var u = 0; u < l.length; u++) {
                var c = l[u];
                var v = c.source();
                var f = c.target();
                if ((t.noIncomingEdges && f === o && v !== o) || (t.noOutgoingEdges && v === o && f !== o)) {
                  s = true;
                  break;
                }
              }
              if (!s) {
                a.push(o);
              }
            }
            return this.spawn(a, true).filter(r);
          };
        };
        var Uu = function e(t) {
          return function (e) {
            var r = this;
            var n = [];
            for (var a = 0; a < r.length; a++) {
              var i = r[a];
              if (!i.isNode()) {
                continue;
              }
              var o = i.connectedEdges();
              for (var s = 0; s < o.length; s++) {
                var l = o[s];
                var u = l.source();
                var c = l.target();
                if (t.outgoing && u === i) {
                  n.push(l);
                  n.push(c);
                } else if (t.incoming && c === i) {
                  n.push(l);
                  n.push(u);
                }
              }
            }
            return this.spawn(n, true).filter(e);
          };
        };
        var ju = function e(t) {
          return function (e) {
            var r = this;
            var n = [];
            var a = {};
            for (;;) {
              var i = t.outgoing ? r.outgoers() : r.incomers();
              if (i.length === 0) {
                break;
              }
              var o = false;
              for (var s = 0; s < i.length; s++) {
                var l = i[s];
                var u = l.id();
                if (!a[u]) {
                  a[u] = true;
                  n.push(l);
                  o = true;
                }
              }
              if (!o) {
                break;
              }
              r = i;
            }
            return this.spawn(n, true).filter(e);
          };
        };
        Xu.clearTraversalCache = function () {
          for (var e = 0; e < this.length; e++) {
            this[e]._private.traversalCache = null;
          }
        };
        Q(Xu, {
          roots: Vu({ noIncomingEdges: true }),
          leaves: Vu({ noOutgoingEdges: true }),
          outgoers: ul(Uu({ outgoing: true }), "outgoers"),
          successors: ju({ outgoing: true }),
          incomers: ul(Uu({ incoming: true }), "incomers"),
          predecessors: ju({ incoming: true }),
        });
        Q(Xu, {
          neighborhood: ul(function (e) {
            var t = [];
            var r = this.nodes();
            for (var n = 0; n < r.length; n++) {
              var a = r[n];
              var i = a.connectedEdges();
              for (var o = 0; o < i.length; o++) {
                var s = i[o];
                var l = s.source();
                var u = s.target();
                var c = a === l ? u : l;
                if (c.length > 0) {
                  t.push(c[0]);
                }
                t.push(s[0]);
              }
            }
            return this.spawn(t, true).filter(e);
          }, "neighborhood"),
          closedNeighborhood: function e(t) {
            return this.neighborhood().add(this).filter(t);
          },
          openNeighborhood: function e(t) {
            return this.neighborhood(t);
          },
        });
        Xu.neighbourhood = Xu.neighborhood;
        Xu.closedNeighbourhood = Xu.closedNeighborhood;
        Xu.openNeighbourhood = Xu.openNeighborhood;
        Q(Xu, {
          source: ul(function e(t) {
            var r = this[0];
            var n;
            if (r) {
              n = r._private.source || r.cy().collection();
            }
            return n && t ? n.filter(t) : n;
          }, "source"),
          target: ul(function e(t) {
            var r = this[0];
            var n;
            if (r) {
              n = r._private.target || r.cy().collection();
            }
            return n && t ? n.filter(t) : n;
          }, "target"),
          sources: Hu({ attr: "source" }),
          targets: Hu({ attr: "target" }),
        });
        function Hu(e) {
          return function t(r) {
            var n = [];
            for (var a = 0; a < this.length; a++) {
              var i = this[a];
              var o = i._private[e.attr];
              if (o) {
                n.push(o);
              }
            }
            return this.spawn(n, true).filter(r);
          };
        }
        Q(Xu, { edgesWith: ul(qu(), "edgesWith"), edgesTo: ul(qu({ thisIsSrc: true }), "edgesTo") });
        function qu(e) {
          return function t(r) {
            var n = [];
            var a = this._private.cy;
            var i = e || {};
            if (b(r)) {
              r = a.$(r);
            }
            for (var o = 0; o < r.length; o++) {
              var s = r[o]._private.edges;
              for (var l = 0; l < s.length; l++) {
                var u = s[l];
                var c = u._private.data;
                var v = this.hasElementWithId(c.source) && r.hasElementWithId(c.target);
                var f = r.hasElementWithId(c.source) && this.hasElementWithId(c.target);
                var h = v || f;
                if (!h) {
                  continue;
                }
                if (i.thisIsSrc || i.thisIsTgt) {
                  if (i.thisIsSrc && !v) {
                    continue;
                  }
                  if (i.thisIsTgt && !f) {
                    continue;
                  }
                }
                n.push(u);
              }
            }
            return this.spawn(n, true);
          };
        }
        Q(Xu, {
          connectedEdges: ul(function (e) {
            var t = [];
            var r = this;
            for (var n = 0; n < r.length; n++) {
              var a = r[n];
              if (!a.isNode()) {
                continue;
              }
              var i = a._private.edges;
              for (var o = 0; o < i.length; o++) {
                var s = i[o];
                t.push(s);
              }
            }
            return this.spawn(t, true).filter(e);
          }, "connectedEdges"),
          connectedNodes: ul(function (e) {
            var t = [];
            var r = this;
            for (var n = 0; n < r.length; n++) {
              var a = r[n];
              if (!a.isEdge()) {
                continue;
              }
              t.push(a.source()[0]);
              t.push(a.target()[0]);
            }
            return this.spawn(t, true).filter(e);
          }, "connectedNodes"),
          parallelEdges: ul(Wu(), "parallelEdges"),
          codirectedEdges: ul(Wu({ codirected: true }), "codirectedEdges"),
        });
        function Wu(e) {
          var t = { codirected: false };
          e = Q({}, t, e);
          return function t(r) {
            var n = [];
            var a = this.edges();
            var i = e;
            for (var o = 0; o < a.length; o++) {
              var s = a[o];
              var l = s._private;
              var u = l.source;
              var c = u._private.data.id;
              var v = l.data.target;
              var f = u._private.edges;
              for (var h = 0; h < f.length; h++) {
                var d = f[h];
                var p = d._private.data;
                var g = p.target;
                var y = p.source;
                var m = g === v && y === c;
                var b = c === g && v === y;
                if ((i.codirected && m) || (!i.codirected && (m || b))) {
                  n.push(d);
                }
              }
            }
            return this.spawn(n, true).filter(r);
          };
        }
        Q(Xu, {
          components: function e(t) {
            var r = this;
            var n = r.cy();
            var a = n.collection();
            var i = t == null ? r.nodes() : t.nodes();
            var e = [];
            if (t != null && i.empty()) {
              i = t.sources();
            }
            var o = function e(t, r) {
              a.merge(t);
              i.unmerge(t);
              r.merge(t);
            };
            if (i.empty()) {
              return r.spawn();
            }
            var s = function t() {
              var a = n.collection();
              e.push(a);
              var s = i[0];
              o(s, a);
              r.bfs({
                directed: false,
                roots: s,
                visit: function e(t) {
                  return o(t, a);
                },
              });
              a.forEach(function (e) {
                e.connectedEdges().forEach(function (e) {
                  if (r.has(e) && a.has(e.source()) && a.has(e.target())) {
                    a.merge(e);
                  }
                });
              });
            };
            do {
              s();
            } while (i.length > 0);
            return e;
          },
          component: function e() {
            var t = this[0];
            return t.cy().mutableElements().components(t)[0];
          },
        });
        Xu.componentsOf = Xu.components;
        var $u = function e(t, r) {
          var n = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : false;
          var a = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : false;
          if (t === undefined) {
            It("A collection must have a reference to the core");
            return;
          }
          var i = new Ht();
          var o = false;
          if (!r) {
            r = [];
          } else if (r.length > 0 && E(r[0]) && !A(r[0])) {
            o = true;
            var s = [];
            var l = new $t();
            for (var u = 0, c = r.length; u < c; u++) {
              var v = r[u];
              if (v.data == null) {
                v.data = {};
              }
              var f = v.data;
              if (f.id == null) {
                f.id = Rt();
              } else if (t.hasElementWithId(f.id) || l.has(f.id)) {
                continue;
              }
              var h = new Kt(t, v, false);
              s.push(h);
              l.add(f.id);
            }
            r = s;
          }
          this.length = 0;
          for (var d = 0, p = r.length; d < p; d++) {
            var g = r[d][0];
            if (g == null) {
              continue;
            }
            var y = g._private.data.id;
            if (!n || !i.has(y)) {
              if (n) {
                i.set(y, { index: this.length, ele: g });
              }
              this[this.length] = g;
              this.length++;
            }
          }
          this._private = {
            eles: this,
            cy: t,
            get map() {
              if (this.lazyMap == null) {
                this.rebuildMap();
              }
              return this.lazyMap;
            },
            set map(e) {
              this.lazyMap = e;
            },
            rebuildMap: function e() {
              var t = (this.lazyMap = new Ht());
              var r = this.eles;
              for (var n = 0; n < r.length; n++) {
                var a = r[n];
                t.set(a.id(), { index: n, ele: a });
              }
            },
          };
          if (n) {
            this._private.map = i;
          }
          if (o && !a) {
            this.restore();
          }
        };
        var Ku = (Kt.prototype = $u.prototype = Object.create(Array.prototype));
        Ku.instanceString = function () {
          return "collection";
        };
        Ku.spawn = function (e, t) {
          return new $u(this.cy(), e, t);
        };
        Ku.spawnSelf = function () {
          return this.spawn(this);
        };
        Ku.cy = function () {
          return this._private.cy;
        };
        Ku.renderer = function () {
          return this._private.cy.renderer();
        };
        Ku.element = function () {
          return this[0];
        };
        Ku.collection = function () {
          if (L(this)) {
            return this;
          } else {
            return new $u(this._private.cy, [this]);
          }
        };
        Ku.unique = function () {
          return new $u(this._private.cy, this, true);
        };
        Ku.hasElementWithId = function (e) {
          e = "" + e;
          return this._private.map.has(e);
        };
        Ku.getElementById = function (e) {
          e = "" + e;
          var t = this._private.cy;
          var r = this._private.map.get(e);
          return r ? r.ele : new $u(t);
        };
        Ku.$id = Ku.getElementById;
        Ku.poolIndex = function () {
          var e = this._private.cy;
          var t = e._private.elements;
          var r = this[0]._private.data.id;
          return t._private.map.get(r).index;
        };
        Ku.indexOf = function (e) {
          var t = e[0]._private.data.id;
          return this._private.map.get(t).index;
        };
        Ku.indexOfId = function (e) {
          e = "" + e;
          return this._private.map.get(e).index;
        };
        Ku.json = function (e) {
          var t = this.element();
          var r = this.cy();
          if (t == null && e) {
            return this;
          }
          if (t == null) {
            return undefined;
          }
          var n = t._private;
          if (E(e)) {
            r.startBatch();
            if (e.data) {
              t.data(e.data);
              var a = n.data;
              if (t.isEdge()) {
                var i = false;
                var o = {};
                var s = e.data.source;
                var l = e.data.target;
                if (s != null && s != a.source) {
                  o.source = "" + s;
                  i = true;
                }
                if (l != null && l != a.target) {
                  o.target = "" + l;
                  i = true;
                }
                if (i) {
                  t = t.move(o);
                }
              } else {
                var u = "parent" in e.data;
                var c = e.data.parent;
                if (u && (c != null || a.parent != null) && c != a.parent) {
                  if (c === undefined) {
                    c = null;
                  }
                  if (c != null) {
                    c = "" + c;
                  }
                  t = t.move({ parent: c });
                }
              }
            }
            if (e.position) {
              t.position(e.position);
            }
            var v = function r(a, i, o) {
              var s = e[a];
              if (s != null && s !== n[a]) {
                if (s) {
                  t[i]();
                } else {
                  t[o]();
                }
              }
            };
            v("removed", "remove", "restore");
            v("selected", "select", "unselect");
            v("selectable", "selectify", "unselectify");
            v("locked", "lock", "unlock");
            v("grabbable", "grabify", "ungrabify");
            v("pannable", "panify", "unpanify");
            if (e.classes != null) {
              t.classes(e.classes);
            }
            r.endBatch();
            return this;
          } else if (e === undefined) {
            var f = {
              data: Mt(n.data),
              position: Mt(n.position),
              group: n.group,
              removed: n.removed,
              selected: n.selected,
              selectable: n.selectable,
              locked: n.locked,
              grabbable: n.grabbable,
              pannable: n.pannable,
              classes: null,
            };
            f.classes = "";
            var h = 0;
            n.classes.forEach(function (e) {
              return (f.classes += h++ === 0 ? e : " " + e);
            });
            return f;
          }
        };
        Ku.jsons = function () {
          var e = [];
          for (var t = 0; t < this.length; t++) {
            var r = this[t];
            var n = r.json();
            e.push(n);
          }
          return e;
        };
        Ku.clone = function () {
          var e = this.cy();
          var t = [];
          for (var r = 0; r < this.length; r++) {
            var n = this[r];
            var a = n.json();
            var i = new Kt(e, a, false);
            t.push(i);
          }
          return new $u(e, t);
        };
        Ku.copy = Ku.clone;
        Ku.restore = function () {
          var e = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : true;
          var t = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : true;
          var r = this;
          var n = r.cy();
          var a = n._private;
          var i = [];
          var o = [];
          var s;
          for (var l = 0, u = r.length; l < u; l++) {
            var c = r[l];
            if (t && !c.removed()) {
              continue;
            }
            if (c.isNode()) {
              i.push(c);
            } else {
              o.push(c);
            }
          }
          s = i.concat(o);
          var v;
          var f = function e() {
            s.splice(v, 1);
            v--;
          };
          for (v = 0; v < s.length; v++) {
            var h = s[v];
            var d = h._private;
            var p = d.data;
            h.clearTraversalCache();
            if (!t && !d.removed);
            else if (p.id === undefined) {
              p.id = Rt();
            } else if (_(p.id)) {
              p.id = "" + p.id;
            } else if (O(p.id) || !b(p.id)) {
              It("Can not create element with invalid string ID `" + p.id + "`");
              f();
              continue;
            } else if (n.hasElementWithId(p.id)) {
              It("Can not create second element with ID `" + p.id + "`");
              f();
              continue;
            }
            var g = p.id;
            if (h.isNode()) {
              var y = d.position;
              if (y.x == null) {
                y.x = 0;
              }
              if (y.y == null) {
                y.y = 0;
              }
            }
            if (h.isEdge()) {
              var m = h;
              var x = ["source", "target"];
              var w = x.length;
              var E = false;
              for (var T = 0; T < w; T++) {
                var D = x[T];
                var C = p[D];
                if (_(C)) {
                  C = p[D] = "" + p[D];
                }
                if (C == null || C === "") {
                  It("Can not create edge `" + g + "` with unspecified " + D);
                  E = true;
                } else if (!n.hasElementWithId(C)) {
                  It("Can not create edge `" + g + "` with nonexistant " + D + " `" + C + "`");
                  E = true;
                }
              }
              if (E) {
                f();
                continue;
              }
              var N = n.getElementById(p.source);
              var A = n.getElementById(p.target);
              if (N.same(A)) {
                N._private.edges.push(m);
              } else {
                N._private.edges.push(m);
                A._private.edges.push(m);
              }
              m._private.source = N;
              m._private.target = A;
            }
            d.map = new Ht();
            d.map.set(g, { ele: h, index: 0 });
            d.removed = false;
            if (t) {
              n.addToPool(h);
            }
          }
          for (var L = 0; L < i.length; L++) {
            var I = i[L];
            var S = I._private.data;
            if (_(S.parent)) {
              S.parent = "" + S.parent;
            }
            var k = S.parent;
            var M = k != null;
            if (M || I._private.parent) {
              var P = I._private.parent ? n.collection().merge(I._private.parent) : n.getElementById(k);
              if (P.empty()) {
                S.parent = undefined;
              } else if (P[0].removed()) {
                kt("Node added with missing parent, reference to parent removed");
                S.parent = undefined;
                I._private.parent = null;
              } else {
                var R = false;
                var B = P;
                while (!B.empty()) {
                  if (I.same(B)) {
                    R = true;
                    S.parent = undefined;
                    break;
                  }
                  B = B.parent();
                }
                if (!R) {
                  P[0]._private.children.push(I);
                  I._private.parent = P[0];
                  a.hasCompoundNodes = true;
                }
              }
            }
          }
          if (s.length > 0) {
            var F = s.length === r.length ? r : new $u(n, s);
            for (var z = 0; z < F.length; z++) {
              var G = F[z];
              if (G.isNode()) {
                continue;
              }
              G.parallelEdges().clearTraversalCache();
              G.source().clearTraversalCache();
              G.target().clearTraversalCache();
            }
            var Y;
            if (a.hasCompoundNodes) {
              Y = n.collection().merge(F).merge(F.connectedNodes()).merge(F.parent());
            } else {
              Y = F;
            }
            Y.dirtyCompoundBoundsCache().dirtyBoundingBoxCache().updateStyle(e);
            if (e) {
              F.emitAndNotify("add");
            } else if (t) {
              F.emit("add");
            }
          }
          return r;
        };
        Ku.removed = function () {
          var e = this[0];
          return e && e._private.removed;
        };
        Ku.inside = function () {
          var e = this[0];
          return e && !e._private.removed;
        };
        Ku.remove = function () {
          var e = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : true;
          var t = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : true;
          var r = this;
          var n = [];
          var a = {};
          var i = r._private.cy;
          function o(e) {
            var t = e._private.edges;
            for (var r = 0; r < t.length; r++) {
              l(t[r]);
            }
          }
          function s(e) {
            var t = e._private.children;
            for (var r = 0; r < t.length; r++) {
              l(t[r]);
            }
          }
          function l(e) {
            var r = a[e.id()];
            if ((t && e.removed()) || r) {
              return;
            } else {
              a[e.id()] = true;
            }
            if (e.isNode()) {
              n.push(e);
              o(e);
              s(e);
            } else {
              n.unshift(e);
            }
          }
          for (var u = 0, c = r.length; u < c; u++) {
            var v = r[u];
            l(v);
          }
          function f(e, t) {
            var r = e._private.edges;
            Gt(r, t);
            e.clearTraversalCache();
          }
          function h(e) {
            e.clearTraversalCache();
          }
          var d = [];
          d.ids = {};
          function p(e, t) {
            t = t[0];
            e = e[0];
            var r = e._private.children;
            var n = e.id();
            Gt(r, t);
            t._private.parent = null;
            if (!d.ids[n]) {
              d.ids[n] = true;
              d.push(e);
            }
          }
          r.dirtyCompoundBoundsCache();
          if (t) {
            i.removeFromPool(n);
          }
          for (var g = 0; g < n.length; g++) {
            var y = n[g];
            if (y.isEdge()) {
              var m = y.source()[0];
              var b = y.target()[0];
              f(m, y);
              f(b, y);
              var x = y.parallelEdges();
              for (var w = 0; w < x.length; w++) {
                var E = x[w];
                h(E);
                if (E.isBundledBezier()) {
                  E.dirtyBoundingBoxCache();
                }
              }
            } else {
              var T = y.parent();
              if (T.length !== 0) {
                p(T, y);
              }
            }
            if (t) {
              y._private.removed = true;
            }
          }
          var _ = i._private.elements;
          i._private.hasCompoundNodes = false;
          for (var D = 0; D < _.length; D++) {
            var C = _[D];
            if (C.isParent()) {
              i._private.hasCompoundNodes = true;
              break;
            }
          }
          var N = new $u(this.cy(), n);
          if (N.size() > 0) {
            if (e) {
              N.emitAndNotify("remove");
            } else if (t) {
              N.emit("remove");
            }
          }
          for (var A = 0; A < d.length; A++) {
            var L = d[A];
            if (!t || !L.removed()) {
              L.updateStyle();
            }
          }
          return N;
        };
        Ku.move = function (e) {
          var t = this._private.cy;
          var r = this;
          var n = false;
          var a = false;
          var i = function e(t) {
            return t == null ? t : "" + t;
          };
          if (e.source !== undefined || e.target !== undefined) {
            var o = i(e.source);
            var s = i(e.target);
            var l = o != null && t.hasElementWithId(o);
            var u = s != null && t.hasElementWithId(s);
            if (l || u) {
              t.batch(function () {
                r.remove(n, a);
                r.emitAndNotify("moveout");
                for (var e = 0; e < r.length; e++) {
                  var t = r[e];
                  var i = t._private.data;
                  if (t.isEdge()) {
                    if (l) {
                      i.source = o;
                    }
                    if (u) {
                      i.target = s;
                    }
                  }
                }
                r.restore(n, a);
              });
              r.emitAndNotify("move");
            }
          } else if (e.parent !== undefined) {
            var c = i(e.parent);
            var v = c === null || t.hasElementWithId(c);
            if (v) {
              var f = c === null ? undefined : c;
              t.batch(function () {
                var e = r.remove(n, a);
                e.emitAndNotify("moveout");
                for (var t = 0; t < r.length; t++) {
                  var i = r[t];
                  var o = i._private.data;
                  if (i.isNode()) {
                    o.parent = f;
                  }
                }
                e.restore(n, a);
              });
              r.emitAndNotify("move");
            }
          }
          return this;
        };
        [za, Os, Ms, ll, cl, yl, ml, nu, bu, xu, Eu, _u, Nu, Su, zu, Xu].forEach(function (e) {
          Q(Ku, e);
        });
        var Zu = {
          add: function e(t) {
            var r;
            var n = this;
            if (N(t)) {
              var a = t;
              if (a._private.cy === n) {
                r = a.restore();
              } else {
                var i = [];
                for (var o = 0; o < a.length; o++) {
                  var s = a[o];
                  i.push(s.json());
                }
                r = new $u(n, i);
              }
            } else if (w(t)) {
              var l = t;
              r = new $u(n, l);
            } else if (E(t) && (w(t.nodes) || w(t.edges))) {
              var u = t;
              var c = [];
              var v = ["nodes", "edges"];
              for (var f = 0, h = v.length; f < h; f++) {
                var d = v[f];
                var p = u[d];
                if (w(p)) {
                  for (var g = 0, y = p.length; g < y; g++) {
                    var m = Q({ group: d }, p[g]);
                    c.push(m);
                  }
                }
              }
              r = new $u(n, c);
            } else {
              var b = t;
              r = new Kt(n, b).collection();
            }
            return r;
          },
          remove: function e(t) {
            if (N(t));
            else if (b(t)) {
              var r = t;
              t = this.$(r);
            }
            return t.remove();
          },
        };
        function Qu(e, t, r, n) {
          var a = 4,
            i = 0.001,
            o = 1e-7,
            s = 10,
            l = 11,
            u = 1 / (l - 1),
            c = typeof Float32Array !== "undefined";
          if (arguments.length !== 4) {
            return false;
          }
          for (var v = 0; v < 4; ++v) {
            if (typeof arguments[v] !== "number" || isNaN(arguments[v]) || !isFinite(arguments[v])) {
              return false;
            }
          }
          e = Math.min(e, 1);
          r = Math.min(r, 1);
          e = Math.max(e, 0);
          r = Math.max(r, 0);
          var f = c ? new Float32Array(l) : new Array(l);
          function h(e, t) {
            return 1 - 3 * t + 3 * e;
          }
          function d(e, t) {
            return 3 * t - 6 * e;
          }
          function p(e) {
            return 3 * e;
          }
          function g(e, t, r) {
            return ((h(t, r) * e + d(t, r)) * e + p(t)) * e;
          }
          function y(e, t, r) {
            return 3 * h(t, r) * e * e + 2 * d(t, r) * e + p(t);
          }
          function m(t, n) {
            for (var i = 0; i < a; ++i) {
              var o = y(n, e, r);
              if (o === 0) {
                return n;
              }
              var s = g(n, e, r) - t;
              n -= s / o;
            }
            return n;
          }
          function b() {
            for (var t = 0; t < l; ++t) {
              f[t] = g(t * u, e, r);
            }
          }
          function x(t, n, a) {
            var i,
              l,
              u = 0;
            do {
              l = n + (a - n) / 2;
              i = g(l, e, r) - t;
              if (i > 0) {
                a = l;
              } else {
                n = l;
              }
            } while (Math.abs(i) > o && ++u < s);
            return l;
          }
          function w(t) {
            var n = 0,
              a = 1,
              o = l - 1;
            for (; a !== o && f[a] <= t; ++a) {
              n += u;
            }
            --a;
            var s = (t - f[a]) / (f[a + 1] - f[a]),
              c = n + s * u,
              v = y(c, e, r);
            if (v >= i) {
              return m(t, c);
            } else if (v === 0) {
              return c;
            } else {
              return x(t, n, n + u);
            }
          }
          var E = false;
          function T() {
            E = true;
            if (e !== t || r !== n) {
              b();
            }
          }
          var _ = function a(i) {
            if (!E) {
              T();
            }
            if (e === t && r === n) {
              return i;
            }
            if (i === 0) {
              return 0;
            }
            if (i === 1) {
              return 1;
            }
            return g(w(i), t, n);
          };
          _.getControlPoints = function () {
            return [
              { x: e, y: t },
              { x: r, y: n },
            ];
          };
          var D = "generateBezier(" + [e, t, r, n] + ")";
          _.toString = function () {
            return D;
          };
          return _;
        }
        var Ju = (function () {
          function e(e) {
            return -e.tension * e.x - e.friction * e.v;
          }
          function t(t, r, n) {
            var a = { x: t.x + n.dx * r, v: t.v + n.dv * r, tension: t.tension, friction: t.friction };
            return { dx: a.v, dv: e(a) };
          }
          function r(r, n) {
            var a = { dx: r.v, dv: e(r) },
              i = t(r, n * 0.5, a),
              o = t(r, n * 0.5, i),
              s = t(r, n, o),
              l = (1 / 6) * (a.dx + 2 * (i.dx + o.dx) + s.dx),
              u = (1 / 6) * (a.dv + 2 * (i.dv + o.dv) + s.dv);
            r.x = r.x + l * n;
            r.v = r.v + u * n;
            return r;
          }
          return function e(t, n, a) {
            var i = { x: -1, v: 0, tension: null, friction: null },
              o = [0],
              s = 0,
              l = 1 / 1e4,
              u = 16 / 1e3,
              c,
              v,
              f;
            t = parseFloat(t) || 500;
            n = parseFloat(n) || 20;
            a = a || null;
            i.tension = t;
            i.friction = n;
            c = a !== null;
            if (c) {
              s = e(t, n);
              v = (s / a) * u;
            } else {
              v = u;
            }
            for (;;) {
              f = r(f || i, v);
              o.push(1 + f.x);
              s += 16;
              if (!(Math.abs(f.x) > l && Math.abs(f.v) > l)) {
                break;
              }
            }
            return !c
              ? s
              : function (e) {
                  return o[(e * (o.length - 1)) | 0];
                };
          };
        })();
        var ec = function e(t, r, n, a) {
          var i = Qu(t, r, n, a);
          return function (e, t, r) {
            return e + (t - e) * i(r);
          };
        };
        var tc = {
          linear: function e(t, r, n) {
            return t + (r - t) * n;
          },
          ease: ec(0.25, 0.1, 0.25, 1),
          "ease-in": ec(0.42, 0, 1, 1),
          "ease-out": ec(0, 0, 0.58, 1),
          "ease-in-out": ec(0.42, 0, 0.58, 1),
          "ease-in-sine": ec(0.47, 0, 0.745, 0.715),
          "ease-out-sine": ec(0.39, 0.575, 0.565, 1),
          "ease-in-out-sine": ec(0.445, 0.05, 0.55, 0.95),
          "ease-in-quad": ec(0.55, 0.085, 0.68, 0.53),
          "ease-out-quad": ec(0.25, 0.46, 0.45, 0.94),
          "ease-in-out-quad": ec(0.455, 0.03, 0.515, 0.955),
          "ease-in-cubic": ec(0.55, 0.055, 0.675, 0.19),
          "ease-out-cubic": ec(0.215, 0.61, 0.355, 1),
          "ease-in-out-cubic": ec(0.645, 0.045, 0.355, 1),
          "ease-in-quart": ec(0.895, 0.03, 0.685, 0.22),
          "ease-out-quart": ec(0.165, 0.84, 0.44, 1),
          "ease-in-out-quart": ec(0.77, 0, 0.175, 1),
          "ease-in-quint": ec(0.755, 0.05, 0.855, 0.06),
          "ease-out-quint": ec(0.23, 1, 0.32, 1),
          "ease-in-out-quint": ec(0.86, 0, 0.07, 1),
          "ease-in-expo": ec(0.95, 0.05, 0.795, 0.035),
          "ease-out-expo": ec(0.19, 1, 0.22, 1),
          "ease-in-out-expo": ec(1, 0, 0, 1),
          "ease-in-circ": ec(0.6, 0.04, 0.98, 0.335),
          "ease-out-circ": ec(0.075, 0.82, 0.165, 1),
          "ease-in-out-circ": ec(0.785, 0.135, 0.15, 0.86),
          spring: function e(t, r, n) {
            if (n === 0) {
              return tc.linear;
            }
            var e = Ju(t, r, n);
            return function (t, r, n) {
              return t + (r - t) * e(n);
            };
          },
          "cubic-bezier": ec,
        };
        function rc(e, t, r, n, a) {
          if (n === 1) {
            return r;
          }
          if (t === r) {
            return r;
          }
          var i = a(t, r, n);
          if (e == null) {
            return i;
          }
          if (e.roundValue || e.color) {
            i = Math.round(i);
          }
          if (e.min !== undefined) {
            i = Math.max(i, e.min);
          }
          if (e.max !== undefined) {
            i = Math.min(i, e.max);
          }
          return i;
        }
        function nc(e, t) {
          if (e.pfValue != null || e.value != null) {
            if (e.pfValue != null && (t == null || t.type.units !== "%")) {
              return e.pfValue;
            } else {
              return e.value;
            }
          } else {
            return e;
          }
        }
        function ac(e, t, r, n, a) {
          var i = a != null ? a.type : null;
          if (r < 0) {
            r = 0;
          } else if (r > 1) {
            r = 1;
          }
          var o = nc(e, a);
          var s = nc(t, a);
          if (_(o) && _(s)) {
            return rc(i, o, s, r, n);
          } else if (w(o) && w(s)) {
            var l = [];
            for (var u = 0; u < s.length; u++) {
              var c = o[u];
              var v = s[u];
              if (c != null && v != null) {
                var f = rc(i, c, v, r, n);
                l.push(f);
              } else {
                l.push(v);
              }
            }
            return l;
          }
          return undefined;
        }
        function ic(e, t, r, n) {
          var a = !n;
          var i = e._private;
          var o = t._private;
          var s = o.easing;
          var l = o.startTime;
          var u = n ? e : e.cy();
          var c = u.style();
          if (!o.easingImpl) {
            if (s == null) {
              o.easingImpl = tc["linear"];
            } else {
              var v;
              if (b(s)) {
                var f = c.parse("transition-timing-function", s);
                v = f.value;
              } else {
                v = s;
              }
              var h, d;
              if (b(v)) {
                h = v;
                d = [];
              } else {
                h = v[1];
                d = v.slice(2).map(function (e) {
                  return +e;
                });
              }
              if (d.length > 0) {
                if (h === "spring") {
                  d.push(o.duration);
                }
                o.easingImpl = tc[h].apply(null, d);
              } else {
                o.easingImpl = tc[h];
              }
            }
          }
          var p = o.easingImpl;
          var g;
          if (o.duration === 0) {
            g = 1;
          } else {
            g = (r - l) / o.duration;
          }
          if (o.applying) {
            g = o.progress;
          }
          if (g < 0) {
            g = 0;
          } else if (g > 1) {
            g = 1;
          }
          if (o.delay == null) {
            var y = o.startPosition;
            var m = o.position;
            if (m && a && !e.locked()) {
              var x = {};
              if (oc(y.x, m.x)) {
                x.x = ac(y.x, m.x, g, p);
              }
              if (oc(y.y, m.y)) {
                x.y = ac(y.y, m.y, g, p);
              }
              e.position(x);
            }
            var w = o.startPan;
            var E = o.pan;
            var T = i.pan;
            var _ = E != null && n;
            if (_) {
              if (oc(w.x, E.x)) {
                T.x = ac(w.x, E.x, g, p);
              }
              if (oc(w.y, E.y)) {
                T.y = ac(w.y, E.y, g, p);
              }
              e.emit("pan");
            }
            var D = o.startZoom;
            var C = o.zoom;
            var N = C != null && n;
            if (N) {
              if (oc(D, C)) {
                i.zoom = kr(i.minZoom, ac(D, C, g, p), i.maxZoom);
              }
              e.emit("zoom");
            }
            if (_ || N) {
              e.emit("viewport");
            }
            var A = o.style;
            if (A && A.length > 0 && a) {
              for (var L = 0; L < A.length; L++) {
                var I = A[L];
                var S = I.name;
                var k = I;
                var O = o.startStyle[S];
                var M = c.properties[O.name];
                var P = ac(O, k, g, p, M);
                c.overrideBypass(e, S, P);
              }
              e.emit("style");
            }
          }
          o.progress = g;
          return g;
        }
        function oc(e, t) {
          if (e == null || t == null) {
            return false;
          }
          if (_(e) && _(t)) {
            return true;
          } else if (e && t) {
            return true;
          }
          return false;
        }
        function sc(e, t, r, n) {
          var a = t._private;
          a.started = true;
          a.startTime = r - a.progress * a.duration;
        }
        function lc(e, t) {
          var r = t._private.aniEles;
          var n = [];
          function a(t, r) {
            var a = t._private;
            var i = a.animation.current;
            var o = a.animation.queue;
            var s = false;
            if (i.length === 0) {
              var l = o.shift();
              if (l) {
                i.push(l);
              }
            }
            var u = function e(t) {
              for (var r = t.length - 1; r >= 0; r--) {
                var n = t[r];
                n();
              }
              t.splice(0, t.length);
            };
            for (var c = i.length - 1; c >= 0; c--) {
              var v = i[c];
              var f = v._private;
              if (f.stopped) {
                i.splice(c, 1);
                f.hooked = false;
                f.playing = false;
                f.started = false;
                u(f.frames);
                continue;
              }
              if (!f.playing && !f.applying) {
                continue;
              }
              if (f.playing && f.applying) {
                f.applying = false;
              }
              if (!f.started) {
                sc(t, v, e);
              }
              ic(t, v, e, r);
              if (f.applying) {
                f.applying = false;
              }
              u(f.frames);
              if (f.step != null) {
                f.step(e);
              }
              if (v.completed()) {
                i.splice(c, 1);
                f.hooked = false;
                f.playing = false;
                f.started = false;
                u(f.completes);
              }
              s = true;
            }
            if (!r && i.length === 0 && o.length === 0) {
              n.push(t);
            }
            return s;
          }
          var i = false;
          for (var o = 0; o < r.length; o++) {
            var s = r[o];
            var l = a(s);
            i = i || l;
          }
          var u = a(t, true);
          if (i || u) {
            if (r.length > 0) {
              t.notify("draw", r);
            } else {
              t.notify("draw");
            }
          }
          r.unmerge(n);
          t.emit("step");
        }
        var uc = {
          animate: ks.animate(),
          animation: ks.animation(),
          animated: ks.animated(),
          clearQueue: ks.clearQueue(),
          delay: ks.delay(),
          delayAnimation: ks.delayAnimation(),
          stop: ks.stop(),
          addToAnimationPool: function e(t) {
            var r = this;
            if (!r.styleEnabled()) {
              return;
            }
            r._private.aniEles.merge(t);
          },
          stopAnimationLoop: function e() {
            this._private.animationsRunning = false;
          },
          startAnimationLoop: function e() {
            var t = this;
            t._private.animationsRunning = true;
            if (!t.styleEnabled()) {
              return;
            }
            function r() {
              if (!t._private.animationsRunning) {
                return;
              }
              st(function e(n) {
                lc(n, t);
                r();
              });
            }
            var n = t.renderer();
            if (n && n.beforeRender) {
              n.beforeRender(function e(r, n) {
                lc(n, t);
              }, n.beforeRenderPriorities.animations);
            } else {
              r();
            }
          },
        };
        var cc = {
          qualifierCompare: function e(t, r) {
            if (t == null || r == null) {
              return t == null && r == null;
            } else {
              return t.sameText(r);
            }
          },
          eventMatches: function e(t, r, n) {
            var a = r.qualifier;
            if (a != null) {
              return t !== n.target && A(n.target) && a.matches(n.target);
            }
            return true;
          },
          addEventFields: function e(t, r) {
            r.cy = t;
            r.target = t;
          },
          callbackContext: function e(t, r, n) {
            return r.qualifier != null ? n.target : t;
          },
        };
        var vc = function e(t) {
          if (b(t)) {
            return new ol(t);
          } else {
            return t;
          }
        };
        var fc = {
          createEmitter: function e() {
            var t = this._private;
            if (!t.emitter) {
              t.emitter = new fu(cc, this);
            }
            return this;
          },
          emitter: function e() {
            return this._private.emitter;
          },
          on: function e(t, r, n) {
            this.emitter().on(t, vc(r), n);
            return this;
          },
          removeListener: function e(t, r, n) {
            this.emitter().removeListener(t, vc(r), n);
            return this;
          },
          removeAllListeners: function e() {
            this.emitter().removeAllListeners();
            return this;
          },
          one: function e(t, r, n) {
            this.emitter().one(t, vc(r), n);
            return this;
          },
          once: function e(t, r, n) {
            this.emitter().one(t, vc(r), n);
            return this;
          },
          emit: function e(t, r) {
            this.emitter().emit(t, r);
            return this;
          },
          emitAndNotify: function e(t, r) {
            this.emit(t);
            this.notify(t, r);
            return this;
          },
        };
        ks.eventAliasesOn(fc);
        var hc = {
          png: function e(t) {
            var r = this._private.renderer;
            t = t || {};
            return r.png(t);
          },
          jpg: function e(t) {
            var r = this._private.renderer;
            t = t || {};
            t.bg = t.bg || "#fff";
            return r.jpg(t);
          },
        };
        hc.jpeg = hc.jpg;
        var dc = {
          layout: function e(t) {
            var r = this;
            if (t == null) {
              It("Layout options must be specified to make a layout");
              return;
            }
            if (t.name == null) {
              It("A `name` must be specified to make a layout");
              return;
            }
            var n = t.name;
            var a = r.extension("layout", n);
            if (a == null) {
              It("No such layout `" + n + "` found.  Did you forget to import it and `cytoscape.use()` it?");
              return;
            }
            var i;
            if (b(t.eles)) {
              i = r.$(t.eles);
            } else {
              i = t.eles != null ? t.eles : r.$();
            }
            var e = new a(Q({}, t, { cy: r, eles: i }));
            return e;
          },
        };
        dc.createLayout = dc.makeLayout = dc.layout;
        var pc = {
          notify: function e(t, r) {
            var n = this._private;
            if (this.batching()) {
              n.batchNotifications = n.batchNotifications || {};
              var a = (n.batchNotifications[t] = n.batchNotifications[t] || this.collection());
              if (r != null) {
                a.merge(r);
              }
              return;
            }
            if (!n.notificationsEnabled) {
              return;
            }
            var i = this.renderer();
            if (this.destroyed() || !i) {
              return;
            }
            i.notify(t, r);
          },
          notifications: function e(t) {
            var r = this._private;
            if (t === undefined) {
              return r.notificationsEnabled;
            } else {
              r.notificationsEnabled = t ? true : false;
            }
            return this;
          },
          noNotifications: function e(t) {
            this.notifications(false);
            t();
            this.notifications(true);
          },
          batching: function e() {
            return this._private.batchCount > 0;
          },
          startBatch: function e() {
            var t = this._private;
            if (t.batchCount == null) {
              t.batchCount = 0;
            }
            if (t.batchCount === 0) {
              t.batchStyleEles = this.collection();
              t.batchNotifications = {};
            }
            t.batchCount++;
            return this;
          },
          endBatch: function e() {
            var t = this._private;
            if (t.batchCount === 0) {
              return this;
            }
            t.batchCount--;
            if (t.batchCount === 0) {
              t.batchStyleEles.updateStyle();
              var r = this.renderer();
              Object.keys(t.batchNotifications).forEach(function (e) {
                var n = t.batchNotifications[e];
                if (n.empty()) {
                  r.notify(e);
                } else {
                  r.notify(e, n);
                }
              });
            }
            return this;
          },
          batch: function e(t) {
            this.startBatch();
            t();
            this.endBatch();
            return this;
          },
          batchData: function e(t) {
            var r = this;
            return this.batch(function () {
              var e = Object.keys(t);
              for (var n = 0; n < e.length; n++) {
                var a = e[n];
                var i = t[a];
                var o = r.getElementById(a);
                o.data(i);
              }
            });
          },
        };
        var gc = zt({
          hideEdgesOnViewport: false,
          textureOnViewport: false,
          motionBlur: false,
          motionBlurOpacity: 0.05,
          pixelRatio: undefined,
          desktopTapThreshold: 4,
          touchTapThreshold: 8,
          wheelSensitivity: 1,
          debug: false,
          showFps: false,
        });
        var yc = {
          renderTo: function e(t, r, n, a) {
            var i = this._private.renderer;
            i.renderTo(t, r, n, a);
            return this;
          },
          renderer: function e() {
            return this._private.renderer;
          },
          forceRender: function e() {
            this.notify("draw");
            return this;
          },
          resize: function e() {
            this.invalidateSize();
            this.emitAndNotify("resize");
            return this;
          },
          initRenderer: function e(t) {
            var r = this;
            var n = r.extension("renderer", t.name);
            if (n == null) {
              It("Can not initialise: No such renderer `".concat(t.name, "` found. Did you forget to import it and `cytoscape.use()` it?"));
              return;
            }
            if (t.wheelSensitivity !== undefined) {
              kt(
                "You have set a custom wheel sensitivity.  This will make your app zoom unnaturally when using mainstream mice.  You should change this value from the default only if you can guarantee that all your users will use the same hardware and OS configuration as your current machine."
              );
            }
            var a = gc(t);
            a.cy = r;
            r._private.renderer = new n(a);
            this.notify("init");
          },
          destroyRenderer: function e() {
            var t = this;
            t.notify("destroy");
            var r = t.container();
            if (r) {
              r._cyreg = null;
              while (r.childNodes.length > 0) {
                r.removeChild(r.childNodes[0]);
              }
            }
            t._private.renderer = null;
            t.mutableElements().forEach(function (e) {
              var t = e._private;
              t.rscratch = {};
              t.rstyle = {};
              t.animation.current = [];
              t.animation.queue = [];
            });
          },
          onRender: function e(t) {
            return this.on("render", t);
          },
          offRender: function e(t) {
            return this.off("render", t);
          },
        };
        yc.invalidateDimensions = yc.resize;
        var mc = {
          collection: function e(t, r) {
            if (b(t)) {
              return this.$(t);
            } else if (N(t)) {
              return t.collection();
            } else if (w(t)) {
              if (!r) {
                r = {};
              }
              return new $u(this, t, r.unique, r.removed);
            }
            return new $u(this);
          },
          nodes: function e(t) {
            var e = this.$(function (e) {
              return e.isNode();
            });
            if (t) {
              return e.filter(t);
            }
            return e;
          },
          edges: function e(t) {
            var e = this.$(function (e) {
              return e.isEdge();
            });
            if (t) {
              return e.filter(t);
            }
            return e;
          },
          $: function e(t) {
            var r = this._private.elements;
            if (t) {
              return r.filter(t);
            } else {
              return r.spawnSelf();
            }
          },
          mutableElements: function e() {
            return this._private.elements;
          },
        };
        mc.elements = mc.filter = mc.$;
        var bc = {};
        var xc = "t";
        var wc = "f";
        bc.apply = function (e) {
          var t = this;
          var r = t._private;
          var n = r.cy;
          var a = n.collection();
          for (var i = 0; i < e.length; i++) {
            var o = e[i];
            var s = t.getContextMeta(o);
            if (s.empty) {
              continue;
            }
            var l = t.getContextStyle(s);
            var u = t.applyContextStyle(s, l, o);
            if (o._private.appliedInitStyle) {
              t.updateTransitions(o, u.diffProps);
            } else {
              o._private.appliedInitStyle = true;
            }
            var c = t.updateStyleHints(o);
            if (c) {
              a.push(o);
            }
          }
          return a;
        };
        bc.getPropertiesDiff = function (e, t) {
          var r = this;
          var n = (r._private.propDiffs = r._private.propDiffs || {});
          var a = e + "-" + t;
          var i = n[a];
          if (i) {
            return i;
          }
          var o = [];
          var s = {};
          for (var l = 0; l < r.length; l++) {
            var u = r[l];
            var c = e[l] === xc;
            var v = t[l] === xc;
            var f = c !== v;
            var h = u.mappedProperties.length > 0;
            if (f || (v && h)) {
              var d = void 0;
              if (f && h) {
                d = u.properties;
              } else if (f) {
                d = u.properties;
              } else if (h) {
                d = u.mappedProperties;
              }
              for (var p = 0; p < d.length; p++) {
                var g = d[p];
                var y = g.name;
                var m = false;
                for (var b = l + 1; b < r.length; b++) {
                  var x = r[b];
                  var w = t[b] === xc;
                  if (!w) {
                    continue;
                  }
                  m = x.properties[g.name] != null;
                  if (m) {
                    break;
                  }
                }
                if (!s[y] && !m) {
                  s[y] = true;
                  o.push(y);
                }
              }
            }
          }
          n[a] = o;
          return o;
        };
        bc.getContextMeta = function (e) {
          var t = this;
          var r = "";
          var n;
          var a = e._private.styleCxtKey || "";
          for (var i = 0; i < t.length; i++) {
            var o = t[i];
            var s = o.selector && o.selector.matches(e);
            if (s) {
              r += xc;
            } else {
              r += wc;
            }
          }
          n = t.getPropertiesDiff(a, r);
          e._private.styleCxtKey = r;
          return { key: r, diffPropNames: n, empty: n.length === 0 };
        };
        bc.getContextStyle = function (e) {
          var t = e.key;
          var r = this;
          var n = (this._private.contextStyles = this._private.contextStyles || {});
          if (n[t]) {
            return n[t];
          }
          var a = { _private: { key: t } };
          for (var i = 0; i < r.length; i++) {
            var o = r[i];
            var s = t[i] === xc;
            if (!s) {
              continue;
            }
            for (var l = 0; l < o.properties.length; l++) {
              var u = o.properties[l];
              a[u.name] = u;
            }
          }
          n[t] = a;
          return a;
        };
        bc.applyContextStyle = function (e, t, r) {
          var n = this;
          var a = e.diffPropNames;
          var i = {};
          var o = n.types;
          for (var s = 0; s < a.length; s++) {
            var l = a[s];
            var u = t[l];
            var c = r.pstyle(l);
            if (!u) {
              if (!c) {
                continue;
              } else if (c.bypass) {
                u = { name: l, deleteBypassed: true };
              } else {
                u = { name: l, delete: true };
              }
            }
            if (c === u) {
              continue;
            }
            if (u.mapped === o.fn && c != null && c.mapping != null && c.mapping.value === u.value) {
              var v = c.mapping;
              var f = (v.fnValue = u.value(r));
              if (f === v.prevFnValue) {
                continue;
              }
            }
            var h = (i[l] = { prev: c });
            n.applyParsedProperty(r, u);
            h.next = r.pstyle(l);
            if (h.next && h.next.bypass) {
              h.next = h.next.bypassed;
            }
          }
          return { diffProps: i };
        };
        bc.updateStyleHints = function (e) {
          var t = e._private;
          var r = this;
          var n = r.propertyGroupNames;
          var a = r.propertyGroupKeys;
          var i = function e(t, n, a) {
            return r.getPropertiesHash(t, n, a);
          };
          var o = t.styleKey;
          if (e.removed()) {
            return false;
          }
          var s = t.group === "nodes";
          var l = e._private.style;
          n = Object.keys(l);
          for (var u = 0; u < a.length; u++) {
            var c = a[u];
            t.styleKeys[c] = [ut, vt];
          }
          var v = function e(r, n) {
            return (t.styleKeys[n][0] = ht(r, t.styleKeys[n][0]));
          };
          var f = function e(r, n) {
            return (t.styleKeys[n][1] = dt(r, t.styleKeys[n][1]));
          };
          var h = function e(t, r) {
            v(t, r);
            f(t, r);
          };
          var d = function e(t, r) {
            for (var n = 0; n < t.length; n++) {
              var a = t.charCodeAt(n);
              v(a, r);
              f(a, r);
            }
          };
          var p = 2e9;
          var g = function e(t) {
            return -128 < t && t < 128 && Math.floor(t) !== t ? p - ((t * 1024) | 0) : t;
          };
          for (var y = 0; y < n.length; y++) {
            var m = n[y];
            var b = l[m];
            if (b == null) {
              continue;
            }
            var x = this.properties[m];
            var w = x.type;
            var E = x.groupKey;
            var T = void 0;
            if (x.hashOverride != null) {
              T = x.hashOverride(e, b);
            } else if (b.pfValue != null) {
              T = b.pfValue;
            }
            var _ = x.enums == null ? b.value : null;
            var D = T != null;
            var C = _ != null;
            var N = D || C;
            var A = b.units;
            if (w.number && N && !w.multiple) {
              var L = D ? T : _;
              h(g(L), E);
              if (!D && A != null) {
                d(A, E);
              }
            } else {
              d(b.strValue, E);
            }
          }
          var I = [ut, vt];
          for (var S = 0; S < a.length; S++) {
            var k = a[S];
            var O = t.styleKeys[k];
            I[0] = ht(O[0], I[0]);
            I[1] = dt(O[1], I[1]);
          }
          t.styleKey = pt(I[0], I[1]);
          var M = t.styleKeys;
          t.labelDimsKey = gt(M.labelDimensions);
          var P = i(e, ["label"], M.labelDimensions);
          t.labelKey = gt(P);
          t.labelStyleKey = gt(yt(M.commonLabel, P));
          if (!s) {
            var R = i(e, ["source-label"], M.labelDimensions);
            t.sourceLabelKey = gt(R);
            t.sourceLabelStyleKey = gt(yt(M.commonLabel, R));
            var B = i(e, ["target-label"], M.labelDimensions);
            t.targetLabelKey = gt(B);
            t.targetLabelStyleKey = gt(yt(M.commonLabel, B));
          }
          if (s) {
            var F = t.styleKeys,
              z = F.nodeBody,
              G = F.nodeBorder,
              Y = F.backgroundImage,
              X = F.compound,
              V = F.pie;
            var U = [z, G, Y, X, V]
              .filter(function (e) {
                return e != null;
              })
              .reduce(yt, [ut, vt]);
            t.nodeKey = gt(U);
            t.hasPie = V != null && V[0] !== ut && V[1] !== vt;
          }
          return o !== t.styleKey;
        };
        bc.clearStyleHints = function (e) {
          var t = e._private;
          t.styleCxtKey = "";
          t.styleKeys = {};
          t.styleKey = null;
          t.labelKey = null;
          t.labelStyleKey = null;
          t.sourceLabelKey = null;
          t.sourceLabelStyleKey = null;
          t.targetLabelKey = null;
          t.targetLabelStyleKey = null;
          t.nodeKey = null;
          t.hasPie = null;
        };
        bc.applyParsedProperty = function (e, t) {
          var r = this;
          var n = t;
          var a = e._private.style;
          var i;
          var o = r.types;
          var s = r.properties[n.name].type;
          var l = n.bypass;
          var u = a[n.name];
          var c = u && u.bypass;
          var v = e._private;
          var f = "mapping";
          var h = function e(t) {
            if (t == null) {
              return null;
            } else if (t.pfValue != null) {
              return t.pfValue;
            } else {
              return t.value;
            }
          };
          var d = function t() {
            var a = h(u);
            var i = h(n);
            r.checkTriggers(e, n.name, a, i);
          };
          if (n && n.name.substr(0, 3) === "pie") {
            kt("The pie style properties are deprecated.  Create charts using background images instead.");
          }
          if (
            t.name === "curve-style" &&
            e.isEdge() &&
            ((t.value !== "bezier" && e.isLoop()) || (t.value === "haystack" && (e.source().isParent() || e.target().isParent())))
          ) {
            n = t = this.parse(t.name, "bezier", l);
          }
          if (n["delete"]) {
            a[n.name] = undefined;
            d();
            return true;
          }
          if (n.deleteBypassed) {
            if (!u) {
              d();
              return true;
            } else if (u.bypass) {
              u.bypassed = undefined;
              d();
              return true;
            } else {
              return false;
            }
          }
          if (n.deleteBypass) {
            if (!u) {
              d();
              return true;
            } else if (u.bypass) {
              a[n.name] = u.bypassed;
              d();
              return true;
            } else {
              return false;
            }
          }
          var p = function t() {
            kt(
              "Do not assign mappings to elements without corresponding data (i.e. ele `" +
                e.id() +
                "` has no mapping for property `" +
                n.name +
                "` with data field `" +
                n.field +
                "`); try a `[" +
                n.field +
                "]` selector to limit scope to elements with `" +
                n.field +
                "` defined"
            );
          };
          switch (n.mapped) {
            case o.mapData: {
              var g = n.field.split(".");
              var y = v.data;
              for (var m = 0; m < g.length && y; m++) {
                var b = g[m];
                y = y[b];
              }
              if (y == null) {
                p();
                return false;
              }
              var x;
              if (!_(y)) {
                kt(
                  "Do not use continuous mappers without specifying numeric data (i.e. `" +
                    n.field +
                    ": " +
                    y +
                    "` for `" +
                    e.id() +
                    "` is non-numeric)"
                );
                return false;
              } else {
                var w = n.fieldMax - n.fieldMin;
                if (w === 0) {
                  x = 0;
                } else {
                  x = (y - n.fieldMin) / w;
                }
              }
              if (x < 0) {
                x = 0;
              } else if (x > 1) {
                x = 1;
              }
              if (s.color) {
                var E = n.valueMin[0];
                var T = n.valueMax[0];
                var D = n.valueMin[1];
                var C = n.valueMax[1];
                var N = n.valueMin[2];
                var A = n.valueMax[2];
                var L = n.valueMin[3] == null ? 1 : n.valueMin[3];
                var I = n.valueMax[3] == null ? 1 : n.valueMax[3];
                var S = [Math.round(E + (T - E) * x), Math.round(D + (C - D) * x), Math.round(N + (A - N) * x), Math.round(L + (I - L) * x)];
                i = { bypass: n.bypass, name: n.name, value: S, strValue: "rgb(" + S[0] + ", " + S[1] + ", " + S[2] + ")" };
              } else if (s.number) {
                var k = n.valueMin + (n.valueMax - n.valueMin) * x;
                i = this.parse(n.name, k, n.bypass, f);
              } else {
                return false;
              }
              if (!i) {
                p();
                return false;
              }
              i.mapping = n;
              n = i;
              break;
            }
            case o.data: {
              var O = n.field.split(".");
              var M = v.data;
              for (var P = 0; P < O.length && M; P++) {
                var R = O[P];
                M = M[R];
              }
              if (M != null) {
                i = this.parse(n.name, M, n.bypass, f);
              }
              if (!i) {
                p();
                return false;
              }
              i.mapping = n;
              n = i;
              break;
            }
            case o.fn: {
              var B = n.value;
              var F = n.fnValue != null ? n.fnValue : B(e);
              n.prevFnValue = F;
              if (F == null) {
                kt("Custom function mappers may not return null (i.e. `" + n.name + "` for ele `" + e.id() + "` is null)");
                return false;
              }
              i = this.parse(n.name, F, n.bypass, f);
              if (!i) {
                kt(
                  "Custom function mappers may not return invalid values for the property type (i.e. `" +
                    n.name +
                    "` for ele `" +
                    e.id() +
                    "` is invalid)"
                );
                return false;
              }
              i.mapping = Mt(n);
              n = i;
              break;
            }
            case undefined:
              break;
            default:
              return false;
          }
          if (l) {
            if (c) {
              n.bypassed = u.bypassed;
            } else {
              n.bypassed = u;
            }
            a[n.name] = n;
          } else {
            if (c) {
              u.bypassed = n;
            } else {
              a[n.name] = n;
            }
          }
          d();
          return true;
        };
        bc.cleanElements = function (e, t) {
          for (var r = 0; r < e.length; r++) {
            var n = e[r];
            this.clearStyleHints(n);
            n.dirtyCompoundBoundsCache();
            n.dirtyBoundingBoxCache();
            if (!t) {
              n._private.style = {};
            } else {
              var a = n._private.style;
              var i = Object.keys(a);
              for (var o = 0; o < i.length; o++) {
                var s = i[o];
                var l = a[s];
                if (l != null) {
                  if (l.bypass) {
                    l.bypassed = null;
                  } else {
                    a[s] = null;
                  }
                }
              }
            }
          }
        };
        bc.update = function () {
          var e = this._private.cy;
          var t = e.mutableElements();
          t.updateStyle();
        };
        bc.updateTransitions = function (e, t) {
          var r = this;
          var n = e._private;
          var a = e.pstyle("transition-property").value;
          var i = e.pstyle("transition-duration").pfValue;
          var o = e.pstyle("transition-delay").pfValue;
          if (a.length > 0 && i > 0) {
            var s = {};
            var l = false;
            for (var u = 0; u < a.length; u++) {
              var c = a[u];
              var v = e.pstyle(c);
              var f = t[c];
              if (!f) {
                continue;
              }
              var h = f.prev;
              var d = h;
              var p = f.next != null ? f.next : v;
              var g = false;
              var y = void 0;
              var m = 1e-6;
              if (!d) {
                continue;
              }
              if (_(d.pfValue) && _(p.pfValue)) {
                g = p.pfValue - d.pfValue;
                y = d.pfValue + m * g;
              } else if (_(d.value) && _(p.value)) {
                g = p.value - d.value;
                y = d.value + m * g;
              } else if (w(d.value) && w(p.value)) {
                g = d.value[0] !== p.value[0] || d.value[1] !== p.value[1] || d.value[2] !== p.value[2];
                y = d.strValue;
              }
              if (g) {
                s[c] = p.strValue;
                this.applyBypass(e, c, y);
                l = true;
              }
            }
            if (!l) {
              return;
            }
            n.transitioning = true;
            new $a(function (t) {
              if (o > 0) {
                e.delayAnimation(o).play().promise().then(t);
              } else {
                t();
              }
            })
              .then(function () {
                return e
                  .animation({ style: s, duration: i, easing: e.pstyle("transition-timing-function").value, queue: false })
                  .play()
                  .promise();
              })
              .then(function () {
                r.removeBypasses(e, a);
                e.emitAndNotify("style");
                n.transitioning = false;
              });
          } else if (n.transitioning) {
            this.removeBypasses(e, a);
            e.emitAndNotify("style");
            n.transitioning = false;
          }
        };
        bc.checkTrigger = function (e, t, r, n, a, i) {
          var o = this.properties[t];
          var s = a(o);
          if (s != null && s(r, n)) {
            i(o);
          }
        };
        bc.checkZOrderTrigger = function (e, t, r, n) {
          var a = this;
          this.checkTrigger(
            e,
            t,
            r,
            n,
            function (e) {
              return e.triggersZOrder;
            },
            function () {
              a._private.cy.notify("zorder", e);
            }
          );
        };
        bc.checkBoundsTrigger = function (e, t, r, n) {
          this.checkTrigger(
            e,
            t,
            r,
            n,
            function (e) {
              return e.triggersBounds;
            },
            function (a) {
              e.dirtyCompoundBoundsCache();
              e.dirtyBoundingBoxCache();
              if (
                a.triggersBoundsOfParallelBeziers &&
                ((t === "curve-style" && (r === "bezier" || n === "bezier")) || (t === "display" && (r === "none" || n === "none")))
              ) {
                e.parallelEdges().forEach(function (e) {
                  if (e.isBundledBezier()) {
                    e.dirtyBoundingBoxCache();
                  }
                });
              }
            }
          );
        };
        bc.checkTriggers = function (e, t, r, n) {
          e.dirtyStyleCache();
          this.checkZOrderTrigger(e, t, r, n);
          this.checkBoundsTrigger(e, t, r, n);
        };
        var Ec = {};
        Ec.applyBypass = function (e, t, r, n) {
          var a = this;
          var i = [];
          var o = true;
          if (t === "*" || t === "**") {
            if (r !== undefined) {
              for (var s = 0; s < a.properties.length; s++) {
                var l = a.properties[s];
                var u = l.name;
                var c = this.parse(u, r, true);
                if (c) {
                  i.push(c);
                }
              }
            }
          } else if (b(t)) {
            var v = this.parse(t, r, true);
            if (v) {
              i.push(v);
            }
          } else if (E(t)) {
            var f = t;
            n = r;
            var h = Object.keys(f);
            for (var d = 0; d < h.length; d++) {
              var p = h[d];
              var g = f[p];
              if (g === undefined) {
                g = f[G(p)];
              }
              if (g !== undefined) {
                var y = this.parse(p, g, true);
                if (y) {
                  i.push(y);
                }
              }
            }
          } else {
            return false;
          }
          if (i.length === 0) {
            return false;
          }
          var m = false;
          for (var x = 0; x < e.length; x++) {
            var w = e[x];
            var T = {};
            var _ = void 0;
            for (var D = 0; D < i.length; D++) {
              var C = i[D];
              if (n) {
                var N = w.pstyle(C.name);
                _ = T[C.name] = { prev: N };
              }
              m = this.applyParsedProperty(w, Mt(C)) || m;
              if (n) {
                _.next = w.pstyle(C.name);
              }
            }
            if (m) {
              this.updateStyleHints(w);
            }
            if (n) {
              this.updateTransitions(w, T, o);
            }
          }
          return m;
        };
        Ec.overrideBypass = function (e, t, r) {
          t = z(t);
          for (var n = 0; n < e.length; n++) {
            var a = e[n];
            var i = a._private.style[t];
            var o = this.properties[t].type;
            var s = o.color;
            var l = o.mutiple;
            var u = !i ? null : i.pfValue != null ? i.pfValue : i.value;
            if (!i || !i.bypass) {
              this.applyBypass(a, t, r);
            } else {
              i.value = r;
              if (i.pfValue != null) {
                i.pfValue = r;
              }
              if (s) {
                i.strValue = "rgb(" + r.join(",") + ")";
              } else if (l) {
                i.strValue = r.join(" ");
              } else {
                i.strValue = "" + r;
              }
              this.updateStyleHints(a);
            }
            this.checkTriggers(a, t, u, r);
          }
        };
        Ec.removeAllBypasses = function (e, t) {
          return this.removeBypasses(e, this.propertyNames, t);
        };
        Ec.removeBypasses = function (e, t, r) {
          var n = true;
          for (var a = 0; a < e.length; a++) {
            var i = e[a];
            var o = {};
            for (var s = 0; s < t.length; s++) {
              var l = t[s];
              var u = this.properties[l];
              var c = i.pstyle(u.name);
              if (!c || !c.bypass) {
                continue;
              }
              var v = "";
              var f = this.parse(l, v, true);
              var h = (o[u.name] = { prev: c });
              this.applyParsedProperty(i, f);
              h.next = i.pstyle(u.name);
            }
            this.updateStyleHints(i);
            if (r) {
              this.updateTransitions(i, o, n);
            }
          }
        };
        var Tc = {};
        Tc.getEmSizeInPixels = function () {
          var e = this.containerCss("font-size");
          if (e != null) {
            return parseFloat(e);
          } else {
            return 1;
          }
        };
        Tc.containerCss = function (e) {
          var t = this._private.cy;
          var r = t.container();
          var n = t.window();
          if (n && r && n.getComputedStyle) {
            return n.getComputedStyle(r).getPropertyValue(e);
          }
        };
        var _c = {};
        _c.getRenderedStyle = function (e, t) {
          if (t) {
            return this.getStylePropertyValue(e, t, true);
          } else {
            return this.getRawStyle(e, true);
          }
        };
        _c.getRawStyle = function (e, t) {
          var r = this;
          e = e[0];
          if (e) {
            var n = {};
            for (var a = 0; a < r.properties.length; a++) {
              var i = r.properties[a];
              var o = r.getStylePropertyValue(e, i.name, t);
              if (o != null) {
                n[i.name] = o;
                n[G(i.name)] = o;
              }
            }
            return n;
          }
        };
        _c.getIndexedStyle = function (e, t, r, n) {
          var a = e.pstyle(t)[r][n];
          return a != null ? a : e.cy().style().getDefaultProperty(t)[r][0];
        };
        _c.getStylePropertyValue = function (e, t, r) {
          var n = this;
          e = e[0];
          if (e) {
            var a = n.properties[t];
            if (a.alias) {
              a = a.pointsTo;
            }
            var i = a.type;
            var o = e.pstyle(a.name);
            if (o) {
              var s = o.value,
                l = o.units,
                u = o.strValue;
              if (r && i.number && s != null && _(s)) {
                var c = e.cy().zoom();
                var v = function e(t) {
                  return t * c;
                };
                var f = function e(t, r) {
                  return v(t) + r;
                };
                var h = w(s);
                var d = h
                  ? l.every(function (e) {
                      return e != null;
                    })
                  : l != null;
                if (d) {
                  if (h) {
                    return s
                      .map(function (e, t) {
                        return f(e, l[t]);
                      })
                      .join(" ");
                  } else {
                    return f(s, l);
                  }
                } else {
                  if (h) {
                    return s
                      .map(function (e) {
                        return b(e) ? e : "" + v(e);
                      })
                      .join(" ");
                  } else {
                    return "" + v(s);
                  }
                }
              } else if (u != null) {
                return u;
              }
            }
            return null;
          }
        };
        _c.getAnimationStartStyle = function (e, t) {
          var r = {};
          for (var n = 0; n < t.length; n++) {
            var a = t[n];
            var i = a.name;
            var o = e.pstyle(i);
            if (o !== undefined) {
              if (E(o)) {
                o = this.parse(i, o.strValue);
              } else {
                o = this.parse(i, o);
              }
            }
            if (o) {
              r[i] = o;
            }
          }
          return r;
        };
        _c.getPropsList = function (e) {
          var t = this;
          var r = [];
          var n = e;
          var a = t.properties;
          if (n) {
            var i = Object.keys(n);
            for (var o = 0; o < i.length; o++) {
              var s = i[o];
              var l = n[s];
              var u = a[s] || a[z(s)];
              var c = this.parse(u.name, l);
              if (c) {
                r.push(c);
              }
            }
          }
          return r;
        };
        _c.getNonDefaultPropertiesHash = function (e, t, r) {
          var n = r.slice();
          var a, i, o, s;
          var l, u;
          for (l = 0; l < t.length; l++) {
            a = t[l];
            i = e.pstyle(a, false);
            if (i == null) {
              continue;
            } else if (i.pfValue != null) {
              n[0] = ht(s, n[0]);
              n[1] = dt(s, n[1]);
            } else {
              o = i.strValue;
              for (u = 0; u < o.length; u++) {
                s = o.charCodeAt(u);
                n[0] = ht(s, n[0]);
                n[1] = dt(s, n[1]);
              }
            }
          }
          return n;
        };
        _c.getPropertiesHash = _c.getNonDefaultPropertiesHash;
        var Dc = {};
        Dc.appendFromJson = function (e) {
          var t = this;
          for (var r = 0; r < e.length; r++) {
            var n = e[r];
            var a = n.selector;
            var i = n.style || n.css;
            var o = Object.keys(i);
            t.selector(a);
            for (var s = 0; s < o.length; s++) {
              var l = o[s];
              var u = i[l];
              t.css(l, u);
            }
          }
          return t;
        };
        Dc.fromJson = function (e) {
          var t = this;
          t.resetToDefault();
          t.appendFromJson(e);
          return t;
        };
        Dc.json = function () {
          var e = [];
          for (var t = this.defaultLength; t < this.length; t++) {
            var r = this[t];
            var n = r.selector;
            var a = r.properties;
            var i = {};
            for (var o = 0; o < a.length; o++) {
              var s = a[o];
              i[s.name] = s.strValue;
            }
            e.push({ selector: !n ? "core" : n.toString(), style: i });
          }
          return e;
        };
        var Cc = {};
        Cc.appendFromString = function (e) {
          var t = this;
          var r = this;
          var n = "" + e;
          var a;
          var i;
          var o;
          n = n.replace(/[/][*](\s|.)+?[*][/]/g, "");
          function s() {
            if (n.length > a.length) {
              n = n.substr(a.length);
            } else {
              n = "";
            }
          }
          function l() {
            if (i.length > o.length) {
              i = i.substr(o.length);
            } else {
              i = "";
            }
          }
          for (;;) {
            var u = n.match(/^\s*$/);
            if (u) {
              break;
            }
            var c = n.match(/^\s*((?:.|\s)+?)\s*\{((?:.|\s)+?)\}/);
            if (!c) {
              kt("Halting stylesheet parsing: String stylesheet contains more to parse but no selector and block found in: " + n);
              break;
            }
            a = c[0];
            var v = c[1];
            if (v !== "core") {
              var f = new ol(v);
              if (f.invalid) {
                kt("Skipping parsing of block: Invalid selector found in string stylesheet: " + v);
                s();
                continue;
              }
            }
            var h = c[2];
            var d = false;
            i = h;
            var p = [];
            for (;;) {
              var g = i.match(/^\s*$/);
              if (g) {
                break;
              }
              var y = i.match(/^\s*(.+?)\s*:\s*(.+?)(?:\s*;|\s*$)/);
              if (!y) {
                kt("Skipping parsing of block: Invalid formatting of style property and value definitions found in:" + h);
                d = true;
                break;
              }
              o = y[0];
              var m = y[1];
              var b = y[2];
              var x = t.properties[m];
              if (!x) {
                kt("Skipping property: Invalid property name in: " + o);
                l();
                continue;
              }
              var w = r.parse(m, b);
              if (!w) {
                kt("Skipping property: Invalid property definition in: " + o);
                l();
                continue;
              }
              p.push({ name: m, val: b });
              l();
            }
            if (d) {
              s();
              break;
            }
            r.selector(v);
            for (var E = 0; E < p.length; E++) {
              var T = p[E];
              r.css(T.name, T.val);
            }
            s();
          }
          return r;
        };
        Cc.fromString = function (e) {
          var t = this;
          t.resetToDefault();
          t.appendFromString(e);
          return t;
        };
        var Nc = {};
        (function () {
          var e = V;
          var t = j;
          var r = q;
          var n = W;
          var a = $;
          var i = function e(t) {
            return "^" + t + "\\s*\\(\\s*([\\w\\.]+)\\s*\\)$";
          };
          var o = function i(o) {
            var s = e + "|\\w+|" + t + "|" + r + "|" + n + "|" + a;
            return "^" + o + "\\s*\\(([\\w\\.]+)\\s*\\,\\s*(" + e + ")\\s*\\,\\s*(" + e + ")\\s*,\\s*(" + s + ")\\s*\\,\\s*(" + s + ")\\)$";
          };
          var s = ["^url\\s*\\(\\s*['\"]?(.+?)['\"]?\\s*\\)$", "^(none)$", "^(.+)$"];
          Nc.types = {
            time: { number: true, min: 0, units: "s|ms", implicitUnits: "ms" },
            percent: { number: true, min: 0, max: 100, units: "%", implicitUnits: "%" },
            percentages: { number: true, min: 0, max: 100, units: "%", implicitUnits: "%", multiple: true },
            zeroOneNumber: { number: true, min: 0, max: 1, unitless: true },
            zeroOneNumbers: { number: true, min: 0, max: 1, unitless: true, multiple: true },
            nOneOneNumber: { number: true, min: -1, max: 1, unitless: true },
            nonNegativeInt: { number: true, min: 0, integer: true, unitless: true },
            position: { enums: ["parent", "origin"] },
            nodeSize: { number: true, min: 0, enums: ["label"] },
            number: { number: true, unitless: true },
            numbers: { number: true, unitless: true, multiple: true },
            positiveNumber: { number: true, unitless: true, min: 0, strictMin: true },
            size: { number: true, min: 0 },
            bidirectionalSize: { number: true },
            bidirectionalSizeMaybePercent: { number: true, allowPercent: true },
            bidirectionalSizes: { number: true, multiple: true },
            sizeMaybePercent: { number: true, min: 0, allowPercent: true },
            axisDirection: { enums: ["horizontal", "leftward", "rightward", "vertical", "upward", "downward", "auto"] },
            paddingRelativeTo: { enums: ["width", "height", "average", "min", "max"] },
            bgWH: { number: true, min: 0, allowPercent: true, enums: ["auto"], multiple: true },
            bgPos: { number: true, allowPercent: true, multiple: true },
            bgRelativeTo: { enums: ["inner", "include-padding"], multiple: true },
            bgRepeat: { enums: ["repeat", "repeat-x", "repeat-y", "no-repeat"], multiple: true },
            bgFit: { enums: ["none", "contain", "cover"], multiple: true },
            bgCrossOrigin: { enums: ["anonymous", "use-credentials", "null"], multiple: true },
            bgClip: { enums: ["none", "node"], multiple: true },
            bgContainment: { enums: ["inside", "over"], multiple: true },
            color: { color: true },
            colors: { color: true, multiple: true },
            fill: { enums: ["solid", "linear-gradient", "radial-gradient"] },
            bool: { enums: ["yes", "no"] },
            bools: { enums: ["yes", "no"], multiple: true },
            lineStyle: { enums: ["solid", "dotted", "dashed"] },
            lineCap: { enums: ["butt", "round", "square"] },
            borderStyle: { enums: ["solid", "dotted", "dashed", "double"] },
            curveStyle: { enums: ["bezier", "unbundled-bezier", "haystack", "segments", "straight", "straight-triangle", "taxi"] },
            fontFamily: { regex: '^([\\w- \\"]+(?:\\s*,\\s*[\\w- \\"]+)*)$' },
            fontStyle: { enums: ["italic", "normal", "oblique"] },
            fontWeight: {
              enums: [
                "normal",
                "bold",
                "bolder",
                "lighter",
                "100",
                "200",
                "300",
                "400",
                "500",
                "600",
                "800",
                "900",
                100,
                200,
                300,
                400,
                500,
                600,
                700,
                800,
                900,
              ],
            },
            textDecoration: { enums: ["none", "underline", "overline", "line-through"] },
            textTransform: { enums: ["none", "uppercase", "lowercase"] },
            textWrap: { enums: ["none", "wrap", "ellipsis"] },
            textOverflowWrap: { enums: ["whitespace", "anywhere"] },
            textBackgroundShape: { enums: ["rectangle", "roundrectangle", "round-rectangle"] },
            nodeShape: {
              enums: [
                "rectangle",
                "roundrectangle",
                "round-rectangle",
                "cutrectangle",
                "cut-rectangle",
                "bottomroundrectangle",
                "bottom-round-rectangle",
                "barrel",
                "ellipse",
                "triangle",
                "round-triangle",
                "square",
                "pentagon",
                "round-pentagon",
                "hexagon",
                "round-hexagon",
                "concavehexagon",
                "concave-hexagon",
                "heptagon",
                "round-heptagon",
                "octagon",
                "round-octagon",
                "tag",
                "round-tag",
                "star",
                "diamond",
                "round-diamond",
                "vee",
                "rhomboid",
                "right-rhomboid",
                "polygon",
              ],
            },
            overlayShape: { enums: ["roundrectangle", "round-rectangle", "ellipse"] },
            compoundIncludeLabels: { enums: ["include", "exclude"] },
            arrowShape: {
              enums: [
                "tee",
                "triangle",
                "triangle-tee",
                "circle-triangle",
                "triangle-cross",
                "triangle-backcurve",
                "vee",
                "square",
                "circle",
                "diamond",
                "chevron",
                "none",
              ],
            },
            arrowFill: { enums: ["filled", "hollow"] },
            display: { enums: ["element", "none"] },
            visibility: { enums: ["hidden", "visible"] },
            zCompoundDepth: { enums: ["bottom", "orphan", "auto", "top"] },
            zIndexCompare: { enums: ["auto", "manual"] },
            valign: { enums: ["top", "center", "bottom"] },
            halign: { enums: ["left", "center", "right"] },
            justification: { enums: ["left", "center", "right", "auto"] },
            text: { string: true },
            data: { mapping: true, regex: i("data") },
            layoutData: { mapping: true, regex: i("layoutData") },
            scratch: { mapping: true, regex: i("scratch") },
            mapData: { mapping: true, regex: o("mapData") },
            mapLayoutData: { mapping: true, regex: o("mapLayoutData") },
            mapScratch: { mapping: true, regex: o("mapScratch") },
            fn: { mapping: true, fn: true },
            url: { regexes: s, singleRegexMatchValue: true },
            urls: { regexes: s, singleRegexMatchValue: true, multiple: true },
            propList: { propList: true },
            angle: { number: true, units: "deg|rad", implicitUnits: "rad" },
            textRotation: { number: true, units: "deg|rad", implicitUnits: "rad", enums: ["none", "autorotate"] },
            polygonPointList: { number: true, multiple: true, evenMultiple: true, min: -1, max: 1, unitless: true },
            edgeDistances: { enums: ["intersection", "node-position"] },
            edgeEndpoint: {
              number: true,
              multiple: true,
              units: "%|px|em|deg|rad",
              implicitUnits: "px",
              enums: ["inside-to-node", "outside-to-node", "outside-to-node-or-label", "outside-to-line", "outside-to-line-or-label"],
              singleEnum: true,
              validate: function e(t, r) {
                switch (t.length) {
                  case 2:
                    return r[0] !== "deg" && r[0] !== "rad" && r[1] !== "deg" && r[1] !== "rad";
                  case 1:
                    return b(t[0]) || r[0] === "deg" || r[0] === "rad";
                  default:
                    return false;
                }
              },
            },
            easing: {
              regexes: [
                "^(spring)\\s*\\(\\s*(" + e + ")\\s*,\\s*(" + e + ")\\s*\\)$",
                "^(cubic-bezier)\\s*\\(\\s*(" + e + ")\\s*,\\s*(" + e + ")\\s*,\\s*(" + e + ")\\s*,\\s*(" + e + ")\\s*\\)$",
              ],
              enums: [
                "linear",
                "ease",
                "ease-in",
                "ease-out",
                "ease-in-out",
                "ease-in-sine",
                "ease-out-sine",
                "ease-in-out-sine",
                "ease-in-quad",
                "ease-out-quad",
                "ease-in-out-quad",
                "ease-in-cubic",
                "ease-out-cubic",
                "ease-in-out-cubic",
                "ease-in-quart",
                "ease-out-quart",
                "ease-in-out-quart",
                "ease-in-quint",
                "ease-out-quint",
                "ease-in-out-quint",
                "ease-in-expo",
                "ease-out-expo",
                "ease-in-out-expo",
                "ease-in-circ",
                "ease-out-circ",
                "ease-in-out-circ",
              ],
            },
            gradientDirection: {
              enums: [
                "to-bottom",
                "to-top",
                "to-left",
                "to-right",
                "to-bottom-right",
                "to-bottom-left",
                "to-top-right",
                "to-top-left",
                "to-right-bottom",
                "to-left-bottom",
                "to-right-top",
                "to-left-top",
              ],
            },
            boundsExpansion: {
              number: true,
              multiple: true,
              min: 0,
              validate: function e(t) {
                var r = t.length;
                return r === 1 || r === 2 || r === 4;
              },
            },
          };
          var l = {
            zeroNonZero: function e(t, r) {
              if ((t == null || r == null) && t !== r) {
                return true;
              }
              if (t == 0 && r != 0) {
                return true;
              } else if (t != 0 && r == 0) {
                return true;
              } else {
                return false;
              }
            },
            any: function e(t, r) {
              return t != r;
            },
            emptyNonEmpty: function e(t, r) {
              var n = O(t);
              var a = O(r);
              return (n && !a) || (!n && a);
            },
          };
          var u = Nc.types;
          var c = [
            { name: "label", type: u.text, triggersBounds: l.any, triggersZOrder: l.emptyNonEmpty },
            { name: "text-rotation", type: u.textRotation, triggersBounds: l.any },
            { name: "text-margin-x", type: u.bidirectionalSize, triggersBounds: l.any },
            { name: "text-margin-y", type: u.bidirectionalSize, triggersBounds: l.any },
          ];
          var v = [
            { name: "source-label", type: u.text, triggersBounds: l.any },
            { name: "source-text-rotation", type: u.textRotation, triggersBounds: l.any },
            { name: "source-text-margin-x", type: u.bidirectionalSize, triggersBounds: l.any },
            { name: "source-text-margin-y", type: u.bidirectionalSize, triggersBounds: l.any },
            { name: "source-text-offset", type: u.size, triggersBounds: l.any },
          ];
          var f = [
            { name: "target-label", type: u.text, triggersBounds: l.any },
            { name: "target-text-rotation", type: u.textRotation, triggersBounds: l.any },
            { name: "target-text-margin-x", type: u.bidirectionalSize, triggersBounds: l.any },
            { name: "target-text-margin-y", type: u.bidirectionalSize, triggersBounds: l.any },
            { name: "target-text-offset", type: u.size, triggersBounds: l.any },
          ];
          var h = [
            { name: "font-family", type: u.fontFamily, triggersBounds: l.any },
            { name: "font-style", type: u.fontStyle, triggersBounds: l.any },
            { name: "font-weight", type: u.fontWeight, triggersBounds: l.any },
            { name: "font-size", type: u.size, triggersBounds: l.any },
            { name: "text-transform", type: u.textTransform, triggersBounds: l.any },
            { name: "text-wrap", type: u.textWrap, triggersBounds: l.any },
            { name: "text-overflow-wrap", type: u.textOverflowWrap, triggersBounds: l.any },
            { name: "text-max-width", type: u.size, triggersBounds: l.any },
            { name: "text-outline-width", type: u.size, triggersBounds: l.any },
            { name: "line-height", type: u.positiveNumber, triggersBounds: l.any },
          ];
          var d = [
            { name: "text-valign", type: u.valign, triggersBounds: l.any },
            { name: "text-halign", type: u.halign, triggersBounds: l.any },
            { name: "color", type: u.color },
            { name: "text-outline-color", type: u.color },
            { name: "text-outline-opacity", type: u.zeroOneNumber },
            { name: "text-background-color", type: u.color },
            { name: "text-background-opacity", type: u.zeroOneNumber },
            { name: "text-background-padding", type: u.size, triggersBounds: l.any },
            { name: "text-border-opacity", type: u.zeroOneNumber },
            { name: "text-border-color", type: u.color },
            { name: "text-border-width", type: u.size, triggersBounds: l.any },
            { name: "text-border-style", type: u.borderStyle, triggersBounds: l.any },
            { name: "text-background-shape", type: u.textBackgroundShape, triggersBounds: l.any },
            { name: "text-justification", type: u.justification },
          ];
          var p = [
            { name: "events", type: u.bool },
            { name: "text-events", type: u.bool },
          ];
          var g = [
            { name: "display", type: u.display, triggersZOrder: l.any, triggersBounds: l.any, triggersBoundsOfParallelBeziers: true },
            { name: "visibility", type: u.visibility, triggersZOrder: l.any },
            { name: "opacity", type: u.zeroOneNumber, triggersZOrder: l.zeroNonZero },
            { name: "text-opacity", type: u.zeroOneNumber },
            { name: "min-zoomed-font-size", type: u.size },
            { name: "z-compound-depth", type: u.zCompoundDepth, triggersZOrder: l.any },
            { name: "z-index-compare", type: u.zIndexCompare, triggersZOrder: l.any },
            { name: "z-index", type: u.nonNegativeInt, triggersZOrder: l.any },
          ];
          var y = [
            { name: "overlay-padding", type: u.size, triggersBounds: l.any },
            { name: "overlay-color", type: u.color },
            { name: "overlay-opacity", type: u.zeroOneNumber, triggersBounds: l.zeroNonZero },
            { name: "overlay-shape", type: u.overlayShape, triggersBounds: l.any },
          ];
          var m = [
            { name: "underlay-padding", type: u.size, triggersBounds: l.any },
            { name: "underlay-color", type: u.color },
            { name: "underlay-opacity", type: u.zeroOneNumber, triggersBounds: l.zeroNonZero },
            { name: "underlay-shape", type: u.overlayShape, triggersBounds: l.any },
          ];
          var x = [
            { name: "transition-property", type: u.propList },
            { name: "transition-duration", type: u.time },
            { name: "transition-delay", type: u.time },
            { name: "transition-timing-function", type: u.easing },
          ];
          var w = function e(t, r) {
            if (r.value === "label") {
              return -t.poolIndex();
            } else {
              return r.pfValue;
            }
          };
          var E = [
            { name: "height", type: u.nodeSize, triggersBounds: l.any, hashOverride: w },
            { name: "width", type: u.nodeSize, triggersBounds: l.any, hashOverride: w },
            { name: "shape", type: u.nodeShape, triggersBounds: l.any },
            { name: "shape-polygon-points", type: u.polygonPointList, triggersBounds: l.any },
            { name: "background-color", type: u.color },
            { name: "background-fill", type: u.fill },
            { name: "background-opacity", type: u.zeroOneNumber },
            { name: "background-blacken", type: u.nOneOneNumber },
            { name: "background-gradient-stop-colors", type: u.colors },
            { name: "background-gradient-stop-positions", type: u.percentages },
            { name: "background-gradient-direction", type: u.gradientDirection },
            { name: "padding", type: u.sizeMaybePercent, triggersBounds: l.any },
            { name: "padding-relative-to", type: u.paddingRelativeTo, triggersBounds: l.any },
            { name: "bounds-expansion", type: u.boundsExpansion, triggersBounds: l.any },
          ];
          var T = [
            { name: "border-color", type: u.color },
            { name: "border-opacity", type: u.zeroOneNumber },
            { name: "border-width", type: u.size, triggersBounds: l.any },
            { name: "border-style", type: u.borderStyle },
          ];
          var _ = [
            { name: "background-image", type: u.urls },
            { name: "background-image-crossorigin", type: u.bgCrossOrigin },
            { name: "background-image-opacity", type: u.zeroOneNumbers },
            { name: "background-image-containment", type: u.bgContainment },
            { name: "background-image-smoothing", type: u.bools },
            { name: "background-position-x", type: u.bgPos },
            { name: "background-position-y", type: u.bgPos },
            { name: "background-width-relative-to", type: u.bgRelativeTo },
            { name: "background-height-relative-to", type: u.bgRelativeTo },
            { name: "background-repeat", type: u.bgRepeat },
            { name: "background-fit", type: u.bgFit },
            { name: "background-clip", type: u.bgClip },
            { name: "background-width", type: u.bgWH },
            { name: "background-height", type: u.bgWH },
            { name: "background-offset-x", type: u.bgPos },
            { name: "background-offset-y", type: u.bgPos },
          ];
          var D = [
            { name: "position", type: u.position, triggersBounds: l.any },
            { name: "compound-sizing-wrt-labels", type: u.compoundIncludeLabels, triggersBounds: l.any },
            { name: "min-width", type: u.size, triggersBounds: l.any },
            { name: "min-width-bias-left", type: u.sizeMaybePercent, triggersBounds: l.any },
            { name: "min-width-bias-right", type: u.sizeMaybePercent, triggersBounds: l.any },
            { name: "min-height", type: u.size, triggersBounds: l.any },
            { name: "min-height-bias-top", type: u.sizeMaybePercent, triggersBounds: l.any },
            { name: "min-height-bias-bottom", type: u.sizeMaybePercent, triggersBounds: l.any },
          ];
          var C = [
            { name: "line-style", type: u.lineStyle },
            { name: "line-color", type: u.color },
            { name: "line-fill", type: u.fill },
            { name: "line-cap", type: u.lineCap },
            { name: "line-opacity", type: u.zeroOneNumber },
            { name: "line-dash-pattern", type: u.numbers },
            { name: "line-dash-offset", type: u.number },
            { name: "line-gradient-stop-colors", type: u.colors },
            { name: "line-gradient-stop-positions", type: u.percentages },
            { name: "curve-style", type: u.curveStyle, triggersBounds: l.any, triggersBoundsOfParallelBeziers: true },
            { name: "haystack-radius", type: u.zeroOneNumber, triggersBounds: l.any },
            { name: "source-endpoint", type: u.edgeEndpoint, triggersBounds: l.any },
            { name: "target-endpoint", type: u.edgeEndpoint, triggersBounds: l.any },
            { name: "control-point-step-size", type: u.size, triggersBounds: l.any },
            { name: "control-point-distances", type: u.bidirectionalSizes, triggersBounds: l.any },
            { name: "control-point-weights", type: u.numbers, triggersBounds: l.any },
            { name: "segment-distances", type: u.bidirectionalSizes, triggersBounds: l.any },
            { name: "segment-weights", type: u.numbers, triggersBounds: l.any },
            { name: "taxi-turn", type: u.bidirectionalSizeMaybePercent, triggersBounds: l.any },
            { name: "taxi-turn-min-distance", type: u.size, triggersBounds: l.any },
            { name: "taxi-direction", type: u.axisDirection, triggersBounds: l.any },
            { name: "edge-distances", type: u.edgeDistances, triggersBounds: l.any },
            { name: "arrow-scale", type: u.positiveNumber, triggersBounds: l.any },
            { name: "loop-direction", type: u.angle, triggersBounds: l.any },
            { name: "loop-sweep", type: u.angle, triggersBounds: l.any },
            { name: "source-distance-from-node", type: u.size, triggersBounds: l.any },
            { name: "target-distance-from-node", type: u.size, triggersBounds: l.any },
          ];
          var N = [
            { name: "ghost", type: u.bool, triggersBounds: l.any },
            { name: "ghost-offset-x", type: u.bidirectionalSize, triggersBounds: l.any },
            { name: "ghost-offset-y", type: u.bidirectionalSize, triggersBounds: l.any },
            { name: "ghost-opacity", type: u.zeroOneNumber },
          ];
          var A = [
            { name: "selection-box-color", type: u.color },
            { name: "selection-box-opacity", type: u.zeroOneNumber },
            { name: "selection-box-border-color", type: u.color },
            { name: "selection-box-border-width", type: u.size },
            { name: "active-bg-color", type: u.color },
            { name: "active-bg-opacity", type: u.zeroOneNumber },
            { name: "active-bg-size", type: u.size },
            { name: "outside-texture-bg-color", type: u.color },
            { name: "outside-texture-bg-opacity", type: u.zeroOneNumber },
          ];
          var L = [];
          Nc.pieBackgroundN = 16;
          L.push({ name: "pie-size", type: u.sizeMaybePercent });
          for (var I = 1; I <= Nc.pieBackgroundN; I++) {
            L.push({ name: "pie-" + I + "-background-color", type: u.color });
            L.push({ name: "pie-" + I + "-background-size", type: u.percent });
            L.push({ name: "pie-" + I + "-background-opacity", type: u.zeroOneNumber });
          }
          var S = [];
          var k = (Nc.arrowPrefixes = ["source", "mid-source", "target", "mid-target"]);
          [
            { name: "arrow-shape", type: u.arrowShape, triggersBounds: l.any },
            { name: "arrow-color", type: u.color },
            { name: "arrow-fill", type: u.arrowFill },
          ].forEach(function (e) {
            k.forEach(function (t) {
              var r = t + "-" + e.name;
              var n = e.type,
                a = e.triggersBounds;
              S.push({ name: r, type: n, triggersBounds: a });
            });
          }, {});
          var M = (Nc.properties = [].concat(p, x, g, y, m, N, d, h, c, v, f, E, T, _, L, D, C, S, A));
          var P = (Nc.propertyGroups = {
            behavior: p,
            transition: x,
            visibility: g,
            overlay: y,
            underlay: m,
            ghost: N,
            commonLabel: d,
            labelDimensions: h,
            mainLabel: c,
            sourceLabel: v,
            targetLabel: f,
            nodeBody: E,
            nodeBorder: T,
            backgroundImage: _,
            pie: L,
            compound: D,
            edgeLine: C,
            edgeArrow: S,
            core: A,
          });
          var R = (Nc.propertyGroupNames = {});
          var B = (Nc.propertyGroupKeys = Object.keys(P));
          B.forEach(function (e) {
            R[e] = P[e].map(function (e) {
              return e.name;
            });
            P[e].forEach(function (t) {
              return (t.groupKey = e);
            });
          });
          var F = (Nc.aliases = [
            { name: "content", pointsTo: "label" },
            { name: "control-point-distance", pointsTo: "control-point-distances" },
            { name: "control-point-weight", pointsTo: "control-point-weights" },
            { name: "edge-text-rotation", pointsTo: "text-rotation" },
            { name: "padding-left", pointsTo: "padding" },
            { name: "padding-right", pointsTo: "padding" },
            { name: "padding-top", pointsTo: "padding" },
            { name: "padding-bottom", pointsTo: "padding" },
          ]);
          Nc.propertyNames = M.map(function (e) {
            return e.name;
          });
          for (var z = 0; z < M.length; z++) {
            var G = M[z];
            M[G.name] = G;
          }
          for (var Y = 0; Y < F.length; Y++) {
            var X = F[Y];
            var U = M[X.pointsTo];
            var H = { name: X.name, alias: true, pointsTo: U };
            M.push(H);
            M[X.name] = H;
          }
        })();
        Nc.getDefaultProperty = function (e) {
          return this.getDefaultProperties()[e];
        };
        Nc.getDefaultProperties = function () {
          var e = this._private;
          if (e.defaultProperties != null) {
            return e.defaultProperties;
          }
          var t = Q(
            {
              "selection-box-color": "#ddd",
              "selection-box-opacity": 0.65,
              "selection-box-border-color": "#aaa",
              "selection-box-border-width": 1,
              "active-bg-color": "black",
              "active-bg-opacity": 0.15,
              "active-bg-size": 30,
              "outside-texture-bg-color": "#000",
              "outside-texture-bg-opacity": 0.125,
              events: "yes",
              "text-events": "no",
              "text-valign": "top",
              "text-halign": "center",
              "text-justification": "auto",
              "line-height": 1,
              color: "#000",
              "text-outline-color": "#000",
              "text-outline-width": 0,
              "text-outline-opacity": 1,
              "text-opacity": 1,
              "text-decoration": "none",
              "text-transform": "none",
              "text-wrap": "none",
              "text-overflow-wrap": "whitespace",
              "text-max-width": 9999,
              "text-background-color": "#000",
              "text-background-opacity": 0,
              "text-background-shape": "rectangle",
              "text-background-padding": 0,
              "text-border-opacity": 0,
              "text-border-width": 0,
              "text-border-style": "solid",
              "text-border-color": "#000",
              "font-family": "Helvetica Neue, Helvetica, sans-serif",
              "font-style": "normal",
              "font-weight": "normal",
              "font-size": 16,
              "min-zoomed-font-size": 0,
              "text-rotation": "none",
              "source-text-rotation": "none",
              "target-text-rotation": "none",
              visibility: "visible",
              display: "element",
              opacity: 1,
              "z-compound-depth": "auto",
              "z-index-compare": "auto",
              "z-index": 0,
              label: "",
              "text-margin-x": 0,
              "text-margin-y": 0,
              "source-label": "",
              "source-text-offset": 0,
              "source-text-margin-x": 0,
              "source-text-margin-y": 0,
              "target-label": "",
              "target-text-offset": 0,
              "target-text-margin-x": 0,
              "target-text-margin-y": 0,
              "overlay-opacity": 0,
              "overlay-color": "#000",
              "overlay-padding": 10,
              "overlay-shape": "round-rectangle",
              "underlay-opacity": 0,
              "underlay-color": "#000",
              "underlay-padding": 10,
              "underlay-shape": "round-rectangle",
              "transition-property": "none",
              "transition-duration": 0,
              "transition-delay": 0,
              "transition-timing-function": "linear",
              "background-blacken": 0,
              "background-color": "#999",
              "background-fill": "solid",
              "background-opacity": 1,
              "background-image": "none",
              "background-image-crossorigin": "anonymous",
              "background-image-opacity": 1,
              "background-image-containment": "inside",
              "background-image-smoothing": "yes",
              "background-position-x": "50%",
              "background-position-y": "50%",
              "background-offset-x": 0,
              "background-offset-y": 0,
              "background-width-relative-to": "include-padding",
              "background-height-relative-to": "include-padding",
              "background-repeat": "no-repeat",
              "background-fit": "none",
              "background-clip": "node",
              "background-width": "auto",
              "background-height": "auto",
              "border-color": "#000",
              "border-opacity": 1,
              "border-width": 0,
              "border-style": "solid",
              height: 30,
              width: 30,
              shape: "ellipse",
              "shape-polygon-points": "-1, -1,   1, -1,   1, 1,   -1, 1",
              "bounds-expansion": 0,
              "background-gradient-direction": "to-bottom",
              "background-gradient-stop-colors": "#999",
              "background-gradient-stop-positions": "0%",
              ghost: "no",
              "ghost-offset-y": 0,
              "ghost-offset-x": 0,
              "ghost-opacity": 0,
              padding: 0,
              "padding-relative-to": "width",
              position: "origin",
              "compound-sizing-wrt-labels": "include",
              "min-width": 0,
              "min-width-bias-left": 0,
              "min-width-bias-right": 0,
              "min-height": 0,
              "min-height-bias-top": 0,
              "min-height-bias-bottom": 0,
            },
            { "pie-size": "100%" },
            [
              { name: "pie-{{i}}-background-color", value: "black" },
              { name: "pie-{{i}}-background-size", value: "0%" },
              { name: "pie-{{i}}-background-opacity", value: 1 },
            ].reduce(function (e, t) {
              for (var r = 1; r <= Nc.pieBackgroundN; r++) {
                var n = t.name.replace("{{i}}", r);
                var a = t.value;
                e[n] = a;
              }
              return e;
            }, {}),
            {
              "line-style": "solid",
              "line-color": "#999",
              "line-fill": "solid",
              "line-cap": "butt",
              "line-opacity": 1,
              "line-gradient-stop-colors": "#999",
              "line-gradient-stop-positions": "0%",
              "control-point-step-size": 40,
              "control-point-weights": 0.5,
              "segment-weights": 0.5,
              "segment-distances": 20,
              "taxi-turn": "50%",
              "taxi-turn-min-distance": 10,
              "taxi-direction": "auto",
              "edge-distances": "intersection",
              "curve-style": "haystack",
              "haystack-radius": 0,
              "arrow-scale": 1,
              "loop-direction": "-45deg",
              "loop-sweep": "-90deg",
              "source-distance-from-node": 0,
              "target-distance-from-node": 0,
              "source-endpoint": "outside-to-node",
              "target-endpoint": "outside-to-node",
              "line-dash-pattern": [6, 3],
              "line-dash-offset": 0,
            },
            [
              { name: "arrow-shape", value: "none" },
              { name: "arrow-color", value: "#999" },
              { name: "arrow-fill", value: "filled" },
            ].reduce(function (e, t) {
              Nc.arrowPrefixes.forEach(function (r) {
                var n = r + "-" + t.name;
                var a = t.value;
                e[n] = a;
              });
              return e;
            }, {})
          );
          var r = {};
          for (var n = 0; n < this.properties.length; n++) {
            var a = this.properties[n];
            if (a.pointsTo) {
              continue;
            }
            var i = a.name;
            var o = t[i];
            var s = this.parse(i, o);
            r[i] = s;
          }
          e.defaultProperties = r;
          return e.defaultProperties;
        };
        Nc.addDefaultStylesheet = function () {
          this.selector(":parent")
            .css({ shape: "rectangle", padding: 10, "background-color": "#eee", "border-color": "#ccc", "border-width": 1 })
            .selector("edge")
            .css({ width: 3 })
            .selector(":loop")
            .css({ "curve-style": "bezier" })
            .selector("edge:compound")
            .css({ "curve-style": "bezier", "source-endpoint": "outside-to-line", "target-endpoint": "outside-to-line" })
            .selector(":selected")
            .css({
              "background-color": "#0169D9",
              "line-color": "#0169D9",
              "source-arrow-color": "#0169D9",
              "target-arrow-color": "#0169D9",
              "mid-source-arrow-color": "#0169D9",
              "mid-target-arrow-color": "#0169D9",
            })
            .selector(":parent:selected")
            .css({ "background-color": "#CCE1F9", "border-color": "#aec8e5" })
            .selector(":active")
            .css({ "overlay-color": "black", "overlay-padding": 10, "overlay-opacity": 0.25 });
          this.defaultLength = this.length;
        };
        var Ac = {};
        Ac.parse = function (e, t, r, n) {
          var a = this;
          if (x(t)) {
            return a.parseImplWarn(e, t, r, n);
          }
          var i = n === "mapping" || n === true || n === false || n == null ? "dontcare" : n;
          var o = r ? "t" : "f";
          var s = "" + t;
          var l = xt(e, s, o, i);
          var u = (a.propCache = a.propCache || []);
          var c;
          if (!(c = u[l])) {
            c = u[l] = a.parseImplWarn(e, t, r, n);
          }
          if (r || n === "mapping") {
            c = Mt(c);
            if (c) {
              c.value = Mt(c.value);
            }
          }
          return c;
        };
        Ac.parseImplWarn = function (e, t, r, n) {
          var a = this.parseImpl(e, t, r, n);
          if (!a && t != null) {
            kt("The style property `".concat(e, ": ").concat(t, "` is invalid"));
          }
          if (a && (a.name === "width" || a.name === "height") && t === "label") {
            kt("The style value of `label` is deprecated for `" + a.name + "`");
          }
          return a;
        };
        Ac.parseImpl = function (e, t, r, n) {
          var a = this;
          e = z(e);
          var i = a.properties[e];
          var o = t;
          var s = a.types;
          if (!i) {
            return null;
          }
          if (t === undefined) {
            return null;
          }
          if (i.alias) {
            i = i.pointsTo;
            e = i.name;
          }
          var l = b(t);
          if (l) {
            t = t.trim();
          }
          var u = i.type;
          if (!u) {
            return null;
          }
          if (r && (t === "" || t === null)) {
            return { name: e, value: t, bypass: true, deleteBypass: true };
          }
          if (x(t)) {
            return { name: e, value: t, strValue: "fn", mapped: s.fn, bypass: r };
          }
          var c, v;
          if (!l || n || t.length < 7 || t[1] !== "a");
          else if (t.length >= 7 && t[0] === "d" && (c = new RegExp(s.data.regex).exec(t))) {
            if (r) {
              return false;
            }
            var f = s.data;
            return { name: e, value: c, strValue: "" + t, mapped: f, field: c[1], bypass: r };
          } else if (t.length >= 10 && t[0] === "m" && (v = new RegExp(s.mapData.regex).exec(t))) {
            if (r) {
              return false;
            }
            if (u.multiple) {
              return false;
            }
            var h = s.mapData;
            if (!(u.color || u.number)) {
              return false;
            }
            var d = this.parse(e, v[4]);
            if (!d || d.mapped) {
              return false;
            }
            var p = this.parse(e, v[5]);
            if (!p || p.mapped) {
              return false;
            }
            if (d.pfValue === p.pfValue || d.strValue === p.strValue) {
              kt("`" + e + ": " + t + "` is not a valid mapper because the output range is zero; converting to `" + e + ": " + d.strValue + "`");
              return this.parse(e, d.strValue);
            } else if (u.color) {
              var g = d.value;
              var y = p.value;
              var m =
                g[0] === y[0] && g[1] === y[1] && g[2] === y[2] && (g[3] === y[3] || ((g[3] == null || g[3] === 1) && (y[3] == null || y[3] === 1)));
              if (m) {
                return false;
              }
            }
            return {
              name: e,
              value: v,
              strValue: "" + t,
              mapped: h,
              field: v[1],
              fieldMin: parseFloat(v[2]),
              fieldMax: parseFloat(v[3]),
              valueMin: d.value,
              valueMax: p.value,
              bypass: r,
            };
          }
          if (u.multiple && n !== "multiple") {
            var E;
            if (l) {
              E = t.split(/\s+/);
            } else if (w(t)) {
              E = t;
            } else {
              E = [t];
            }
            if (u.evenMultiple && E.length % 2 !== 0) {
              return null;
            }
            var T = [];
            var _ = [];
            var C = [];
            var N = "";
            var A = false;
            for (var L = 0; L < E.length; L++) {
              var I = a.parse(e, E[L], r, "multiple");
              A = A || b(I.value);
              T.push(I.value);
              C.push(I.pfValue != null ? I.pfValue : I.value);
              _.push(I.units);
              N += (L > 0 ? " " : "") + I.strValue;
            }
            if (u.validate && !u.validate(T, _)) {
              return null;
            }
            if (u.singleEnum && A) {
              if (T.length === 1 && b(T[0])) {
                return { name: e, value: T[0], strValue: T[0], bypass: r };
              } else {
                return null;
              }
            }
            return { name: e, value: T, pfValue: C, strValue: N, bypass: r, units: _ };
          }
          var S = function n() {
            for (var a = 0; a < u.enums.length; a++) {
              var i = u.enums[a];
              if (i === t) {
                return { name: e, value: t, strValue: "" + t, bypass: r };
              }
            }
            return null;
          };
          if (u.number) {
            var k;
            var O = "px";
            if (u.units) {
              k = u.units;
            }
            if (u.implicitUnits) {
              O = u.implicitUnits;
            }
            if (!u.unitless) {
              if (l) {
                var M = "px|em" + (u.allowPercent ? "|\\%" : "");
                if (k) {
                  M = k;
                }
                var P = t.match("^(" + V + ")(" + M + ")?" + "$");
                if (P) {
                  t = P[1];
                  k = P[2] || O;
                }
              } else if (!k || u.implicitUnits) {
                k = O;
              }
            }
            t = parseFloat(t);
            if (isNaN(t) && u.enums === undefined) {
              return null;
            }
            if (isNaN(t) && u.enums !== undefined) {
              t = o;
              return S();
            }
            if (u.integer && !D(t)) {
              return null;
            }
            if (
              (u.min !== undefined && (t < u.min || (u.strictMin && t === u.min))) ||
              (u.max !== undefined && (t > u.max || (u.strictMax && t === u.max)))
            ) {
              return null;
            }
            var R = { name: e, value: t, strValue: "" + t + (k ? k : ""), units: k, bypass: r };
            if (u.unitless || (k !== "px" && k !== "em")) {
              R.pfValue = t;
            } else {
              R.pfValue = k === "px" || !k ? t : this.getEmSizeInPixels() * t;
            }
            if (k === "ms" || k === "s") {
              R.pfValue = k === "ms" ? t : 1e3 * t;
            }
            if (k === "deg" || k === "rad") {
              R.pfValue = k === "rad" ? t : Er(t);
            }
            if (k === "%") {
              R.pfValue = t / 100;
            }
            return R;
          } else if (u.propList) {
            var B = [];
            var F = "" + t;
            if (F === "none");
            else {
              var G = F.split(/\s*,\s*|\s+/);
              for (var Y = 0; Y < G.length; Y++) {
                var X = G[Y].trim();
                if (a.properties[X]) {
                  B.push(X);
                } else {
                  kt("`" + X + "` is not a valid property name");
                }
              }
              if (B.length === 0) {
                return null;
              }
            }
            return { name: e, value: B, strValue: B.length === 0 ? "none" : B.join(" "), bypass: r };
          } else if (u.color) {
            var U = ne(t);
            if (!U) {
              return null;
            }
            return { name: e, value: U, pfValue: U, strValue: "rgb(" + U[0] + "," + U[1] + "," + U[2] + ")", bypass: r };
          } else if (u.regex || u.regexes) {
            if (u.enums) {
              var j = S();
              if (j) {
                return j;
              }
            }
            var H = u.regexes ? u.regexes : [u.regex];
            for (var q = 0; q < H.length; q++) {
              var W = new RegExp(H[q]);
              var $ = W.exec(t);
              if ($) {
                return { name: e, value: u.singleRegexMatchValue ? $[1] : $, strValue: "" + t, bypass: r };
              }
            }
            return null;
          } else if (u.string) {
            return { name: e, value: "" + t, strValue: "" + t, bypass: r };
          } else if (u.enums) {
            return S();
          } else {
            return null;
          }
        };
        var Lc = function e(t) {
          if (!(this instanceof e)) {
            return new e(t);
          }
          if (!I(t)) {
            It("A style must have a core reference");
            return;
          }
          this._private = { cy: t, coreStyle: {} };
          this.length = 0;
          this.resetToDefault();
        };
        var Ic = Lc.prototype;
        Ic.instanceString = function () {
          return "style";
        };
        Ic.clear = function () {
          var e = this._private;
          var t = e.cy;
          var r = t.elements();
          for (var n = 0; n < this.length; n++) {
            this[n] = undefined;
          }
          this.length = 0;
          e.contextStyles = {};
          e.propDiffs = {};
          this.cleanElements(r, true);
          r.forEach(function (e) {
            var t = e[0]._private;
            t.styleDirty = true;
            t.appliedInitStyle = false;
          });
          return this;
        };
        Ic.resetToDefault = function () {
          this.clear();
          this.addDefaultStylesheet();
          return this;
        };
        Ic.core = function (e) {
          return this._private.coreStyle[e] || this.getDefaultProperty(e);
        };
        Ic.selector = function (e) {
          var t = e === "core" ? null : new ol(e);
          var r = this.length++;
          this[r] = { selector: t, properties: [], mappedProperties: [], index: r };
          return this;
        };
        Ic.css = function () {
          var e = this;
          var t = arguments;
          if (t.length === 1) {
            var r = t[0];
            for (var n = 0; n < e.properties.length; n++) {
              var a = e.properties[n];
              var i = r[a.name];
              if (i === undefined) {
                i = r[G(a.name)];
              }
              if (i !== undefined) {
                this.cssRule(a.name, i);
              }
            }
          } else if (t.length === 2) {
            this.cssRule(t[0], t[1]);
          }
          return this;
        };
        Ic.style = Ic.css;
        Ic.cssRule = function (e, t) {
          var r = this.parse(e, t);
          if (r) {
            var n = this.length - 1;
            this[n].properties.push(r);
            this[n].properties[r.name] = r;
            if (r.name.match(/pie-(\d+)-background-size/) && r.value) {
              this._private.hasPie = true;
            }
            if (r.mapped) {
              this[n].mappedProperties.push(r);
            }
            var a = !this[n].selector;
            if (a) {
              this._private.coreStyle[r.name] = r;
            }
          }
          return this;
        };
        Ic.append = function (e) {
          if (S(e)) {
            e.appendToStyle(this);
          } else if (w(e)) {
            this.appendFromJson(e);
          } else if (b(e)) {
            this.appendFromString(e);
          }
          return this;
        };
        Lc.fromJson = function (e, t) {
          var r = new Lc(e);
          r.fromJson(t);
          return r;
        };
        Lc.fromString = function (e, t) {
          return new Lc(e).fromString(t);
        };
        [bc, Ec, Tc, _c, Dc, Cc, Nc, Ac].forEach(function (e) {
          Q(Ic, e);
        });
        Lc.types = Ic.types;
        Lc.properties = Ic.properties;
        Lc.propertyGroups = Ic.propertyGroups;
        Lc.propertyGroupNames = Ic.propertyGroupNames;
        Lc.propertyGroupKeys = Ic.propertyGroupKeys;
        var Sc = {
          style: function e(t) {
            if (t) {
              var r = this.setStyle(t);
              r.update();
            }
            return this._private.style;
          },
          setStyle: function e(t) {
            var r = this._private;
            if (S(t)) {
              r.style = t.generateStyle(this);
            } else if (w(t)) {
              r.style = Lc.fromJson(this, t);
            } else if (b(t)) {
              r.style = Lc.fromString(this, t);
            } else {
              r.style = Lc(this);
            }
            return r.style;
          },
          updateStyle: function e() {
            this.mutableElements().updateStyle();
          },
        };
        var kc = "single";
        var Oc = {
          autolock: function e(t) {
            if (t !== undefined) {
              this._private.autolock = t ? true : false;
            } else {
              return this._private.autolock;
            }
            return this;
          },
          autoungrabify: function e(t) {
            if (t !== undefined) {
              this._private.autoungrabify = t ? true : false;
            } else {
              return this._private.autoungrabify;
            }
            return this;
          },
          autounselectify: function e(t) {
            if (t !== undefined) {
              this._private.autounselectify = t ? true : false;
            } else {
              return this._private.autounselectify;
            }
            return this;
          },
          selectionType: function e(t) {
            var r = this._private;
            if (r.selectionType == null) {
              r.selectionType = kc;
            }
            if (t !== undefined) {
              if (t === "additive" || t === "single") {
                r.selectionType = t;
              }
            } else {
              return r.selectionType;
            }
            return this;
          },
          panningEnabled: function e(t) {
            if (t !== undefined) {
              this._private.panningEnabled = t ? true : false;
            } else {
              return this._private.panningEnabled;
            }
            return this;
          },
          userPanningEnabled: function e(t) {
            if (t !== undefined) {
              this._private.userPanningEnabled = t ? true : false;
            } else {
              return this._private.userPanningEnabled;
            }
            return this;
          },
          zoomingEnabled: function e(t) {
            if (t !== undefined) {
              this._private.zoomingEnabled = t ? true : false;
            } else {
              return this._private.zoomingEnabled;
            }
            return this;
          },
          userZoomingEnabled: function e(t) {
            if (t !== undefined) {
              this._private.userZoomingEnabled = t ? true : false;
            } else {
              return this._private.userZoomingEnabled;
            }
            return this;
          },
          boxSelectionEnabled: function e(t) {
            if (t !== undefined) {
              this._private.boxSelectionEnabled = t ? true : false;
            } else {
              return this._private.boxSelectionEnabled;
            }
            return this;
          },
          pan: function e() {
            var t = arguments;
            var e = this._private.pan;
            var r, n, a, i, o;
            switch (t.length) {
              case 0:
                return e;
              case 1:
                if (b(t[0])) {
                  r = t[0];
                  return e[r];
                } else if (E(t[0])) {
                  if (!this._private.panningEnabled) {
                    return this;
                  }
                  a = t[0];
                  i = a.x;
                  o = a.y;
                  if (_(i)) {
                    e.x = i;
                  }
                  if (_(o)) {
                    e.y = o;
                  }
                  this.emit("pan viewport");
                }
                break;
              case 2:
                if (!this._private.panningEnabled) {
                  return this;
                }
                r = t[0];
                n = t[1];
                if ((r === "x" || r === "y") && _(n)) {
                  e[r] = n;
                }
                this.emit("pan viewport");
                break;
            }
            this.notify("viewport");
            return this;
          },
          panBy: function e(t, r) {
            var n = arguments;
            var a = this._private.pan;
            var i, o, s, l, u;
            if (!this._private.panningEnabled) {
              return this;
            }
            switch (n.length) {
              case 1:
                if (E(t)) {
                  s = n[0];
                  l = s.x;
                  u = s.y;
                  if (_(l)) {
                    a.x += l;
                  }
                  if (_(u)) {
                    a.y += u;
                  }
                  this.emit("pan viewport");
                }
                break;
              case 2:
                i = t;
                o = r;
                if ((i === "x" || i === "y") && _(o)) {
                  a[i] += o;
                }
                this.emit("pan viewport");
                break;
            }
            this.notify("viewport");
            return this;
          },
          fit: function e(t, r) {
            var n = this.getFitViewport(t, r);
            if (n) {
              var a = this._private;
              a.zoom = n.zoom;
              a.pan = n.pan;
              this.emit("pan zoom viewport");
              this.notify("viewport");
            }
            return this;
          },
          getFitViewport: function e(t, r) {
            if (_(t) && r === undefined) {
              r = t;
              t = undefined;
            }
            if (!this._private.panningEnabled || !this._private.zoomingEnabled) {
              return;
            }
            var n;
            if (b(t)) {
              var a = t;
              t = this.$(a);
            } else if (P(t)) {
              var i = t;
              n = { x1: i.x1, y1: i.y1, x2: i.x2, y2: i.y2 };
              n.w = n.x2 - n.x1;
              n.h = n.y2 - n.y1;
            } else if (!N(t)) {
              t = this.mutableElements();
            }
            if (N(t) && t.empty()) {
              return;
            }
            n = n || t.boundingBox();
            var o = this.width();
            var s = this.height();
            var l;
            r = _(r) ? r : 0;
            if (!isNaN(o) && !isNaN(s) && o > 0 && s > 0 && !isNaN(n.w) && !isNaN(n.h) && n.w > 0 && n.h > 0) {
              l = Math.min((o - 2 * r) / n.w, (s - 2 * r) / n.h);
              l = l > this._private.maxZoom ? this._private.maxZoom : l;
              l = l < this._private.minZoom ? this._private.minZoom : l;
              var u = { x: (o - l * (n.x1 + n.x2)) / 2, y: (s - l * (n.y1 + n.y2)) / 2 };
              return { zoom: l, pan: u };
            }
            return;
          },
          zoomRange: function e(t, r) {
            var n = this._private;
            if (r == null) {
              var a = t;
              t = a.min;
              r = a.max;
            }
            if (_(t) && _(r) && t <= r) {
              n.minZoom = t;
              n.maxZoom = r;
            } else if (_(t) && r === undefined && t <= n.maxZoom) {
              n.minZoom = t;
            } else if (_(r) && t === undefined && r >= n.minZoom) {
              n.maxZoom = r;
            }
            return this;
          },
          minZoom: function e(t) {
            if (t === undefined) {
              return this._private.minZoom;
            } else {
              return this.zoomRange({ min: t });
            }
          },
          maxZoom: function e(t) {
            if (t === undefined) {
              return this._private.maxZoom;
            } else {
              return this.zoomRange({ max: t });
            }
          },
          getZoomedViewport: function e(t) {
            var r = this._private;
            var n = r.pan;
            var a = r.zoom;
            var i;
            var o;
            var s = false;
            if (!r.zoomingEnabled) {
              s = true;
            }
            if (_(t)) {
              o = t;
            } else if (E(t)) {
              o = t.level;
              if (t.position != null) {
                i = pr(t.position, a, n);
              } else if (t.renderedPosition != null) {
                i = t.renderedPosition;
              }
              if (i != null && !r.panningEnabled) {
                s = true;
              }
            }
            o = o > r.maxZoom ? r.maxZoom : o;
            o = o < r.minZoom ? r.minZoom : o;
            if (s || !_(o) || o === a || (i != null && (!_(i.x) || !_(i.y)))) {
              return null;
            }
            if (i != null) {
              var l = n;
              var u = a;
              var c = o;
              var v = { x: (-c / u) * (i.x - l.x) + i.x, y: (-c / u) * (i.y - l.y) + i.y };
              return { zoomed: true, panned: true, zoom: c, pan: v };
            } else {
              return { zoomed: true, panned: false, zoom: o, pan: n };
            }
          },
          zoom: function e(t) {
            if (t === undefined) {
              return this._private.zoom;
            } else {
              var r = this.getZoomedViewport(t);
              var n = this._private;
              if (r == null || !r.zoomed) {
                return this;
              }
              n.zoom = r.zoom;
              if (r.panned) {
                n.pan.x = r.pan.x;
                n.pan.y = r.pan.y;
              }
              this.emit("zoom" + (r.panned ? " pan" : "") + " viewport");
              this.notify("viewport");
              return this;
            }
          },
          viewport: function e(t) {
            var r = this._private;
            var n = true;
            var a = true;
            var i = [];
            var o = false;
            var s = false;
            if (!t) {
              return this;
            }
            if (!_(t.zoom)) {
              n = false;
            }
            if (!E(t.pan)) {
              a = false;
            }
            if (!n && !a) {
              return this;
            }
            if (n) {
              var l = t.zoom;
              if (l < r.minZoom || l > r.maxZoom || !r.zoomingEnabled) {
                o = true;
              } else {
                r.zoom = l;
                i.push("zoom");
              }
            }
            if (a && (!o || !t.cancelOnFailedZoom) && r.panningEnabled) {
              var u = t.pan;
              if (_(u.x)) {
                r.pan.x = u.x;
                s = false;
              }
              if (_(u.y)) {
                r.pan.y = u.y;
                s = false;
              }
              if (!s) {
                i.push("pan");
              }
            }
            if (i.length > 0) {
              i.push("viewport");
              this.emit(i.join(" "));
              this.notify("viewport");
            }
            return this;
          },
          center: function e(t) {
            var r = this.getCenterPan(t);
            if (r) {
              this._private.pan = r;
              this.emit("pan viewport");
              this.notify("viewport");
            }
            return this;
          },
          getCenterPan: function e(t, r) {
            if (!this._private.panningEnabled) {
              return;
            }
            if (b(t)) {
              var n = t;
              t = this.mutableElements().filter(n);
            } else if (!N(t)) {
              t = this.mutableElements();
            }
            if (t.length === 0) {
              return;
            }
            var a = t.boundingBox();
            var i = this.width();
            var o = this.height();
            r = r === undefined ? this._private.zoom : r;
            var s = { x: (i - r * (a.x1 + a.x2)) / 2, y: (o - r * (a.y1 + a.y2)) / 2 };
            return s;
          },
          reset: function e() {
            if (!this._private.panningEnabled || !this._private.zoomingEnabled) {
              return this;
            }
            this.viewport({ pan: { x: 0, y: 0 }, zoom: 1 });
            return this;
          },
          invalidateSize: function e() {
            this._private.sizeCache = null;
          },
          size: function e() {
            var t = this._private;
            var r = t.container;
            var n = this;
            return (t.sizeCache =
              t.sizeCache ||
              (r
                ? (function () {
                    var e = n.window().getComputedStyle(r);
                    var t = function t(r) {
                      return parseFloat(e.getPropertyValue(r));
                    };
                    return {
                      width: r.clientWidth - t("padding-left") - t("padding-right"),
                      height: r.clientHeight - t("padding-top") - t("padding-bottom"),
                    };
                  })()
                : { width: 1, height: 1 }));
          },
          width: function e() {
            return this.size().width;
          },
          height: function e() {
            return this.size().height;
          },
          extent: function e() {
            var t = this._private.pan;
            var r = this._private.zoom;
            var n = this.renderedExtent();
            var a = { x1: (n.x1 - t.x) / r, x2: (n.x2 - t.x) / r, y1: (n.y1 - t.y) / r, y2: (n.y2 - t.y) / r };
            a.w = a.x2 - a.x1;
            a.h = a.y2 - a.y1;
            return a;
          },
          renderedExtent: function e() {
            var t = this.width();
            var r = this.height();
            return { x1: 0, y1: 0, x2: t, y2: r, w: t, h: r };
          },
          multiClickDebounceTime: function e(t) {
            if (t) this._private.multiClickDebounceTime = t;
            else return this._private.multiClickDebounceTime;
            return this;
          },
        };
        Oc.centre = Oc.center;
        Oc.autolockNodes = Oc.autolock;
        Oc.autoungrabifyNodes = Oc.autoungrabify;
        var Mc = {
          data: ks.data({
            field: "data",
            bindingEvent: "data",
            allowBinding: true,
            allowSetting: true,
            settingEvent: "data",
            settingTriggersEvent: true,
            triggerFnName: "trigger",
            allowGetting: true,
            updateStyle: true,
          }),
          removeData: ks.removeData({ field: "data", event: "data", triggerFnName: "trigger", triggerEvent: true, updateStyle: true }),
          scratch: ks.data({
            field: "scratch",
            bindingEvent: "scratch",
            allowBinding: true,
            allowSetting: true,
            settingEvent: "scratch",
            settingTriggersEvent: true,
            triggerFnName: "trigger",
            allowGetting: true,
            updateStyle: true,
          }),
          removeScratch: ks.removeData({ field: "scratch", event: "scratch", triggerFnName: "trigger", triggerEvent: true, updateStyle: true }),
        };
        Mc.attr = Mc.data;
        Mc.removeAttr = Mc.removeData;
        var Pc = function e(t) {
          var r = this;
          t = Q({}, t);
          var n = t.container;
          if (n && !C(n) && C(n[0])) {
            n = n[0];
          }
          var a = n ? n._cyreg : null;
          a = a || {};
          if (a && a.cy) {
            a.cy.destroy();
            a = {};
          }
          var i = (a.readies = a.readies || []);
          if (n) {
            n._cyreg = a;
          }
          a.cy = r;
          var o = f !== undefined && n !== undefined && !t.headless;
          var s = t;
          s.layout = Q({ name: o ? "grid" : "null" }, s.layout);
          s.renderer = Q({ name: o ? "canvas" : "null" }, s.renderer);
          var l = function e(t, r, n) {
            if (r !== undefined) {
              return r;
            } else if (n !== undefined) {
              return n;
            } else {
              return t;
            }
          };
          var u = (this._private = {
            container: n,
            ready: false,
            options: s,
            elements: new $u(this),
            listeners: [],
            aniEles: new $u(this),
            data: s.data || {},
            scratch: {},
            layout: null,
            renderer: null,
            destroyed: false,
            notificationsEnabled: true,
            minZoom: 1e-50,
            maxZoom: 1e50,
            zoomingEnabled: l(true, s.zoomingEnabled),
            userZoomingEnabled: l(true, s.userZoomingEnabled),
            panningEnabled: l(true, s.panningEnabled),
            userPanningEnabled: l(true, s.userPanningEnabled),
            boxSelectionEnabled: l(true, s.boxSelectionEnabled),
            autolock: l(false, s.autolock, s.autolockNodes),
            autoungrabify: l(false, s.autoungrabify, s.autoungrabifyNodes),
            autounselectify: l(false, s.autounselectify),
            styleEnabled: s.styleEnabled === undefined ? o : s.styleEnabled,
            zoom: _(s.zoom) ? s.zoom : 1,
            pan: { x: E(s.pan) && _(s.pan.x) ? s.pan.x : 0, y: E(s.pan) && _(s.pan.y) ? s.pan.y : 0 },
            animation: { current: [], queue: [] },
            hasCompoundNodes: false,
            multiClickDebounceTime: l(250, s.multiClickDebounceTime),
          });
          this.createEmitter();
          this.selectionType(s.selectionType);
          this.zoomRange({ min: s.minZoom, max: s.maxZoom });
          var c = function e(t, r) {
            var n = t.some(R);
            if (n) {
              return $a.all(t).then(r);
            } else {
              r(t);
            }
          };
          if (u.styleEnabled) {
            r.setStyle([]);
          }
          var v = Q({}, s, s.renderer);
          r.initRenderer(v);
          var h = function e(t, n, a) {
            r.notifications(false);
            var i = r.mutableElements();
            if (i.length > 0) {
              i.remove();
            }
            if (t != null) {
              if (E(t) || w(t)) {
                r.add(t);
              }
            }
            r.one("layoutready", function (e) {
              r.notifications(true);
              r.emit(e);
              r.one("load", n);
              r.emitAndNotify("load");
            }).one("layoutstop", function () {
              r.one("done", a);
              r.emit("done");
            });
            var o = Q({}, r._private.options.layout);
            o.eles = r.elements();
            r.layout(o).run();
          };
          c([s.style, s.elements], function (e) {
            var t = e[0];
            var n = e[1];
            if (u.styleEnabled) {
              r.style().append(t);
            }
            h(
              n,
              function () {
                r.startAnimationLoop();
                u.ready = true;
                if (x(s.ready)) {
                  r.on("ready", s.ready);
                }
                for (var e = 0; e < i.length; e++) {
                  var t = i[e];
                  r.on("ready", t);
                }
                if (a) {
                  a.readies = [];
                }
                r.emit("ready");
              },
              s.done
            );
          });
        };
        var Rc = Pc.prototype;
        Q(Rc, {
          instanceString: function e() {
            return "core";
          },
          isReady: function e() {
            return this._private.ready;
          },
          destroyed: function e() {
            return this._private.destroyed;
          },
          ready: function e(t) {
            if (this.isReady()) {
              this.emitter().emit("ready", [], t);
            } else {
              this.on("ready", t);
            }
            return this;
          },
          destroy: function e() {
            var t = this;
            if (t.destroyed()) return;
            t.stopAnimationLoop();
            t.destroyRenderer();
            this.emit("destroy");
            t._private.destroyed = true;
            return t;
          },
          hasElementWithId: function e(t) {
            return this._private.elements.hasElementWithId(t);
          },
          getElementById: function e(t) {
            return this._private.elements.getElementById(t);
          },
          hasCompoundNodes: function e() {
            return this._private.hasCompoundNodes;
          },
          headless: function e() {
            return this._private.renderer.isHeadless();
          },
          styleEnabled: function e() {
            return this._private.styleEnabled;
          },
          addToPool: function e(t) {
            this._private.elements.merge(t);
            return this;
          },
          removeFromPool: function e(t) {
            this._private.elements.unmerge(t);
            return this;
          },
          container: function e() {
            return this._private.container || null;
          },
          window: function e() {
            var t = this._private.container;
            if (t == null) return f;
            var r = this._private.container.ownerDocument;
            if (r === undefined || r == null) {
              return f;
            }
            return r.defaultView || f;
          },
          mount: function e(t) {
            if (t == null) {
              return;
            }
            var r = this;
            var n = r._private;
            var a = n.options;
            if (!C(t) && C(t[0])) {
              t = t[0];
            }
            r.stopAnimationLoop();
            r.destroyRenderer();
            n.container = t;
            n.styleEnabled = true;
            r.invalidateSize();
            r.initRenderer(Q({}, a, a.renderer, { name: a.renderer.name === "null" ? "canvas" : a.renderer.name }));
            r.startAnimationLoop();
            r.style(a.style);
            r.emit("mount");
            return r;
          },
          unmount: function e() {
            var t = this;
            t.stopAnimationLoop();
            t.destroyRenderer();
            t.initRenderer({ name: "null" });
            t.emit("unmount");
            return t;
          },
          options: function e() {
            return Mt(this._private.options);
          },
          json: function e(t) {
            var r = this;
            var n = r._private;
            var a = r.mutableElements();
            var i = function e(t) {
              return r.getElementById(t.id());
            };
            if (E(t)) {
              r.startBatch();
              if (t.elements) {
                var o = {};
                var s = function e(t, n) {
                  var a = [];
                  var i = [];
                  for (var s = 0; s < t.length; s++) {
                    var l = t[s];
                    if (!l.data.id) {
                      kt("cy.json() cannot handle elements without an ID attribute");
                      continue;
                    }
                    var u = "" + l.data.id;
                    var c = r.getElementById(u);
                    o[u] = true;
                    if (c.length !== 0) {
                      i.push({ ele: c, json: l });
                    } else {
                      if (n) {
                        l.group = n;
                        a.push(l);
                      } else {
                        a.push(l);
                      }
                    }
                  }
                  r.add(a);
                  for (var v = 0; v < i.length; v++) {
                    var f = i[v],
                      h = f.ele,
                      d = f.json;
                    h.json(d);
                  }
                };
                if (w(t.elements)) {
                  s(t.elements);
                } else {
                  var l = ["nodes", "edges"];
                  for (var u = 0; u < l.length; u++) {
                    var c = l[u];
                    var v = t.elements[c];
                    if (w(v)) {
                      s(v, c);
                    }
                  }
                }
                var f = r.collection();
                a.filter(function (e) {
                  return !o[e.id()];
                }).forEach(function (e) {
                  if (e.isParent()) {
                    f.merge(e);
                  } else {
                    e.remove();
                  }
                });
                f.forEach(function (e) {
                  return e.children().move({ parent: null });
                });
                f.forEach(function (e) {
                  return i(e).remove();
                });
              }
              if (t.style) {
                r.style(t.style);
              }
              if (t.zoom != null && t.zoom !== n.zoom) {
                r.zoom(t.zoom);
              }
              if (t.pan) {
                if (t.pan.x !== n.pan.x || t.pan.y !== n.pan.y) {
                  r.pan(t.pan);
                }
              }
              if (t.data) {
                r.data(t.data);
              }
              var h = [
                "minZoom",
                "maxZoom",
                "zoomingEnabled",
                "userZoomingEnabled",
                "panningEnabled",
                "userPanningEnabled",
                "boxSelectionEnabled",
                "autolock",
                "autoungrabify",
                "autounselectify",
                "multiClickDebounceTime",
              ];
              for (var d = 0; d < h.length; d++) {
                var p = h[d];
                if (t[p] != null) {
                  r[p](t[p]);
                }
              }
              r.endBatch();
              return this;
            } else {
              var g = !!t;
              var e = {};
              if (g) {
                e.elements = this.elements().map(function (e) {
                  return e.json();
                });
              } else {
                e.elements = {};
                a.forEach(function (t) {
                  var r = t.group();
                  if (!e.elements[r]) {
                    e.elements[r] = [];
                  }
                  e.elements[r].push(t.json());
                });
              }
              if (this._private.styleEnabled) {
                e.style = r.style().json();
              }
              e.data = Mt(r.data());
              var y = n.options;
              e.zoomingEnabled = n.zoomingEnabled;
              e.userZoomingEnabled = n.userZoomingEnabled;
              e.zoom = n.zoom;
              e.minZoom = n.minZoom;
              e.maxZoom = n.maxZoom;
              e.panningEnabled = n.panningEnabled;
              e.userPanningEnabled = n.userPanningEnabled;
              e.pan = Mt(n.pan);
              e.boxSelectionEnabled = n.boxSelectionEnabled;
              e.renderer = Mt(y.renderer);
              e.hideEdgesOnViewport = y.hideEdgesOnViewport;
              e.textureOnViewport = y.textureOnViewport;
              e.wheelSensitivity = y.wheelSensitivity;
              e.motionBlur = y.motionBlur;
              e.multiClickDebounceTime = y.multiClickDebounceTime;
              return e;
            }
          },
        });
        Rc.$id = Rc.getElementById;
        [Zu, uc, fc, hc, dc, pc, yc, mc, Sc, Oc, Mc].forEach(function (e) {
          Q(Rc, e);
        });
        var Bc = {
          fit: true,
          directed: false,
          padding: 30,
          circle: false,
          grid: false,
          spacingFactor: 1.75,
          boundingBox: undefined,
          avoidOverlap: true,
          nodeDimensionsIncludeLabels: false,
          roots: undefined,
          depthSort: undefined,
          animate: false,
          animationDuration: 500,
          animationEasing: undefined,
          animateFilter: function e(t, r) {
            return true;
          },
          ready: undefined,
          stop: undefined,
          transform: function e(t, r) {
            return r;
          },
        };
        var Fc = { maximal: false, acyclic: false };
        var zc = function e(t) {
          return t.scratch("breadthfirst");
        };
        var Gc = function e(t, r) {
          return t.scratch("breadthfirst", r);
        };
        function Yc(e) {
          this.options = Q({}, Bc, Fc, e);
        }
        Yc.prototype.run = function () {
          var e = this.options;
          var t = e;
          var r = e.cy;
          var n = t.eles;
          var a = n.nodes().filter(function (e) {
            return !e.isParent();
          });
          var i = n;
          var o = t.directed;
          var s = t.acyclic || t.maximal || t.maximalAdjustments > 0;
          var l = Or(t.boundingBox ? t.boundingBox : { x1: 0, y1: 0, w: r.width(), h: r.height() });
          var u;
          if (N(t.roots)) {
            u = t.roots;
          } else if (w(t.roots)) {
            var c = [];
            for (var v = 0; v < t.roots.length; v++) {
              var f = t.roots[v];
              var h = r.getElementById(f);
              c.push(h);
            }
            u = r.collection(c);
          } else if (b(t.roots)) {
            u = r.$(t.roots);
          } else {
            if (o) {
              u = a.roots();
            } else {
              var d = n.components();
              u = r.collection();
              var p = function e(t) {
                var r = d[t];
                var n = r.maxDegree(false);
                var a = r.filter(function (e) {
                  return e.degree(false) === n;
                });
                u = u.add(a);
              };
              for (var g = 0; g < d.length; g++) {
                p(g);
              }
            }
          }
          var y = [];
          var m = {};
          var x = function e(t, r) {
            if (y[r] == null) {
              y[r] = [];
            }
            var n = y[r].length;
            y[r].push(t);
            Gc(t, { index: n, depth: r });
          };
          var E = function e(t, r) {
            var n = zc(t),
              a = n.depth,
              i = n.index;
            y[a][i] = null;
            x(t, r);
          };
          i.bfs({
            roots: u,
            directed: t.directed,
            visit: function e(t, r, n, a, i) {
              var o = t[0];
              var s = o.id();
              x(o, i);
              m[s] = true;
            },
          });
          var T = [];
          for (var _ = 0; _ < a.length; _++) {
            var D = a[_];
            if (m[D.id()]) {
              continue;
            } else {
              T.push(D);
            }
          }
          var C = function e(t) {
            var r = y[t];
            for (var n = 0; n < r.length; n++) {
              var a = r[n];
              if (a == null) {
                r.splice(n, 1);
                n--;
                continue;
              }
              Gc(a, { depth: t, index: n });
            }
          };
          var A = function e() {
            for (var t = 0; t < y.length; t++) {
              C(t);
            }
          };
          var L = function e(r, a) {
            var i = zc(r);
            var o = r.incomers().filter(function (e) {
              return e.isNode() && n.has(e);
            });
            var s = -1;
            var l = r.id();
            for (var u = 0; u < o.length; u++) {
              var c = o[u];
              var v = zc(c);
              s = Math.max(s, v.depth);
            }
            if (i.depth <= s) {
              if (!t.acyclic && a[l]) {
                return null;
              }
              var f = s + 1;
              E(r, f);
              a[l] = f;
              return true;
            }
            return false;
          };
          if (o && s) {
            var I = [];
            var S = {};
            var k = function e(t) {
              return I.push(t);
            };
            var O = function e() {
              return I.shift();
            };
            a.forEach(function (e) {
              return I.push(e);
            });
            while (I.length > 0) {
              var M = O();
              var P = L(M, S);
              if (P) {
                M.outgoers()
                  .filter(function (e) {
                    return e.isNode() && n.has(e);
                  })
                  .forEach(k);
              } else if (P === null) {
                kt(
                  "Detected double maximal shift for node `" +
                    M.id() +
                    "`.  Bailing maximal adjustment due to cycle.  Use `options.maximal: true` only on DAGs."
                );
                break;
              }
            }
          }
          A();
          var R = 0;
          if (t.avoidOverlap) {
            for (var B = 0; B < a.length; B++) {
              var F = a[B];
              var z = F.layoutDimensions(t);
              var G = z.w;
              var Y = z.h;
              R = Math.max(R, G, Y);
            }
          }
          var X = {};
          var V = function e(t) {
            if (X[t.id()]) {
              return X[t.id()];
            }
            var r = zc(t).depth;
            var n = t.neighborhood();
            var i = 0;
            var o = 0;
            for (var s = 0; s < n.length; s++) {
              var l = n[s];
              if (l.isEdge() || l.isParent() || !a.has(l)) {
                continue;
              }
              var u = zc(l);
              if (u == null) {
                continue;
              }
              var c = u.index;
              var v = u.depth;
              if (c == null || v == null) {
                continue;
              }
              var f = y[v].length;
              if (v < r) {
                i += c / f;
                o++;
              }
            }
            o = Math.max(1, o);
            i = i / o;
            if (o === 0) {
              i = 0;
            }
            X[t.id()] = i;
            return i;
          };
          var U = function e(t, r) {
            var n = V(t);
            var a = V(r);
            var i = n - a;
            if (i === 0) {
              return K(t.id(), r.id());
            } else {
              return i;
            }
          };
          if (t.depthSort !== undefined) {
            U = t.depthSort;
          }
          for (var j = 0; j < y.length; j++) {
            y[j].sort(U);
            C(j);
          }
          var H = [];
          for (var q = 0; q < T.length; q++) {
            H.push(T[q]);
          }
          y.unshift(H);
          A();
          var W = 0;
          for (var $ = 0; $ < y.length; $++) {
            W = Math.max(y[$].length, W);
          }
          var Z = { x: l.x1 + l.w / 2, y: l.x1 + l.h / 2 };
          var Q = y.reduce(function (e, t) {
            return Math.max(e, t.length);
          }, 0);
          var J = function e(r) {
            var n = zc(r),
              a = n.depth,
              i = n.index;
            var o = y[a].length;
            var s = Math.max(l.w / ((t.grid ? Q : o) + 1), R);
            var u = Math.max(l.h / (y.length + 1), R);
            var c = Math.min(l.w / 2 / y.length, l.h / 2 / y.length);
            c = Math.max(c, R);
            if (!t.circle) {
              var v = { x: Z.x + (i + 1 - (o + 1) / 2) * s, y: (a + 1) * u };
              return v;
            } else {
              var f = c * a + c - (y.length > 0 && y[0].length <= 3 ? c / 2 : 0);
              var h = ((2 * Math.PI) / y[a].length) * i;
              if (a === 0 && y[0].length === 1) {
                f = 1;
              }
              return { x: Z.x + f * Math.cos(h), y: Z.y + f * Math.sin(h) };
            }
          };
          n.nodes().layoutPositions(this, t, J);
          return this;
        };
        var Xc = {
          fit: true,
          padding: 30,
          boundingBox: undefined,
          avoidOverlap: true,
          nodeDimensionsIncludeLabels: false,
          spacingFactor: undefined,
          radius: undefined,
          startAngle: (3 / 2) * Math.PI,
          sweep: undefined,
          clockwise: true,
          sort: undefined,
          animate: false,
          animationDuration: 500,
          animationEasing: undefined,
          animateFilter: function e(t, r) {
            return true;
          },
          ready: undefined,
          stop: undefined,
          transform: function e(t, r) {
            return r;
          },
        };
        function Vc(e) {
          this.options = Q({}, Xc, e);
        }
        Vc.prototype.run = function () {
          var e = this.options;
          var t = e;
          var r = e.cy;
          var n = t.eles;
          var a = t.counterclockwise !== undefined ? !t.counterclockwise : t.clockwise;
          var i = n.nodes().not(":parent");
          if (t.sort) {
            i = i.sort(t.sort);
          }
          var o = Or(t.boundingBox ? t.boundingBox : { x1: 0, y1: 0, w: r.width(), h: r.height() });
          var s = { x: o.x1 + o.w / 2, y: o.y1 + o.h / 2 };
          var l = t.sweep === undefined ? 2 * Math.PI - (2 * Math.PI) / i.length : t.sweep;
          var u = l / Math.max(1, i.length - 1);
          var c;
          var v = 0;
          for (var f = 0; f < i.length; f++) {
            var h = i[f];
            var d = h.layoutDimensions(t);
            var p = d.w;
            var g = d.h;
            v = Math.max(v, p, g);
          }
          if (_(t.radius)) {
            c = t.radius;
          } else if (i.length <= 1) {
            c = 0;
          } else {
            c = Math.min(o.h, o.w) / 2 - v;
          }
          if (i.length > 1 && t.avoidOverlap) {
            v *= 1.75;
            var y = Math.cos(u) - Math.cos(0);
            var m = Math.sin(u) - Math.sin(0);
            var b = Math.sqrt((v * v) / (y * y + m * m));
            c = Math.max(b, c);
          }
          var x = function e(r, n) {
            var i = t.startAngle + n * u * (a ? 1 : -1);
            var o = c * Math.cos(i);
            var l = c * Math.sin(i);
            var v = { x: s.x + o, y: s.y + l };
            return v;
          };
          n.nodes().layoutPositions(this, t, x);
          return this;
        };
        var Uc = {
          fit: true,
          padding: 30,
          startAngle: (3 / 2) * Math.PI,
          sweep: undefined,
          clockwise: true,
          equidistant: false,
          minNodeSpacing: 10,
          boundingBox: undefined,
          avoidOverlap: true,
          nodeDimensionsIncludeLabels: false,
          height: undefined,
          width: undefined,
          spacingFactor: undefined,
          concentric: function e(t) {
            return t.degree();
          },
          levelWidth: function e(t) {
            return t.maxDegree() / 4;
          },
          animate: false,
          animationDuration: 500,
          animationEasing: undefined,
          animateFilter: function e(t, r) {
            return true;
          },
          ready: undefined,
          stop: undefined,
          transform: function e(t, r) {
            return r;
          },
        };
        function jc(e) {
          this.options = Q({}, Uc, e);
        }
        jc.prototype.run = function () {
          var e = this.options;
          var t = e;
          var r = t.counterclockwise !== undefined ? !t.counterclockwise : t.clockwise;
          var n = e.cy;
          var a = t.eles;
          var i = a.nodes().not(":parent");
          var o = Or(t.boundingBox ? t.boundingBox : { x1: 0, y1: 0, w: n.width(), h: n.height() });
          var s = { x: o.x1 + o.w / 2, y: o.y1 + o.h / 2 };
          var l = [];
          var u = 0;
          for (var c = 0; c < i.length; c++) {
            var v = i[c];
            var f = void 0;
            f = t.concentric(v);
            l.push({ value: f, node: v });
            v._private.scratch.concentric = f;
          }
          i.updateStyle();
          for (var h = 0; h < i.length; h++) {
            var d = i[h];
            var p = d.layoutDimensions(t);
            u = Math.max(u, p.w, p.h);
          }
          l.sort(function (e, t) {
            return t.value - e.value;
          });
          var g = t.levelWidth(i);
          var y = [[]];
          var m = y[0];
          for (var b = 0; b < l.length; b++) {
            var x = l[b];
            if (m.length > 0) {
              var w = Math.abs(m[0].value - x.value);
              if (w >= g) {
                m = [];
                y.push(m);
              }
            }
            m.push(x);
          }
          var E = u + t.minNodeSpacing;
          if (!t.avoidOverlap) {
            var T = y.length > 0 && y[0].length > 1;
            var _ = Math.min(o.w, o.h) / 2 - E;
            var D = _ / (y.length + T ? 1 : 0);
            E = Math.min(E, D);
          }
          var C = 0;
          for (var N = 0; N < y.length; N++) {
            var A = y[N];
            var L = t.sweep === undefined ? 2 * Math.PI - (2 * Math.PI) / A.length : t.sweep;
            var I = (A.dTheta = L / Math.max(1, A.length - 1));
            if (A.length > 1 && t.avoidOverlap) {
              var S = Math.cos(I) - Math.cos(0);
              var k = Math.sin(I) - Math.sin(0);
              var O = Math.sqrt((E * E) / (S * S + k * k));
              C = Math.max(O, C);
            }
            A.r = C;
            C += E;
          }
          if (t.equidistant) {
            var M = 0;
            var P = 0;
            for (var R = 0; R < y.length; R++) {
              var B = y[R];
              var F = B.r - P;
              M = Math.max(M, F);
            }
            P = 0;
            for (var z = 0; z < y.length; z++) {
              var G = y[z];
              if (z === 0) {
                P = G.r;
              }
              G.r = P;
              P += M;
            }
          }
          var Y = {};
          for (var X = 0; X < y.length; X++) {
            var V = y[X];
            var U = V.dTheta;
            var j = V.r;
            for (var H = 0; H < V.length; H++) {
              var q = V[H];
              var W = t.startAngle + (r ? 1 : -1) * U * H;
              var $ = { x: s.x + j * Math.cos(W), y: s.y + j * Math.sin(W) };
              Y[q.node.id()] = $;
            }
          }
          a.nodes().layoutPositions(this, t, function (e) {
            var t = e.id();
            return Y[t];
          });
          return this;
        };
        var Hc;
        var qc = {
          ready: function e() {},
          stop: function e() {},
          animate: true,
          animationEasing: undefined,
          animationDuration: undefined,
          animateFilter: function e(t, r) {
            return true;
          },
          animationThreshold: 250,
          refresh: 20,
          fit: true,
          padding: 30,
          boundingBox: undefined,
          nodeDimensionsIncludeLabels: false,
          randomize: false,
          componentSpacing: 40,
          nodeRepulsion: function e(t) {
            return 2048;
          },
          nodeOverlap: 4,
          idealEdgeLength: function e(t) {
            return 32;
          },
          edgeElasticity: function e(t) {
            return 32;
          },
          nestingFactor: 1.2,
          gravity: 1,
          numIter: 1e3,
          initialTemp: 1e3,
          coolingFactor: 0.99,
          minTemp: 1,
        };
        function Wc(e) {
          this.options = Q({}, qc, e);
          this.options.layout = this;
        }
        Wc.prototype.run = function () {
          var e = this.options;
          var t = e.cy;
          var r = this;
          r.stopped = false;
          if (e.animate === true || e.animate === false) {
            r.emit({ type: "layoutstart", layout: r });
          }
          if (true === e.debug) {
            Hc = true;
          } else {
            Hc = false;
          }
          var n = $c(t, r, e);
          if (Hc) {
            Qc(n);
          }
          if (e.randomize) {
            Jc(n);
          }
          var a = lt();
          var i = function r() {
            tv(n, t, e);
            if (true === e.fit) {
              t.fit(e.padding);
            }
          };
          var o = function t(a) {
            if (r.stopped || a >= e.numIter) {
              return false;
            }
            rv(n, e);
            n.temperature = n.temperature * e.coolingFactor;
            if (n.temperature < e.minTemp) {
              return false;
            }
            return true;
          };
          var s = function t() {
            if (e.animate === true || e.animate === false) {
              i();
              r.one("layoutstop", e.stop);
              r.emit({ type: "layoutstop", layout: r });
            } else {
              var a = e.eles.nodes();
              var o = ev(n, e, a);
              a.layoutPositions(r, e, o);
            }
          };
          var l = 0;
          var u = true;
          if (e.animate === true) {
            var c = function t() {
              var r = 0;
              while (u && r < e.refresh) {
                u = o(l);
                l++;
                r++;
              }
              if (!u) {
                dv(n, e);
                s();
              } else {
                var c = lt();
                if (c - a >= e.animationThreshold) {
                  i();
                }
                st(t);
              }
            };
            c();
          } else {
            while (u) {
              u = o(l);
              l++;
            }
            dv(n, e);
            s();
          }
          return this;
        };
        Wc.prototype.stop = function () {
          this.stopped = true;
          if (this.thread) {
            this.thread.stop();
          }
          this.emit("layoutstop");
          return this;
        };
        Wc.prototype.destroy = function () {
          if (this.thread) {
            this.thread.stop();
          }
          return this;
        };
        var $c = function e(t, r, n) {
          var a = n.eles.edges();
          var i = n.eles.nodes();
          var o = Or(n.boundingBox ? n.boundingBox : { x1: 0, y1: 0, w: t.width(), h: t.height() });
          var s = {
            isCompound: t.hasCompoundNodes(),
            layoutNodes: [],
            idToIndex: {},
            nodeSize: i.size(),
            graphSet: [],
            indexToGraph: [],
            layoutEdges: [],
            edgeSize: a.size(),
            temperature: n.initialTemp,
            clientWidth: o.w,
            clientHeight: o.h,
            boundingBox: o,
          };
          var l = n.eles.components();
          var u = {};
          for (var c = 0; c < l.length; c++) {
            var v = l[c];
            for (var f = 0; f < v.length; f++) {
              var h = v[f];
              u[h.id()] = c;
            }
          }
          for (var c = 0; c < s.nodeSize; c++) {
            var d = i[c];
            var p = d.layoutDimensions(n);
            var g = {};
            g.isLocked = d.locked();
            g.id = d.data("id");
            g.parentId = d.data("parent");
            g.cmptId = u[d.id()];
            g.children = [];
            g.positionX = d.position("x");
            g.positionY = d.position("y");
            g.offsetX = 0;
            g.offsetY = 0;
            g.height = p.w;
            g.width = p.h;
            g.maxX = g.positionX + g.width / 2;
            g.minX = g.positionX - g.width / 2;
            g.maxY = g.positionY + g.height / 2;
            g.minY = g.positionY - g.height / 2;
            g.padLeft = parseFloat(d.style("padding"));
            g.padRight = parseFloat(d.style("padding"));
            g.padTop = parseFloat(d.style("padding"));
            g.padBottom = parseFloat(d.style("padding"));
            g.nodeRepulsion = x(n.nodeRepulsion) ? n.nodeRepulsion(d) : n.nodeRepulsion;
            s.layoutNodes.push(g);
            s.idToIndex[g.id] = c;
          }
          var y = [];
          var m = 0;
          var b = -1;
          var w = [];
          for (var c = 0; c < s.nodeSize; c++) {
            var d = s.layoutNodes[c];
            var E = d.parentId;
            if (null != E) {
              s.layoutNodes[s.idToIndex[E]].children.push(d.id);
            } else {
              y[++b] = d.id;
              w.push(d.id);
            }
          }
          s.graphSet.push(w);
          while (m <= b) {
            var T = y[m++];
            var _ = s.idToIndex[T];
            var h = s.layoutNodes[_];
            var D = h.children;
            if (D.length > 0) {
              s.graphSet.push(D);
              for (var c = 0; c < D.length; c++) {
                y[++b] = D[c];
              }
            }
          }
          for (var c = 0; c < s.graphSet.length; c++) {
            var C = s.graphSet[c];
            for (var f = 0; f < C.length; f++) {
              var N = s.idToIndex[C[f]];
              s.indexToGraph[N] = c;
            }
          }
          for (var c = 0; c < s.edgeSize; c++) {
            var A = a[c];
            var L = {};
            L.id = A.data("id");
            L.sourceId = A.data("source");
            L.targetId = A.data("target");
            var I = x(n.idealEdgeLength) ? n.idealEdgeLength(A) : n.idealEdgeLength;
            var S = x(n.edgeElasticity) ? n.edgeElasticity(A) : n.edgeElasticity;
            var k = s.idToIndex[L.sourceId];
            var O = s.idToIndex[L.targetId];
            var M = s.indexToGraph[k];
            var P = s.indexToGraph[O];
            if (M != P) {
              var R = Kc(L.sourceId, L.targetId, s);
              var B = s.graphSet[R];
              var F = 0;
              var g = s.layoutNodes[k];
              while (-1 === B.indexOf(g.id)) {
                g = s.layoutNodes[s.idToIndex[g.parentId]];
                F++;
              }
              g = s.layoutNodes[O];
              while (-1 === B.indexOf(g.id)) {
                g = s.layoutNodes[s.idToIndex[g.parentId]];
                F++;
              }
              I *= F * n.nestingFactor;
            }
            L.idealLength = I;
            L.elasticity = S;
            s.layoutEdges.push(L);
          }
          return s;
        };
        var Kc = function e(t, r, n) {
          var a = Zc(t, r, 0, n);
          if (2 > a.count) {
            return 0;
          } else {
            return a.graph;
          }
        };
        var Zc = function e(t, r, n, a) {
          var i = a.graphSet[n];
          if (-1 < i.indexOf(t) && -1 < i.indexOf(r)) {
            return { count: 2, graph: n };
          }
          var o = 0;
          for (var s = 0; s < i.length; s++) {
            var l = i[s];
            var u = a.idToIndex[l];
            var c = a.layoutNodes[u].children;
            if (0 === c.length) {
              continue;
            }
            var v = a.indexToGraph[a.idToIndex[c[0]]];
            var f = e(t, r, v, a);
            if (0 === f.count) {
              continue;
            } else if (1 === f.count) {
              o++;
              if (2 === o) {
                break;
              }
            } else {
              return f;
            }
          }
          return { count: o, graph: n };
        };
        var Qc;
        var Jc = function e(t, r) {
          var n = t.clientWidth;
          var a = t.clientHeight;
          for (var i = 0; i < t.nodeSize; i++) {
            var o = t.layoutNodes[i];
            if (0 === o.children.length && !o.isLocked) {
              o.positionX = Math.random() * n;
              o.positionY = Math.random() * a;
            }
          }
        };
        var ev = function e(t, r, n) {
          var a = t.boundingBox;
          var i = { x1: Infinity, x2: -Infinity, y1: Infinity, y2: -Infinity };
          if (r.boundingBox) {
            n.forEach(function (e) {
              var r = t.layoutNodes[t.idToIndex[e.data("id")]];
              i.x1 = Math.min(i.x1, r.positionX);
              i.x2 = Math.max(i.x2, r.positionX);
              i.y1 = Math.min(i.y1, r.positionY);
              i.y2 = Math.max(i.y2, r.positionY);
            });
            i.w = i.x2 - i.x1;
            i.h = i.y2 - i.y1;
          }
          return function (e, n) {
            var o = t.layoutNodes[t.idToIndex[e.data("id")]];
            if (r.boundingBox) {
              var s = (o.positionX - i.x1) / i.w;
              var l = (o.positionY - i.y1) / i.h;
              return { x: a.x1 + s * a.w, y: a.y1 + l * a.h };
            } else {
              return { x: o.positionX, y: o.positionY };
            }
          };
        };
        var tv = function e(t, r, n) {
          var a = n.layout;
          var i = n.eles.nodes();
          var o = ev(t, n, i);
          i.positions(o);
          if (true !== t.ready) {
            t.ready = true;
            a.one("layoutready", n.ready);
            a.emit({ type: "layoutready", layout: this });
          }
        };
        var rv = function e(t, r, n) {
          nv(t, r);
          lv(t);
          uv(t, r);
          cv(t);
          vv(t);
        };
        var nv = function e(t, r) {
          for (var n = 0; n < t.graphSet.length; n++) {
            var a = t.graphSet[n];
            var i = a.length;
            for (var o = 0; o < i; o++) {
              var s = t.layoutNodes[t.idToIndex[a[o]]];
              for (var l = o + 1; l < i; l++) {
                var u = t.layoutNodes[t.idToIndex[a[l]]];
                iv(s, u, t, r);
              }
            }
          }
        };
        var av = function e(t) {
          return -t + 2 * t * Math.random();
        };
        var iv = function e(t, r, n, a) {
          var i = t.cmptId;
          var o = r.cmptId;
          if (i !== o && !n.isCompound) {
            return;
          }
          var s = r.positionX - t.positionX;
          var l = r.positionY - t.positionY;
          var u = 1;
          if (0 === s && 0 === l) {
            s = av(u);
            l = av(u);
          }
          var c = ov(t, r, s, l);
          if (c > 0) {
            var v = a.nodeOverlap * c;
            var f = Math.sqrt(s * s + l * l);
            var h = (v * s) / f;
            var d = (v * l) / f;
          } else {
            var p = sv(t, s, l);
            var g = sv(r, -1 * s, -1 * l);
            var y = g.x - p.x;
            var m = g.y - p.y;
            var b = y * y + m * m;
            var f = Math.sqrt(b);
            var v = (t.nodeRepulsion + r.nodeRepulsion) / b;
            var h = (v * y) / f;
            var d = (v * m) / f;
          }
          if (!t.isLocked) {
            t.offsetX -= h;
            t.offsetY -= d;
          }
          if (!r.isLocked) {
            r.offsetX += h;
            r.offsetY += d;
          }
          return;
        };
        var ov = function e(t, r, n, a) {
          if (n > 0) {
            var i = t.maxX - r.minX;
          } else {
            var i = r.maxX - t.minX;
          }
          if (a > 0) {
            var o = t.maxY - r.minY;
          } else {
            var o = r.maxY - t.minY;
          }
          if (i >= 0 && o >= 0) {
            return Math.sqrt(i * i + o * o);
          } else {
            return 0;
          }
        };
        var sv = function e(t, r, n) {
          var a = t.positionX;
          var i = t.positionY;
          var o = t.height || 1;
          var s = t.width || 1;
          var l = n / r;
          var u = o / s;
          var c = {};
          if (0 === r && 0 < n) {
            c.x = a;
            c.y = i + o / 2;
            return c;
          }
          if (0 === r && 0 > n) {
            c.x = a;
            c.y = i + o / 2;
            return c;
          }
          if (0 < r && -1 * u <= l && l <= u) {
            c.x = a + s / 2;
            c.y = i + (s * n) / 2 / r;
            return c;
          }
          if (0 > r && -1 * u <= l && l <= u) {
            c.x = a - s / 2;
            c.y = i - (s * n) / 2 / r;
            return c;
          }
          if (0 < n && (l <= -1 * u || l >= u)) {
            c.x = a + (o * r) / 2 / n;
            c.y = i + o / 2;
            return c;
          }
          if (0 > n && (l <= -1 * u || l >= u)) {
            c.x = a - (o * r) / 2 / n;
            c.y = i - o / 2;
            return c;
          }
          return c;
        };
        var lv = function e(t, r) {
          for (var n = 0; n < t.edgeSize; n++) {
            var a = t.layoutEdges[n];
            var i = t.idToIndex[a.sourceId];
            var o = t.layoutNodes[i];
            var s = t.idToIndex[a.targetId];
            var l = t.layoutNodes[s];
            var u = l.positionX - o.positionX;
            var c = l.positionY - o.positionY;
            if (0 === u && 0 === c) {
              continue;
            }
            var v = sv(o, u, c);
            var f = sv(l, -1 * u, -1 * c);
            var h = f.x - v.x;
            var d = f.y - v.y;
            var p = Math.sqrt(h * h + d * d);
            var g = Math.pow(a.idealLength - p, 2) / a.elasticity;
            if (0 !== p) {
              var y = (g * h) / p;
              var m = (g * d) / p;
            } else {
              var y = 0;
              var m = 0;
            }
            if (!o.isLocked) {
              o.offsetX += y;
              o.offsetY += m;
            }
            if (!l.isLocked) {
              l.offsetX -= y;
              l.offsetY -= m;
            }
          }
        };
        var uv = function e(t, r) {
          if (r.gravity === 0) {
            return;
          }
          var n = 1;
          for (var a = 0; a < t.graphSet.length; a++) {
            var i = t.graphSet[a];
            var o = i.length;
            if (0 === a) {
              var s = t.clientHeight / 2;
              var l = t.clientWidth / 2;
            } else {
              var u = t.layoutNodes[t.idToIndex[i[0]]];
              var c = t.layoutNodes[t.idToIndex[u.parentId]];
              var s = c.positionX;
              var l = c.positionY;
            }
            for (var v = 0; v < o; v++) {
              var f = t.layoutNodes[t.idToIndex[i[v]]];
              if (f.isLocked) {
                continue;
              }
              var h = s - f.positionX;
              var d = l - f.positionY;
              var p = Math.sqrt(h * h + d * d);
              if (p > n) {
                var g = (r.gravity * h) / p;
                var y = (r.gravity * d) / p;
                f.offsetX += g;
                f.offsetY += y;
              }
            }
          }
        };
        var cv = function e(t, r) {
          var n = [];
          var a = 0;
          var i = -1;
          n.push.apply(n, t.graphSet[0]);
          i += t.graphSet[0].length;
          while (a <= i) {
            var o = n[a++];
            var s = t.idToIndex[o];
            var l = t.layoutNodes[s];
            var u = l.children;
            if (0 < u.length && !l.isLocked) {
              var c = l.offsetX;
              var v = l.offsetY;
              for (var f = 0; f < u.length; f++) {
                var h = t.layoutNodes[t.idToIndex[u[f]]];
                h.offsetX += c;
                h.offsetY += v;
                n[++i] = u[f];
              }
              l.offsetX = 0;
              l.offsetY = 0;
            }
          }
        };
        var vv = function e(t, r) {
          for (var n = 0; n < t.nodeSize; n++) {
            var a = t.layoutNodes[n];
            if (0 < a.children.length) {
              a.maxX = undefined;
              a.minX = undefined;
              a.maxY = undefined;
              a.minY = undefined;
            }
          }
          for (var n = 0; n < t.nodeSize; n++) {
            var a = t.layoutNodes[n];
            if (0 < a.children.length || a.isLocked) {
              continue;
            }
            var i = fv(a.offsetX, a.offsetY, t.temperature);
            a.positionX += i.x;
            a.positionY += i.y;
            a.offsetX = 0;
            a.offsetY = 0;
            a.minX = a.positionX - a.width;
            a.maxX = a.positionX + a.width;
            a.minY = a.positionY - a.height;
            a.maxY = a.positionY + a.height;
            hv(a, t);
          }
          for (var n = 0; n < t.nodeSize; n++) {
            var a = t.layoutNodes[n];
            if (0 < a.children.length && !a.isLocked) {
              a.positionX = (a.maxX + a.minX) / 2;
              a.positionY = (a.maxY + a.minY) / 2;
              a.width = a.maxX - a.minX;
              a.height = a.maxY - a.minY;
            }
          }
        };
        var fv = function e(t, r, n) {
          var a = Math.sqrt(t * t + r * r);
          if (a > n) {
            var i = { x: (n * t) / a, y: (n * r) / a };
          } else {
            var i = { x: t, y: r };
          }
          return i;
        };
        var hv = function e(t, r) {
          var n = t.parentId;
          if (null == n) {
            return;
          }
          var a = r.layoutNodes[r.idToIndex[n]];
          var i = false;
          if (null == a.maxX || t.maxX + a.padRight > a.maxX) {
            a.maxX = t.maxX + a.padRight;
            i = true;
          }
          if (null == a.minX || t.minX - a.padLeft < a.minX) {
            a.minX = t.minX - a.padLeft;
            i = true;
          }
          if (null == a.maxY || t.maxY + a.padBottom > a.maxY) {
            a.maxY = t.maxY + a.padBottom;
            i = true;
          }
          if (null == a.minY || t.minY - a.padTop < a.minY) {
            a.minY = t.minY - a.padTop;
            i = true;
          }
          if (i) {
            return e(a, r);
          }
          return;
        };
        var dv = function e(t, r) {
          var n = t.layoutNodes;
          var a = [];
          for (var i = 0; i < n.length; i++) {
            var o = n[i];
            var s = o.cmptId;
            var l = (a[s] = a[s] || []);
            l.push(o);
          }
          var u = 0;
          for (var i = 0; i < a.length; i++) {
            var c = a[i];
            if (!c) {
              continue;
            }
            c.x1 = Infinity;
            c.x2 = -Infinity;
            c.y1 = Infinity;
            c.y2 = -Infinity;
            for (var v = 0; v < c.length; v++) {
              var f = c[v];
              c.x1 = Math.min(c.x1, f.positionX - f.width / 2);
              c.x2 = Math.max(c.x2, f.positionX + f.width / 2);
              c.y1 = Math.min(c.y1, f.positionY - f.height / 2);
              c.y2 = Math.max(c.y2, f.positionY + f.height / 2);
            }
            c.w = c.x2 - c.x1;
            c.h = c.y2 - c.y1;
            u += c.w * c.h;
          }
          a.sort(function (e, t) {
            return t.w * t.h - e.w * e.h;
          });
          var h = 0;
          var d = 0;
          var p = 0;
          var g = 0;
          var y = (Math.sqrt(u) * t.clientWidth) / t.clientHeight;
          for (var i = 0; i < a.length; i++) {
            var c = a[i];
            if (!c) {
              continue;
            }
            for (var v = 0; v < c.length; v++) {
              var f = c[v];
              if (!f.isLocked) {
                f.positionX += h - c.x1;
                f.positionY += d - c.y1;
              }
            }
            h += c.w + r.componentSpacing;
            p += c.w + r.componentSpacing;
            g = Math.max(g, c.h);
            if (p > y) {
              d += g + r.componentSpacing;
              h = 0;
              p = 0;
              g = 0;
            }
          }
        };
        var pv = {
          fit: true,
          padding: 30,
          boundingBox: undefined,
          avoidOverlap: true,
          avoidOverlapPadding: 10,
          nodeDimensionsIncludeLabels: false,
          spacingFactor: undefined,
          condense: false,
          rows: undefined,
          cols: undefined,
          position: function e(t) {},
          sort: undefined,
          animate: false,
          animationDuration: 500,
          animationEasing: undefined,
          animateFilter: function e(t, r) {
            return true;
          },
          ready: undefined,
          stop: undefined,
          transform: function e(t, r) {
            return r;
          },
        };
        function gv(e) {
          this.options = Q({}, pv, e);
        }
        gv.prototype.run = function () {
          var e = this.options;
          var t = e;
          var r = e.cy;
          var n = t.eles;
          var a = n.nodes().not(":parent");
          if (t.sort) {
            a = a.sort(t.sort);
          }
          var i = Or(t.boundingBox ? t.boundingBox : { x1: 0, y1: 0, w: r.width(), h: r.height() });
          if (i.h === 0 || i.w === 0) {
            n.nodes().layoutPositions(this, t, function (e) {
              return { x: i.x1, y: i.y1 };
            });
          } else {
            var o = a.size();
            var s = Math.sqrt((o * i.h) / i.w);
            var l = Math.round(s);
            var u = Math.round((i.w / i.h) * s);
            var c = function e(t) {
              if (t == null) {
                return Math.min(l, u);
              } else {
                var r = Math.min(l, u);
                if (r == l) {
                  l = t;
                } else {
                  u = t;
                }
              }
            };
            var v = function e(t) {
              if (t == null) {
                return Math.max(l, u);
              } else {
                var r = Math.max(l, u);
                if (r == l) {
                  l = t;
                } else {
                  u = t;
                }
              }
            };
            var f = t.rows;
            var h = t.cols != null ? t.cols : t.columns;
            if (f != null && h != null) {
              l = f;
              u = h;
            } else if (f != null && h == null) {
              l = f;
              u = Math.ceil(o / l);
            } else if (f == null && h != null) {
              u = h;
              l = Math.ceil(o / u);
            } else if (u * l > o) {
              var d = c();
              var p = v();
              if ((d - 1) * p >= o) {
                c(d - 1);
              } else if ((p - 1) * d >= o) {
                v(p - 1);
              }
            } else {
              while (u * l < o) {
                var g = c();
                var y = v();
                if ((y + 1) * g >= o) {
                  v(y + 1);
                } else {
                  c(g + 1);
                }
              }
            }
            var m = i.w / u;
            var b = i.h / l;
            if (t.condense) {
              m = 0;
              b = 0;
            }
            if (t.avoidOverlap) {
              for (var x = 0; x < a.length; x++) {
                var w = a[x];
                var E = w._private.position;
                if (E.x == null || E.y == null) {
                  E.x = 0;
                  E.y = 0;
                }
                var T = w.layoutDimensions(t);
                var _ = t.avoidOverlapPadding;
                var D = T.w + _;
                var C = T.h + _;
                m = Math.max(m, D);
                b = Math.max(b, C);
              }
            }
            var N = {};
            var A = function e(t, r) {
              return N["c-" + t + "-" + r] ? true : false;
            };
            var L = function e(t, r) {
              N["c-" + t + "-" + r] = true;
            };
            var I = 0;
            var S = 0;
            var k = function e() {
              S++;
              if (S >= u) {
                S = 0;
                I++;
              }
            };
            var O = {};
            for (var M = 0; M < a.length; M++) {
              var P = a[M];
              var R = t.position(P);
              if (R && (R.row !== undefined || R.col !== undefined)) {
                var B = { row: R.row, col: R.col };
                if (B.col === undefined) {
                  B.col = 0;
                  while (A(B.row, B.col)) {
                    B.col++;
                  }
                } else if (B.row === undefined) {
                  B.row = 0;
                  while (A(B.row, B.col)) {
                    B.row++;
                  }
                }
                O[P.id()] = B;
                L(B.row, B.col);
              }
            }
            var F = function e(t, r) {
              var n, a;
              if (t.locked() || t.isParent()) {
                return false;
              }
              var o = O[t.id()];
              if (o) {
                n = o.col * m + m / 2 + i.x1;
                a = o.row * b + b / 2 + i.y1;
              } else {
                while (A(I, S)) {
                  k();
                }
                n = S * m + m / 2 + i.x1;
                a = I * b + b / 2 + i.y1;
                L(I, S);
                k();
              }
              return { x: n, y: a };
            };
            a.layoutPositions(this, t, F);
          }
          return this;
        };
        var yv = { ready: function e() {}, stop: function e() {} };
        function mv(e) {
          this.options = Q({}, yv, e);
        }
        mv.prototype.run = function () {
          var e = this.options;
          var t = e.eles;
          var r = this;
          e.cy;
          r.emit("layoutstart");
          t.nodes().positions(function () {
            return { x: 0, y: 0 };
          });
          r.one("layoutready", e.ready);
          r.emit("layoutready");
          r.one("layoutstop", e.stop);
          r.emit("layoutstop");
          return this;
        };
        mv.prototype.stop = function () {
          return this;
        };
        var bv = {
          positions: undefined,
          zoom: undefined,
          pan: undefined,
          fit: true,
          padding: 30,
          animate: false,
          animationDuration: 500,
          animationEasing: undefined,
          animateFilter: function e(t, r) {
            return true;
          },
          ready: undefined,
          stop: undefined,
          transform: function e(t, r) {
            return r;
          },
        };
        function xv(e) {
          this.options = Q({}, bv, e);
        }
        xv.prototype.run = function () {
          var e = this.options;
          var t = e.eles;
          var r = t.nodes();
          var n = x(e.positions);
          function a(t) {
            if (e.positions == null) {
              return dr(t.position());
            }
            if (n) {
              return e.positions(t);
            }
            var r = e.positions[t._private.data.id];
            if (r == null) {
              return null;
            }
            return r;
          }
          r.layoutPositions(this, e, function (e, t) {
            var r = a(e);
            if (e.locked() || r == null) {
              return false;
            }
            return r;
          });
          return this;
        };
        var wv = {
          fit: true,
          padding: 30,
          boundingBox: undefined,
          animate: false,
          animationDuration: 500,
          animationEasing: undefined,
          animateFilter: function e(t, r) {
            return true;
          },
          ready: undefined,
          stop: undefined,
          transform: function e(t, r) {
            return r;
          },
        };
        function Ev(e) {
          this.options = Q({}, wv, e);
        }
        Ev.prototype.run = function () {
          var e = this.options;
          var t = e.cy;
          var r = e.eles;
          var n = Or(e.boundingBox ? e.boundingBox : { x1: 0, y1: 0, w: t.width(), h: t.height() });
          var a = function e(t, r) {
            return { x: n.x1 + Math.round(Math.random() * n.w), y: n.y1 + Math.round(Math.random() * n.h) };
          };
          r.nodes().layoutPositions(this, e, a);
          return this;
        };
        var Tv = [
          { name: "breadthfirst", impl: Yc },
          { name: "circle", impl: Vc },
          { name: "concentric", impl: jc },
          { name: "cose", impl: Wc },
          { name: "grid", impl: gv },
          { name: "null", impl: mv },
          { name: "preset", impl: xv },
          { name: "random", impl: Ev },
        ];
        function _v(e) {
          this.options = e;
          this.notifications = 0;
        }
        var Dv = function e() {};
        var Cv = function e() {
          throw new Error("A headless instance can not render images");
        };
        _v.prototype = {
          recalculateRenderedStyle: Dv,
          notify: function e() {
            this.notifications++;
          },
          init: Dv,
          isHeadless: function e() {
            return true;
          },
          png: Cv,
          jpg: Cv,
        };
        var Nv = {};
        Nv.arrowShapeWidth = 0.3;
        Nv.registerArrowShapes = function () {
          var e = (this.arrowShapes = {});
          var t = this;
          var r = function e(t, r, n, a, i, o, s) {
            var l = i.x - n / 2 - s;
            var u = i.x + n / 2 + s;
            var c = i.y - n / 2 - s;
            var v = i.y + n / 2 + s;
            var f = l <= t && t <= u && c <= r && r <= v;
            return f;
          };
          var n = function e(t, r, n, a, i) {
            var o = t * Math.cos(a) - r * Math.sin(a);
            var s = t * Math.sin(a) + r * Math.cos(a);
            var l = o * n;
            var u = s * n;
            var c = l + i.x;
            var v = u + i.y;
            return { x: c, y: v };
          };
          var a = function e(t, r, a, i) {
            var o = [];
            for (var s = 0; s < t.length; s += 2) {
              var l = t[s];
              var u = t[s + 1];
              o.push(n(l, u, r, a, i));
            }
            return o;
          };
          var i = function e(t) {
            var r = [];
            for (var n = 0; n < t.length; n++) {
              var a = t[n];
              r.push(a.x, a.y);
            }
            return r;
          };
          var o = function e(t) {
            return t.pstyle("width").pfValue * t.pstyle("arrow-scale").pfValue * 2;
          };
          var s = function n(s, l) {
            if (b(l)) {
              l = e[l];
            }
            e[s] = Q(
              {
                name: s,
                points: [-0.15, -0.3, 0.15, -0.3, 0.15, 0.3, -0.15, 0.3],
                collide: function e(t, r, n, o, s, l) {
                  var u = i(a(this.points, n + 2 * l, o, s));
                  var c = Qr(t, r, u);
                  return c;
                },
                roughCollide: r,
                draw: function e(r, n, i, o) {
                  var s = a(this.points, n, i, o);
                  t.arrowShapeImpl("polygon")(r, s);
                },
                spacing: function e(t) {
                  return 0;
                },
                gap: o,
              },
              l
            );
          };
          s("none", { collide: Nt, roughCollide: Nt, draw: Lt, spacing: At, gap: At });
          s("triangle", { points: [-0.15, -0.3, 0, 0, 0.15, -0.3] });
          s("arrow", "triangle");
          s("triangle-backcurve", {
            points: e["triangle"].points,
            controlPoint: [0, -0.15],
            roughCollide: r,
            draw: function e(r, i, o, s, l) {
              var u = a(this.points, i, o, s);
              var c = this.controlPoint;
              var v = n(c[0], c[1], i, o, s);
              t.arrowShapeImpl(this.name)(r, u, v);
            },
            gap: function e(t) {
              return o(t) * 0.8;
            },
          });
          s("triangle-tee", {
            points: [0, 0, 0.15, -0.3, -0.15, -0.3, 0, 0],
            pointsTee: [-0.15, -0.4, -0.15, -0.5, 0.15, -0.5, 0.15, -0.4],
            collide: function e(t, r, n, o, s, l, u) {
              var c = i(a(this.points, n + 2 * u, o, s));
              var v = i(a(this.pointsTee, n + 2 * u, o, s));
              var f = Qr(t, r, c) || Qr(t, r, v);
              return f;
            },
            draw: function e(r, n, i, o, s) {
              var l = a(this.points, n, i, o);
              var u = a(this.pointsTee, n, i, o);
              t.arrowShapeImpl(this.name)(r, l, u);
            },
          });
          s("circle-triangle", {
            radius: 0.15,
            pointsTr: [0, -0.15, 0.15, -0.45, -0.15, -0.45, 0, -0.15],
            collide: function e(t, r, n, o, s, l, u) {
              var c = s;
              var v = Math.pow(c.x - t, 2) + Math.pow(c.y - r, 2) <= Math.pow((n + 2 * u) * this.radius, 2);
              var f = i(a(this.points, n + 2 * u, o, s));
              return Qr(t, r, f) || v;
            },
            draw: function e(r, n, i, o, s) {
              var l = a(this.pointsTr, n, i, o);
              t.arrowShapeImpl(this.name)(r, l, o.x, o.y, this.radius * n);
            },
            spacing: function e(r) {
              return t.getArrowWidth(r.pstyle("width").pfValue, r.pstyle("arrow-scale").value) * this.radius;
            },
          });
          s("triangle-cross", {
            points: [0, 0, 0.15, -0.3, -0.15, -0.3, 0, 0],
            baseCrossLinePts: [-0.15, -0.4, -0.15, -0.4, 0.15, -0.4, 0.15, -0.4],
            crossLinePts: function e(t, r) {
              var n = this.baseCrossLinePts.slice();
              var a = r / t;
              var i = 3;
              var o = 5;
              n[i] = n[i] - a;
              n[o] = n[o] - a;
              return n;
            },
            collide: function e(t, r, n, o, s, l, u) {
              var c = i(a(this.points, n + 2 * u, o, s));
              var v = i(a(this.crossLinePts(n, l), n + 2 * u, o, s));
              var f = Qr(t, r, c) || Qr(t, r, v);
              return f;
            },
            draw: function e(r, n, i, o, s) {
              var l = a(this.points, n, i, o);
              var u = a(this.crossLinePts(n, s), n, i, o);
              t.arrowShapeImpl(this.name)(r, l, u);
            },
          });
          s("vee", {
            points: [-0.15, -0.3, 0, 0, 0.15, -0.3, 0, -0.15],
            gap: function e(t) {
              return o(t) * 0.525;
            },
          });
          s("circle", {
            radius: 0.15,
            collide: function e(t, r, n, a, i, o, s) {
              var l = i;
              var u = Math.pow(l.x - t, 2) + Math.pow(l.y - r, 2) <= Math.pow((n + 2 * s) * this.radius, 2);
              return u;
            },
            draw: function e(r, n, a, i, o) {
              t.arrowShapeImpl(this.name)(r, i.x, i.y, this.radius * n);
            },
            spacing: function e(r) {
              return t.getArrowWidth(r.pstyle("width").pfValue, r.pstyle("arrow-scale").value) * this.radius;
            },
          });
          s("tee", {
            points: [-0.15, 0, -0.15, -0.1, 0.15, -0.1, 0.15, 0],
            spacing: function e(t) {
              return 1;
            },
            gap: function e(t) {
              return 1;
            },
          });
          s("square", { points: [-0.15, 0, 0.15, 0, 0.15, -0.3, -0.15, -0.3] });
          s("diamond", {
            points: [-0.15, -0.15, 0, -0.3, 0.15, -0.15, 0, 0],
            gap: function e(t) {
              return t.pstyle("width").pfValue * t.pstyle("arrow-scale").value;
            },
          });
          s("chevron", {
            points: [0, 0, -0.15, -0.15, -0.1, -0.2, 0, -0.1, 0.1, -0.2, 0.15, -0.15],
            gap: function e(t) {
              return 0.95 * t.pstyle("width").pfValue * t.pstyle("arrow-scale").value;
            },
          });
        };
        var Av = {};
        Av.projectIntoViewport = function (e, t) {
          var r = this.cy;
          var n = this.findContainerClientCoords();
          var a = n[0];
          var i = n[1];
          var o = n[4];
          var s = r.pan();
          var l = r.zoom();
          var u = ((e - a) / o - s.x) / l;
          var c = ((t - i) / o - s.y) / l;
          return [u, c];
        };
        Av.findContainerClientCoords = function () {
          if (this.containerBB) {
            return this.containerBB;
          }
          var e = this.container;
          var t = e.getBoundingClientRect();
          var r = this.cy.window().getComputedStyle(e);
          var n = function e(t) {
            return parseFloat(r.getPropertyValue(t));
          };
          var a = { left: n("padding-left"), right: n("padding-right"), top: n("padding-top"), bottom: n("padding-bottom") };
          var i = { left: n("border-left-width"), right: n("border-right-width"), top: n("border-top-width"), bottom: n("border-bottom-width") };
          var o = e.clientWidth;
          var s = e.clientHeight;
          var l = a.left + a.right;
          var u = a.top + a.bottom;
          var c = i.left + i.right;
          var v = t.width / (o + c);
          var f = o - l;
          var h = s - u;
          var d = t.left + a.left + i.left;
          var p = t.top + a.top + i.top;
          return (this.containerBB = [d, p, f, h, v]);
        };
        Av.invalidateContainerClientCoordsCache = function () {
          this.containerBB = null;
        };
        Av.findNearestElement = function (e, t, r, n) {
          return this.findNearestElements(e, t, r, n)[0];
        };
        Av.findNearestElements = function (e, t, r, n) {
          var a = this;
          var i = this;
          var o = i.getCachedZSortedEles();
          var s = [];
          var l = i.cy.zoom();
          var u = i.cy.hasCompoundNodes();
          var c = (n ? 24 : 8) / l;
          var v = (n ? 8 : 2) / l;
          var f = (n ? 8 : 2) / l;
          var h = Infinity;
          var d;
          var p;
          if (r) {
            o = o.interactive;
          }
          function g(e, t) {
            if (e.isNode()) {
              if (p) {
                return;
              } else {
                p = e;
                s.push(e);
              }
            }
            if (e.isEdge() && (t == null || t < h)) {
              if (d) {
                if (
                  d.pstyle("z-compound-depth").value === e.pstyle("z-compound-depth").value &&
                  d.pstyle("z-compound-depth").value === e.pstyle("z-compound-depth").value
                ) {
                  for (var r = 0; r < s.length; r++) {
                    if (s[r].isEdge()) {
                      s[r] = e;
                      d = e;
                      h = t != null ? t : h;
                      break;
                    }
                  }
                }
              } else {
                s.push(e);
                d = e;
                h = t != null ? t : h;
              }
            }
          }
          function y(r) {
            var n = r.outerWidth() + 2 * v;
            var o = r.outerHeight() + 2 * v;
            var s = n / 2;
            var l = o / 2;
            var u = r.position();
            if (u.x - s <= e && e <= u.x + s && u.y - l <= t && t <= u.y + l) {
              var c = i.nodeShapes[a.getNodeShape(r)];
              if (c.checkPoint(e, t, 0, n, o, u.x, u.y)) {
                g(r, 0);
                return true;
              }
            }
          }
          function m(r) {
            var n = r._private;
            var o = n.rscratch;
            var l = r.pstyle("width").pfValue;
            var v = r.pstyle("arrow-scale").value;
            var f = l / 2 + c;
            var h = f * f;
            var d = f * 2;
            var p = n.source;
            var m = n.target;
            var b;
            if (o.edgeType === "segments" || o.edgeType === "straight" || o.edgeType === "haystack") {
              var x = o.allpts;
              for (var w = 0; w + 3 < x.length; w += 2) {
                if (Hr(e, t, x[w], x[w + 1], x[w + 2], x[w + 3], d) && h > (b = Zr(e, t, x[w], x[w + 1], x[w + 2], x[w + 3]))) {
                  g(r, b);
                  return true;
                }
              }
            } else if (o.edgeType === "bezier" || o.edgeType === "multibezier" || o.edgeType === "self" || o.edgeType === "compound") {
              var x = o.allpts;
              for (var w = 0; w + 5 < o.allpts.length; w += 4) {
                if (
                  qr(e, t, x[w], x[w + 1], x[w + 2], x[w + 3], x[w + 4], x[w + 5], d) &&
                  h > (b = Kr(e, t, x[w], x[w + 1], x[w + 2], x[w + 3], x[w + 4], x[w + 5]))
                ) {
                  g(r, b);
                  return true;
                }
              }
            }
            var p = p || n.source;
            var m = m || n.target;
            var E = a.getArrowWidth(l, v);
            var T = [
              { name: "source", x: o.arrowStartX, y: o.arrowStartY, angle: o.srcArrowAngle },
              { name: "target", x: o.arrowEndX, y: o.arrowEndY, angle: o.tgtArrowAngle },
              { name: "mid-source", x: o.midX, y: o.midY, angle: o.midsrcArrowAngle },
              { name: "mid-target", x: o.midX, y: o.midY, angle: o.midtgtArrowAngle },
            ];
            for (var w = 0; w < T.length; w++) {
              var _ = T[w];
              var D = i.arrowShapes[r.pstyle(_.name + "-arrow-shape").value];
              var C = r.pstyle("width").pfValue;
              if (D.roughCollide(e, t, E, _.angle, { x: _.x, y: _.y }, C, c) && D.collide(e, t, E, _.angle, { x: _.x, y: _.y }, C, c)) {
                g(r);
                return true;
              }
            }
            if (u && s.length > 0) {
              y(p);
              y(m);
            }
          }
          function b(e, t, r) {
            return Vt(e, t, r);
          }
          function x(r, n) {
            var a = r._private;
            var i = f;
            var o;
            if (n) {
              o = n + "-";
            } else {
              o = "";
            }
            r.boundingBox();
            var s = a.labelBounds[n || "main"];
            var l = r.pstyle(o + "label").value;
            var u = r.pstyle("text-events").strValue === "yes";
            if (!u || !l) {
              return;
            }
            var c = b(a.rscratch, "labelX", n);
            var v = b(a.rscratch, "labelY", n);
            var h = b(a.rscratch, "labelAngle", n);
            var d = r.pstyle(o + "text-margin-x").pfValue;
            var p = r.pstyle(o + "text-margin-y").pfValue;
            var y = s.x1 - i - d;
            var m = s.x2 + i - d;
            var x = s.y1 - i - p;
            var w = s.y2 + i - p;
            if (h) {
              var E = Math.cos(h);
              var T = Math.sin(h);
              var _ = function e(t, r) {
                t = t - c;
                r = r - v;
                return { x: t * E - r * T + c, y: t * T + r * E + v };
              };
              var D = _(y, x);
              var C = _(y, w);
              var N = _(m, x);
              var A = _(m, w);
              var L = [D.x + d, D.y + p, N.x + d, N.y + p, A.x + d, A.y + p, C.x + d, C.y + p];
              if (Qr(e, t, L)) {
                g(r);
                return true;
              }
            } else {
              if (Xr(s, e, t)) {
                g(r);
                return true;
              }
            }
          }
          for (var w = o.length - 1; w >= 0; w--) {
            var E = o[w];
            if (E.isNode()) {
              y(E) || x(E);
            } else {
              m(E) || x(E) || x(E, "source") || x(E, "target");
            }
          }
          return s;
        };
        Av.getAllInBox = function (e, t, r, n) {
          var a = this.getCachedZSortedEles().interactive;
          var i = [];
          var o = Math.min(e, r);
          var s = Math.max(e, r);
          var l = Math.min(t, n);
          var u = Math.max(t, n);
          e = o;
          r = s;
          t = l;
          n = u;
          var c = Or({ x1: e, y1: t, x2: r, y2: n });
          for (var v = 0; v < a.length; v++) {
            var f = a[v];
            if (f.isNode()) {
              var h = f;
              var d = h.boundingBox({ includeNodes: true, includeEdges: false, includeLabels: false });
              if (Yr(c, d) && !Ur(d, c)) {
                i.push(h);
              }
            } else {
              var p = f;
              var g = p._private;
              var y = g.rscratch;
              if (y.startX != null && y.startY != null && !Xr(c, y.startX, y.startY)) {
                continue;
              }
              if (y.endX != null && y.endY != null && !Xr(c, y.endX, y.endY)) {
                continue;
              }
              if (
                y.edgeType === "bezier" ||
                y.edgeType === "multibezier" ||
                y.edgeType === "self" ||
                y.edgeType === "compound" ||
                y.edgeType === "segments" ||
                y.edgeType === "haystack"
              ) {
                var m = g.rstyle.bezierPts || g.rstyle.linePts || g.rstyle.haystackPts;
                var b = true;
                for (var x = 0; x < m.length; x++) {
                  if (!Vr(c, m[x])) {
                    b = false;
                    break;
                  }
                }
                if (b) {
                  i.push(p);
                }
              } else if (y.edgeType === "haystack" || y.edgeType === "straight") {
                i.push(p);
              }
            }
          }
          return i;
        };
        var Lv = {};
        Lv.calculateArrowAngles = function (e) {
          var t = e._private.rscratch;
          var r = t.edgeType === "haystack";
          var n = t.edgeType === "bezier";
          var a = t.edgeType === "multibezier";
          var i = t.edgeType === "segments";
          var o = t.edgeType === "compound";
          var s = t.edgeType === "self";
          var l, u;
          var c, v, f, h, d, p;
          if (r) {
            c = t.haystackPts[0];
            v = t.haystackPts[1];
            f = t.haystackPts[2];
            h = t.haystackPts[3];
          } else {
            c = t.arrowStartX;
            v = t.arrowStartY;
            f = t.arrowEndX;
            h = t.arrowEndY;
          }
          d = t.midX;
          p = t.midY;
          if (i) {
            l = c - t.segpts[0];
            u = v - t.segpts[1];
          } else if (a || o || s || n) {
            var g = t.allpts;
            var y = Lr(g[0], g[2], g[4], 0.1);
            var m = Lr(g[1], g[3], g[5], 0.1);
            l = c - y;
            u = v - m;
          } else {
            l = c - d;
            u = v - p;
          }
          t.srcArrowAngle = Tr(l, u);
          var d = t.midX;
          var p = t.midY;
          if (r) {
            d = (c + f) / 2;
            p = (v + h) / 2;
          }
          l = f - c;
          u = h - v;
          if (i) {
            var g = t.allpts;
            if ((g.length / 2) % 2 === 0) {
              var b = g.length / 2;
              var x = b - 2;
              l = g[b] - g[x];
              u = g[b + 1] - g[x + 1];
            } else {
              var b = g.length / 2 - 1;
              var x = b - 2;
              var w = b + 2;
              l = g[b] - g[x];
              u = g[b + 1] - g[x + 1];
            }
          } else if (a || o || s) {
            var g = t.allpts;
            var E = t.ctrlpts;
            var T, _;
            var D, C;
            if ((E.length / 2) % 2 === 0) {
              var N = g.length / 2 - 1;
              var A = N + 2;
              var L = A + 2;
              T = Lr(g[N], g[A], g[L], 0);
              _ = Lr(g[N + 1], g[A + 1], g[L + 1], 0);
              D = Lr(g[N], g[A], g[L], 1e-4);
              C = Lr(g[N + 1], g[A + 1], g[L + 1], 1e-4);
            } else {
              var A = g.length / 2 - 1;
              var N = A - 2;
              var L = A + 2;
              T = Lr(g[N], g[A], g[L], 0.4999);
              _ = Lr(g[N + 1], g[A + 1], g[L + 1], 0.4999);
              D = Lr(g[N], g[A], g[L], 0.5);
              C = Lr(g[N + 1], g[A + 1], g[L + 1], 0.5);
            }
            l = D - T;
            u = C - _;
          }
          t.midtgtArrowAngle = Tr(l, u);
          t.midDispX = l;
          t.midDispY = u;
          l *= -1;
          u *= -1;
          if (i) {
            var g = t.allpts;
            if ((g.length / 2) % 2 === 0);
            else {
              var b = g.length / 2 - 1;
              var w = b + 2;
              l = -(g[w] - g[b]);
              u = -(g[w + 1] - g[b + 1]);
            }
          }
          t.midsrcArrowAngle = Tr(l, u);
          if (i) {
            l = f - t.segpts[t.segpts.length - 2];
            u = h - t.segpts[t.segpts.length - 1];
          } else if (a || o || s || n) {
            var g = t.allpts;
            var I = g.length;
            var y = Lr(g[I - 6], g[I - 4], g[I - 2], 0.9);
            var m = Lr(g[I - 5], g[I - 3], g[I - 1], 0.9);
            l = f - y;
            u = h - m;
          } else {
            l = f - d;
            u = h - p;
          }
          t.tgtArrowAngle = Tr(l, u);
        };
        Lv.getArrowWidth = Lv.getArrowHeight = function (e, t) {
          var r = (this.arrowWidthCache = this.arrowWidthCache || {});
          var n = r[e + ", " + t];
          if (n) {
            return n;
          }
          n = Math.max(Math.pow(e * 13.37, 0.9), 29) * t;
          r[e + ", " + t] = n;
          return n;
        };
        var Iv = {};
        Iv.findHaystackPoints = function (e) {
          for (var t = 0; t < e.length; t++) {
            var r = e[t];
            var n = r._private;
            var a = n.rscratch;
            if (!a.haystack) {
              var i = Math.random() * 2 * Math.PI;
              a.source = { x: Math.cos(i), y: Math.sin(i) };
              i = Math.random() * 2 * Math.PI;
              a.target = { x: Math.cos(i), y: Math.sin(i) };
            }
            var o = n.source;
            var s = n.target;
            var l = o.position();
            var u = s.position();
            var c = o.width();
            var v = s.width();
            var f = o.height();
            var h = s.height();
            var d = r.pstyle("haystack-radius").value;
            var p = d / 2;
            a.haystackPts = a.allpts = [a.source.x * c * p + l.x, a.source.y * f * p + l.y, a.target.x * v * p + u.x, a.target.y * h * p + u.y];
            a.midX = (a.allpts[0] + a.allpts[2]) / 2;
            a.midY = (a.allpts[1] + a.allpts[3]) / 2;
            a.edgeType = "haystack";
            a.haystack = true;
            this.storeEdgeProjections(r);
            this.calculateArrowAngles(r);
            this.recalculateEdgeLabelProjections(r);
            this.calculateLabelAngles(r);
          }
        };
        Iv.findSegmentsPoints = function (e, t) {
          var r = e._private.rscratch;
          var n = t.posPts,
            a = t.intersectionPts,
            i = t.vectorNormInverse;
          var o = e.pstyle("edge-distances").value;
          var s = e.pstyle("segment-weights");
          var l = e.pstyle("segment-distances");
          var u = Math.min(s.pfValue.length, l.pfValue.length);
          r.edgeType = "segments";
          r.segpts = [];
          for (var c = 0; c < u; c++) {
            var v = s.pfValue[c];
            var f = l.pfValue[c];
            var h = 1 - v;
            var d = v;
            var p = o === "node-position" ? n : a;
            var g = { x: p.x1 * h + p.x2 * d, y: p.y1 * h + p.y2 * d };
            r.segpts.push(g.x + i.x * f, g.y + i.y * f);
          }
        };
        Iv.findLoopPoints = function (e, t, r, n) {
          var a = e._private.rscratch;
          var i = t.dirCounts,
            o = t.srcPos;
          var s = e.pstyle("control-point-distances");
          var l = s ? s.pfValue[0] : undefined;
          var u = e.pstyle("loop-direction").pfValue;
          var c = e.pstyle("loop-sweep").pfValue;
          var v = e.pstyle("control-point-step-size").pfValue;
          a.edgeType = "self";
          var f = r;
          var h = v;
          if (n) {
            f = 0;
            h = l;
          }
          var d = u - Math.PI / 2;
          var p = d - c / 2;
          var g = d + c / 2;
          var y = String(u + "_" + c);
          f = i[y] === undefined ? (i[y] = 0) : ++i[y];
          a.ctrlpts = [
            o.x + Math.cos(p) * 1.4 * h * (f / 3 + 1),
            o.y + Math.sin(p) * 1.4 * h * (f / 3 + 1),
            o.x + Math.cos(g) * 1.4 * h * (f / 3 + 1),
            o.y + Math.sin(g) * 1.4 * h * (f / 3 + 1),
          ];
        };
        Iv.findCompoundLoopPoints = function (e, t, r, n) {
          var a = e._private.rscratch;
          a.edgeType = "compound";
          var i = t.srcPos,
            o = t.tgtPos,
            s = t.srcW,
            l = t.srcH,
            u = t.tgtW,
            c = t.tgtH;
          var v = e.pstyle("control-point-step-size").pfValue;
          var f = e.pstyle("control-point-distances");
          var h = f ? f.pfValue[0] : undefined;
          var d = r;
          var p = v;
          if (n) {
            d = 0;
            p = h;
          }
          var g = 50;
          var y = { x: i.x - s / 2, y: i.y - l / 2 };
          var m = { x: o.x - u / 2, y: o.y - c / 2 };
          var b = { x: Math.min(y.x, m.x), y: Math.min(y.y, m.y) };
          var x = 0.5;
          var w = Math.max(x, Math.log(s * 0.01));
          var E = Math.max(x, Math.log(u * 0.01));
          a.ctrlpts = [
            b.x,
            b.y - (1 + Math.pow(g, 1.12) / 100) * p * (d / 3 + 1) * w,
            b.x - (1 + Math.pow(g, 1.12) / 100) * p * (d / 3 + 1) * E,
            b.y,
          ];
        };
        Iv.findStraightEdgePoints = function (e) {
          e._private.rscratch.edgeType = "straight";
        };
        Iv.findBezierPoints = function (e, t, r, n, a) {
          var i = e._private.rscratch;
          var o = t.vectorNormInverse,
            s = t.posPts,
            l = t.intersectionPts;
          var u = e.pstyle("edge-distances").value;
          var c = e.pstyle("control-point-step-size").pfValue;
          var v = e.pstyle("control-point-distances");
          var f = e.pstyle("control-point-weights");
          var h = v && f ? Math.min(v.value.length, f.value.length) : 1;
          var d = v ? v.pfValue[0] : undefined;
          var p = f.value[0];
          var g = n;
          i.edgeType = g ? "multibezier" : "bezier";
          i.ctrlpts = [];
          for (var y = 0; y < h; y++) {
            var m = (0.5 - t.eles.length / 2 + r) * c * (a ? -1 : 1);
            var b = void 0;
            var x = Dr(m);
            if (g) {
              d = v ? v.pfValue[y] : c;
              p = f.value[y];
            }
            if (n) {
              b = d;
            } else {
              b = d !== undefined ? x * d : undefined;
            }
            var w = b !== undefined ? b : m;
            var E = 1 - p;
            var T = p;
            var _ = u === "node-position" ? s : l;
            var D = { x: _.x1 * E + _.x2 * T, y: _.y1 * E + _.y2 * T };
            i.ctrlpts.push(D.x + o.x * w, D.y + o.y * w);
          }
        };
        Iv.findTaxiPoints = function (e, t) {
          var r = e._private.rscratch;
          r.edgeType = "segments";
          var n = "vertical";
          var a = "horizontal";
          var i = "leftward";
          var o = "rightward";
          var s = "downward";
          var l = "upward";
          var u = "auto";
          var c = t.posPts,
            v = t.srcW,
            f = t.srcH,
            h = t.tgtW,
            d = t.tgtH;
          var p = e.pstyle("edge-distances").value;
          var g = p !== "node-position";
          var y = e.pstyle("taxi-direction").value;
          var m = y;
          var b = e.pstyle("taxi-turn");
          var x = b.units === "%";
          var w = b.pfValue;
          var E = w < 0;
          var T = e.pstyle("taxi-turn-min-distance").pfValue;
          var _ = g ? (v + h) / 2 : 0;
          var D = g ? (f + d) / 2 : 0;
          var C = c.x2 - c.x1;
          var N = c.y2 - c.y1;
          var A = function e(t, r) {
            if (t > 0) {
              return Math.max(t - r, 0);
            } else {
              return Math.min(t + r, 0);
            }
          };
          var L = A(C, _);
          var I = A(N, D);
          var S = false;
          if (m === u) {
            y = Math.abs(L) > Math.abs(I) ? a : n;
          } else if (m === l || m === s) {
            y = n;
            S = true;
          } else if (m === i || m === o) {
            y = a;
            S = true;
          }
          var k = y === n;
          var O = k ? I : L;
          var M = k ? N : C;
          var P = Dr(M);
          var R = false;
          if (!(S && (x || E)) && ((m === s && M < 0) || (m === l && M > 0) || (m === i && M > 0) || (m === o && M < 0))) {
            P *= -1;
            O = P * Math.abs(O);
            R = true;
          }
          var B;
          if (x) {
            var F = w < 0 ? 1 + w : w;
            B = F * O;
          } else {
            var z = w < 0 ? O : 0;
            B = z + w * P;
          }
          var G = function e(t) {
            return Math.abs(t) < T || Math.abs(t) >= Math.abs(O);
          };
          var Y = G(B);
          var X = G(Math.abs(O) - Math.abs(B));
          var V = Y || X;
          if (V && !R) {
            if (k) {
              var U = Math.abs(M) <= f / 2;
              var j = Math.abs(C) <= h / 2;
              if (U) {
                var H = (c.x1 + c.x2) / 2;
                var q = c.y1,
                  W = c.y2;
                r.segpts = [H, q, H, W];
              } else if (j) {
                var $ = (c.y1 + c.y2) / 2;
                var K = c.x1,
                  Z = c.x2;
                r.segpts = [K, $, Z, $];
              } else {
                r.segpts = [c.x1, c.y2];
              }
            } else {
              var Q = Math.abs(M) <= v / 2;
              var J = Math.abs(N) <= d / 2;
              if (Q) {
                var ee = (c.y1 + c.y2) / 2;
                var te = c.x1,
                  re = c.x2;
                r.segpts = [te, ee, re, ee];
              } else if (J) {
                var ne = (c.x1 + c.x2) / 2;
                var ae = c.y1,
                  ie = c.y2;
                r.segpts = [ne, ae, ne, ie];
              } else {
                r.segpts = [c.x2, c.y1];
              }
            }
          } else {
            if (k) {
              var oe = c.y1 + B + (g ? (f / 2) * P : 0);
              var se = c.x1,
                le = c.x2;
              r.segpts = [se, oe, le, oe];
            } else {
              var ue = c.x1 + B + (g ? (v / 2) * P : 0);
              var ce = c.y1,
                ve = c.y2;
              r.segpts = [ue, ce, ue, ve];
            }
          }
        };
        Iv.tryToCorrectInvalidPoints = function (e, t) {
          var r = e._private.rscratch;
          if (r.edgeType === "bezier") {
            var n = t.srcPos,
              a = t.tgtPos,
              i = t.srcW,
              o = t.srcH,
              s = t.tgtW,
              l = t.tgtH,
              u = t.srcShape,
              c = t.tgtShape;
            var v = !_(r.startX) || !_(r.startY);
            var f = !_(r.arrowStartX) || !_(r.arrowStartY);
            var h = !_(r.endX) || !_(r.endY);
            var d = !_(r.arrowEndX) || !_(r.arrowEndY);
            var p = 3;
            var g = this.getArrowWidth(e.pstyle("width").pfValue, e.pstyle("arrow-scale").value) * this.arrowShapeWidth;
            var y = p * g;
            var m = Cr({ x: r.ctrlpts[0], y: r.ctrlpts[1] }, { x: r.startX, y: r.startY });
            var b = m < y;
            var x = Cr({ x: r.ctrlpts[0], y: r.ctrlpts[1] }, { x: r.endX, y: r.endY });
            var w = x < y;
            var E = false;
            if (v || f || b) {
              E = true;
              var T = { x: r.ctrlpts[0] - n.x, y: r.ctrlpts[1] - n.y };
              var D = Math.sqrt(T.x * T.x + T.y * T.y);
              var C = { x: T.x / D, y: T.y / D };
              var N = Math.max(i, o);
              var A = { x: r.ctrlpts[0] + C.x * 2 * N, y: r.ctrlpts[1] + C.y * 2 * N };
              var L = u.intersectLine(n.x, n.y, i, o, A.x, A.y, 0);
              if (b) {
                r.ctrlpts[0] = r.ctrlpts[0] + C.x * (y - m);
                r.ctrlpts[1] = r.ctrlpts[1] + C.y * (y - m);
              } else {
                r.ctrlpts[0] = L[0] + C.x * y;
                r.ctrlpts[1] = L[1] + C.y * y;
              }
            }
            if (h || d || w) {
              E = true;
              var I = { x: r.ctrlpts[0] - a.x, y: r.ctrlpts[1] - a.y };
              var S = Math.sqrt(I.x * I.x + I.y * I.y);
              var k = { x: I.x / S, y: I.y / S };
              var O = Math.max(i, o);
              var M = { x: r.ctrlpts[0] + k.x * 2 * O, y: r.ctrlpts[1] + k.y * 2 * O };
              var P = c.intersectLine(a.x, a.y, s, l, M.x, M.y, 0);
              if (w) {
                r.ctrlpts[0] = r.ctrlpts[0] + k.x * (y - x);
                r.ctrlpts[1] = r.ctrlpts[1] + k.y * (y - x);
              } else {
                r.ctrlpts[0] = P[0] + k.x * y;
                r.ctrlpts[1] = P[1] + k.y * y;
              }
            }
            if (E) {
              this.findEndpoints(e);
            }
          }
        };
        Iv.storeAllpts = function (e) {
          var t = e._private.rscratch;
          if (t.edgeType === "multibezier" || t.edgeType === "bezier" || t.edgeType === "self" || t.edgeType === "compound") {
            t.allpts = [];
            t.allpts.push(t.startX, t.startY);
            for (var r = 0; r + 1 < t.ctrlpts.length; r += 2) {
              t.allpts.push(t.ctrlpts[r], t.ctrlpts[r + 1]);
              if (r + 3 < t.ctrlpts.length) {
                t.allpts.push((t.ctrlpts[r] + t.ctrlpts[r + 2]) / 2, (t.ctrlpts[r + 1] + t.ctrlpts[r + 3]) / 2);
              }
            }
            t.allpts.push(t.endX, t.endY);
            var n, a;
            if ((t.ctrlpts.length / 2) % 2 === 0) {
              n = t.allpts.length / 2 - 1;
              t.midX = t.allpts[n];
              t.midY = t.allpts[n + 1];
            } else {
              n = t.allpts.length / 2 - 3;
              a = 0.5;
              t.midX = Lr(t.allpts[n], t.allpts[n + 2], t.allpts[n + 4], a);
              t.midY = Lr(t.allpts[n + 1], t.allpts[n + 3], t.allpts[n + 5], a);
            }
          } else if (t.edgeType === "straight") {
            t.allpts = [t.startX, t.startY, t.endX, t.endY];
            t.midX = (t.startX + t.endX + t.arrowStartX + t.arrowEndX) / 4;
            t.midY = (t.startY + t.endY + t.arrowStartY + t.arrowEndY) / 4;
          } else if (t.edgeType === "segments") {
            t.allpts = [];
            t.allpts.push(t.startX, t.startY);
            t.allpts.push.apply(t.allpts, t.segpts);
            t.allpts.push(t.endX, t.endY);
            if (t.segpts.length % 4 === 0) {
              var i = t.segpts.length / 2;
              var o = i - 2;
              t.midX = (t.segpts[o] + t.segpts[i]) / 2;
              t.midY = (t.segpts[o + 1] + t.segpts[i + 1]) / 2;
            } else {
              var s = t.segpts.length / 2 - 1;
              t.midX = t.segpts[s];
              t.midY = t.segpts[s + 1];
            }
          }
        };
        Iv.checkForInvalidEdgeWarning = function (e) {
          var t = e[0]._private.rscratch;
          if (t.nodesOverlap || (_(t.startX) && _(t.startY) && _(t.endX) && _(t.endY))) {
            t.loggedErr = false;
          } else {
            if (!t.loggedErr) {
              t.loggedErr = true;
              kt(
                "Edge `" +
                  e.id() +
                  "` has invalid endpoints and so it is impossible to draw.  Adjust your edge style (e.g. control points) accordingly or use an alternative edge type.  This is expected behaviour when the source node and the target node overlap."
              );
            }
          }
        };
        Iv.findEdgeControlPoints = function (e) {
          var t = this;
          if (!e || e.length === 0) {
            return;
          }
          var r = this;
          var n = r.cy;
          var a = n.hasCompoundNodes();
          var i = {
            map: new Ht(),
            get: function e(t) {
              var r = this.map.get(t[0]);
              if (r != null) {
                return r.get(t[1]);
              } else {
                return null;
              }
            },
            set: function e(t, r) {
              var n = this.map.get(t[0]);
              if (n == null) {
                n = new Ht();
                this.map.set(t[0], n);
              }
              n.set(t[1], r);
            },
          };
          var o = [];
          var s = [];
          for (var l = 0; l < e.length; l++) {
            var u = e[l];
            var c = u._private;
            var v = u.pstyle("curve-style").value;
            if (u.removed() || !u.takesUpSpace()) {
              continue;
            }
            if (v === "haystack") {
              s.push(u);
              continue;
            }
            var f = v === "unbundled-bezier" || v === "segments" || v === "straight" || v === "straight-triangle" || v === "taxi";
            var h = v === "unbundled-bezier" || v === "bezier";
            var d = c.source;
            var p = c.target;
            var g = d.poolIndex();
            var y = p.poolIndex();
            var m = [g, y].sort();
            var b = i.get(m);
            if (b == null) {
              b = { eles: [] };
              i.set(m, b);
              o.push(m);
            }
            b.eles.push(u);
            if (f) {
              b.hasUnbundled = true;
            }
            if (h) {
              b.hasBezier = true;
            }
          }
          var x = function e(n) {
            var s = o[n];
            var l = i.get(s);
            var u = void 0;
            if (!l.hasUnbundled) {
              var c = l.eles[0].parallelEdges().filter(function (e) {
                return e.isBundledBezier();
              });
              Yt(l.eles);
              c.forEach(function (e) {
                return l.eles.push(e);
              });
              l.eles.sort(function (e, t) {
                return e.poolIndex() - t.poolIndex();
              });
            }
            var v = l.eles[0];
            var f = v.source();
            var h = v.target();
            if (f.poolIndex() > h.poolIndex()) {
              var d = f;
              f = h;
              h = d;
            }
            var p = (l.srcPos = f.position());
            var g = (l.tgtPos = h.position());
            var y = (l.srcW = f.outerWidth());
            var m = (l.srcH = f.outerHeight());
            var b = (l.tgtW = h.outerWidth());
            var x = (l.tgtH = h.outerHeight());
            var w = (l.srcShape = r.nodeShapes[t.getNodeShape(f)]);
            var E = (l.tgtShape = r.nodeShapes[t.getNodeShape(h)]);
            l.dirCounts = { north: 0, west: 0, south: 0, east: 0, northwest: 0, southwest: 0, northeast: 0, southeast: 0 };
            for (var T = 0; T < l.eles.length; T++) {
              var D = l.eles[T];
              var C = D[0]._private.rscratch;
              var N = D.pstyle("curve-style").value;
              var A = N === "unbundled-bezier" || N === "segments" || N === "taxi";
              var L = !f.same(D.source());
              if (!l.calculatedIntersection && f !== h && (l.hasBezier || l.hasUnbundled)) {
                l.calculatedIntersection = true;
                var I = w.intersectLine(p.x, p.y, y, m, g.x, g.y, 0);
                var S = (l.srcIntn = I);
                var k = E.intersectLine(g.x, g.y, b, x, p.x, p.y, 0);
                var O = (l.tgtIntn = k);
                var M = (l.intersectionPts = { x1: I[0], x2: k[0], y1: I[1], y2: k[1] });
                var P = (l.posPts = { x1: p.x, x2: g.x, y1: p.y, y2: g.y });
                var R = k[1] - I[1];
                var B = k[0] - I[0];
                var F = Math.sqrt(B * B + R * R);
                var z = (l.vector = { x: B, y: R });
                var G = (l.vectorNorm = { x: z.x / F, y: z.y / F });
                var Y = { x: -G.y, y: G.x };
                l.nodesOverlap = !_(F) || E.checkPoint(I[0], I[1], 0, b, x, g.x, g.y) || w.checkPoint(k[0], k[1], 0, y, m, p.x, p.y);
                l.vectorNormInverse = Y;
                u = {
                  nodesOverlap: l.nodesOverlap,
                  dirCounts: l.dirCounts,
                  calculatedIntersection: true,
                  hasBezier: l.hasBezier,
                  hasUnbundled: l.hasUnbundled,
                  eles: l.eles,
                  srcPos: g,
                  tgtPos: p,
                  srcW: b,
                  srcH: x,
                  tgtW: y,
                  tgtH: m,
                  srcIntn: O,
                  tgtIntn: S,
                  srcShape: E,
                  tgtShape: w,
                  posPts: { x1: P.x2, y1: P.y2, x2: P.x1, y2: P.y1 },
                  intersectionPts: { x1: M.x2, y1: M.y2, x2: M.x1, y2: M.y1 },
                  vector: { x: -z.x, y: -z.y },
                  vectorNorm: { x: -G.x, y: -G.y },
                  vectorNormInverse: { x: -Y.x, y: -Y.y },
                };
              }
              var X = L ? u : l;
              C.nodesOverlap = X.nodesOverlap;
              C.srcIntn = X.srcIntn;
              C.tgtIntn = X.tgtIntn;
              if (
                a &&
                (f.isParent() || f.isChild() || h.isParent() || h.isChild()) &&
                (f.parents().anySame(h) || h.parents().anySame(f) || (f.same(h) && f.isParent()))
              ) {
                t.findCompoundLoopPoints(D, X, T, A);
              } else if (f === h) {
                t.findLoopPoints(D, X, T, A);
              } else if (N === "segments") {
                t.findSegmentsPoints(D, X);
              } else if (N === "taxi") {
                t.findTaxiPoints(D, X);
              } else if (N === "straight" || (!A && l.eles.length % 2 === 1 && T === Math.floor(l.eles.length / 2))) {
                t.findStraightEdgePoints(D);
              } else {
                t.findBezierPoints(D, X, T, A, L);
              }
              t.findEndpoints(D);
              t.tryToCorrectInvalidPoints(D, X);
              t.checkForInvalidEdgeWarning(D);
              t.storeAllpts(D);
              t.storeEdgeProjections(D);
              t.calculateArrowAngles(D);
              t.recalculateEdgeLabelProjections(D);
              t.calculateLabelAngles(D);
            }
          };
          for (var w = 0; w < o.length; w++) {
            x(w);
          }
          this.findHaystackPoints(s);
        };
        function Sv(e) {
          var t = [];
          if (e == null) {
            return;
          }
          for (var r = 0; r < e.length; r += 2) {
            var n = e[r];
            var a = e[r + 1];
            t.push({ x: n, y: a });
          }
          return t;
        }
        Iv.getSegmentPoints = function (e) {
          var t = e[0]._private.rscratch;
          var r = t.edgeType;
          if (r === "segments") {
            this.recalculateRenderedStyle(e);
            return Sv(t.segpts);
          }
        };
        Iv.getControlPoints = function (e) {
          var t = e[0]._private.rscratch;
          var r = t.edgeType;
          if (r === "bezier" || r === "multibezier" || r === "self" || r === "compound") {
            this.recalculateRenderedStyle(e);
            return Sv(t.ctrlpts);
          }
        };
        Iv.getEdgeMidpoint = function (e) {
          var t = e[0]._private.rscratch;
          this.recalculateRenderedStyle(e);
          return { x: t.midX, y: t.midY };
        };
        var kv = {};
        kv.manualEndptToPx = function (e, t) {
          var r = this;
          var n = e.position();
          var a = e.outerWidth();
          var i = e.outerHeight();
          if (t.value.length === 2) {
            var o = [t.pfValue[0], t.pfValue[1]];
            if (t.units[0] === "%") {
              o[0] = o[0] * a;
            }
            if (t.units[1] === "%") {
              o[1] = o[1] * i;
            }
            o[0] += n.x;
            o[1] += n.y;
            return o;
          } else {
            var s = t.pfValue[0];
            s = -Math.PI / 2 + s;
            var l = 2 * Math.max(a, i);
            var u = [n.x + Math.cos(s) * l, n.y + Math.sin(s) * l];
            return r.nodeShapes[this.getNodeShape(e)].intersectLine(n.x, n.y, a, i, u[0], u[1], 0);
          }
        };
        kv.findEndpoints = function (e) {
          var t = this;
          var r;
          var n = e.source()[0];
          var a = e.target()[0];
          var i = n.position();
          var o = a.position();
          var s = e.pstyle("target-arrow-shape").value;
          var l = e.pstyle("source-arrow-shape").value;
          var u = e.pstyle("target-distance-from-node").pfValue;
          var c = e.pstyle("source-distance-from-node").pfValue;
          var v = e.pstyle("curve-style").value;
          var f = e._private.rscratch;
          var h = f.edgeType;
          var d = v === "taxi";
          var p = h === "self" || h === "compound";
          var g = h === "bezier" || h === "multibezier" || p;
          var y = h !== "bezier";
          var m = h === "straight" || h === "segments";
          var b = h === "segments";
          var x = g || y || m;
          var w = p || d;
          var E = e.pstyle("source-endpoint");
          var T = w ? "outside-to-node" : E.value;
          var D = e.pstyle("target-endpoint");
          var C = w ? "outside-to-node" : D.value;
          f.srcManEndpt = E;
          f.tgtManEndpt = D;
          var N;
          var A;
          var L;
          var I;
          if (g) {
            var S = [f.ctrlpts[0], f.ctrlpts[1]];
            var k = y ? [f.ctrlpts[f.ctrlpts.length - 2], f.ctrlpts[f.ctrlpts.length - 1]] : S;
            N = k;
            A = S;
          } else if (m) {
            var O = !b ? [o.x, o.y] : f.segpts.slice(0, 2);
            var M = !b ? [i.x, i.y] : f.segpts.slice(f.segpts.length - 2);
            N = M;
            A = O;
          }
          if (C === "inside-to-node") {
            r = [o.x, o.y];
          } else if (D.units) {
            r = this.manualEndptToPx(a, D);
          } else if (C === "outside-to-line") {
            r = f.tgtIntn;
          } else {
            if (C === "outside-to-node" || C === "outside-to-node-or-label") {
              L = N;
            } else if (C === "outside-to-line" || C === "outside-to-line-or-label") {
              L = [i.x, i.y];
            }
            r = t.nodeShapes[this.getNodeShape(a)].intersectLine(o.x, o.y, a.outerWidth(), a.outerHeight(), L[0], L[1], 0);
            if (C === "outside-to-node-or-label" || C === "outside-to-line-or-label") {
              var P = a._private.rscratch;
              var R = P.labelWidth;
              var B = P.labelHeight;
              var F = P.labelX;
              var z = P.labelY;
              var G = R / 2;
              var Y = B / 2;
              var X = a.pstyle("text-valign").value;
              if (X === "top") {
                z -= Y;
              } else if (X === "bottom") {
                z += Y;
              }
              var V = a.pstyle("text-halign").value;
              if (V === "left") {
                F -= G;
              } else if (V === "right") {
                F += G;
              }
              var U = un(L[0], L[1], [F - G, z - Y, F + G, z - Y, F + G, z + Y, F - G, z + Y], o.x, o.y);
              if (U.length > 0) {
                var j = i;
                var H = Nr(j, yr(r));
                var q = Nr(j, yr(U));
                var W = H;
                if (q < H) {
                  r = U;
                  W = q;
                }
                if (U.length > 2) {
                  var $ = Nr(j, { x: U[2], y: U[3] });
                  if ($ < W) {
                    r = [U[2], U[3]];
                  }
                }
              }
            }
          }
          var K = vn(r, N, t.arrowShapes[s].spacing(e) + u);
          var Z = vn(r, N, t.arrowShapes[s].gap(e) + u);
          f.endX = Z[0];
          f.endY = Z[1];
          f.arrowEndX = K[0];
          f.arrowEndY = K[1];
          if (T === "inside-to-node") {
            r = [i.x, i.y];
          } else if (E.units) {
            r = this.manualEndptToPx(n, E);
          } else if (T === "outside-to-line") {
            r = f.srcIntn;
          } else {
            if (T === "outside-to-node" || T === "outside-to-node-or-label") {
              I = A;
            } else if (T === "outside-to-line" || T === "outside-to-line-or-label") {
              I = [o.x, o.y];
            }
            r = t.nodeShapes[this.getNodeShape(n)].intersectLine(i.x, i.y, n.outerWidth(), n.outerHeight(), I[0], I[1], 0);
            if (T === "outside-to-node-or-label" || T === "outside-to-line-or-label") {
              var Q = n._private.rscratch;
              var J = Q.labelWidth;
              var ee = Q.labelHeight;
              var te = Q.labelX;
              var re = Q.labelY;
              var ne = J / 2;
              var ae = ee / 2;
              var ie = n.pstyle("text-valign").value;
              if (ie === "top") {
                re -= ae;
              } else if (ie === "bottom") {
                re += ae;
              }
              var oe = n.pstyle("text-halign").value;
              if (oe === "left") {
                te -= ne;
              } else if (oe === "right") {
                te += ne;
              }
              var se = un(I[0], I[1], [te - ne, re - ae, te + ne, re - ae, te + ne, re + ae, te - ne, re + ae], i.x, i.y);
              if (se.length > 0) {
                var le = o;
                var ue = Nr(le, yr(r));
                var ce = Nr(le, yr(se));
                var ve = ue;
                if (ce < ue) {
                  r = [se[0], se[1]];
                  ve = ce;
                }
                if (se.length > 2) {
                  var fe = Nr(le, { x: se[2], y: se[3] });
                  if (fe < ve) {
                    r = [se[2], se[3]];
                  }
                }
              }
            }
          }
          var he = vn(r, A, t.arrowShapes[l].spacing(e) + c);
          var de = vn(r, A, t.arrowShapes[l].gap(e) + c);
          f.startX = de[0];
          f.startY = de[1];
          f.arrowStartX = he[0];
          f.arrowStartY = he[1];
          if (x) {
            if (!_(f.startX) || !_(f.startY) || !_(f.endX) || !_(f.endY)) {
              f.badLine = true;
            } else {
              f.badLine = false;
            }
          }
        };
        kv.getSourceEndpoint = function (e) {
          var t = e[0]._private.rscratch;
          this.recalculateRenderedStyle(e);
          switch (t.edgeType) {
            case "haystack":
              return { x: t.haystackPts[0], y: t.haystackPts[1] };
            default:
              return { x: t.arrowStartX, y: t.arrowStartY };
          }
        };
        kv.getTargetEndpoint = function (e) {
          var t = e[0]._private.rscratch;
          this.recalculateRenderedStyle(e);
          switch (t.edgeType) {
            case "haystack":
              return { x: t.haystackPts[2], y: t.haystackPts[3] };
            default:
              return { x: t.arrowEndX, y: t.arrowEndY };
          }
        };
        var Ov = {};
        function Mv(e, t, r) {
          var n = function e(t, r, n, a) {
            return Lr(t, r, n, a);
          };
          var a = t._private;
          var i = a.rstyle.bezierPts;
          for (var o = 0; o < e.bezierProjPcts.length; o++) {
            var s = e.bezierProjPcts[o];
            i.push({ x: n(r[0], r[2], r[4], s), y: n(r[1], r[3], r[5], s) });
          }
        }
        Ov.storeEdgeProjections = function (e) {
          var t = e._private;
          var r = t.rscratch;
          var n = r.edgeType;
          t.rstyle.bezierPts = null;
          t.rstyle.linePts = null;
          t.rstyle.haystackPts = null;
          if (n === "multibezier" || n === "bezier" || n === "self" || n === "compound") {
            t.rstyle.bezierPts = [];
            for (var a = 0; a + 5 < r.allpts.length; a += 4) {
              Mv(this, e, r.allpts.slice(a, a + 6));
            }
          } else if (n === "segments") {
            var i = (t.rstyle.linePts = []);
            for (var a = 0; a + 1 < r.allpts.length; a += 2) {
              i.push({ x: r.allpts[a], y: r.allpts[a + 1] });
            }
          } else if (n === "haystack") {
            var o = r.haystackPts;
            t.rstyle.haystackPts = [
              { x: o[0], y: o[1] },
              { x: o[2], y: o[3] },
            ];
          }
          t.rstyle.arrowWidth = this.getArrowWidth(e.pstyle("width").pfValue, e.pstyle("arrow-scale").value) * this.arrowShapeWidth;
        };
        Ov.recalculateEdgeProjections = function (e) {
          this.findEdgeControlPoints(e);
        };
        var Pv = {};
        Pv.recalculateNodeLabelProjection = function (e) {
          var t = e.pstyle("label").strValue;
          if (O(t)) {
            return;
          }
          var r, n;
          var a = e._private;
          var i = e.width();
          var o = e.height();
          var s = e.padding();
          var l = e.position();
          var u = e.pstyle("text-halign").strValue;
          var c = e.pstyle("text-valign").strValue;
          var v = a.rscratch;
          var f = a.rstyle;
          switch (u) {
            case "left":
              r = l.x - i / 2 - s;
              break;
            case "right":
              r = l.x + i / 2 + s;
              break;
            default:
              r = l.x;
          }
          switch (c) {
            case "top":
              n = l.y - o / 2 - s;
              break;
            case "bottom":
              n = l.y + o / 2 + s;
              break;
            default:
              n = l.y;
          }
          v.labelX = r;
          v.labelY = n;
          f.labelX = r;
          f.labelY = n;
          this.calculateLabelAngles(e);
          this.applyLabelDimensions(e);
        };
        var Rv = function e(t, r) {
          var n = Math.atan(r / t);
          if (t === 0 && n < 0) {
            n = n * -1;
          }
          return n;
        };
        var Bv = function e(t, r) {
          var n = r.x - t.x;
          var a = r.y - t.y;
          return Rv(n, a);
        };
        var Fv = function e(t, r, n, a) {
          var i = kr(0, a - 0.001, 1);
          var o = kr(0, a + 0.001, 1);
          var s = Ir(t, r, n, i);
          var l = Ir(t, r, n, o);
          return Bv(s, l);
        };
        Pv.recalculateEdgeLabelProjections = function (e) {
          var t;
          var r = e._private;
          var n = r.rscratch;
          var a = this;
          var i = { mid: e.pstyle("label").strValue, source: e.pstyle("source-label").strValue, target: e.pstyle("target-label").strValue };
          if (i.mid || i.source || i.target);
          else {
            return;
          }
          t = { x: n.midX, y: n.midY };
          var o = function e(t, n, a) {
            Ut(r.rscratch, t, n, a);
            Ut(r.rstyle, t, n, a);
          };
          o("labelX", null, t.x);
          o("labelY", null, t.y);
          var s = Rv(n.midDispX, n.midDispY);
          o("labelAutoAngle", null, s);
          var l = function e() {
            if (e.cache) {
              return e.cache;
            }
            var t = [];
            for (var i = 0; i + 5 < n.allpts.length; i += 4) {
              var o = { x: n.allpts[i], y: n.allpts[i + 1] };
              var s = { x: n.allpts[i + 2], y: n.allpts[i + 3] };
              var l = { x: n.allpts[i + 4], y: n.allpts[i + 5] };
              t.push({ p0: o, p1: s, p2: l, startDist: 0, length: 0, segments: [] });
            }
            var u = r.rstyle.bezierPts;
            var c = a.bezierProjPcts.length;
            function v(e, t, r, n, a) {
              var i = Cr(t, r);
              var o = e.segments[e.segments.length - 1];
              var s = { p0: t, p1: r, t0: n, t1: a, startDist: o ? o.startDist + o.length : 0, length: i };
              e.segments.push(s);
              e.length += i;
            }
            for (var f = 0; f < t.length; f++) {
              var h = t[f];
              var d = t[f - 1];
              if (d) {
                h.startDist = d.startDist + d.length;
              }
              v(h, h.p0, u[f * c], 0, a.bezierProjPcts[0]);
              for (var p = 0; p < c - 1; p++) {
                v(h, u[f * c + p], u[f * c + p + 1], a.bezierProjPcts[p], a.bezierProjPcts[p + 1]);
              }
              v(h, u[f * c + c - 1], h.p2, a.bezierProjPcts[c - 1], 1);
            }
            return (e.cache = t);
          };
          var u = function r(a) {
            var s;
            var u = a === "source";
            if (!i[a]) {
              return;
            }
            var c = e.pstyle(a + "-text-offset").pfValue;
            switch (n.edgeType) {
              case "self":
              case "compound":
              case "bezier":
              case "multibezier": {
                var v = l();
                var f;
                var h = 0;
                var d = 0;
                for (var p = 0; p < v.length; p++) {
                  var g = v[u ? p : v.length - 1 - p];
                  for (var y = 0; y < g.segments.length; y++) {
                    var m = g.segments[u ? y : g.segments.length - 1 - y];
                    var b = p === v.length - 1 && y === g.segments.length - 1;
                    h = d;
                    d += m.length;
                    if (d >= c || b) {
                      f = { cp: g, segment: m };
                      break;
                    }
                  }
                  if (f) {
                    break;
                  }
                }
                var x = f.cp;
                var w = f.segment;
                var E = (c - h) / w.length;
                var T = w.t1 - w.t0;
                var _ = u ? w.t0 + T * E : w.t1 - T * E;
                _ = kr(0, _, 1);
                t = Ir(x.p0, x.p1, x.p2, _);
                s = Fv(x.p0, x.p1, x.p2, _);
                break;
              }
              case "straight":
              case "segments":
              case "haystack": {
                var D = 0,
                  C,
                  N;
                var A, L;
                var I = n.allpts.length;
                for (var S = 0; S + 3 < I; S += 2) {
                  if (u) {
                    A = { x: n.allpts[S], y: n.allpts[S + 1] };
                    L = { x: n.allpts[S + 2], y: n.allpts[S + 3] };
                  } else {
                    A = { x: n.allpts[I - 2 - S], y: n.allpts[I - 1 - S] };
                    L = { x: n.allpts[I - 4 - S], y: n.allpts[I - 3 - S] };
                  }
                  C = Cr(A, L);
                  N = D;
                  D += C;
                  if (D >= c) {
                    break;
                  }
                }
                var k = c - N;
                var O = k / C;
                O = kr(0, O, 1);
                t = Sr(A, L, O);
                s = Bv(A, L);
                break;
              }
            }
            o("labelX", a, t.x);
            o("labelY", a, t.y);
            o("labelAutoAngle", a, s);
          };
          u("source");
          u("target");
          this.applyLabelDimensions(e);
        };
        Pv.applyLabelDimensions = function (e) {
          this.applyPrefixedLabelDimensions(e);
          if (e.isEdge()) {
            this.applyPrefixedLabelDimensions(e, "source");
            this.applyPrefixedLabelDimensions(e, "target");
          }
        };
        Pv.applyPrefixedLabelDimensions = function (e, t) {
          var r = e._private;
          var n = this.getLabelText(e, t);
          var a = this.calculateLabelDimensions(e, n);
          var i = e.pstyle("line-height").pfValue;
          var o = e.pstyle("text-wrap").strValue;
          var s = Vt(r.rscratch, "labelWrapCachedLines", t) || [];
          var l = o !== "wrap" ? 1 : Math.max(s.length, 1);
          var u = a.height / l;
          var c = u * i;
          var v = a.width;
          var f = a.height + (l - 1) * (i - 1) * u;
          Ut(r.rstyle, "labelWidth", t, v);
          Ut(r.rscratch, "labelWidth", t, v);
          Ut(r.rstyle, "labelHeight", t, f);
          Ut(r.rscratch, "labelHeight", t, f);
          Ut(r.rscratch, "labelLineHeight", t, c);
        };
        Pv.getLabelText = function (e, t) {
          var r = e._private;
          var n = t ? t + "-" : "";
          var a = e.pstyle(n + "label").strValue;
          var i = e.pstyle("text-transform").value;
          var o = function e(n, a) {
            if (a) {
              Ut(r.rscratch, n, t, a);
              return a;
            } else {
              return Vt(r.rscratch, n, t);
            }
          };
          if (!a) {
            return "";
          }
          if (i == "none");
          else if (i == "uppercase") {
            a = a.toUpperCase();
          } else if (i == "lowercase") {
            a = a.toLowerCase();
          }
          var s = e.pstyle("text-wrap").value;
          if (s === "wrap") {
            var l = o("labelKey");
            if (l != null && o("labelWrapKey") === l) {
              return o("labelWrapCachedText");
            }
            var u = "​";
            var c = a.split("\n");
            var v = e.pstyle("text-max-width").pfValue;
            var f = e.pstyle("text-overflow-wrap").value;
            var h = f === "anywhere";
            var d = [];
            var p = /[\s\u200b]+/;
            var g = h ? "" : " ";
            for (var y = 0; y < c.length; y++) {
              var m = c[y];
              var b = this.calculateLabelDimensions(e, m);
              var x = b.width;
              if (h) {
                var w = m.split("").join(u);
                m = w;
              }
              if (x > v) {
                var E = m.split(p);
                var T = "";
                for (var _ = 0; _ < E.length; _++) {
                  var D = E[_];
                  var C = T.length === 0 ? D : T + g + D;
                  var N = this.calculateLabelDimensions(e, C);
                  var A = N.width;
                  if (A <= v) {
                    T += D + g;
                  } else {
                    if (T) {
                      d.push(T);
                    }
                    T = D + g;
                  }
                }
                if (!T.match(/^[\s\u200b]+$/)) {
                  d.push(T);
                }
              } else {
                d.push(m);
              }
            }
            o("labelWrapCachedLines", d);
            a = o("labelWrapCachedText", d.join("\n"));
            o("labelWrapKey", l);
          } else if (s === "ellipsis") {
            var L = e.pstyle("text-max-width").pfValue;
            var I = "";
            var S = "…";
            var k = false;
            if (this.calculateLabelDimensions(e, a).width < L) {
              return a;
            }
            for (var O = 0; O < a.length; O++) {
              var M = this.calculateLabelDimensions(e, I + a[O] + S).width;
              if (M > L) {
                break;
              }
              I += a[O];
              if (O === a.length - 1) {
                k = true;
              }
            }
            if (!k) {
              I += S;
            }
            return I;
          }
          return a;
        };
        Pv.getLabelJustification = function (e) {
          var t = e.pstyle("text-justification").strValue;
          var r = e.pstyle("text-halign").strValue;
          if (t === "auto") {
            if (e.isNode()) {
              switch (r) {
                case "left":
                  return "right";
                case "right":
                  return "left";
                default:
                  return "center";
              }
            } else {
              return "center";
            }
          } else {
            return t;
          }
        };
        Pv.calculateLabelDimensions = function (e, t) {
          var r = this;
          var n = bt(t, e._private.labelDimsKey);
          var a = r.labelDimCache || (r.labelDimCache = []);
          var i = a[n];
          if (i != null) {
            return i;
          }
          var o = 0;
          var s = e.pstyle("font-style").strValue;
          var l = e.pstyle("font-size").pfValue;
          var u = e.pstyle("font-family").strValue;
          var c = e.pstyle("font-weight").strValue;
          var v = this.labelCalcCanvas;
          var f = this.labelCalcCanvasContext;
          if (!v) {
            v = this.labelCalcCanvas = document.createElement("canvas");
            f = this.labelCalcCanvasContext = v.getContext("2d");
            var h = v.style;
            h.position = "absolute";
            h.left = "-9999px";
            h.top = "-9999px";
            h.zIndex = "-1";
            h.visibility = "hidden";
            h.pointerEvents = "none";
          }
          f.font = "".concat(s, " ").concat(c, " ").concat(l, "px ").concat(u);
          var d = 0;
          var p = 0;
          var g = t.split("\n");
          for (var y = 0; y < g.length; y++) {
            var m = g[y];
            var b = f.measureText(m);
            var x = Math.ceil(b.width);
            var w = l;
            d = Math.max(x, d);
            p += w;
          }
          d += o;
          p += o;
          return (a[n] = { width: d, height: p });
        };
        Pv.calculateLabelAngle = function (e, t) {
          var r = e._private;
          var n = r.rscratch;
          var a = e.isEdge();
          var i = t ? t + "-" : "";
          var o = e.pstyle(i + "text-rotation");
          var s = o.strValue;
          if (s === "none") {
            return 0;
          } else if (a && s === "autorotate") {
            return n.labelAutoAngle;
          } else if (s === "autorotate") {
            return 0;
          } else {
            return o.pfValue;
          }
        };
        Pv.calculateLabelAngles = function (e) {
          var t = this;
          var r = e.isEdge();
          var n = e._private;
          var a = n.rscratch;
          a.labelAngle = t.calculateLabelAngle(e);
          if (r) {
            a.sourceLabelAngle = t.calculateLabelAngle(e, "source");
            a.targetLabelAngle = t.calculateLabelAngle(e, "target");
          }
        };
        var zv = {};
        var Gv = 28;
        var Yv = false;
        zv.getNodeShape = function (e) {
          var t = this;
          var r = e.pstyle("shape").value;
          if (r === "cutrectangle" && (e.width() < Gv || e.height() < Gv)) {
            if (!Yv) {
              kt("The `cutrectangle` node shape can not be used at small sizes so `rectangle` is used instead");
              Yv = true;
            }
            return "rectangle";
          }
          if (e.isParent()) {
            if (
              r === "rectangle" ||
              r === "roundrectangle" ||
              r === "round-rectangle" ||
              r === "cutrectangle" ||
              r === "cut-rectangle" ||
              r === "barrel"
            ) {
              return r;
            } else {
              return "rectangle";
            }
          }
          if (r === "polygon") {
            var n = e.pstyle("shape-polygon-points").value;
            return t.nodeShapes.makePolygon(n).name;
          }
          return r;
        };
        var Xv = {};
        Xv.registerCalculationListeners = function () {
          var e = this.cy;
          var t = e.collection();
          var r = this;
          var n = function e(r) {
            var n = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : true;
            t.merge(r);
            if (n) {
              for (var a = 0; a < r.length; a++) {
                var i = r[a];
                var o = i._private;
                var s = o.rstyle;
                s.clean = false;
                s.cleanConnected = false;
              }
            }
          };
          r.binder(e)
            .on("bounds.* dirty.*", function e(t) {
              var r = t.target;
              n(r);
            })
            .on("style.* background.*", function e(t) {
              var r = t.target;
              n(r, false);
            });
          var a = function a(i) {
            if (i) {
              var o = r.onUpdateEleCalcsFns;
              t.cleanStyle();
              for (var s = 0; s < t.length; s++) {
                var l = t[s];
                var u = l._private.rstyle;
                if (l.isNode() && !u.cleanConnected) {
                  n(l.connectedEdges());
                  u.cleanConnected = true;
                }
              }
              if (o) {
                for (var c = 0; c < o.length; c++) {
                  var v = o[c];
                  v(i, t);
                }
              }
              r.recalculateRenderedStyle(t);
              t = e.collection();
            }
          };
          r.flushRenderedStyleQueue = function () {
            a(true);
          };
          r.beforeRender(a, r.beforeRenderPriorities.eleCalcs);
        };
        Xv.onUpdateEleCalcs = function (e) {
          var t = (this.onUpdateEleCalcsFns = this.onUpdateEleCalcsFns || []);
          t.push(e);
        };
        Xv.recalculateRenderedStyle = function (e, t) {
          var r = function e(t) {
            return t._private.rstyle.cleanConnected;
          };
          var n = [];
          var a = [];
          if (this.destroyed) {
            return;
          }
          if (t === undefined) {
            t = true;
          }
          for (var i = 0; i < e.length; i++) {
            var o = e[i];
            var s = o._private;
            var l = s.rstyle;
            if (o.isEdge() && (!r(o.source()) || !r(o.target()))) {
              l.clean = false;
            }
            if ((t && l.clean) || o.removed()) {
              continue;
            }
            if (o.pstyle("display").value === "none") {
              continue;
            }
            if (s.group === "nodes") {
              a.push(o);
            } else {
              n.push(o);
            }
            l.clean = true;
          }
          for (var u = 0; u < a.length; u++) {
            var c = a[u];
            var v = c._private;
            var f = v.rstyle;
            var h = c.position();
            this.recalculateNodeLabelProjection(c);
            f.nodeX = h.x;
            f.nodeY = h.y;
            f.nodeW = c.pstyle("width").pfValue;
            f.nodeH = c.pstyle("height").pfValue;
          }
          this.recalculateEdgeProjections(n);
          for (var d = 0; d < n.length; d++) {
            var p = n[d];
            var g = p._private;
            var y = g.rstyle;
            var m = g.rscratch;
            y.srcX = m.arrowStartX;
            y.srcY = m.arrowStartY;
            y.tgtX = m.arrowEndX;
            y.tgtY = m.arrowEndY;
            y.midX = m.midX;
            y.midY = m.midY;
            y.labelAngle = m.labelAngle;
            y.sourceLabelAngle = m.sourceLabelAngle;
            y.targetLabelAngle = m.targetLabelAngle;
          }
        };
        var Vv = {};
        Vv.updateCachedGrabbedEles = function () {
          var e = this.cachedZSortedEles;
          if (!e) {
            return;
          }
          e.drag = [];
          e.nondrag = [];
          var t = [];
          for (var r = 0; r < e.length; r++) {
            var n = e[r];
            var a = n._private.rscratch;
            if (n.grabbed() && !n.isParent()) {
              t.push(n);
            } else if (a.inDragLayer) {
              e.drag.push(n);
            } else {
              e.nondrag.push(n);
            }
          }
          for (var r = 0; r < t.length; r++) {
            var n = t[r];
            e.drag.push(n);
          }
        };
        Vv.invalidateCachedZSortedEles = function () {
          this.cachedZSortedEles = null;
        };
        Vv.getCachedZSortedEles = function (e) {
          if (e || !this.cachedZSortedEles) {
            var t = this.cy.mutableElements().toArray();
            t.sort(Tu);
            t.interactive = t.filter(function (e) {
              return e.interactive();
            });
            this.cachedZSortedEles = t;
            this.updateCachedGrabbedEles();
          } else {
            t = this.cachedZSortedEles;
          }
          return t;
        };
        var Uv = {};
        [Av, Lv, Iv, kv, Ov, Pv, zv, Xv, Vv].forEach(function (e) {
          Q(Uv, e);
        });
        var jv = {};
        jv.getCachedImage = function (e, t, r) {
          var n = this;
          var a = (n.imageCache = n.imageCache || {});
          var i = a[e];
          if (i) {
            if (!i.image.complete) {
              i.image.addEventListener("load", r);
            }
            return i.image;
          } else {
            i = a[e] = a[e] || {};
            var o = (i.image = new Image());
            o.addEventListener("load", r);
            o.addEventListener("error", function () {
              o.error = true;
            });
            var s = "data:";
            var l = e.substring(0, s.length).toLowerCase() === s;
            if (!l) {
              t = t === "null" ? null : t;
              o.crossOrigin = t;
            }
            o.src = e;
            return o;
          }
        };
        var Hv = {};
        Hv.registerBinding = function (e, t, r, n) {
          var a = Array.prototype.slice.apply(arguments, [1]);
          var i = this.binder(e);
          return i.on.apply(i, a);
        };
        Hv.binder = function (e) {
          var t = this;
          var r = t.cy.window();
          var n = e === r || e === r.document || e === r.document.body || M(e);
          if (t.supportsPassiveEvents == null) {
            var a = false;
            try {
              var i = Object.defineProperty({}, "passive", {
                get: function e() {
                  a = true;
                  return true;
                },
              });
              r.addEventListener("test", null, i);
            } catch (s) {}
            t.supportsPassiveEvents = a;
          }
          var o = function r(a, i, o) {
            var s = Array.prototype.slice.call(arguments);
            if (n && t.supportsPassiveEvents) {
              s[2] = { capture: o != null ? o : false, passive: false, once: false };
            }
            t.bindings.push({ target: e, args: s });
            (e.addEventListener || e.on).apply(e, s);
            return this;
          };
          return { on: o, addEventListener: o, addListener: o, bind: o };
        };
        Hv.nodeIsDraggable = function (e) {
          return e && e.isNode() && !e.locked() && e.grabbable();
        };
        Hv.nodeIsGrabbable = function (e) {
          return this.nodeIsDraggable(e) && e.interactive();
        };
        Hv.load = function () {
          var e = this;
          var t = e.cy.window();
          var r = function e(t) {
            return t.selected();
          };
          var n = function t(r, n, a, i) {
            if (r == null) {
              r = e.cy;
            }
            for (var o = 0; o < n.length; o++) {
              var s = n[o];
              r.emit({ originalEvent: a, type: s, position: i });
            }
          };
          var a = function e(t) {
            return t.shiftKey || t.metaKey || t.ctrlKey;
          };
          var i = function t(r, n) {
            var a = true;
            if (e.cy.hasCompoundNodes() && r && r.pannable()) {
              for (var i = 0; n && i < n.length; i++) {
                var r = n[i];
                if (r.isNode() && r.isParent() && !r.pannable()) {
                  a = false;
                  break;
                }
              }
            } else {
              a = true;
            }
            return a;
          };
          var o = function e(t) {
            t[0]._private.grabbed = true;
          };
          var s = function e(t) {
            t[0]._private.grabbed = false;
          };
          var l = function e(t) {
            t[0]._private.rscratch.inDragLayer = true;
          };
          var u = function e(t) {
            t[0]._private.rscratch.inDragLayer = false;
          };
          var c = function e(t) {
            t[0]._private.rscratch.isGrabTarget = true;
          };
          var v = function e(t) {
            t[0]._private.rscratch.isGrabTarget = false;
          };
          var f = function e(t, r) {
            var n = r.addToList;
            var a = n.has(t);
            if (!a && t.grabbable() && !t.locked()) {
              n.merge(t);
              o(t);
            }
          };
          var h = function e(t, r) {
            if (!t.cy().hasCompoundNodes()) {
              return;
            }
            if (r.inDragLayer == null && r.addToList == null) {
              return;
            }
            var n = t.descendants();
            if (r.inDragLayer) {
              n.forEach(l);
              n.connectedEdges().forEach(l);
            }
            if (r.addToList) {
              f(n, r);
            }
          };
          var d = function t(r, n) {
            n = n || {};
            var a = r.cy().hasCompoundNodes();
            if (n.inDragLayer) {
              r.forEach(l);
              r.neighborhood()
                .stdFilter(function (e) {
                  return !a || e.isEdge();
                })
                .forEach(l);
            }
            if (n.addToList) {
              r.forEach(function (e) {
                f(e, n);
              });
            }
            h(r, n);
            y(r, { inDragLayer: n.inDragLayer });
            e.updateCachedGrabbedEles();
          };
          var p = d;
          var g = function t(r) {
            if (!r) {
              return;
            }
            e.getCachedZSortedEles().forEach(function (e) {
              s(e);
              u(e);
              v(e);
            });
            e.updateCachedGrabbedEles();
          };
          var y = function e(t, r) {
            if (r.inDragLayer == null && r.addToList == null) {
              return;
            }
            if (!t.cy().hasCompoundNodes()) {
              return;
            }
            var n = t.ancestors().orphans();
            if (n.same(t)) {
              return;
            }
            var a = n.descendants().spawnSelf().merge(n).unmerge(t).unmerge(t.descendants());
            var i = a.connectedEdges();
            if (r.inDragLayer) {
              i.forEach(l);
              a.forEach(l);
            }
            if (r.addToList) {
              a.forEach(function (e) {
                f(e, r);
              });
            }
          };
          var m = function e() {
            if (document.activeElement != null && document.activeElement.blur != null) {
              document.activeElement.blur();
            }
          };
          var b = typeof MutationObserver !== "undefined";
          var x = typeof ResizeObserver !== "undefined";
          if (b) {
            e.removeObserver = new MutationObserver(function (t) {
              for (var r = 0; r < t.length; r++) {
                var n = t[r];
                var a = n.removedNodes;
                if (a) {
                  for (var i = 0; i < a.length; i++) {
                    var o = a[i];
                    if (o === e.container) {
                      e.destroy();
                      break;
                    }
                  }
                }
              }
            });
            if (e.container.parentNode) {
              e.removeObserver.observe(e.container.parentNode, { childList: true });
            }
          } else {
            e.registerBinding(e.container, "DOMNodeRemoved", function (t) {
              e.destroy();
            });
          }
          var w = nt(function () {
            e.cy.resize();
          }, 100);
          if (b) {
            e.styleObserver = new MutationObserver(w);
            e.styleObserver.observe(e.container, { attributes: true });
          }
          e.registerBinding(t, "resize", w);
          if (x) {
            e.resizeObserver = new ResizeObserver(w);
            e.resizeObserver.observe(e.container);
          }
          var E = function e(t, r) {
            while (t != null) {
              r(t);
              t = t.parentNode;
            }
          };
          var T = function t() {
            e.invalidateContainerClientCoordsCache();
          };
          E(e.container, function (t) {
            e.registerBinding(t, "transitionend", T);
            e.registerBinding(t, "animationend", T);
            e.registerBinding(t, "scroll", T);
          });
          e.registerBinding(e.container, "contextmenu", function (e) {
            e.preventDefault();
          });
          var D = function t() {
            return e.selection[4] !== 0;
          };
          var C = function t(r) {
            var n = e.findContainerClientCoords();
            var a = n[0];
            var i = n[1];
            var o = n[2];
            var s = n[3];
            var l = r.touches ? r.touches : [r];
            var u = false;
            for (var c = 0; c < l.length; c++) {
              var v = l[c];
              if (a <= v.clientX && v.clientX <= a + o && i <= v.clientY && v.clientY <= i + s) {
                u = true;
                break;
              }
            }
            if (!u) {
              return false;
            }
            var f = e.container;
            var h = r.target;
            var d = h.parentNode;
            var p = false;
            while (d) {
              if (d === f) {
                p = true;
                break;
              }
              d = d.parentNode;
            }
            if (!p) {
              return false;
            }
            return true;
          };
          e.registerBinding(
            e.container,
            "mousedown",
            function t(r) {
              if (!C(r)) {
                return;
              }
              r.preventDefault();
              m();
              e.hoverData.capture = true;
              e.hoverData.which = r.which;
              var a = e.cy;
              var i = [r.clientX, r.clientY];
              var o = e.projectIntoViewport(i[0], i[1]);
              var s = e.selection;
              var l = e.findNearestElements(o[0], o[1], true, false);
              var u = l[0];
              var v = e.dragData.possibleDragElements;
              e.hoverData.mdownPos = o;
              e.hoverData.mdownGPos = i;
              var f = function t() {
                e.hoverData.tapholdCancelled = false;
                clearTimeout(e.hoverData.tapholdTimeout);
                e.hoverData.tapholdTimeout = setTimeout(function () {
                  if (e.hoverData.tapholdCancelled) {
                    return;
                  } else {
                    var t = e.hoverData.down;
                    if (t) {
                      t.emit({ originalEvent: r, type: "taphold", position: { x: o[0], y: o[1] } });
                    } else {
                      a.emit({ originalEvent: r, type: "taphold", position: { x: o[0], y: o[1] } });
                    }
                  }
                }, e.tapholdDuration);
              };
              if (r.which == 3) {
                e.hoverData.cxtStarted = true;
                var h = { originalEvent: r, type: "cxttapstart", position: { x: o[0], y: o[1] } };
                if (u) {
                  u.activate();
                  u.emit(h);
                  e.hoverData.down = u;
                } else {
                  a.emit(h);
                }
                e.hoverData.downTime = new Date().getTime();
                e.hoverData.cxtDragged = false;
              } else if (r.which == 1) {
                if (u) {
                  u.activate();
                }
                {
                  if (u != null) {
                    if (e.nodeIsGrabbable(u)) {
                      var g = function e(t) {
                        return { originalEvent: r, type: t, position: { x: o[0], y: o[1] } };
                      };
                      var y = function e(t) {
                        t.emit(g("grab"));
                      };
                      c(u);
                      if (!u.selected()) {
                        v = e.dragData.possibleDragElements = a.collection();
                        p(u, { addToList: v });
                        u.emit(g("grabon")).emit(g("grab"));
                      } else {
                        v = e.dragData.possibleDragElements = a.collection();
                        var b = a.$(function (t) {
                          return t.isNode() && t.selected() && e.nodeIsGrabbable(t);
                        });
                        d(b, { addToList: v });
                        u.emit(g("grabon"));
                        b.forEach(y);
                      }
                      e.redrawHint("eles", true);
                      e.redrawHint("drag", true);
                    }
                  }
                  e.hoverData.down = u;
                  e.hoverData.downs = l;
                  e.hoverData.downTime = new Date().getTime();
                }
                n(u, ["mousedown", "tapstart", "vmousedown"], r, { x: o[0], y: o[1] });
                if (u == null) {
                  s[4] = 1;
                  e.data.bgActivePosistion = { x: o[0], y: o[1] };
                  e.redrawHint("select", true);
                  e.redraw();
                } else if (u.pannable()) {
                  s[4] = 1;
                }
                f();
              }
              s[0] = s[2] = o[0];
              s[1] = s[3] = o[1];
            },
            false
          );
          e.registerBinding(
            t,
            "mousemove",
            function t(r) {
              var o = e.hoverData.capture;
              if (!o && !C(r)) {
                return;
              }
              var s = false;
              var l = e.cy;
              var u = l.zoom();
              var c = [r.clientX, r.clientY];
              var v = e.projectIntoViewport(c[0], c[1]);
              var f = e.hoverData.mdownPos;
              var h = e.hoverData.mdownGPos;
              var p = e.selection;
              var y = null;
              if (!e.hoverData.draggingEles && !e.hoverData.dragging && !e.hoverData.selecting) {
                y = e.findNearestElement(v[0], v[1], true, false);
              }
              var m = e.hoverData.last;
              var b = e.hoverData.down;
              var x = [v[0] - p[2], v[1] - p[3]];
              var w = e.dragData.possibleDragElements;
              var E;
              if (h) {
                var T = c[0] - h[0];
                var D = T * T;
                var N = c[1] - h[1];
                var A = N * N;
                var L = D + A;
                e.hoverData.isOverThresholdDrag = E = L >= e.desktopTapThreshold2;
              }
              var I = a(r);
              if (E) {
                e.hoverData.tapholdCancelled = true;
              }
              var S = function t() {
                var r = (e.hoverData.dragDelta = e.hoverData.dragDelta || []);
                if (r.length === 0) {
                  r.push(x[0]);
                  r.push(x[1]);
                } else {
                  r[0] += x[0];
                  r[1] += x[1];
                }
              };
              s = true;
              n(y, ["mousemove", "vmousemove", "tapdrag"], r, { x: v[0], y: v[1] });
              var k = function t() {
                e.data.bgActivePosistion = undefined;
                if (!e.hoverData.selecting) {
                  l.emit({ originalEvent: r, type: "boxstart", position: { x: v[0], y: v[1] } });
                }
                p[4] = 1;
                e.hoverData.selecting = true;
                e.redrawHint("select", true);
                e.redraw();
              };
              if (e.hoverData.which === 3) {
                if (E) {
                  var O = { originalEvent: r, type: "cxtdrag", position: { x: v[0], y: v[1] } };
                  if (b) {
                    b.emit(O);
                  } else {
                    l.emit(O);
                  }
                  e.hoverData.cxtDragged = true;
                  if (!e.hoverData.cxtOver || y !== e.hoverData.cxtOver) {
                    if (e.hoverData.cxtOver) {
                      e.hoverData.cxtOver.emit({ originalEvent: r, type: "cxtdragout", position: { x: v[0], y: v[1] } });
                    }
                    e.hoverData.cxtOver = y;
                    if (y) {
                      y.emit({ originalEvent: r, type: "cxtdragover", position: { x: v[0], y: v[1] } });
                    }
                  }
                }
              } else if (e.hoverData.dragging) {
                s = true;
                if (l.panningEnabled() && l.userPanningEnabled()) {
                  var M;
                  if (e.hoverData.justStartedPan) {
                    var P = e.hoverData.mdownPos;
                    M = { x: (v[0] - P[0]) * u, y: (v[1] - P[1]) * u };
                    e.hoverData.justStartedPan = false;
                  } else {
                    M = { x: x[0] * u, y: x[1] * u };
                  }
                  l.panBy(M);
                  l.emit("dragpan");
                  e.hoverData.dragged = true;
                }
                v = e.projectIntoViewport(r.clientX, r.clientY);
              } else if (p[4] == 1 && (b == null || b.pannable())) {
                if (E) {
                  if (!e.hoverData.dragging && l.boxSelectionEnabled() && (I || !l.panningEnabled() || !l.userPanningEnabled())) {
                    k();
                  } else if (!e.hoverData.selecting && l.panningEnabled() && l.userPanningEnabled()) {
                    var R = i(b, e.hoverData.downs);
                    if (R) {
                      e.hoverData.dragging = true;
                      e.hoverData.justStartedPan = true;
                      p[4] = 0;
                      e.data.bgActivePosistion = yr(f);
                      e.redrawHint("select", true);
                      e.redraw();
                    }
                  }
                  if (b && b.pannable() && b.active()) {
                    b.unactivate();
                  }
                }
              } else {
                if (b && b.pannable() && b.active()) {
                  b.unactivate();
                }
                if ((!b || !b.grabbed()) && y != m) {
                  if (m) {
                    n(m, ["mouseout", "tapdragout"], r, { x: v[0], y: v[1] });
                  }
                  if (y) {
                    n(y, ["mouseover", "tapdragover"], r, { x: v[0], y: v[1] });
                  }
                  e.hoverData.last = y;
                }
                if (b) {
                  if (E) {
                    if (l.boxSelectionEnabled() && I) {
                      if (b && b.grabbed()) {
                        g(w);
                        b.emit("freeon");
                        w.emit("free");
                        if (e.dragData.didDrag) {
                          b.emit("dragfreeon");
                          w.emit("dragfree");
                        }
                      }
                      k();
                    } else if (b && b.grabbed() && e.nodeIsDraggable(b)) {
                      var B = !e.dragData.didDrag;
                      if (B) {
                        e.redrawHint("eles", true);
                      }
                      e.dragData.didDrag = true;
                      if (!e.hoverData.draggingEles) {
                        d(w, { inDragLayer: true });
                      }
                      var F = { x: 0, y: 0 };
                      if (_(x[0]) && _(x[1])) {
                        F.x += x[0];
                        F.y += x[1];
                        if (B) {
                          var z = e.hoverData.dragDelta;
                          if (z && _(z[0]) && _(z[1])) {
                            F.x += z[0];
                            F.y += z[1];
                          }
                        }
                      }
                      e.hoverData.draggingEles = true;
                      w.silentShift(F).emit("position drag");
                      e.redrawHint("drag", true);
                      e.redraw();
                    }
                  } else {
                    S();
                  }
                }
                s = true;
              }
              p[2] = v[0];
              p[3] = v[1];
              if (s) {
                if (r.stopPropagation) r.stopPropagation();
                if (r.preventDefault) r.preventDefault();
                return false;
              }
            },
            false
          );
          var N, A, L;
          e.registerBinding(
            t,
            "mouseup",
            function t(i) {
              var o = e.hoverData.capture;
              if (!o) {
                return;
              }
              e.hoverData.capture = false;
              var s = e.cy;
              var l = e.projectIntoViewport(i.clientX, i.clientY);
              var u = e.selection;
              var c = e.findNearestElement(l[0], l[1], true, false);
              var v = e.dragData.possibleDragElements;
              var f = e.hoverData.down;
              var h = a(i);
              if (e.data.bgActivePosistion) {
                e.redrawHint("select", true);
                e.redraw();
              }
              e.hoverData.tapholdCancelled = true;
              e.data.bgActivePosistion = undefined;
              if (f) {
                f.unactivate();
              }
              if (e.hoverData.which === 3) {
                var d = { originalEvent: i, type: "cxttapend", position: { x: l[0], y: l[1] } };
                if (f) {
                  f.emit(d);
                } else {
                  s.emit(d);
                }
                if (!e.hoverData.cxtDragged) {
                  var p = { originalEvent: i, type: "cxttap", position: { x: l[0], y: l[1] } };
                  if (f) {
                    f.emit(p);
                  } else {
                    s.emit(p);
                  }
                }
                e.hoverData.cxtDragged = false;
                e.hoverData.which = null;
              } else if (e.hoverData.which === 1) {
                n(c, ["mouseup", "tapend", "vmouseup"], i, { x: l[0], y: l[1] });
                if (!e.dragData.didDrag && !e.hoverData.dragged && !e.hoverData.selecting && !e.hoverData.isOverThresholdDrag) {
                  n(f, ["click", "tap", "vclick"], i, { x: l[0], y: l[1] });
                  A = false;
                  if (i.timeStamp - L <= s.multiClickDebounceTime()) {
                    N && clearTimeout(N);
                    A = true;
                    L = null;
                    n(f, ["dblclick", "dbltap", "vdblclick"], i, { x: l[0], y: l[1] });
                  } else {
                    N = setTimeout(function () {
                      if (A) return;
                      n(f, ["oneclick", "onetap", "voneclick"], i, { x: l[0], y: l[1] });
                    }, s.multiClickDebounceTime());
                    L = i.timeStamp;
                  }
                }
                if (f == null && !e.dragData.didDrag && !e.hoverData.selecting && !e.hoverData.dragged && !a(i)) {
                  s.$(r).unselect(["tapunselect"]);
                  if (v.length > 0) {
                    e.redrawHint("eles", true);
                  }
                  e.dragData.possibleDragElements = v = s.collection();
                }
                if (c == f && !e.dragData.didDrag && !e.hoverData.selecting) {
                  if (c != null && c._private.selectable) {
                    if (e.hoverData.dragging);
                    else if (s.selectionType() === "additive" || h) {
                      if (c.selected()) {
                        c.unselect(["tapunselect"]);
                      } else {
                        c.select(["tapselect"]);
                      }
                    } else {
                      if (!h) {
                        s.$(r).unmerge(c).unselect(["tapunselect"]);
                        c.select(["tapselect"]);
                      }
                    }
                    e.redrawHint("eles", true);
                  }
                }
                if (e.hoverData.selecting) {
                  var y = s.collection(e.getAllInBox(u[0], u[1], u[2], u[3]));
                  e.redrawHint("select", true);
                  if (y.length > 0) {
                    e.redrawHint("eles", true);
                  }
                  s.emit({ type: "boxend", originalEvent: i, position: { x: l[0], y: l[1] } });
                  var m = function e(t) {
                    return t.selectable() && !t.selected();
                  };
                  if (s.selectionType() === "additive") {
                    y.emit("box").stdFilter(m).select().emit("boxselect");
                  } else {
                    if (!h) {
                      s.$(r).unmerge(y).unselect();
                    }
                    y.emit("box").stdFilter(m).select().emit("boxselect");
                  }
                  e.redraw();
                }
                if (e.hoverData.dragging) {
                  e.hoverData.dragging = false;
                  e.redrawHint("select", true);
                  e.redrawHint("eles", true);
                  e.redraw();
                }
                if (!u[4]) {
                  e.redrawHint("drag", true);
                  e.redrawHint("eles", true);
                  var b = f && f.grabbed();
                  g(v);
                  if (b) {
                    f.emit("freeon");
                    v.emit("free");
                    if (e.dragData.didDrag) {
                      f.emit("dragfreeon");
                      v.emit("dragfree");
                    }
                  }
                }
              }
              u[4] = 0;
              e.hoverData.down = null;
              e.hoverData.cxtStarted = false;
              e.hoverData.draggingEles = false;
              e.hoverData.selecting = false;
              e.hoverData.isOverThresholdDrag = false;
              e.dragData.didDrag = false;
              e.hoverData.dragged = false;
              e.hoverData.dragDelta = [];
              e.hoverData.mdownPos = null;
              e.hoverData.mdownGPos = null;
            },
            false
          );
          var I = function t(r) {
            if (e.scrollingPage) {
              return;
            }
            var n = e.cy;
            var a = n.zoom();
            var i = n.pan();
            var o = e.projectIntoViewport(r.clientX, r.clientY);
            var s = [o[0] * a + i.x, o[1] * a + i.y];
            if (e.hoverData.draggingEles || e.hoverData.dragging || e.hoverData.cxtStarted || D()) {
              r.preventDefault();
              return;
            }
            if (n.panningEnabled() && n.userPanningEnabled() && n.zoomingEnabled() && n.userZoomingEnabled()) {
              r.preventDefault();
              e.data.wheelZooming = true;
              clearTimeout(e.data.wheelTimeout);
              e.data.wheelTimeout = setTimeout(function () {
                e.data.wheelZooming = false;
                e.redrawHint("eles", true);
                e.redraw();
              }, 150);
              var l;
              if (r.deltaY != null) {
                l = r.deltaY / -250;
              } else if (r.wheelDeltaY != null) {
                l = r.wheelDeltaY / 1e3;
              } else {
                l = r.wheelDelta / 1e3;
              }
              l = l * e.wheelSensitivity;
              var u = r.deltaMode === 1;
              if (u) {
                l *= 33;
              }
              var c = n.zoom() * Math.pow(10, l);
              if (r.type === "gesturechange") {
                c = e.gestureStartZoom * r.scale;
              }
              n.zoom({ level: c, renderedPosition: { x: s[0], y: s[1] } });
              n.emit(r.type === "gesturechange" ? "pinchzoom" : "scrollzoom");
            }
          };
          e.registerBinding(e.container, "wheel", I, true);
          e.registerBinding(
            t,
            "scroll",
            function t(r) {
              e.scrollingPage = true;
              clearTimeout(e.scrollingPageTimeout);
              e.scrollingPageTimeout = setTimeout(function () {
                e.scrollingPage = false;
              }, 250);
            },
            true
          );
          e.registerBinding(
            e.container,
            "gesturestart",
            function t(r) {
              e.gestureStartZoom = e.cy.zoom();
              if (!e.hasTouchStarted) {
                r.preventDefault();
              }
            },
            true
          );
          e.registerBinding(
            e.container,
            "gesturechange",
            function (t) {
              if (!e.hasTouchStarted) {
                I(t);
              }
            },
            true
          );
          e.registerBinding(
            e.container,
            "mouseout",
            function t(r) {
              var n = e.projectIntoViewport(r.clientX, r.clientY);
              e.cy.emit({ originalEvent: r, type: "mouseout", position: { x: n[0], y: n[1] } });
            },
            false
          );
          e.registerBinding(
            e.container,
            "mouseover",
            function t(r) {
              var n = e.projectIntoViewport(r.clientX, r.clientY);
              e.cy.emit({ originalEvent: r, type: "mouseover", position: { x: n[0], y: n[1] } });
            },
            false
          );
          var S, k, O, M;
          var P, R;
          var B, F;
          var z, G;
          var Y, X;
          var V;
          var U = function e(t, r, n, a) {
            return Math.sqrt((n - t) * (n - t) + (a - r) * (a - r));
          };
          var j = function e(t, r, n, a) {
            return (n - t) * (n - t) + (a - r) * (a - r);
          };
          var H;
          e.registerBinding(
            e.container,
            "touchstart",
            (H = function t(r) {
              e.hasTouchStarted = true;
              if (!C(r)) {
                return;
              }
              m();
              e.touchData.capture = true;
              e.data.bgActivePosistion = undefined;
              var a = e.cy;
              var i = e.touchData.now;
              var o = e.touchData.earlier;
              if (r.touches[0]) {
                var s = e.projectIntoViewport(r.touches[0].clientX, r.touches[0].clientY);
                i[0] = s[0];
                i[1] = s[1];
              }
              if (r.touches[1]) {
                var s = e.projectIntoViewport(r.touches[1].clientX, r.touches[1].clientY);
                i[2] = s[0];
                i[3] = s[1];
              }
              if (r.touches[2]) {
                var s = e.projectIntoViewport(r.touches[2].clientX, r.touches[2].clientY);
                i[4] = s[0];
                i[5] = s[1];
              }
              if (r.touches[1]) {
                e.touchData.singleTouchMoved = true;
                g(e.dragData.touchDragEles);
                var l = e.findContainerClientCoords();
                z = l[0];
                G = l[1];
                Y = l[2];
                X = l[3];
                S = r.touches[0].clientX - z;
                k = r.touches[0].clientY - G;
                O = r.touches[1].clientX - z;
                M = r.touches[1].clientY - G;
                V = 0 <= S && S <= Y && 0 <= O && O <= Y && 0 <= k && k <= X && 0 <= M && M <= X;
                var u = a.pan();
                var v = a.zoom();
                P = U(S, k, O, M);
                R = j(S, k, O, M);
                B = [(S + O) / 2, (k + M) / 2];
                F = [(B[0] - u.x) / v, (B[1] - u.y) / v];
                var f = 200;
                var h = f * f;
                if (R < h && !r.touches[2]) {
                  var y = e.findNearestElement(i[0], i[1], true, true);
                  var b = e.findNearestElement(i[2], i[3], true, true);
                  if (y && y.isNode()) {
                    y.activate().emit({ originalEvent: r, type: "cxttapstart", position: { x: i[0], y: i[1] } });
                    e.touchData.start = y;
                  } else if (b && b.isNode()) {
                    b.activate().emit({ originalEvent: r, type: "cxttapstart", position: { x: i[0], y: i[1] } });
                    e.touchData.start = b;
                  } else {
                    a.emit({ originalEvent: r, type: "cxttapstart", position: { x: i[0], y: i[1] } });
                  }
                  if (e.touchData.start) {
                    e.touchData.start._private.grabbed = false;
                  }
                  e.touchData.cxt = true;
                  e.touchData.cxtDragged = false;
                  e.data.bgActivePosistion = undefined;
                  e.redraw();
                  return;
                }
              }
              if (r.touches[2]) {
                if (a.boxSelectionEnabled()) {
                  r.preventDefault();
                }
              } else if (r.touches[1]);
              else if (r.touches[0]) {
                var x = e.findNearestElements(i[0], i[1], true, true);
                var w = x[0];
                if (w != null) {
                  w.activate();
                  e.touchData.start = w;
                  e.touchData.starts = x;
                  if (e.nodeIsGrabbable(w)) {
                    var E = (e.dragData.touchDragEles = a.collection());
                    var T = null;
                    e.redrawHint("eles", true);
                    e.redrawHint("drag", true);
                    if (w.selected()) {
                      T = a.$(function (t) {
                        return t.selected() && e.nodeIsGrabbable(t);
                      });
                      d(T, { addToList: E });
                    } else {
                      p(w, { addToList: E });
                    }
                    c(w);
                    var _ = function e(t) {
                      return { originalEvent: r, type: t, position: { x: i[0], y: i[1] } };
                    };
                    w.emit(_("grabon"));
                    if (T) {
                      T.forEach(function (e) {
                        e.emit(_("grab"));
                      });
                    } else {
                      w.emit(_("grab"));
                    }
                  }
                }
                n(w, ["touchstart", "tapstart", "vmousedown"], r, { x: i[0], y: i[1] });
                if (w == null) {
                  e.data.bgActivePosistion = { x: s[0], y: s[1] };
                  e.redrawHint("select", true);
                  e.redraw();
                }
                e.touchData.singleTouchMoved = false;
                e.touchData.singleTouchStartTime = +new Date();
                clearTimeout(e.touchData.tapholdTimeout);
                e.touchData.tapholdTimeout = setTimeout(function () {
                  if (e.touchData.singleTouchMoved === false && !e.pinching && !e.touchData.selecting) {
                    n(e.touchData.start, ["taphold"], r, { x: i[0], y: i[1] });
                  }
                }, e.tapholdDuration);
              }
              if (r.touches.length >= 1) {
                var D = (e.touchData.startPosition = [null, null, null, null, null, null]);
                for (var N = 0; N < i.length; N++) {
                  D[N] = o[N] = i[N];
                }
                var A = r.touches[0];
                e.touchData.startGPosition = [A.clientX, A.clientY];
              }
            }),
            false
          );
          var q;
          e.registerBinding(
            window,
            "touchmove",
            (q = function t(r) {
              var a = e.touchData.capture;
              if (!a && !C(r)) {
                return;
              }
              var o = e.selection;
              var s = e.cy;
              var l = e.touchData.now;
              var u = e.touchData.earlier;
              var c = s.zoom();
              if (r.touches[0]) {
                var v = e.projectIntoViewport(r.touches[0].clientX, r.touches[0].clientY);
                l[0] = v[0];
                l[1] = v[1];
              }
              if (r.touches[1]) {
                var v = e.projectIntoViewport(r.touches[1].clientX, r.touches[1].clientY);
                l[2] = v[0];
                l[3] = v[1];
              }
              if (r.touches[2]) {
                var v = e.projectIntoViewport(r.touches[2].clientX, r.touches[2].clientY);
                l[4] = v[0];
                l[5] = v[1];
              }
              var f = e.touchData.startGPosition;
              var h;
              if (a && r.touches[0] && f) {
                var p = [];
                for (var y = 0; y < l.length; y++) {
                  p[y] = l[y] - u[y];
                }
                var m = r.touches[0].clientX - f[0];
                var b = m * m;
                var x = r.touches[0].clientY - f[1];
                var w = x * x;
                var E = b + w;
                h = E >= e.touchTapThreshold2;
              }
              if (a && e.touchData.cxt) {
                r.preventDefault();
                var T = r.touches[0].clientX - z,
                  D = r.touches[0].clientY - G;
                var N = r.touches[1].clientX - z,
                  A = r.touches[1].clientY - G;
                var L = j(T, D, N, A);
                var I = L / R;
                var B = 150;
                var Y = B * B;
                var X = 1.5;
                var H = X * X;
                if (I >= H || L >= Y) {
                  e.touchData.cxt = false;
                  e.data.bgActivePosistion = undefined;
                  e.redrawHint("select", true);
                  var q = { originalEvent: r, type: "cxttapend", position: { x: l[0], y: l[1] } };
                  if (e.touchData.start) {
                    e.touchData.start.unactivate().emit(q);
                    e.touchData.start = null;
                  } else {
                    s.emit(q);
                  }
                }
              }
              if (a && e.touchData.cxt) {
                var q = { originalEvent: r, type: "cxtdrag", position: { x: l[0], y: l[1] } };
                e.data.bgActivePosistion = undefined;
                e.redrawHint("select", true);
                if (e.touchData.start) {
                  e.touchData.start.emit(q);
                } else {
                  s.emit(q);
                }
                if (e.touchData.start) {
                  e.touchData.start._private.grabbed = false;
                }
                e.touchData.cxtDragged = true;
                var W = e.findNearestElement(l[0], l[1], true, true);
                if (!e.touchData.cxtOver || W !== e.touchData.cxtOver) {
                  if (e.touchData.cxtOver) {
                    e.touchData.cxtOver.emit({ originalEvent: r, type: "cxtdragout", position: { x: l[0], y: l[1] } });
                  }
                  e.touchData.cxtOver = W;
                  if (W) {
                    W.emit({ originalEvent: r, type: "cxtdragover", position: { x: l[0], y: l[1] } });
                  }
                }
              } else if (a && r.touches[2] && s.boxSelectionEnabled()) {
                r.preventDefault();
                e.data.bgActivePosistion = undefined;
                this.lastThreeTouch = +new Date();
                if (!e.touchData.selecting) {
                  s.emit({ originalEvent: r, type: "boxstart", position: { x: l[0], y: l[1] } });
                }
                e.touchData.selecting = true;
                e.touchData.didSelect = true;
                o[4] = 1;
                if (!o || o.length === 0 || o[0] === undefined) {
                  o[0] = (l[0] + l[2] + l[4]) / 3;
                  o[1] = (l[1] + l[3] + l[5]) / 3;
                  o[2] = (l[0] + l[2] + l[4]) / 3 + 1;
                  o[3] = (l[1] + l[3] + l[5]) / 3 + 1;
                } else {
                  o[2] = (l[0] + l[2] + l[4]) / 3;
                  o[3] = (l[1] + l[3] + l[5]) / 3;
                }
                e.redrawHint("select", true);
                e.redraw();
              } else if (
                a &&
                r.touches[1] &&
                !e.touchData.didSelect &&
                s.zoomingEnabled() &&
                s.panningEnabled() &&
                s.userZoomingEnabled() &&
                s.userPanningEnabled()
              ) {
                r.preventDefault();
                e.data.bgActivePosistion = undefined;
                e.redrawHint("select", true);
                var $ = e.dragData.touchDragEles;
                if ($) {
                  e.redrawHint("drag", true);
                  for (var K = 0; K < $.length; K++) {
                    var Z = $[K]._private;
                    Z.grabbed = false;
                    Z.rscratch.inDragLayer = false;
                  }
                }
                var Q = e.touchData.start;
                var T = r.touches[0].clientX - z,
                  D = r.touches[0].clientY - G;
                var N = r.touches[1].clientX - z,
                  A = r.touches[1].clientY - G;
                var J = U(T, D, N, A);
                var ee = J / P;
                if (V) {
                  var te = T - S;
                  var re = D - k;
                  var ne = N - O;
                  var ae = A - M;
                  var ie = (te + ne) / 2;
                  var oe = (re + ae) / 2;
                  var se = s.zoom();
                  var le = se * ee;
                  var ue = s.pan();
                  var ce = F[0] * se + ue.x;
                  var ve = F[1] * se + ue.y;
                  var fe = { x: (-le / se) * (ce - ue.x - ie) + ce, y: (-le / se) * (ve - ue.y - oe) + ve };
                  if (Q && Q.active()) {
                    var $ = e.dragData.touchDragEles;
                    g($);
                    e.redrawHint("drag", true);
                    e.redrawHint("eles", true);
                    Q.unactivate().emit("freeon");
                    $.emit("free");
                    if (e.dragData.didDrag) {
                      Q.emit("dragfreeon");
                      $.emit("dragfree");
                    }
                  }
                  s.viewport({ zoom: le, pan: fe, cancelOnFailedZoom: true });
                  s.emit("pinchzoom");
                  P = J;
                  S = T;
                  k = D;
                  O = N;
                  M = A;
                  e.pinching = true;
                }
                if (r.touches[0]) {
                  var v = e.projectIntoViewport(r.touches[0].clientX, r.touches[0].clientY);
                  l[0] = v[0];
                  l[1] = v[1];
                }
                if (r.touches[1]) {
                  var v = e.projectIntoViewport(r.touches[1].clientX, r.touches[1].clientY);
                  l[2] = v[0];
                  l[3] = v[1];
                }
                if (r.touches[2]) {
                  var v = e.projectIntoViewport(r.touches[2].clientX, r.touches[2].clientY);
                  l[4] = v[0];
                  l[5] = v[1];
                }
              } else if (r.touches[0] && !e.touchData.didSelect) {
                var he = e.touchData.start;
                var de = e.touchData.last;
                var W;
                if (!e.hoverData.draggingEles && !e.swipePanning) {
                  W = e.findNearestElement(l[0], l[1], true, true);
                }
                if (a && he != null) {
                  r.preventDefault();
                }
                if (a && he != null && e.nodeIsDraggable(he)) {
                  if (h) {
                    var $ = e.dragData.touchDragEles;
                    var pe = !e.dragData.didDrag;
                    if (pe) {
                      d($, { inDragLayer: true });
                    }
                    e.dragData.didDrag = true;
                    var ge = { x: 0, y: 0 };
                    if (_(p[0]) && _(p[1])) {
                      ge.x += p[0];
                      ge.y += p[1];
                      if (pe) {
                        e.redrawHint("eles", true);
                        var ye = e.touchData.dragDelta;
                        if (ye && _(ye[0]) && _(ye[1])) {
                          ge.x += ye[0];
                          ge.y += ye[1];
                        }
                      }
                    }
                    e.hoverData.draggingEles = true;
                    $.silentShift(ge).emit("position drag");
                    e.redrawHint("drag", true);
                    if (e.touchData.startPosition[0] == u[0] && e.touchData.startPosition[1] == u[1]) {
                      e.redrawHint("eles", true);
                    }
                    e.redraw();
                  } else {
                    var ye = (e.touchData.dragDelta = e.touchData.dragDelta || []);
                    if (ye.length === 0) {
                      ye.push(p[0]);
                      ye.push(p[1]);
                    } else {
                      ye[0] += p[0];
                      ye[1] += p[1];
                    }
                  }
                }
                {
                  n(he || W, ["touchmove", "tapdrag", "vmousemove"], r, { x: l[0], y: l[1] });
                  if ((!he || !he.grabbed()) && W != de) {
                    if (de) {
                      de.emit({ originalEvent: r, type: "tapdragout", position: { x: l[0], y: l[1] } });
                    }
                    if (W) {
                      W.emit({ originalEvent: r, type: "tapdragover", position: { x: l[0], y: l[1] } });
                    }
                  }
                  e.touchData.last = W;
                }
                if (a) {
                  for (var K = 0; K < l.length; K++) {
                    if (l[K] && e.touchData.startPosition[K] && h) {
                      e.touchData.singleTouchMoved = true;
                    }
                  }
                }
                if (a && (he == null || he.pannable()) && s.panningEnabled() && s.userPanningEnabled()) {
                  var me = i(he, e.touchData.starts);
                  if (me) {
                    r.preventDefault();
                    if (!e.data.bgActivePosistion) {
                      e.data.bgActivePosistion = yr(e.touchData.startPosition);
                    }
                    if (e.swipePanning) {
                      s.panBy({ x: p[0] * c, y: p[1] * c });
                      s.emit("dragpan");
                    } else if (h) {
                      e.swipePanning = true;
                      s.panBy({ x: m * c, y: x * c });
                      s.emit("dragpan");
                      if (he) {
                        he.unactivate();
                        e.redrawHint("select", true);
                        e.touchData.start = null;
                      }
                    }
                  }
                  var v = e.projectIntoViewport(r.touches[0].clientX, r.touches[0].clientY);
                  l[0] = v[0];
                  l[1] = v[1];
                }
              }
              for (var y = 0; y < l.length; y++) {
                u[y] = l[y];
              }
              if (a && r.touches.length > 0 && !e.hoverData.draggingEles && !e.swipePanning && e.data.bgActivePosistion != null) {
                e.data.bgActivePosistion = undefined;
                e.redrawHint("select", true);
                e.redraw();
              }
            }),
            false
          );
          var W;
          e.registerBinding(
            t,
            "touchcancel",
            (W = function t(r) {
              var n = e.touchData.start;
              e.touchData.capture = false;
              if (n) {
                n.unactivate();
              }
            })
          );
          var $, K, Z, Q;
          e.registerBinding(
            t,
            "touchend",
            ($ = function t(a) {
              var i = e.touchData.start;
              var o = e.touchData.capture;
              if (o) {
                if (a.touches.length === 0) {
                  e.touchData.capture = false;
                }
                a.preventDefault();
              } else {
                return;
              }
              var s = e.selection;
              e.swipePanning = false;
              e.hoverData.draggingEles = false;
              var l = e.cy;
              var u = l.zoom();
              var c = e.touchData.now;
              var v = e.touchData.earlier;
              if (a.touches[0]) {
                var f = e.projectIntoViewport(a.touches[0].clientX, a.touches[0].clientY);
                c[0] = f[0];
                c[1] = f[1];
              }
              if (a.touches[1]) {
                var f = e.projectIntoViewport(a.touches[1].clientX, a.touches[1].clientY);
                c[2] = f[0];
                c[3] = f[1];
              }
              if (a.touches[2]) {
                var f = e.projectIntoViewport(a.touches[2].clientX, a.touches[2].clientY);
                c[4] = f[0];
                c[5] = f[1];
              }
              if (i) {
                i.unactivate();
              }
              var h;
              if (e.touchData.cxt) {
                h = { originalEvent: a, type: "cxttapend", position: { x: c[0], y: c[1] } };
                if (i) {
                  i.emit(h);
                } else {
                  l.emit(h);
                }
                if (!e.touchData.cxtDragged) {
                  var d = { originalEvent: a, type: "cxttap", position: { x: c[0], y: c[1] } };
                  if (i) {
                    i.emit(d);
                  } else {
                    l.emit(d);
                  }
                }
                if (e.touchData.start) {
                  e.touchData.start._private.grabbed = false;
                }
                e.touchData.cxt = false;
                e.touchData.start = null;
                e.redraw();
                return;
              }
              if (!a.touches[2] && l.boxSelectionEnabled() && e.touchData.selecting) {
                e.touchData.selecting = false;
                var p = l.collection(e.getAllInBox(s[0], s[1], s[2], s[3]));
                s[0] = undefined;
                s[1] = undefined;
                s[2] = undefined;
                s[3] = undefined;
                s[4] = 0;
                e.redrawHint("select", true);
                l.emit({ type: "boxend", originalEvent: a, position: { x: c[0], y: c[1] } });
                var y = function e(t) {
                  return t.selectable() && !t.selected();
                };
                p.emit("box").stdFilter(y).select().emit("boxselect");
                if (p.nonempty()) {
                  e.redrawHint("eles", true);
                }
                e.redraw();
              }
              if (i != null) {
                i.unactivate();
              }
              if (a.touches[2]) {
                e.data.bgActivePosistion = undefined;
                e.redrawHint("select", true);
              } else if (a.touches[1]);
              else if (a.touches[0]);
              else if (!a.touches[0]) {
                e.data.bgActivePosistion = undefined;
                e.redrawHint("select", true);
                var m = e.dragData.touchDragEles;
                if (i != null) {
                  var b = i._private.grabbed;
                  g(m);
                  e.redrawHint("drag", true);
                  e.redrawHint("eles", true);
                  if (b) {
                    i.emit("freeon");
                    m.emit("free");
                    if (e.dragData.didDrag) {
                      i.emit("dragfreeon");
                      m.emit("dragfree");
                    }
                  }
                  n(i, ["touchend", "tapend", "vmouseup", "tapdragout"], a, { x: c[0], y: c[1] });
                  i.unactivate();
                  e.touchData.start = null;
                } else {
                  var x = e.findNearestElement(c[0], c[1], true, true);
                  n(x, ["touchend", "tapend", "vmouseup", "tapdragout"], a, { x: c[0], y: c[1] });
                }
                var w = e.touchData.startPosition[0] - c[0];
                var E = w * w;
                var T = e.touchData.startPosition[1] - c[1];
                var _ = T * T;
                var D = E + _;
                var C = D * u * u;
                if (!e.touchData.singleTouchMoved) {
                  if (!i) {
                    l.$(":selected").unselect(["tapunselect"]);
                  }
                  n(i, ["tap", "vclick"], a, { x: c[0], y: c[1] });
                  K = false;
                  if (a.timeStamp - Q <= l.multiClickDebounceTime()) {
                    Z && clearTimeout(Z);
                    K = true;
                    Q = null;
                    n(i, ["dbltap", "vdblclick"], a, { x: c[0], y: c[1] });
                  } else {
                    Z = setTimeout(function () {
                      if (K) return;
                      n(i, ["onetap", "voneclick"], a, { x: c[0], y: c[1] });
                    }, l.multiClickDebounceTime());
                    Q = a.timeStamp;
                  }
                }
                if (i != null && !e.dragData.didDrag && i._private.selectable && C < e.touchTapThreshold2 && !e.pinching) {
                  if (l.selectionType() === "single") {
                    l.$(r).unmerge(i).unselect(["tapunselect"]);
                    i.select(["tapselect"]);
                  } else {
                    if (i.selected()) {
                      i.unselect(["tapunselect"]);
                    } else {
                      i.select(["tapselect"]);
                    }
                  }
                  e.redrawHint("eles", true);
                }
                e.touchData.singleTouchMoved = true;
              }
              for (var N = 0; N < c.length; N++) {
                v[N] = c[N];
              }
              e.dragData.didDrag = false;
              if (a.touches.length === 0) {
                e.touchData.dragDelta = [];
                e.touchData.startPosition = [null, null, null, null, null, null];
                e.touchData.startGPosition = null;
                e.touchData.didSelect = false;
              }
              if (a.touches.length < 2) {
                if (a.touches.length === 1) {
                  e.touchData.startGPosition = [a.touches[0].clientX, a.touches[0].clientY];
                }
                e.pinching = false;
                e.redrawHint("eles", true);
                e.redraw();
              }
            }),
            false
          );
          if (typeof TouchEvent === "undefined") {
            var J = [];
            var ee = function e(t) {
              return {
                clientX: t.clientX,
                clientY: t.clientY,
                force: 1,
                identifier: t.pointerId,
                pageX: t.pageX,
                pageY: t.pageY,
                radiusX: t.width / 2,
                radiusY: t.height / 2,
                screenX: t.screenX,
                screenY: t.screenY,
                target: t.target,
              };
            };
            var te = function e(t) {
              return { event: t, touch: ee(t) };
            };
            var re = function e(t) {
              J.push(te(t));
            };
            var ne = function e(t) {
              for (var r = 0; r < J.length; r++) {
                var n = J[r];
                if (n.event.pointerId === t.pointerId) {
                  J.splice(r, 1);
                  return;
                }
              }
            };
            var ae = function e(t) {
              var r = J.filter(function (e) {
                return e.event.pointerId === t.pointerId;
              })[0];
              r.event = t;
              r.touch = ee(t);
            };
            var ie = function e(t) {
              t.touches = J.map(function (e) {
                return e.touch;
              });
            };
            var oe = function e(t) {
              return t.pointerType === "mouse" || t.pointerType === 4;
            };
            e.registerBinding(e.container, "pointerdown", function (e) {
              if (oe(e)) {
                return;
              }
              e.preventDefault();
              re(e);
              ie(e);
              H(e);
            });
            e.registerBinding(e.container, "pointerup", function (e) {
              if (oe(e)) {
                return;
              }
              ne(e);
              ie(e);
              $(e);
            });
            e.registerBinding(e.container, "pointercancel", function (e) {
              if (oe(e)) {
                return;
              }
              ne(e);
              ie(e);
              W(e);
            });
            e.registerBinding(e.container, "pointermove", function (e) {
              if (oe(e)) {
                return;
              }
              e.preventDefault();
              ae(e);
              ie(e);
              q(e);
            });
          }
        };
        var qv = {};
        qv.generatePolygon = function (e, t) {
          return (this.nodeShapes[e] = {
            renderer: this,
            name: e,
            points: t,
            draw: function e(t, r, n, a, i) {
              this.renderer.nodeShapeImpl("polygon", t, r, n, a, i, this.points);
            },
            intersectLine: function e(t, r, n, a, i, o, s) {
              return un(i, o, this.points, t, r, n / 2, a / 2, s);
            },
            checkPoint: function e(t, r, n, a, i, o, s) {
              return Jr(t, r, this.points, o, s, a, i, [0, -1], n);
            },
          });
        };
        qv.generateEllipse = function () {
          return (this.nodeShapes["ellipse"] = {
            renderer: this,
            name: "ellipse",
            draw: function e(t, r, n, a, i) {
              this.renderer.nodeShapeImpl(this.name, t, r, n, a, i);
            },
            intersectLine: function e(t, r, n, a, i, o, s) {
              return nn(i, o, t, r, n / 2 + s, a / 2 + s);
            },
            checkPoint: function e(t, r, n, a, i, o, s) {
              return an(t, r, a, i, o, s, n);
            },
          });
        };
        qv.generateRoundPolygon = function (e, t) {
          var r = new Array(t.length * 2);
          for (var n = 0; n < t.length / 2; n++) {
            var a = n * 2;
            var i = void 0;
            if (n < t.length / 2 - 1) {
              i = (n + 1) * 2;
            } else {
              i = 0;
            }
            r[n * 4] = t[a];
            r[n * 4 + 1] = t[a + 1];
            var o = t[i] - t[a];
            var s = t[i + 1] - t[a + 1];
            var l = Math.sqrt(o * o + s * s);
            r[n * 4 + 2] = o / l;
            r[n * 4 + 3] = s / l;
          }
          return (this.nodeShapes[e] = {
            renderer: this,
            name: e,
            points: r,
            draw: function e(t, r, n, a, i) {
              this.renderer.nodeShapeImpl("round-polygon", t, r, n, a, i, this.points);
            },
            intersectLine: function e(t, r, n, a, i, o, s) {
              return cn(i, o, this.points, t, r, n, a);
            },
            checkPoint: function e(t, r, n, a, i, o, s) {
              return en(t, r, this.points, o, s, a, i);
            },
          });
        };
        qv.generateRoundRectangle = function () {
          return (this.nodeShapes["round-rectangle"] = this.nodeShapes["roundrectangle"] =
            {
              renderer: this,
              name: "round-rectangle",
              points: fn(4, 0),
              draw: function e(t, r, n, a, i) {
                this.renderer.nodeShapeImpl(this.name, t, r, n, a, i);
              },
              intersectLine: function e(t, r, n, a, i, o, s) {
                return jr(i, o, t, r, n, a, s);
              },
              checkPoint: function e(t, r, n, a, i, o, s) {
                var l = pn(a, i);
                var u = l * 2;
                if (Jr(t, r, this.points, o, s, a, i - u, [0, -1], n)) {
                  return true;
                }
                if (Jr(t, r, this.points, o, s, a - u, i, [0, -1], n)) {
                  return true;
                }
                if (an(t, r, u, u, o - a / 2 + l, s - i / 2 + l, n)) {
                  return true;
                }
                if (an(t, r, u, u, o + a / 2 - l, s - i / 2 + l, n)) {
                  return true;
                }
                if (an(t, r, u, u, o + a / 2 - l, s + i / 2 - l, n)) {
                  return true;
                }
                if (an(t, r, u, u, o - a / 2 + l, s + i / 2 - l, n)) {
                  return true;
                }
                return false;
              },
            });
        };
        qv.generateCutRectangle = function () {
          return (this.nodeShapes["cut-rectangle"] = this.nodeShapes["cutrectangle"] =
            {
              renderer: this,
              name: "cut-rectangle",
              cornerLength: yn(),
              points: fn(4, 0),
              draw: function e(t, r, n, a, i) {
                this.renderer.nodeShapeImpl(this.name, t, r, n, a, i);
              },
              generateCutTrianglePts: function e(t, r, n, a) {
                var i = this.cornerLength;
                var o = r / 2;
                var s = t / 2;
                var l = n - s;
                var u = n + s;
                var c = a - o;
                var v = a + o;
                return {
                  topLeft: [l, c + i, l + i, c, l + i, c + i],
                  topRight: [u - i, c, u, c + i, u - i, c + i],
                  bottomRight: [u, v - i, u - i, v, u - i, v - i],
                  bottomLeft: [l + i, v, l, v - i, l + i, v - i],
                };
              },
              intersectLine: function e(t, r, n, a, i, o, s) {
                var l = this.generateCutTrianglePts(n + 2 * s, a + 2 * s, t, r);
                var u = [].concat.apply([], [l.topLeft.splice(0, 4), l.topRight.splice(0, 4), l.bottomRight.splice(0, 4), l.bottomLeft.splice(0, 4)]);
                return un(i, o, u, t, r);
              },
              checkPoint: function e(t, r, n, a, i, o, s) {
                if (Jr(t, r, this.points, o, s, a, i - 2 * this.cornerLength, [0, -1], n)) {
                  return true;
                }
                if (Jr(t, r, this.points, o, s, a - 2 * this.cornerLength, i, [0, -1], n)) {
                  return true;
                }
                var l = this.generateCutTrianglePts(a, i, o, s);
                return Qr(t, r, l.topLeft) || Qr(t, r, l.topRight) || Qr(t, r, l.bottomRight) || Qr(t, r, l.bottomLeft);
              },
            });
        };
        qv.generateBarrel = function () {
          return (this.nodeShapes["barrel"] = {
            renderer: this,
            name: "barrel",
            points: fn(4, 0),
            draw: function e(t, r, n, a, i) {
              this.renderer.nodeShapeImpl(this.name, t, r, n, a, i);
            },
            intersectLine: function e(t, r, n, a, i, o, s) {
              var l = 0.15;
              var u = 0.5;
              var c = 0.85;
              var v = this.generateBarrelBezierPts(n + 2 * s, a + 2 * s, t, r);
              var f = function e(t) {
                var r = Ir({ x: t[0], y: t[1] }, { x: t[2], y: t[3] }, { x: t[4], y: t[5] }, l);
                var n = Ir({ x: t[0], y: t[1] }, { x: t[2], y: t[3] }, { x: t[4], y: t[5] }, u);
                var a = Ir({ x: t[0], y: t[1] }, { x: t[2], y: t[3] }, { x: t[4], y: t[5] }, c);
                return [t[0], t[1], r.x, r.y, n.x, n.y, a.x, a.y, t[4], t[5]];
              };
              var h = [].concat(f(v.topLeft), f(v.topRight), f(v.bottomRight), f(v.bottomLeft));
              return un(i, o, h, t, r);
            },
            generateBarrelBezierPts: function e(t, r, n, a) {
              var i = r / 2;
              var o = t / 2;
              var s = n - o;
              var l = n + o;
              var u = a - i;
              var c = a + i;
              var v = bn(t, r);
              var f = v.heightOffset;
              var h = v.widthOffset;
              var d = v.ctrlPtOffsetPct * t;
              var p = {
                topLeft: [s, u + f, s + d, u, s + h, u],
                topRight: [l - h, u, l - d, u, l, u + f],
                bottomRight: [l, c - f, l - d, c, l - h, c],
                bottomLeft: [s + h, c, s + d, c, s, c - f],
              };
              p.topLeft.isTop = true;
              p.topRight.isTop = true;
              p.bottomLeft.isBottom = true;
              p.bottomRight.isBottom = true;
              return p;
            },
            checkPoint: function e(t, r, n, a, i, o, s) {
              var l = bn(a, i);
              var u = l.heightOffset;
              var c = l.widthOffset;
              if (Jr(t, r, this.points, o, s, a, i - 2 * u, [0, -1], n)) {
                return true;
              }
              if (Jr(t, r, this.points, o, s, a - 2 * c, i, [0, -1], n)) {
                return true;
              }
              var v = this.generateBarrelBezierPts(a, i, o, s);
              var f = function e(t, r, n) {
                var a = n[4];
                var i = n[2];
                var o = n[0];
                var s = n[5];
                var l = n[1];
                var u = Math.min(a, o);
                var c = Math.max(a, o);
                var v = Math.min(s, l);
                var f = Math.max(s, l);
                if (u <= t && t <= c && v <= r && r <= f) {
                  var h = mn(a, i, o);
                  var d = Wr(h[0], h[1], h[2], t);
                  var p = d.filter(function (e) {
                    return 0 <= e && e <= 1;
                  });
                  if (p.length > 0) {
                    return p[0];
                  }
                }
                return null;
              };
              var h = Object.keys(v);
              for (var d = 0; d < h.length; d++) {
                var p = h[d];
                var g = v[p];
                var y = f(t, r, g);
                if (y == null) {
                  continue;
                }
                var m = g[5];
                var b = g[3];
                var x = g[1];
                var w = Lr(m, b, x, y);
                if (g.isTop && w <= r) {
                  return true;
                }
                if (g.isBottom && r <= w) {
                  return true;
                }
              }
              return false;
            },
          });
        };
        qv.generateBottomRoundrectangle = function () {
          return (this.nodeShapes["bottom-round-rectangle"] = this.nodeShapes["bottomroundrectangle"] =
            {
              renderer: this,
              name: "bottom-round-rectangle",
              points: fn(4, 0),
              draw: function e(t, r, n, a, i) {
                this.renderer.nodeShapeImpl(this.name, t, r, n, a, i);
              },
              intersectLine: function e(t, r, n, a, i, o, s) {
                var l = t - (n / 2 + s);
                var u = r - (a / 2 + s);
                var c = u;
                var v = t + (n / 2 + s);
                var f = ln(i, o, t, r, l, u, v, c, false);
                if (f.length > 0) {
                  return f;
                }
                return jr(i, o, t, r, n, a, s);
              },
              checkPoint: function e(t, r, n, a, i, o, s) {
                var l = pn(a, i);
                var u = 2 * l;
                if (Jr(t, r, this.points, o, s, a, i - u, [0, -1], n)) {
                  return true;
                }
                if (Jr(t, r, this.points, o, s, a - u, i, [0, -1], n)) {
                  return true;
                }
                var c = a / 2 + 2 * n;
                var v = i / 2 + 2 * n;
                var f = [o - c, s - v, o - c, s, o + c, s, o + c, s - v];
                if (Qr(t, r, f)) {
                  return true;
                }
                if (an(t, r, u, u, o + a / 2 - l, s + i / 2 - l, n)) {
                  return true;
                }
                if (an(t, r, u, u, o - a / 2 + l, s + i / 2 - l, n)) {
                  return true;
                }
                return false;
              },
            });
        };
        qv.registerNodeShapes = function () {
          var e = (this.nodeShapes = {});
          var t = this;
          this.generateEllipse();
          this.generatePolygon("triangle", fn(3, 0));
          this.generateRoundPolygon("round-triangle", fn(3, 0));
          this.generatePolygon("rectangle", fn(4, 0));
          e["square"] = e["rectangle"];
          this.generateRoundRectangle();
          this.generateCutRectangle();
          this.generateBarrel();
          this.generateBottomRoundrectangle();
          {
            var r = [0, 1, 1, 0, 0, -1, -1, 0];
            this.generatePolygon("diamond", r);
            this.generateRoundPolygon("round-diamond", r);
          }
          this.generatePolygon("pentagon", fn(5, 0));
          this.generateRoundPolygon("round-pentagon", fn(5, 0));
          this.generatePolygon("hexagon", fn(6, 0));
          this.generateRoundPolygon("round-hexagon", fn(6, 0));
          this.generatePolygon("heptagon", fn(7, 0));
          this.generateRoundPolygon("round-heptagon", fn(7, 0));
          this.generatePolygon("octagon", fn(8, 0));
          this.generateRoundPolygon("round-octagon", fn(8, 0));
          var n = new Array(20);
          {
            var a = dn(5, 0);
            var i = dn(5, Math.PI / 5);
            var o = 0.5 * (3 - Math.sqrt(5));
            o *= 1.57;
            for (var s = 0; s < i.length / 2; s++) {
              i[s * 2] *= o;
              i[s * 2 + 1] *= o;
            }
            for (var s = 0; s < 20 / 4; s++) {
              n[s * 4] = a[s * 2];
              n[s * 4 + 1] = a[s * 2 + 1];
              n[s * 4 + 2] = i[s * 2];
              n[s * 4 + 3] = i[s * 2 + 1];
            }
          }
          n = hn(n);
          this.generatePolygon("star", n);
          this.generatePolygon("vee", [-1, -1, 0, -0.333, 1, -1, 0, 1]);
          this.generatePolygon("rhomboid", [-1, -1, 0.333, -1, 1, 1, -0.333, 1]);
          this.generatePolygon("right-rhomboid", [-0.333, -1, 1, -1, 0.333, 1, -1, 1]);
          this.nodeShapes["concavehexagon"] = this.generatePolygon("concave-hexagon", [-1, -0.95, -0.75, 0, -1, 0.95, 1, 0.95, 0.75, 0, 1, -0.95]);
          {
            var l = [-1, -1, 0.25, -1, 1, 0, 0.25, 1, -1, 1];
            this.generatePolygon("tag", l);
            this.generateRoundPolygon("round-tag", l);
          }
          e.makePolygon = function (e) {
            var r = e.join("$");
            var n = "polygon-" + r;
            var a;
            if ((a = this[n])) {
              return a;
            }
            return t.generatePolygon(n, e);
          };
        };
        var Wv = {};
        Wv.timeToRender = function () {
          return this.redrawTotalTime / this.redrawCount;
        };
        Wv.redraw = function (e) {
          e = e || Ft();
          var t = this;
          if (t.averageRedrawTime === undefined) {
            t.averageRedrawTime = 0;
          }
          if (t.lastRedrawTime === undefined) {
            t.lastRedrawTime = 0;
          }
          if (t.lastDrawTime === undefined) {
            t.lastDrawTime = 0;
          }
          t.requestedFrame = true;
          t.renderOptions = e;
        };
        Wv.beforeRender = function (e, t) {
          if (this.destroyed) {
            return;
          }
          if (t == null) {
            It("Priority is not optional for beforeRender");
          }
          var r = this.beforeRenderCallbacks;
          r.push({ fn: e, priority: t });
          r.sort(function (e, t) {
            return t.priority - e.priority;
          });
        };
        var $v = function e(t, r, n) {
          var a = t.beforeRenderCallbacks;
          for (var i = 0; i < a.length; i++) {
            a[i].fn(r, n);
          }
        };
        Wv.startRenderLoop = function () {
          var e = this;
          var t = e.cy;
          if (e.renderLoopStarted) {
            return;
          } else {
            e.renderLoopStarted = true;
          }
          var r = function r(n) {
            if (e.destroyed) {
              return;
            }
            if (t.batching());
            else if (e.requestedFrame && !e.skipFrame) {
              $v(e, true, n);
              var a = lt();
              e.render(e.renderOptions);
              var i = (e.lastDrawTime = lt());
              if (e.averageRedrawTime === undefined) {
                e.averageRedrawTime = i - a;
              }
              if (e.redrawCount === undefined) {
                e.redrawCount = 0;
              }
              e.redrawCount++;
              if (e.redrawTotalTime === undefined) {
                e.redrawTotalTime = 0;
              }
              var o = i - a;
              e.redrawTotalTime += o;
              e.lastRedrawTime = o;
              e.averageRedrawTime = e.averageRedrawTime / 2 + o / 2;
              e.requestedFrame = false;
            } else {
              $v(e, false, n);
            }
            e.skipFrame = false;
            st(r);
          };
          st(r);
        };
        var Kv = function e(t) {
          this.init(t);
        };
        var Zv = Kv;
        var Qv = Zv.prototype;
        Qv.clientFunctions = ["redrawHint", "render", "renderTo", "matchCanvasSize", "nodeShapeImpl", "arrowShapeImpl"];
        Qv.init = function (e) {
          var t = this;
          t.options = e;
          t.cy = e.cy;
          var r = (t.container = e.cy.container());
          var n = t.cy.window();
          if (n) {
            var a = n.document;
            var i = a.head;
            var o = "__________cytoscape_stylesheet";
            var s = "__________cytoscape_container";
            var l = a.getElementById(o) != null;
            if (r.className.indexOf(s) < 0) {
              r.className = (r.className || "") + " " + s;
            }
            if (!l) {
              var u = a.createElement("style");
              u.id = o;
              u.textContent = "." + s + " { position: relative; }";
              i.insertBefore(u, i.children[0]);
            }
            var c = n.getComputedStyle(r);
            var v = c.getPropertyValue("position");
            if (v === "static") {
              kt("A Cytoscape container has style position:static and so can not use UI extensions properly");
            }
          }
          t.selection = [undefined, undefined, undefined, undefined, 0];
          t.bezierProjPcts = [0.05, 0.225, 0.4, 0.5, 0.6, 0.775, 0.95];
          t.hoverData = { down: null, last: null, downTime: null, triggerMode: null, dragging: false, initialPan: [null, null], capture: false };
          t.dragData = { possibleDragElements: [] };
          t.touchData = {
            start: null,
            capture: false,
            startPosition: [null, null, null, null, null, null],
            singleTouchStartTime: null,
            singleTouchMoved: true,
            now: [null, null, null, null, null, null],
            earlier: [null, null, null, null, null, null],
          };
          t.redraws = 0;
          t.showFps = e.showFps;
          t.debug = e.debug;
          t.hideEdgesOnViewport = e.hideEdgesOnViewport;
          t.textureOnViewport = e.textureOnViewport;
          t.wheelSensitivity = e.wheelSensitivity;
          t.motionBlurEnabled = e.motionBlur;
          t.forcedPixelRatio = _(e.pixelRatio) ? e.pixelRatio : null;
          t.motionBlur = e.motionBlur;
          t.motionBlurOpacity = e.motionBlurOpacity;
          t.motionBlurTransparency = 1 - t.motionBlurOpacity;
          t.motionBlurPxRatio = 1;
          t.mbPxRBlurry = 1;
          t.minMbLowQualFrames = 4;
          t.fullQualityMb = false;
          t.clearedForMotionBlur = [];
          t.desktopTapThreshold = e.desktopTapThreshold;
          t.desktopTapThreshold2 = e.desktopTapThreshold * e.desktopTapThreshold;
          t.touchTapThreshold = e.touchTapThreshold;
          t.touchTapThreshold2 = e.touchTapThreshold * e.touchTapThreshold;
          t.tapholdDuration = 500;
          t.bindings = [];
          t.beforeRenderCallbacks = [];
          t.beforeRenderPriorities = { animations: 400, eleCalcs: 300, eleTxrDeq: 200, lyrTxrDeq: 150, lyrTxrSkip: 100 };
          t.registerNodeShapes();
          t.registerArrowShapes();
          t.registerCalculationListeners();
        };
        Qv.notify = function (e, t) {
          var r = this;
          var n = r.cy;
          if (this.destroyed) {
            return;
          }
          if (e === "init") {
            r.load();
            return;
          }
          if (e === "destroy") {
            r.destroy();
            return;
          }
          if (e === "add" || e === "remove" || (e === "move" && n.hasCompoundNodes()) || e === "load" || e === "zorder" || e === "mount") {
            r.invalidateCachedZSortedEles();
          }
          if (e === "viewport") {
            r.redrawHint("select", true);
          }
          if (e === "load" || e === "resize" || e === "mount") {
            r.invalidateContainerClientCoordsCache();
            r.matchCanvasSize(r.container);
          }
          r.redrawHint("eles", true);
          r.redrawHint("drag", true);
          this.startRenderLoop();
          this.redraw();
        };
        Qv.destroy = function () {
          var e = this;
          e.destroyed = true;
          e.cy.stopAnimationLoop();
          for (var t = 0; t < e.bindings.length; t++) {
            var r = e.bindings[t];
            var n = r;
            var a = n.target;
            (a.off || a.removeEventListener).apply(a, n.args);
          }
          e.bindings = [];
          e.beforeRenderCallbacks = [];
          e.onUpdateEleCalcsFns = [];
          if (e.removeObserver) {
            e.removeObserver.disconnect();
          }
          if (e.styleObserver) {
            e.styleObserver.disconnect();
          }
          if (e.resizeObserver) {
            e.resizeObserver.disconnect();
          }
          if (e.labelCalcDiv) {
            try {
              document.body.removeChild(e.labelCalcDiv);
            } catch (i) {}
          }
        };
        Qv.isHeadless = function () {
          return false;
        };
        [Nv, Uv, jv, Hv, qv, Wv].forEach(function (e) {
          Q(Qv, e);
        });
        var Jv = 1e3 / 60;
        var ef = {
          setupDequeueing: function e(t) {
            return function e() {
              var r = this;
              var n = this.renderer;
              if (r.dequeueingSetup) {
                return;
              } else {
                r.dequeueingSetup = true;
              }
              var a = nt(function () {
                n.redrawHint("eles", true);
                n.redrawHint("drag", true);
                n.redraw();
              }, t.deqRedrawThreshold);
              var i = function e(i, o) {
                var s = lt();
                var l = n.averageRedrawTime;
                var u = n.lastRedrawTime;
                var c = [];
                var v = n.cy.extent();
                var f = n.getPixelRatio();
                if (!i) {
                  n.flushRenderedStyleQueue();
                }
                while (true) {
                  var h = lt();
                  var d = h - s;
                  var p = h - o;
                  if (u < Jv) {
                    var g = Jv - (i ? l : 0);
                    if (p >= t.deqFastCost * g) {
                      break;
                    }
                  } else {
                    if (i) {
                      if (d >= t.deqCost * u || d >= t.deqAvgCost * l) {
                        break;
                      }
                    } else if (p >= t.deqNoDrawCost * Jv) {
                      break;
                    }
                  }
                  var y = t.deq(r, f, v);
                  if (y.length > 0) {
                    for (var m = 0; m < y.length; m++) {
                      c.push(y[m]);
                    }
                  } else {
                    break;
                  }
                }
                if (c.length > 0) {
                  t.onDeqd(r, c);
                  if (!i && t.shouldRedraw(r, c, f, v)) {
                    a();
                  }
                }
              };
              var o = t.priority || Lt;
              n.beforeRender(i, o(r));
            };
          },
        };
        var tf = (function () {
          function e(r) {
            var n = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : Nt;
            t(this, e);
            this.idsByKey = new Ht();
            this.keyForId = new Ht();
            this.cachesByLvl = new Ht();
            this.lvls = [];
            this.getKey = r;
            this.doesEleInvalidateKey = n;
          }
          a(e, [
            {
              key: "getIdsFor",
              value: function e(t) {
                if (t == null) {
                  It("Can not get id list for null key");
                }
                var r = this.idsByKey;
                var n = this.idsByKey.get(t);
                if (!n) {
                  n = new $t();
                  r.set(t, n);
                }
                return n;
              },
            },
            {
              key: "addIdForKey",
              value: function e(t, r) {
                if (t != null) {
                  this.getIdsFor(t).add(r);
                }
              },
            },
            {
              key: "deleteIdForKey",
              value: function e(t, r) {
                if (t != null) {
                  this.getIdsFor(t)["delete"](r);
                }
              },
            },
            {
              key: "getNumberOfIdsForKey",
              value: function e(t) {
                if (t == null) {
                  return 0;
                } else {
                  return this.getIdsFor(t).size;
                }
              },
            },
            {
              key: "updateKeyMappingFor",
              value: function e(t) {
                var r = t.id();
                var n = this.keyForId.get(r);
                var a = this.getKey(t);
                this.deleteIdForKey(n, r);
                this.addIdForKey(a, r);
                this.keyForId.set(r, a);
              },
            },
            {
              key: "deleteKeyMappingFor",
              value: function e(t) {
                var r = t.id();
                var n = this.keyForId.get(r);
                this.deleteIdForKey(n, r);
                this.keyForId["delete"](r);
              },
            },
            {
              key: "keyHasChangedFor",
              value: function e(t) {
                var r = t.id();
                var n = this.keyForId.get(r);
                var a = this.getKey(t);
                return n !== a;
              },
            },
            {
              key: "isInvalid",
              value: function e(t) {
                return this.keyHasChangedFor(t) || this.doesEleInvalidateKey(t);
              },
            },
            {
              key: "getCachesAt",
              value: function e(t) {
                var r = this.cachesByLvl,
                  n = this.lvls;
                var a = r.get(t);
                if (!a) {
                  a = new Ht();
                  r.set(t, a);
                  n.push(t);
                }
                return a;
              },
            },
            {
              key: "getCache",
              value: function e(t, r) {
                return this.getCachesAt(r).get(t);
              },
            },
            {
              key: "get",
              value: function e(t, r) {
                var n = this.getKey(t);
                var a = this.getCache(n, r);
                if (a != null) {
                  this.updateKeyMappingFor(t);
                }
                return a;
              },
            },
            {
              key: "getForCachedKey",
              value: function e(t, r) {
                var n = this.keyForId.get(t.id());
                var a = this.getCache(n, r);
                return a;
              },
            },
            {
              key: "hasCache",
              value: function e(t, r) {
                return this.getCachesAt(r).has(t);
              },
            },
            {
              key: "has",
              value: function e(t, r) {
                var n = this.getKey(t);
                return this.hasCache(n, r);
              },
            },
            {
              key: "setCache",
              value: function e(t, r, n) {
                n.key = t;
                this.getCachesAt(r).set(t, n);
              },
            },
            {
              key: "set",
              value: function e(t, r, n) {
                var a = this.getKey(t);
                this.setCache(a, r, n);
                this.updateKeyMappingFor(t);
              },
            },
            {
              key: "deleteCache",
              value: function e(t, r) {
                this.getCachesAt(r)["delete"](t);
              },
            },
            {
              key: "delete",
              value: function e(t, r) {
                var n = this.getKey(t);
                this.deleteCache(n, r);
              },
            },
            {
              key: "invalidateKey",
              value: function e(t) {
                var r = this;
                this.lvls.forEach(function (e) {
                  return r.deleteCache(t, e);
                });
              },
            },
            {
              key: "invalidate",
              value: function e(t) {
                var r = t.id();
                var n = this.keyForId.get(r);
                this.deleteKeyMappingFor(t);
                var a = this.doesEleInvalidateKey(t);
                if (a) {
                  this.invalidateKey(n);
                }
                return a || this.getNumberOfIdsForKey(n) === 0;
              },
            },
          ]);
          return e;
        })();
        var rf = 25;
        var nf = 50;
        var af = -4;
        var of = 3;
        var sf = 7.99;
        var lf = 8;
        var uf = 1024;
        var cf = 1024;
        var vf = 1024;
        var ff = 0.2;
        var hf = 0.8;
        var df = 10;
        var pf = 0.15;
        var gf = 0.1;
        var yf = 0.9;
        var mf = 0.9;
        var bf = 100;
        var xf = 1;
        var wf = { dequeue: "dequeue", downscale: "downscale", highQuality: "highQuality" };
        var Ef = zt({
          getKey: null,
          doesEleInvalidateKey: Nt,
          drawElement: null,
          getBoundingBox: null,
          getRotationPoint: null,
          getRotationOffset: null,
          isVisible: Ct,
          allowEdgeTxrCaching: true,
          allowParentTxrCaching: true,
        });
        var Tf = function e(t, r) {
          var n = this;
          n.renderer = t;
          n.onDequeues = [];
          var a = Ef(r);
          Q(n, a);
          n.lookup = new tf(a.getKey, a.doesEleInvalidateKey);
          n.setupDequeueing();
        };
        var _f = Tf.prototype;
        _f.reasons = wf;
        _f.getTextureQueue = function (e) {
          var t = this;
          t.eleImgCaches = t.eleImgCaches || {};
          return (t.eleImgCaches[e] = t.eleImgCaches[e] || []);
        };
        _f.getRetiredTextureQueue = function (e) {
          var t = this;
          var r = (t.eleImgCaches.retired = t.eleImgCaches.retired || {});
          var n = (r[e] = r[e] || []);
          return n;
        };
        _f.getElementQueue = function () {
          var e = this;
          var t = (e.eleCacheQueue =
            e.eleCacheQueue ||
            new er(function (e, t) {
              return t.reqs - e.reqs;
            }));
          return t;
        };
        _f.getElementKeyToQueue = function () {
          var e = this;
          var t = (e.eleKeyToCacheQueue = e.eleKeyToCacheQueue || {});
          return t;
        };
        _f.getElement = function (e, t, r, n, a) {
          var i = this;
          var o = this.renderer;
          var s = o.cy.zoom();
          var l = this.lookup;
          if (!t || t.w === 0 || t.h === 0 || isNaN(t.w) || isNaN(t.h) || !e.visible() || e.removed()) {
            return null;
          }
          if ((!i.allowEdgeTxrCaching && e.isEdge()) || (!i.allowParentTxrCaching && e.isParent())) {
            return null;
          }
          if (n == null) {
            n = Math.ceil(_r(s * r));
          }
          if (n < af) {
            n = af;
          } else if (s >= sf || n > of) {
            return null;
          }
          var u = Math.pow(2, n);
          var c = t.h * u;
          var v = t.w * u;
          var f = o.eleTextBiggerThanMin(e, u);
          if (!this.isVisible(e, f)) {
            return null;
          }
          var h = l.get(e, n);
          if (h && h.invalidated) {
            h.invalidated = false;
            h.texture.invalidatedWidth -= h.width;
          }
          if (h) {
            return h;
          }
          var d;
          if (c <= rf) {
            d = rf;
          } else if (c <= nf) {
            d = nf;
          } else {
            d = Math.ceil(c / nf) * nf;
          }
          if (c > vf || v > cf) {
            return null;
          }
          var p = i.getTextureQueue(d);
          var g = p[p.length - 2];
          var y = function e() {
            return i.recycleTexture(d, v) || i.addTexture(d, v);
          };
          if (!g) {
            g = p[p.length - 1];
          }
          if (!g) {
            g = y();
          }
          if (g.width - g.usedWidth < v) {
            g = y();
          }
          var m = function e(t) {
            return t && t.scaledLabelShown === f;
          };
          var b = a && a === wf.dequeue;
          var x = a && a === wf.highQuality;
          var w = a && a === wf.downscale;
          var E;
          for (var T = n + 1; T <= of; T++) {
            var _ = l.get(e, T);
            if (_) {
              E = _;
              break;
            }
          }
          var D = E && E.level === n + 1 ? E : null;
          var C = function e() {
            g.context.drawImage(D.texture.canvas, D.x, 0, D.width, D.height, g.usedWidth, 0, v, c);
          };
          g.context.setTransform(1, 0, 0, 1, 0, 0);
          g.context.clearRect(g.usedWidth, 0, v, d);
          if (m(D)) {
            C();
          } else if (m(E)) {
            if (x) {
              for (var N = E.level; N > n; N--) {
                D = i.getElement(e, t, r, N, wf.downscale);
              }
              C();
            } else {
              i.queueElement(e, E.level - 1);
              return E;
            }
          } else {
            var A;
            if (!b && !x && !w) {
              for (var L = n - 1; L >= af; L--) {
                var I = l.get(e, L);
                if (I) {
                  A = I;
                  break;
                }
              }
            }
            if (m(A)) {
              i.queueElement(e, n);
              return A;
            }
            g.context.translate(g.usedWidth, 0);
            g.context.scale(u, u);
            this.drawElement(g.context, e, t, f, false);
            g.context.scale(1 / u, 1 / u);
            g.context.translate(-g.usedWidth, 0);
          }
          h = { x: g.usedWidth, texture: g, level: n, scale: u, width: v, height: c, scaledLabelShown: f };
          g.usedWidth += Math.ceil(v + lf);
          g.eleCaches.push(h);
          l.set(e, n, h);
          i.checkTextureFullness(g);
          return h;
        };
        _f.invalidateElements = function (e) {
          for (var t = 0; t < e.length; t++) {
            this.invalidateElement(e[t]);
          }
        };
        _f.invalidateElement = function (e) {
          var t = this;
          var r = t.lookup;
          var n = [];
          var a = r.isInvalid(e);
          if (!a) {
            return;
          }
          for (var i = af; i <= of; i++) {
            var o = r.getForCachedKey(e, i);
            if (o) {
              n.push(o);
            }
          }
          var s = r.invalidate(e);
          if (s) {
            for (var l = 0; l < n.length; l++) {
              var u = n[l];
              var c = u.texture;
              c.invalidatedWidth += u.width;
              u.invalidated = true;
              t.checkTextureUtility(c);
            }
          }
          t.removeFromQueue(e);
        };
        _f.checkTextureUtility = function (e) {
          if (e.invalidatedWidth >= ff * e.width) {
            this.retireTexture(e);
          }
        };
        _f.checkTextureFullness = function (e) {
          var t = this;
          var r = t.getTextureQueue(e.height);
          if (e.usedWidth / e.width > hf && e.fullnessChecks >= df) {
            Gt(r, e);
          } else {
            e.fullnessChecks++;
          }
        };
        _f.retireTexture = function (e) {
          var t = this;
          var r = e.height;
          var n = t.getTextureQueue(r);
          var a = this.lookup;
          Gt(n, e);
          e.retired = true;
          var i = e.eleCaches;
          for (var o = 0; o < i.length; o++) {
            var s = i[o];
            a.deleteCache(s.key, s.level);
          }
          Yt(i);
          var l = t.getRetiredTextureQueue(r);
          l.push(e);
        };
        _f.addTexture = function (e, t) {
          var r = this;
          var n = r.getTextureQueue(e);
          var a = {};
          n.push(a);
          a.eleCaches = [];
          a.height = e;
          a.width = Math.max(uf, t);
          a.usedWidth = 0;
          a.invalidatedWidth = 0;
          a.fullnessChecks = 0;
          a.canvas = r.renderer.makeOffscreenCanvas(a.width, a.height);
          a.context = a.canvas.getContext("2d");
          return a;
        };
        _f.recycleTexture = function (e, t) {
          var r = this;
          var n = r.getTextureQueue(e);
          var a = r.getRetiredTextureQueue(e);
          for (var i = 0; i < a.length; i++) {
            var o = a[i];
            if (o.width >= t) {
              o.retired = false;
              o.usedWidth = 0;
              o.invalidatedWidth = 0;
              o.fullnessChecks = 0;
              Yt(o.eleCaches);
              o.context.setTransform(1, 0, 0, 1, 0, 0);
              o.context.clearRect(0, 0, o.width, o.height);
              Gt(a, o);
              n.push(o);
              return o;
            }
          }
        };
        _f.queueElement = function (e, t) {
          var r = this;
          var n = r.getElementQueue();
          var a = r.getElementKeyToQueue();
          var i = this.getKey(e);
          var o = a[i];
          if (o) {
            o.level = Math.max(o.level, t);
            o.eles.merge(e);
            o.reqs++;
            n.updateItem(o);
          } else {
            var s = { eles: e.spawn().merge(e), level: t, reqs: 1, key: i };
            n.push(s);
            a[i] = s;
          }
        };
        _f.dequeue = function (e) {
          var t = this;
          var r = t.getElementQueue();
          var n = t.getElementKeyToQueue();
          var a = [];
          var i = t.lookup;
          for (var o = 0; o < xf; o++) {
            if (r.size() > 0) {
              var s = r.pop();
              var l = s.key;
              var u = s.eles[0];
              var c = i.hasCache(u, s.level);
              n[l] = null;
              if (c) {
                continue;
              }
              a.push(s);
              var v = t.getBoundingBox(u);
              t.getElement(u, v, e, s.level, wf.dequeue);
            } else {
              break;
            }
          }
          return a;
        };
        _f.removeFromQueue = function (e) {
          var t = this;
          var r = t.getElementQueue();
          var n = t.getElementKeyToQueue();
          var a = this.getKey(e);
          var i = n[a];
          if (i != null) {
            if (i.eles.length === 1) {
              i.reqs = Dt;
              r.updateItem(i);
              r.pop();
              n[a] = null;
            } else {
              i.eles.unmerge(e);
            }
          }
        };
        _f.onDequeue = function (e) {
          this.onDequeues.push(e);
        };
        _f.offDequeue = function (e) {
          Gt(this.onDequeues, e);
        };
        _f.setupDequeueing = ef.setupDequeueing({
          deqRedrawThreshold: bf,
          deqCost: pf,
          deqAvgCost: gf,
          deqNoDrawCost: yf,
          deqFastCost: mf,
          deq: function e(t, r, n) {
            return t.dequeue(r, n);
          },
          onDeqd: function e(t, r) {
            for (var n = 0; n < t.onDequeues.length; n++) {
              var a = t.onDequeues[n];
              a(r);
            }
          },
          shouldRedraw: function e(t, r, n, a) {
            for (var i = 0; i < r.length; i++) {
              var o = r[i].eles;
              for (var s = 0; s < o.length; s++) {
                var l = o[s].boundingBox();
                if (Yr(l, a)) {
                  return true;
                }
              }
            }
            return false;
          },
          priority: function e(t) {
            return t.renderer.beforeRenderPriorities.eleTxrDeq;
          },
        });
        var Df = 1;
        var Cf = -4;
        var Nf = 2;
        var Af = 3.99;
        var Lf = 50;
        var If = 50;
        var Sf = 0.15;
        var kf = 0.1;
        var Of = 0.9;
        var Mf = 0.9;
        var Pf = 1;
        var Rf = 250;
        var Bf = 4e3 * 4e3;
        var Ff = true;
        var zf = function e(t) {
          var r = this;
          var n = (r.renderer = t);
          var a = n.cy;
          r.layersByLevel = {};
          r.firstGet = true;
          r.lastInvalidationTime = lt() - 2 * Rf;
          r.skipping = false;
          r.eleTxrDeqs = a.collection();
          r.scheduleElementRefinement = nt(function () {
            r.refineElementTextures(r.eleTxrDeqs);
            r.eleTxrDeqs.unmerge(r.eleTxrDeqs);
          }, If);
          n.beforeRender(function (e, t) {
            if (t - r.lastInvalidationTime <= Rf) {
              r.skipping = true;
            } else {
              r.skipping = false;
            }
          }, n.beforeRenderPriorities.lyrTxrSkip);
          var i = function e(t, r) {
            return r.reqs - t.reqs;
          };
          r.layersQueue = new er(i);
          r.setupDequeueing();
        };
        var Gf = zf.prototype;
        var Yf = 0;
        var Xf = Math.pow(2, 53) - 1;
        Gf.makeLayer = function (e, t) {
          var r = Math.pow(2, t);
          var n = Math.ceil(e.w * r);
          var a = Math.ceil(e.h * r);
          var i = this.renderer.makeOffscreenCanvas(n, a);
          var o = {
            id: (Yf = ++Yf % Xf),
            bb: e,
            level: t,
            width: n,
            height: a,
            canvas: i,
            context: i.getContext("2d"),
            eles: [],
            elesQueue: [],
            reqs: 0,
          };
          var s = o.context;
          var l = -o.bb.x1;
          var u = -o.bb.y1;
          s.scale(r, r);
          s.translate(l, u);
          return o;
        };
        Gf.getLayers = function (e, t, r) {
          var n = this;
          var a = n.renderer;
          var i = a.cy;
          var o = i.zoom();
          var s = n.firstGet;
          n.firstGet = false;
          if (r == null) {
            r = Math.ceil(_r(o * t));
            if (r < Cf) {
              r = Cf;
            } else if (o >= Af || r > Nf) {
              return null;
            }
          }
          n.validateLayersElesOrdering(r, e);
          var l = n.layersByLevel;
          var u = Math.pow(2, r);
          var c = (l[r] = l[r] || []);
          var v;
          var f = n.levelIsComplete(r, e);
          var h;
          var d = function t() {
            var a = function t(r) {
              n.validateLayersElesOrdering(r, e);
              if (n.levelIsComplete(r, e)) {
                h = l[r];
                return true;
              }
            };
            var i = function e(t) {
              if (h) {
                return;
              }
              for (var n = r + t; Cf <= n && n <= Nf; n += t) {
                if (a(n)) {
                  break;
                }
              }
            };
            i(+1);
            i(-1);
            for (var o = c.length - 1; o >= 0; o--) {
              var s = c[o];
              if (s.invalid) {
                Gt(c, s);
              }
            }
          };
          if (!f) {
            d();
          } else {
            return c;
          }
          var p = function t() {
            if (!v) {
              v = Or();
              for (var r = 0; r < e.length; r++) {
                Rr(v, e[r].boundingBox());
              }
            }
            return v;
          };
          var g = function e(t) {
            t = t || {};
            var a = t.after;
            p();
            var i = v.w * u * (v.h * u);
            if (i > Bf) {
              return null;
            }
            var o = n.makeLayer(v, r);
            if (a != null) {
              var s = c.indexOf(a) + 1;
              c.splice(s, 0, o);
            } else if (t.insert === undefined || t.insert) {
              c.unshift(o);
            }
            return o;
          };
          if (n.skipping && !s) {
            return null;
          }
          var y = null;
          var m = e.length / Df;
          var b = !s;
          for (var x = 0; x < e.length; x++) {
            var w = e[x];
            var E = w._private.rscratch;
            var T = (E.imgLayerCaches = E.imgLayerCaches || {});
            var _ = T[r];
            if (_) {
              y = _;
              continue;
            }
            if (!y || y.eles.length >= m || !Ur(y.bb, w.boundingBox())) {
              y = g({ insert: true, after: y });
              if (!y) {
                return null;
              }
            }
            if (h || b) {
              n.queueLayer(y, w);
            } else {
              n.drawEleInLayer(y, w, r, t);
            }
            y.eles.push(w);
            T[r] = y;
          }
          if (h) {
            return h;
          }
          if (b) {
            return null;
          }
          return c;
        };
        Gf.getEleLevelForLayerLevel = function (e, t) {
          return e;
        };
        Gf.drawEleInLayer = function (e, t, r, n) {
          var a = this;
          var i = this.renderer;
          var o = e.context;
          var s = t.boundingBox();
          if (s.w === 0 || s.h === 0 || !t.visible()) {
            return;
          }
          r = a.getEleLevelForLayerLevel(r, n);
          {
            i.setImgSmoothing(o, false);
          }
          {
            i.drawCachedElement(o, t, null, null, r, Ff);
          }
          {
            i.setImgSmoothing(o, true);
          }
        };
        Gf.levelIsComplete = function (e, t) {
          var r = this;
          var n = r.layersByLevel[e];
          if (!n || n.length === 0) {
            return false;
          }
          var a = 0;
          for (var i = 0; i < n.length; i++) {
            var o = n[i];
            if (o.reqs > 0) {
              return false;
            }
            if (o.invalid) {
              return false;
            }
            a += o.eles.length;
          }
          if (a !== t.length) {
            return false;
          }
          return true;
        };
        Gf.validateLayersElesOrdering = function (e, t) {
          var r = this.layersByLevel[e];
          if (!r) {
            return;
          }
          for (var n = 0; n < r.length; n++) {
            var a = r[n];
            var i = -1;
            for (var o = 0; o < t.length; o++) {
              if (a.eles[0] === t[o]) {
                i = o;
                break;
              }
            }
            if (i < 0) {
              this.invalidateLayer(a);
              continue;
            }
            var s = i;
            for (var o = 0; o < a.eles.length; o++) {
              if (a.eles[o] !== t[s + o]) {
                this.invalidateLayer(a);
                break;
              }
            }
          }
        };
        Gf.updateElementsInLayers = function (e, t) {
          var r = this;
          var n = A(e[0]);
          for (var a = 0; a < e.length; a++) {
            var i = n ? null : e[a];
            var o = n ? e[a] : e[a].ele;
            var s = o._private.rscratch;
            var l = (s.imgLayerCaches = s.imgLayerCaches || {});
            for (var u = Cf; u <= Nf; u++) {
              var c = l[u];
              if (!c) {
                continue;
              }
              if (i && r.getEleLevelForLayerLevel(c.level) !== i.level) {
                continue;
              }
              t(c, o, i);
            }
          }
        };
        Gf.haveLayers = function () {
          var e = this;
          var t = false;
          for (var r = Cf; r <= Nf; r++) {
            var n = e.layersByLevel[r];
            if (n && n.length > 0) {
              t = true;
              break;
            }
          }
          return t;
        };
        Gf.invalidateElements = function (e) {
          var t = this;
          if (e.length === 0) {
            return;
          }
          t.lastInvalidationTime = lt();
          if (e.length === 0 || !t.haveLayers()) {
            return;
          }
          t.updateElementsInLayers(e, function e(r, n, a) {
            t.invalidateLayer(r);
          });
        };
        Gf.invalidateLayer = function (e) {
          this.lastInvalidationTime = lt();
          if (e.invalid) {
            return;
          }
          var t = e.level;
          var r = e.eles;
          var n = this.layersByLevel[t];
          Gt(n, e);
          e.elesQueue = [];
          e.invalid = true;
          if (e.replacement) {
            e.replacement.invalid = true;
          }
          for (var a = 0; a < r.length; a++) {
            var i = r[a]._private.rscratch.imgLayerCaches;
            if (i) {
              i[t] = null;
            }
          }
        };
        Gf.refineElementTextures = function (e) {
          var t = this;
          t.updateElementsInLayers(e, function e(r, n, a) {
            var i = r.replacement;
            if (!i) {
              i = r.replacement = t.makeLayer(r.bb, r.level);
              i.replaces = r;
              i.eles = r.eles;
            }
            if (!i.reqs) {
              for (var o = 0; o < i.eles.length; o++) {
                t.queueLayer(i, i.eles[o]);
              }
            }
          });
        };
        Gf.enqueueElementRefinement = function (e) {
          this.eleTxrDeqs.merge(e);
          this.scheduleElementRefinement();
        };
        Gf.queueLayer = function (e, t) {
          var r = this;
          var n = r.layersQueue;
          var a = e.elesQueue;
          var i = (a.hasId = a.hasId || {});
          if (e.replacement) {
            return;
          }
          if (t) {
            if (i[t.id()]) {
              return;
            }
            a.push(t);
            i[t.id()] = true;
          }
          if (e.reqs) {
            e.reqs++;
            n.updateItem(e);
          } else {
            e.reqs = 1;
            n.push(e);
          }
        };
        Gf.dequeue = function (e) {
          var t = this;
          var r = t.layersQueue;
          var n = [];
          var a = 0;
          while (a < Pf) {
            if (r.size() === 0) {
              break;
            }
            var i = r.peek();
            if (i.replacement) {
              r.pop();
              continue;
            }
            if (i.replaces && i !== i.replaces.replacement) {
              r.pop();
              continue;
            }
            if (i.invalid) {
              r.pop();
              continue;
            }
            var o = i.elesQueue.shift();
            if (o) {
              t.drawEleInLayer(i, o, i.level, e);
              a++;
            }
            if (n.length === 0) {
              n.push(true);
            }
            if (i.elesQueue.length === 0) {
              r.pop();
              i.reqs = 0;
              if (i.replaces) {
                t.applyLayerReplacement(i);
              }
              t.requestRedraw();
            }
          }
          return n;
        };
        Gf.applyLayerReplacement = function (e) {
          var t = this;
          var r = t.layersByLevel[e.level];
          var n = e.replaces;
          var a = r.indexOf(n);
          if (a < 0 || n.invalid) {
            return;
          }
          r[a] = e;
          for (var i = 0; i < e.eles.length; i++) {
            var o = e.eles[i]._private;
            var s = (o.imgLayerCaches = o.imgLayerCaches || {});
            if (s) {
              s[e.level] = e;
            }
          }
          t.requestRedraw();
        };
        Gf.requestRedraw = nt(function () {
          var e = this.renderer;
          e.redrawHint("eles", true);
          e.redrawHint("drag", true);
          e.redraw();
        }, 100);
        Gf.setupDequeueing = ef.setupDequeueing({
          deqRedrawThreshold: Lf,
          deqCost: Sf,
          deqAvgCost: kf,
          deqNoDrawCost: Of,
          deqFastCost: Mf,
          deq: function e(t, r) {
            return t.dequeue(r);
          },
          onDeqd: Lt,
          shouldRedraw: Ct,
          priority: function e(t) {
            return t.renderer.beforeRenderPriorities.lyrTxrDeq;
          },
        });
        var Vf = {};
        var Uf;
        function jf(e, t) {
          for (var r = 0; r < t.length; r++) {
            var n = t[r];
            e.lineTo(n.x, n.y);
          }
        }
        function Hf(e, t, r) {
          var n;
          for (var a = 0; a < t.length; a++) {
            var i = t[a];
            if (a === 0) {
              n = i;
            }
            e.lineTo(i.x, i.y);
          }
          e.quadraticCurveTo(r.x, r.y, n.x, n.y);
        }
        function qf(e, t, r) {
          if (e.beginPath) {
            e.beginPath();
          }
          var n = t;
          for (var a = 0; a < n.length; a++) {
            var i = n[a];
            e.lineTo(i.x, i.y);
          }
          var o = r;
          var s = r[0];
          e.moveTo(s.x, s.y);
          for (var a = 1; a < o.length; a++) {
            var i = o[a];
            e.lineTo(i.x, i.y);
          }
          if (e.closePath) {
            e.closePath();
          }
        }
        function Wf(e, t, r, n, a) {
          if (e.beginPath) {
            e.beginPath();
          }
          e.arc(r, n, a, 0, Math.PI * 2, false);
          var i = t;
          var o = i[0];
          e.moveTo(o.x, o.y);
          for (var s = 0; s < i.length; s++) {
            var l = i[s];
            e.lineTo(l.x, l.y);
          }
          if (e.closePath) {
            e.closePath();
          }
        }
        function $f(e, t, r, n) {
          e.arc(t, r, n, 0, Math.PI * 2, false);
        }
        Vf.arrowShapeImpl = function (e) {
          return (Uf ||
            (Uf = { polygon: jf, "triangle-backcurve": Hf, "triangle-tee": qf, "circle-triangle": Wf, "triangle-cross": qf, circle: $f }))[e];
        };
        var Kf = {};
        Kf.drawElement = function (e, t, r, n, a, i) {
          var o = this;
          if (t.isNode()) {
            o.drawNode(e, t, r, n, a, i);
          } else {
            o.drawEdge(e, t, r, n, a, i);
          }
        };
        Kf.drawElementOverlay = function (e, t) {
          var r = this;
          if (t.isNode()) {
            r.drawNodeOverlay(e, t);
          } else {
            r.drawEdgeOverlay(e, t);
          }
        };
        Kf.drawElementUnderlay = function (e, t) {
          var r = this;
          if (t.isNode()) {
            r.drawNodeUnderlay(e, t);
          } else {
            r.drawEdgeUnderlay(e, t);
          }
        };
        Kf.drawCachedElementPortion = function (e, t, r, n, a, i, o, s) {
          var l = this;
          var u = r.getBoundingBox(t);
          if (u.w === 0 || u.h === 0) {
            return;
          }
          var c = r.getElement(t, u, n, a, i);
          if (c != null) {
            var v = s(l, t);
            if (v === 0) {
              return;
            }
            var f = o(l, t);
            var h = u.x1,
              d = u.y1,
              p = u.w,
              g = u.h;
            var y, m, b, x, w;
            if (f !== 0) {
              var E = r.getRotationPoint(t);
              b = E.x;
              x = E.y;
              e.translate(b, x);
              e.rotate(f);
              w = l.getImgSmoothing(e);
              if (!w) {
                l.setImgSmoothing(e, true);
              }
              var T = r.getRotationOffset(t);
              y = T.x;
              m = T.y;
            } else {
              y = h;
              m = d;
            }
            var _;
            if (v !== 1) {
              _ = e.globalAlpha;
              e.globalAlpha = _ * v;
            }
            e.drawImage(c.texture.canvas, c.x, 0, c.width, c.height, y, m, p, g);
            if (v !== 1) {
              e.globalAlpha = _;
            }
            if (f !== 0) {
              e.rotate(-f);
              e.translate(-b, -x);
              if (!w) {
                l.setImgSmoothing(e, false);
              }
            }
          } else {
            r.drawElement(e, t);
          }
        };
        var Zf = function e() {
          return 0;
        };
        var Qf = function e(t, r) {
          return t.getTextAngle(r, null);
        };
        var Jf = function e(t, r) {
          return t.getTextAngle(r, "source");
        };
        var eh = function e(t, r) {
          return t.getTextAngle(r, "target");
        };
        var th = function e(t, r) {
          return r.effectiveOpacity();
        };
        var rh = function e(t, r) {
          return r.pstyle("text-opacity").pfValue * r.effectiveOpacity();
        };
        Kf.drawCachedElement = function (e, t, r, n, a, i) {
          var o = this;
          var s = o.data,
            l = s.eleTxrCache,
            u = s.lblTxrCache,
            c = s.slbTxrCache,
            v = s.tlbTxrCache;
          var f = t.boundingBox();
          var h = i === true ? l.reasons.highQuality : null;
          if (f.w === 0 || f.h === 0 || !t.visible()) {
            return;
          }
          if (!n || Yr(f, n)) {
            var d = t.isEdge();
            var p = t.element()._private.rscratch.badLine;
            o.drawElementUnderlay(e, t);
            o.drawCachedElementPortion(e, t, l, r, a, h, Zf, th);
            if (!d || !p) {
              o.drawCachedElementPortion(e, t, u, r, a, h, Qf, rh);
            }
            if (d && !p) {
              o.drawCachedElementPortion(e, t, c, r, a, h, Jf, rh);
              o.drawCachedElementPortion(e, t, v, r, a, h, eh, rh);
            }
            o.drawElementOverlay(e, t);
          }
        };
        Kf.drawElements = function (e, t) {
          var r = this;
          for (var n = 0; n < t.length; n++) {
            var a = t[n];
            r.drawElement(e, a);
          }
        };
        Kf.drawCachedElements = function (e, t, r, n) {
          var a = this;
          for (var i = 0; i < t.length; i++) {
            var o = t[i];
            a.drawCachedElement(e, o, r, n);
          }
        };
        Kf.drawCachedNodes = function (e, t, r, n) {
          var a = this;
          for (var i = 0; i < t.length; i++) {
            var o = t[i];
            if (!o.isNode()) {
              continue;
            }
            a.drawCachedElement(e, o, r, n);
          }
        };
        Kf.drawLayeredElements = function (e, t, r, n) {
          var a = this;
          var i = a.data.lyrTxrCache.getLayers(t, r);
          if (i) {
            for (var o = 0; o < i.length; o++) {
              var s = i[o];
              var l = s.bb;
              if (l.w === 0 || l.h === 0) {
                continue;
              }
              e.drawImage(s.canvas, l.x1, l.y1, l.w, l.h);
            }
          } else {
            a.drawCachedElements(e, t, r, n);
          }
        };
        var nh = {};
        nh.drawEdge = function (e, t, r) {
          var n = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : true;
          var a = arguments.length > 4 && arguments[4] !== undefined ? arguments[4] : true;
          var i = arguments.length > 5 && arguments[5] !== undefined ? arguments[5] : true;
          var o = this;
          var s = t._private.rscratch;
          if (i && !t.visible()) {
            return;
          }
          if (s.badLine || s.allpts == null || isNaN(s.allpts[0])) {
            return;
          }
          var l;
          if (r) {
            l = r;
            e.translate(-l.x1, -l.y1);
          }
          var u = i ? t.pstyle("opacity").value : 1;
          var c = i ? t.pstyle("line-opacity").value : 1;
          var v = t.pstyle("curve-style").value;
          var f = t.pstyle("line-style").value;
          var h = t.pstyle("width").pfValue;
          var d = t.pstyle("line-cap").value;
          var p = u * c;
          var g = u * c;
          var y = function r() {
            var n = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : p;
            if (v === "straight-triangle") {
              o.eleStrokeStyle(e, t, n);
              o.drawEdgeTrianglePath(t, e, s.allpts);
            } else {
              e.lineWidth = h;
              e.lineCap = d;
              o.eleStrokeStyle(e, t, n);
              o.drawEdgePath(t, e, s.allpts, f);
              e.lineCap = "butt";
            }
          };
          var m = function r() {
            if (!a) {
              return;
            }
            o.drawEdgeOverlay(e, t);
          };
          var b = function r() {
            if (!a) {
              return;
            }
            o.drawEdgeUnderlay(e, t);
          };
          var x = function r() {
            var n = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : g;
            o.drawArrowheads(e, t, n);
          };
          var w = function r() {
            o.drawElementText(e, t, null, n);
          };
          e.lineJoin = "round";
          var E = t.pstyle("ghost").value === "yes";
          if (E) {
            var T = t.pstyle("ghost-offset-x").pfValue;
            var _ = t.pstyle("ghost-offset-y").pfValue;
            var D = t.pstyle("ghost-opacity").value;
            var C = p * D;
            e.translate(T, _);
            y(C);
            x(C);
            e.translate(-T, -_);
          }
          b();
          y();
          x();
          m();
          w();
          if (r) {
            e.translate(l.x1, l.y1);
          }
        };
        var ah = function e(t) {
          if (!["overlay", "underlay"].includes(t)) {
            throw new Error("Invalid state");
          }
          return function (e, r) {
            if (!r.visible()) {
              return;
            }
            var n = r.pstyle("".concat(t, "-opacity")).value;
            if (n === 0) {
              return;
            }
            var a = this;
            var i = a.usePaths();
            var o = r._private.rscratch;
            var s = r.pstyle("".concat(t, "-padding")).pfValue;
            var l = 2 * s;
            var u = r.pstyle("".concat(t, "-color")).value;
            e.lineWidth = l;
            if (o.edgeType === "self" && !i) {
              e.lineCap = "butt";
            } else {
              e.lineCap = "round";
            }
            a.colorStrokeStyle(e, u[0], u[1], u[2], n);
            a.drawEdgePath(r, e, o.allpts, "solid");
          };
        };
        nh.drawEdgeOverlay = ah("overlay");
        nh.drawEdgeUnderlay = ah("underlay");
        nh.drawEdgePath = function (e, t, r, n) {
          var a = e._private.rscratch;
          var i = t;
          var o;
          var s = false;
          var l = this.usePaths();
          var u = e.pstyle("line-dash-pattern").pfValue;
          var c = e.pstyle("line-dash-offset").pfValue;
          if (l) {
            var v = r.join("$");
            var f = a.pathCacheKey && a.pathCacheKey === v;
            if (f) {
              o = t = a.pathCache;
              s = true;
            } else {
              o = t = new Path2D();
              a.pathCacheKey = v;
              a.pathCache = o;
            }
          }
          if (i.setLineDash) {
            switch (n) {
              case "dotted":
                i.setLineDash([1, 1]);
                break;
              case "dashed":
                i.setLineDash(u);
                i.lineDashOffset = c;
                break;
              case "solid":
                i.setLineDash([]);
                break;
            }
          }
          if (!s && !a.badLine) {
            if (t.beginPath) {
              t.beginPath();
            }
            t.moveTo(r[0], r[1]);
            switch (a.edgeType) {
              case "bezier":
              case "self":
              case "compound":
              case "multibezier":
                for (var h = 2; h + 3 < r.length; h += 4) {
                  t.quadraticCurveTo(r[h], r[h + 1], r[h + 2], r[h + 3]);
                }
                break;
              case "straight":
              case "segments":
              case "haystack":
                for (var d = 2; d + 1 < r.length; d += 2) {
                  t.lineTo(r[d], r[d + 1]);
                }
                break;
            }
          }
          t = i;
          if (l) {
            t.stroke(o);
          } else {
            t.stroke();
          }
          if (t.setLineDash) {
            t.setLineDash([]);
          }
        };
        nh.drawEdgeTrianglePath = function (e, t, r) {
          t.fillStyle = t.strokeStyle;
          var n = e.pstyle("width").pfValue;
          for (var a = 0; a + 1 < r.length; a += 2) {
            var i = [r[a + 2] - r[a], r[a + 3] - r[a + 1]];
            var o = Math.sqrt(i[0] * i[0] + i[1] * i[1]);
            var s = [i[1] / o, -i[0] / o];
            var l = [(s[0] * n) / 2, (s[1] * n) / 2];
            t.beginPath();
            t.moveTo(r[a] - l[0], r[a + 1] - l[1]);
            t.lineTo(r[a] + l[0], r[a + 1] + l[1]);
            t.lineTo(r[a + 2], r[a + 3]);
            t.closePath();
            t.fill();
          }
        };
        nh.drawArrowheads = function (e, t, r) {
          var n = t._private.rscratch;
          var a = n.edgeType === "haystack";
          if (!a) {
            this.drawArrowhead(e, t, "source", n.arrowStartX, n.arrowStartY, n.srcArrowAngle, r);
          }
          this.drawArrowhead(e, t, "mid-target", n.midX, n.midY, n.midtgtArrowAngle, r);
          this.drawArrowhead(e, t, "mid-source", n.midX, n.midY, n.midsrcArrowAngle, r);
          if (!a) {
            this.drawArrowhead(e, t, "target", n.arrowEndX, n.arrowEndY, n.tgtArrowAngle, r);
          }
        };
        nh.drawArrowhead = function (e, t, r, n, a, i, o) {
          if (isNaN(n) || n == null || isNaN(a) || a == null || isNaN(i) || i == null) {
            return;
          }
          var s = this;
          var l = t.pstyle(r + "-arrow-shape").value;
          if (l === "none") {
            return;
          }
          var u = t.pstyle(r + "-arrow-fill").value === "hollow" ? "both" : "filled";
          var c = t.pstyle(r + "-arrow-fill").value;
          var v = t.pstyle("width").pfValue;
          var f = t.pstyle("opacity").value;
          if (o === undefined) {
            o = f;
          }
          var h = e.globalCompositeOperation;
          if (o !== 1 || c === "hollow") {
            e.globalCompositeOperation = "destination-out";
            s.colorFillStyle(e, 255, 255, 255, 1);
            s.colorStrokeStyle(e, 255, 255, 255, 1);
            s.drawArrowShape(t, e, u, v, l, n, a, i);
            e.globalCompositeOperation = h;
          }
          var d = t.pstyle(r + "-arrow-color").value;
          s.colorFillStyle(e, d[0], d[1], d[2], o);
          s.colorStrokeStyle(e, d[0], d[1], d[2], o);
          s.drawArrowShape(t, e, c, v, l, n, a, i);
        };
        nh.drawArrowShape = function (e, t, r, n, a, i, o, s) {
          var l = this;
          var u = this.usePaths() && a !== "triangle-cross";
          var c = false;
          var v;
          var f = t;
          var h = { x: i, y: o };
          var d = e.pstyle("arrow-scale").value;
          var p = this.getArrowWidth(n, d);
          var g = l.arrowShapes[a];
          if (u) {
            var y = (l.arrowPathCache = l.arrowPathCache || []);
            var m = bt(a);
            var b = y[m];
            if (b != null) {
              v = t = b;
              c = true;
            } else {
              v = t = new Path2D();
              y[m] = v;
            }
          }
          if (!c) {
            if (t.beginPath) {
              t.beginPath();
            }
            if (u) {
              g.draw(t, 1, 0, { x: 0, y: 0 }, 1);
            } else {
              g.draw(t, p, s, h, n);
            }
            if (t.closePath) {
              t.closePath();
            }
          }
          t = f;
          if (u) {
            t.translate(i, o);
            t.rotate(s);
            t.scale(p, p);
          }
          if (r === "filled" || r === "both") {
            if (u) {
              t.fill(v);
            } else {
              t.fill();
            }
          }
          if (r === "hollow" || r === "both") {
            t.lineWidth = (g.matchEdgeWidth ? n : 1) / (u ? p : 1);
            t.lineJoin = "miter";
            if (u) {
              t.stroke(v);
            } else {
              t.stroke();
            }
          }
          if (u) {
            t.scale(1 / p, 1 / p);
            t.rotate(-s);
            t.translate(-i, -o);
          }
        };
        var ih = {};
        ih.safeDrawImage = function (e, t, r, n, a, i, o, s, l, u) {
          if (a <= 0 || i <= 0 || l <= 0 || u <= 0) {
            return;
          }
          try {
            e.drawImage(t, r, n, a, i, o, s, l, u);
          } catch (c) {
            kt(c);
          }
        };
        ih.drawInscribedImage = function (e, t, r, n, a) {
          var i = this;
          var o = r.position();
          var s = o.x;
          var l = o.y;
          var u = r.cy().style();
          var c = u.getIndexedStyle.bind(u);
          var v = c(r, "background-fit", "value", n);
          var f = c(r, "background-repeat", "value", n);
          var h = r.width();
          var d = r.height();
          var p = r.padding() * 2;
          var g = h + (c(r, "background-width-relative-to", "value", n) === "inner" ? 0 : p);
          var y = d + (c(r, "background-height-relative-to", "value", n) === "inner" ? 0 : p);
          var m = r._private.rscratch;
          var b = c(r, "background-clip", "value", n);
          var x = b === "node";
          var w = c(r, "background-image-opacity", "value", n) * a;
          var E = c(r, "background-image-smoothing", "value", n);
          var T = t.width || t.cachedW;
          var _ = t.height || t.cachedH;
          if (null == T || null == _) {
            document.body.appendChild(t);
            T = t.cachedW = t.width || t.offsetWidth;
            _ = t.cachedH = t.height || t.offsetHeight;
            document.body.removeChild(t);
          }
          var D = T;
          var C = _;
          if (c(r, "background-width", "value", n) !== "auto") {
            if (c(r, "background-width", "units", n) === "%") {
              D = c(r, "background-width", "pfValue", n) * g;
            } else {
              D = c(r, "background-width", "pfValue", n);
            }
          }
          if (c(r, "background-height", "value", n) !== "auto") {
            if (c(r, "background-height", "units", n) === "%") {
              C = c(r, "background-height", "pfValue", n) * y;
            } else {
              C = c(r, "background-height", "pfValue", n);
            }
          }
          if (D === 0 || C === 0) {
            return;
          }
          if (v === "contain") {
            var N = Math.min(g / D, y / C);
            D *= N;
            C *= N;
          } else if (v === "cover") {
            var N = Math.max(g / D, y / C);
            D *= N;
            C *= N;
          }
          var A = s - g / 2;
          var L = c(r, "background-position-x", "units", n);
          var I = c(r, "background-position-x", "pfValue", n);
          if (L === "%") {
            A += (g - D) * I;
          } else {
            A += I;
          }
          var S = c(r, "background-offset-x", "units", n);
          var k = c(r, "background-offset-x", "pfValue", n);
          if (S === "%") {
            A += (g - D) * k;
          } else {
            A += k;
          }
          var O = l - y / 2;
          var M = c(r, "background-position-y", "units", n);
          var P = c(r, "background-position-y", "pfValue", n);
          if (M === "%") {
            O += (y - C) * P;
          } else {
            O += P;
          }
          var R = c(r, "background-offset-y", "units", n);
          var B = c(r, "background-offset-y", "pfValue", n);
          if (R === "%") {
            O += (y - C) * B;
          } else {
            O += B;
          }
          if (m.pathCache) {
            A -= s;
            O -= l;
            s = 0;
            l = 0;
          }
          var F = e.globalAlpha;
          e.globalAlpha = w;
          var z = i.getImgSmoothing(e);
          var G = false;
          if (E === "no" && z) {
            i.setImgSmoothing(e, false);
            G = true;
          } else if (E === "yes" && !z) {
            i.setImgSmoothing(e, true);
            G = true;
          }
          if (f === "no-repeat") {
            if (x) {
              e.save();
              if (m.pathCache) {
                e.clip(m.pathCache);
              } else {
                i.nodeShapes[i.getNodeShape(r)].draw(e, s, l, g, y);
                e.clip();
              }
            }
            i.safeDrawImage(e, t, 0, 0, T, _, A, O, D, C);
            if (x) {
              e.restore();
            }
          } else {
            var Y = e.createPattern(t, f);
            e.fillStyle = Y;
            i.nodeShapes[i.getNodeShape(r)].draw(e, s, l, g, y);
            e.translate(A, O);
            e.fill();
            e.translate(-A, -O);
          }
          e.globalAlpha = F;
          if (G) {
            i.setImgSmoothing(e, z);
          }
        };
        var oh = {};
        oh.eleTextBiggerThanMin = function (e, t) {
          if (!t) {
            var r = e.cy().zoom();
            var n = this.getPixelRatio();
            var a = Math.ceil(_r(r * n));
            t = Math.pow(2, a);
          }
          var i = e.pstyle("font-size").pfValue * t;
          var o = e.pstyle("min-zoomed-font-size").pfValue;
          if (i < o) {
            return false;
          }
          return true;
        };
        oh.drawElementText = function (e, t, r, n, a) {
          var i = arguments.length > 5 && arguments[5] !== undefined ? arguments[5] : true;
          var o = this;
          if (n == null) {
            if (i && !o.eleTextBiggerThanMin(t)) {
              return;
            }
          } else if (n === false) {
            return;
          }
          if (t.isNode()) {
            var s = t.pstyle("label");
            if (!s || !s.value) {
              return;
            }
            var l = o.getLabelJustification(t);
            e.textAlign = l;
            e.textBaseline = "bottom";
          } else {
            var u = t.element()._private.rscratch.badLine;
            var c = t.pstyle("label");
            var v = t.pstyle("source-label");
            var f = t.pstyle("target-label");
            if (u || ((!c || !c.value) && (!v || !v.value) && (!f || !f.value))) {
              return;
            }
            e.textAlign = "center";
            e.textBaseline = "bottom";
          }
          var h = !r;
          var d;
          if (r) {
            d = r;
            e.translate(-d.x1, -d.y1);
          }
          if (a == null) {
            o.drawText(e, t, null, h, i);
            if (t.isEdge()) {
              o.drawText(e, t, "source", h, i);
              o.drawText(e, t, "target", h, i);
            }
          } else {
            o.drawText(e, t, a, h, i);
          }
          if (r) {
            e.translate(d.x1, d.y1);
          }
        };
        oh.getFontCache = function (e) {
          var t;
          this.fontCaches = this.fontCaches || [];
          for (var r = 0; r < this.fontCaches.length; r++) {
            t = this.fontCaches[r];
            if (t.context === e) {
              return t;
            }
          }
          t = { context: e };
          this.fontCaches.push(t);
          return t;
        };
        oh.setupTextStyle = function (e, t) {
          var r = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : true;
          var n = t.pstyle("font-style").strValue;
          var a = t.pstyle("font-size").pfValue + "px";
          var i = t.pstyle("font-family").strValue;
          var o = t.pstyle("font-weight").strValue;
          var s = r ? t.effectiveOpacity() * t.pstyle("text-opacity").value : 1;
          var l = t.pstyle("text-outline-opacity").value * s;
          var u = t.pstyle("color").value;
          var c = t.pstyle("text-outline-color").value;
          e.font = n + " " + o + " " + a + " " + i;
          e.lineJoin = "round";
          this.colorFillStyle(e, u[0], u[1], u[2], s);
          this.colorStrokeStyle(e, c[0], c[1], c[2], l);
        };
        function sh(e, t, r, n, a) {
          var i = arguments.length > 5 && arguments[5] !== undefined ? arguments[5] : 5;
          e.beginPath();
          e.moveTo(t + i, r);
          e.lineTo(t + n - i, r);
          e.quadraticCurveTo(t + n, r, t + n, r + i);
          e.lineTo(t + n, r + a - i);
          e.quadraticCurveTo(t + n, r + a, t + n - i, r + a);
          e.lineTo(t + i, r + a);
          e.quadraticCurveTo(t, r + a, t, r + a - i);
          e.lineTo(t, r + i);
          e.quadraticCurveTo(t, r, t + i, r);
          e.closePath();
          e.fill();
        }
        oh.getTextAngle = function (e, t) {
          var r;
          var n = e._private;
          var a = n.rscratch;
          var i = t ? t + "-" : "";
          var o = e.pstyle(i + "text-rotation");
          var s = Vt(a, "labelAngle", t);
          if (o.strValue === "autorotate") {
            r = e.isEdge() ? s : 0;
          } else if (o.strValue === "none") {
            r = 0;
          } else {
            r = o.pfValue;
          }
          return r;
        };
        oh.drawText = function (e, t, r) {
          var n = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : true;
          var a = arguments.length > 4 && arguments[4] !== undefined ? arguments[4] : true;
          var i = t._private;
          var o = i.rscratch;
          var s = a ? t.effectiveOpacity() : 1;
          if (a && (s === 0 || t.pstyle("text-opacity").value === 0)) {
            return;
          }
          if (r === "main") {
            r = null;
          }
          var l = Vt(o, "labelX", r);
          var u = Vt(o, "labelY", r);
          var c, v;
          var f = this.getLabelText(t, r);
          if (f != null && f !== "" && !isNaN(l) && !isNaN(u)) {
            this.setupTextStyle(e, t, a);
            var h = r ? r + "-" : "";
            var d = Vt(o, "labelWidth", r);
            var p = Vt(o, "labelHeight", r);
            var g = t.pstyle(h + "text-margin-x").pfValue;
            var y = t.pstyle(h + "text-margin-y").pfValue;
            var m = t.isEdge();
            var b = t.pstyle("text-halign").value;
            var x = t.pstyle("text-valign").value;
            if (m) {
              b = "center";
              x = "center";
            }
            l += g;
            u += y;
            var w;
            if (!n) {
              w = 0;
            } else {
              w = this.getTextAngle(t, r);
            }
            if (w !== 0) {
              c = l;
              v = u;
              e.translate(c, v);
              e.rotate(w);
              l = 0;
              u = 0;
            }
            switch (x) {
              case "top":
                break;
              case "center":
                u += p / 2;
                break;
              case "bottom":
                u += p;
                break;
            }
            var E = t.pstyle("text-background-opacity").value;
            var T = t.pstyle("text-border-opacity").value;
            var _ = t.pstyle("text-border-width").pfValue;
            var D = t.pstyle("text-background-padding").pfValue;
            if (E > 0 || (_ > 0 && T > 0)) {
              var C = l - D;
              switch (b) {
                case "left":
                  C -= d;
                  break;
                case "center":
                  C -= d / 2;
                  break;
              }
              var N = u - p - D;
              var A = d + 2 * D;
              var L = p + 2 * D;
              if (E > 0) {
                var I = e.fillStyle;
                var S = t.pstyle("text-background-color").value;
                e.fillStyle = "rgba(" + S[0] + "," + S[1] + "," + S[2] + "," + E * s + ")";
                var k = t.pstyle("text-background-shape").strValue;
                if (k.indexOf("round") === 0) {
                  sh(e, C, N, A, L, 2);
                } else {
                  e.fillRect(C, N, A, L);
                }
                e.fillStyle = I;
              }
              if (_ > 0 && T > 0) {
                var O = e.strokeStyle;
                var M = e.lineWidth;
                var P = t.pstyle("text-border-color").value;
                var R = t.pstyle("text-border-style").value;
                e.strokeStyle = "rgba(" + P[0] + "," + P[1] + "," + P[2] + "," + T * s + ")";
                e.lineWidth = _;
                if (e.setLineDash) {
                  switch (R) {
                    case "dotted":
                      e.setLineDash([1, 1]);
                      break;
                    case "dashed":
                      e.setLineDash([4, 2]);
                      break;
                    case "double":
                      e.lineWidth = _ / 4;
                      e.setLineDash([]);
                      break;
                    case "solid":
                      e.setLineDash([]);
                      break;
                  }
                }
                e.strokeRect(C, N, A, L);
                if (R === "double") {
                  var B = _ / 2;
                  e.strokeRect(C + B, N + B, A - B * 2, L - B * 2);
                }
                if (e.setLineDash) {
                  e.setLineDash([]);
                }
                e.lineWidth = M;
                e.strokeStyle = O;
              }
            }
            var F = 2 * t.pstyle("text-outline-width").pfValue;
            if (F > 0) {
              e.lineWidth = F;
            }
            if (t.pstyle("text-wrap").value === "wrap") {
              var z = Vt(o, "labelWrapCachedLines", r);
              var G = Vt(o, "labelLineHeight", r);
              var Y = d / 2;
              var X = this.getLabelJustification(t);
              if (X === "auto");
              else if (b === "left") {
                if (X === "left") {
                  l += -d;
                } else if (X === "center") {
                  l += -Y;
                }
              } else if (b === "center") {
                if (X === "left") {
                  l += -Y;
                } else if (X === "right") {
                  l += Y;
                }
              } else if (b === "right") {
                if (X === "center") {
                  l += Y;
                } else if (X === "right") {
                  l += d;
                }
              }
              switch (x) {
                case "top":
                  u -= (z.length - 1) * G;
                  break;
                case "center":
                case "bottom":
                  u -= (z.length - 1) * G;
                  break;
              }
              for (var V = 0; V < z.length; V++) {
                if (F > 0) {
                  e.strokeText(z[V], l, u);
                }
                e.fillText(z[V], l, u);
                u += G;
              }
            } else {
              if (F > 0) {
                e.strokeText(f, l, u);
              }
              e.fillText(f, l, u);
            }
            if (w !== 0) {
              e.rotate(-w);
              e.translate(-c, -v);
            }
          }
        };
        var lh = {};
        lh.drawNode = function (e, t, r) {
          var n = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : true;
          var a = arguments.length > 4 && arguments[4] !== undefined ? arguments[4] : true;
          var i = arguments.length > 5 && arguments[5] !== undefined ? arguments[5] : true;
          var o = this;
          var s, l;
          var u = t._private;
          var c = u.rscratch;
          var v = t.position();
          if (!_(v.x) || !_(v.y)) {
            return;
          }
          if (i && !t.visible()) {
            return;
          }
          var f = i ? t.effectiveOpacity() : 1;
          var h = o.usePaths();
          var d;
          var p = false;
          var g = t.padding();
          s = t.width() + 2 * g;
          l = t.height() + 2 * g;
          var y;
          if (r) {
            y = r;
            e.translate(-y.x1, -y.y1);
          }
          var m = t.pstyle("background-image");
          var b = m.value;
          var x = new Array(b.length);
          var w = new Array(b.length);
          var E = 0;
          for (var T = 0; T < b.length; T++) {
            var D = b[T];
            var C = (x[T] = D != null && D !== "none");
            if (C) {
              var N = t.cy().style().getIndexedStyle(t, "background-image-crossorigin", "value", T);
              E++;
              w[T] = o.getCachedImage(D, N, function () {
                u.backgroundTimestamp = Date.now();
                t.emitAndNotify("background");
              });
            }
          }
          var A = t.pstyle("background-blacken").value;
          var L = t.pstyle("border-width").pfValue;
          var I = t.pstyle("background-opacity").value * f;
          var S = t.pstyle("border-color").value;
          var k = t.pstyle("border-style").value;
          var O = t.pstyle("border-opacity").value * f;
          e.lineJoin = "miter";
          var M = function r() {
            var n = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : I;
            o.eleFillStyle(e, t, n);
          };
          var P = function t() {
            var r = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : O;
            o.colorStrokeStyle(e, S[0], S[1], S[2], r);
          };
          var R = t.pstyle("shape").strValue;
          var B = t.pstyle("shape-polygon-points").pfValue;
          if (h) {
            e.translate(v.x, v.y);
            var F = (o.nodePathCache = o.nodePathCache || []);
            var z = xt(R === "polygon" ? R + "," + B.join(",") : R, "" + l, "" + s);
            var G = F[z];
            if (G != null) {
              d = G;
              p = true;
              c.pathCache = d;
            } else {
              d = new Path2D();
              F[z] = c.pathCache = d;
            }
          }
          var Y = function r() {
            if (!p) {
              var n = v;
              if (h) {
                n = { x: 0, y: 0 };
              }
              o.nodeShapes[o.getNodeShape(t)].draw(d || e, n.x, n.y, s, l);
            }
            if (h) {
              e.fill(d);
            } else {
              e.fill();
            }
          };
          var X = function r() {
            var n = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : f;
            var a = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : true;
            var i = u.backgrounding;
            var s = 0;
            for (var l = 0; l < w.length; l++) {
              var c = t.cy().style().getIndexedStyle(t, "background-image-containment", "value", l);
              if ((a && c === "over") || (!a && c === "inside")) {
                s++;
                continue;
              }
              if (x[l] && w[l].complete && !w[l].error) {
                s++;
                o.drawInscribedImage(e, w[l], t, l, n);
              }
            }
            u.backgrounding = !(s === E);
            if (i !== u.backgrounding) {
              t.updateStyle(false);
            }
          };
          var V = function r() {
            var n = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : false;
            var a = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : f;
            if (o.hasPie(t)) {
              o.drawPie(e, t, a);
              if (n) {
                if (!h) {
                  o.nodeShapes[o.getNodeShape(t)].draw(e, v.x, v.y, s, l);
                }
              }
            }
          };
          var U = function t() {
            var r = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : f;
            var n = (A > 0 ? A : -A) * r;
            var a = A > 0 ? 0 : 255;
            if (A !== 0) {
              o.colorFillStyle(e, a, a, a, n);
              if (h) {
                e.fill(d);
              } else {
                e.fill();
              }
            }
          };
          var j = function t() {
            if (L > 0) {
              e.lineWidth = L;
              e.lineCap = "butt";
              if (e.setLineDash) {
                switch (k) {
                  case "dotted":
                    e.setLineDash([1, 1]);
                    break;
                  case "dashed":
                    e.setLineDash([4, 2]);
                    break;
                  case "solid":
                  case "double":
                    e.setLineDash([]);
                    break;
                }
              }
              if (h) {
                e.stroke(d);
              } else {
                e.stroke();
              }
              if (k === "double") {
                e.lineWidth = L / 3;
                var r = e.globalCompositeOperation;
                e.globalCompositeOperation = "destination-out";
                if (h) {
                  e.stroke(d);
                } else {
                  e.stroke();
                }
                e.globalCompositeOperation = r;
              }
              if (e.setLineDash) {
                e.setLineDash([]);
              }
            }
          };
          var H = function r() {
            if (a) {
              o.drawNodeOverlay(e, t, v, s, l);
            }
          };
          var q = function r() {
            if (a) {
              o.drawNodeUnderlay(e, t, v, s, l);
            }
          };
          var W = function r() {
            o.drawElementText(e, t, null, n);
          };
          var $ = t.pstyle("ghost").value === "yes";
          if ($) {
            var K = t.pstyle("ghost-offset-x").pfValue;
            var Z = t.pstyle("ghost-offset-y").pfValue;
            var Q = t.pstyle("ghost-opacity").value;
            var J = Q * f;
            e.translate(K, Z);
            M(Q * I);
            Y();
            X(J, true);
            P(Q * O);
            j();
            V(A !== 0 || L !== 0);
            X(J, false);
            U(J);
            e.translate(-K, -Z);
          }
          if (h) {
            e.translate(-v.x, -v.y);
          }
          q();
          if (h) {
            e.translate(v.x, v.y);
          }
          M();
          Y();
          X(f, true);
          P();
          j();
          V(A !== 0 || L !== 0);
          X(f, false);
          U();
          if (h) {
            e.translate(-v.x, -v.y);
          }
          W();
          H();
          if (r) {
            e.translate(y.x1, y.y1);
          }
        };
        var uh = function e(t) {
          if (!["overlay", "underlay"].includes(t)) {
            throw new Error("Invalid state");
          }
          return function (e, r, n, a, i) {
            var o = this;
            if (!r.visible()) {
              return;
            }
            var s = r.pstyle("".concat(t, "-padding")).pfValue;
            var l = r.pstyle("".concat(t, "-opacity")).value;
            var u = r.pstyle("".concat(t, "-color")).value;
            var c = r.pstyle("".concat(t, "-shape")).value;
            if (l > 0) {
              n = n || r.position();
              if (a == null || i == null) {
                var v = r.padding();
                a = r.width() + 2 * v;
                i = r.height() + 2 * v;
              }
              o.colorFillStyle(e, u[0], u[1], u[2], l);
              o.nodeShapes[c].draw(e, n.x, n.y, a + s * 2, i + s * 2);
              e.fill();
            }
          };
        };
        lh.drawNodeOverlay = uh("overlay");
        lh.drawNodeUnderlay = uh("underlay");
        lh.hasPie = function (e) {
          e = e[0];
          return e._private.hasPie;
        };
        lh.drawPie = function (e, t, r, n) {
          t = t[0];
          n = n || t.position();
          var a = t.cy().style();
          var i = t.pstyle("pie-size");
          var o = n.x;
          var s = n.y;
          var l = t.width();
          var u = t.height();
          var c = Math.min(l, u) / 2;
          var v = 0;
          var f = this.usePaths();
          if (f) {
            o = 0;
            s = 0;
          }
          if (i.units === "%") {
            c = c * i.pfValue;
          } else if (i.pfValue !== undefined) {
            c = i.pfValue / 2;
          }
          for (var h = 1; h <= a.pieBackgroundN; h++) {
            var d = t.pstyle("pie-" + h + "-background-size").value;
            var p = t.pstyle("pie-" + h + "-background-color").value;
            var g = t.pstyle("pie-" + h + "-background-opacity").value * r;
            var y = d / 100;
            if (y + v > 1) {
              y = 1 - v;
            }
            var m = 1.5 * Math.PI + 2 * Math.PI * v;
            var b = 2 * Math.PI * y;
            var x = m + b;
            if (d === 0 || v >= 1 || v + y > 1) {
              continue;
            }
            e.beginPath();
            e.moveTo(o, s);
            e.arc(o, s, c, m, x);
            e.closePath();
            this.colorFillStyle(e, p[0], p[1], p[2], g);
            e.fill();
            v += y;
          }
        };
        var ch = {};
        var vh = 100;
        ch.getPixelRatio = function () {
          var e = this.data.contexts[0];
          if (this.forcedPixelRatio != null) {
            return this.forcedPixelRatio;
          }
          var t =
            e.backingStorePixelRatio ||
            e.webkitBackingStorePixelRatio ||
            e.mozBackingStorePixelRatio ||
            e.msBackingStorePixelRatio ||
            e.oBackingStorePixelRatio ||
            e.backingStorePixelRatio ||
            1;
          return (window.devicePixelRatio || 1) / t;
        };
        ch.paintCache = function (e) {
          var t = (this.paintCaches = this.paintCaches || []);
          var r = true;
          var n;
          for (var a = 0; a < t.length; a++) {
            n = t[a];
            if (n.context === e) {
              r = false;
              break;
            }
          }
          if (r) {
            n = { context: e };
            t.push(n);
          }
          return n;
        };
        ch.createGradientStyleFor = function (e, t, r, n, a) {
          var i;
          var o = this.usePaths();
          var s = r.pstyle(t + "-gradient-stop-colors").value,
            l = r.pstyle(t + "-gradient-stop-positions").pfValue;
          if (n === "radial-gradient") {
            if (r.isEdge()) {
              var u = r.sourceEndpoint(),
                c = r.targetEndpoint(),
                v = r.midpoint();
              var f = Cr(u, v);
              var h = Cr(c, v);
              i = e.createRadialGradient(v.x, v.y, 0, v.x, v.y, Math.max(f, h));
            } else {
              var d = o ? { x: 0, y: 0 } : r.position(),
                p = r.paddedWidth(),
                g = r.paddedHeight();
              i = e.createRadialGradient(d.x, d.y, 0, d.x, d.y, Math.max(p, g));
            }
          } else {
            if (r.isEdge()) {
              var y = r.sourceEndpoint(),
                m = r.targetEndpoint();
              i = e.createLinearGradient(y.x, y.y, m.x, m.y);
            } else {
              var b = o ? { x: 0, y: 0 } : r.position(),
                x = r.paddedWidth(),
                w = r.paddedHeight(),
                E = x / 2,
                T = w / 2;
              var _ = r.pstyle("background-gradient-direction").value;
              switch (_) {
                case "to-bottom":
                  i = e.createLinearGradient(b.x, b.y - T, b.x, b.y + T);
                  break;
                case "to-top":
                  i = e.createLinearGradient(b.x, b.y + T, b.x, b.y - T);
                  break;
                case "to-left":
                  i = e.createLinearGradient(b.x + E, b.y, b.x - E, b.y);
                  break;
                case "to-right":
                  i = e.createLinearGradient(b.x - E, b.y, b.x + E, b.y);
                  break;
                case "to-bottom-right":
                case "to-right-bottom":
                  i = e.createLinearGradient(b.x - E, b.y - T, b.x + E, b.y + T);
                  break;
                case "to-top-right":
                case "to-right-top":
                  i = e.createLinearGradient(b.x - E, b.y + T, b.x + E, b.y - T);
                  break;
                case "to-bottom-left":
                case "to-left-bottom":
                  i = e.createLinearGradient(b.x + E, b.y - T, b.x - E, b.y + T);
                  break;
                case "to-top-left":
                case "to-left-top":
                  i = e.createLinearGradient(b.x + E, b.y + T, b.x - E, b.y - T);
                  break;
              }
            }
          }
          if (!i) return null;
          var D = l.length === s.length;
          var C = s.length;
          for (var N = 0; N < C; N++) {
            i.addColorStop(D ? l[N] : N / (C - 1), "rgba(" + s[N][0] + "," + s[N][1] + "," + s[N][2] + "," + a + ")");
          }
          return i;
        };
        ch.gradientFillStyle = function (e, t, r, n) {
          var a = this.createGradientStyleFor(e, "background", t, r, n);
          if (!a) return null;
          e.fillStyle = a;
        };
        ch.colorFillStyle = function (e, t, r, n, a) {
          e.fillStyle = "rgba(" + t + "," + r + "," + n + "," + a + ")";
        };
        ch.eleFillStyle = function (e, t, r) {
          var n = t.pstyle("background-fill").value;
          if (n === "linear-gradient" || n === "radial-gradient") {
            this.gradientFillStyle(e, t, n, r);
          } else {
            var a = t.pstyle("background-color").value;
            this.colorFillStyle(e, a[0], a[1], a[2], r);
          }
        };
        ch.gradientStrokeStyle = function (e, t, r, n) {
          var a = this.createGradientStyleFor(e, "line", t, r, n);
          if (!a) return null;
          e.strokeStyle = a;
        };
        ch.colorStrokeStyle = function (e, t, r, n, a) {
          e.strokeStyle = "rgba(" + t + "," + r + "," + n + "," + a + ")";
        };
        ch.eleStrokeStyle = function (e, t, r) {
          var n = t.pstyle("line-fill").value;
          if (n === "linear-gradient" || n === "radial-gradient") {
            this.gradientStrokeStyle(e, t, n, r);
          } else {
            var a = t.pstyle("line-color").value;
            this.colorStrokeStyle(e, a[0], a[1], a[2], r);
          }
        };
        ch.matchCanvasSize = function (e) {
          var t = this;
          var r = t.data;
          var n = t.findContainerClientCoords();
          var a = n[2];
          var i = n[3];
          var o = t.getPixelRatio();
          var s = t.motionBlurPxRatio;
          if (e === t.data.bufferCanvases[t.MOTIONBLUR_BUFFER_NODE] || e === t.data.bufferCanvases[t.MOTIONBLUR_BUFFER_DRAG]) {
            o = s;
          }
          var l = a * o;
          var u = i * o;
          var c;
          if (l === t.canvasWidth && u === t.canvasHeight) {
            return;
          }
          t.fontCaches = null;
          var v = r.canvasContainer;
          v.style.width = a + "px";
          v.style.height = i + "px";
          for (var f = 0; f < t.CANVAS_LAYERS; f++) {
            c = r.canvases[f];
            c.width = l;
            c.height = u;
            c.style.width = a + "px";
            c.style.height = i + "px";
          }
          for (var f = 0; f < t.BUFFER_COUNT; f++) {
            c = r.bufferCanvases[f];
            c.width = l;
            c.height = u;
            c.style.width = a + "px";
            c.style.height = i + "px";
          }
          t.textureMult = 1;
          if (o <= 1) {
            c = r.bufferCanvases[t.TEXTURE_BUFFER];
            t.textureMult = 2;
            c.width = l * t.textureMult;
            c.height = u * t.textureMult;
          }
          t.canvasWidth = l;
          t.canvasHeight = u;
        };
        ch.renderTo = function (e, t, r, n) {
          this.render({ forcedContext: e, forcedZoom: t, forcedPan: r, drawAllLayers: true, forcedPxRatio: n });
        };
        ch.render = function (e) {
          e = e || Ft();
          var t = e.forcedContext;
          var r = e.drawAllLayers;
          var n = e.drawOnlyNodeLayer;
          var a = e.forcedZoom;
          var i = e.forcedPan;
          var o = this;
          var s = e.forcedPxRatio === undefined ? this.getPixelRatio() : e.forcedPxRatio;
          var l = o.cy;
          var u = o.data;
          var c = u.canvasNeedsRedraw;
          var v = o.textureOnViewport && !t && (o.pinching || o.hoverData.dragging || o.swipePanning || o.data.wheelZooming);
          var f = e.motionBlur !== undefined ? e.motionBlur : o.motionBlur;
          var h = o.motionBlurPxRatio;
          var d = l.hasCompoundNodes();
          var p = o.hoverData.draggingEles;
          var g = o.hoverData.selecting || o.touchData.selecting ? true : false;
          f = f && !t && o.motionBlurEnabled && !g;
          var y = f;
          if (!t) {
            if (o.prevPxRatio !== s) {
              o.invalidateContainerClientCoordsCache();
              o.matchCanvasSize(o.container);
              o.redrawHint("eles", true);
              o.redrawHint("drag", true);
            }
            o.prevPxRatio = s;
          }
          if (!t && o.motionBlurTimeout) {
            clearTimeout(o.motionBlurTimeout);
          }
          if (f) {
            if (o.mbFrames == null) {
              o.mbFrames = 0;
            }
            o.mbFrames++;
            if (o.mbFrames < 3) {
              y = false;
            }
            if (o.mbFrames > o.minMbLowQualFrames) {
              o.motionBlurPxRatio = o.mbPxRBlurry;
            }
          }
          if (o.clearingMotionBlur) {
            o.motionBlurPxRatio = 1;
          }
          if (o.textureDrawLastFrame && !v) {
            c[o.NODE] = true;
            c[o.SELECT_BOX] = true;
          }
          var m = l.style();
          var b = l.zoom();
          var x = a !== undefined ? a : b;
          var w = l.pan();
          var E = { x: w.x, y: w.y };
          var T = { zoom: b, pan: { x: w.x, y: w.y } };
          var _ = o.prevViewport;
          var D = _ === undefined || T.zoom !== _.zoom || T.pan.x !== _.pan.x || T.pan.y !== _.pan.y;
          if (!D && !(p && !d)) {
            o.motionBlurPxRatio = 1;
          }
          if (i) {
            E = i;
          }
          x *= s;
          E.x *= s;
          E.y *= s;
          var C = o.getCachedZSortedEles();
          function N(e, t, r, n, a) {
            var i = e.globalCompositeOperation;
            e.globalCompositeOperation = "destination-out";
            o.colorFillStyle(e, 255, 255, 255, o.motionBlurTransparency);
            e.fillRect(t, r, n, a);
            e.globalCompositeOperation = i;
          }
          function A(e, n) {
            var s, l, c, v;
            if (!o.clearingMotionBlur && (e === u.bufferContexts[o.MOTIONBLUR_BUFFER_NODE] || e === u.bufferContexts[o.MOTIONBLUR_BUFFER_DRAG])) {
              s = { x: w.x * h, y: w.y * h };
              l = b * h;
              c = o.canvasWidth * h;
              v = o.canvasHeight * h;
            } else {
              s = E;
              l = x;
              c = o.canvasWidth;
              v = o.canvasHeight;
            }
            e.setTransform(1, 0, 0, 1, 0, 0);
            if (n === "motionBlur") {
              N(e, 0, 0, c, v);
            } else if (!t && (n === undefined || n)) {
              e.clearRect(0, 0, c, v);
            }
            if (!r) {
              e.translate(s.x, s.y);
              e.scale(l, l);
            }
            if (i) {
              e.translate(i.x, i.y);
            }
            if (a) {
              e.scale(a, a);
            }
          }
          if (!v) {
            o.textureDrawLastFrame = false;
          }
          if (v) {
            o.textureDrawLastFrame = true;
            if (!o.textureCache) {
              o.textureCache = {};
              o.textureCache.bb = l.mutableElements().boundingBox();
              o.textureCache.texture = o.data.bufferCanvases[o.TEXTURE_BUFFER];
              var L = o.data.bufferContexts[o.TEXTURE_BUFFER];
              L.setTransform(1, 0, 0, 1, 0, 0);
              L.clearRect(0, 0, o.canvasWidth * o.textureMult, o.canvasHeight * o.textureMult);
              o.render({ forcedContext: L, drawOnlyNodeLayer: true, forcedPxRatio: s * o.textureMult });
              var T = (o.textureCache.viewport = { zoom: l.zoom(), pan: l.pan(), width: o.canvasWidth, height: o.canvasHeight });
              T.mpan = { x: (0 - T.pan.x) / T.zoom, y: (0 - T.pan.y) / T.zoom };
            }
            c[o.DRAG] = false;
            c[o.NODE] = false;
            var I = u.contexts[o.NODE];
            var S = o.textureCache.texture;
            var T = o.textureCache.viewport;
            I.setTransform(1, 0, 0, 1, 0, 0);
            if (f) {
              N(I, 0, 0, T.width, T.height);
            } else {
              I.clearRect(0, 0, T.width, T.height);
            }
            var k = m.core("outside-texture-bg-color").value;
            var O = m.core("outside-texture-bg-opacity").value;
            o.colorFillStyle(I, k[0], k[1], k[2], O);
            I.fillRect(0, 0, T.width, T.height);
            var b = l.zoom();
            A(I, false);
            I.clearRect(T.mpan.x, T.mpan.y, T.width / T.zoom / s, T.height / T.zoom / s);
            I.drawImage(S, T.mpan.x, T.mpan.y, T.width / T.zoom / s, T.height / T.zoom / s);
          } else if (o.textureOnViewport && !t) {
            o.textureCache = null;
          }
          var M = l.extent();
          var P = o.pinching || o.hoverData.dragging || o.swipePanning || o.data.wheelZooming || o.hoverData.draggingEles || o.cy.animated();
          var R = o.hideEdgesOnViewport && P;
          var B = [];
          B[o.NODE] = (!c[o.NODE] && f && !o.clearedForMotionBlur[o.NODE]) || o.clearingMotionBlur;
          if (B[o.NODE]) {
            o.clearedForMotionBlur[o.NODE] = true;
          }
          B[o.DRAG] = (!c[o.DRAG] && f && !o.clearedForMotionBlur[o.DRAG]) || o.clearingMotionBlur;
          if (B[o.DRAG]) {
            o.clearedForMotionBlur[o.DRAG] = true;
          }
          if (c[o.NODE] || r || n || B[o.NODE]) {
            var F = f && !B[o.NODE] && h !== 1;
            var I = t || (F ? o.data.bufferContexts[o.MOTIONBLUR_BUFFER_NODE] : u.contexts[o.NODE]);
            var z = f && !F ? "motionBlur" : undefined;
            A(I, z);
            if (R) {
              o.drawCachedNodes(I, C.nondrag, s, M);
            } else {
              o.drawLayeredElements(I, C.nondrag, s, M);
            }
            if (o.debug) {
              o.drawDebugPoints(I, C.nondrag);
            }
            if (!r && !f) {
              c[o.NODE] = false;
            }
          }
          if (!n && (c[o.DRAG] || r || B[o.DRAG])) {
            var F = f && !B[o.DRAG] && h !== 1;
            var I = t || (F ? o.data.bufferContexts[o.MOTIONBLUR_BUFFER_DRAG] : u.contexts[o.DRAG]);
            A(I, f && !F ? "motionBlur" : undefined);
            if (R) {
              o.drawCachedNodes(I, C.drag, s, M);
            } else {
              o.drawCachedElements(I, C.drag, s, M);
            }
            if (o.debug) {
              o.drawDebugPoints(I, C.drag);
            }
            if (!r && !f) {
              c[o.DRAG] = false;
            }
          }
          if (o.showFps || (!n && c[o.SELECT_BOX] && !r)) {
            var I = t || u.contexts[o.SELECT_BOX];
            A(I);
            if (o.selection[4] == 1 && (o.hoverData.selecting || o.touchData.selecting)) {
              var b = o.cy.zoom();
              var G = m.core("selection-box-border-width").value / b;
              I.lineWidth = G;
              I.fillStyle =
                "rgba(" +
                m.core("selection-box-color").value[0] +
                "," +
                m.core("selection-box-color").value[1] +
                "," +
                m.core("selection-box-color").value[2] +
                "," +
                m.core("selection-box-opacity").value +
                ")";
              I.fillRect(o.selection[0], o.selection[1], o.selection[2] - o.selection[0], o.selection[3] - o.selection[1]);
              if (G > 0) {
                I.strokeStyle =
                  "rgba(" +
                  m.core("selection-box-border-color").value[0] +
                  "," +
                  m.core("selection-box-border-color").value[1] +
                  "," +
                  m.core("selection-box-border-color").value[2] +
                  "," +
                  m.core("selection-box-opacity").value +
                  ")";
                I.strokeRect(o.selection[0], o.selection[1], o.selection[2] - o.selection[0], o.selection[3] - o.selection[1]);
              }
            }
            if (u.bgActivePosistion && !o.hoverData.selecting) {
              var b = o.cy.zoom();
              var Y = u.bgActivePosistion;
              I.fillStyle =
                "rgba(" +
                m.core("active-bg-color").value[0] +
                "," +
                m.core("active-bg-color").value[1] +
                "," +
                m.core("active-bg-color").value[2] +
                "," +
                m.core("active-bg-opacity").value +
                ")";
              I.beginPath();
              I.arc(Y.x, Y.y, m.core("active-bg-size").pfValue / b, 0, 2 * Math.PI);
              I.fill();
            }
            var X = o.lastRedrawTime;
            if (o.showFps && X) {
              X = Math.round(X);
              var V = Math.round(1e3 / X);
              I.setTransform(1, 0, 0, 1, 0, 0);
              I.fillStyle = "rgba(255, 0, 0, 0.75)";
              I.strokeStyle = "rgba(255, 0, 0, 0.75)";
              I.lineWidth = 1;
              I.fillText("1 frame = " + X + " ms = " + V + " fps", 0, 20);
              var U = 60;
              I.strokeRect(0, 30, 250, 20);
              I.fillRect(0, 30, 250 * Math.min(V / U, 1), 20);
            }
            if (!r) {
              c[o.SELECT_BOX] = false;
            }
          }
          if (f && h !== 1) {
            var j = u.contexts[o.NODE];
            var H = o.data.bufferCanvases[o.MOTIONBLUR_BUFFER_NODE];
            var q = u.contexts[o.DRAG];
            var W = o.data.bufferCanvases[o.MOTIONBLUR_BUFFER_DRAG];
            var $ = function e(t, r, n) {
              t.setTransform(1, 0, 0, 1, 0, 0);
              if (n || !y) {
                t.clearRect(0, 0, o.canvasWidth, o.canvasHeight);
              } else {
                N(t, 0, 0, o.canvasWidth, o.canvasHeight);
              }
              var a = h;
              t.drawImage(r, 0, 0, o.canvasWidth * a, o.canvasHeight * a, 0, 0, o.canvasWidth, o.canvasHeight);
            };
            if (c[o.NODE] || B[o.NODE]) {
              $(j, H, B[o.NODE]);
              c[o.NODE] = false;
            }
            if (c[o.DRAG] || B[o.DRAG]) {
              $(q, W, B[o.DRAG]);
              c[o.DRAG] = false;
            }
          }
          o.prevViewport = T;
          if (o.clearingMotionBlur) {
            o.clearingMotionBlur = false;
            o.motionBlurCleared = true;
            o.motionBlur = true;
          }
          if (f) {
            o.motionBlurTimeout = setTimeout(function () {
              o.motionBlurTimeout = null;
              o.clearedForMotionBlur[o.NODE] = false;
              o.clearedForMotionBlur[o.DRAG] = false;
              o.motionBlur = false;
              o.clearingMotionBlur = !v;
              o.mbFrames = 0;
              c[o.NODE] = true;
              c[o.DRAG] = true;
              o.redraw();
            }, vh);
          }
          if (!t) {
            l.emit("render");
          }
        };
        var fh = {};
        fh.drawPolygonPath = function (e, t, r, n, a, i) {
          var o = n / 2;
          var s = a / 2;
          if (e.beginPath) {
            e.beginPath();
          }
          e.moveTo(t + o * i[0], r + s * i[1]);
          for (var l = 1; l < i.length / 2; l++) {
            e.lineTo(t + o * i[l * 2], r + s * i[l * 2 + 1]);
          }
          e.closePath();
        };
        fh.drawRoundPolygonPath = function (e, t, r, n, a, i) {
          var o = n / 2;
          var s = a / 2;
          var l = gn(n, a);
          if (e.beginPath) {
            e.beginPath();
          }
          for (var u = 0; u < i.length / 4; u++) {
            var c = void 0,
              v = void 0;
            if (u === 0) {
              c = i.length - 2;
            } else {
              c = u * 4 - 2;
            }
            v = u * 4 + 2;
            var f = t + o * i[u * 4];
            var h = r + s * i[u * 4 + 1];
            var d = -i[c] * i[v] - i[c + 1] * i[v + 1];
            var p = l / Math.tan(Math.acos(d) / 2);
            var g = f - p * i[c];
            var y = h - p * i[c + 1];
            var m = f + p * i[v];
            var b = h + p * i[v + 1];
            if (u === 0) {
              e.moveTo(g, y);
            } else {
              e.lineTo(g, y);
            }
            e.arcTo(f, h, m, b, l);
          }
          e.closePath();
        };
        fh.drawRoundRectanglePath = function (e, t, r, n, a) {
          var i = n / 2;
          var o = a / 2;
          var s = pn(n, a);
          if (e.beginPath) {
            e.beginPath();
          }
          e.moveTo(t, r - o);
          e.arcTo(t + i, r - o, t + i, r, s);
          e.arcTo(t + i, r + o, t, r + o, s);
          e.arcTo(t - i, r + o, t - i, r, s);
          e.arcTo(t - i, r - o, t, r - o, s);
          e.lineTo(t, r - o);
          e.closePath();
        };
        fh.drawBottomRoundRectanglePath = function (e, t, r, n, a) {
          var i = n / 2;
          var o = a / 2;
          var s = pn(n, a);
          if (e.beginPath) {
            e.beginPath();
          }
          e.moveTo(t, r - o);
          e.lineTo(t + i, r - o);
          e.lineTo(t + i, r);
          e.arcTo(t + i, r + o, t, r + o, s);
          e.arcTo(t - i, r + o, t - i, r, s);
          e.lineTo(t - i, r - o);
          e.lineTo(t, r - o);
          e.closePath();
        };
        fh.drawCutRectanglePath = function (e, t, r, n, a) {
          var i = n / 2;
          var o = a / 2;
          var s = yn();
          if (e.beginPath) {
            e.beginPath();
          }
          e.moveTo(t - i + s, r - o);
          e.lineTo(t + i - s, r - o);
          e.lineTo(t + i, r - o + s);
          e.lineTo(t + i, r + o - s);
          e.lineTo(t + i - s, r + o);
          e.lineTo(t - i + s, r + o);
          e.lineTo(t - i, r + o - s);
          e.lineTo(t - i, r - o + s);
          e.closePath();
        };
        fh.drawBarrelPath = function (e, t, r, n, a) {
          var i = n / 2;
          var o = a / 2;
          var s = t - i;
          var l = t + i;
          var u = r - o;
          var c = r + o;
          var v = bn(n, a);
          var f = v.widthOffset;
          var h = v.heightOffset;
          var d = v.ctrlPtOffsetPct * f;
          if (e.beginPath) {
            e.beginPath();
          }
          e.moveTo(s, u + h);
          e.lineTo(s, c - h);
          e.quadraticCurveTo(s + d, c, s + f, c);
          e.lineTo(l - f, c);
          e.quadraticCurveTo(l - d, c, l, c - h);
          e.lineTo(l, u + h);
          e.quadraticCurveTo(l - d, u, l - f, u);
          e.lineTo(s + f, u);
          e.quadraticCurveTo(s + d, u, s, u + h);
          e.closePath();
        };
        var hh = Math.sin(0);
        var dh = Math.cos(0);
        var ph = {};
        var gh = {};
        var yh = Math.PI / 40;
        for (var mh = 0 * Math.PI; mh < 2 * Math.PI; mh += yh) {
          ph[mh] = Math.sin(mh);
          gh[mh] = Math.cos(mh);
        }
        fh.drawEllipsePath = function (e, t, r, n, a) {
          if (e.beginPath) {
            e.beginPath();
          }
          if (e.ellipse) {
            e.ellipse(t, r, n / 2, a / 2, 0, 0, 2 * Math.PI);
          } else {
            var i, o;
            var s = n / 2;
            var l = a / 2;
            for (var u = 0 * Math.PI; u < 2 * Math.PI; u += yh) {
              i = t - s * ph[u] * hh + s * gh[u] * dh;
              o = r + l * gh[u] * hh + l * ph[u] * dh;
              if (u === 0) {
                e.moveTo(i, o);
              } else {
                e.lineTo(i, o);
              }
            }
          }
          e.closePath();
        };
        var bh = {};
        bh.createBuffer = function (e, t) {
          var r = document.createElement("canvas");
          r.width = e;
          r.height = t;
          return [r, r.getContext("2d")];
        };
        bh.bufferCanvasImage = function (e) {
          var t = this.cy;
          var r = t.mutableElements();
          var n = r.boundingBox();
          var a = this.findContainerClientCoords();
          var i = e.full ? Math.ceil(n.w) : a[2];
          var o = e.full ? Math.ceil(n.h) : a[3];
          var s = _(e.maxWidth) || _(e.maxHeight);
          var l = this.getPixelRatio();
          var u = 1;
          if (e.scale !== undefined) {
            i *= e.scale;
            o *= e.scale;
            u = e.scale;
          } else if (s) {
            var c = Infinity;
            var v = Infinity;
            if (_(e.maxWidth)) {
              c = (u * e.maxWidth) / i;
            }
            if (_(e.maxHeight)) {
              v = (u * e.maxHeight) / o;
            }
            u = Math.min(c, v);
            i *= u;
            o *= u;
          }
          if (!s) {
            i *= l;
            o *= l;
            u *= l;
          }
          var f = document.createElement("canvas");
          f.width = i;
          f.height = o;
          f.style.width = i + "px";
          f.style.height = o + "px";
          var h = f.getContext("2d");
          if (i > 0 && o > 0) {
            h.clearRect(0, 0, i, o);
            h.globalCompositeOperation = "source-over";
            var d = this.getCachedZSortedEles();
            if (e.full) {
              h.translate(-n.x1 * u, -n.y1 * u);
              h.scale(u, u);
              this.drawElements(h, d);
              h.scale(1 / u, 1 / u);
              h.translate(n.x1 * u, n.y1 * u);
            } else {
              var p = t.pan();
              var g = { x: p.x * u, y: p.y * u };
              u *= t.zoom();
              h.translate(g.x, g.y);
              h.scale(u, u);
              this.drawElements(h, d);
              h.scale(1 / u, 1 / u);
              h.translate(-g.x, -g.y);
            }
            if (e.bg) {
              h.globalCompositeOperation = "destination-over";
              h.fillStyle = e.bg;
              h.rect(0, 0, i, o);
              h.fill();
            }
          }
          return f;
        };
        function xh(e, t) {
          var r = atob(e);
          var n = new ArrayBuffer(r.length);
          var a = new Uint8Array(n);
          for (var i = 0; i < r.length; i++) {
            a[i] = r.charCodeAt(i);
          }
          return new Blob([n], { type: t });
        }
        function wh(e) {
          var t = e.indexOf(",");
          return e.substr(t + 1);
        }
        function Eh(e, t, r) {
          var n = function n() {
            return t.toDataURL(r, e.quality);
          };
          switch (e.output) {
            case "blob-promise":
              return new $a(function (n, a) {
                try {
                  t.toBlob(
                    function (e) {
                      if (e != null) {
                        n(e);
                      } else {
                        a(new Error("`canvas.toBlob()` sent a null value in its callback"));
                      }
                    },
                    r,
                    e.quality
                  );
                } catch (i) {
                  a(i);
                }
              });
            case "blob":
              return xh(wh(n()), r);
            case "base64":
              return wh(n());
            case "base64uri":
            default:
              return n();
          }
        }
        bh.png = function (e) {
          return Eh(e, this.bufferCanvasImage(e), "image/png");
        };
        bh.jpg = function (e) {
          return Eh(e, this.bufferCanvasImage(e), "image/jpeg");
        };
        var Th = {};
        Th.nodeShapeImpl = function (e, t, r, n, a, i, o) {
          switch (e) {
            case "ellipse":
              return this.drawEllipsePath(t, r, n, a, i);
            case "polygon":
              return this.drawPolygonPath(t, r, n, a, i, o);
            case "round-polygon":
              return this.drawRoundPolygonPath(t, r, n, a, i, o);
            case "roundrectangle":
            case "round-rectangle":
              return this.drawRoundRectanglePath(t, r, n, a, i);
            case "cutrectangle":
            case "cut-rectangle":
              return this.drawCutRectanglePath(t, r, n, a, i);
            case "bottomroundrectangle":
            case "bottom-round-rectangle":
              return this.drawBottomRoundRectanglePath(t, r, n, a, i);
            case "barrel":
              return this.drawBarrelPath(t, r, n, a, i);
          }
        };
        var _h = Ch;
        var Dh = Ch.prototype;
        Dh.CANVAS_LAYERS = 3;
        Dh.SELECT_BOX = 0;
        Dh.DRAG = 1;
        Dh.NODE = 2;
        Dh.BUFFER_COUNT = 3;
        Dh.TEXTURE_BUFFER = 0;
        Dh.MOTIONBLUR_BUFFER_NODE = 1;
        Dh.MOTIONBLUR_BUFFER_DRAG = 2;
        function Ch(e) {
          var t = this;
          t.data = {
            canvases: new Array(Dh.CANVAS_LAYERS),
            contexts: new Array(Dh.CANVAS_LAYERS),
            canvasNeedsRedraw: new Array(Dh.CANVAS_LAYERS),
            bufferCanvases: new Array(Dh.BUFFER_COUNT),
            bufferContexts: new Array(Dh.CANVAS_LAYERS),
          };
          var r = "-webkit-tap-highlight-color";
          var n = "rgba(0,0,0,0)";
          t.data.canvasContainer = document.createElement("div");
          var a = t.data.canvasContainer.style;
          t.data.canvasContainer.style[r] = n;
          a.position = "relative";
          a.zIndex = "0";
          a.overflow = "hidden";
          var i = e.cy.container();
          i.appendChild(t.data.canvasContainer);
          i.style[r] = n;
          var o = {
            "-webkit-user-select": "none",
            "-moz-user-select": "-moz-none",
            "user-select": "none",
            "-webkit-tap-highlight-color": "rgba(0,0,0,0)",
            "outline-style": "none",
          };
          if (B()) {
            o["-ms-touch-action"] = "none";
            o["touch-action"] = "none";
          }
          for (var s = 0; s < Dh.CANVAS_LAYERS; s++) {
            var l = (t.data.canvases[s] = document.createElement("canvas"));
            t.data.contexts[s] = l.getContext("2d");
            Object.keys(o).forEach(function (e) {
              l.style[e] = o[e];
            });
            l.style.position = "absolute";
            l.setAttribute("data-id", "layer" + s);
            l.style.zIndex = String(Dh.CANVAS_LAYERS - s);
            t.data.canvasContainer.appendChild(l);
            t.data.canvasNeedsRedraw[s] = false;
          }
          t.data.topCanvas = t.data.canvases[0];
          t.data.canvases[Dh.NODE].setAttribute("data-id", "layer" + Dh.NODE + "-node");
          t.data.canvases[Dh.SELECT_BOX].setAttribute("data-id", "layer" + Dh.SELECT_BOX + "-selectbox");
          t.data.canvases[Dh.DRAG].setAttribute("data-id", "layer" + Dh.DRAG + "-drag");
          for (var s = 0; s < Dh.BUFFER_COUNT; s++) {
            t.data.bufferCanvases[s] = document.createElement("canvas");
            t.data.bufferContexts[s] = t.data.bufferCanvases[s].getContext("2d");
            t.data.bufferCanvases[s].style.position = "absolute";
            t.data.bufferCanvases[s].setAttribute("data-id", "buffer" + s);
            t.data.bufferCanvases[s].style.zIndex = String(-s - 1);
            t.data.bufferCanvases[s].style.visibility = "hidden";
          }
          t.pathsEnabled = true;
          var u = Or();
          var c = function e(t) {
            return { x: (t.x1 + t.x2) / 2, y: (t.y1 + t.y2) / 2 };
          };
          var v = function e(t) {
            return { x: -t.w / 2, y: -t.h / 2 };
          };
          var f = function e(t) {
            var r = t[0]._private;
            var n = r.oldBackgroundTimestamp === r.backgroundTimestamp;
            return !n;
          };
          var h = function e(t) {
            return t[0]._private.nodeKey;
          };
          var d = function e(t) {
            return t[0]._private.labelStyleKey;
          };
          var p = function e(t) {
            return t[0]._private.sourceLabelStyleKey;
          };
          var g = function e(t) {
            return t[0]._private.targetLabelStyleKey;
          };
          var y = function e(r, n, a, i, o) {
            return t.drawElement(r, n, a, false, false, o);
          };
          var m = function e(r, n, a, i, o) {
            return t.drawElementText(r, n, a, i, "main", o);
          };
          var b = function e(r, n, a, i, o) {
            return t.drawElementText(r, n, a, i, "source", o);
          };
          var x = function e(r, n, a, i, o) {
            return t.drawElementText(r, n, a, i, "target", o);
          };
          var w = function e(t) {
            t.boundingBox();
            return t[0]._private.bodyBounds;
          };
          var E = function e(t) {
            t.boundingBox();
            return t[0]._private.labelBounds.main || u;
          };
          var T = function e(t) {
            t.boundingBox();
            return t[0]._private.labelBounds.source || u;
          };
          var _ = function e(t) {
            t.boundingBox();
            return t[0]._private.labelBounds.target || u;
          };
          var D = function e(t, r) {
            return r;
          };
          var C = function e(t) {
            return c(w(t));
          };
          var N = function e(t, r, n) {
            var a = t ? t + "-" : "";
            return { x: r.x + n.pstyle(a + "text-margin-x").pfValue, y: r.y + n.pstyle(a + "text-margin-y").pfValue };
          };
          var A = function e(t, r, n) {
            var a = t[0]._private.rscratch;
            return { x: a[r], y: a[n] };
          };
          var L = function e(t) {
            return N("", A(t, "labelX", "labelY"), t);
          };
          var I = function e(t) {
            return N("source", A(t, "sourceLabelX", "sourceLabelY"), t);
          };
          var S = function e(t) {
            return N("target", A(t, "targetLabelX", "targetLabelY"), t);
          };
          var k = function e(t) {
            return v(w(t));
          };
          var O = function e(t) {
            return v(T(t));
          };
          var M = function e(t) {
            return v(_(t));
          };
          var P = function e(t) {
            var r = E(t);
            var n = v(E(t));
            if (t.isNode()) {
              switch (t.pstyle("text-halign").value) {
                case "left":
                  n.x = -r.w;
                  break;
                case "right":
                  n.x = 0;
                  break;
              }
              switch (t.pstyle("text-valign").value) {
                case "top":
                  n.y = -r.h;
                  break;
                case "bottom":
                  n.y = 0;
                  break;
              }
            }
            return n;
          };
          var R = (t.data.eleTxrCache = new Tf(t, {
            getKey: h,
            doesEleInvalidateKey: f,
            drawElement: y,
            getBoundingBox: w,
            getRotationPoint: C,
            getRotationOffset: k,
            allowEdgeTxrCaching: false,
            allowParentTxrCaching: false,
          }));
          var F = (t.data.lblTxrCache = new Tf(t, {
            getKey: d,
            drawElement: m,
            getBoundingBox: E,
            getRotationPoint: L,
            getRotationOffset: P,
            isVisible: D,
          }));
          var z = (t.data.slbTxrCache = new Tf(t, {
            getKey: p,
            drawElement: b,
            getBoundingBox: T,
            getRotationPoint: I,
            getRotationOffset: O,
            isVisible: D,
          }));
          var G = (t.data.tlbTxrCache = new Tf(t, {
            getKey: g,
            drawElement: x,
            getBoundingBox: _,
            getRotationPoint: S,
            getRotationOffset: M,
            isVisible: D,
          }));
          var Y = (t.data.lyrTxrCache = new zf(t));
          t.onUpdateEleCalcs(function e(t, r) {
            R.invalidateElements(r);
            F.invalidateElements(r);
            z.invalidateElements(r);
            G.invalidateElements(r);
            Y.invalidateElements(r);
            for (var n = 0; n < r.length; n++) {
              var a = r[n]._private;
              a.oldBackgroundTimestamp = a.backgroundTimestamp;
            }
          });
          var X = function e(t) {
            for (var r = 0; r < t.length; r++) {
              Y.enqueueElementRefinement(t[r].ele);
            }
          };
          R.onDequeue(X);
          F.onDequeue(X);
          z.onDequeue(X);
          G.onDequeue(X);
        }
        Dh.redrawHint = function (e, t) {
          var r = this;
          switch (e) {
            case "eles":
              r.data.canvasNeedsRedraw[Dh.NODE] = t;
              break;
            case "drag":
              r.data.canvasNeedsRedraw[Dh.DRAG] = t;
              break;
            case "select":
              r.data.canvasNeedsRedraw[Dh.SELECT_BOX] = t;
              break;
          }
        };
        var Nh = typeof Path2D !== "undefined";
        Dh.path2dEnabled = function (e) {
          if (e === undefined) {
            return this.pathsEnabled;
          }
          this.pathsEnabled = e ? true : false;
        };
        Dh.usePaths = function () {
          return Nh && this.pathsEnabled;
        };
        Dh.setImgSmoothing = function (e, t) {
          if (e.imageSmoothingEnabled != null) {
            e.imageSmoothingEnabled = t;
          } else {
            e.webkitImageSmoothingEnabled = t;
            e.mozImageSmoothingEnabled = t;
            e.msImageSmoothingEnabled = t;
          }
        };
        Dh.getImgSmoothing = function (e) {
          if (e.imageSmoothingEnabled != null) {
            return e.imageSmoothingEnabled;
          } else {
            return e.webkitImageSmoothingEnabled || e.mozImageSmoothingEnabled || e.msImageSmoothingEnabled;
          }
        };
        Dh.makeOffscreenCanvas = function (t, r) {
          var n;
          if ((typeof OffscreenCanvas === "undefined" ? "undefined" : e(OffscreenCanvas)) !== "undefined") {
            n = new OffscreenCanvas(t, r);
          } else {
            n = document.createElement("canvas");
            n.width = t;
            n.height = r;
          }
          return n;
        };
        [Vf, Kf, nh, ih, oh, lh, ch, fh, bh, Th].forEach(function (e) {
          Q(Dh, e);
        });
        var Ah = [
          { name: "null", impl: _v },
          { name: "base", impl: Zv },
          { name: "canvas", impl: _h },
        ];
        var Lh = [
          { type: "layout", extensions: Tv },
          { type: "renderer", extensions: Ah },
        ];
        var Ih = {};
        var Sh = {};
        function kh(e, t, r) {
          var n = r;
          var a = function r(n) {
            kt("Can not register `" + t + "` for `" + e + "` since `" + n + "` already exists in the prototype and can not be overridden");
          };
          if (e === "core") {
            if (Pc.prototype[t]) {
              return a(t);
            } else {
              Pc.prototype[t] = r;
            }
          } else if (e === "collection") {
            if ($u.prototype[t]) {
              return a(t);
            } else {
              $u.prototype[t] = r;
            }
          } else if (e === "layout") {
            var i = function e(t) {
              this.options = t;
              r.call(this, t);
              if (!E(this._private)) {
                this._private = {};
              }
              this._private.cy = t.cy;
              this._private.listeners = [];
              this.createEmitter();
            };
            var o = (i.prototype = Object.create(r.prototype));
            var s = [];
            for (var l = 0; l < s.length; l++) {
              var u = s[l];
              o[u] =
                o[u] ||
                function () {
                  return this;
                };
            }
            if (o.start && !o.run) {
              o.run = function () {
                this.start();
                return this;
              };
            } else if (!o.start && o.run) {
              o.start = function () {
                this.run();
                return this;
              };
            }
            var c = r.prototype.stop;
            o.stop = function () {
              var e = this.options;
              if (e && e.animate) {
                var t = this.animations;
                if (t) {
                  for (var r = 0; r < t.length; r++) {
                    t[r].stop();
                  }
                }
              }
              if (c) {
                c.call(this);
              } else {
                this.emit("layoutstop");
              }
              return this;
            };
            if (!o.destroy) {
              o.destroy = function () {
                return this;
              };
            }
            o.cy = function () {
              return this._private.cy;
            };
            var v = function e(t) {
              return t._private.cy;
            };
            var f = {
              addEventFields: function e(t, r) {
                r.layout = t;
                r.cy = v(t);
                r.target = t;
              },
              bubble: function e() {
                return true;
              },
              parent: function e(t) {
                return v(t);
              },
            };
            Q(o, {
              createEmitter: function e() {
                this._private.emitter = new fu(f, this);
                return this;
              },
              emitter: function e() {
                return this._private.emitter;
              },
              on: function e(t, r) {
                this.emitter().on(t, r);
                return this;
              },
              one: function e(t, r) {
                this.emitter().one(t, r);
                return this;
              },
              once: function e(t, r) {
                this.emitter().one(t, r);
                return this;
              },
              removeListener: function e(t, r) {
                this.emitter().removeListener(t, r);
                return this;
              },
              removeAllListeners: function e() {
                this.emitter().removeAllListeners();
                return this;
              },
              emit: function e(t, r) {
                this.emitter().emit(t, r);
                return this;
              },
            });
            ks.eventAliasesOn(o);
            n = i;
          } else if (e === "renderer" && t !== "null" && t !== "base") {
            var h = Oh("renderer", "base");
            var d = h.prototype;
            var p = r;
            var g = r.prototype;
            var y = function e() {
              h.apply(this, arguments);
              p.apply(this, arguments);
            };
            var m = y.prototype;
            for (var b in d) {
              var x = d[b];
              var w = g[b] != null;
              if (w) {
                return a(b);
              }
              m[b] = x;
            }
            for (var T in g) {
              m[T] = g[T];
            }
            d.clientFunctions.forEach(function (e) {
              m[e] =
                m[e] ||
                function () {
                  It("Renderer does not implement `renderer." + e + "()` on its prototype");
                };
            });
            n = y;
          } else if (e === "__proto__" || e === "constructor" || e === "prototype") {
            return It(e + " is an illegal type to be registered, possibly lead to prototype pollutions");
          }
          return ie({ map: Ih, keys: [e, t], value: n });
        }
        function Oh(e, t) {
          return oe({ map: Ih, keys: [e, t] });
        }
        function Mh(e, t, r, n, a) {
          return ie({ map: Sh, keys: [e, t, r, n], value: a });
        }
        function Ph(e, t, r, n) {
          return oe({ map: Sh, keys: [e, t, r, n] });
        }
        var Rh = function e() {
          if (arguments.length === 2) {
            return Oh.apply(null, arguments);
          } else if (arguments.length === 3) {
            return kh.apply(null, arguments);
          } else if (arguments.length === 4) {
            return Ph.apply(null, arguments);
          } else if (arguments.length === 5) {
            return Mh.apply(null, arguments);
          } else {
            It("Invalid extension access syntax");
          }
        };
        Pc.prototype.extension = Rh;
        Lh.forEach(function (e) {
          e.extensions.forEach(function (t) {
            kh(e.type, t.name, t.impl);
          });
        });
        var Bh = function e() {
          if (!(this instanceof e)) {
            return new e();
          }
          this.length = 0;
        };
        var Fh = Bh.prototype;
        Fh.instanceString = function () {
          return "stylesheet";
        };
        Fh.selector = function (e) {
          var t = this.length++;
          this[t] = { selector: e, properties: [] };
          return this;
        };
        Fh.css = function (e, t) {
          var r = this.length - 1;
          if (b(e)) {
            this[r].properties.push({ name: e, value: t });
          } else if (E(e)) {
            var n = e;
            var a = Object.keys(n);
            for (var i = 0; i < a.length; i++) {
              var o = a[i];
              var s = n[o];
              if (s == null) {
                continue;
              }
              var l = Lc.properties[o] || Lc.properties[G(o)];
              if (l == null) {
                continue;
              }
              var u = l.name;
              var c = s;
              this[r].properties.push({ name: u, value: c });
            }
          }
          return this;
        };
        Fh.style = Fh.css;
        Fh.generateStyle = function (e) {
          var t = new Lc(e);
          return this.appendToStyle(t);
        };
        Fh.appendToStyle = function (e) {
          for (var t = 0; t < this.length; t++) {
            var r = this[t];
            var n = r.selector;
            var a = r.properties;
            e.selector(n);
            for (var i = 0; i < a.length; i++) {
              var o = a[i];
              e.css(o.name, o.value);
            }
          }
          return e;
        };
        var zh = "3.26.0";
        var Gh = function e(t) {
          if (t === undefined) {
            t = {};
          }
          if (E(t)) {
            return new Pc(t);
          } else if (b(t)) {
            return Rh.apply(Rh, arguments);
          }
        };
        Gh.use = function (e) {
          var t = Array.prototype.slice.call(arguments, 1);
          t.unshift(Gh);
          e.apply(null, t);
          return this;
        };
        Gh.warnings = function (e) {
          return St(e);
        };
        Gh.version = zh;
        Gh.stylesheet = Gh.Stylesheet = Bh;
        return Gh;
      });
    },
    82241: function (e) {
      (function t(r, n) {
        if (true) e.exports = n();
        else {
        }
      })(this, function () {
        return (function (e) {
          var t = {};
          function r(n) {
            if (t[n]) {
              return t[n].exports;
            }
            var a = (t[n] = { i: n, l: false, exports: {} });
            e[n].call(a.exports, a, a.exports, r);
            a.l = true;
            return a.exports;
          }
          r.m = e;
          r.c = t;
          r.i = function (e) {
            return e;
          };
          r.d = function (e, t, n) {
            if (!r.o(e, t)) {
              Object.defineProperty(e, t, { configurable: false, enumerable: true, get: n });
            }
          };
          r.n = function (e) {
            var t =
              e && e.__esModule
                ? function t() {
                    return e["default"];
                  }
                : function t() {
                    return e;
                  };
            r.d(t, "a", t);
            return t;
          };
          r.o = function (e, t) {
            return Object.prototype.hasOwnProperty.call(e, t);
          };
          r.p = "";
          return r((r.s = 26));
        })([
          function (e, t, r) {
            "use strict";
            function n() {}
            n.QUALITY = 1;
            n.DEFAULT_CREATE_BENDS_AS_NEEDED = false;
            n.DEFAULT_INCREMENTAL = false;
            n.DEFAULT_ANIMATION_ON_LAYOUT = true;
            n.DEFAULT_ANIMATION_DURING_LAYOUT = false;
            n.DEFAULT_ANIMATION_PERIOD = 50;
            n.DEFAULT_UNIFORM_LEAF_NODE_SIZES = false;
            n.DEFAULT_GRAPH_MARGIN = 15;
            n.NODE_DIMENSIONS_INCLUDE_LABELS = false;
            n.SIMPLE_NODE_SIZE = 40;
            n.SIMPLE_NODE_HALF_SIZE = n.SIMPLE_NODE_SIZE / 2;
            n.EMPTY_COMPOUND_NODE_SIZE = 40;
            n.MIN_EDGE_LENGTH = 1;
            n.WORLD_BOUNDARY = 1e6;
            n.INITIAL_WORLD_BOUNDARY = n.WORLD_BOUNDARY / 1e3;
            n.WORLD_CENTER_X = 1200;
            n.WORLD_CENTER_Y = 900;
            e.exports = n;
          },
          function (e, t, r) {
            "use strict";
            var n = r(2);
            var a = r(8);
            var i = r(9);
            function o(e, t, r) {
              n.call(this, r);
              this.isOverlapingSourceAndTarget = false;
              this.vGraphObject = r;
              this.bendpoints = [];
              this.source = e;
              this.target = t;
            }
            o.prototype = Object.create(n.prototype);
            for (var s in n) {
              o[s] = n[s];
            }
            o.prototype.getSource = function () {
              return this.source;
            };
            o.prototype.getTarget = function () {
              return this.target;
            };
            o.prototype.isInterGraph = function () {
              return this.isInterGraph;
            };
            o.prototype.getLength = function () {
              return this.length;
            };
            o.prototype.isOverlapingSourceAndTarget = function () {
              return this.isOverlapingSourceAndTarget;
            };
            o.prototype.getBendpoints = function () {
              return this.bendpoints;
            };
            o.prototype.getLca = function () {
              return this.lca;
            };
            o.prototype.getSourceInLca = function () {
              return this.sourceInLca;
            };
            o.prototype.getTargetInLca = function () {
              return this.targetInLca;
            };
            o.prototype.getOtherEnd = function (e) {
              if (this.source === e) {
                return this.target;
              } else if (this.target === e) {
                return this.source;
              } else {
                throw "Node is not incident with this edge";
              }
            };
            o.prototype.getOtherEndInGraph = function (e, t) {
              var r = this.getOtherEnd(e);
              var n = t.getGraphManager().getRoot();
              while (true) {
                if (r.getOwner() == t) {
                  return r;
                }
                if (r.getOwner() == n) {
                  break;
                }
                r = r.getOwner().getParent();
              }
              return null;
            };
            o.prototype.updateLength = function () {
              var e = new Array(4);
              this.isOverlapingSourceAndTarget = a.getIntersection(this.target.getRect(), this.source.getRect(), e);
              if (!this.isOverlapingSourceAndTarget) {
                this.lengthX = e[0] - e[2];
                this.lengthY = e[1] - e[3];
                if (Math.abs(this.lengthX) < 1) {
                  this.lengthX = i.sign(this.lengthX);
                }
                if (Math.abs(this.lengthY) < 1) {
                  this.lengthY = i.sign(this.lengthY);
                }
                this.length = Math.sqrt(this.lengthX * this.lengthX + this.lengthY * this.lengthY);
              }
            };
            o.prototype.updateLengthSimple = function () {
              this.lengthX = this.target.getCenterX() - this.source.getCenterX();
              this.lengthY = this.target.getCenterY() - this.source.getCenterY();
              if (Math.abs(this.lengthX) < 1) {
                this.lengthX = i.sign(this.lengthX);
              }
              if (Math.abs(this.lengthY) < 1) {
                this.lengthY = i.sign(this.lengthY);
              }
              this.length = Math.sqrt(this.lengthX * this.lengthX + this.lengthY * this.lengthY);
            };
            e.exports = o;
          },
          function (e, t, r) {
            "use strict";
            function n(e) {
              this.vGraphObject = e;
            }
            e.exports = n;
          },
          function (e, t, r) {
            "use strict";
            var n = r(2);
            var a = r(10);
            var i = r(13);
            var o = r(0);
            var s = r(16);
            var l = r(4);
            function u(e, t, r, o) {
              if (r == null && o == null) {
                o = t;
              }
              n.call(this, o);
              if (e.graphManager != null) e = e.graphManager;
              this.estimatedSize = a.MIN_VALUE;
              this.inclusionTreeDepth = a.MAX_VALUE;
              this.vGraphObject = o;
              this.edges = [];
              this.graphManager = e;
              if (r != null && t != null) this.rect = new i(t.x, t.y, r.width, r.height);
              else this.rect = new i();
            }
            u.prototype = Object.create(n.prototype);
            for (var c in n) {
              u[c] = n[c];
            }
            u.prototype.getEdges = function () {
              return this.edges;
            };
            u.prototype.getChild = function () {
              return this.child;
            };
            u.prototype.getOwner = function () {
              return this.owner;
            };
            u.prototype.getWidth = function () {
              return this.rect.width;
            };
            u.prototype.setWidth = function (e) {
              this.rect.width = e;
            };
            u.prototype.getHeight = function () {
              return this.rect.height;
            };
            u.prototype.setHeight = function (e) {
              this.rect.height = e;
            };
            u.prototype.getCenterX = function () {
              return this.rect.x + this.rect.width / 2;
            };
            u.prototype.getCenterY = function () {
              return this.rect.y + this.rect.height / 2;
            };
            u.prototype.getCenter = function () {
              return new l(this.rect.x + this.rect.width / 2, this.rect.y + this.rect.height / 2);
            };
            u.prototype.getLocation = function () {
              return new l(this.rect.x, this.rect.y);
            };
            u.prototype.getRect = function () {
              return this.rect;
            };
            u.prototype.getDiagonal = function () {
              return Math.sqrt(this.rect.width * this.rect.width + this.rect.height * this.rect.height);
            };
            u.prototype.getHalfTheDiagonal = function () {
              return Math.sqrt(this.rect.height * this.rect.height + this.rect.width * this.rect.width) / 2;
            };
            u.prototype.setRect = function (e, t) {
              this.rect.x = e.x;
              this.rect.y = e.y;
              this.rect.width = t.width;
              this.rect.height = t.height;
            };
            u.prototype.setCenter = function (e, t) {
              this.rect.x = e - this.rect.width / 2;
              this.rect.y = t - this.rect.height / 2;
            };
            u.prototype.setLocation = function (e, t) {
              this.rect.x = e;
              this.rect.y = t;
            };
            u.prototype.moveBy = function (e, t) {
              this.rect.x += e;
              this.rect.y += t;
            };
            u.prototype.getEdgeListToNode = function (e) {
              var t = [];
              var r;
              var n = this;
              n.edges.forEach(function (r) {
                if (r.target == e) {
                  if (r.source != n) throw "Incorrect edge source!";
                  t.push(r);
                }
              });
              return t;
            };
            u.prototype.getEdgesBetween = function (e) {
              var t = [];
              var r;
              var n = this;
              n.edges.forEach(function (r) {
                if (!(r.source == n || r.target == n)) throw "Incorrect edge source and/or target";
                if (r.target == e || r.source == e) {
                  t.push(r);
                }
              });
              return t;
            };
            u.prototype.getNeighborsList = function () {
              var e = new Set();
              var t = this;
              t.edges.forEach(function (r) {
                if (r.source == t) {
                  e.add(r.target);
                } else {
                  if (r.target != t) {
                    throw "Incorrect incidency!";
                  }
                  e.add(r.source);
                }
              });
              return e;
            };
            u.prototype.withChildren = function () {
              var e = new Set();
              var t;
              var r;
              e.add(this);
              if (this.child != null) {
                var n = this.child.getNodes();
                for (var a = 0; a < n.length; a++) {
                  t = n[a];
                  r = t.withChildren();
                  r.forEach(function (t) {
                    e.add(t);
                  });
                }
              }
              return e;
            };
            u.prototype.getNoOfChildren = function () {
              var e = 0;
              var t;
              if (this.child == null) {
                e = 1;
              } else {
                var r = this.child.getNodes();
                for (var n = 0; n < r.length; n++) {
                  t = r[n];
                  e += t.getNoOfChildren();
                }
              }
              if (e == 0) {
                e = 1;
              }
              return e;
            };
            u.prototype.getEstimatedSize = function () {
              if (this.estimatedSize == a.MIN_VALUE) {
                throw "assert failed";
              }
              return this.estimatedSize;
            };
            u.prototype.calcEstimatedSize = function () {
              if (this.child == null) {
                return (this.estimatedSize = (this.rect.width + this.rect.height) / 2);
              } else {
                this.estimatedSize = this.child.calcEstimatedSize();
                this.rect.width = this.estimatedSize;
                this.rect.height = this.estimatedSize;
                return this.estimatedSize;
              }
            };
            u.prototype.scatter = function () {
              var e;
              var t;
              var r = -o.INITIAL_WORLD_BOUNDARY;
              var n = o.INITIAL_WORLD_BOUNDARY;
              e = o.WORLD_CENTER_X + s.nextDouble() * (n - r) + r;
              var a = -o.INITIAL_WORLD_BOUNDARY;
              var i = o.INITIAL_WORLD_BOUNDARY;
              t = o.WORLD_CENTER_Y + s.nextDouble() * (i - a) + a;
              this.rect.x = e;
              this.rect.y = t;
            };
            u.prototype.updateBounds = function () {
              if (this.getChild() == null) {
                throw "assert failed";
              }
              if (this.getChild().getNodes().length != 0) {
                var e = this.getChild();
                e.updateBounds(true);
                this.rect.x = e.getLeft();
                this.rect.y = e.getTop();
                this.setWidth(e.getRight() - e.getLeft());
                this.setHeight(e.getBottom() - e.getTop());
                if (o.NODE_DIMENSIONS_INCLUDE_LABELS) {
                  var t = e.getRight() - e.getLeft();
                  var r = e.getBottom() - e.getTop();
                  if (this.labelWidth > t) {
                    this.rect.x -= (this.labelWidth - t) / 2;
                    this.setWidth(this.labelWidth);
                  }
                  if (this.labelHeight > r) {
                    if (this.labelPos == "center") {
                      this.rect.y -= (this.labelHeight - r) / 2;
                    } else if (this.labelPos == "top") {
                      this.rect.y -= this.labelHeight - r;
                    }
                    this.setHeight(this.labelHeight);
                  }
                }
              }
            };
            u.prototype.getInclusionTreeDepth = function () {
              if (this.inclusionTreeDepth == a.MAX_VALUE) {
                throw "assert failed";
              }
              return this.inclusionTreeDepth;
            };
            u.prototype.transform = function (e) {
              var t = this.rect.x;
              if (t > o.WORLD_BOUNDARY) {
                t = o.WORLD_BOUNDARY;
              } else if (t < -o.WORLD_BOUNDARY) {
                t = -o.WORLD_BOUNDARY;
              }
              var r = this.rect.y;
              if (r > o.WORLD_BOUNDARY) {
                r = o.WORLD_BOUNDARY;
              } else if (r < -o.WORLD_BOUNDARY) {
                r = -o.WORLD_BOUNDARY;
              }
              var n = new l(t, r);
              var a = e.inverseTransformPoint(n);
              this.setLocation(a.x, a.y);
            };
            u.prototype.getLeft = function () {
              return this.rect.x;
            };
            u.prototype.getRight = function () {
              return this.rect.x + this.rect.width;
            };
            u.prototype.getTop = function () {
              return this.rect.y;
            };
            u.prototype.getBottom = function () {
              return this.rect.y + this.rect.height;
            };
            u.prototype.getParent = function () {
              if (this.owner == null) {
                return null;
              }
              return this.owner.getParent();
            };
            e.exports = u;
          },
          function (e, t, r) {
            "use strict";
            function n(e, t) {
              if (e == null && t == null) {
                this.x = 0;
                this.y = 0;
              } else {
                this.x = e;
                this.y = t;
              }
            }
            n.prototype.getX = function () {
              return this.x;
            };
            n.prototype.getY = function () {
              return this.y;
            };
            n.prototype.setX = function (e) {
              this.x = e;
            };
            n.prototype.setY = function (e) {
              this.y = e;
            };
            n.prototype.getDifference = function (e) {
              return new DimensionD(this.x - e.x, this.y - e.y);
            };
            n.prototype.getCopy = function () {
              return new n(this.x, this.y);
            };
            n.prototype.translate = function (e) {
              this.x += e.width;
              this.y += e.height;
              return this;
            };
            e.exports = n;
          },
          function (e, t, r) {
            "use strict";
            var n = r(2);
            var a = r(10);
            var i = r(0);
            var o = r(6);
            var s = r(3);
            var l = r(1);
            var u = r(13);
            var c = r(12);
            var v = r(11);
            function f(e, t, r) {
              n.call(this, r);
              this.estimatedSize = a.MIN_VALUE;
              this.margin = i.DEFAULT_GRAPH_MARGIN;
              this.edges = [];
              this.nodes = [];
              this.isConnected = false;
              this.parent = e;
              if (t != null && t instanceof o) {
                this.graphManager = t;
              } else if (t != null && t instanceof Layout) {
                this.graphManager = t.graphManager;
              }
            }
            f.prototype = Object.create(n.prototype);
            for (var h in n) {
              f[h] = n[h];
            }
            f.prototype.getNodes = function () {
              return this.nodes;
            };
            f.prototype.getEdges = function () {
              return this.edges;
            };
            f.prototype.getGraphManager = function () {
              return this.graphManager;
            };
            f.prototype.getParent = function () {
              return this.parent;
            };
            f.prototype.getLeft = function () {
              return this.left;
            };
            f.prototype.getRight = function () {
              return this.right;
            };
            f.prototype.getTop = function () {
              return this.top;
            };
            f.prototype.getBottom = function () {
              return this.bottom;
            };
            f.prototype.isConnected = function () {
              return this.isConnected;
            };
            f.prototype.add = function (e, t, r) {
              if (t == null && r == null) {
                var n = e;
                if (this.graphManager == null) {
                  throw "Graph has no graph mgr!";
                }
                if (this.getNodes().indexOf(n) > -1) {
                  throw "Node already in graph!";
                }
                n.owner = this;
                this.getNodes().push(n);
                return n;
              } else {
                var a = e;
                if (!(this.getNodes().indexOf(t) > -1 && this.getNodes().indexOf(r) > -1)) {
                  throw "Source or target not in graph!";
                }
                if (!(t.owner == r.owner && t.owner == this)) {
                  throw "Both owners must be this graph!";
                }
                if (t.owner != r.owner) {
                  return null;
                }
                a.source = t;
                a.target = r;
                a.isInterGraph = false;
                this.getEdges().push(a);
                t.edges.push(a);
                if (r != t) {
                  r.edges.push(a);
                }
                return a;
              }
            };
            f.prototype.remove = function (e) {
              var t = e;
              if (e instanceof s) {
                if (t == null) {
                  throw "Node is null!";
                }
                if (!(t.owner != null && t.owner == this)) {
                  throw "Owner graph is invalid!";
                }
                if (this.graphManager == null) {
                  throw "Owner graph manager is invalid!";
                }
                var r = t.edges.slice();
                var n;
                var a = r.length;
                for (var i = 0; i < a; i++) {
                  n = r[i];
                  if (n.isInterGraph) {
                    this.graphManager.remove(n);
                  } else {
                    n.source.owner.remove(n);
                  }
                }
                var o = this.nodes.indexOf(t);
                if (o == -1) {
                  throw "Node not in owner node list!";
                }
                this.nodes.splice(o, 1);
              } else if (e instanceof l) {
                var n = e;
                if (n == null) {
                  throw "Edge is null!";
                }
                if (!(n.source != null && n.target != null)) {
                  throw "Source and/or target is null!";
                }
                if (!(n.source.owner != null && n.target.owner != null && n.source.owner == this && n.target.owner == this)) {
                  throw "Source and/or target owner is invalid!";
                }
                var u = n.source.edges.indexOf(n);
                var c = n.target.edges.indexOf(n);
                if (!(u > -1 && c > -1)) {
                  throw "Source and/or target doesn't know this edge!";
                }
                n.source.edges.splice(u, 1);
                if (n.target != n.source) {
                  n.target.edges.splice(c, 1);
                }
                var o = n.source.owner.getEdges().indexOf(n);
                if (o == -1) {
                  throw "Not in owner's edge list!";
                }
                n.source.owner.getEdges().splice(o, 1);
              }
            };
            f.prototype.updateLeftTop = function () {
              var e = a.MAX_VALUE;
              var t = a.MAX_VALUE;
              var r;
              var n;
              var i;
              var o = this.getNodes();
              var s = o.length;
              for (var l = 0; l < s; l++) {
                var u = o[l];
                r = u.getTop();
                n = u.getLeft();
                if (e > r) {
                  e = r;
                }
                if (t > n) {
                  t = n;
                }
              }
              if (e == a.MAX_VALUE) {
                return null;
              }
              if (o[0].getParent().paddingLeft != undefined) {
                i = o[0].getParent().paddingLeft;
              } else {
                i = this.margin;
              }
              this.left = t - i;
              this.top = e - i;
              return new c(this.left, this.top);
            };
            f.prototype.updateBounds = function (e) {
              var t = a.MAX_VALUE;
              var r = -a.MAX_VALUE;
              var n = a.MAX_VALUE;
              var i = -a.MAX_VALUE;
              var o;
              var s;
              var l;
              var c;
              var v;
              var f = this.nodes;
              var h = f.length;
              for (var d = 0; d < h; d++) {
                var p = f[d];
                if (e && p.child != null) {
                  p.updateBounds();
                }
                o = p.getLeft();
                s = p.getRight();
                l = p.getTop();
                c = p.getBottom();
                if (t > o) {
                  t = o;
                }
                if (r < s) {
                  r = s;
                }
                if (n > l) {
                  n = l;
                }
                if (i < c) {
                  i = c;
                }
              }
              var g = new u(t, n, r - t, i - n);
              if (t == a.MAX_VALUE) {
                this.left = this.parent.getLeft();
                this.right = this.parent.getRight();
                this.top = this.parent.getTop();
                this.bottom = this.parent.getBottom();
              }
              if (f[0].getParent().paddingLeft != undefined) {
                v = f[0].getParent().paddingLeft;
              } else {
                v = this.margin;
              }
              this.left = g.x - v;
              this.right = g.x + g.width + v;
              this.top = g.y - v;
              this.bottom = g.y + g.height + v;
            };
            f.calculateBounds = function (e) {
              var t = a.MAX_VALUE;
              var r = -a.MAX_VALUE;
              var n = a.MAX_VALUE;
              var i = -a.MAX_VALUE;
              var o;
              var s;
              var l;
              var c;
              var v = e.length;
              for (var f = 0; f < v; f++) {
                var h = e[f];
                o = h.getLeft();
                s = h.getRight();
                l = h.getTop();
                c = h.getBottom();
                if (t > o) {
                  t = o;
                }
                if (r < s) {
                  r = s;
                }
                if (n > l) {
                  n = l;
                }
                if (i < c) {
                  i = c;
                }
              }
              var d = new u(t, n, r - t, i - n);
              return d;
            };
            f.prototype.getInclusionTreeDepth = function () {
              if (this == this.graphManager.getRoot()) {
                return 1;
              } else {
                return this.parent.getInclusionTreeDepth();
              }
            };
            f.prototype.getEstimatedSize = function () {
              if (this.estimatedSize == a.MIN_VALUE) {
                throw "assert failed";
              }
              return this.estimatedSize;
            };
            f.prototype.calcEstimatedSize = function () {
              var e = 0;
              var t = this.nodes;
              var r = t.length;
              for (var n = 0; n < r; n++) {
                var a = t[n];
                e += a.calcEstimatedSize();
              }
              if (e == 0) {
                this.estimatedSize = i.EMPTY_COMPOUND_NODE_SIZE;
              } else {
                this.estimatedSize = e / Math.sqrt(this.nodes.length);
              }
              return this.estimatedSize;
            };
            f.prototype.updateConnected = function () {
              var e = this;
              if (this.nodes.length == 0) {
                this.isConnected = true;
                return;
              }
              var t = new v();
              var r = new Set();
              var n = this.nodes[0];
              var a;
              var i;
              var o = n.withChildren();
              o.forEach(function (e) {
                t.push(e);
                r.add(e);
              });
              while (t.length !== 0) {
                n = t.shift();
                a = n.getEdges();
                var s = a.length;
                for (var l = 0; l < s; l++) {
                  var u = a[l];
                  i = u.getOtherEndInGraph(n, this);
                  if (i != null && !r.has(i)) {
                    var c = i.withChildren();
                    c.forEach(function (e) {
                      t.push(e);
                      r.add(e);
                    });
                  }
                }
              }
              this.isConnected = false;
              if (r.size >= this.nodes.length) {
                var f = 0;
                r.forEach(function (t) {
                  if (t.owner == e) {
                    f++;
                  }
                });
                if (f == this.nodes.length) {
                  this.isConnected = true;
                }
              }
            };
            e.exports = f;
          },
          function (e, t, r) {
            "use strict";
            var n;
            var a = r(1);
            function i(e) {
              n = r(5);
              this.layout = e;
              this.graphs = [];
              this.edges = [];
            }
            i.prototype.addRoot = function () {
              var e = this.layout.newGraph();
              var t = this.layout.newNode(null);
              var r = this.add(e, t);
              this.setRootGraph(r);
              return this.rootGraph;
            };
            i.prototype.add = function (e, t, r, n, a) {
              if (r == null && n == null && a == null) {
                if (e == null) {
                  throw "Graph is null!";
                }
                if (t == null) {
                  throw "Parent node is null!";
                }
                if (this.graphs.indexOf(e) > -1) {
                  throw "Graph already in this graph mgr!";
                }
                this.graphs.push(e);
                if (e.parent != null) {
                  throw "Already has a parent!";
                }
                if (t.child != null) {
                  throw "Already has a child!";
                }
                e.parent = t;
                t.child = e;
                return e;
              } else {
                a = r;
                n = t;
                r = e;
                var i = n.getOwner();
                var o = a.getOwner();
                if (!(i != null && i.getGraphManager() == this)) {
                  throw "Source not in this graph mgr!";
                }
                if (!(o != null && o.getGraphManager() == this)) {
                  throw "Target not in this graph mgr!";
                }
                if (i == o) {
                  r.isInterGraph = false;
                  return i.add(r, n, a);
                } else {
                  r.isInterGraph = true;
                  r.source = n;
                  r.target = a;
                  if (this.edges.indexOf(r) > -1) {
                    throw "Edge already in inter-graph edge list!";
                  }
                  this.edges.push(r);
                  if (!(r.source != null && r.target != null)) {
                    throw "Edge source and/or target is null!";
                  }
                  if (!(r.source.edges.indexOf(r) == -1 && r.target.edges.indexOf(r) == -1)) {
                    throw "Edge already in source and/or target incidency list!";
                  }
                  r.source.edges.push(r);
                  r.target.edges.push(r);
                  return r;
                }
              }
            };
            i.prototype.remove = function (e) {
              if (e instanceof n) {
                var t = e;
                if (t.getGraphManager() != this) {
                  throw "Graph not in this graph mgr";
                }
                if (!(t == this.rootGraph || (t.parent != null && t.parent.graphManager == this))) {
                  throw "Invalid parent node!";
                }
                var r = [];
                r = r.concat(t.getEdges());
                var i;
                var o = r.length;
                for (var s = 0; s < o; s++) {
                  i = r[s];
                  t.remove(i);
                }
                var l = [];
                l = l.concat(t.getNodes());
                var u;
                o = l.length;
                for (var s = 0; s < o; s++) {
                  u = l[s];
                  t.remove(u);
                }
                if (t == this.rootGraph) {
                  this.setRootGraph(null);
                }
                var c = this.graphs.indexOf(t);
                this.graphs.splice(c, 1);
                t.parent = null;
              } else if (e instanceof a) {
                i = e;
                if (i == null) {
                  throw "Edge is null!";
                }
                if (!i.isInterGraph) {
                  throw "Not an inter-graph edge!";
                }
                if (!(i.source != null && i.target != null)) {
                  throw "Source and/or target is null!";
                }
                if (!(i.source.edges.indexOf(i) != -1 && i.target.edges.indexOf(i) != -1)) {
                  throw "Source and/or target doesn't know this edge!";
                }
                var c = i.source.edges.indexOf(i);
                i.source.edges.splice(c, 1);
                c = i.target.edges.indexOf(i);
                i.target.edges.splice(c, 1);
                if (!(i.source.owner != null && i.source.owner.getGraphManager() != null)) {
                  throw "Edge owner graph or owner graph manager is null!";
                }
                if (i.source.owner.getGraphManager().edges.indexOf(i) == -1) {
                  throw "Not in owner graph manager's edge list!";
                }
                var c = i.source.owner.getGraphManager().edges.indexOf(i);
                i.source.owner.getGraphManager().edges.splice(c, 1);
              }
            };
            i.prototype.updateBounds = function () {
              this.rootGraph.updateBounds(true);
            };
            i.prototype.getGraphs = function () {
              return this.graphs;
            };
            i.prototype.getAllNodes = function () {
              if (this.allNodes == null) {
                var e = [];
                var t = this.getGraphs();
                var r = t.length;
                for (var n = 0; n < r; n++) {
                  e = e.concat(t[n].getNodes());
                }
                this.allNodes = e;
              }
              return this.allNodes;
            };
            i.prototype.resetAllNodes = function () {
              this.allNodes = null;
            };
            i.prototype.resetAllEdges = function () {
              this.allEdges = null;
            };
            i.prototype.resetAllNodesToApplyGravitation = function () {
              this.allNodesToApplyGravitation = null;
            };
            i.prototype.getAllEdges = function () {
              if (this.allEdges == null) {
                var e = [];
                var t = this.getGraphs();
                var r = t.length;
                for (var n = 0; n < t.length; n++) {
                  e = e.concat(t[n].getEdges());
                }
                e = e.concat(this.edges);
                this.allEdges = e;
              }
              return this.allEdges;
            };
            i.prototype.getAllNodesToApplyGravitation = function () {
              return this.allNodesToApplyGravitation;
            };
            i.prototype.setAllNodesToApplyGravitation = function (e) {
              if (this.allNodesToApplyGravitation != null) {
                throw "assert failed";
              }
              this.allNodesToApplyGravitation = e;
            };
            i.prototype.getRoot = function () {
              return this.rootGraph;
            };
            i.prototype.setRootGraph = function (e) {
              if (e.getGraphManager() != this) {
                throw "Root not in this graph mgr!";
              }
              this.rootGraph = e;
              if (e.parent == null) {
                e.parent = this.layout.newNode("Root node");
              }
            };
            i.prototype.getLayout = function () {
              return this.layout;
            };
            i.prototype.isOneAncestorOfOther = function (e, t) {
              if (!(e != null && t != null)) {
                throw "assert failed";
              }
              if (e == t) {
                return true;
              }
              var r = e.getOwner();
              var n;
              do {
                n = r.getParent();
                if (n == null) {
                  break;
                }
                if (n == t) {
                  return true;
                }
                r = n.getOwner();
                if (r == null) {
                  break;
                }
              } while (true);
              r = t.getOwner();
              do {
                n = r.getParent();
                if (n == null) {
                  break;
                }
                if (n == e) {
                  return true;
                }
                r = n.getOwner();
                if (r == null) {
                  break;
                }
              } while (true);
              return false;
            };
            i.prototype.calcLowestCommonAncestors = function () {
              var e;
              var t;
              var r;
              var n;
              var a;
              var i = this.getAllEdges();
              var o = i.length;
              for (var s = 0; s < o; s++) {
                e = i[s];
                t = e.source;
                r = e.target;
                e.lca = null;
                e.sourceInLca = t;
                e.targetInLca = r;
                if (t == r) {
                  e.lca = t.getOwner();
                  continue;
                }
                n = t.getOwner();
                while (e.lca == null) {
                  e.targetInLca = r;
                  a = r.getOwner();
                  while (e.lca == null) {
                    if (a == n) {
                      e.lca = a;
                      break;
                    }
                    if (a == this.rootGraph) {
                      break;
                    }
                    if (e.lca != null) {
                      throw "assert failed";
                    }
                    e.targetInLca = a.getParent();
                    a = e.targetInLca.getOwner();
                  }
                  if (n == this.rootGraph) {
                    break;
                  }
                  if (e.lca == null) {
                    e.sourceInLca = n.getParent();
                    n = e.sourceInLca.getOwner();
                  }
                }
                if (e.lca == null) {
                  throw "assert failed";
                }
              }
            };
            i.prototype.calcLowestCommonAncestor = function (e, t) {
              if (e == t) {
                return e.getOwner();
              }
              var r = e.getOwner();
              do {
                if (r == null) {
                  break;
                }
                var n = t.getOwner();
                do {
                  if (n == null) {
                    break;
                  }
                  if (n == r) {
                    return n;
                  }
                  n = n.getParent().getOwner();
                } while (true);
                r = r.getParent().getOwner();
              } while (true);
              return r;
            };
            i.prototype.calcInclusionTreeDepths = function (e, t) {
              if (e == null && t == null) {
                e = this.rootGraph;
                t = 1;
              }
              var r;
              var n = e.getNodes();
              var a = n.length;
              for (var i = 0; i < a; i++) {
                r = n[i];
                r.inclusionTreeDepth = t;
                if (r.child != null) {
                  this.calcInclusionTreeDepths(r.child, t + 1);
                }
              }
            };
            i.prototype.includesInvalidEdge = function () {
              var e;
              var t = this.edges.length;
              for (var r = 0; r < t; r++) {
                e = this.edges[r];
                if (this.isOneAncestorOfOther(e.source, e.target)) {
                  return true;
                }
              }
              return false;
            };
            e.exports = i;
          },
          function (e, t, r) {
            "use strict";
            var n = r(0);
            function a() {}
            for (var i in n) {
              a[i] = n[i];
            }
            a.MAX_ITERATIONS = 2500;
            a.DEFAULT_EDGE_LENGTH = 50;
            a.DEFAULT_SPRING_STRENGTH = 0.45;
            a.DEFAULT_REPULSION_STRENGTH = 4500;
            a.DEFAULT_GRAVITY_STRENGTH = 0.4;
            a.DEFAULT_COMPOUND_GRAVITY_STRENGTH = 1;
            a.DEFAULT_GRAVITY_RANGE_FACTOR = 3.8;
            a.DEFAULT_COMPOUND_GRAVITY_RANGE_FACTOR = 1.5;
            a.DEFAULT_USE_SMART_IDEAL_EDGE_LENGTH_CALCULATION = true;
            a.DEFAULT_USE_SMART_REPULSION_RANGE_CALCULATION = true;
            a.DEFAULT_COOLING_FACTOR_INCREMENTAL = 0.3;
            a.COOLING_ADAPTATION_FACTOR = 0.33;
            a.ADAPTATION_LOWER_NODE_LIMIT = 1e3;
            a.ADAPTATION_UPPER_NODE_LIMIT = 5e3;
            a.MAX_NODE_DISPLACEMENT_INCREMENTAL = 100;
            a.MAX_NODE_DISPLACEMENT = a.MAX_NODE_DISPLACEMENT_INCREMENTAL * 3;
            a.MIN_REPULSION_DIST = a.DEFAULT_EDGE_LENGTH / 10;
            a.CONVERGENCE_CHECK_PERIOD = 100;
            a.PER_LEVEL_IDEAL_EDGE_LENGTH_FACTOR = 0.1;
            a.MIN_EDGE_LENGTH = 1;
            a.GRID_CALCULATION_CHECK_PERIOD = 10;
            e.exports = a;
          },
          function (e, t, r) {
            "use strict";
            var n = r(12);
            function a() {}
            a.calcSeparationAmount = function (e, t, r, n) {
              if (!e.intersects(t)) {
                throw "assert failed";
              }
              var a = new Array(2);
              this.decideDirectionsForOverlappingNodes(e, t, a);
              r[0] = Math.min(e.getRight(), t.getRight()) - Math.max(e.x, t.x);
              r[1] = Math.min(e.getBottom(), t.getBottom()) - Math.max(e.y, t.y);
              if (e.getX() <= t.getX() && e.getRight() >= t.getRight()) {
                r[0] += Math.min(t.getX() - e.getX(), e.getRight() - t.getRight());
              } else if (t.getX() <= e.getX() && t.getRight() >= e.getRight()) {
                r[0] += Math.min(e.getX() - t.getX(), t.getRight() - e.getRight());
              }
              if (e.getY() <= t.getY() && e.getBottom() >= t.getBottom()) {
                r[1] += Math.min(t.getY() - e.getY(), e.getBottom() - t.getBottom());
              } else if (t.getY() <= e.getY() && t.getBottom() >= e.getBottom()) {
                r[1] += Math.min(e.getY() - t.getY(), t.getBottom() - e.getBottom());
              }
              var i = Math.abs((t.getCenterY() - e.getCenterY()) / (t.getCenterX() - e.getCenterX()));
              if (t.getCenterY() === e.getCenterY() && t.getCenterX() === e.getCenterX()) {
                i = 1;
              }
              var o = i * r[0];
              var s = r[1] / i;
              if (r[0] < s) {
                s = r[0];
              } else {
                o = r[1];
              }
              r[0] = -1 * a[0] * (s / 2 + n);
              r[1] = -1 * a[1] * (o / 2 + n);
            };
            a.decideDirectionsForOverlappingNodes = function (e, t, r) {
              if (e.getCenterX() < t.getCenterX()) {
                r[0] = -1;
              } else {
                r[0] = 1;
              }
              if (e.getCenterY() < t.getCenterY()) {
                r[1] = -1;
              } else {
                r[1] = 1;
              }
            };
            a.getIntersection2 = function (e, t, r) {
              var n = e.getCenterX();
              var a = e.getCenterY();
              var i = t.getCenterX();
              var o = t.getCenterY();
              if (e.intersects(t)) {
                r[0] = n;
                r[1] = a;
                r[2] = i;
                r[3] = o;
                return true;
              }
              var s = e.getX();
              var l = e.getY();
              var u = e.getRight();
              var c = e.getX();
              var v = e.getBottom();
              var f = e.getRight();
              var h = e.getWidthHalf();
              var d = e.getHeightHalf();
              var p = t.getX();
              var g = t.getY();
              var y = t.getRight();
              var m = t.getX();
              var b = t.getBottom();
              var x = t.getRight();
              var w = t.getWidthHalf();
              var E = t.getHeightHalf();
              var T = false;
              var _ = false;
              if (n === i) {
                if (a > o) {
                  r[0] = n;
                  r[1] = l;
                  r[2] = i;
                  r[3] = b;
                  return false;
                } else if (a < o) {
                  r[0] = n;
                  r[1] = v;
                  r[2] = i;
                  r[3] = g;
                  return false;
                } else {
                }
              } else if (a === o) {
                if (n > i) {
                  r[0] = s;
                  r[1] = a;
                  r[2] = y;
                  r[3] = o;
                  return false;
                } else if (n < i) {
                  r[0] = u;
                  r[1] = a;
                  r[2] = p;
                  r[3] = o;
                  return false;
                } else {
                }
              } else {
                var D = e.height / e.width;
                var C = t.height / t.width;
                var N = (o - a) / (i - n);
                var A = void 0;
                var L = void 0;
                var I = void 0;
                var S = void 0;
                var k = void 0;
                var O = void 0;
                if (-D === N) {
                  if (n > i) {
                    r[0] = c;
                    r[1] = v;
                    T = true;
                  } else {
                    r[0] = u;
                    r[1] = l;
                    T = true;
                  }
                } else if (D === N) {
                  if (n > i) {
                    r[0] = s;
                    r[1] = l;
                    T = true;
                  } else {
                    r[0] = f;
                    r[1] = v;
                    T = true;
                  }
                }
                if (-C === N) {
                  if (i > n) {
                    r[2] = m;
                    r[3] = b;
                    _ = true;
                  } else {
                    r[2] = y;
                    r[3] = g;
                    _ = true;
                  }
                } else if (C === N) {
                  if (i > n) {
                    r[2] = p;
                    r[3] = g;
                    _ = true;
                  } else {
                    r[2] = x;
                    r[3] = b;
                    _ = true;
                  }
                }
                if (T && _) {
                  return false;
                }
                if (n > i) {
                  if (a > o) {
                    A = this.getCardinalDirection(D, N, 4);
                    L = this.getCardinalDirection(C, N, 2);
                  } else {
                    A = this.getCardinalDirection(-D, N, 3);
                    L = this.getCardinalDirection(-C, N, 1);
                  }
                } else {
                  if (a > o) {
                    A = this.getCardinalDirection(-D, N, 1);
                    L = this.getCardinalDirection(-C, N, 3);
                  } else {
                    A = this.getCardinalDirection(D, N, 2);
                    L = this.getCardinalDirection(C, N, 4);
                  }
                }
                if (!T) {
                  switch (A) {
                    case 1:
                      S = l;
                      I = n + -d / N;
                      r[0] = I;
                      r[1] = S;
                      break;
                    case 2:
                      I = f;
                      S = a + h * N;
                      r[0] = I;
                      r[1] = S;
                      break;
                    case 3:
                      S = v;
                      I = n + d / N;
                      r[0] = I;
                      r[1] = S;
                      break;
                    case 4:
                      I = c;
                      S = a + -h * N;
                      r[0] = I;
                      r[1] = S;
                      break;
                  }
                }
                if (!_) {
                  switch (L) {
                    case 1:
                      O = g;
                      k = i + -E / N;
                      r[2] = k;
                      r[3] = O;
                      break;
                    case 2:
                      k = x;
                      O = o + w * N;
                      r[2] = k;
                      r[3] = O;
                      break;
                    case 3:
                      O = b;
                      k = i + E / N;
                      r[2] = k;
                      r[3] = O;
                      break;
                    case 4:
                      k = m;
                      O = o + -w * N;
                      r[2] = k;
                      r[3] = O;
                      break;
                  }
                }
              }
              return false;
            };
            a.getCardinalDirection = function (e, t, r) {
              if (e > t) {
                return r;
              } else {
                return 1 + (r % 4);
              }
            };
            a.getIntersection = function (e, t, r, a) {
              if (a == null) {
                return this.getIntersection2(e, t, r);
              }
              var i = e.x;
              var o = e.y;
              var s = t.x;
              var l = t.y;
              var u = r.x;
              var c = r.y;
              var v = a.x;
              var f = a.y;
              var h = void 0,
                d = void 0;
              var p = void 0,
                g = void 0,
                y = void 0,
                m = void 0,
                b = void 0,
                x = void 0;
              var w = void 0;
              p = l - o;
              y = i - s;
              b = s * o - i * l;
              g = f - c;
              m = u - v;
              x = v * c - u * f;
              w = p * m - g * y;
              if (w === 0) {
                return null;
              }
              h = (y * x - m * b) / w;
              d = (g * b - p * x) / w;
              return new n(h, d);
            };
            a.angleOfVector = function (e, t, r, n) {
              var a = void 0;
              if (e !== r) {
                a = Math.atan((n - t) / (r - e));
                if (r < e) {
                  a += Math.PI;
                } else if (n < t) {
                  a += this.TWO_PI;
                }
              } else if (n < t) {
                a = this.ONE_AND_HALF_PI;
              } else {
                a = this.HALF_PI;
              }
              return a;
            };
            a.doIntersect = function (e, t, r, n) {
              var a = e.x;
              var i = e.y;
              var o = t.x;
              var s = t.y;
              var l = r.x;
              var u = r.y;
              var c = n.x;
              var v = n.y;
              var f = (o - a) * (v - u) - (c - l) * (s - i);
              if (f === 0) {
                return false;
              } else {
                var h = ((v - u) * (c - a) + (l - c) * (v - i)) / f;
                var d = ((i - s) * (c - a) + (o - a) * (v - i)) / f;
                return 0 < h && h < 1 && 0 < d && d < 1;
              }
            };
            a.HALF_PI = 0.5 * Math.PI;
            a.ONE_AND_HALF_PI = 1.5 * Math.PI;
            a.TWO_PI = 2 * Math.PI;
            a.THREE_PI = 3 * Math.PI;
            e.exports = a;
          },
          function (e, t, r) {
            "use strict";
            function n() {}
            n.sign = function (e) {
              if (e > 0) {
                return 1;
              } else if (e < 0) {
                return -1;
              } else {
                return 0;
              }
            };
            n.floor = function (e) {
              return e < 0 ? Math.ceil(e) : Math.floor(e);
            };
            n.ceil = function (e) {
              return e < 0 ? Math.floor(e) : Math.ceil(e);
            };
            e.exports = n;
          },
          function (e, t, r) {
            "use strict";
            function n() {}
            n.MAX_VALUE = 2147483647;
            n.MIN_VALUE = -2147483648;
            e.exports = n;
          },
          function (e, t, r) {
            "use strict";
            var n = (function () {
              function e(e, t) {
                for (var r = 0; r < t.length; r++) {
                  var n = t[r];
                  n.enumerable = n.enumerable || false;
                  n.configurable = true;
                  if ("value" in n) n.writable = true;
                  Object.defineProperty(e, n.key, n);
                }
              }
              return function (t, r, n) {
                if (r) e(t.prototype, r);
                if (n) e(t, n);
                return t;
              };
            })();
            function a(e, t) {
              if (!(e instanceof t)) {
                throw new TypeError("Cannot call a class as a function");
              }
            }
            var i = function e(t) {
              return { value: t, next: null, prev: null };
            };
            var o = function e(t, r, n, a) {
              if (t !== null) {
                t.next = r;
              } else {
                a.head = r;
              }
              if (n !== null) {
                n.prev = r;
              } else {
                a.tail = r;
              }
              r.prev = t;
              r.next = n;
              a.length++;
              return r;
            };
            var s = function e(t, r) {
              var n = t.prev,
                a = t.next;
              if (n !== null) {
                n.next = a;
              } else {
                r.head = a;
              }
              if (a !== null) {
                a.prev = n;
              } else {
                r.tail = n;
              }
              t.prev = t.next = null;
              r.length--;
              return t;
            };
            var l = (function () {
              function e(t) {
                var r = this;
                a(this, e);
                this.length = 0;
                this.head = null;
                this.tail = null;
                if (t != null) {
                  t.forEach(function (e) {
                    return r.push(e);
                  });
                }
              }
              n(e, [
                {
                  key: "size",
                  value: function e() {
                    return this.length;
                  },
                },
                {
                  key: "insertBefore",
                  value: function e(t, r) {
                    return o(r.prev, i(t), r, this);
                  },
                },
                {
                  key: "insertAfter",
                  value: function e(t, r) {
                    return o(r, i(t), r.next, this);
                  },
                },
                {
                  key: "insertNodeBefore",
                  value: function e(t, r) {
                    return o(r.prev, t, r, this);
                  },
                },
                {
                  key: "insertNodeAfter",
                  value: function e(t, r) {
                    return o(r, t, r.next, this);
                  },
                },
                {
                  key: "push",
                  value: function e(t) {
                    return o(this.tail, i(t), null, this);
                  },
                },
                {
                  key: "unshift",
                  value: function e(t) {
                    return o(null, i(t), this.head, this);
                  },
                },
                {
                  key: "remove",
                  value: function e(t) {
                    return s(t, this);
                  },
                },
                {
                  key: "pop",
                  value: function e() {
                    return s(this.tail, this).value;
                  },
                },
                {
                  key: "popNode",
                  value: function e() {
                    return s(this.tail, this);
                  },
                },
                {
                  key: "shift",
                  value: function e() {
                    return s(this.head, this).value;
                  },
                },
                {
                  key: "shiftNode",
                  value: function e() {
                    return s(this.head, this);
                  },
                },
                {
                  key: "get_object_at",
                  value: function e(t) {
                    if (t <= this.length()) {
                      var r = 1;
                      var n = this.head;
                      while (r < t) {
                        n = n.next;
                        r++;
                      }
                      return n.value;
                    }
                  },
                },
                {
                  key: "set_object_at",
                  value: function e(t, r) {
                    if (t <= this.length()) {
                      var n = 1;
                      var a = this.head;
                      while (n < t) {
                        a = a.next;
                        n++;
                      }
                      a.value = r;
                    }
                  },
                },
              ]);
              return e;
            })();
            e.exports = l;
          },
          function (e, t, r) {
            "use strict";
            function n(e, t, r) {
              this.x = null;
              this.y = null;
              if (e == null && t == null && r == null) {
                this.x = 0;
                this.y = 0;
              } else if (typeof e == "number" && typeof t == "number" && r == null) {
                this.x = e;
                this.y = t;
              } else if (e.constructor.name == "Point" && t == null && r == null) {
                r = e;
                this.x = r.x;
                this.y = r.y;
              }
            }
            n.prototype.getX = function () {
              return this.x;
            };
            n.prototype.getY = function () {
              return this.y;
            };
            n.prototype.getLocation = function () {
              return new n(this.x, this.y);
            };
            n.prototype.setLocation = function (e, t, r) {
              if (e.constructor.name == "Point" && t == null && r == null) {
                r = e;
                this.setLocation(r.x, r.y);
              } else if (typeof e == "number" && typeof t == "number" && r == null) {
                if (parseInt(e) == e && parseInt(t) == t) {
                  this.move(e, t);
                } else {
                  this.x = Math.floor(e + 0.5);
                  this.y = Math.floor(t + 0.5);
                }
              }
            };
            n.prototype.move = function (e, t) {
              this.x = e;
              this.y = t;
            };
            n.prototype.translate = function (e, t) {
              this.x += e;
              this.y += t;
            };
            n.prototype.equals = function (e) {
              if (e.constructor.name == "Point") {
                var t = e;
                return this.x == t.x && this.y == t.y;
              }
              return this == e;
            };
            n.prototype.toString = function () {
              return new n().constructor.name + "[x=" + this.x + ",y=" + this.y + "]";
            };
            e.exports = n;
          },
          function (e, t, r) {
            "use strict";
            function n(e, t, r, n) {
              this.x = 0;
              this.y = 0;
              this.width = 0;
              this.height = 0;
              if (e != null && t != null && r != null && n != null) {
                this.x = e;
                this.y = t;
                this.width = r;
                this.height = n;
              }
            }
            n.prototype.getX = function () {
              return this.x;
            };
            n.prototype.setX = function (e) {
              this.x = e;
            };
            n.prototype.getY = function () {
              return this.y;
            };
            n.prototype.setY = function (e) {
              this.y = e;
            };
            n.prototype.getWidth = function () {
              return this.width;
            };
            n.prototype.setWidth = function (e) {
              this.width = e;
            };
            n.prototype.getHeight = function () {
              return this.height;
            };
            n.prototype.setHeight = function (e) {
              this.height = e;
            };
            n.prototype.getRight = function () {
              return this.x + this.width;
            };
            n.prototype.getBottom = function () {
              return this.y + this.height;
            };
            n.prototype.intersects = function (e) {
              if (this.getRight() < e.x) {
                return false;
              }
              if (this.getBottom() < e.y) {
                return false;
              }
              if (e.getRight() < this.x) {
                return false;
              }
              if (e.getBottom() < this.y) {
                return false;
              }
              return true;
            };
            n.prototype.getCenterX = function () {
              return this.x + this.width / 2;
            };
            n.prototype.getMinX = function () {
              return this.getX();
            };
            n.prototype.getMaxX = function () {
              return this.getX() + this.width;
            };
            n.prototype.getCenterY = function () {
              return this.y + this.height / 2;
            };
            n.prototype.getMinY = function () {
              return this.getY();
            };
            n.prototype.getMaxY = function () {
              return this.getY() + this.height;
            };
            n.prototype.getWidthHalf = function () {
              return this.width / 2;
            };
            n.prototype.getHeightHalf = function () {
              return this.height / 2;
            };
            e.exports = n;
          },
          function (e, t, r) {
            "use strict";
            var n =
              typeof Symbol === "function" && typeof Symbol.iterator === "symbol"
                ? function (e) {
                    return typeof e;
                  }
                : function (e) {
                    return e && typeof Symbol === "function" && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e;
                  };
            function a() {}
            a.lastID = 0;
            a.createID = function (e) {
              if (a.isPrimitive(e)) {
                return e;
              }
              if (e.uniqueID != null) {
                return e.uniqueID;
              }
              e.uniqueID = a.getString();
              a.lastID++;
              return e.uniqueID;
            };
            a.getString = function (e) {
              if (e == null) e = a.lastID;
              return "Object#" + e + "";
            };
            a.isPrimitive = function (e) {
              var t = typeof e === "undefined" ? "undefined" : n(e);
              return e == null || (t != "object" && t != "function");
            };
            e.exports = a;
          },
          function (e, t, r) {
            "use strict";
            function n(e) {
              if (Array.isArray(e)) {
                for (var t = 0, r = Array(e.length); t < e.length; t++) {
                  r[t] = e[t];
                }
                return r;
              } else {
                return Array.from(e);
              }
            }
            var a = r(0);
            var i = r(6);
            var o = r(3);
            var s = r(1);
            var l = r(5);
            var u = r(4);
            var c = r(17);
            var v = r(27);
            function f(e) {
              v.call(this);
              this.layoutQuality = a.QUALITY;
              this.createBendsAsNeeded = a.DEFAULT_CREATE_BENDS_AS_NEEDED;
              this.incremental = a.DEFAULT_INCREMENTAL;
              this.animationOnLayout = a.DEFAULT_ANIMATION_ON_LAYOUT;
              this.animationDuringLayout = a.DEFAULT_ANIMATION_DURING_LAYOUT;
              this.animationPeriod = a.DEFAULT_ANIMATION_PERIOD;
              this.uniformLeafNodeSizes = a.DEFAULT_UNIFORM_LEAF_NODE_SIZES;
              this.edgeToDummyNodes = new Map();
              this.graphManager = new i(this);
              this.isLayoutFinished = false;
              this.isSubLayout = false;
              this.isRemoteUse = false;
              if (e != null) {
                this.isRemoteUse = e;
              }
            }
            f.RANDOM_SEED = 1;
            f.prototype = Object.create(v.prototype);
            f.prototype.getGraphManager = function () {
              return this.graphManager;
            };
            f.prototype.getAllNodes = function () {
              return this.graphManager.getAllNodes();
            };
            f.prototype.getAllEdges = function () {
              return this.graphManager.getAllEdges();
            };
            f.prototype.getAllNodesToApplyGravitation = function () {
              return this.graphManager.getAllNodesToApplyGravitation();
            };
            f.prototype.newGraphManager = function () {
              var e = new i(this);
              this.graphManager = e;
              return e;
            };
            f.prototype.newGraph = function (e) {
              return new l(null, this.graphManager, e);
            };
            f.prototype.newNode = function (e) {
              return new o(this.graphManager, e);
            };
            f.prototype.newEdge = function (e) {
              return new s(null, null, e);
            };
            f.prototype.checkLayoutSuccess = function () {
              return (
                this.graphManager.getRoot() == null || this.graphManager.getRoot().getNodes().length == 0 || this.graphManager.includesInvalidEdge()
              );
            };
            f.prototype.runLayout = function () {
              this.isLayoutFinished = false;
              if (this.tilingPreLayout) {
                this.tilingPreLayout();
              }
              this.initParameters();
              var e;
              if (this.checkLayoutSuccess()) {
                e = false;
              } else {
                e = this.layout();
              }
              if (a.ANIMATE === "during") {
                return false;
              }
              if (e) {
                if (!this.isSubLayout) {
                  this.doPostLayout();
                }
              }
              if (this.tilingPostLayout) {
                this.tilingPostLayout();
              }
              this.isLayoutFinished = true;
              return e;
            };
            f.prototype.doPostLayout = function () {
              if (!this.incremental) {
                this.transform();
              }
              this.update();
            };
            f.prototype.update2 = function () {
              if (this.createBendsAsNeeded) {
                this.createBendpointsFromDummyNodes();
                this.graphManager.resetAllEdges();
              }
              if (!this.isRemoteUse) {
                var e;
                var t = this.graphManager.getAllEdges();
                for (var r = 0; r < t.length; r++) {
                  e = t[r];
                }
                var n;
                var a = this.graphManager.getRoot().getNodes();
                for (var r = 0; r < a.length; r++) {
                  n = a[r];
                }
                this.update(this.graphManager.getRoot());
              }
            };
            f.prototype.update = function (e) {
              if (e == null) {
                this.update2();
              } else if (e instanceof o) {
                var t = e;
                if (t.getChild() != null) {
                  var r = t.getChild().getNodes();
                  for (var n = 0; n < r.length; n++) {
                    update(r[n]);
                  }
                }
                if (t.vGraphObject != null) {
                  var a = t.vGraphObject;
                  a.update(t);
                }
              } else if (e instanceof s) {
                var i = e;
                if (i.vGraphObject != null) {
                  var u = i.vGraphObject;
                  u.update(i);
                }
              } else if (e instanceof l) {
                var c = e;
                if (c.vGraphObject != null) {
                  var v = c.vGraphObject;
                  v.update(c);
                }
              }
            };
            f.prototype.initParameters = function () {
              if (!this.isSubLayout) {
                this.layoutQuality = a.QUALITY;
                this.animationDuringLayout = a.DEFAULT_ANIMATION_DURING_LAYOUT;
                this.animationPeriod = a.DEFAULT_ANIMATION_PERIOD;
                this.animationOnLayout = a.DEFAULT_ANIMATION_ON_LAYOUT;
                this.incremental = a.DEFAULT_INCREMENTAL;
                this.createBendsAsNeeded = a.DEFAULT_CREATE_BENDS_AS_NEEDED;
                this.uniformLeafNodeSizes = a.DEFAULT_UNIFORM_LEAF_NODE_SIZES;
              }
              if (this.animationDuringLayout) {
                this.animationOnLayout = false;
              }
            };
            f.prototype.transform = function (e) {
              if (e == undefined) {
                this.transform(new u(0, 0));
              } else {
                var t = new c();
                var r = this.graphManager.getRoot().updateLeftTop();
                if (r != null) {
                  t.setWorldOrgX(e.x);
                  t.setWorldOrgY(e.y);
                  t.setDeviceOrgX(r.x);
                  t.setDeviceOrgY(r.y);
                  var n = this.getAllNodes();
                  var a;
                  for (var i = 0; i < n.length; i++) {
                    a = n[i];
                    a.transform(t);
                  }
                }
              }
            };
            f.prototype.positionNodesRandomly = function (e) {
              if (e == undefined) {
                this.positionNodesRandomly(this.getGraphManager().getRoot());
                this.getGraphManager().getRoot().updateBounds(true);
              } else {
                var t;
                var r;
                var n = e.getNodes();
                for (var a = 0; a < n.length; a++) {
                  t = n[a];
                  r = t.getChild();
                  if (r == null) {
                    t.scatter();
                  } else if (r.getNodes().length == 0) {
                    t.scatter();
                  } else {
                    this.positionNodesRandomly(r);
                    t.updateBounds();
                  }
                }
              }
            };
            f.prototype.getFlatForest = function () {
              var e = [];
              var t = true;
              var r = this.graphManager.getRoot().getNodes();
              var a = true;
              for (var i = 0; i < r.length; i++) {
                if (r[i].getChild() != null) {
                  a = false;
                }
              }
              if (!a) {
                return e;
              }
              var o = new Set();
              var s = [];
              var l = new Map();
              var u = [];
              u = u.concat(r);
              while (u.length > 0 && t) {
                s.push(u[0]);
                while (s.length > 0 && t) {
                  var c = s[0];
                  s.splice(0, 1);
                  o.add(c);
                  var v = c.getEdges();
                  for (var i = 0; i < v.length; i++) {
                    var f = v[i].getOtherEnd(c);
                    if (l.get(c) != f) {
                      if (!o.has(f)) {
                        s.push(f);
                        l.set(f, c);
                      } else {
                        t = false;
                        break;
                      }
                    }
                  }
                }
                if (!t) {
                  e = [];
                } else {
                  var h = [].concat(n(o));
                  e.push(h);
                  for (var i = 0; i < h.length; i++) {
                    var d = h[i];
                    var p = u.indexOf(d);
                    if (p > -1) {
                      u.splice(p, 1);
                    }
                  }
                  o = new Set();
                  l = new Map();
                }
              }
              return e;
            };
            f.prototype.createDummyNodesForBendpoints = function (e) {
              var t = [];
              var r = e.source;
              var n = this.graphManager.calcLowestCommonAncestor(e.source, e.target);
              for (var a = 0; a < e.bendpoints.length; a++) {
                var i = this.newNode(null);
                i.setRect(new Point(0, 0), new Dimension(1, 1));
                n.add(i);
                var o = this.newEdge(null);
                this.graphManager.add(o, r, i);
                t.add(i);
                r = i;
              }
              var o = this.newEdge(null);
              this.graphManager.add(o, r, e.target);
              this.edgeToDummyNodes.set(e, t);
              if (e.isInterGraph()) {
                this.graphManager.remove(e);
              } else {
                n.remove(e);
              }
              return t;
            };
            f.prototype.createBendpointsFromDummyNodes = function () {
              var e = [];
              e = e.concat(this.graphManager.getAllEdges());
              e = [].concat(n(this.edgeToDummyNodes.keys())).concat(e);
              for (var t = 0; t < e.length; t++) {
                var r = e[t];
                if (r.bendpoints.length > 0) {
                  var a = this.edgeToDummyNodes.get(r);
                  for (var i = 0; i < a.length; i++) {
                    var o = a[i];
                    var s = new u(o.getCenterX(), o.getCenterY());
                    var l = r.bendpoints.get(i);
                    l.x = s.x;
                    l.y = s.y;
                    o.getOwner().remove(o);
                  }
                  this.graphManager.add(r, r.source, r.target);
                }
              }
            };
            f.transform = function (e, t, r, n) {
              if (r != undefined && n != undefined) {
                var a = t;
                if (e <= 50) {
                  var i = t / r;
                  a -= ((t - i) / 50) * (50 - e);
                } else {
                  var o = t * n;
                  a += ((o - t) / 50) * (e - 50);
                }
                return a;
              } else {
                var s, l;
                if (e <= 50) {
                  s = (9 * t) / 500;
                  l = t / 10;
                } else {
                  s = (9 * t) / 50;
                  l = -8 * t;
                }
                return s * e + l;
              }
            };
            f.findCenterOfTree = function (e) {
              var t = [];
              t = t.concat(e);
              var r = [];
              var n = new Map();
              var a = false;
              var i = null;
              if (t.length == 1 || t.length == 2) {
                a = true;
                i = t[0];
              }
              for (var o = 0; o < t.length; o++) {
                var s = t[o];
                var l = s.getNeighborsList().size;
                n.set(s, s.getNeighborsList().size);
                if (l == 1) {
                  r.push(s);
                }
              }
              var u = [];
              u = u.concat(r);
              while (!a) {
                var c = [];
                c = c.concat(u);
                u = [];
                for (var o = 0; o < t.length; o++) {
                  var s = t[o];
                  var v = t.indexOf(s);
                  if (v >= 0) {
                    t.splice(v, 1);
                  }
                  var f = s.getNeighborsList();
                  f.forEach(function (e) {
                    if (r.indexOf(e) < 0) {
                      var t = n.get(e);
                      var a = t - 1;
                      if (a == 1) {
                        u.push(e);
                      }
                      n.set(e, a);
                    }
                  });
                }
                r = r.concat(u);
                if (t.length == 1 || t.length == 2) {
                  a = true;
                  i = t[0];
                }
              }
              return i;
            };
            f.prototype.setGraphManager = function (e) {
              this.graphManager = e;
            };
            e.exports = f;
          },
          function (e, t, r) {
            "use strict";
            function n() {}
            n.seed = 1;
            n.x = 0;
            n.nextDouble = function () {
              n.x = Math.sin(n.seed++) * 1e4;
              return n.x - Math.floor(n.x);
            };
            e.exports = n;
          },
          function (e, t, r) {
            "use strict";
            var n = r(4);
            function a(e, t) {
              this.lworldOrgX = 0;
              this.lworldOrgY = 0;
              this.ldeviceOrgX = 0;
              this.ldeviceOrgY = 0;
              this.lworldExtX = 1;
              this.lworldExtY = 1;
              this.ldeviceExtX = 1;
              this.ldeviceExtY = 1;
            }
            a.prototype.getWorldOrgX = function () {
              return this.lworldOrgX;
            };
            a.prototype.setWorldOrgX = function (e) {
              this.lworldOrgX = e;
            };
            a.prototype.getWorldOrgY = function () {
              return this.lworldOrgY;
            };
            a.prototype.setWorldOrgY = function (e) {
              this.lworldOrgY = e;
            };
            a.prototype.getWorldExtX = function () {
              return this.lworldExtX;
            };
            a.prototype.setWorldExtX = function (e) {
              this.lworldExtX = e;
            };
            a.prototype.getWorldExtY = function () {
              return this.lworldExtY;
            };
            a.prototype.setWorldExtY = function (e) {
              this.lworldExtY = e;
            };
            a.prototype.getDeviceOrgX = function () {
              return this.ldeviceOrgX;
            };
            a.prototype.setDeviceOrgX = function (e) {
              this.ldeviceOrgX = e;
            };
            a.prototype.getDeviceOrgY = function () {
              return this.ldeviceOrgY;
            };
            a.prototype.setDeviceOrgY = function (e) {
              this.ldeviceOrgY = e;
            };
            a.prototype.getDeviceExtX = function () {
              return this.ldeviceExtX;
            };
            a.prototype.setDeviceExtX = function (e) {
              this.ldeviceExtX = e;
            };
            a.prototype.getDeviceExtY = function () {
              return this.ldeviceExtY;
            };
            a.prototype.setDeviceExtY = function (e) {
              this.ldeviceExtY = e;
            };
            a.prototype.transformX = function (e) {
              var t = 0;
              var r = this.lworldExtX;
              if (r != 0) {
                t = this.ldeviceOrgX + ((e - this.lworldOrgX) * this.ldeviceExtX) / r;
              }
              return t;
            };
            a.prototype.transformY = function (e) {
              var t = 0;
              var r = this.lworldExtY;
              if (r != 0) {
                t = this.ldeviceOrgY + ((e - this.lworldOrgY) * this.ldeviceExtY) / r;
              }
              return t;
            };
            a.prototype.inverseTransformX = function (e) {
              var t = 0;
              var r = this.ldeviceExtX;
              if (r != 0) {
                t = this.lworldOrgX + ((e - this.ldeviceOrgX) * this.lworldExtX) / r;
              }
              return t;
            };
            a.prototype.inverseTransformY = function (e) {
              var t = 0;
              var r = this.ldeviceExtY;
              if (r != 0) {
                t = this.lworldOrgY + ((e - this.ldeviceOrgY) * this.lworldExtY) / r;
              }
              return t;
            };
            a.prototype.inverseTransformPoint = function (e) {
              var t = new n(this.inverseTransformX(e.x), this.inverseTransformY(e.y));
              return t;
            };
            e.exports = a;
          },
          function (e, t, r) {
            "use strict";
            function n(e) {
              if (Array.isArray(e)) {
                for (var t = 0, r = Array(e.length); t < e.length; t++) {
                  r[t] = e[t];
                }
                return r;
              } else {
                return Array.from(e);
              }
            }
            var a = r(15);
            var i = r(7);
            var o = r(0);
            var s = r(8);
            var l = r(9);
            function u() {
              a.call(this);
              this.useSmartIdealEdgeLengthCalculation = i.DEFAULT_USE_SMART_IDEAL_EDGE_LENGTH_CALCULATION;
              this.idealEdgeLength = i.DEFAULT_EDGE_LENGTH;
              this.springConstant = i.DEFAULT_SPRING_STRENGTH;
              this.repulsionConstant = i.DEFAULT_REPULSION_STRENGTH;
              this.gravityConstant = i.DEFAULT_GRAVITY_STRENGTH;
              this.compoundGravityConstant = i.DEFAULT_COMPOUND_GRAVITY_STRENGTH;
              this.gravityRangeFactor = i.DEFAULT_GRAVITY_RANGE_FACTOR;
              this.compoundGravityRangeFactor = i.DEFAULT_COMPOUND_GRAVITY_RANGE_FACTOR;
              this.displacementThresholdPerNode = (3 * i.DEFAULT_EDGE_LENGTH) / 100;
              this.coolingFactor = i.DEFAULT_COOLING_FACTOR_INCREMENTAL;
              this.initialCoolingFactor = i.DEFAULT_COOLING_FACTOR_INCREMENTAL;
              this.totalDisplacement = 0;
              this.oldTotalDisplacement = 0;
              this.maxIterations = i.MAX_ITERATIONS;
            }
            u.prototype = Object.create(a.prototype);
            for (var c in a) {
              u[c] = a[c];
            }
            u.prototype.initParameters = function () {
              a.prototype.initParameters.call(this, arguments);
              this.totalIterations = 0;
              this.notAnimatedIterations = 0;
              this.useFRGridVariant = i.DEFAULT_USE_SMART_REPULSION_RANGE_CALCULATION;
              this.grid = [];
            };
            u.prototype.calcIdealEdgeLengths = function () {
              var e;
              var t;
              var r;
              var n;
              var a;
              var s;
              var l = this.getGraphManager().getAllEdges();
              for (var u = 0; u < l.length; u++) {
                e = l[u];
                e.idealLength = this.idealEdgeLength;
                if (e.isInterGraph) {
                  r = e.getSource();
                  n = e.getTarget();
                  a = e.getSourceInLca().getEstimatedSize();
                  s = e.getTargetInLca().getEstimatedSize();
                  if (this.useSmartIdealEdgeLengthCalculation) {
                    e.idealLength += a + s - 2 * o.SIMPLE_NODE_SIZE;
                  }
                  t = e.getLca().getInclusionTreeDepth();
                  e.idealLength +=
                    i.DEFAULT_EDGE_LENGTH * i.PER_LEVEL_IDEAL_EDGE_LENGTH_FACTOR * (r.getInclusionTreeDepth() + n.getInclusionTreeDepth() - 2 * t);
                }
              }
            };
            u.prototype.initSpringEmbedder = function () {
              var e = this.getAllNodes().length;
              if (this.incremental) {
                if (e > i.ADAPTATION_LOWER_NODE_LIMIT) {
                  this.coolingFactor = Math.max(
                    this.coolingFactor * i.COOLING_ADAPTATION_FACTOR,
                    this.coolingFactor -
                      ((e - i.ADAPTATION_LOWER_NODE_LIMIT) / (i.ADAPTATION_UPPER_NODE_LIMIT - i.ADAPTATION_LOWER_NODE_LIMIT)) *
                        this.coolingFactor *
                        (1 - i.COOLING_ADAPTATION_FACTOR)
                  );
                }
                this.maxNodeDisplacement = i.MAX_NODE_DISPLACEMENT_INCREMENTAL;
              } else {
                if (e > i.ADAPTATION_LOWER_NODE_LIMIT) {
                  this.coolingFactor = Math.max(
                    i.COOLING_ADAPTATION_FACTOR,
                    1 -
                      ((e - i.ADAPTATION_LOWER_NODE_LIMIT) / (i.ADAPTATION_UPPER_NODE_LIMIT - i.ADAPTATION_LOWER_NODE_LIMIT)) *
                        (1 - i.COOLING_ADAPTATION_FACTOR)
                  );
                } else {
                  this.coolingFactor = 1;
                }
                this.initialCoolingFactor = this.coolingFactor;
                this.maxNodeDisplacement = i.MAX_NODE_DISPLACEMENT;
              }
              this.maxIterations = Math.max(this.getAllNodes().length * 5, this.maxIterations);
              this.totalDisplacementThreshold = this.displacementThresholdPerNode * this.getAllNodes().length;
              this.repulsionRange = this.calcRepulsionRange();
            };
            u.prototype.calcSpringForces = function () {
              var e = this.getAllEdges();
              var t;
              for (var r = 0; r < e.length; r++) {
                t = e[r];
                this.calcSpringForce(t, t.idealLength);
              }
            };
            u.prototype.calcRepulsionForces = function () {
              var e = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : true;
              var t = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : false;
              var r, n;
              var a, o;
              var s = this.getAllNodes();
              var l;
              if (this.useFRGridVariant) {
                if (this.totalIterations % i.GRID_CALCULATION_CHECK_PERIOD == 1 && e) {
                  this.updateGrid();
                }
                l = new Set();
                for (r = 0; r < s.length; r++) {
                  a = s[r];
                  this.calculateRepulsionForceOfANode(a, l, e, t);
                  l.add(a);
                }
              } else {
                for (r = 0; r < s.length; r++) {
                  a = s[r];
                  for (n = r + 1; n < s.length; n++) {
                    o = s[n];
                    if (a.getOwner() != o.getOwner()) {
                      continue;
                    }
                    this.calcRepulsionForce(a, o);
                  }
                }
              }
            };
            u.prototype.calcGravitationalForces = function () {
              var e;
              var t = this.getAllNodesToApplyGravitation();
              for (var r = 0; r < t.length; r++) {
                e = t[r];
                this.calcGravitationalForce(e);
              }
            };
            u.prototype.moveNodes = function () {
              var e = this.getAllNodes();
              var t;
              for (var r = 0; r < e.length; r++) {
                t = e[r];
                t.move();
              }
            };
            u.prototype.calcSpringForce = function (e, t) {
              var r = e.getSource();
              var n = e.getTarget();
              var a;
              var i;
              var o;
              var s;
              if (this.uniformLeafNodeSizes && r.getChild() == null && n.getChild() == null) {
                e.updateLengthSimple();
              } else {
                e.updateLength();
                if (e.isOverlapingSourceAndTarget) {
                  return;
                }
              }
              a = e.getLength();
              if (a == 0) return;
              i = this.springConstant * (a - t);
              o = i * (e.lengthX / a);
              s = i * (e.lengthY / a);
              r.springForceX += o;
              r.springForceY += s;
              n.springForceX -= o;
              n.springForceY -= s;
            };
            u.prototype.calcRepulsionForce = function (e, t) {
              var r = e.getRect();
              var n = t.getRect();
              var a = new Array(2);
              var o = new Array(4);
              var u;
              var c;
              var v;
              var f;
              var h;
              var d;
              var p;
              if (r.intersects(n)) {
                s.calcSeparationAmount(r, n, a, i.DEFAULT_EDGE_LENGTH / 2);
                d = 2 * a[0];
                p = 2 * a[1];
                var g = (e.noOfChildren * t.noOfChildren) / (e.noOfChildren + t.noOfChildren);
                e.repulsionForceX -= g * d;
                e.repulsionForceY -= g * p;
                t.repulsionForceX += g * d;
                t.repulsionForceY += g * p;
              } else {
                if (this.uniformLeafNodeSizes && e.getChild() == null && t.getChild() == null) {
                  u = n.getCenterX() - r.getCenterX();
                  c = n.getCenterY() - r.getCenterY();
                } else {
                  s.getIntersection(r, n, o);
                  u = o[2] - o[0];
                  c = o[3] - o[1];
                }
                if (Math.abs(u) < i.MIN_REPULSION_DIST) {
                  u = l.sign(u) * i.MIN_REPULSION_DIST;
                }
                if (Math.abs(c) < i.MIN_REPULSION_DIST) {
                  c = l.sign(c) * i.MIN_REPULSION_DIST;
                }
                v = u * u + c * c;
                f = Math.sqrt(v);
                h = (this.repulsionConstant * e.noOfChildren * t.noOfChildren) / v;
                d = (h * u) / f;
                p = (h * c) / f;
                e.repulsionForceX -= d;
                e.repulsionForceY -= p;
                t.repulsionForceX += d;
                t.repulsionForceY += p;
              }
            };
            u.prototype.calcGravitationalForce = function (e) {
              var t;
              var r;
              var n;
              var a;
              var i;
              var o;
              var s;
              var l;
              t = e.getOwner();
              r = (t.getRight() + t.getLeft()) / 2;
              n = (t.getTop() + t.getBottom()) / 2;
              a = e.getCenterX() - r;
              i = e.getCenterY() - n;
              o = Math.abs(a) + e.getWidth() / 2;
              s = Math.abs(i) + e.getHeight() / 2;
              if (e.getOwner() == this.graphManager.getRoot()) {
                l = t.getEstimatedSize() * this.gravityRangeFactor;
                if (o > l || s > l) {
                  e.gravitationForceX = -this.gravityConstant * a;
                  e.gravitationForceY = -this.gravityConstant * i;
                }
              } else {
                l = t.getEstimatedSize() * this.compoundGravityRangeFactor;
                if (o > l || s > l) {
                  e.gravitationForceX = -this.gravityConstant * a * this.compoundGravityConstant;
                  e.gravitationForceY = -this.gravityConstant * i * this.compoundGravityConstant;
                }
              }
            };
            u.prototype.isConverged = function () {
              var e;
              var t = false;
              if (this.totalIterations > this.maxIterations / 3) {
                t = Math.abs(this.totalDisplacement - this.oldTotalDisplacement) < 2;
              }
              e = this.totalDisplacement < this.totalDisplacementThreshold;
              this.oldTotalDisplacement = this.totalDisplacement;
              return e || t;
            };
            u.prototype.animate = function () {
              if (this.animationDuringLayout && !this.isSubLayout) {
                if (this.notAnimatedIterations == this.animationPeriod) {
                  this.update();
                  this.notAnimatedIterations = 0;
                } else {
                  this.notAnimatedIterations++;
                }
              }
            };
            u.prototype.calcNoOfChildrenForAllNodes = function () {
              var e;
              var t = this.graphManager.getAllNodes();
              for (var r = 0; r < t.length; r++) {
                e = t[r];
                e.noOfChildren = e.getNoOfChildren();
              }
            };
            u.prototype.calcGrid = function (e) {
              var t = 0;
              var r = 0;
              t = parseInt(Math.ceil((e.getRight() - e.getLeft()) / this.repulsionRange));
              r = parseInt(Math.ceil((e.getBottom() - e.getTop()) / this.repulsionRange));
              var n = new Array(t);
              for (var a = 0; a < t; a++) {
                n[a] = new Array(r);
              }
              for (var a = 0; a < t; a++) {
                for (var i = 0; i < r; i++) {
                  n[a][i] = new Array();
                }
              }
              return n;
            };
            u.prototype.addNodeToGrid = function (e, t, r) {
              var n = 0;
              var a = 0;
              var i = 0;
              var o = 0;
              n = parseInt(Math.floor((e.getRect().x - t) / this.repulsionRange));
              a = parseInt(Math.floor((e.getRect().width + e.getRect().x - t) / this.repulsionRange));
              i = parseInt(Math.floor((e.getRect().y - r) / this.repulsionRange));
              o = parseInt(Math.floor((e.getRect().height + e.getRect().y - r) / this.repulsionRange));
              for (var s = n; s <= a; s++) {
                for (var l = i; l <= o; l++) {
                  this.grid[s][l].push(e);
                  e.setGridCoordinates(n, a, i, o);
                }
              }
            };
            u.prototype.updateGrid = function () {
              var e;
              var t;
              var r = this.getAllNodes();
              this.grid = this.calcGrid(this.graphManager.getRoot());
              for (e = 0; e < r.length; e++) {
                t = r[e];
                this.addNodeToGrid(t, this.graphManager.getRoot().getLeft(), this.graphManager.getRoot().getTop());
              }
            };
            u.prototype.calculateRepulsionForceOfANode = function (e, t, r, a) {
              if ((this.totalIterations % i.GRID_CALCULATION_CHECK_PERIOD == 1 && r) || a) {
                var o = new Set();
                e.surrounding = new Array();
                var s;
                var l = this.grid;
                for (var u = e.startX - 1; u < e.finishX + 2; u++) {
                  for (var c = e.startY - 1; c < e.finishY + 2; c++) {
                    if (!(u < 0 || c < 0 || u >= l.length || c >= l[0].length)) {
                      for (var v = 0; v < l[u][c].length; v++) {
                        s = l[u][c][v];
                        if (e.getOwner() != s.getOwner() || e == s) {
                          continue;
                        }
                        if (!t.has(s) && !o.has(s)) {
                          var f = Math.abs(e.getCenterX() - s.getCenterX()) - (e.getWidth() / 2 + s.getWidth() / 2);
                          var h = Math.abs(e.getCenterY() - s.getCenterY()) - (e.getHeight() / 2 + s.getHeight() / 2);
                          if (f <= this.repulsionRange && h <= this.repulsionRange) {
                            o.add(s);
                          }
                        }
                      }
                    }
                  }
                }
                e.surrounding = [].concat(n(o));
              }
              for (u = 0; u < e.surrounding.length; u++) {
                this.calcRepulsionForce(e, e.surrounding[u]);
              }
            };
            u.prototype.calcRepulsionRange = function () {
              return 0;
            };
            e.exports = u;
          },
          function (e, t, r) {
            "use strict";
            var n = r(1);
            var a = r(7);
            function i(e, t, r) {
              n.call(this, e, t, r);
              this.idealLength = a.DEFAULT_EDGE_LENGTH;
            }
            i.prototype = Object.create(n.prototype);
            for (var o in n) {
              i[o] = n[o];
            }
            e.exports = i;
          },
          function (e, t, r) {
            "use strict";
            var n = r(3);
            function a(e, t, r, a) {
              n.call(this, e, t, r, a);
              this.springForceX = 0;
              this.springForceY = 0;
              this.repulsionForceX = 0;
              this.repulsionForceY = 0;
              this.gravitationForceX = 0;
              this.gravitationForceY = 0;
              this.displacementX = 0;
              this.displacementY = 0;
              this.startX = 0;
              this.finishX = 0;
              this.startY = 0;
              this.finishY = 0;
              this.surrounding = [];
            }
            a.prototype = Object.create(n.prototype);
            for (var i in n) {
              a[i] = n[i];
            }
            a.prototype.setGridCoordinates = function (e, t, r, n) {
              this.startX = e;
              this.finishX = t;
              this.startY = r;
              this.finishY = n;
            };
            e.exports = a;
          },
          function (e, t, r) {
            "use strict";
            function n(e, t) {
              this.width = 0;
              this.height = 0;
              if (e !== null && t !== null) {
                this.height = t;
                this.width = e;
              }
            }
            n.prototype.getWidth = function () {
              return this.width;
            };
            n.prototype.setWidth = function (e) {
              this.width = e;
            };
            n.prototype.getHeight = function () {
              return this.height;
            };
            n.prototype.setHeight = function (e) {
              this.height = e;
            };
            e.exports = n;
          },
          function (e, t, r) {
            "use strict";
            var n = r(14);
            function a() {
              this.map = {};
              this.keys = [];
            }
            a.prototype.put = function (e, t) {
              var r = n.createID(e);
              if (!this.contains(r)) {
                this.map[r] = t;
                this.keys.push(e);
              }
            };
            a.prototype.contains = function (e) {
              var t = n.createID(e);
              return this.map[e] != null;
            };
            a.prototype.get = function (e) {
              var t = n.createID(e);
              return this.map[t];
            };
            a.prototype.keySet = function () {
              return this.keys;
            };
            e.exports = a;
          },
          function (e, t, r) {
            "use strict";
            var n = r(14);
            function a() {
              this.set = {};
            }
            a.prototype.add = function (e) {
              var t = n.createID(e);
              if (!this.contains(t)) this.set[t] = e;
            };
            a.prototype.remove = function (e) {
              delete this.set[n.createID(e)];
            };
            a.prototype.clear = function () {
              this.set = {};
            };
            a.prototype.contains = function (e) {
              return this.set[n.createID(e)] == e;
            };
            a.prototype.isEmpty = function () {
              return this.size() === 0;
            };
            a.prototype.size = function () {
              return Object.keys(this.set).length;
            };
            a.prototype.addAllTo = function (e) {
              var t = Object.keys(this.set);
              var r = t.length;
              for (var n = 0; n < r; n++) {
                e.push(this.set[t[n]]);
              }
            };
            a.prototype.size = function () {
              return Object.keys(this.set).length;
            };
            a.prototype.addAll = function (e) {
              var t = e.length;
              for (var r = 0; r < t; r++) {
                var n = e[r];
                this.add(n);
              }
            };
            e.exports = a;
          },
          function (e, t, r) {
            "use strict";
            var n = (function () {
              function e(e, t) {
                for (var r = 0; r < t.length; r++) {
                  var n = t[r];
                  n.enumerable = n.enumerable || false;
                  n.configurable = true;
                  if ("value" in n) n.writable = true;
                  Object.defineProperty(e, n.key, n);
                }
              }
              return function (t, r, n) {
                if (r) e(t.prototype, r);
                if (n) e(t, n);
                return t;
              };
            })();
            function a(e, t) {
              if (!(e instanceof t)) {
                throw new TypeError("Cannot call a class as a function");
              }
            }
            var i = r(11);
            var o = (function () {
              function e(t, r) {
                a(this, e);
                if (r !== null || r !== undefined) this.compareFunction = this._defaultCompareFunction;
                var n = void 0;
                if (t instanceof i) n = t.size();
                else n = t.length;
                this._quicksort(t, 0, n - 1);
              }
              n(e, [
                {
                  key: "_quicksort",
                  value: function e(t, r, n) {
                    if (r < n) {
                      var a = this._partition(t, r, n);
                      this._quicksort(t, r, a);
                      this._quicksort(t, a + 1, n);
                    }
                  },
                },
                {
                  key: "_partition",
                  value: function e(t, r, n) {
                    var a = this._get(t, r);
                    var i = r;
                    var o = n;
                    while (true) {
                      while (this.compareFunction(a, this._get(t, o))) {
                        o--;
                      }
                      while (this.compareFunction(this._get(t, i), a)) {
                        i++;
                      }
                      if (i < o) {
                        this._swap(t, i, o);
                        i++;
                        o--;
                      } else return o;
                    }
                  },
                },
                {
                  key: "_get",
                  value: function e(t, r) {
                    if (t instanceof i) return t.get_object_at(r);
                    else return t[r];
                  },
                },
                {
                  key: "_set",
                  value: function e(t, r, n) {
                    if (t instanceof i) t.set_object_at(r, n);
                    else t[r] = n;
                  },
                },
                {
                  key: "_swap",
                  value: function e(t, r, n) {
                    var a = this._get(t, r);
                    this._set(t, r, this._get(t, n));
                    this._set(t, n, a);
                  },
                },
                {
                  key: "_defaultCompareFunction",
                  value: function e(t, r) {
                    return r > t;
                  },
                },
              ]);
              return e;
            })();
            e.exports = o;
          },
          function (e, t, r) {
            "use strict";
            var n = (function () {
              function e(e, t) {
                for (var r = 0; r < t.length; r++) {
                  var n = t[r];
                  n.enumerable = n.enumerable || false;
                  n.configurable = true;
                  if ("value" in n) n.writable = true;
                  Object.defineProperty(e, n.key, n);
                }
              }
              return function (t, r, n) {
                if (r) e(t.prototype, r);
                if (n) e(t, n);
                return t;
              };
            })();
            function a(e, t) {
              if (!(e instanceof t)) {
                throw new TypeError("Cannot call a class as a function");
              }
            }
            var i = (function () {
              function e(t, r) {
                var n = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : 1;
                var i = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : -1;
                var o = arguments.length > 4 && arguments[4] !== undefined ? arguments[4] : -1;
                a(this, e);
                this.sequence1 = t;
                this.sequence2 = r;
                this.match_score = n;
                this.mismatch_penalty = i;
                this.gap_penalty = o;
                this.iMax = t.length + 1;
                this.jMax = r.length + 1;
                this.grid = new Array(this.iMax);
                for (var s = 0; s < this.iMax; s++) {
                  this.grid[s] = new Array(this.jMax);
                  for (var l = 0; l < this.jMax; l++) {
                    this.grid[s][l] = 0;
                  }
                }
                this.tracebackGrid = new Array(this.iMax);
                for (var u = 0; u < this.iMax; u++) {
                  this.tracebackGrid[u] = new Array(this.jMax);
                  for (var c = 0; c < this.jMax; c++) {
                    this.tracebackGrid[u][c] = [null, null, null];
                  }
                }
                this.alignments = [];
                this.score = -1;
                this.computeGrids();
              }
              n(e, [
                {
                  key: "getScore",
                  value: function e() {
                    return this.score;
                  },
                },
                {
                  key: "getAlignments",
                  value: function e() {
                    return this.alignments;
                  },
                },
                {
                  key: "computeGrids",
                  value: function e() {
                    for (var t = 1; t < this.jMax; t++) {
                      this.grid[0][t] = this.grid[0][t - 1] + this.gap_penalty;
                      this.tracebackGrid[0][t] = [false, false, true];
                    }
                    for (var r = 1; r < this.iMax; r++) {
                      this.grid[r][0] = this.grid[r - 1][0] + this.gap_penalty;
                      this.tracebackGrid[r][0] = [false, true, false];
                    }
                    for (var n = 1; n < this.iMax; n++) {
                      for (var a = 1; a < this.jMax; a++) {
                        var i = void 0;
                        if (this.sequence1[n - 1] === this.sequence2[a - 1]) i = this.grid[n - 1][a - 1] + this.match_score;
                        else i = this.grid[n - 1][a - 1] + this.mismatch_penalty;
                        var o = this.grid[n - 1][a] + this.gap_penalty;
                        var s = this.grid[n][a - 1] + this.gap_penalty;
                        var l = [i, o, s];
                        var u = this.arrayAllMaxIndexes(l);
                        this.grid[n][a] = l[u[0]];
                        this.tracebackGrid[n][a] = [u.includes(0), u.includes(1), u.includes(2)];
                      }
                    }
                    this.score = this.grid[this.iMax - 1][this.jMax - 1];
                  },
                },
                {
                  key: "alignmentTraceback",
                  value: function e() {
                    var t = [];
                    t.push({ pos: [this.sequence1.length, this.sequence2.length], seq1: "", seq2: "" });
                    while (t[0]) {
                      var r = t[0];
                      var n = this.tracebackGrid[r.pos[0]][r.pos[1]];
                      if (n[0]) {
                        t.push({
                          pos: [r.pos[0] - 1, r.pos[1] - 1],
                          seq1: this.sequence1[r.pos[0] - 1] + r.seq1,
                          seq2: this.sequence2[r.pos[1] - 1] + r.seq2,
                        });
                      }
                      if (n[1]) {
                        t.push({ pos: [r.pos[0] - 1, r.pos[1]], seq1: this.sequence1[r.pos[0] - 1] + r.seq1, seq2: "-" + r.seq2 });
                      }
                      if (n[2]) {
                        t.push({ pos: [r.pos[0], r.pos[1] - 1], seq1: "-" + r.seq1, seq2: this.sequence2[r.pos[1] - 1] + r.seq2 });
                      }
                      if (r.pos[0] === 0 && r.pos[1] === 0) this.alignments.push({ sequence1: r.seq1, sequence2: r.seq2 });
                      t.shift();
                    }
                    return this.alignments;
                  },
                },
                {
                  key: "getAllIndexes",
                  value: function e(t, r) {
                    var n = [],
                      a = -1;
                    while ((a = t.indexOf(r, a + 1)) !== -1) {
                      n.push(a);
                    }
                    return n;
                  },
                },
                {
                  key: "arrayAllMaxIndexes",
                  value: function e(t) {
                    return this.getAllIndexes(t, Math.max.apply(null, t));
                  },
                },
              ]);
              return e;
            })();
            e.exports = i;
          },
          function (e, t, r) {
            "use strict";
            var n = function e() {
              return;
            };
            n.FDLayout = r(18);
            n.FDLayoutConstants = r(7);
            n.FDLayoutEdge = r(19);
            n.FDLayoutNode = r(20);
            n.DimensionD = r(21);
            n.HashMap = r(22);
            n.HashSet = r(23);
            n.IGeometry = r(8);
            n.IMath = r(9);
            n.Integer = r(10);
            n.Point = r(12);
            n.PointD = r(4);
            n.RandomSeed = r(16);
            n.RectangleD = r(13);
            n.Transform = r(17);
            n.UniqueIDGeneretor = r(14);
            n.Quicksort = r(24);
            n.LinkedList = r(11);
            n.LGraphObject = r(2);
            n.LGraph = r(5);
            n.LEdge = r(1);
            n.LGraphManager = r(6);
            n.LNode = r(3);
            n.Layout = r(15);
            n.LayoutConstants = r(0);
            n.NeedlemanWunsch = r(25);
            e.exports = n;
          },
          function (e, t, r) {
            "use strict";
            function n() {
              this.listeners = [];
            }
            var a = n.prototype;
            a.addListener = function (e, t) {
              this.listeners.push({ event: e, callback: t });
            };
            a.removeListener = function (e, t) {
              for (var r = this.listeners.length; r >= 0; r--) {
                var n = this.listeners[r];
                if (n.event === e && n.callback === t) {
                  this.listeners.splice(r, 1);
                }
              }
            };
            a.emit = function (e, t) {
              for (var r = 0; r < this.listeners.length; r++) {
                var n = this.listeners[r];
                if (e === n.event) {
                  n.callback(t);
                }
              }
            };
            e.exports = n;
          },
        ]);
      });
    },
    11347: (e, t, r) => {
      "use strict";
      r.r(t);
      r.d(t, { diagram: () => le });
      var n = r(23787);
      var a = r(34596);
      var i = r(73711);
      var o = r(71377);
      var s = r.n(o);
      var l = r(14607);
      var u = r.n(l);
      var c = r(80561);
      var v = r(23235);
      var f = r(61364);
      var h = r(27484);
      var d = r.n(h);
      var p = r(17967);
      var g = r(27856);
      var y = r.n(g);
      var m = (function () {
        var e = function (e, t, r, n) {
            for (r = r || {}, n = e.length; n--; r[e[n]] = t);
            return r;
          },
          t = [1, 4],
          r = [1, 13],
          n = [1, 12],
          a = [1, 15],
          i = [1, 16],
          o = [1, 20],
          s = [1, 19],
          l = [6, 7, 8],
          u = [1, 26],
          c = [1, 24],
          v = [1, 25],
          f = [6, 7, 11],
          h = [1, 6, 13, 15, 16, 19, 22],
          d = [1, 33],
          p = [1, 34],
          g = [1, 6, 7, 11, 13, 15, 16, 19, 22];
        var y = {
          trace: function e() {},
          yy: {},
          symbols_: {
            error: 2,
            start: 3,
            mindMap: 4,
            spaceLines: 5,
            SPACELINE: 6,
            NL: 7,
            MINDMAP: 8,
            document: 9,
            stop: 10,
            EOF: 11,
            statement: 12,
            SPACELIST: 13,
            node: 14,
            ICON: 15,
            CLASS: 16,
            nodeWithId: 17,
            nodeWithoutId: 18,
            NODE_DSTART: 19,
            NODE_DESCR: 20,
            NODE_DEND: 21,
            NODE_ID: 22,
            $accept: 0,
            $end: 1,
          },
          terminals_: {
            2: "error",
            6: "SPACELINE",
            7: "NL",
            8: "MINDMAP",
            11: "EOF",
            13: "SPACELIST",
            15: "ICON",
            16: "CLASS",
            19: "NODE_DSTART",
            20: "NODE_DESCR",
            21: "NODE_DEND",
            22: "NODE_ID",
          },
          productions_: [
            0,
            [3, 1],
            [3, 2],
            [5, 1],
            [5, 2],
            [5, 2],
            [4, 2],
            [4, 3],
            [10, 1],
            [10, 1],
            [10, 1],
            [10, 2],
            [10, 2],
            [9, 3],
            [9, 2],
            [12, 2],
            [12, 2],
            [12, 2],
            [12, 1],
            [12, 1],
            [12, 1],
            [12, 1],
            [12, 1],
            [14, 1],
            [14, 1],
            [18, 3],
            [17, 1],
            [17, 4],
          ],
          performAction: function e(t, r, n, a, i, o, s) {
            var l = o.length - 1;
            switch (i) {
              case 6:
              case 7:
                return a;
              case 8:
                a.getLogger().trace("Stop NL ");
                break;
              case 9:
                a.getLogger().trace("Stop EOF ");
                break;
              case 11:
                a.getLogger().trace("Stop NL2 ");
                break;
              case 12:
                a.getLogger().trace("Stop EOF2 ");
                break;
              case 15:
                a.getLogger().info("Node: ", o[l].id);
                a.addNode(o[l - 1].length, o[l].id, o[l].descr, o[l].type);
                break;
              case 16:
                a.getLogger().trace("Icon: ", o[l]);
                a.decorateNode({ icon: o[l] });
                break;
              case 17:
              case 21:
                a.decorateNode({ class: o[l] });
                break;
              case 18:
                a.getLogger().trace("SPACELIST");
                break;
              case 19:
                a.getLogger().trace("Node: ", o[l].id);
                a.addNode(0, o[l].id, o[l].descr, o[l].type);
                break;
              case 20:
                a.decorateNode({ icon: o[l] });
                break;
              case 25:
                a.getLogger().trace("node found ..", o[l - 2]);
                this.$ = { id: o[l - 1], descr: o[l - 1], type: a.getType(o[l - 2], o[l]) };
                break;
              case 26:
                this.$ = { id: o[l], descr: o[l], type: a.nodeType.DEFAULT };
                break;
              case 27:
                a.getLogger().trace("node found ..", o[l - 3]);
                this.$ = { id: o[l - 3], descr: o[l - 1], type: a.getType(o[l - 2], o[l]) };
                break;
            }
          },
          table: [
            { 3: 1, 4: 2, 5: 3, 6: [1, 5], 8: t },
            { 1: [3] },
            { 1: [2, 1] },
            { 4: 6, 6: [1, 7], 7: [1, 8], 8: t },
            { 6: r, 7: [1, 10], 9: 9, 12: 11, 13: n, 14: 14, 15: a, 16: i, 17: 17, 18: 18, 19: o, 22: s },
            e(l, [2, 3]),
            { 1: [2, 2] },
            e(l, [2, 4]),
            e(l, [2, 5]),
            { 1: [2, 6], 6: r, 12: 21, 13: n, 14: 14, 15: a, 16: i, 17: 17, 18: 18, 19: o, 22: s },
            { 6: r, 9: 22, 12: 11, 13: n, 14: 14, 15: a, 16: i, 17: 17, 18: 18, 19: o, 22: s },
            { 6: u, 7: c, 10: 23, 11: v },
            e(f, [2, 22], { 17: 17, 18: 18, 14: 27, 15: [1, 28], 16: [1, 29], 19: o, 22: s }),
            e(f, [2, 18]),
            e(f, [2, 19]),
            e(f, [2, 20]),
            e(f, [2, 21]),
            e(f, [2, 23]),
            e(f, [2, 24]),
            e(f, [2, 26], { 19: [1, 30] }),
            { 20: [1, 31] },
            { 6: u, 7: c, 10: 32, 11: v },
            { 1: [2, 7], 6: r, 12: 21, 13: n, 14: 14, 15: a, 16: i, 17: 17, 18: 18, 19: o, 22: s },
            e(h, [2, 14], { 7: d, 11: p }),
            e(g, [2, 8]),
            e(g, [2, 9]),
            e(g, [2, 10]),
            e(f, [2, 15]),
            e(f, [2, 16]),
            e(f, [2, 17]),
            { 20: [1, 35] },
            { 21: [1, 36] },
            e(h, [2, 13], { 7: d, 11: p }),
            e(g, [2, 11]),
            e(g, [2, 12]),
            { 21: [1, 37] },
            e(f, [2, 25]),
            e(f, [2, 27]),
          ],
          defaultActions: { 2: [2, 1], 6: [2, 2] },
          parseError: function e(t, r) {
            if (r.recoverable) {
              this.trace(t);
            } else {
              var n = new Error(t);
              n.hash = r;
              throw n;
            }
          },
          parse: function e(t) {
            var r = this,
              n = [0],
              a = [],
              i = [null],
              o = [],
              s = this.table,
              l = "",
              u = 0,
              c = 0,
              v = 2,
              f = 1;
            var h = o.slice.call(arguments, 1);
            var d = Object.create(this.lexer);
            var p = { yy: {} };
            for (var g in this.yy) {
              if (Object.prototype.hasOwnProperty.call(this.yy, g)) {
                p.yy[g] = this.yy[g];
              }
            }
            d.setInput(t, p.yy);
            p.yy.lexer = d;
            p.yy.parser = this;
            if (typeof d.yylloc == "undefined") {
              d.yylloc = {};
            }
            var y = d.yylloc;
            o.push(y);
            var m = d.options && d.options.ranges;
            if (typeof p.yy.parseError === "function") {
              this.parseError = p.yy.parseError;
            } else {
              this.parseError = Object.getPrototypeOf(this).parseError;
            }
            function b() {
              var e;
              e = a.pop() || d.lex() || f;
              if (typeof e !== "number") {
                if (e instanceof Array) {
                  a = e;
                  e = a.pop();
                }
                e = r.symbols_[e] || e;
              }
              return e;
            }
            var x,
              w,
              E,
              T,
              _ = {},
              D,
              C,
              N,
              A;
            while (true) {
              w = n[n.length - 1];
              if (this.defaultActions[w]) {
                E = this.defaultActions[w];
              } else {
                if (x === null || typeof x == "undefined") {
                  x = b();
                }
                E = s[w] && s[w][x];
              }
              if (typeof E === "undefined" || !E.length || !E[0]) {
                var L = "";
                A = [];
                for (D in s[w]) {
                  if (this.terminals_[D] && D > v) {
                    A.push("'" + this.terminals_[D] + "'");
                  }
                }
                if (d.showPosition) {
                  L =
                    "Parse error on line " +
                    (u + 1) +
                    ":\n" +
                    d.showPosition() +
                    "\nExpecting " +
                    A.join(", ") +
                    ", got '" +
                    (this.terminals_[x] || x) +
                    "'";
                } else {
                  L = "Parse error on line " + (u + 1) + ": Unexpected " + (x == f ? "end of input" : "'" + (this.terminals_[x] || x) + "'");
                }
                this.parseError(L, { text: d.match, token: this.terminals_[x] || x, line: d.yylineno, loc: y, expected: A });
              }
              if (E[0] instanceof Array && E.length > 1) {
                throw new Error("Parse Error: multiple actions possible at state: " + w + ", token: " + x);
              }
              switch (E[0]) {
                case 1:
                  n.push(x);
                  i.push(d.yytext);
                  o.push(d.yylloc);
                  n.push(E[1]);
                  x = null;
                  {
                    c = d.yyleng;
                    l = d.yytext;
                    u = d.yylineno;
                    y = d.yylloc;
                  }
                  break;
                case 2:
                  C = this.productions_[E[1]][1];
                  _.$ = i[i.length - C];
                  _._$ = {
                    first_line: o[o.length - (C || 1)].first_line,
                    last_line: o[o.length - 1].last_line,
                    first_column: o[o.length - (C || 1)].first_column,
                    last_column: o[o.length - 1].last_column,
                  };
                  if (m) {
                    _._$.range = [o[o.length - (C || 1)].range[0], o[o.length - 1].range[1]];
                  }
                  T = this.performAction.apply(_, [l, c, u, p.yy, E[1], i, o].concat(h));
                  if (typeof T !== "undefined") {
                    return T;
                  }
                  if (C) {
                    n = n.slice(0, -1 * C * 2);
                    i = i.slice(0, -1 * C);
                    o = o.slice(0, -1 * C);
                  }
                  n.push(this.productions_[E[1]][0]);
                  i.push(_.$);
                  o.push(_._$);
                  N = s[n[n.length - 2]][n[n.length - 1]];
                  n.push(N);
                  break;
                case 3:
                  return true;
              }
            }
            return true;
          },
        };
        var m = (function () {
          var e = {
            EOF: 1,
            parseError: function e(t, r) {
              if (this.yy.parser) {
                this.yy.parser.parseError(t, r);
              } else {
                throw new Error(t);
              }
            },
            setInput: function (e, t) {
              this.yy = t || this.yy || {};
              this._input = e;
              this._more = this._backtrack = this.done = false;
              this.yylineno = this.yyleng = 0;
              this.yytext = this.matched = this.match = "";
              this.conditionStack = ["INITIAL"];
              this.yylloc = { first_line: 1, first_column: 0, last_line: 1, last_column: 0 };
              if (this.options.ranges) {
                this.yylloc.range = [0, 0];
              }
              this.offset = 0;
              return this;
            },
            input: function () {
              var e = this._input[0];
              this.yytext += e;
              this.yyleng++;
              this.offset++;
              this.match += e;
              this.matched += e;
              var t = e.match(/(?:\r\n?|\n).*/g);
              if (t) {
                this.yylineno++;
                this.yylloc.last_line++;
              } else {
                this.yylloc.last_column++;
              }
              if (this.options.ranges) {
                this.yylloc.range[1]++;
              }
              this._input = this._input.slice(1);
              return e;
            },
            unput: function (e) {
              var t = e.length;
              var r = e.split(/(?:\r\n?|\n)/g);
              this._input = e + this._input;
              this.yytext = this.yytext.substr(0, this.yytext.length - t);
              this.offset -= t;
              var n = this.match.split(/(?:\r\n?|\n)/g);
              this.match = this.match.substr(0, this.match.length - 1);
              this.matched = this.matched.substr(0, this.matched.length - 1);
              if (r.length - 1) {
                this.yylineno -= r.length - 1;
              }
              var a = this.yylloc.range;
              this.yylloc = {
                first_line: this.yylloc.first_line,
                last_line: this.yylineno + 1,
                first_column: this.yylloc.first_column,
                last_column: r
                  ? (r.length === n.length ? this.yylloc.first_column : 0) + n[n.length - r.length].length - r[0].length
                  : this.yylloc.first_column - t,
              };
              if (this.options.ranges) {
                this.yylloc.range = [a[0], a[0] + this.yyleng - t];
              }
              this.yyleng = this.yytext.length;
              return this;
            },
            more: function () {
              this._more = true;
              return this;
            },
            reject: function () {
              if (this.options.backtrack_lexer) {
                this._backtrack = true;
              } else {
                return this.parseError(
                  "Lexical error on line " +
                    (this.yylineno + 1) +
                    ". You can only invoke reject() in the lexer when the lexer is of the backtracking persuasion (options.backtrack_lexer = true).\n" +
                    this.showPosition(),
                  { text: "", token: null, line: this.yylineno }
                );
              }
              return this;
            },
            less: function (e) {
              this.unput(this.match.slice(e));
            },
            pastInput: function () {
              var e = this.matched.substr(0, this.matched.length - this.match.length);
              return (e.length > 20 ? "..." : "") + e.substr(-20).replace(/\n/g, "");
            },
            upcomingInput: function () {
              var e = this.match;
              if (e.length < 20) {
                e += this._input.substr(0, 20 - e.length);
              }
              return (e.substr(0, 20) + (e.length > 20 ? "..." : "")).replace(/\n/g, "");
            },
            showPosition: function () {
              var e = this.pastInput();
              var t = new Array(e.length + 1).join("-");
              return e + this.upcomingInput() + "\n" + t + "^";
            },
            test_match: function (e, t) {
              var r, n, a;
              if (this.options.backtrack_lexer) {
                a = {
                  yylineno: this.yylineno,
                  yylloc: {
                    first_line: this.yylloc.first_line,
                    last_line: this.last_line,
                    first_column: this.yylloc.first_column,
                    last_column: this.yylloc.last_column,
                  },
                  yytext: this.yytext,
                  match: this.match,
                  matches: this.matches,
                  matched: this.matched,
                  yyleng: this.yyleng,
                  offset: this.offset,
                  _more: this._more,
                  _input: this._input,
                  yy: this.yy,
                  conditionStack: this.conditionStack.slice(0),
                  done: this.done,
                };
                if (this.options.ranges) {
                  a.yylloc.range = this.yylloc.range.slice(0);
                }
              }
              n = e[0].match(/(?:\r\n?|\n).*/g);
              if (n) {
                this.yylineno += n.length;
              }
              this.yylloc = {
                first_line: this.yylloc.last_line,
                last_line: this.yylineno + 1,
                first_column: this.yylloc.last_column,
                last_column: n ? n[n.length - 1].length - n[n.length - 1].match(/\r?\n?/)[0].length : this.yylloc.last_column + e[0].length,
              };
              this.yytext += e[0];
              this.match += e[0];
              this.matches = e;
              this.yyleng = this.yytext.length;
              if (this.options.ranges) {
                this.yylloc.range = [this.offset, (this.offset += this.yyleng)];
              }
              this._more = false;
              this._backtrack = false;
              this._input = this._input.slice(e[0].length);
              this.matched += e[0];
              r = this.performAction.call(this, this.yy, this, t, this.conditionStack[this.conditionStack.length - 1]);
              if (this.done && this._input) {
                this.done = false;
              }
              if (r) {
                return r;
              } else if (this._backtrack) {
                for (var i in a) {
                  this[i] = a[i];
                }
                return false;
              }
              return false;
            },
            next: function () {
              if (this.done) {
                return this.EOF;
              }
              if (!this._input) {
                this.done = true;
              }
              var e, t, r, n;
              if (!this._more) {
                this.yytext = "";
                this.match = "";
              }
              var a = this._currentRules();
              for (var i = 0; i < a.length; i++) {
                r = this._input.match(this.rules[a[i]]);
                if (r && (!t || r[0].length > t[0].length)) {
                  t = r;
                  n = i;
                  if (this.options.backtrack_lexer) {
                    e = this.test_match(r, a[i]);
                    if (e !== false) {
                      return e;
                    } else if (this._backtrack) {
                      t = false;
                      continue;
                    } else {
                      return false;
                    }
                  } else if (!this.options.flex) {
                    break;
                  }
                }
              }
              if (t) {
                e = this.test_match(t, a[n]);
                if (e !== false) {
                  return e;
                }
                return false;
              }
              if (this._input === "") {
                return this.EOF;
              } else {
                return this.parseError("Lexical error on line " + (this.yylineno + 1) + ". Unrecognized text.\n" + this.showPosition(), {
                  text: "",
                  token: null,
                  line: this.yylineno,
                });
              }
            },
            lex: function e() {
              var t = this.next();
              if (t) {
                return t;
              } else {
                return this.lex();
              }
            },
            begin: function e(t) {
              this.conditionStack.push(t);
            },
            popState: function e() {
              var t = this.conditionStack.length - 1;
              if (t > 0) {
                return this.conditionStack.pop();
              } else {
                return this.conditionStack[0];
              }
            },
            _currentRules: function e() {
              if (this.conditionStack.length && this.conditionStack[this.conditionStack.length - 1]) {
                return this.conditions[this.conditionStack[this.conditionStack.length - 1]].rules;
              } else {
                return this.conditions["INITIAL"].rules;
              }
            },
            topState: function e(t) {
              t = this.conditionStack.length - 1 - Math.abs(t || 0);
              if (t >= 0) {
                return this.conditionStack[t];
              } else {
                return "INITIAL";
              }
            },
            pushState: function e(t) {
              this.begin(t);
            },
            stateStackSize: function e() {
              return this.conditionStack.length;
            },
            options: { "case-insensitive": true },
            performAction: function e(t, r, n, a) {
              switch (n) {
                case 0:
                  t.getLogger().trace("Found comment", r.yytext);
                  return 6;
                case 1:
                  return 8;
                case 2:
                  this.begin("CLASS");
                  break;
                case 3:
                  this.popState();
                  return 16;
                case 4:
                  this.popState();
                  break;
                case 5:
                  t.getLogger().trace("Begin icon");
                  this.begin("ICON");
                  break;
                case 6:
                  t.getLogger().trace("SPACELINE");
                  return 6;
                case 7:
                  return 7;
                case 8:
                  return 15;
                case 9:
                  t.getLogger().trace("end icon");
                  this.popState();
                  break;
                case 10:
                  t.getLogger().trace("Exploding node");
                  this.begin("NODE");
                  return 19;
                case 11:
                  t.getLogger().trace("Cloud");
                  this.begin("NODE");
                  return 19;
                case 12:
                  t.getLogger().trace("Explosion Bang");
                  this.begin("NODE");
                  return 19;
                case 13:
                  t.getLogger().trace("Cloud Bang");
                  this.begin("NODE");
                  return 19;
                case 14:
                  this.begin("NODE");
                  return 19;
                case 15:
                  this.begin("NODE");
                  return 19;
                case 16:
                  this.begin("NODE");
                  return 19;
                case 17:
                  this.begin("NODE");
                  return 19;
                case 18:
                  return 13;
                case 19:
                  return 22;
                case 20:
                  return 11;
                case 21:
                  this.begin("NSTR2");
                  break;
                case 22:
                  return "NODE_DESCR";
                case 23:
                  this.popState();
                  break;
                case 24:
                  t.getLogger().trace("Starting NSTR");
                  this.begin("NSTR");
                  break;
                case 25:
                  t.getLogger().trace("description:", r.yytext);
                  return "NODE_DESCR";
                case 26:
                  this.popState();
                  break;
                case 27:
                  this.popState();
                  t.getLogger().trace("node end ))");
                  return "NODE_DEND";
                case 28:
                  this.popState();
                  t.getLogger().trace("node end )");
                  return "NODE_DEND";
                case 29:
                  this.popState();
                  t.getLogger().trace("node end ...", r.yytext);
                  return "NODE_DEND";
                case 30:
                  this.popState();
                  t.getLogger().trace("node end ((");
                  return "NODE_DEND";
                case 31:
                  this.popState();
                  t.getLogger().trace("node end (-");
                  return "NODE_DEND";
                case 32:
                  this.popState();
                  t.getLogger().trace("node end (-");
                  return "NODE_DEND";
                case 33:
                  this.popState();
                  t.getLogger().trace("node end ((");
                  return "NODE_DEND";
                case 34:
                  this.popState();
                  t.getLogger().trace("node end ((");
                  return "NODE_DEND";
                case 35:
                  t.getLogger().trace("Long description:", r.yytext);
                  return 20;
                case 36:
                  t.getLogger().trace("Long description:", r.yytext);
                  return 20;
              }
            },
            rules: [
              /^(?:\s*%%.*)/i,
              /^(?:mindmap\b)/i,
              /^(?::::)/i,
              /^(?:.+)/i,
              /^(?:\n)/i,
              /^(?:::icon\()/i,
              /^(?:[\s]+[\n])/i,
              /^(?:[\n]+)/i,
              /^(?:[^\)]+)/i,
              /^(?:\))/i,
              /^(?:-\))/i,
              /^(?:\(-)/i,
              /^(?:\)\))/i,
              /^(?:\))/i,
              /^(?:\(\()/i,
              /^(?:\{\{)/i,
              /^(?:\()/i,
              /^(?:\[)/i,
              /^(?:[\s]+)/i,
              /^(?:[^\(\[\n\)\{\}]+)/i,
              /^(?:$)/i,
              /^(?:["][`])/i,
              /^(?:[^`"]+)/i,
              /^(?:[`]["])/i,
              /^(?:["])/i,
              /^(?:[^"]+)/i,
              /^(?:["])/i,
              /^(?:[\)]\))/i,
              /^(?:[\)])/i,
              /^(?:[\]])/i,
              /^(?:\}\})/i,
              /^(?:\(-)/i,
              /^(?:-\))/i,
              /^(?:\(\()/i,
              /^(?:\()/i,
              /^(?:[^\)\]\(\}]+)/i,
              /^(?:.+(?!\(\())/i,
            ],
            conditions: {
              CLASS: { rules: [3, 4], inclusive: false },
              ICON: { rules: [8, 9], inclusive: false },
              NSTR2: { rules: [22, 23], inclusive: false },
              NSTR: { rules: [25, 26], inclusive: false },
              NODE: { rules: [21, 24, 27, 28, 29, 30, 31, 32, 33, 34, 35, 36], inclusive: false },
              INITIAL: { rules: [0, 1, 2, 5, 6, 7, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20], inclusive: true },
            },
          };
          return e;
        })();
        y.lexer = m;
        function b() {
          this.yy = {};
        }
        b.prototype = y;
        y.Parser = b;
        return new b();
      })();
      m.parser = m;
      const b = m;
      const x = (e) => (0, n.d)(e, (0, n.c)());
      let w = [];
      let E = 0;
      let T = {};
      const _ = () => {
        w = [];
        E = 0;
        T = {};
      };
      const D = function (e) {
        for (let t = w.length - 1; t >= 0; t--) {
          if (w[t].level < e) {
            return w[t];
          }
        }
        return null;
      };
      const C = () => (w.length > 0 ? w[0] : null);
      const N = (e, t, r, a) => {
        n.l.info("addNode", e, t, r, a);
        const i = (0, n.c)();
        const o = { id: E++, nodeId: x(t), level: e, descr: x(r), type: a, children: [], width: (0, n.c)().mindmap.maxNodeWidth };
        switch (o.type) {
          case A.ROUNDED_RECT:
            o.padding = 2 * i.mindmap.padding;
            break;
          case A.RECT:
            o.padding = 2 * i.mindmap.padding;
            break;
          case A.HEXAGON:
            o.padding = 2 * i.mindmap.padding;
            break;
          default:
            o.padding = i.mindmap.padding;
        }
        const s = D(e);
        if (s) {
          s.children.push(o);
          w.push(o);
        } else {
          if (w.length === 0) {
            w.push(o);
          } else {
            let e = new Error('There can be only one root. No parent could be found for ("' + o.descr + '")');
            e.hash = {
              text: "branch " + name,
              token: "branch " + name,
              line: "1",
              loc: { first_line: 1, last_line: 1, first_column: 1, last_column: 1 },
              expected: ['"checkout ' + name + '"'],
            };
            throw e;
          }
        }
      };
      const A = { DEFAULT: 0, NO_BORDER: 0, ROUNDED_RECT: 1, RECT: 2, CIRCLE: 3, CLOUD: 4, BANG: 5, HEXAGON: 6 };
      const L = (e, t) => {
        n.l.debug("In get type", e, t);
        switch (e) {
          case "[":
            return A.RECT;
          case "(":
            return t === ")" ? A.ROUNDED_RECT : A.CLOUD;
          case "((":
            return A.CIRCLE;
          case ")":
            return A.CLOUD;
          case "))":
            return A.BANG;
          case "{{":
            return A.HEXAGON;
          default:
            return A.DEFAULT;
        }
      };
      const I = (e, t) => {
        T[e] = t;
      };
      const S = (e) => {
        const t = w[w.length - 1];
        if (e && e.icon) {
          t.icon = x(e.icon);
        }
        if (e && e.class) {
          t.class = x(e.class);
        }
      };
      const k = (e) => {
        switch (e) {
          case A.DEFAULT:
            return "no-border";
          case A.RECT:
            return "rect";
          case A.ROUNDED_RECT:
            return "rounded-rect";
          case A.CIRCLE:
            return "circle";
          case A.CLOUD:
            return "cloud";
          case A.BANG:
            return "bang";
          case A.HEXAGON:
            return "hexgon";
          default:
            return "no-border";
        }
      };
      let O;
      const M = (e) => {
        O = e;
      };
      const P = () => n.l;
      const R = (e) => w[e];
      const B = (e) => T[e];
      const F = Object.freeze(
        Object.defineProperty(
          {
            __proto__: null,
            addNode: N,
            clear: _,
            decorateNode: S,
            getElementById: B,
            getLogger: P,
            getMindmap: C,
            getNodeById: R,
            getType: L,
            nodeType: A,
            get parseError() {
              return O;
            },
            sanitizeText: x,
            setElementForId: I,
            setErrorHandler: M,
            type2Str: k,
          },
          Symbol.toStringTag,
          { value: "Module" }
        )
      );
      const z = 12;
      const G = function (e, t, r) {
        const n = 5;
        e.append("path")
          .attr("id", "node-" + t.id)
          .attr("class", "node-bkg node-" + k(t.type))
          .attr("d", `M0 ${t.height - n} v${-t.height + 2 * n} q0,-5 5,-5 h${t.width - 2 * n} q5,0 5,5 v${t.height - n} H0 Z`);
        e.append("line")
          .attr("class", "node-line-" + r)
          .attr("x1", 0)
          .attr("y1", t.height)
          .attr("x2", t.width)
          .attr("y2", t.height);
      };
      const Y = function (e, t) {
        e.append("rect")
          .attr("id", "node-" + t.id)
          .attr("class", "node-bkg node-" + k(t.type))
          .attr("height", t.height)
          .attr("width", t.width);
      };
      const X = function (e, t) {
        const r = t.width;
        const n = t.height;
        const a = 0.15 * r;
        const i = 0.25 * r;
        const o = 0.35 * r;
        const s = 0.2 * r;
        e.append("path")
          .attr("id", "node-" + t.id)
          .attr("class", "node-bkg node-" + k(t.type))
          .attr(
            "d",
            `M0 0 a${a},${a} 0 0,1 ${r * 0.25},${-1 * r * 0.1}\n      a${o},${o} 1 0,1 ${r * 0.4},${-1 * r * 0.1}\n      a${i},${i} 1 0,1 ${r * 0.35},${1 * r * 0.2}\n\n      a${a},${a} 1 0,1 ${r * 0.15},${1 * n * 0.35}\n      a${s},${s} 1 0,1 ${-1 * r * 0.15},${1 * n * 0.65}\n\n      a${i},${a} 1 0,1 ${-1 * r * 0.25},${r * 0.15}\n      a${o},${o} 1 0,1 ${-1 * r * 0.5},${0}\n      a${a},${a} 1 0,1 ${-1 * r * 0.25},${-1 * r * 0.15}\n\n      a${a},${a} 1 0,1 ${-1 * r * 0.1},${-1 * n * 0.35}\n      a${s},${s} 1 0,1 ${r * 0.1},${-1 * n * 0.65}\n\n    H0 V0 Z`
          );
      };
      const V = function (e, t) {
        const r = t.width;
        const n = t.height;
        const a = 0.15 * r;
        e.append("path")
          .attr("id", "node-" + t.id)
          .attr("class", "node-bkg node-" + k(t.type))
          .attr(
            "d",
            `M0 0 a${a},${a} 1 0,0 ${r * 0.25},${-1 * n * 0.1}\n      a${a},${a} 1 0,0 ${r * 0.25},${0}\n      a${a},${a} 1 0,0 ${r * 0.25},${0}\n      a${a},${a} 1 0,0 ${r * 0.25},${1 * n * 0.1}\n\n      a${a},${a} 1 0,0 ${r * 0.15},${1 * n * 0.33}\n      a${a * 0.8},${a * 0.8} 1 0,0 ${0},${1 * n * 0.34}\n      a${a},${a} 1 0,0 ${-1 * r * 0.15},${1 * n * 0.33}\n\n      a${a},${a} 1 0,0 ${-1 * r * 0.25},${n * 0.15}\n      a${a},${a} 1 0,0 ${-1 * r * 0.25},${0}\n      a${a},${a} 1 0,0 ${-1 * r * 0.25},${0}\n      a${a},${a} 1 0,0 ${-1 * r * 0.25},${-1 * n * 0.15}\n\n      a${a},${a} 1 0,0 ${-1 * r * 0.1},${-1 * n * 0.33}\n      a${a * 0.8},${a * 0.8} 1 0,0 ${0},${-1 * n * 0.34}\n      a${a},${a} 1 0,0 ${r * 0.1},${-1 * n * 0.33}\n\n    H0 V0 Z`
          );
      };
      const U = function (e, t) {
        e.append("circle")
          .attr("id", "node-" + t.id)
          .attr("class", "node-bkg node-" + k(t.type))
          .attr("r", t.width / 2);
      };
      function j(e, t, r, n, a) {
        return e
          .insert("polygon", ":first-child")
          .attr(
            "points",
            n
              .map(function (e) {
                return e.x + "," + e.y;
              })
              .join(" ")
          )
          .attr("transform", "translate(" + (a.width - t) / 2 + ", " + r + ")");
      }
      const H = function (e, t) {
        const r = t.height;
        const n = 4;
        const a = r / n;
        const i = t.width - t.padding + 2 * a;
        const o = [
          { x: a, y: 0 },
          { x: i - a, y: 0 },
          { x: i, y: -r / 2 },
          { x: i - a, y: -r },
          { x: a, y: -r },
          { x: 0, y: -r / 2 },
        ];
        j(e, i, r, o, t);
      };
      const q = function (e, t) {
        e.append("rect")
          .attr("id", "node-" + t.id)
          .attr("class", "node-bkg node-" + k(t.type))
          .attr("height", t.height)
          .attr("rx", t.padding)
          .attr("ry", t.padding)
          .attr("width", t.width);
      };
      const W = function (e, t, r, n) {
        const a = n.htmlLabels;
        const o = r % (z - 1);
        const s = e.append("g");
        t.section = o;
        let l = "section-" + o;
        if (o < 0) {
          l += " section-root";
        }
        s.attr("class", (t.class ? t.class + " " : "") + "mindmap-node " + l);
        const u = s.append("g");
        const c = s.append("g");
        const v = t.descr.replace(/(<br\/*>)/g, "\n");
        (0, i.a)(c, v, { useHtmlLabels: a, width: t.width, classes: "mindmap-node-label" });
        if (!a) {
          c.attr("dy", "1em").attr("alignment-baseline", "middle").attr("dominant-baseline", "middle").attr("text-anchor", "middle");
        }
        const f = c.node().getBBox();
        const h = n.fontSize.replace ? n.fontSize.replace("px", "") : n.fontSize;
        t.height = f.height + h * 1.1 * 0.5 + t.padding;
        t.width = f.width + 2 * t.padding;
        if (t.icon) {
          if (t.type === A.CIRCLE) {
            t.height += 50;
            t.width += 50;
            const e = s.append("foreignObject").attr("height", "50px").attr("width", t.width).attr("style", "text-align: center;");
            e.append("div")
              .attr("class", "icon-container")
              .append("i")
              .attr("class", "node-icon-" + o + " " + t.icon);
            c.attr("transform", "translate(" + t.width / 2 + ", " + (t.height / 2 - 1.5 * t.padding) + ")");
          } else {
            t.width += 50;
            const e = t.height;
            t.height = Math.max(e, 60);
            const r = Math.abs(t.height - e);
            const n = s
              .append("foreignObject")
              .attr("width", "60px")
              .attr("height", t.height)
              .attr("style", "text-align: center;margin-top:" + r / 2 + "px;");
            n.append("div")
              .attr("class", "icon-container")
              .append("i")
              .attr("class", "node-icon-" + o + " " + t.icon);
            c.attr("transform", "translate(" + (25 + t.width / 2) + ", " + (r / 2 + t.padding / 2) + ")");
          }
        } else {
          if (!a) {
            const e = t.width / 2;
            const r = t.padding / 2;
            c.attr("transform", "translate(" + e + ", " + r + ")");
          } else {
            const e = (t.width - f.width) / 2;
            const r = (t.height - f.height) / 2;
            c.attr("transform", "translate(" + e + ", " + r + ")");
          }
        }
        switch (t.type) {
          case A.DEFAULT:
            G(u, t, o);
            break;
          case A.ROUNDED_RECT:
            q(u, t);
            break;
          case A.RECT:
            Y(u, t);
            break;
          case A.CIRCLE:
            u.attr("transform", "translate(" + t.width / 2 + ", " + +t.height / 2 + ")");
            U(u, t);
            break;
          case A.CLOUD:
            X(u, t);
            break;
          case A.BANG:
            V(u, t);
            break;
          case A.HEXAGON:
            H(u, t);
            break;
        }
        I(t.id, s);
        return t.height;
      };
      const $ = function e(t, r, n, a, i) {
        const o = i % (z - 1);
        const s = n.x + n.width / 2;
        const l = n.y + n.height / 2;
        const u = r.x + r.width / 2;
        const c = r.y + r.height / 2;
        const v = u > s ? s + Math.abs(s - u) / 2 : s - Math.abs(s - u) / 2;
        const f = c > l ? l + Math.abs(l - c) / 2 : l - Math.abs(l - c) / 2;
        const h = u > s ? Math.abs(s - v) / 2 + s : -Math.abs(s - v) / 2 + s;
        const d = c > l ? Math.abs(l - f) / 2 + l : -Math.abs(l - f) / 2 + l;
        t.append("path")
          .attr(
            "d",
            n.direction === "TB" || n.direction === "BT" ? `M${s},${l} Q${s},${d} ${v},${f} T${u},${c}` : `M${s},${l} Q${h},${l} ${v},${f} T${u},${c}`
          )
          .attr("class", "edge section-edge-" + o + " edge-depth-" + a);
      };
      const K = function (e) {
        const t = B(e.id);
        const r = e.x || 0;
        const n = e.y || 0;
        t.attr("transform", "translate(" + r + "," + n + ")");
      };
      const Z = { drawNode: W, positionNode: K, drawEdge: $ };
      s().use(u());
      function Q(e, t, r, n) {
        Z.drawNode(e, t, r, n);
        if (t.children) {
          t.children.forEach((t, a) => {
            Q(e, t, r < 0 ? a : r, n);
          });
        }
      }
      function J(e, t) {
        t.edges().map((t, r) => {
          const a = t.data();
          if (t[0]._private.bodyBounds) {
            const i = t[0]._private.rscratch;
            n.l.trace("Edge: ", r, a);
            e.insert("path")
              .attr("d", `M ${i.startX},${i.startY} L ${i.midX},${i.midY} L${i.endX},${i.endY} `)
              .attr("class", "edge section-edge-" + a.section + " edge-depth-" + a.depth);
          }
        });
      }
      function ee(e, t, r, n) {
        t.add({
          group: "nodes",
          data: { id: e.id, labelText: e.descr, height: e.height, width: e.width, level: n, nodeId: e.id, padding: e.padding, type: e.type },
          position: { x: e.x, y: e.y },
        });
        if (e.children) {
          e.children.forEach((a) => {
            ee(a, t, r, n + 1);
            t.add({ group: "edges", data: { id: `${e.id}_${a.id}`, source: e.id, target: a.id, depth: n, section: a.section } });
          });
        }
      }
      function te(e, t) {
        return new Promise((r) => {
          const i = (0, a.Ys)("body").append("div").attr("id", "cy").attr("style", "display:none");
          const o = s()({ container: document.getElementById("cy"), style: [{ selector: "edge", style: { "curve-style": "bezier" } }] });
          i.remove();
          ee(e, o, t, 0);
          o.nodes().forEach(function (e) {
            e.layoutDimensions = () => {
              const t = e.data();
              return { w: t.width, h: t.height };
            };
          });
          o.layout({ name: "cose-bilkent", quality: "proof", styleEnabled: false, animate: false }).run();
          o.ready((e) => {
            n.l.info("Ready", e);
            r(o);
          });
        });
      }
      function re(e) {
        e.nodes().map((e, t) => {
          const r = e.data();
          r.x = e.position().x;
          r.y = e.position().y;
          Z.positionNode(r);
          const a = B(r.nodeId);
          n.l.info("Id:", t, "Position: (", e.position().x, ", ", e.position().y, ")", r);
          a.attr("transform", `translate(${e.position().x - r.width / 2}, ${e.position().y - r.height / 2})`);
          a.attr("attr", `apa-${t})`);
        });
      }
      const ne = async (e, t, r, i) => {
        const o = (0, n.c)();
        o.htmlLabels = false;
        n.l.debug("Rendering mindmap diagram\n" + e, i.parser);
        const s = (0, n.c)().securityLevel;
        let l;
        if (s === "sandbox") {
          l = (0, a.Ys)("#i" + t);
        }
        const u = s === "sandbox" ? (0, a.Ys)(l.nodes()[0].contentDocument.body) : (0, a.Ys)("body");
        const c = u.select("#" + t);
        c.append("g");
        const v = i.db.getMindmap();
        const f = c.append("g");
        f.attr("class", "mindmap-edges");
        const h = c.append("g");
        h.attr("class", "mindmap-nodes");
        Q(h, v, -1, o);
        const d = await te(v, o);
        J(f, d);
        re(d);
        (0, n.o)(void 0, c, o.mindmap.padding, o.mindmap.useMaxWidth);
      };
      const ae = { draw: ne };
      const ie = (e) => {
        let t = "";
        for (let r = 0; r < e.THEME_COLOR_LIMIT; r++) {
          e["lineColor" + r] = e["lineColor" + r] || e["cScaleInv" + r];
          if ((0, c.Z)(e["lineColor" + r])) {
            e["lineColor" + r] = (0, v.Z)(e["lineColor" + r], 20);
          } else {
            e["lineColor" + r] = (0, f.Z)(e["lineColor" + r], 20);
          }
        }
        for (let r = 0; r < e.THEME_COLOR_LIMIT; r++) {
          const n = "" + (17 - 3 * r);
          t += `\n    .section-${r - 1} rect, .section-${r - 1} path, .section-${r - 1} circle, .section-${r - 1} polygon, .section-${r - 1} path  {\n      fill: ${e["cScale" + r]};\n    }\n    .section-${r - 1} text {\n     fill: ${e["cScaleLabel" + r]};\n    }\n    .node-icon-${r - 1} {\n      font-size: 40px;\n      color: ${e["cScaleLabel" + r]};\n    }\n    .section-edge-${r - 1}{\n      stroke: ${e["cScale" + r]};\n    }\n    .edge-depth-${r - 1}{\n      stroke-width: ${n};\n    }\n    .section-${r - 1} line {\n      stroke: ${e["cScaleInv" + r]} ;\n      stroke-width: 3;\n    }\n\n    .disabled, .disabled circle, .disabled text {\n      fill: lightgray;\n    }\n    .disabled text {\n      fill: #efefef;\n    }\n    `;
        }
        return t;
      };
      const oe = (e) =>
        `\n  .edge {\n    stroke-width: 3;\n  }\n  ${ie(e)}\n  .section-root rect, .section-root path, .section-root circle, .section-root polygon  {\n    fill: ${e.git0};\n  }\n  .section-root text {\n    fill: ${e.gitBranchLabel0};\n  }\n  .icon-container {\n    height:100%;\n    display: flex;\n    justify-content: center;\n    align-items: center;\n  }\n  .edge {\n    fill: none;\n  }\n  .mindmap-node-label {\n    dy: 1em;\n    alignment-baseline: middle;\n    text-anchor: middle;\n    dominant-baseline: middle;\n    text-align: center;\n  }\n`;
      const se = oe;
      const le = { db: F, renderer: ae, parser: b, styles: se };
    },
  },
]);
