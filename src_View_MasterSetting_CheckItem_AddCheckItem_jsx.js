"use strict";
/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
(self["webpackChunkhaier_frontend"] = self["webpackChunkhaier_frontend"] || []).push([["src_View_MasterSetting_CheckItem_AddCheckItem_jsx"],{

/***/ "./src/View/MasterSetting/CheckItem/AddCheckItem.jsx":
/*!***********************************************************!*\
  !*** ./src/View/MasterSetting/CheckItem/AddCheckItem.jsx ***!
  \***********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ AddCheckList)\n/* harmony export */ });\n/* harmony import */ var _coreui_react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @coreui/react */ \"./node_modules/@coreui/react/dist/index.es.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var _components_Layout_AuthLayout__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../components/Layout/AuthLayout */ \"./src/components/Layout/AuthLayout.jsx\");\n/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react-router-dom */ \"./node_modules/react-router-dom/esm/react-router-dom.js\");\n/* harmony import */ var _assets_img_like_png__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../assets/img/like.png */ \"./src/assets/img/like.png\");\nfunction _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }\n\nfunction _nonIterableRest() { throw new TypeError(\"Invalid attempt to destructure non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.\"); }\n\nfunction _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === \"string\") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === \"Object\" && o.constructor) n = o.constructor.name; if (n === \"Map\" || n === \"Set\") return Array.from(o); if (n === \"Arguments\" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }\n\nfunction _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }\n\nfunction _iterableToArrayLimit(arr, i) { var _i = arr == null ? null : typeof Symbol !== \"undefined\" && arr[Symbol.iterator] || arr[\"@@iterator\"]; if (_i == null) return; var _arr = []; var _n = true; var _d = false; var _s, _e; try { for (_i = _i.call(arr); !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i[\"return\"] != null) _i[\"return\"](); } finally { if (_d) throw _e; } } return _arr; }\n\nfunction _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }\n\n\n\n\n\n\nfunction AddCheckList() {\n  var _useState = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false),\n      _useState2 = _slicedToArray(_useState, 2),\n      successfully = _useState2[0],\n      setSuccessfully = _useState2[1];\n\n  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__.createElement(_components_Layout_AuthLayout__WEBPACK_IMPORTED_MODULE_2__[\"default\"], null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__.createElement(_coreui_react__WEBPACK_IMPORTED_MODULE_0__.CContainer, {\n    fluid: true\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__.createElement(_coreui_react__WEBPACK_IMPORTED_MODULE_0__.CRow, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__.createElement(_coreui_react__WEBPACK_IMPORTED_MODULE_0__.CCol, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__.createElement(\"h6\", {\n    className: \"fs-20 outfit-medium text-black\"\n  }, \"Add Check Item\"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__.createElement(\"p\", {\n    className: \"fs-14 outfit-regular text-grey-dark\"\n  }, \"System Setting \", '>', \" Check Item \", '>', \" Add Check Item\"))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__.createElement(_coreui_react__WEBPACK_IMPORTED_MODULE_0__.CRow, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__.createElement(_coreui_react__WEBPACK_IMPORTED_MODULE_0__.CCol, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__.createElement(_coreui_react__WEBPACK_IMPORTED_MODULE_0__.CCard, {\n    className: \"px-3 py-3 mb-5\"\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__.createElement(_coreui_react__WEBPACK_IMPORTED_MODULE_0__.CCardBody, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__.createElement(\"div\", {\n    className: \"addEmployee-select-form\"\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__.createElement(_coreui_react__WEBPACK_IMPORTED_MODULE_0__.CForm, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__.createElement(_coreui_react__WEBPACK_IMPORTED_MODULE_0__.CRow, {\n    className: \" mb-2\"\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__.createElement(_coreui_react__WEBPACK_IMPORTED_MODULE_0__.CCol, {\n    md: 6\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__.createElement(_coreui_react__WEBPACK_IMPORTED_MODULE_0__.CFormLabel, {\n    className: \"fs-12 outfit-regular text-gray-dark \"\n  }, \"Check Item Name\"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__.createElement(_coreui_react__WEBPACK_IMPORTED_MODULE_0__.CFormSelect, {\n    id: \"inputState\"\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__.createElement(\"option\", null, \"Select\"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__.createElement(\"option\", null, \"...\"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__.createElement(\"option\", null, \"...\")))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__.createElement(\"div\", {\n    className: \"d-flex justify-content-end gap-3\"\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_4__.Link, {\n    to: \"/checkitem\"\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__.createElement(_coreui_react__WEBPACK_IMPORTED_MODULE_0__.CButton, {\n    className: \"border bg-white text-black px-3\"\n  }, \"Back\")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__.createElement(_coreui_react__WEBPACK_IMPORTED_MODULE_0__.CButton, {\n    className: \"btn bg-primary px-4\",\n    onClick: function onClick() {\n      return setSuccessfully(!successfully);\n    }\n  }, \"Save\")))))))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__.createElement(_coreui_react__WEBPACK_IMPORTED_MODULE_0__.CRow, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__.createElement(_coreui_react__WEBPACK_IMPORTED_MODULE_0__.CModal, {\n    alignment: \"center\",\n    visible: successfully,\n    onClose: function onClose() {\n      return setSuccessfully(false);\n    },\n    backdrop: \"static\"\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__.createElement(_coreui_react__WEBPACK_IMPORTED_MODULE_0__.CModalBody, {\n    className: \"text-center p-4\"\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__.createElement(\"img\", {\n    src: _assets_img_like_png__WEBPACK_IMPORTED_MODULE_3__,\n    alt: \"\"\n  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__.createElement(\"p\", {\n    className: \"m-0 py-2 mt-3 fs-18 outfit-semiBold\"\n  }, \"Check Item Added\"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__.createElement(\"p\", {\n    className: \"m-0 fs-14 outfit-regular\"\n  }, \"Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore\"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_4__.Link, {\n    to: \"/checkitem\"\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__.createElement(_coreui_react__WEBPACK_IMPORTED_MODULE_0__.CButton, {\n    className: \"py-2 bg-primary px-5 my-3\",\n    onClick: function onClick() {\n      return setSuccessfully(false);\n    }\n  }, \"Go Back\")))))));\n}\n\n//# sourceURL=webpack://haier-frontend/./src/View/MasterSetting/CheckItem/AddCheckItem.jsx?");

