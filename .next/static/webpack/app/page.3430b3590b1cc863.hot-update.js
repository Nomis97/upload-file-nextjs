"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("app/page",{

/***/ "(app-pages-browser)/./components/views/TranslatePage.js":
/*!*******************************************!*\
  !*** ./components/views/TranslatePage.js ***!
  \*******************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ TranslatePage; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! axios */ \"(app-pages-browser)/./node_modules/axios/lib/axios.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _DropFileInput__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../DropFileInput */ \"(app-pages-browser)/./components/DropFileInput.js\");\n/* __next_internal_client_entry_do_not_use__ default auto */ \nvar _s = $RefreshSig$();\n\n\n\n\n//import * as fs from 'fs/promises';\n//const fs = require('fs');\n//const fse = require('fs-extra');\nfunction TranslatePage() {\n    _s();\n    const [vfData, setVFData] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)();\n    const [fileName, setFileName] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(\"\");\n    const [fileSave, setFileSave] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(null);\n    const [isUpload, setIsUpload] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false);\n    const [isTranslate, setIsTranslate] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false);\n    const [isTranslating, setIsTranslating] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false);\n    const translateText = async (text)=>{\n        try {\n            const result = await axios__WEBPACK_IMPORTED_MODULE_3__[\"default\"].get(\"https://translate.googleapis.com/translate_a/single?client=gtx&dt=t&sl=auto&tl=en&q=\".concat(text));\n            return result.data[0][0][0];\n        } catch (error) {\n            console.error(\"Translation error:\", error);\n            return null;\n        }\n    };\n    const translateJSON = async (obj, key)=>{\n        if (typeof obj === \"string\") {\n            let translation = obj;\n            if (obj.trim() != \"\") {\n                if (key.includes(\"variables\")) {\n                    translation = await translateText(obj);\n                    translation = translation.replace(\" \", \"_\");\n                } else if (key.includes(\"name\") || key.includes(\"variable\") || key.includes(\"title\") || key.includes(\"expression\") || key.includes(\"value\") || key.includes(\"text\")) translation = await translateText(obj);\n            }\n            return translation;\n        } else if (Array.isArray(obj)) {\n            const translatedArray = await Promise.all(obj.map((item)=>translateJSON(item, key)));\n            return translatedArray;\n        } else if (typeof obj === \"object\") {\n            if (obj == null) return obj;\n            const translatedObj = {};\n            for(let key in obj){\n                if (key == \"project\" || key == \"canvasTemplates\" || key == \"domains\" || key == \"platformData\") translatedObj[key] = obj[key];\n                else translatedObj[key] = await translateJSON(obj[key], key);\n            }\n            return translatedObj;\n        } else {\n            return obj;\n        }\n    };\n    const handleTranslate = async ()=>{\n        setIsTranslating(true);\n        const result = await translateJSON(vfData, \"root\");\n        setIsTranslating(false);\n        setIsTranslate(true);\n        setVFData(result);\n    };\n    const handleOpenVF = async (event)=>{\n        setIsUpload(false);\n        setIsTranslate(false);\n        if (event.target.files && event.target.files[0]) {\n            const vfFile = event.target.files[0];\n            setFileSave(vfFile);\n            setFileName(vfFile.name);\n            const fileReader = new FileReader();\n            fileReader.onloadend = (e)=>{\n                const vf = JSON.parse(fileReader.result);\n                setVFData(vf);\n                setIsUpload(true);\n            };\n            fileReader.readAsText(vfFile);\n        }\n    };\n    const downloadVF = ()=>{\n        const jsonString = \"data:text/json;chatset=utf-8,\".concat(encodeURIComponent(JSON.stringify(vfData)));\n        const link = document.createElement(\"a\");\n        link.href = jsonString;\n        link.download = fileName; // specify the filename\n        document.body.appendChild(link);\n        link.click();\n        document.body.removeChild(link);\n    };\n    const uploadFiles = ()=>{\n        try {\n            if (fileSave == null) {\n                alert(\"No files\");\n            } else {\n                console.log(fileSave);\n            }\n        } catch (error) {\n            console.log(error);\n        }\n    };\n    const saveFile = ()=>{\n        if (fileSave == null) {\n            alert(\"No files\");\n        } else {\n            console.log(fileSave);\n        }\n    };\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: \"flex flex-col gap-8 w-5/6 max-w-prose\",\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h1\", {\n                className: \"text-2xl text-center font-medium\",\n                children: \"Upload Your Voiceflow .vf File\"\n            }, void 0, false, {\n                fileName: \"C:\\\\xampp\\\\htdocs\\\\bknd-uploadfile\\\\components\\\\views\\\\TranslatePage.js\",\n                lineNumber: 129,\n                columnNumber: 4\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_DropFileInput__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {\n                fileGet: handleOpenVF\n            }, void 0, false, {\n                fileName: \"C:\\\\xampp\\\\htdocs\\\\bknd-uploadfile\\\\components\\\\views\\\\TranslatePage.js\",\n                lineNumber: 132,\n                columnNumber: 4\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"label\", {\n                        style: {\n                            fontSize: \"17px\",\n                            fontWeight: 500,\n                            color: \"gray\"\n                        },\n                        children: \"Uploading - .vf template\"\n                    }, void 0, false, {\n                        fileName: \"C:\\\\xampp\\\\htdocs\\\\bknd-uploadfile\\\\components\\\\views\\\\TranslatePage.js\",\n                        lineNumber: 150,\n                        columnNumber: 5\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        style: {\n                            border: \"solid 1px #cdcdcd\",\n                            padding: \"5px\",\n                            borderRadius: \"3px\"\n                        },\n                        children: fileName\n                    }, void 0, false, {\n                        fileName: \"C:\\\\xampp\\\\htdocs\\\\bknd-uploadfile\\\\components\\\\views\\\\TranslatePage.js\",\n                        lineNumber: 151,\n                        columnNumber: 5\n                    }, this)\n                ]\n            }, void 0, true, {\n                fileName: \"C:\\\\xampp\\\\htdocs\\\\bknd-uploadfile\\\\components\\\\views\\\\TranslatePage.js\",\n                lineNumber: 149,\n                columnNumber: 4\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                onClick: uploadFiles,\n                className: \"bg-purple-700 hover:bg-purple-800 mb-3 p-4 text-white font-semibold rounded-md\",\n                children: \"Upload Files\"\n            }, void 0, false, {\n                fileName: \"C:\\\\xampp\\\\htdocs\\\\bknd-uploadfile\\\\components\\\\views\\\\TranslatePage.js\",\n                lineNumber: 153,\n                columnNumber: 4\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                onClick: handleTranslate,\n                className: \"text-black border-black border-2 rounded-md p-4 bg-blue-300 disabled:opacity-50\",\n                disabled: !isUpload ? \"disabled\" : \"\",\n                children: isTranslating ? \"Translating...\" : \"Translate\"\n            }, void 0, false, {\n                fileName: \"C:\\\\xampp\\\\htdocs\\\\bknd-uploadfile\\\\components\\\\views\\\\TranslatePage.js\",\n                lineNumber: 156,\n                columnNumber: 4\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                onClick: downloadVF,\n                className: \"text-black border-black border-2 rounded-md p-4 bg-red-300 disabled:opacity-50\",\n                disabled: !isTranslate ? \"disabled\" : \"\",\n                children: \"Download vf\"\n            }, void 0, false, {\n                fileName: \"C:\\\\xampp\\\\htdocs\\\\bknd-uploadfile\\\\components\\\\views\\\\TranslatePage.js\",\n                lineNumber: 163,\n                columnNumber: 4\n            }, this)\n        ]\n    }, void 0, true, {\n        fileName: \"C:\\\\xampp\\\\htdocs\\\\bknd-uploadfile\\\\components\\\\views\\\\TranslatePage.js\",\n        lineNumber: 128,\n        columnNumber: 3\n    }, this);\n}\n_s(TranslatePage, \"2ouNxfQpCkhnJmfWj/pUWe7FTMc=\");\n_c = TranslatePage;\nvar _c;\n$RefreshReg$(_c, \"TranslatePage\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL2NvbXBvbmVudHMvdmlld3MvVHJhbnNsYXRlUGFnZS5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7OztBQUUwQjtBQUNPO0FBQ1k7QUFDbkI7QUFDMUIsb0NBQW9DO0FBQ3BDLDJCQUEyQjtBQUMzQixrQ0FBa0M7QUFDbkIsU0FBU0k7O0lBQ3ZCLE1BQU0sQ0FBQ0MsUUFBUUMsVUFBVSxHQUFHTCwrQ0FBUUE7SUFDcEMsTUFBTSxDQUFDTSxVQUFVQyxZQUFZLEdBQUdQLCtDQUFRQSxDQUFDO0lBQ3pDLE1BQU0sQ0FBQ1EsVUFBVUMsWUFBWSxHQUFHVCwrQ0FBUUEsQ0FBQztJQUN6QyxNQUFNLENBQUNVLFVBQVVDLFlBQVksR0FBR1gsK0NBQVFBLENBQUM7SUFDekMsTUFBTSxDQUFDWSxhQUFhQyxlQUFlLEdBQUdiLCtDQUFRQSxDQUFDO0lBQy9DLE1BQU0sQ0FBQ2MsZUFBZUMsaUJBQWlCLEdBQUdmLCtDQUFRQSxDQUFDO0lBRW5ELE1BQU1nQixnQkFBZ0IsT0FBT0M7UUFDNUIsSUFBSTtZQUNILE1BQU1DLFNBQVMsTUFBTW5CLDZDQUFLQSxDQUFDb0IsR0FBRyxDQUM3Qix1RkFBNEYsT0FBTEY7WUFFeEYsT0FBT0MsT0FBT0UsSUFBSSxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRTtRQUM1QixFQUFFLE9BQU9DLE9BQU87WUFDZkMsUUFBUUQsS0FBSyxDQUFDLHNCQUFzQkE7WUFDcEMsT0FBTztRQUNSO0lBQ0Q7SUFFQSxNQUFNRSxnQkFBZ0IsT0FBT0MsS0FBS0M7UUFDakMsSUFBSSxPQUFPRCxRQUFRLFVBQVU7WUFDNUIsSUFBSUUsY0FBY0Y7WUFDbEIsSUFBSUEsSUFBSUcsSUFBSSxNQUFNLElBQUk7Z0JBQ3JCLElBQUlGLElBQUlHLFFBQVEsQ0FBQyxjQUFjO29CQUM5QkYsY0FBYyxNQUFNVixjQUFjUTtvQkFDbENFLGNBQWNBLFlBQVlHLE9BQU8sQ0FBQyxLQUFLO2dCQUN4QyxPQUFPLElBQ05KLElBQUlHLFFB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OzRCQUFJQyxPQUFPO3dCQUFNO2tDQUFHOzs7Ozs7a0NBQ2hFLDhEQUFDUjt3QkFBSUssT0FBTzs0QkFBQ0ksUUFBUTs0QkFBcUJDLFNBQVM7NEJBQU9DLGNBQWM7d0JBQUs7a0NBQUkzRTs7Ozs7Ozs7Ozs7OzBCQUVsRiw4REFBQzRFO2dCQUFPQyxTQUFTakI7Z0JBQWFLLFdBQVU7MEJBQWlGOzs7Ozs7MEJBR3pILDhEQUFDVztnQkFDQUMsU0FBUzdDO2dCQUNUaUMsV0FBVTtnQkFDVmEsVUFBVSxDQUFDMUUsV0FBVyxhQUFhOzBCQUVsQ0ksZ0JBQWdCLG1CQUFtQjs7Ozs7OzBCQUVyQyw4REFBQ29FO2dCQUNBQyxTQUFTOUI7Z0JBQ1RrQixXQUFVO2dCQUNWYSxVQUFVLENBQUN4RSxjQUFjLGFBQWE7MEJBQ3RDOzs7Ozs7Ozs7Ozs7QUFLSjtHQWxLd0JUO0tBQUFBIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL2NvbXBvbmVudHMvdmlld3MvVHJhbnNsYXRlUGFnZS5qcz9kN2Y5Il0sInNvdXJjZXNDb250ZW50IjpbIid1c2UgY2xpZW50JztcblxuaW1wb3J0IGF4aW9zIGZyb20gJ2F4aW9zJztcbmltcG9ydCB7IHVzZVN0YXRlIH0gZnJvbSAncmVhY3QnO1xuaW1wb3J0IERyb3BGaWxlSW5wdXQgZnJvbSAnLi4vRHJvcEZpbGVJbnB1dCc7XG5pbXBvcnQgZnMgZnJvbSAnZnMtZXh0cmEnO1xuLy9pbXBvcnQgKiBhcyBmcyBmcm9tICdmcy9wcm9taXNlcyc7XG4vL2NvbnN0IGZzID0gcmVxdWlyZSgnZnMnKTtcbi8vY29uc3QgZnNlID0gcmVxdWlyZSgnZnMtZXh0cmEnKTtcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIFRyYW5zbGF0ZVBhZ2UoKSB7XG5cdGNvbnN0IFt2ZkRhdGEsIHNldFZGRGF0YV0gPSB1c2VTdGF0ZSgpO1xuXHRjb25zdCBbZmlsZU5hbWUsIHNldEZpbGVOYW1lXSA9IHVzZVN0YXRlKCcnKTtcblx0Y29uc3QgW2ZpbGVTYXZlLCBzZXRGaWxlU2F2ZV0gPSB1c2VTdGF0ZShudWxsKTtcblx0Y29uc3QgW2lzVXBsb2FkLCBzZXRJc1VwbG9hZF0gPSB1c2VTdGF0ZShmYWxzZSk7XG5cdGNvbnN0IFtpc1RyYW5zbGF0ZSwgc2V0SXNUcmFuc2xhdGVdID0gdXNlU3RhdGUoZmFsc2UpO1xuXHRjb25zdCBbaXNUcmFuc2xhdGluZywgc2V0SXNUcmFuc2xhdGluZ10gPSB1c2VTdGF0ZShmYWxzZSk7XG5cblx0Y29uc3QgdHJhbnNsYXRlVGV4dCA9IGFzeW5jICh0ZXh0KSA9PiB7XG5cdFx0dHJ5IHtcblx0XHRcdGNvbnN0IHJlc3VsdCA9IGF3YWl0IGF4aW9zLmdldChcblx0XHRcdFx0YGh0dHBzOi8vdHJhbnNsYXRlLmdvb2dsZWFwaXMuY29tL3RyYW5zbGF0ZV9hL3NpbmdsZT9jbGllbnQ9Z3R4JmR0PXQmc2w9YXV0byZ0bD1lbiZxPSR7dGV4dH1gXG5cdFx0XHQpO1xuXHRcdFx0cmV0dXJuIHJlc3VsdC5kYXRhWzBdWzBdWzBdO1xuXHRcdH0gY2F0Y2ggKGVycm9yKSB7XG5cdFx0XHRjb25zb2xlLmVycm9yKCdUcmFuc2xhdGlvbiBlcnJvcjonLCBlcnJvcik7XG5cdFx0XHRyZXR1cm4gbnVsbDtcblx0XHR9XG5cdH07XG5cblx0Y29uc3QgdHJhbnNsYXRlSlNPTiA9IGFzeW5jIChvYmosIGtleSkgPT4ge1xuXHRcdGlmICh0eXBlb2Ygb2JqID09PSAnc3RyaW5nJykge1xuXHRcdFx0bGV0IHRyYW5zbGF0aW9uID0gb2JqO1xuXHRcdFx0aWYgKG9iai50cmltKCkgIT0gJycpIHtcblx0XHRcdFx0aWYgKGtleS5pbmNsdWRlcygndmFyaWFibGVzJykpIHtcblx0XHRcdFx0XHR0cmFuc2xhdGlvbiA9IGF3YWl0IHRyYW5zbGF0ZVRleHQob2JqKTtcblx0XHRcdFx0XHR0cmFuc2xhdGlvbiA9IHRyYW5zbGF0aW9uLnJlcGxhY2UoJyAnLCAnXycpO1xuXHRcdFx0XHR9IGVsc2UgaWYgKFxuXHRcdFx0XHRcdGtleS5pbmNsdWRlcygnbmFtZScpIHx8XG5cdFx0XHRcdFx0a2V5LmluY2x1ZGVzKCd2YXJpYWJsZScpIHx8XG5cdFx0XHRcdFx0a2V5LmluY2x1ZGVzKCd0aXRsZScpIHx8XG5cdFx0XHRcdFx0a2V5LmluY2x1ZGVzKCdleHByZXNzaW9uJykgfHxcblx0XHRcdFx0XHRrZXkuaW5jbHVkZXMoJ3ZhbHVlJykgfHxcblx0XHRcdFx0XHRrZXkuaW5jbHVkZXMoJ3RleHQnKVxuXHRcdFx0XHQpXG5cdFx0XHRcdFx0dHJhbnNsYXRpb24gPSBhd2FpdCB0cmFuc2xhdGVUZXh0KG9iaik7XG5cdFx0XHR9XG5cblx0XHRcdHJldHVybiB0cmFuc2xhdGlvbjtcblx0XHR9IGVsc2UgaWYgKEFycmF5LmlzQXJyYXkob2JqKSkge1xuXHRcdFx0Y29uc3QgdHJhbnNsYXRlZEFycmF5ID0gYXdhaXQgUHJvbWlzZS5hbGwoXG5cdFx0XHRcdG9iai5tYXAoKGl0ZW0pID0+IHRyYW5zbGF0ZUpTT04oaXRlbSwga2V5KSlcblx0XHRcdCk7XG5cdFx0XHRyZXR1cm4gdHJhbnNsYXRlZEFycmF5O1xuXHRcdH0gZWxzZSBpZiAodHlwZW9mIG9iaiA9PT0gJ29iamVjdCcpIHtcblx0XHRcdGlmIChvYmogPT0gbnVsbCkgcmV0dXJuIG9iajtcblx0XHRcdGNvbnN0IHRyYW5zbGF0ZWRPYmogPSB7fTtcblx0XHRcdGZvciAobGV0IGtleSBpbiBvYmopIHtcblx0XHRcdFx0aWYgKFxuXHRcdFx0XHRcdGtleSA9PSAncHJvamVjdCcgfHxcblx0XHRcdFx0XHRrZXkgPT0gJ2NhbnZhc1RlbXBsYXRlcycgfHxcblx0XHRcdFx0XHRrZXkgPT0gJ2RvbWFpbnMnIHx8XG5cdFx0XHRcdFx0a2V5ID09ICdwbGF0Zm9ybURhdGEnXG5cdFx0XHRcdClcblx0XHRcdFx0XHR0cmFuc2xhdGVkT2JqW2tleV0gPSBvYmpba2V5XTtcblx0XHRcdFx0ZWxzZSB0cmFuc2xhdGVkT2JqW2tleV0gPSBhd2FpdCB0cmFuc2xhdGVKU09OKG9ialtrZXldLCBrZXkpO1xuXHRcdFx0fVxuXHRcdFx0cmV0dXJuIHRyYW5zbGF0ZWRPYmo7XG5cdFx0fSBlbHNlIHtcblx0XHRcdHJldHVybiBvYmo7XG5cdFx0fVxuXHR9O1xuXG5cdGNvbnN0IGhhbmRsZVRyYW5zbGF0ZSA9IGFzeW5jICgpID0+IHtcblx0XHRzZXRJc1RyYW5zbGF0aW5nKHRydWUpO1xuXHRcdGNvbnN0IHJlc3VsdCA9IGF3YWl0IHRyYW5zbGF0ZUpTT04odmZEYXRhLCAncm9vdCcpO1xuXHRcdHNldElzVHJhbnNsYXRpbmcoZmFsc2UpO1xuXHRcdHNldElzVHJhbnNsYXRlKHRydWUpO1xuXHRcdHNldFZGRGF0YShyZXN1bHQpO1xuXHR9O1xuXG5cdGNvbnN0IGhhbmRsZU9wZW5WRiA9IGFzeW5jIChldmVudCkgPT4ge1xuXHRcdHNldElzVXBsb2FkKGZhbHNlKTtcblx0XHRzZXRJc1RyYW5zbGF0ZShmYWxzZSk7XG5cdFx0aWYgKGV2ZW50LnRhcmdldC5maWxlcyAmJiBldmVudC50YXJnZXQuZmlsZXNbMF0pIHtcblx0XHRcdGNvbnN0IHZmRmlsZSA9IGV2ZW50LnRhcmdldC5maWxlc1swXTtcblx0XHRcdHNldEZpbGVTYXZlKHZmRmlsZSk7XG5cdFx0XHRzZXRGaWxlTmFtZSh2ZkZpbGUubmFtZSk7XG5cdFx0XHRjb25zdCBmaWxlUmVhZGVyID0gbmV3IEZpbGVSZWFkZXIoKTtcblx0XHRcdGZpbGVSZWFkZXIub25sb2FkZW5kID0gKGUpID0+IHtcblx0XHRcdFx0Y29uc3QgdmYgPSBKU09OLnBhcnNlKGZpbGVSZWFkZXIucmVzdWx0KTtcblx0XHRcdFx0c2V0VkZEYXRhKHZmKTtcblx0XHRcdFx0c2V0SXNVcGxvYWQodHJ1ZSk7XG5cdFx0XHR9O1xuXHRcdFx0ZmlsZVJlYWRlci5yZWFkQXNUZXh0KHZmRmlsZSk7XG5cdFx0fVxuXHR9O1xuXG5cdGNvbnN0IGRvd25sb2FkVkYgPSAoKSA9PiB7XG5cdFx0Y29uc3QganNvblN0cmluZyA9IGBkYXRhOnRleHQvanNvbjtjaGF0c2V0PXV0Zi04LCR7ZW5jb2RlVVJJQ29tcG9uZW50KFxuXHRcdFx0SlNPTi5zdHJpbmdpZnkodmZEYXRhKVxuXHRcdCl9YDtcblx0XHRjb25zdCBsaW5rID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnYScpO1xuXHRcdGxpbmsuaHJlZiA9IGpzb25TdHJpbmc7XG5cdFx0bGluay5kb3dubG9hZCA9IGZpbGVOYW1lOyAvLyBzcGVjaWZ5IHRoZSBmaWxlbmFtZVxuXHRcdGRvY3VtZW50LmJvZHkuYXBwZW5kQ2hpbGQobGluayk7XG5cdFx0bGluay5jbGljaygpO1xuXHRcdGRvY3VtZW50LmJvZHkucmVtb3ZlQ2hpbGQobGluayk7XG5cdH07XG5cdGNvbnN0IHVwbG9hZEZpbGVzID0gKCkgPT4ge1xuXHRcdHRyeXtcblx0XHQgICAgaWYgKGZpbGVTYXZlPT1udWxsKSB7XG5cdFx0ICAgICAgYWxlcnQoJ05vIGZpbGVzJylcblx0XHQgICAgfWVsc2V7XG5cdFx0ICAgICAgY29uc29sZS5sb2coZmlsZVNhdmUpXG5cdFx0ICAgIH1cblx0XHR9Y2F0Y2goZXJyb3Ipe1xuXHRcdFx0Y29uc29sZS5sb2coZXJyb3IpXG5cdFx0fVxuXHR9XG4gIGNvbnN0IHNhdmVGaWxlID0gKCkgPT4ge1xuICAgIGlmIChmaWxlU2F2ZT09bnVsbCkge1xuICAgICAgYWxlcnQoJ05vIGZpbGVzJylcbiAgICB9ZWxzZXtcbiAgICAgIGNvbnNvbGUubG9nKGZpbGVTYXZlKVxuICAgIH1cbiAgfVxuXHRyZXR1cm4gKFxuXHRcdDxkaXYgY2xhc3NOYW1lPSdmbGV4IGZsZXgtY29sIGdhcC04IHctNS82IG1heC13LXByb3NlJz5cblx0XHRcdDxoMSBjbGFzc05hbWU9J3RleHQtMnhsIHRleHQtY2VudGVyIGZvbnQtbWVkaXVtJz5cblx0XHRcdFx0VXBsb2FkIFlvdXIgVm9pY2VmbG93IC52ZiBGaWxlXG5cdFx0XHQ8L2gxPlxuXHRcdFx0PERyb3BGaWxlSW5wdXQgZmlsZUdldD17aGFuZGxlT3BlblZGfSAvPlxuXHRcdFx0ey8qIDxkaXY+XG5cdFx0XHRcdDxkaXY+XG5cdFx0XHRcdFx0PGgyPkJyb3dzZSBvciBEcmFnIGFuZCBEcm9wIHRoZSAudmYgZmlsZSBoZXJlPC9oMj5cblx0XHRcdFx0XHQ8cD5TdXBwb3J0ZWQgZm9ybWF0ZXM6IHZvaWNlZmxvdyAudmY8L3A+XG5cdFx0XHRcdDwvZGl2PlxuXHRcdFx0XHR7LyogPGRpdiBjbGFzc05hbWU9J3ByZXZpZXcnPjwvZGl2PiAqL31cblx0XHRcdHsvKiA8bGFiZWwgZm9yPSdmaWxlJz5Ccm93c2Ugb3IgRHJhZyBhbmQgRHJvcCB0aGUgLnZmIGZpbGUgaGVyZTwvbGFiZWw+XG5cdFx0XHRcdDxpbnB1dFxuXHRcdFx0XHRcdHR5cGU9J2ZpbGUnXG5cdFx0XHRcdFx0YWNjZXB0PScudmYnXG5cdFx0XHRcdFx0aWQ9J2ZpbGUnXG5cdFx0XHRcdFx0bmFtZT0nZmlsZSdcblx0XHRcdFx0XHRvbkNoYW5nZT17aGFuZGxlT3BlblZGfVxuXHRcdFx0XHRcdGNsYXNzTmFtZT0ndGV4dC1ibGFjayBib3JkZXItc3RvbmUtNjAwIGJvcmRlciByb3VuZGVkLW1kIHAtMTIgdy1mdWxsIGJvcmRlci1kYXNoZWQnXG5cdFx0XHRcdC8+IFxuXHRcdFx0PC9kaXY+ICovfVxuXHRcdFx0PGRpdj5cblx0XHRcdFx0PGxhYmVsIHN0eWxlPXt7Zm9udFNpemU6ICcxN3B4Jyxmb250V2VpZ2h0OiA1MDAsY29sb3I6ICdncmF5J319PlVwbG9hZGluZyAtIC52ZiB0ZW1wbGF0ZTwvbGFiZWw+XG5cdFx0XHRcdDxkaXYgc3R5bGU9e3tib3JkZXI6ICdzb2xpZCAxcHggI2NkY2RjZCcsIHBhZGRpbmc6ICc1cHgnLCBib3JkZXJSYWRpdXM6ICczcHgnfX0+e2ZpbGVOYW1lfTwvZGl2PlxuXHRcdFx0PC9kaXY+XG5cdFx0XHQ8YnV0dG9uIG9uQ2xpY2s9e3VwbG9hZEZpbGVzfSBjbGFzc05hbWU9J2JnLXB1cnBsZS03MDAgaG92ZXI6YmctcHVycGxlLTgwMCBtYi0zIHAtNCB0ZXh0LXdoaXRlIGZvbnQtc2VtaWJvbGQgcm91bmRlZC1tZCc+XG5cdFx0XHRcdFVwbG9hZCBGaWxlc1xuXHRcdFx0PC9idXR0b24+XG5cdFx0XHQ8YnV0dG9uXG5cdFx0XHRcdG9uQ2xpY2s9e2hhbmRsZVRyYW5zbGF0ZX1cblx0XHRcdFx0Y2xhc3NOYW1lPSd0ZXh0LWJsYWNrIGJvcmRlci1ibGFjayBib3JkZXItMiByb3VuZGVkLW1kIHAtNCBiZy1ibHVlLTMwMCBkaXNhYmxlZDpvcGFjaXR5LTUwJ1xuXHRcdFx0XHRkaXNhYmxlZD17IWlzVXBsb2FkID8gJ2Rpc2FibGVkJyA6ICcnfVxuXHRcdFx0PlxuXHRcdFx0XHR7aXNUcmFuc2xhdGluZyA/ICdUcmFuc2xhdGluZy4uLicgOiAnVHJhbnNsYXRlJ31cblx0XHRcdDwvYnV0dG9uPlxuXHRcdFx0PGJ1dHRvblxuXHRcdFx0XHRvbkNsaWNrPXtkb3dubG9hZFZGfVxuXHRcdFx0XHRjbGFzc05hbWU9J3RleHQtYmxhY2sgYm9yZGVyLWJsYWNrIGJvcmRlci0yIHJvdW5kZWQtbWQgcC00IGJnLXJlZC0zMDAgZGlzYWJsZWQ6b3BhY2l0eS01MCdcblx0XHRcdFx0ZGlzYWJsZWQ9eyFpc1RyYW5zbGF0ZSA/ICdkaXNhYmxlZCcgOiAnJ31cblx0XHRcdD5cblx0XHRcdFx0RG93bmxvYWQgdmZcblx0XHRcdDwvYnV0dG9uPlxuXHRcdDwvZGl2PlxuXHQpO1xufVxuIl0sIm5hbWVzIjpbImF4aW9zIiwidXNlU3RhdGUiLCJEcm9wRmlsZUlucHV0IiwiZnMiLCJUcmFuc2xhdGVQYWdlIiwidmZEYXRhIiwic2V0VkZEYXRhIiwiZmlsZU5hbWUiLCJzZXRGaWxlTmFtZSIsImZpbGVTYXZlIiwic2V0RmlsZVNhdmUiLCJpc1VwbG9hZCIsInNldElzVXBsb2FkIiwiaXNUcmFuc2xhdGUiLCJzZXRJc1RyYW5zbGF0ZSIsImlzVHJhbnNsYXRpbmciLCJzZXRJc1RyYW5zbGF0aW5nIiwidHJhbnNsYXRlVGV4dCIsInRleHQiLCJyZXN1bHQiLCJnZXQiLCJkYXRhIiwiZXJyb3IiLCJjb25zb2xlIiwidHJhbnNsYXRlSlNPTiIsIm9iaiIsImtleSIsInRyYW5zbGF0aW9uIiwidHJpbSIsImluY2x1ZGVzIiwicmVwbGFjZSIsIkFycmF5IiwiaXNBcnJheSIsInRyYW5zbGF0ZWRBcnJheSIsIlByb21pc2UiLCJhbGwiLCJtYXAiLCJpdGVtIiwidHJhbnNsYXRlZE9iaiIsImhhbmRsZVRyYW5zbGF0ZSIsImhhbmRsZU9wZW5WRiIsImV2ZW50IiwidGFyZ2V0IiwiZmlsZXMiLCJ2ZkZpbGUiLCJuYW1lIiwiZmlsZVJlYWRlciIsIkZpbGVSZWFkZXIiLCJvbmxvYWRlbmQiLCJlIiwidmYiLCJKU09OIiwicGFyc2UiLCJyZWFkQXNUZXh0IiwiZG93bmxvYWRWRiIsImpzb25TdHJpbmciLCJlbmNvZGVVUklDb21wb25lbnQiLCJzdHJpbmdpZnkiLCJsaW5rIiwiZG9jdW1lbnQiLCJjcmVhdGVFbGVtZW50IiwiaHJlZiIsImRvd25sb2FkIiwiYm9keSIsImFwcGVuZENoaWxkIiwiY2xpY2siLCJyZW1vdmVDaGlsZCIsInVwbG9hZEZpbGVzIiwiYWxlcnQiLCJsb2ciLCJzYXZlRmlsZSIsImRpdiIsImNsYXNzTmFtZSIsImgxIiwiZmlsZUdldCIsImxhYmVsIiwic3R5bGUiLCJmb250U2l6ZSIsImZvbnRXZWlnaHQiLCJjb2xvciIsImJvcmRlciIsInBhZGRpbmciLCJib3JkZXJSYWRpdXMiLCJidXR0b24iLCJvbkNsaWNrIiwiZGlzYWJsZWQiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///(app-pages-browser)/./components/views/TranslatePage.js\n"));

/***/ })

});