/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
(() => {
var exports = {};
exports.id = "pages/_app";
exports.ids = ["pages/_app"];
exports.modules = {

/***/ "./src/components/AuthContext.js":
/*!***************************************!*\
  !*** ./src/components/AuthContext.js ***!
  \***************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   AuthProvider: () => (/* binding */ AuthProvider),\n/* harmony export */   useAuth: () => (/* binding */ useAuth)\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"react/jsx-dev-runtime\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n\n\n\nconst AuthContext = /*#__PURE__*/ (0,react__WEBPACK_IMPORTED_MODULE_1__.createContext)();\nconst AuthProvider = ({ children })=>{\n    const [isLoggedIn, setIsLoggedIn] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false);\n    const [username, setUsername] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(\"\");\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{\n        console.log(\"AuthProvider isLoggedIn:\", isLoggedIn);\n        console.log(\"AuthProvider username:\", username);\n    }, [\n        isLoggedIn,\n        username\n    ]);\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(AuthContext.Provider, {\n        value: {\n            isLoggedIn,\n            setIsLoggedIn,\n            username,\n            setUsername\n        },\n        children: children\n    }, void 0, false, {\n        fileName: \"/Users/admin/repos/LoginMongo2/loginmongo2/src/components/AuthContext.js\",\n        lineNumber: 14,\n        columnNumber: 5\n    }, undefined);\n};\nconst useAuth = ()=>(0,react__WEBPACK_IMPORTED_MODULE_1__.useContext)(AuthContext);\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvY29tcG9uZW50cy9BdXRoQ29udGV4dC5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7O0FBQW1FO0FBQ2pDO0FBRWxDLE1BQU1LLDRCQUFjSixvREFBYUE7QUFFMUIsTUFBTUssZUFBZSxDQUFDLEVBQUVDLFFBQVEsRUFBRTtJQUN2QyxNQUFNLENBQUNDLFlBQVlDLGNBQWMsR0FBR04sK0NBQVFBLENBQUM7SUFDN0MsTUFBTSxDQUFDTyxVQUFVQyxZQUFZLEdBQUdSLCtDQUFRQSxDQUFDO0lBQ3pDQyxnREFBU0EsQ0FBQztRQUNSUSxRQUFRQyxHQUFHLENBQUMsNEJBQTRCTDtRQUN4Q0ksUUFBUUMsR0FBRyxDQUFDLDBCQUEwQkg7SUFDeEMsR0FBRztRQUFDRjtRQUFZRTtLQUFTO0lBQ3pCLHFCQUNFLDhEQUFDTCxZQUFZUyxRQUFRO1FBQUNDLE9BQU87WUFBRVA7WUFBWUM7WUFBZUM7WUFBVUM7UUFBWTtrQkFDN0VKOzs7Ozs7QUFHUCxFQUFFO0FBRUssTUFBTVMsVUFBVSxJQUFNZCxpREFBVUEsQ0FBQ0csYUFBYSIsInNvdXJjZXMiOlsid2VicGFjazovL2xvZ2lubW9uZ28yLy4vc3JjL2NvbXBvbmVudHMvQXV0aENvbnRleHQuanM/MWQ2MSJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHsgY3JlYXRlQ29udGV4dCwgdXNlQ29udGV4dCwgdXNlU3RhdGUgfSBmcm9tIFwicmVhY3RcIjtcbmltcG9ydCB7IHVzZUVmZmVjdCB9IGZyb20gXCJyZWFjdFwiO1xuXG5jb25zdCBBdXRoQ29udGV4dCA9IGNyZWF0ZUNvbnRleHQoKTtcblxuZXhwb3J0IGNvbnN0IEF1dGhQcm92aWRlciA9ICh7IGNoaWxkcmVuIH0pID0+IHtcbiAgY29uc3QgW2lzTG9nZ2VkSW4sIHNldElzTG9nZ2VkSW5dID0gdXNlU3RhdGUoZmFsc2UpO1xuICBjb25zdCBbdXNlcm5hbWUsIHNldFVzZXJuYW1lXSA9IHVzZVN0YXRlKFwiXCIpXG4gIHVzZUVmZmVjdCgoKSA9PiB7XG4gICAgY29uc29sZS5sb2coXCJBdXRoUHJvdmlkZXIgaXNMb2dnZWRJbjpcIiwgaXNMb2dnZWRJbik7XG4gICAgY29uc29sZS5sb2coXCJBdXRoUHJvdmlkZXIgdXNlcm5hbWU6XCIsIHVzZXJuYW1lKTtcbiAgfSwgW2lzTG9nZ2VkSW4sIHVzZXJuYW1lXSk7XG4gIHJldHVybiAoXG4gICAgPEF1dGhDb250ZXh0LlByb3ZpZGVyIHZhbHVlPXt7IGlzTG9nZ2VkSW4sIHNldElzTG9nZ2VkSW4sIHVzZXJuYW1lLCBzZXRVc2VybmFtZSB9fT5cbiAgICAgIHtjaGlsZHJlbn1cbiAgICA8L0F1dGhDb250ZXh0LlByb3ZpZGVyPlxuICApO1xufTtcblxuZXhwb3J0IGNvbnN0IHVzZUF1dGggPSAoKSA9PiB1c2VDb250ZXh0KEF1dGhDb250ZXh0KTtcbiJdLCJuYW1lcyI6WyJSZWFjdCIsImNyZWF0ZUNvbnRleHQiLCJ1c2VDb250ZXh0IiwidXNlU3RhdGUiLCJ1c2VFZmZlY3QiLCJBdXRoQ29udGV4dCIsIkF1dGhQcm92aWRlciIsImNoaWxkcmVuIiwiaXNMb2dnZWRJbiIsInNldElzTG9nZ2VkSW4iLCJ1c2VybmFtZSIsInNldFVzZXJuYW1lIiwiY29uc29sZSIsImxvZyIsIlByb3ZpZGVyIiwidmFsdWUiLCJ1c2VBdXRoIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./src/components/AuthContext.js\n");

/***/ }),