/***/ }),

/***/ "./src/assets/img/like.png":
/*!*********************************!*\
  !*** ./src/assets/img/like.png ***!
  \*********************************/
/***/ ((module) => {

eval("module.exports = \"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAGYAAABmCAYAAAA53+RiAAAABHNCSVQICAgIfAhkiAAADzRJREFUeF7tnQl4VNUVx895bzIhQMAEZBFFREhQasmGpYhYXLBGaQAlbSFqXUq2oqKtpXzSDtrWov26Wlv4Wne0RqsBW5e2VgSkKAFxAUJk08oisklCQjLz3un/DgZnMpPMTGaSeZm8+33zJTPvvnPvPb+7L+cyJZoT4pEbnhulmXyvxpxvEu8TlkV1oj+8J29KfcySKy4toyq7UGNyMdFwk2gtGe7bt770/gZyufA1OgeZieUy1lQM0ZKdfyShK5lYU6kTkQbRqHxr7tSHY5XaUesrLyfhZ6DA1GaZwrSOdKOoOmt6TbThJByYzKplk0DjEShmqK9yUJA+bNTcF+3MufrDaJV21tonByY7er0O5WX6yRI5ZGp8y9bcgqXRhpFwYEauq7xUZ34ECRviDwZliOTx6ryp10ertHPWV/5UhOcjDH/9MR0WobnVeQWPRhtGwoEZXrV8qJPkz1DMpQGKQ45GlTazOnfqK+1VXOaGZXls0FJmymgpA+Tf5SR91pYxV73fXvnN7yUcGJWwjHWV16Hh/z0S18e/1IiJcvO8u8ks237B9P2RKu/0NRUpvR3OX6DlKkVhSfJ7nwnCaR6qsfsilRvMf0KCGbH2iT4OvfcTzDwlSK4+SIbcUn3+xr8SR9Z7GrX++VwSrRJKOz2I3A21hjF591emH7TBtKGBjKoXRmlibASc5IC2RuTvxx1y3a7saUciUWJmVeUf0NMrDVJFehp1/uqOnIKqSOS15TchS0xzgtFDuxsJVI203gLO5kYPXbxzXMEnkSgyc/2yNzSh8YHVI/+5emxBcSSyQvlNaDBoE4b0djqXIZfn+iuCXzzWUFv00YWzDodSkO/zUW8tW8I634yB0Um9CUkNsaBDMW19JLJC+U1oMPSay5HRJ+tqFr7fp134Hwacd2zd2fQ8FRYaoRTk+zzjreVjNU3UIPVcVZ2hF3YQYO5u7Nd3ya6zJh2PRFYov4kNRqV+U4VzRH3yaJ3pKiKTTJNe+GCXezOgNIVSTsBzNQ2zPjdDI/NKPOtHmvHC8bS0t2MNRYWb+GAi1r41XrDBWINDQCxsMDYY62lAKmboNHR0JnnMgeSROnI31fBliz6zQky7XYnBJCPTG3cOJulxLabty4jZdxbajYnOLaTRcmpy/408xs54gep+YF5fcB6xfi/wTEbJ8J/v8i8qh/D1GTKMR6n3J1WctwTQOs91KzDyrx/2peSUxYAyPQSUZgIe/LMVE5+/oH2bnuLCZyIa90SDsXuBWfljjD+4EtWXIwKlqXWcejJ5Nl/kejKC96Ly2r3ArPrJ0wBT2E6NqapsOk1w/QNrMYDVsa5rgEGDPeLtiv7a8RRnMHU0OpPMD3esPUiFrjZH87LKtQ3vn91ulQq9RwYV8iRXdRgy+JyVfxtkOJzefQctXZOjwdj14ub9rW3csDyY0ZteTjfrG29GdYLG2n8KvzmxyL5YozJ3o4q6F0vH7wVThCyenUTnnnYUz3qEodTWvDShrPyM6g4u4vzfN7bmaUTV82fros0HkRHwExQM4mygrVvj8Xge3Dbu6o9byrI2mIoKPWNY0m2apv0MEXcGrIP4pEbBQQ1Tjc0Ql23NKdjTMqEoLWopWOX0aNKs2pv1ZBoz+aKffhAMzOmbKtJ7NySjLZLLmnfpBM0o8ICIeDCh+sBhZ8qCT8ZcfszXXzSRjCLjhffqwFce65WW3vc11Oljw3tD6tBtmluTN1Wt+fs5Wb1gJoke9e4VCHVjEXkGT7x7WbA4jXqrcgrQL8YC3eBw4gwwNR6W/G1507Z3HTDvvNIrzd2wFjnvS+EkEn6OYQA5D4tWDwQpMQ/htxvClNO2N5Hf8MSFc4N5ylxXeQ0yklrpHBBOWIjvR+zQLt2SPcWvBFq6xFBVVVKm7L4PCb21rWqsWQHIfXtNXb+iJmfKO75KkSqMXxpS3sRv/vvAwtFccD+v8oWuS4M9Uu2Lg/WnWaTF4lxQQYgyPV3nbiz/eHyhGtCedNYGg2gOr6oYmiTOB5AD8wHIb4m4RVKPGGLOrBk77aWA0vL6XfmkOZ7A72ntZ+GrNanmCQvPaU0WqrPxpLHatHFqa35UY4Vnb1KTzK4eH9hhsTwYb8KqFieN8AwcqescXLE6NRpNtTXbxhWpXpefkwqXkwbRL1HvY8sRRTKwbIOh7OQLFw5vEzLCHXHGeV/SHY6UYP7ENOrMgz2qt+XnB+3ddQ0wUWRzWen6MqCo5eCcKMS0oA0wE0OAiTKwhAZzYuwycA42yajudjTjlxZg6AOe6O1+d5hLbDCvuQah8loB7cWq0T8BgmkjT3BldxgVbxAJ6ryl5ZzB92E24LaYJ1FkBaqySTGX6yMwccGsdH0L2e4vSGvPDlDgU+guz+wAuSdFJiQYeWPBWDJ11T3umHZA6F60MfNtMBFoQFbOH0zsVCXl6x1YVV+PEvNYBNGK2GtClRhZ40rHtOBCtCtqH3Fby8YRK8rnhaOYy74Ci2ZrohES6t2EASOr70wl6elCgtVAMuigLpQywnsuVW3NLocnI7SvhAAjq+alkST/CtMgmEGmoItpoVURpg/BabW6Q3dgPSZgliFMCWF56/JgPm9TFiG138YnRlMurequgdicyxPuXhyWdqPw1KXByBuuLKwD3oVucUEnQEEQshO70gv4onuCrpJGwSHg1S4JRl5z9SDNvBrH+O8AlKwO7H21VNhTlLLn+s7YY9blwABKf/S37kRb8h1ordVp9Vjm3s9lCY5dXMAX3PPfDpDddUsMgDjQgqipdrVsPKETS4lSGs4nmcuxnDy1M6CoML4oMTi+dvGTR4aKYQzCenVbC1KxiZspHlPnPSuK+gXsEPENwAukZ//hZDbMIHHfgWN2sVnsiigV7KGk5DJKSt0U0Wt+nrEtjTXs7DSOoZ3azzm3fNqWrBNgXKJNGnbgKs2BTdYkI7F/o6N7NyoTupEtPkD98Ov/FPX7Z7BIyqY/9Ca3NgvxKUJizsc7HdsVblVTAMPa3hOn+9rrvK8izXwYmesjpGUdSuEyzi3fEkyiF8ykR/aO1h1OdAHlq/gadB9Ue6MT8j3h1cfdnutX3zhwR7Nfcbk0mjrwMgC5C8pQGzH6dnLVFTLaUXsQUmc2awDpftq+r4JbbFb0grnk8QNTQfJh7Ms6JeoAIxSAzQj78Erpq9f2rxQsIVOK50xqSlqATPJN/O53Rj9C0V3DuxeQzKXsfUvYxyCEF8zFj+2fgU11avm1V6enhunTQXrd/MdHvvg+afo0hK+M8Azs9HjEM0AvHHM2ZZcoax7eOi/uYHpo7oYbBmx6Z3r/bQNQdbW9wSGeyuv4sD/GYLmA84o3WAJMH0eTzBn0Nn2t78ddbkwVU1YCLERLaNu/56hzOHEvMX30RpozeKMCE9N0dklhQtgXTUUoNdU2GEsRlN2IzmzOLnnRBmMlMCJHMcdQzrnoBMS7V2ZXZX45A0cxzO9xdqkyHRnf7rINxgeMyEGMJ0s5u1hZp7XBWKY2Y8EJaeNGzi5fY4OxDBU1gy2vULJjFo+++ZANxjpgGjHcv5Wzir3L1jYYa4BR0zCrqOHY13n87Q02GGtAUbGoRTU2jnNKNjdHyS4xVoCDuwew2HIXZ5X8ygZjBSC+cRA5QJpM5qzSt+2qzEpw1CSmxg9S5Z7bGNec2FWZleAQYQeOORMj/102GGuB2Y4B5k2cU6auQLFH/pZhw7IPmz6Keczs5TYYy1Dxjir3odtcgml/WFe3S4yF0MgOnO+5iceWrrDBWAgLSsta0vWZPOa7O20w1gFjkCkPUU5JsbIgaIOxDpgD5PYU8Pnl3iOENhgrgGFqxHbZeyir9OfN9jZtMPEHAyM/8jvSahfymB+ctPJng4kvmFoEv4icnt/y6PI636jYYOILZiNmyK7DPrKAo4M2mLiCwXQ/0Y8oK/0BZv/bn2wwcQWjApelpJtz+Mtlfvel2WDiD+ZNchgz+Lzy/9ltTNxh+ERAaAtu3LiKx5adPLhlj2OsAEjoXRh1KFBrMHaJsQKQk3GQf5HTuA7dZXWy7qSz25i4Q5LfkoEr6POK62MGpleyg05N7UHJSToddxv06dEGqm+K7O6bbr13WegAemWl2Lb0bMv80e4Sk+LUadipqeR0fGESoBFwduw/Sk0eXE4RpuvGYJSSlpNDK+Hzvhtw53O7wQzqm0ID8MFhTj8Euw/V0YHaVm/wCMDVjcHshwmUAh5TtjZYHm43mCFpvahfanIAmE8+q6d9R7y7PMNy3RIMUx3WXiajCmvVLo0NJqzsE0tPshlWPko4t2xVW1JtMLHUeTiymF4lD12LXhhMoLTubDDhKDOmfqQRI/1vcF55UPs5zUHZYGKq9LCF3YfjfD+0S0zY+uosj/J37B2bYmkwfWGA4XuDlWUMdcS9mziRVeiRTbQ0mHRHA90KMOP7tNkWJhYxoZc4pzjf0mBOc9bSj4aso1E9/daJEgtEYGp+jTbmdkuDGdNrP/3kjP9Sqq7um+4WrgkHlK7hMSUvWBrMt0+tfu/GAZuUOazOt5UWj3ygtsEmGYUtVyxbRiWu3WXcNfhu2eB3pk1Pr8nE8YNZiNwM7EGMk93LzqAk2KLE8+jI3sW4r7nNKsIL5pInDl6D6WdlvyTsXBvNXNnnVw3uN9z6uBU3pO1qVol8+GAaHdJuwvciTMKdDZMEyvSiMpzqP1PaGTqMfRhYD5HnqM4s5gv9N14EC8qb4ElLD+XrpvEIlBG2gen2g2EPdkxvhjXhef8pSg+4s1LFx2uJ/JTTcrDkejGJlgfjrWfAjhfuhaH+eNxR14/EHsUXEuuxk/9lMo/P5bzbYEE2tDtRlS09fCabnj/hEtDJSHxYVmTbB4aPwS7HsyLGEnP7gLdWuGA2N4STKldP0gYNI01DOyTDkEDc+M1n4bUz8f/pyEzKDnNYcQ4VVgc8N1DqayD3L/RZ7aM86ftYGAvPnagiYE73a8NvOVdjmQ9bmZd/XoW0KWFIes/k9NQeOkxr+lUzn9Yed+89XN/U/DJOFNQLyzboboVhynMePWn76lmntLtvDEuzPanR7I2bx3qSics/2YDlWzkTsRiKeA8BwAGYUu8HYKfgeyqe9cIz3CfjvXJereqpjwJ5wrY0cgn8qlTgGAS+q78nf/fe7opf8VzEhL/QK4DKH9ERyIE9ZX6Z2L2CPEk7MWkJi9jhu/8Dng9KwRK7DwQAAAAASUVORK5CYII=\";\n\n//# sourceURL=webpack://haier-frontend/./src/assets/img/like.png?");

/***/ })

}]);