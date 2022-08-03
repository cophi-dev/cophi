"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("components_voxel-dog_js",{

/***/ "./components/voxel-dog.js":
/*!*********************************!*\
  !*** ./components/voxel-dog.js ***!
  \*********************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var three__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! three */ \"./node_modules/three/build/three.module.js\");\n/* harmony import */ var three_examples_jsm_controls_OrbitControls__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! three/examples/jsm/controls/OrbitControls */ \"./node_modules/three/examples/jsm/controls/OrbitControls.js\");\n/* harmony import */ var _lib_model__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../lib/model */ \"./lib/model.js\");\n/* harmony import */ var _voxel_dog_loader__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./voxel-dog-loader */ \"./components/voxel-dog-loader.js\");\nvar _this = undefined;\n\n\n\n\n\n\nvar _s = $RefreshSig$();\nfunction easeOutCirc(x) {\n    return Math.sqrt(1 - Math.pow(x - 1, 4));\n}\nvar VoxelDog = function() {\n    _s();\n    var refContainer = (0,react__WEBPACK_IMPORTED_MODULE_1__.useRef)();\n    var ref = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(true), loading = ref[0], setLoading = ref[1];\n    var ref1 = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(), renderer = ref1[0], setRenderer = ref1[1];\n    var ref2 = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(), _camera = ref2[0], setCamera = ref2[1];\n    var ref3 = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(new three__WEBPACK_IMPORTED_MODULE_5__.Vector3(0.5, 1.2, 0)), target = ref3[0];\n    var ref4 = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(new three__WEBPACK_IMPORTED_MODULE_5__.Vector3(200 * Math.sin(0.2 * Math.PI), 100, 200 * Math.cos(0.2 * Math.PI))), initialCameraPosition = ref4[0];\n    var ref5 = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(new three__WEBPACK_IMPORTED_MODULE_5__.Scene()), scene = ref5[0];\n    var ref6 = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(), _controls = ref6[0], setControls = ref6[1];\n    var handleWindowResize = (0,react__WEBPACK_IMPORTED_MODULE_1__.useCallback)(function() {\n        var container = refContainer.current;\n        if (container && renderer) {\n            var scW = container.clientWidth;\n            var scH = container.clientHeight;\n            renderer.setSize(scW, scH);\n        }\n    }, [\n        renderer\n    ]);\n    /* eslint-disable react-hooks/exhaustive-deps */ (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(function() {\n        var container = refContainer.current;\n        if (container && !renderer) {\n            var scW = container.clientWidth;\n            var scH = container.clientHeight;\n            var renderer1 = new three__WEBPACK_IMPORTED_MODULE_5__.WebGLRenderer({\n                antialias: true,\n                alpha: true\n            });\n            renderer1.setPixelRatio(window.devicePixelRatio);\n            renderer1.setSize(scW, scH);\n            renderer1.outputEncoding = three__WEBPACK_IMPORTED_MODULE_5__.sRGBEncoding;\n            container.appendChild(renderer1.domElement);\n            setRenderer(renderer1);\n            // 640 -> 240\n            // 8   -> 6\n            var scale = scH * 0.00005 + 0.8;\n            var camera = new three__WEBPACK_IMPORTED_MODULE_5__.OrthographicCamera(-scale, scale, scale, -scale, 0.01, 50000);\n            camera.position.copy(initialCameraPosition);\n            camera.lookAt(target);\n            setCamera(camera);\n            var ambientLight = new three__WEBPACK_IMPORTED_MODULE_5__.AmbientLight(0xcccccc, 1);\n            scene.add(ambientLight);\n            var controls = new three_examples_jsm_controls_OrbitControls__WEBPACK_IMPORTED_MODULE_2__.OrbitControls(camera, renderer1.domElement);\n            controls.autoRotate = false;\n            controls.target = target;\n            setControls(controls);\n            (0,_lib_model__WEBPACK_IMPORTED_MODULE_3__.loadGLTFModel)(scene, \"/dog.glb\", {\n                receiveShadow: false,\n                castShadow: false\n            }).then(function() {\n                animate();\n                setLoading(false);\n            });\n            var req = null;\n            var frame = 0;\n            var animate = function() {\n                req = requestAnimationFrame(animate);\n                frame = frame <= 100 ? frame + 1 : frame;\n                if (frame <= 100) {\n                    var p = initialCameraPosition;\n                    var rotSpeed = -easeOutCirc(frame / 100) * Math.PI * 20;\n                    camera.position.y = 100;\n                    camera.position.x = p.x * Math.cos(rotSpeed) + p.z * Math.sin(rotSpeed);\n                    camera.position.z = p.z * Math.cos(rotSpeed) - p.x * Math.sin(rotSpeed);\n                    camera.lookAt(target);\n                } else {\n                    controls.update();\n                }\n                renderer1.render(scene, camera);\n            };\n            return function() {\n                console.log(\"unmount\");\n                cancelAnimationFrame(req);\n                renderer1.dispose();\n            };\n        }\n    }, []);\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(function() {\n        window.addEventListener(\"resize\", handleWindowResize, false);\n        return function() {\n            window.removeEventListener(\"resize\", handleWindowResize, false);\n        };\n    }, [\n        renderer,\n        handleWindowResize\n    ]);\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_voxel_dog_loader__WEBPACK_IMPORTED_MODULE_4__.DogContainer, {\n        ref: refContainer,\n        children: loading && /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_voxel_dog_loader__WEBPACK_IMPORTED_MODULE_4__.DogSpinner, {}, void 0, false, {\n            fileName: \"/Users/cophi/Documents/Projects/cophi/components/voxel-dog.js\",\n            lineNumber: 125,\n            columnNumber: 50\n        }, _this)\n    }, void 0, false, {\n        fileName: \"/Users/cophi/Documents/Projects/cophi/components/voxel-dog.js\",\n        lineNumber: 125,\n        columnNumber: 5\n    }, _this);\n};\n_s(VoxelDog, \"jzOqYPjP5XfLqMi7u3TjiwgRpPk=\");\n_c = VoxelDog;\n/* harmony default export */ __webpack_exports__[\"default\"] = (VoxelDog);\nvar _c;\n$RefreshReg$(_c, \"VoxelDog\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,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LFdBQU07Z0JBQ1h1QixPQUFPLENBQUNDLEdBQUcsQ0FBQyxTQUFTLENBQUM7Z0JBQ3RCQyxvQkFBb0IsQ0FBQ1gsR0FBRyxDQUFDO2dCQUN6Qi9DLFNBQVEsQ0FBQzJELE9BQU8sRUFBRTthQUNuQjtTQUNGO0tBQ0YsRUFBRSxFQUFFLENBQUM7SUFFTjVFLGdEQUFTLENBQUMsV0FBTTtRQUNkMkMsTUFBTSxDQUFDa0MsZ0JBQWdCLENBQUMsUUFBUSxFQUFFOUMsa0JBQWtCLEVBQUUsS0FBSyxDQUFDO1FBQzVELE9BQU8sV0FBTTtZQUNYWSxNQUFNLENBQUNtQyxtQkFBbUIsQ0FBQyxRQUFRLEVBQUUvQyxrQkFBa0IsRUFBRSxLQUFLLENBQUM7U0FDaEU7S0FDRixFQUFFO1FBQUNkLFFBQVE7UUFBRWMsa0JBQWtCO0tBQUMsQ0FBQztJQUVsQyxxQkFDRSw4REFBQ3hCLDJEQUFZO1FBQUN3RSxHQUFHLEVBQUVqRSxZQUFZO2tCQUFHQyxPQUFPLGtCQUFJLDhEQUFDVCx5REFBVTs7OztpQkFBRzs7Ozs7YUFBZ0IsQ0FDNUU7Q0FDRjtHQXBIS08sUUFBUTtBQUFSQSxLQUFBQSxRQUFRO0FBc0hkLCtEQUFlQSxRQUFRIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL2NvbXBvbmVudHMvdm94ZWwtZG9nLmpzP2NmNGEiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgdXNlU3RhdGUsIHVzZUVmZmVjdCwgdXNlUmVmLCB1c2VDYWxsYmFjayB9IGZyb20gJ3JlYWN0J1xuaW1wb3J0ICogYXMgVEhSRUUgZnJvbSAndGhyZWUnXG5pbXBvcnQgeyBPcmJpdENvbnRyb2xzIH0gZnJvbSAndGhyZWUvZXhhbXBsZXMvanNtL2NvbnRyb2xzL09yYml0Q29udHJvbHMnXG5pbXBvcnQgeyBsb2FkR0xURk1vZGVsIH0gZnJvbSAnLi4vbGliL21vZGVsJ1xuaW1wb3J0IHsgRG9nU3Bpbm5lciwgRG9nQ29udGFpbmVyIH0gZnJvbSAnLi92b3hlbC1kb2ctbG9hZGVyJ1xuXG5mdW5jdGlvbiBlYXNlT3V0Q2lyYyh4KSB7XG4gIHJldHVybiBNYXRoLnNxcnQoMSAtIE1hdGgucG93KHggLSAxLCA0KSlcbn1cblxuY29uc3QgVm94ZWxEb2cgPSAoKSA9PiB7XG4gIGNvbnN0IHJlZkNvbnRhaW5lciA9IHVzZVJlZigpXG4gIGNvbnN0IFtsb2FkaW5nLCBzZXRMb2FkaW5nXSA9IHVzZVN0YXRlKHRydWUpXG4gIGNvbnN0IFtyZW5kZXJlciwgc2V0UmVuZGVyZXJdID0gdXNlU3RhdGUoKVxuICBjb25zdCBbX2NhbWVyYSwgc2V0Q2FtZXJhXSA9IHVzZVN0YXRlKClcbiAgY29uc3QgW3RhcmdldF0gPSB1c2VTdGF0ZShuZXcgVEhSRUUuVmVjdG9yMygwLjUsIDEuMiwgMCkpXG4gIGNvbnN0IFtpbml0aWFsQ2FtZXJhUG9zaXRpb25dID0gdXNlU3RhdGUoXG4gICAgbmV3IFRIUkVFLlZlY3RvcjMoXG4gICAgICAyMDAgKiBNYXRoLnNpbigwLjIgKiBNYXRoLlBJKSxcbiAgICAgIDEwMCxcbiAgICAgIDIwMCAqIE1hdGguY29zKDAuMiAqIE1hdGguUEkpXG4gICAgKVxuICApXG4gIGNvbnN0IFtzY2VuZV0gPSB1c2VTdGF0ZShuZXcgVEhSRUUuU2NlbmUoKSlcbiAgY29uc3QgW19jb250cm9scywgc2V0Q29udHJvbHNdID0gdXNlU3RhdGUoKVxuXG4gIGNvbnN0IGhhbmRsZVdpbmRvd1Jlc2l6ZSA9IHVzZUNhbGxiYWNrKCgpID0+IHtcbiAgICBjb25zdCB7IGN1cnJlbnQ6IGNvbnRhaW5lciB9ID0gcmVmQ29udGFpbmVyXG4gICAgaWYgKGNvbnRhaW5lciAmJiByZW5kZXJlcikge1xuICAgICAgY29uc3Qgc2NXID0gY29udGFpbmVyLmNsaWVudFdpZHRoXG4gICAgICBjb25zdCBzY0ggPSBjb250YWluZXIuY2xpZW50SGVpZ2h0XG5cbiAgICAgIHJlbmRlcmVyLnNldFNpemUoc2NXLCBzY0gpXG4gICAgfVxuICB9LCBbcmVuZGVyZXJdKVxuXG4gIC8qIGVzbGludC1kaXNhYmxlIHJlYWN0LWhvb2tzL2V4aGF1c3RpdmUtZGVwcyAqL1xuICB1c2VFZmZlY3QoKCkgPT4ge1xuICAgIGNvbnN0IHsgY3VycmVudDogY29udGFpbmVyIH0gPSByZWZDb250YWluZXJcbiAgICBpZiAoY29udGFpbmVyICYmICFyZW5kZXJlcikge1xuICAgICAgY29uc3Qgc2NXID0gY29udGFpbmVyLmNsaWVudFdpZHRoXG4gICAgICBjb25zdCBzY0ggPSBjb250YWluZXIuY2xpZW50SGVpZ2h0XG5cbiAgICAgIGNvbnN0IHJlbmRlcmVyID0gbmV3IFRIUkVFLldlYkdMUmVuZGVyZXIoe1xuICAgICAgICBhbnRpYWxpYXM6IHRydWUsXG4gICAgICAgIGFscGhhOiB0cnVlXG4gICAgICB9KVxuICAgICAgcmVuZGVyZXIuc2V0UGl4ZWxSYXRpbyh3aW5kb3cuZGV2aWNlUGl4ZWxSYXRpbylcbiAgICAgIHJlbmRlcmVyLnNldFNpemUoc2NXLCBzY0gpXG4gICAgICByZW5kZXJlci5vdXRwdXRFbmNvZGluZyA9IFRIUkVFLnNSR0JFbmNvZGluZ1xuICAgICAgY29udGFpbmVyLmFwcGVuZENoaWxkKHJlbmRlcmVyLmRvbUVsZW1lbnQpXG4gICAgICBzZXRSZW5kZXJlcihyZW5kZXJlcilcblxuICAgICAgLy8gNjQwIC0+IDI0MFxuICAgICAgLy8gOCAgIC0+IDZcbiAgICAgIGNvbnN0IHNjYWxlID0gc2NIICogMC4wMDAwNSArIDAuOFxuICAgICAgY29uc3QgY2FtZXJhID0gbmV3IFRIUkVFLk9ydGhvZ3JhcGhpY0NhbWVyYShcbiAgICAgICAgLXNjYWxlLFxuICAgICAgICBzY2FsZSxcbiAgICAgICAgc2NhbGUsXG4gICAgICAgIC1zY2FsZSxcbiAgICAgICAgMC4wMSxcbiAgICAgICAgNTAwMDBcbiAgICAgIClcbiAgICAgIGNhbWVyYS5wb3NpdGlvbi5jb3B5KGluaXRpYWxDYW1lcmFQb3NpdGlvbilcbiAgICAgIGNhbWVyYS5sb29rQXQodGFyZ2V0KVxuICAgICAgc2V0Q2FtZXJhKGNhbWVyYSlcblxuICAgICAgY29uc3QgYW1iaWVudExpZ2h0ID0gbmV3IFRIUkVFLkFtYmllbnRMaWdodCgweGNjY2NjYywgMSlcbiAgICAgIHNjZW5lLmFkZChhbWJpZW50TGlnaHQpXG5cbiAgICAgIGNvbnN0IGNvbnRyb2xzID0gbmV3IE9yYml0Q29udHJvbHMoY2FtZXJhLCByZW5kZXJlci5kb21FbGVtZW50KVxuICAgICAgY29udHJvbHMuYXV0b1JvdGF0ZSA9IGZhbHNlXG4gICAgICBjb250cm9scy50YXJnZXQgPSB0YXJnZXRcbiAgICAgIHNldENvbnRyb2xzKGNvbnRyb2xzKVxuXG4gICAgICBsb2FkR0xURk1vZGVsKHNjZW5lLCAnL2RvZy5nbGInLCB7XG4gICAgICAgIHJlY2VpdmVTaGFkb3c6IGZhbHNlLFxuICAgICAgICBjYXN0U2hhZG93OiBmYWxzZVxuICAgICAgfSkudGhlbigoKSA9PiB7XG4gICAgICAgIGFuaW1hdGUoKVxuICAgICAgICBzZXRMb2FkaW5nKGZhbHNlKVxuICAgICAgfSlcblxuICAgICAgbGV0IHJlcSA9IG51bGxcbiAgICAgIGxldCBmcmFtZSA9IDBcbiAgICAgIGNvbnN0IGFuaW1hdGUgPSAoKSA9PiB7XG4gICAgICAgIHJlcSA9IHJlcXVlc3RBbmltYXRpb25GcmFtZShhbmltYXRlKVxuXG4gICAgICAgIGZyYW1lID0gZnJhbWUgPD0gMTAwID8gZnJhbWUgKyAxIDogZnJhbWVcblxuICAgICAgICBpZiAoZnJhbWUgPD0gMTAwKSB7XG4gICAgICAgICAgY29uc3QgcCA9IGluaXRpYWxDYW1lcmFQb3NpdGlvblxuICAgICAgICAgIGNvbnN0IHJvdFNwZWVkID0gLWVhc2VPdXRDaXJjKGZyYW1lIC8gMTAwKSAqIE1hdGguUEkgKiAyMFxuXG4gICAgICAgICAgY2FtZXJhLnBvc2l0aW9uLnkgPSAxMDBcbiAgICAgICAgICBjYW1lcmEucG9zaXRpb24ueCA9XG4gICAgICAgICAgICBwLnggKiBNYXRoLmNvcyhyb3RTcGVlZCkgKyBwLnogKiBNYXRoLnNpbihyb3RTcGVlZClcbiAgICAgICAgICBjYW1lcmEucG9zaXRpb24ueiA9XG4gICAgICAgICAgICBwLnogKiBNYXRoLmNvcyhyb3RTcGVlZCkgLSBwLnggKiBNYXRoLnNpbihyb3RTcGVlZClcbiAgICAgICAgICBjYW1lcmEubG9va0F0KHRhcmdldClcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBjb250cm9scy51cGRhdGUoKVxuICAgICAgICB9XG5cbiAgICAgICAgcmVuZGVyZXIucmVuZGVyKHNjZW5lLCBjYW1lcmEpXG4gICAgICB9XG5cbiAgICAgIHJldHVybiAoKSA9PiB7XG4gICAgICAgIGNvbnNvbGUubG9nKCd1bm1vdW50JylcbiAgICAgICAgY2FuY2VsQW5pbWF0aW9uRnJhbWUocmVxKVxuICAgICAgICByZW5kZXJlci5kaXNwb3NlKClcbiAgICAgIH1cbiAgICB9XG4gIH0sIFtdKVxuXG4gIHVzZUVmZmVjdCgoKSA9PiB7XG4gICAgd2luZG93LmFkZEV2ZW50TGlzdGVuZXIoJ3Jlc2l6ZScsIGhhbmRsZVdpbmRvd1Jlc2l6ZSwgZmFsc2UpXG4gICAgcmV0dXJuICgpID0+IHtcbiAgICAgIHdpbmRvdy5yZW1vdmVFdmVudExpc3RlbmVyKCdyZXNpemUnLCBoYW5kbGVXaW5kb3dSZXNpemUsIGZhbHNlKVxuICAgIH1cbiAgfSwgW3JlbmRlcmVyLCBoYW5kbGVXaW5kb3dSZXNpemVdKVxuXG4gIHJldHVybiAoXG4gICAgPERvZ0NvbnRhaW5lciByZWY9e3JlZkNvbnRhaW5lcn0+e2xvYWRpbmcgJiYgPERvZ1NwaW5uZXIgLz59PC9Eb2dDb250YWluZXI+XG4gIClcbn1cblxuZXhwb3J0IGRlZmF1bHQgVm94ZWxEb2dcbiJdLCJuYW1lcyI6WyJ1c2VTdGF0ZSIsInVzZUVmZmVjdCIsInVzZVJlZiIsInVzZUNhbGxiYWNrIiwiVEhSRUUiLCJPcmJpdENvbnRyb2xzIiwibG9hZEdMVEZNb2RlbCIsIkRvZ1NwaW5uZXIiLCJEb2dDb250YWluZXIiLCJlYXNlT3V0Q2lyYyIsIngiLCJNYXRoIiwic3FydCIsInBvdyIsIlZveGVsRG9nIiwicmVmQ29udGFpbmVyIiwibG9hZGluZyIsInNldExvYWRpbmciLCJyZW5kZXJlciIsInNldFJlbmRlcmVyIiwiX2NhbWVyYSIsInNldENhbWVyYSIsIlZlY3RvcjMiLCJ0YXJnZXQiLCJzaW4iLCJQSSIsImNvcyIsImluaXRpYWxDYW1lcmFQb3NpdGlvbiIsIlNjZW5lIiwic2NlbmUiLCJfY29udHJvbHMiLCJzZXRDb250cm9scyIsImhhbmRsZVdpbmRvd1Jlc2l6ZSIsImN1cnJlbnQiLCJjb250YWluZXIiLCJzY1ciLCJjbGllbnRXaWR0aCIsInNjSCIsImNsaWVudEhlaWdodCIsInNldFNpemUiLCJXZWJHTFJlbmRlcmVyIiwiYW50aWFsaWFzIiwiYWxwaGEiLCJzZXRQaXhlbFJhdGlvIiwid2luZG93IiwiZGV2aWNlUGl4ZWxSYXRpbyIsIm91dHB1dEVuY29kaW5nIiwic1JHQkVuY29kaW5nIiwiYXBwZW5kQ2hpbGQiLCJkb21FbGVtZW50Iiwic2NhbGUiLCJjYW1lcmEiLCJPcnRob2dyYXBoaWNDYW1lcmEiLCJwb3NpdGlvbiIsImNvcHkiLCJsb29rQXQiLCJhbWJpZW50TGlnaHQiLCJBbWJpZW50TGlnaHQiLCJhZGQiLCJjb250cm9scyIsImF1dG9Sb3RhdGUiLCJyZWNlaXZlU2hhZG93IiwiY2FzdFNoYWRvdyIsInRoZW4iLCJhbmltYXRlIiwicmVxIiwiZnJhbWUiLCJyZXF1ZXN0QW5pbWF0aW9uRnJhbWUiLCJwIiwicm90U3BlZWQiLCJ5IiwieiIsInVwZGF0ZSIsInJlbmRlciIsImNvbnNvbGUiLCJsb2ciLCJjYW5jZWxBbmltYXRpb25GcmFtZSIsImRpc3Bvc2UiLCJhZGRFdmVudExpc3RlbmVyIiwicmVtb3ZlRXZlbnRMaXN0ZW5lciIsInJlZiJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./components/voxel-dog.js\n"));

/***/ })

});