/***/ "./src/components/Layout.tsx":
/*!***********************************!*\
  !*** ./src/components/Layout.tsx ***!
  \***********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"react/jsx-dev-runtime\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/head */ \"next/head\");\n/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _Navbar_Navbar__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./Navbar/Navbar */ \"./src/components/Navbar/Navbar.tsx\");\n\n\n\n\nconst Layout = ({ children })=>{\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        id: \"layout\",\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_head__WEBPACK_IMPORTED_MODULE_1___default()), {\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"title\", {\n                        children: \"LoginMongo\"\n                    }, void 0, false, {\n                        fileName: \"/Users/admin/repos/LoginMongo2/loginmongo2/src/components/Layout.tsx\",\n                        lineNumber: 12,\n                        columnNumber: 9\n                    }, undefined),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"meta\", {\n                        name: \"viewport\",\n                        content: \"width=device-width, initial-scale=1.0\"\n                    }, void 0, false, {\n                        fileName: \"/Users/admin/repos/LoginMongo2/loginmongo2/src/components/Layout.tsx\",\n                        lineNumber: 13,\n                        columnNumber: 9\n                    }, undefined)\n                ]\n            }, void 0, true, {\n                fileName: \"/Users/admin/repos/LoginMongo2/loginmongo2/src/components/Layout.tsx\",\n                lineNumber: 11,\n                columnNumber: 7\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_Navbar_Navbar__WEBPACK_IMPORTED_MODULE_3__[\"default\"], {}, void 0, false, {\n                fileName: \"/Users/admin/repos/LoginMongo2/loginmongo2/src/components/Layout.tsx\",\n                lineNumber: 15,\n                columnNumber: 7\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"main\", {\n                id: \"content\",\n                children: children\n            }, void 0, false, {\n                fileName: \"/Users/admin/repos/LoginMongo2/loginmongo2/src/components/Layout.tsx\",\n                lineNumber: 16,\n                columnNumber: 7\n            }, undefined)\n        ]\n    }, void 0, true, {\n        fileName: \"/Users/admin/repos/LoginMongo2/loginmongo2/src/components/Layout.tsx\",\n        lineNumber: 10,\n        columnNumber: 5\n    }, undefined);\n};\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Layout);\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvY29tcG9uZW50cy9MYXlvdXQudHN4IiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7OztBQUE2QjtBQUNIO0FBQ1c7QUFLckMsTUFBTUcsU0FBUyxDQUFDLEVBQUVDLFFBQVEsRUFBTztJQUMvQixxQkFDRSw4REFBQ0M7UUFBSUMsSUFBRzs7MEJBQ04sOERBQUNOLGtEQUFJQTs7a0NBQ0gsOERBQUNPO2tDQUFNOzs7Ozs7a0NBQ1AsOERBQUNDO3dCQUFLQyxNQUFLO3dCQUFXQyxTQUFROzs7Ozs7Ozs7Ozs7MEJBRWhDLDhEQUFDUixzREFBTUE7Ozs7OzBCQUNQLDhEQUFDUztnQkFBS0wsSUFBRzswQkFBV0Y7Ozs7Ozs7Ozs7OztBQUcxQjtBQUVBLGlFQUFlRCxNQUFNQSxFQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vbG9naW5tb25nbzIvLi9zcmMvY29tcG9uZW50cy9MYXlvdXQudHN4P2RlOGIiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IEhlYWQgZnJvbSBcIm5leHQvaGVhZFwiO1xuaW1wb3J0IFJlYWN0IGZyb20gXCJyZWFjdFwiO1xuaW1wb3J0IE5hdmJhciBmcm9tIFwiLi9OYXZiYXIvTmF2YmFyXCI7XG5cbnR5cGUgUHJvcHMgPSB7XG4gIGNoaWxkcmVuOiBKU1guRWxlbWVudDtcbn07XG5jb25zdCBMYXlvdXQgPSAoeyBjaGlsZHJlbiB9OiBhbnkpID0+IHtcbiAgcmV0dXJuIChcbiAgICA8ZGl2IGlkPVwibGF5b3V0XCI+XG4gICAgICA8SGVhZD5cbiAgICAgICAgPHRpdGxlPkxvZ2luTW9uZ288L3RpdGxlPlxuICAgICAgICA8bWV0YSBuYW1lPVwidmlld3BvcnRcIiBjb250ZW50PVwid2lkdGg9ZGV2aWNlLXdpZHRoLCBpbml0aWFsLXNjYWxlPTEuMFwiIC8+XG4gICAgICA8L0hlYWQ+XG4gICAgICA8TmF2YmFyIC8+XG4gICAgICA8bWFpbiBpZD1cImNvbnRlbnRcIj57Y2hpbGRyZW59PC9tYWluPlxuICAgIDwvZGl2PlxuICApO1xufTtcblxuZXhwb3J0IGRlZmF1bHQgTGF5b3V0O1xuIl0sIm5hbWVzIjpbIkhlYWQiLCJSZWFjdCIsIk5hdmJhciIsIkxheW91dCIsImNoaWxkcmVuIiwiZGl2IiwiaWQiLCJ0aXRsZSIsIm1ldGEiLCJuYW1lIiwiY29udGVudCIsIm1haW4iXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./src/components/Layout.tsx\n");

/***/ }),

/***/ "./src/components/Navbar/Navbar.tsx":
/*!******************************************!*\
  !*** ./src/components/Navbar/Navbar.tsx ***!
  \******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"react/jsx-dev-runtime\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/link */ \"./node_modules/next/link.js\");\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _AuthContext__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../AuthContext */ \"./src/components/AuthContext.js\");\n\n\n\n\nconst Navbar = ()=>{\n    const { isLoggedIn, username } = (0,_AuthContext__WEBPACK_IMPORTED_MODULE_3__.useAuth)();\n    (0,react__WEBPACK_IMPORTED_MODULE_2__.useEffect)(()=>{\n        console.log(\"Navbar isLoggedIn:\", isLoggedIn);\n        console.log(\"Navbar username:\", username);\n    }, [\n        isLoggedIn,\n        username\n    ]);\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"ul\", {\n        id: \"header\",\n        children: [\n            isLoggedIn ? /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"li\", {\n                        children: [\n                            \"Welcome, \",\n                            username\n                        ]\n                    }, void 0, true, {\n                        fileName: \"/Users/admin/repos/LoginMongo2/loginmongo2/src/components/Navbar/Navbar.tsx\",\n                        lineNumber: 17,\n                        columnNumber: 11\n                    }, undefined),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"li\", {\n                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_link__WEBPACK_IMPORTED_MODULE_1___default()), {\n                            href: \"/Register\",\n                            children: \"Register\"\n                        }, void 0, false, {\n                            fileName: \"/Users/admin/repos/LoginMongo2/loginmongo2/src/components/Navbar/Navbar.tsx\",\n                            lineNumber: 19,\n                            columnNumber: 13\n                        }, undefined)\n                    }, void 0, false, {\n                        fileName: \"/Users/admin/repos/LoginMongo2/loginmongo2/src/components/Navbar/Navbar.tsx\",\n                        lineNumber: 18,\n                        columnNumber: 11\n                    }, undefined)\n                ]\n            }, void 0, true) : /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"li\", {\n                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_link__WEBPACK_IMPORTED_MODULE_1___default()), {\n                            href: \"/Login\",\n                            children: \"Login\"\n                        }, void 0, false, {\n                            fileName: \"/Users/admin/repos/LoginMongo2/loginmongo2/src/components/Navbar/Navbar.tsx\",\n                            lineNumber: 25,\n                            columnNumber: 13\n                        }, undefined)\n                    }, void 0, false, {\n                        fileName: \"/Users/admin/repos/LoginMongo2/loginmongo2/src/components/Navbar/Navbar.tsx\",\n                        lineNumber: 24,\n                        columnNumber: 11\n                    }, undefined),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"li\", {\n                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_link__WEBPACK_IMPORTED_MODULE_1___default()), {\n                            href: \"/Register\",\n                            children: \"Register\"\n                        }, void 0, false, {\n                            fileName: \"/Users/admin/repos/LoginMongo2/loginmongo2/src/components/Navbar/Navbar.tsx\",\n                            lineNumber: 28,\n                            columnNumber: 13\n                        }, undefined)\n                    }, void 0, false, {\n                        fileName: \"/Users/admin/repos/LoginMongo2/loginmongo2/src/components/Navbar/Navbar.tsx\",\n                        lineNumber: 27,\n                        columnNumber: 11\n                    }, undefined)\n                ]\n            }, void 0, true),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"li\", {\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_link__WEBPACK_IMPORTED_MODULE_1___default()), {\n                    href: \"/\",\n                    children: \"Home\"\n                }, void 0, false, {\n                    fileName: \"/Users/admin/repos/LoginMongo2/loginmongo2/src/components/Navbar/Navbar.tsx\",\n                    lineNumber: 33,\n                    columnNumber: 9\n                }, undefined)\n            }, void 0, false, {\n                fileName: \"/Users/admin/repos/LoginMongo2/loginmongo2/src/components/Navbar/Navbar.tsx\",\n                lineNumber: 32,\n                columnNumber: 7\n            }, undefined)\n        ]\n    }, void 0, true, {\n        fileName: \"/Users/admin/repos/LoginMongo2/loginmongo2/src/components/Navbar/Navbar.tsx\",\n        lineNumber: 14,\n        columnNumber: 5\n    }, undefined);\n};\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Navbar);\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvY29tcG9uZW50cy9OYXZiYXIvTmF2YmFyLnRzeCIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7QUFBNkI7QUFDWTtBQUNBO0FBRXpDLE1BQU1JLFNBQVM7SUFDYixNQUFNLEVBQUVDLFVBQVUsRUFBRUMsUUFBUSxFQUFFLEdBQUdILHFEQUFPQTtJQUV4Q0QsZ0RBQVNBLENBQUM7UUFDUkssUUFBUUMsR0FBRyxDQUFDLHNCQUFzQkg7UUFDbENFLFFBQVFDLEdBQUcsQ0FBQyxvQkFBb0JGO0lBQ2xDLEdBQUc7UUFBQ0Q7UUFBWUM7S0FBUztJQUV6QixxQkFDRSw4REFBQ0c7UUFBR0MsSUFBRzs7WUFDSkwsMkJBQ0M7O2tDQUNFLDhEQUFDTTs7NEJBQUc7NEJBQVVMOzs7Ozs7O2tDQUNkLDhEQUFDSztrQ0FDQyw0RUFBQ1gsa0RBQUlBOzRCQUFDWSxNQUFNO3NDQUFhOzs7Ozs7Ozs7Ozs7NkNBSTdCOztrQ0FDRSw4REFBQ0Q7a0NBQ0MsNEVBQUNYLGtEQUFJQTs0QkFBQ1ksTUFBTTtzQ0FBVTs7Ozs7Ozs7Ozs7a0NBRXhCLDhEQUFDRDtrQ0FDQyw0RUFBQ1gsa0RBQUlBOzRCQUFDWSxNQUFNO3NDQUFhOzs7Ozs7Ozs7Ozs7OzBCQUkvQiw4REFBQ0Q7MEJBQ0MsNEVBQUNYLGtEQUFJQTtvQkFBQ1ksTUFBTTs4QkFBSzs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFJekI7QUFFQSxpRUFBZVIsTUFBTUEsRUFBQyIsInNvdXJjZXMiOlsid2VicGFjazovL2xvZ2lubW9uZ28yLy4vc3JjL2NvbXBvbmVudHMvTmF2YmFyL05hdmJhci50c3g/NmNiMCJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgTGluayBmcm9tIFwibmV4dC9saW5rXCI7XG5pbXBvcnQgUmVhY3QsIHsgdXNlRWZmZWN0IH0gZnJvbSBcInJlYWN0XCI7XG5pbXBvcnQgeyB1c2VBdXRoIH0gZnJvbSBcIi4uL0F1dGhDb250ZXh0XCI7XG5cbmNvbnN0IE5hdmJhciA9ICgpID0+IHtcbiAgY29uc3QgeyBpc0xvZ2dlZEluLCB1c2VybmFtZSB9ID0gdXNlQXV0aCgpO1xuXG4gIHVzZUVmZmVjdCgoKSA9PiB7XG4gICAgY29uc29sZS5sb2coXCJOYXZiYXIgaXNMb2dnZWRJbjpcIiwgaXNMb2dnZWRJbik7XG4gICAgY29uc29sZS5sb2coXCJOYXZiYXIgdXNlcm5hbWU6XCIsIHVzZXJuYW1lKTtcbiAgfSwgW2lzTG9nZ2VkSW4sIHVzZXJuYW1lXSk7XG5cbiAgcmV0dXJuIChcbiAgICA8dWwgaWQ9XCJoZWFkZXJcIj5cbiAgICAgIHtpc0xvZ2dlZEluID8gKFxuICAgICAgICA8PlxuICAgICAgICAgIDxsaT5XZWxjb21lLCB7dXNlcm5hbWV9PC9saT5cbiAgICAgICAgICA8bGk+XG4gICAgICAgICAgICA8TGluayBocmVmPXtcIi9SZWdpc3RlclwifT5SZWdpc3RlcjwvTGluaz5cbiAgICAgICAgICA8L2xpPlxuICAgICAgICA8Lz5cbiAgICAgICkgOiAoXG4gICAgICAgIDw+XG4gICAgICAgICAgPGxpPlxuICAgICAgICAgICAgPExpbmsgaHJlZj17XCIvTG9naW5cIn0+TG9naW48L0xpbms+XG4gICAgICAgICAgPC9saT5cbiAgICAgICAgICA8bGk+XG4gICAgICAgICAgICA8TGluayBocmVmPXtcIi9SZWdpc3RlclwifT5SZWdpc3RlcjwvTGluaz5cbiAgICAgICAgICA8L2xpPlxuICAgICAgICA8Lz5cbiAgICAgICl9XG4gICAgICA8bGk+XG4gICAgICAgIDxMaW5rIGhyZWY9e1wiL1wifT5Ib21lPC9MaW5rPlxuICAgICAgPC9saT5cbiAgICA8L3VsPlxuICApO1xufTtcblxuZXhwb3J0IGRlZmF1bHQgTmF2YmFyO1xuIl0sIm5hbWVzIjpbIkxpbmsiLCJSZWFjdCIsInVzZUVmZmVjdCIsInVzZUF1dGgiLCJOYXZiYXIiLCJpc0xvZ2dlZEluIiwidXNlcm5hbWUiLCJjb25zb2xlIiwibG9nIiwidWwiLCJpZCIsImxpIiwiaHJlZiJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./src/components/Navbar/Navbar.tsx\n");

/***/ }),

/***/ "./src/pages/_app.tsx":
/*!****************************!*\
  !*** ./src/pages/_app.tsx ***!
  \****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ App)\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"react/jsx-dev-runtime\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _components_Layout__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @/components/Layout */ \"./src/components/Layout.tsx\");\n/* harmony import */ var _styles_globals_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @/styles/globals.css */ \"./src/styles/globals.css\");\n/* harmony import */ var _styles_globals_css__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_styles_globals_css__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _components_Navbar_styles_css__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../components/Navbar/styles.css */ \"./src/components/Navbar/styles.css\");\n/* harmony import */ var _components_Navbar_styles_css__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_components_Navbar_styles_css__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _components_AuthContext__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../components/AuthContext */ \"./src/components/AuthContext.js\");\n\n\n\n\n\nfunction App({ Component, pageProps }) {\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_AuthContext__WEBPACK_IMPORTED_MODULE_4__.AuthProvider, {\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_Layout__WEBPACK_IMPORTED_MODULE_1__[\"default\"], {\n            children: [\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(Component, {\n                    ...pageProps\n                }, void 0, false, {\n                    fileName: \"/Users/admin/repos/LoginMongo2/loginmongo2/src/pages/_app.tsx\",\n                    lineNumber: 11,\n                    columnNumber: 9\n                }, this),\n                \";\"\n            ]\n        }, void 0, true, {\n            fileName: \"/Users/admin/repos/LoginMongo2/loginmongo2/src/pages/_app.tsx\",\n            lineNumber: 10,\n            columnNumber: 7\n        }, this)\n    }, void 0, false, {\n        fileName: \"/Users/admin/repos/LoginMongo2/loginmongo2/src/pages/_app.tsx\",\n        lineNumber: 9,\n        columnNumber: 5\n    }, this);\n}\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvcGFnZXMvX2FwcC50c3giLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7OztBQUF5QztBQUNYO0FBRVc7QUFDZ0I7QUFFMUMsU0FBU0UsSUFBSSxFQUFFQyxTQUFTLEVBQUVDLFNBQVMsRUFBWTtJQUM1RCxxQkFDRSw4REFBQ0gsaUVBQVlBO2tCQUNYLDRFQUFDRCwwREFBTUE7OzhCQUNMLDhEQUFDRztvQkFBVyxHQUFHQyxTQUFTOzs7Ozs7Z0JBQUk7Ozs7Ozs7Ozs7OztBQUlwQyIsInNvdXJjZXMiOlsid2VicGFjazovL2xvZ2lubW9uZ28yLy4vc3JjL3BhZ2VzL19hcHAudHN4P2Y5ZDYiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IExheW91dCBmcm9tIFwiQC9jb21wb25lbnRzL0xheW91dFwiO1xuaW1wb3J0IFwiQC9zdHlsZXMvZ2xvYmFscy5jc3NcIjtcbmltcG9ydCB0eXBlIHsgQXBwUHJvcHMgfSBmcm9tIFwibmV4dC9hcHBcIjtcbmltcG9ydCBcIi4uL2NvbXBvbmVudHMvTmF2YmFyL3N0eWxlcy5jc3NcIjtcbmltcG9ydCB7IEF1dGhQcm92aWRlciB9IGZyb20gXCIuLi9jb21wb25lbnRzL0F1dGhDb250ZXh0XCI7XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIEFwcCh7IENvbXBvbmVudCwgcGFnZVByb3BzIH06IEFwcFByb3BzKSB7XG4gIHJldHVybiAoXG4gICAgPEF1dGhQcm92aWRlcj5cbiAgICAgIDxMYXlvdXQ+XG4gICAgICAgIDxDb21wb25lbnQgey4uLnBhZ2VQcm9wc30gLz47XG4gICAgICA8L0xheW91dD5cbiAgICA8L0F1dGhQcm92aWRlcj5cbiAgKTtcbn1cbiJdLCJuYW1lcyI6WyJMYXlvdXQiLCJBdXRoUHJvdmlkZXIiLCJBcHAiLCJDb21wb25lbnQiLCJwYWdlUHJvcHMiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./src/pages/_app.tsx\n");

/***/ }),

/***/ "./src/components/Navbar/styles.css":
/*!******************************************!*\
  !*** ./src/components/Navbar/styles.css ***!
  \******************************************/
/***/ (() => {



/***/ }),

/***/ "./src/styles/globals.css":
/*!********************************!*\
  !*** ./src/styles/globals.css ***!
  \********************************/
/***/ (() => {



/***/ }),

/***/ "next/dist/compiled/next-server/pages.runtime.dev.js":
/*!**********************************************************************!*\
  !*** external "next/dist/compiled/next-server/pages.runtime.dev.js" ***!
  \**********************************************************************/
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/compiled/next-server/pages.runtime.dev.js");

/***/ }),

/***/ "next/head":
/*!****************************!*\
  !*** external "next/head" ***!
  \****************************/
/***/ ((module) => {

"use strict";
module.exports = require("next/head");

/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/***/ ((module) => {

"use strict";
module.exports = require("react");

/***/ }),

/***/ "react/jsx-dev-runtime":
/*!****************************************!*\
  !*** external "react/jsx-dev-runtime" ***!
  \****************************************/
/***/ ((module) => {

"use strict";
module.exports = require("react/jsx-dev-runtime");

/***/ }),

/***/ "react/jsx-runtime":
/*!************************************!*\
  !*** external "react/jsx-runtime" ***!
  \************************************/
/***/ ((module) => {

"use strict";
module.exports = require("react/jsx-runtime");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = __webpack_require__.X(0, ["vendor-chunks/next","vendor-chunks/@swc"], () => (__webpack_exec__("./src/pages/_app.tsx")));
module.exports = __webpack_exports__;

})();